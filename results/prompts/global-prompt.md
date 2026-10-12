# PROMPT GLOBAL DE CORRECTION D'ACCESSIBILITÉ (RGAA 4.1 & WCAG 2.2)

**Site analysé :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout
**Date d'audit :** 04/10/2026
**Nombre de pages analysées :** 30
**Règles uniques en échec :** 13

Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


---

## Synthèse des anomalies détectées sur l'ensemble du site :

### Règle : `aria-dialog-name` (Impact : SERIOUS)
- **Critères RGAA concernés :** non-mappé
- **Description du problème :** ARIA dialog and alertdialog nodes should have an accessible name
- **Pages impactées (29) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<div id="consentModalApp" class="modal custom space-form-section show" tabindex="-1" role="dialog" data-v-app="">

<div id="consentModalApp" class="modal custom space-form-section show" tabindex="-1" role="dialog" data-v-app="">

<div id="consentModalApp" class="modal custom space-form-section show" tabindex="-1" role="dialog" data-v-app="">
```

### Règle : `color-contrast` (Impact : SERIOUS)
- **Critères RGAA concernés :** 3.2
- **Description du problème :** Elements must meet minimum color contrast ratio thresholds
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<input id="loginValidation" name="validation" type="submit" value="Valider">

<a href="/contenu/actualite/details/124" title="Code'nGo! Brive déménage">En savoir plus...</a>

<div role="button" title="Afficher les images satellite" aria-label="Afficher les images satellite" class="mapbox-switch-style-btn"> Satellite </div>
```

### Règle : `empty-heading` (Impact : MINOR)
- **Critères RGAA concernés :** 9.1
- **Description du problème :** Headings should not be empty
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<h3>&nbsp;</h3>

<h3>&nbsp;</h3>

<h3>&nbsp;</h3>
```

### Règle : `image-alt` (Impact : CRITICAL)
- **Critères RGAA concernés :** 1.1
- **Description du problème :** Images must have alternative text
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<img src="/img/facebook.svg">

<img src="/img/picto-molette.png" class="molette">

<img src="/img/chrono.png">
```

### Règle : `link-name` (Impact : SERIOUS)
- **Critères RGAA concernés :** 6.1, 6.2
- **Description du problème :** Links must have discernible text
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<a href="https://www.facebook.com/CodengoFR/" class="col2 socialNetwork" target="_blank"><img src="/img/facebook.svg"></a>

<a href="https://www.facebook.com/CodengoFR/" class="col2 socialNetwork" target="_blank"><img src="/img/facebook.svg"></a>

<a href="https://www.facebook.com/CodengoFR/" class="col2 socialNetwork" target="_blank"><img src="/img/facebook.svg"></a>
```

### Règle : `meta-viewport` (Impact : MODERATE)
- **Critères RGAA concernés :** 10.4
- **Description du problème :** Zooming and scaling must not be disabled
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Règle : `region` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.2
- **Description du problème :** All page content should be contained by landmarks
- **Pages impactées (30) :** https://codengo.bureauveritas.fr/espace/candidat/connexion?error=error.session.timeout, https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/passerlecode, https://codengo.bureauveritas.fr/public/examen…
- **Exemples de code HTML défaillant :**
```html
<section class="ariane"><div class="breadcrumb maxsize"><span class="item"><!--v-if--><a href="/">Accueil</a></span><span class="item"><span class="separator"> &gt; </span><span>Espace particuliers</span></span></div></section>

<h2 class="">Passer mon code de la route où je veux</h2>

<section class="ariane"><div class="breadcrumb maxsize"><span class="item"><!--v-if--><a href="/">Accueil</a></span><span class="item"><span class="separator"> &gt; </span><span>Je m'inscris à l'examen du code de la route</span></span></div></section>
```

### Règle : `heading-order` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.1
- **Description du problème :** Heading levels should only increase by one
- **Pages impactées (15) :** https://codengo.bureauveritas.fr/, https://codengo.bureauveritas.fr/public/session, https://codengo.bureauveritas.fr/public/examen, https://codengo.bureauveritas.fr/public/compte/motdepasse/courrier, https://codengo.bureauveritas.fr/contenu/lexique…
- **Exemples de code HTML défaillant :**
```html
<h3><a class="title-link" href="/contenu/actualite" title="Actualités"> Actualités </a></h3>

<h3><img src="/img/chrono.png"> Filtrer</h3>

<h3>Réussissez votre examen avec notre tablette</h3>
```

### Règle : `select-name` (Impact : CRITICAL)
- **Critères RGAA concernés :** 11.1
- **Description du problème :** Select element must have an accessible name
- **Pages impactées (1) :** https://codengo.bureauveritas.fr/public/site
- **Exemples de code HTML défaillant :**
```html
<select name="department" class="form-select">
```

### Règle : `frame-title` (Impact : SERIOUS)
- **Critères RGAA concernés :** 2.1
- **Description du problème :** Frames must have an accessible name
- **Pages impactées (1) :** https://codengo.bureauveritas.fr/contenu/faq
- **Exemples de code HTML défaillant :**
```html
<iframe src="//www.youtube.com/embed/8gSmnskpr_s" width="560" height="314" allowfullscreen="allowfullscreen"></iframe>
```

### Règle : `aria-toggle-field-name` (Impact : SERIOUS)
- **Critères RGAA concernés :** non-mappé
- **Description du problème :** ARIA toggle fields must have an accessible name
- **Pages impactées (1) :** https://codengo.bureauveritas.fr/public/referentiel/politique/cookies
- **Exemples de code HTML défaillant :**
```html
<div class="toggle-container" tabindex="0" aria-checked="false" role="switch">
```

### Règle : `empty-table-header` (Impact : MINOR)
- **Critères RGAA concernés :** non-mappé
- **Description du problème :** Table header text should not be empty
- **Pages impactées (1) :** https://codengo.bureauveritas.fr/public/referentiel/politique/cookies
- **Exemples de code HTML défaillant :**
```html
<th class="col3"></th>
```

### Règle : `landmark-one-main` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.2
- **Description du problème :** Document should have one main landmark
- **Pages impactées (1) :** https://codengo.bureauveritas.fr/public/referentiel/politique/cookies
- **Exemples de code HTML défaillant :**
```html
<html lang="fr" xmlns:og="https://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml" manifest="cdr.appcache">
```

---
## Consignes d'action globale pour le développeur / l'IA :
1. Fournis une feuille de style CSS corrective transversale (contrastes, focus visible, focus-within).
2. Fournis les composants réutilisables corrigés (Images avec alt pertinent, balisage formulaire avec labels, liens explicites, repères ARIA).
3. Donne un script JS de correction automatique si applicable pour les éléments dynamiques.
