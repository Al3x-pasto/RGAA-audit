# PROMPT GLOBAL DE CORRECTION D'ACCESSIBILITÉ (RGAA 4.1 & WCAG 2.2)

**Site analysé :** https://www.basic-fit.com/fr-fr/home
**Date d'audit :** 29/09/2026
**Nombre de pages analysées :** 30
**Règles uniques en échec :** 10

Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


---

## Synthèse des anomalies détectées sur l'ensemble du site :

### Règle : `color-contrast` (Impact : SERIOUS)
- **Critères RGAA concernés :** 3.2
- **Description du problème :** Elements must meet minimum color contrast ratio thresholds
- **Pages impactées (30) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/fr-fr/declaration-cookie, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/checkout, https://www.basic-fit.com/fr-fr/service-a-la-clientele…
- **Exemples de code HTML défaillant :**
```html
<a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>

<a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>

<a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>
```

### Règle : `heading-order` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.1
- **Description du problème :** Heading levels should only increase by one
- **Pages impactées (9) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/service-a-la-clientele, https://www.basic-fit.com/fr-fr/home/home.html, https://www.basic-fit.com/fr-fr/prix…
- **Exemples de code HTML défaillant :**
```html
<h4 class="city__name">Paris</h4>

<h4 class="city__name">Paris</h4>

<h3 class="faq-accordion__title">Choisissez votre <span>sujet</span></h3>
```

### Règle : `image-redundant-alt` (Impact : MINOR)
- **Critères RGAA concernés :** non-mappé
- **Description du problème :** Alternative text of images should not be repeated as text
- **Pages impactées (3) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/home/home.html
- **Exemples de code HTML défaillant :**
```html
<img class="city__image" src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/fr/dw74240a2d/FR-city-component/Paris.jpg?sw=400" alt="Paris" loading="lazy">

<img class="city__image" src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/fr/dw74240a2d/FR-city-component/Paris.jpg?sw=400" alt="Paris" loading="lazy">

<img class="city__image" src="https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/fr/dw74240a2d/FR-city-component/Paris.jpg?sw=400" alt="Paris" loading="lazy">
```

### Règle : `landmark-one-main` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.2
- **Description du problème :** Document should have one main landmark
- **Pages impactées (28) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/fr-fr/declaration-cookie, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/checkout, https://www.basic-fit.com/fr-fr/service-a-la-clientele…
- **Exemples de code HTML défaillant :**
```html
<html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;">

<html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;">

<html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;">
```

### Règle : `landmark-unique` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.2
- **Description du problème :** Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- **Pages impactées (27) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/fr-fr/declaration-cookie, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/service-a-la-clientele, https://www.basic-fit.com/fr-fr/home/home.html…
- **Exemples de code HTML défaillant :**
```html
<div class="header-navigation" role="navigation">

<div class="header-navigation" role="navigation">

<div class="header-navigation" role="navigation">
```

### Règle : `region` (Impact : MODERATE)
- **Critères RGAA concernés :** 9.2
- **Description du problème :** All page content should be contained by landmarks
- **Pages impactées (30) :** https://www.basic-fit.com/fr-fr/home, https://www.basic-fit.com/fr-fr/declaration-cookie, https://www.basic-fit.com/, https://www.basic-fit.com/fr-fr/checkout, https://www.basic-fit.com/fr-fr/service-a-la-clientele…
- **Exemples de code HTML défaillant :**
```html
<a href="#main-content" class="skip-to-main-link skip-link" aria-label="Skip to main content">Skip to main content</a>

<a href="#main-content" class="skip-to-main-link skip-link" aria-label="Skip to main content">Skip to main content</a>

<a href="#main-content" class="skip-to-main-link skip-link" aria-label="Skip to main content">Skip to main content</a>
```

### Règle : `button-name` (Impact : CRITICAL)
- **Critères RGAA concernés :** 11.9
- **Description du problème :** Buttons must have discernible text
- **Pages impactées (5) :** https://www.basic-fit.com/fr-fr/checkout, https://www.basic-fit.com/fr-fr/salles-de-sport, https://www.basic-fit.com/fr-fr/salles-de-sport?filters=Ladies, https://www.basic-fit.com/fr-fr/salles-de-sport/nantes, https://www.basic-fit.com/fr-fr/salles-de-sport/lyon
- **Exemples de code HTML défaillant :**
```html
<button type="submit" id="js-btn-submit-search" data-cy="map-search-bttn"></button>

<button class="js-store-tile-swiper-prev-81185974935c4193af6f08437922a4f7 store-tile-slider-arrow-prev"></button>

<button class="js-store-tile-swiper-prev-b342bc2f84074a6ab7b073e313c86123 store-tile-slider-arrow-prev"></button>
```

### Règle : `link-name` (Impact : SERIOUS)
- **Critères RGAA concernés :** 6.1, 6.2
- **Description du problème :** Links must have discernible text
- **Pages impactées (1) :** https://www.basic-fit.com/fr-fr/service-a-la-clientele
- **Exemples de code HTML défaillant :**
```html
<a href="https://my.basic-fit.com/login" target="_blank">
```

### Règle : `aria-hidden-focus` (Impact : SERIOUS)
- **Critères RGAA concernés :** 7.1
- **Description du problème :** ARIA hidden element must not be focusable or contain focusable elements
- **Pages impactées (1) :** https://www.basic-fit.com/fr-fr/fitness/support
- **Exemples de code HTML défaillant :**
```html
<button type="button" class="find-link find-link--location js-location" aria-hidden="true">
        Utiliser votre localisation
    </button>
```

### Règle : `frame-title` (Impact : SERIOUS)
- **Critères RGAA concernés :** 2.1
- **Description du problème :** Frames must have an accessible name
- **Pages impactées (1) :** https://www.basic-fit.com/fr-fr/entrainements-video
- **Exemples de code HTML défaillant :**
```html
<iframe width="100%" src="https://www.youtube.com/embed/dPY1cXq3f2M?modestbranding=1&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
```

---
## Instructions de correction
Ne traite que les erreurs axe-core listées ci-dessus. Regroupe les corrections communes, précise les pages ou éléments concernés et donne pour chacun des étapes directement applicables au code source. Utilise un exemple de code minimal uniquement lorsqu'il est justifié par les extraits. N'inclus aucun audit supplémentaire, conseil générique, feuille CSS globale, script automatique, résumé ou explication longue. Si un extrait ne permet pas de confirmer une correction fiable, indique ce qui doit être vérifié sans inventer de solution.
