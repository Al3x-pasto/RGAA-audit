// 1. SCAN : crawler Playwright + injection axe-core -> results/results.json
import { chromium } from 'playwright';
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const req = createRequire(import.meta.url);
const axeSource = fs.readFileSync(req.resolve('axe-core/axe.min.js'), 'utf8');

/**
 * Lance un scan d'accessibilité sur un site web.
 * @param {object} config - Configuration (startUrl, maxPages, axeTags, sameOriginOnly)
 * @param {function} [onProgress] - Callback (msg) pour le suivi en temps réel
 * @returns {Promise<object>} Résultats du scan
 */
export async function runScan(config, onProgress = () => {}) {
  const cfg = config || JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
  const startUrl = cfg.startUrl;
  const origin = new URL(startUrl).origin;

  const resultsDir = path.join(root, 'results');
  const htmlDir = path.join(resultsDir, 'html');
  fs.mkdirSync(htmlDir, { recursive: true });

  const queue = [startUrl];
  const seen = new Set();
  const pages = [];

  onProgress({ type: 'status', data: 'Lancement du navigateur…' });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ locale: 'fr-FR' });
  const page = await ctx.newPage();

  try {
    while (queue.length && pages.length < cfg.maxPages) {
      const url = queue.shift();
      const key = url.split('#')[0];
      if (seen.has(key)) continue;
      seen.add(key);

      onProgress({ type: 'scanning', data: { url, current: pages.length + 1, max: cfg.maxPages } });

      try {
        const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        if (!resp || !resp.ok()) {
          onProgress({ type: 'warn', data: `Skip ${url} (${resp?.status()})` });
          continue;
        }
        await page.addScriptTag({ content: axeSource });
        const axeResult = await page.evaluate(
          (tags) => axe.run(document, { runOnly: { type: 'tag', values: tags } }),
          cfg.axeTags
        );
        const id = pages.length + 1;
        fs.writeFileSync(path.join(htmlDir, `page-${id}.html`), await page.content());
        const pageResult = {
          id, url, title: await page.title(),
          violations: axeResult.violations.map(v => ({
            id: v.id, impact: v.impact, help: v.help, description: v.description,
            helpUrl: v.helpUrl, tags: v.tags,
            nodes: v.nodes.map(n => ({ target: n.target, html: n.html, failure: n.failureSummary }))
          })),
          passes: axeResult.passes.length,
          incomplete: axeResult.incomplete.map(v => ({ id: v.id, help: v.help, nodes: v.nodes.length }))
        };
        pages.push(pageResult);
        onProgress({ type: 'page_done', data: { id, url, violations: axeResult.violations.length, total: pages.length } });

        // Découverte de liens
        const links = await page.$$eval('a[href]', as => as.map(a => a.href));
        for (const l of links) {
          try {
            const u = new URL(l);
            if (!/^https?:$/.test(u.protocol)) continue;
            if (cfg.sameOriginOnly && u.origin !== origin) continue;
            if (/\.(pdf|zip|png|jpe?g|gif|svg|docx?|xlsx?|mp4)$/i.test(u.pathname)) continue;
            if (!seen.has(u.href.split('#')[0])) queue.push(u.href);
          } catch {}
        }
      } catch (e) {
        onProgress({ type: 'warn', data: `Erreur ${url}: ${e.message}` });
      }
    }
  } finally {
    await browser.close();
  }

  const results = { date: new Date().toISOString(), startUrl, pages };
  fs.writeFileSync(path.join(resultsDir, 'results.json'), JSON.stringify(results, null, 2));
  onProgress({ type: 'done', data: { totalPages: pages.length } });
  return results;
}

// Exécution CLI directe
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
  runScan(cfg, (msg) => console.log(`[scan] ${msg.type}:`, JSON.stringify(msg.data)))
    .then(() => console.log('Scan terminé'))
    .catch(e => { console.error(e); process.exit(1); });
}
