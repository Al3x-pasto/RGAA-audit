// 2. RAPPORT : results.json -> report.md + report.html, mapping RGAA, détection de régressions
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Génère le rapport d'audit RGAA à partir des résultats du scan.
 * @returns {object} Données structurées du rapport
 */
export function generateReport() {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
  const data = JSON.parse(fs.readFileSync(path.join(root, 'results', 'results.json'), 'utf8'));
  const map = JSON.parse(fs.readFileSync(path.join(root, 'data', 'axe-to-rgaa.json'), 'utf8'));
  const crit = JSON.parse(fs.readFileSync(path.join(root, 'data', 'rgaa-criteria.json'), 'utf8'));
  const themeName = n => crit.themes.find(t => t.id === n)?.nom || '';

  const rows = [];
  for (const p of data.pages)
    for (const v of p.violations)
      rows.push({
        page: p.url, rule: v.id, impact: v.impact, help: v.help, count: v.nodes.length,
        rgaa: map[v.id] || ['(non mappé)'], url: v.helpUrl, sample: v.nodes[0]?.html || ''
      });

  const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
  rows.sort((a, b) => order[a.impact] - order[b.impact]);
  const byImpact = rows.reduce((a, r) => (a[r.impact] = (a[r.impact] || 0) + 1, a), {});
  const failing = rows.filter(r => cfg.failOnImpact.includes(r.impact));

  let regressions = [];
  const baselinePath = path.join(root, 'results', 'baseline.json');
  if (fs.existsSync(baselinePath)) {
    const base = new Set(JSON.parse(fs.readFileSync(baselinePath, 'utf8')));
    regressions = rows.filter(r => !base.has(`${r.page}|${r.rule}`));
  }
  fs.writeFileSync(path.join(root, 'results', 'current-keys.json'), JSON.stringify(rows.map(r => `${r.page}|${r.rule}`)));

  // Agréger par thème RGAA
  const byTheme = {};
  for (const theme of crit.themes) {
    const themeRows = rows.filter(r => r.rgaa.some(id => parseInt(id) === theme.id));
    byTheme[theme.id] = { nom: theme.nom, nbCriteres: theme.nbCriteres, violations: themeRows.length };
  }

  // Générer le markdown
  let md = `# Rapport d'audit RGAA/WCAG\n\n- Date : ${data.date}\n- Site : ${data.startUrl}\n- Pages analysées : ${data.pages.length}\n- Violations (règles x pages) : ${rows.length} — ${JSON.stringify(byImpact)}\n- Régressions vs baseline : ${regressions.length}\n\n> Les tests automatiques ne couvrent qu'une partie des 106 critères RGAA. Voir manual-tests/.\n\n`;
  md += `| Impact | Règle axe | Critères RGAA | Occurrences | Page |\n|---|---|---|---|---|\n`;
  for (const r of rows) md += `| ${r.impact} | [${r.rule}](${r.url}) | ${r.rgaa.join(', ')} | ${r.count} | ${r.page} |\n`;
  fs.writeFileSync(path.join(root, 'results', 'report.md'), md);

  // Générer le HTML
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Rapport RGAA</title>
<style>body{font-family:system-ui;max-width:1100px;margin:2rem auto;padding:0 1rem}table{border-collapse:collapse;width:100%}th,td{border:1px solid #999;padding:.4rem;text-align:left;vertical-align:top}th{background:#eee}code{font-size:.8em}</style></head><body>
<h1>Rapport d'audit RGAA/WCAG</h1><p>${esc(data.date)} — ${esc(data.startUrl)} — ${data.pages.length} pages</p>
<p>Impacts : ${esc(JSON.stringify(byImpact))} — Régressions : ${regressions.length}</p>
<table><caption>Violations détectées</caption><thead><tr><th scope="col">Impact</th><th scope="col">Règle</th><th scope="col">RGAA</th><th scope="col">Occ.</th><th scope="col">Page</th><th scope="col">Exemple</th></tr></thead><tbody>
${rows.map(r => `<tr><td>${r.impact}</td><td><a href="${esc(r.url)}">${esc(r.rule)}</a><br>${esc(r.help)}</td><td>${esc(r.rgaa.map(c => c + ' ' + themeName(parseInt(c))).join(', '))}</td><td>${r.count}</td><td>${esc(r.page)}</td><td><code>${esc(r.sample.slice(0, 200))}</code></td></tr>`).join('\n')}
</tbody></table></body></html>`;
  fs.writeFileSync(path.join(root, 'results', 'report.html'), html);

  return {
    date: data.date,
    startUrl: data.startUrl,
    totalPages: data.pages.length,
    rows,
    byImpact,
    byTheme,
    regressions,
    failing: failing.length,
    themes: crit.themes,
    totalCriteres: crit.totalCriteres
  };
}

// Exécution CLI directe
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const report = generateReport();
  console.log(`Rapport généré : ${report.rows.length} violations, ${report.regressions.length} régressions`);
  if (report.failing > 0 || report.regressions.length) {
    console.error(`ÉCHEC : ${report.failing} violations bloquantes, ${report.regressions.length} régressions.`);
    process.exit(1);
  }
}
