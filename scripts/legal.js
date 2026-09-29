// 4. DOCUMENTS LÉGAUX : modèles pré-remplis.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Génère les documents légaux d'accessibilité.
 * @param {object} [configOverride] - Configuration optionnelle
 * @returns {object} Contenu des documents générés
 */
export function generateLegalDocs(configOverride) {
  const cfg = configOverride || JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
  const o = cfg.organisation;
  const resultsPath = path.join(root, 'results', 'results.json');
  const data = fs.existsSync(resultsPath) ? JSON.parse(fs.readFileSync(resultsPath, 'utf8')) : { pages: [] };
  const ok = data.pages.filter(p => !p.violations.length).length;
  const pct = data.pages.length ? Math.round(100 * ok / data.pages.length) : 0;
  const date = new Date().toLocaleDateString('fr-FR');
  const y = new Date().getFullYear();
  const legalDir = path.join(root, 'results', 'legal');
  fs.mkdirSync(legalDir, { recursive: true });

  const mention = `Accessibilité : [non conforme / partiellement conforme / totalement conforme] (à choisir après audit manuel complet)\n\n<!-- Indicatif : ${pct}% des pages échantillonnées sans violation automatique. Ce n'est PAS le taux RGAA officiel. -->\n`;

  const declaration = `# Déclaration d'accessibilité\n\n${o.nom} s'engage à rendre son site ${o.siteNom} accessible conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.\n\nCette déclaration s'applique au site ${data.startUrl || cfg.startUrl}.\n\n## État de conformité\nLe site est **[non conforme / partiellement conforme / totalement conforme]** avec le RGAA version 4.1.\nTaux de conformité : **[à compléter après audit RGAA complet]**\n\n## Résultats des tests\nAudit réalisé le ${date} : tests automatisés (axe-core) + tests manuels (clavier, NVDA, contrastes).\nPages sans violation automatique : ${ok}/${data.pages.length} (indicatif).\n\n## Contenus non accessibles\n[Lister les non-conformités : voir results/report.md]\n\n## Établissement de cette déclaration\nDéclaration établie le ${date}.\nTechnologies utilisées : HTML, CSS, JavaScript, WAI-ARIA.\nOutils : axe-core, NVDA, Colour Contrast Analyser.\n\n## Retour d'information et contact\nÉcrire à ${o.email} ou à : ${o.adresse}.\n\n## Voies de recours\nSaisir le Défenseur des droits : https://formulaire.defenseurdesdroits.fr/\n`;

  const schema = `# Schéma pluriannuel de mise en accessibilité (${y}-${y + 2})\n\n## Organisation\n${o.nom} — référent accessibilité : [à compléter]\n\n## Actions prévues\n| Année | Action | Responsable | Échéance |\n|---|---|---|---|\n| An 1 | Audit RGAA complet + correction des violations bloquantes | [ ] | [ ] |\n| An 1 | Formation des équipes (dev, design, contenu) | [ ] | [ ] |\n| An 2 | Audit axe-core intégré en CI/CD | [ ] | [ ] |\n| An 3 | Ré-audit complet et mise à jour de la déclaration | [ ] | [ ] |\n\n## Budget\n[à compléter]\n`;

  fs.writeFileSync(path.join(legalDir, 'mention-conformite.md'), mention);
  fs.writeFileSync(path.join(legalDir, 'declaration-accessibilite.md'), declaration);
  fs.writeFileSync(path.join(legalDir, 'schema-pluriannuel.md'), schema);

  return {
    mention: { filename: 'mention-conformite.md', content: mention },
    declaration: { filename: 'declaration-accessibilite.md', content: declaration },
    schema: { filename: 'schema-pluriannuel.md', content: schema }
  };
}

// Exécution CLI directe
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  generateLegalDocs();
  console.log('Documents générés dans results/legal/');
}
