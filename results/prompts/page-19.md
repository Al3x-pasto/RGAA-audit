Tu aides un développeur à corriger les échecs d'accessibilité listés dans ce prompt. Les violations axe-core ci-dessous sont le périmètre de l'analyse : ne réalise pas un nouvel audit général du HTML.

Réponds en français et ne donne que les erreurs confirmées à corriger, avec des instructions directement applicables :
- Pour chaque erreur, indique la règle et le critère RGAA uniquement s'ils sont fournis, puis l'élément ou la zone concernée.
- Décris brièvement le problème constaté et donne les étapes précises de correction. Ajoute un exemple de code minimal seulement s'il est justifié par l'extrait fourni.
- Regroupe les occurrences d'une même erreur lorsqu'une correction commune suffit ; distingue les pages ou éléments qui nécessitent une correction différente.
- Si les éléments fournis ne permettent pas de confirmer une erreur ou de prescrire une correction fiable, ne devine pas : indique brièvement ce qui doit être vérifié et omets toute correction spéculative.

N'inclus pas de résumé, de gravité, d'impact légal, de justification longue, de recommandation générale, de feuille CSS transversale, de script automatique ni de problèmes non listés. Ne propose pas de refonte. Préserve le rendu visuel et privilégie le HTML natif à ARIA. Le HTML fourni est un instantané d'analyse : décris les modifications à appliquer au code source du site, ne prétends pas avoir modifié cet instantané.


## Page : https://codengo.bureauveritas.fr/contenu/actualite/details/123

## Violations détectées par axe-core
- aria-dialog-name (serious) [RGAA N/A] : ARIA dialog and alertdialog nodes should have an accessible name
  ex: <div id="consentModalApp" class="modal custom space-form-section show" tabindex="-1" role="dialog" data-v-app="">
- color-contrast (serious) [RGAA 3.2] : Elements must meet minimum color contrast ratio thresholds
  ex: <a title="https://codengo.bureauveritas.fr/public/codelaroute/site/MontpellierAntigone" href="https://codengo.bureauveritas.fr/public/codelaroute/site/MontpellierAntigone">https://https://codengo.bure
- empty-heading (minor) [RGAA 9.1] : Headings should not be empty
  ex: <h3>&nbsp;</h3>
- image-alt (critical) [RGAA 1.1] : Images must have alternative text
  ex: <img src="/public/actualite/details/123/picture" class="floatleft" style="max-width: 500px;">
- link-name (serious) [RGAA 6.1, 6.2] : Links must have discernible text
  ex: <a href="https://www.facebook.com/CodengoFR/" class="col2 socialNetwork" target="_blank"><img src="/img/facebook.svg"></a>
- meta-viewport (moderate) [RGAA 10.4] : Zooming and scaling must not be disabled
  ex: <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
- region (moderate) [RGAA 9.2] : All page content should be contained by landmarks
  ex: <div id="actualityDetailsApp" data-v-app="">

## Code HTML
```html
<!DOCTYPE html><html lang="fr" xmlns:og="https://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml" manifest="cdr.appcache"><head><script>var isDebug = false</script>
    
    


<script type="module">
	if (hasConsent('marketing')) {
	    loadScript('https://www.youtube.com/iframe_api', false, false);
	}
    rootPathService.setRootPath('/');
</script>
<script>

	/*
	* ================================================================
	* = LOG
	* ================================================================
	*/

	var logConsole = function(level, param1, param2, param3, param4, param5) {
		var prefix = '[CDR] -';
        if (param5 !== undefined){
            console[level](prefix, param1, param2, param3, param4, param5);
        }else if (param4 !== undefined){
			console[level](prefix, param1, param2, param3, param4);
		} else if (param3 !== undefined){
            console[level](prefix, param1, param2, param3);
        } else if (param2 !== undefined){
            console[level](prefix, param1, param2);
        } else {
            console[level](prefix, param1);
        }
	}

	var logDebug = function(param1, param2, param3, param4, param5) {
		logConsole('debug', param1, param2, param3, param4, param5);
	}

    var logInfo = function(param1, param2, param3, param4, param5) {
        logConsole('log', param1, param2, param3, param4, param5);
    }

    var logWarn = function(param1, param2, param3, param4, param5) {
        logConsole('warn', param1, param2, param3, param4, param5);
    }

    var logError = function(param1, param2, param3, param4, param5) {
        logConsole('error', param1, param2, param3, param4, param5);
    }

    /*
    * ================================================================
    * = COMMON
    * ================================================================
    */

    hasConsent = function(cname) {
        var toFind = 'bureauveritas.cdr.consent.' + cname + "=true";
        var decodedCookie = decodeURIComponent(document.cookie);
        var hasConsent = decodedCookie.indexOf(toFind) != -1;
        logDebug('consent to load ', cname, '=', hasConsent);
        return hasConsent;
    }

    // Function to load script dynamically
    var loadScript = function(scriptUrl, isAsync, isDefer){
        // Create script
        var script = document.createElement('script');
        script.src = scriptUrl;
        script.async = isAsync === undefined ? true : isAsync;
        script.defer = isDefer === undefined ? true : isDefer;
        script.type = 'text/javascript';
        // Insert in head
        var head = document.getElementsByTagName('head').item(0);
        head.appendChild(script);
        logDebug('load script', scriptUrl, 'async=', script.async, 'defer=', script.defer);
    }

    /*
	* ================================================================
	* = MAPBOX
	* ================================================================
	*/
    var mapBoxAccessToken = '';

    var youtubeUrl = 'https://www.youtube.com/watch?v=';
    var movieAdvert = 'EzTPYsquBOQ';
    var movieAdvertSmall = 'A0o3dvSQIbo';
    var movieInstruction = '8gSmnskpr_s';
    var movieYoutuber = 'VMB87VKcw5E';
    
    var YOUTUBE_ADVERT_MOVIE_URL = youtubeUrl + movieAdvert;
    var YOUTUBE_ADVERT_SMALL_MOVIE_URL = youtubeUrl + movieAdvertSmall;
    var YOUTUBE_INSTRUCTION_MOVIE_URL = youtubeUrl + movieInstruction;
    var YOUTUBER_MOVIE_URL = youtubeUrl + movieYoutuber;

	/*
	* ================================================================
	* = SERVICE WORKERS
	* ================================================================
	*/

	// If service worker can be used and not in local
	if ('serviceWorker' in navigator && !window.location.hostname.includes('localhost')) {
	    var registerSw = function() {
	        navigator.serviceWorker.register('/sw.min-8.8.46.js.gz');
	    }
	    window.addEventListener('load', registerSw);
	    logDebug('Service Worker enable');
	}



    /*
    * ================================================================
    * = GDPR
    * ================================================================
    */

    hideShowPopin = function(popinId, show) {
    	var display = 'none';
        var opacity = 0;
    	if (show){
    		display = 'block';
    		opacity = 1;
    	}
    	document.getElementById(popinId).style.display = display;
        document.getElementById(popinId).style.opacity = opacity;
    }

    // If has consent to use tracking
    var enableTracking = hasConsent('tracking');

    var loadRecaptchaScript = function(){
    	if (enableTracking) {
            logDebug('googlerecaptcha enabled');
    	    loadScript('https://www.google.com/recaptcha/enterprise.js?render=6Le2qiItAAAAANL2RsKh-IiA-lsZ0oLPCuwvEn6J', false, false);
            return true;
    	} else {
            logDebug('googlerecaptcha disabled');
            return false;
    	}
    }

    var executeEntrepriseRecaptcha = function(action, callbackFunction, tries) {
        tries = tries || 0;
        setTimeout(function() {
            if (typeof grecaptcha !== 'undefined' && typeof grecaptcha.enterprise !== 'undefined') {
                grecaptcha.enterprise.ready(async () => {
                    try {
                        const token = await grecaptcha.enterprise.execute('6Le2qiItAAAAANL2RsKh-IiA-lsZ0oLPCuwvEn6J', {action: action});
                        callbackFunction(token);
                    } catch (e) {
                        logError('executeEntrepriseRecaptcha error', action, e);
                    }
                });
            } else if (tries < 50) {
                logDebug('grecaptcha enterprise not ready, retry', tries);
                executeEntrepriseRecaptcha(action, callbackFunction, tries + 1);
            } else {
                logWarn('grecaptcha enterprise has not been loaded');
            }
        }, tries === 0 ? 0 : 250);
    }

    // If has consent to use social
    if (hasConsent('social')) {
        logDebug('facebook enabled');
        var fbSdkURL = '//connect.facebook.net/en_US/sdk.js';
        // See : https://developers.facebook.com/docs/javascript/quickstart/
        window.fbAsyncInit = function() {
        	FB.init({
            			appId      : '748765411943482',
                        autoLogAppEvents : true,
                        xfbml            : true,
                        version          : 'v3.2'
					});
			FB.AppEvents.logPageView();
		};
        (function(d, s, id){
	        var js, fjs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) {return;}
	        js = d.createElement(s); js.id = id;
	        js.src = fbSdkURL;
	        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    } else {
        logDebug('facebook disabled');
    }

</script>




	

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="bv-health-check" content="OK">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="canonical" href="https://codengo.bureauveritas.fr/portal/contenu/actualite/details/123">
		<meta name="msapplication-TileColor" content="#eee">
		<meta name="msapplication-TileImage" content="/favicon.ico">

        

        <!-- OPEN GRAPH -->
        <meta property="og:title" content="Code'nGo! - Examen du code de la route - Bureau Veritas">
		<meta property="fb:app_id" content="748765411943482">
		<meta property="fb:admins" content="748765411943482">
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://codengo.bureauveritas.fr/portal">
		<meta property="og:image" content="https://codengo.bureauveritas.fr/portal/img/logo-codengo.jpg">
		<meta property="og:description" content="Passez l'examen du code de la route près de chez vous pour 30€ ! Entraînez-vous au code et inscrivez-vous en ligne pour passer l'épreuve.">
		<meta property="og:locale" content="fr_FR">
		<meta property="og:site_name" content="Code'nGo!">

        <!-- TITLE -->
        
            <title>Passez votre code auto moto ou bateau dans le 34</title>
        
        

        <!-- DESCRIPTION -->
        
            <meta name="description" content="L'Hérault accueille une nouvelle salle Code'nGo!">
        
        

		
			<meta name="google-site-verification" content="X7gZU-feM9tk2ZSQI2XMs5_zVT7EBPYkYddc5kAhb54">
		

        
            <!-- Google Tag Manager -->
            <script>
	            if (enableTracking) {
	            	logDebug('googletagmanager enabled');
	                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	                })(window,document,'script','dataLayer','GTM-KV4XD5G');
	            } else {
	            	logDebug('googletagmanager disabled');
	            }
            </script>
            <!-- End Google Tag Manager -->
        

        
            <!-- Google Tag Manager -->
            <script>
	            if (enableTracking) {
	                logDebug('google adds tag manager');
	                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17959379134');

	            } else {
	            	logDebug('google adds tag manager disabled');
	            }
            </script>
            <!-- End Google Tag Manager -->
        

        
        <meta name="_csrf_parameter" content="_csrf"><meta name="_csrf_header" content="X-CSRF-TOKEN"><meta name="_csrf" content="b6c81235-ec2e-4329-9670-d841285cca70">

        
        <link type="text/css" rel="stylesheet" href="https://codengo.bureauveritas.fr/portal/css/cdr-lib.min-8.8.46.css.gz">
        <link type="text/css" rel="stylesheet" href="https://codengo.bureauveritas.fr/portal/css/cdr-application.min-8.8.46.css.gz">
        <script src="https://codengo.bureauveritas.fr/portal/js/cdr-lib.min-8.8.46.js.gz"></script>
	<script type="text/javascript">/*! axe v4.13.0
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
!function i(window){var q=window,document=window.document;function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var axe=axe||{},c=(axe.version="4.13.0","function"==typeof define&&define.amd&&define("axe-core",[],function(){return axe}),"object"===("undefined"==typeof module?"undefined":te(module))&&module.exports&&"function"==typeof i.toString&&(axe.source="("+i.toString()+')(typeof window === "object" ? window : this);',module.exports=axe),"function"==typeof window.getComputedStyle&&(window.axe=axe),["precision","format","inGamut"]),l=["space"],M=["algorithm"],I=["method"],B=["maxDeltaE","deltaEMethod","steps","maxSteps"],j=["node"],L=["relatedNodes"],V=["node"],z=["variant"],G=["matches"],$=["chromium"],H=["noImplicit"],U=["noPresentational"],W=["node"],Y=["environmentData"],K=["environmentData"],X=["environmentData"],Z=["environmentData"],J=["environmentData"];function Q(){var m,e="function"==typeof Symbol?Symbol:{},t=e.iterator||"@@iterator",n=e.toStringTag||"@@toStringTag";function r(e,t,n,r){var a,o,i,l,u,s,c,d,p,t=t&&t.prototype instanceof g?t:g,t=Object.create(t.prototype);return ee(t,"_invoke",(a=e,o=n,c=r||[],d=!1,p={p:s=0,n:0,v:m,a:f,f:f.bind(m,4),d:function(e,t){return i=e,l=0,u=m,p.n=t,h}},function(e,t,n){if(1<s)throw TypeError("Generator is already running");for(d&&1===t&&f(t,n),l=t,u=n;(v=l<2?m:u)||!d;){i||(l?l<3?(1<l&&(p.n=-1),f(l,u)):p.n=u:p.v=u);try{if(s=2,i){if(v=i[e=l?e:"next"]){if(!(v=v.call(i,u)))throw TypeError("iterator result is not an object");if(!v.done)return v;u=v.value,l<2&&(l=0)}else 1===l&&(v=i.return)&&v.call(i),l<2&&(u=TypeError("The iterator does not provide a '"+e+"' method"),l=1);i=m}else if((v=(d=p.n<0)?u:a.call(o,p))!==h)break}catch(e){i=m,l=1,u=e}finally{s=1}}return{value:v,done:d}}),!0),t;function f(e,t){for(l=e,u=t,v=0;!d&&s&&!n&&v<c.length;v++){var n,r=c[v],a=p.p,o=r[2];3<e?(n=o===t)&&(u=r[(l=r[4])?5:l=3],r[4]=r[5]=m):r[0]<=a&&((n=e<2&&a<r[1])?(l=0,p.v=t,p.n=r[1]):a<o&&(n=e<3||r[0]>t||o<t)&&(r[4]=e,r[5]=t,p.n=o,l=0))}if(n||1<e)return h;throw d=!0,t}}var h={};function g(){}function a(){}function o(){}var v=Object.getPrototypeOf,e=[][t]?v(v([][t]())):(ee(v={},t,function(){return this}),v),i=o.prototype=g.prototype=Object.create(e);function l(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):(e.__proto__=o,ee(e,n,"GeneratorFunction")),e.prototype=Object.create(i),e}return ee(i,"constructor",a.prototype=o),ee(o,"constructor",a),ee(o,n,a.displayName="GeneratorFunction"),ee(i),ee(i,n,"Generator"),ee(i,t,function(){return this}),ee(i,"toString",function(){return"[object Generator]"}),(Q=function(){return{w:r,m:l}})()}function ee(e,t,n,r){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}(ee=function(e,t,n,r){function a(t,n){ee(e,t,function(e){return this._invoke(t,n,e)})}t?o?o(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a("next",0),a("throw",1),a("return",2))})(e,t,n,r)}function ne(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return n(e)}l.done?t(u):Promise.resolve(u).then(r,a)}function re(l){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=l.apply(e,i);function a(e){ne(r,t,n,a,o,"next",e)}function o(e){ne(r,t,n,a,o,"throw",e)}a(void 0)})}}function ae(e){return De(e)||fe(e)||Ce(e)||we()}function oe(e){var n="function"==typeof Map?new Map:void 0;return function(e){if(null===e||!(t=>{try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}})(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return le(e,arguments,ce(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),pe(t,e)}(e)}function ie(e,t,n){return(t=Fe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t,n){var r;return se()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,t),t=new(e.bind.apply(e,r)),n&&pe(t,n.prototype),t)}function v(e,t){if(null==e)return{};var n,r=((e,t)=>{if(null==e)return{};var n,r={};for(n in e)!{}.hasOwnProperty.call(e,n)||-1!==t.indexOf(n)||(r[n]=e[n]);return r})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)n=a[o],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function ue(e,t,n){t=ce(t);var r=e,t=se()?Reflect.construct(t,n||[],ce(e).constructor):t.apply(e,n);if(t&&("object"==te(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==(t=r))return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}function se(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(se=function(){return!!e})()}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pe(e,t)}function pe(e,t){return(pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)!{}.hasOwnProperty.call(r,n)||(e[n]=r[n])}return e}).apply(null,arguments)}function w(e){return(e=>{if(Array.isArray(e))return ke(e)})(e)||fe(e)||Ce(e)||(()=>{throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function fe(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function me(e,t,n){ge(e,t),t.set(e,n)}function he(e,t){ge(e,t),t.add(e)}function ge(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ve(e,t){return e.get(ye(e,t))}function be(e,t,n){e.set(ye(e,t),n)}function ye(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function D(e,t){return De(e)||((e,t)=>{var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}})(e,t)||Ce(e,t)||we()}function we(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function De(e){if(Array.isArray(e))return e}function xe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Fe(r.key),r)}}function Ae(e,t,n){return t&&Ee(e.prototype,t),n&&Ee(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fe(e){e=((e,t)=>{if("object"!=te(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);if(n=n.call(e,t||"default"),"object"==te(n))throw new TypeError("@@toPrimitive must return a primitive value.");return n})(e,"string");return"symbol"==te(e)?e:e+""}function x(e,t){var n,r,a,o,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return a=!(r=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){a=!0,n=e},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw n}}};if(Array.isArray(e)||(i=Ce(e))||t&&e&&"number"==typeof e.length)return i&&(e=i),o=0,{s:t=function(){},n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ce(e,t){var n;if(e)return"string"==typeof e?ke(e,t):"Map"===(n="Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Re=void 0,Ne=void 0,Te=void 0,Se=void 0,Oe=void 0,_e=void 0,Pe=void 0,Me=void 0,Ie=void 0,Be=void 0,je=void 0;function e(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}}function Le(e,t){for(var n in t)He(e,n,{get:t[n],enumerable:!0})}function qe(t,n,r){if(n&&"object"===te(n)||"function"==typeof n){var a,o=x(Ye(n));try{for(o.s();!(a=o.n()).done;)(()=>{var e=a.value;We.call(t,e)||"default"===e||He(t,e,{get:function(){return n[e]},enumerable:!(r=Ke(n,e))||r.enumerable})})()}catch(e){o.e(e)}finally{o.f()}}return t}function Ve(e){return qe((t=He(null!=e?$e(Ue(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),He(t,"__esModule",{value:!0})),e);var t}function ze(e,t,n){e=e,t="symbol"!==te(t)?t+"":t,n=n,t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}var Ge,$e=Object.create,He=Object.defineProperty,Ue=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty,Ye=Object.getOwnPropertyNames,Ke=Object.getOwnPropertyDescriptor,Xe=e(function(e,t){var n;n=function(){function u(e){return"function"==typeof e}var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,t=void 0,a=void 0,i=function(e,t){d[r]=e,d[r+1]=t,2===(r+=2)&&(a?a(p):I())};var e=void 0!==window?window:void 0,o=e||{},o=o.MutationObserver||o.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),s="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function c(){var e=setTimeout;return function(){return e(p,1)}}var d=new Array(1e3);function p(){for(var e=0;e<r;e+=2)(0,d[e])(d[e+1]),d[e]=void 0,d[e+1]=void 0;r=0}function f(){try{var e=Function("return this")().require("vertx");return void 0!==(t=e.runOnLoop||e.runOnContext)?function(){t(p)}:c()}catch(e){return c()}}var m,h,g,I=void 0;function v(e,t){var n,r=this,a=new this.constructor(w),o=(void 0===a[y]&&O(a),r._state);return o?(n=arguments[o-1],i(function(){return T(o,a,n,r._result)})):R(r,a,e,t),a}function b(e){var t;return e&&"object"===te(e)&&e.constructor===this?e:(F(t=new this(w),e),t)}var I=l?function(){return process.nextTick(p)}:o?(h=0,l=new o(p),g=document.createTextNode(""),l.observe(g,{characterData:!0}),function(){g.data=h=++h%2}):s?((m=new MessageChannel).port1.onmessage=p,function(){return m.port2.postMessage(0)}):(void 0===e?f:c)(),y=Math.random().toString(36).substring(2);function w(){}var D=void 0,x=1,E=2;function B(e,r,a){i(function(t){var n=!1,e=((e,t,n,r)=>{try{e.call(t,n,r)}catch(e){return e}})(a,r,function(e){n||(n=!0,(r!==e?F:C)(t,e))},function(e){n||(n=!0,k(t,e))},t._label);!n&&e&&(n=!0,k(t,e))},e)}function A(e,t,n){var r,a;t.constructor===e.constructor&&n===v&&t.constructor.resolve===b?(r=e,(a=t)._state===x?C(r,a._result):a._state===E?k(r,a._result):R(a,void 0,function(e){return F(r,e)},function(e){return k(r,e)})):void 0!==n&&u(n)?B(e,t,n):C(e,t)}function F(t,e){if(t===e)k(t,new TypeError("You cannot resolve a promise with itself"));else if(r=te(n=e),null===n||"object"!==r&&"function"!==r)C(t,e);else{n=void 0;try{n=e.then}catch(e){return void k(t,e)}A(t,e,n)}var n,r}function j(e){e._onerror&&e._onerror(e._result),N(e)}function C(e,t){e._state===D&&(e._result=t,e._state=x,0!==e._subscribers.length)&&i(N,e)}function k(e,t){e._state===D&&(e._state=E,e._result=t,i(j,e))}function R(e,t,n,r){var a=e._subscribers,o=a.length;e._onerror=null,a[o]=t,a[o+x]=n,a[o+E]=r,0===o&&e._state&&i(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?T(n,r,a,o):a(o);e._subscribers.length=0}}function T(e,t,n,r){var a=u(n),o=void 0,i=void 0,l=!0;if(a){try{o=n(r)}catch(e){l=!1,i=e}if(t===o)return void k(t,new TypeError("A promises callback cannot return that same promise."))}else o=r;t._state===D&&(a&&l?F(t,o):!1===l?k(t,i):e===x?C(t,o):e===E&&k(t,o))}var S=0;function O(e){e[y]=S++,e._state=void 0,e._result=void 0,e._subscribers=[]}_.prototype._enumerate=function(e){for(var t=0;this._state===D&&t<e.length;t++)this._eachEntry(e[t],t)},_.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var a,o=void 0,i=void 0,l=!1;try{o=t.then}catch(e){l=!0,i=e}o===v&&t._state!==D?this._settledAt(t._state,e,t._result):"function"!=typeof o?(this._remaining--,this._result[e]=t):n===P?(a=new n(w),l?k(a,i):A(a,t,o),this._willSettleAt(a,e)):this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},_.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===D&&(this._remaining--,e===E?k(r,n):this._result[t]=n),0===this._remaining&&C(r,this._result)},_.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,function(e){return n._settledAt(x,t,e)},function(e){return n._settledAt(E,t,e)})};var L=_;function _(e,t){this._instanceConstructor=e,this.promise=new e(w),this.promise[y]||O(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0!==this.length&&(this.length=this.length||0,this._enumerate(t),0!==this._remaining)||C(this.promise,this._result)):k(this.promise,new Error("Array Methods must be provided an Array"))}M.prototype.catch=function(e){return this.then(null,e)},M.prototype.finally=function(t){var n=this.constructor;return u(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)};var P=M;function M(e){if(this[y]=S++,this._result=this._state=void 0,this._subscribers=[],w!==e){if("function"!=typeof e)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof M))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");var t=this;try{e(function(e){F(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}}return P.prototype.then=v,P.all=function(e){return new L(this,e).promise},P.race=function(a){var o=this;return n(a)?new o(function(e,t){for(var n=a.length,r=0;r<n;r++)o.resolve(a[r]).then(e,t)}):new o(function(e,t){return t(new TypeError("You must pass an array to race."))})},P.resolve=b,P.reject=function(e){var t=new this(w);return k(t,e),t},P._setScheduler=function(e){a=e},P._setAsap=function(e){i=e},P._asap=i,P.polyfill=function(){var e=void 0;if(void 0!==q)e=q;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=P},P.Promise=P},"object"===te(e=e)&&void 0!==t?t.exports=n():"function"==typeof define&&define.amd?define(n):e.ES6Promise=n()}),Ze=e(function(l){var t,n,r=1e5,p=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0}}),f=Math.LN2,m=Math.abs,h=Math.floor,g=Math.log,v=Math.min,b=Math.pow,I=Math.round;function a(e,t,n){return e<t?t:n<e?n:e}var o,e,i,u,s,c,d,y,w,D,x,E=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object");var t,n=[];for(t in e)p.HasOwnProperty(e,t)&&n.push(t);return n};function A(e){if(E&&o)for(var t=E(e),n=0;n<t.length;n+=1)o(e,t[n],{value:e[t[n]],writable:!1,enumerable:!1,configurable:!1})}function B(n){if(o){if(n.length>r)throw new RangeError("Array too large for polyfill");for(var e=0;e<n.length;e+=1)(t=>{o(n,t,{get:function(){return n._getter(t)},set:function(e){n._setter(t,e)},enumerable:!0,configurable:!1})})(e)}}function F(e,t){t=32-t;return e<<t>>t}function C(e,t){t=32-t;return e<<t>>>t}function j(e){return[255&e]}function L(e){return F(e[0],8)}function q(e){return[255&e]}function k(e){return C(e[0],8)}function V(e){return[(e=I(Number(e)))<0?0:255<e?255:255&e]}function z(e){return[e>>8&255,255&e]}function G(e){return F(e[0]<<8|e[1],16)}function $(e){return[e>>8&255,255&e]}function H(e){return C(e[0]<<8|e[1],16)}function U(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function W(e){return F(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function Y(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function K(e){return C(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e,t,n){var r,a,o,i,l,u,s,c=(1<<t-1)-1;function d(e){var t=h(e),e=e-t;return!(e<.5)&&(.5<e||t%2)?t+1:t}for(e!=e?(a=(1<<t)-1,o=b(2,n-1),r=0):e===1/0||e===-1/0?(a=(1<<t)-1,r=e<(o=0)?1:0):0===e?r=1/e==-1/(o=a=0)?1:0:(r=e<0,(e=m(e))>=b(2,1-c)?(a=v(h(g(e)/f),1023),2<=(o=d(e/b(2,a)*b(2,n)))/b(2,n)&&(a+=1,o=1),c<a?(a=(1<<t)-1,o=0):(a+=c,o-=b(2,n))):(a=0,o=d(e/b(2,1-c-n)))),l=[],i=n;i;--i)l.push(o%2?1:0),o=h(o/2);for(i=t;i;--i)l.push(a%2?1:0),a=h(a/2);for(l.push(r?1:0),l.reverse(),u=l.join(""),s=[];u.length;)s.push(parseInt(u.substring(0,8),2)),u=u.substring(8);return s}function N(e,t,n){for(var r,a,o,i,l,u,s=[],c=e.length;c;--c)for(a=e[c-1],r=8;r;--r)s.push(a%2?1:0),a>>=1;return s.reverse(),u=s.join(""),o=(1<<t-1)-1,i=parseInt(u.substring(0,1),2)?-1:1,l=parseInt(u.substring(1,1+t),2),u=parseInt(u.substring(1+t),2),l===(1<<t)-1?0===u?1/0*i:NaN:0<l?i*b(2,l-o)*(1+u/b(2,n)):0!==u?i*b(2,-(o-1))*(u/b(2,n)):i<0?-0:0}function X(e){return N(e,11,52)}function Z(e){return R(e,11,52)}function J(e){return N(e,8,23)}function Q(e){return R(e,8,23)}function T(e){if((e=p.ToInt32(e))<0)throw new RangeError("ArrayBu
```
