Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


## Page : https://www.basic-fit.com/fr-fr/checkout

## Violations détectées par axe-core
- button-name (critical) [RGAA 11.9] : Buttons must have discernible text
  ex: <button type="submit" id="js-btn-submit-search" data-cy="map-search-bttn"></button>
- color-contrast (serious) [RGAA 3.2] : Elements must meet minimum color contrast ratio thresholds
  ex: <a href="https://www.basic-fit.com/fr-fr/declaration-cookie" style="">cookies</a>
- landmark-one-main (moderate) [RGAA 9.2] : Document should have one main landmark
  ex: <html lang="en" style="--scrollbar-width: 0px; --header-height: 0px;">
- region (moderate) [RGAA 9.2] : All page content should be contained by landmarks
  ex: <h1 class="sr-only" itemprop="name">
                Votre Inscription à Basic-Fit
            </h1>

## Code HTML
```html
<!DOCTYPE html><html lang="en" style="--scrollbar-width: 0px; --header-height: 0px;"><head><meta http-equiv="origin-trial" content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==">

<script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/kemdRjWFxNjgsGdhRslyEPwU/recaptcha__fr.js" crossorigin="anonymous" integrity="sha384-16imf1Y8gz2lvAxgopM/b63Co8B5wV1LqS+WxWR9KPLjp1ss6riO/uyU8Acpeg+Y"></script><script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/destination?id=AW-967881324&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" charset="UTF-8" async="" src="https://consent.cookiebot.com/617f1858-ecb0-4c98-8ac5-383ed1c7ed56/cc.js?renew=false&amp;referer=www.basic-fit.com&amp;dnt=false&amp;init=false"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=AW-960670531&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=DC-5116490&amp;cx=c&amp;gtm=4e69p1"></script><script type="text/javascript" async="" src="https://sst.basic-fit.com/gtag/js?id=G-NF41CTP09F&amp;cx=c&amp;gtm=4e69p1"></script><script async="" src="https://sst.basic-fit.com/gtm.js?id=GTM-PD6Q6J"></script><script defer="defer" src="https://checkoutshopper-live.cdn.adyen.com/checkoutshopper/sdk/6.27.1/adyen.js" integrity="sha384-O2YEtCpBJlpnqKVWU5zI/a29fYQ6f5oSFo3JGc6QEVZW++uaoWvAcgzwSjjVHaEI" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://checkoutshopper-live.cdn.adyen.com/checkoutshopper/sdk/6.27.1/adyen.css" as="style" onload="this.onload=null;this.rel='stylesheet'" integrity="sha384-v4WMhZ5b9GzrmepuVnBZ/neEvwZd3kYkt1GNI4WDk9+YD06/ytw+Uzfg8QT7IQVl" crossorigin="anonymous">

<noscript>
    <link
        rel="stylesheet"
        href="https://checkoutshopper-live.cdn.adyen.com/checkoutshopper/sdk/6.27.1/adyen.css"
        integrity="sha384-v4WMhZ5b9GzrmepuVnBZ/neEvwZd3kYkt1GNI4WDk9+YD06/ytw+Uzfg8QT7IQVl"
        crossorigin="anonymous"
    />
</noscript>




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
            eventId: '925728414024080'
    });
    dataLayer.push({'event':'cookie.consent.system.page.init'});
    dataLayer.push({ page: null });
    dataLayer.push({"event":"data_ready","page":{"page_type":"checkout","page_country":"FR","page_language":"FR"},"traffictype":{"platform":"web","ip_address":"134.59.155.253"}});
</script>


    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://sst.basic-fit.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PD6Q6J');</script>
<!-- End Google Tag Manager -->







    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="617f1858-ecb0-4c98-8ac5-383ed1c7ed56" async="async" fetchpriority="high"></script>



<!--[if gt IE 9]><!-->
<script>//common/scripts.isml</script>
<script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/main.js"></script>

    <script defer="" type="text/javascript" src="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/js/subscriptionCheckout.js">
    </script>


<!--<![endif]-->
<meta charset="UTF-8">

<meta http-equiv="x-ua-compatible" content="ie=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">







    <script>
        (() => {
            // Check if the back to checkout banner should be shown (reached at least step 2 and havent completed a succesful checkout yet)
            const abandonedCartBanner = sessionStorage.getItem('abandoned-cart-banner') === '1' && sessionStorage.getItem('subscription-checkout-completed') !== '1';
            document.documentElement.classList.toggle('abandoned-cart-active', abandonedCartBanner);
        })();
    </script>






    <meta name="robots" content="index, follow">





    <link rel="canonical" href="https://www.basic-fit.com/fr-fr/checkout">



<title>
    Finalisation de l'inscription
</title>

<meta name="description" content="Vous êtes presque membre Basic-Fit !">
















    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-fr/checkout" hreflang="fr-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-nl/checkout" hreflang="nl-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/de-de/checkout" hreflang="de-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-nl/checkout" hreflang="en-nl">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-de/checkout" hreflang="en-de">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-be/checkout" hreflang="en-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-lu/checkout" hreflang="en-lu">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-es/checkout" hreflang="en-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/nl-be/checkout" hreflang="nl-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/en-fr/checkout" hreflang="en-fr">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/es-es/checkout" hreflang="es-es">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-be/checkout" hreflang="fr-be">
    

    

    
        <link rel="alternate" href="https://www.basic-fit.com/fr-lu/checkout" hreflang="fr-lu">
    





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


    <link rel="stylesheet" href="/on/demandware.static/Sites-BFE-Site/-/fr_FR/v1790676984466/css/pages/checkout.css">


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






<script type="text/javascript">//<!--
/* <![CDATA[ (head-active_data.js) */
var dw = (window.dw || {});
dw.ac = {
    _analytics: null,
    _events: [],
    _category: "",
    _searchData: "",
    _anact: "",
    _anact_nohit_tag: "",
    _analytics_enabled: "true",
    _timeZone: "Europe/Amsterdam",
    _capture: function(configs) {
        if (Object.prototype.toString.call(configs) === "[object Array]") {
            configs.forEach(captureObject);
            return;
        }
        dw.ac._events.push(configs);
    },
	capture: function() { 
		dw.ac._capture(arguments);
		// send to CQ as well:
		if (window.CQuotient) {
			window.CQuotient.trackEventsFromAC(arguments);
		}
	},
    EV_PRD_SEARCHHIT: "searchhit",
    EV_PRD_DETAIL: "detail",
    EV_PRD_RECOMMENDATION: "recommendation",
    EV_PRD_SETPRODUCT: "setproduct",
    applyContext: function(context) {
        if (typeof context === "object" && context.hasOwnProperty("category")) {
        	dw.ac._category = context.category;
        }
        if (typeof context === "object" && context.hasOwnProperty("searchData")) {
        	dw.ac._searchData = context.searchData;
        }
    },
    setDWAnalytics: function(analytics) {
        dw.ac._analytics = analytics;
    },
    eventsIsEmpty: function() {
        return 0 == dw.ac._events.length;
    }
};
/* ]]> */
// -->
</script><style type="text/css" id="CookieConsentStateDisplayStyles">.cookieconsent-optin-preferences,.cookieconsent-optin-statistics,.cookieconsent-optin-marketing,.cookieconsent-optin{display:none;}.cookieconsent-optout-preferences,.cookieconsent-optout-statistics,.cookieconsent-optout-marketing,.cookieconsent-optout{display:block;display:initial;}</style>
<script type="text/javascript">//<!--
/* <![CDATA[ (head-cquotient.js) */
var CQuotient = window.CQuotient = {};
CQuotient.clientId = 'bdfp-BFE';
CQuotient.realm = 'BDFP';
CQuotient.siteId = 'BFE';
CQuotient.instanceType = 'prd';
CQuotient.locale = 'fr_FR';
CQuotient.fbPixelId = '__UNKNOWN__';
CQuotient.activities = [];
CQuotient.cqcid='';
CQuotient.cquid='';
CQuotient.cqeid='';
CQuotient.cqlid='';
CQuotient.apiHost='api.cquotient.com';
/* Turn this on to test against Staging Einstein */
/* CQuotient.useTest= true; */
CQuotient.useTest = ('true' === 'false');
CQuotient.initFromCookies = function () {
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
	  var c = ca[i];
	  while (c.charAt(0)==' ') c = c.substring(1,c.length);
	  if (c.indexOf('cqcid=') == 0) {
		CQuotient.cqcid=c.substring('cqcid='.length,c.length);
	  } else if (c.indexOf('cquid=') == 0) {
		  var value = c.substring('cquid='.length,c.length);
		  if (value) {
		  	var split_value = value.split("|", 3);
		  	if (split_value.length > 0) {
			  CQuotient.cquid=split_value[0];
		  	}
		  	if (split_value.length > 1) {
			  CQuotient.cqeid=split_value[1];
		  	}
		  	if (split_value.length > 2) {
			  CQuotient.cqlid=split_value[2];
		  	}
		  }
	  }
	}
}
CQuotient.getCQCookieId = function () {
	if(window.CQuotient.cqcid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqcid;
};
CQuotient.getCQUserId = function () {
	if(window.CQuotient.cquid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cquid;
};
CQuotient.getCQHashedEmail = function () {
	if(window.CQuotient.cqeid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqeid;
};
CQuotient.getCQHashedLogin = function () {
	if(window.CQuotient.cqlid == '')
		window.CQuotient.initFromCookies();
	return window.CQuotient.cqlid;
};
CQuotient.trackEventsFromAC = function (/* Object or Array */ events) {
try {
	if (Object.prototype.toString.call(events) === "[object Array]") {
		events.forEach(_trackASingleCQEvent);
	} else {
		CQuotient._trackASingleCQEvent(events);
	}
} catch(err) {}
};
CQuotient._trackASingleCQEvent = function ( /* Object */ event) {
	if (event && event.id) {
		if (event.type === dw.ac.EV_PRD_DETAIL) {
			CQuotient.trackViewProduct( {id:'', alt_id: event.id, type: 'raw_sku'} );
		} // not handling the other dw.ac.* events currently
	}
};
CQuotient.trackViewProduct = function(/* Object */ cqParamData){
	var cq_params = {};
	cq_params.cookieId = CQuotient.getCQCookieId();
	cq_params.userId = CQuotient.getCQUserId();
	cq_params.emailId = CQuotient.getCQHashedEmail();
	cq_params.loginId = CQuotient.getCQHashedLogin();
	cq_params.product = cqParamData.product;
	cq_params.realm = cqParamData.realm;
	cq_params.siteId = cqParamData.siteId;
	cq_params.instanceType = cqParamData.instanceType;
	cq_params.locale = CQuotient.locale;
	
	if(CQuotient.sendActivity) {
		CQuotient.sendActivity(CQuotient.clientId, 'viewProduct', cq_params);
	} else {
		CQuotient.activities.push({activityType: 'viewProduct', parameters: cq_params});
	}
};
/* ]]> */
// -->
</script>


<script src="https://d5yoctgpv4cpx.cloudfront.net/RUM-2A7BA8F27F/v4-www.basic-fit.com.js"></script><script src="https://bat.bing.com/p/action/4030756.js" type="text/javascript" async="" data-ueto="ueto_b5a29f52f0"></script><script type="text/javascript">/*! axe v4.13.0
 * Copyright (c) 2015 - 2026 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
!function i(window){var q=window,document=window.document;function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var axe=axe||{},c=(axe.version="4.13.0","function"==typeof define&&define.amd&&define("axe-core",[],function(){return axe}),"object"===("undefined"==typeof module?"undefined":te(module))&&module.exports&&"function"==typeof i.toString&&(axe.source="("+i.toString()+')(typeof window === "object" ? window : this);',module.exports=axe),"function"==typeof window.getComputedStyle&&(window.axe=axe),["precision","format","inGamut"]),l=["space"],M=["algorithm"],I=["method"],B=["maxDeltaE","deltaEMethod","steps","maxSteps"],j=["node"],L=["relatedNodes"],V=["node"],z=["variant"],G=["matches"],$=["chromium"],H=["noImplicit"],U=["noPresentational"],W=["node"],Y=["environmentData"],K=["environmentData"],X=["environmentData"],Z=["environmentData"],J=["environmentData"];function Q(){var m,e="function"==typeof Symbol?Symbol:{},t=e.iterator||"@@iterator",n=e.toStringTag||"@@toStringTag";function r(e,t,n,r){var a,o,i,l,u,s,c,d,p,t=t&&t.prototype instanceof g?t:g,t=Object.create(t.prototype);return ee(t,"_invoke",(a=e,o=n,c=r||[],d=!1,p={p:s=0,n:0,v:m,a:f,f:f.bind(m,4),d:function(e,t){return i=e,l=0,u=m,p.n=t,h}},function(e,t,n){if(1<s)throw TypeError("Generator is already running");for(d&&1===t&&f(t,n),l=t,u=n;(v=l<2?m:u)||!d;){i||(l?l<3?(1<l&&(p.n=-1),f(l,u)):p.n=u:p.v=u);try{if(s=2,i){if(v=i[e=l?e:"next"]){if(!(v=v.call(i,u)))throw TypeError("iterator result is not an object");if(!v.done)return v;u=v.value,l<2&&(l=0)}else 1===l&&(v=i.return)&&v.call(i),l<2&&(u=TypeError("The iterator does not provide a '"+e+"' method"),l=1);i=m}else if((v=(d=p.n<0)?u:a.call(o,p))!==h)break}catch(e){i=m,l=1,u=e}finally{s=1}}return{value:v,done:d}}),!0),t;function f(e,t){for(l=e,u=t,v=0;!d&&s&&!n&&v<c.length;v++){var n,r=c[v],a=p.p,o=r[2];3<e?(n=o===t)&&(u=r[(l=r[4])?5:l=3],r[4]=r[5]=m):r[0]<=a&&((n=e<2&&a<r[1])?(l=0,p.v=t,p.n=r[1]):a<o&&(n=e<3||r[0]>t||o<t)&&(r[4]=e,r[5]=t,p.n=o,l=0))}if(n||1<e)return h;throw d=!0,t}}var h={};function g(){}function a(){}function o(){}var v=Object.getPrototypeOf,e=[][t]?v(v([][t]())):(ee(v={},t,function(){return this}),v),i=o.prototype=g.prototype=Object.create(e);function l(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):(e.__proto__=o,ee(e,n,"GeneratorFunction")),e.prototype=Object.create(i),e}return ee(i,"constructor",a.prototype=o),ee(o,"constructor",a),ee(o,n,a.displayName="GeneratorFunction"),ee(i),ee(i,n,"Generator"),ee(i,t,function(){return this}),ee(i,"toString",function(){return"[object Generator]"}),(Q=function(){return{w:r,m:l}})()}function ee(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}(ee=function(e,t,n,r){function a(t,n){ee(e,t,function(e){return this._invoke(t,n,e)})}t?o?o(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a("next",0),a("throw",1),a("return",2))})(e,t,n,r)}function ne(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function re(l){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=l.apply(e,i);function a(e){ne(r,t,n,a,o,"next",e)}function o(e){ne(r,t,n,a,o,"throw",e)}a(void 0)})}}function ae(e){return De(e)||fe(e)||Ce(e)||we()}function oe(e){var n="function"==typeof Map?new Map:void 0;return function(e){if(null===e||!(t=>{try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}})(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return le(e,arguments,ce(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),pe(t,e)}(e)}function ie(e,t,n){return(t=Fe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t,n){var r;return se()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,t),t=new(e.bind.apply(e,r)),n&&pe(t,n.prototype),t)}function v(e,t){if(null==e)return{};var n,r=((e,t)=>{if(null==e)return{};var n,r={};for(n in e)!{}.hasOwnProperty.call(e,n)||-1!==t.indexOf(n)||(r[n]=e[n]);return r})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)n=a[o],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function ue(e,t,n){t=ce(t);var r=e,t=se()?Reflect.construct(t,n||[],ce(e).constructor):t.apply(e,n);if(t&&("object"==te(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==(t=r))return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}function se(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(se=function(){return!!e})()}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pe(e,t)}function pe(e,t){return(pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)!{}.hasOwnProperty.call(r,n)||(e[n]=r[n])}return e}).apply(null,arguments)}function w(e){return(e=>{if(Array.isArray(e))return ke(e)})(e)||fe(e)||Ce(e)||(()=>{throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function fe(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function me(e,t,n){ge(e,t),t.set(e,n)}function he(e,t){ge(e,t),t.add(e)}function ge(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ve(e,t){return e.get(ye(e,t))}function be(e,t,n){e.set(ye(e,t),n)}function ye(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function D(e,t){return De(e)||((e,t)=>{var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}})(e,t)||Ce(e,t)||we()}function we(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function De(e){if(Array.isArray(e))return e}function xe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Fe(r.key),r)}}function Ae(e,t,n){return t&&Ee(e.prototype,t),n&&Ee(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fe(e){e=((e,t)=>{if("object"!=te(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);if(n=n.call(e,t||"default"),"object"==te(n))throw new TypeError("@@toPrimitive must return a primitive value.");return n})(e,"string");return"symbol"==te(e)?e:e+""}function x(e,t){var n,r,a,o,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return a=!(r=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){a=!0,n=e},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw n}}};if(Array.isArray(e)||(i=Ce(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),o=0,{s:t=function(){},n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ce(e,t){var n;if(e)return"string"==typeof e?ke(e,t):"Map"===(n="Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Re=void 0,Ne=void 0,Te=void 0,Se=void 0,Oe=void 0,_e=void 0,Pe=void 0,Me=void 0,Ie=void 0,Be=void 0,je=void 0;function e(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}}function Le(e,t){for(var n in t)He(e,n,{get:t[n],enumerable:!0})}function qe(t,n,r){if(n&&"object"===te(n)||"function"==typeof n){var a,o=x(Ye(n));try{for(o.s();!(a=o.n()).done;)(()=>{var e=a.value;We.call(t,e)||"default"===e||He(t,e,{get:function(){return n[e]},enumerable:!(r=Ke(n,e))||r.enumerable})})()}catch(e){o.e(e)}finally{o.f()}}return t}function Ve(e){return qe((t=He(null!=e?$e(Ue(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),He(t,"__esModule",{value:!0})),e);var t}function ze(e,t,n){e=e,t="symbol"!==te(t)?t+"":t,n=n,t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}var Ge,$e=Object.create,He=Object.defineProperty,Ue=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty,Ye=Object.getOwnPropertyNames,Ke=Object.getOwnPropertyDescriptor,Xe=e(function(e,t){var n;n=function(){function u(e){return"function"==typeof e}var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,t=void 0,a=void 0,i=function(e,t){d[r]=e,d[r+1]=t,2===(r+=2)&&(a?a(p):I())};var e=void 0!==window?window:void 0,o=e||{},o=o.MutationObserver||o.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),s="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function c(){var e=setTimeout;return function(){return e(p,1)}}var d=new Array(1e3);function p(){for(var e=0;e<r;e+=2)(0,d[e])(d[e+1]),d[e]=void 0,d[e+1]=void 0;r=0}function f(){try{var e=Function("return this")().require("vertx");return void 0!==(t=e.runOnLoop||e.runOnContext)?function(){t(p)}:c()}catch(e){return c()}}var m,h,g,I=void 0;function v(e,t){var n,r=this,a=new this.constructor(w),o=(void 0===a[y]&&O(a),r._state);return o?(n=arguments[o-1],i(function(){return T(o,a,n,r._result)})):R(r,a,e,t),a}function b(e){var t;return e&&"object"===te(e)&&e.constructor===this?e:(F(t=new this(w),e),t)}var I=l?function(){return process.nextTick(p)}:o?(h=0,l=new o(p),g=document.createTextNode(""),l.observe(g,{characterData:!0}),function(){g.data=h=++h%2}):s?((m=new MessageChannel).port1.onmessage=p,function(){return m.port2.postMessage(0)}):(void 0===e?f:c)(),y=Math.random().toString(36).substring(2);function w(){}var D=void 0,x=1,E=2;function B(e,r,a){i(function(t){var n=!1,e=((e,t,n,r)=>{try{e.call(t,n,r)}catch(e){return e}})(a,r,function(e){n||(n=!0,(r!==e?F:C)(t,e))},function(e){n||(n=!0,k(t,e))},t._label);!n&&e&&(n=!0,k(t,e))},e)}function A(e,t,n){var r,a;t.constructor===e.constructor&&n===v&&t.constructor.resolve===b?(r=e,(a=t)._state===x?C(r,a._result):a._state===E?k(r,a._result):R(a,void 0,function(e){return F(r,e)},function(e){return k(r,e)})):void 0!==n&&u(n)?B(e,t,n):C(e,t)}function F(t,e){if(t===e)k(t,new TypeError("You cannot resolve a promise with itself"));else if(r=te(n=e),null===n||"object"!==r&&"function"!==r)C(t,e);else{n=void 0;try{n=e.then}catch(e){return void k(t,e)}A(t,e,n)}var n,r}function j(e){e._onerror&&e._onerror(e._result),N(e)}function C(e,t){e._state===D&&(e._result=t,e._state=x,0!==e._subscribers.length)&&i(N,e)}function k(e,t){e._state===D&&(e._state=E,e._result=t,i(j,e))}function R(e,t,n,r){var a=e._subscribers,o=a.length;e._onerror=null,a[o]=t,a[o+x]=n,a[o+E]=r,0===o&&e._state&&i(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?T(n,r,a,o):a(o);e._subscribers.length=0}}function T(e,t,n,r){var a=u(n),o=void 0,i=void 0,l=!0;if(a){try{o=n(r)}catch(e){l=!1,i=e}if(t===o)return void k(t,new TypeError("A promises callback cannot return that same promise."))}else o=r;t._state===D&&(a&&l?F(t,o):!1===l?k(t,i):e===x?C(t,o):e===E&&k(t,o))}var S=0;function O(e){e[y]=S++,e._state=void 0,e._result=void 0,e._subscribers=[]}_.prototype._enumerate=function(e){for(var t=0;this._state===D&&t<e.length;t++)this._eachEntry(e[t],t)},_.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var a,o=void 0,i=void 0,l=!1;try{o=t.then}catch(e){l=!0,i=e}o===v&&t._state!==D?this._settledAt(t._state,e,t._result):"function"!=typeof o?(this._remaining--,this._result[e]=t):n===P?(a=new n(w),l?k(a,i):A(a,t,o),this._willSettleAt(a,e)):this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},_.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===D&&(this._remaining--,e===E?k(r,n):this._result[t]=n),0===this._remaining&&C(r,this._result)},_.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,function(e){return n._settledAt(x,t,e)},function(e){return n._settledAt(E,t,e)})};var L=_;function _(e,t){this._instanceConstructor=e,this.promise=new e(w),this.promise[y]||O(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0!==this.length&&(this.length=this.length||0,this._enumerate(t),0!==this._remaining)||C(this.promise,this._result)):k(this.promise,new Error("Array Methods must be provided an Array"))}M.prototype.catch=function(e){return this.then(null,e)},M.prototype.finally=function(t){var n=this.constructor;return u(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)};var P=M;function M(e){if(this[y]=S++,this._result=this._state=void 0,this._subscribers=[],w!==e){if("function"!=typeof e)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof M))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");var t=this;try{e(function(e){F(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}}return P.prototype.th
```
