// 3. CORRECTIONS IA : prompt global pour tout le site + prompts par page
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Génère un prompt global pour l'ensemble du site ainsi que les prompts détaillés par page.
 * @param {string} [apiKey] - Clé API Mistral (optionnelle)
 * @returns {Promise<object>} Prompts générés (global + pages)
 */
export async function generateFixes(apiKey) {
  const data = JSON.parse(fs.readFileSync(path.join(root, 'results', 'results.json'), 'utf8'));
  const tpl = fs.readFileSync(path.join(root, 'prompts', 'audit-prompt.md'), 'utf8');
  const mapPath = path.join(root, 'data', 'axe-to-rgaa.json');
  const rgaaMap = fs.existsSync(mapPath) ? JSON.parse(fs.readFileSync(mapPath, 'utf8')) : {};
  const promptsDir = path.join(root, 'results', 'prompts');
  const fixesDir = path.join(root, 'results', 'fixes');
  fs.mkdirSync(promptsDir, { recursive: true });
  fs.mkdirSync(fixesDir, { recursive: true });

  const key = apiKey || process.env.MISTRAL_API_KEY;
  const prompts = [];
  const fixes = [];

  // 1. Agrégation globale pour le PROMPT UNIQUE du site entier
  const globalViolationsMap = {};
  for (const page of data.pages) {
    for (const v of page.violations) {
      if (!globalViolationsMap[v.id]) {
        globalViolationsMap[v.id] = {
          id: v.id,
          impact: v.impact,
          help: v.help,
          rgaa: rgaaMap[v.id] || ['non-mappé'],
          samples: [],
          pages: []
        };
      }
      globalViolationsMap[v.id].pages.push(page.url);
      if (v.nodes && v.nodes.length > 0 && globalViolationsMap[v.id].samples.length < 3) {
        globalViolationsMap[v.id].samples.push(v.nodes[0].html);
      }
    }
  }

  const globalViolationsList = Object.values(globalViolationsMap);
  let globalPrompt = `# PROMPT GLOBAL DE CORRECTION D'ACCESSIBILITÉ (RGAA 4.1 & WCAG 2.2)

**Site analysé :** ${data.startUrl}
**Date d'audit :** ${new Date(data.date).toLocaleDateString('fr-FR')}
**Nombre de pages analysées :** ${data.pages.length}
**Règles uniques en échec :** ${globalViolationsList.length}

${tpl}

---

## Synthèse des anomalies détectées sur l'ensemble du site :

`;

  for (const item of globalViolationsList) {
    globalPrompt += `### Règle : \`${item.id}\` (Impact : ${item.impact.toUpperCase()})
- **Critères RGAA concernés :** ${item.rgaa.join(', ')}
- **Description du problème :** ${item.help}
- **Pages impactées (${item.pages.length}) :** ${[...new Set(item.pages)].slice(0, 5).join(', ')}${item.pages.length > 5 ? '…' : ''}
- **Exemples de code HTML défaillant :**
\`\`\`html
${item.samples.join('\n\n')}
\`\`\`

`;
  }

  globalPrompt += `---
## Instructions de correction
Ne traite que les erreurs axe-core listées ci-dessus. Regroupe les corrections communes, précise les pages ou éléments concernés et donne pour chacun des étapes directement applicables au code source. Utilise un exemple de code minimal uniquement lorsqu'il est justifié par les extraits. N'inclus aucun audit supplémentaire, conseil générique, feuille CSS globale, script automatique, résumé ou explication longue. Si un extrait ne permet pas de confirmer une correction fiable, indique ce qui doit être vérifié sans inventer de solution.
`;

  fs.writeFileSync(path.join(promptsDir, 'global-prompt.md'), globalPrompt);
  prompts.push({
    pageId: 'global',
    isGlobal: true,
    url: data.startUrl,
    file: 'global-prompt.md',
    violations: globalViolationsList.length
  });

  // 2. Prompts par page
  for (const p of data.pages.filter(p => p.violations.length)) {
    const htmlPath = path.join(root, 'results', 'html', `page-${p.id}.html`);
    const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8').slice(0, 30000) : '';
    const viol = p.violations.map(v => `- ${v.id} (${v.impact}) [RGAA ${rgaaMap[v.id]?.join(', ') || 'N/A'}] : ${v.help}\n  ex: ${v.nodes[0]?.html?.slice(0, 200)}`).join('\n');
    const prompt = `${tpl}\n\n## Page : ${p.url}\n\n## Violations détectées par axe-core\n${viol}\n\n## Code HTML\n\`\`\`html\n${html}\n\`\`\`\n`;
    
    const promptFile = `page-${p.id}.md`;
    fs.writeFileSync(path.join(promptsDir, promptFile), prompt);
    prompts.push({ pageId: p.id, url: p.url, file: promptFile, violations: p.violations.length });

    if (!key) continue;
    try {
      const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
        body: JSON.stringify({ model: 'mistral-small-latest', messages: [{ role: 'user', content: prompt }] })
      });
      const j = await r.json();
      const content = j.choices?.[0]?.message?.content || JSON.stringify(j);
      const fixFile = `page-${p.id}.md`;
      fs.writeFileSync(path.join(fixesDir, fixFile), content);
      fixes.push({ pageId: p.id, file: fixFile, content });
      await new Promise(res => setTimeout(res, 2000));
    } catch (e) {
      fixes.push({ pageId: p.id, error: e.message });
    }
  }

  return { prompts, fixes, hasApiKey: !!key };
}

// Exécution CLI directe
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  generateFixes()
    .then(r => console.log(`Prompt global + ${r.prompts.length - 1} prompts par page générés`))
    .catch(e => { console.error(e); process.exit(1); });
}
