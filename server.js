// Serveur Express — Interface web pour RGAA Audit
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- État du scan ---
let scanRunning = false;
let scanClients = []; // SSE clients

// --- API : Configuration ---
app.get('/api/config', (req, res) => {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
    res.json(cfg);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/config', (req, res) => {
  try {
    fs.writeFileSync(path.join(__dirname, 'config.json'), JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- API : Scan ---
app.post('/api/scan', async (req, res) => {
  if (scanRunning) return res.status(409).json({ error: 'Un scan est déjà en cours' });
  scanRunning = true;

  const config = req.body;
  if (config && config.startUrl) {
    fs.writeFileSync(path.join(__dirname, 'config.json'), JSON.stringify(config, null, 2));
  }

  res.json({ ok: true, message: 'Scan démarré' });

  try {
    const { runScan } = await import('./scripts/scan.js');
    const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
    await runScan(cfg, (msg) => {
      for (const client of scanClients) {
        client.write(`data: ${JSON.stringify(msg)}\n\n`);
      }
    });
    const { generateFixes } = await import('./scripts/ai-fix.js');
    await generateFixes(undefined, { callAi: false });
    for (const client of scanClients) {
      client.write(`data: ${JSON.stringify({ type: 'status', data: 'Prompts actualisés' })}\n\n`);
    }
  } catch (e) {
    for (const client of scanClients) {
      client.write(`data: ${JSON.stringify({ type: 'error', data: e.message })}\n\n`);
    }
  } finally {
    scanRunning = false;
    for (const client of scanClients) {
      client.write(`data: ${JSON.stringify({ type: 'finished' })}\n\n`);
    }
  }
});

app.get('/api/scan/status', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write(`data: ${JSON.stringify({ type: 'connected', data: { scanning: scanRunning } })}\n\n`);
  scanClients.push(res);
  req.on('close', () => {
    scanClients = scanClients.filter(c => c !== res);
  });
});

// --- API : Résultats ---
app.get('/api/results', (req, res) => {
  const resultsPath = path.join(__dirname, 'results', 'results.json');
  if (!fs.existsSync(resultsPath)) return res.json(null);
  try {
    res.json(JSON.parse(fs.readFileSync(resultsPath, 'utf8')));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- API : Rapport ---
app.get('/api/report', async (req, res) => {
  try {
    const mod = await import('./scripts/report.js');
    const report = mod.generateReport();
    res.json(report);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- API : Corrections IA ---
app.post('/api/fix', async (req, res) => {
  try {
    const mod = await import('./scripts/ai-fix.js');
    const result = await mod.generateFixes(req.body?.apiKey);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/fix/prompts', async (req, res) => {
  const promptsDir = path.join(__dirname, 'results', 'prompts');
  const resultsPath = path.join(__dirname, 'results', 'results.json');
  
  if (!fs.existsSync(promptsDir) || fs.readdirSync(promptsDir).filter(f => f.startsWith('page-')).length === 0) {
    if (fs.existsSync(resultsPath)) {
      try {
        const mod = await import('./scripts/ai-fix.js');
        await mod.generateFixes();
      } catch (e) {
        console.warn('Auto-generate prompts warning:', e.message);
      }
    }
  }

  if (!fs.existsSync(promptsDir)) return res.json([]);
  const allFiles = fs.readdirSync(promptsDir).filter(f => f.endsWith('.md'));
  const files = allFiles.sort((a, b) => {
    if (a === 'global-prompt.md') return -1;
    if (b === 'global-prompt.md') return 1;
    return a.localeCompare(b, undefined, { numeric: true });
  });
  const prompts = files.map(f => ({
    file: f,
    isGlobal: f === 'global-prompt.md',
    content: fs.readFileSync(path.join(promptsDir, f), 'utf8')
  }));
  res.json(prompts);
});

app.get('/api/fix/responses', (req, res) => {
  const fixesDir = path.join(__dirname, 'results', 'fixes');
  if (!fs.existsSync(fixesDir)) return res.json([]);
  const files = fs.readdirSync(fixesDir).filter(f => f.endsWith('.md')).sort();
  const fixes = files.map(f => ({
    file: f,
    content: fs.readFileSync(path.join(fixesDir, f), 'utf8')
  }));
  res.json(fixes);
});

// --- API : Documents légaux ---
app.post('/api/legal', async (req, res) => {
  try {
    const mod = await import('./scripts/legal.js');
    const docs = mod.generateLegalDocs(req.body);
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/legal/documents', (req, res) => {
  const legalDir = path.join(__dirname, 'results', 'legal');
  if (!fs.existsSync(legalDir)) return res.json([]);
  const files = fs.readdirSync(legalDir).filter(f => f.endsWith('.md'));
  const docs = files.map(f => ({
    file: f,
    content: fs.readFileSync(path.join(legalDir, f), 'utf8')
  }));
  res.json(docs);
});

// --- API : Checklist ---
app.get('/api/checklist', (req, res) => {
  const checklistMd = fs.readFileSync(path.join(__dirname, 'manual-tests', 'checklist.md'), 'utf8');
  const statePath = path.join(__dirname, 'results', 'checklist-state.json');
  const state = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, 'utf8')) : {};
  res.json({ markdown: checklistMd, state });
});

app.put('/api/checklist', (req, res) => {
  const statePath = path.join(__dirname, 'results', 'checklist-state.json');
  fs.mkdirSync(path.join(__dirname, 'results'), { recursive: true });
  fs.writeFileSync(statePath, JSON.stringify(req.body, null, 2));
  res.json({ ok: true });
});

// --- API : Données RGAA ---
app.get('/api/rgaa', (req, res) => {
  try {
    const criteria = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'rgaa-criteria.json'), 'utf8'));
    const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'axe-to-rgaa.json'), 'utf8'));
    res.json({ criteria, mapping });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀  RGAA Audit — Interface web`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`\n   Ctrl+C pour arrêter\n`);
});
