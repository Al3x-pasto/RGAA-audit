Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


## Page : https://www.basic-fit.com/fr-fr/massage

## Violations détectées par axe-core
- color-contrast (serious) [RGAA 3.2] : Elements must meet minimum color contrast ratio thresholds
  ex: <a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>
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







    <script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/destination?id=AW-967881324&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" charset="UTF-8" async="" src="https://consent.cookiebot.com/617f1858-ecb0-4c98-8ac5-383ed1c7ed56/cc.js?renew=false&amp;referer=www.basic-fit.com&amp;dnt=false&amp;init=false"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=AW-960670531&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=DC-5116490&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=G-NF41CTP09F&amp;cx=c&amp;gtm=4e69p1"></script><script src="https://cdn.seamly-app.com/basicfit/client/v1/index.js?v=1790682713985" async=""></script><script async="" src="https://sst.basic-fit.com/gtm.js?id=GTM-PD6Q6J"></script><script>
        (() => {
            // Check if the back to checkout banner should be shown (reached at least step 2 and havent completed a succesful checkout yet)
            const abandonedCartBanner = sessionStorage.getItem('abandoned-cart-banner') === '1' && sessionStorage.getItem('subscription-checkout-completed') !== '1';
            document.documentElement.classList.toggle('abandoned-cart-active', abandonedCartBanner);
        })();
    </script>






    <meta name="robots" content="index, follow">





    <link rel="canonical" href="https://www.basic-fit.com/fr-fr/massage">



<title>
    Basic-Fit - Fauteuils Massants
</title>

<meta name="description" content="Désormais, vous trouverez les nouveaux fauteuils de massage Basic-Fit dans tous nos clubs. Asseyez-vous et faites-vous plaisir.">
















    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-fr/massage" hreflang="fr-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-nl/massage" hreflang="nl-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/de-de/massage" hreflang="de-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-nl/massage" hreflang="en-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-de/massage" hreflang="en-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-be/massage" hreflang="en-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-lu/massage" hreflang="en-lu">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-es/massage" hreflang="en-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-be/massage" hreflang="nl-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-fr/massage" hreflang="en-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/es-es/massage" hreflang="es-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-be/massage" hreflang="fr-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-lu/massage" hreflang="fr-lu">
    





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


    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/pd-contentpageherobanner-component.css">

    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/pd-content-text-image-block-component.css">

    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/pd-image-text-component.css">

    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/pd-content-grid-slider-component.css">

    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/pd-component-swiper-navigation.css">


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







    <meta property="og:title" content="Basic-Fit - Fauteuils Massants">



    <meta property="og:description" content="Désormais, vous trouverez les nouveaux fauteuils de massage Basic-Fit dans tous nos clubs. Asseyez-vous et faites-vous plaisir.">



    <meta property="og:url" content="https://www.basic-fit.com/fr-fr/massage">



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
            eventId: '1287921253547746'
    });
    dataLayer.push({'event':'cookie.consent.system.page.init'});
    dataLayer.push({ page: null });
    dataLayer.push({"event":"data_ready","page":{"page_type":"massage","page_country":"FR","page_language":"FR"},"traffictype":{"platform":"web","ip_address":"81.255.91.33"}});
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

    <script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/readMoreToggle.js">
    </script>

    <script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/contentTilesSlider.js">
    </script>



<script src="https://d5yoctgpv4cpx.cloudfront.net/RUM-2A7BA8F27F/v4-www.basic-fit.com.js"></script><style type="text/css" id="CookieConsentStateDisplayStyles">.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}</style><style>@keyframes cvco-loader{0%,75%,to{border-radius:50%;transform:scaleY(.45)}37.5%{border-radius:2.5px;transform:scaleY(1)}}@keyframes cvco-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes cvco-blink{0%,to{opacity:0}50%{opacity:1}}.cvco-app .cvco-chat,.cvco-app .cvco-chat *,.cvco-app .cvco-chat :after,.cvco-app .cvco-chat :before{box-sizing:border-box}.cvco-app .cvco-chat{color:#3d4166;display:flex;flex-direction:column;font-family:arial,helvetica,sans-serif;font-size:12px;outline:0;transform-origin:100% 100%;transition:margin .3s ease,height .3s ease,transform .3s ease,opacity .3s ease}.cvco-app .cvco-chat--layout-inline{background-color:transparent;background-color:initial;box-shadow:none;height:-moz-fit-content;height:fit-content}@media(min-width:641px){.cvco-app .cvco-chat--layout-inline{flex-direction:row}}.cvco-app .cvco-chat--layout-inline.cvco-chat--collapsed .cvco-chat-wrapper{height:auto}.cvco-app .cvco-chat--layout-window{max-height:calc(85vh - 40px);max-width:calc(100vw - 40px)}@media(min-width:641px){.cvco-app .cvco-chat--layout-window{max-height:calc(100vh - 40px)}@supports(-webkit-overflow-scrolling:touch){.cvco-app .cvco-chat--layout-window{max-height:calc(90vh - 40px)}}}@media(min-width:1025px){.cvco-app .cvco-chat--layout-window{bottom:20px;max-height:calc(100vh - 40px);right:20px}@supports(-webkit-overflow-scrolling:touch){.cvco-app .cvco-chat--layout-window{max-height:calc(90vh - 40px)}}}.cvco-app .cvco-chat--layout-window{bottom:20px;display:none;height:720px;max-width:calc(100% - 40px);opacity:0;position:fixed;right:20px;transform:scale(0);width:360px;z-index:1}.cvco-app .cvco-chat--layout-window.cvco-transition--visible{display:flex}.cvco-app .cvco-chat--layout-window.cvco-transition--in{opacity:1;transform:scale(1)}.cvco-app .cvco-chat--layout-app{bottom:0;height:100%;left:0;max-height:100%;max-width:100%;position:fixed;right:0;top:0;width:100%;z-index:1}.cvco-app .cvco-chat-wrapper{backface-visibility:hidden;border:1px solid #a3b4bf;border-radius:10px;box-shadow:0 0 20px 0 rgba(0,0,0,.1);display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:flex .3s ease,width .3s ease,height .3s ease,border-radius .3s ease;width:100%;z-index:1}.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{height:0;width:100%}@media(min-width:641px)and (max-width:1023px){.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{flex:0 0 100%}.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper:not(:last-child){flex:0 0 50%;width:50%}}@media(min-width:1025px){.cvco-app .cvco-chat--layout-inline .cvco-chat-wrapper{flex:0 0 67%;width:67%}}.cvco-app .cvco-chat--layout-inline.cvco-transition--in .cvco-chat-wrapper{height:720px;max-height:90vh}.cvco-app .cvco-chat__container{display:flex;flex-grow:1;justify-content:center;position:relative}.cvco-app .cvco-chat__container__scroll-area{display:flex;flex-direction:column;height:100%;justify-content:space-between;overflow-y:auto;overscroll-behavior:contain;position:relative;width:100%;will-change:scroll-position}.cvco-app .cvco-chat__container__header{position:sticky;top:0;z-index:1}.cvco-app .cvco-chat__body{display:flex;flex-grow:1;padding:0;position:relative}.cvco-app .cvco-conversation__container>div[role=log]{margin-top:auto}.cvco-app .cvco-chat__entry{border-top:1px solid #dee3e5;flex:0 0 auto;padding:10px;position:relative;width:100%}.cvco-app .cvco-chat__entry:has(.cvco-entry__body--hidden){border-top:0;padding-bottom:0;padding-top:0}.cvco-app .cvco-chat__entry .cvco-entry__body--hidden{display:none}.cvco-app .cvco-chat--layout-inline.cvco-chat--collapsed .cvco-chat__entry{border:0}.cvco-app .cvco-entry__body{align-items:flex-end;display:flex;gap:5px;width:100%}.cvco-app p{margin:0}.cvco-app img{max-width:100%}.cvco-app .cvco-label{color:#4a48c1;display:block}.cvco-app .cvco-conversation__item--abort-transaction{padding-top:10px}.cvco-app .cvco-conversation__item--abort-transaction .cvco-abort-transaction__button{background-color:#fff;border:1px solid;border-radius:10px;padding:5px 10px}.cvco-app .cvco-avatar{border-radius:5px;display:block;flex-shrink:0;height:32px;overflow:hidden;position:relative;width:32px}.cvco-app .cvco-avatar>.cvco-icon,.cvco-app .cvco-avatar__graphic{display:block}.cvco-app .cvco-conversation__message+.cvco-avatar{align-self:flex-end;margin-left:10px}.cvco-app a:focus,.cvco-app button:focus,.cvco-app input:focus{outline:none}.cvco-app a:focus-visible,.cvco-app button:focus-visible,.cvco-app input:focus-visible{outline:1px dotted #212121;outline:1px auto -webkit-focus-ring-color}.cvco-app .cvco-button{background:none;border:0;cursor:pointer;gap:10px;margin:0;padding:0}.cvco-app .cvco-button span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit}.cvco-app .cvco-button--primary{background-color:#4a48c1;border-radius:5px;font-weight:700;min-height:40px;padding:10px 15px}.cvco-app .cvco-button--secondary{color:#4a48c1;font-weight:700;padding:10px 15px}.cvco-app .cvco-button--tertiary{background-color:transparent;background-color:initial;border-radius:5px;color:#fff;font-size:12px;font-weight:700;padding:2px 5px}.cvco-app .cvco-button[aria-disabled=true]{color:#5e727b;cursor:auto}.cvco-app .cvco-button__state{background-color:#eff3f6;border-radius:5px;color:inherit;display:inline-block;margin:0;padding:2px 10px}.cvco-app .cvco-choice-prompt{display:flex;flex-direction:column;gap:5px;padding:0}.cvco-app .cvco-choice-prompt__item{display:block;width:100%}.cvco-app .cvco-choice-prompt__item .cvco-button{display:inline-block;white-space:normal}.cvco-app .cvco-choice-prompt__item--secondary .cvco-button{background-color:transparent;background-color:initial;color:#4a48c1;padding:5px 0}.cvco-app .cvco-button--choose-again{align-items:center;display:flex;gap:10px;line-height:1;margin:5px 0;padding:0;transition:margin .3s ease,color .3s ease}.cvco-app .cvco-button--choose-again[aria-expanded=true]{margin:20px 0 10px}.cvco-app .cvco-button--choose-again .cvco-icon{align-items:center;display:flex;flex:0 0 8px;height:8px;justify-content:center;margin:0;padding:0;transform-origin:50% 50%;transition:transform .3s ease;width:8px}.cvco-app .cvco-button--choose-again .cvco-icon path{fill:currentcolor}.cvco-app .cvco-button--choose-again[aria-expanded=true] .cvco-icon{transform:rotate(180deg)}.cvco-app .cvco-conversation__container{bottom:0;display:flex;flex:1 1 100%;flex-direction:column;gap:10px;height:100%;justify-content:space-between;left:0;max-height:100%;position:absolute;right:0;top:0}.cvco-app .cvco-conversation__container div[role=log]{margin:auto 0 0}.cvco-app .cvco-conversation{gap:10px;justify-content:space-between;list-style:none;margin:auto 0 0;padding:20px 20px 0;width:100%}.cvco-app .cvco-conversation:after{content:"";display:block;flex:0 0 10px;height:10px;width:100%}.cvco-app .cvco-chat--layout-inline .cvco-conversation{position:relative}.cvco-app .cvco-conversation__item{display:block;width:100%}.cvco-app .cvco-conversation__item--new-participant{margin-top:10px}.cvco-app .cvco-conversation__item--new-participant:first-child{margin-top:0}.cvco-app .cvco-divider{background:linear-gradient(180deg,#fff,#eff3f6);background-repeat:no-repeat;background-size:100% 40px;display:flex;justify-content:center;line-height:1.5;margin:20px -20px 0;overflow:hidden;padding:65px 30px 0;position:relative}.cvco-app .cvco-divider:before{background:radial-gradient(110px at 50% 300%,rgba(74,72,193,.5) 0,hsla(0,0%,100%,0) 99.99%,rgba(74,72,193,0) 100%);background-repeat:no-repeat;content:"";height:40px;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100%}.cvco-app .cvco-conversation__item:first-child .cvco-divider{margin-top:0}.cvco-app .cvco-divider--type-time-indicator{padding-bottom:20px;padding-top:60px}.cvco-app .cvco-divider--type-time-indicator:before{display:none}.cvco-app .cvco-divider__graphic{border-radius:5px;height:32px;left:50%;position:absolute;top:40px;transform:translate(-50%,-60%);width:32px}.cvco-app .cvco-divider__graphic .cvco-avatar,.cvco-app .cvco-divider__graphic .cvco-icon,.cvco-app .cvco-divider__graphic .cvco-icon svg{height:100%;width:100%}.cvco-app .cvco-divider__body{align-items:center;display:flex;flex-direction:column;gap:5px;justify-content:center;max-width:300px;text-align:center}.cvco-app .cvco-divider__body .cvco-divider__title{font-size:12px;font-weight:700;margin:0}.cvco-app .cvco-divider__body .cvco-divider__description{font-size:12px;line-height:1.5}.cvco-app .cvco-divider__body .cvco-button{font-size:inherit;padding:0;width:-moz-fit-content;width:fit-content}.cvco-app .cvco-divider__time{align-items:center;display:flex;flex-direction:column;font-weight:400;gap:2.5px;justify-content:center;margin:0}.cvco-app .cvco-divider__time .cvco-divider__time--date,.cvco-app .cvco-divider__time .cvco-divider__time--time{display:block;line-height:1.25}.cvco-app .cvco-divider__time .cvco-divider__time--date{font-size:12px;font-weight:700}.cvco-app .cvco-divider__time .cvco-divider__time--time{font-size:16px}.cvco-app .cvco-loader{animation:cvco-fadeIn .3s linear;gap:5px;height:20px;justify-content:flex-start;padding:2.5px 5px}.cvco-app .cvco-loader__part{animation-delay:.12s;animation-direction:normal;animation-duration:.6s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:cvco-loader;animation-timing-function:ease;background-color:currentcolor;border-radius:50%;height:100%;transform:scaleY(.45);width:6.666px}.cvco-app .cvco-loader__part.cvco-one{animation-delay:.12s}.cvco-app .cvco-loader__part.cvco-two{animation-delay:.24s}.cvco-app .cvco-loader__part.cvco-three{animation-delay:.36s}.cvco-app .cvco-loader__part.cvco-four{animation-delay:.48s}.cvco-app .cvco-message{display:flex;flex-flow:row wrap;gap:5px;width:80%}.cvco-app .cvco-message.cvco-message--type-suggestions,.cvco-app .cvco-unstarted-wrapper--window .cvco-message{width:100%}.cvco-app .cvco-message+.cvco-message{margin-top:10px}.cvco-app .cvco-message--source-info.cvco-message{margin:0 auto;max-width:90%;width:90%}.cvco-app .cvco-message--source-info.cvco-message:after{border-top:2px solid #4a48c1;content:"";display:block;height:0;margin:0 auto;width:20px}.cvco-app .cvco-message--source-user{justify-content:flex-end;margin-left:auto}.cvco-app .cvco-message__author{display:none;flex-direction:row;font-weight:700;gap:5px;width:100%}.cvco-app .cvco-message--source-user .cvco-message__author{justify-content:flex-end}.cvco-app .cvco-message__avatar{height:16px;width:16px}.cvco-app .cvco-message__avatar .cvco-avatar{display:block;height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.cvco-app .cvco-conversation__item--new-participant .cvco-message__author{display:flex}.cvco-app .cvco-message--source-user .cvco-message__avatar{order:2}.cvco-app .cvco-message--source-user .cvco-message__author-name{order:1}.cvco-app .cvco-message__info{color:#6a7f8c;font-size:12px;line-height:1.35;margin-top:4px;width:100%}.cvco-app .cvco-message--source-user .cvco-message__info{text-align:right}.cvco-app .cvco-message__translation-info{width:100%}.cvco-app.cvco-app--collapsed .cvco-message__translation-info{display:none}.cvco-app .cvco-message__translation-label{font-size:12px;margin-right:5px}.cvco-app .cvco-button.cvco-message__translation-toggle{font-size:inherit;padding:0}.cvco-app .cvco-message--source-user .cvco-message__translation-info{text-align:right}.cvco-app .cvco-card__wrapper{display:flex;flex-direction:column;height:100%}.cvco-app .cvco-card__image{border-top-left-radius:10px;border-top-right-radius:10px;flex:0 0 auto;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;overflow:hidden}.cvco-app .cvco-card__content{flex:1 1 auto;gap:10px;padding:10px 15px 15px}.cvco-app .cvco-card__title{font-size:16px;padding:0}.cvco-app .cvco-card__description,.cvco-app .cvco-card__title{display:block;height:-moz-fit-content;height:fit-content;width:100%}.cvco-app .cvco-card__content .cvco-button{display:block;font-weight:700;margin-top:auto;-webkit-text-decoration:none;text-decoration:none;width:100%}.cvco-app .cvco-carousel{position:relative}.cvco-app .cvco-carousel__slides-wrapper{display:block;overflow:hidden;width:100%}.cvco-app .cvco-carousel__slides{display:flex;flex-direction:row;list-style:none;padding:0;position:relative;transition:left .3s ease}.cvco-app .cvco-carousel__slide{display:block;list-style:none;padding:0;width:100%}.cvco-app .cvco-carousel-item{display:flex;flex-direction:column;height:100%;width:100%}.cvco-app .cvco-carousel-item .cvco-button{display:block;width:100%}.cvco-app .cvco-carousel-controls{align-items:center;border-top:1px solid #dee3e5;display:flex;gap:10px;height:-moz-fit-content;height:fit-content;justify-content:space-between;padding:0;width:100%}.cvco-app .cvco-carousel-controls .cvco-button{align-items:center;background-color:transparent;background-color:initial;color:transparent;display:flex;flex:0 0 40px;font-size:0;height:40px;justify-content:center;width:40px}.cvco-app .cvco-carousel-controls .cvco-button--previous{left:0}.cvco-app .cvco-carousel-controls .cvco-button--next{right:0}.cvco-app .cvco-carousel__controls .cvco-button .cvco-icon{border:0;display:block;height:16px;padding:0;width:16px}.cvco-app .cvco-carousel__controls .cvco-button .cvco-icon svg path{fill:#4a48c1}.cvco-app .cvco-carousel__pagination{align-items:center;display:flex;justify-content:center;position:relative}.cvco-app .cvco-carousel-pagination__wrapper{display:flex;flex-direction:row;justify-content:center;position:relative}.cvco-app .cvco-carousel-pagination{display:flex;flex-flow:row wrap;justify-content:center;margin:0 auto;padding:0;position:relative;width:100%}.cvco-app .cvco-carousel-pagination__item{display:block;list-style:none}.cvco-app .cvco-carousel-pagination__button{background-color:transparent;background-color:initial;border:0;display:block}.cvco-app .cvco-carousel-pagination__button:before{background-color:#a3b4bf;border-radius:50%;height:9.6px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:9.6px}.cvco-app .cvco-is-active .cvco-carousel-pagination__button:before{background-color:#003a5d}.cvco-app .cvco-icon{align-items:center;display:flex;height:32px;justify-content:center;line-height:1;width:32px}.cvco-app .cvco-form,.cvco-app .cvco-icon svg{height:100%;width:100%}.cvco-app .cvco-form{display:flex;flex:1 1 100%}.cvco-app .cvco-input{display:flex}.cvco-app .cvco-entry-form{align-items:flex-end;display:flex;flex:0 1 100%;gap:5px;height:auto;max-width:100%;transition:max-width .3s ease}.cvco-app .cvco-input--text__container{display:flex;flex:1 1 100%;max-width:calc(100% - 45px);width:-moz-fit-content;width:fit-content}.cvco-app .cvco-upload-toggle-wrapper.cvco-transition--in~.cvco-entry-form{max-width:calc(100% - 45px)}.cvco-app .cvco-entry-form .cvco-form-control__wrapper{display:flex;flex-direction:column;gap:5px;width:100%}.cvco-app .cvco-input__text{border:1px solid #dee3e5;border-radius:5px;color:#3d4166;flex:1 1 100%;padding:5px 10px;transition:padding .3s ease}.cvco-app .cvco-input__text::input-placeholder{color:#a3b4bf}.cvco-app .cvco-input__text::placeholder{color:#a3b4bf}.cvco-app .cvco-input__text:input-placeholder{color:#a3b4bf}.cvco-app .cvco-input__text:placeholder{color:#a3b4bf}.cvco-app input.cvco-input__text{min-height:40px;white-space:nowrap}.cvco-app input.cvco-input__text::input-placeholder{white-space:nowrap}.cvco-app input.cvco-input__text::placeholder{white-space:nowrap}.cvco-app input.cvco-input__text:input-placeholder{white-space:nowrap}.cvco-app input.cvco-input__text:placeholder{white-space:nowrap}.cvco-app textarea.cvco-input__text{min-height:calc(4lh + 1rem);resize:none;scrollbar-color:initial transparent;scrollbar-width:thin}@supports(field-sizing:content){.cvco-app textarea.cvco-input__text{field-sizing:content;max-height:calc(4lh + 1rem);min-height:40px;padding-top:7px}}.cvco-app .cvco-character-exceeded .cvco-input__text,.cvco-app .cvco-character-warning .cvco-input__text{padding-right:40px}.cvco-app .cvco-character-exceeded .cvco-input__text{border:1px solid #db1639}.cvco-app .cvco-input__submit{align-items:center;border-radius:5px;display:flex;flex:0 0 40px;height:40px;justify-content:center;width:40px}.cvco-app .cvco-input__submit .cvco-icon path{fill:#4a48c1;transition:fill .3s ease}.cvco-app .cvco-input__submit[aria-disabled=true]{cursor:auto}.cvco-app .cvco-input__submit[aria-disabled=true] .cvco-icon path{fill:#a3b4bf}.cvco-app .cvco-interrupt{background:#fff;bottom:0;left:0;position:absolute;right:0;top:0}.cvco-app.cvco-app--layout-inline.cvco-app--collapsed .cvco-interrupt{border-radius:10px;position:static}@media(min-width:1025px){.cvco-app.cvco-app--layout-inline.cvco-app--collapsed .cvco-interrupt{width:67%}}.cvco-app .cvco-interrupt__body{align-items:left;display:flex;flex:1 1 auto;flex-direction:column;gap:10px;justify-content:center;padding:40px;text-align:left}.cvco-app .cvco-chat .cvco-interrupt__body{margin:10px}.cvco-app .cvco-interrupt__title{font-size:16px;font-weight:700}.cvco-app .cvco-interrupt__message{font-size:16px}.cvco-app .cvco-interrupt__actions{margin-top:auto}.cvco-app .cvco-skip-link{background:#4a48c1;border:1px solid #fff;border-radius:5px;left:50%;opacity:0;padding:10px 15px;position:absolute;top:20px;transform:translate(-50%,-5px) scale(0);transform-origin:50% 0;transition:transform .3s ease,opacity .3s ease;z-index:100}.cvco-app .cvco-skip-link:focus-visible{opacity:1;outline:none;transform:translate(-50%) scale(1)}.cvco-app .cvco-disclaimer{background-color:#eff3f6;display:flex;flex:0 0 auto;flex-direction:column;gap:5px;padding:20px}.cvco-app .cvco-chat--layout-window .cvco-chat__container__header:has(.cvco-chat-status)~.cvco-chat__body .cvco-disclaimer{padding-right:20px}.cvco-app .cvco-disclaimer__title{font-size:12px;margin:0}.cvco-app .cvco-idle{align-items:center;gap:10px;justify-content:space-between;max-height:none;padding:10px}.cvco-app .cvco-idle__title{font-size:16px;font-weight:700;text-align:center}.cvco-app .cvco-idle__count-container{display:block;font-size:12px;height:2.75em;width:100%}.cvco-app .cvco-idle__count-text,.cvco-app .cvco-idle__count-timer{font-size:inherit;text-align:center;white-space:nowrap;width:100%}.cvco-app .cvco-idle__options{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;list-style-type:none;margin:0;padding:0;width:100%}.cvco-app .cvco-idle__options .cvco-button{text-align:center;white-space:normal}.cvco-app .cvco-prompt{align-items:center;gap:10px;justify-content:space-between;max-height:none;padding:10px}.cvco-app .cvco-prompt__title{font-weight:700;text-align:center}.cvco-app .cvco-prompt__options{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;list-style-type:none;margin:0;padding:0;width:100%}.cvco-app .cvco-prompt__options .cvco-button{text-align:center;white-space:normal}.cvco-app .cvco-chat__options{align-items:center;border-top:1px solid #dee3e5;display:flex;flex:0;gap:10px;justify-content:flex-end;padding:5px;position:relative;width:100%}.cvco-app .cvco-chat__options-item--left{margin-right:auto}.cvco-app .cvco-chat__options__button{align-items:center;border-radius:5px;display:flex;gap:5px;justify-content:flex-end;padding:5px 10px}.cvco-app .cvco-chat__options__button .cvco-icon{flex:0 0 16px;height:16px;width:16px}.cvco-app .cvco-chat__options__button .cvco-icon svg{height:100%;width:100%}.cvco-app .cvco-chat__options__button .cvco-icon path{fill:currentcolor}.cvco-app .cvco-options__menu{background-color:#fff;border:1px solid #dee3e5;border-radius:5px;bottom:calc(100% + 10px);box-shadow:0 0 20px 0 rgba(0,0,0,.1);display:none;flex-direction:column;gap:5px;list-style:none;margin:0;max-height:400px;max-width:300px;opacity:0;padding:10px;position:absolute;right:10px;transform:scaleY(0) translateY(100px);transform-origin:100% 100%;transition:transform .2s ease-in-out,opacity .2s ease}.cvco-app .cvco-options__menu.cvco-transition--visible{display:flex}.cvco-app .cvco-options__menu.cvco-transition--in{opacity:1;transform:scaleY(1) translateY(0)}.cvco-app .cvco-options__menu__item{opacity:0;transition:opacity .1s ease .1s}.cvco-app .cvco-options__menu__item:last-child{margin-bottom:0}.cvco-app .cvco-options__menu.cvco-transition--in .cvco-options__menu__item{opacity:1}.cvco-app .cvco-options__menu .cvco-button{align-items:center;border-radius:5px;display:flex;min-width:200px;width:100%}.cvco-app
```
