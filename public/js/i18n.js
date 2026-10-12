(function () {
  'use strict';

  const english = {
    'RGAA Audit — Sécurisation & Conformité Accessibilité': 'RGAA Audit — Accessibility Compliance',
    'Plateforme d\'audit d\'accessibilité numérique RGAA 4.1 et WCAG 2.2 — Sécurisez votre conformité légale': 'RGAA 4.1 and WCAG 2.2 digital accessibility auditing platform — improve your legal compliance',
    'Aller au contenu principal': 'Skip to main content',
    'Informations de conformité légale': 'Legal compliance information',
    'Loi Accessibilité & Décret 2019-768 :': 'Accessibility Act & Decree 2019-768:',
    "Évitez jusqu'à": 'Avoid up to',
    'par site et par an en publiant vos documents conformes.': 'per website per year by publishing your compliant documents.',
    '25 000 € d\'amende': '€25,000 fine',
    'Sanctions évitées': 'Penalties avoided',
    '100% Automatisé': '100% Automated',
    'Ouvrir le menu de navigation': 'Open navigation menu',
    'Passer à l’anglais': 'Switch to English',
    "Passer à l'anglais": 'Switch to English',
    'Passer au français': 'Switch to French',
    'Basculer le thème clair/sombre': 'Toggle light/dark theme',
    'Basculer le thème': 'Toggle theme',
    'Passer au thème clair': 'Switch to light theme',
    'Passer au thème sombre': 'Switch to dark theme',
    'Navigation principale': 'Main navigation',
    'Navigation': 'Navigation',
    'Tableau de bord': 'Dashboard',
    'Nouvel audit': 'New audit',
    'Résultats': 'Results',
    'Corrections IA': 'AI fixes',
    'Documents légaux': 'Legal documents',
    'Checklist manuel': 'Manual checklist',
    'À propos & Spécifications': 'About & specifications',
    'Sécurité Juridique & ROI': 'Legal protection & ROI',
    "Protégez votre organisme contre les sanctions d'accessibilité": 'Protect your organization from accessibility penalties',
    'Auditez votre site en 1 clic, détectez immédiatement les non-conformités RGAA 4.1 / WCAG et générez vos déclarations obligatoires pour éviter jusqu\'à 25 000 € d\'amende.': 'Audit your website in one click, detect RGAA 4.1 / WCAG issues, and generate required declarations to avoid fines of up to €25,000.',
    'Amende annuelle maximale évitée': 'Maximum annual fine avoided',
    'Temps d’audit moyen en 1 clic': 'Average one-click audit time',
    'Temps d\'audit moyen en 1 clic': 'Average one-click audit time',
    '106 Critères': '106 criteria',
    'Référentiel RGAA 4.1 intégré': 'RGAA 4.1 framework included',
    'Aucun audit n\'a encore été réalisé sur ce site.': 'No audit has been run for this website yet.',
    'Renseignez l’URL de votre site pour générer votre premier diagnostic de conformité et vos documents légaux.': 'Enter your website URL to generate your first compliance assessment and legal documents.',
    'Renseignez l\'URL de votre site pour générer votre premier diagnostic de conformité et vos documents légaux.': 'Enter your website URL to generate your first compliance assessment and legal documents.',
    'Lancer un audit en 1 clic': 'Run a one-click audit',
    'Lancer un audit RGAA': 'Run an RGAA audit',
    'Seule l’URL est nécessaire :': 'Only the URL is required:',
    'Seule l\'URL est nécessaire :': 'Only the URL is required:',
    'Renseignez simplement l’adresse de votre site ci-dessous et lancez le scan. Les paramètres avancés ont déjà des valeurs optimales par défaut.': 'Enter your website address below and start the scan. Advanced settings already have recommended defaults.',
    'Renseignez simplement l\'adresse de votre site ci-dessous et lancez le scan. Les paramètres avancés ont déjà des valeurs optimales par défaut.': 'Enter your website address below and start the scan. Advanced settings already have recommended defaults.',
    'URL du site à auditer': 'Website URL to audit',
    '🌐 URL du site à auditer *': '🌐 Website URL to audit *',
    '🌐 URL du site à auditer': '🌐 Website URL to audit',
    'Exemple : https://www.mon-site.fr': 'Example: https://www.example.com',
    'https://mon-site.fr': 'https://example.com',
    'Lancer le scan': 'Start scan',
    '🚀 Lancer le scan': '🚀 Start scan',
    'Paramètres avancés & Organisation (facultatif)': 'Advanced settings & organization (optional)',
    '⚙️ Paramètres avancés & Organisation (facultatif)': '⚙️ Advanced settings & organization (optional)',
    'Options de crawl': 'Crawling options',
    'Nombre max de pages à explorer': 'Maximum pages to scan',
    'Restreindre au même domaine': 'Limit to the same domain',
    'Oui (recommandé)': 'Yes (recommended)',
    'Non': 'No',
    'Informations pour les documents légaux (facultatif)': 'Information for legal documents (optional)',
    'Nom de l’organisation': 'Organization name',
    'Nom de l\'organisation': 'Organization name',
    'Nom du site': 'Website name',
    'accessibilite@example.com': 'accessibility@example.com',
    'Nom du site web': 'Website name',
    'Email de contact accessibilité': 'Accessibility contact email',
    'Adresse postale': 'Postal address',
    'Ex: Université Côte d\'Azur': 'e.g. Example University',
    'Ex: Portail des formations': 'e.g. Course portal',
    'Adresse complète': 'Full postal address',
    'Progression du scan': 'Scan progress',
    'En attente…': 'Waiting…',
    'Journal du scan': 'Scan log',
    'Résultats de l’audit': 'Audit results',
    'Résultats de l\'audit': 'Audit results',
    'Aucun résultat disponible pour l’instant.': 'No results available yet.',
    'Aucun résultat disponible pour l\'instant.': 'No results available yet.',
    'Lancez un audit pour générer la cartographie des non-conformités.': 'Run an audit to generate an accessibility findings overview.',
    'Lancer un audit': 'Run an audit',
    'Corrections assistées par IA': 'AI-assisted fixes',
    'Aucune suggestion disponible.': 'No suggestions available.',
    'Lancez d’abord un audit pour générer des prompts de correction ciblés pour vos développeurs.': 'Run an audit first to generate targeted fix prompts for your developers.',
    'Lancez d\'abord un audit pour générer des prompts de correction ciblés pour vos développeurs.': 'Run an audit first to generate targeted fix prompts for your developers.',
    'Documents légaux obligatoires': 'Required legal documents',
    'Obligations réglementaires (Art. 47) :': 'Regulatory requirements (Section 47):',
    'Publiez votre mention, votre déclaration et votre schéma pluriannuel pour être en règle avec la loi et prévenir tout risque d\'amende administrative (jusqu\'à 25 000 € / an).': 'Publish your compliance statement, accessibility declaration, and multi-year plan to meet legal requirements and reduce the risk of administrative fines (up to €25,000 per year).',
    'Générer les documents légaux': 'Generate legal documents',
    'Checklist d’audit manuel': 'Manual audit checklist',
    'Checklist d\'audit manuel': 'Manual audit checklist',
    'Complément d’audit :': 'Additional audit:',
    'Complément d\'audit :': 'Additional audit:',
    'Les tests automatiques couvrent 30 à 40 % des critères RGAA. Cette checklist guide vos tests manuels indispensables (navigation clavier, NVDA, contrastes, reflow 400%).': 'Automated tests cover 30–40% of RGAA criteria. This checklist guides essential manual checks (keyboard navigation, NVDA, contrast, 400% reflow).',
    'À propos & Spécifications techniques': 'About & technical specifications',
    'Comment fonctionne le scan de votre site ?': 'How does the website scan work?',
    'Cette plateforme combine un': 'This platform combines a',
    'moteur de navigation réel': 'real browser engine',
    ', un': ', an',
    'analyseur de règles d\'accessibilité de référence mondiale': 'world-leading accessibility rules engine',
    ', et une': ', and a',
    'passerelle de conformité aux lois françaises': 'French legal compliance mapping layer',
    'pour automatiser votre diagnostic en quelques secondes.': 'to automate your assessment in seconds.',
    '1. Navigation': '1. Browsing',
    'Un vrai navigateur Google Chrome est exécuté en arrière-plan sans interface. Il charge l’URL cible, exécute les scripts JavaScript, attend la stabilisation réseau (': 'A real Google Chrome browser runs headlessly. It loads the target URL, runs JavaScript, waits for the network to settle (',
    'Un vrai navigateur Google Chrome est exécuté en arrière-plan sans interface. Il charge l\'URL cible, exécute les scripts JavaScript, attend la stabilisation réseau (': 'A real Google Chrome browser runs headlessly. It loads the target URL, runs JavaScript, waits for the network to settle (',
    ') et découvre automatiquement l’arborescence des pages internes.': ') and automatically discovers internal pages.',
    ') et découvre automatiquement l\'arborescence des pages internes.': ') and automatically discovers internal pages.',
    '2. Analyse A11Y': '2. Accessibility analysis',
    'Le standard mondial de référence utilisé par Google et Microsoft est injecté dans le DOM de chaque page. Il évalue les contrastes de couleurs, balises ': 'The industry-standard engine used by Google and Microsoft is injected into each page’s DOM. It checks color contrast and ',
    ', landmarks ARIA, hiérarchie des titres et formulaires selon les normes ': ', ARIA landmarks, heading hierarchy, and forms against ',
    ' et ': ' and ',
    ' selon les normes ': ' against ',
    '3. Loi Française': '3. French legislation',
    'Mapping RGAA 4.1 Officiel': 'Official RGAA 4.1 mapping',
    'Chaque anomalie technique est automatiquement rattachée aux ': 'Each technical issue is automatically mapped to the ',
    '106 critères et 13 thématiques du RGAA 4.1': '106 criteria and 13 RGAA 4.1 topics',
    ' critères et ': ' criteria and ',
    ' thématiques du RGAA 4.1': ' RGAA 4.1 topics',
    ' de la DINUM pour calculer le taux indicatif et générer votre déclaration d’accessibilité prête à être publiée.': ' published by DINUM to calculate an indicative score and generate an accessibility declaration ready for publication.',
    ' de la DINUM pour calculer le taux indicatif et générer votre déclaration d\'accessibilité prête à être publiée.': ' published by DINUM to calculate an indicative score and generate an accessibility declaration ready for publication.',
    'Cadre juridique & Sanctions financières': 'Legal framework & financial penalties',
    'En France, l’accessibilité numérique est une': 'In France, digital accessibility is a',
    'En France, l\'accessibilité numérique est une': 'In France, digital accessibility is a',
    'obligation légale stricte': 'strict legal requirement',
    ' régie par l’article 47 de la loi n° 2005-102 du 11 février 2005 et le décret n° 2019-768 du 24 juillet 2019 :': ' governed by Section 47 of Act No. 2005-102 of 11 February 2005 and Decree No. 2019-768 of 24 July 2019:',
    ' régie par l\'article 47 de la loi n° 2005-102 du 11 février 2005 et le décret n° 2019-768 du 24 juillet 2019 :': ' governed by Section 47 of Act No. 2005-102 of 11 February 2005 and Decree No. 2019-768 of 24 July 2019:',
    'Obligation de publication :': 'Publication requirement:',
    'Tout site public ou entreprise réalisant plus de 250 millions d’euros de chiffre d’affaires doit publier une mention de conformité en page d’accueil, une déclaration d’accessibilité et un schéma pluriannuel sur 3 ans.': 'Public websites and companies with more than €250 million in revenue must publish a compliance statement on the home page, an accessibility declaration, and a three-year accessibility plan.',
    'Tout site public ou entreprise réalisant plus de 250 millions d\'euros de chiffre d\'affaires doit publier une mention de conformité en page d\'accueil, une déclaration d\'accessibilité et un schéma pluriannuel sur 3 ans.': 'Public websites and companies with more than €250 million in revenue must publish a compliance statement on the home page, an accessibility declaration, and a three-year accessibility plan.',
    'Sanctions applicables :': 'Penalties:',
    'Le défaut de publication de ces mentions ou documents est passible d’une': 'Failure to publish these statements or documents may result in a',
    'Le défaut de publication de ces mentions ou documents est passible d\'une': 'Failure to publish these statements or documents may result in a',
    'amende administrative pouvant atteindre 25 000 € par service et par an': 'administrative fine of up to €25,000 per service per year',
    ' (50 000 € en cas de récidive).': ' (€50,000 for repeat violations).',
    '(50 000 € en cas de récidive).': '(€50,000 for repeat violations).',
    'Contrôle de l’Arcom & Défenseur des Droits :': 'Oversight by Arcom & the Defender of Rights:',
    'Contrôle de l\'Arcom & Défenseur des Droits :': 'Oversight by Arcom & the Defender of Rights:',
    'Les usagers et associations peuvent saisir le Défenseur des Droits en cas de rupture d’accès aux services.': 'Users and associations may contact the Defender of Rights if access to services is obstructed.',
    'Les usagers et associations peuvent saisir le Défenseur des Droits en cas de rupture d\'accès aux services.': 'Users and associations may contact the Defender of Rights if access to services is obstructed.',
    'Confidentialité & Traitement local': 'Privacy & local processing',
    'Confidentialité': 'Privacy',
    'Vos données restent dans votre instance': 'Your data stays within your instance',
    'Le scan, les résultats et les rapports sont traités et enregistrés sur le serveur qui héberge cette application.': 'Scans, results, and reports are processed and stored on the server hosting this application.',
    'Aucune donnée d’audit n’est envoyée à un service tiers par défaut. Si vous configurez votre propre clé Mistral, les prompts de correction sont transmis à Mistral lorsque vous demandez une correction IA.': 'Audit data is not sent to third-party services by default. If you configure your own Mistral key, fix prompts are sent to Mistral when you request AI fixes.',
    'L’ensemble de l’audit s’exécute directement sur votre environnement Node.js. Aucune donnée, aucun code source et aucune adresse ne sont transférés à des serveurs tiers. Les requêtes IA optionnelles ne sont envoyées que si vous fournissez explicitement votre propre clé API (ex. Mistral AI).': 'The entire audit runs in your Node.js environment. No data, source code, or addresses are sent to third-party servers. Optional AI requests are sent only when you explicitly provide your own API key (e.g. Mistral AI).',
    'L\'ensemble de l\'audit s\'exécute directement sur votre environnement Node.js. Aucune donnée, aucun code source et aucune adresse ne sont transférés à des serveurs tiers. Les requêtes IA optionnelles ne sont envoyées que si vous fournissez explicitement votre propre clé API (ex. Mistral AI).': 'The entire audit runs in your Node.js environment. No data, source code, or addresses are sent to third-party servers. Optional AI requests are sent only when you explicitly provide your own API key (e.g. Mistral AI).',
    'Module de Correction Automatique IA': 'AI auto-fix module',
    'Fermer la fenêtre': 'Close dialog',
    'Passez à la conformité sans mobiliser vos équipes de dev !': 'Reach compliance without overloading your development team!',
    'Notre agent IA analyse vos violations d’accessibilité et génère automatiquement les patchs de code conformes RGAA 4.1.': 'Our AI agent analyzes accessibility violations and automatically generates RGAA 4.1 code fixes.',
    'Notre agent IA analyse vos violations d\'accessibilité et génère automatiquement les patchs de code conformes RGAA 4.1.': 'Our AI agent analyzes accessibility violations and automatically generates RGAA 4.1 code fixes.',
    'Correction automatique des contrastes, attributs ARIA et labels de formulaires': 'Automatic fixes for contrast, ARIA attributes, and form labels',
    '✓ Correction automatique des contrastes, attributs ARIA et labels de formulaires': '✓ Automatic fixes for contrast, ARIA attributes, and form labels',
    'Script d’injection immédiate ou pull request GitHub / GitLab automatisée': 'Immediate injection script or automated GitHub / GitLab pull request',
    'Script d\'injection immédiate ou pull request GitHub / GitLab automatisée': 'Immediate injection script or automated GitHub / GitLab pull request',
    '✓ Script d\'injection immédiate ou pull request GitHub / GitLab automatisée': '✓ Immediate injection script or automated GitHub / GitLab pull request',
    'Garantie de conformité et protection contre les amendes administratives (25 000 €/an)': 'Compliance guarantee and protection against administrative fines (€25,000/year)',
    '✓ Garantie de conformité et protection contre les amendes administratives (25 000 €/an)': '✓ Compliance guarantee and protection against administrative fines (€25,000/year)',
    'Nos formules de correction': 'Our fix plans',
    'Pack Audit + Patch': 'Audit + Fix package',
    'Correction one-shot de votre site': 'One-time website fixes',
    'HT': 'excl. tax',
    'Jusqu’à 30 pages': 'Up to 30 pages',
    'Jusqu\'à 30 pages': 'Up to 30 pages',
    'Patchs HTML / ARIA / CSS': 'HTML / ARIA / CSS fixes',
    'Rapport de contre-visite': 'Follow-up audit report',
    'Choisir cette formule': 'Choose this plan',
    'Populaire': 'Popular',
    'Pack Sérénité Annuelle': 'Annual peace-of-mind package',
    'Surveillance & Correctifs continus': 'Continuous monitoring & fixes',
    'HT / an': 'excl. tax / year',
    'Pages illimitées': 'Unlimited pages',
    'Mise à jour automatique de la déclaration': 'Automatic declaration updates',
    'Protection continue anti-régression': 'Continuous regression protection',
    'Support prioritaire expert RGAA': 'Priority support from RGAA experts',
    'Débloquer l’offre Pro': 'Unlock the Pro plan',
    'Débloquer l\'offre Pro': 'Unlock the Pro plan',
    'Besoin d’un audit complet sur mesure avec prestataire certifié ?': 'Need a tailored full audit from a certified provider?',
    'Besoin d\'un audit complet sur mesure avec prestataire certifié ?': 'Need a tailored full audit from a certified provider?',
    'Contactez notre équipe d’experts': 'Contact our team of experts',
    'Contactez notre équipe d\'experts': 'Contact our team of experts',
    'mailto:contact@example.com?subject=Demande%20Audit%20RGAA%20Complet': 'mailto:contact@example.com?subject=Accessibility%20Audit%20Request',
    'Demande de devis enregistrée ! Un conseiller accessibilité va vous contacter.': 'Quote request received. An accessibility advisor will contact you.',
    'Demande d’abonnement annuel enregistrée ! Un conseiller accessibilité va vous contacter.': 'Annual subscription request received. An accessibility advisor will contact you.',
    'Demande d\'abonnement annuel enregistrée ! Un conseiller accessibilité va vous contacter.': 'Annual subscription request received. An accessibility advisor will contact you.',
    'Pages analysées': 'Pages scanned',
    'Violations totales': 'Total violations',
    'Règles en échec': 'Failing rules',
    'Pages avec problèmes': 'Pages with issues',
    'Conformité estimée': 'Estimated compliance',
    'Basé sur les tests automatiques uniquement': 'Based on automated tests only',
    'Violations par thématique RGAA': 'Violations by RGAA topic',
    'Répartition par impact': 'Breakdown by impact',
    'conformité': 'compliance',
    'régressions détectée(s)': 'regression(s) detected',
    'Dernière analyse :': 'Last scan:',
    'Site :': 'Website:',
    'Scan en cours…': 'Scan in progress…',
    'Scan en cours': 'Scan in progress',
    'Veuillez entrer une URL': 'Please enter a URL',
    'Erreur au lancement': 'Failed to start',
    'Erreur lors du lancement du scan': 'Error starting the scan',
    'Connecté au scan en cours…': 'Connected to the running scan…',
    'Scan de :': 'Scanning:',
    'Attention': 'Warning',
    'Erreur': 'Error',
    'Succès': 'Success',
    'Scan terminé': 'Scan complete',
    'Scan terminé avec succès': 'Scan completed successfully',
    'Terminé :': 'Complete:',
    'Export JSON': 'Export JSON',
    'Générer les corrections IA': 'Generate AI fixes',
    'Génération en cours…': 'Generating…',
    'Prompts de correction générés': 'Fix prompts generated',
    'Corrections générées': 'Fixes generated',
    'Export JSON téléchargé': 'JSON export downloaded',
    'Filtrer par impact': 'Filter by impact',
    'Filtrer :': 'Filter:',
    'Tous': 'All',
    'Par critère RGAA': 'By RGAA criterion',
    'Par page': 'By page',
    'Violations d’accessibilité détectées': 'Accessibility violations detected',
    'Violations d\'accessibilité détectées': 'Accessibility violations detected',
    'Impact': 'Impact',
    'Règle axe': 'axe rule',
    'Critères RGAA': 'RGAA criteria',
    'Occ.': 'Count',
    'Page': 'Page',
    'Bloquantes': 'Blocking',
    'Régressions': 'Regressions',
    'Aucune violation détectée ou pas de résultats.': 'No violations found or no results are available.',
    'Aucune violation détectée ou aucun audit réalisé.': 'No violations found or no audit has been run.',
    'Filtre appliqué :': 'Filter applied:',
    'Recommandé': 'Recommended',
    'Prompt Unique Global pour tout le site': 'Single global prompt for the entire website',
    'Un seul prompt complet synthétisant l’ensemble des règles RGAA en échec, prêt pour Cursor, Claude, ChatGPT ou vos développeurs.': 'One complete prompt summarizing all failing RGAA rules, ready for Cursor, Claude, ChatGPT, or your developers.',
    'Un seul prompt complet synthétisant l\'ensemble des règles RGAA en échec, prêt pour Cursor, Claude, ChatGPT ou vos développeurs.': 'One complete prompt summarizing all failing RGAA rules, ready for Cursor, Claude, ChatGPT, or your developers.',
    'Copier le Prompt Global': 'Copy global prompt',
    '📋 Copier le Prompt Global': '📋 Copy global prompt',
    'Débloquer l’Auto-Patch IA': 'Unlock AI auto-fix',
    'Débloquer l\'Auto-Patch IA': 'Unlock AI auto-fix',
    '⚡ Débloquer l’Auto-Patch IA': '⚡ Unlock AI auto-fix',
    '⚡ Débloquer l\'Auto-Patch IA': '⚡ Unlock AI auto-fix',
    'Prompt Maître Global (Toutes les pages & règles)': 'Global master prompt (all pages & rules)',
    'Copier': 'Copy',
    '📋 Copier': '📋 Copy',
    'Voir les': 'View',
    'prompts individuels détaillés par page (optionnel)': 'detailed prompts by page (optional)',
    'Corriger': 'Fix',
    '⚡ Corriger': '⚡ Fix',
    'Solution IA :': 'AI solution:',
    '✓ Solution IA :': '✓ AI solution:',
    'Prompt copié dans le presse-papiers !': 'Prompt copied to clipboard!',
    'Erreur lors du chargement des prompts :': 'Error loading prompts:',
    'Mention de conformité': 'Compliance statement',
    'Déclaration d’accessibilité': 'Accessibility declaration',
    'Déclaration d\'accessibilité': 'Accessibility declaration',
    'Schéma pluriannuel': 'Multi-year plan',
    'Télécharger (.md)': 'Download (.md)',
    'Copier le texte': 'Copy text',
    'Document téléchargé': 'Document downloaded',
    'Copié dans le presse-papiers': 'Copied to clipboard',
    'Progression globale': 'Overall progress',
    'tests effectués': 'tests completed',
    'Progression sauvegardée': 'Progress saved',
    'Génération automatique des prompts IA en cours…': 'Generating AI prompts automatically…',
    'Lancez un audit pour générer des prompts de correction ciblés et des patchs de code.': 'Run an audit to generate targeted fix prompts and code patches.',
    'Générer les documents légaux': 'Generate legal documents',
    'Documents légaux générés': 'Legal documents generated',
    'Génération automatique des prompts IA en cours…': 'Generating AI prompts automatically…',
    'Images': 'Images',
    'Cadres': 'Frames',
    'Couleurs': 'Color',
    'Multimédia': 'Multimedia',
    'Tableaux': 'Tables',
    'Liens': 'Links',
    'Scripts': 'Scripts',
    'Éléments obligatoires': 'Mandatory elements',
    'Structuration de l’information': 'Information structure',
    'Structuration de l\'information': 'Information structure',
    'Présentation de l’information': 'Information presentation',
    'Présentation de l\'information': 'Information presentation',
    'Formulaires': 'Forms',
    'Consultation': 'Consultation',
    'Lancer un audit': 'Run an audit',
    'Titre de page pertinent, langue correcte': 'Relevant page title, correct language',
    'Tous les éléments interactifs sont atteignables et activables': 'All interactive elements are reachable and operable',
    'Ordre de tabulation logique': 'Logical tab order',
    'Focus toujours visible (RGAA 10.7)': 'Focus is always visible (RGAA 10.7)',
    'Aucun piège clavier (modales, menus, widgets) (RGAA 12.11 / WCAG 2.1.2)': 'No keyboard traps (dialogs, menus, widgets) (RGAA 12.11 / WCAG 2.1.2)',
    'Lien d’évitement « Aller au contenu » présent et fonctionnel (RGAA 12.7)': 'A working “Skip to content” link is present (RGAA 12.7)',
    'Lien d\'évitement « Aller au contenu » présent et fonctionnel (RGAA 12.7)': 'A working “Skip to content” link is present (RGAA 12.7)',
    'Menus et modales fermables avec Échap': 'Menus and dialogs can be closed with Escape',
    'Structure des titres (NVDA + H) et repères (D) cohérente': 'Heading structure (NVDA + H) and landmarks (D) are consistent',
    'Images informatives : alternative pertinente ; décoratives ignorées': 'Informative images have meaningful alternatives; decorative images are ignored',
    'Liens et boutons : intitulés explicites hors contexte (NVDA + F7)': 'Links and buttons have clear labels out of context (NVDA + F7)',
    'Champs de formulaire : label, aide, erreurs annoncés': 'Form fields announce labels, help, and errors',
    'Contenus dynamiques annoncés (aria-live / role=alert)': 'Dynamic content is announced (aria-live / role=alert)',
    'Tableaux de données : en-têtes annoncés': 'Data table headers are announced',
    'Texte normal >= 4.5:1 ; grand texte >= 3:1': 'Normal text >= 4.5:1; large text >= 3:1',
    'Composants d’interface et focus >= 3:1': 'UI components and focus >= 3:1',
    'Composants d\'interface et focus >= 3:1': 'UI components and focus >= 3:1',
    'Information jamais transmise par la couleur seule (RGAA 3.1)': 'Never convey information through color alone (RGAA 3.1)',
    'Zoom 200 % texte seul sans perte de contenu (RGAA 10.4)': '200% text-only zoom without loss of content (RGAA 10.4)',
    'Reflow à 320 px sans défilement horizontal': 'Reflow at 320 px without horizontal scrolling',
    'Vidéos : sous-titres, transcription, audiodescription (thème 4)': 'Videos: captions, transcript, audio description (topic 4)',
    'Extensions gratuites : WAVE, Lighthouse (DevTools), Accessibility Insights': 'Free tools: WAVE, Lighthouse (DevTools), Accessibility Insights',
    '## 1. Navigation clavier (Tab / Shift+Tab / Entrée / Espace / Échap / flèches)': '## 1. Keyboard navigation (Tab / Shift+Tab / Enter / Space / Escape / arrow keys)',
    '## 2. Lecteur d’écran NVDA (gratuit : https://www.nvaccess.org)': '## 2. NVDA screen reader (free: https://www.nvaccess.org)',
    "## 2. Lecteur d'écran NVDA (gratuit : https://www.nvaccess.org)": '## 2. NVDA screen reader (free: https://www.nvaccess.org)',
    '## 3. Contrastes (Colour Contrast Analyser : https://www.tpgi.com/color-contrast-checker/)': '## 3. Contrast (Colour Contrast Analyser: https://www.tpgi.com/color-contrast-checker/)',
    '## 4. Autres': '## 4. Other checks',
    '1. Navigation clavier (Tab / Shift+Tab / Entrée / Espace / Échap / flèches)': '1. Keyboard navigation (Tab / Shift+Tab / Enter / Space / Escape / arrow keys)',
    '2. Lecteur d’écran NVDA (gratuit : https://www.nvaccess.org)': '2. NVDA screen reader (free: https://www.nvaccess.org)',
    "2. Lecteur d'écran NVDA (gratuit : https://www.nvaccess.org)": '2. NVDA screen reader (free: https://www.nvaccess.org)',
    '3. Contrastes (Colour Contrast Analyser : https://www.tpgi.com/color-contrast-checker/)': '3. Contrast (Colour Contrast Analyser: https://www.tpgi.com/color-contrast-checker/)',
    '4. Autres': '4. Other checks'
  };

  const dynamicTranslations = [
    [/^📂 Voir les (\d+) prompts individuels détaillés par page \(optionnel\)$/, (_, count) => `📂 View ${count} detailed prompts by page (optional)`],
    [/^Page : (.+)$/, (_, file) => `Page: ${file}`],
    [/^Page (.+) affichée$/, (_, page) => `Page ${page} displayed`],
    [/^Page (\d+)\/(\d+) : (.+)$/, (_, current, total, url) => `Page ${current}/${total}: ${url}`],
    [/^Scan de : (.+)$/, (_, url) => `Scanning: ${url}`],
    [/^Terminé : (.+) pages analysées$/, (_, count) => `Complete: ${count} pages scanned`],
    [/^\[Page (\d+)\] (.+) → (\d+) violation\(s\)$/, (_, page, url, count) => `[Page ${page}] ${url} → ${count} violation(s)`],
    [/^\[(Attention|Erreur|Succès)\] (.+)$/, (_, label, message) => `[${english[label] || label}] ${message}`],
    [/^(\d+) violation\(s\)$/, (_, count) => `${count} violation(s)`],
    [/^(\d+) régression\(s\) détectée\(s\)$/, (_, count) => `${count} regression(s) detected`],
    [/^(\d+) tests effectués$/, (_, count) => `${count} tests completed`],
    [/^(\d+)\/(\d+) tests effectués$/, (_, completed, total) => `${completed}/${total} tests completed`],
    [/^Conformité : (.+)%$/, (_, percent) => `Compliance: ${percent}%`],
    [/^Erreur de scan : (.+)$/, (_, message) => `Scan error: ${message}`],
    [/^Erreur : (.+)$/, (_, message) => `Error: ${message}`],
    [/^Erreur lors du chargement des prompts : (.+)$/, (_, message) => `Error loading prompts: ${message}`],
    [/^\[([0-9:.]+)\] Scan terminé : (\d+) pages analysées$/, (_, time, count) => `[${time}] Scan complete: ${count} pages scanned`],
    [/^\[([0-9:.]+)\] (.+)$/, (_, time, message) => `[${time}] ${message}`]
  ];

  const textState = new WeakMap();
  const attributeState = new WeakMap();
  const valueState = new WeakMap();
  const normalizedEnglish = new Map(Object.entries(english).map(([source, output]) => [source.trim(), output.trim()]));
  const translatedAttributes = ['aria-label', 'title', 'placeholder', 'alt', 'content', 'href'];
  let language = 'fr';

  function translated(value) {
    if (language !== 'en') return value;
    const normalized = value.trim();
    if (normalizedEnglish.has(normalized)) return normalizedEnglish.get(normalized);
    for (const [pattern, replace] of dynamicTranslations) {
      const match = normalized.match(pattern);
      if (match) return replace(...match);
    }
    return value;
  }

  function translateText(node) {
    if (node.parentElement?.closest('#language-toggle')) return;
    const current = node.nodeValue;
    let state = textState.get(node);
    if (!state || current !== state.rendered) {
      state = { source: current, rendered: current };
      textState.set(node, state);
    }

    const source = state.source;
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    const core = source.slice(leading.length, source.length - trailing.length || undefined);
    const output = `${leading}${translated(core)}${trailing}`;
    if (current !== output) {
      node.nodeValue = output;
      state.rendered = output;
    }
  }

  function translateAttributes(element) {
    if (element.id === 'language-toggle') return;
    let state = attributeState.get(element);
    if (!state) {
      state = {};
      attributeState.set(element, state);
    }

    for (const name of translatedAttributes) {
      if (!element.hasAttribute(name)) continue;
      const current = element.getAttribute(name);
      let attrState = state[name];
      if (!attrState || current !== attrState.rendered) {
        attrState = { source: current, rendered: current };
        state[name] = attrState;
      }
      const output = translated(attrState.source);
      if (current !== output) {
        element.setAttribute(name, output);
        attrState.rendered = output;
      }
    }
  }

  function translateFormValue(element) {
    if (!element.matches('input[type="text"], input[type="email"], textarea')) return;
    let state = valueState.get(element);
    if (!state || element.value !== state.rendered) {
      state = { source: element.value, rendered: element.value };
      valueState.set(element, state);
    }
    const output = translated(state.source);
    if (element.value !== output) {
      element.value = output;
      state.rendered = output;
    }
  }

  function translateTree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      translateText(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
    if (root.nodeType === Node.ELEMENT_NODE) {
      translateAttributes(root);
      translateFormValue(root);
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateText(node);
    if (root.querySelectorAll) {
      root.querySelectorAll('*').forEach((element) => {
        translateAttributes(element);
        translateFormValue(element);
      });
    }
  }

  function updateLanguageButton() {
    const button = document.getElementById('language-toggle');
    if (!button) return;
    button.textContent = language === 'fr' ? 'EN' : 'FR';
    const label = language === 'fr' ? 'Passer à l’anglais' : 'Switch to French';
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'fr';
    localStorage.setItem('rgaa-language', language);
    document.documentElement.lang = language;
    translateTree(document.documentElement);
    document.title = translated('RGAA Audit — Sécurisation & Conformité Accessibilité');
    updateLanguageButton();
  }

  function init() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(translateTree);
        } else if (mutation.type === 'attributes') {
          translateAttributes(mutation.target);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: translatedAttributes
    });

    document.getElementById('language-toggle')?.addEventListener('click', () => {
      setLanguage(language === 'fr' ? 'en' : 'fr');
    });
    setLanguage(localStorage.getItem('rgaa-language') || 'fr');
  }

  window.RgaaI18n = {
    getLanguage: () => language,
    translate: translated,
    refresh: () => translateTree(document.documentElement)
  };

  document.addEventListener('DOMContentLoaded', init);
})();
