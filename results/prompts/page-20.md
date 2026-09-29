Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


## Page : https://www.basic-fit.com/fr-fr/salles-de-sport/paris

## Violations détectées par axe-core
- color-contrast (serious) [RGAA 3.2] : Elements must meet minimum color contrast ratio thresholds
  ex: <a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>
- heading-order (moderate) [RGAA 9.1] : Heading levels should only increase by one
  ex: <h3 class="usp-tile-component__tile-title">
                <span>Plus de</span>
                <span class="orange">800 clubs</span>
            </h3>
- landmark-one-main (moderate) [RGAA 9.2] : Document should have one main landmark
  ex: <html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;">
- landmark-unique (moderate) [RGAA 9.2] : Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
  ex: <div class="header-navigation" role="navigation">
- region (moderate) [RGAA 9.2] : All page content should be contained by landmarks
  ex: <a href="#main-content" class="skip-to-main-link skip-link" aria-label="Skip to main content">Skip to main content</a>

## Code HTML
```html
<!DOCTYPE html><html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;"><head>
<meta charset="UTF-8">

<meta http-equiv="x-ua-compatible" content="ie=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">







    <script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/destination?id=AW-967881324&amp;cx=c&amp;gtm=4e69p1"></script><script src="https://cdn.seamly-app.com/basicfit/client/v1/faq.js?v=1790682746719" async=""></script><script src="https://cdn.seamly-app.com/basicfit/client/v1/index.js?v=1790682746718" async=""></script><script type="text/javascript" charset="UTF-8" async="" src="https://consent.cookiebot.com/617f1858-ecb0-4c98-8ac5-383ed1c7ed56/cc.js?renew=false&amp;referer=www.basic-fit.com&amp;dnt=false&amp;init=false"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=AW-960670531&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=DC-5116490&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=G-NF41CTP09F&amp;cx=c&amp;gtm=4e69p1"></script><script async="" src="https://sst.basic-fit.com/gtm.js?id=GTM-PD6Q6J"></script><script>
        (() => {
            // Check if the back to checkout banner should be shown (reached at least step 2 and havent completed a succesful checkout yet)
            const abandonedCartBanner = sessionStorage.getItem('abandoned-cart-banner') === '1' && sessionStorage.getItem('subscription-checkout-completed') !== '1';
            document.documentElement.classList.toggle('abandoned-cart-active', abandonedCartBanner);
        })();
    </script>






    <meta name="robots" content="index, follow">





    <link rel="canonical" href="https://www.basic-fit.com/fr-fr/salles-de-sport/paris">



<title>
    Salle(s) de sport à Paris | Basic-Fit France
</title>

<meta name="description" content="Retrouvez Basic-Fit à Paris. Nos salles de sport proposent 7 zones d'entraînement, des entraînements vidéo et sont ouvertes 7 jours sur 7. Inscrivez-vous maintenant.">
















    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-fr/salles-de-sport/paris" hreflang="fr-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-fr/gyms/paris" hreflang="en-fr">
    





<link rel="shortcut icon" href="/on/demandware.static/Sites-BFE-Site/-/default/dw4fb8fce0/images/favicon.ico">
<link rel="icon" type="image/svg+xml" href="/on/demandware.static/Sites-BFE-Site/-/default/dw6ecfd870/img/favicon.svg">
<link rel="icon" type="image/png" href="/on/demandware.static/Sites-BFE-Site/-/default/dwa8ce1d8c/img/favicon-32x32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/on/demandware.static/Sites-BFE-Site/-/default/dw8f0abf99/img/favicon-180x180.png">


<link rel="preload" href="/on/demandware.static/Sites-BFE-Site/-/default/dw514615e6/fonts/icons.woff" as="font" type="font/woff" crossorigin="anonymous">
<link rel="preload" href="/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-ExtraBold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-Heavy.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">


<style>
    @font-face {
        font-family: iconfont;
        src: url(/on/demandware.static/Sites-BFE-Site/-/default/dw514615e6/fonts/icons.woff) format("woff");
        font-display: block;
    }

    @font-face {
        font-family: HeadingProTreble-ExtraBold;
        src: url('/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-ExtraBold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: HeadingProTreble-Heavy;
        src: url('/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-Heavy.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: HeadingProTreble-Regular;
        src: url('/on/demandware.static/Sites-BFE-Site/-/default/fonts/HeadingProTreble-Regular.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
</style>

<link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/root/global.css">


    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/citypage.css">


<style media="screen">
    @media not all and (min-resolution:.001dpcm) {
        @media {
            .safari-only {
                display: block;
            }
        }
    }
</style>





<!-- loop all the ab tests -->







    <meta property="og:title" content="Salle(s) de sport à Paris | Basic-Fit France">



    <meta property="og:description" content="Retrouvez Basic-Fit à Paris. Nos salles de sport proposent 7 zones d'entraînement, des entraînements vidéo et sont ouvertes 7 jours sur 7. Inscrivez-vous maintenant.">



    <meta property="og:url" content="https://www.basic-fit.com/fr-fr/salles-de-sport/paris">



    <meta property="og:type" content="article">



    <meta property="og:image" content="https://www.basic-fit.com/on/demandware.static/Sites-BFE-Site/-/default/dw88b6b6bd/img/svg/logo-bf-orange.svg">



    <meta property="og:site_name" content="Basic-Fit Europe">





<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:site" content="@BasicFitFr">

<meta property="twitter:title" content="Salle(s) de sport à Paris | Basic-Fit France">


<meta property="twitter:description" content="Retrouvez Basic-Fit à Paris. Nos salles de sport proposent 7 zones d'entraînement, des entraînements vidéo et sont ouvertes 7 jours sur 7. Inscrivez-vous maintenant.">

<meta property="twitter:image" content="https://www.basic-fit.com/on/demandware.static/Sites-BFE-Site/-/default/dw88b6b6bd/img/svg/logo-bf-orange.svg">




<script>
    var dataLayer = window.dataLayer = window.dataLayer || [];

    // Google Consent Mode
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'granted',
        ad_personalization: 'denied',
        ad_user_data: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied'
    });

    dataLayer.push({
            pageCountry: 'FR',
            pageLanguage: 'FR',
            internalTraffic: 'false',
            eventId: '929439289149076'
    });
    dataLayer.push({'event':'cookie.consent.system.page.init'});
    dataLayer.push({ page: null });
    dataLayer.push({"event":"data_ready","page":{"page_type":"salles-de-sport","page_country":"FR","page_language":"FR"},"traffictype":{"platform":"web","ip_address":"37.67.144.58"}});
</script>


    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://sst.basic-fit.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PD6Q6J');</script>
<!-- End Google Tag Manager -->







    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="617f1858-ecb0-4c98-8ac5-383ed1c7ed56" async="async" fetchpriority="high"></script>



<script>//common/scripts.isml</script>
<script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/main.js"></script>

    <script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/cityPage.js">
    </script>



<script src="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.js"></script>

<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<noscript>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.css" />
</noscript>


<script src="https://d5yoctgpv4cpx.cloudfront.net/RUM-2A7BA8F27F/v4-www.basic-fit.com.js"></script><style type="text/css" id="CookieConsentStateDisplayStyles">.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}</style><style>.seamly-faq-placeholder .faq-accordion.faq-accordion{max-width:1320px;overflow:hidden;padding:0 16px;position:relative}.seamly-faq-placeholder .faq-accordion.faq-accordion a:focus,.seamly-faq-placeholder .faq-accordion.faq-accordion button:focus{outline:none}.seamly-faq-placeholder .faq-accordion.faq-accordion a:focus-visible,.seamly-faq-placeholder .faq-accordion.faq-accordion button:focus-visible{border-radius:4px;outline:2px solid #592bb2;outline-offset:2px}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion.faq-accordion{display:flex}.seamly-faq-placeholder .faq-accordion__categories{flex:0 0 33.33%;width:33.33%}}.seamly-faq-placeholder .faq-accordion__title,.seamly-faq-placeholder .faq-accordion__title span{color:#000;font-family:HeadingProTreble-Heavy,sans-serif;font-size:20px;font-weight:800;line-height:1.25;margin:0 0 8px;text-transform:uppercase}.seamly-faq-placeholder .faq-accordion__category-list{list-style:none;margin:0;padding:0}.seamly-faq-placeholder .faq-accordion__category-list__item{border:0;border-top:2px dotted #d0b896}.seamly-faq-placeholder .faq-accordion__category-list__item:first-child{border-top:0}.seamly-faq-placeholder .faq-accordion__category-list__item__button{align-items:center;-webkit-appearance:none;appearance:none;background:none;border:0;color:#2d2d2d;cursor:pointer;display:flex;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:14px;gap:16px;justify-content:space-between;line-height:1.25;padding:24px 0;position:relative;text-align:left;transition:color .15s ease-out,padding .15s ease-out;width:100%}.seamly-faq-placeholder .faq-accordion__category-list__item__button:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMTEuOTYzIDIwLjIwMmEuNC40IDAgMCAxLS41NjYgMGwtLjg0OC0uODQ4YS40LjQgMCAwIDEgMC0uNTY2TDE2LjMzNyAxM0g0LjRhLjQuNCAwIDAgMS0uNC0uNHYtMS4yYS40LjQgMCAwIDEgLjQtLjRoMTEuOTM2bC01Ljc4OC01Ljc4OGEuNC40IDAgMCAxIDAtLjU2N2wuODQ4LS44NDdhLjQuNCAwIDAgMSAuNTY2IDBsNy45MTkgNy45MTlhLjQuNCAwIDAgMSAwIC41NjZ6Ii8+Cjwvc3ZnPg==);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:20px;right:16px;transition:transform .15s ease-out;width:20px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__category-list__item__button:hover{color:#3b1480}.seamly-faq-placeholder .faq-accordion__category-list__item__button:hover:after{filter:brightness(.5) saturate(1.5);transform:translateX(4px)}}.seamly-faq-placeholder .faq-accordion__category-list__item__button:active{color:#2b0961}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__category-list__item__button{font-size:16px}}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button{color:#1200cc;justify-content:flex-start}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMjEuMzE0IDYuNjE0IDkuMTM4IDE4LjgwMiAyLjcgMTIuMzY0bDEuNDE0LTEuNDE0IDUuMDIzIDUuMDIyTDE5Ljg5OSA1LjJ6Ii8+Cjwvc3ZnPg==);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:20px;transition:transform .15s ease-out;width:20px}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:after{display:none}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:hover{color:#3b1480}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:hover:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMjEuMzE0IDYuNjE0IDkuMTM4IDE4LjgwMiAyLjcgMTIuMzY0bDEuNDE0LTEuNDE0IDUuMDIzIDUuMDIyTDE5Ljg5OSA1LjJ6Ii8+Cjwvc3ZnPg==)}}.seamly-faq-placeholder .faq-accordion__content{scrollbar-color:#d0b896 transparent}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar{background-color:transparent;height:16px;width:16px}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:#d0b896;border:2px solid transparent;border-radius:8px;height:16px;-webkit-transition:background-color .15s ease-out;transition:background-color .15s ease-out;width:16px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb:hover{background-color:#d0b896}}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb:active{background-color:#d0b896}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-button{display:none;height:0;width:0}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-corner{background-color:transparent}.seamly-faq-placeholder .faq-accordion__content{flex:2;padding:0 0 0 32px;transform:translateX(0);transition:transform .3s ease}@media(max-width:766px){.seamly-faq-placeholder .faq-accordion__content{background:#fff;height:100%;left:0;overflow-y:auto;padding:0;position:absolute;top:0;transform:translateX(-100%);width:100%;z-index:1}}.seamly-faq-placeholder .faq-accordion__content.is-expanded{transform:translateX(0)}.seamly-faq-placeholder .faq-accordion__back-button{background:#fff;border:0;color:#592bb2;cursor:pointer;display:block;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:16px;left:0;line-height:1.25;padding:16px 0 16px 32px;position:sticky;text-align:left;top:0;width:100%;z-index:1}.seamly-faq-placeholder .faq-accordion__back-button:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMi4wMzcgMy43OThhLjQuNCAwIDAgMSAuNTY3IDBsLjg0Ny44NDdhLjQuNCAwIDAgMSAwIC41NjdMNy42NjMgMTFoMTEuOTM2YS40LjQgMCAwIDEgLjQuNHYxLjJhLjQuNCAwIDAgMS0uNC40SDcuNjYzbDUuNzg4IDUuNzg4YS40LjQgMCAwIDEgMCAuNTY3bC0uODQ3Ljg0N2EuNC40IDAgMCAxLS41NjcgMGwtNy45MTktNy45MmEuNC40IDAgMCAxIDAtLjU2NXoiLz4KPC9zdmc+);background-position:50% 50%;background-repeat:no-repeat;background-size:20px;content:"";height:20px;left:0;position:absolute;top:50%;transform:translateY(-50%);transition:opacity .15s ease-out;width:20px;z-index:1}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__back-button{display:none}}.seamly-faq-placeholder .accordion{border:0;gap:0;list-style:none;margin:0;padding:0}.seamly-faq-placeholder .faq-accordion-category__title,.seamly-faq-placeholder .faq-accordion-category__title span{color:#000;font-family:HeadingProTreble-Heavy,sans-serif;font-size:24px;font-weight:800;line-height:1.25;margin:0;text-transform:uppercase}.seamly-faq-placeholder .accordion__item{border-bottom:2px dotted #d0b896;border-top:0}.seamly-faq-placeholder .accordion__item ol,.seamly-faq-placeholder .accordion__item ul{display:flex;flex-direction:column;gap:4px;padding-left:24px}.seamly-faq-placeholder .accordion__item ul{list-style-type:disc}.seamly-faq-placeholder .accordion__item ul li>ul{list-style-type:circle}.seamly-faq-placeholder .accordion__item ol{padding-left:24px}.seamly-faq-placeholder .accordion__item ol li>ol{list-style-type:lower-alpha}.seamly-faq-placeholder .accordion__item li::marker{color:#2d2d2d;font-size:1em;line-height:0}.seamly-faq-placeholder .accordion__item:has(>.collapse .collapse__button:hover){border-color:#3b1480}.seamly-faq-placeholder .sub-category>.collapse__content.is-expanded{padding-bottom:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item:first-child .sub-category,.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion>.accordion__item:last-child,.seamly-faq-placeholder .sub-category{border:0}.seamly-faq-placeholder .collapse__title{margin:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button{-webkit-appearance:none;appearance:none;background:none;border:0;color:#000;cursor:pointer;display:block;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:14px;font-weight:700;line-height:1.25;margin:0;opacity:1;padding:24px 28px 20px 0;position:relative;text-align:left;transition:color .15s ease-out;width:100%}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJtMTIgMTQuMTA1IDYuNzg5LTYuNzg4YS40LjQgMCAwIDEgLjU2NSAwbC44NDkuODQ5YS40LjQgMCAwIDEgMCAuNTY1bC03LjkyIDcuOTJhLjQuNCAwIDAgMS0uNTY2IDBsLTcuOTItNy45MmEuNC40IDAgMCAxIDAtLjU2NWwuODUtLjg0OWEuNC40IDAgMCAxIC41NjUgMHoiLz4KPC9zdmc+);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:24px;position:absolute;right:0;top:24px;transform:rotate(0deg);transition:top .15s ease-out,transform .15s ease-out,opacity .15s ease-out;width:24px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:hover{color:#3b1480}}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:active{color:#2b0961}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button[aria-expanded=true]{margin-bottom:16px;padding-bottom:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button[aria-expanded=true]:after{top:24px;transform:rotate(180deg)}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button{font-size:16px}}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button{font-size:14px;padding:12px 28px 12px 0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button:after{top:12px}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button[aria-expanded=true]{margin:0;padding:24px 28px 8px 0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button[aria-expanded=true]:after{top:16px}.seamly-faq-placeholder .collapse__content .accordion__item{border:0}.seamly-faq-placeholder .sub-category>.collapse__title .collapse__button{border:0;opacity:1;padding:24px 28px 20px 0}.seamly-faq-placeholder .sub-category>.collapse__title .collapse__button:after{height:20px;width:20px}.seamly-faq-placeholder .sub-category>.collapse__title .collapse__button[aria-expanded=true]{margin:0;padding:24px 0 8px}.seamly-faq-placeholder .collapse__content{display:none}.seamly-faq-placeholder .collapse__content p:first-child{margin-top:0}.seamly-faq-placeholder .collapse__content li p{margin:0 0 16px}.seamly-faq-placeholder .collapse__content li p:last-child{margin:0}.seamly-faq-placeholder .collapse__content.is-expanded{display:block;margin:0 0 24px;padding:0}.seamly-faq-placeholder .collapse__content a{color:#2400ff;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;-webkit-text-decoration:underline;text-decoration:underline;transition:text-decoration-color .15s ease-out,color .15s ease-out;word-break:normal}@media(hover:hover){.seamly-faq-placeholder .collapse__content a:hover{color:#1200cc;text-decoration-color:transparent}}.seamly-faq-placeholder .collapse__content a:focus-visible{color:#0c0099;outline-offset:4px;text-decoration-color:transparent}.seamly-faq-placeholder .collapse__content a:active{color:#0c0099;text-decoration-color:transparent}</style><style>@keyframes cvco-loader{0%,75%,to{border-radius:50%;transform:scaleY(.45)}37.5%{border-radius:2.5px;transform:scaleY(1)}}@keyframes cvco-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes cvco-blink{0%,to{opacity:0}50%{opacity:1}}.cvco-app .cvco-chat,.cvco-app .cvco-chat *,.cvco-app .cvco-chat :after,.cvco-app .cvco-chat :before{box-sizing:border-box}.cvco-app .cvco-chat{color:#3d4166;display:flex;flex-direction:column;font-family:arial,helvetica,sans-serif;font-size:12px;outline:0;transform-origin:100% 100%;transition:margin .3s ease,height .3s ease,transform .3s ease,opacity .3s ease}.cvco-app .cvco-chat--layout-inline{background-color:transparent;background-color:initial;box-shadow:none;height:-moz-fit-content;height:fit-content}@media(min-width:641px){.cvco-app .cvco-chat--layout-inline{flex-direction:row}}.cvco-app .cvco-chat--layout-inline.cvco-chat--collapsed .cvco-chat-wrapper{height:auto}.cvco-app .cvco-chat--layout-window{max-height:calc(85vh - 40px);max-width:calc(100vw - 40px)}@media(min-width:641px){.cvco-app .cvco-chat--layout-window{max-height:calc(100vh - 40px)}@supports(-webkit-overflow-scrolling:touch){.cvco-app .cvco-chat--layout-window{max-height:calc(90vh - 40px)}}}@media(min-width:1025px){.cvco-app .cvco-chat--layout-window{bottom:20px;max-height:calc(100vh - 40px);right:20px}@supports(-webkit-overflow-scrolling:touch){.cvco-app .cvco-chat--layout-window{max-height:calc(90vh - 40px)}}}.cvco-app .cvco-chat--layout-window{bottom:20px;display:none;height:720px;max-width:calc(100% - 40px);opacity:0;position:fixed;right:20px;transform:scale(0);width:360px;z-index:1}.cvco-app .cvco-chat--layout-window.cvco-transition--visible{display:flex}.cvco-app .cvco-chat--layout-window.cvco-transition--in{opacity:1;transform:scale(1)}.cvco-app .cvco-chat--layout-app{bottom:0;height:100%;left:0;max-height:100%;max-width:100%;position:fixed;right:0;top:0;width:100%;z-index:1}.cvco-app .cvco-chat-wrapper{backface-visibility:hidden;border:1px solid #a3b4bf;border-radius:10px;box-shadow:0 0 20px 0 rgba(0,0,0,.1);display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:flex .3s ease,width .3s ease,height .3s ease,border-radius .3s ease;width:100%;z-index:1}.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{height:0;width:100%}@media(min-width:641px)and (max-width:1023px){.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{flex:0 0 100%}.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper:not(:last-child){flex:0 0 50%;width:50%}}@media(min-width:1025px){.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{flex:0 0 67%;width:67%}}.cvco-app .cvco-chat--layout-inline.cvco-transition--in .cvco-chat-wrapper{height:720px;max-height:90vh}.cvco-app .cvco-chat__container{display:flex;flex-grow:1;justify-content:center;position:relative}.cvco-app .cvco-chat__container__scroll-area{display:flex;flex-direction:column;height:100%;justify-content:space-between;overflow-y:auto;overscroll-behavior:contain;position:relative;width:100%;will-change:scroll-position}.cvco-app .cvco-chat__container__header{position:sticky;top:0;z-index:1}.cvco-app .cvco-chat__body{display:flex;flex-grow:1;padding:0;position:relative}.cvco-app .cvco-conversation__container>div[role=log]{margin-top:auto}.cvco-app .cvco-chat__entry{border-top:1px solid #dee3e5;flex:0 0 auto;padding:10px;position:relative;width:100%}.cvco-app .cvco-chat__entry:has(.cvco-entry__body--hidden){border-top:0;padding-bottom:0;padding-top:0}.cvco-app .cvco-chat__entry .cvco-entry__body--hidden{display:none}.cvco-app .cvco-chat--layout-inline.cvco-chat--collapsed .cvco-chat__entry{border:0}.cvco-app .cvco-entry__body{align-items:flex-end;display:flex;gap:5px;width:100%}.cvco-app p{margin:0}.cvco-app img{max-width:100%}.cvco-app .cvco-label{color:#4a48c1;display:block}.cvco-app .cvco-conversation__item--abort-transaction{padding-top:10px}.cvco-app .cvco-conversation__item--abort-transaction .cvco-abort-transaction__button{background-color:#fff;border:1px solid;border-radius:10px;padding:5px 10px}.cvco-app .cvco-avatar{border-radius:5px;display:block;flex-shrink:0;height:32px;overflow:hidden;position:relative;width:32px}.cvco-app .cvco-avatar>.cvco-icon,.cvco-app .cvco-avatar__graphic{display:block}.cvco-app .cvco-conversation__message+.cvco-avatar{align-self:flex-end;margin-left:10px}.cvco-app a:focus,.cvco-app button:focus,.cvco-app input:focus{outline:none}.cvco-app a:focus-visible,.cvco-app button:focus-visible,.cvco-app input:focus-visible{outline:1px dotted #212121;outline:1px auto -webkit-focus-ring-color}.cvco-app .cvco-button{background:none;border:0;cursor:pointer;gap:10px;margin:0;padding:0}.cvco-app .cvco-button span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit}.cvco-app .cvco-button--primary{background-color:#4a48c1;border-radius:5px;font-weight:700;min-height:40px;padding:10px 15px}.cvco-app .cvco-button--secondary{color:#4a48c1;font-weight:700;padding:10px 15px}.cvco-app .cvco-button--tertiary{background-color:transparent;background-color:initial;border-radius:5px;color:#fff;font-size:12px;font-weight:700;padding:2px 5px}.cvco-app .cvco-button[aria-disabled=true]{color:#5e727b;cursor:auto}.cvco-app .cvco-button__state{background-color:#eff3f6;border-radius:5px;color:inherit;display:inline-block;margin:0;padding:2px 10px}.cvco-app .cvco-choice-prompt{display:flex;flex-direction:column;gap:5px;padding:0}.cvco-app .cvco-choice-prompt__item{display:block;width:100%}.cvco-app .cvco-choice-prompt__item .cvco-button{display:inline-block;white-space:normal}.cvco-app .cvco-choice-prompt__item--secondary .cvco-button{background-color:transparent;background-color:initial;color:#4a48c1;padding:5px 0}.cvco-app .cvco-button--choose-again{align-items:center;display:flex;gap:10px;line-height:1;margin:5px 0;padding:0;transition:margin .3s ease,color .3s ease}.cvco-app .cvco-button--choose-again[aria-expanded=true]{margin:20px 0 10px}.cvco-app .cvco-button--choose-again .cvco-icon{align-items:center;display:flex;flex:0 0 8px;height:8px;justify-content:center;margin:0;padding:0;transform-origin:50% 50%;transition:transform .3s ease;width:8px}.cvco-app .cvco-button--choose-again .cvco-icon path{fill:currentcolor}.cvco-app .cvco-button--choose-again[aria-expanded=true] .cvco-icon{transform:rotate(180deg)}.cvco-app .cvco-conversation__container{bottom:0;display:flex;flex:1 1 100%;flex-direction:column;gap:10px;height:100%;justify-content:space-between;left:0;max-height:100%;position:absolute;right:0;top:0}.cvco-app .cvco-conversation__container div[role=log]{margin:auto 0 0}.cvco-app .cvco-conversation{gap:10px;justify-content:space-between;list-style:none;margin:auto 0 0;padding:20px 20px 0;width:100%}.cvco-app .cvco-conversation:after{content:"";display:block;flex:0 0 10px;height:10px;width:100%}.cvco-app .cvco-chat--layout-inline .cvco-conversation{position:relative}.cvco-app .cvco-conversation__item{display:block;width:100%}.cvco-app .cvco-conversation__item--new-participant{margin-top:10px}.cvco-app .cvco-conversation__item--new-participant:first-child{margin-top:0}.cvco-app .cvco-divider{background:linear-gradient(180deg,#fff,#eff3f6);background-repeat:no-repeat;background-size:100% 40px;display:flex;justify-content:center;line-height:1.5;margin:20px -20px 0;overflow:hidden;padding:65px 30px 0;position:relative}.cvco-app .cvco-divider:before{background:radial-gradient(110px at 50% 300%,rgba(74,72,193,.5) 0,hsla(0,0%,100%,0) 99.99%,rgba(74,72,193,0) 100%);background-repeat:no-repeat;content:"";height:40px;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100%}.cvco-app .cvco-conversation__item:first-child .cvco-divider{margin-top:0}.cvco-app .cvco-divider--type-time-indicator{padding-bottom:20px;padding-top:60px}.cvco-app .cvco-divider--type-time-indicator:before{display:none}.cvco-app .cvco-divider__graphic{border-radius:5px;height:32px;left:50%;position:absolute;top:40px;transform:translate(-50%,-60%);width:32px}.cvco-app .cvco-divider__graphic .cvco-avatar,.cvco-app .cvco-divider__graphic .cvco-icon,.cvco-app .cvco-divider__graphic .cvco-icon svg{height:100%;width:100%}.cvco-app .cvco-divider__body{align-items:center;display:flex;flex-direction:column;gap:5px;justify-content:center;max-width:300px;text-align:center}.cvco-app .cvco-divider__body .cvco-divider__title{font-size:12px;font-weight:700;marg
```
