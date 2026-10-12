# Audit RGAA/WCAG gratuit et automatisé

Pipeline : Scan (Playwright + axe-core) -> Rapport JSON/MD/HTML -> Prompts/corrections IA -> Documents légaux -> CI/CD

## Démarrage
```bash
#pour ouvrir le site dans le navigateur:
nmp start +  http://127.0.0.1:3000

#en ligne de commendes
npm install
# éditer config.json (startUrl, organisation)
npm run audit    # scan + rapport -> results/report.html
npm run fix      # prompts IA (results/prompts/) ; corrections auto si MISTRAL_API_KEY défini
npm run legal    # modèles de documents -> results/legal/
```
Baseline anti-régression : `cp results/current-keys.json results/baseline.json` sur un état accepté.

## Structure
- scripts/scan.js : crawler + axe-core -> results/results.json
- scripts/report.js : rapport, mapping RGAA, seuil d'échec, régressions
- scripts/ai-fix.js : prompts (prompts/audit-prompt.md) + appel Mistral gratuit optionnel
- scripts/legal.js : mention, déclaration, schéma pluriannuel
- data/ : 13 thèmes / 106 critères RGAA + correspondance axe -> RGAA
- manual-tests/checklist.md : clavier, NVDA, contrastes
- .github/workflows/a11y.yml et .gitlab-ci.yml : CI/CD

## Limites
- L'automatique détecte environ 30-40 % des problèmes ; l'audit manuel reste obligatoire pour annoncer un taux RGAA.
- Toute correction IA doit être relue et retestée.
- Documents légaux : à compléter/valider, ou à générer via le générateur officiel DINUM.
