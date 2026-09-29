Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


## Page : https://www.basic-fit.com/fr-fr/salles-de-sport

## Violations détectées par axe-core
- button-name (critical) [RGAA 11.9] : Buttons must have discernible text
  ex: <button class="js-store-tile-swiper-prev-81185974935c4193af6f08437922a4f7 store-tile-slider-arrow-prev"></button>
- color-contrast (serious) [RGAA 3.2] : Elements must meet minimum color contrast ratio thresholds
  ex: <a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>
- region (moderate) [RGAA 9.2] : All page content should be contained by landmarks
  ex: <a href="#main-content" class="skip-to-main-link skip-link" aria-label="Skip to main content">Skip to main content</a>

## Code HTML
```html
<!DOCTYPE html><html lang="en" style="--scrollbar-width: 0px; --header-height: 116px;"><head>
<meta charset="UTF-8">

<meta http-equiv="x-ua-compatible" content="ie=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">







    <script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/destination?id=AW-967881324&amp;cx=c&amp;gtm=4e69p1"></script><script src="https://cdn.seamly-app.com/basicfit/client/v1/faq.js?v=1790682675711" async=""></script><script src="https://cdn.seamly-app.com/basicfit/client/v1/index.js?v=1790682675710" async=""></script><script type="text/javascript" charset="UTF-8" async="" src="https://consent.cookiebot.com/617f1858-ecb0-4c98-8ac5-383ed1c7ed56/cc.js?renew=false&amp;referer=www.basic-fit.com&amp;dnt=false&amp;init=false"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=AW-960670531&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=DC-5116490&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=G-NF41CTP09F&amp;cx=c&amp;gtm=4e69p1"></script><script async="" src="https://sst.basic-fit.com/gtm.js?id=GTM-PD6Q6J"></script><script>
        (() => {
            // Check if the back to checkout banner should be shown (reached at least step 2 and havent completed a succesful checkout yet)
            const abandonedCartBanner = sessionStorage.getItem('abandoned-cart-banner') === '1' && sessionStorage.getItem('subscription-checkout-completed') !== '1';
            document.documentElement.classList.toggle('abandoned-cart-active', abandonedCartBanner);
        })();
    </script>






    <meta name="robots" content="index, follow">



    <script type="application/ld+json">
    {"@context":"http://schema.org","@type":"ItemList","numberOfItems":908,"itemListOrder":"ItemListOrderAscending","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"ExerciseGym","name":"Salle de sport Rue Jean Mennesson 24/7 Abbeville","address":{"@type":"PostalAddress","streetAddress":"18 Rue Jean Mennesson","addressLocality":"Abbeville","postalCode":"80100","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4335/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-abbeville-rue-jean-mennesson-24-7-36cdf3ab9d1949acb96797afd45e8687.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":2,"item":{"@type":"ExerciseGym","name":"Salle de sport Rue du Treize Juin Aire Sur L’Adour","address":{"@type":"PostalAddress","streetAddress":"Rue du Treize Juin 37","addressLocality":"Aire Sur L’Adour","postalCode":"40800","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4660/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-aire-sur-l%E2%80%99adour-rue-du-treize-juin-ffcb73060bf949368a23bbd6b0f7b778.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"06:00","closes":"22:30"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday","Sunday"],"opens":"09:00","closes":"19:00"}]}},{"@type":"ListItem","position":3,"item":{"@type":"ExerciseGym","name":"Salle de sport Chemin du Bois Aire-sur-la-Lys","address":{"@type":"PostalAddress","streetAddress":"Chemin du Bois","addressLocality":"Aire-sur-la-Lys","postalCode":"62120","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/7047/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-aire-sur-la-lys-chemin-du-bois-81185974935c4193af6f08437922a4f7.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"06:00","closes":"22:30"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday","Sunday"],"opens":"09:00","closes":"19:00"}]}},{"@type":"ListItem","position":4,"item":{"@type":"ExerciseGym","name":"Salle de sport Avenue Guillaume du Vair 24/7 Aix-en-Provence","address":{"@type":"PostalAddress","streetAddress":"1176 Avenue Guillaume du Vair","addressLocality":"Aix-en-Provence","postalCode":"13080","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4264/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-aix-en-provence-avenue-guillaume-du-vair-24-7-cdb441ec2d0241ee8b40a6457f59bbc8.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":5,"item":{"@type":"ExerciseGym","name":"Salle de sport Rue Lionel Terray Aix-les-Bains","address":{"@type":"PostalAddress","streetAddress":"104 Rue Lionel Terray","addressLocality":"Aix-les-Bains","postalCode":"73100","addressCountry":"FR"},"image":"https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw39684a00/images/ClubsFR/Basic-Fit-Aix-Les-Bains-Lionel-Terray-1.jpg?sw=380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-aix-les-bains-rue-lionel-terray-1d1910b39f7d4f25a60bad228542846b.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"06:00","closes":"22:30"}]}},{"@type":"ListItem","position":6,"item":{"@type":"ExerciseGym","name":"Salle de sport Avenue Joseph Fontanet 24/7 Albertville","address":{"@type":"PostalAddress","streetAddress":"453 Avenue Joseph Fontanet","addressLocality":"Albertville","postalCode":"73200","addressCountry":"FR"},"image":"https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw973b7255/images/Default-club-images/ClubPhoto_Default_08.jpg?sw=380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-albertville-avenue-joseph-fontanet-24-7-44f2d37a22ef4fc8be08f7cf9b0f52a3.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":7,"item":{"@type":"ExerciseGym","name":"Salle de sport Francisco Goya Albi","address":{"@type":"PostalAddress","streetAddress":"Rue Francisco Goya 7","addressLocality":"Albi","postalCode":"81000","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4232/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-albi-francisco-goya-e7c7c6a01ddf432ab14d91606c4a0442.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"06:00","closes":"22:30"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday","Sunday"],"opens":"09:00","closes":"19:00"}]}},{"@type":"ListItem","position":8,"item":{"@type":"ExerciseGym","name":"Salle de sport Les Portes d’Albi 24/7 Albi","address":{"@type":"PostalAddress","streetAddress":"Les Portes d’Albi","addressLocality":"Albi","postalCode":"81000","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4412/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-albi-les-portes-d%E2%80%99albi-24-7-65aac5cf41034e1db31373ad9debd668.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":9,"item":{"@type":"ExerciseGym","name":"Salle de sport Route de la Drèche Albi","address":{"@type":"PostalAddress","streetAddress":"41 Route de la Drèche","addressLocality":"Albi","postalCode":"81000","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4203/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-albi-route-de-la-dreche-5114ffbedbe54728a4dcd19e01d9356b.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"06:00","closes":"22:30"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday","Sunday"],"opens":"09:00","closes":"19:00"}]}},{"@type":"ListItem","position":10,"item":{"@type":"ExerciseGym","name":"Salle de sport Impasse du Gardonnet 24/7 Ales","address":{"@type":"PostalAddress","streetAddress":"Impasse du Gardonnet 121","addressLocality":"Ales","postalCode":"30100","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4339/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-ales-impasse-du-gardonnet-3bc4a365563e4e8d8a058245f854012d.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":11,"item":{"@type":"ExerciseGym","name":"Salle de sport Rue Charles Darwin 24/7 Allonnes","address":{"@type":"PostalAddress","streetAddress":"1 Rue Charles Darwin","addressLocality":"Allonnes","postalCode":"72700","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/4130/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-allonnes-rue-charles-darwin-24-7-08ae6276e877426d8c8e1a8805a270fa.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}},{"@type":"ListItem","position":12,"item":{"@type":"ExerciseGym","name":"Salle de sport Chemin Sous Saint Etienne 24/7 Alès","address":{"@type":"PostalAddress","streetAddress":"197 Chemin Sous Saint Etienne","addressLocality":"Alès","postalCode":"30100","addressCountry":"FR"},"image":"https://brand.basic-fit.com/match/KP_Number/7066/Club_area/Front_club_outside/Front_club_outside?io=transform:fit,width:380","url":"https://www.basic-fit.com/fr-fr/clubs/basic-fit-ales-chemin-sous-saint-etienne-24-7-52985a1cae91419c907efb4687fad0e4.html","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"24:00"}]}}]}
</script>




    <link rel="canonical" href="https://www.basic-fit.com/fr-fr/salles-de-sport">



<title>
    Trouver une salle de sport en France ! | Basic-Fit
</title>

<meta name="description" content="Vous cherchez une salle de sport proche de chez vous ? Avec plus de 1700 clubs, il y a toujours un club à proximité ! Inscrivez-vous dès maintenant !">
















    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-fr/salles-de-sport" hreflang="fr-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-nl/sportscholen" hreflang="nl-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/de-de/club-finder" hreflang="de-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-nl/club-finder" hreflang="en-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-de/club-finder" hreflang="en-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-be/club-finder" hreflang="en-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-lu/club-finder" hreflang="en-lu">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-es/club-finder" hreflang="en-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-be/fitnessclubs" hreflang="nl-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-fr/club-finder" hreflang="en-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/es-es/gimnasios" hreflang="es-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-be/salles-de-fitness" hreflang="fr-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-lu/salles-de-fitness" hreflang="fr-lu">
    





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


    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/finder.css">


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







    <meta property="og:title" content="Trouver une salle de sport en France ! | Basic-Fit">



    <meta property="og:description" content="Vous cherchez une salle de sport proche de chez vous ? Avec plus de 1700 clubs, il y a toujours un club à proximité ! Inscrivez-vous dès maintenant !">



    <meta property="og:url" content="https://www.basic-fit.com/fr-fr/salles-de-sport">



    <meta property="og:type" content="website">












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
            eventId: '82283579425122'
    });
    dataLayer.push({'event':'cookie.consent.system.page.init'});
    dataLayer.push({ page: null });
    dataLayer.push({"event":"data_ready","page":{"page_type":"salles-de-sport","page_country":"FR","page_language":"FR"},"traffictype":{"platform":"web","ip_address":"37.67.73.10"}});
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

    <script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/finder.js">
    </script>



<script src="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.js"></script><style type="text/css" id="CookieConsentStateDisplayStyles">.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}</style>

<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<noscript>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v3.17.0/mapbox-gl.css" />
</noscript>


<script src="https://d5yoctgpv4cpx.cloudfront.net/RUM-2A7BA8F27F/v4-www.basic-fit.com.js"></script><script src="https://bat.bing.com/p/action/4030756.js" type="text/javascript" async="" data-ueto="ueto_af3f0fbde6"></script><style>.seamly-faq-placeholder .faq-accordion.faq-accordion{max-width:1320px;overflow:hidden;padding:0 16px;position:relative}.seamly-faq-placeholder .faq-accordion.faq-accordion a:focus,.seamly-faq-placeholder .faq-accordion.faq-accordion button:focus{outline:none}.seamly-faq-placeholder .faq-accordion.faq-accordion a:focus-visible,.seamly-faq-placeholder .faq-accordion.faq-accordion button:focus-visible{border-radius:4px;outline:2px solid #592bb2;outline-offset:2px}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion.faq-accordion{display:flex}.seamly-faq-placeholder .faq-accordion__categories{flex:0 0 33.33%;width:33.33%}}.seamly-faq-placeholder .faq-accordion__title,.seamly-faq-placeholder .faq-accordion__title span{color:#000;font-family:HeadingProTreble-Heavy,sans-serif;font-size:20px;font-weight:800;line-height:1.25;margin:0 0 8px;text-transform:uppercase}.seamly-faq-placeholder .faq-accordion__category-list{list-style:none;margin:0;padding:0}.seamly-faq-placeholder .faq-accordion__category-list__item{border:0;border-top:2px dotted #d0b896}.seamly-faq-placeholder .faq-accordion__category-list__item:first-child{border-top:0}.seamly-faq-placeholder .faq-accordion__category-list__item__button{align-items:center;-webkit-appearance:none;appearance:none;background:none;border:0;color:#2d2d2d;cursor:pointer;display:flex;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:14px;gap:16px;justify-content:space-between;line-height:1.25;padding:24px 0;position:relative;text-align:left;transition:color .15s ease-out,padding .15s ease-out;width:100%}.seamly-faq-placeholder .faq-accordion__category-list__item__button:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMTEuOTYzIDIwLjIwMmEuNC40IDAgMCAxLS41NjYgMGwtLjg0OC0uODQ4YS40LjQgMCAwIDEgMC0uNTY2TDE2LjMzNyAxM0g0LjRhLjQuNCAwIDAgMS0uNC0uNHYtMS4yYS40LjQgMCAwIDEgLjQtLjRoMTEuOTM2bC01Ljc4OC01Ljc4OGEuNC40IDAgMCAxIDAtLjU2N2wuODQ4LS44NDdhLjQuNCAwIDAgMSAuNTY2IDBsNy45MTkgNy45MTlhLjQuNCAwIDAgMSAwIC41NjZ6Ii8+Cjwvc3ZnPg==);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:20px;right:16px;transition:transform .15s ease-out;width:20px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__category-list__item__button:hover{color:#3b1480}.seamly-faq-placeholder .faq-accordion__category-list__item__button:hover:after{filter:brightness(.5) saturate(1.5);transform:translateX(4px)}}.seamly-faq-placeholder .faq-accordion__category-list__item__button:active{color:#2b0961}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__category-list__item__button{font-size:16px}}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button{color:#1200cc;justify-content:flex-start}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMjEuMzE0IDYuNjE0IDkuMTM4IDE4LjgwMiAyLjcgMTIuMzY0bDEuNDE0LTEuNDE0IDUuMDIzIDUuMDIyTDE5Ljg5OSA1LjJ6Ii8+Cjwvc3ZnPg==);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:20px;transition:transform .15s ease-out;width:20px}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:after{display:none}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:hover{color:#3b1480}.seamly-faq-placeholder .faq-accordion__category-list__item.is-selected .faq-accordion__category-list__item__button:hover:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJNMjEuMzE0IDYuNjE0IDkuMTM4IDE4LjgwMiAyLjcgMTIuMzY0bDEuNDE0LTEuNDE0IDUuMDIzIDUuMDIyTDE5Ljg5OSA1LjJ6Ii8+Cjwvc3ZnPg==)}}.seamly-faq-placeholder .faq-accordion__content{scrollbar-color:#d0b896 transparent}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar{background-color:transparent;height:16px;width:16px}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:#d0b896;border:2px solid transparent;border-radius:8px;height:16px;-webkit-transition:background-color .15s ease-out;transition:background-color .15s ease-out;width:16px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb:hover{background-color:#d0b896}}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-thumb:active{background-color:#d0b896}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-button{display:none;height:0;width:0}.seamly-faq-placeholder .faq-accordion__content::-webkit-scrollbar-corner{background-color:transparent}.seamly-faq-placeholder .faq-accordion__content{flex:2;padding:0 0 0 32px;transform:translateX(0);transition:transform .3s ease}@media(max-width:766px){.seamly-faq-placeholder .faq-accordion__content{background:#fff;height:100%;left:0;overflow-y:auto;padding:0;position:absolute;top:0;transform:translateX(-100%);width:100%;z-index:1}}.seamly-faq-placeholder .faq-accordion__content.is-expanded{transform:translateX(0)}.seamly-faq-placeholder .faq-accordion__back-button{background:#fff;border:0;color:#592bb2;cursor:pointer;display:block;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:16px;left:0;line-height:1.25;padding:16px 0 16px 32px;position:sticky;text-align:left;top:0;width:100%;z-index:1}.seamly-faq-placeholder .faq-accordion__back-button:before{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMi4wMzcgMy43OThhLjQuNCAwIDAgMSAuNTY3IDBsLjg0Ny44NDdhLjQuNCAwIDAgMSAwIC41NjdMNy42NjMgMTFoMTEuOTM2YS40LjQgMCAwIDEgLjQuNHYxLjJhLjQuNCAwIDAgMS0uNC40SDcuNjYzbDUuNzg4IDUuNzg4YS40LjQgMCAwIDEgMCAuNTY3bC0uODQ3Ljg0N2EuNC40IDAgMCAxLS41NjcgMGwtNy45MTktNy45MmEuNC40IDAgMCAxIDAtLjU2NXoiLz4KPC9zdmc+);background-position:50% 50%;background-repeat:no-repeat;background-size:20px;content:"";height:20px;left:0;position:absolute;top:50%;transform:translateY(-50%);transition:opacity .15s ease-out;width:20px;z-index:1}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__back-button{display:none}}.seamly-faq-placeholder .accordion{border:0;gap:0;list-style:none;margin:0;padding:0}.seamly-faq-placeholder .faq-accordion-category__title,.seamly-faq-placeholder .faq-accordion-category__title span{color:#000;font-family:HeadingProTreble-Heavy,sans-serif;font-size:24px;font-weight:800;line-height:1.25;margin:0;text-transform:uppercase}.seamly-faq-placeholder .accordion__item{border-bottom:2px dotted #d0b896;border-top:0}.seamly-faq-placeholder .accordion__item ol,.seamly-faq-placeholder .accordion__item ul{display:flex;flex-direction:column;gap:4px;padding-left:24px}.seamly-faq-placeholder .accordion__item ul{list-style-type:disc}.seamly-faq-placeholder .accordion__item ul li>ul{list-style-type:circle}.seamly-faq-placeholder .accordion__item ol{padding-left:24px}.seamly-faq-placeholder .accordion__item ol li>ol{list-style-type:lower-alpha}.seamly-faq-placeholder .accordion__item li::marker{color:#2d2d2d;font-size:1em;line-height:0}.seamly-faq-placeholder .accordion__item:has(>.collapse .collapse__button:hover){border-color:#3b1480}.seamly-faq-placeholder .sub-category>.collapse__content.is-expanded{padding-bottom:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item:first-child .sub-category,.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion>.accordion__item:last-child,.seamly-faq-placeholder .sub-category{border:0}.seamly-faq-placeholder .collapse__title{margin:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button{-webkit-appearance:none;appearance:none;background:none;border:0;color:#000;cursor:pointer;display:block;font-family:HeadingProTreble-ExtraBold,sans-serif;font-size:14px;font-weight:700;line-height:1.25;margin:0;opacity:1;padding:24px 28px 20px 0;position:relative;text-align:left;transition:color .15s ease-out;width:100%}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTkyYmIyIiBkPSJtMTIgMTQuMTA1IDYuNzg5LTYuNzg4YS40LjQgMCAwIDEgLjU2NSAwbC44NDkuODQ5YS40LjQgMCAwIDEgMCAuNTY1bC03LjkyIDcuOTJhLjQuNCAwIDAgMS0uNTY2IDBsLTcuOTItNy45MmEuNC40IDAgMCAxIDAtLjU2NWwuODUtLjg0OWEuNC40IDAgMCAxIC41NjUgMHoiLz4KPC9zdmc+);background-position:50% 50%;background-repeat:no-repeat;background-size:100%;content:"";display:block;height:24px;position:absolute;right:0;top:24px;transform:rotate(0deg);transition:top .15s ease-out,transform .15s ease-out,opacity .15s ease-out;width:24px}@media(hover:hover){.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:hover{color:#3b1480}}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button:active{color:#2b0961}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button[aria-expanded=true]{margin-bottom:16px;padding-bottom:0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button[aria-expanded=true]:after{top:24px;transform:rotate(180deg)}@media(min-width:768px){.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__title .collapse__button{font-size:16px}}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button{font-size:14px;padding:12px 28px 12px 0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button:after{top:12px}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__button[aria-expanded=true]{margin:0;padding:24px 28px 8px 0}.seamly-faq-placeholder .faq-accordion__content__wrapper>.accordion .accordion__item .collapse .collapse__content .collapse__title .collapse__bu
```
