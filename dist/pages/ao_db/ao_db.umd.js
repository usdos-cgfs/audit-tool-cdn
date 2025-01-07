(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ao_db = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var knockoutLatest = {exports: {}};

	/*!
	 * Knockout JavaScript library v3.5.1
	 * (c) The Knockout.js team - http://knockoutjs.com/
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	var hasRequiredKnockoutLatest;

	function requireKnockoutLatest () {
		if (hasRequiredKnockoutLatest) return knockoutLatest.exports;
		hasRequiredKnockoutLatest = 1;
		(function (module, exports) {
			(function() {(function(n){var A=this||(0, eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){n(module.exports||exports);})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b();},c));}}function Y(b,c){var d;return function(){clearTimeout(d);
			d=a.a.setTimeout(b,c);}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a);}function aa(a,c){null!==c&&c.s&&c.s();}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd());}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c;};a.L=function(a,c,d){a[c]=d;};a.version="3.5.1";a.b("version",
			a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c]);}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e);});b[c]=l.join(" ");}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
			"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a;});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return {Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
			D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a);},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return -1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift();},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b);});return c},Mb:function(a,
			b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1);},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
			b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild);},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k);}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d]);},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
			l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k]);}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d);}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b;},Db:function(a){return null===a||a===n?"":a.trim?
			a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return !0;if(11===a.nodeType)return !1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return !!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return !!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
			a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0);},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a);},f="on"+c;b.attachEvent(f,
			k);a.a.K.za(b,function(){b.detachEvent(f,k);});}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e);},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
			typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c);},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
			(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a);})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d));},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b);},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return "&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
			c+"'/>"),!1);}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom));},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b;}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
			e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return "string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
			return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
			c.type="hidden";c.name=a;c.value=b;p.appendChild(c);});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p);},0);}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
			a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
			a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
			{};}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return {get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c);},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
			d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0);}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return {za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c);},yb:function(c,
			d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n));},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")));});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b);},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a]);}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
			a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else {if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
			l.parentNode&&l.parentNode.removeChild(l);}}else {(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes);}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
			c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e]);};})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f});}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
			e);}var c={};return {Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return "\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a];}},cd:function(c,e){var f=
			[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m);}},Uc:function(a){return (a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
			++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f;}try{d();}catch(p){a.a.Gc(p);}}}function c(){b();h=f=e.length=0;}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo");}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
			b=null;a();};w.documentElement.appendChild(b);}:function(a){setTimeout(a,0);};return {scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null);},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e);},
			c);}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)});},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty");}finally{f=
			!1;}}}}));},notify:function(a,c){a.equalityComparer="always"==c?null:K;}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l);};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null);};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this));};
			a.T=function(){a.a.Ab(this,D);D.qb(this);};var D={qb:function(a){a.U={change:[]};a.sc=1;},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d);});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b);}finally{a.u.end();}}},ob:function(){return this.sc},
			Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc;},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h);});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k();};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"));};c.rc=function(){m=!0;};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0);};},Wa:function(a){return this.U[a]&&this.U[a].length},
			Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length);});return c},sb:function(a,c){return !this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return "[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c);});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
			Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a;}function c(){e=d.pop();}var d=[],e,f=0;return {xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f));}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c();}},qa:function(){if(e)return e.o.qa()},
			Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
			a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I]);},ya:function(){this.notifySubscribers(this[I],"beforeChange");}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
			return !!b};a.Za=function(b){return "function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
			a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--;}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
			a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0);}this.xa();},destroyAll:function(b){return b===n?this.destroy(function(){return !0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa());},sorted:function(a){var c=this().slice(0);
			return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d};});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)};});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
			typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f;}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange");}}e?c():(e=!0,h=b.subscribe(function(){++m;},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c));}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
			k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d();};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n);};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
			d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k;}};}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
			a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
			d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s();});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da;});return b},Vb:function(b){if(!this[r].V)return !1;var c=this.Va();return -1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
			c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob();},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return !0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1);},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc();},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
			this);return {da:a,s:function(){c.s();d.s();}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0);},c)):b.Ia?b.Ia(!0):b.ha(!0);},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b);}finally{c.rb=!1;}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
			od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1;}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
			ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a);};},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s();});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n);}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
			0,c.ha()&&c.Gb();else {var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a;});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m;});c.Xa()&&c.ha()&&c.Gb();}d.ra||c.notifySubscribers(d.X,"awake");}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s());}),c.J=!0,this.notifySubscribers(n,"asleep"));},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
			a&&"beforeChange"!=a||this.v();}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return "function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
			c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
			n?l:b(d,f,g);}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON");}else for(c in a)b(c);}function d(){this.keys=[];this.values=[];}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
			b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c));},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}};})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a));});e.notifySubscribers(e.v());return h}return "function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return !0===b.__ko__hasDomDataOptionValue__?
			a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
			typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e;},0);break;default:if(null===c||c===n)c="";b.value=c;}}};})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
			-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
			41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B);}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
			h={};return {Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}");}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e);}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
			a.value);});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return !0;return !1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e);}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
			a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++;}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
			0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d]);}else a.a.Tb(c);},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
			c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e);}else a.a.va(c,d);},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c);},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d);},firstChild:function(a){if(b(a))return !a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
			a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return (a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
			g:h=[k];}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g]);}while(f=f.nextSibling)}}}};})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={};};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
			b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return !1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
			parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m;}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga;})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc());}function c(c,d,e){this.node=c;this.yc=
			d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e);}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return "function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
			d=a.h.firstChild(c);}for(;e=d;)d=a.h.nextSibling(e),k(b,e);}a.i.ma(c,a.i.H);}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c);}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
			ca(c);}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0;}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0;}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else {var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]();}return g},null,{l:b});g&&m.ja()||(m=null);}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
			g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0, g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]));}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0, g[a.i.pa])();c&&a.h.firstChild(b)&&c(b);}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
			f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f;}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x);},null,{l:b});}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
			k;}});}f=u===n;return {shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
			b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n);};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b;},e)}return new a.fa(b,
			this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a);},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b);},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node);};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc();};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
			null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc());};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
			},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e;})}};a.Td=function(b){return (b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b);};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
			}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b);};a.Dc=function(b){return !b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return (b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
			a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec);})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b);});}),l=!0);}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
			c);}):b(null,null);});}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l);}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l);}else f(null);}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition);}):
			a.na.zb(function(){e(f.definition);}):c(d,e);},Bc:function(a){delete g[a];},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc);})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h);}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g();});}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g();});}):g();}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
			else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e});}else "viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b);}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
			T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a);}):a("Uses require, but no AMD loader is present"):c(b);}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c;};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
			a.j.Bc(b);};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null);},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d);});},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c);}else b("Unknown element type: "+
			c);else b("Unknown template value: "+c);},loadViewModel:function(a,b,d){c(g(a),b,d);}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h;})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
			function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a);},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return {$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
			var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m;}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b();a.j.dd;return c}}(w.createDocumentFragment));})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b);}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
			b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null;}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
			d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t;}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e);}});},null,{l:e});return {controlsDescendantBindings:!0}}};a.h.ea.component=!0;})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
			d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d);});}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q);}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
			d,"checked",f,!0);}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d;}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return !0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
			k=n;}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c());}};})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0);}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d);}):a.c["class"].update(b,c);}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0);}};a.c.disable=
			{update:function(b,c){a.c.enable.update(b,function(){return !a.a.f(c())});}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p);}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1);}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation());}});});}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
			if(!d||"number"==typeof d.length)return {foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return {foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
			!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement;}catch(l){g=f.body;}e=g===b;}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1;}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1;},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
			d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]));}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return {controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c());}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n};}x=(t=
			"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k;}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m;}},null,{l:b});return {controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0;}b("if");b("ifnot",!1,!0);b("with",!0);})();a.c.let={init:function(b,
			c,d,e,f){c=f.extend(c);a.Oa(c,b);return {controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return {controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return "function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
			0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"]);}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
			k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a);};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n]);});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
			a.a.Bb(e,c));return [e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"]);}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m);}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b));});a.m.eb(e,d,"selectedOptions",
			f);}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c);});b.scrollTop=e;}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}));},null,{notifyImmediately:!0});},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
			{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else {c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px");}});}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b);}finally{!0!==d&&(a.preventDefault?
			a.preventDefault():a.returnValue=!1);}});}};a.c.text={init:function(){return {controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c());}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
			(g=b(c.match(/rv:([^ )]+)/)));}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b);},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c);};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d);}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value);}function r(){w||(L=b.value,w=a.a.setTimeout(z,
			4));}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d));}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A();});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
			z);l("blur",z);a.o(m,null,{l:b});}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a);}};})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d);}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return {controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
			e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f);};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0;}),a.a.B(b,"focus",function(){m=!1;}),a.a.B(b,"blur",function(){m&&l();}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
			(d=function(){k=a.w.M(b);a.a.setTimeout(l,0);},c=c.substring(5));a.a.B(b,c,d);});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l);}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f);};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}));},
			null,{notifyImmediately:!0});}else a.a.B(b,"change",l),a.o(p,null,{l:b});}else a.ib(b,{checkedValue:c});},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none");}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return !a.a.f(c())});}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}};})("click");
			a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
			function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return !1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0);};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
			l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
			d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return {xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d);},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h);})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
			a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4;}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c;};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1]);};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
			if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}));}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e});};a.C.ia=function(a){this.F=a;};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
			c,{bb:arguments[0]});};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia);})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b);}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c));});c.length=0;if(!e)return;e===f?c.push(e):
			(c.push(e,f),a.a.Ua(c,g));}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b);});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d]);});a.a.Ua(c,g);}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
			f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b;};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
			n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m));},null,{Sa:function(){return !x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode");})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H);}
			function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null;}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c);}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
			!a.a.f(b._destroy)}));x(b);},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a);},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e);}else if(d=a.h.childNodes(b),0<d.length)e=
			a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return {controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
			e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f);}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0;})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
			m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g;}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
			(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l);},null,{l:b,Sa:function(){return !a.a.kd(k)}});
			return {Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y);}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y);}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa);});}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else {if(!k||t&&t._countWaitingForRemove){var E=
			a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0});}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value);}for(;w<f.length;)p(u++);v._countWaitingForRemove=I;}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
			h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement;}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1]);}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
			q(h.afterAdd,F);};})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1;};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
			this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return "{{ko_code ((function() { return "+
			a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>");};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "});};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a);})();});})();})(); 
		} (knockoutLatest, knockoutLatest.exports));
		return knockoutLatest.exports;
	}

	var knockoutLatestExports = requireKnockoutLatest();

	const state = {};

	window.history.replaceState({}, "", document.location.href);
	function setUrlParam(param, newVal) {
	  // No need to reset the param if it hasn't changed
	  if (getUrlParam(param) == newVal) return;

	  const search = window.location.search;
	  //var urlParams = new URLSearchParams(queryString);

	  const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
	  const query = search.replace(regex, "$1").replace(/&$/, "");

	  const urlParams =
	    (query.length > 2 ? query + "&" : "?") +
	    (newVal ? param + "=" + newVal : "");

	  state[param] = newVal;
	  window.history.pushState(state, "", urlParams.toString());
	}

	function getUrlParam(param) {
	  const results = new RegExp("[?&]" + param + "=([^&#]*)").exec(
	    window.location.href
	  );
	  if (results == null) {
	    return null;
	  } else {
	    return decodeURI(results[1]) || 0;
	  }
	}

	function NewUtilities() {
	  const commonUtilities = this;

	  const loadStart = new Date();
	  var m_siteUrl = window.context.pageContext.web.serverRelativeUrl; //IE11 in sp 2013 does not recognize L_Menu_BaseUrl
	  // var m_siteUrl = window.context.pageContext.legacyPageContext.webServerRelativeUrl; //IE11 in sp 2013 does not recognize L_Menu_BaseUrl

	  var m_listTitleRequests = "AuditRequests";
	  var m_listNameRequests = "AuditRequests";

	  var m_listTitleRequestsInternal = "AuditRequestsInternal";
	  var m_listNameRequestsInternal = "AuditRequestsInternal";

	  var m_listTitleResponses = "AuditResponses";
	  var m_listNameResponses = "AuditResponses";

	  var m_libTitleRequestDocs = "AuditRequestDocs";
	  var m_libNameRequestDocs = "AuditRequestDocs";

	  var m_libTitleCoverSheet = "AuditCoverSheets";
	  var m_libNameCoverSheet = "AuditCoverSheets";

	  var m_libTitleResponseDocs = "AuditResponseDocs";
	  var m_libNameResponseDocs = "AuditResponseDocs";

	  var m_libTitleResponseDocsEA = "AuditResponseDocsRO";
	  var m_libNameResponseDocsEA = "AuditResponseDocsRO";

	  var m_listTitleActionOffices = "AuditOrganizations";
	  var m_listNameActionOffices = "AuditOrganizations";

	  var m_listTitleEmailHistory = "AuditEmails";
	  var m_listNameEmailHistory = "AuditEmails";

	  var m_listTitleBulkResponses = "AuditBulkResponses";
	  var m_listNameBulkResponses = "AuditBulkResponses";

	  var m_listTitleBulkPermissions = "AuditBulkPermissions";
	  var m_listNameBulkPermissions = "AuditBulkPermissions";

	  var m_groupNameSpecialPermName1 = "CGFS Special Access1";
	  var m_groupNameSpecialPermName2 = "CGFS Special Access2";
	  var m_groupNameQA = "Quality Assurance";
	  var m_groupNameEA = "External Auditors";

	  var m_libResponseDocsLibraryGUID = null;

	  var m_arrSiteGroups = null;
	  var m_arrAOs = null;
	  /**
	   * Reloads the page, trys to preserve current path
	   * @param {bool} hard flag to remove all url params
	   * @returns
	   */
	  function m_fnRefresh(hard = false) {
	    if (hard) {
	      location.href = location.pathname;
	      return;
	    }
	    var curPath = location.pathname;

	    if ($("#tabs").html() != null && $("#tabs").html() != "") {
	      var tabIndex = 0;
	      try {
	        tabIndex = $("#tabs").tabs("option", "active");
	      } catch (ex) {}

	      curPath += "?Tab=" + tabIndex;

	      if (tabIndex == 0 && $("#ddlResponseName").val() != "") {
	        curPath += "&ResNum=" + $("#ddlResponseName").val();
	      } else if (tabIndex == 1) {
	        var responseNumOpen = $("#ddlResponsesOpen").val();
	        var responseNumProcessed = $("#ddlResponsesProcessed").val();

	        if (responseNumOpen != null && responseNumOpen != "")
	          curPath += "&ResNum=" + responseNumOpen;
	        else if (responseNumProcessed != null && responseNumProcessed != "")
	          curPath += "&ResNum=" + responseNumProcessed;
	      }

	      location.href = curPath;
	    } else {
	      location.reload();
	    }
	  }

	  function m_fnOnLoadDisplayTimeStamp() {
	    var curDate = new Date();
	    const loadTime = (curDate - loadStart) / 1000;
	    document.getElementById(
	      "divLoading"
	    ).innerHTML = `Loaded at ${curDate.format("MM/dd/yyyy hh:mm tt")}<br/>
    Load time: ${loadTime + "s"}
    `;
	  }

	  function m_fnOnLoadDisplayTabAndResponse() {
	    var paramTabIndex = getUrlParam("Tab");
	    if (paramTabIndex != null && paramTabIndex != "") {
	      $("#tabs").tabs("option", "active", paramTabIndex);
	    }

	    var bFiltered = false;

	    var paramResponseNum = getUrlParam("ResNum");
	    if (paramResponseNum != null && paramResponseNum != "") {
	      if (paramTabIndex == 0) {
	        if (
	          $("#ddlResponseName option[value='" + paramResponseNum + "']")
	            .length > 0
	        ) {
	          $("#ddlResponseName").val(paramResponseNum).change();
	          bFiltered = true;
	        }
	      } else {
	        if (
	          $("#ddlResponsesOpen option[value='" + paramResponseNum + "']")
	            .length > 0
	        ) {
	          $("#ddlResponsesOpen").val(paramResponseNum).change();
	        } else if (
	          $("#ddlResponsesProcessed option[value='" + paramResponseNum + "']")
	            .length > 0
	        ) {
	          $("#ddlResponsesProcessed").val(paramResponseNum).change();
	        }
	      }
	    }

	    if (!bFiltered) {
	      $(".sr-response-item").show(); //hiding rows by default
	    }
	  }

	  function m_fnOnLoadFilterResponses(responseStatus1, responseStatus2) {
	    var count = 0;
	    var resStatus1 = 0;
	    var resStatus2 = 0;

	    var eacher = $(".sr-response-item");

	    eacher.each(function () {
	      var reqStatus = $.trim($(this).find(".sr-response-requestStatus").text());
	      var resStatus = $.trim($(this).find(".sr-response-status").text());

	      if (
	        (resStatus == responseStatus1 || resStatus == responseStatus2) &&
	        (reqStatus == "Open" || reqStatus == "ReOpened")
	      ) {
	        $(this).addClass("highlighted");
	        count++;

	        if (resStatus == responseStatus1) resStatus1++;
	        else if (resStatus == responseStatus2) resStatus2++;
	      }
	    });

	    if (count > 0) {
	      $("#lblStatusReportResponsesMsg").html(
	        "<span class='ui-icon ui-icon-alert'></span>There are " +
	          count +
	          " Responses pending your review"
	      );

	      if (resStatus1 > 0 && resStatus2 == 0)
	        $("#ddlResponseStatus").val(responseStatus1).change();
	      else if (resStatus2 > 0 && resStatus1 == 0)
	        $("#ddlResponseStatus").val(responseStatus2).change();
	    } else
	      $("#lblStatusReportResponsesMsg").html(
	        "<span class='ui-icon ui-icon-circle-check'></span>There are 0 Responses pending your review"
	      );
	  }

	  function m_fnLoadSiteGroups(itemColl) {
	    m_arrSiteGroups = new Array();

	    var listItemEnumerator = itemColl.getEnumerator();
	    while (listItemEnumerator.moveNext()) {
	      var oListItem = listItemEnumerator.get_current();

	      var id = oListItem.get_id();
	      var loginName = oListItem.get_loginName();
	      var title = oListItem.get_title();

	      var groupObject = new Object();
	      groupObject["ID"] = id;
	      groupObject["loginName"] = loginName;
	      groupObject["title"] = title;
	      groupObject["group"] = oListItem;

	      m_arrSiteGroups.push(groupObject);
	    }
	  }

	  function m_fnGetSPSiteGroup(groupName) {
	    var userGroup = null;
	    if (m_arrSiteGroups != null) {
	      for (var x = 0; x < m_arrSiteGroups.length; x++) {
	        if (m_arrSiteGroups[x].title == groupName) {
	          userGroup = m_arrSiteGroups[x].group;
	          break;
	        }
	      }
	    }
	    return userGroup;
	  }

	  function m_fnLoadActionOffices(itemColl) {
	    m_arrAOs = new Array();

	    var listItemEnumerator = itemColl.getEnumerator();
	    while (listItemEnumerator.moveNext()) {
	      var oListItem = listItemEnumerator.get_current();

	      var ID = oListItem.get_item("ID");
	      var title = oListItem.get_item("Title");
	      var userGroup = oListItem.get_item("UserGroup");
	      if (userGroup != null) {
	        userGroup = userGroup.get_lookupValue();
	      } else userGroup = "";
	      let role = oListItem.get_item("Role");

	      var aoObject = {
	        ID,
	        title,
	        userGroup,
	        role,
	      };

	      m_arrAOs.push(aoObject);
	    }
	  }

	  function m_fnGetAOSPGroupName(groupName) {
	    //finds the group name corresponding to the lookup field selected
	    var userGroup = null;
	    if (m_arrAOs != null) {
	      for (var x = 0; x < m_arrAOs.length; x++) {
	        var oGroup = m_arrAOs[x];
	        if (oGroup.title == groupName) {
	          userGroup = oGroup.userGroup;
	          break;
	        }
	      }
	    }
	    return userGroup;
	  }

	  function m_fnCheckSPItemHasGroupPermission(item, groupName, permissionLevel) {
	    if (
	      item == null ||
	      groupName == "" ||
	      groupName == null ||
	      permissionLevel == null
	    )
	      return false;

	    var match = false;
	    var roleAssignments = item.get_roleAssignments();
	    if (roleAssignments == null) {
	      alert("Error retrieving role assignments");
	      return false;
	    }

	    var rolesEnumerator = roleAssignments.getEnumerator();
	    while (rolesEnumerator.moveNext()) {
	      var role = rolesEnumerator.get_current();
	      if (role != null) {
	        var roleMember = role.get_member();
	        if (roleMember.isPropertyAvailable("Title")) {
	          var memberTitleName = roleMember.get_title();

	          var roleDefs = role.get_roleDefinitionBindings();
	          if (roleDefs != null) {
	            var roleDefsEnumerator = roleDefs.getEnumerator();
	            while (roleDefsEnumerator.moveNext()) {
	              var rd = roleDefsEnumerator.get_current();
	              rd.get_name();

	              if (
	                memberTitleName == groupName &&
	                rd.get_basePermissions().has(permissionLevel)
	              ) {
	                match = true;
	                break;
	              }
	            }
	          }
	        }
	      }
	    }
	    return match;
	  }

	  function m_fnGoToResponse(responseTitle, isIA) {
	    if (!isIA) {
	      var bFound = false;
	      $("#ddlResponsesOpen > option").each(function () {
	        if ($(this).text() == responseTitle) {
	          bFound = true;
	          notifyId = SP.UI.Notify.addNotification(
	            "Displaying Response (" + responseTitle + ")",
	            false
	          );
	          $("#ddlResponsesOpen").val(responseTitle).change();

	          return false;
	        }
	      });
	      if (!bFound) {
	        $("#ddlResponsesProcessed > option").each(function () {
	          if ($(this).text() == responseTitle) {
	            bFound = true;
	            notifyId = SP.UI.Notify.addNotification(
	              "Displaying Response (" + responseTitle + ")",
	              false
	            );
	            $("#ddlResponsesProcessed").val(responseTitle).change();

	            return false;
	          }
	        });
	      }

	      $("#tabs").tabs({ active: 1 });
	    }
	  }

	  function m_fnGetResponseDocStyleTag2(documentStatus) {
	    var styleTag = {};
	    if (documentStatus == "Archived")
	      styleTag = { "background-color": "Gainsboro" };
	    else if (documentStatus == "Approved")
	      styleTag = { "background-color": "PaleGreen" };
	    else if (documentStatus == "Rejected")
	      styleTag = { "background-color": "LightSalmon" };
	    else if (documentStatus == "Sent to QA")
	      styleTag = { "background-color": "LightCyan" };
	    else if (documentStatus == "Submitted")
	      styleTag = { "background-color": "LemonChiffon" };
	    else if (documentStatus == "Marked for Deletion")
	      styleTag = {
	        "background-color": "Gainsboro",
	        "font-style": "italic",
	      };
	    return styleTag;
	    //			styleTag = " style='background-color:Gainsboro; font-style:italic' title='Marked for Deletion by the Action Office' ";
	  }

	  function m_fnGetResponseDocStyleTag(documentStatus) {
	    var styleTag = "";

	    if (documentStatus == "Archived")
	      styleTag = " style='background-color:Gainsboro;' ";
	    else if (documentStatus == "Approved")
	      styleTag = " style='background-color:PaleGreen;' ";
	    else if (documentStatus == "Rejected")
	      styleTag = " style='background-color:LightSalmon;' ";
	    else if (documentStatus == "Sent to QA")
	      styleTag = " style='background-color:LightCyan;' ";
	    else if (documentStatus == "Submitted")
	      styleTag = " style='background-color:LemonChiffon;' ";
	    else if (documentStatus == "Marked for Deletion")
	      styleTag =
	        " style='background-color:Gainsboro; font-style:italic' title='Marked for Deletion by the Action Office' ";

	    return styleTag;
	  }

	  function m_fnCheckIfEmailFolderExists(items, requestNumber) {
	    //Check if folder exists in email library
	    var bFolderExists = false;
	    var listItemEnumerator = items.getEnumerator();
	    while (listItemEnumerator.moveNext()) {
	      var folderItem = listItemEnumerator.get_current();
	      var itemName = folderItem.get_displayName();
	      if (itemName == requestNumber) {
	        var bFolderExists = true;
	        break;
	      }
	    }
	    return bFolderExists;
	  }

	  var m_cntAddToEmailFolder = 0;
	  var m_cntAddedToEmailFolder = 0;

	  function m_fnCreateEmailFolder(list, requestNumber, requestItem, OnComplete) {
	    m_cntAddToEmailFolder = 0;
	    m_cntAddedToEmailFolder = 0;

	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();

	    var itemCreateInfo = new SP.ListItemCreationInformation();
	    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
	    itemCreateInfo.set_leafName(requestNumber);
	    const oNewEmailFolder = list.addItem(itemCreateInfo);
	    oNewEmailFolder.set_item("Title", requestNumber);
	    oNewEmailFolder.update();

	    const currentUser = web.get_currentUser();
	    const ownerGroup = web.get_associatedOwnerGroup();
	    const memberGroup = web.get_associatedMemberGroup();
	    const visitorGroup = web.get_associatedVisitorGroup();

	    oNewEmailFolder.resetRoleInheritance();
	    oNewEmailFolder.breakRoleInheritance(false, false);

	    var roleDefBindingCollAdmin =
	      SP.RoleDefinitionBindingCollection.newObject(currCtx);
	    roleDefBindingCollAdmin.add(
	      web.get_roleDefinitions().getByType(SP.RoleType.administrator)
	    );

	    var roleDefBindingCollContribute =
	      SP.RoleDefinitionBindingCollection.newObject(currCtx);
	    roleDefBindingCollContribute.add(
	      web.get_roleDefinitions().getByType(SP.RoleType.contributor)
	    );

	    var roleDefBindingCollRestrictedRead =
	      SP.RoleDefinitionBindingCollection.newObject(currCtx);
	    roleDefBindingCollRestrictedRead.add(
	      web.get_roleDefinitions().getByName("Restricted Read")
	    );

	    var roleDefBindingCollRestrictedContribute =
	      SP.RoleDefinitionBindingCollection.newObject(currCtx);
	    roleDefBindingCollRestrictedContribute.add(
	      web.get_roleDefinitions().getByName("Restricted Contribute")
	    );

	    //add associated site groups
	    oNewEmailFolder
	      .get_roleAssignments()
	      .add(ownerGroup, roleDefBindingCollAdmin);
	    oNewEmailFolder
	      .get_roleAssignments()
	      .add(memberGroup, roleDefBindingCollContribute);
	    oNewEmailFolder
	      .get_roleAssignments()
	      .add(visitorGroup, roleDefBindingCollRestrictedRead);

	    var spGroupQA = m_fnGetSPSiteGroup(m_groupNameQA);
	    if (spGroupQA != null)
	      oNewEmailFolder
	        .get_roleAssignments()
	        .add(spGroupQA, roleDefBindingCollRestrictedContribute);

	    oNewEmailFolder
	      .get_roleAssignments()
	      .getByPrincipal(currentUser)
	      .deleteObject();

	    //Need to break up adding AOs because it exceeds the resource limit (request uses too many resources)
	    function onUpdatePermsSucceeded() {
	      if (this.requestItem) {
	        //this will be null when sending from permissions page
	        //add action offices
	        var arrActionOffice = this.requestItem.get_item("ActionOffice");
	        if (arrActionOffice == null || arrActionOffice.length == 0) {
	          if (this.OnComplete) this.OnComplete(true);
	          return;
	        }

	        for (var x = 0; x < arrActionOffice.length; x++) {
	          var actionOfficeName = arrActionOffice[x].get_lookupValue();

	          var actionOfficeGroupName = m_fnGetAOSPGroupName(actionOfficeName);
	          var actionOfficeGroup = m_fnGetSPSiteGroup(actionOfficeGroupName);

	          if (actionOfficeGroup != null) {
	            m_cntAddToEmailFolder++;

	            var currCtx2 = new SP.ClientContext.get_current();
	            var web2 = currCtx2.get_web();

	            var roleDefBindingCollRestrictedContribute =
	              SP.RoleDefinitionBindingCollection.newObject(currCtx2);
	            roleDefBindingCollRestrictedContribute.add(
	              web2.get_roleDefinitions().getByName("Restricted Contribute")
	            );

	            this.oNewEmailFolder
	              .get_roleAssignments()
	              .add(actionOfficeGroup, roleDefBindingCollRestrictedContribute);

	            function onUpdateAOPermsSucceeded() {
	              m_cntAddedToEmailFolder++;
	              if (m_cntAddedToEmailFolder == m_cntAddToEmailFolder) {
	                if (this.OnComplete) this.OnComplete(true);
	              }
	            }
	            function onUpdateAOPermsFailed(sender, args) {
	              m_cntAddedToEmailFolder++;
	              if (m_cntAddedToEmailFolder == m_cntAddToEmailFolder) {
	                if (this.OnComplete) this.OnComplete(true);
	              }
	            }
	            var data = { OnComplete: this.OnComplete };
	            currCtx2.executeQueryAsync(
	              Function.createDelegate(data, onUpdateAOPermsSucceeded),
	              Function.createDelegate(data, onUpdateAOPermsFailed)
	            );
	          }
	        }
	      } else {
	        if (this.OnComplete) this.OnComplete(true);
	      }
	    }

	    function onUpdatePermsFailed(sender, args) {
	      statusId = SP.UI.Status.addStatus(
	        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
	      );
	    }

	    var data = {
	      /*item: oListItem, */ requestItem: requestItem,
	      oNewEmailFolder: oNewEmailFolder,
	      OnComplete: OnComplete,
	    };
	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onUpdatePermsSucceeded),
	      Function.createDelegate(data, onUpdatePermsFailed)
	    );
	  }

	  function m_fnSortResponseTitleNoCase(a, b) {
	    var aTitle = a;
	    var bTitle = b;
	    let newA, newB;

	    if (aTitle == null) aTitle = "";
	    if (bTitle == null) bTitle = "";

	    var aIndex = aTitle.lastIndexOf("-");
	    if (aIndex >= 0) {
	      var subA = aTitle.substring(0, aIndex + 1);
	      var lastA = aTitle.replace(subA, "");
	      var intA = parseInt(lastA, 10);
	      var newIntA = m_fnPadDigits(intA, 5);
	      newA = subA + newIntA;
	    } else newA = aTitle;

	    var bIndex = bTitle.lastIndexOf("-");
	    if (bIndex >= 0) {
	      var subB = bTitle.substring(0, bIndex + 1);
	      var lastB = bTitle.replace(subB, "");
	      var intB = parseInt(lastB, 10);
	      var newIntB = m_fnPadDigits(intB, 5);
	      newB = subB + newIntB;
	    } else newB = bTitle;

	    return newA.toLowerCase().localeCompare(newB.toLowerCase());
	  }

	  function m_fnSortResponseObjectNoCase(a, b) {
	    var aTitle = a.title;
	    var bTitle = b.title;
	    var newA;
	    var newB;
	    if (aTitle == null) aTitle = "";
	    if (bTitle == null) bTitle = "";

	    var aIndex = aTitle.lastIndexOf("-");
	    if (aIndex >= 0) {
	      var subA = aTitle.substring(0, aIndex + 1);
	      var lastA = aTitle.replace(subA, "");
	      var intA = parseInt(lastA, 10);
	      var newIntA = m_fnPadDigits(intA, 5);
	      newA = subA + newIntA;
	    } else newA = aTitle;

	    var bIndex = bTitle.lastIndexOf("-");
	    if (bIndex >= 0) {
	      var subB = bTitle.substring(0, bIndex + 1);
	      var lastB = bTitle.replace(subB, "");
	      var intB = parseInt(lastB, 10);
	      var newIntB = m_fnPadDigits(intB, 5);
	      newB = subB + newIntB;
	    } else newB = bTitle;

	    return newA.toLowerCase().localeCompare(newB.toLowerCase());
	  }

	  function m_fnSortNoCase(a, b) {
	    return a.toLowerCase().localeCompare(b.toLowerCase());
	  }

	  function m_fnSortDate(a, b) {
	    if (a == "") return -1;
	    if (b == "") return 1;
	    return new Date(a).getTime() - new Date(b).getTime();
	  }

	  //Adds the values in the arr array to the drop down with the specified id
	  function m_fnAddOptions(arr, ddlID, dateSort, responseSort) {
	    if (arr == null) return;
	    if (responseSort) arr.sort(m_fnSortResponseTitleNoCase);
	    else if (!dateSort) arr.sort(m_fnSortNoCase);
	    else arr.sort(m_fnSortDate);

	    var rOptions = new Array(),
	      j = -1;
	    rOptions[++j] = "<option value=''>-Select-</option>";

	    var arrLength = arr.length;

	    /*	var fragment = document.createDocumentFragment();
				var choice = document.createElement('option');
				choice.value = "";
				choice.innerHTML = "-Select-";
				fragment.appendChild(choice);
			*/
	    for (var x = 0; x < arrLength; x++) {
	      var option = $.trim(arr[x]);

	      rOptions[++j] = "<option value='" + option + "'>" + option + "</option>";

	      /*	
				var choice = document.createElement('option');
		        choice.value = option;
		        choice.innerHTML = option;
		        fragment.appendChild(choice);*/
	    }

	    //ddlID = ddlID.replace("#", "");
	    //document.getElementById(ddlID).innerHTML = rOptions.join('');

	    var thisDDL = $(ddlID);
	    thisDDL.empty().append(rOptions.join(""));
	    /*var thisDDL = $(ddlID);
			thisDDL.empty().html( fragment );*/
	  }

	  function m_fnExistsInArr(arr, val) {
	    if (arr == null) return false;

	    var arrLength = arr.length;
	    for (var x = 0; x < arrLength; x++) {
	      if (arr[x] == val) return true;
	    }
	    return false;
	  }

	  function m_fnGetTrueFalseIcon(val) {
	    if (val == true)
	      return "<span class='ui-icon ui-icon-check'>" + val + "</span>";
	    else return "<span class='ui-icon ui-icon-close'>" + val + "</span>";
	  }

	  function m_fnGetFriendlyDisplayName(oListItem, fieldName) {
	    var user = oListItem.get_item(fieldName);
	    if (user == null) return "";
	    else return user.get_lookupValue();
	  }

	  function m_fnPadDigits(n, totalDigits) {
	    n = n.toString();
	    var pd = "";
	    if (totalDigits > n.length) {
	      for (let i = 0; i < totalDigits - n.length; i++) {
	        pd += "0";
	      }
	    }
	    return pd + n.toString();
	  }

	  function m_fnPreciseRound(num, decimals) {
	    var sign = num >= 0 ? 1 : -1;
	    return (
	      Math.round(num * Math.pow(10, decimals) + sign * 0.001) /
	      Math.pow(10, decimals)
	    ).toFixed(decimals);
	  }

	  function m_fnGetFriendlyFileSize(fileSize) {
	    if (fileSize == null || fileSize == "") return "";

	    if (fileSize > 1048576) {
	      fileSize = m_fnPreciseRound(fileSize / 1048576, 2) + " MB";
	    } else if (fileSize > 1024) {
	      fileSize = m_fnPreciseRound(fileSize / 1024, 2) + " KB";
	    } else {
	      fileSize += " B";
	    }
	    return fileSize;
	  }

	  function m_fnISODateString(d) {
	    function pad(n) {
	      return n < 10 ? "0" + n : n;
	    }

	    return (
	      d.getUTCFullYear() +
	      "-" +
	      pad(d.getUTCMonth() + 1) +
	      "-" +
	      pad(d.getUTCDate()) +
	      "T" +
	      pad(d.getUTCHours()) +
	      ":" +
	      pad(d.getUTCMinutes()) +
	      ":" +
	      pad(d.getUTCSeconds()) +
	      "Z"
	    );
	  }

	  function m_fnBindHandlerResponseDoc() {
	    $(".requestInfo-response-doc img").click(function (event) {
	      event.preventDefault();
	      var curIcon = $(this).attr("src");
	      if (curIcon == "/_layouts/images/minus.gif")
	        $(this).attr("src", "/_layouts/images/plus.gif");
	      else $(this).attr("src", "/_layouts/images/minus.gif");

	      //$(this).nextUntil('tr.Grouping').slideToggle(200);
	      $(this)
	        .parent()
	        .parent()
	        .nextUntil("tr.requestInfo-response-doc")
	        .each(function () {
	          $(this).toggleClass("collapsed");
	        });
	    });
	  }

	  /************
		Notice - for some reason, when the list item opens in a dialog or not in the dialog, it renders differently causing the values to get back data differently
		********/
	  /*
		function m_fnGetLookupFieldText( fieldName )
		{
			var field = $( "select[title='" + fieldName  + "']" );
			
			if( field == null || field.html() == null ) //more than 20 items in the lookup
			{
				field = $( "input[title='" + fieldName  + "']" );
				return field.val();
			}
			else return $("select[title='" + fieldName  + "'] option:selected").text();
		}

		*/

	  function m_fnGetLookupFormField(fieldTitle) {
	    if ($("select[title='" + fieldTitle + "']").html() !== null) {
	      return $("select[title='" + fieldTitle + "']");
	    } else {
	      return $("input[title='" + fieldTitle + "']");
	    }
	  }

	  function m_fnGetLookupDisplayText(fieldTitle) {
	    //Set default value for lookups with less that 20 items
	    if ($("select[title='" + fieldTitle + "']").html() !== null) {
	      return $("select[title='" + fieldTitle + "'] option:selected").text();
	    } else {
	      return $("input[title='" + fieldTitle + "']").val();
	    }
	  }

	  function m_fnSetLookupFromFieldNameByText(fieldName, text) {
	    try {
	      if (text == undefined) return;
	      var theSelect = m_fnGetTagFromIdentifierAndTitle("select", "", fieldName);

	      if (theSelect == null) {
	        var theInput = m_fnGetTagFromIdentifierAndTitle("input", "", fieldName);
	        //builtin
	        ShowDropdown(theInput.id);
	        var opt = document.getElementById(theInput.opt);
	        m_fnSetSelectedOptionByText(opt, text);
	        //builtin
	        OptLoseFocus(opt);
	      } else {
	        m_fnSetSelectedOptionByText(theSelect, text);
	      }
	    } catch (ex) {}
	  }

	  function m_fnSetSelectedOptionByText(select, text) {
	    var opts = select.options;
	    var optLength = opts.length;
	    if (select == null) return;

	    for (var i = 0; i < optLength; i++) {
	      if (opts[i].text == text) {
	        select.selectedIndex = i;
	        return true;
	      }
	    }
	    return false;
	  }

	  function m_fnGetTagFromIdentifierAndTitle(tagName, identifier, title) {
	    var tags = document.getElementsByTagName(tagName);
	    for (var i = 0; i < tags.length; i++) {
	      tags[i].id;
	      if (
	        tags[i].title == title &&
	        (identifier == "")
	      ) {
	        return tags[i];
	      }
	    }
	    return null;
	  }

	  function m_fnViewUserManuals(docType) {
	    var options = SP.UI.$create_DialogOptions();
	    options.title = "User Manual";
	    options.height = 250;
	    //options.dialogReturnValueCallback = OnCallbackForm;
	    if (docType != null)
	      options.url =
	        m_fnGetSiteUrl() +
	        "/SitePages/AuditUserManuals.aspx?FilterField1=DocType&FilterValue1=" +
	        docType;
	    else options.url = m_fnGetSiteUrl() + "/SitePages/AuditUserManuals.aspx";

	    SP.UI.ModalDialog.showModalDialog(options);
	  }

	  function m_fnPrintPage(pageTitle, divTbl) {
	    var curDate = new Date();
	    var siteUrl = commonUtilities.publicMembers.GetSiteUrl();
	    var cssLink1 =
	      siteUrl +
	      "/siteassets/css/tablesorter/style.css?v=" +
	      curDate.format("MM_dd_yyyy");
	    var cssLink2 =
	      siteUrl +
	      "/siteAssets/css/audit_styles.css?v=" +
	      curDate.format("MM_dd_yyyy");

	    var divOutput = $(divTbl).html();

	    //remove hyperlinks pointing to the job codes
	    var updatedDivOutput = $("<div>").append(divOutput);
	    updatedDivOutput.find(".sr-response-title a").each(function () {
	      $(this).removeAttr("onclick");
	      $(this).removeAttr("href");
	    });

	    divOutput = updatedDivOutput.html();

	    var printDateString = curDate.format("MM/dd/yyyy hh:mm tt");
	    printDateString =
	      "<div style='padding-bottom:10px;'>" + printDateString + "</div>";
	    divOutput = printDateString + divOutput;

	    var cssFile1 = $("<div></div>");
	    var cssFile2 = $("<div></div>");

	    var def1 = $.Deferred();
	    var def2 = $.Deferred();

	    var cssFileText = "";
	    cssFile1.load(cssLink1, function () {
	      cssFileText += "<style>" + cssFile1.html() + "</style>";
	      def1.resolve();
	    });
	    cssFile2.load(cssLink2, function () {
	      cssFileText += "<style>" + cssFile2.html() + "</style>";
	      def2.resolve();
	    });

	    //gets called asynchronously after the css files have been loaded
	    $.when(def1, def2).done(function () {
	      var html =
	        "<HTML>\n" +
	        "<HEAD>\n\n" +
	        "<Title>" +
	        pageTitle +
	        "</Title>\n" +
	        cssFileText +
	        "\n" +
	        "<style>" +
	        ".hideOnPrint, .rowFilters {display:none}" +
	        "</style>\n" +
	        "</HEAD>\n" +
	        "<BODY>\n" +
	        divOutput +
	        "\n" +
	        "</BODY>\n" +
	        "</HTML>";

	      var printWP = window.open("", "printWebPart");
	      printWP.document.open();
	      //insert content
	      printWP.document.write(html);

	      printWP.document.close();
	      //open print dialog
	      printWP.print();
	    });
	  }

	  //make sure iframe with id csvexprframe is added to page up top
	  //http://stackoverflow.com/questions/18185660/javascript-jquery-exporting-data-in-csv-not-working-in-ie
	  function m_fnExportToCsv(fileName, tableName, removeHeader) {
	    var data = m_fnGetCellValues(tableName);

	    if (removeHeader == true) data = data.slice(1);

	    var csv = m_fnConvertToCsv(data);
	    //	console.log( csv );
	    if (navigator.userAgent.search("Trident") >= 0) {
	      window.CsvExpFrame.document.open("text/html", "replace");
	      //		window.CsvExpFrame.document.open("application/csv", "replace");
	      //		window.CsvExpFrame.document.charset = "utf-8";
	      //		window.CsvExpFrame.document.open("application/ms-excel", "replace");
	      window.CsvExpFrame.document.write(csv);
	      window.CsvExpFrame.document.close();
	      window.CsvExpFrame.focus();
	      window.CsvExpFrame.document.execCommand(
	        "SaveAs",
	        true,
	        fileName + ".csv"
	      );
	    } else {
	      var uri = "data:text/csv;charset=utf-8," + escape(csv);
	      var downloadLink = document.createElement("a");
	      downloadLink.href = uri;
	      downloadLink.download = fileName + ".csv";
	      document.body.appendChild(downloadLink);
	      downloadLink.click();
	      document.body.removeChild(downloadLink);
	    }
	  }

	  function m_fnGetCellValues(tableName) {
	    var table = document.getElementById(tableName);

	    //remove headers and footers
	    if (table.innerHTML.indexOf("rowFilters") >= 0) {
	      var deets = $("<div>").append(table.outerHTML);
	      deets.find(".rowFilters").each(function () {
	        $(this).remove();
	      });
	      table = deets.find("table")[0];
	    }
	    if (table.innerHTML.indexOf("footer") >= 0) {
	      var deets = $("<div>").append(table.outerHTML);
	      deets.find(".footer").each(function () {
	        $(this).remove();
	      });
	      table = deets.find("table")[0];
	    }

	    var tableArray = [];
	    for (var r = 0, n = table.rows.length; r < n; r++) {
	      tableArray[r] = [];
	      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
	        var text =
	          table.rows[r].cells[c].textContent ||
	          table.rows[r].cells[c].innerText;
	        tableArray[r][c] = text.trim();
	      }
	    }
	    return tableArray;
	  }

	  function m_fnConvertToCsv(objArray) {
	    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
	    var str = "sep=,\r\n";
	    var line = "";
	    var index;
	    var value;
	    for (var i = 0; i < array.length; i++) {
	      line = "";
	      var array1 = array[i];
	      for (index in array1) {
	        if (array1.hasOwnProperty(index)) {
	          value = array1[index] + "";
	          line += '"' + value.replace(/"/g, '""') + '",';
	        }
	      }
	      line = line.slice(0, -1);
	      str += line + "\r\n";
	    }
	    return str;
	  }

	  function m_fnGetSiteUrl() {
	    if (m_siteUrl == "/") return "";
	    else return m_siteUrl;
	  }
	  var publicMembers = {
	    GetSiteUrl: m_fnGetSiteUrl,
	    GetListTitleRequests: function () {
	      return m_listTitleRequests;
	    },
	    GetListNameRequests: function () {
	      return m_listNameRequests;
	    },
	    GetListTitleRequestsInternal: function () {
	      return m_listTitleRequestsInternal;
	    },
	    GetListNameRequestsInternal: function () {
	      return m_listNameRequestsInternal;
	    },
	    GetListTitleResponses: function () {
	      return m_listTitleResponses;
	    },
	    GetListNameResponses: function () {
	      return m_listNameResponses;
	    },
	    GetLibTitleRequestDocs: function () {
	      return m_libTitleRequestDocs;
	    },
	    GetLibNameRequestDocs: function () {
	      return m_libNameRequestDocs;
	    },
	    GetLibTitleCoverSheets: function () {
	      return m_libTitleCoverSheet;
	    },
	    GetLibNameCoverSheets: function () {
	      return m_libNameCoverSheet;
	    },
	    GetLibTitleResponseDocs: function () {
	      return m_libTitleResponseDocs;
	    },
	    GetLibNameResponseDocs: function () {
	      return m_libNameResponseDocs;
	    },
	    GetLibTitleResponseDocsEA: function () {
	      return m_libTitleResponseDocsEA;
	    },
	    GetLibNameResponseDocsEA: function () {
	      return m_libNameResponseDocsEA;
	    },
	    GetListTitleActionOffices: function () {
	      return m_listTitleActionOffices;
	    },
	    GetListNameActionOffices: function () {
	      return m_listNameActionOffices;
	    },
	    GetListTitleEmailHistory: function () {
	      return m_listTitleEmailHistory;
	    },
	    GetListNameEmailHistory: function () {
	      return m_listNameEmailHistory;
	    },
	    GetListTitleBulkResponses: function () {
	      return m_listTitleBulkResponses;
	    },
	    GetListNameBulkResponses: function () {
	      return m_listNameBulkResponses;
	    },
	    GetListTitleBulkPermissions: function () {
	      return m_listTitleBulkPermissions;
	    },
	    GetListNameBulkPermissions: function () {
	      return m_listNameBulkPermissions;
	    },
	    GetGroupNameSpecialPerm1: function () {
	      return m_groupNameSpecialPermName1;
	    },
	    GetGroupNameSpecialPerm2: function () {
	      return m_groupNameSpecialPermName2;
	    },
	    GetGroupNameQA: function () {
	      return m_groupNameQA;
	    },
	    GetGroupNameEA: function () {
	      return m_groupNameEA;
	    },
	    Refresh: m_fnRefresh,
	    OnLoadDisplayTimeStamp: m_fnOnLoadDisplayTimeStamp,
	    OnLoadDisplayTabAndResponse: m_fnOnLoadDisplayTabAndResponse,
	    OnLoadFilterResponses: function (responseStatus1, responseStatus2) {
	      m_fnOnLoadFilterResponses(responseStatus1, responseStatus2);
	    },
	    SetResponseDocLibGUID: function (libGUID) {
	      m_libResponseDocsLibraryGUID = libGUID;
	    },
	    GetResponseDocLibGUID: function () {
	      return m_libResponseDocsLibraryGUID;
	    },
	    LoadSiteGroups: function (itemColl) {
	      m_fnLoadSiteGroups(itemColl);
	    },
	    GetSPSiteGroup: function (groupName) {
	      return m_fnGetSPSiteGroup(groupName);
	    },
	    LoadActionOffices: function (itemColl) {
	      m_fnLoadActionOffices(itemColl);
	    },
	    GetActionOffices: function () {
	      return m_arrAOs;
	    },
	    GetAOSPGroupName: function (groupName) {
	      return m_fnGetAOSPGroupName(groupName);
	    },
	    CheckSPItemHasGroupPermission: function (item, groupName, permissionLevel) {
	      return m_fnCheckSPItemHasGroupPermission(
	        item,
	        groupName,
	        permissionLevel
	      );
	    },
	    GoToResponse: function (responseTitle, isIA) {
	      m_fnGoToResponse(responseTitle, isIA);
	    },
	    GetResponseDocStyleTag: function (documentStatus) {
	      return m_fnGetResponseDocStyleTag(documentStatus);
	    },
	    GetResponseDocStyleTag2: function (documentStatus) {
	      return m_fnGetResponseDocStyleTag2(documentStatus);
	    },
	    CheckIfEmailFolderExists: function (items, requestNumber) {
	      return m_fnCheckIfEmailFolderExists(items, requestNumber);
	    },
	    CreateEmailFolder: function (list, requestNumber, requestItem, OnComplete) {
	      return m_fnCreateEmailFolder(
	        list,
	        requestNumber,
	        requestItem,
	        OnComplete
	      );
	    },
	    AddOptions: function (arr, ddlID, dateSort, responseSort) {
	      m_fnAddOptions(arr, ddlID, dateSort, responseSort);
	    },
	    ExistsInArr: function (arr, val) {
	      return m_fnExistsInArr(arr, val);
	    },
	    GetTrueFalseIcon: function (val) {
	      return m_fnGetTrueFalseIcon(val);
	    },
	    PadDigits: function (n, totalDigits) {
	      return m_fnPadDigits(n, totalDigits);
	    },
	    PreciseRound: function (num, decimals) {
	      return m_fnPreciseRound(num, decimals);
	    },
	    GetFriendlyFileSize: function (fileSize) {
	      return m_fnGetFriendlyFileSize(fileSize);
	    },
	    GetISODateString: function (d) {
	      return m_fnISODateString(d);
	    },
	    GetFriendlyDisplayName: function (oListItem, fieldName) {
	      return m_fnGetFriendlyDisplayName(oListItem, fieldName);
	    },
	    BindHandlerResponseDoc: m_fnBindHandlerResponseDoc,
	    PrintStatusReport: function (pageTitle, divTbl) {
	      m_fnPrintPage(pageTitle, divTbl);
	    },
	    ExportToCsv: function (fileName, tableName, removeHeader) {
	      m_fnExportToCsv(fileName, tableName, removeHeader);
	    },
	    ViewUserManuals: function (docType) {
	      m_fnViewUserManuals(docType);
	    },
	    //GetLookupFieldText: function( fieldName ){ return m_fnGetLookupFieldText( fieldName); },
	    GetLookupDisplayText: function (fieldName) {
	      return m_fnGetLookupDisplayText(fieldName);
	    },
	    GetLookupFormField: function (fieldName) {
	      return m_fnGetLookupFormField(fieldName);
	    },
	    SetLookupFromFieldNameByText: function (fieldName, text) {
	      return m_fnSetLookupFromFieldNameByText(fieldName, text);
	    },
	    SortResponseObjects: function (a, b) {
	      return m_fnSortResponseObjectNoCase(a, b);
	    },
	    SortResponseTitles: m_fnSortResponseTitleNoCase,
	  };

	  return publicMembers;
	}

	var aoDbTemplate = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool@latest/lib/fontawesome-6.5.1/css/fontawesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool@latest/lib/fontawesome-6.5.1/css/solid.min.css\">\r\n\r\n<iframe id=\"CsvExpFrame\" style=\"display: none\"></iframe>\r\n\r\n<div id=\"divCounter\" style=\"display: none\" title=\"used to auto refresh the page\">\r\n  600\r\n</div>\r\n\r\n<div class=\"audit\">\r\n  <!-- ko with: blockingTasks -->\r\n  <div class=\"tasks blocking dimmer\" data-bind=\"css: {'active': $data.length}\">\r\n    <span class=\"loader\"></span>\r\n    <ul class=\"\" data-bind=\"foreach: $data\">\r\n      <li data-bind=\"text: msg + '... ' + Status()\"></li>\r\n    </ul>\r\n  </div>\r\n  <!-- /ko -->\r\n\r\n  <!-- ko with: runningTasks -->\r\n  <div class=\"tasks running\" data-bind=\"if: $data.length\">\r\n    <ul class=\"\" data-bind=\"foreach: $data\">\r\n      <li data-bind=\"text: msg + '... ' + Status()\"></li>\r\n    </ul>\r\n  </div>\r\n  <!-- /ko -->\r\n  <div id=\"divLoading\" style=\"color: green; padding-bottom: 10px\">\r\n    Please Wait... Loading\r\n    <span data-bind=\"visible: arrResponses().length > 0 && debugMode, text: arrResponses().length\"></span>\r\n  </div>\r\n  <div id=\"divUsersGroups\" style=\"color: green; padding-bottom: 10px\"></div>\r\n  <div class=\"audit-body\" style=\"display: none\" data-bind=\"visible: loadedAt\">\r\n    <div class=\"reports-container\">\r\n      <div id=\"divRefresh\" class=\"quick-links\" style=\"display: none\">\r\n        <div>\r\n          <a title=\"Refresh this page\" href=\"javascript:void(0)\" data-bind=\"click: refresh\"><span class=\"fa-solid fa-arrows-rotate\"></span>Refresh</a>\r\n        </div>\r\n        <div>\r\n          <a title=\"View User Manual\" href=\"javascript:void(0)\" onclick=\"Audit.Common.Utilities.ViewUserManuals('AO User Manual')\"><span class=\"fa-solid fa-question\"></span>User Manual</a>\r\n        </div>\r\n        <div>\r\n          <a title=\"Help\" href=\"mailto:cgfsauditrequests@state.gov\"><span class=\"fa-regular fa-envelope\"></span>Request Help</a>\r\n        </div>\r\n      </div>\r\n      <div id=\"\" style=\"margin-top: 20px\">\r\n        <!-- ko using: tabs -->\r\n        <ul class=\"ui-tabs-nav\" data-bind=\"foreach: tabOpts\">\r\n          <li data-bind=\"text: linkText, \r\n            click: $parent.clickTabLink, \r\n            css: {active: $parent.isSelected($data)}\"></li>\r\n        </ul>\r\n        <!-- ko foreach: tabOpts -->\r\n        <div data-bind=\"template: {\r\n              name: template.id,\r\n              data: template.data\r\n            },\r\n            visible: $parent.isSelected($data)\"></div>\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<script type=\"text/html\" id=\"responseStatusReportTemplate\">\r\n  <div id=\"tabs-0\">\r\n    <div\r\n      id=\"lblStatusReportResponsesMsg\"\r\n      style=\"padding-top: 5px; color: green\"\r\n    >\r\n      <span\r\n        data-bind=\"css: (cntPendingReview() > 0 ? \r\n        'fa-solid fa-triangle-exclamation' \r\n        : 'fa-solid fa-check')\"\r\n      ></span\r\n      >There are <span data-bind=\"text: cntPendingReview\"></span> Responses\r\n      pending your review\r\n    </div>\r\n    <div\r\n      id=\"divButtons\"\r\n      style=\"padding-top: 3px\"\r\n      data-bind=\"visible: arrResponses().length > 0\"\r\n    >\r\n      <a\r\n        id=\"btnPrint1\"\r\n        title=\"Click here to Print\"\r\n        href=\"javascript:void(0)\"\r\n        class=\"hideOnPrint btn btn-link\"\r\n        title=\"Print\"\r\n        ><span class=\"fa-solid fa-print\"></span\r\n      ></a>\r\n      <a\r\n        class=\"export1 hideOnPrint btn btn-link\"\r\n        title=\"Export to CSV\"\r\n        href=\"#\"\r\n        title=\"Export to CSV\"\r\n        ><span class=\"fa-solid fa-file-csv\"></span\r\n      ></a>\r\n      <a\r\n        id=\"btnViewAll\"\r\n        title=\"View All\"\r\n        href=\"javascript:void(0)\"\r\n        title=\"View All Responses\"\r\n        class=\"btn btn-link\"\r\n        data-bind=\"visible: arrFilteredResponsesCount() < arrResponses().length && doSort, click: ClearFiltersResponseTab\"\r\n        ><span class=\"fa-solid fa-magnifying-glass\"></span\r\n      ></a>\r\n    </div>\r\n\r\n    <div id=\"divStatusReportRespones\">\r\n      <table\r\n        id=\"tblStatusReportResponses\"\r\n        class=\"tablesorter report\"\r\n        data-bind=\"visible: arrResponses().length > 0\"\r\n      >\r\n        <thead>\r\n          <tr\r\n            valign=\"top\"\r\n            class=\"rowFilters\"\r\n            data-bind=\"visible: arrResponses().length > 0\"\r\n          >\r\n            <th class=\"sorter-false filter\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseName\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabResponseTitle, value: filterResponseTabResponseName, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\"></th>\r\n            <th class=\"sorter-false filter\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseRequestInternalDueDate\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabRequestInternalDueDate, value: filterResponseTabRequestIntDueDate, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false filter\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseStatus\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabResponseStatus, value: filterResponseTabResponseStatus, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\"></th>\r\n            <th class=\"sorter-false\"></th>\r\n          </tr>\r\n          <tr valign=\"top\">\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Response Name</th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">Response Subject</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Due Date</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Response Status</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\"># of Documents</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Modified</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id=\"fbody\">\r\n          <!-- ko foreach: arrResponses -->\r\n          <tr\r\n            class=\"sr-response-item\"\r\n            data-bind=\"css: {'highlighted': highlight}\"\r\n          >\r\n            <td class=\"sr-response-title\">\r\n              <a\r\n                href=\"javascript:void(0);\"\r\n                title=\"Go to Response Details\"\r\n                data-bind=\"text: title,\r\n                  click: () => $root.ClickGoToResponse(title)\"\r\n              >\r\n              </a>\r\n            </td>\r\n            <td\r\n              class=\"sr-response-requestSubject\"\r\n              data-bind=\"text: requestSubject\"\r\n            ></td>\r\n            <td\r\n              class=\"sr-response-internalDueDate\"\r\n              data-bind=\"text: internalDueDate\"\r\n            ></td>\r\n            <td class=\"sr-response-status\" data-bind=\"text: status\"></td>\r\n            <td class=\"sr-response-docCount\" data-bind=\"text: docCount\"></td>\r\n            <td class=\"sr-response-modified\" data-bind=\"text: modified\"></td>\r\n          </tr>\r\n          <!-- /ko -->\r\n        </tbody>\r\n        <tfoot class=\"footer\">\r\n          <tr>\r\n            <th colspan=\"6\">\r\n              Displaying\r\n              <span\r\n                id=\"spanResponsesDisplayedTotal\"\r\n                style=\"color: green\"\r\n                data-bind=\"text: arrFilteredResponsesCount()\"\r\n                >0</span\r\n              >\r\n              out of\r\n              <span\r\n                id=\"spanResponsesTotal\"\r\n                style=\"color: green\"\r\n                data-bind=\"text: arrResponses().length\"\r\n                >0</span\r\n              >\r\n              Responses\r\n            </th>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</script>\r\n\r\n<script type=\"text/html\" id=\"responseDetailTemplate\">\r\n  <div id=\"tabs-1\">\r\n    <div style=\"padding-bottom: 15px\">\r\n      <table>\r\n        <tr>\r\n          <td><span>Responses Pending Action:</span></td>\r\n          <td>\r\n            <select\r\n              id=\"ddlResponsesOpen\"\r\n              data-bind=\"options: $root.ddOptionsResponseInfoTabResponseNameOpen2, value: filterResponseInfoTabResponseNameOpen2, optionsCaption: '-Select-'\"\r\n            ></select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><span>Other Responses:</span></td>\r\n          <td>\r\n            <select\r\n              id=\"ddlResponsesProcessed\"\r\n              data-bind=\"options: $root.ddOptionsResponseInfoTabResponseNameProcessed2, value: filterResponseInfoTabResponseNameProcessed2, optionsCaption: '-Select-'\"\r\n            ></select>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"response-detail-view\">\r\n      <!-- ko with: currentResponse -->\r\n      <div\r\n        id=\"divResponseInfo\"\r\n        class=\"audit-form response-info-form\"\r\n        data-bind=\"\"\r\n      >\r\n        <div class=\"form-header\">\r\n          <h3 class=\"uppercase form-title\">\r\n            AUDIT RESPONSE DETAILS\r\n            <div class=\"fw-semibold\" data-bind=\"text: title\"></div>\r\n          </h3>\r\n          <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-link form-title\"\r\n          data-bind=\"click: $parent.refreshRequest\"\r\n        >\r\n          <i title=\"Refresh Request\" class=\"fa-solid fa-arrows-rotate\"></i>\r\n        </button> -->\r\n        </div>\r\n\r\n        <div class=\"form-row uppercase\">\r\n          <dl>\r\n            <dt>Subject</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoSubject\"\r\n                data-bind=\"text: request.subject\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Due Date</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoInternalDueDate\"\r\n                data-bind=\"text: request.internalDueDate\"\r\n              ></span>\r\n            </dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Response Status</dt>\r\n            <dd>\r\n              <span\r\n                id=\"responseInfoStatus\"\r\n                data-bind=\"style: { color:  resStatus == '7-Closed' ? 'red' : 'green' }\"\r\n              >\r\n                <span data-bind=\"text: resStatus\"></span\r\n                ><span data-bind=\"visible: resStatus == '7-Closed'\">\r\n                  on <span data-bind=\"text: closedDate \"></span> by\r\n                  <span data-bind=\"text: closedBy\"></span>\r\n                </span>\r\n              </span>\r\n            </dd>\r\n            <dt>Action Office</dt>\r\n            <dd>\r\n              <span id=\"responseInfoAO\" data-bind=\"text: actionOffice\"></span>\r\n              <span data-bind=\"visible: poc\" style=\"color: green\">POC: </span\r\n              ><span data-bind=\"text: poc\" style=\"color: green\"></span>\r\n            </dd>\r\n            <dt>Related Audit</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoRelatedAudit\"\r\n                data-bind=\"text: request.relatedAudit\"\r\n              ></span>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n        <div class=\"form-row uppercase\">\r\n          <dl>\r\n            <dt>Action Items</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoActionItems\"\r\n                data-bind=\"html: request.actionItems\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Comments</dt>\r\n            <dd>\r\n              <span id=\"responseInfoComments\" data-bind=\"html: comments\"></span>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n      <!-- /ko -->\r\n      <div>\r\n        <div\r\n          class=\"divReturned\"\r\n          data-bind=\"if: currentResponse && showReturned\"\r\n        >\r\n          <fieldset class=\"danger bg-danger bg-flash\" style=\"border-color: red\">\r\n            <legend class=\"danger\">\r\n              <span class=\"fa-solid fa-triangle-exclamation\"></span>Response\r\n              Return Reason\r\n            </legend>\r\n            <div data-bind=\"text: currentResponse().returnReason\"></div>\r\n          </fieldset>\r\n        </div>\r\n        <div id=\"divCoverSheets\" data-bind=\"visible: currentResponse\">\r\n          <fieldset>\r\n            <legend>Cover Sheets/Supplemental Documents</legend>\r\n\r\n            <div\r\n              id=\"divEmptyCoversheetsMsg\"\r\n              style=\"border: 0px !important; font-style: italic\"\r\n              data-bind=\"visible: arrCoverSheets().length <= 0\"\r\n            >\r\n              There are 0 cover sheets or supplemental documents\r\n            </div>\r\n            <table\r\n              id=\"tblCoverSheets\"\r\n              class=\"tablesorter report\"\r\n              data-bind=\"visible: arrCoverSheets().length > 0\"\r\n            >\r\n              <thead>\r\n                <tr valign=\"top\">\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody data-bind=\"foreach: arrCoverSheets\">\r\n                <tr class=\"coversheet-item\">\r\n                  <td class=\"coversheet-title\" title=\"Click to Download\">\r\n                    <a\r\n                      data-bind=\"attr: { href: 'javascript:void(0)', onclick: link}\"\r\n                      ><span data-bind=\"text: title\"></span\r\n                    ></a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr valign=\"top\">\r\n                  <th nowrap=\"nowrap\">\r\n                    Total:\r\n                    <span\r\n                      id=\"tblCoverSheetsTotal\"\r\n                      data-bind=\"text: arrCoverSheets().length\"\r\n                      >0</span\r\n                    >\r\n                  </th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </fieldset>\r\n        </div>\r\n\r\n        <div\r\n          class=\"divSubmit\"\r\n          data-bind=\"visible: currentResponse && showSubmit\"\r\n        >\r\n          <fieldset style=\"border-color: GreenYellow\">\r\n            <legend style=\"font-weight: bold; font-size: 11pt\">\r\n              SUBMIT RESPONSE\r\n            </legend>\r\n            <div style=\"padding-top: 15px; padding-bottom: 15px\">\r\n              <span class=\"fa-solid fa-check\"></span\r\n              ><a\r\n                class=\"btnSubmitPackage\"\r\n                href=\"javascript:void(0)\"\r\n                title=\"Click to Submit the Response Package\"\r\n                data-bind=\"click: ClickSubmitResponse\"\r\n                >Submit this Response Package</a\r\n              >\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n\r\n        <div id=\"divResponseDocs\" data-bind=\"visible: currentResponse\">\r\n          <fieldset>\r\n            <legend>Response Documents</legend>\r\n\r\n            <table\r\n              id=\"tblResponseDocs\"\r\n              class=\"tablesorter report\"\r\n              data-bind=\"visible: cntResponseDocs() > 0\"\r\n            >\r\n              <thead>\r\n                <tr valign=\"top\">\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Type</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Name</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Title</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Receipt Date</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">File Size</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Modified</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Modified By</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody data-bind=\"with: arrResponseDocs\">\r\n                <tr class=\"requestInfo-response-doc\">\r\n                  <td colspan=\"10\">\r\n                    <img\r\n                      style=\"background-color: transparent\"\r\n                      src=\"/_layouts/images/minus.gif\"\r\n                      title=\"Expand/Collapse\"\r\n                      data-bind=\"toggleClick: $data, toggleClass: 'collapsed', containerType: 'doc', classContainer: '.requestInfo-response-doc'\"\r\n                    /><span data-bind=\"text: responseTitle\"></span>\r\n                  </td>\r\n                </tr>\r\n\r\n                <!-- ko foreach: responseDocs-->\r\n\r\n                <tr\r\n                  class=\"requestInfo-response-doc-item\"\r\n                  data-bind=\"style: styleTag\"\r\n                >\r\n                  <td>\r\n                    <img\r\n                      data-bind=\"attr:{ src: $parent.siteUrl + '/_layouts/images/' + docIcon}\"\r\n                    />\r\n                  </td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-title\"\r\n                    title=\"Click to Download\"\r\n                  >\r\n                    <a\r\n                      data-bind=\"downloadLink: '../_layouts/download.aspx?SourceUrl=:folder/:fileName'\"\r\n                      ><span data-bind=\"text: fileName\"></span\r\n                    ></a>\r\n                    <span\r\n                      style=\"float: right\"\r\n                      data-bind=\"visible: ($parent.responseStatus == '1-Open' || $parent.responseStatus == '3-Returned to Action Office') && documentStatus == 'Open'\"\r\n                    >\r\n                      <a\r\n                        title=\"Delete Response Document\"\r\n                        href=\"javascript:void(0)\"\r\n                        title=\"Delete Response Document\"\r\n                        class=\"btn btn-link\"\r\n                        data-bind=\"click:  $root.ClickMarkForDeletionResponseDoc\"\r\n                        ><span class=\"fa-solid fa-trash\"></span\r\n                      ></a>\r\n                    </span>\r\n                  </td>\r\n                  <td nowrap data-bind=\"text: title\"></td>\r\n                  <td nowrap data-bind=\"text: receiptDate\"></td>\r\n                  <td nowrap data-bind=\"text: fileSize\"></td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-modified\"\r\n                    data-bind=\"text: modifiedDate\"\r\n                  ></td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-modifiedBy\"\r\n                    data-bind=\"text: modifiedBy\"\r\n                  ></td>\r\n                </tr>\r\n\r\n                <!-- /ko -->\r\n              </tbody>\r\n              <tfoot>\r\n                <tr valign=\"top\">\r\n                  <th colspan=\"7\" nowrap=\"nowrap\">\r\n                    Total:\r\n                    <span\r\n                      id=\"tblResponseDocsTotal\"\r\n                      data-bind=\"text: cntResponseDocs\"\r\n                      >0</span\r\n                    >\r\n                  </th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n            <div class=\"divUpload\" data-bind=\"visible: showUpload()\">\r\n              <label class=\"file-upload-field\">\r\n                Upload Response Documents:\r\n                <div class=\"dropzone\" data-bind=\"\">Drop Files Here</div>\r\n                <input\r\n                  class=\"file-upload\"\r\n                  type=\"file\"\r\n                  multiple\r\n                  data-bind=\"files: responseDocFiles\"\r\n                />\r\n              </label>\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</script>\r\n\r\n<div id=\"divTest\"></div>\r\n<!-- <div id=\"__REQUESTDIGEST\" style=\"display: none\"></div> -->\r\n";

	// const urlParam = "Tab";

	class TabsModule {
	  constructor(tabOpts, urlParam = "Tab") {
	    this.urlParam = urlParam;
	    knockoutLatestExports.utils.arrayPushAll(this.tabOpts, tabOpts);
	    this.selectedTab.subscribe(this.tabChangeHandler);
	    window.addEventListener("popstate", this.popStateHandler);
	  }

	  tabOpts = knockoutLatestExports.observableArray();
	  selectedTab = knockoutLatestExports.observable();

	  isSelected = (tab) => {
	    return tab.id == this.selectedTab()?.id;
	  };

	  clickTabLink = (tab) => {
	    this.selectedTab(tab);
	    console.log("selected: " + tab.id);
	  };

	  selectTab = (tab) => this.selectById(tab.id);

	  selectById = (tabId) => {
	    const tabById =
	      this.tabOpts().find((tab) => tab.id == tabId) ?? this.getDefaultTab();
	    this.selectedTab(tabById);
	  };

	  getDefaultTab = () => this.tabOpts()[0];

	  tabChangeHandler = (newTab) => {
	    if (newTab) setUrlParam(this.urlParam, newTab.id);
	    // window.history.pushState({ tab: { id: newTab.id } }, "", newTab.id);
	  };

	  popStateHandler = (event) => {
	    if (event.state) {
	      if (event.state[this.urlParam])
	        this.selectById(event.state[this.urlParam]);
	    }
	  };
	}

	class Tab {
	  constructor(id, linkText, template) {
	    this.id = id;
	    this.linkText = linkText;
	    this.template = template;
	  }
	}

	class Entity {
	  constructor(params) {
	    if (params?.ID) this.ID = params.ID;
	    if (params?.Title) this.Title = params.Title;
	  }

	  ObservableID = knockoutLatestExports.observable();
	  ObservableTitle = knockoutLatestExports.observable();

	  get id() {
	    return this.ObservableID();
	  }

	  set id(val) {
	    this.ObservableID(val);
	  }

	  get Title() {
	    return this.ObservableTitle();
	  }

	  set Title(val) {
	    this.ObservableTitle(val);
	  }
	}

	let ValidationError$1 = class ValidationError {
	  constructor(source, type, description) {
	    this.source = source;
	    this.type = type;
	    this.description = description;
	  }
	};

	class BaseField {
	  constructor({
	    displayName,
	    systemName,
	    instructions = null,
	    isRequired = false,
	    width,
	    classList = [],
	    Visible = knockoutLatestExports.pureComputed(() => true),
	  }) {
	    this.displayName = displayName;
	    this.systemName = systemName;
	    this.instructions = instructions;
	    this.isRequired = isRequired;
	    this.Visible = Visible;
	    this.width = width ? "col-md-" + width : "col-md-6";
	    this.classList = classList;

	    this.addFieldRequirement(isRequiredValidationRequirement(this));
	  }

	  Value = knockoutLatestExports.observable();

	  get = () => this.Value();
	  set = (val) => this.Value(val);
	  clear = () => {
	    if (knockoutLatestExports.isObservableArray(this.Value)) this.Value([]);
	    else this.Value(null);
	  };

	  toString = knockoutLatestExports.pureComputed(() => this.Value());

	  toJSON = () => this.Value();
	  fromJSON = (val) => this.Value(val);

	  validate = (showErrors = true) => {
	    this.ShowErrors(showErrors);
	    return this.Errors();
	  };

	  _fieldValidationRequirements = knockoutLatestExports.observableArray();

	  Errors = knockoutLatestExports.pureComputed(() => {
	    if (!this.Visible()) return [];
	    const errors = this._fieldValidationRequirements()
	      .filter((req) => req.requirement())
	      .map((req) => req.error);

	    return errors;
	  });

	  addFieldRequirement = (requirement) =>
	    this._fieldValidationRequirements.push(requirement);

	  IsValid = knockoutLatestExports.pureComputed(() => !this.Errors().length);

	  ShowErrors = knockoutLatestExports.observable(false);

	  ValidationClass = knockoutLatestExports.pureComputed(() => {
	    if (!this.ShowErrors()) return;
	    return this.Errors().length ? "is-invalid" : "is-valid";
	  });
	}

	function isRequiredValidationRequirement(field) {
	  return {
	    requirement: knockoutLatestExports.pureComputed(() => {
	      // Return true if field fails validation
	      const isRequired = knockoutLatestExports.unwrap(field.isRequired);
	      if (!isRequired) return false;

	      const value = knockoutLatestExports.unwrap(field.Value);
	      if (value?.constructor == Array) return !value.length;
	      return value === null || value === undefined;
	    }),
	    error: new ValidationError$1(
	      "text-field",
	      "required-field",
	      `${knockoutLatestExports.utils.unwrapObservable(field.displayName)} is required!`
	    ),
	  };
	}

	// Hint: use the es6-string-html VS Code module to make template literals easier to read
	const html$1 = String.raw;

	function registerFieldComponents(constructor) {
	  knockoutLatestExports.components.register(constructor.edit, {
	    template: constructor.editTemplate,
	    viewModel: constructor,
	  });

	  knockoutLatestExports.components.register(constructor.view, {
	    template: constructor.viewTemplate,
	    viewModel: constructor,
	  });
	}

	class BaseFieldModule {
	  constructor(params) {
	    Object.assign(this, params);
	  }

	  _id;
	  getUniqueId = () => {
	    if (!this._id) {
	      this._id = "field-" + Math.floor(Math.random() * 10000);
	    }
	    return this._id;
	  };

	  Errors = knockoutLatestExports.pureComputed(() => {
	    if (!this.ShowErrors()) return [];
	    if (!this.isRequired) return [];
	    return this.Value()
	      ? []
	      : [
	          new ValidationError(
	            "text-field",
	            "required-field",
	            this.displayName + ` is required!`
	          ),
	        ];
	  });

	  ShowErrors = knockoutLatestExports.observable(false);

	  ValidationClass = knockoutLatestExports.pureComputed(() => {
	    if (!this.ShowErrors()) return;
	    return this.Errors().length ? "is-invalid" : "is-valid";
	  });

	  static viewTemplate = html$1`
    <div class="fw-semibold" data-bind="text: displayName"></div>
    <div data-bind="text: toString()"></div>
  `;

	  static editTemplate = html$1`<div>Uh oh!</div>`;
	}

	const editTemplate$8 = html$1`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <div
    data-bind="component: {name: Value()?.components.edit, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
        <th>Actions</th>
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString"></td>
        <!-- /ko -->
        <td>
          <i
            title="remove item"
            class="fa-solid fa-trash pointer"
            data-bind="click: $parent.remove.bind(row)"
          ></i>
        </td>
      </tr>
      <!-- /ko -->
      <tr>
        <!-- ko foreach: NewItem()?.FormFields -->
        <td>
          <div
            data-bind="component: {name: components.edit, params: $data}"
          ></div>
        </td>
        <!-- /ko -->
        <td class="align-bottom">
          <button
            title="add and new"
            type="button"
            data-bind="click: submit"
            class="btn btn-success"
          >
            Add +
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`;

	const viewTemplate$3 = html$1`
  <h5>
    <span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </h5>
  <!-- ko ifnot: entityType -->
  <div class="alert alert-danger">Missing entity type</div>
  <!-- /ko -->
  <!-- ko if: entityType -->
  <!-- ko ifnot: multiple -->
  <!-- ko if: Value -->
  <div
    data-bind="component: {name: Value().components.view, params: {Entity: Value()}}"
  ></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko if: multiple -->
  <table class="table">
    <thead>
      <tr data-bind="">
        <!-- ko foreach: Cols -->
        <th data-bind="text: displayName"></th>
        <!-- /ko -->
      </tr>
    </thead>
    <tbody data-bind="">
      <!-- ko foreach: {data: Value, as: 'row'} -->
      <tr data-bind="">
        <!-- ko foreach: {data: row.FormFields, as: 'col'} -->
        <td data-bind="text: col.toString()"></td>
        <!-- /ko -->
      </tr>
      <!-- /ko -->
    </tbody>
  </table>
  <!-- /ko -->
  <!-- /ko -->
`;

	class BlobModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  static viewTemplate = viewTemplate$3;
	  static editTemplate = editTemplate$8;

	  static view = "blob-view";
	  static edit = "blob-edit";
	  static new = "blob-edit";
	}

	registerFieldComponents(BlobModule);

	const editTemplate$7 = html$1`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
      />
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
    </label>
  </div>
`;

	const viewTemplate$2 = html$1`
  <div class="form-check form-switch">
    <label class="form-check-label"
      ><span class="fw-semibold" data-bind="text: displayName"></span>
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        data-bind="checked: Value"
        disabled
      />
    </label>
  </div>
`;

	class CheckboxModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  static viewTemplate = viewTemplate$2;
	  static editTemplate = editTemplate$7;

	  static view = "checkbox-view";
	  static edit = "checkbox-edit";
	  static new = "checkbox-edit";
	}

	registerFieldComponents(CheckboxModule);

	const dateFieldTypes = {
	  date: "date",
	  datetime: "datetime-local",
	};

	const editTemplate$6 = html$1`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="value: inputBinding, class: ValidationClass, attr: {'type': type}"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;

	class DateModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  toInputDateString = () => this.Value().format("yyyy-MM-dd");

	  toInputDateTimeString = () => this.Value().format("yyyy-MM-ddThh:mm");

	  inputBinding = knockoutLatestExports.pureComputed({
	    read: () => {
	      if (!this.Value()) return null;
	      switch (this.type) {
	        case dateFieldTypes.date:
	          return this.toInputDateString();
	        case dateFieldTypes.datetime:
	          return this.toInputDateTimeString();
	        default:
	          return null;
	      }
	    },
	    write: (val) => {
	      if (!val) return;
	      //writes in format
	      if (this.type == dateFieldTypes.datetime) {
	        this.Value(new Date(val));
	        return;
	      }

	      // make sure we're using midnight local time
	      this.Value(new Date(val + "T00:00"));
	    },
	  });

	  static editTemplate = editTemplate$6;

	  static view = "date-view";
	  static edit = "date-edit";
	  static new = "date-edit";
	}

	registerFieldComponents(DateModule);

	const editTemplate$5 = html$1`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: isSearch -->
    <div data-bind="text: toString()"></div>
    <input class="form-control" data-bind="" />
    <!-- /ko -->
    <!-- ko ifnot: isSearch -->
    <!-- ko if: Options().length -->
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
  selectedOptions: Value,
  optionsText: optionsText,
  class: ValidationClass"
    ></select>
    <div class="fw-light flex justify-between">
      <p class="fst-italic">Hold ctrl to select multiple</p>
      <button type="button" class="btn btn-link h-1" data-bind="click: clear">
        CLEAR
      </button>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
    optionsCaption: 'Select...', 
    value: Value,
    optionsText: optionsText,
    class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;

	class LookupModule extends BaseFieldModule {
	  constructor(field) {
	    super(field);
	    this.onSearchInput = field.onSearchInput;
	    this.multiple = field.multiple ?? false;
	  }

	  // selectedOptions = ko.pureComputed({
	  //   read: () => {
	  //     if (this.multiple) return this.Value();
	  //     return ko.unwrap(this.Value) ? [ko.unwrap(this.Value)] : [];
	  //   },
	  //   write: (val) => {
	  //     if (this.multiple) {
	  //       this.Value(val);
	  //       return;
	  //     }

	  //     if (val.length) {
	  //       this.Value(val[0]);
	  //       return;
	  //     }
	  //     this.Value(null);
	  //   },
	  // });

	  static editTemplate = editTemplate$5;

	  static view = "lookup-view";
	  static edit = "lookup-edit";
	  static new = "lookup-edit";
	}

	registerFieldComponents(LookupModule);

	var viewTemplate$1 = "<div class=\"fw-semibold\" data-bind=\"text: displayName\"></div>\r\n<!-- ko if: toString -->\r\n<!-- ko ifnot: multiple -->\r\n<div data-bind=\"text: toString, \r\n    attr: {title: Value()?.LoginName}\"></div>\r\n<!-- /ko -->\r\n<!-- ko if: multiple -->\r\n<ul data-bind=\"foreach: Value\">\r\n  <li data-bind=\"attr: {title: LoginName}, text: Title\"></li>\r\n</ul>\r\n<!-- /ko -->\r\n<!-- /ko -->\r\n<!-- ko ifnot: toString -->\r\n<div class=\"fst-italic\">Not provided.</div>\r\n<!-- /ko -->\r\n";

	var editTemplate$4 = "<div>\r\n  <label class=\"fw-semibold w-100\"><span data-bind=\"text: displayName\"></span><span data-bind=\"if: isRequired\" class=\"fw-bold text-danger\">*</span>:\r\n    <div class=\"people-picker\" tabindex=\"0\" data-bind=\"css: { focused }, event: { focusin, focusout }\">\r\n      <div class=\"search-group form-select\" data-bind=\"event: { keydown },\r\n      class: ValidationClass\">\r\n        <div class=\"selected-people\" data-bind=\"foreach: selectedUsers\">\r\n          <div class=\"selected-person\">\r\n            <!-- ko ifnot: ID  -->\r\n            <div class=\"status\" data-bind=\"attr: {title: ID}, class: resolutionStatus\">\r\n              <!-- ko if: resolutionStatus() == 'searching' -->\r\n              <span class=\"small loader\"></span>\r\n              <!-- /ko -->\r\n              <!-- ko if: resolutionStatus() == 'fail' -->\r\n              <i class=\"fa-solid fa-triangle-exclamation\" data-bind=\"attr: {title: resolutionMessage}\"></i>\r\n              <!-- /ko -->\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: ID -->\r\n            <div class=\"status resolved\" data-bind=\"attr: {title: ID}\">\r\n              <span data-bind=\"text: Initials()\"></span>\r\n            </div>\r\n            <!-- /ko -->\r\n            <div class=\"display-name\" data-bind=\"text: Title, attr: {title: LoginName}\"></div>\r\n            <div class=\"remove\" title=\"Remove User\" data-bind=\"click: $parent.removeUser\">\r\n              <i class=\"fa-solid fa-xmark\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <input type=\"text\" class=\"\" placeholder=\"Search...\" data-bind=\"textInput: searchTerm, event: { focusin }\">\r\n      </div>\r\n      <ul class=\"search-opts\" data-bind=\"foreach: userOpts, \r\n          visible: focused() && userOpts().length\">\r\n        <li class=\"search-opt\" data-bind=\"click: $parent.selectUser, css: { active }\">\r\n          <span data-bind=\"text: Title, attr: {title: LoginName}\"></span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- ko if: instructions -->\r\n    <div class=\"fw-lighter fst-italic text-secondary\" data-bind=\"html: instructions\"></div>\r\n    <!-- /ko -->\r\n  </label>\r\n  <!-- ko if: ShowErrors -->\r\n  <!-- ko foreach: Errors -->\r\n  <div class=\"fw-semibold text-danger\" data-bind=\"text: description\"></div>\r\n  <!-- /ko -->\r\n  <!-- /ko -->\r\n</div>\r\n\r\n<style>\r\n  .people-picker {\r\n    /* background-color: white; */\r\n    position: relative;\r\n    outline: none;\r\n  }\r\n\r\n  .search-group {\r\n    background-color: white;\r\n    border: 1px solid var(--primary-muted-color);\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .people-picker.focused .search-group {\r\n    border-color: var(--primary-color);\r\n  }\r\n\r\n  .search-group > input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1rem;\r\n    /* margin: 0.1rem; */\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .search-opts {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0.1rem 0 0 0;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: 5;\r\n    background-color: white;\r\n    border: 1px solid var(--secondary-color);\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .search-opts .search-opt:nth-child(even) {\r\n    background-color: var(--bg-very-light-color);\r\n  }\r\n\r\n  .search-opts .search-opt {\r\n    cursor: pointer;\r\n    padding: 4px;\r\n    font-size: 1rem;\r\n    color: var(--text-primary);\r\n    font-weight: normal;\r\n  }\r\n\r\n  .search-opts .search-opt:hover,\r\n  .search-opts .search-opt.active {\r\n    background-color: var(--bg-light-color);\r\n  }\r\n\r\n  .selected-people {\r\n    display: flex;\r\n    gap: 0.4rem;\r\n  }\r\n\r\n  .selected-person {\r\n    display: flex;\r\n    align-items: stretch;\r\n    border: 1px solid var(--primary-color);\r\n    border-radius: 2rem;\r\n    gap: 0.4rem;\r\n    height: 2rem;\r\n    margin: 0.4rem 0;\r\n    cursor: default;\r\n  }\r\n\r\n  .selected-person .status {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 2rem;\r\n    border-radius: 1rem;\r\n    color: white;\r\n  }\r\n\r\n  .selected-person .status.resolved {\r\n    background-color: var(--primary-color);\r\n    color: white !important;\r\n  }\r\n\r\n  .selected-person .status.fail {\r\n    background-color: var(--warn-color);\r\n    color: white !important;\r\n  }\r\n\r\n  .selected-person .display-name {\r\n    align-content: center;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .selected-person .remove {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    width: 2rem;\r\n    color: var(--bg-dark-secondary-color);\r\n  }\r\n\r\n  .selected-person .remove:hover {\r\n    background-color: var(--bg-very-light-color);\r\n    cursor: pointer;\r\n  }\r\n</style>\r\n";

	/*
	    SharePoint Acces Layer - sal.js

	    Abstract any functions that rely on reading or setting SP items to here.

	    Create a new "Connection" object type that will store information for 
	    interfacing with a specific list.

	    Author: Peter Backlund 
	    Contact: backlundpf <@> state.gov
	    Created: 2019-02-12
	*/

	/*
	  TODO:
	  - migrate to rest api
	  - remove new from "new SP.ClientContext.get_current()"
	  - standardize currctx
	  - remove unused functions
	  - Combine functions 
	*/

	window.console = window.console || { log: function () {} };

	window.sal = window.sal ?? {};
	var sal = window.sal;

	// const serverRelativeUrl =
	//   window.context.pageContext.legacyPageContext.webServerRelativeUrl == "/"
	//     ? ""
	//     : window.context.pageContext.legacyPageContext.webServerRelativeUrl;

	sal.globalConfig = sal.globalConfig || {
	  siteGroups: [],
	  siteUrl: "",
	  listServices: "",
	  defaultGroups: {},
	};
	sal.site = sal.site || {};

	window.DEBUG = true;

	function executeQuery(currCtx) {
	  return new Promise((resolve, reject) =>
	    currCtx.executeQueryAsync(resolve, (sender, args) => {
	      reject({ sender, args });
	    })
	  );
	}

	function principalToPeople(oPrincipal, isGroup = null) {
	  return {
	    ID: oPrincipal.get_id(),
	    Title: oPrincipal.get_title(),
	    LoginName: oPrincipal.get_loginName(),
	    IsEnsured: true,
	    IsGroup:
	      isGroup != null
	        ? isGroup
	        : oPrincipal.constructor.getName() == "SP.Group",
	    oPrincipal,
	  };
	}

	// Used in authorization
	function getDefaultGroups() {
	  const defaultGroups = sal.globalConfig.defaultGroups;
	  const result = {};
	  Object.keys(defaultGroups).forEach((key) => {
	    result[key] = principalToPeople(defaultGroups[key], true);
	  });
	  return result;
	}

	const siteGroups = {};

	async function getGroupUsers(groupName) {
	  if (siteGroups[groupName]?.Users?.constructor == Array) {
	    return siteGroups[groupName].Users;
	  }
	  const url = `/web/sitegroups/GetByName('${groupName}')?$expand=Users`;

	  const groupResult = await fetchSharePointData(url);

	  const group = groupResult.d;
	  group.Users = group.Users?.results;

	  siteGroups[groupName] = group;
	  return group.Users;
	}

	// Used in router
	// export const webRoot =
	//   window.context.pageContext.legacyPageContext.webAbsoluteUrl == "/"
	//     ? ""
	//     : window.context.pageContext.legacyPageContext.webAbsoluteUrl;

	async function InitSal() {
	  if (sal.utilities) return;
	  console.log("Init Sal");
	  var currCtx = SP.ClientContext.get_current();
	  var web = currCtx.get_web();
	  //sal.site = sal.siteConnection;
	  const serverRelativeUrl =
	    window.context.pageContext.legacyPageContext.webServerRelativeUrl == "/"
	      ? ""
	      : window.context.pageContext.legacyPageContext.webServerRelativeUrl;

	  sal.globalConfig.siteUrl = serverRelativeUrl;

	  sal.globalConfig.listServices = serverRelativeUrl + "/_vti_bin/ListData.svc/";
	  // Get default groups
	  sal.globalConfig.defaultGroups = {
	    owners: web.get_associatedOwnerGroup(),
	    members: web.get_associatedMemberGroup(),
	    visitors: web.get_associatedVisitorGroup(),
	  };
	  currCtx.load(sal.globalConfig.defaultGroups.owners);
	  currCtx.load(sal.globalConfig.defaultGroups.members);
	  currCtx.load(sal.globalConfig.defaultGroups.visitors);

	  // Get Current User information
	  var user = web.get_currentUser(); //must load this to access info.
	  currCtx.load(user);

	  // Get the site groups
	  var siteGroupCollection = web.get_siteGroups();
	  currCtx.load(siteGroupCollection);

	  // Get the roles upfront so we can validate they're present on the site.
	  sal.globalConfig.roles = [];
	  var oRoleDefinitions = currCtx.get_web().get_roleDefinitions();
	  currCtx.load(oRoleDefinitions);

	  return new Promise((resolve, reject) => {
	    currCtx.executeQueryAsync(
	      function () {
	        sal.globalConfig.currentUser = user;

	        var listItemEnumerator = siteGroupCollection.getEnumerator();
	        while (listItemEnumerator.moveNext()) {
	          var oListItem = listItemEnumerator.get_current();
	          sal.globalConfig.siteGroups.push(principalToPeople(oListItem));
	        }

	        // Role Definitions
	        var oEnumerator = oRoleDefinitions.getEnumerator();
	        while (oEnumerator.moveNext()) {
	          var oRoleDefinition = oEnumerator.get_current();
	          sal.globalConfig.roles.push(oRoleDefinition.get_name());
	        }

	        sal.config = new sal.NewAppConfig();
	        sal.utilities = new sal.NewUtilities();
	        resolve();
	      },
	      function (sender, args) {
	        alert("Error initializing SAL");
	        reject();
	      }
	    );
	  });
	  // console.log()
	}

	sal.NewAppConfig = function () {
	  // TODO: We should take in configuration from our current application, roles/groups etc.
	  var siteRoles = {};
	  siteRoles.roles = {
	    FullControl: "Full Control",
	    Design: "Design",
	    Edit: "Edit",
	    Contribute: "Contribute",
	    RestrictedContribute: "Restricted Contribute",
	    InitialCreate: "Initial Create",
	    Read: "Read",
	    RestrictedRead: "Restricted Read",
	    LimitedAccess: "Limited Access",
	  };
	  siteRoles.fulfillsRole = function (inputRole, targetRole) {
	    // the site roles are already in authoritative order
	    const roles = Object.values(siteRoles.roles);
	    if (!roles.includes(inputRole) || !roles.includes(targetRole)) return false;

	    return roles.indexOf(inputRole) <= roles.indexOf(targetRole);
	  };

	  siteRoles.validate = function () {
	    Object.keys(siteRoles.roles).forEach(function (role) {
	      var roleName = siteRoles.roles[role];
	      if (!sal.globalConfig.roles.includes(roleName)) {
	        console.error(roleName + " is not in the global roles list");
	      } else {
	        console.log(roleName);
	      }
	    });
	  };

	  var siteGroups = {
	    groups: {
	      Owners: "workorder Owners",
	      Members: "workorder Members",
	      Visitors: "workorder Visitors",
	      RestrictedReaders: "Restricted Readers",
	    },
	  };

	  var publicMembers = {
	    siteRoles,
	    siteGroups,
	  };

	  return publicMembers;
	};

	// Used in Authorization
	async function getUserPropsAsync(
	  userId = window.context.pageContext.legacyPageContext.userId
	) {
	  // We need to make two api calls, one to user info list, and one to web
	  // const userInfoUrl = `/Web/lists/getbytitle('User%20Information%20List')/Items(${userId})`;
	  const userPropsUrl = `/sp.userprofiles.peoplemanager/getmyproperties`;
	  // const userGroupUrl = `/Web/GetUserById(${userId})/Groups`;

	  // Get more user info:
	  const userInfoUrl = `/Web/GetUserById(${userId})/?$expand=Groups`;

	  const userInfo = (await fetchSharePointData(userInfoUrl)).d;

	  // TODO: See if we can just select the properties we need
	  // const userPropsUrl = `/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v='${encodeURIComponent(
	  //   userInfo.LoginName
	  // )}'`;

	  const userProps = (await fetchSharePointData(userPropsUrl))?.d
	    .UserProfileProperties.results;

	  function findPropValue(props, key) {
	    return props.find((prop) => prop.Key == key)?.Value;
	  }

	  return {
	    ID: userId,
	    Title: userInfo.Title,
	    LoginName: userInfo.LoginName,
	    WorkPhone: findPropValue(userProps, "WorkPhone"),
	    EMail: findPropValue(userProps, "WorkEmail"), // TODO: Do we still need this spelling?
	    IsEnsured: true,
	    IsGroup: false,
	    Groups: userInfo.Groups?.results?.map((group) => {
	      return {
	        ...group,
	        ID: group.Id,
	        IsGroup: true,
	        IsEnsured: true,
	      };
	    }),
	  };
	}

	sal.NewUtilities = function () {
	  // TODO: Split this up into UserManager, GroupManager, etc
	  function createSiteGroup(groupName, permissions, callback) {
	    /* groupName: the name of the new SP Group
	     *  permissions: an array of permissions to assign to the group
	     * groupOwner: the name of the owner group
	     */
	    callback = callback === undefined ? null : callback;

	    var currCtx = new SP.ClientContext.get_current();
	    currCtx.get_web();

	    var groupCreationInfo = new SP.GroupCreationInformation();
	    groupCreationInfo.set_title(groupName);
	    this.oGroup = oWebsite.get_siteGroups().add(groupCreationInfo);
	    oGroup.set_owner(oWebsite.get_associatedOwnerGroup());

	    oGroup.update();
	    var collRoleDefinitionBinding =
	      SP.RoleDefinitionBindingCollection.newObject(clientContext);

	    this.oRoleDefinitions = [];

	    permissions.forEach(function (perm) {
	      var oRoleDefinition = oWebsite.get_roleDefinitions().getByName(perm);
	      this.oRoleDefinitions.push(oRoleDefinition);
	      collRoleDefinitionBinding.add(oRoleDefinition);
	    });

	    var collRollAssignment = oWebsite.get_roleAssignments();
	    collRollAssignment.add(oGroup, collRoleDefinitionBinding);

	    function onCreateGroupSucceeded() {
	      var roleInfo =
	        oGroup.get_title() +
	        " created and assigned to " +
	        oRoleDefinitions.forEach(function (rd) {
	        });
	      if (callback) {
	        callback(oGroup.get_id());
	      }
	      console.log(roleInfo);
	    }

	    function onCreateGroupFailed(sender, args) {
	      alert(
	        groupnName +
	          " - Create group failed. " +
	          args.get_message() +
	          "\n" +
	          args.get_stackTrace()
	      );
	    }

	    clientContext.load(oGroup, "Title");

	    var data = {
	      groupName: groupName,
	      oGroup: oGroup,
	      oRoleDefinition: oRoleDefinition,
	      callback: callback,
	    };

	    clientContext.executeQueryAsync(
	      Function.createDelegate(data, onCreateGroupSucceeded),
	      Function.createDelegate(data, onCreateGroupFailed)
	    );
	  }

	  function getUserGroups(user, callback) {
	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();

	    var everyone = web.ensureUser(user);
	    var oGroups = everyone.get_groups();

	    function onQueryGroupsSucceeded() {
	      var groups = new Array();
	      var groupsInfo = new String();
	      var groupsEnumerator = oGroups.getEnumerator();
	      while (groupsEnumerator.moveNext()) {
	        var oGroup = groupsEnumerator.get_current();
	        var group = principalToPeople(oGroup);

	        groupsInfo +=
	          "\n" +
	          "Group ID: " +
	          oGroup.get_id() +
	          ", " +
	          "Title : " +
	          oGroup.get_title();
	        groups.push(group);
	      }
	      console.log(groupsInfo.toString());
	      callback(groups);
	    }

	    function onQueryGroupsFailed(sender, args) {
	      console.error(
	        " Everyone - Query Everyone group failed. " +
	          args.get_message() +
	          "\n" +
	          args.get_stackTrace()
	      );
	    }
	    currCtx.load(everyone);
	    currCtx.load(oGroups);
	    data = { everyone: everyone, oGroups: oGroups, callback: callback };

	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onQueryGroupsSucceeded),
	      Function.createDelegate(data, onQueryGroupsFailed)
	    );
	  }

	  function getUsersWithGroup(oGroup, callback) {
	    var context = new SP.ClientContext.get_current();

	    var oUsers = oGroup.get_users();

	    function onGetUserSuccess() {
	      var userObjs = [];
	      var userEnumerator = oUsers.getEnumerator();
	      while (userEnumerator.moveNext()) {
	        var oUser = userEnumerator.get_current();
	        var userObj = principalToPeople(oUser);
	        userObjs.push(userObj);
	      }
	      callback(userObjs);
	    }

	    function onGetUserFailed(sender, args) {}

	    var data = { oUsers: oUsers, callback: callback };
	    context.load(oUsers);
	    context.executeQueryAsync(
	      Function.createDelegate(data, onGetUserSuccess),
	      Function.createDelegate(data, onGetUserFailed)
	    );
	  }

	  function copyFiles(sourceLib, destLib, callback, onError) {
	    var context = new SP.ClientContext.get_current();
	    var web = context.get_web();
	    var folderSrc = web.getFolderByServerRelativeUrl(sourceLib);
	    context.load(folderSrc, "Files");
	    context.executeQueryAsync(
	      function () {
	        console.log("Got the source folder right here!");
	        var files = folderSrc.get_files();
	        var e = files.getEnumerator();
	        var dest = [];
	        while (e.moveNext()) {
	          var file = e.get_current();
	          var destLibUrl = destLib + "/" + file.get_name();
	          dest.push(destLibUrl); //delete this when we're happy we got the file paths right
	          file.copyTo(destLibUrl, true);
	        }
	        console.log(dest); //delete this when we're happy we got the file paths right
	        context.executeQueryAsync(
	          function () {
	            console.log("Files moved successfully!");
	            callback();
	          },
	          function (sender, args) {
	            console.log("error: ") + args.get_message();
	          }
	        );
	      },
	      function (sender, args) {
	        console.log("Sorry, something messed up: " + args.get_message());
	      }
	    );
	  }

	  function copyFilesAsync(sourceFolder, destFolder) {
	    return new Promise((resolve, reject) => {
	      copyFiles(sourceFolder, destFolder, resolve);
	    });
	  }

	  var publicMembers = {
	    copyFiles: copyFiles,
	    copyFilesAsync,
	    createSiteGroup: createSiteGroup,
	    getUserGroups: getUserGroups,
	    getUsersWithGroup: getUsersWithGroup,
	  };

	  return publicMembers;
	};

	async function copyFileAsync(sourceFilePath, destFilePath) {
	  const uri =
	    `/web/getfilebyserverrelativeurl(@source)/copyto(@dest)` +
	    `?@source='${sourceFilePath}'&@dest='${destFilePath}'`;

	  const result = await fetchSharePointData(uri, "POST");

	  return result;
	}

	// Used in Knockout people custom binding
	async function ensureUserByKeyAsync(userName) {
	  return new Promise((resolve, reject) => {
	    var group = sal.globalConfig.siteGroups.find(function (group) {
	      return group.LoginName == userName;
	    });

	    if (group) {
	      resolve(group);
	      return;
	    }

	    var context = new SP.ClientContext.get_current();
	    var oUser = context.get_web().ensureUser(userName);

	    function onEnsureUserSucceeded(sender, args) {
	      const user = principalToPeople(oUser);
	      resolve(user);
	    }

	    function onEnsureUserFailed(sender, args) {
	      console.error(
	        "Failed to ensure user :" +
	          args.get_message() +
	          "\n" +
	          args.get_stackTrace()
	      );
	      reject(args);
	    }
	    const data = { oUser, resolve, reject };

	    context.load(oUser);
	    context.executeQueryAsync(
	      Function.createDelegate(data, onEnsureUserSucceeded),
	      Function.createDelegate(data, onEnsureUserFailed)
	    );
	  });
	}

	function getSPSiteGroupByName(groupName) {
	  var userGroup = null;
	  if (this.globalConfig.siteGroups != null) {
	    userGroup = this.globalConfig.siteGroups.find(function (group) {
	      return group.Title == groupName;
	    });
	  }
	  return userGroup;
	}

	class ItemPermissions {
	  constructor({ hasUniqueRoleAssignments, roles }) {
	    this.hasUniqueRoleAssignments = hasUniqueRoleAssignments;
	    this.roles = roles;
	  }

	  hasUniqueRoleAssignments;
	  roles = [];

	  addPrincipalRole(principal, roleName) {
	    const newRoleDef = new RoleDef({ name: roleName });
	    const principalRole = this.getPrincipalRole(principal);

	    if (principalRole) {
	      principalRole.addRoleDef(newRoleDef);
	      return;
	    }

	    const newRole = new Role({ principal });
	    newRole.addRoleDef(newRoleDef);
	    this.roles.push(newRole);
	  }

	  getPrincipalRole(principal) {
	    return this.roles.find((role) => role.principal.ID == principal.ID);
	  }

	  principalHasPermissionKind(principal, permission) {
	    const role = this.getPrincipalRole(principal);
	    return role?.roleDefs.find((roleDef) =>
	      roleDef.basePermissions?.has(permission)
	    )
	      ? true
	      : false;
	  }

	  getValuePairs() {
	    // For backwards compatibility
	    return this.roles.flatMap((role) =>
	      role.roleDefs.map((roleDef) => [role.principal.Title, roleDef.name])
	    );
	  }

	  static fromRestResult(result) {
	    const roles = result.RoleAssignments.results.map(
	      Role.fromRestRoleAssignment
	    );

	    return new ItemPermissions({
	      hasUniqueRoleAssignments: result.HasUniqueRoleAssignments,
	      roles,
	    });
	  }
	}

	class Role {
	  constructor({ principal, roleDefs = [] }) {
	    this.principal = principal;
	    this.roleDefs = roleDefs;
	  }

	  principal; // People Entity
	  roleDefs = [];

	  addRoleDef(roleDef) {
	    this.roleDefs.push(roleDef);
	  }

	  static fromRestRoleAssignment(role) {
	    return new Role({
	      principal: { ...role.Member, ID: role.Member.Id },
	      roleDefs: role.RoleDefinitionBindings.results.map(
	        RoleDef.fromRestRoleDef
	      ),
	    });
	  }
	  static fromJsomRole(role) {
	    const newRole = new Role({
	      principal: principalToPeople(role.get_member()),
	    });

	    var roleDefs = role.get_roleDefinitionBindings();
	    if (roleDefs != null) {
	      var roleDefsEnumerator = roleDefs.getEnumerator();
	      while (roleDefsEnumerator.moveNext()) {
	        var roleDef = roleDefsEnumerator.get_current();
	        newRole.roleDefs.push(RoleDef.fromJsomRoleDef(roleDef));
	      }
	    }
	    return newRole;
	  }
	}

	class RoleDef {
	  constructor({ name, basePermissions = null }) {
	    this.name = name;
	    this.basePermissions = basePermissions;
	  }
	  name;
	  basePermissions;

	  static fromRestRoleDef(roleDef) {
	    const newRoleDef = new RoleDef({
	      name: roleDef.Name,
	      basePermissions: roleDef.BasePermissions,
	    });
	    Object.assign(newRoleDef, roleDef);
	    return newRoleDef;
	  }

	  static fromJsomRoleDef(roleDef) {
	    const newRoleDef = new RoleDef({ name: roleDef.get_name() });
	    newRoleDef.basePermissions = roleDef.get_basePermissions();

	    return newRoleDef;
	  }
	}

	function SPList(listDef) {
	  /*
	      Expecting a list definition object in the following format:
	        var assignmentListDef = {
	        name: "Assignment",
	        title: "Assignment"
	      };
	    */

	  /*****************************************************************
	                                Globals       
	    ******************************************************************/

	  var self = this;

	  self.config = {
	    def: listDef,
	  };

	  /*****************************************************************
	                                Common Private Methods       
	    ******************************************************************/
	  async function init() {
	    if (!self.config.fieldSchema) {
	      const listEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')?$expand=Fields`;
	      const list = await fetchSharePointData(listEndpoint);
	      // const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/Fields`;
	      //const fields = await fetchData(apiEndpoint);
	      self.config.guid = list.d.Id;
	      self.config.fieldSchema = list.d.Fields.results;
	    }
	  }

	  init();

	  /*****************************************************************
	                                Common Public Methods       
	    ******************************************************************/

	  async function setListPermissionsAsync(itemPermissions, reset) {
	    const currCtx = new SP.ClientContext.get_current();
	    const web = currCtx.get_web();
	    const oList = web.get_lists().getByTitle(self.config.def.title);

	    // await executeQuery(currCtx).catch((sender, args) => {
	    //   console.warn("Unable to get list: ", sender);
	    //   return;
	    // });

	    return setResourcePermissionsAsync(oList, itemPermissions, reset);
	  }

	  /*****************************************************************
	                                createListItem      
	    ******************************************************************/
	  function mapObjectToListItem(val) {
	    if (!val) {
	      return val;
	    }
	    if (!Array.isArray(val)) {
	      return mapItemToListItem(val);
	    }
	    return val
	      .map((item) => {
	        return mapItemToListItem(item);
	      })
	      .join(";#");
	  }

	  function mapItemToListItem(item) {
	    if (item.ID) {
	      //var lookupValue = new SP.FieldLookupValue();
	      //lookupValue.set_lookupId(item.id);
	      //return lookupValue;
	      return `${item.ID};#${item.LookupValue ?? ""}`;
	    }
	    if (item.LookupValue) {
	      //var lookupValue = new SP.FieldLookupValue();
	      //lookupValue.set_lookupId(item.id);
	      //return lookupValue;
	      return item.LookupValue;
	    }
	    if (item.constructor.getName() == "Date") {
	      return item.toISOString();
	    }
	    return item;
	  }

	  function createListItemAsync(entity, folderPath = null) {
	    return new Promise((resolve, reject) => {
	      //self.updateConfig();
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();
	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      const itemCreateInfo = new SP.ListItemCreationInformation();

	      if (folderPath) {
	        var folderUrl =
	          sal.globalConfig.siteUrl +
	          "/Lists/" +
	          self.config.def.name +
	          "/" +
	          folderPath;
	        itemCreateInfo.set_folderUrl(folderUrl);
	      }

	      const oListItem = oList.addItem(itemCreateInfo);
	      const restrictedFields = [
	        "ID",
	        "Author",
	        "Created",
	        "Editor",
	        "Modified",
	      ];
	      Object.keys(entity)
	        .filter((key) => !restrictedFields.includes(key))
	        .forEach((key) => {
	          oListItem.set_item(key, mapObjectToListItem(entity[key]));
	        });

	      oListItem.update();

	      function onCreateListItemSucceeded() {
	        resolve(oListItem.get_id());
	      }

	      function onCreateListItemFailed(sender, args) {
	        console.error("Create Item Failed - List: " + self.config.def.name);
	        console.error("ValuePairs", entity);
	        console.error(sender, args);
	        reject(sender);
	      }

	      const data = { entity, oListItem, resolve, reject };

	      currCtx.load(oListItem);
	      currCtx.executeQueryAsync(
	        Function.createDelegate(data, onCreateListItemSucceeded),
	        Function.createDelegate(data, onCreateListItemFailed)
	      );
	    });
	  }

	  /*****************************************************************
	                                getListItems      
	    ******************************************************************/
	  function mapListItemToObject(val) {
	    if (!val) {
	      return val;
	    }
	    let out = {};
	    switch (val.constructor.getName()) {
	      case "SP.FieldUserValue":
	        out.LoginName = val.get_email();
	      case "SP.FieldLookupValue":
	        out.ID = val.get_lookupId();
	        out.LookupValue = val.get_lookupValue();
	        out.Title = val.get_lookupValue();
	        break;
	      default:
	        out = val;
	    }
	    return out;
	  }

	  function getListItems(caml, fields, callback) {
	    /*
	        Obtain all list items that match the querystring passed by caml.
	        */
	    var camlQuery = new SP.CamlQuery.createAllItemsQuery();

	    camlQuery.set_viewXml(caml);

	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();
	    var oList = web.get_lists().getByTitle(self.config.def.title);

	    var collListItem = oList.getItems(camlQuery);

	    function onGetListItemsSucceeded() {
	      var self = this;
	      var listItemEnumerator = self.collListItem.getEnumerator();

	      const foundObjects = [];

	      while (listItemEnumerator.moveNext()) {
	        var oListItem = listItemEnumerator.get_current();
	        var listObj = {};
	        fields.forEach((field) => {
	          var colVal = oListItem.get_item(field);
	          //console.log(`SAL: Setting ${field} to`, colVal);
	          listObj[field] = Array.isArray(colVal)
	            ? colVal.map((val) => mapListItemToObject(val))
	            : mapListItemToObject(colVal);
	        });
	        //listObj.fileUrl = oListItem.get_item("FileRef");
	        // listObj.oListItem = oListItem;
	        foundObjects.push(listObj);
	      }
	      //this.setState({ focusedItems })
	      //console.log("calling callback get list");
	      callback(foundObjects);
	    }

	    function onGetListItemsFailed(sender, args) {
	      console.log("unsuccessful read", sender);

	      alert(
	        "Request on list " +
	          self.config.def.name +
	          " failed, producing the following error: \n " +
	          args.get_message() +
	          "\nStackTrack: \n " +
	          args.get_stackTrace()
	      );
	    }
	    var data = {
	      collListItem: collListItem,
	      callback: callback,
	      fields,
	      camlQuery,
	    };

	    currCtx.load(collListItem, `Include(${fields.join(", ")})`);
	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onGetListItemsSucceeded),
	      Function.createDelegate(data, onGetListItemsFailed)
	    );
	  }

	  function getListItemsAsync({ fields = null, caml = null }) {
	    if (!caml) {
	      var caml =
	        '<View Scope="RecursiveAll"><Query><Where><Eq>' +
	        '<FieldRef Name="FSObjType"/><Value Type="int">0</Value>' +
	        "</Eq></Where></Query></View>";
	    }
	    return new Promise((resolve, reject) => {
	      getListItems(caml, fields, resolve);
	    });
	  }

	  function findByIdAsync(id, fields) {
	    return new Promise((resolve, reject) => {
	      try {
	        findById(id, fields, resolve);
	      } catch (e) {
	        reject(e);
	      }
	    });
	  }

	  async function getById(id, fields) {
	    const [queryFields, expandFields] = await getQueryFields(fields);

	    const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/items(${id})?$Select=${queryFields}&$expand=${expandFields}`;

	    const result = await fetchSharePointData(apiEndpoint);
	    return result.d;
	  }

	  async function getListFields() {
	    if (!self.config.fieldSchema) {
	      const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/Fields`;
	      const fields = await fetchSharePointData(apiEndpoint);
	      self.config.fieldSchema = fields.d.results;
	    }
	    return self.config.fieldSchema;
	  }

	  async function getQueryFields(fields) {
	    const queryFields = [];
	    const expandFields = [];

	    const listFields = await getListFields();
	    fields.map((f) => {
	      // TODO: Figure out why FileRef is pretending to be a lookup
	      if (f == "FileRef") {
	        queryFields.push(f);
	        return;
	      }

	      if (f.includes("/")) {
	        queryFields.push(f);
	        expandFields.push(f.split("/")[0]);
	        return;
	      }
	      const fieldSchema = listFields.find((lf) => lf.StaticName == f);
	      if (!fieldSchema) {
	        alert(`Field '${f}' not found on list ${self.config.def.name}`);
	        return;
	      }

	      const idString = f + "/ID";
	      let titleString = f + "/Title";
	      switch (fieldSchema.TypeAsString) {
	        case "LookupMulti":
	        case "Lookup":
	          titleString = f + "/" + fieldSchema.LookupField;
	        case "User":
	          queryFields.push(idString);
	          queryFields.push(titleString);
	          expandFields.push(f);
	          // expandFields.push(titleString);
	          break;
	        case "Choice":
	        default:
	          queryFields.push(f);
	      }
	    });
	    return [queryFields, expandFields];
	  }

	  // { column, value, type = "LookupValue" }
	  async function findByColumnValueAsync(
	    columnFilters,
	    { orderByColumn = null, sortAsc },
	    { count = null, includePermissions = false, includeFolders = false },
	    fields
	  ) {
	    const [queryFields, expandFields] = await getQueryFields(fields);
	    if (includePermissions) {
	      queryFields.push("RoleAssignments");
	      queryFields.push("HasUniqueRoleAssignments");
	      expandFields.push("RoleAssignments");
	    }
	    const orderBy = orderByColumn
	      ? `$orderby=${orderByColumn} ${sortAsc ? "asc" : "desc"}`
	      : "";
	    // TODO: fieldfilter should use 'lookupcolumnId' e.g. ServiceTypeId eq 1
	    const colFilterArr = [];
	    columnFilters.forEach((colFilter) =>
	      colFilterArr.push(
	        `${colFilter.column} ${colFilter.op ?? "eq"} '${colFilter.value}'`
	      )
	    );
	    if (!includeFolders) colFilterArr.push(`FSObjType eq '0'`);

	    const filter = "$filter=(" + colFilterArr.join(`) and (`) + ")";

	    //const fsObjTypeFilter = `FSObjType eq '0'`;
	    // const fieldFilter = `${column} eq '${value}'`;
	    // const filter2 = !includeFolders
	    //   ? `$filter=(${fieldFilter}) and (${fsObjTypeFilter})`
	    //   : `$filter=${fieldFilter}`;

	    const include = "$select=" + queryFields;
	    const expand = `$expand=` + expandFields;
	    const page = count ? `$top=${count}` : "";

	    const apiEndpoint =
	      `/web/lists/GetByTitle('${self.config.def.title}')/items?` +
	      `${include}&${expand}&${orderBy}&${filter}&${page}`;

	    const result = await fetchSharePointData(apiEndpoint);
	    const cursor = {
	      results: result?.d?.results,
	      _next: result?.d?.__next,
	    };

	    // if (window.DEBUG) console.log(cursor);
	    return cursor;
	  }

	  async function loadNextPage(cursor) {
	    const result = await fetchSharePointData(cursor._next);
	    return {
	      results: result?.d?.results,
	      _next: result?.d?.__next,
	    };
	  }

	  function findById(id, fields, callback) {
	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();
	    var oList = web.get_lists().getByTitle(self.config.def.title);
	    var oListItem = oList.getItemById(id);

	    function onGetListItemSucceeded() {
	      const listObj = {};
	      fields.forEach((field) => {
	        var colVal = oListItem.get_item(field);
	        //console.log(`SAL: Setting ${field} to`, colVal);
	        listObj[field] = Array.isArray(colVal)
	          ? colVal.map((val) => mapListItemToObject(val))
	          : mapListItemToObject(colVal);
	      });
	      callback(listObj);
	    }

	    function onGetListItemFailed(sender, args) {
	      console.error("SAL: findById - List: " + self.config.def.name);
	      console.error("Fields", this);
	      console.error(sender, args);
	    }

	    var data = {
	      oListItem,
	      callback,
	      fields,
	    };
	    currCtx.load(oListItem);
	    // currCtx.load(oListItem, `Include(${fields.join(", ")})`);
	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onGetListItemSucceeded),
	      Function.createDelegate(data, onGetListItemFailed)
	    );
	  }

	  /*****************************************************************
	                            updateListItem      
	    ******************************************************************/

	  function updateListItemAsync(entity) {
	    if (!entity?.ID) {
	      return false;
	    }

	    return new Promise((resolve, reject) => {
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();
	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      const oListItem = oList.getItemById(entity.ID);

	      const restrictedFields = [
	        "ID",
	        "Author",
	        "Created",
	        "Editor",
	        "Modified",
	      ];

	      Object.keys(entity)
	        .filter((key) => !restrictedFields.includes(key))
	        .forEach((key) => {
	          oListItem.set_item(key, mapObjectToListItem(entity[key]));
	        });

	      oListItem.update();

	      function onUpdateListItemsSucceeded() {
	        //alert('Item updated!');
	        console.log("Successfully updated " + this.oListItem.get_item("Title"));
	        resolve();
	      }

	      function onUpdateListItemFailed(sender, args) {
	        console.error("Update Failed - List: " + self.config.def.name);
	        console.error("Item Id", this.oListItem.get_id() ?? "N/A");
	        console.error(entity);
	        console.error(sender, args);
	        reject(args);
	      }

	      const data = { oListItem, entity, resolve, reject };

	      currCtx.load(oListItem);
	      currCtx.executeQueryAsync(
	        Function.createDelegate(data, onUpdateListItemsSucceeded),
	        Function.createDelegate(data, onUpdateListItemFailed)
	      );
	    });
	  }

	  async function deleteListItemAsync(id) {
	    const apiEndpoint = `/web/lists/GetByTitle('${self.config.def.title}')/items(${id})`;
	    return await fetchSharePointData(apiEndpoint, "DELETE", {
	      "If-Match": "*",
	    });
	    // return new Promise((resolve, reject) => deleteListItem(id, resolve));
	  }

	  /*****************************************************************
	                            Permissions  
	    ******************************************************************/
	  /**
	   * Documentation - setItemPermissions
	   * @param {number} id Item identifier, obtain using getListItems above
	   * @param {ItemPermissions} itemPermissions an instance of ItemPermissions
	   */
	  async function setItemPermissionsAsync(id, itemPermissions, reset) {
	    const currCtx = new SP.ClientContext.get_current();
	    currCtx.get_web();

	    const oListItem = await getoListItemByIdAsync(id);

	    return setResourcePermissionsAsync(oListItem, itemPermissions, reset);
	  }

	  async function setResourcePermissionsAsync(
	    oListItem,
	    itemPermissions,
	    reset
	  ) {
	    if (reset) {
	      oListItem.resetRoleInheritance();
	      oListItem.breakRoleInheritance(false, false);
	    }

	    // const result = await new Promise((resolve, reject) => {
	    //   currCtx.executeQueryAsync(
	    //     () => {
	    //       resolve();
	    //     },
	    //     (sender, args) => {
	    //       console.error(
	    //         "Failed to break permissions on item: " +
	    //           this.oListItem.get_lookupValue() +
	    //           args.get_message(),
	    //         args
	    //       );
	    //       reject();
	    //     }
	    //   );
	    // });

	    for (const role of itemPermissions.roles) {
	      const ensuredPrincipalResult = await ensureUserByKeyAsync(
	        role.principal.Title
	      );
	      if (!ensuredPrincipalResult) return;

	      const currCtx2 = new SP.ClientContext.get_current();
	      const web = currCtx2.get_web();

	      const oPrincipal = ensuredPrincipalResult.oPrincipal;

	      currCtx2.load(oPrincipal);

	      role.roleDefs.map((roleDef) => {
	        const roleDefBindingColl =
	          SP.RoleDefinitionBindingCollection.newObject(currCtx2);
	        roleDefBindingColl.add(
	          web.get_roleDefinitions().getByName(roleDef.name)
	        );
	        oListItem.get_roleAssignments().add(oPrincipal, roleDefBindingColl);
	      });
	      await executeQuery(currCtx2).catch(({ sender, args }) => {
	        console.error(
	          `Failed to set role permissions on item id ${id} for principal ${role.principal.Title} ` +
	            args.get_message(),
	          args
	        );
	      });
	    }

	    if (reset) {
	      const currCtx = new SP.ClientContext.get_current();

	      oListItem
	        .get_roleAssignments()
	        .getByPrincipal(sal.globalConfig.currentUser)
	        .deleteObject();

	      await executeQuery(currCtx).catch(({ sender, args }) => {
	        console.error(
	          `Failed to remove role permissions on item id ${id} for Current User ` +
	            args.get_message(),
	          args
	        );
	      });
	    }
	  }

	  function getoListItemByIdAsync(id) {
	    return new Promise((resolve, reject) => {
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();

	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      const oListItem = oList.getItemById(id);
	      currCtx.executeQueryAsync(
	        () => {
	          resolve(oListItem);
	        },
	        (sender, args) => {
	          console.error(
	            "Failed to find item: " + id + args.get_message(),
	            args
	          );
	          reject();
	        }
	      );
	    });
	  }

	  /**
	   * Documentation - getItemPermissionsAsync
	   * @param {number} id Item identifier, obtain using getListItems above
	   * @param {Function} callback The callback function to execute after
	   *  obtaining permissions
	   */
	  function getItemPermissionsAsync(id) {
	    return new Promise((resolve, reject) => {
	      var currCtx = new SP.ClientContext.get_current();
	      var web = currCtx.get_web();

	      var oList = web.get_lists().getByTitle(self.config.def.title);
	      var camlQuery = new SP.CamlQuery();
	      camlQuery.set_viewXml(
	        '<View><Query><Where><Eq><FieldRef Name="ID"/><Value Type="Text">' +
	          id +
	          "</Value></Eq></Where></Query></View>"
	      );

	      var oListItems = oList.getItems(camlQuery);

	      currCtx.load(
	        oListItems,
	        "Include(ID, HasUniqueRoleAssignments, RoleAssignments, RoleAssignments.Include(Member, RoleDefinitionBindings))"
	      );

	      function onQuerySuccess() {
	        var listItemEnumerator = oListItems.getEnumerator();

	        while (listItemEnumerator.moveNext()) {
	          var oListItem = listItemEnumerator.get_current();
	          var itemPermissions = new ItemPermissions({
	            hasUniqueRoleAssignments: oListItem.get_hasUniqueRoleAssignments(),
	            roles: [],
	          });

	          var roleEnumerator = oListItem.get_roleAssignments().getEnumerator();
	          // enumerate the roles
	          while (roleEnumerator.moveNext()) {
	            var roleColl = roleEnumerator.get_current();
	            const role = Role.fromJsomRole(roleColl);
	            // var principal = roleColl.get_member();

	            // const roleDef = {
	            //   principal: principalToPeople(principal),
	            //   permissions: [],
	            // };

	            // const roleDefBindingCollEnumerator = roleColl
	            //   .get_roleDefinitionBindings()
	            //   .getEnumerator();
	            // while (roleDefBindingCollEnumerator.moveNext()) {
	            //   const role = roleDefBindingCollEnumerator.get_current();
	            //   roleDef.permissions.push(role.get_name());
	            // }
	            itemPermissions.roles.push(role);
	          }
	          resolve(itemPermissions);
	          break;
	        }
	      }

	      function onQueryFailed(sender, args) {
	        reject(args.get_message());
	      }

	      const data = {
	        oListItems,
	        resolve,
	        reject,
	      };
	      currCtx.executeQueryAsync(
	        Function.createDelegate(data, onQuerySuccess),
	        Function.createDelegate(data, onQueryFailed)
	      );
	    });
	  }

	  async function getListPermissions() {
	    const url =
	      `/web/lists/getByTitle('${self.config.def.name}')` +
	      `?$select=HasUniqueRoleAssignments,RoleAssignments` +
	      `&$expand=RoleAssignments/Member,RoleAssignments/RoleDefinitionBindings`;

	    const headers = {
	      "Cache-Control": "no-cache",
	    };
	    const result = await fetchSharePointData(url, "GET", headers);

	    if (!result) return;

	    return ItemPermissions.fromRestResult(result.d);
	  }

	  /*****************************************************************
	                            Folders          
	    ******************************************************************/

	  function getServerRelativeFolderPath(relFolderPath) {
	    let builtPath = sal.globalConfig.siteUrl;

	    builtPath += self.config.def.isLib
	      ? "/" + self.config.def.name
	      : "/Lists/" + self.config.def.name;

	    if (relFolderPath) {
	      builtPath += "/" + relFolderPath;
	    }

	    return builtPath;
	  }

	  function upsertFolderPathAsync(folderPath) {
	    return new Promise((resolve, reject) =>
	      upsertListFolderByPath(folderPath, resolve)
	    );
	  }

	  async function setFolderReadonlyAsync(folderPath) {
	    try {
	      const currentPerms = await getFolderPermissionsAsync(folderPath);

	      const targetPerms = currentPerms.map((user) => {
	        return [user.LoginName, sal.config.siteRoles.roles.RestrictedRead];
	      });
	      await setFolderPermissionsAsync(folderPath, targetPerms, true);
	    } catch (e) {
	      console.warn(e);
	    }
	    return;
	  }

	  async function ensureFolderPermissionsAsync(relFolderPath, targetPerms) {
	    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);

	    const apiEndpoint =
	      sal.globalConfig.siteUrl +
	      `/_api/web/GetFolderByServerRelativeUrl('${serverRelFolderPath}')/` +
	      "ListItemAllFields/RoleAssignments?$expand=Member,Member/Users,RoleDefinitionBindings";

	    const response = await fetch(apiEndpoint, {
	      method: "GET",
	      headers: {
	        Accept: "application/json; odata=verbose",
	      },
	    });

	    if (!response.ok) {
	      if (response.status == 404) {
	        return;
	      }
	      console.error(response);
	    }
	    const result = await response.json();
	    const permissionResults = result?.d?.results;
	    if (!permissionResults) {
	      console.warn("No results found", result);
	      return;
	    }

	    const missingPerms = targetPerms.filter((targetPermPair) => {
	      const targetLoginName = targetPermPair[0];
	      const targetPerm = targetPermPair[1];
	      // find an existing matching permissiont
	      const permExists = permissionResults.find((curPerm) => {
	        // If the target user isn't the member
	        if (curPerm.Member.LoginName != targetLoginName) {
	          // Or the member is a group that the target user isn't in
	          if (
	            !curPerm.Member.Users?.results.find(
	              (curUser) => curUser.LoginName == targetLoginName
	            )
	          ) {
	            return false;
	          }
	        }

	        // The target principal has permissions assigned, let see if they include the target permission
	        if (
	          curPerm.RoleDefinitionBindings.results?.find((curBinding) =>
	            sal.config.siteRoles.fulfillsRole(curBinding.Name, targetPerm)
	          )
	        ) {
	          return true;
	        }

	        // Finally, the target principal is assigned, but don't have the appropriate permissions
	        return false;
	      });

	      return !permExists;
	    });

	    console.log("Adding missing permissions", missingPerms);
	    if (missingPerms.length)
	      await setFolderPermissionsAsync(relFolderPath, missingPerms, false);

	    return;
	  }
	  /*****************************************************************
	                            List Folders          
	    ******************************************************************/
	  function getFolderContentsAsync(relFolderPath, fields) {
	    return new Promise((resolve, reject) => {
	      // TODO: everything is the same as getListItems except for the caml query
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();
	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);

	      const camlQuery = SP.CamlQuery.createAllItemsQuery();
	      camlQuery.set_folderServerRelativeUrl(serverRelFolderPath);
	      const allItems = oList.getItems(camlQuery);

	      currCtx.load(allItems, `Include(${fields.join(", ")})`);

	      currCtx.executeQueryAsync(
	        function () {
	          const foundObjects = [];
	          var listItemEnumerator = allItems.getEnumerator();
	          while (listItemEnumerator.moveNext()) {
	            var oListItem = listItemEnumerator.get_current();
	            var listObj = {};
	            fields.forEach((field) => {
	              var colVal = oListItem.get_item(field);
	              //console.log(`SAL: Setting ${field} to`, colVal);
	              listObj[field] = Array.isArray(colVal)
	                ? colVal.map((val) => mapListItemToObject(val))
	                : mapListItemToObject(colVal);
	            });
	            //listObj.fileUrl = oListItem.get_item("FileRef");
	            listObj.oListItem = oListItem;
	            foundObjects.push(listObj);
	          }
	          resolve(foundObjects);
	        },
	        function (sender, args) {
	          console.warn("Unable load list folder contents:");
	          console.error(sender);
	          console.error(args);
	          reject(args);
	        }
	      );
	    });
	  }

	  async function getFolderPermissionsAsync(relFolderPath) {
	    return new Promise(async (resolve, reject) => {
	      const oListItem = await getFolderItemByPath(relFolderPath);
	      if (!oListItem) {
	        reject("Folder item does not exist");
	        return;
	      }
	      const roles = oListItem.get_roleAssignments();

	      const currCtx = new SP.ClientContext.get_current();
	      currCtx.load(oListItem);
	      currCtx.load(roles);
	      currCtx.executeQueryAsync(
	        function () {
	          const currCtx = new SP.ClientContext.get_current();
	          console.log(oListItem);
	          const principals = [];
	          const roleEnumerator = roles.getEnumerator();
	          // enumerate the roles
	          while (roleEnumerator.moveNext()) {
	            const role = roleEnumerator.get_current();
	            const principal = role.get_member();
	            const bindings = role.get_roleDefinitionBindings();
	            // get the principal
	            currCtx.load(bindings);
	            currCtx.load(principal);
	            principals.push({ principal: principal, bindings: bindings });
	          }
	          currCtx.executeQueryAsync(
	            // success
	            function (sender, args) {
	              // alert the title
	              //alert(principal.get_title());

	              const logins = principals.map(function ({ principal, bindings }) {
	                const principalRoles = [];
	                const bindingEnumerator = bindings.getEnumerator();
	                while (bindingEnumerator.moveNext()) {
	                  const binding = bindingEnumerator.get_current();
	                  principalRoles.push(binding.get_name());
	                }
	                return {
	                  ID: principal.get_id(),
	                  Title: principal.get_title(),
	                  LoginName: principal.get_loginName(),
	                  Roles: principalRoles,
	                };
	              });
	              resolve(logins);
	            },
	            // failure
	            function (sender, args) {
	              console.warn("Unable load folder principals permissions:");
	              console.error(sender);
	              console.error(args);
	              reject(args);
	            }
	          );
	        },
	        function (sender, args) {
	          console.warn("Unable load folder permissions:");
	          console.error(sender);
	          console.error(args);
	          reject(args);
	        }
	      );
	    });
	  }

	  async function getFolderItemByPath(relFolderPath) {
	    return new Promise((resolve, reject) => {
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();
	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      const camlQuery = SP.CamlQuery.createAllItemsQuery();

	      const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);

	      var camlq =
	        '<View Scope="RecursiveAll"><Query><Where><And><Eq>' +
	        '<FieldRef Name="FSObjType"/><Value Type="int">1</Value>' +
	        "</Eq><Eq>" +
	        '<FieldRef Name="FileRef"/><Value Type="Text">' +
	        serverRelFolderPath +
	        "</Value>" +
	        "</Eq></And></Where></Query><RowLimit>1</RowLimit></View>";

	      camlQuery.set_viewXml(camlq);

	      const allFolders = oList.getItems(camlQuery);

	      async function onFindItemSucceeded() {
	        const foundObjects = [];
	        var listItemEnumerator = allFolders.getEnumerator();
	        while (listItemEnumerator.moveNext()) {
	          // Should be only one item
	          const oListItem = listItemEnumerator.get_current();
	          foundObjects.push(oListItem);
	        }

	        if (!foundObjects) {
	          console.warn("folder not found");
	          resolve(foundObjects);
	        }

	        if (foundObjects.length > 1) {
	          console.warn("Multiple folders found!");
	          resolve(foundObjects);
	        }
	        const oListItem = foundObjects[0];
	        resolve(oListItem);
	      }

	      function onFindItemFailed(sender, args) {
	        console.warn("Unable load list folder contents:");
	        console.error(sender);
	        console.error(args);
	        reject(args);
	      }
	      const data = {
	        allFolders,
	        resolve,
	        reject,
	      };
	      currCtx.load(allFolders);

	      currCtx.executeQueryAsync(
	        Function.createDelegate(data, onFindItemSucceeded),
	        Function.createDelegate(data, onFindItemFailed)
	      );
	    });
	  }

	  /*****************************************************************
	                            Document Libraries Folders
	    ******************************************************************/

	  /*****************************************************************
	                        Folder Creation          
	    ******************************************************************/

	  function upsertListFolderByPath(folderPath, callback) {
	    var folderArr = folderPath.split("/");
	    var idx = 0;

	    var upsertListFolderInner = function (parentPath, folderArr, idx, success) {
	      var folderName = folderArr[idx];
	      idx++;
	      var curPath = folderArr.slice(0, idx).join("/");
	      ensureListFolder(
	        curPath,
	        function (iFolder) {
	          if (idx >= folderArr.length) {
	            //We've reached the innermost folder and found it exists
	            success(iFolder.get_id());
	          } else {
	            upsertListFolderInner(curPath, folderArr, idx, success);
	          }
	        },
	        function () {
	          self.createListFolder(
	            folderName,
	            function (folderId) {
	              if (idx >= folderArr.length) {
	                //We've reached the innermost folder and found it exists
	                success(folderId);
	              } else {
	                upsertListFolderInner(curPath, folderArr, idx, success);
	              }
	            },
	            parentPath
	          );
	        }
	      );
	    };
	    upsertListFolderInner("", folderArr, idx, callback);
	  }

	  /**
	   * CreateListFolder
	   * Creates a folder at the specified path
	   * @param {String} folderName
	   * @param {Function} callback
	   * @param {String} path
	   */
	  self.createListFolder = function (folderName, callback, path) {
	    path = path === undefined ? "" : path;

	    // Used for lists, duh
	    const currCtx = new SP.ClientContext.get_current();
	    const web = currCtx.get_web();
	    const oList = web.get_lists().getByTitle(self.config.def.title);
	    let folderUrl = "";
	    const itemCreateInfo = new SP.ListItemCreationInformation();
	    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
	    itemCreateInfo.set_leafName(folderName);
	    if (path) {
	      folderUrl =
	        sal.globalConfig.siteUrl +
	        "/Lists/" +
	        self.config.def.name +
	        "/" +
	        path;
	      itemCreateInfo.set_folderUrl(folderUrl);
	    }

	    const newItem = oList.addItem(itemCreateInfo);
	    newItem.set_item("Title", folderName);

	    newItem.update();

	    function onCreateFolderSucceeded(sender, args) {
	      callback(this.newItem.get_id());
	    }

	    function onCreateFolderFailed(sender, args) {
	      alert(
	        "Request on list " +
	          self.config.def.name +
	          " failed, producing the following error: \n" +
	          args.get_message() +
	          "\nStackTrack: \n" +
	          args.get_stackTrace()
	      );
	    }

	    const data = {
	      folderName: folderName,
	      callback: callback,
	      newItem: newItem,
	    };

	    currCtx.load(newItem);
	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onCreateFolderSucceeded),
	      Function.createDelegate(data, onCreateFolderFailed)
	    );
	  };

	  function ensureListFolder(path, onExists, onNonExists) {
	    var folderUrl =
	      sal.globalConfig.siteUrl + "/Lists/" + self.config.def.name + "/" + path;

	    var ctx = SP.ClientContext.get_current();

	    // Could also call getFileByServerRelativeUrl() here. Doesn't matter.
	    // The way this works is identical for files and folders.
	    var folder = ctx.get_web().getFolderByServerRelativeUrl(folderUrl);
	    folder.get_listItemAllFields();
	    var data = {
	      folder: folder,
	      path: path,
	      onExists: onExists,
	      onNonExists: onNonExists,
	    };
	    ctx.load(folder, "Exists", "Name");

	    function onQueryFolderSucceeded() {
	      if (folder.get_exists()) {
	        // Folder exists and isn't hidden from us. Print its name.
	        console.log(
	          "Folder " + folder.get_name() + " exists in " + self.config.def.name
	        );
	        var currCtx = new SP.ClientContext.get_current();

	        var folderItem = folder.get_listItemAllFields();
	        function onQueryFolderItemSuccess() {
	          onExists(folderItem);
	        }
	        function onQueryFolderItemFailure(sender, args) {
	          console.error("Failed to find folder at " + path, args);
	        }
	        data = { folderItem: folderItem, path: path, onExists: onExists };
	        currCtx.load(folderItem);
	        currCtx.executeQueryAsync(
	          Function.createDelegate(data, onQueryFolderItemSuccess),
	          Function.createDelegate(data, onQueryFolderItemFailure)
	        );
	      } else {
	        console.warn("Folder exists but is hidden (security-trimmed) for us.");
	      }
	    }

	    function onQueryFolderFailed(sender, args) {
	      if (args.get_errorTypeName() === "System.IO.FileNotFoundException") {
	        // Folder doesn't exist at all.
	        console.log(
	          "SAL.SPList.ensureListFolder: \
          Folder " +
	            path +
	            " does not exist in " +
	            self.config.def.name
	        );
	        onNonExists();
	      } else {
	        // An unexpected error occurred.
	        console.error("Error: " + args.get_message());
	      }
	    }
	    ctx.executeQueryAsync(
	      Function.createDelegate(data, onQueryFolderSucceeded),
	      Function.createDelegate(data, onQueryFolderFailed)
	    );
	  }

	  function setFolderPermissionsAsync(folderPath, valuePairs, reset) {
	    return new Promise((resolve, reject) => {
	      setFolderPermissions(folderPath, valuePairs, resolve, reset);
	    });
	  }

	  function setFolderPermissions(relFolderPath, valuePairs, callback, reset) {
	    reset = reset === undefined ? false : reset;
	    // TODO: Validate that the users exist
	    var users = [];
	    var resolvedGroups = [];

	    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);

	    const currCtx = new SP.ClientContext.get_current();
	    const web = currCtx.get_web();
	    const folder = web.getFolderByServerRelativeUrl(serverRelFolderPath);

	    valuePairs.forEach(function (vp) {
	      var resolvedGroup = getSPSiteGroupByName(vp[0]);
	      if (resolvedGroup?.oGroup) {
	        resolvedGroups.push([resolvedGroup.oGroup, vp[1]]);
	      } else {
	        //This doesn't appear to be a group, let's see if we can find a user
	        users.push([currCtx.get_web().ensureUser(vp[0]), vp[1]]);
	      }
	    });

	    function onFindFolderSuccess() {
	      var currCtx = new SP.ClientContext.get_current();
	      var web = currCtx.get_web();

	      var folderItem = this.folder.get_listItemAllFields();
	      if (reset) {
	        folderItem.resetRoleInheritance();
	        folderItem.breakRoleInheritance(false, false);
	        folderItem
	          .get_roleAssignments()
	          .getByPrincipal(sal.globalConfig.currentUser)
	          .deleteObject();
	      } else {
	        folderItem.breakRoleInheritance(false, false);
	      }

	      this.resolvedGroups.forEach(function (groupPairs) {
	        var roleDefBindingColl =
	          SP.RoleDefinitionBindingCollection.newObject(currCtx);
	        roleDefBindingColl.add(
	          web.get_roleDefinitions().getByName(groupPairs[1])
	        );
	        folderItem.get_roleAssignments().add(groupPairs[0], roleDefBindingColl);
	      });

	      this.users.forEach(function (userPairs) {
	        var roleDefBindingColl =
	          SP.RoleDefinitionBindingCollection.newObject(currCtx);
	        roleDefBindingColl.add(
	          web.get_roleDefinitions().getByName(userPairs[1])
	        );
	        folderItem.get_roleAssignments().add(userPairs[0], roleDefBindingColl);
	      });

	      var data = { folderItem: folderItem, callback: callback };

	      function onSetFolderPermissionsSuccess() {
	        console.log("Successfully set permissions");
	        this.callback(folderItem);
	      }

	      function onSetFolderPermissionsFailure(sender, args) {
	        console.error(
	          "Failed to update permissions on item: " +
	            this.folderItem.get_lookupValue() +
	            args.get_message() +
	            "\n" +
	            args.get_stackTrace(),
	          false
	        );
	      }

	      currCtx.load(folderItem);
	      currCtx.executeQueryAsync(
	        Function.createDelegate(data, onSetFolderPermissionsSuccess),
	        Function.createDelegate(data, onSetFolderPermissionsFailure)
	      );
	    }

	    function onFindFolderFailure(sender, args) {
	      console.error(
	        "Something went wrong setting perms on library folder",
	        args
	      );
	    }

	    var data = {
	      folder: folder,
	      users: users,
	      callback: callback,
	      resolvedGroups: resolvedGroups,
	      valuePairs: valuePairs,
	      reset: reset,
	    };

	    users.map(function (user) {
	      currCtx.load(user[0]);
	    });
	    currCtx.load(folder);
	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, onFindFolderSuccess),
	      Function.createDelegate(data, onFindFolderFailure)
	    );
	  }

	  /*****************************************************************
	                                  
	  ******************************************************************/

	  function showModal(formName, title, args, callback) {
	    var id = "";
	    if (args.id) {
	      id = args.id;
	    }
	    const options = SP.UI.$create_DialogOptions();

	    var listPath = self.config.def.isLib
	      ? "/" + self.config.def.name + "/"
	      : "/Lists/" + self.config.def.name + "/";

	    var rootFolder = "";

	    if (args.rootFolder) {
	      rootFolder = sal.globalConfig.siteUrl + listPath + args.rootFolder;
	    }

	    // WARNING: this looks similar to listPath but is different
	    var formsPath = self.config.def.isLib
	      ? "/" + self.config.def.name + "/forms/"
	      : "/Lists/" + self.config.def.name + "/";

	    Object.assign(options, {
	      title: title,
	      dialogReturnValueCallback: callback,
	      args: JSON.stringify(args),
	      height: 800,
	      url:
	        sal.globalConfig.siteUrl +
	        formsPath +
	        formName +
	        "?ID=" +
	        id +
	        "&Source=" +
	        location.pathname +
	        "&RootFolder=" +
	        rootFolder,
	    });
	    SP.UI.ModalDialog.showModalDialog(options);

	    // SP.SOD.execute(
	    //   "sp.ui.dialog.js",
	    //   "SP.UI.ModalDialog.showModalDialog",
	    //   options
	    // );
	  }

	  function showCheckinModal(fileRef, callback) {
	    var options = SP.UI.$create_DialogOptions();
	    options.title = "Check in Document";
	    options.height = "600";
	    options.dialogReturnValueCallback = callback;

	    options.url =
	      sal.globalConfig.siteUrl +
	      "/_layouts/checkin.aspx?List={" +
	      self.config.guid +
	      "}&FileName=" +
	      fileRef;

	    SP.UI.ModalDialog.showModalDialog(options);
	  }

	  function checkinWithComment(fileRef, comment) {
	    const url = `/web/GetFileByServerRelativeUrl('${fileRef}')/CheckIn(comment='${comment}',checkintype=0)`;
	    return fetchSharePointData(url, "POST");
	  }

	  function showVersionHistoryModal(itemId) {
	    return new Promise((resolve) => {
	      var options = SP.UI.$create_DialogOptions();
	      options.title = "Version History";
	      options.height = "600";
	      options.dialogReturnValueCallback = resolve;

	      options.url = getVersionHistoryUrl(itemId);

	      SP.UI.ModalDialog.showModalDialog(options);
	    });
	  }

	  function getVersionHistoryUrl(itemId) {
	    return (
	      sal.globalConfig.siteUrl +
	      "/_layouts/15/versions.aspx?List={" +
	      self.config.guid +
	      "}&ID=" +
	      itemId
	    );
	  }

	  function uploadNewDocumentAsync(folderPath, title, args) {
	    return new Promise((resolve, reject) => {
	      const currCtx = new SP.ClientContext.get_current();
	      const web = currCtx.get_web();
	      const oList = web.get_lists().getByTitle(self.config.def.title);

	      currCtx.load(oList);
	      currCtx.executeQueryAsync(
	        function () {
	          //folder = folder != '/' ? folder : '';

	          var siteString =
	            sal.globalConfig.siteUrl == "/" ? "" : sal.globalConfig.siteUrl;

	          const options = SP.UI.$create_DialogOptions();
	          Object.assign(options, {
	            title: title,
	            dialogReturnValueCallback: resolve,
	            args: JSON.stringify(args),
	            url:
	              siteString +
	              "/_layouts/Upload.aspx?List=" +
	              oList.get_id().toString() +
	              "&RootFolder=" +
	              siteString +
	              "/" +
	              self.config.def.name +
	              "/" +
	              encodeURI(folderPath) +
	              "&Source=" +
	              location.pathname +
	              "&args=" +
	              encodeURI(JSON.stringify(args)),
	          });
	          //console.log("Options url: " + options.url);
	          SP.UI.ModalDialog.showModalDialog(options);
	          // SP.SOD.execute(
	          //   "sp.ui.dialog.js",
	          //   "SP.UI.ModalDialog.showModalDialog",
	          //   options
	          // );
	        },
	        function (sender, args) {
	          console.error("Error showing file modal: ");
	          console.error(sender);
	          console.error(args);
	        }
	      );
	    });
	  }

	  const UPLOADCHUNKSIZE = 10485760; // PnPJs

	  async function uploadFileRestChunking(
	    file,
	    relFolderPath,
	    fileName,
	    progress
	  ) {
	    const chunkSize = UPLOADCHUNKSIZE;
	    const fileSize = file.size;

	    const totalBlocks =
	      parseInt((fileSize / chunkSize).toString(), 10) +
	      (fileSize % chunkSize === 0 ? 1 : 0);

	    const fileRef = relFolderPath + "/" + fileName;

	    const jobGuid = getGUID();
	    // const jobGuid = crypto.randomUUID
	    //   ? crypto.randomUUID()
	    //   : "74493426-fb10-4e47-bc82-120954b81a60";

	    let currentPointer;
	    progress({ currentBlock: 0, totalBlocks });
	    currentPointer = await startUpload(
	      jobGuid,
	      file.slice(0, chunkSize),
	      fileRef,
	      relFolderPath
	    );

	    for (let i = 2; i < totalBlocks; i++) {
	      progress({ currentBlock: i, totalBlocks });
	      currentPointer = await continueUpload(
	        jobGuid,
	        file.slice(currentPointer, currentPointer + chunkSize),
	        currentPointer,
	        fileRef
	      );
	    }

	    progress({ currentBlock: totalBlocks - 1, totalBlocks });
	    const result = await finishUpload(
	      jobGuid,
	      file.slice(currentPointer),
	      currentPointer,
	      fileRef
	    );

	    progress({ currentBlock: totalBlocks, totalBlocks });

	    return result;
	  }

	  async function startUpload(uploadId, chunk, fileRef, relFolderPath) {
	    const url =
	      `/web/getFolderByServerRelativeUrl(@folder)/files/getByUrlOrAddStub(@file)/StartUpload(guid'${uploadId}')?` +
	      `&@folder='${relFolderPath}'&@file='${fileRef}'`;

	    const headers = {
	      "Content-Type": "application/octet-stream",
	    };
	    const opts = {
	      body: chunk,
	    };

	    const result = await fetchSharePointData(url, "POST", headers, opts);
	    if (!result) {
	      console.error("Error starting upload!");
	      return;
	    }

	    return parseFloat(result.d.StartUpload);
	  }

	  async function continueUpload(uploadId, chunk, fileOffset, fileRef) {
	    const url =
	      `/web/getFileByServerRelativeUrl(@file)/ContinueUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})?` +
	      `&@file='${fileRef}'`;

	    const headers = {
	      "Content-Type": "application/octet-stream",
	    };
	    const opts = {
	      body: chunk,
	    };

	    const result = await fetchSharePointData(url, "POST", headers, opts);

	    if (!result) {
	      console.error("Error starting upload!");
	      return;
	    }

	    return parseFloat(result.d.ContinueUpload);
	  }

	  async function finishUpload(uploadId, chunk, fileOffset, fileRef) {
	    const url =
	      `/web/getFileByServerRelativeUrl(@file)/FinishUpload(uploadId=guid'${uploadId}',fileOffset=${fileOffset})?` +
	      `&@file='${fileRef}'`;

	    const headers = {
	      "Content-Type": "application/octet-stream",
	    };
	    const opts = {
	      body: chunk,
	    };

	    const result = await fetchSharePointData(url, "POST", headers, opts);

	    if (!result) {
	      console.error("Error starting upload!");
	      return;
	    }

	    return result;
	  }

	  async function uploadFileRest(file, relFolderPath, fileName) {
	    return await fetchSharePointData(
	      `/web/GetFolderByServerRelativeUrl('${relFolderPath}')/Files/add(url='${fileName}',overwrite=true)`,
	      "POST",
	      {
	        "Content-Type": "application/json;odata=nometadata",
	      },
	      {
	        body: file,
	      }
	    );
	  }

	  async function uploadFileToFolderAndUpdateMetadata(
	    file,
	    fileName,
	    relFolderPath,
	    payload,
	    progress = null
	  ) {
	    if (!progress) {
	      progress = () => {};
	    }

	    const serverRelFolderPath = getServerRelativeFolderPath(relFolderPath);
	    let result = null;
	    if (file.size > UPLOADCHUNKSIZE) {
	      const job = () =>
	        uploadFileRestChunking(file, serverRelFolderPath, fileName, progress);
	      result = await uploadQueue.addJob(job);
	    } else {
	      progress({ currentBlock: 0, totalBlocks: 1 });
	      result = await uploadFileRest(file, serverRelFolderPath, fileName);
	      progress({ currentBlock: 1, totalBlocks: 1 });
	    }

	    await updateUploadedFileMetadata(result.d, payload);

	    // check in
	    await checkinWithComment(serverRelFolderPath + "/" + fileName, "");

	    let itemUri = result.d.ListItemAllFields.__deferred.uri + "?$select=ID";

	    const listItem = await fetchSharePointData(itemUri);
	    return listItem.d.ID;
	  }

	  async function updateUploadedFileMetadata(fileResult, payload) {
	    var result = await fetchSharePointData(
	      fileResult.ListItemAllFields.__deferred.uri,
	      "POST",
	      {
	        "X-HTTP-Method": "MERGE",
	        "If-Match": "*",
	      },
	      {
	        credentials: "same-origin",
	        body: JSON.stringify(payload),
	      }
	    );

	    return result;
	  }

	  function copyFiles(sourceFolderPath, destFolderPath, callback, onError) {
	    const sourcePath = getServerRelativeFolderPath(sourceFolderPath);
	    const destPath = getServerRelativeFolderPath(destFolderPath);
	    var context = new SP.ClientContext.get_current();
	    var web = context.get_web();
	    var folderSrc = web.getFolderByServerRelativeUrl(sourcePath);
	    context.load(folderSrc, "Files");
	    context.executeQueryAsync(
	      function () {
	        var files = folderSrc.get_files();
	        var e = files.getEnumerator();
	        var dest = [];
	        while (e.moveNext()) {
	          var file = e.get_current();
	          var destLibUrl = destPath + "/" + file.get_name();
	          dest.push(destLibUrl); //delete this when we're happy we got the file paths right
	          file.copyTo(destLibUrl, true);
	        }
	        console.log(dest); //delete this when we're happy we got the file paths right
	        context.executeQueryAsync(
	          function () {
	            console.log("Files moved successfully!");
	            callback();
	          },
	          function (sender, args) {
	            console.log("error: ") + args.get_message();
	          }
	        );
	      },
	      function (sender, args) {
	        console.error("Unable to copy files: ", args.get_message());
	        console.error(sender);
	        console.error(args);
	        reject(args);
	      }
	    );
	  }

	  function copyFilesAsync(sourceFolder, destFolder) {
	    // TODO: this should stay as a static utility instead of list specific
	    return new Promise((resolve, reject) => {
	      copyFiles(sourceFolder, destFolder, resolve);
	    });
	  }

	  const publicMembers = {
	    findByIdAsync,
	    getById,
	    findByColumnValueAsync,
	    loadNextPage,
	    getListItemsAsync,
	    createListItemAsync,
	    updateListItemAsync,
	    deleteListItemAsync,
	    setItemPermissionsAsync,
	    getItemPermissionsAsync,
	    getListPermissions,
	    setListPermissionsAsync,
	    getFolderContentsAsync,
	    upsertFolderPathAsync,
	    getServerRelativeFolderPath,
	    setFolderReadonlyAsync,
	    setFolderPermissionsAsync,
	    ensureFolderPermissionsAsync,
	    uploadFileToFolderAndUpdateMetadata,
	    uploadNewDocumentAsync,
	    copyFilesAsync,
	    showModal,
	    showCheckinModal,
	    showVersionHistoryModal,
	    getVersionHistoryUrl,
	  };

	  return publicMembers;
	}

	let requestDigest;
	async function fetchSharePointData(
	  uri,
	  method = "GET",
	  headers = {},
	  opts = {}
	) {
	  const siteEndpoint = uri.startsWith("http")
	    ? uri
	    : window.context.pageContext.legacyPageContext.webServerRelativeUrl +
	      "/_api" +
	      uri;

	  const response = await fetch(siteEndpoint, {
	    method,
	    headers: {
	      Accept: "application/json; odata=verbose",
	      "Content-Type": "application/json;odata=nometadata",
	      "X-RequestDigest": requestDigest,
	      ...headers,
	    },
	    credentials: "same-origin",
	    ...opts,
	  });

	  if (!response.ok) {
	    if (response.status == 404) {
	      return;
	    }
	    console.error(response);
	  }
	  try {
	    const result = await response.json();
	    return result;
	  } catch (e) {
	    return;
	  }
	}

	async function getRequestDigest() {
	  const response = await fetch(
	    //window.context.pageContext.legacyPageContext.webServerRelativeUrl +
	    "../_api/contextinfo",
	    {
	      method: "POST",
	      headers: {
	        Accept: "application/json; odata=verbose",
	      },
	    }
	  );

	  if (!response.ok) {
	    console.error("Cannot refresh token", response);
	    return;
	  }
	  const result = await response.json();
	  return result.d.GetContextWebInformation;
	}

	async function refreshDigestValue() {
	  const result = await getRequestDigest();

	  if (!result) return;

	  requestDigest = result.FormDigestValue;

	  // document.getElementById("__REQUESTDIGEST").value = result.FormDigestValue;

	  // Refresh before timeout
	  window.setTimeout(refreshDigestValue, result.FormDigestTimeoutSeconds * 900);
	}
	refreshDigestValue();

	window.fetchSharePointData = fetchSharePointData;

	/**
	 * Gets a random GUID value
	 *
	 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	 */
	/* eslint-disable no-bitwise */
	function getGUID() {
	  if (crypto.randomUUID) return crypto.randomUUID();

	  let d = Date.now();
	  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	    const r = (d + Math.random() * 16) % 16 | 0;
	    d = Math.floor(d / 16);
	    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	  });
	}

	class JobProcessor {
	  constructor(maxConcurrency) {
	    this.maxConcurrency = maxConcurrency;
	    this.runningJobs = 0;
	    this.queue = [];
	  }

	  addJob(asyncFunction) {
	    return new Promise((resolve, reject) => {
	      const job = async () => {
	        try {
	          const result = await asyncFunction();
	          resolve(result);
	        } catch (error) {
	          reject(error);
	        } finally {
	          this.runningJobs--;
	          this.processQueue();
	        }
	      };

	      this.queue.push(job);
	      this.processQueue();
	    });
	  }

	  processQueue() {
	    while (this.runningJobs < this.maxConcurrency && this.queue.length > 0) {
	      const job = this.queue.shift();
	      this.runningJobs++;
	      job();
	    }
	  }
	}

	const uploadQueue = new JobProcessor(5);

	let People$1 = class People {
	  constructor({
	    ID,
	    Title,
	    LoginName = null,
	    IsGroup = null,
	    IsEnsured = false,
	  }) {
	    this.ID = ID;
	    this.Title = Title;
	    this.LookupValue = Title;
	    this.LoginName = LoginName != "" ? LoginName : null;
	    this.IsGroup = IsGroup;
	    // Has the user data been fetched? Used for binding handlers.
	    this.IsEnsured = IsEnsured;
	  }

	  ID = null;
	  Title = null;
	  LoginName = null;
	  LookupValue = null;

	  Initials = () => {
	    if (!this.Title) return "";

	    return this.Title.split(" ")
	      .slice(0, 2)
	      .map((name) => name[0])
	      .join("");
	  };

	  getKey = () => this.LoginName ?? this.Title;

	  static Create = function (props) {
	    if (!props || (!props.ID && !(props.Title || props.LookupValue)))
	      return null;
	    return new People({
	      ...props,
	      Title: props.Title ?? props.LookupValue,
	    });
	  };
	};

	class SitePage extends Entity {
	  constructor(params) {
	    super(params);
	  }

	  static Views = {
	    All: ["ID", "Title", "Created", "Author", "Modified", "Editor"],
	  };

	  static ListDef = {
	    name: "SitePages",
	    title: "Site Pages",
	  };
	}

	class PeopleModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);

	    this.searchTerm.subscribe(this.onSearch);
	  }

	  ValueFunc = knockoutLatestExports.pureComputed({
	    read: () => {
	      if (!this.Value()) return;
	      const userOpts = knockoutLatestExports.unwrap(this.userOpts);
	      return userOpts.find((opt) => opt.ID == this.Value().ID);
	    },
	    write: (opt) => {
	      const userOpts = knockoutLatestExports.unwrap(this.userOpts);
	      if (!userOpts) return;
	      this.Value(opt);
	    },
	  });

	  ShowUserSelect = knockoutLatestExports.pureComputed(() => {
	    // We don't care to unwrap this, since we want to know if it's set or an observable.
	    const groupName = this.spGroupName;
	    if (!groupName) return false;
	    const options = knockoutLatestExports.unwrap(this.userOpts);
	    return options.length;
	  });

	  focused = knockoutLatestExports.observable();

	  focusin = () => this.focused(true);
	  focusout = () => this.focused(false);

	  keydown = (self, e) => {
	    switch (e.code) {
	      case "Escape":
	        // tab
	        this.focusout();
	        break;
	      case "ArrowDown":
	        // down arrow
	        this.updateActiveFilteredItem(1);
	        break;
	      case "ArrowUp":
	        // up arrow
	        this.updateActiveFilteredItem(-1);
	        break;
	      case "Enter":
	        // Enter
	        this.selectActiveFilteredItem();
	        break;
	      default:
	        // console.log(e.keyCode);
	        return true;
	    }
	    return true;
	  };

	  updateActiveFilteredItem = (keyDirection) => {
	    const opts = knockoutLatestExports.unwrap(this.userOpts);

	    if (!opts.length) return;

	    // find the current active index
	    const activeItemIndex = opts.findIndex((opt) => opt.active());

	    let nextIndex =
	      (activeItemIndex + keyDirection + opts.length) % opts.length;

	    if (activeItemIndex >= 0) {
	      opts[activeItemIndex]?.active(false);
	    } else if (keyDirection <= 0) {
	      nextIndex = opts.length - 1;
	    }

	    opts[nextIndex]?.active(true);
	  };

	  selectActiveFilteredItem = () => {
	    const opts = knockoutLatestExports.unwrap(this.userOpts);

	    if (!opts.length) return;

	    // find the current active index
	    const activeItemIndex = opts.findIndex((opt) => opt.active());

	    if (activeItemIndex >= 0) {
	      opts[activeItemIndex]?.active(false);
	    }

	    this.selectUser(opts[activeItemIndex]);

	    // now set the next item to true
	    opts[(activeItemIndex + 1) % opts.length]?.active(true);
	  };

	  searchTerm = knockoutLatestExports.observable();
	  searchResults = knockoutLatestExports.observableArray();

	  stagedUsers = knockoutLatestExports.observableArray();

	  selectedUsers = knockoutLatestExports.pureComputed(() => {
	    const staged = knockoutLatestExports.unwrap(this.stagedUsers);

	    const value = knockoutLatestExports.unwrap(this.Value);

	    const valueArr = [];
	    if (value) {
	      if (knockoutLatestExports.isObservableArray(this.Value)) {
	        valueArr.push(...value);
	      } else {
	        valueArr.push(value);
	      }
	    }

	    return [...staged, ...valueArr];
	  });

	  userOpts = knockoutLatestExports.pureComputed(() => {
	    const selectedPrincipals = this.selectedUsers().map(
	      (user) => user.LoginName
	    );
	    return this.searchResults().filter(
	      (result) =>
	        !selectedPrincipals.includes(result.LoginName.toLocaleLowerCase())
	    );
	  });

	  onSearch = async (searchTerm) => {
	    if (!searchTerm) {
	      this.searchResults.removeAll();
	      return;
	    }
	    // Only search for terms that are 3 letters or longer
	    if (searchTerm.length < 3) return;

	    const encodedSearchTerm = encodeURIComponent(searchTerm);
	    const result = await window.context.aadHttpClientFactory
	      .getClient("https://graph.microsoft.com")
	      .then((client) => {
	        // Search for the users with givenName, surname, or displayName equal to the searchFor value
	        return client.get(
	          `https://graph.microsoft.com/v1.0/users?` +
	            `$select=givenName,surname,displayName,mail,userPrincipalName&` +
	            `$filter=startsWith(givenName, '${encodedSearchTerm}') or ` +
	            `startsWith(surname, '${encodedSearchTerm}') or ` +
	            `startsWith(displayName, '${encodedSearchTerm}')`,
	          client.constructor.configurations.v1
	        );
	      })
	      .then((response) => {
	        if (knockoutLatestExports.unwrap(searchTerm) != searchTerm) return;
	        return response.json();
	      });

	    if (knockoutLatestExports.unwrap(searchTerm) != searchTerm) return;

	    if (result?.value) {
	      const mappedResults = result.value.map((user) => {
	        return {
	          ...new People$1({
	            Title: user.displayName,
	            LoginName:
	              "i:0#.f|membership|" + user.userPrincipalName.toLocaleLowerCase(),
	          }),
	          active: knockoutLatestExports.observable(),
	        };
	      });
	      this.searchResults(mappedResults);
	    }
	  };

	  selectUser = async (user) => {
	    // 1. Stage
	    if (user.active()) user.active(false);

	    const stagedUser = {
	      resolutionStatus: knockoutLatestExports.observable("searching"),
	      resolutionMessage: knockoutLatestExports.observable(),
	      ...user,
	    };

	    this.stagedUsers.push(stagedUser);

	    // 2. Ensure
	    const result = await ensureUserByKeyAsync(user.LoginName);

	    if (!result) {
	      stagedUser.resolutionStatus("fail");
	      stagedUser.resolutionMessage("Could not ensure user!");
	      return;
	    }

	    // 3. Store
	    this.stagedUsers.remove(stagedUser);

	    const people = new People$1(result);

	    if (knockoutLatestExports.isObservableArray(this.Value)) {
	      this.Value.push(people);
	    } else {
	      this.Value(people);
	    }
	  };

	  storePeople = (people) => {};

	  removeUser = (user) => {
	    if (this.stagedUsers.remove(user).length) return;

	    if (knockoutLatestExports.isObservableArray(this.Value)) {
	      this.Value.remove(user);
	      return;
	    }

	    if (this.Value() == user) {
	      this.Value(null);
	    }
	  };

	  static viewTemplate = viewTemplate$1;
	  static editTemplate = editTemplate$4;

	  static view = "people-view";
	  static edit = "people-edit";
	  static new = "people-edit";
	}

	registerFieldComponents(PeopleModule);

	const editTemplate$3 = html$1`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
  </label>
  <search-select
    class="form-select"
    data-bind="searchSelect: { 
      options: Options, 
      selectedOptions: Value,
      optionsText: optionsText,
      onSearchInput: onSearchInput
    }"
  >
  </search-select>
  <div class="fw-light flex justify-between">
    <p class="fst-italic"></p>
    <button type="button" class="btn btn-link h-1" data-bind="click: clear">
      CLEAR
    </button>
  </div>
  <!-- ko if: instructions -->
  <div
    class="fw-lighter fst-italic text-secondary"
    data-bind="html: instructions"
  ></div>
  <!-- /ko -->
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;

	class SearchSelectModule extends BaseFieldModule {
	  constructor(field) {
	    super(field);
	    this.Options = field.Options;
	    this.Value = field.Value;
	    this.optionsText =
	      field.optionsText ??
	      ((val) => {
	        return val;
	      });
	    this.multiple = field.multiple;
	    this.OptionsCaption = field.OptionsCaption ?? "Select...";
	    this.onSearchInput = field.onSearchInput;
	  }

	  GetSelectedOptions = knockoutLatestExports.pureComputed(() => {
	    if (this.multiple) return this.Value();

	    return this.Value() ? [this.Value()] : [];
	  });

	  InputGroupFocused = knockoutLatestExports.observable();
	  setFocus = () => this.InputGroupFocused(true);

	  FilterText = knockoutLatestExports.observable();
	  FilteredOptions = knockoutLatestExports.pureComputed(() =>
	    this.Options().filter((option) => {
	      if (this.GetSelectedOptions().indexOf(option) >= 0) return false;
	      if (this.FilterText())
	        return this.optionsText(option)
	          .toLowerCase()
	          .includes(this.FilterText().toLowerCase());
	      return true;
	    })
	  );

	  addSelection = (option, e) => {
	    console.log("selected", option);
	    if (e.target.nextElementSibling) {
	      //e.stopPropagation();
	      e.target.nextElementSibling.focus();
	    }
	    if (this.multiple) {
	      this.Value.push(option);
	    } else {
	      this.Value(option);
	    }
	  };

	  removeSelection = (option) =>
	    this.multiple ? this.Value.remove(option) : this.Value(null);

	  setInputGroupFocus = () => {
	    this.InputGroupFocused(true);
	    clearTimeout(this.focusOutTimeout);
	  };

	  removeInputGroupFocus = (data, e) => {
	    this.focusOutTimeout = window.setTimeout(() => {
	      this.InputGroupFocused(false);
	    }, 0);
	  };

	  static editTemplate = editTemplate$3;

	  static view = "search-select-view";
	  static edit = "search-select-edit";
	  static new = "search-select-new";
	}

	registerFieldComponents(SearchSelectModule);

	const editTemplate$2 = html$1`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <!-- ko if: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      multiple="true"
      data-bind="options: Options, 
        optionsCaption: 'Select...', 
        optionsText: optionsText,
        selectedOptions: Value,
        class: ValidationClass"
    ></select>
    <div class="fst-italic fw-light">Hold ctrl to select multiple.</div>
    <!-- /ko -->
    <!-- ko ifnot: multiple -->
    <select
      class="form-select"
      name=""
      id=""
      data-bind="options: Options, 
        optionsCaption: 'Select...', 
        optionsText: optionsText,
        value: Value,
        class: ValidationClass"
    ></select>
    <!-- /ko -->
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;

	class SelectModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  static editTemplate = editTemplate$2;

	  static view = "select-view";
	  static edit = "select-edit";
	  static new = "select-edit";
	}

	registerFieldComponents(SelectModule);

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** Used for built-in method references. */
	var objectProto$f = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$f.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$f.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$e.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
	}

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$d = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$d.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative(root, 'WeakMap');

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$c.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

	  return value === proto;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
	}

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty$9.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	/** Detect free variable `exports`. */
	var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

	/** Built-in value references. */
	var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    objectTag$4 = '[object Object]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$4 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
	typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
	typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
	typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
	typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
	typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
	typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
	typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] =
	typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] =
	typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] =
	typedArrayTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/** Detect free variable `exports`. */
	var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports$1 && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$8.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$6.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
	}

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/* Built-in method references that are verified to be native. */
	var Map$1 = getNative(root, 'Map');

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$1 || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/** `Object#toString` result references. */
	var objectTag$3 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$4 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	/* Built-in method references that are verified to be native. */
	var Promise$1 = getNative(root, 'Promise');

	/* Built-in method references that are verified to be native. */
	var Set$1 = getNative(root, 'Set');

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$4 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$3 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map$1),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set$1),
	    weakMapCtorString = toSource(WeakMap$1);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
	    (Map$1 && getTag(new Map$1) != mapTag$4) ||
	    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
	    (Set$1 && getTag(new Set$1) != setTag$4) ||
	    (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$3;
	        case mapCtorString: return mapTag$4;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$4;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$2:
	      return cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$2:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return cloneTypedArray(object, isDeep);

	    case mapTag$3:
	      return new Ctor;

	    case numberTag$2:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$2:
	      return cloneRegExp(object);

	    case setTag$3:
	      return new Ctor;

	    case symbolTag$2:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike(value) && getTag(value) == mapTag$2;
	}

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil && nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

	/** `Object#toString` result references. */
	var setTag$2 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike(value) && getTag(value) == setTag$2;
	}

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
	cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
	cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
	cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
	cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG$1,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual$1(value, other) {
	  return baseIsEqual(value, other);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	var Scope = /* @__PURE__ */ ((Scope2) => (Scope2[Scope2.TYPE = 3] = "TYPE", Scope2[Scope2.LEVEL = 12] = "LEVEL", Scope2[Scope2.ATTRIBUTE = 13] = "ATTRIBUTE", Scope2[Scope2.BLOT = 14] = "BLOT", Scope2[Scope2.INLINE = 7] = "INLINE", Scope2[Scope2.BLOCK = 11] = "BLOCK", Scope2[Scope2.BLOCK_BLOT = 10] = "BLOCK_BLOT", Scope2[Scope2.INLINE_BLOT = 6] = "INLINE_BLOT", Scope2[Scope2.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", Scope2[Scope2.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", Scope2[Scope2.ANY = 15] = "ANY", Scope2))(Scope || {});
	class Attributor {
	  constructor(attrName, keyName, options = {}) {
	    this.attrName = attrName, this.keyName = keyName;
	    const attributeBit = Scope.TYPE & Scope.ATTRIBUTE;
	    this.scope = options.scope != null ? (
	      // Ignore type bits, force attribute bit
	      options.scope & Scope.LEVEL | attributeBit
	    ) : Scope.ATTRIBUTE, options.whitelist != null && (this.whitelist = options.whitelist);
	  }
	  static keys(node) {
	    return Array.from(node.attributes).map((item) => item.name);
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (node.setAttribute(this.keyName, value), !0) : !1;
	  }
	  canAdd(_node, value) {
	    return this.whitelist == null ? !0 : typeof value == "string" ? this.whitelist.indexOf(value.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(value) > -1;
	  }
	  remove(node) {
	    node.removeAttribute(this.keyName);
	  }
	  value(node) {
	    const value = node.getAttribute(this.keyName);
	    return this.canAdd(node, value) && value ? value : "";
	  }
	}
	class ParchmentError extends Error {
	  constructor(message) {
	    message = "[Parchment] " + message, super(message), this.message = message, this.name = this.constructor.name;
	  }
	}
	const _Registry = class _Registry {
	  constructor() {
	    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
	  }
	  static find(node, bubble = !1) {
	    if (node == null)
	      return null;
	    if (this.blots.has(node))
	      return this.blots.get(node) || null;
	    if (bubble) {
	      let parentNode = null;
	      try {
	        parentNode = node.parentNode;
	      } catch {
	        return null;
	      }
	      return this.find(parentNode, bubble);
	    }
	    return null;
	  }
	  create(scroll, input, value) {
	    const match2 = this.query(input);
	    if (match2 == null)
	      throw new ParchmentError(`Unable to create ${input} blot`);
	    const blotClass = match2, node = (
	      // @ts-expect-error Fix me later
	      input instanceof Node || input.nodeType === Node.TEXT_NODE ? input : blotClass.create(value)
	    ), blot = new blotClass(scroll, node, value);
	    return _Registry.blots.set(blot.domNode, blot), blot;
	  }
	  find(node, bubble = !1) {
	    return _Registry.find(node, bubble);
	  }
	  query(query, scope = Scope.ANY) {
	    let match2;
	    return typeof query == "string" ? match2 = this.types[query] || this.attributes[query] : query instanceof Text || query.nodeType === Node.TEXT_NODE ? match2 = this.types.text : typeof query == "number" ? query & Scope.LEVEL & Scope.BLOCK ? match2 = this.types.block : query & Scope.LEVEL & Scope.INLINE && (match2 = this.types.inline) : query instanceof Element && ((query.getAttribute("class") || "").split(/\s+/).some((name) => (match2 = this.classes[name], !!match2)), match2 = match2 || this.tags[query.tagName]), match2 == null ? null : "scope" in match2 && scope & Scope.LEVEL & match2.scope && scope & Scope.TYPE & match2.scope ? match2 : null;
	  }
	  register(...definitions) {
	    return definitions.map((definition) => {
	      const isBlot = "blotName" in definition, isAttr = "attrName" in definition;
	      if (!isBlot && !isAttr)
	        throw new ParchmentError("Invalid definition");
	      if (isBlot && definition.blotName === "abstract")
	        throw new ParchmentError("Cannot register abstract class");
	      const key = isBlot ? definition.blotName : isAttr ? definition.attrName : void 0;
	      return this.types[key] = definition, isAttr ? typeof definition.keyName == "string" && (this.attributes[definition.keyName] = definition) : isBlot && (definition.className && (this.classes[definition.className] = definition), definition.tagName && (Array.isArray(definition.tagName) ? definition.tagName = definition.tagName.map((tagName) => tagName.toUpperCase()) : definition.tagName = definition.tagName.toUpperCase(), (Array.isArray(definition.tagName) ? definition.tagName : [definition.tagName]).forEach((tag) => {
	        (this.tags[tag] == null || definition.className == null) && (this.tags[tag] = definition);
	      }))), definition;
	    });
	  }
	};
	_Registry.blots = /* @__PURE__ */ new WeakMap();
	let Registry = _Registry;
	function match(node, prefix) {
	  return (node.getAttribute("class") || "").split(/\s+/).filter((name) => name.indexOf(`${prefix}-`) === 0);
	}
	class ClassAttributor extends Attributor {
	  static keys(node) {
	    return (node.getAttribute("class") || "").split(/\s+/).map((name) => name.split("-").slice(0, -1).join("-"));
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (this.remove(node), node.classList.add(`${this.keyName}-${value}`), !0) : !1;
	  }
	  remove(node) {
	    match(node, this.keyName).forEach((name) => {
	      node.classList.remove(name);
	    }), node.classList.length === 0 && node.removeAttribute("class");
	  }
	  value(node) {
	    const value = (match(node, this.keyName)[0] || "").slice(this.keyName.length + 1);
	    return this.canAdd(node, value) ? value : "";
	  }
	}
	const ClassAttributor$1 = ClassAttributor;
	function camelize(name) {
	  const parts = name.split("-"), rest = parts.slice(1).map((part) => part[0].toUpperCase() + part.slice(1)).join("");
	  return parts[0] + rest;
	}
	class StyleAttributor extends Attributor {
	  static keys(node) {
	    return (node.getAttribute("style") || "").split(";").map((value) => value.split(":")[0].trim());
	  }
	  add(node, value) {
	    return this.canAdd(node, value) ? (node.style[camelize(this.keyName)] = value, !0) : !1;
	  }
	  remove(node) {
	    node.style[camelize(this.keyName)] = "", node.getAttribute("style") || node.removeAttribute("style");
	  }
	  value(node) {
	    const value = node.style[camelize(this.keyName)];
	    return this.canAdd(node, value) ? value : "";
	  }
	}
	const StyleAttributor$1 = StyleAttributor;
	class AttributorStore {
	  constructor(domNode) {
	    this.attributes = {}, this.domNode = domNode, this.build();
	  }
	  attribute(attribute, value) {
	    value ? attribute.add(this.domNode, value) && (attribute.value(this.domNode) != null ? this.attributes[attribute.attrName] = attribute : delete this.attributes[attribute.attrName]) : (attribute.remove(this.domNode), delete this.attributes[attribute.attrName]);
	  }
	  build() {
	    this.attributes = {};
	    const blot = Registry.find(this.domNode);
	    if (blot == null)
	      return;
	    const attributes = Attributor.keys(this.domNode), classes = ClassAttributor$1.keys(this.domNode), styles = StyleAttributor$1.keys(this.domNode);
	    attributes.concat(classes).concat(styles).forEach((name) => {
	      const attr = blot.scroll.query(name, Scope.ATTRIBUTE);
	      attr instanceof Attributor && (this.attributes[attr.attrName] = attr);
	    });
	  }
	  copy(target) {
	    Object.keys(this.attributes).forEach((key) => {
	      const value = this.attributes[key].value(this.domNode);
	      target.format(key, value);
	    });
	  }
	  move(target) {
	    this.copy(target), Object.keys(this.attributes).forEach((key) => {
	      this.attributes[key].remove(this.domNode);
	    }), this.attributes = {};
	  }
	  values() {
	    return Object.keys(this.attributes).reduce(
	      (attributes, name) => (attributes[name] = this.attributes[name].value(this.domNode), attributes),
	      {}
	    );
	  }
	}
	const AttributorStore$1 = AttributorStore, _ShadowBlot = class _ShadowBlot {
	  constructor(scroll, domNode) {
	    this.scroll = scroll, this.domNode = domNode, Registry.blots.set(domNode, this), this.prev = null, this.next = null;
	  }
	  static create(rawValue) {
	    if (this.tagName == null)
	      throw new ParchmentError("Blot definition missing tagName");
	    let node, value;
	    return Array.isArray(this.tagName) ? (typeof rawValue == "string" ? (value = rawValue.toUpperCase(), parseInt(value, 10).toString() === value && (value = parseInt(value, 10))) : typeof rawValue == "number" && (value = rawValue), typeof value == "number" ? node = document.createElement(this.tagName[value - 1]) : value && this.tagName.indexOf(value) > -1 ? node = document.createElement(value) : node = document.createElement(this.tagName[0])) : node = document.createElement(this.tagName), this.className && node.classList.add(this.className), node;
	  }
	  // Hack for accessing inherited static methods
	  get statics() {
	    return this.constructor;
	  }
	  attach() {
	  }
	  clone() {
	    const domNode = this.domNode.cloneNode(!1);
	    return this.scroll.create(domNode);
	  }
	  detach() {
	    this.parent != null && this.parent.removeChild(this), Registry.blots.delete(this.domNode);
	  }
	  deleteAt(index, length) {
	    this.isolate(index, length).remove();
	  }
	  formatAt(index, length, name, value) {
	    const blot = this.isolate(index, length);
	    if (this.scroll.query(name, Scope.BLOT) != null && value)
	      blot.wrap(name, value);
	    else if (this.scroll.query(name, Scope.ATTRIBUTE) != null) {
	      const parent = this.scroll.create(this.statics.scope);
	      blot.wrap(parent), parent.format(name, value);
	    }
	  }
	  insertAt(index, value, def) {
	    const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def), ref = this.split(index);
	    this.parent.insertBefore(blot, ref || void 0);
	  }
	  isolate(index, length) {
	    const target = this.split(index);
	    if (target == null)
	      throw new Error("Attempt to isolate at end");
	    return target.split(length), target;
	  }
	  length() {
	    return 1;
	  }
	  offset(root = this.parent) {
	    return this.parent == null || this === root ? 0 : this.parent.children.offset(this) + this.parent.offset(root);
	  }
	  optimize(_context) {
	    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
	  }
	  remove() {
	    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
	  }
	  replaceWith(name, value) {
	    const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
	    return this.parent != null && (this.parent.insertBefore(replacement, this.next || void 0), this.remove()), replacement;
	  }
	  split(index, _force) {
	    return index === 0 ? this : this.next;
	  }
	  update(_mutations, _context) {
	  }
	  wrap(name, value) {
	    const wrapper = typeof name == "string" ? this.scroll.create(name, value) : name;
	    if (this.parent != null && this.parent.insertBefore(wrapper, this.next || void 0), typeof wrapper.appendChild != "function")
	      throw new ParchmentError(`Cannot wrap ${name}`);
	    return wrapper.appendChild(this), wrapper;
	  }
	};
	_ShadowBlot.blotName = "abstract";
	let ShadowBlot = _ShadowBlot;
	const _LeafBlot = class _LeafBlot extends ShadowBlot {
	  /**
	   * Returns the value represented by domNode if it is this Blot's type
	   * No checking that domNode can represent this Blot type is required so
	   * applications needing it should check externally before calling.
	   */
	  static value(_domNode) {
	    return !0;
	  }
	  /**
	   * Given location represented by node and offset from DOM Selection Range,
	   * return index to that location.
	   */
	  index(node, offset) {
	    return this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(offset, 1) : -1;
	  }
	  /**
	   * Given index to location within blot, return node and offset representing
	   * that location, consumable by DOM Selection Range
	   */
	  position(index, _inclusive) {
	    let offset = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
	    return index > 0 && (offset += 1), [this.parent.domNode, offset];
	  }
	  /**
	   * Return value represented by this blot
	   * Should not change without interaction from API or
	   * user change detectable by update()
	   */
	  value() {
	    return {
	      [this.statics.blotName]: this.statics.value(this.domNode) || !0
	    };
	  }
	};
	_LeafBlot.scope = Scope.INLINE_BLOT;
	let LeafBlot = _LeafBlot;
	const LeafBlot$1 = LeafBlot;
	class LinkedList {
	  constructor() {
	    this.head = null, this.tail = null, this.length = 0;
	  }
	  append(...nodes) {
	    if (this.insertBefore(nodes[0], null), nodes.length > 1) {
	      const rest = nodes.slice(1);
	      this.append(...rest);
	    }
	  }
	  at(index) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur && index > 0; )
	      index -= 1, cur = next();
	    return cur;
	  }
	  contains(node) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; ) {
	      if (cur === node)
	        return !0;
	      cur = next();
	    }
	    return !1;
	  }
	  indexOf(node) {
	    const next = this.iterator();
	    let cur = next(), index = 0;
	    for (; cur; ) {
	      if (cur === node)
	        return index;
	      index += 1, cur = next();
	    }
	    return -1;
	  }
	  insertBefore(node, refNode) {
	    node != null && (this.remove(node), node.next = refNode, refNode != null ? (node.prev = refNode.prev, refNode.prev != null && (refNode.prev.next = node), refNode.prev = node, refNode === this.head && (this.head = node)) : this.tail != null ? (this.tail.next = node, node.prev = this.tail, this.tail = node) : (node.prev = null, this.head = this.tail = node), this.length += 1);
	  }
	  offset(target) {
	    let index = 0, cur = this.head;
	    for (; cur != null; ) {
	      if (cur === target)
	        return index;
	      index += cur.length(), cur = cur.next;
	    }
	    return -1;
	  }
	  remove(node) {
	    this.contains(node) && (node.prev != null && (node.prev.next = node.next), node.next != null && (node.next.prev = node.prev), node === this.head && (this.head = node.next), node === this.tail && (this.tail = node.prev), this.length -= 1);
	  }
	  iterator(curNode = this.head) {
	    return () => {
	      const ret = curNode;
	      return curNode != null && (curNode = curNode.next), ret;
	    };
	  }
	  find(index, inclusive = !1) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; ) {
	      const length = cur.length();
	      if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0))
	        return [cur, index];
	      index -= length, cur = next();
	    }
	    return [null, 0];
	  }
	  forEach(callback) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; )
	      callback(cur), cur = next();
	  }
	  forEachAt(index, length, callback) {
	    if (length <= 0)
	      return;
	    const [startNode, offset] = this.find(index);
	    let curIndex = index - offset;
	    const next = this.iterator(startNode);
	    let cur = next();
	    for (; cur && curIndex < index + length; ) {
	      const curLength = cur.length();
	      index > curIndex ? callback(
	        cur,
	        index - curIndex,
	        Math.min(length, curIndex + curLength - index)
	      ) : callback(cur, 0, Math.min(curLength, index + length - curIndex)), curIndex += curLength, cur = next();
	    }
	  }
	  map(callback) {
	    return this.reduce((memo, cur) => (memo.push(callback(cur)), memo), []);
	  }
	  reduce(callback, memo) {
	    const next = this.iterator();
	    let cur = next();
	    for (; cur; )
	      memo = callback(memo, cur), cur = next();
	    return memo;
	  }
	}
	function makeAttachedBlot(node, scroll) {
	  const found = scroll.find(node);
	  if (found)
	    return found;
	  try {
	    return scroll.create(node);
	  } catch {
	    const blot = scroll.create(Scope.INLINE);
	    return Array.from(node.childNodes).forEach((child) => {
	      blot.domNode.appendChild(child);
	    }), node.parentNode && node.parentNode.replaceChild(blot.domNode, node), blot.attach(), blot;
	  }
	}
	const _ParentBlot = class _ParentBlot extends ShadowBlot {
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.uiNode = null, this.build();
	  }
	  appendChild(other) {
	    this.insertBefore(other);
	  }
	  attach() {
	    super.attach(), this.children.forEach((child) => {
	      child.attach();
	    });
	  }
	  attachUI(node) {
	    this.uiNode != null && this.uiNode.remove(), this.uiNode = node, _ParentBlot.uiClass && this.uiNode.classList.add(_ParentBlot.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
	  }
	  /**
	   * Called during construction, should fill its own children LinkedList.
	   */
	  build() {
	    this.children = new LinkedList(), Array.from(this.domNode.childNodes).filter((node) => node !== this.uiNode).reverse().forEach((node) => {
	      try {
	        const child = makeAttachedBlot(node, this.scroll);
	        this.insertBefore(child, this.children.head || void 0);
	      } catch (err) {
	        if (err instanceof ParchmentError)
	          return;
	        throw err;
	      }
	    });
	  }
	  deleteAt(index, length) {
	    if (index === 0 && length === this.length())
	      return this.remove();
	    this.children.forEachAt(index, length, (child, offset, childLength) => {
	      child.deleteAt(offset, childLength);
	    });
	  }
	  descendant(criteria, index = 0) {
	    const [child, offset] = this.children.find(index);
	    return criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria ? [child, offset] : child instanceof _ParentBlot ? child.descendant(criteria, offset) : [null, -1];
	  }
	  descendants(criteria, index = 0, length = Number.MAX_VALUE) {
	    let descendants = [], lengthLeft = length;
	    return this.children.forEachAt(
	      index,
	      length,
	      (child, childIndex, childLength) => {
	        (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) && descendants.push(child), child instanceof _ParentBlot && (descendants = descendants.concat(
	          child.descendants(criteria, childIndex, lengthLeft)
	        )), lengthLeft -= childLength;
	      }
	    ), descendants;
	  }
	  detach() {
	    this.children.forEach((child) => {
	      child.detach();
	    }), super.detach();
	  }
	  enforceAllowedChildren() {
	    let done = !1;
	    this.children.forEach((child) => {
	      done || this.statics.allowedChildren.some(
	        (def) => child instanceof def
	      ) || (child.statics.scope === Scope.BLOCK_BLOT ? (child.next != null && this.splitAfter(child), child.prev != null && this.splitAfter(child.prev), child.parent.unwrap(), done = !0) : child instanceof _ParentBlot ? child.unwrap() : child.remove());
	    });
	  }
	  formatAt(index, length, name, value) {
	    this.children.forEachAt(index, length, (child, offset, childLength) => {
	      child.formatAt(offset, childLength, name, value);
	    });
	  }
	  insertAt(index, value, def) {
	    const [child, offset] = this.children.find(index);
	    if (child)
	      child.insertAt(offset, value, def);
	    else {
	      const blot = def == null ? this.scroll.create("text", value) : this.scroll.create(value, def);
	      this.appendChild(blot);
	    }
	  }
	  insertBefore(childBlot, refBlot) {
	    childBlot.parent != null && childBlot.parent.children.remove(childBlot);
	    let refDomNode = null;
	    this.children.insertBefore(childBlot, refBlot || null), childBlot.parent = this, refBlot != null && (refDomNode = refBlot.domNode), (this.domNode.parentNode !== childBlot.domNode || this.domNode.nextSibling !== refDomNode) && this.domNode.insertBefore(childBlot.domNode, refDomNode), childBlot.attach();
	  }
	  length() {
	    return this.children.reduce((memo, child) => memo + child.length(), 0);
	  }
	  moveChildren(targetParent, refNode) {
	    this.children.forEach((child) => {
	      targetParent.insertBefore(child, refNode);
	    });
	  }
	  optimize(context) {
	    if (super.optimize(context), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
	      if (this.statics.defaultChild != null) {
	        const child = this.scroll.create(this.statics.defaultChild.blotName);
	        this.appendChild(child);
	      } else
	        this.remove();
	  }
	  path(index, inclusive = !1) {
	    const [child, offset] = this.children.find(index, inclusive), position = [[this, index]];
	    return child instanceof _ParentBlot ? position.concat(child.path(offset, inclusive)) : (child != null && position.push([child, offset]), position);
	  }
	  removeChild(child) {
	    this.children.remove(child);
	  }
	  replaceWith(name, value) {
	    const replacement = typeof name == "string" ? this.scroll.create(name, value) : name;
	    return replacement instanceof _ParentBlot && this.moveChildren(replacement), super.replaceWith(replacement);
	  }
	  split(index, force = !1) {
	    if (!force) {
	      if (index === 0)
	        return this;
	      if (index === this.length())
	        return this.next;
	    }
	    const after = this.clone();
	    return this.parent && this.parent.insertBefore(after, this.next || void 0), this.children.forEachAt(index, this.length(), (child, offset, _length) => {
	      const split = child.split(offset, force);
	      split != null && after.appendChild(split);
	    }), after;
	  }
	  splitAfter(child) {
	    const after = this.clone();
	    for (; child.next != null; )
	      after.appendChild(child.next);
	    return this.parent && this.parent.insertBefore(after, this.next || void 0), after;
	  }
	  unwrap() {
	    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
	  }
	  update(mutations, _context) {
	    const addedNodes = [], removedNodes = [];
	    mutations.forEach((mutation) => {
	      mutation.target === this.domNode && mutation.type === "childList" && (addedNodes.push(...mutation.addedNodes), removedNodes.push(...mutation.removedNodes));
	    }), removedNodes.forEach((node) => {
	      if (node.parentNode != null && // @ts-expect-error Fix me later
	      node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY)
	        return;
	      const blot = this.scroll.find(node);
	      blot != null && (blot.domNode.parentNode == null || blot.domNode.parentNode === this.domNode) && blot.detach();
	    }), addedNodes.filter((node) => node.parentNode === this.domNode && node !== this.uiNode).sort((a, b) => a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((node) => {
	      let refBlot = null;
	      node.nextSibling != null && (refBlot = this.scroll.find(node.nextSibling));
	      const blot = makeAttachedBlot(node, this.scroll);
	      (blot.next !== refBlot || blot.next == null) && (blot.parent != null && blot.parent.removeChild(this), this.insertBefore(blot, refBlot || void 0));
	    }), this.enforceAllowedChildren();
	  }
	};
	_ParentBlot.uiClass = "";
	let ParentBlot = _ParentBlot;
	const ParentBlot$1 = ParentBlot;
	function isEqual(obj1, obj2) {
	  if (Object.keys(obj1).length !== Object.keys(obj2).length)
	    return !1;
	  for (const prop in obj1)
	    if (obj1[prop] !== obj2[prop])
	      return !1;
	  return !0;
	}
	const _InlineBlot = class _InlineBlot extends ParentBlot$1 {
	  static create(value) {
	    return super.create(value);
	  }
	  static formats(domNode, scroll) {
	    const match2 = scroll.query(_InlineBlot.blotName);
	    if (!(match2 != null && domNode.tagName === match2.tagName)) {
	      if (typeof this.tagName == "string")
	        return !0;
	      if (Array.isArray(this.tagName))
	        return domNode.tagName.toLowerCase();
	    }
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
	  }
	  format(name, value) {
	    if (name === this.statics.blotName && !value)
	      this.children.forEach((child) => {
	        child instanceof _InlineBlot || (child = child.wrap(_InlineBlot.blotName, !0)), this.attributes.copy(child);
	      }), this.unwrap();
	    else {
	      const format = this.scroll.query(name, Scope.INLINE);
	      if (format == null)
	        return;
	      format instanceof Attributor ? this.attributes.attribute(format, value) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value);
	    }
	  }
	  formats() {
	    const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
	    return format != null && (formats[this.statics.blotName] = format), formats;
	  }
	  formatAt(index, length, name, value) {
	    this.formats()[name] != null || this.scroll.query(name, Scope.ATTRIBUTE) ? this.isolate(index, length).format(name, value) : super.formatAt(index, length, name, value);
	  }
	  optimize(context) {
	    super.optimize(context);
	    const formats = this.formats();
	    if (Object.keys(formats).length === 0)
	      return this.unwrap();
	    const next = this.next;
	    next instanceof _InlineBlot && next.prev === this && isEqual(formats, next.formats()) && (next.moveChildren(this), next.remove());
	  }
	  replaceWith(name, value) {
	    const replacement = super.replaceWith(name, value);
	    return this.attributes.copy(replacement), replacement;
	  }
	  update(mutations, context) {
	    super.update(mutations, context), mutations.some(
	      (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
	    ) && this.attributes.build();
	  }
	  wrap(name, value) {
	    const wrapper = super.wrap(name, value);
	    return wrapper instanceof _InlineBlot && this.attributes.move(wrapper), wrapper;
	  }
	};
	_InlineBlot.allowedChildren = [_InlineBlot, LeafBlot$1], _InlineBlot.blotName = "inline", _InlineBlot.scope = Scope.INLINE_BLOT, _InlineBlot.tagName = "SPAN";
	let InlineBlot = _InlineBlot;
	const InlineBlot$1 = InlineBlot, _BlockBlot = class _BlockBlot extends ParentBlot$1 {
	  static create(value) {
	    return super.create(value);
	  }
	  static formats(domNode, scroll) {
	    const match2 = scroll.query(_BlockBlot.blotName);
	    if (!(match2 != null && domNode.tagName === match2.tagName)) {
	      if (typeof this.tagName == "string")
	        return !0;
	      if (Array.isArray(this.tagName))
	        return domNode.tagName.toLowerCase();
	    }
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode), this.attributes = new AttributorStore$1(this.domNode);
	  }
	  format(name, value) {
	    const format = this.scroll.query(name, Scope.BLOCK);
	    format != null && (format instanceof Attributor ? this.attributes.attribute(format, value) : name === this.statics.blotName && !value ? this.replaceWith(_BlockBlot.blotName) : value && (name !== this.statics.blotName || this.formats()[name] !== value) && this.replaceWith(name, value));
	  }
	  formats() {
	    const formats = this.attributes.values(), format = this.statics.formats(this.domNode, this.scroll);
	    return format != null && (formats[this.statics.blotName] = format), formats;
	  }
	  formatAt(index, length, name, value) {
	    this.scroll.query(name, Scope.BLOCK) != null ? this.format(name, value) : super.formatAt(index, length, name, value);
	  }
	  insertAt(index, value, def) {
	    if (def == null || this.scroll.query(value, Scope.INLINE) != null)
	      super.insertAt(index, value, def);
	    else {
	      const after = this.split(index);
	      if (after != null) {
	        const blot = this.scroll.create(value, def);
	        after.parent.insertBefore(blot, after);
	      } else
	        throw new Error("Attempt to insertAt after block boundaries");
	    }
	  }
	  replaceWith(name, value) {
	    const replacement = super.replaceWith(name, value);
	    return this.attributes.copy(replacement), replacement;
	  }
	  update(mutations, context) {
	    super.update(mutations, context), mutations.some(
	      (mutation) => mutation.target === this.domNode && mutation.type === "attributes"
	    ) && this.attributes.build();
	  }
	};
	_BlockBlot.blotName = "block", _BlockBlot.scope = Scope.BLOCK_BLOT, _BlockBlot.tagName = "P", _BlockBlot.allowedChildren = [
	  InlineBlot$1,
	  _BlockBlot,
	  LeafBlot$1
	];
	let BlockBlot = _BlockBlot;
	const BlockBlot$1 = BlockBlot, _ContainerBlot = class _ContainerBlot extends ParentBlot$1 {
	  checkMerge() {
	    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
	  }
	  deleteAt(index, length) {
	    super.deleteAt(index, length), this.enforceAllowedChildren();
	  }
	  formatAt(index, length, name, value) {
	    super.formatAt(index, length, name, value), this.enforceAllowedChildren();
	  }
	  insertAt(index, value, def) {
	    super.insertAt(index, value, def), this.enforceAllowedChildren();
	  }
	  optimize(context) {
	    super.optimize(context), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
	  }
	};
	_ContainerBlot.blotName = "container", _ContainerBlot.scope = Scope.BLOCK_BLOT;
	let ContainerBlot = _ContainerBlot;
	const ContainerBlot$1 = ContainerBlot;
	class EmbedBlot extends LeafBlot$1 {
	  static formats(_domNode, _scroll) {
	  }
	  format(name, value) {
	    super.formatAt(0, this.length(), name, value);
	  }
	  formatAt(index, length, name, value) {
	    index === 0 && length === this.length() ? this.format(name, value) : super.formatAt(index, length, name, value);
	  }
	  formats() {
	    return this.statics.formats(this.domNode, this.scroll);
	  }
	}
	const EmbedBlot$1 = EmbedBlot, OBSERVER_CONFIG = {
	  attributes: !0,
	  characterData: !0,
	  characterDataOldValue: !0,
	  childList: !0,
	  subtree: !0
	}, MAX_OPTIMIZE_ITERATIONS = 100, _ScrollBlot = class _ScrollBlot extends ParentBlot$1 {
	  constructor(registry, node) {
	    super(null, node), this.registry = registry, this.scroll = this, this.build(), this.observer = new MutationObserver((mutations) => {
	      this.update(mutations);
	    }), this.observer.observe(this.domNode, OBSERVER_CONFIG), this.attach();
	  }
	  create(input, value) {
	    return this.registry.create(this, input, value);
	  }
	  find(node, bubble = !1) {
	    const blot = this.registry.find(node, bubble);
	    return blot ? blot.scroll === this ? blot : bubble ? this.find(blot.scroll.domNode.parentNode, !0) : null : null;
	  }
	  query(query, scope = Scope.ANY) {
	    return this.registry.query(query, scope);
	  }
	  register(...definitions) {
	    return this.registry.register(...definitions);
	  }
	  build() {
	    this.scroll != null && super.build();
	  }
	  detach() {
	    super.detach(), this.observer.disconnect();
	  }
	  deleteAt(index, length) {
	    this.update(), index === 0 && length === this.length() ? this.children.forEach((child) => {
	      child.remove();
	    }) : super.deleteAt(index, length);
	  }
	  formatAt(index, length, name, value) {
	    this.update(), super.formatAt(index, length, name, value);
	  }
	  insertAt(index, value, def) {
	    this.update(), super.insertAt(index, value, def);
	  }
	  optimize(mutations = [], context = {}) {
	    super.optimize(context);
	    const mutationsMap = context.mutationsMap || /* @__PURE__ */ new WeakMap();
	    let records = Array.from(this.observer.takeRecords());
	    for (; records.length > 0; )
	      mutations.push(records.pop());
	    const mark = (blot, markParent = !0) => {
	      blot == null || blot === this || blot.domNode.parentNode != null && (mutationsMap.has(blot.domNode) || mutationsMap.set(blot.domNode, []), markParent && mark(blot.parent));
	    }, optimize = (blot) => {
	      mutationsMap.has(blot.domNode) && (blot instanceof ParentBlot$1 && blot.children.forEach(optimize), mutationsMap.delete(blot.domNode), blot.optimize(context));
	    };
	    let remaining = mutations;
	    for (let i = 0; remaining.length > 0; i += 1) {
	      if (i >= MAX_OPTIMIZE_ITERATIONS)
	        throw new Error("[Parchment] Maximum optimize iterations reached");
	      for (remaining.forEach((mutation) => {
	        const blot = this.find(mutation.target, !0);
	        blot != null && (blot.domNode === mutation.target && (mutation.type === "childList" ? (mark(this.find(mutation.previousSibling, !1)), Array.from(mutation.addedNodes).forEach((node) => {
	          const child = this.find(node, !1);
	          mark(child, !1), child instanceof ParentBlot$1 && child.children.forEach((grandChild) => {
	            mark(grandChild, !1);
	          });
	        })) : mutation.type === "attributes" && mark(blot.prev)), mark(blot));
	      }), this.children.forEach(optimize), remaining = Array.from(this.observer.takeRecords()), records = remaining.slice(); records.length > 0; )
	        mutations.push(records.pop());
	    }
	  }
	  update(mutations, context = {}) {
	    mutations = mutations || this.observer.takeRecords();
	    const mutationsMap = /* @__PURE__ */ new WeakMap();
	    mutations.map((mutation) => {
	      const blot = this.find(mutation.target, !0);
	      return blot == null ? null : mutationsMap.has(blot.domNode) ? (mutationsMap.get(blot.domNode).push(mutation), null) : (mutationsMap.set(blot.domNode, [mutation]), blot);
	    }).forEach((blot) => {
	      blot != null && blot !== this && mutationsMap.has(blot.domNode) && blot.update(mutationsMap.get(blot.domNode) || [], context);
	    }), context.mutationsMap = mutationsMap, mutationsMap.has(this.domNode) && super.update(mutationsMap.get(this.domNode), context), this.optimize(mutations, context);
	  }
	};
	_ScrollBlot.blotName = "scroll", _ScrollBlot.defaultChild = BlockBlot$1, _ScrollBlot.allowedChildren = [BlockBlot$1, ContainerBlot$1], _ScrollBlot.scope = Scope.BLOCK_BLOT, _ScrollBlot.tagName = "DIV";
	let ScrollBlot = _ScrollBlot;
	const ScrollBlot$1 = ScrollBlot, _TextBlot = class _TextBlot extends LeafBlot$1 {
	  static create(value) {
	    return document.createTextNode(value);
	  }
	  static value(domNode) {
	    return domNode.data;
	  }
	  constructor(scroll, node) {
	    super(scroll, node), this.text = this.statics.value(this.domNode);
	  }
	  deleteAt(index, length) {
	    this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
	  }
	  index(node, offset) {
	    return this.domNode === node ? offset : -1;
	  }
	  insertAt(index, value, def) {
	    def == null ? (this.text = this.text.slice(0, index) + value + this.text.slice(index), this.domNode.data = this.text) : super.insertAt(index, value, def);
	  }
	  length() {
	    return this.text.length;
	  }
	  optimize(context) {
	    super.optimize(context), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _TextBlot && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
	  }
	  position(index, _inclusive = !1) {
	    return [this.domNode, index];
	  }
	  split(index, force = !1) {
	    if (!force) {
	      if (index === 0)
	        return this;
	      if (index === this.length())
	        return this.next;
	    }
	    const after = this.scroll.create(this.domNode.splitText(index));
	    return this.parent.insertBefore(after, this.next || void 0), this.text = this.statics.value(this.domNode), after;
	  }
	  update(mutations, _context) {
	    mutations.some((mutation) => mutation.type === "characterData" && mutation.target === this.domNode) && (this.text = this.statics.value(this.domNode));
	  }
	  value() {
	    return this.text;
	  }
	};
	_TextBlot.blotName = "text", _TextBlot.scope = Scope.INLINE_BLOT;
	let TextBlot = _TextBlot;
	const TextBlot$1 = TextBlot;

	var Parchment = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Attributor: Attributor,
		AttributorStore: AttributorStore$1,
		BlockBlot: BlockBlot$1,
		ClassAttributor: ClassAttributor$1,
		ContainerBlot: ContainerBlot$1,
		EmbedBlot: EmbedBlot$1,
		InlineBlot: InlineBlot$1,
		LeafBlot: LeafBlot$1,
		ParentBlot: ParentBlot$1,
		Registry: Registry,
		Scope: Scope,
		ScrollBlot: ScrollBlot$1,
		StyleAttributor: StyleAttributor$1,
		TextBlot: TextBlot$1
	});

	var Delta$1 = {exports: {}};

	/**
	 * This library modifies the diff-patch-match library by Neil Fraser
	 * by removing the patch and match functionality and certain advanced
	 * options in the diff function. The original license is as follows:
	 *
	 * ===
	 *
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var diff_1;
	var hasRequiredDiff;

	function requireDiff () {
		if (hasRequiredDiff) return diff_1;
		hasRequiredDiff = 1;
		/**
		 * The data structure representing a diff is an array of tuples:
		 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
		 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
		 */
		var DIFF_DELETE = -1;
		var DIFF_INSERT = 1;
		var DIFF_EQUAL = 0;

		/**
		 * Find the differences between two texts.  Simplifies the problem by stripping
		 * any common prefix or suffix off the texts before diffing.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
		 * @param {boolean} [cleanup] Apply semantic cleanup before returning.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_main(text1, text2, cursor_pos, cleanup, _fix_unicode) {
		  // Check for equality
		  if (text1 === text2) {
		    if (text1) {
		      return [[DIFF_EQUAL, text1]];
		    }
		    return [];
		  }

		  if (cursor_pos != null) {
		    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
		    if (editdiff) {
		      return editdiff;
		    }
		  }

		  // Trim off common prefix (speedup).
		  var commonlength = diff_commonPrefix(text1, text2);
		  var commonprefix = text1.substring(0, commonlength);
		  text1 = text1.substring(commonlength);
		  text2 = text2.substring(commonlength);

		  // Trim off common suffix (speedup).
		  commonlength = diff_commonSuffix(text1, text2);
		  var commonsuffix = text1.substring(text1.length - commonlength);
		  text1 = text1.substring(0, text1.length - commonlength);
		  text2 = text2.substring(0, text2.length - commonlength);

		  // Compute the diff on the middle block.
		  var diffs = diff_compute_(text1, text2);

		  // Restore the prefix and suffix.
		  if (commonprefix) {
		    diffs.unshift([DIFF_EQUAL, commonprefix]);
		  }
		  if (commonsuffix) {
		    diffs.push([DIFF_EQUAL, commonsuffix]);
		  }
		  diff_cleanupMerge(diffs, _fix_unicode);
		  if (cleanup) {
		    diff_cleanupSemantic(diffs);
		  }
		  return diffs;
		}

		/**
		 * Find the differences between two texts.  Assumes that the texts do not
		 * have any common prefix or suffix.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_compute_(text1, text2) {
		  var diffs;

		  if (!text1) {
		    // Just add some text (speedup).
		    return [[DIFF_INSERT, text2]];
		  }

		  if (!text2) {
		    // Just delete some text (speedup).
		    return [[DIFF_DELETE, text1]];
		  }

		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  var i = longtext.indexOf(shorttext);
		  if (i !== -1) {
		    // Shorter text is inside the longer text (speedup).
		    diffs = [
		      [DIFF_INSERT, longtext.substring(0, i)],
		      [DIFF_EQUAL, shorttext],
		      [DIFF_INSERT, longtext.substring(i + shorttext.length)],
		    ];
		    // Swap insertions for deletions if diff is reversed.
		    if (text1.length > text2.length) {
		      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
		    }
		    return diffs;
		  }

		  if (shorttext.length === 1) {
		    // Single character string.
		    // After the previous speedup, the character can't be an equality.
		    return [
		      [DIFF_DELETE, text1],
		      [DIFF_INSERT, text2],
		    ];
		  }

		  // Check to see if the problem can be split in two.
		  var hm = diff_halfMatch_(text1, text2);
		  if (hm) {
		    // A half-match was found, sort out the return data.
		    var text1_a = hm[0];
		    var text1_b = hm[1];
		    var text2_a = hm[2];
		    var text2_b = hm[3];
		    var mid_common = hm[4];
		    // Send both pairs off for separate processing.
		    var diffs_a = diff_main(text1_a, text2_a);
		    var diffs_b = diff_main(text1_b, text2_b);
		    // Merge the results.
		    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
		  }

		  return diff_bisect_(text1, text2);
		}

		/**
		 * Find the 'middle snake' of a diff, split the problem in two
		 * and return the recursively constructed diff.
		 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @return {Array} Array of diff tuples.
		 * @private
		 */
		function diff_bisect_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  var max_d = Math.ceil((text1_length + text2_length) / 2);
		  var v_offset = max_d;
		  var v_length = 2 * max_d;
		  var v1 = new Array(v_length);
		  var v2 = new Array(v_length);
		  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
		  // integers and undefined.
		  for (var x = 0; x < v_length; x++) {
		    v1[x] = -1;
		    v2[x] = -1;
		  }
		  v1[v_offset + 1] = 0;
		  v2[v_offset + 1] = 0;
		  var delta = text1_length - text2_length;
		  // If the total number of characters is odd, then the front path will collide
		  // with the reverse path.
		  var front = delta % 2 !== 0;
		  // Offsets for start and end of k loop.
		  // Prevents mapping of space beyond the grid.
		  var k1start = 0;
		  var k1end = 0;
		  var k2start = 0;
		  var k2end = 0;
		  for (var d = 0; d < max_d; d++) {
		    // Walk the front path one step.
		    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
		      var k1_offset = v_offset + k1;
		      var x1;
		      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
		        x1 = v1[k1_offset + 1];
		      } else {
		        x1 = v1[k1_offset - 1] + 1;
		      }
		      var y1 = x1 - k1;
		      while (
		        x1 < text1_length &&
		        y1 < text2_length &&
		        text1.charAt(x1) === text2.charAt(y1)
		      ) {
		        x1++;
		        y1++;
		      }
		      v1[k1_offset] = x1;
		      if (x1 > text1_length) {
		        // Ran off the right of the graph.
		        k1end += 2;
		      } else if (y1 > text2_length) {
		        // Ran off the bottom of the graph.
		        k1start += 2;
		      } else if (front) {
		        var k2_offset = v_offset + delta - k1;
		        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
		          // Mirror x2 onto top-left coordinate system.
		          var x2 = text1_length - v2[k2_offset];
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }

		    // Walk the reverse path one step.
		    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
		      var k2_offset = v_offset + k2;
		      var x2;
		      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
		        x2 = v2[k2_offset + 1];
		      } else {
		        x2 = v2[k2_offset - 1] + 1;
		      }
		      var y2 = x2 - k2;
		      while (
		        x2 < text1_length &&
		        y2 < text2_length &&
		        text1.charAt(text1_length - x2 - 1) ===
		          text2.charAt(text2_length - y2 - 1)
		      ) {
		        x2++;
		        y2++;
		      }
		      v2[k2_offset] = x2;
		      if (x2 > text1_length) {
		        // Ran off the left of the graph.
		        k2end += 2;
		      } else if (y2 > text2_length) {
		        // Ran off the top of the graph.
		        k2start += 2;
		      } else if (!front) {
		        var k1_offset = v_offset + delta - k2;
		        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
		          var x1 = v1[k1_offset];
		          var y1 = v_offset + x1 - k1_offset;
		          // Mirror x2 onto top-left coordinate system.
		          x2 = text1_length - x2;
		          if (x1 >= x2) {
		            // Overlap detected.
		            return diff_bisectSplit_(text1, text2, x1, y1);
		          }
		        }
		      }
		    }
		  }
		  // Diff took too long and hit the deadline or
		  // number of diffs equals number of characters, no commonality at all.
		  return [
		    [DIFF_DELETE, text1],
		    [DIFF_INSERT, text2],
		  ];
		}

		/**
		 * Given the location of the 'middle snake', split the diff in two parts
		 * and recurse.
		 * @param {string} text1 Old string to be diffed.
		 * @param {string} text2 New string to be diffed.
		 * @param {number} x Index of split point in text1.
		 * @param {number} y Index of split point in text2.
		 * @return {Array} Array of diff tuples.
		 */
		function diff_bisectSplit_(text1, text2, x, y) {
		  var text1a = text1.substring(0, x);
		  var text2a = text2.substring(0, y);
		  var text1b = text1.substring(x);
		  var text2b = text2.substring(y);

		  // Compute both diffs serially.
		  var diffs = diff_main(text1a, text2a);
		  var diffsb = diff_main(text1b, text2b);

		  return diffs.concat(diffsb);
		}

		/**
		 * Determine the common prefix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the start of each
		 *     string.
		 */
		function diff_commonPrefix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerstart = 0;
		  while (pointermin < pointermid) {
		    if (
		      text1.substring(pointerstart, pointermid) ==
		      text2.substring(pointerstart, pointermid)
		    ) {
		      pointermin = pointermid;
		      pointerstart = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }

		  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
		    pointermid--;
		  }

		  return pointermid;
		}

		/**
		 * Determine if the suffix of one string is the prefix of another.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of the first
		 *     string and the start of the second string.
		 * @private
		 */
		function diff_commonOverlap_(text1, text2) {
		  // Cache the text lengths to prevent multiple calls.
		  var text1_length = text1.length;
		  var text2_length = text2.length;
		  // Eliminate the null case.
		  if (text1_length == 0 || text2_length == 0) {
		    return 0;
		  }
		  // Truncate the longer string.
		  if (text1_length > text2_length) {
		    text1 = text1.substring(text1_length - text2_length);
		  } else if (text1_length < text2_length) {
		    text2 = text2.substring(0, text1_length);
		  }
		  var text_length = Math.min(text1_length, text2_length);
		  // Quick check for the worst case.
		  if (text1 == text2) {
		    return text_length;
		  }

		  // Start by looking for a single character match
		  // and increase length until no match is found.
		  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
		  var best = 0;
		  var length = 1;
		  while (true) {
		    var pattern = text1.substring(text_length - length);
		    var found = text2.indexOf(pattern);
		    if (found == -1) {
		      return best;
		    }
		    length += found;
		    if (
		      found == 0 ||
		      text1.substring(text_length - length) == text2.substring(0, length)
		    ) {
		      best = length;
		      length++;
		    }
		  }
		}

		/**
		 * Determine the common suffix of two strings.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {number} The number of characters common to the end of each string.
		 */
		function diff_commonSuffix(text1, text2) {
		  // Quick check for common null cases.
		  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
		    return 0;
		  }
		  // Binary search.
		  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
		  var pointermin = 0;
		  var pointermax = Math.min(text1.length, text2.length);
		  var pointermid = pointermax;
		  var pointerend = 0;
		  while (pointermin < pointermid) {
		    if (
		      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
		      text2.substring(text2.length - pointermid, text2.length - pointerend)
		    ) {
		      pointermin = pointermid;
		      pointerend = pointermin;
		    } else {
		      pointermax = pointermid;
		    }
		    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
		  }

		  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
		    pointermid--;
		  }

		  return pointermid;
		}

		/**
		 * Do the two texts share a substring which is at least half the length of the
		 * longer text?
		 * This speedup can produce non-minimal diffs.
		 * @param {string} text1 First string.
		 * @param {string} text2 Second string.
		 * @return {Array.<string>} Five element Array, containing the prefix of
		 *     text1, the suffix of text1, the prefix of text2, the suffix of
		 *     text2 and the common middle.  Or null if there was no match.
		 */
		function diff_halfMatch_(text1, text2) {
		  var longtext = text1.length > text2.length ? text1 : text2;
		  var shorttext = text1.length > text2.length ? text2 : text1;
		  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
		    return null; // Pointless.
		  }

		  /**
		   * Does a substring of shorttext exist within longtext such that the substring
		   * is at least half the length of longtext?
		   * Closure, but does not reference any external variables.
		   * @param {string} longtext Longer string.
		   * @param {string} shorttext Shorter string.
		   * @param {number} i Start index of quarter length substring within longtext.
		   * @return {Array.<string>} Five element Array, containing the prefix of
		   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
		   *     of shorttext and the common middle.  Or null if there was no match.
		   * @private
		   */
		  function diff_halfMatchI_(longtext, shorttext, i) {
		    // Start with a 1/4 length substring at position i as a seed.
		    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
		    var j = -1;
		    var best_common = "";
		    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
		    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
		      var prefixLength = diff_commonPrefix(
		        longtext.substring(i),
		        shorttext.substring(j)
		      );
		      var suffixLength = diff_commonSuffix(
		        longtext.substring(0, i),
		        shorttext.substring(0, j)
		      );
		      if (best_common.length < suffixLength + prefixLength) {
		        best_common =
		          shorttext.substring(j - suffixLength, j) +
		          shorttext.substring(j, j + prefixLength);
		        best_longtext_a = longtext.substring(0, i - suffixLength);
		        best_longtext_b = longtext.substring(i + prefixLength);
		        best_shorttext_a = shorttext.substring(0, j - suffixLength);
		        best_shorttext_b = shorttext.substring(j + prefixLength);
		      }
		    }
		    if (best_common.length * 2 >= longtext.length) {
		      return [
		        best_longtext_a,
		        best_longtext_b,
		        best_shorttext_a,
		        best_shorttext_b,
		        best_common,
		      ];
		    } else {
		      return null;
		    }
		  }

		  // First check if the second quarter is the seed for a half-match.
		  var hm1 = diff_halfMatchI_(
		    longtext,
		    shorttext,
		    Math.ceil(longtext.length / 4)
		  );
		  // Check again based on the third quarter.
		  var hm2 = diff_halfMatchI_(
		    longtext,
		    shorttext,
		    Math.ceil(longtext.length / 2)
		  );
		  var hm;
		  if (!hm1 && !hm2) {
		    return null;
		  } else if (!hm2) {
		    hm = hm1;
		  } else if (!hm1) {
		    hm = hm2;
		  } else {
		    // Both matched.  Select the longest.
		    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
		  }

		  // A half-match was found, sort out the return data.
		  var text1_a, text1_b, text2_a, text2_b;
		  if (text1.length > text2.length) {
		    text1_a = hm[0];
		    text1_b = hm[1];
		    text2_a = hm[2];
		    text2_b = hm[3];
		  } else {
		    text2_a = hm[0];
		    text2_b = hm[1];
		    text1_a = hm[2];
		    text1_b = hm[3];
		  }
		  var mid_common = hm[4];
		  return [text1_a, text1_b, text2_a, text2_b, mid_common];
		}

		/**
		 * Reduce the number of edits by eliminating semantically trivial equalities.
		 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
		 */
		function diff_cleanupSemantic(diffs) {
		  var changes = false;
		  var equalities = []; // Stack of indices where equalities are found.
		  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
		  /** @type {?string} */
		  var lastequality = null;
		  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
		  var pointer = 0; // Index of current position.
		  // Number of characters that changed prior to the equality.
		  var length_insertions1 = 0;
		  var length_deletions1 = 0;
		  // Number of characters that changed after the equality.
		  var length_insertions2 = 0;
		  var length_deletions2 = 0;
		  while (pointer < diffs.length) {
		    if (diffs[pointer][0] == DIFF_EQUAL) {
		      // Equality found.
		      equalities[equalitiesLength++] = pointer;
		      length_insertions1 = length_insertions2;
		      length_deletions1 = length_deletions2;
		      length_insertions2 = 0;
		      length_deletions2 = 0;
		      lastequality = diffs[pointer][1];
		    } else {
		      // An insertion or deletion.
		      if (diffs[pointer][0] == DIFF_INSERT) {
		        length_insertions2 += diffs[pointer][1].length;
		      } else {
		        length_deletions2 += diffs[pointer][1].length;
		      }
		      // Eliminate an equality that is smaller or equal to the edits on both
		      // sides of it.
		      if (
		        lastequality &&
		        lastequality.length <=
		          Math.max(length_insertions1, length_deletions1) &&
		        lastequality.length <= Math.max(length_insertions2, length_deletions2)
		      ) {
		        // Duplicate record.
		        diffs.splice(equalities[equalitiesLength - 1], 0, [
		          DIFF_DELETE,
		          lastequality,
		        ]);
		        // Change second copy to insert.
		        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
		        // Throw away the equality we just deleted.
		        equalitiesLength--;
		        // Throw away the previous equality (it needs to be reevaluated).
		        equalitiesLength--;
		        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
		        length_insertions1 = 0; // Reset the counters.
		        length_deletions1 = 0;
		        length_insertions2 = 0;
		        length_deletions2 = 0;
		        lastequality = null;
		        changes = true;
		      }
		    }
		    pointer++;
		  }

		  // Normalize the diff.
		  if (changes) {
		    diff_cleanupMerge(diffs);
		  }
		  diff_cleanupSemanticLossless(diffs);

		  // Find any overlaps between deletions and insertions.
		  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
		  //   -> <del>abc</del>xxx<ins>def</ins>
		  // e.g: <del>xxxabc</del><ins>defxxx</ins>
		  //   -> <ins>def</ins>xxx<del>abc</del>
		  // Only extract an overlap if it is as big as the edit ahead or behind it.
		  pointer = 1;
		  while (pointer < diffs.length) {
		    if (
		      diffs[pointer - 1][0] == DIFF_DELETE &&
		      diffs[pointer][0] == DIFF_INSERT
		    ) {
		      var deletion = diffs[pointer - 1][1];
		      var insertion = diffs[pointer][1];
		      var overlap_length1 = diff_commonOverlap_(deletion, insertion);
		      var overlap_length2 = diff_commonOverlap_(insertion, deletion);
		      if (overlap_length1 >= overlap_length2) {
		        if (
		          overlap_length1 >= deletion.length / 2 ||
		          overlap_length1 >= insertion.length / 2
		        ) {
		          // Overlap found.  Insert an equality and trim the surrounding edits.
		          diffs.splice(pointer, 0, [
		            DIFF_EQUAL,
		            insertion.substring(0, overlap_length1),
		          ]);
		          diffs[pointer - 1][1] = deletion.substring(
		            0,
		            deletion.length - overlap_length1
		          );
		          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
		          pointer++;
		        }
		      } else {
		        if (
		          overlap_length2 >= deletion.length / 2 ||
		          overlap_length2 >= insertion.length / 2
		        ) {
		          // Reverse overlap found.
		          // Insert an equality and swap and trim the surrounding edits.
		          diffs.splice(pointer, 0, [
		            DIFF_EQUAL,
		            deletion.substring(0, overlap_length2),
		          ]);
		          diffs[pointer - 1][0] = DIFF_INSERT;
		          diffs[pointer - 1][1] = insertion.substring(
		            0,
		            insertion.length - overlap_length2
		          );
		          diffs[pointer + 1][0] = DIFF_DELETE;
		          diffs[pointer + 1][1] = deletion.substring(overlap_length2);
		          pointer++;
		        }
		      }
		      pointer++;
		    }
		    pointer++;
		  }
		}

		var nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
		var whitespaceRegex_ = /\s/;
		var linebreakRegex_ = /[\r\n]/;
		var blanklineEndRegex_ = /\n\r?\n$/;
		var blanklineStartRegex_ = /^\r?\n\r?\n/;

		/**
		 * Look for single edits surrounded on both sides by equalities
		 * which can be shifted sideways to align the edit to a word boundary.
		 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
		 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
		 */
		function diff_cleanupSemanticLossless(diffs) {
		  /**
		   * Given two strings, compute a score representing whether the internal
		   * boundary falls on logical boundaries.
		   * Scores range from 6 (best) to 0 (worst).
		   * Closure, but does not reference any external variables.
		   * @param {string} one First string.
		   * @param {string} two Second string.
		   * @return {number} The score.
		   * @private
		   */
		  function diff_cleanupSemanticScore_(one, two) {
		    if (!one || !two) {
		      // Edges are the best.
		      return 6;
		    }

		    // Each port of this function behaves slightly differently due to
		    // subtle differences in each language's definition of things like
		    // 'whitespace'.  Since this function's purpose is largely cosmetic,
		    // the choice has been made to use each language's native features
		    // rather than force total conformity.
		    var char1 = one.charAt(one.length - 1);
		    var char2 = two.charAt(0);
		    var nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex_);
		    var nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex_);
		    var whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex_);
		    var whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex_);
		    var lineBreak1 = whitespace1 && char1.match(linebreakRegex_);
		    var lineBreak2 = whitespace2 && char2.match(linebreakRegex_);
		    var blankLine1 = lineBreak1 && one.match(blanklineEndRegex_);
		    var blankLine2 = lineBreak2 && two.match(blanklineStartRegex_);

		    if (blankLine1 || blankLine2) {
		      // Five points for blank lines.
		      return 5;
		    } else if (lineBreak1 || lineBreak2) {
		      // Four points for line breaks.
		      return 4;
		    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
		      // Three points for end of sentences.
		      return 3;
		    } else if (whitespace1 || whitespace2) {
		      // Two points for whitespace.
		      return 2;
		    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
		      // One point for non-alphanumeric.
		      return 1;
		    }
		    return 0;
		  }

		  var pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (
		      diffs[pointer - 1][0] == DIFF_EQUAL &&
		      diffs[pointer + 1][0] == DIFF_EQUAL
		    ) {
		      // This is a single edit surrounded by equalities.
		      var equality1 = diffs[pointer - 1][1];
		      var edit = diffs[pointer][1];
		      var equality2 = diffs[pointer + 1][1];

		      // First, shift the edit as far left as possible.
		      var commonOffset = diff_commonSuffix(equality1, edit);
		      if (commonOffset) {
		        var commonString = edit.substring(edit.length - commonOffset);
		        equality1 = equality1.substring(0, equality1.length - commonOffset);
		        edit = commonString + edit.substring(0, edit.length - commonOffset);
		        equality2 = commonString + equality2;
		      }

		      // Second, step character by character right, looking for the best fit.
		      var bestEquality1 = equality1;
		      var bestEdit = edit;
		      var bestEquality2 = equality2;
		      var bestScore =
		        diff_cleanupSemanticScore_(equality1, edit) +
		        diff_cleanupSemanticScore_(edit, equality2);
		      while (edit.charAt(0) === equality2.charAt(0)) {
		        equality1 += edit.charAt(0);
		        edit = edit.substring(1) + equality2.charAt(0);
		        equality2 = equality2.substring(1);
		        var score =
		          diff_cleanupSemanticScore_(equality1, edit) +
		          diff_cleanupSemanticScore_(edit, equality2);
		        // The >= encourages trailing rather than leading whitespace on edits.
		        if (score >= bestScore) {
		          bestScore = score;
		          bestEquality1 = equality1;
		          bestEdit = edit;
		          bestEquality2 = equality2;
		        }
		      }

		      if (diffs[pointer - 1][1] != bestEquality1) {
		        // We have an improvement, save it back to the diff.
		        if (bestEquality1) {
		          diffs[pointer - 1][1] = bestEquality1;
		        } else {
		          diffs.splice(pointer - 1, 1);
		          pointer--;
		        }
		        diffs[pointer][1] = bestEdit;
		        if (bestEquality2) {
		          diffs[pointer + 1][1] = bestEquality2;
		        } else {
		          diffs.splice(pointer + 1, 1);
		          pointer--;
		        }
		      }
		    }
		    pointer++;
		  }
		}

		/**
		 * Reorder and merge like edit sections.  Merge equalities.
		 * Any edit section can move as long as it doesn't cross an equality.
		 * @param {Array} diffs Array of diff tuples.
		 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
		 */
		function diff_cleanupMerge(diffs, fix_unicode) {
		  diffs.push([DIFF_EQUAL, ""]); // Add a dummy entry at the end.
		  var pointer = 0;
		  var count_delete = 0;
		  var count_insert = 0;
		  var text_delete = "";
		  var text_insert = "";
		  var commonlength;
		  while (pointer < diffs.length) {
		    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
		      diffs.splice(pointer, 1);
		      continue;
		    }
		    switch (diffs[pointer][0]) {
		      case DIFF_INSERT:
		        count_insert++;
		        text_insert += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_DELETE:
		        count_delete++;
		        text_delete += diffs[pointer][1];
		        pointer++;
		        break;
		      case DIFF_EQUAL:
		        var previous_equality = pointer - count_insert - count_delete - 1;
		        if (fix_unicode) {
		          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
		          // we assume that the old and new text in the diff are complete and correct
		          // unicode-encoded JS strings, but the tuple boundaries may fall between
		          // surrogate pairs.  we fix this by shaving off stray surrogates from the end
		          // of the previous equality and the beginning of this equality.  this may create
		          // empty equalities or a common prefix or suffix.  for example, if AB and AC are
		          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and
		          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
		          // particular case, both equalities go away, we absorb any previous inequalities,
		          // and we keep scanning for the next equality before rewriting the tuples.
		          if (
		            previous_equality >= 0 &&
		            ends_with_pair_start(diffs[previous_equality][1])
		          ) {
		            var stray = diffs[previous_equality][1].slice(-1);
		            diffs[previous_equality][1] = diffs[previous_equality][1].slice(
		              0,
		              -1
		            );
		            text_delete = stray + text_delete;
		            text_insert = stray + text_insert;
		            if (!diffs[previous_equality][1]) {
		              // emptied out previous equality, so delete it and include previous delete/insert
		              diffs.splice(previous_equality, 1);
		              pointer--;
		              var k = previous_equality - 1;
		              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
		                count_insert++;
		                text_insert = diffs[k][1] + text_insert;
		                k--;
		              }
		              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
		                count_delete++;
		                text_delete = diffs[k][1] + text_delete;
		                k--;
		              }
		              previous_equality = k;
		            }
		          }
		          if (starts_with_pair_end(diffs[pointer][1])) {
		            var stray = diffs[pointer][1].charAt(0);
		            diffs[pointer][1] = diffs[pointer][1].slice(1);
		            text_delete += stray;
		            text_insert += stray;
		          }
		        }
		        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
		          // for empty equality not at end, wait for next equality
		          diffs.splice(pointer, 1);
		          break;
		        }
		        if (text_delete.length > 0 || text_insert.length > 0) {
		          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
		          if (text_delete.length > 0 && text_insert.length > 0) {
		            // Factor out any common prefixes.
		            commonlength = diff_commonPrefix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              if (previous_equality >= 0) {
		                diffs[previous_equality][1] += text_insert.substring(
		                  0,
		                  commonlength
		                );
		              } else {
		                diffs.splice(0, 0, [
		                  DIFF_EQUAL,
		                  text_insert.substring(0, commonlength),
		                ]);
		                pointer++;
		              }
		              text_insert = text_insert.substring(commonlength);
		              text_delete = text_delete.substring(commonlength);
		            }
		            // Factor out any common suffixes.
		            commonlength = diff_commonSuffix(text_insert, text_delete);
		            if (commonlength !== 0) {
		              diffs[pointer][1] =
		                text_insert.substring(text_insert.length - commonlength) +
		                diffs[pointer][1];
		              text_insert = text_insert.substring(
		                0,
		                text_insert.length - commonlength
		              );
		              text_delete = text_delete.substring(
		                0,
		                text_delete.length - commonlength
		              );
		            }
		          }
		          // Delete the offending records and add the merged ones.
		          var n = count_insert + count_delete;
		          if (text_delete.length === 0 && text_insert.length === 0) {
		            diffs.splice(pointer - n, n);
		            pointer = pointer - n;
		          } else if (text_delete.length === 0) {
		            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
		            pointer = pointer - n + 1;
		          } else if (text_insert.length === 0) {
		            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
		            pointer = pointer - n + 1;
		          } else {
		            diffs.splice(
		              pointer - n,
		              n,
		              [DIFF_DELETE, text_delete],
		              [DIFF_INSERT, text_insert]
		            );
		            pointer = pointer - n + 2;
		          }
		        }
		        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
		          // Merge this equality with the previous one.
		          diffs[pointer - 1][1] += diffs[pointer][1];
		          diffs.splice(pointer, 1);
		        } else {
		          pointer++;
		        }
		        count_insert = 0;
		        count_delete = 0;
		        text_delete = "";
		        text_insert = "";
		        break;
		    }
		  }
		  if (diffs[diffs.length - 1][1] === "") {
		    diffs.pop(); // Remove the dummy entry at the end.
		  }

		  // Second pass: look for single edits surrounded on both sides by equalities
		  // which can be shifted sideways to eliminate an equality.
		  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
		  var changes = false;
		  pointer = 1;
		  // Intentionally ignore the first and last element (don't need checking).
		  while (pointer < diffs.length - 1) {
		    if (
		      diffs[pointer - 1][0] === DIFF_EQUAL &&
		      diffs[pointer + 1][0] === DIFF_EQUAL
		    ) {
		      // This is a single edit surrounded by equalities.
		      if (
		        diffs[pointer][1].substring(
		          diffs[pointer][1].length - diffs[pointer - 1][1].length
		        ) === diffs[pointer - 1][1]
		      ) {
		        // Shift the edit over the previous equality.
		        diffs[pointer][1] =
		          diffs[pointer - 1][1] +
		          diffs[pointer][1].substring(
		            0,
		            diffs[pointer][1].length - diffs[pointer - 1][1].length
		          );
		        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
		        diffs.splice(pointer - 1, 1);
		        changes = true;
		      } else if (
		        diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
		        diffs[pointer + 1][1]
		      ) {
		        // Shift the edit over the next equality.
		        diffs[pointer - 1][1] += diffs[pointer + 1][1];
		        diffs[pointer][1] =
		          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
		          diffs[pointer + 1][1];
		        diffs.splice(pointer + 1, 1);
		        changes = true;
		      }
		    }
		    pointer++;
		  }
		  // If shifts were made, the diff needs reordering and another shift sweep.
		  if (changes) {
		    diff_cleanupMerge(diffs, fix_unicode);
		  }
		}

		function is_surrogate_pair_start(charCode) {
		  return charCode >= 0xd800 && charCode <= 0xdbff;
		}

		function is_surrogate_pair_end(charCode) {
		  return charCode >= 0xdc00 && charCode <= 0xdfff;
		}

		function starts_with_pair_end(str) {
		  return is_surrogate_pair_end(str.charCodeAt(0));
		}

		function ends_with_pair_start(str) {
		  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
		}

		function remove_empty_tuples(tuples) {
		  var ret = [];
		  for (var i = 0; i < tuples.length; i++) {
		    if (tuples[i][1].length > 0) {
		      ret.push(tuples[i]);
		    }
		  }
		  return ret;
		}

		function make_edit_splice(before, oldMiddle, newMiddle, after) {
		  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
		    return null;
		  }
		  return remove_empty_tuples([
		    [DIFF_EQUAL, before],
		    [DIFF_DELETE, oldMiddle],
		    [DIFF_INSERT, newMiddle],
		    [DIFF_EQUAL, after],
		  ]);
		}

		function find_cursor_edit_diff(oldText, newText, cursor_pos) {
		  // note: this runs after equality check has ruled out exact equality
		  var oldRange =
		    typeof cursor_pos === "number"
		      ? { index: cursor_pos, length: 0 }
		      : cursor_pos.oldRange;
		  var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
		  // take into account the old and new selection to generate the best diff
		  // possible for a text edit.  for example, a text change from "xxx" to "xx"
		  // could be a delete or forwards-delete of any one of the x's, or the
		  // result of selecting two of the x's and typing "x".
		  var oldLength = oldText.length;
		  var newLength = newText.length;
		  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
		    // see if we have an insert or delete before or after cursor
		    var oldCursor = oldRange.index;
		    var oldBefore = oldText.slice(0, oldCursor);
		    var oldAfter = oldText.slice(oldCursor);
		    var maybeNewCursor = newRange ? newRange.index : null;
		    editBefore: {
		      // is this an insert or delete right before oldCursor?
		      var newCursor = oldCursor + newLength - oldLength;
		      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
		        break editBefore;
		      }
		      if (newCursor < 0 || newCursor > newLength) {
		        break editBefore;
		      }
		      var newBefore = newText.slice(0, newCursor);
		      var newAfter = newText.slice(newCursor);
		      if (newAfter !== oldAfter) {
		        break editBefore;
		      }
		      var prefixLength = Math.min(oldCursor, newCursor);
		      var oldPrefix = oldBefore.slice(0, prefixLength);
		      var newPrefix = newBefore.slice(0, prefixLength);
		      if (oldPrefix !== newPrefix) {
		        break editBefore;
		      }
		      var oldMiddle = oldBefore.slice(prefixLength);
		      var newMiddle = newBefore.slice(prefixLength);
		      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
		    }
		    editAfter: {
		      // is this an insert or delete right after oldCursor?
		      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
		        break editAfter;
		      }
		      var cursor = oldCursor;
		      var newBefore = newText.slice(0, cursor);
		      var newAfter = newText.slice(cursor);
		      if (newBefore !== oldBefore) {
		        break editAfter;
		      }
		      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
		      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
		      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
		      if (oldSuffix !== newSuffix) {
		        break editAfter;
		      }
		      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
		      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
		      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
		    }
		  }
		  if (oldRange.length > 0 && newRange && newRange.length === 0) {
		    replaceRange: {
		      // see if diff could be a splice of the old selection range
		      var oldPrefix = oldText.slice(0, oldRange.index);
		      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
		      var prefixLength = oldPrefix.length;
		      var suffixLength = oldSuffix.length;
		      if (newLength < prefixLength + suffixLength) {
		        break replaceRange;
		      }
		      var newPrefix = newText.slice(0, prefixLength);
		      var newSuffix = newText.slice(newLength - suffixLength);
		      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
		        break replaceRange;
		      }
		      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
		      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
		      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
		    }
		  }

		  return null;
		}

		function diff(text1, text2, cursor_pos, cleanup) {
		  // only pass fix_unicode=true at the top level, not when diff_main is
		  // recursively invoked
		  return diff_main(text1, text2, cursor_pos, cleanup, true);
		}

		diff.INSERT = DIFF_INSERT;
		diff.DELETE = DIFF_DELETE;
		diff.EQUAL = DIFF_EQUAL;

		diff_1 = diff;
		return diff_1;
	}

	var lodash_clonedeep = {exports: {}};

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	lodash_clonedeep.exports;

	var hasRequiredLodash_clonedeep;

	function requireLodash_clonedeep () {
		if (hasRequiredLodash_clonedeep) return lodash_clonedeep.exports;
		hasRequiredLodash_clonedeep = 1;
		(function (module, exports) {
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;

			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';

			/** Used as references for various `Number` constants. */
			var MAX_SAFE_INTEGER = 9007199254740991;

			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    objectTag = '[object Object]',
			    promiseTag = '[object Promise]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    symbolTag = '[object Symbol]',
			    weakMapTag = '[object WeakMap]';

			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]',
			    float32Tag = '[object Float32Array]',
			    float64Tag = '[object Float64Array]',
			    int8Tag = '[object Int8Array]',
			    int16Tag = '[object Int16Array]',
			    int32Tag = '[object Int32Array]',
			    uint8Tag = '[object Uint8Array]',
			    uint8ClampedTag = '[object Uint8ClampedArray]',
			    uint16Tag = '[object Uint16Array]',
			    uint32Tag = '[object Uint32Array]';

			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

			/** Used to match `RegExp` flags from their coerced string values. */
			var reFlags = /\w*$/;

			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;

			/** Used to detect unsigned integer values. */
			var reIsUint = /^(?:0|[1-9]\d*)$/;

			/** Used to identify `toStringTag` values supported by `_.clone`. */
			var cloneableTags = {};
			cloneableTags[argsTag] = cloneableTags[arrayTag] =
			cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
			cloneableTags[boolTag] = cloneableTags[dateTag] =
			cloneableTags[float32Tag] = cloneableTags[float64Tag] =
			cloneableTags[int8Tag] = cloneableTags[int16Tag] =
			cloneableTags[int32Tag] = cloneableTags[mapTag] =
			cloneableTags[numberTag] = cloneableTags[objectTag] =
			cloneableTags[regexpTag] = cloneableTags[setTag] =
			cloneableTags[stringTag] = cloneableTags[symbolTag] =
			cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
			cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
			cloneableTags[errorTag] = cloneableTags[funcTag] =
			cloneableTags[weakMapTag] = false;

			/** Detect free variable `global` from Node.js. */
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function('return this')();

			/** Detect free variable `exports`. */
			var freeExports = exports && !exports.nodeType && exports;

			/** Detect free variable `module`. */
			var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;

			/**
			 * Adds the key-value `pair` to `map`.
			 *
			 * @private
			 * @param {Object} map The map to modify.
			 * @param {Array} pair The key-value pair to add.
			 * @returns {Object} Returns `map`.
			 */
			function addMapEntry(map, pair) {
			  // Don't return `map.set` because it's not chainable in IE 11.
			  map.set(pair[0], pair[1]);
			  return map;
			}

			/**
			 * Adds `value` to `set`.
			 *
			 * @private
			 * @param {Object} set The set to modify.
			 * @param {*} value The value to add.
			 * @returns {Object} Returns `set`.
			 */
			function addSetEntry(set, value) {
			  // Don't return `set.add` because it's not chainable in IE 11.
			  set.add(value);
			  return set;
			}

			/**
			 * A specialized version of `_.forEach` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns `array`.
			 */
			function arrayEach(array, iteratee) {
			  var index = -1,
			      length = array ? array.length : 0;

			  while (++index < length) {
			    if (iteratee(array[index], index, array) === false) {
			      break;
			    }
			  }
			  return array;
			}

			/**
			 * Appends the elements of `values` to `array`.
			 *
			 * @private
			 * @param {Array} array The array to modify.
			 * @param {Array} values The values to append.
			 * @returns {Array} Returns `array`.
			 */
			function arrayPush(array, values) {
			  var index = -1,
			      length = values.length,
			      offset = array.length;

			  while (++index < length) {
			    array[offset + index] = values[index];
			  }
			  return array;
			}

			/**
			 * A specialized version of `_.reduce` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @param {*} [accumulator] The initial value.
			 * @param {boolean} [initAccum] Specify using the first element of `array` as
			 *  the initial value.
			 * @returns {*} Returns the accumulated value.
			 */
			function arrayReduce(array, iteratee, accumulator, initAccum) {
			  var index = -1,
			      length = array ? array.length : 0;
			  while (++index < length) {
			    accumulator = iteratee(accumulator, array[index], index, array);
			  }
			  return accumulator;
			}

			/**
			 * The base implementation of `_.times` without support for iteratee shorthands
			 * or max array length checks.
			 *
			 * @private
			 * @param {number} n The number of times to invoke `iteratee`.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns the array of results.
			 */
			function baseTimes(n, iteratee) {
			  var index = -1,
			      result = Array(n);

			  while (++index < n) {
			    result[index] = iteratee(index);
			  }
			  return result;
			}

			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
			  return object == null ? undefined : object[key];
			}

			/**
			 * Checks if `value` is a host object in IE < 9.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
			 */
			function isHostObject(value) {
			  // Many host objects are `Object` objects that can coerce to strings
			  // despite having improperly defined `toString` methods.
			  var result = false;
			  if (value != null && typeof value.toString != 'function') {
			    try {
			      result = !!(value + '');
			    } catch (e) {}
			  }
			  return result;
			}

			/**
			 * Converts `map` to its key-value pairs.
			 *
			 * @private
			 * @param {Object} map The map to convert.
			 * @returns {Array} Returns the key-value pairs.
			 */
			function mapToArray(map) {
			  var index = -1,
			      result = Array(map.size);

			  map.forEach(function(value, key) {
			    result[++index] = [key, value];
			  });
			  return result;
			}

			/**
			 * Creates a unary function that invokes `func` with its argument transformed.
			 *
			 * @private
			 * @param {Function} func The function to wrap.
			 * @param {Function} transform The argument transform.
			 * @returns {Function} Returns the new function.
			 */
			function overArg(func, transform) {
			  return function(arg) {
			    return func(transform(arg));
			  };
			}

			/**
			 * Converts `set` to an array of its values.
			 *
			 * @private
			 * @param {Object} set The set to convert.
			 * @returns {Array} Returns the values.
			 */
			function setToArray(set) {
			  var index = -1,
			      result = Array(set.size);

			  set.forEach(function(value) {
			    result[++index] = value;
			  });
			  return result;
			}

			/** Used for built-in method references. */
			var arrayProto = Array.prototype,
			    funcProto = Function.prototype,
			    objectProto = Object.prototype;

			/** Used to detect overreaching core-js shims. */
			var coreJsData = root['__core-js_shared__'];

			/** Used to detect methods masquerading as native. */
			var maskSrcKey = (function() {
			  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
			  return uid ? ('Symbol(src)_1.' + uid) : '';
			}());

			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;

			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;

			/** Used to detect if a method is native. */
			var reIsNative = RegExp('^' +
			  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
			);

			/** Built-in value references. */
			var Buffer = moduleExports ? root.Buffer : undefined,
			    Symbol = root.Symbol,
			    Uint8Array = root.Uint8Array,
			    getPrototype = overArg(Object.getPrototypeOf, Object),
			    objectCreate = Object.create,
			    propertyIsEnumerable = objectProto.propertyIsEnumerable,
			    splice = arrayProto.splice;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeGetSymbols = Object.getOwnPropertySymbols,
			    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
			    nativeKeys = overArg(Object.keys, Object);

			/* Built-in method references that are verified to be native. */
			var DataView = getNative(root, 'DataView'),
			    Map = getNative(root, 'Map'),
			    Promise = getNative(root, 'Promise'),
			    Set = getNative(root, 'Set'),
			    WeakMap = getNative(root, 'WeakMap'),
			    nativeCreate = getNative(Object, 'create');

			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView),
			    mapCtorString = toSource(Map),
			    promiseCtorString = toSource(Promise),
			    setCtorString = toSource(Set),
			    weakMapCtorString = toSource(WeakMap);

			/** Used to convert symbols to primitives and strings. */
			var symbolProto = Symbol ? Symbol.prototype : undefined,
			    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
			  this.__data__ = nativeCreate ? nativeCreate(null) : {};
			}

			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
			  return this.has(key) && delete this.__data__[key];
			}

			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
			  var data = this.__data__;
			  if (nativeCreate) {
			    var result = data[key];
			    return result === HASH_UNDEFINED ? undefined : result;
			  }
			  return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}

			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
			  var data = this.__data__;
			  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
			}

			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
			  var data = this.__data__;
			  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
			  return this;
			}

			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype['delete'] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;

			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
			  this.__data__ = [];
			}

			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    return false;
			  }
			  var lastIndex = data.length - 1;
			  if (index == lastIndex) {
			    data.pop();
			  } else {
			    splice.call(data, index, 1);
			  }
			  return true;
			}

			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  return index < 0 ? undefined : data[index][1];
			}

			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
			  return assocIndexOf(this.__data__, key) > -1;
			}

			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    data.push([key, value]);
			  } else {
			    data[index][1] = value;
			  }
			  return this;
			}

			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype['delete'] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;

			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
			  var index = -1,
			      length = entries ? entries.length : 0;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
			  this.__data__ = {
			    'hash': new Hash,
			    'map': new (Map || ListCache),
			    'string': new Hash
			  };
			}

			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
			  return getMapData(this, key)['delete'](key);
			}

			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
			  return getMapData(this, key).get(key);
			}

			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
			  return getMapData(this, key).has(key);
			}

			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
			  getMapData(this, key).set(key, value);
			  return this;
			}

			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype['delete'] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;

			/**
			 * Creates a stack cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Stack(entries) {
			  this.__data__ = new ListCache(entries);
			}

			/**
			 * Removes all key-value entries from the stack.
			 *
			 * @private
			 * @name clear
			 * @memberOf Stack
			 */
			function stackClear() {
			  this.__data__ = new ListCache;
			}

			/**
			 * Removes `key` and its value from the stack.
			 *
			 * @private
			 * @name delete
			 * @memberOf Stack
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function stackDelete(key) {
			  return this.__data__['delete'](key);
			}

			/**
			 * Gets the stack value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Stack
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function stackGet(key) {
			  return this.__data__.get(key);
			}

			/**
			 * Checks if a stack value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Stack
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function stackHas(key) {
			  return this.__data__.has(key);
			}

			/**
			 * Sets the stack `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Stack
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the stack cache instance.
			 */
			function stackSet(key, value) {
			  var cache = this.__data__;
			  if (cache instanceof ListCache) {
			    var pairs = cache.__data__;
			    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
			      pairs.push([key, value]);
			      return this;
			    }
			    cache = this.__data__ = new MapCache(pairs);
			  }
			  cache.set(key, value);
			  return this;
			}

			// Add methods to `Stack`.
			Stack.prototype.clear = stackClear;
			Stack.prototype['delete'] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;

			/**
			 * Creates an array of the enumerable property names of the array-like `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @param {boolean} inherited Specify returning inherited property names.
			 * @returns {Array} Returns the array of property names.
			 */
			function arrayLikeKeys(value, inherited) {
			  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
			  // Safari 9 makes `arguments.length` enumerable in strict mode.
			  var result = (isArray(value) || isArguments(value))
			    ? baseTimes(value.length, String)
			    : [];

			  var length = result.length,
			      skipIndexes = !!length;

			  for (var key in value) {
			    if ((hasOwnProperty.call(value, key)) &&
			        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Assigns `value` to `key` of `object` if the existing value is not equivalent
			 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * for equality comparisons.
			 *
			 * @private
			 * @param {Object} object The object to modify.
			 * @param {string} key The key of the property to assign.
			 * @param {*} value The value to assign.
			 */
			function assignValue(object, key, value) {
			  var objValue = object[key];
			  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
			      (value === undefined && !(key in object))) {
			    object[key] = value;
			  }
			}

			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
			  var length = array.length;
			  while (length--) {
			    if (eq(array[length][0], key)) {
			      return length;
			    }
			  }
			  return -1;
			}

			/**
			 * The base implementation of `_.assign` without support for multiple sources
			 * or `customizer` functions.
			 *
			 * @private
			 * @param {Object} object The destination object.
			 * @param {Object} source The source object.
			 * @returns {Object} Returns `object`.
			 */
			function baseAssign(object, source) {
			  return object && copyObject(source, keys(source), object);
			}

			/**
			 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
			 * traversed objects.
			 *
			 * @private
			 * @param {*} value The value to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @param {boolean} [isFull] Specify a clone including symbols.
			 * @param {Function} [customizer] The function to customize cloning.
			 * @param {string} [key] The key of `value`.
			 * @param {Object} [object] The parent object of `value`.
			 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
			 * @returns {*} Returns the cloned value.
			 */
			function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
			  var result;
			  if (customizer) {
			    result = object ? customizer(value, key, object, stack) : customizer(value);
			  }
			  if (result !== undefined) {
			    return result;
			  }
			  if (!isObject(value)) {
			    return value;
			  }
			  var isArr = isArray(value);
			  if (isArr) {
			    result = initCloneArray(value);
			    if (!isDeep) {
			      return copyArray(value, result);
			    }
			  } else {
			    var tag = getTag(value),
			        isFunc = tag == funcTag || tag == genTag;

			    if (isBuffer(value)) {
			      return cloneBuffer(value, isDeep);
			    }
			    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
			      if (isHostObject(value)) {
			        return object ? value : {};
			      }
			      result = initCloneObject(isFunc ? {} : value);
			      if (!isDeep) {
			        return copySymbols(value, baseAssign(result, value));
			      }
			    } else {
			      if (!cloneableTags[tag]) {
			        return object ? value : {};
			      }
			      result = initCloneByTag(value, tag, baseClone, isDeep);
			    }
			  }
			  // Check for circular references and return its corresponding clone.
			  stack || (stack = new Stack);
			  var stacked = stack.get(value);
			  if (stacked) {
			    return stacked;
			  }
			  stack.set(value, result);

			  if (!isArr) {
			    var props = isFull ? getAllKeys(value) : keys(value);
			  }
			  arrayEach(props || value, function(subValue, key) {
			    if (props) {
			      key = subValue;
			      subValue = value[key];
			    }
			    // Recursively populate clone (susceptible to call stack limits).
			    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
			  });
			  return result;
			}

			/**
			 * The base implementation of `_.create` without support for assigning
			 * properties to the created object.
			 *
			 * @private
			 * @param {Object} prototype The object to inherit from.
			 * @returns {Object} Returns the new object.
			 */
			function baseCreate(proto) {
			  return isObject(proto) ? objectCreate(proto) : {};
			}

			/**
			 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
			 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
			 * symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Function} keysFunc The function to get the keys of `object`.
			 * @param {Function} symbolsFunc The function to get the symbols of `object`.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			  var result = keysFunc(object);
			  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
			}

			/**
			 * The base implementation of `getTag`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function baseGetTag(value) {
			  return objectToString.call(value);
			}

			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
			  if (!isObject(value) || isMasked(value)) {
			    return false;
			  }
			  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
			  return pattern.test(toSource(value));
			}

			/**
			 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 */
			function baseKeys(object) {
			  if (!isPrototype(object)) {
			    return nativeKeys(object);
			  }
			  var result = [];
			  for (var key in Object(object)) {
			    if (hasOwnProperty.call(object, key) && key != 'constructor') {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Creates a clone of  `buffer`.
			 *
			 * @private
			 * @param {Buffer} buffer The buffer to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Buffer} Returns the cloned buffer.
			 */
			function cloneBuffer(buffer, isDeep) {
			  if (isDeep) {
			    return buffer.slice();
			  }
			  var result = new buffer.constructor(buffer.length);
			  buffer.copy(result);
			  return result;
			}

			/**
			 * Creates a clone of `arrayBuffer`.
			 *
			 * @private
			 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
			 * @returns {ArrayBuffer} Returns the cloned array buffer.
			 */
			function cloneArrayBuffer(arrayBuffer) {
			  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
			  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
			  return result;
			}

			/**
			 * Creates a clone of `dataView`.
			 *
			 * @private
			 * @param {Object} dataView The data view to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned data view.
			 */
			function cloneDataView(dataView, isDeep) {
			  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
			  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
			}

			/**
			 * Creates a clone of `map`.
			 *
			 * @private
			 * @param {Object} map The map to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned map.
			 */
			function cloneMap(map, isDeep, cloneFunc) {
			  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
			  return arrayReduce(array, addMapEntry, new map.constructor);
			}

			/**
			 * Creates a clone of `regexp`.
			 *
			 * @private
			 * @param {Object} regexp The regexp to clone.
			 * @returns {Object} Returns the cloned regexp.
			 */
			function cloneRegExp(regexp) {
			  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
			  result.lastIndex = regexp.lastIndex;
			  return result;
			}

			/**
			 * Creates a clone of `set`.
			 *
			 * @private
			 * @param {Object} set The set to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned set.
			 */
			function cloneSet(set, isDeep, cloneFunc) {
			  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
			  return arrayReduce(array, addSetEntry, new set.constructor);
			}

			/**
			 * Creates a clone of the `symbol` object.
			 *
			 * @private
			 * @param {Object} symbol The symbol object to clone.
			 * @returns {Object} Returns the cloned symbol object.
			 */
			function cloneSymbol(symbol) {
			  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
			}

			/**
			 * Creates a clone of `typedArray`.
			 *
			 * @private
			 * @param {Object} typedArray The typed array to clone.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the cloned typed array.
			 */
			function cloneTypedArray(typedArray, isDeep) {
			  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
			  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
			}

			/**
			 * Copies the values of `source` to `array`.
			 *
			 * @private
			 * @param {Array} source The array to copy values from.
			 * @param {Array} [array=[]] The array to copy values to.
			 * @returns {Array} Returns `array`.
			 */
			function copyArray(source, array) {
			  var index = -1,
			      length = source.length;

			  array || (array = Array(length));
			  while (++index < length) {
			    array[index] = source[index];
			  }
			  return array;
			}

			/**
			 * Copies properties of `source` to `object`.
			 *
			 * @private
			 * @param {Object} source The object to copy properties from.
			 * @param {Array} props The property identifiers to copy.
			 * @param {Object} [object={}] The object to copy properties to.
			 * @param {Function} [customizer] The function to customize copied values.
			 * @returns {Object} Returns `object`.
			 */
			function copyObject(source, props, object, customizer) {
			  object || (object = {});

			  var index = -1,
			      length = props.length;

			  while (++index < length) {
			    var key = props[index];

			    var newValue = undefined;

			    assignValue(object, key, newValue === undefined ? source[key] : newValue);
			  }
			  return object;
			}

			/**
			 * Copies own symbol properties of `source` to `object`.
			 *
			 * @private
			 * @param {Object} source The object to copy symbols from.
			 * @param {Object} [object={}] The object to copy symbols to.
			 * @returns {Object} Returns `object`.
			 */
			function copySymbols(source, object) {
			  return copyObject(source, getSymbols(source), object);
			}

			/**
			 * Creates an array of own enumerable property names and symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function getAllKeys(object) {
			  return baseGetAllKeys(object, keys, getSymbols);
			}

			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
			  var data = map.__data__;
			  return isKeyable(key)
			    ? data[typeof key == 'string' ? 'string' : 'hash']
			    : data.map;
			}

			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
			  var value = getValue(object, key);
			  return baseIsNative(value) ? value : undefined;
			}

			/**
			 * Creates an array of the own enumerable symbol properties of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of symbols.
			 */
			var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

			/**
			 * Gets the `toStringTag` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			var getTag = baseGetTag;

			// Fallback for data views, maps, sets, and weak maps in IE 11,
			// for data views in Edge < 14, and promises in Node.js.
			if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
			    (Map && getTag(new Map) != mapTag) ||
			    (Promise && getTag(Promise.resolve()) != promiseTag) ||
			    (Set && getTag(new Set) != setTag) ||
			    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
			  getTag = function(value) {
			    var result = objectToString.call(value),
			        Ctor = result == objectTag ? value.constructor : undefined,
			        ctorString = Ctor ? toSource(Ctor) : undefined;

			    if (ctorString) {
			      switch (ctorString) {
			        case dataViewCtorString: return dataViewTag;
			        case mapCtorString: return mapTag;
			        case promiseCtorString: return promiseTag;
			        case setCtorString: return setTag;
			        case weakMapCtorString: return weakMapTag;
			      }
			    }
			    return result;
			  };
			}

			/**
			 * Initializes an array clone.
			 *
			 * @private
			 * @param {Array} array The array to clone.
			 * @returns {Array} Returns the initialized clone.
			 */
			function initCloneArray(array) {
			  var length = array.length,
			      result = array.constructor(length);

			  // Add properties assigned by `RegExp#exec`.
			  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
			    result.index = array.index;
			    result.input = array.input;
			  }
			  return result;
			}

			/**
			 * Initializes an object clone.
			 *
			 * @private
			 * @param {Object} object The object to clone.
			 * @returns {Object} Returns the initialized clone.
			 */
			function initCloneObject(object) {
			  return (typeof object.constructor == 'function' && !isPrototype(object))
			    ? baseCreate(getPrototype(object))
			    : {};
			}

			/**
			 * Initializes an object clone based on its `toStringTag`.
			 *
			 * **Note:** This function only supports cloning values with tags of
			 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			 *
			 * @private
			 * @param {Object} object The object to clone.
			 * @param {string} tag The `toStringTag` of the object to clone.
			 * @param {Function} cloneFunc The function to clone values.
			 * @param {boolean} [isDeep] Specify a deep clone.
			 * @returns {Object} Returns the initialized clone.
			 */
			function initCloneByTag(object, tag, cloneFunc, isDeep) {
			  var Ctor = object.constructor;
			  switch (tag) {
			    case arrayBufferTag:
			      return cloneArrayBuffer(object);

			    case boolTag:
			    case dateTag:
			      return new Ctor(+object);

			    case dataViewTag:
			      return cloneDataView(object, isDeep);

			    case float32Tag: case float64Tag:
			    case int8Tag: case int16Tag: case int32Tag:
			    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
			      return cloneTypedArray(object, isDeep);

			    case mapTag:
			      return cloneMap(object, isDeep, cloneFunc);

			    case numberTag:
			    case stringTag:
			      return new Ctor(object);

			    case regexpTag:
			      return cloneRegExp(object);

			    case setTag:
			      return cloneSet(object, isDeep, cloneFunc);

			    case symbolTag:
			      return cloneSymbol(object);
			  }
			}

			/**
			 * Checks if `value` is a valid array-like index.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
			 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
			 */
			function isIndex(value, length) {
			  length = length == null ? MAX_SAFE_INTEGER : length;
			  return !!length &&
			    (typeof value == 'number' || reIsUint.test(value)) &&
			    (value > -1 && value % 1 == 0 && value < length);
			}

			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
			  var type = typeof value;
			  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
			    ? (value !== '__proto__')
			    : (value === null);
			}

			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
			  return !!maskSrcKey && (maskSrcKey in func);
			}

			/**
			 * Checks if `value` is likely a prototype object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			 */
			function isPrototype(value) {
			  var Ctor = value && value.constructor,
			      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

			  return value === proto;
			}

			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to process.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
			  if (func != null) {
			    try {
			      return funcToString.call(func);
			    } catch (e) {}
			    try {
			      return (func + '');
			    } catch (e) {}
			  }
			  return '';
			}

			/**
			 * This method is like `_.clone` except that it recursively clones `value`.
			 *
			 * @static
			 * @memberOf _
			 * @since 1.0.0
			 * @category Lang
			 * @param {*} value The value to recursively clone.
			 * @returns {*} Returns the deep cloned value.
			 * @see _.clone
			 * @example
			 *
			 * var objects = [{ 'a': 1 }, { 'b': 2 }];
			 *
			 * var deep = _.cloneDeep(objects);
			 * console.log(deep[0] === objects[0]);
			 * // => false
			 */
			function cloneDeep(value) {
			  return baseClone(value, true, true);
			}

			/**
			 * Performs a
			 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * comparison between two values to determine if they are equivalent.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.eq(object, object);
			 * // => true
			 *
			 * _.eq(object, other);
			 * // => false
			 *
			 * _.eq('a', 'a');
			 * // => true
			 *
			 * _.eq('a', Object('a'));
			 * // => false
			 *
			 * _.eq(NaN, NaN);
			 * // => true
			 */
			function eq(value, other) {
			  return value === other || (value !== value && other !== other);
			}

			/**
			 * Checks if `value` is likely an `arguments` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArguments(function() { return arguments; }());
			 * // => true
			 *
			 * _.isArguments([1, 2, 3]);
			 * // => false
			 */
			function isArguments(value) {
			  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
			  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
			    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
			}

			/**
			 * Checks if `value` is classified as an `Array` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
			 * @example
			 *
			 * _.isArray([1, 2, 3]);
			 * // => true
			 *
			 * _.isArray(document.body.children);
			 * // => false
			 *
			 * _.isArray('abc');
			 * // => false
			 *
			 * _.isArray(_.noop);
			 * // => false
			 */
			var isArray = Array.isArray;

			/**
			 * Checks if `value` is array-like. A value is considered array-like if it's
			 * not a function and has a `value.length` that's an integer greater than or
			 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			 * @example
			 *
			 * _.isArrayLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLike(document.body.children);
			 * // => true
			 *
			 * _.isArrayLike('abc');
			 * // => true
			 *
			 * _.isArrayLike(_.noop);
			 * // => false
			 */
			function isArrayLike(value) {
			  return value != null && isLength(value.length) && !isFunction(value);
			}

			/**
			 * This method is like `_.isArrayLike` except that it also checks if `value`
			 * is an object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array-like object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArrayLikeObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLikeObject(document.body.children);
			 * // => true
			 *
			 * _.isArrayLikeObject('abc');
			 * // => false
			 *
			 * _.isArrayLikeObject(_.noop);
			 * // => false
			 */
			function isArrayLikeObject(value) {
			  return isObjectLike(value) && isArrayLike(value);
			}

			/**
			 * Checks if `value` is a buffer.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.3.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			 * @example
			 *
			 * _.isBuffer(new Buffer(2));
			 * // => true
			 *
			 * _.isBuffer(new Uint8Array(2));
			 * // => false
			 */
			var isBuffer = nativeIsBuffer || stubFalse;

			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			  // The use of `Object#toString` avoids issues with the `typeof` operator
			  // in Safari 8-9 which returns 'object' for typed array and other constructors.
			  var tag = isObject(value) ? objectToString.call(value) : '';
			  return tag == funcTag || tag == genTag;
			}

			/**
			 * Checks if `value` is a valid array-like length.
			 *
			 * **Note:** This method is loosely based on
			 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
			 * @example
			 *
			 * _.isLength(3);
			 * // => true
			 *
			 * _.isLength(Number.MIN_VALUE);
			 * // => false
			 *
			 * _.isLength(Infinity);
			 * // => false
			 *
			 * _.isLength('3');
			 * // => false
			 */
			function isLength(value) {
			  return typeof value == 'number' &&
			    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
			 * @example
			 *
			 * _.isObject({});
			 * // => true
			 *
			 * _.isObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isObject(_.noop);
			 * // => true
			 *
			 * _.isObject(null);
			 * // => false
			 */
			function isObject(value) {
			  var type = typeof value;
			  return !!value && (type == 'object' || type == 'function');
			}

			/**
			 * Checks if `value` is object-like. A value is object-like if it's not `null`
			 * and has a `typeof` result of "object".
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			 * @example
			 *
			 * _.isObjectLike({});
			 * // => true
			 *
			 * _.isObjectLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isObjectLike(_.noop);
			 * // => false
			 *
			 * _.isObjectLike(null);
			 * // => false
			 */
			function isObjectLike(value) {
			  return !!value && typeof value == 'object';
			}

			/**
			 * Creates an array of the own enumerable property names of `object`.
			 *
			 * **Note:** Non-object values are coerced to objects. See the
			 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			 * for more details.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Object
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 * @example
			 *
			 * function Foo() {
			 *   this.a = 1;
			 *   this.b = 2;
			 * }
			 *
			 * Foo.prototype.c = 3;
			 *
			 * _.keys(new Foo);
			 * // => ['a', 'b'] (iteration order is not guaranteed)
			 *
			 * _.keys('hi');
			 * // => ['0', '1']
			 */
			function keys(object) {
			  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
			}

			/**
			 * This method returns a new empty array.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {Array} Returns the new empty array.
			 * @example
			 *
			 * var arrays = _.times(2, _.stubArray);
			 *
			 * console.log(arrays);
			 * // => [[], []]
			 *
			 * console.log(arrays[0] === arrays[1]);
			 * // => false
			 */
			function stubArray() {
			  return [];
			}

			/**
			 * This method returns `false`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {boolean} Returns `false`.
			 * @example
			 *
			 * _.times(2, _.stubFalse);
			 * // => [false, false]
			 */
			function stubFalse() {
			  return false;
			}

			module.exports = cloneDeep; 
		} (lodash_clonedeep, lodash_clonedeep.exports));
		return lodash_clonedeep.exports;
	}

	var lodash_isequal = {exports: {}};

	/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	lodash_isequal.exports;

	var hasRequiredLodash_isequal;

	function requireLodash_isequal () {
		if (hasRequiredLodash_isequal) return lodash_isequal.exports;
		hasRequiredLodash_isequal = 1;
		(function (module, exports) {
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;

			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';

			/** Used to compose bitmasks for value comparisons. */
			var COMPARE_PARTIAL_FLAG = 1,
			    COMPARE_UNORDERED_FLAG = 2;

			/** Used as references for various `Number` constants. */
			var MAX_SAFE_INTEGER = 9007199254740991;

			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    asyncTag = '[object AsyncFunction]',
			    boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    nullTag = '[object Null]',
			    objectTag = '[object Object]',
			    promiseTag = '[object Promise]',
			    proxyTag = '[object Proxy]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    symbolTag = '[object Symbol]',
			    undefinedTag = '[object Undefined]',
			    weakMapTag = '[object WeakMap]';

			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]',
			    float32Tag = '[object Float32Array]',
			    float64Tag = '[object Float64Array]',
			    int8Tag = '[object Int8Array]',
			    int16Tag = '[object Int16Array]',
			    int32Tag = '[object Int32Array]',
			    uint8Tag = '[object Uint8Array]',
			    uint8ClampedTag = '[object Uint8ClampedArray]',
			    uint16Tag = '[object Uint16Array]',
			    uint32Tag = '[object Uint32Array]';

			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;

			/** Used to detect unsigned integer values. */
			var reIsUint = /^(?:0|[1-9]\d*)$/;

			/** Used to identify `toStringTag` values of typed arrays. */
			var typedArrayTags = {};
			typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
			typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
			typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
			typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
			typedArrayTags[uint32Tag] = true;
			typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
			typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
			typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
			typedArrayTags[errorTag] = typedArrayTags[funcTag] =
			typedArrayTags[mapTag] = typedArrayTags[numberTag] =
			typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
			typedArrayTags[setTag] = typedArrayTags[stringTag] =
			typedArrayTags[weakMapTag] = false;

			/** Detect free variable `global` from Node.js. */
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function('return this')();

			/** Detect free variable `exports`. */
			var freeExports = exports && !exports.nodeType && exports;

			/** Detect free variable `module`. */
			var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;

			/** Detect free variable `process` from Node.js. */
			var freeProcess = moduleExports && freeGlobal.process;

			/** Used to access faster Node.js helpers. */
			var nodeUtil = (function() {
			  try {
			    return freeProcess && freeProcess.binding && freeProcess.binding('util');
			  } catch (e) {}
			}());

			/* Node.js helper references. */
			var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

			/**
			 * A specialized version of `_.filter` for arrays without support for
			 * iteratee shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} predicate The function invoked per iteration.
			 * @returns {Array} Returns the new filtered array.
			 */
			function arrayFilter(array, predicate) {
			  var index = -1,
			      length = array == null ? 0 : array.length,
			      resIndex = 0,
			      result = [];

			  while (++index < length) {
			    var value = array[index];
			    if (predicate(value, index, array)) {
			      result[resIndex++] = value;
			    }
			  }
			  return result;
			}

			/**
			 * Appends the elements of `values` to `array`.
			 *
			 * @private
			 * @param {Array} array The array to modify.
			 * @param {Array} values The values to append.
			 * @returns {Array} Returns `array`.
			 */
			function arrayPush(array, values) {
			  var index = -1,
			      length = values.length,
			      offset = array.length;

			  while (++index < length) {
			    array[offset + index] = values[index];
			  }
			  return array;
			}

			/**
			 * A specialized version of `_.some` for arrays without support for iteratee
			 * shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} predicate The function invoked per iteration.
			 * @returns {boolean} Returns `true` if any element passes the predicate check,
			 *  else `false`.
			 */
			function arraySome(array, predicate) {
			  var index = -1,
			      length = array == null ? 0 : array.length;

			  while (++index < length) {
			    if (predicate(array[index], index, array)) {
			      return true;
			    }
			  }
			  return false;
			}

			/**
			 * The base implementation of `_.times` without support for iteratee shorthands
			 * or max array length checks.
			 *
			 * @private
			 * @param {number} n The number of times to invoke `iteratee`.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns the array of results.
			 */
			function baseTimes(n, iteratee) {
			  var index = -1,
			      result = Array(n);

			  while (++index < n) {
			    result[index] = iteratee(index);
			  }
			  return result;
			}

			/**
			 * The base implementation of `_.unary` without support for storing metadata.
			 *
			 * @private
			 * @param {Function} func The function to cap arguments for.
			 * @returns {Function} Returns the new capped function.
			 */
			function baseUnary(func) {
			  return function(value) {
			    return func(value);
			  };
			}

			/**
			 * Checks if a `cache` value for `key` exists.
			 *
			 * @private
			 * @param {Object} cache The cache to query.
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function cacheHas(cache, key) {
			  return cache.has(key);
			}

			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
			  return object == null ? undefined : object[key];
			}

			/**
			 * Converts `map` to its key-value pairs.
			 *
			 * @private
			 * @param {Object} map The map to convert.
			 * @returns {Array} Returns the key-value pairs.
			 */
			function mapToArray(map) {
			  var index = -1,
			      result = Array(map.size);

			  map.forEach(function(value, key) {
			    result[++index] = [key, value];
			  });
			  return result;
			}

			/**
			 * Creates a unary function that invokes `func` with its argument transformed.
			 *
			 * @private
			 * @param {Function} func The function to wrap.
			 * @param {Function} transform The argument transform.
			 * @returns {Function} Returns the new function.
			 */
			function overArg(func, transform) {
			  return function(arg) {
			    return func(transform(arg));
			  };
			}

			/**
			 * Converts `set` to an array of its values.
			 *
			 * @private
			 * @param {Object} set The set to convert.
			 * @returns {Array} Returns the values.
			 */
			function setToArray(set) {
			  var index = -1,
			      result = Array(set.size);

			  set.forEach(function(value) {
			    result[++index] = value;
			  });
			  return result;
			}

			/** Used for built-in method references. */
			var arrayProto = Array.prototype,
			    funcProto = Function.prototype,
			    objectProto = Object.prototype;

			/** Used to detect overreaching core-js shims. */
			var coreJsData = root['__core-js_shared__'];

			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;

			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;

			/** Used to detect methods masquerading as native. */
			var maskSrcKey = (function() {
			  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
			  return uid ? ('Symbol(src)_1.' + uid) : '';
			}());

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var nativeObjectToString = objectProto.toString;

			/** Used to detect if a method is native. */
			var reIsNative = RegExp('^' +
			  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
			  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
			);

			/** Built-in value references. */
			var Buffer = moduleExports ? root.Buffer : undefined,
			    Symbol = root.Symbol,
			    Uint8Array = root.Uint8Array,
			    propertyIsEnumerable = objectProto.propertyIsEnumerable,
			    splice = arrayProto.splice,
			    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeGetSymbols = Object.getOwnPropertySymbols,
			    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
			    nativeKeys = overArg(Object.keys, Object);

			/* Built-in method references that are verified to be native. */
			var DataView = getNative(root, 'DataView'),
			    Map = getNative(root, 'Map'),
			    Promise = getNative(root, 'Promise'),
			    Set = getNative(root, 'Set'),
			    WeakMap = getNative(root, 'WeakMap'),
			    nativeCreate = getNative(Object, 'create');

			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView),
			    mapCtorString = toSource(Map),
			    promiseCtorString = toSource(Promise),
			    setCtorString = toSource(Set),
			    weakMapCtorString = toSource(WeakMap);

			/** Used to convert symbols to primitives and strings. */
			var symbolProto = Symbol ? Symbol.prototype : undefined,
			    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
			  this.__data__ = nativeCreate ? nativeCreate(null) : {};
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
			  var result = this.has(key) && delete this.__data__[key];
			  this.size -= result ? 1 : 0;
			  return result;
			}

			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
			  var data = this.__data__;
			  if (nativeCreate) {
			    var result = data[key];
			    return result === HASH_UNDEFINED ? undefined : result;
			  }
			  return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}

			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
			  var data = this.__data__;
			  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
			}

			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
			  var data = this.__data__;
			  this.size += this.has(key) ? 0 : 1;
			  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
			  return this;
			}

			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype['delete'] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;

			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
			  this.__data__ = [];
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    return false;
			  }
			  var lastIndex = data.length - 1;
			  if (index == lastIndex) {
			    data.pop();
			  } else {
			    splice.call(data, index, 1);
			  }
			  --this.size;
			  return true;
			}

			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  return index < 0 ? undefined : data[index][1];
			}

			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
			  return assocIndexOf(this.__data__, key) > -1;
			}

			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);

			  if (index < 0) {
			    ++this.size;
			    data.push([key, value]);
			  } else {
			    data[index][1] = value;
			  }
			  return this;
			}

			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype['delete'] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;

			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
			  var index = -1,
			      length = entries == null ? 0 : entries.length;

			  this.clear();
			  while (++index < length) {
			    var entry = entries[index];
			    this.set(entry[0], entry[1]);
			  }
			}

			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
			  this.size = 0;
			  this.__data__ = {
			    'hash': new Hash,
			    'map': new (Map || ListCache),
			    'string': new Hash
			  };
			}

			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
			  var result = getMapData(this, key)['delete'](key);
			  this.size -= result ? 1 : 0;
			  return result;
			}

			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
			  return getMapData(this, key).get(key);
			}

			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
			  return getMapData(this, key).has(key);
			}

			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
			  var data = getMapData(this, key),
			      size = data.size;

			  data.set(key, value);
			  this.size += data.size == size ? 0 : 1;
			  return this;
			}

			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype['delete'] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;

			/**
			 *
			 * Creates an array cache object to store unique values.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [values] The values to cache.
			 */
			function SetCache(values) {
			  var index = -1,
			      length = values == null ? 0 : values.length;

			  this.__data__ = new MapCache;
			  while (++index < length) {
			    this.add(values[index]);
			  }
			}

			/**
			 * Adds `value` to the array cache.
			 *
			 * @private
			 * @name add
			 * @memberOf SetCache
			 * @alias push
			 * @param {*} value The value to cache.
			 * @returns {Object} Returns the cache instance.
			 */
			function setCacheAdd(value) {
			  this.__data__.set(value, HASH_UNDEFINED);
			  return this;
			}

			/**
			 * Checks if `value` is in the array cache.
			 *
			 * @private
			 * @name has
			 * @memberOf SetCache
			 * @param {*} value The value to search for.
			 * @returns {number} Returns `true` if `value` is found, else `false`.
			 */
			function setCacheHas(value) {
			  return this.__data__.has(value);
			}

			// Add methods to `SetCache`.
			SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
			SetCache.prototype.has = setCacheHas;

			/**
			 * Creates a stack cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Stack(entries) {
			  var data = this.__data__ = new ListCache(entries);
			  this.size = data.size;
			}

			/**
			 * Removes all key-value entries from the stack.
			 *
			 * @private
			 * @name clear
			 * @memberOf Stack
			 */
			function stackClear() {
			  this.__data__ = new ListCache;
			  this.size = 0;
			}

			/**
			 * Removes `key` and its value from the stack.
			 *
			 * @private
			 * @name delete
			 * @memberOf Stack
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function stackDelete(key) {
			  var data = this.__data__,
			      result = data['delete'](key);

			  this.size = data.size;
			  return result;
			}

			/**
			 * Gets the stack value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Stack
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function stackGet(key) {
			  return this.__data__.get(key);
			}

			/**
			 * Checks if a stack value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Stack
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function stackHas(key) {
			  return this.__data__.has(key);
			}

			/**
			 * Sets the stack `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Stack
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the stack cache instance.
			 */
			function stackSet(key, value) {
			  var data = this.__data__;
			  if (data instanceof ListCache) {
			    var pairs = data.__data__;
			    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
			      pairs.push([key, value]);
			      this.size = ++data.size;
			      return this;
			    }
			    data = this.__data__ = new MapCache(pairs);
			  }
			  data.set(key, value);
			  this.size = data.size;
			  return this;
			}

			// Add methods to `Stack`.
			Stack.prototype.clear = stackClear;
			Stack.prototype['delete'] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;

			/**
			 * Creates an array of the enumerable property names of the array-like `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @param {boolean} inherited Specify returning inherited property names.
			 * @returns {Array} Returns the array of property names.
			 */
			function arrayLikeKeys(value, inherited) {
			  var isArr = isArray(value),
			      isArg = !isArr && isArguments(value),
			      isBuff = !isArr && !isArg && isBuffer(value),
			      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
			      skipIndexes = isArr || isArg || isBuff || isType,
			      result = skipIndexes ? baseTimes(value.length, String) : [],
			      length = result.length;

			  for (var key in value) {
			    if ((hasOwnProperty.call(value, key)) &&
			        !(skipIndexes && (
			           // Safari 9 has enumerable `arguments.length` in strict mode.
			           key == 'length' ||
			           // Node.js 0.10 has enumerable non-index properties on buffers.
			           (isBuff && (key == 'offset' || key == 'parent')) ||
			           // PhantomJS 2 has enumerable non-index properties on typed arrays.
			           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
			           // Skip index properties.
			           isIndex(key, length)
			        ))) {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
			  var length = array.length;
			  while (length--) {
			    if (eq(array[length][0], key)) {
			      return length;
			    }
			  }
			  return -1;
			}

			/**
			 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
			 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
			 * symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Function} keysFunc The function to get the keys of `object`.
			 * @param {Function} symbolsFunc The function to get the symbols of `object`.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			  var result = keysFunc(object);
			  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
			}

			/**
			 * The base implementation of `getTag` without fallbacks for buggy environments.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function baseGetTag(value) {
			  if (value == null) {
			    return value === undefined ? undefinedTag : nullTag;
			  }
			  return (symToStringTag && symToStringTag in Object(value))
			    ? getRawTag(value)
			    : objectToString(value);
			}

			/**
			 * The base implementation of `_.isArguments`.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 */
			function baseIsArguments(value) {
			  return isObjectLike(value) && baseGetTag(value) == argsTag;
			}

			/**
			 * The base implementation of `_.isEqual` which supports partial comparisons
			 * and tracks traversed objects.
			 *
			 * @private
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @param {boolean} bitmask The bitmask flags.
			 *  1 - Unordered comparison
			 *  2 - Partial comparison
			 * @param {Function} [customizer] The function to customize comparisons.
			 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 */
			function baseIsEqual(value, other, bitmask, customizer, stack) {
			  if (value === other) {
			    return true;
			  }
			  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
			    return value !== value && other !== other;
			  }
			  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
			}

			/**
			 * A specialized version of `baseIsEqual` for arrays and objects which performs
			 * deep comparisons and tracks traversed objects enabling objects with circular
			 * references to be compared.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
			  var objIsArr = isArray(object),
			      othIsArr = isArray(other),
			      objTag = objIsArr ? arrayTag : getTag(object),
			      othTag = othIsArr ? arrayTag : getTag(other);

			  objTag = objTag == argsTag ? objectTag : objTag;
			  othTag = othTag == argsTag ? objectTag : othTag;

			  var objIsObj = objTag == objectTag,
			      othIsObj = othTag == objectTag,
			      isSameTag = objTag == othTag;

			  if (isSameTag && isBuffer(object)) {
			    if (!isBuffer(other)) {
			      return false;
			    }
			    objIsArr = true;
			    objIsObj = false;
			  }
			  if (isSameTag && !objIsObj) {
			    stack || (stack = new Stack);
			    return (objIsArr || isTypedArray(object))
			      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
			      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
			  }
			  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
			        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

			    if (objIsWrapped || othIsWrapped) {
			      var objUnwrapped = objIsWrapped ? object.value() : object,
			          othUnwrapped = othIsWrapped ? other.value() : other;

			      stack || (stack = new Stack);
			      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			    }
			  }
			  if (!isSameTag) {
			    return false;
			  }
			  stack || (stack = new Stack);
			  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
			}

			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
			  if (!isObject(value) || isMasked(value)) {
			    return false;
			  }
			  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
			  return pattern.test(toSource(value));
			}

			/**
			 * The base implementation of `_.isTypedArray` without Node.js optimizations.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 */
			function baseIsTypedArray(value) {
			  return isObjectLike(value) &&
			    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
			}

			/**
			 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 */
			function baseKeys(object) {
			  if (!isPrototype(object)) {
			    return nativeKeys(object);
			  }
			  var result = [];
			  for (var key in Object(object)) {
			    if (hasOwnProperty.call(object, key) && key != 'constructor') {
			      result.push(key);
			    }
			  }
			  return result;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for arrays with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Array} array The array to compare.
			 * @param {Array} other The other array to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `array` and `other` objects.
			 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
			 */
			function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
			  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			      arrLength = array.length,
			      othLength = other.length;

			  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
			    return false;
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(array);
			  if (stacked && stack.get(other)) {
			    return stacked == other;
			  }
			  var index = -1,
			      result = true,
			      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

			  stack.set(array, other);
			  stack.set(other, array);

			  // Ignore non-index properties.
			  while (++index < arrLength) {
			    var arrValue = array[index],
			        othValue = other[index];

			    if (customizer) {
			      var compared = isPartial
			        ? customizer(othValue, arrValue, index, other, array, stack)
			        : customizer(arrValue, othValue, index, array, other, stack);
			    }
			    if (compared !== undefined) {
			      if (compared) {
			        continue;
			      }
			      result = false;
			      break;
			    }
			    // Recursively compare arrays (susceptible to call stack limits).
			    if (seen) {
			      if (!arraySome(other, function(othValue, othIndex) {
			            if (!cacheHas(seen, othIndex) &&
			                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			              return seen.push(othIndex);
			            }
			          })) {
			        result = false;
			        break;
			      }
			    } else if (!(
			          arrValue === othValue ||
			            equalFunc(arrValue, othValue, bitmask, customizer, stack)
			        )) {
			      result = false;
			      break;
			    }
			  }
			  stack['delete'](array);
			  stack['delete'](other);
			  return result;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for comparing objects of
			 * the same `toStringTag`.
			 *
			 * **Note:** This function only supports comparing values with tags of
			 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {string} tag The `toStringTag` of the objects to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
			  switch (tag) {
			    case dataViewTag:
			      if ((object.byteLength != other.byteLength) ||
			          (object.byteOffset != other.byteOffset)) {
			        return false;
			      }
			      object = object.buffer;
			      other = other.buffer;

			    case arrayBufferTag:
			      if ((object.byteLength != other.byteLength) ||
			          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
			        return false;
			      }
			      return true;

			    case boolTag:
			    case dateTag:
			    case numberTag:
			      // Coerce booleans to `1` or `0` and dates to milliseconds.
			      // Invalid dates are coerced to `NaN`.
			      return eq(+object, +other);

			    case errorTag:
			      return object.name == other.name && object.message == other.message;

			    case regexpTag:
			    case stringTag:
			      // Coerce regexes to strings and treat strings, primitives and objects,
			      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
			      // for more details.
			      return object == (other + '');

			    case mapTag:
			      var convert = mapToArray;

			    case setTag:
			      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
			      convert || (convert = setToArray);

			      if (object.size != other.size && !isPartial) {
			        return false;
			      }
			      // Assume cyclic values are equal.
			      var stacked = stack.get(object);
			      if (stacked) {
			        return stacked == other;
			      }
			      bitmask |= COMPARE_UNORDERED_FLAG;

			      // Recursively compare objects (susceptible to call stack limits).
			      stack.set(object, other);
			      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			      stack['delete'](object);
			      return result;

			    case symbolTag:
			      if (symbolValueOf) {
			        return symbolValueOf.call(object) == symbolValueOf.call(other);
			      }
			  }
			  return false;
			}

			/**
			 * A specialized version of `baseIsEqualDeep` for objects with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
			  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			      objProps = getAllKeys(object),
			      objLength = objProps.length,
			      othProps = getAllKeys(other),
			      othLength = othProps.length;

			  if (objLength != othLength && !isPartial) {
			    return false;
			  }
			  var index = objLength;
			  while (index--) {
			    var key = objProps[index];
			    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
			      return false;
			    }
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(object);
			  if (stacked && stack.get(other)) {
			    return stacked == other;
			  }
			  var result = true;
			  stack.set(object, other);
			  stack.set(other, object);

			  var skipCtor = isPartial;
			  while (++index < objLength) {
			    key = objProps[index];
			    var objValue = object[key],
			        othValue = other[key];

			    if (customizer) {
			      var compared = isPartial
			        ? customizer(othValue, objValue, key, other, object, stack)
			        : customizer(objValue, othValue, key, object, other, stack);
			    }
			    // Recursively compare objects (susceptible to call stack limits).
			    if (!(compared === undefined
			          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
			          : compared
			        )) {
			      result = false;
			      break;
			    }
			    skipCtor || (skipCtor = key == 'constructor');
			  }
			  if (result && !skipCtor) {
			    var objCtor = object.constructor,
			        othCtor = other.constructor;

			    // Non `Object` object instances with different constructors are not equal.
			    if (objCtor != othCtor &&
			        ('constructor' in object && 'constructor' in other) &&
			        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
			          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
			      result = false;
			    }
			  }
			  stack['delete'](object);
			  stack['delete'](other);
			  return result;
			}

			/**
			 * Creates an array of own enumerable property names and symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names and symbols.
			 */
			function getAllKeys(object) {
			  return baseGetAllKeys(object, keys, getSymbols);
			}

			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
			  var data = map.__data__;
			  return isKeyable(key)
			    ? data[typeof key == 'string' ? 'string' : 'hash']
			    : data.map;
			}

			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
			  var value = getValue(object, key);
			  return baseIsNative(value) ? value : undefined;
			}

			/**
			 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the raw `toStringTag`.
			 */
			function getRawTag(value) {
			  var isOwn = hasOwnProperty.call(value, symToStringTag),
			      tag = value[symToStringTag];

			  try {
			    value[symToStringTag] = undefined;
			    var unmasked = true;
			  } catch (e) {}

			  var result = nativeObjectToString.call(value);
			  if (unmasked) {
			    if (isOwn) {
			      value[symToStringTag] = tag;
			    } else {
			      delete value[symToStringTag];
			    }
			  }
			  return result;
			}

			/**
			 * Creates an array of the own enumerable symbols of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of symbols.
			 */
			var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
			  if (object == null) {
			    return [];
			  }
			  object = Object(object);
			  return arrayFilter(nativeGetSymbols(object), function(symbol) {
			    return propertyIsEnumerable.call(object, symbol);
			  });
			};

			/**
			 * Gets the `toStringTag` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			var getTag = baseGetTag;

			// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
			if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
			    (Map && getTag(new Map) != mapTag) ||
			    (Promise && getTag(Promise.resolve()) != promiseTag) ||
			    (Set && getTag(new Set) != setTag) ||
			    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
			  getTag = function(value) {
			    var result = baseGetTag(value),
			        Ctor = result == objectTag ? value.constructor : undefined,
			        ctorString = Ctor ? toSource(Ctor) : '';

			    if (ctorString) {
			      switch (ctorString) {
			        case dataViewCtorString: return dataViewTag;
			        case mapCtorString: return mapTag;
			        case promiseCtorString: return promiseTag;
			        case setCtorString: return setTag;
			        case weakMapCtorString: return weakMapTag;
			      }
			    }
			    return result;
			  };
			}

			/**
			 * Checks if `value` is a valid array-like index.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
			 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
			 */
			function isIndex(value, length) {
			  length = length == null ? MAX_SAFE_INTEGER : length;
			  return !!length &&
			    (typeof value == 'number' || reIsUint.test(value)) &&
			    (value > -1 && value % 1 == 0 && value < length);
			}

			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
			  var type = typeof value;
			  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
			    ? (value !== '__proto__')
			    : (value === null);
			}

			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
			  return !!maskSrcKey && (maskSrcKey in func);
			}

			/**
			 * Checks if `value` is likely a prototype object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			 */
			function isPrototype(value) {
			  var Ctor = value && value.constructor,
			      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

			  return value === proto;
			}

			/**
			 * Converts `value` to a string using `Object.prototype.toString`.
			 *
			 * @private
			 * @param {*} value The value to convert.
			 * @returns {string} Returns the converted string.
			 */
			function objectToString(value) {
			  return nativeObjectToString.call(value);
			}

			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to convert.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
			  if (func != null) {
			    try {
			      return funcToString.call(func);
			    } catch (e) {}
			    try {
			      return (func + '');
			    } catch (e) {}
			  }
			  return '';
			}

			/**
			 * Performs a
			 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * comparison between two values to determine if they are equivalent.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.eq(object, object);
			 * // => true
			 *
			 * _.eq(object, other);
			 * // => false
			 *
			 * _.eq('a', 'a');
			 * // => true
			 *
			 * _.eq('a', Object('a'));
			 * // => false
			 *
			 * _.eq(NaN, NaN);
			 * // => true
			 */
			function eq(value, other) {
			  return value === other || (value !== value && other !== other);
			}

			/**
			 * Checks if `value` is likely an `arguments` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArguments(function() { return arguments; }());
			 * // => true
			 *
			 * _.isArguments([1, 2, 3]);
			 * // => false
			 */
			var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
			  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
			    !propertyIsEnumerable.call(value, 'callee');
			};

			/**
			 * Checks if `value` is classified as an `Array` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
			 * @example
			 *
			 * _.isArray([1, 2, 3]);
			 * // => true
			 *
			 * _.isArray(document.body.children);
			 * // => false
			 *
			 * _.isArray('abc');
			 * // => false
			 *
			 * _.isArray(_.noop);
			 * // => false
			 */
			var isArray = Array.isArray;

			/**
			 * Checks if `value` is array-like. A value is considered array-like if it's
			 * not a function and has a `value.length` that's an integer greater than or
			 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			 * @example
			 *
			 * _.isArrayLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLike(document.body.children);
			 * // => true
			 *
			 * _.isArrayLike('abc');
			 * // => true
			 *
			 * _.isArrayLike(_.noop);
			 * // => false
			 */
			function isArrayLike(value) {
			  return value != null && isLength(value.length) && !isFunction(value);
			}

			/**
			 * Checks if `value` is a buffer.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.3.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			 * @example
			 *
			 * _.isBuffer(new Buffer(2));
			 * // => true
			 *
			 * _.isBuffer(new Uint8Array(2));
			 * // => false
			 */
			var isBuffer = nativeIsBuffer || stubFalse;

			/**
			 * Performs a deep comparison between two values to determine if they are
			 * equivalent.
			 *
			 * **Note:** This method supports comparing arrays, array buffers, booleans,
			 * date objects, error objects, maps, numbers, `Object` objects, regexes,
			 * sets, strings, symbols, and typed arrays. `Object` objects are compared
			 * by their own, not inherited, enumerable properties. Functions and DOM
			 * nodes are compared by strict equality, i.e. `===`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.isEqual(object, other);
			 * // => true
			 *
			 * object === other;
			 * // => false
			 */
			function isEqual(value, other) {
			  return baseIsEqual(value, other);
			}

			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			  if (!isObject(value)) {
			    return false;
			  }
			  // The use of `Object#toString` avoids issues with the `typeof` operator
			  // in Safari 9 which returns 'object' for typed arrays and other constructors.
			  var tag = baseGetTag(value);
			  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
			}

			/**
			 * Checks if `value` is a valid array-like length.
			 *
			 * **Note:** This method is loosely based on
			 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
			 * @example
			 *
			 * _.isLength(3);
			 * // => true
			 *
			 * _.isLength(Number.MIN_VALUE);
			 * // => false
			 *
			 * _.isLength(Infinity);
			 * // => false
			 *
			 * _.isLength('3');
			 * // => false
			 */
			function isLength(value) {
			  return typeof value == 'number' &&
			    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
			 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
			 * @example
			 *
			 * _.isObject({});
			 * // => true
			 *
			 * _.isObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isObject(_.noop);
			 * // => true
			 *
			 * _.isObject(null);
			 * // => false
			 */
			function isObject(value) {
			  var type = typeof value;
			  return value != null && (type == 'object' || type == 'function');
			}

			/**
			 * Checks if `value` is object-like. A value is object-like if it's not `null`
			 * and has a `typeof` result of "object".
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
			 * @example
			 *
			 * _.isObjectLike({});
			 * // => true
			 *
			 * _.isObjectLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isObjectLike(_.noop);
			 * // => false
			 *
			 * _.isObjectLike(null);
			 * // => false
			 */
			function isObjectLike(value) {
			  return value != null && typeof value == 'object';
			}

			/**
			 * Checks if `value` is classified as a typed array.
			 *
			 * @static
			 * @memberOf _
			 * @since 3.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 * @example
			 *
			 * _.isTypedArray(new Uint8Array);
			 * // => true
			 *
			 * _.isTypedArray([]);
			 * // => false
			 */
			var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

			/**
			 * Creates an array of the own enumerable property names of `object`.
			 *
			 * **Note:** Non-object values are coerced to objects. See the
			 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
			 * for more details.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Object
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the array of property names.
			 * @example
			 *
			 * function Foo() {
			 *   this.a = 1;
			 *   this.b = 2;
			 * }
			 *
			 * Foo.prototype.c = 3;
			 *
			 * _.keys(new Foo);
			 * // => ['a', 'b'] (iteration order is not guaranteed)
			 *
			 * _.keys('hi');
			 * // => ['0', '1']
			 */
			function keys(object) {
			  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
			}

			/**
			 * This method returns a new empty array.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {Array} Returns the new empty array.
			 * @example
			 *
			 * var arrays = _.times(2, _.stubArray);
			 *
			 * console.log(arrays);
			 * // => [[], []]
			 *
			 * console.log(arrays[0] === arrays[1]);
			 * // => false
			 */
			function stubArray() {
			  return [];
			}

			/**
			 * This method returns `false`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {boolean} Returns `false`.
			 * @example
			 *
			 * _.times(2, _.stubFalse);
			 * // => [false, false]
			 */
			function stubFalse() {
			  return false;
			}

			module.exports = isEqual; 
		} (lodash_isequal, lodash_isequal.exports));
		return lodash_isequal.exports;
	}

	var AttributeMap = {};

	var hasRequiredAttributeMap;

	function requireAttributeMap () {
		if (hasRequiredAttributeMap) return AttributeMap;
		hasRequiredAttributeMap = 1;
		Object.defineProperty(AttributeMap, "__esModule", { value: true });
		const cloneDeep = requireLodash_clonedeep();
		const isEqual = requireLodash_isequal();
		var AttributeMap$1;
		(function (AttributeMap) {
		    function compose(a = {}, b = {}, keepNull = false) {
		        if (typeof a !== 'object') {
		            a = {};
		        }
		        if (typeof b !== 'object') {
		            b = {};
		        }
		        let attributes = cloneDeep(b);
		        if (!keepNull) {
		            attributes = Object.keys(attributes).reduce((copy, key) => {
		                if (attributes[key] != null) {
		                    copy[key] = attributes[key];
		                }
		                return copy;
		            }, {});
		        }
		        for (const key in a) {
		            if (a[key] !== undefined && b[key] === undefined) {
		                attributes[key] = a[key];
		            }
		        }
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.compose = compose;
		    function diff(a = {}, b = {}) {
		        if (typeof a !== 'object') {
		            a = {};
		        }
		        if (typeof b !== 'object') {
		            b = {};
		        }
		        const attributes = Object.keys(a)
		            .concat(Object.keys(b))
		            .reduce((attrs, key) => {
		            if (!isEqual(a[key], b[key])) {
		                attrs[key] = b[key] === undefined ? null : b[key];
		            }
		            return attrs;
		        }, {});
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.diff = diff;
		    function invert(attr = {}, base = {}) {
		        attr = attr || {};
		        const baseInverted = Object.keys(base).reduce((memo, key) => {
		            if (base[key] !== attr[key] && attr[key] !== undefined) {
		                memo[key] = base[key];
		            }
		            return memo;
		        }, {});
		        return Object.keys(attr).reduce((memo, key) => {
		            if (attr[key] !== base[key] && base[key] === undefined) {
		                memo[key] = null;
		            }
		            return memo;
		        }, baseInverted);
		    }
		    AttributeMap.invert = invert;
		    function transform(a, b, priority = false) {
		        if (typeof a !== 'object') {
		            return b;
		        }
		        if (typeof b !== 'object') {
		            return undefined;
		        }
		        if (!priority) {
		            return b; // b simply overwrites us without priority
		        }
		        const attributes = Object.keys(b).reduce((attrs, key) => {
		            if (a[key] === undefined) {
		                attrs[key] = b[key]; // null is a valid value
		            }
		            return attrs;
		        }, {});
		        return Object.keys(attributes).length > 0 ? attributes : undefined;
		    }
		    AttributeMap.transform = transform;
		})(AttributeMap$1 || (AttributeMap$1 = {}));
		AttributeMap.default = AttributeMap$1;
		
		return AttributeMap;
	}

	var Op = {};

	var hasRequiredOp;

	function requireOp () {
		if (hasRequiredOp) return Op;
		hasRequiredOp = 1;
		Object.defineProperty(Op, "__esModule", { value: true });
		var Op$1;
		(function (Op) {
		    function length(op) {
		        if (typeof op.delete === 'number') {
		            return op.delete;
		        }
		        else if (typeof op.retain === 'number') {
		            return op.retain;
		        }
		        else if (typeof op.retain === 'object' && op.retain !== null) {
		            return 1;
		        }
		        else {
		            return typeof op.insert === 'string' ? op.insert.length : 1;
		        }
		    }
		    Op.length = length;
		})(Op$1 || (Op$1 = {}));
		Op.default = Op$1;
		
		return Op;
	}

	var OpIterator = {};

	var hasRequiredOpIterator;

	function requireOpIterator () {
		if (hasRequiredOpIterator) return OpIterator;
		hasRequiredOpIterator = 1;
		Object.defineProperty(OpIterator, "__esModule", { value: true });
		const Op_1 = requireOp();
		class Iterator {
		    constructor(ops) {
		        this.ops = ops;
		        this.index = 0;
		        this.offset = 0;
		    }
		    hasNext() {
		        return this.peekLength() < Infinity;
		    }
		    next(length) {
		        if (!length) {
		            length = Infinity;
		        }
		        const nextOp = this.ops[this.index];
		        if (nextOp) {
		            const offset = this.offset;
		            const opLength = Op_1.default.length(nextOp);
		            if (length >= opLength - offset) {
		                length = opLength - offset;
		                this.index += 1;
		                this.offset = 0;
		            }
		            else {
		                this.offset += length;
		            }
		            if (typeof nextOp.delete === 'number') {
		                return { delete: length };
		            }
		            else {
		                const retOp = {};
		                if (nextOp.attributes) {
		                    retOp.attributes = nextOp.attributes;
		                }
		                if (typeof nextOp.retain === 'number') {
		                    retOp.retain = length;
		                }
		                else if (typeof nextOp.retain === 'object' &&
		                    nextOp.retain !== null) {
		                    // offset should === 0, length should === 1
		                    retOp.retain = nextOp.retain;
		                }
		                else if (typeof nextOp.insert === 'string') {
		                    retOp.insert = nextOp.insert.substr(offset, length);
		                }
		                else {
		                    // offset should === 0, length should === 1
		                    retOp.insert = nextOp.insert;
		                }
		                return retOp;
		            }
		        }
		        else {
		            return { retain: Infinity };
		        }
		    }
		    peek() {
		        return this.ops[this.index];
		    }
		    peekLength() {
		        if (this.ops[this.index]) {
		            // Should never return 0 if our index is being managed correctly
		            return Op_1.default.length(this.ops[this.index]) - this.offset;
		        }
		        else {
		            return Infinity;
		        }
		    }
		    peekType() {
		        const op = this.ops[this.index];
		        if (op) {
		            if (typeof op.delete === 'number') {
		                return 'delete';
		            }
		            else if (typeof op.retain === 'number' ||
		                (typeof op.retain === 'object' && op.retain !== null)) {
		                return 'retain';
		            }
		            else {
		                return 'insert';
		            }
		        }
		        return 'retain';
		    }
		    rest() {
		        if (!this.hasNext()) {
		            return [];
		        }
		        else if (this.offset === 0) {
		            return this.ops.slice(this.index);
		        }
		        else {
		            const offset = this.offset;
		            const index = this.index;
		            const next = this.next();
		            const rest = this.ops.slice(this.index);
		            this.offset = offset;
		            this.index = index;
		            return [next].concat(rest);
		        }
		    }
		}
		OpIterator.default = Iterator;
		
		return OpIterator;
	}

	var hasRequiredDelta;

	function requireDelta () {
		if (hasRequiredDelta) return Delta$1.exports;
		hasRequiredDelta = 1;
		(function (module, exports) {
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.AttributeMap = exports.OpIterator = exports.Op = void 0;
			const diff = requireDiff();
			const cloneDeep = requireLodash_clonedeep();
			const isEqual = requireLodash_isequal();
			const AttributeMap_1 = requireAttributeMap();
			exports.AttributeMap = AttributeMap_1.default;
			const Op_1 = requireOp();
			exports.Op = Op_1.default;
			const OpIterator_1 = requireOpIterator();
			exports.OpIterator = OpIterator_1.default;
			const NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
			const getEmbedTypeAndData = (a, b) => {
			    if (typeof a !== 'object' || a === null) {
			        throw new Error(`cannot retain a ${typeof a}`);
			    }
			    if (typeof b !== 'object' || b === null) {
			        throw new Error(`cannot retain a ${typeof b}`);
			    }
			    const embedType = Object.keys(a)[0];
			    if (!embedType || embedType !== Object.keys(b)[0]) {
			        throw new Error(`embed types not matched: ${embedType} != ${Object.keys(b)[0]}`);
			    }
			    return [embedType, a[embedType], b[embedType]];
			};
			class Delta {
			    constructor(ops) {
			        // Assume we are given a well formed ops
			        if (Array.isArray(ops)) {
			            this.ops = ops;
			        }
			        else if (ops != null && Array.isArray(ops.ops)) {
			            this.ops = ops.ops;
			        }
			        else {
			            this.ops = [];
			        }
			    }
			    static registerEmbed(embedType, handler) {
			        this.handlers[embedType] = handler;
			    }
			    static unregisterEmbed(embedType) {
			        delete this.handlers[embedType];
			    }
			    static getHandler(embedType) {
			        const handler = this.handlers[embedType];
			        if (!handler) {
			            throw new Error(`no handlers for embed type "${embedType}"`);
			        }
			        return handler;
			    }
			    insert(arg, attributes) {
			        const newOp = {};
			        if (typeof arg === 'string' && arg.length === 0) {
			            return this;
			        }
			        newOp.insert = arg;
			        if (attributes != null &&
			            typeof attributes === 'object' &&
			            Object.keys(attributes).length > 0) {
			            newOp.attributes = attributes;
			        }
			        return this.push(newOp);
			    }
			    delete(length) {
			        if (length <= 0) {
			            return this;
			        }
			        return this.push({ delete: length });
			    }
			    retain(length, attributes) {
			        if (typeof length === 'number' && length <= 0) {
			            return this;
			        }
			        const newOp = { retain: length };
			        if (attributes != null &&
			            typeof attributes === 'object' &&
			            Object.keys(attributes).length > 0) {
			            newOp.attributes = attributes;
			        }
			        return this.push(newOp);
			    }
			    push(newOp) {
			        let index = this.ops.length;
			        let lastOp = this.ops[index - 1];
			        newOp = cloneDeep(newOp);
			        if (typeof lastOp === 'object') {
			            if (typeof newOp.delete === 'number' &&
			                typeof lastOp.delete === 'number') {
			                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
			                return this;
			            }
			            // Since it does not matter if we insert before or after deleting at the same index,
			            // always prefer to insert first
			            if (typeof lastOp.delete === 'number' && newOp.insert != null) {
			                index -= 1;
			                lastOp = this.ops[index - 1];
			                if (typeof lastOp !== 'object') {
			                    this.ops.unshift(newOp);
			                    return this;
			                }
			            }
			            if (isEqual(newOp.attributes, lastOp.attributes)) {
			                if (typeof newOp.insert === 'string' &&
			                    typeof lastOp.insert === 'string') {
			                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
			                    if (typeof newOp.attributes === 'object') {
			                        this.ops[index - 1].attributes = newOp.attributes;
			                    }
			                    return this;
			                }
			                else if (typeof newOp.retain === 'number' &&
			                    typeof lastOp.retain === 'number') {
			                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
			                    if (typeof newOp.attributes === 'object') {
			                        this.ops[index - 1].attributes = newOp.attributes;
			                    }
			                    return this;
			                }
			            }
			        }
			        if (index === this.ops.length) {
			            this.ops.push(newOp);
			        }
			        else {
			            this.ops.splice(index, 0, newOp);
			        }
			        return this;
			    }
			    chop() {
			        const lastOp = this.ops[this.ops.length - 1];
			        if (lastOp && typeof lastOp.retain === 'number' && !lastOp.attributes) {
			            this.ops.pop();
			        }
			        return this;
			    }
			    filter(predicate) {
			        return this.ops.filter(predicate);
			    }
			    forEach(predicate) {
			        this.ops.forEach(predicate);
			    }
			    map(predicate) {
			        return this.ops.map(predicate);
			    }
			    partition(predicate) {
			        const passed = [];
			        const failed = [];
			        this.forEach((op) => {
			            const target = predicate(op) ? passed : failed;
			            target.push(op);
			        });
			        return [passed, failed];
			    }
			    reduce(predicate, initialValue) {
			        return this.ops.reduce(predicate, initialValue);
			    }
			    changeLength() {
			        return this.reduce((length, elem) => {
			            if (elem.insert) {
			                return length + Op_1.default.length(elem);
			            }
			            else if (elem.delete) {
			                return length - elem.delete;
			            }
			            return length;
			        }, 0);
			    }
			    length() {
			        return this.reduce((length, elem) => {
			            return length + Op_1.default.length(elem);
			        }, 0);
			    }
			    slice(start = 0, end = Infinity) {
			        const ops = [];
			        const iter = new OpIterator_1.default(this.ops);
			        let index = 0;
			        while (index < end && iter.hasNext()) {
			            let nextOp;
			            if (index < start) {
			                nextOp = iter.next(start - index);
			            }
			            else {
			                nextOp = iter.next(end - index);
			                ops.push(nextOp);
			            }
			            index += Op_1.default.length(nextOp);
			        }
			        return new Delta(ops);
			    }
			    compose(other) {
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        const ops = [];
			        const firstOther = otherIter.peek();
			        if (firstOther != null &&
			            typeof firstOther.retain === 'number' &&
			            firstOther.attributes == null) {
			            let firstLeft = firstOther.retain;
			            while (thisIter.peekType() === 'insert' &&
			                thisIter.peekLength() <= firstLeft) {
			                firstLeft -= thisIter.peekLength();
			                ops.push(thisIter.next());
			            }
			            if (firstOther.retain - firstLeft > 0) {
			                otherIter.next(firstOther.retain - firstLeft);
			            }
			        }
			        const delta = new Delta(ops);
			        while (thisIter.hasNext() || otherIter.hasNext()) {
			            if (otherIter.peekType() === 'insert') {
			                delta.push(otherIter.next());
			            }
			            else if (thisIter.peekType() === 'delete') {
			                delta.push(thisIter.next());
			            }
			            else {
			                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
			                const thisOp = thisIter.next(length);
			                const otherOp = otherIter.next(length);
			                if (otherOp.retain) {
			                    const newOp = {};
			                    if (typeof thisOp.retain === 'number') {
			                        newOp.retain =
			                            typeof otherOp.retain === 'number' ? length : otherOp.retain;
			                    }
			                    else {
			                        if (typeof otherOp.retain === 'number') {
			                            if (thisOp.retain == null) {
			                                newOp.insert = thisOp.insert;
			                            }
			                            else {
			                                newOp.retain = thisOp.retain;
			                            }
			                        }
			                        else {
			                            const action = thisOp.retain == null ? 'insert' : 'retain';
			                            const [embedType, thisData, otherData] = getEmbedTypeAndData(thisOp[action], otherOp.retain);
			                            const handler = Delta.getHandler(embedType);
			                            newOp[action] = {
			                                [embedType]: handler.compose(thisData, otherData, action === 'retain'),
			                            };
			                        }
			                    }
			                    // Preserve null when composing with a retain, otherwise remove it for inserts
			                    const attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
			                    if (attributes) {
			                        newOp.attributes = attributes;
			                    }
			                    delta.push(newOp);
			                    // Optimization if rest of other is just retain
			                    if (!otherIter.hasNext() &&
			                        isEqual(delta.ops[delta.ops.length - 1], newOp)) {
			                        const rest = new Delta(thisIter.rest());
			                        return delta.concat(rest).chop();
			                    }
			                    // Other op should be delete, we could be an insert or retain
			                    // Insert + delete cancels out
			                }
			                else if (typeof otherOp.delete === 'number' &&
			                    (typeof thisOp.retain === 'number' ||
			                        (typeof thisOp.retain === 'object' && thisOp.retain !== null))) {
			                    delta.push(otherOp);
			                }
			            }
			        }
			        return delta.chop();
			    }
			    concat(other) {
			        const delta = new Delta(this.ops.slice());
			        if (other.ops.length > 0) {
			            delta.push(other.ops[0]);
			            delta.ops = delta.ops.concat(other.ops.slice(1));
			        }
			        return delta;
			    }
			    diff(other, cursor) {
			        if (this.ops === other.ops) {
			            return new Delta();
			        }
			        const strings = [this, other].map((delta) => {
			            return delta
			                .map((op) => {
			                if (op.insert != null) {
			                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
			                }
			                const prep = delta === other ? 'on' : 'with';
			                throw new Error('diff() called ' + prep + ' non-document');
			            })
			                .join('');
			        });
			        const retDelta = new Delta();
			        const diffResult = diff(strings[0], strings[1], cursor, true);
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        diffResult.forEach((component) => {
			            let length = component[1].length;
			            while (length > 0) {
			                let opLength = 0;
			                switch (component[0]) {
			                    case diff.INSERT:
			                        opLength = Math.min(otherIter.peekLength(), length);
			                        retDelta.push(otherIter.next(opLength));
			                        break;
			                    case diff.DELETE:
			                        opLength = Math.min(length, thisIter.peekLength());
			                        thisIter.next(opLength);
			                        retDelta.delete(opLength);
			                        break;
			                    case diff.EQUAL:
			                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
			                        const thisOp = thisIter.next(opLength);
			                        const otherOp = otherIter.next(opLength);
			                        if (isEqual(thisOp.insert, otherOp.insert)) {
			                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
			                        }
			                        else {
			                            retDelta.push(otherOp).delete(opLength);
			                        }
			                        break;
			                }
			                length -= opLength;
			            }
			        });
			        return retDelta.chop();
			    }
			    eachLine(predicate, newline = '\n') {
			        const iter = new OpIterator_1.default(this.ops);
			        let line = new Delta();
			        let i = 0;
			        while (iter.hasNext()) {
			            if (iter.peekType() !== 'insert') {
			                return;
			            }
			            const thisOp = iter.peek();
			            const start = Op_1.default.length(thisOp) - iter.peekLength();
			            const index = typeof thisOp.insert === 'string'
			                ? thisOp.insert.indexOf(newline, start) - start
			                : -1;
			            if (index < 0) {
			                line.push(iter.next());
			            }
			            else if (index > 0) {
			                line.push(iter.next(index));
			            }
			            else {
			                if (predicate(line, iter.next(1).attributes || {}, i) === false) {
			                    return;
			                }
			                i += 1;
			                line = new Delta();
			            }
			        }
			        if (line.length() > 0) {
			            predicate(line, {}, i);
			        }
			    }
			    invert(base) {
			        const inverted = new Delta();
			        this.reduce((baseIndex, op) => {
			            if (op.insert) {
			                inverted.delete(Op_1.default.length(op));
			            }
			            else if (typeof op.retain === 'number' && op.attributes == null) {
			                inverted.retain(op.retain);
			                return baseIndex + op.retain;
			            }
			            else if (op.delete || typeof op.retain === 'number') {
			                const length = (op.delete || op.retain);
			                const slice = base.slice(baseIndex, baseIndex + length);
			                slice.forEach((baseOp) => {
			                    if (op.delete) {
			                        inverted.push(baseOp);
			                    }
			                    else if (op.retain && op.attributes) {
			                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
			                    }
			                });
			                return baseIndex + length;
			            }
			            else if (typeof op.retain === 'object' && op.retain !== null) {
			                const slice = base.slice(baseIndex, baseIndex + 1);
			                const baseOp = new OpIterator_1.default(slice.ops).next();
			                const [embedType, opData, baseOpData] = getEmbedTypeAndData(op.retain, baseOp.insert);
			                const handler = Delta.getHandler(embedType);
			                inverted.retain({ [embedType]: handler.invert(opData, baseOpData) }, AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
			                return baseIndex + 1;
			            }
			            return baseIndex;
			        }, 0);
			        return inverted.chop();
			    }
			    transform(arg, priority = false) {
			        priority = !!priority;
			        if (typeof arg === 'number') {
			            return this.transformPosition(arg, priority);
			        }
			        const other = arg;
			        const thisIter = new OpIterator_1.default(this.ops);
			        const otherIter = new OpIterator_1.default(other.ops);
			        const delta = new Delta();
			        while (thisIter.hasNext() || otherIter.hasNext()) {
			            if (thisIter.peekType() === 'insert' &&
			                (priority || otherIter.peekType() !== 'insert')) {
			                delta.retain(Op_1.default.length(thisIter.next()));
			            }
			            else if (otherIter.peekType() === 'insert') {
			                delta.push(otherIter.next());
			            }
			            else {
			                const length = Math.min(thisIter.peekLength(), otherIter.peekLength());
			                const thisOp = thisIter.next(length);
			                const otherOp = otherIter.next(length);
			                if (thisOp.delete) {
			                    // Our delete either makes their delete redundant or removes their retain
			                    continue;
			                }
			                else if (otherOp.delete) {
			                    delta.push(otherOp);
			                }
			                else {
			                    const thisData = thisOp.retain;
			                    const otherData = otherOp.retain;
			                    let transformedData = typeof otherData === 'object' && otherData !== null
			                        ? otherData
			                        : length;
			                    if (typeof thisData === 'object' &&
			                        thisData !== null &&
			                        typeof otherData === 'object' &&
			                        otherData !== null) {
			                        const embedType = Object.keys(thisData)[0];
			                        if (embedType === Object.keys(otherData)[0]) {
			                            const handler = Delta.getHandler(embedType);
			                            if (handler) {
			                                transformedData = {
			                                    [embedType]: handler.transform(thisData[embedType], otherData[embedType], priority),
			                                };
			                            }
			                        }
			                    }
			                    // We retain either their retain or insert
			                    delta.retain(transformedData, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
			                }
			            }
			        }
			        return delta.chop();
			    }
			    transformPosition(index, priority = false) {
			        priority = !!priority;
			        const thisIter = new OpIterator_1.default(this.ops);
			        let offset = 0;
			        while (thisIter.hasNext() && offset <= index) {
			            const length = thisIter.peekLength();
			            const nextType = thisIter.peekType();
			            thisIter.next();
			            if (nextType === 'delete') {
			                index -= Math.min(length, index - offset);
			                continue;
			            }
			            else if (nextType === 'insert' && (offset < index || !priority)) {
			                index += length;
			            }
			            offset += length;
			        }
			        return index;
			    }
			}
			Delta.Op = Op_1.default;
			Delta.OpIterator = OpIterator_1.default;
			Delta.AttributeMap = AttributeMap_1.default;
			Delta.handlers = {};
			exports.default = Delta;
			{
			    module.exports = Delta;
			    module.exports.default = Delta;
			}
			
		} (Delta$1, Delta$1.exports));
		return Delta$1.exports;
	}

	var DeltaExports = requireDelta();
	var Delta = /*@__PURE__*/getDefaultExportFromCjs(DeltaExports);

	class Break extends EmbedBlot$1 {
	  static value() {
	    return undefined;
	  }
	  optimize() {
	    if (this.prev || this.next) {
	      this.remove();
	    }
	  }
	  length() {
	    return 0;
	  }
	  value() {
	    return '';
	  }
	}
	Break.blotName = 'break';
	Break.tagName = 'BR';

	let Text$1 = class Text extends TextBlot$1 {};

	// https://lodash.com/docs#escape
	const entityMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;'
	};
	function escapeText(text) {
	  return text.replace(/[&<>"']/g, s => entityMap[s]);
	}

	class Inline extends InlineBlot$1 {
	  static allowedChildren = [Inline, Break, EmbedBlot$1, Text$1];
	  // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
	  static order = ['cursor', 'inline',
	  // Must be lower
	  'link',
	  // Chrome wants <a> to be lower
	  'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher
	  ];
	  static compare(self, other) {
	    const selfIndex = Inline.order.indexOf(self);
	    const otherIndex = Inline.order.indexOf(other);
	    if (selfIndex >= 0 || otherIndex >= 0) {
	      return selfIndex - otherIndex;
	    }
	    if (self === other) {
	      return 0;
	    }
	    if (self < other) {
	      return -1;
	    }
	    return 1;
	  }
	  formatAt(index, length, name, value) {
	    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, Scope.BLOT)) {
	      const blot = this.isolate(index, length);
	      if (value) {
	        blot.wrap(name, value);
	      }
	    } else {
	      super.formatAt(index, length, name, value);
	    }
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
	      const parent = this.parent.isolate(this.offset(), this.length());
	      // @ts-expect-error TODO: make isolate generic
	      this.moveChildren(parent);
	      parent.wrap(this);
	    }
	  }
	}

	const NEWLINE_LENGTH = 1;
	class Block extends BlockBlot$1 {
	  cache = {};
	  delta() {
	    if (this.cache.delta == null) {
	      this.cache.delta = blockDelta(this);
	    }
	    return this.cache.delta;
	  }
	  deleteAt(index, length) {
	    super.deleteAt(index, length);
	    this.cache = {};
	  }
	  formatAt(index, length, name, value) {
	    if (length <= 0) return;
	    if (this.scroll.query(name, Scope.BLOCK)) {
	      if (index + length === this.length()) {
	        this.format(name, value);
	      }
	    } else {
	      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
	    }
	    this.cache = {};
	  }
	  insertAt(index, value, def) {
	    if (def != null) {
	      super.insertAt(index, value, def);
	      this.cache = {};
	      return;
	    }
	    if (value.length === 0) return;
	    const lines = value.split('\n');
	    const text = lines.shift();
	    if (text.length > 0) {
	      if (index < this.length() - 1 || this.children.tail == null) {
	        super.insertAt(Math.min(index, this.length() - 1), text);
	      } else {
	        this.children.tail.insertAt(this.children.tail.length(), text);
	      }
	      this.cache = {};
	    }
	    // TODO: Fix this next time the file is edited.
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    let block = this;
	    lines.reduce((lineIndex, line) => {
	      // @ts-expect-error Fix me later
	      block = block.split(lineIndex, true);
	      block.insertAt(0, line);
	      return line.length;
	    }, index + text.length);
	  }
	  insertBefore(blot, ref) {
	    const {
	      head
	    } = this.children;
	    super.insertBefore(blot, ref);
	    if (head instanceof Break) {
	      head.remove();
	    }
	    this.cache = {};
	  }
	  length() {
	    if (this.cache.length == null) {
	      this.cache.length = super.length() + NEWLINE_LENGTH;
	    }
	    return this.cache.length;
	  }
	  moveChildren(target, ref) {
	    super.moveChildren(target, ref);
	    this.cache = {};
	  }
	  optimize(context) {
	    super.optimize(context);
	    this.cache = {};
	  }
	  path(index) {
	    return super.path(index, true);
	  }
	  removeChild(child) {
	    super.removeChild(child);
	    this.cache = {};
	  }
	  split(index) {
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
	      const clone = this.clone();
	      if (index === 0) {
	        this.parent.insertBefore(clone, this);
	        return this;
	      }
	      this.parent.insertBefore(clone, this.next);
	      return clone;
	    }
	    const next = super.split(index, force);
	    this.cache = {};
	    return next;
	  }
	}
	Block.blotName = 'block';
	Block.tagName = 'P';
	Block.defaultChild = Break;
	Block.allowedChildren = [Break, Inline, EmbedBlot$1, Text$1];
	class BlockEmbed extends EmbedBlot$1 {
	  attach() {
	    super.attach();
	    this.attributes = new AttributorStore$1(this.domNode);
	  }
	  delta() {
	    return new Delta().insert(this.value(), {
	      ...this.formats(),
	      ...this.attributes.values()
	    });
	  }
	  format(name, value) {
	    const attribute = this.scroll.query(name, Scope.BLOCK_ATTRIBUTE);
	    if (attribute != null) {
	      // @ts-expect-error TODO: Scroll#query() should return Attributor when scope is attribute
	      this.attributes.attribute(attribute, value);
	    }
	  }
	  formatAt(index, length, name, value) {
	    this.format(name, value);
	  }
	  insertAt(index, value, def) {
	    if (def != null) {
	      super.insertAt(index, value, def);
	      return;
	    }
	    const lines = value.split('\n');
	    const text = lines.pop();
	    const blocks = lines.map(line => {
	      const block = this.scroll.create(Block.blotName);
	      block.insertAt(0, line);
	      return block;
	    });
	    const ref = this.split(index);
	    blocks.forEach(block => {
	      this.parent.insertBefore(block, ref);
	    });
	    if (text) {
	      this.parent.insertBefore(this.scroll.create('text', text), ref);
	    }
	  }
	}
	BlockEmbed.scope = Scope.BLOCK_BLOT;
	// It is important for cursor behavior BlockEmbeds use tags that are block level elements

	function blockDelta(blot) {
	  let filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  return blot.descendants(LeafBlot$1).reduce((delta, leaf) => {
	    if (leaf.length() === 0) {
	      return delta;
	    }
	    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
	  }, new Delta()).insert('\n', bubbleFormats(blot));
	}
	function bubbleFormats(blot) {
	  let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  if (blot == null) return formats;
	  if ('formats' in blot && typeof blot.formats === 'function') {
	    formats = {
	      ...formats,
	      ...blot.formats()
	    };
	    if (filter) {
	      // exclude syntax highlighting from deltas and getFormat()
	      delete formats['code-token'];
	    }
	  }
	  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
	    return formats;
	  }
	  return bubbleFormats(blot.parent, formats, filter);
	}

	class Cursor extends EmbedBlot$1 {
	  static blotName = 'cursor';
	  static className = 'ql-cursor';
	  static tagName = 'span';
	  static CONTENTS = '\uFEFF'; // Zero width no break space

	  static value() {
	    return undefined;
	  }
	  constructor(scroll, domNode, selection) {
	    super(scroll, domNode);
	    this.selection = selection;
	    this.textNode = document.createTextNode(Cursor.CONTENTS);
	    this.domNode.appendChild(this.textNode);
	    this.savedLength = 0;
	  }
	  detach() {
	    // super.detach() will also clear domNode.__blot
	    if (this.parent != null) this.parent.removeChild(this);
	  }
	  format(name, value) {
	    if (this.savedLength !== 0) {
	      super.format(name, value);
	      return;
	    }
	    // TODO: Fix this next time the file is edited.
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    let target = this;
	    let index = 0;
	    while (target != null && target.statics.scope !== Scope.BLOCK_BLOT) {
	      index += target.offset(target.parent);
	      target = target.parent;
	    }
	    if (target != null) {
	      this.savedLength = Cursor.CONTENTS.length;
	      // @ts-expect-error TODO: allow empty context in Parchment
	      target.optimize();
	      target.formatAt(index, Cursor.CONTENTS.length, name, value);
	      this.savedLength = 0;
	    }
	  }
	  index(node, offset) {
	    if (node === this.textNode) return 0;
	    return super.index(node, offset);
	  }
	  length() {
	    return this.savedLength;
	  }
	  position() {
	    return [this.textNode, this.textNode.data.length];
	  }
	  remove() {
	    super.remove();
	    // @ts-expect-error Fix me later
	    this.parent = null;
	  }
	  restore() {
	    if (this.selection.composing || this.parent == null) return null;
	    const range = this.selection.getNativeRange();
	    // Browser may push down styles/nodes inside the cursor blot.
	    // https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#push-down-values
	    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
	      // @ts-expect-error Fix me later
	      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
	    }
	    const prevTextBlot = this.prev instanceof Text$1 ? this.prev : null;
	    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
	    const nextTextBlot = this.next instanceof Text$1 ? this.next : null;
	    // @ts-expect-error TODO: make TextBlot.text public
	    const nextText = nextTextBlot ? nextTextBlot.text : '';
	    const {
	      textNode
	    } = this;
	    // take text from inside this blot and reset it
	    const newText = textNode.data.split(Cursor.CONTENTS).join('');
	    textNode.data = Cursor.CONTENTS;

	    // proactively merge TextBlots around cursor so that optimization
	    // doesn't lose the cursor.  the reason we are here in cursor.restore
	    // could be that the user clicked in prevTextBlot or nextTextBlot, or
	    // the user typed something.
	    let mergedTextBlot;
	    if (prevTextBlot) {
	      mergedTextBlot = prevTextBlot;
	      if (newText || nextTextBlot) {
	        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);
	        if (nextTextBlot) {
	          nextTextBlot.remove();
	        }
	      }
	    } else if (nextTextBlot) {
	      mergedTextBlot = nextTextBlot;
	      nextTextBlot.insertAt(0, newText);
	    } else {
	      const newTextNode = document.createTextNode(newText);
	      mergedTextBlot = this.scroll.create(newTextNode);
	      this.parent.insertBefore(mergedTextBlot, this);
	    }
	    this.remove();
	    if (range) {
	      // calculate selection to restore
	      const remapOffset = (node, offset) => {
	        if (prevTextBlot && node === prevTextBlot.domNode) {
	          return offset;
	        }
	        if (node === textNode) {
	          return prevTextLength + offset - 1;
	        }
	        if (nextTextBlot && node === nextTextBlot.domNode) {
	          return prevTextLength + newText.length + offset;
	        }
	        return null;
	      };
	      const start = remapOffset(range.start.node, range.start.offset);
	      const end = remapOffset(range.end.node, range.end.offset);
	      if (start !== null && end !== null) {
	        return {
	          startNode: mergedTextBlot.domNode,
	          startOffset: start,
	          endNode: mergedTextBlot.domNode,
	          endOffset: end
	        };
	      }
	    }
	    return null;
	  }
	  update(mutations, context) {
	    if (mutations.some(mutation => {
	      return mutation.type === 'characterData' && mutation.target === this.textNode;
	    })) {
	      const range = this.restore();
	      if (range) context.range = range;
	    }
	  }

	  // Avoid .ql-cursor being a descendant of `<a/>`.
	  // The reason is Safari pushes down `<a/>` on text insertion.
	  // That will cause DOM nodes not sync with the model.
	  //
	  // For example ({I} is the caret), given the markup:
	  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
	  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
	  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
	  // And then "x" will be inserted after `<a/>`:
	  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
	  optimize(context) {
	    // @ts-expect-error Fix me later
	    super.optimize(context);
	    let {
	      parent
	    } = this;
	    while (parent) {
	      if (parent.domNode.tagName === 'A') {
	        this.savedLength = Cursor.CONTENTS.length;
	        // @ts-expect-error TODO: make isolate generic
	        parent.isolate(this.offset(parent), this.length()).unwrap();
	        this.savedLength = 0;
	        break;
	      }
	      parent = parent.parent;
	    }
	  }
	  value() {
	    return '';
	  }
	}

	var eventemitter3 = {exports: {}};

	var hasRequiredEventemitter3;

	function requireEventemitter3 () {
		if (hasRequiredEventemitter3) return eventemitter3.exports;
		hasRequiredEventemitter3 = 1;
		(function (module) {

			var has = Object.prototype.hasOwnProperty
			  , prefix = '~';

			/**
			 * Constructor to create a storage for our `EE` objects.
			 * An `Events` instance is a plain object whose properties are event names.
			 *
			 * @constructor
			 * @private
			 */
			function Events() {}

			//
			// We try to not inherit from `Object.prototype`. In some engines creating an
			// instance in this way is faster than calling `Object.create(null)` directly.
			// If `Object.create(null)` is not supported we prefix the event names with a
			// character to make sure that the built-in object properties are not
			// overridden or used as an attack vector.
			//
			if (Object.create) {
			  Events.prototype = Object.create(null);

			  //
			  // This hack is needed because the `__proto__` property is still inherited in
			  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
			  //
			  if (!new Events().__proto__) prefix = false;
			}

			/**
			 * Representation of a single event listener.
			 *
			 * @param {Function} fn The listener function.
			 * @param {*} context The context to invoke the listener with.
			 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
			 * @constructor
			 * @private
			 */
			function EE(fn, context, once) {
			  this.fn = fn;
			  this.context = context;
			  this.once = once || false;
			}

			/**
			 * Add a listener for a given event.
			 *
			 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} context The context to invoke the listener with.
			 * @param {Boolean} once Specify if the listener is a one-time listener.
			 * @returns {EventEmitter}
			 * @private
			 */
			function addListener(emitter, event, fn, context, once) {
			  if (typeof fn !== 'function') {
			    throw new TypeError('The listener must be a function');
			  }

			  var listener = new EE(fn, context || emitter, once)
			    , evt = prefix ? prefix + event : event;

			  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
			  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
			  else emitter._events[evt] = [emitter._events[evt], listener];

			  return emitter;
			}

			/**
			 * Clear event by name.
			 *
			 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
			 * @param {(String|Symbol)} evt The Event name.
			 * @private
			 */
			function clearEvent(emitter, evt) {
			  if (--emitter._eventsCount === 0) emitter._events = new Events();
			  else delete emitter._events[evt];
			}

			/**
			 * Minimal `EventEmitter` interface that is molded against the Node.js
			 * `EventEmitter` interface.
			 *
			 * @constructor
			 * @public
			 */
			function EventEmitter() {
			  this._events = new Events();
			  this._eventsCount = 0;
			}

			/**
			 * Return an array listing the events for which the emitter has registered
			 * listeners.
			 *
			 * @returns {Array}
			 * @public
			 */
			EventEmitter.prototype.eventNames = function eventNames() {
			  var names = []
			    , events
			    , name;

			  if (this._eventsCount === 0) return names;

			  for (name in (events = this._events)) {
			    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
			  }

			  if (Object.getOwnPropertySymbols) {
			    return names.concat(Object.getOwnPropertySymbols(events));
			  }

			  return names;
			};

			/**
			 * Return the listeners registered for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Array} The registered listeners.
			 * @public
			 */
			EventEmitter.prototype.listeners = function listeners(event) {
			  var evt = prefix ? prefix + event : event
			    , handlers = this._events[evt];

			  if (!handlers) return [];
			  if (handlers.fn) return [handlers.fn];

			  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
			    ee[i] = handlers[i].fn;
			  }

			  return ee;
			};

			/**
			 * Return the number of listeners listening to a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Number} The number of listeners.
			 * @public
			 */
			EventEmitter.prototype.listenerCount = function listenerCount(event) {
			  var evt = prefix ? prefix + event : event
			    , listeners = this._events[evt];

			  if (!listeners) return 0;
			  if (listeners.fn) return 1;
			  return listeners.length;
			};

			/**
			 * Calls each of the listeners registered for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @returns {Boolean} `true` if the event had listeners, else `false`.
			 * @public
			 */
			EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
			  var evt = prefix ? prefix + event : event;

			  if (!this._events[evt]) return false;

			  var listeners = this._events[evt]
			    , len = arguments.length
			    , args
			    , i;

			  if (listeners.fn) {
			    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

			    switch (len) {
			      case 1: return listeners.fn.call(listeners.context), true;
			      case 2: return listeners.fn.call(listeners.context, a1), true;
			      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
			      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
			      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
			      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
			    }

			    for (i = 1, args = new Array(len -1); i < len; i++) {
			      args[i - 1] = arguments[i];
			    }

			    listeners.fn.apply(listeners.context, args);
			  } else {
			    var length = listeners.length
			      , j;

			    for (i = 0; i < length; i++) {
			      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

			      switch (len) {
			        case 1: listeners[i].fn.call(listeners[i].context); break;
			        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
			        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
			        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
			        default:
			          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
			            args[j - 1] = arguments[j];
			          }

			          listeners[i].fn.apply(listeners[i].context, args);
			      }
			    }
			  }

			  return true;
			};

			/**
			 * Add a listener for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} [context=this] The context to invoke the listener with.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.on = function on(event, fn, context) {
			  return addListener(this, event, fn, context, false);
			};

			/**
			 * Add a one-time listener for a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn The listener function.
			 * @param {*} [context=this] The context to invoke the listener with.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.once = function once(event, fn, context) {
			  return addListener(this, event, fn, context, true);
			};

			/**
			 * Remove the listeners of a given event.
			 *
			 * @param {(String|Symbol)} event The event name.
			 * @param {Function} fn Only remove the listeners that match this function.
			 * @param {*} context Only remove the listeners that have this context.
			 * @param {Boolean} once Only remove one-time listeners.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
			  var evt = prefix ? prefix + event : event;

			  if (!this._events[evt]) return this;
			  if (!fn) {
			    clearEvent(this, evt);
			    return this;
			  }

			  var listeners = this._events[evt];

			  if (listeners.fn) {
			    if (
			      listeners.fn === fn &&
			      (!once || listeners.once) &&
			      (!context || listeners.context === context)
			    ) {
			      clearEvent(this, evt);
			    }
			  } else {
			    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
			      if (
			        listeners[i].fn !== fn ||
			        (once && !listeners[i].once) ||
			        (context && listeners[i].context !== context)
			      ) {
			        events.push(listeners[i]);
			      }
			    }

			    //
			    // Reset the array, or remove it completely if we have no more listeners.
			    //
			    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
			    else clearEvent(this, evt);
			  }

			  return this;
			};

			/**
			 * Remove all listeners, or those of the specified event.
			 *
			 * @param {(String|Symbol)} [event] The event name.
			 * @returns {EventEmitter} `this`.
			 * @public
			 */
			EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
			  var evt;

			  if (event) {
			    evt = prefix ? prefix + event : event;
			    if (this._events[evt]) clearEvent(this, evt);
			  } else {
			    this._events = new Events();
			    this._eventsCount = 0;
			  }

			  return this;
			};

			//
			// Alias methods names because people roll like that.
			//
			EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
			EventEmitter.prototype.addListener = EventEmitter.prototype.on;

			//
			// Expose the prefix.
			//
			EventEmitter.prefixed = prefix;

			//
			// Allow `EventEmitter` to be imported as module namespace.
			//
			EventEmitter.EventEmitter = EventEmitter;

			//
			// Expose the module.
			//
			{
			  module.exports = EventEmitter;
			} 
		} (eventemitter3));
		return eventemitter3.exports;
	}

	var eventemitter3Exports = requireEventemitter3();
	var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

	var instances = new WeakMap();

	const levels = ['error', 'warn', 'log', 'info'];
	let level = 'warn';
	function debug$6(method) {
	  if (level) {
	    if (levels.indexOf(method) <= levels.indexOf(level)) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	      console[method](...args); // eslint-disable-line no-console
	    }
	  }
	}
	function namespace(ns) {
	  return levels.reduce((logger, method) => {
	    logger[method] = debug$6.bind(console, method, ns);
	    return logger;
	  }, {});
	}
	namespace.level = newLevel => {
	  level = newLevel;
	};
	debug$6.level = namespace.level;

	const debug$5 = namespace('quill:events');
	const EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];
	EVENTS.forEach(eventName => {
	  document.addEventListener(eventName, function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {
	      const quill = instances.get(node);
	      if (quill && quill.emitter) {
	        quill.emitter.handleDOM(...args);
	      }
	    });
	  });
	});
	class Emitter extends EventEmitter {
	  static events = {
	    EDITOR_CHANGE: 'editor-change',
	    SCROLL_BEFORE_UPDATE: 'scroll-before-update',
	    SCROLL_BLOT_MOUNT: 'scroll-blot-mount',
	    SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',
	    SCROLL_OPTIMIZE: 'scroll-optimize',
	    SCROLL_UPDATE: 'scroll-update',
	    SCROLL_EMBED_UPDATE: 'scroll-embed-update',
	    SELECTION_CHANGE: 'selection-change',
	    TEXT_CHANGE: 'text-change',
	    COMPOSITION_BEFORE_START: 'composition-before-start',
	    COMPOSITION_START: 'composition-start',
	    COMPOSITION_BEFORE_END: 'composition-before-end',
	    COMPOSITION_END: 'composition-end'
	  };
	  static sources = {
	    API: 'api',
	    SILENT: 'silent',
	    USER: 'user'
	  };
	  constructor() {
	    super();
	    this.domListeners = {};
	    this.on('error', debug$5.error);
	  }
	  emit() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	    debug$5.log.call(debug$5, ...args);
	    // @ts-expect-error
	    return super.emit(...args);
	  }
	  handleDOM(event) {
	    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }
	    (this.domListeners[event.type] || []).forEach(_ref => {
	      let {
	        node,
	        handler
	      } = _ref;
	      if (event.target === node || node.contains(event.target)) {
	        handler(event, ...args);
	      }
	    });
	  }
	  listenDOM(eventName, node, handler) {
	    if (!this.domListeners[eventName]) {
	      this.domListeners[eventName] = [];
	    }
	    this.domListeners[eventName].push({
	      node,
	      handler
	    });
	  }
	}

	const debug$4 = namespace('quill:selection');
	class Range {
	  constructor(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    this.index = index;
	    this.length = length;
	  }
	}
	class Selection {
	  constructor(scroll, emitter) {
	    this.emitter = emitter;
	    this.scroll = scroll;
	    this.composing = false;
	    this.mouseDown = false;
	    this.root = this.scroll.domNode;
	    // @ts-expect-error
	    this.cursor = this.scroll.create('cursor', this);
	    // savedRange is last non-null range
	    this.savedRange = new Range(0, 0);
	    this.lastRange = this.savedRange;
	    this.lastNative = null;
	    this.handleComposition();
	    this.handleDragging();
	    this.emitter.listenDOM('selectionchange', document, () => {
	      if (!this.mouseDown && !this.composing) {
	        setTimeout(this.update.bind(this, Emitter.sources.USER), 1);
	      }
	    });
	    this.emitter.on(Emitter.events.SCROLL_BEFORE_UPDATE, () => {
	      if (!this.hasFocus()) return;
	      const native = this.getNativeRange();
	      if (native == null) return;
	      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle
	      this.emitter.once(Emitter.events.SCROLL_UPDATE, (source, mutations) => {
	        try {
	          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {
	            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
	          }
	          const triggeredByTyping = mutations.some(mutation => mutation.type === 'characterData' || mutation.type === 'childList' || mutation.type === 'attributes' && mutation.target === this.root);
	          this.update(triggeredByTyping ? Emitter.sources.SILENT : source);
	        } catch (ignored) {
	          // ignore
	        }
	      });
	    });
	    this.emitter.on(Emitter.events.SCROLL_OPTIMIZE, (mutations, context) => {
	      if (context.range) {
	        const {
	          startNode,
	          startOffset,
	          endNode,
	          endOffset
	        } = context.range;
	        this.setNativeRange(startNode, startOffset, endNode, endOffset);
	        this.update(Emitter.sources.SILENT);
	      }
	    });
	    this.update(Emitter.sources.SILENT);
	  }
	  handleComposition() {
	    this.emitter.on(Emitter.events.COMPOSITION_BEFORE_START, () => {
	      this.composing = true;
	    });
	    this.emitter.on(Emitter.events.COMPOSITION_END, () => {
	      this.composing = false;
	      if (this.cursor.parent) {
	        const range = this.cursor.restore();
	        if (!range) return;
	        setTimeout(() => {
	          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
	        }, 1);
	      }
	    });
	  }
	  handleDragging() {
	    this.emitter.listenDOM('mousedown', document.body, () => {
	      this.mouseDown = true;
	    });
	    this.emitter.listenDOM('mouseup', document.body, () => {
	      this.mouseDown = false;
	      this.update(Emitter.sources.USER);
	    });
	  }
	  focus() {
	    if (this.hasFocus()) return;
	    this.root.focus({
	      preventScroll: true
	    });
	    this.setRange(this.savedRange);
	  }
	  format(format, value) {
	    this.scroll.update();
	    const nativeRange = this.getNativeRange();
	    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, Scope.BLOCK)) return;
	    if (nativeRange.start.node !== this.cursor.textNode) {
	      const blot = this.scroll.find(nativeRange.start.node, false);
	      if (blot == null) return;
	      // TODO Give blot ability to not split
	      if (blot instanceof LeafBlot$1) {
	        const after = blot.split(nativeRange.start.offset);
	        blot.parent.insertBefore(this.cursor, after);
	      } else {
	        // @ts-expect-error TODO: nativeRange.start.node doesn't seem to match function signature
	        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
	      }
	      this.cursor.attach();
	    }
	    this.cursor.format(format, value);
	    this.scroll.optimize();
	    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
	    this.update();
	  }
	  getBounds(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    const scrollLength = this.scroll.length();
	    index = Math.min(index, scrollLength - 1);
	    length = Math.min(index + length, scrollLength - 1) - index;
	    let node;
	    let [leaf, offset] = this.scroll.leaf(index);
	    if (leaf == null) return null;
	    if (length > 0 && offset === leaf.length()) {
	      const [next] = this.scroll.leaf(index + 1);
	      if (next) {
	        const [line] = this.scroll.line(index);
	        const [nextLine] = this.scroll.line(index + 1);
	        if (line === nextLine) {
	          leaf = next;
	          offset = 0;
	        }
	      }
	    }
	    [node, offset] = leaf.position(offset, true);
	    const range = document.createRange();
	    if (length > 0) {
	      range.setStart(node, offset);
	      [leaf, offset] = this.scroll.leaf(index + length);
	      if (leaf == null) return null;
	      [node, offset] = leaf.position(offset, true);
	      range.setEnd(node, offset);
	      return range.getBoundingClientRect();
	    }
	    let side = 'left';
	    let rect;
	    if (node instanceof Text) {
	      // Return null if the text node is empty because it is
	      // not able to get a useful client rect:
	      // https://github.com/w3c/csswg-drafts/issues/2514.
	      // Empty text nodes are most likely caused by TextBlot#optimize()
	      // not getting called when editor content changes.
	      if (!node.data.length) {
	        return null;
	      }
	      if (offset < node.data.length) {
	        range.setStart(node, offset);
	        range.setEnd(node, offset + 1);
	      } else {
	        range.setStart(node, offset - 1);
	        range.setEnd(node, offset);
	        side = 'right';
	      }
	      rect = range.getBoundingClientRect();
	    } else {
	      if (!(leaf.domNode instanceof Element)) return null;
	      rect = leaf.domNode.getBoundingClientRect();
	      if (offset > 0) side = 'right';
	    }
	    return {
	      bottom: rect.top + rect.height,
	      height: rect.height,
	      left: rect[side],
	      right: rect[side],
	      top: rect.top,
	      width: 0
	    };
	  }
	  getNativeRange() {
	    const selection = document.getSelection();
	    if (selection == null || selection.rangeCount <= 0) return null;
	    const nativeRange = selection.getRangeAt(0);
	    if (nativeRange == null) return null;
	    const range = this.normalizeNative(nativeRange);
	    debug$4.info('getNativeRange', range);
	    return range;
	  }
	  getRange() {
	    const root = this.scroll.domNode;
	    if ('isConnected' in root && !root.isConnected) {
	      // document.getSelection() forces layout on Blink, so we trend to
	      // not calling it.
	      return [null, null];
	    }
	    const normalized = this.getNativeRange();
	    if (normalized == null) return [null, null];
	    const range = this.normalizedToRange(normalized);
	    return [range, normalized];
	  }
	  hasFocus() {
	    return document.activeElement === this.root || document.activeElement != null && contains(this.root, document.activeElement);
	  }
	  normalizedToRange(range) {
	    const positions = [[range.start.node, range.start.offset]];
	    if (!range.native.collapsed) {
	      positions.push([range.end.node, range.end.offset]);
	    }
	    const indexes = positions.map(position => {
	      const [node, offset] = position;
	      const blot = this.scroll.find(node, true);
	      // @ts-expect-error Fix me later
	      const index = blot.offset(this.scroll);
	      if (offset === 0) {
	        return index;
	      }
	      if (blot instanceof LeafBlot$1) {
	        return index + blot.index(node, offset);
	      }
	      // @ts-expect-error Fix me later
	      return index + blot.length();
	    });
	    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
	    const start = Math.min(end, ...indexes);
	    return new Range(start, end - start);
	  }
	  normalizeNative(nativeRange) {
	    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
	      return null;
	    }
	    const range = {
	      start: {
	        node: nativeRange.startContainer,
	        offset: nativeRange.startOffset
	      },
	      end: {
	        node: nativeRange.endContainer,
	        offset: nativeRange.endOffset
	      },
	      native: nativeRange
	    };
	    [range.start, range.end].forEach(position => {
	      let {
	        node,
	        offset
	      } = position;
	      while (!(node instanceof Text) && node.childNodes.length > 0) {
	        if (node.childNodes.length > offset) {
	          node = node.childNodes[offset];
	          offset = 0;
	        } else if (node.childNodes.length === offset) {
	          // @ts-expect-error Fix me later
	          node = node.lastChild;
	          if (node instanceof Text) {
	            offset = node.data.length;
	          } else if (node.childNodes.length > 0) {
	            // Container case
	            offset = node.childNodes.length;
	          } else {
	            // Embed case
	            offset = node.childNodes.length + 1;
	          }
	        } else {
	          break;
	        }
	      }
	      position.node = node;
	      position.offset = offset;
	    });
	    return range;
	  }
	  rangeToNative(range) {
	    const scrollLength = this.scroll.length();
	    const getPosition = (index, inclusive) => {
	      index = Math.min(scrollLength - 1, index);
	      const [leaf, leafOffset] = this.scroll.leaf(index);
	      return leaf ? leaf.position(leafOffset, inclusive) : [null, -1];
	    };
	    return [...getPosition(range.index, false), ...getPosition(range.index + range.length, true)];
	  }
	  setNativeRange(startNode, startOffset) {
	    let endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
	    let endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
	    let force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	    debug$4.info('setNativeRange', startNode, startOffset, endNode, endOffset);
	    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null ||
	    // @ts-expect-error Fix me later
	    endNode.parentNode == null)) {
	      return;
	    }
	    const selection = document.getSelection();
	    if (selection == null) return;
	    if (startNode != null) {
	      if (!this.hasFocus()) this.root.focus({
	        preventScroll: true
	      });
	      const {
	        native
	      } = this.getNativeRange() || {};
	      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
	        if (startNode instanceof Element && startNode.tagName === 'BR') {
	          // @ts-expect-error Fix me later
	          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);
	          startNode = startNode.parentNode;
	        }
	        if (endNode instanceof Element && endNode.tagName === 'BR') {
	          // @ts-expect-error Fix me later
	          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);
	          endNode = endNode.parentNode;
	        }
	        const range = document.createRange();
	        // @ts-expect-error Fix me later
	        range.setStart(startNode, startOffset);
	        // @ts-expect-error Fix me later
	        range.setEnd(endNode, endOffset);
	        selection.removeAllRanges();
	        selection.addRange(range);
	      }
	    } else {
	      selection.removeAllRanges();
	      this.root.blur();
	    }
	  }
	  setRange(range) {
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Emitter.sources.API;
	    if (typeof force === 'string') {
	      source = force;
	      force = false;
	    }
	    debug$4.info('setRange', range);
	    if (range != null) {
	      const args = this.rangeToNative(range);
	      this.setNativeRange(...args, force);
	    } else {
	      this.setNativeRange(null);
	    }
	    this.update(source);
	  }
	  update() {
	    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Emitter.sources.USER;
	    const oldRange = this.lastRange;
	    const [lastRange, nativeRange] = this.getRange();
	    this.lastRange = lastRange;
	    this.lastNative = nativeRange;
	    if (this.lastRange != null) {
	      this.savedRange = this.lastRange;
	    }
	    if (!isEqual$1(oldRange, this.lastRange)) {
	      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
	        const range = this.cursor.restore();
	        if (range) {
	          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
	        }
	      }
	      const args = [Emitter.events.SELECTION_CHANGE, cloneDeep(this.lastRange), cloneDeep(oldRange), source];
	      this.emitter.emit(Emitter.events.EDITOR_CHANGE, ...args);
	      if (source !== Emitter.sources.SILENT) {
	        this.emitter.emit(...args);
	      }
	    }
	  }
	}
	function contains(parent, descendant) {
	  try {
	    // Firefox inserts inaccessible nodes around video elements
	    descendant.parentNode; // eslint-disable-line @typescript-eslint/no-unused-expressions
	  } catch (e) {
	    return false;
	  }
	  return parent.contains(descendant);
	}

	const ASCII = /^[ -~]*$/;
	class Editor {
	  constructor(scroll) {
	    this.scroll = scroll;
	    this.delta = this.getDelta();
	  }
	  applyDelta(delta) {
	    this.scroll.update();
	    let scrollLength = this.scroll.length();
	    this.scroll.batchStart();
	    const normalizedDelta = normalizeDelta(delta);
	    const deleteDelta = new Delta();
	    const normalizedOps = splitOpLines(normalizedDelta.ops.slice());
	    normalizedOps.reduce((index, op) => {
	      const length = DeltaExports.Op.length(op);
	      let attributes = op.attributes || {};
	      let isImplicitNewlinePrepended = false;
	      let isImplicitNewlineAppended = false;
	      if (op.insert != null) {
	        deleteDelta.retain(length);
	        if (typeof op.insert === 'string') {
	          const text = op.insert;
	          isImplicitNewlineAppended = !text.endsWith('\n') && (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]);
	          this.scroll.insertAt(index, text);
	          const [line, offset] = this.scroll.line(index);
	          let formats = merge({}, bubbleFormats(line));
	          if (line instanceof Block) {
	            const [leaf] = line.descendant(LeafBlot$1, offset);
	            if (leaf) {
	              formats = merge(formats, bubbleFormats(leaf));
	            }
	          }
	          attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	        } else if (typeof op.insert === 'object') {
	          const key = Object.keys(op.insert)[0]; // There should only be one key
	          if (key == null) return index;
	          const isInlineEmbed = this.scroll.query(key, Scope.INLINE) != null;
	          if (isInlineEmbed) {
	            if (scrollLength <= index || !!this.scroll.descendant(BlockEmbed, index)[0]) {
	              isImplicitNewlineAppended = true;
	            }
	          } else if (index > 0) {
	            const [leaf, offset] = this.scroll.descendant(LeafBlot$1, index - 1);
	            if (leaf instanceof Text$1) {
	              const text = leaf.value();
	              if (text[offset] !== '\n') {
	                isImplicitNewlinePrepended = true;
	              }
	            } else if (leaf instanceof EmbedBlot$1 && leaf.statics.scope === Scope.INLINE_BLOT) {
	              isImplicitNewlinePrepended = true;
	            }
	          }
	          this.scroll.insertAt(index, key, op.insert[key]);
	          if (isInlineEmbed) {
	            const [leaf] = this.scroll.descendant(LeafBlot$1, index);
	            if (leaf) {
	              const formats = merge({}, bubbleFormats(leaf));
	              attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	            }
	          }
	        }
	        scrollLength += length;
	      } else {
	        deleteDelta.push(op);
	        if (op.retain !== null && typeof op.retain === 'object') {
	          const key = Object.keys(op.retain)[0];
	          if (key == null) return index;
	          this.scroll.updateEmbedAt(index, key, op.retain[key]);
	        }
	      }
	      Object.keys(attributes).forEach(name => {
	        this.scroll.formatAt(index, length, name, attributes[name]);
	      });
	      const prependedLength = isImplicitNewlinePrepended ? 1 : 0;
	      const addedLength = isImplicitNewlineAppended ? 1 : 0;
	      scrollLength += prependedLength + addedLength;
	      deleteDelta.retain(prependedLength);
	      deleteDelta.delete(addedLength);
	      return index + length + prependedLength + addedLength;
	    }, 0);
	    deleteDelta.reduce((index, op) => {
	      if (typeof op.delete === 'number') {
	        this.scroll.deleteAt(index, op.delete);
	        return index;
	      }
	      return index + DeltaExports.Op.length(op);
	    }, 0);
	    this.scroll.batchEnd();
	    this.scroll.optimize();
	    return this.update(normalizedDelta);
	  }
	  deleteText(index, length) {
	    this.scroll.deleteAt(index, length);
	    return this.update(new Delta().retain(index).delete(length));
	  }
	  formatLine(index, length) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    this.scroll.update();
	    Object.keys(formats).forEach(format => {
	      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {
	        line.format(format, formats[format]);
	      });
	    });
	    this.scroll.optimize();
	    const delta = new Delta().retain(index).retain(length, cloneDeep(formats));
	    return this.update(delta);
	  }
	  formatText(index, length) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    Object.keys(formats).forEach(format => {
	      this.scroll.formatAt(index, length, format, formats[format]);
	    });
	    const delta = new Delta().retain(index).retain(length, cloneDeep(formats));
	    return this.update(delta);
	  }
	  getContents(index, length) {
	    return this.delta.slice(index, index + length);
	  }
	  getDelta() {
	    return this.scroll.lines().reduce((delta, line) => {
	      return delta.concat(line.delta());
	    }, new Delta());
	  }
	  getFormat(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    let lines = [];
	    let leaves = [];
	    if (length === 0) {
	      this.scroll.path(index).forEach(path => {
	        const [blot] = path;
	        if (blot instanceof Block) {
	          lines.push(blot);
	        } else if (blot instanceof LeafBlot$1) {
	          leaves.push(blot);
	        }
	      });
	    } else {
	      lines = this.scroll.lines(index, length);
	      leaves = this.scroll.descendants(LeafBlot$1, index, length);
	    }
	    const [lineFormats, leafFormats] = [lines, leaves].map(blots => {
	      const blot = blots.shift();
	      if (blot == null) return {};
	      let formats = bubbleFormats(blot);
	      while (Object.keys(formats).length > 0) {
	        const blot = blots.shift();
	        if (blot == null) return formats;
	        formats = combineFormats(bubbleFormats(blot), formats);
	      }
	      return formats;
	    });
	    return {
	      ...lineFormats,
	      ...leafFormats
	    };
	  }
	  getHTML(index, length) {
	    const [line, lineOffset] = this.scroll.line(index);
	    if (line) {
	      const lineLength = line.length();
	      const isWithinLine = line.length() >= lineOffset + length;
	      if (isWithinLine && !(lineOffset === 0 && length === lineLength)) {
	        return convertHTML(line, lineOffset, length, true);
	      }
	      return convertHTML(this.scroll, index, length, true);
	    }
	    return '';
	  }
	  getText(index, length) {
	    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');
	  }
	  insertContents(index, contents) {
	    const normalizedDelta = normalizeDelta(contents);
	    const change = new Delta().retain(index).concat(normalizedDelta);
	    this.scroll.insertContents(index, normalizedDelta);
	    return this.update(change);
	  }
	  insertEmbed(index, embed, value) {
	    this.scroll.insertAt(index, embed, value);
	    return this.update(new Delta().retain(index).insert({
	      [embed]: value
	    }));
	  }
	  insertText(index, text) {
	    let formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	    this.scroll.insertAt(index, text);
	    Object.keys(formats).forEach(format => {
	      this.scroll.formatAt(index, text.length, format, formats[format]);
	    });
	    return this.update(new Delta().retain(index).insert(text, cloneDeep(formats)));
	  }
	  isBlank() {
	    if (this.scroll.children.length === 0) return true;
	    if (this.scroll.children.length > 1) return false;
	    const blot = this.scroll.children.head;
	    if (blot?.statics.blotName !== Block.blotName) return false;
	    const block = blot;
	    if (block.children.length > 1) return false;
	    return block.children.head instanceof Break;
	  }
	  removeFormat(index, length) {
	    const text = this.getText(index, length);
	    const [line, offset] = this.scroll.line(index + length);
	    let suffixLength = 0;
	    let suffix = new Delta();
	    if (line != null) {
	      suffixLength = line.length() - offset;
	      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
	    }
	    const contents = this.getContents(index, length + suffixLength);
	    const diff = contents.diff(new Delta().insert(text).concat(suffix));
	    const delta = new Delta().retain(index).concat(diff);
	    return this.applyDelta(delta);
	  }
	  update(change) {
	    let mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    let selectionInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	    const oldDelta = this.delta;
	    if (mutations.length === 1 && mutations[0].type === 'characterData' &&
	    // @ts-expect-error Fix me later
	    mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {
	      // Optimization for character changes
	      const textBlot = this.scroll.find(mutations[0].target);
	      const formats = bubbleFormats(textBlot);
	      const index = textBlot.offset(this.scroll);
	      // @ts-expect-error Fix me later
	      const oldValue = mutations[0].oldValue.replace(Cursor.CONTENTS, '');
	      const oldText = new Delta().insert(oldValue);
	      // @ts-expect-error
	      const newText = new Delta().insert(textBlot.value());
	      const relativeSelectionInfo = selectionInfo && {
	        oldRange: shiftRange$1(selectionInfo.oldRange, -index),
	        newRange: shiftRange$1(selectionInfo.newRange, -index)
	      };
	      const diffDelta = new Delta().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));
	      change = diffDelta.reduce((delta, op) => {
	        if (op.insert) {
	          return delta.insert(op.insert, formats);
	        }
	        return delta.push(op);
	      }, new Delta());
	      this.delta = oldDelta.compose(change);
	    } else {
	      this.delta = this.getDelta();
	      if (!change || !isEqual$1(oldDelta.compose(change), this.delta)) {
	        change = oldDelta.diff(this.delta, selectionInfo);
	      }
	    }
	    return change;
	  }
	}
	function convertListHTML(items, lastIndent, types) {
	  if (items.length === 0) {
	    const [endTag] = getListType(types.pop());
	    if (lastIndent <= 0) {
	      return `</li></${endTag}>`;
	    }
	    return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;
	  }
	  const [{
	    child,
	    offset,
	    length,
	    indent,
	    type
	  }, ...rest] = items;
	  const [tag, attribute] = getListType(type);
	  if (indent > lastIndent) {
	    types.push(type);
	    if (indent === lastIndent + 1) {
	      return `<${tag}><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
	    }
	    return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;
	  }
	  const previousType = types[types.length - 1];
	  if (indent === lastIndent && type === previousType) {
	    return `</li><li${attribute}>${convertHTML(child, offset, length)}${convertListHTML(rest, indent, types)}`;
	  }
	  const [endTag] = getListType(types.pop());
	  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;
	}
	function convertHTML(blot, index, length) {
	  let isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  if ('html' in blot && typeof blot.html === 'function') {
	    return blot.html(index, length);
	  }
	  if (blot instanceof Text$1) {
	    const escapedText = escapeText(blot.value().slice(index, index + length));
	    return escapedText.replaceAll(' ', '&nbsp;');
	  }
	  if (blot instanceof ParentBlot$1) {
	    // TODO fix API
	    if (blot.statics.blotName === 'list-container') {
	      const items = [];
	      blot.children.forEachAt(index, length, (child, offset, childLength) => {
	        const formats = 'formats' in child && typeof child.formats === 'function' ? child.formats() : {};
	        items.push({
	          child,
	          offset,
	          length: childLength,
	          indent: formats.indent || 0,
	          type: formats.list
	        });
	      });
	      return convertListHTML(items, -1, []);
	    }
	    const parts = [];
	    blot.children.forEachAt(index, length, (child, offset, childLength) => {
	      parts.push(convertHTML(child, offset, childLength));
	    });
	    if (isRoot || blot.statics.blotName === 'list') {
	      return parts.join('');
	    }
	    const {
	      outerHTML,
	      innerHTML
	    } = blot.domNode;
	    const [start, end] = outerHTML.split(`>${innerHTML}<`);
	    // TODO cleanup
	    if (start === '<table') {
	      return `<table style="border: 1px solid #000;">${parts.join('')}<${end}`;
	    }
	    return `${start}>${parts.join('')}<${end}`;
	  }
	  return blot.domNode instanceof Element ? blot.domNode.outerHTML : '';
	}
	function combineFormats(formats, combined) {
	  return Object.keys(combined).reduce((merged, name) => {
	    if (formats[name] == null) return merged;
	    const combinedValue = combined[name];
	    if (combinedValue === formats[name]) {
	      merged[name] = combinedValue;
	    } else if (Array.isArray(combinedValue)) {
	      if (combinedValue.indexOf(formats[name]) < 0) {
	        merged[name] = combinedValue.concat([formats[name]]);
	      } else {
	        // If style already exists, don't add to an array, but don't lose other styles
	        merged[name] = combinedValue;
	      }
	    } else {
	      merged[name] = [combinedValue, formats[name]];
	    }
	    return merged;
	  }, {});
	}
	function getListType(type) {
	  const tag = type === 'ordered' ? 'ol' : 'ul';
	  switch (type) {
	    case 'checked':
	      return [tag, ' data-list="checked"'];
	    case 'unchecked':
	      return [tag, ' data-list="unchecked"'];
	    default:
	      return [tag, ''];
	  }
	}
	function normalizeDelta(delta) {
	  return delta.reduce((normalizedDelta, op) => {
	    if (typeof op.insert === 'string') {
	      const text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
	      return normalizedDelta.insert(text, op.attributes);
	    }
	    return normalizedDelta.push(op);
	  }, new Delta());
	}
	function shiftRange$1(_ref, amount) {
	  let {
	    index,
	    length
	  } = _ref;
	  return new Range(index + amount, length);
	}
	function splitOpLines(ops) {
	  const split = [];
	  ops.forEach(op => {
	    if (typeof op.insert === 'string') {
	      const lines = op.insert.split('\n');
	      lines.forEach((line, index) => {
	        if (index) split.push({
	          insert: '\n',
	          attributes: op.attributes
	        });
	        if (line) split.push({
	          insert: line,
	          attributes: op.attributes
	        });
	      });
	    } else {
	      split.push(op);
	    }
	  });
	  return split;
	}

	class Module {
	  static DEFAULTS = {};
	  constructor(quill) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.quill = quill;
	    this.options = options;
	  }
	}

	const GUARD_TEXT = '\uFEFF';
	class Embed extends EmbedBlot$1 {
	  constructor(scroll, node) {
	    super(scroll, node);
	    this.contentNode = document.createElement('span');
	    this.contentNode.setAttribute('contenteditable', 'false');
	    Array.from(this.domNode.childNodes).forEach(childNode => {
	      this.contentNode.appendChild(childNode);
	    });
	    this.leftGuard = document.createTextNode(GUARD_TEXT);
	    this.rightGuard = document.createTextNode(GUARD_TEXT);
	    this.domNode.appendChild(this.leftGuard);
	    this.domNode.appendChild(this.contentNode);
	    this.domNode.appendChild(this.rightGuard);
	  }
	  index(node, offset) {
	    if (node === this.leftGuard) return 0;
	    if (node === this.rightGuard) return 1;
	    return super.index(node, offset);
	  }
	  restore(node) {
	    let range = null;
	    let textNode;
	    const text = node.data.split(GUARD_TEXT).join('');
	    if (node === this.leftGuard) {
	      if (this.prev instanceof Text$1) {
	        const prevLength = this.prev.length();
	        this.prev.insertAt(prevLength, text);
	        range = {
	          startNode: this.prev.domNode,
	          startOffset: prevLength + text.length
	        };
	      } else {
	        textNode = document.createTextNode(text);
	        this.parent.insertBefore(this.scroll.create(textNode), this);
	        range = {
	          startNode: textNode,
	          startOffset: text.length
	        };
	      }
	    } else if (node === this.rightGuard) {
	      if (this.next instanceof Text$1) {
	        this.next.insertAt(0, text);
	        range = {
	          startNode: this.next.domNode,
	          startOffset: text.length
	        };
	      } else {
	        textNode = document.createTextNode(text);
	        this.parent.insertBefore(this.scroll.create(textNode), this.next);
	        range = {
	          startNode: textNode,
	          startOffset: text.length
	        };
	      }
	    }
	    node.data = GUARD_TEXT;
	    return range;
	  }
	  update(mutations, context) {
	    mutations.forEach(mutation => {
	      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
	        const range = this.restore(mutation.target);
	        if (range) context.range = range;
	      }
	    });
	  }
	}

	class Composition {
	  isComposing = false;
	  constructor(scroll, emitter) {
	    this.scroll = scroll;
	    this.emitter = emitter;
	    this.setupListeners();
	  }
	  setupListeners() {
	    this.scroll.domNode.addEventListener('compositionstart', event => {
	      if (!this.isComposing) {
	        this.handleCompositionStart(event);
	      }
	    });
	    this.scroll.domNode.addEventListener('compositionend', event => {
	      if (this.isComposing) {
	        // Webkit makes DOM changes after compositionend, so we use microtask to
	        // ensure the order.
	        // https://bugs.webkit.org/show_bug.cgi?id=31902
	        queueMicrotask(() => {
	          this.handleCompositionEnd(event);
	        });
	      }
	    });
	  }
	  handleCompositionStart(event) {
	    const blot = event.target instanceof Node ? this.scroll.find(event.target, true) : null;
	    if (blot && !(blot instanceof Embed)) {
	      this.emitter.emit(Emitter.events.COMPOSITION_BEFORE_START, event);
	      this.scroll.batchStart();
	      this.emitter.emit(Emitter.events.COMPOSITION_START, event);
	      this.isComposing = true;
	    }
	  }
	  handleCompositionEnd(event) {
	    this.emitter.emit(Emitter.events.COMPOSITION_BEFORE_END, event);
	    this.scroll.batchEnd();
	    this.emitter.emit(Emitter.events.COMPOSITION_END, event);
	    this.isComposing = false;
	  }
	}

	class Theme {
	  static DEFAULTS = {
	    modules: {}
	  };
	  static themes = {
	    default: Theme
	  };
	  modules = {};
	  constructor(quill, options) {
	    this.quill = quill;
	    this.options = options;
	  }
	  init() {
	    Object.keys(this.options.modules).forEach(name => {
	      if (this.modules[name] == null) {
	        this.addModule(name);
	      }
	    });
	  }
	  addModule(name) {
	    // @ts-expect-error
	    const ModuleClass = this.quill.constructor.import(`modules/${name}`);
	    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});
	    return this.modules[name];
	  }
	}

	const getParentElement = element => element.parentElement || element.getRootNode().host || null;
	const getElementRect = element => {
	  const rect = element.getBoundingClientRect();
	  const scaleX = 'offsetWidth' in element && Math.abs(rect.width) / element.offsetWidth || 1;
	  const scaleY = 'offsetHeight' in element && Math.abs(rect.height) / element.offsetHeight || 1;
	  return {
	    top: rect.top,
	    right: rect.left + element.clientWidth * scaleX,
	    bottom: rect.top + element.clientHeight * scaleY,
	    left: rect.left
	  };
	};
	const paddingValueToInt = value => {
	  const number = parseInt(value, 10);
	  return Number.isNaN(number) ? 0 : number;
	};

	// Follow the steps described in https://www.w3.org/TR/cssom-view-1/#element-scrolling-members,
	// assuming that the scroll option is set to 'nearest'.
	const getScrollDistance = (targetStart, targetEnd, scrollStart, scrollEnd, scrollPaddingStart, scrollPaddingEnd) => {
	  if (targetStart < scrollStart && targetEnd > scrollEnd) {
	    return 0;
	  }
	  if (targetStart < scrollStart) {
	    return -(scrollStart - targetStart + scrollPaddingStart);
	  }
	  if (targetEnd > scrollEnd) {
	    return targetEnd - targetStart > scrollEnd - scrollStart ? targetStart + scrollPaddingStart - scrollStart : targetEnd - scrollEnd + scrollPaddingEnd;
	  }
	  return 0;
	};
	const scrollRectIntoView = (root, targetRect) => {
	  const document = root.ownerDocument;
	  let rect = targetRect;
	  let current = root;
	  while (current) {
	    const isDocumentBody = current === document.body;
	    const bounding = isDocumentBody ? {
	      top: 0,
	      right: window.visualViewport?.width ?? document.documentElement.clientWidth,
	      bottom: window.visualViewport?.height ?? document.documentElement.clientHeight,
	      left: 0
	    } : getElementRect(current);
	    const style = getComputedStyle(current);
	    const scrollDistanceX = getScrollDistance(rect.left, rect.right, bounding.left, bounding.right, paddingValueToInt(style.scrollPaddingLeft), paddingValueToInt(style.scrollPaddingRight));
	    const scrollDistanceY = getScrollDistance(rect.top, rect.bottom, bounding.top, bounding.bottom, paddingValueToInt(style.scrollPaddingTop), paddingValueToInt(style.scrollPaddingBottom));
	    if (scrollDistanceX || scrollDistanceY) {
	      if (isDocumentBody) {
	        document.defaultView?.scrollBy(scrollDistanceX, scrollDistanceY);
	      } else {
	        const {
	          scrollLeft,
	          scrollTop
	        } = current;
	        if (scrollDistanceY) {
	          current.scrollTop += scrollDistanceY;
	        }
	        if (scrollDistanceX) {
	          current.scrollLeft += scrollDistanceX;
	        }
	        const scrolledLeft = current.scrollLeft - scrollLeft;
	        const scrolledTop = current.scrollTop - scrollTop;
	        rect = {
	          left: rect.left - scrolledLeft,
	          top: rect.top - scrolledTop,
	          right: rect.right - scrolledLeft,
	          bottom: rect.bottom - scrolledTop
	        };
	      }
	    }
	    current = isDocumentBody || style.position === 'fixed' ? null : getParentElement(current);
	  }
	};

	const MAX_REGISTER_ITERATIONS = 100;
	const CORE_FORMATS = ['block', 'break', 'cursor', 'inline', 'scroll', 'text'];
	const createRegistryWithFormats = (formats, sourceRegistry, debug) => {
	  const registry = new Registry();
	  CORE_FORMATS.forEach(name => {
	    const coreBlot = sourceRegistry.query(name);
	    if (coreBlot) registry.register(coreBlot);
	  });
	  formats.forEach(name => {
	    let format = sourceRegistry.query(name);
	    if (!format) {
	      debug.error(`Cannot register "${name}" specified in "formats" config. Are you sure it was registered?`);
	    }
	    let iterations = 0;
	    while (format) {
	      registry.register(format);
	      format = 'blotName' in format ? format.requiredContainer ?? null : null;
	      iterations += 1;
	      if (iterations > MAX_REGISTER_ITERATIONS) {
	        debug.error(`Cycle detected in registering blot requiredContainer: "${name}"`);
	        break;
	      }
	    }
	  });
	  return registry;
	};

	const debug$3 = namespace('quill');
	const globalRegistry = new Registry();
	ParentBlot$1.uiClass = 'ql-ui';

	/**
	 * Options for initializing a Quill instance
	 */

	/**
	 * Similar to QuillOptions, but with all properties expanded to their default values,
	 * and all selectors resolved to HTMLElements.
	 */

	class Quill {
	  static DEFAULTS = {
	    bounds: null,
	    modules: {
	      clipboard: true,
	      keyboard: true,
	      history: true,
	      uploader: true
	    },
	    placeholder: '',
	    readOnly: false,
	    registry: globalRegistry,
	    theme: 'default'
	  };
	  static events = Emitter.events;
	  static sources = Emitter.sources;
	  static version = "2.0.3";
	  static imports = {
	    delta: Delta,
	    parchment: Parchment,
	    'core/module': Module,
	    'core/theme': Theme
	  };
	  static debug(limit) {
	    if (limit === true) {
	      limit = 'log';
	    }
	    namespace.level(limit);
	  }
	  static find(node) {
	    let bubble = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    return instances.get(node) || globalRegistry.find(node, bubble);
	  }
	  static import(name) {
	    if (this.imports[name] == null) {
	      debug$3.error(`Cannot import ${name}. Are you sure it was registered?`);
	    }
	    return this.imports[name];
	  }
	  static register() {
	    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'string') {
	      const target = arguments.length <= 0 ? undefined : arguments[0];
	      const overwrite = !!(arguments.length <= 1 ? undefined : arguments[1]);
	      const name = 'attrName' in target ? target.attrName : target.blotName;
	      if (typeof name === 'string') {
	        // Shortcut for formats:
	        // register(Blot | Attributor, overwrite)
	        this.register(`formats/${name}`, target, overwrite);
	      } else {
	        Object.keys(target).forEach(key => {
	          this.register(key, target[key], overwrite);
	        });
	      }
	    } else {
	      const path = arguments.length <= 0 ? undefined : arguments[0];
	      const target = arguments.length <= 1 ? undefined : arguments[1];
	      const overwrite = !!(arguments.length <= 2 ? undefined : arguments[2]);
	      if (this.imports[path] != null && !overwrite) {
	        debug$3.warn(`Overwriting ${path} with`, target);
	      }
	      this.imports[path] = target;
	      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target && typeof target !== 'boolean' && target.blotName !== 'abstract') {
	        globalRegistry.register(target);
	      }
	      if (typeof target.register === 'function') {
	        target.register(globalRegistry);
	      }
	    }
	  }
	  constructor(container) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    this.options = expandConfig(container, options);
	    this.container = this.options.container;
	    if (this.container == null) {
	      debug$3.error('Invalid Quill container', container);
	      return;
	    }
	    if (this.options.debug) {
	      Quill.debug(this.options.debug);
	    }
	    const html = this.container.innerHTML.trim();
	    this.container.classList.add('ql-container');
	    this.container.innerHTML = '';
	    instances.set(this.container, this);
	    this.root = this.addContainer('ql-editor');
	    this.root.classList.add('ql-blank');
	    this.emitter = new Emitter();
	    const scrollBlotName = ScrollBlot$1.blotName;
	    const ScrollBlot = this.options.registry.query(scrollBlotName);
	    if (!ScrollBlot || !('blotName' in ScrollBlot)) {
	      throw new Error(`Cannot initialize Quill without "${scrollBlotName}" blot`);
	    }
	    this.scroll = new ScrollBlot(this.options.registry, this.root, {
	      emitter: this.emitter
	    });
	    this.editor = new Editor(this.scroll);
	    this.selection = new Selection(this.scroll, this.emitter);
	    this.composition = new Composition(this.scroll, this.emitter);
	    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap
	    this.keyboard = this.theme.addModule('keyboard');
	    this.clipboard = this.theme.addModule('clipboard');
	    this.history = this.theme.addModule('history');
	    this.uploader = this.theme.addModule('uploader');
	    this.theme.addModule('input');
	    this.theme.addModule('uiNode');
	    this.theme.init();
	    this.emitter.on(Emitter.events.EDITOR_CHANGE, type => {
	      if (type === Emitter.events.TEXT_CHANGE) {
	        this.root.classList.toggle('ql-blank', this.editor.isBlank());
	      }
	    });
	    this.emitter.on(Emitter.events.SCROLL_UPDATE, (source, mutations) => {
	      const oldRange = this.selection.lastRange;
	      const [newRange] = this.selection.getRange();
	      const selectionInfo = oldRange && newRange ? {
	        oldRange,
	        newRange
	      } : undefined;
	      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);
	    });
	    this.emitter.on(Emitter.events.SCROLL_EMBED_UPDATE, (blot, delta) => {
	      const oldRange = this.selection.lastRange;
	      const [newRange] = this.selection.getRange();
	      const selectionInfo = oldRange && newRange ? {
	        oldRange,
	        newRange
	      } : undefined;
	      modify.call(this, () => {
	        const change = new Delta().retain(blot.offset(this)).retain({
	          [blot.statics.blotName]: delta
	        });
	        return this.editor.update(change, [], selectionInfo);
	      }, Quill.sources.USER);
	    });
	    if (html) {
	      const contents = this.clipboard.convert({
	        html: `${html}<p><br></p>`,
	        text: '\n'
	      });
	      this.setContents(contents);
	    }
	    this.history.clear();
	    if (this.options.placeholder) {
	      this.root.setAttribute('data-placeholder', this.options.placeholder);
	    }
	    if (this.options.readOnly) {
	      this.disable();
	    }
	    this.allowReadOnlyEdits = false;
	  }
	  addContainer(container) {
	    let refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    if (typeof container === 'string') {
	      const className = container;
	      container = document.createElement('div');
	      container.classList.add(className);
	    }
	    this.container.insertBefore(container, refNode);
	    return container;
	  }
	  blur() {
	    this.selection.setRange(null);
	  }
	  deleteText(index, length, source) {
	    // @ts-expect-error
	    [index, length,, source] = overload(index, length, source);
	    return modify.call(this, () => {
	      return this.editor.deleteText(index, length);
	    }, source, index, -1 * length);
	  }
	  disable() {
	    this.enable(false);
	  }
	  editReadOnly(modifier) {
	    this.allowReadOnlyEdits = true;
	    const value = modifier();
	    this.allowReadOnlyEdits = false;
	    return value;
	  }
	  enable() {
	    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    this.scroll.enable(enabled);
	    this.container.classList.toggle('ql-disabled', !enabled);
	  }
	  focus() {
	    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    this.selection.focus();
	    if (!options.preventScroll) {
	      this.scrollSelectionIntoView();
	    }
	  }
	  format(name, value) {
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Emitter.sources.API;
	    return modify.call(this, () => {
	      const range = this.getSelection(true);
	      let change = new Delta();
	      if (range == null) return change;
	      if (this.scroll.query(name, Scope.BLOCK)) {
	        change = this.editor.formatLine(range.index, range.length, {
	          [name]: value
	        });
	      } else if (range.length === 0) {
	        this.selection.format(name, value);
	        return change;
	      } else {
	        change = this.editor.formatText(range.index, range.length, {
	          [name]: value
	        });
	      }
	      this.setSelection(range, Emitter.sources.SILENT);
	      return change;
	    }, source);
	  }
	  formatLine(index, length, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    [index, length, formats, source] = overload(index, length,
	    // @ts-expect-error
	    name, value, source);
	    return modify.call(this, () => {
	      return this.editor.formatLine(index, length, formats);
	    }, source, index, 0);
	  }
	  formatText(index, length, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    [index, length, formats, source] = overload(
	    // @ts-expect-error
	    index, length, name, value, source);
	    return modify.call(this, () => {
	      return this.editor.formatText(index, length, formats);
	    }, source, index, 0);
	  }
	  getBounds(index) {
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    let bounds = null;
	    if (typeof index === 'number') {
	      bounds = this.selection.getBounds(index, length);
	    } else {
	      bounds = this.selection.getBounds(index.index, index.length);
	    }
	    if (!bounds) return null;
	    const containerBounds = this.container.getBoundingClientRect();
	    return {
	      bottom: bounds.bottom - containerBounds.top,
	      height: bounds.height,
	      left: bounds.left - containerBounds.left,
	      right: bounds.right - containerBounds.left,
	      top: bounds.top - containerBounds.top,
	      width: bounds.width
	    };
	  }
	  getContents() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;
	    [index, length] = overload(index, length);
	    return this.editor.getContents(index, length);
	  }
	  getFormat() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    if (typeof index === 'number') {
	      return this.editor.getFormat(index, length);
	    }
	    return this.editor.getFormat(index.index, index.length);
	  }
	  getIndex(blot) {
	    return blot.offset(this.scroll);
	  }
	  getLength() {
	    return this.scroll.length();
	  }
	  getLeaf(index) {
	    return this.scroll.leaf(index);
	  }
	  getLine(index) {
	    return this.scroll.line(index);
	  }
	  getLines() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
	    if (typeof index !== 'number') {
	      return this.scroll.lines(index.index, index.length);
	    }
	    return this.scroll.lines(index, length);
	  }
	  getModule(name) {
	    return this.theme.modules[name];
	  }
	  getSelection() {
	    let focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    if (focus) this.focus();
	    this.update(); // Make sure we access getRange with editor in consistent state
	    return this.selection.getRange()[0];
	  }
	  getSemanticHTML() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 ? arguments[1] : undefined;
	    if (typeof index === 'number') {
	      length = length ?? this.getLength() - index;
	    }
	    // @ts-expect-error
	    [index, length] = overload(index, length);
	    return this.editor.getHTML(index, length);
	  }
	  getText() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 ? arguments[1] : undefined;
	    if (typeof index === 'number') {
	      length = length ?? this.getLength() - index;
	    }
	    // @ts-expect-error
	    [index, length] = overload(index, length);
	    return this.editor.getText(index, length);
	  }
	  hasFocus() {
	    return this.selection.hasFocus();
	  }
	  insertEmbed(index, embed, value) {
	    let source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;
	    return modify.call(this, () => {
	      return this.editor.insertEmbed(index, embed, value);
	    }, source, index);
	  }
	  insertText(index, text, name, value, source) {
	    let formats;
	    // eslint-disable-next-line prefer-const
	    // @ts-expect-error
	    [index,, formats, source] = overload(index, 0, name, value, source);
	    return modify.call(this, () => {
	      return this.editor.insertText(index, text, formats);
	    }, source, index, text.length);
	  }
	  isEnabled() {
	    return this.scroll.isEnabled();
	  }
	  off() {
	    return this.emitter.off(...arguments);
	  }
	  on() {
	    return this.emitter.on(...arguments);
	  }
	  once() {
	    return this.emitter.once(...arguments);
	  }
	  removeFormat(index, length, source) {
	    [index, length,, source] = overload(index, length, source);
	    return modify.call(this, () => {
	      return this.editor.removeFormat(index, length);
	    }, source, index);
	  }
	  scrollRectIntoView(rect) {
	    scrollRectIntoView(this.root, rect);
	  }

	  /**
	   * @deprecated Use Quill#scrollSelectionIntoView() instead.
	   */
	  scrollIntoView() {
	    console.warn('Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead.');
	    this.scrollSelectionIntoView();
	  }

	  /**
	   * Scroll the current selection into the visible area.
	   * If the selection is already visible, no scrolling will occur.
	   */
	  scrollSelectionIntoView() {
	    const range = this.selection.lastRange;
	    const bounds = range && this.selection.getBounds(range.index, range.length);
	    if (bounds) {
	      this.scrollRectIntoView(bounds);
	    }
	  }
	  setContents(delta) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    return modify.call(this, () => {
	      delta = new Delta(delta);
	      const length = this.getLength();
	      // Quill will set empty editor to \n
	      const delete1 = this.editor.deleteText(0, length);
	      const applied = this.editor.insertContents(0, delta);
	      // Remove extra \n from empty editor initialization
	      const delete2 = this.editor.deleteText(this.getLength() - 1, 1);
	      return delete1.compose(applied).compose(delete2);
	    }, source);
	  }
	  setSelection(index, length, source) {
	    if (index == null) {
	      // @ts-expect-error https://github.com/microsoft/TypeScript/issues/22609
	      this.selection.setRange(null, length || Quill.sources.API);
	    } else {
	      // @ts-expect-error
	      [index, length,, source] = overload(index, length, source);
	      this.selection.setRange(new Range(Math.max(0, index), length), source);
	      if (source !== Emitter.sources.SILENT) {
	        this.scrollSelectionIntoView();
	      }
	    }
	  }
	  setText(text) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    const delta = new Delta().insert(text);
	    return this.setContents(delta, source);
	  }
	  update() {
	    let source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Emitter.sources.USER;
	    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
	    this.selection.update(source);
	    // TODO this is usually undefined
	    return change;
	  }
	  updateContents(delta) {
	    let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Emitter.sources.API;
	    return modify.call(this, () => {
	      delta = new Delta(delta);
	      return this.editor.applyDelta(delta);
	    }, source, true);
	  }
	}
	function resolveSelector(selector) {
	  return typeof selector === 'string' ? document.querySelector(selector) : selector;
	}
	function expandModuleConfig(config) {
	  return Object.entries(config ?? {}).reduce((expanded, _ref) => {
	    let [key, value] = _ref;
	    return {
	      ...expanded,
	      [key]: value === true ? {} : value
	    };
	  }, {});
	}
	function omitUndefinedValuesFromOptions(obj) {
	  return Object.fromEntries(Object.entries(obj).filter(entry => entry[1] !== undefined));
	}
	function expandConfig(containerOrSelector, options) {
	  const container = resolveSelector(containerOrSelector);
	  if (!container) {
	    throw new Error('Invalid Quill container');
	  }
	  const shouldUseDefaultTheme = !options.theme || options.theme === Quill.DEFAULTS.theme;
	  const theme = shouldUseDefaultTheme ? Theme : Quill.import(`themes/${options.theme}`);
	  if (!theme) {
	    throw new Error(`Invalid theme ${options.theme}. Did you register it?`);
	  }
	  const {
	    modules: quillModuleDefaults,
	    ...quillDefaults
	  } = Quill.DEFAULTS;
	  const {
	    modules: themeModuleDefaults,
	    ...themeDefaults
	  } = theme.DEFAULTS;
	  let userModuleOptions = expandModuleConfig(options.modules);
	  // Special case toolbar shorthand
	  if (userModuleOptions != null && userModuleOptions.toolbar && userModuleOptions.toolbar.constructor !== Object) {
	    userModuleOptions = {
	      ...userModuleOptions,
	      toolbar: {
	        container: userModuleOptions.toolbar
	      }
	    };
	  }
	  const modules = merge({}, expandModuleConfig(quillModuleDefaults), expandModuleConfig(themeModuleDefaults), userModuleOptions);
	  const config = {
	    ...quillDefaults,
	    ...omitUndefinedValuesFromOptions(themeDefaults),
	    ...omitUndefinedValuesFromOptions(options)
	  };
	  let registry = options.registry;
	  if (registry) {
	    if (options.formats) {
	      debug$3.warn('Ignoring "formats" option because "registry" is specified');
	    }
	  } else {
	    registry = options.formats ? createRegistryWithFormats(options.formats, config.registry, debug$3) : config.registry;
	  }
	  return {
	    ...config,
	    registry,
	    container,
	    theme,
	    modules: Object.entries(modules).reduce((modulesWithDefaults, _ref2) => {
	      let [name, value] = _ref2;
	      if (!value) return modulesWithDefaults;
	      const moduleClass = Quill.import(`modules/${name}`);
	      if (moduleClass == null) {
	        debug$3.error(`Cannot load ${name} module. Are you sure you registered it?`);
	        return modulesWithDefaults;
	      }
	      return {
	        ...modulesWithDefaults,
	        // @ts-expect-error
	        [name]: merge({}, moduleClass.DEFAULTS || {}, value)
	      };
	    }, {}),
	    bounds: resolveSelector(config.bounds)
	  };
	}

	// Handle selection preservation and TEXT_CHANGE emission
	// common to modification APIs
	function modify(modifier, source, index, shift) {
	  if (!this.isEnabled() && source === Emitter.sources.USER && !this.allowReadOnlyEdits) {
	    return new Delta();
	  }
	  let range = index == null ? null : this.getSelection();
	  const oldDelta = this.editor.delta;
	  const change = modifier();
	  if (range != null) {
	    if (index === true) {
	      index = range.index; // eslint-disable-line prefer-destructuring
	    }
	    if (shift == null) {
	      range = shiftRange(range, change, source);
	    } else if (shift !== 0) {
	      // @ts-expect-error index should always be number
	      range = shiftRange(range, index, shift, source);
	    }
	    this.setSelection(range, Emitter.sources.SILENT);
	  }
	  if (change.length() > 0) {
	    const args = [Emitter.events.TEXT_CHANGE, change, oldDelta, source];
	    this.emitter.emit(Emitter.events.EDITOR_CHANGE, ...args);
	    if (source !== Emitter.sources.SILENT) {
	      this.emitter.emit(...args);
	    }
	  }
	  return change;
	}
	function overload(index, length, name, value, source) {
	  let formats = {};
	  // @ts-expect-error
	  if (typeof index.index === 'number' && typeof index.length === 'number') {
	    // Allow for throwaway end (used by insertText/insertEmbed)
	    if (typeof length !== 'number') {
	      // @ts-expect-error
	      source = value;
	      value = name;
	      name = length;
	      // @ts-expect-error
	      length = index.length; // eslint-disable-line prefer-destructuring
	      // @ts-expect-error
	      index = index.index; // eslint-disable-line prefer-destructuring
	    } else {
	      // @ts-expect-error
	      length = index.length; // eslint-disable-line prefer-destructuring
	      // @ts-expect-error
	      index = index.index; // eslint-disable-line prefer-destructuring
	    }
	  } else if (typeof length !== 'number') {
	    // @ts-expect-error
	    source = value;
	    value = name;
	    name = length;
	    length = 0;
	  }
	  // Handle format being object, two format name/value strings or excluded
	  if (typeof name === 'object') {
	    // @ts-expect-error Fix me later
	    formats = name;
	    // @ts-expect-error
	    source = value;
	  } else if (typeof name === 'string') {
	    if (value != null) {
	      formats[name] = value;
	    } else {
	      // @ts-expect-error
	      source = name;
	    }
	  }
	  // Handle optional source
	  source = source || Emitter.sources.API;
	  // @ts-expect-error
	  return [index, length, formats, source];
	}
	function shiftRange(range, index, lengthOrSource, source) {
	  const length = typeof lengthOrSource === 'number' ? lengthOrSource : 0;
	  if (range == null) return null;
	  let start;
	  let end;
	  // @ts-expect-error -- TODO: add a better type guard around `index`
	  if (index && typeof index.transformPosition === 'function') {
	    [start, end] = [range.index, range.index + range.length].map(pos =>
	    // @ts-expect-error -- TODO: add a better type guard around `index`
	    index.transformPosition(pos, source !== Emitter.sources.USER));
	  } else {
	    [start, end] = [range.index, range.index + range.length].map(pos => {
	      // @ts-expect-error -- TODO: add a better type guard around `index`
	      if (pos < index || pos === index && source === Emitter.sources.USER) return pos;
	      if (length >= 0) {
	        return pos + length;
	      }
	      // @ts-expect-error -- TODO: add a better type guard around `index`
	      return Math.max(index, pos + length);
	    });
	  }
	  return new Range(start, end - start);
	}

	class Container extends ContainerBlot$1 {}

	function isLine$1(blot) {
	  return blot instanceof Block || blot instanceof BlockEmbed;
	}
	function isUpdatable(blot) {
	  return typeof blot.updateContent === 'function';
	}
	class Scroll extends ScrollBlot$1 {
	  static blotName = 'scroll';
	  static className = 'ql-editor';
	  static tagName = 'DIV';
	  static defaultChild = Block;
	  static allowedChildren = [Block, BlockEmbed, Container];
	  constructor(registry, domNode, _ref) {
	    let {
	      emitter
	    } = _ref;
	    super(registry, domNode);
	    this.emitter = emitter;
	    this.batch = false;
	    this.optimize();
	    this.enable();
	    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));
	  }
	  batchStart() {
	    if (!Array.isArray(this.batch)) {
	      this.batch = [];
	    }
	  }
	  batchEnd() {
	    if (!this.batch) return;
	    const mutations = this.batch;
	    this.batch = false;
	    this.update(mutations);
	  }
	  emitMount(blot) {
	    this.emitter.emit(Emitter.events.SCROLL_BLOT_MOUNT, blot);
	  }
	  emitUnmount(blot) {
	    this.emitter.emit(Emitter.events.SCROLL_BLOT_UNMOUNT, blot);
	  }
	  emitEmbedUpdate(blot, change) {
	    this.emitter.emit(Emitter.events.SCROLL_EMBED_UPDATE, blot, change);
	  }
	  deleteAt(index, length) {
	    const [first, offset] = this.line(index);
	    const [last] = this.line(index + length);
	    super.deleteAt(index, length);
	    if (last != null && first !== last && offset > 0) {
	      if (first instanceof BlockEmbed || last instanceof BlockEmbed) {
	        this.optimize();
	        return;
	      }
	      const ref = last.children.head instanceof Break ? null : last.children.head;
	      // @ts-expect-error
	      first.moveChildren(last, ref);
	      // @ts-expect-error
	      first.remove();
	    }
	    this.optimize();
	  }
	  enable() {
	    let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    this.domNode.setAttribute('contenteditable', enabled ? 'true' : 'false');
	  }
	  formatAt(index, length, format, value) {
	    super.formatAt(index, length, format, value);
	    this.optimize();
	  }
	  insertAt(index, value, def) {
	    if (index >= this.length()) {
	      if (def == null || this.scroll.query(value, Scope.BLOCK) == null) {
	        const blot = this.scroll.create(this.statics.defaultChild.blotName);
	        this.appendChild(blot);
	        if (def == null && value.endsWith('\n')) {
	          blot.insertAt(0, value.slice(0, -1), def);
	        } else {
	          blot.insertAt(0, value, def);
	        }
	      } else {
	        const embed = this.scroll.create(value, def);
	        this.appendChild(embed);
	      }
	    } else {
	      super.insertAt(index, value, def);
	    }
	    this.optimize();
	  }
	  insertBefore(blot, ref) {
	    if (blot.statics.scope === Scope.INLINE_BLOT) {
	      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
	      wrapper.appendChild(blot);
	      super.insertBefore(wrapper, ref);
	    } else {
	      super.insertBefore(blot, ref);
	    }
	  }
	  insertContents(index, delta) {
	    const renderBlocks = this.deltaToRenderBlocks(delta.concat(new Delta().insert('\n')));
	    const last = renderBlocks.pop();
	    if (last == null) return;
	    this.batchStart();
	    const first = renderBlocks.shift();
	    if (first) {
	      const shouldInsertNewlineChar = first.type === 'block' && (first.delta.length() === 0 || !this.descendant(BlockEmbed, index)[0] && index < this.length());
	      const delta = first.type === 'block' ? first.delta : new Delta().insert({
	        [first.key]: first.value
	      });
	      insertInlineContents(this, index, delta);
	      const newlineCharLength = first.type === 'block' ? 1 : 0;
	      const lineEndIndex = index + delta.length() + newlineCharLength;
	      if (shouldInsertNewlineChar) {
	        this.insertAt(lineEndIndex - 1, '\n');
	      }
	      const formats = bubbleFormats(this.line(index)[0]);
	      const attributes = DeltaExports.AttributeMap.diff(formats, first.attributes) || {};
	      Object.keys(attributes).forEach(name => {
	        this.formatAt(lineEndIndex - 1, 1, name, attributes[name]);
	      });
	      index = lineEndIndex;
	    }
	    let [refBlot, refBlotOffset] = this.children.find(index);
	    if (renderBlocks.length) {
	      if (refBlot) {
	        refBlot = refBlot.split(refBlotOffset);
	        refBlotOffset = 0;
	      }
	      renderBlocks.forEach(renderBlock => {
	        if (renderBlock.type === 'block') {
	          const block = this.createBlock(renderBlock.attributes, refBlot || undefined);
	          insertInlineContents(block, 0, renderBlock.delta);
	        } else {
	          const blockEmbed = this.create(renderBlock.key, renderBlock.value);
	          this.insertBefore(blockEmbed, refBlot || undefined);
	          Object.keys(renderBlock.attributes).forEach(name => {
	            blockEmbed.format(name, renderBlock.attributes[name]);
	          });
	        }
	      });
	    }
	    if (last.type === 'block' && last.delta.length()) {
	      const offset = refBlot ? refBlot.offset(refBlot.scroll) + refBlotOffset : this.length();
	      insertInlineContents(this, offset, last.delta);
	    }
	    this.batchEnd();
	    this.optimize();
	  }
	  isEnabled() {
	    return this.domNode.getAttribute('contenteditable') === 'true';
	  }
	  leaf(index) {
	    const last = this.path(index).pop();
	    if (!last) {
	      return [null, -1];
	    }
	    const [blot, offset] = last;
	    return blot instanceof LeafBlot$1 ? [blot, offset] : [null, -1];
	  }
	  line(index) {
	    if (index === this.length()) {
	      return this.line(index - 1);
	    }
	    // @ts-expect-error TODO: make descendant() generic
	    return this.descendant(isLine$1, index);
	  }
	  lines() {
	    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    let length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
	    const getLines = (blot, blotIndex, blotLength) => {
	      let lines = [];
	      let lengthLeft = blotLength;
	      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {
	        if (isLine$1(child)) {
	          lines.push(child);
	        } else if (child instanceof ContainerBlot$1) {
	          lines = lines.concat(getLines(child, childIndex, lengthLeft));
	        }
	        lengthLeft -= childLength;
	      });
	      return lines;
	    };
	    return getLines(this, index, length);
	  }
	  optimize() {
	    let mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (this.batch) return;
	    super.optimize(mutations, context);
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_OPTIMIZE, mutations, context);
	    }
	  }
	  path(index) {
	    return super.path(index).slice(1); // Exclude self
	  }
	  remove() {
	    // Never remove self
	  }
	  update(mutations) {
	    if (this.batch) {
	      if (Array.isArray(mutations)) {
	        this.batch = this.batch.concat(mutations);
	      }
	      return;
	    }
	    let source = Emitter.sources.USER;
	    if (typeof mutations === 'string') {
	      source = mutations;
	    }
	    if (!Array.isArray(mutations)) {
	      mutations = this.observer.takeRecords();
	    }
	    mutations = mutations.filter(_ref2 => {
	      let {
	        target
	      } = _ref2;
	      const blot = this.find(target, true);
	      return blot && !isUpdatable(blot);
	    });
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_BEFORE_UPDATE, source, mutations);
	    }
	    super.update(mutations.concat([])); // pass copy
	    if (mutations.length > 0) {
	      this.emitter.emit(Emitter.events.SCROLL_UPDATE, source, mutations);
	    }
	  }
	  updateEmbedAt(index, key, change) {
	    // Currently it only supports top-level embeds (BlockEmbed).
	    // We can update `ParentBlot` in parchment to support inline embeds.
	    const [blot] = this.descendant(b => b instanceof BlockEmbed, index);
	    if (blot && blot.statics.blotName === key && isUpdatable(blot)) {
	      blot.updateContent(change);
	    }
	  }
	  handleDragStart(event) {
	    event.preventDefault();
	  }
	  deltaToRenderBlocks(delta) {
	    const renderBlocks = [];
	    let currentBlockDelta = new Delta();
	    delta.forEach(op => {
	      const insert = op?.insert;
	      if (!insert) return;
	      if (typeof insert === 'string') {
	        const splitted = insert.split('\n');
	        splitted.slice(0, -1).forEach(text => {
	          currentBlockDelta.insert(text, op.attributes);
	          renderBlocks.push({
	            type: 'block',
	            delta: currentBlockDelta,
	            attributes: op.attributes ?? {}
	          });
	          currentBlockDelta = new Delta();
	        });
	        const last = splitted[splitted.length - 1];
	        if (last) {
	          currentBlockDelta.insert(last, op.attributes);
	        }
	      } else {
	        const key = Object.keys(insert)[0];
	        if (!key) return;
	        if (this.query(key, Scope.INLINE)) {
	          currentBlockDelta.push(op);
	        } else {
	          if (currentBlockDelta.length()) {
	            renderBlocks.push({
	              type: 'block',
	              delta: currentBlockDelta,
	              attributes: {}
	            });
	          }
	          currentBlockDelta = new Delta();
	          renderBlocks.push({
	            type: 'blockEmbed',
	            key,
	            value: insert[key],
	            attributes: op.attributes ?? {}
	          });
	        }
	      }
	    });
	    if (currentBlockDelta.length()) {
	      renderBlocks.push({
	        type: 'block',
	        delta: currentBlockDelta,
	        attributes: {}
	      });
	    }
	    return renderBlocks;
	  }
	  createBlock(attributes, refBlot) {
	    let blotName;
	    const formats = {};
	    Object.entries(attributes).forEach(_ref3 => {
	      let [key, value] = _ref3;
	      const isBlockBlot = this.query(key, Scope.BLOCK & Scope.BLOT) != null;
	      if (isBlockBlot) {
	        blotName = key;
	      } else {
	        formats[key] = value;
	      }
	    });
	    const block = this.create(blotName || this.statics.defaultChild.blotName, blotName ? attributes[blotName] : undefined);
	    this.insertBefore(block, refBlot || undefined);
	    const length = block.length();
	    Object.entries(formats).forEach(_ref4 => {
	      let [key, value] = _ref4;
	      block.formatAt(0, length, key, value);
	    });
	    return block;
	  }
	}
	function insertInlineContents(parent, index, inlineContents) {
	  inlineContents.reduce((index, op) => {
	    const length = DeltaExports.Op.length(op);
	    let attributes = op.attributes || {};
	    if (op.insert != null) {
	      if (typeof op.insert === 'string') {
	        const text = op.insert;
	        parent.insertAt(index, text);
	        const [leaf] = parent.descendant(LeafBlot$1, index);
	        const formats = bubbleFormats(leaf);
	        attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	      } else if (typeof op.insert === 'object') {
	        const key = Object.keys(op.insert)[0]; // There should only be one key
	        if (key == null) return index;
	        parent.insertAt(index, key, op.insert[key]);
	        const isInlineEmbed = parent.scroll.query(key, Scope.INLINE) != null;
	        if (isInlineEmbed) {
	          const [leaf] = parent.descendant(LeafBlot$1, index);
	          const formats = bubbleFormats(leaf);
	          attributes = DeltaExports.AttributeMap.diff(formats, attributes) || {};
	        }
	      }
	    }
	    Object.keys(attributes).forEach(key => {
	      parent.formatAt(index, length, key, attributes[key]);
	    });
	    return index + length;
	  }, index);
	}

	const config$2 = {
	  scope: Scope.BLOCK,
	  whitelist: ['right', 'center', 'justify']
	};
	const AlignAttribute = new Attributor('align', 'align', config$2);
	const AlignClass = new ClassAttributor$1('align', 'ql-align', config$2);
	const AlignStyle = new StyleAttributor$1('align', 'text-align', config$2);

	class ColorAttributor extends StyleAttributor$1 {
	  value(domNode) {
	    let value = super.value(domNode);
	    if (!value.startsWith('rgb(')) return value;
	    value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
	    const hex = value.split(',').map(component => `00${parseInt(component, 10).toString(16)}`.slice(-2)).join('');
	    return `#${hex}`;
	  }
	}
	const ColorClass = new ClassAttributor$1('color', 'ql-color', {
	  scope: Scope.INLINE
	});
	const ColorStyle = new ColorAttributor('color', 'color', {
	  scope: Scope.INLINE
	});

	const BackgroundClass = new ClassAttributor$1('background', 'ql-bg', {
	  scope: Scope.INLINE
	});
	const BackgroundStyle = new ColorAttributor('background', 'background-color', {
	  scope: Scope.INLINE
	});

	class CodeBlockContainer extends Container {
	  static create(value) {
	    const domNode = super.create(value);
	    domNode.setAttribute('spellcheck', 'false');
	    return domNode;
	  }
	  code(index, length) {
	    return this.children
	    // @ts-expect-error
	    .map(child => child.length() <= 1 ? '' : child.domNode.innerText).join('\n').slice(index, index + length);
	  }
	  html(index, length) {
	    // `\n`s are needed in order to support empty lines at the beginning and the end.
	    // https://html.spec.whatwg.org/multipage/syntax.html#element-restrictions
	    return `<pre>\n${escapeText(this.code(index, length))}\n</pre>`;
	  }
	}
	class CodeBlock extends Block {
	  static TAB = '  ';
	  static register() {
	    Quill.register(CodeBlockContainer);
	  }
	}
	class Code extends Inline {}
	Code.blotName = 'code';
	Code.tagName = 'CODE';
	CodeBlock.blotName = 'code-block';
	CodeBlock.className = 'ql-code-block';
	CodeBlock.tagName = 'DIV';
	CodeBlockContainer.blotName = 'code-block-container';
	CodeBlockContainer.className = 'ql-code-block-container';
	CodeBlockContainer.tagName = 'DIV';
	CodeBlockContainer.allowedChildren = [CodeBlock];
	CodeBlock.allowedChildren = [Text$1, Break, Cursor];
	CodeBlock.requiredContainer = CodeBlockContainer;

	const config$1 = {
	  scope: Scope.BLOCK,
	  whitelist: ['rtl']
	};
	const DirectionAttribute = new Attributor('direction', 'dir', config$1);
	const DirectionClass = new ClassAttributor$1('direction', 'ql-direction', config$1);
	const DirectionStyle = new StyleAttributor$1('direction', 'direction', config$1);

	const config = {
	  scope: Scope.INLINE,
	  whitelist: ['serif', 'monospace']
	};
	const FontClass = new ClassAttributor$1('font', 'ql-font', config);
	class FontStyleAttributor extends StyleAttributor$1 {
	  value(node) {
	    return super.value(node).replace(/["']/g, '');
	  }
	}
	const FontStyle = new FontStyleAttributor('font', 'font-family', config);

	const SizeClass = new ClassAttributor$1('size', 'ql-size', {
	  scope: Scope.INLINE,
	  whitelist: ['small', 'large', 'huge']
	});
	const SizeStyle = new StyleAttributor$1('size', 'font-size', {
	  scope: Scope.INLINE,
	  whitelist: ['10px', '18px', '32px']
	});

	const debug$2 = namespace('quill:keyboard');
	const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
	class Keyboard extends Module {
	  static match(evt, binding) {
	    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {
	      return !!binding[key] !== evt[key] && binding[key] !== null;
	    })) {
	      return false;
	    }
	    return binding.key === evt.key || binding.key === evt.which;
	  }
	  constructor(quill, options) {
	    super(quill, options);
	    this.bindings = {};
	    // @ts-expect-error Fix me later
	    Object.keys(this.options.bindings).forEach(name => {
	      // @ts-expect-error Fix me later
	      if (this.options.bindings[name]) {
	        // @ts-expect-error Fix me later
	        this.addBinding(this.options.bindings[name]);
	      }
	    });
	    this.addBinding({
	      key: 'Enter',
	      shiftKey: null
	    }, this.handleEnter);
	    this.addBinding({
	      key: 'Enter',
	      metaKey: null,
	      ctrlKey: null,
	      altKey: null
	    }, () => {});
	    if (/Firefox/i.test(navigator.userAgent)) {
	      // Need to handle delete and backspace for Firefox in the general case #1171
	      this.addBinding({
	        key: 'Backspace'
	      }, {
	        collapsed: true
	      }, this.handleBackspace);
	      this.addBinding({
	        key: 'Delete'
	      }, {
	        collapsed: true
	      }, this.handleDelete);
	    } else {
	      this.addBinding({
	        key: 'Backspace'
	      }, {
	        collapsed: true,
	        prefix: /^.?$/
	      }, this.handleBackspace);
	      this.addBinding({
	        key: 'Delete'
	      }, {
	        collapsed: true,
	        suffix: /^.?$/
	      }, this.handleDelete);
	    }
	    this.addBinding({
	      key: 'Backspace'
	    }, {
	      collapsed: false
	    }, this.handleDeleteRange);
	    this.addBinding({
	      key: 'Delete'
	    }, {
	      collapsed: false
	    }, this.handleDeleteRange);
	    this.addBinding({
	      key: 'Backspace',
	      altKey: null,
	      ctrlKey: null,
	      metaKey: null,
	      shiftKey: null
	    }, {
	      collapsed: true,
	      offset: 0
	    }, this.handleBackspace);
	    this.listen();
	  }
	  addBinding(keyBinding) {
	    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    const binding = normalize$2(keyBinding);
	    if (binding == null) {
	      debug$2.warn('Attempted to add invalid keyboard binding', binding);
	      return;
	    }
	    if (typeof context === 'function') {
	      context = {
	        handler: context
	      };
	    }
	    if (typeof handler === 'function') {
	      handler = {
	        handler
	      };
	    }
	    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];
	    keys.forEach(key => {
	      const singleBinding = {
	        ...binding,
	        key,
	        ...context,
	        ...handler
	      };
	      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
	      this.bindings[singleBinding.key].push(singleBinding);
	    });
	  }
	  listen() {
	    this.quill.root.addEventListener('keydown', evt => {
	      if (evt.defaultPrevented || evt.isComposing) return;

	      // evt.isComposing is false when pressing Enter/Backspace when composing in Safari
	      // https://bugs.webkit.org/show_bug.cgi?id=165004
	      const isComposing = evt.keyCode === 229 && (evt.key === 'Enter' || evt.key === 'Backspace');
	      if (isComposing) return;
	      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);
	      const matches = bindings.filter(binding => Keyboard.match(evt, binding));
	      if (matches.length === 0) return;
	      // @ts-expect-error
	      const blot = Quill.find(evt.target, true);
	      if (blot && blot.scroll !== this.quill.scroll) return;
	      const range = this.quill.getSelection();
	      if (range == null || !this.quill.hasFocus()) return;
	      const [line, offset] = this.quill.getLine(range.index);
	      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
	      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);
	      const prefixText = leafStart instanceof TextBlot$1 ? leafStart.value().slice(0, offsetStart) : '';
	      const suffixText = leafEnd instanceof TextBlot$1 ? leafEnd.value().slice(offsetEnd) : '';
	      const curContext = {
	        collapsed: range.length === 0,
	        // @ts-expect-error Fix me later
	        empty: range.length === 0 && line.length() <= 1,
	        format: this.quill.getFormat(range),
	        line,
	        offset,
	        prefix: prefixText,
	        suffix: suffixText,
	        event: evt
	      };
	      const prevented = matches.some(binding => {
	        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {
	          return false;
	        }
	        if (binding.empty != null && binding.empty !== curContext.empty) {
	          return false;
	        }
	        if (binding.offset != null && binding.offset !== curContext.offset) {
	          return false;
	        }
	        if (Array.isArray(binding.format)) {
	          // any format is present
	          if (binding.format.every(name => curContext.format[name] == null)) {
	            return false;
	          }
	        } else if (typeof binding.format === 'object') {
	          // all formats must match
	          if (!Object.keys(binding.format).every(name => {
	            // @ts-expect-error Fix me later
	            if (binding.format[name] === true) return curContext.format[name] != null;
	            // @ts-expect-error Fix me later
	            if (binding.format[name] === false) return curContext.format[name] == null;
	            // @ts-expect-error Fix me later
	            return isEqual$1(binding.format[name], curContext.format[name]);
	          })) {
	            return false;
	          }
	        }
	        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {
	          return false;
	        }
	        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {
	          return false;
	        }
	        // @ts-expect-error Fix me later
	        return binding.handler.call(this, range, curContext, binding) !== true;
	      });
	      if (prevented) {
	        evt.preventDefault();
	      }
	    });
	  }
	  handleBackspace(range, context) {
	    // Check for astral symbols
	    const length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
	    if (range.index === 0 || this.quill.getLength() <= 1) return;
	    let formats = {};
	    const [line] = this.quill.getLine(range.index);
	    let delta = new Delta().retain(range.index - length).delete(length);
	    if (context.offset === 0) {
	      // Always deleting newline here, length always 1
	      const [prev] = this.quill.getLine(range.index - 1);
	      if (prev) {
	        const isPrevLineEmpty = prev.statics.blotName === 'block' && prev.length() <= 1;
	        if (!isPrevLineEmpty) {
	          // @ts-expect-error Fix me later
	          const curFormats = line.formats();
	          const prevFormats = this.quill.getFormat(range.index - 1, 1);
	          formats = DeltaExports.AttributeMap.diff(curFormats, prevFormats) || {};
	          if (Object.keys(formats).length > 0) {
	            // line.length() - 1 targets \n in line, another -1 for newline being deleted
	            const formatDelta = new Delta()
	            // @ts-expect-error Fix me later
	            .retain(range.index + line.length() - 2).retain(1, formats);
	            delta = delta.compose(formatDelta);
	          }
	        }
	      }
	    }
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.focus();
	  }
	  handleDelete(range, context) {
	    // Check for astral symbols
	    const length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
	    if (range.index >= this.quill.getLength() - length) return;
	    let formats = {};
	    const [line] = this.quill.getLine(range.index);
	    let delta = new Delta().retain(range.index).delete(length);
	    // @ts-expect-error Fix me later
	    if (context.offset >= line.length() - 1) {
	      const [next] = this.quill.getLine(range.index + 1);
	      if (next) {
	        // @ts-expect-error Fix me later
	        const curFormats = line.formats();
	        const nextFormats = this.quill.getFormat(range.index, 1);
	        formats = DeltaExports.AttributeMap.diff(curFormats, nextFormats) || {};
	        if (Object.keys(formats).length > 0) {
	          delta = delta.retain(next.length() - 1).retain(1, formats);
	        }
	      }
	    }
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.focus();
	  }
	  handleDeleteRange(range) {
	    deleteRange({
	      range,
	      quill: this.quill
	    });
	    this.quill.focus();
	  }
	  handleEnter(range, context) {
	    const lineFormats = Object.keys(context.format).reduce((formats, format) => {
	      if (this.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {
	        formats[format] = context.format[format];
	      }
	      return formats;
	    }, {});
	    const delta = new Delta().retain(range.index).delete(range.length).insert('\n', lineFormats);
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	    this.quill.focus();
	  }
	}
	const defaultOptions = {
	  bindings: {
	    bold: makeFormatHandler('bold'),
	    italic: makeFormatHandler('italic'),
	    underline: makeFormatHandler('underline'),
	    indent: {
	      // highlight tab or tab at beginning of list, indent or blockquote
	      key: 'Tab',
	      format: ['blockquote', 'indent', 'list'],
	      handler(range, context) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent', '+1', Quill.sources.USER);
	        return false;
	      }
	    },
	    outdent: {
	      key: 'Tab',
	      shiftKey: true,
	      format: ['blockquote', 'indent', 'list'],
	      // highlight tab or tab at beginning of list, indent or blockquote
	      handler(range, context) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent', '-1', Quill.sources.USER);
	        return false;
	      }
	    },
	    'outdent backspace': {
	      key: 'Backspace',
	      collapsed: true,
	      shiftKey: null,
	      metaKey: null,
	      ctrlKey: null,
	      altKey: null,
	      format: ['indent', 'list'],
	      offset: 0,
	      handler(range, context) {
	        if (context.format.indent != null) {
	          this.quill.format('indent', '-1', Quill.sources.USER);
	        } else if (context.format.list != null) {
	          this.quill.format('list', false, Quill.sources.USER);
	        }
	      }
	    },
	    'indent code-block': makeCodeBlockHandler(true),
	    'outdent code-block': makeCodeBlockHandler(false),
	    'remove tab': {
	      key: 'Tab',
	      shiftKey: true,
	      collapsed: true,
	      prefix: /\t$/,
	      handler(range) {
	        this.quill.deleteText(range.index - 1, 1, Quill.sources.USER);
	      }
	    },
	    tab: {
	      key: 'Tab',
	      handler(range, context) {
	        if (context.format.table) return true;
	        this.quill.history.cutoff();
	        const delta = new Delta().retain(range.index).delete(range.length).insert('\t');
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.history.cutoff();
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        return false;
	      }
	    },
	    'blockquote empty enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['blockquote'],
	      empty: true,
	      handler() {
	        this.quill.format('blockquote', false, Quill.sources.USER);
	      }
	    },
	    'list empty enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['list'],
	      empty: true,
	      handler(range, context) {
	        const formats = {
	          list: false
	        };
	        if (context.format.indent) {
	          formats.indent = false;
	        }
	        this.quill.formatLine(range.index, range.length, formats, Quill.sources.USER);
	      }
	    },
	    'checklist enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: {
	        list: 'checked'
	      },
	      handler(range) {
	        const [line, offset] = this.quill.getLine(range.index);
	        const formats = {
	          // @ts-expect-error Fix me later
	          ...line.formats(),
	          list: 'checked'
	        };
	        const delta = new Delta().retain(range.index).insert('\n', formats)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - offset - 1).retain(1, {
	          list: 'unchecked'
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        this.quill.scrollSelectionIntoView();
	      }
	    },
	    'header enter': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['header'],
	      suffix: /^$/,
	      handler(range, context) {
	        const [line, offset] = this.quill.getLine(range.index);
	        const delta = new Delta().retain(range.index).insert('\n', context.format)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - offset - 1).retain(1, {
	          header: null
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
	        this.quill.scrollSelectionIntoView();
	      }
	    },
	    'table backspace': {
	      key: 'Backspace',
	      format: ['table'],
	      collapsed: true,
	      offset: 0,
	      handler() {}
	    },
	    'table delete': {
	      key: 'Delete',
	      format: ['table'],
	      collapsed: true,
	      suffix: /^$/,
	      handler() {}
	    },
	    'table enter': {
	      key: 'Enter',
	      shiftKey: null,
	      format: ['table'],
	      handler(range) {
	        const module = this.quill.getModule('table');
	        if (module) {
	          // @ts-expect-error
	          const [table, row, cell, offset] = module.getTable(range);
	          const shift = tableSide(table, row, cell, offset);
	          if (shift == null) return;
	          let index = table.offset();
	          if (shift < 0) {
	            const delta = new Delta().retain(index).insert('\n');
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(range.index + 1, range.length, Quill.sources.SILENT);
	          } else if (shift > 0) {
	            index += table.length();
	            const delta = new Delta().retain(index).insert('\n');
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(index, Quill.sources.USER);
	          }
	        }
	      }
	    },
	    'table tab': {
	      key: 'Tab',
	      shiftKey: null,
	      format: ['table'],
	      handler(range, context) {
	        const {
	          event,
	          line: cell
	        } = context;
	        const offset = cell.offset(this.quill.scroll);
	        if (event.shiftKey) {
	          this.quill.setSelection(offset - 1, Quill.sources.USER);
	        } else {
	          this.quill.setSelection(offset + cell.length(), Quill.sources.USER);
	        }
	      }
	    },
	    'list autofill': {
	      key: ' ',
	      shiftKey: null,
	      collapsed: true,
	      format: {
	        'code-block': false,
	        blockquote: false,
	        table: false
	      },
	      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
	      handler(range, context) {
	        if (this.quill.scroll.query('list') == null) return true;
	        const {
	          length
	        } = context.prefix;
	        const [line, offset] = this.quill.getLine(range.index);
	        if (offset > length) return true;
	        let value;
	        switch (context.prefix.trim()) {
	          case '[]':
	          case '[ ]':
	            value = 'unchecked';
	            break;
	          case '[x]':
	            value = 'checked';
	            break;
	          case '-':
	          case '*':
	            value = 'bullet';
	            break;
	          default:
	            value = 'ordered';
	        }
	        this.quill.insertText(range.index, ' ', Quill.sources.USER);
	        this.quill.history.cutoff();
	        const delta = new Delta().retain(range.index - offset).delete(length + 1)
	        // @ts-expect-error Fix me later
	        .retain(line.length() - 2 - offset).retain(1, {
	          list: value
	        });
	        this.quill.updateContents(delta, Quill.sources.USER);
	        this.quill.history.cutoff();
	        this.quill.setSelection(range.index - length, Quill.sources.SILENT);
	        return false;
	      }
	    },
	    'code exit': {
	      key: 'Enter',
	      collapsed: true,
	      format: ['code-block'],
	      prefix: /^$/,
	      suffix: /^\s*$/,
	      handler(range) {
	        const [line, offset] = this.quill.getLine(range.index);
	        let numLines = 2;
	        let cur = line;
	        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {
	          // @ts-expect-error
	          cur = cur.prev;
	          numLines -= 1;
	          // Requisite prev lines are empty
	          if (numLines <= 0) {
	            const delta = new Delta()
	            // @ts-expect-error Fix me later
	            .retain(range.index + line.length() - offset - 2).retain(1, {
	              'code-block': null
	            }).delete(1);
	            this.quill.updateContents(delta, Quill.sources.USER);
	            this.quill.setSelection(range.index - 1, Quill.sources.SILENT);
	            return false;
	          }
	        }
	        return true;
	      }
	    },
	    'embed left': makeEmbedArrowHandler('ArrowLeft', false),
	    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),
	    'embed right': makeEmbedArrowHandler('ArrowRight', false),
	    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),
	    'table down': makeTableArrowHandler(false),
	    'table up': makeTableArrowHandler(true)
	  }
	};
	Keyboard.DEFAULTS = defaultOptions;
	function makeCodeBlockHandler(indent) {
	  return {
	    key: 'Tab',
	    shiftKey: !indent,
	    format: {
	      'code-block': true
	    },
	    handler(range, _ref) {
	      let {
	        event
	      } = _ref;
	      const CodeBlock = this.quill.scroll.query('code-block');
	      // @ts-expect-error
	      const {
	        TAB
	      } = CodeBlock;
	      if (range.length === 0 && !event.shiftKey) {
	        this.quill.insertText(range.index, TAB, Quill.sources.USER);
	        this.quill.setSelection(range.index + TAB.length, Quill.sources.SILENT);
	        return;
	      }
	      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);
	      let {
	        index,
	        length
	      } = range;
	      lines.forEach((line, i) => {
	        if (indent) {
	          line.insertAt(0, TAB);
	          if (i === 0) {
	            index += TAB.length;
	          } else {
	            length += TAB.length;
	          }
	          // @ts-expect-error Fix me later
	        } else if (line.domNode.textContent.startsWith(TAB)) {
	          line.deleteAt(0, TAB.length);
	          if (i === 0) {
	            index -= TAB.length;
	          } else {
	            length -= TAB.length;
	          }
	        }
	      });
	      this.quill.update(Quill.sources.USER);
	      this.quill.setSelection(index, length, Quill.sources.SILENT);
	    }
	  };
	}
	function makeEmbedArrowHandler(key, shiftKey) {
	  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';
	  return {
	    key,
	    shiftKey,
	    altKey: null,
	    [where]: /^$/,
	    handler(range) {
	      let {
	        index
	      } = range;
	      if (key === 'ArrowRight') {
	        index += range.length + 1;
	      }
	      const [leaf] = this.quill.getLeaf(index);
	      if (!(leaf instanceof EmbedBlot$1)) return true;
	      if (key === 'ArrowLeft') {
	        if (shiftKey) {
	          this.quill.setSelection(range.index - 1, range.length + 1, Quill.sources.USER);
	        } else {
	          this.quill.setSelection(range.index - 1, Quill.sources.USER);
	        }
	      } else if (shiftKey) {
	        this.quill.setSelection(range.index, range.length + 1, Quill.sources.USER);
	      } else {
	        this.quill.setSelection(range.index + range.length + 1, Quill.sources.USER);
	      }
	      return false;
	    }
	  };
	}
	function makeFormatHandler(format) {
	  return {
	    key: format[0],
	    shortKey: true,
	    handler(range, context) {
	      this.quill.format(format, !context.format[format], Quill.sources.USER);
	    }
	  };
	}
	function makeTableArrowHandler(up) {
	  return {
	    key: up ? 'ArrowUp' : 'ArrowDown',
	    collapsed: true,
	    format: ['table'],
	    handler(range, context) {
	      // TODO move to table module
	      const key = up ? 'prev' : 'next';
	      const cell = context.line;
	      const targetRow = cell.parent[key];
	      if (targetRow != null) {
	        if (targetRow.statics.blotName === 'table-row') {
	          // @ts-expect-error
	          let targetCell = targetRow.children.head;
	          let cur = cell;
	          while (cur.prev != null) {
	            // @ts-expect-error
	            cur = cur.prev;
	            targetCell = targetCell.next;
	          }
	          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);
	          this.quill.setSelection(index, 0, Quill.sources.USER);
	        }
	      } else {
	        // @ts-expect-error
	        const targetLine = cell.table()[key];
	        if (targetLine != null) {
	          if (up) {
	            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, Quill.sources.USER);
	          } else {
	            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, Quill.sources.USER);
	          }
	        }
	      }
	      return false;
	    }
	  };
	}
	function normalize$2(binding) {
	  if (typeof binding === 'string' || typeof binding === 'number') {
	    binding = {
	      key: binding
	    };
	  } else if (typeof binding === 'object') {
	    binding = cloneDeep(binding);
	  } else {
	    return null;
	  }
	  if (binding.shortKey) {
	    binding[SHORTKEY] = binding.shortKey;
	    delete binding.shortKey;
	  }
	  return binding;
	}

	// TODO: Move into quill.ts or editor.ts
	function deleteRange(_ref2) {
	  let {
	    quill,
	    range
	  } = _ref2;
	  const lines = quill.getLines(range);
	  let formats = {};
	  if (lines.length > 1) {
	    const firstFormats = lines[0].formats();
	    const lastFormats = lines[lines.length - 1].formats();
	    formats = DeltaExports.AttributeMap.diff(lastFormats, firstFormats) || {};
	  }
	  quill.deleteText(range, Quill.sources.USER);
	  if (Object.keys(formats).length > 0) {
	    quill.formatLine(range.index, 1, formats, Quill.sources.USER);
	  }
	  quill.setSelection(range.index, Quill.sources.SILENT);
	}
	function tableSide(_table, row, cell, offset) {
	  if (row.prev == null && row.next == null) {
	    if (cell.prev == null && cell.next == null) {
	      return offset === 0 ? -1 : 1;
	    }
	    return cell.prev == null ? -1 : 1;
	  }
	  if (row.prev == null) {
	    return -1;
	  }
	  if (row.next == null) {
	    return 1;
	  }
	  return null;
	}

	const normalWeightRegexp = /font-weight:\s*normal/;
	const blockTagNames = ['P', 'OL', 'UL'];
	const isBlockElement = element => {
	  return element && blockTagNames.includes(element.tagName);
	};
	const normalizeEmptyLines = doc => {
	  Array.from(doc.querySelectorAll('br')).filter(br => isBlockElement(br.previousElementSibling) && isBlockElement(br.nextElementSibling)).forEach(br => {
	    br.parentNode?.removeChild(br);
	  });
	};
	const normalizeFontWeight = doc => {
	  Array.from(doc.querySelectorAll('b[style*="font-weight"]')).filter(node => node.getAttribute('style')?.match(normalWeightRegexp)).forEach(node => {
	    const fragment = doc.createDocumentFragment();
	    fragment.append(...node.childNodes);
	    node.parentNode?.replaceChild(fragment, node);
	  });
	};
	function normalize$1(doc) {
	  if (doc.querySelector('[id^="docs-internal-guid-"]')) {
	    normalizeFontWeight(doc);
	    normalizeEmptyLines(doc);
	  }
	}

	const ignoreRegexp = /\bmso-list:[^;]*ignore/i;
	const idRegexp = /\bmso-list:[^;]*\bl(\d+)/i;
	const indentRegexp = /\bmso-list:[^;]*\blevel(\d+)/i;
	const parseListItem = (element, html) => {
	  const style = element.getAttribute('style');
	  const idMatch = style?.match(idRegexp);
	  if (!idMatch) {
	    return null;
	  }
	  const id = Number(idMatch[1]);
	  const indentMatch = style?.match(indentRegexp);
	  const indent = indentMatch ? Number(indentMatch[1]) : 1;
	  const typeRegexp = new RegExp(`@list l${id}:level${indent}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, 'i');
	  const typeMatch = html.match(typeRegexp);
	  const type = typeMatch && typeMatch[1] === 'bullet' ? 'bullet' : 'ordered';
	  return {
	    id,
	    indent,
	    type,
	    element
	  };
	};

	// list items are represented as `p` tags with styles like `mso-list: l0 level1` where:
	// 1. "0" in "l0" means the list item id;
	// 2. "1" in "level1" means the indent level, starting from 1.
	const normalizeListItem = doc => {
	  const msoList = Array.from(doc.querySelectorAll('[style*=mso-list]'));
	  const ignored = [];
	  const others = [];
	  msoList.forEach(node => {
	    const shouldIgnore = (node.getAttribute('style') || '').match(ignoreRegexp);
	    if (shouldIgnore) {
	      ignored.push(node);
	    } else {
	      others.push(node);
	    }
	  });

	  // Each list item contains a marker wrapped with "mso-list: Ignore".
	  ignored.forEach(node => node.parentNode?.removeChild(node));

	  // The list stype is not defined inline with the tag, instead, it's in the
	  // style tag so we need to pass the html as a string.
	  const html = doc.documentElement.innerHTML;
	  const listItems = others.map(element => parseListItem(element, html)).filter(parsed => parsed);
	  while (listItems.length) {
	    const childListItems = [];
	    let current = listItems.shift();
	    // Group continuous items into the same group (aka "ul")
	    while (current) {
	      childListItems.push(current);
	      current = listItems.length && listItems[0]?.element === current.element.nextElementSibling &&
	      // Different id means the next item doesn't belong to this group.
	      listItems[0].id === current.id ? listItems.shift() : null;
	    }
	    const ul = document.createElement('ul');
	    childListItems.forEach(listItem => {
	      const li = document.createElement('li');
	      li.setAttribute('data-list', listItem.type);
	      if (listItem.indent > 1) {
	        li.setAttribute('class', `ql-indent-${listItem.indent - 1}`);
	      }
	      li.innerHTML = listItem.element.innerHTML;
	      ul.appendChild(li);
	    });
	    const element = childListItems[0]?.element;
	    const {
	      parentNode
	    } = element ?? {};
	    if (element) {
	      parentNode?.replaceChild(ul, element);
	    }
	    childListItems.slice(1).forEach(_ref => {
	      let {
	        element: e
	      } = _ref;
	      parentNode?.removeChild(e);
	    });
	  }
	};
	function normalize(doc) {
	  if (doc.documentElement.getAttribute('xmlns:w') === 'urn:schemas-microsoft-com:office:word') {
	    normalizeListItem(doc);
	  }
	}

	const NORMALIZERS = [normalize, normalize$1];
	const normalizeExternalHTML = doc => {
	  if (doc.documentElement) {
	    NORMALIZERS.forEach(normalize => {
	      normalize(doc);
	    });
	  }
	};

	const debug$1 = namespace('quill:clipboard');
	const CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', createMatchAlias('bold')], ['i', createMatchAlias('italic')], ['strike', createMatchAlias('strike')], ['style', matchIgnore]];
	const ATTRIBUTE_ATTRIBUTORS = [AlignAttribute, DirectionAttribute].reduce((memo, attr) => {
	  memo[attr.keyName] = attr;
	  return memo;
	}, {});
	const STYLE_ATTRIBUTORS = [AlignStyle, BackgroundStyle, ColorStyle, DirectionStyle, FontStyle, SizeStyle].reduce((memo, attr) => {
	  memo[attr.keyName] = attr;
	  return memo;
	}, {});
	class Clipboard extends Module {
	  static DEFAULTS = {
	    matchers: []
	  };
	  constructor(quill, options) {
	    super(quill, options);
	    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));
	    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));
	    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));
	    this.matchers = [];
	    CLIPBOARD_CONFIG.concat(this.options.matchers ?? []).forEach(_ref => {
	      let [selector, matcher] = _ref;
	      this.addMatcher(selector, matcher);
	    });
	  }
	  addMatcher(selector, matcher) {
	    this.matchers.push([selector, matcher]);
	  }
	  convert(_ref2) {
	    let {
	      html,
	      text
	    } = _ref2;
	    let formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (formats[CodeBlock.blotName]) {
	      return new Delta().insert(text || '', {
	        [CodeBlock.blotName]: formats[CodeBlock.blotName]
	      });
	    }
	    if (!html) {
	      return new Delta().insert(text || '', formats);
	    }
	    const delta = this.convertHTML(html);
	    // Remove trailing newline
	    if (deltaEndsWith(delta, '\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {
	      return delta.compose(new Delta().retain(delta.length() - 1).delete(1));
	    }
	    return delta;
	  }
	  normalizeHTML(doc) {
	    normalizeExternalHTML(doc);
	  }
	  convertHTML(html) {
	    const doc = new DOMParser().parseFromString(html, 'text/html');
	    this.normalizeHTML(doc);
	    const container = doc.body;
	    const nodeMatches = new WeakMap();
	    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);
	    return traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches);
	  }
	  dangerouslyPasteHTML(index, html) {
	    let source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Quill.sources.API;
	    if (typeof index === 'string') {
	      const delta = this.convert({
	        html: index,
	        text: ''
	      });
	      // @ts-expect-error
	      this.quill.setContents(delta, html);
	      this.quill.setSelection(0, Quill.sources.SILENT);
	    } else {
	      const paste = this.convert({
	        html,
	        text: ''
	      });
	      this.quill.updateContents(new Delta().retain(index).concat(paste), source);
	      this.quill.setSelection(index + paste.length(), Quill.sources.SILENT);
	    }
	  }
	  onCaptureCopy(e) {
	    let isCut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (e.defaultPrevented) return;
	    e.preventDefault();
	    const [range] = this.quill.selection.getRange();
	    if (range == null) return;
	    const {
	      html,
	      text
	    } = this.onCopy(range, isCut);
	    e.clipboardData?.setData('text/plain', text);
	    e.clipboardData?.setData('text/html', html);
	    if (isCut) {
	      deleteRange({
	        range,
	        quill: this.quill
	      });
	    }
	  }

	  /*
	   * https://www.iana.org/assignments/media-types/text/uri-list
	   */
	  normalizeURIList(urlList) {
	    return urlList.split(/\r?\n/)
	    // Ignore all comments
	    .filter(url => url[0] !== '#').join('\n');
	  }
	  onCapturePaste(e) {
	    if (e.defaultPrevented || !this.quill.isEnabled()) return;
	    e.preventDefault();
	    const range = this.quill.getSelection(true);
	    if (range == null) return;
	    const html = e.clipboardData?.getData('text/html');
	    let text = e.clipboardData?.getData('text/plain');
	    if (!html && !text) {
	      const urlList = e.clipboardData?.getData('text/uri-list');
	      if (urlList) {
	        text = this.normalizeURIList(urlList);
	      }
	    }
	    const files = Array.from(e.clipboardData?.files || []);
	    if (!html && files.length > 0) {
	      this.quill.uploader.upload(range, files);
	      return;
	    }
	    if (html && files.length > 0) {
	      const doc = new DOMParser().parseFromString(html, 'text/html');
	      if (doc.body.childElementCount === 1 && doc.body.firstElementChild?.tagName === 'IMG') {
	        this.quill.uploader.upload(range, files);
	        return;
	      }
	    }
	    this.onPaste(range, {
	      html,
	      text
	    });
	  }
	  onCopy(range) {
	    const text = this.quill.getText(range);
	    const html = this.quill.getSemanticHTML(range);
	    return {
	      html,
	      text
	    };
	  }
	  onPaste(range, _ref3) {
	    let {
	      text,
	      html
	    } = _ref3;
	    const formats = this.quill.getFormat(range.index);
	    const pastedDelta = this.convert({
	      text,
	      html
	    }, formats);
	    debug$1.log('onPaste', pastedDelta, {
	      text,
	      html
	    });
	    const delta = new Delta().retain(range.index).delete(range.length).concat(pastedDelta);
	    this.quill.updateContents(delta, Quill.sources.USER);
	    // range.length contributes to delta.length()
	    this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
	    this.quill.scrollSelectionIntoView();
	  }
	  prepareMatching(container, nodeMatches) {
	    const elementMatchers = [];
	    const textMatchers = [];
	    this.matchers.forEach(pair => {
	      const [selector, matcher] = pair;
	      switch (selector) {
	        case Node.TEXT_NODE:
	          textMatchers.push(matcher);
	          break;
	        case Node.ELEMENT_NODE:
	          elementMatchers.push(matcher);
	          break;
	        default:
	          Array.from(container.querySelectorAll(selector)).forEach(node => {
	            if (nodeMatches.has(node)) {
	              const matches = nodeMatches.get(node);
	              matches?.push(matcher);
	            } else {
	              nodeMatches.set(node, [matcher]);
	            }
	          });
	          break;
	      }
	    });
	    return [elementMatchers, textMatchers];
	  }
	}
	function applyFormat(delta, format, value, scroll) {
	  if (!scroll.query(format)) {
	    return delta;
	  }
	  return delta.reduce((newDelta, op) => {
	    if (!op.insert) return newDelta;
	    if (op.attributes && op.attributes[format]) {
	      return newDelta.push(op);
	    }
	    const formats = value ? {
	      [format]: value
	    } : {};
	    return newDelta.insert(op.insert, {
	      ...formats,
	      ...op.attributes
	    });
	  }, new Delta());
	}
	function deltaEndsWith(delta, text) {
	  let endText = '';
	  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus
	  ) {
	    const op = delta.ops[i];
	    if (typeof op.insert !== 'string') break;
	    endText = op.insert + endText;
	  }
	  return endText.slice(-1 * text.length) === text;
	}
	function isLine(node, scroll) {
	  if (!(node instanceof Element)) return false;
	  const match = scroll.query(node);
	  // @ts-expect-error
	  if (match && match.prototype instanceof EmbedBlot$1) return false;
	  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());
	}
	function isBetweenInlineElements(node, scroll) {
	  return node.previousElementSibling && node.nextElementSibling && !isLine(node.previousElementSibling, scroll) && !isLine(node.nextElementSibling, scroll);
	}
	const preNodes = new WeakMap();
	function isPre(node) {
	  if (node == null) return false;
	  if (!preNodes.has(node)) {
	    // @ts-expect-error
	    if (node.tagName === 'PRE') {
	      preNodes.set(node, true);
	    } else {
	      preNodes.set(node, isPre(node.parentNode));
	    }
	  }
	  return preNodes.get(node);
	}
	function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
	  // Post-order
	  if (node.nodeType === node.TEXT_NODE) {
	    return textMatchers.reduce((delta, matcher) => {
	      return matcher(node, delta, scroll);
	    }, new Delta());
	  }
	  if (node.nodeType === node.ELEMENT_NODE) {
	    return Array.from(node.childNodes || []).reduce((delta, childNode) => {
	      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);
	      if (childNode.nodeType === node.ELEMENT_NODE) {
	        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {
	          return matcher(childNode, reducedDelta, scroll);
	        }, childrenDelta);
	        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {
	          return matcher(childNode, reducedDelta, scroll);
	        }, childrenDelta);
	      }
	      return delta.concat(childrenDelta);
	    }, new Delta());
	  }
	  return new Delta();
	}
	function createMatchAlias(format) {
	  return (_node, delta, scroll) => {
	    return applyFormat(delta, format, true, scroll);
	  };
	}
	function matchAttributor(node, delta, scroll) {
	  const attributes = Attributor.keys(node);
	  const classes = ClassAttributor$1.keys(node);
	  const styles = StyleAttributor$1.keys(node);
	  const formats = {};
	  attributes.concat(classes).concat(styles).forEach(name => {
	    let attr = scroll.query(name, Scope.ATTRIBUTE);
	    if (attr != null) {
	      formats[attr.attrName] = attr.value(node);
	      if (formats[attr.attrName]) return;
	    }
	    attr = ATTRIBUTE_ATTRIBUTORS[name];
	    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
	      formats[attr.attrName] = attr.value(node) || undefined;
	    }
	    attr = STYLE_ATTRIBUTORS[name];
	    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
	      attr = STYLE_ATTRIBUTORS[name];
	      formats[attr.attrName] = attr.value(node) || undefined;
	    }
	  });
	  return Object.entries(formats).reduce((newDelta, _ref4) => {
	    let [name, value] = _ref4;
	    return applyFormat(newDelta, name, value, scroll);
	  }, delta);
	}
	function matchBlot(node, delta, scroll) {
	  const match = scroll.query(node);
	  if (match == null) return delta;
	  // @ts-expect-error
	  if (match.prototype instanceof EmbedBlot$1) {
	    const embed = {};
	    // @ts-expect-error
	    const value = match.value(node);
	    if (value != null) {
	      // @ts-expect-error
	      embed[match.blotName] = value;
	      // @ts-expect-error
	      return new Delta().insert(embed, match.formats(node, scroll));
	    }
	  } else {
	    // @ts-expect-error
	    if (match.prototype instanceof BlockBlot$1 && !deltaEndsWith(delta, '\n')) {
	      delta.insert('\n');
	    }
	    if ('blotName' in match && 'formats' in match && typeof match.formats === 'function') {
	      return applyFormat(delta, match.blotName, match.formats(node, scroll), scroll);
	    }
	  }
	  return delta;
	}
	function matchBreak(node, delta) {
	  if (!deltaEndsWith(delta, '\n')) {
	    delta.insert('\n');
	  }
	  return delta;
	}
	function matchCodeBlock(node, delta, scroll) {
	  const match = scroll.query('code-block');
	  const language = match && 'formats' in match && typeof match.formats === 'function' ? match.formats(node, scroll) : true;
	  return applyFormat(delta, 'code-block', language, scroll);
	}
	function matchIgnore() {
	  return new Delta();
	}
	function matchIndent(node, delta, scroll) {
	  const match = scroll.query(node);
	  if (match == null ||
	  // @ts-expect-error
	  match.blotName !== 'list' || !deltaEndsWith(delta, '\n')) {
	    return delta;
	  }
	  let indent = -1;
	  let parent = node.parentNode;
	  while (parent != null) {
	    // @ts-expect-error
	    if (['OL', 'UL'].includes(parent.tagName)) {
	      indent += 1;
	    }
	    parent = parent.parentNode;
	  }
	  if (indent <= 0) return delta;
	  return delta.reduce((composed, op) => {
	    if (!op.insert) return composed;
	    if (op.attributes && typeof op.attributes.indent === 'number') {
	      return composed.push(op);
	    }
	    return composed.insert(op.insert, {
	      indent,
	      ...(op.attributes || {})
	    });
	  }, new Delta());
	}
	function matchList(node, delta, scroll) {
	  const element = node;
	  let list = element.tagName === 'OL' ? 'ordered' : 'bullet';
	  const checkedAttr = element.getAttribute('data-checked');
	  if (checkedAttr) {
	    list = checkedAttr === 'true' ? 'checked' : 'unchecked';
	  }
	  return applyFormat(delta, 'list', list, scroll);
	}
	function matchNewline(node, delta, scroll) {
	  if (!deltaEndsWith(delta, '\n')) {
	    if (isLine(node, scroll) && (node.childNodes.length > 0 || node instanceof HTMLParagraphElement)) {
	      return delta.insert('\n');
	    }
	    if (delta.length() > 0 && node.nextSibling) {
	      let nextSibling = node.nextSibling;
	      while (nextSibling != null) {
	        if (isLine(nextSibling, scroll)) {
	          return delta.insert('\n');
	        }
	        const match = scroll.query(nextSibling);
	        // @ts-expect-error
	        if (match && match.prototype instanceof BlockEmbed) {
	          return delta.insert('\n');
	        }
	        nextSibling = nextSibling.firstChild;
	      }
	    }
	  }
	  return delta;
	}
	function matchStyles(node, delta, scroll) {
	  const formats = {};
	  const style = node.style || {};
	  if (style.fontStyle === 'italic') {
	    formats.italic = true;
	  }
	  if (style.textDecoration === 'underline') {
	    formats.underline = true;
	  }
	  if (style.textDecoration === 'line-through') {
	    formats.strike = true;
	  }
	  if (style.fontWeight?.startsWith('bold') ||
	  // @ts-expect-error Fix me later
	  parseInt(style.fontWeight, 10) >= 700) {
	    formats.bold = true;
	  }
	  delta = Object.entries(formats).reduce((newDelta, _ref5) => {
	    let [name, value] = _ref5;
	    return applyFormat(newDelta, name, value, scroll);
	  }, delta);
	  // @ts-expect-error
	  if (parseFloat(style.textIndent || 0) > 0) {
	    // Could be 0.5in
	    return new Delta().insert('\t').concat(delta);
	  }
	  return delta;
	}
	function matchTable(node, delta, scroll) {
	  const table = node.parentElement?.tagName === 'TABLE' ? node.parentElement : node.parentElement?.parentElement;
	  if (table != null) {
	    const rows = Array.from(table.querySelectorAll('tr'));
	    const row = rows.indexOf(node) + 1;
	    return applyFormat(delta, 'table', row, scroll);
	  }
	  return delta;
	}
	function matchText(node, delta, scroll) {
	  // @ts-expect-error
	  let text = node.data;
	  // Word represents empty line with <o:p>&nbsp;</o:p>
	  if (node.parentElement?.tagName === 'O:P') {
	    return delta.insert(text.trim());
	  }
	  if (!isPre(node)) {
	    if (text.trim().length === 0 && text.includes('\n') && !isBetweenInlineElements(node, scroll)) {
	      return delta;
	    }
	    // convert all non-nbsp whitespace into regular space
	    text = text.replace(/[^\S\u00a0]/g, ' ');
	    // collapse consecutive spaces into one
	    text = text.replace(/ {2,}/g, ' ');
	    if (node.previousSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.previousSibling instanceof Element && isLine(node.previousSibling, scroll)) {
	      // block structure means we don't need leading space
	      text = text.replace(/^ /, '');
	    }
	    if (node.nextSibling == null && node.parentElement != null && isLine(node.parentElement, scroll) || node.nextSibling instanceof Element && isLine(node.nextSibling, scroll)) {
	      // block structure means we don't need trailing space
	      text = text.replace(/ $/, '');
	    }
	    // done removing whitespace and can normalize all to regular space
	    text = text.replaceAll('\u00a0', ' ');
	  }
	  return delta.insert(text);
	}

	class History extends Module {
	  static DEFAULTS = {
	    delay: 1000,
	    maxStack: 100,
	    userOnly: false
	  };
	  lastRecorded = 0;
	  ignoreChange = false;
	  stack = {
	    undo: [],
	    redo: []
	  };
	  currentRange = null;
	  constructor(quill, options) {
	    super(quill, options);
	    this.quill.on(Quill.events.EDITOR_CHANGE, (eventName, value, oldValue, source) => {
	      if (eventName === Quill.events.SELECTION_CHANGE) {
	        if (value && source !== Quill.sources.SILENT) {
	          this.currentRange = value;
	        }
	      } else if (eventName === Quill.events.TEXT_CHANGE) {
	        if (!this.ignoreChange) {
	          if (!this.options.userOnly || source === Quill.sources.USER) {
	            this.record(value, oldValue);
	          } else {
	            this.transform(value);
	          }
	        }
	        this.currentRange = transformRange(this.currentRange, value);
	      }
	    });
	    this.quill.keyboard.addBinding({
	      key: 'z',
	      shortKey: true
	    }, this.undo.bind(this));
	    this.quill.keyboard.addBinding({
	      key: ['z', 'Z'],
	      shortKey: true,
	      shiftKey: true
	    }, this.redo.bind(this));
	    if (/Win/i.test(navigator.platform)) {
	      this.quill.keyboard.addBinding({
	        key: 'y',
	        shortKey: true
	      }, this.redo.bind(this));
	    }
	    this.quill.root.addEventListener('beforeinput', event => {
	      if (event.inputType === 'historyUndo') {
	        this.undo();
	        event.preventDefault();
	      } else if (event.inputType === 'historyRedo') {
	        this.redo();
	        event.preventDefault();
	      }
	    });
	  }
	  change(source, dest) {
	    if (this.stack[source].length === 0) return;
	    const item = this.stack[source].pop();
	    if (!item) return;
	    const base = this.quill.getContents();
	    const inverseDelta = item.delta.invert(base);
	    this.stack[dest].push({
	      delta: inverseDelta,
	      range: transformRange(item.range, inverseDelta)
	    });
	    this.lastRecorded = 0;
	    this.ignoreChange = true;
	    this.quill.updateContents(item.delta, Quill.sources.USER);
	    this.ignoreChange = false;
	    this.restoreSelection(item);
	  }
	  clear() {
	    this.stack = {
	      undo: [],
	      redo: []
	    };
	  }
	  cutoff() {
	    this.lastRecorded = 0;
	  }
	  record(changeDelta, oldDelta) {
	    if (changeDelta.ops.length === 0) return;
	    this.stack.redo = [];
	    let undoDelta = changeDelta.invert(oldDelta);
	    let undoRange = this.currentRange;
	    const timestamp = Date.now();
	    if (
	    // @ts-expect-error Fix me later
	    this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
	      const item = this.stack.undo.pop();
	      if (item) {
	        undoDelta = undoDelta.compose(item.delta);
	        undoRange = item.range;
	      }
	    } else {
	      this.lastRecorded = timestamp;
	    }
	    if (undoDelta.length() === 0) return;
	    this.stack.undo.push({
	      delta: undoDelta,
	      range: undoRange
	    });
	    // @ts-expect-error Fix me later
	    if (this.stack.undo.length > this.options.maxStack) {
	      this.stack.undo.shift();
	    }
	  }
	  redo() {
	    this.change('redo', 'undo');
	  }
	  transform(delta) {
	    transformStack(this.stack.undo, delta);
	    transformStack(this.stack.redo, delta);
	  }
	  undo() {
	    this.change('undo', 'redo');
	  }
	  restoreSelection(stackItem) {
	    if (stackItem.range) {
	      this.quill.setSelection(stackItem.range, Quill.sources.USER);
	    } else {
	      const index = getLastChangeIndex(this.quill.scroll, stackItem.delta);
	      this.quill.setSelection(index, Quill.sources.USER);
	    }
	  }
	}
	function transformStack(stack, delta) {
	  let remoteDelta = delta;
	  for (let i = stack.length - 1; i >= 0; i -= 1) {
	    const oldItem = stack[i];
	    stack[i] = {
	      delta: remoteDelta.transform(oldItem.delta, true),
	      range: oldItem.range && transformRange(oldItem.range, remoteDelta)
	    };
	    remoteDelta = oldItem.delta.transform(remoteDelta);
	    if (stack[i].delta.length() === 0) {
	      stack.splice(i, 1);
	    }
	  }
	}
	function endsWithNewlineChange(scroll, delta) {
	  const lastOp = delta.ops[delta.ops.length - 1];
	  if (lastOp == null) return false;
	  if (lastOp.insert != null) {
	    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
	  }
	  if (lastOp.attributes != null) {
	    return Object.keys(lastOp.attributes).some(attr => {
	      return scroll.query(attr, Scope.BLOCK) != null;
	    });
	  }
	  return false;
	}
	function getLastChangeIndex(scroll, delta) {
	  const deleteLength = delta.reduce((length, op) => {
	    return length + (op.delete || 0);
	  }, 0);
	  let changeIndex = delta.length() - deleteLength;
	  if (endsWithNewlineChange(scroll, delta)) {
	    changeIndex -= 1;
	  }
	  return changeIndex;
	}
	function transformRange(range, delta) {
	  if (!range) return range;
	  const start = delta.transformPosition(range.index);
	  const end = delta.transformPosition(range.index + range.length);
	  return {
	    index: start,
	    length: end - start
	  };
	}

	class Uploader extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    quill.root.addEventListener('drop', e => {
	      e.preventDefault();
	      let native = null;
	      if (document.caretRangeFromPoint) {
	        native = document.caretRangeFromPoint(e.clientX, e.clientY);
	        // @ts-expect-error
	      } else if (document.caretPositionFromPoint) {
	        // @ts-expect-error
	        const position = document.caretPositionFromPoint(e.clientX, e.clientY);
	        native = document.createRange();
	        native.setStart(position.offsetNode, position.offset);
	        native.setEnd(position.offsetNode, position.offset);
	      }
	      const normalized = native && quill.selection.normalizeNative(native);
	      if (normalized) {
	        const range = quill.selection.normalizedToRange(normalized);
	        if (e.dataTransfer?.files) {
	          this.upload(range, e.dataTransfer.files);
	        }
	      }
	    });
	  }
	  upload(range, files) {
	    const uploads = [];
	    Array.from(files).forEach(file => {
	      if (file && this.options.mimetypes?.includes(file.type)) {
	        uploads.push(file);
	      }
	    });
	    if (uploads.length > 0) {
	      // @ts-expect-error Fix me later
	      this.options.handler.call(this, range, uploads);
	    }
	  }
	}
	Uploader.DEFAULTS = {
	  mimetypes: ['image/png', 'image/jpeg'],
	  handler(range, files) {
	    if (!this.quill.scroll.query('image')) {
	      return;
	    }
	    const promises = files.map(file => {
	      return new Promise(resolve => {
	        const reader = new FileReader();
	        reader.onload = () => {
	          resolve(reader.result);
	        };
	        reader.readAsDataURL(file);
	      });
	    });
	    Promise.all(promises).then(images => {
	      const update = images.reduce((delta, image) => {
	        return delta.insert({
	          image
	        });
	      }, new Delta().retain(range.index).delete(range.length));
	      this.quill.updateContents(update, Emitter.sources.USER);
	      this.quill.setSelection(range.index + images.length, Emitter.sources.SILENT);
	    });
	  }
	};

	const INSERT_TYPES = ['insertText', 'insertReplacementText'];
	class Input extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    quill.root.addEventListener('beforeinput', event => {
	      this.handleBeforeInput(event);
	    });

	    // Gboard with English input on Android triggers `compositionstart` sometimes even
	    // users are not going to type anything.
	    if (!/Android/i.test(navigator.userAgent)) {
	      quill.on(Quill.events.COMPOSITION_BEFORE_START, () => {
	        this.handleCompositionStart();
	      });
	    }
	  }
	  deleteRange(range) {
	    deleteRange({
	      range,
	      quill: this.quill
	    });
	  }
	  replaceText(range) {
	    let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	    if (range.length === 0) return false;
	    if (text) {
	      // Follow the native behavior that inherits the formats of the first character
	      const formats = this.quill.getFormat(range.index, 1);
	      this.deleteRange(range);
	      this.quill.updateContents(new Delta().retain(range.index).insert(text, formats), Quill.sources.USER);
	    } else {
	      this.deleteRange(range);
	    }
	    this.quill.setSelection(range.index + text.length, 0, Quill.sources.SILENT);
	    return true;
	  }
	  handleBeforeInput(event) {
	    if (this.quill.composition.isComposing || event.defaultPrevented || !INSERT_TYPES.includes(event.inputType)) {
	      return;
	    }
	    const staticRange = event.getTargetRanges ? event.getTargetRanges()[0] : null;
	    if (!staticRange || staticRange.collapsed === true) {
	      return;
	    }
	    const text = getPlainTextFromInputEvent(event);
	    if (text == null) {
	      return;
	    }
	    const normalized = this.quill.selection.normalizeNative(staticRange);
	    const range = normalized ? this.quill.selection.normalizedToRange(normalized) : null;
	    if (range && this.replaceText(range, text)) {
	      event.preventDefault();
	    }
	  }
	  handleCompositionStart() {
	    const range = this.quill.getSelection();
	    if (range) {
	      this.replaceText(range);
	    }
	  }
	}
	function getPlainTextFromInputEvent(event) {
	  // When `inputType` is "insertText":
	  // - `event.data` should be string (Safari uses `event.dataTransfer`).
	  // - `event.dataTransfer` should be null.
	  // When `inputType` is "insertReplacementText":
	  // - `event.data` should be null.
	  // - `event.dataTransfer` should contain "text/plain" data.

	  if (typeof event.data === 'string') {
	    return event.data;
	  }
	  if (event.dataTransfer?.types.includes('text/plain')) {
	    return event.dataTransfer.getData('text/plain');
	  }
	  return null;
	}

	const isMac = /Mac/i.test(navigator.platform);

	// Export for testing
	const TTL_FOR_VALID_SELECTION_CHANGE = 100;

	// A loose check to determine if the shortcut can move the caret before a UI node:
	// <ANY_PARENT>[CARET]<div class="ql-ui"></div>[CONTENT]</ANY_PARENT>
	const canMoveCaretBeforeUINode = event => {
	  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
	  // RTL scripts or moving from the end of the previous line
	  event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home') {
	    return true;
	  }
	  if (isMac && event.key === 'a' && event.ctrlKey === true) {
	    return true;
	  }
	  return false;
	};
	class UINode extends Module {
	  isListening = false;
	  selectionChangeDeadline = 0;
	  constructor(quill, options) {
	    super(quill, options);
	    this.handleArrowKeys();
	    this.handleNavigationShortcuts();
	  }
	  handleArrowKeys() {
	    this.quill.keyboard.addBinding({
	      key: ['ArrowLeft', 'ArrowRight'],
	      offset: 0,
	      shiftKey: null,
	      handler(range, _ref) {
	        let {
	          line,
	          event
	        } = _ref;
	        if (!(line instanceof ParentBlot$1) || !line.uiNode) {
	          return true;
	        }
	        const isRTL = getComputedStyle(line.domNode)['direction'] === 'rtl';
	        if (isRTL && event.key !== 'ArrowRight' || !isRTL && event.key !== 'ArrowLeft') {
	          return true;
	        }
	        this.quill.setSelection(range.index - 1, range.length + (event.shiftKey ? 1 : 0), Quill.sources.USER);
	        return false;
	      }
	    });
	  }
	  handleNavigationShortcuts() {
	    this.quill.root.addEventListener('keydown', event => {
	      if (!event.defaultPrevented && canMoveCaretBeforeUINode(event)) {
	        this.ensureListeningToSelectionChange();
	      }
	    });
	  }

	  /**
	   * We only listen to the `selectionchange` event when
	   * there is an intention of moving the caret to the beginning using shortcuts.
	   * This is primarily implemented to prevent infinite loops, as we are changing
	   * the selection within the handler of a `selectionchange` event.
	   */
	  ensureListeningToSelectionChange() {
	    this.selectionChangeDeadline = Date.now() + TTL_FOR_VALID_SELECTION_CHANGE;
	    if (this.isListening) return;
	    this.isListening = true;
	    const listener = () => {
	      this.isListening = false;
	      if (Date.now() <= this.selectionChangeDeadline) {
	        this.handleSelectionChange();
	      }
	    };
	    document.addEventListener('selectionchange', listener, {
	      once: true
	    });
	  }
	  handleSelectionChange() {
	    const selection = document.getSelection();
	    if (!selection) return;
	    const range = selection.getRangeAt(0);
	    if (range.collapsed !== true || range.startOffset !== 0) return;
	    const line = this.quill.scroll.find(range.startContainer);
	    if (!(line instanceof ParentBlot$1) || !line.uiNode) return;
	    const newRange = document.createRange();
	    newRange.setStartAfter(line.uiNode);
	    newRange.setEndAfter(line.uiNode);
	    selection.removeAllRanges();
	    selection.addRange(newRange);
	  }
	}

	Quill.register({
	  'blots/block': Block,
	  'blots/block/embed': BlockEmbed,
	  'blots/break': Break,
	  'blots/container': Container,
	  'blots/cursor': Cursor,
	  'blots/embed': Embed,
	  'blots/inline': Inline,
	  'blots/scroll': Scroll,
	  'blots/text': Text$1,
	  'modules/clipboard': Clipboard,
	  'modules/history': History,
	  'modules/keyboard': Keyboard,
	  'modules/uploader': Uploader,
	  'modules/input': Input,
	  'modules/uiNode': UINode
	});

	class IndentAttributor extends ClassAttributor$1 {
	  add(node, value) {
	    let normalizedValue = 0;
	    if (value === '+1' || value === '-1') {
	      const indent = this.value(node) || 0;
	      normalizedValue = value === '+1' ? indent + 1 : indent - 1;
	    } else if (typeof value === 'number') {
	      normalizedValue = value;
	    }
	    if (normalizedValue === 0) {
	      this.remove(node);
	      return true;
	    }
	    return super.add(node, normalizedValue.toString());
	  }
	  canAdd(node, value) {
	    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
	  }
	  value(node) {
	    return parseInt(super.value(node), 10) || undefined; // Don't return NaN
	  }
	}
	const IndentClass = new IndentAttributor('indent', 'ql-indent', {
	  scope: Scope.BLOCK,
	  // @ts-expect-error
	  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
	});

	class Blockquote extends Block {
	  static blotName = 'blockquote';
	  static tagName = 'blockquote';
	}

	class Header extends Block {
	  static blotName = 'header';
	  static tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
	  static formats(domNode) {
	    return this.tagName.indexOf(domNode.tagName) + 1;
	  }
	}

	class ListContainer extends Container {}
	ListContainer.blotName = 'list-container';
	ListContainer.tagName = 'OL';
	class ListItem extends Block {
	  static create(value) {
	    const node = super.create();
	    node.setAttribute('data-list', value);
	    return node;
	  }
	  static formats(domNode) {
	    return domNode.getAttribute('data-list') || undefined;
	  }
	  static register() {
	    Quill.register(ListContainer);
	  }
	  constructor(scroll, domNode) {
	    super(scroll, domNode);
	    const ui = domNode.ownerDocument.createElement('span');
	    const listEventHandler = e => {
	      if (!scroll.isEnabled()) return;
	      const format = this.statics.formats(domNode, scroll);
	      if (format === 'checked') {
	        this.format('list', 'unchecked');
	        e.preventDefault();
	      } else if (format === 'unchecked') {
	        this.format('list', 'checked');
	        e.preventDefault();
	      }
	    };
	    ui.addEventListener('mousedown', listEventHandler);
	    ui.addEventListener('touchstart', listEventHandler);
	    this.attachUI(ui);
	  }
	  format(name, value) {
	    if (name === this.statics.blotName && value) {
	      this.domNode.setAttribute('data-list', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	}
	ListItem.blotName = 'list';
	ListItem.tagName = 'LI';
	ListContainer.allowedChildren = [ListItem];
	ListItem.requiredContainer = ListContainer;

	class Bold extends Inline {
	  static blotName = 'bold';
	  static tagName = ['STRONG', 'B'];
	  static create() {
	    return super.create();
	  }
	  static formats() {
	    return true;
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.domNode.tagName !== this.statics.tagName[0]) {
	      this.replaceWith(this.statics.blotName);
	    }
	  }
	}

	class Italic extends Bold {
	  static blotName = 'italic';
	  static tagName = ['EM', 'I'];
	}

	class Link extends Inline {
	  static blotName = 'link';
	  static tagName = 'A';
	  static SANITIZED_URL = 'about:blank';
	  static PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel', 'sms'];
	  static create(value) {
	    const node = super.create(value);
	    node.setAttribute('href', this.sanitize(value));
	    node.setAttribute('rel', 'noopener noreferrer');
	    node.setAttribute('target', '_blank');
	    return node;
	  }
	  static formats(domNode) {
	    return domNode.getAttribute('href');
	  }
	  static sanitize(url) {
	    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
	  }
	  format(name, value) {
	    if (name !== this.statics.blotName || !value) {
	      super.format(name, value);
	    } else {
	      // @ts-expect-error
	      this.domNode.setAttribute('href', this.constructor.sanitize(value));
	    }
	  }
	}
	function sanitize(url, protocols) {
	  const anchor = document.createElement('a');
	  anchor.href = url;
	  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
	  return protocols.indexOf(protocol) > -1;
	}

	class Script extends Inline {
	  static blotName = 'script';
	  static tagName = ['SUB', 'SUP'];
	  static create(value) {
	    if (value === 'super') {
	      return document.createElement('sup');
	    }
	    if (value === 'sub') {
	      return document.createElement('sub');
	    }
	    return super.create(value);
	  }
	  static formats(domNode) {
	    if (domNode.tagName === 'SUB') return 'sub';
	    if (domNode.tagName === 'SUP') return 'super';
	    return undefined;
	  }
	}

	class Strike extends Bold {
	  static blotName = 'strike';
	  static tagName = ['S', 'STRIKE'];
	}

	class Underline extends Inline {
	  static blotName = 'underline';
	  static tagName = 'U';
	}

	class Formula extends Embed {
	  static blotName = 'formula';
	  static className = 'ql-formula';
	  static tagName = 'SPAN';
	  static create(value) {
	    // @ts-expect-error
	    if (window.katex == null) {
	      throw new Error('Formula module requires KaTeX.');
	    }
	    const node = super.create(value);
	    if (typeof value === 'string') {
	      // @ts-expect-error
	      window.katex.render(value, node, {
	        throwOnError: false,
	        errorColor: '#f00'
	      });
	      node.setAttribute('data-value', value);
	    }
	    return node;
	  }
	  static value(domNode) {
	    return domNode.getAttribute('data-value');
	  }
	  html() {
	    const {
	      formula
	    } = this.value();
	    return `<span>${formula}</span>`;
	  }
	}

	const ATTRIBUTES$1 = ['alt', 'height', 'width'];
	class Image extends EmbedBlot$1 {
	  static blotName = 'image';
	  static tagName = 'IMG';
	  static create(value) {
	    const node = super.create(value);
	    if (typeof value === 'string') {
	      node.setAttribute('src', this.sanitize(value));
	    }
	    return node;
	  }
	  static formats(domNode) {
	    return ATTRIBUTES$1.reduce((formats, attribute) => {
	      if (domNode.hasAttribute(attribute)) {
	        formats[attribute] = domNode.getAttribute(attribute);
	      }
	      return formats;
	    }, {});
	  }
	  static match(url) {
	    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
	  }
	  static sanitize(url) {
	    return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
	  }
	  static value(domNode) {
	    return domNode.getAttribute('src');
	  }
	  format(name, value) {
	    if (ATTRIBUTES$1.indexOf(name) > -1) {
	      if (value) {
	        this.domNode.setAttribute(name, value);
	      } else {
	        this.domNode.removeAttribute(name);
	      }
	    } else {
	      super.format(name, value);
	    }
	  }
	}

	const ATTRIBUTES = ['height', 'width'];
	class Video extends BlockEmbed {
	  static blotName = 'video';
	  static className = 'ql-video';
	  static tagName = 'IFRAME';
	  static create(value) {
	    const node = super.create(value);
	    node.setAttribute('frameborder', '0');
	    node.setAttribute('allowfullscreen', 'true');
	    node.setAttribute('src', this.sanitize(value));
	    return node;
	  }
	  static formats(domNode) {
	    return ATTRIBUTES.reduce((formats, attribute) => {
	      if (domNode.hasAttribute(attribute)) {
	        formats[attribute] = domNode.getAttribute(attribute);
	      }
	      return formats;
	    }, {});
	  }
	  static sanitize(url) {
	    return Link.sanitize(url);
	  }
	  static value(domNode) {
	    return domNode.getAttribute('src');
	  }
	  format(name, value) {
	    if (ATTRIBUTES.indexOf(name) > -1) {
	      if (value) {
	        this.domNode.setAttribute(name, value);
	      } else {
	        this.domNode.removeAttribute(name);
	      }
	    } else {
	      super.format(name, value);
	    }
	  }
	  html() {
	    const {
	      video
	    } = this.value();
	    return `<a href="${video}">${video}</a>`;
	  }
	}

	const TokenAttributor = new ClassAttributor$1('code-token', 'hljs', {
	  scope: Scope.INLINE
	});
	class CodeToken extends Inline {
	  static formats(node, scroll) {
	    while (node != null && node !== scroll.domNode) {
	      if (node.classList && node.classList.contains(CodeBlock.className)) {
	        // @ts-expect-error
	        return super.formats(node, scroll);
	      }
	      // @ts-expect-error
	      node = node.parentNode;
	    }
	    return undefined;
	  }
	  constructor(scroll, domNode, value) {
	    // @ts-expect-error
	    super(scroll, domNode, value);
	    TokenAttributor.add(this.domNode, value);
	  }
	  format(format, value) {
	    if (format !== CodeToken.blotName) {
	      super.format(format, value);
	    } else if (value) {
	      TokenAttributor.add(this.domNode, value);
	    } else {
	      TokenAttributor.remove(this.domNode);
	      this.domNode.classList.remove(this.statics.className);
	    }
	  }
	  optimize() {
	    // @ts-expect-error
	    super.optimize(...arguments);
	    if (!TokenAttributor.value(this.domNode)) {
	      this.unwrap();
	    }
	  }
	}
	CodeToken.blotName = 'code-token';
	CodeToken.className = 'ql-token';
	class SyntaxCodeBlock extends CodeBlock {
	  static create(value) {
	    const domNode = super.create(value);
	    if (typeof value === 'string') {
	      domNode.setAttribute('data-language', value);
	    }
	    return domNode;
	  }
	  static formats(domNode) {
	    // @ts-expect-error
	    return domNode.getAttribute('data-language') || 'plain';
	  }
	  static register() {} // Syntax module will register

	  format(name, value) {
	    if (name === this.statics.blotName && value) {
	      // @ts-expect-error
	      this.domNode.setAttribute('data-language', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	  replaceWith(name, value) {
	    this.formatAt(0, this.length(), CodeToken.blotName, false);
	    return super.replaceWith(name, value);
	  }
	}
	class SyntaxCodeBlockContainer extends CodeBlockContainer {
	  attach() {
	    super.attach();
	    this.forceNext = false;
	    // @ts-expect-error
	    this.scroll.emitMount(this);
	  }
	  format(name, value) {
	    if (name === SyntaxCodeBlock.blotName) {
	      this.forceNext = true;
	      this.children.forEach(child => {
	        // @ts-expect-error
	        child.format(name, value);
	      });
	    }
	  }
	  formatAt(index, length, name, value) {
	    if (name === SyntaxCodeBlock.blotName) {
	      this.forceNext = true;
	    }
	    super.formatAt(index, length, name, value);
	  }
	  highlight(highlight) {
	    let forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (this.children.head == null) return;
	    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);
	    const text = `${nodes.map(node => node.textContent).join('\n')}\n`;
	    const language = SyntaxCodeBlock.formats(this.children.head.domNode);
	    if (forced || this.forceNext || this.cachedText !== text) {
	      if (text.trim().length > 0 || this.cachedText == null) {
	        const oldDelta = this.children.reduce((delta, child) => {
	          // @ts-expect-error
	          return delta.concat(blockDelta(child, false));
	        }, new Delta());
	        const delta = highlight(text, language);
	        oldDelta.diff(delta).reduce((index, _ref) => {
	          let {
	            retain,
	            attributes
	          } = _ref;
	          // Should be all retains
	          if (!retain) return index;
	          if (attributes) {
	            Object.keys(attributes).forEach(format => {
	              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {
	                // @ts-expect-error
	                this.formatAt(index, retain, format, attributes[format]);
	              }
	            });
	          }
	          // @ts-expect-error
	          return index + retain;
	        }, 0);
	      }
	      this.cachedText = text;
	      this.forceNext = false;
	    }
	  }
	  html(index, length) {
	    const [codeBlock] = this.children.find(index);
	    const language = codeBlock ? SyntaxCodeBlock.formats(codeBlock.domNode) : 'plain';
	    return `<pre data-language="${language}">\n${escapeText(this.code(index, length))}\n</pre>`;
	  }
	  optimize(context) {
	    super.optimize(context);
	    if (this.parent != null && this.children.head != null && this.uiNode != null) {
	      const language = SyntaxCodeBlock.formats(this.children.head.domNode);
	      // @ts-expect-error
	      if (language !== this.uiNode.value) {
	        // @ts-expect-error
	        this.uiNode.value = language;
	      }
	    }
	  }
	}
	SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
	SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
	SyntaxCodeBlock.allowedChildren = [CodeToken, Cursor, Text$1, Break];
	const highlight = (lib, language, text) => {
	  if (typeof lib.versionString === 'string') {
	    const majorVersion = lib.versionString.split('.')[0];
	    if (parseInt(majorVersion, 10) >= 11) {
	      return lib.highlight(text, {
	        language
	      }).value;
	    }
	  }
	  return lib.highlight(language, text).value;
	};
	class Syntax extends Module {
	  static register() {
	    Quill.register(CodeToken, true);
	    Quill.register(SyntaxCodeBlock, true);
	    Quill.register(SyntaxCodeBlockContainer, true);
	  }
	  constructor(quill, options) {
	    super(quill, options);
	    if (this.options.hljs == null) {
	      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
	    }
	    // @ts-expect-error Fix me later
	    this.languages = this.options.languages.reduce((memo, _ref2) => {
	      let {
	        key
	      } = _ref2;
	      memo[key] = true;
	      return memo;
	    }, {});
	    this.highlightBlot = this.highlightBlot.bind(this);
	    this.initListener();
	    this.initTimer();
	  }
	  initListener() {
	    this.quill.on(Quill.events.SCROLL_BLOT_MOUNT, blot => {
	      if (!(blot instanceof SyntaxCodeBlockContainer)) return;
	      const select = this.quill.root.ownerDocument.createElement('select');
	      // @ts-expect-error Fix me later
	      this.options.languages.forEach(_ref3 => {
	        let {
	          key,
	          label
	        } = _ref3;
	        const option = select.ownerDocument.createElement('option');
	        option.textContent = label;
	        option.setAttribute('value', key);
	        select.appendChild(option);
	      });
	      select.addEventListener('change', () => {
	        blot.format(SyntaxCodeBlock.blotName, select.value);
	        this.quill.root.focus(); // Prevent scrolling
	        this.highlight(blot, true);
	      });
	      if (blot.uiNode == null) {
	        blot.attachUI(select);
	        if (blot.children.head) {
	          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
	        }
	      }
	    });
	  }
	  initTimer() {
	    let timer = null;
	    this.quill.on(Quill.events.SCROLL_OPTIMIZE, () => {
	      if (timer) {
	        clearTimeout(timer);
	      }
	      timer = setTimeout(() => {
	        this.highlight();
	        timer = null;
	      }, this.options.interval);
	    });
	  }
	  highlight() {
	    let blot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    if (this.quill.selection.composing) return;
	    this.quill.update(Quill.sources.USER);
	    const range = this.quill.getSelection();
	    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];
	    blots.forEach(container => {
	      container.highlight(this.highlightBlot, force);
	    });
	    this.quill.update(Quill.sources.SILENT);
	    if (range != null) {
	      this.quill.setSelection(range, Quill.sources.SILENT);
	    }
	  }
	  highlightBlot(text) {
	    let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'plain';
	    language = this.languages[language] ? language : 'plain';
	    if (language === 'plain') {
	      return escapeText(text).split('\n').reduce((delta, line, i) => {
	        if (i !== 0) {
	          delta.insert('\n', {
	            [CodeBlock.blotName]: language
	          });
	        }
	        return delta.insert(line);
	      }, new Delta());
	    }
	    const container = this.quill.root.ownerDocument.createElement('div');
	    container.classList.add(CodeBlock.className);
	    container.innerHTML = highlight(this.options.hljs, language, text);
	    return traverse(this.quill.scroll, container, [(node, delta) => {
	      // @ts-expect-error
	      const value = TokenAttributor.value(node);
	      if (value) {
	        return delta.compose(new Delta().retain(delta.length(), {
	          [CodeToken.blotName]: value
	        }));
	      }
	      return delta;
	    }], [(node, delta) => {
	      // @ts-expect-error
	      return node.data.split('\n').reduce((memo, nodeText, i) => {
	        if (i !== 0) memo.insert('\n', {
	          [CodeBlock.blotName]: language
	        });
	        return memo.insert(nodeText);
	      }, delta);
	    }], new WeakMap());
	  }
	}
	Syntax.DEFAULTS = {
	  hljs: (() => {
	    return window.hljs;
	  })(),
	  interval: 1000,
	  languages: [{
	    key: 'plain',
	    label: 'Plain'
	  }, {
	    key: 'bash',
	    label: 'Bash'
	  }, {
	    key: 'cpp',
	    label: 'C++'
	  }, {
	    key: 'cs',
	    label: 'C#'
	  }, {
	    key: 'css',
	    label: 'CSS'
	  }, {
	    key: 'diff',
	    label: 'Diff'
	  }, {
	    key: 'xml',
	    label: 'HTML/XML'
	  }, {
	    key: 'java',
	    label: 'Java'
	  }, {
	    key: 'javascript',
	    label: 'JavaScript'
	  }, {
	    key: 'markdown',
	    label: 'Markdown'
	  }, {
	    key: 'php',
	    label: 'PHP'
	  }, {
	    key: 'python',
	    label: 'Python'
	  }, {
	    key: 'ruby',
	    label: 'Ruby'
	  }, {
	    key: 'sql',
	    label: 'SQL'
	  }]
	};

	class TableCell extends Block {
	  static blotName = 'table';
	  static tagName = 'TD';
	  static create(value) {
	    const node = super.create();
	    if (value) {
	      node.setAttribute('data-row', value);
	    } else {
	      node.setAttribute('data-row', tableId());
	    }
	    return node;
	  }
	  static formats(domNode) {
	    if (domNode.hasAttribute('data-row')) {
	      return domNode.getAttribute('data-row');
	    }
	    return undefined;
	  }
	  cellOffset() {
	    if (this.parent) {
	      return this.parent.children.indexOf(this);
	    }
	    return -1;
	  }
	  format(name, value) {
	    if (name === TableCell.blotName && value) {
	      this.domNode.setAttribute('data-row', value);
	    } else {
	      super.format(name, value);
	    }
	  }
	  row() {
	    return this.parent;
	  }
	  rowOffset() {
	    if (this.row()) {
	      return this.row().rowOffset();
	    }
	    return -1;
	  }
	  table() {
	    return this.row() && this.row().table();
	  }
	}
	class TableRow extends Container {
	  static blotName = 'table-row';
	  static tagName = 'TR';
	  checkMerge() {
	    // @ts-expect-error
	    if (super.checkMerge() && this.next.children.head != null) {
	      // @ts-expect-error
	      const thisHead = this.children.head.formats();
	      // @ts-expect-error
	      const thisTail = this.children.tail.formats();
	      // @ts-expect-error
	      const nextHead = this.next.children.head.formats();
	      // @ts-expect-error
	      const nextTail = this.next.children.tail.formats();
	      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;
	    }
	    return false;
	  }
	  optimize(context) {
	    super.optimize(context);
	    this.children.forEach(child => {
	      if (child.next == null) return;
	      const childFormats = child.formats();
	      const nextFormats = child.next.formats();
	      if (childFormats.table !== nextFormats.table) {
	        const next = this.splitAfter(child);
	        if (next) {
	          // @ts-expect-error TODO: parameters of optimize() should be a optional
	          next.optimize();
	        }
	        // We might be able to merge with prev now
	        if (this.prev) {
	          // @ts-expect-error TODO: parameters of optimize() should be a optional
	          this.prev.optimize();
	        }
	      }
	    });
	  }
	  rowOffset() {
	    if (this.parent) {
	      return this.parent.children.indexOf(this);
	    }
	    return -1;
	  }
	  table() {
	    return this.parent && this.parent.parent;
	  }
	}
	class TableBody extends Container {
	  static blotName = 'table-body';
	  static tagName = 'TBODY';
	}
	class TableContainer extends Container {
	  static blotName = 'table-container';
	  static tagName = 'TABLE';
	  balanceCells() {
	    const rows = this.descendants(TableRow);
	    const maxColumns = rows.reduce((max, row) => {
	      return Math.max(row.children.length, max);
	    }, 0);
	    rows.forEach(row => {
	      new Array(maxColumns - row.children.length).fill(0).forEach(() => {
	        let value;
	        if (row.children.head != null) {
	          value = TableCell.formats(row.children.head.domNode);
	        }
	        const blot = this.scroll.create(TableCell.blotName, value);
	        row.appendChild(blot);
	        // @ts-expect-error TODO: parameters of optimize() should be a optional
	        blot.optimize(); // Add break blot
	      });
	    });
	  }
	  cells(column) {
	    return this.rows().map(row => row.children.at(column));
	  }
	  deleteColumn(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    body.children.forEach(row => {
	      const cell = row.children.at(index);
	      if (cell != null) {
	        cell.remove();
	      }
	    });
	  }
	  insertColumn(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    body.children.forEach(row => {
	      const ref = row.children.at(index);
	      // @ts-expect-error
	      const value = TableCell.formats(row.children.head.domNode);
	      const cell = this.scroll.create(TableCell.blotName, value);
	      row.insertBefore(cell, ref);
	    });
	  }
	  insertRow(index) {
	    // @ts-expect-error
	    const [body] = this.descendant(TableBody);
	    if (body == null || body.children.head == null) return;
	    const id = tableId();
	    const row = this.scroll.create(TableRow.blotName);
	    body.children.head.children.forEach(() => {
	      const cell = this.scroll.create(TableCell.blotName, id);
	      row.appendChild(cell);
	    });
	    const ref = body.children.at(index);
	    body.insertBefore(row, ref);
	  }
	  rows() {
	    const body = this.children.head;
	    if (body == null) return [];
	    return body.children.map(row => row);
	  }
	}
	TableContainer.allowedChildren = [TableBody];
	TableBody.requiredContainer = TableContainer;
	TableBody.allowedChildren = [TableRow];
	TableRow.requiredContainer = TableBody;
	TableRow.allowedChildren = [TableCell];
	TableCell.requiredContainer = TableRow;
	function tableId() {
	  const id = Math.random().toString(36).slice(2, 6);
	  return `row-${id}`;
	}

	class Table extends Module {
	  static register() {
	    Quill.register(TableCell);
	    Quill.register(TableRow);
	    Quill.register(TableBody);
	    Quill.register(TableContainer);
	  }
	  constructor() {
	    super(...arguments);
	    this.listenBalanceCells();
	  }
	  balanceTables() {
	    this.quill.scroll.descendants(TableContainer).forEach(table => {
	      table.balanceCells();
	    });
	  }
	  deleteColumn() {
	    const [table,, cell] = this.getTable();
	    if (cell == null) return;
	    // @ts-expect-error
	    table.deleteColumn(cell.cellOffset());
	    this.quill.update(Quill.sources.USER);
	  }
	  deleteRow() {
	    const [, row] = this.getTable();
	    if (row == null) return;
	    row.remove();
	    this.quill.update(Quill.sources.USER);
	  }
	  deleteTable() {
	    const [table] = this.getTable();
	    if (table == null) return;
	    // @ts-expect-error
	    const offset = table.offset();
	    // @ts-expect-error
	    table.remove();
	    this.quill.update(Quill.sources.USER);
	    this.quill.setSelection(offset, Quill.sources.SILENT);
	  }
	  getTable() {
	    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();
	    if (range == null) return [null, null, null, -1];
	    const [cell, offset] = this.quill.getLine(range.index);
	    if (cell == null || cell.statics.blotName !== TableCell.blotName) {
	      return [null, null, null, -1];
	    }
	    const row = cell.parent;
	    const table = row.parent.parent;
	    // @ts-expect-error
	    return [table, row, cell, offset];
	  }
	  insertColumn(offset) {
	    const range = this.quill.getSelection();
	    if (!range) return;
	    const [table, row, cell] = this.getTable(range);
	    if (cell == null) return;
	    const column = cell.cellOffset();
	    table.insertColumn(column + offset);
	    this.quill.update(Quill.sources.USER);
	    let shift = row.rowOffset();
	    if (offset === 0) {
	      shift += 1;
	    }
	    this.quill.setSelection(range.index + shift, range.length, Quill.sources.SILENT);
	  }
	  insertColumnLeft() {
	    this.insertColumn(0);
	  }
	  insertColumnRight() {
	    this.insertColumn(1);
	  }
	  insertRow(offset) {
	    const range = this.quill.getSelection();
	    if (!range) return;
	    const [table, row, cell] = this.getTable(range);
	    if (cell == null) return;
	    const index = row.rowOffset();
	    table.insertRow(index + offset);
	    this.quill.update(Quill.sources.USER);
	    if (offset > 0) {
	      this.quill.setSelection(range, Quill.sources.SILENT);
	    } else {
	      this.quill.setSelection(range.index + row.children.length, range.length, Quill.sources.SILENT);
	    }
	  }
	  insertRowAbove() {
	    this.insertRow(0);
	  }
	  insertRowBelow() {
	    this.insertRow(1);
	  }
	  insertTable(rows, columns) {
	    const range = this.quill.getSelection();
	    if (range == null) return;
	    const delta = new Array(rows).fill(0).reduce(memo => {
	      const text = new Array(columns).fill('\n').join('');
	      return memo.insert(text, {
	        table: tableId()
	      });
	    }, new Delta().retain(range.index));
	    this.quill.updateContents(delta, Quill.sources.USER);
	    this.quill.setSelection(range.index, Quill.sources.SILENT);
	    this.balanceTables();
	  }
	  listenBalanceCells() {
	    this.quill.on(Quill.events.SCROLL_OPTIMIZE, mutations => {
	      mutations.some(mutation => {
	        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {
	          this.quill.once(Quill.events.TEXT_CHANGE, (delta, old, source) => {
	            if (source !== Quill.sources.USER) return;
	            this.balanceTables();
	          });
	          return true;
	        }
	        return false;
	      });
	    });
	  }
	}

	const debug = namespace('quill:toolbar');
	class Toolbar extends Module {
	  constructor(quill, options) {
	    super(quill, options);
	    if (Array.isArray(this.options.container)) {
	      const container = document.createElement('div');
	      container.setAttribute('role', 'toolbar');
	      addControls(container, this.options.container);
	      quill.container?.parentNode?.insertBefore(container, quill.container);
	      this.container = container;
	    } else if (typeof this.options.container === 'string') {
	      this.container = document.querySelector(this.options.container);
	    } else {
	      this.container = this.options.container;
	    }
	    if (!(this.container instanceof HTMLElement)) {
	      debug.error('Container required for toolbar', this.options);
	      return;
	    }
	    this.container.classList.add('ql-toolbar');
	    this.controls = [];
	    this.handlers = {};
	    if (this.options.handlers) {
	      Object.keys(this.options.handlers).forEach(format => {
	        const handler = this.options.handlers?.[format];
	        if (handler) {
	          this.addHandler(format, handler);
	        }
	      });
	    }
	    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {
	      // @ts-expect-error
	      this.attach(input);
	    });
	    this.quill.on(Quill.events.EDITOR_CHANGE, () => {
	      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update
	      this.update(range);
	    });
	  }
	  addHandler(format, handler) {
	    this.handlers[format] = handler;
	  }
	  attach(input) {
	    let format = Array.from(input.classList).find(className => {
	      return className.indexOf('ql-') === 0;
	    });
	    if (!format) return;
	    format = format.slice('ql-'.length);
	    if (input.tagName === 'BUTTON') {
	      input.setAttribute('type', 'button');
	    }
	    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
	      debug.warn('ignoring attaching to nonexistent format', format, input);
	      return;
	    }
	    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
	    input.addEventListener(eventName, e => {
	      let value;
	      if (input.tagName === 'SELECT') {
	        // @ts-expect-error
	        if (input.selectedIndex < 0) return;
	        // @ts-expect-error
	        const selected = input.options[input.selectedIndex];
	        if (selected.hasAttribute('selected')) {
	          value = false;
	        } else {
	          value = selected.value || false;
	        }
	      } else {
	        if (input.classList.contains('ql-active')) {
	          value = false;
	        } else {
	          // @ts-expect-error
	          value = input.value || !input.hasAttribute('value');
	        }
	        e.preventDefault();
	      }
	      this.quill.focus();
	      const [range] = this.quill.selection.getRange();
	      if (this.handlers[format] != null) {
	        this.handlers[format].call(this, value);
	      } else if (
	      // @ts-expect-error
	      this.quill.scroll.query(format).prototype instanceof EmbedBlot$1) {
	        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert
	        if (!value) return;
	        this.quill.updateContents(new Delta()
	        // @ts-expect-error Fix me later
	        .retain(range.index)
	        // @ts-expect-error Fix me later
	        .delete(range.length).insert({
	          [format]: value
	        }), Quill.sources.USER);
	      } else {
	        this.quill.format(format, value, Quill.sources.USER);
	      }
	      this.update(range);
	    });
	    this.controls.push([format, input]);
	  }
	  update(range) {
	    const formats = range == null ? {} : this.quill.getFormat(range);
	    this.controls.forEach(pair => {
	      const [format, input] = pair;
	      if (input.tagName === 'SELECT') {
	        let option = null;
	        if (range == null) {
	          option = null;
	        } else if (formats[format] == null) {
	          option = input.querySelector('option[selected]');
	        } else if (!Array.isArray(formats[format])) {
	          let value = formats[format];
	          if (typeof value === 'string') {
	            value = value.replace(/"/g, '\\"');
	          }
	          option = input.querySelector(`option[value="${value}"]`);
	        }
	        if (option == null) {
	          // @ts-expect-error TODO fix me later
	          input.value = ''; // TODO make configurable?
	          // @ts-expect-error TODO fix me later
	          input.selectedIndex = -1;
	        } else {
	          option.selected = true;
	        }
	      } else if (range == null) {
	        input.classList.remove('ql-active');
	        input.setAttribute('aria-pressed', 'false');
	      } else if (input.hasAttribute('value')) {
	        // both being null should match (default values)
	        // '1' should match with 1 (headers)
	        const value = formats[format];
	        const isActive = value === input.getAttribute('value') || value != null && value.toString() === input.getAttribute('value') || value == null && !input.getAttribute('value');
	        input.classList.toggle('ql-active', isActive);
	        input.setAttribute('aria-pressed', isActive.toString());
	      } else {
	        const isActive = formats[format] != null;
	        input.classList.toggle('ql-active', isActive);
	        input.setAttribute('aria-pressed', isActive.toString());
	      }
	    });
	  }
	}
	Toolbar.DEFAULTS = {};
	function addButton(container, format, value) {
	  const input = document.createElement('button');
	  input.setAttribute('type', 'button');
	  input.classList.add(`ql-${format}`);
	  input.setAttribute('aria-pressed', 'false');
	  if (value != null) {
	    input.value = value;
	    input.setAttribute('aria-label', `${format}: ${value}`);
	  } else {
	    input.setAttribute('aria-label', format);
	  }
	  container.appendChild(input);
	}
	function addControls(container, groups) {
	  if (!Array.isArray(groups[0])) {
	    // @ts-expect-error
	    groups = [groups];
	  }
	  groups.forEach(controls => {
	    const group = document.createElement('span');
	    group.classList.add('ql-formats');
	    controls.forEach(control => {
	      if (typeof control === 'string') {
	        addButton(group, control);
	      } else {
	        const format = Object.keys(control)[0];
	        const value = control[format];
	        if (Array.isArray(value)) {
	          addSelect(group, format, value);
	        } else {
	          addButton(group, format, value);
	        }
	      }
	    });
	    container.appendChild(group);
	  });
	}
	function addSelect(container, format, values) {
	  const input = document.createElement('select');
	  input.classList.add(`ql-${format}`);
	  values.forEach(value => {
	    const option = document.createElement('option');
	    if (value !== false) {
	      option.setAttribute('value', String(value));
	    } else {
	      option.setAttribute('selected', 'selected');
	    }
	    input.appendChild(option);
	  });
	  container.appendChild(input);
	}
	Toolbar.DEFAULTS = {
	  container: null,
	  handlers: {
	    clean() {
	      const range = this.quill.getSelection();
	      if (range == null) return;
	      if (range.length === 0) {
	        const formats = this.quill.getFormat();
	        Object.keys(formats).forEach(name => {
	          // Clean functionality in existing apps only clean inline formats
	          if (this.quill.scroll.query(name, Scope.INLINE) != null) {
	            this.quill.format(name, false, Quill.sources.USER);
	          }
	        });
	      } else {
	        this.quill.removeFormat(range.index, range.length, Quill.sources.USER);
	      }
	    },
	    direction(value) {
	      const {
	        align
	      } = this.quill.getFormat();
	      if (value === 'rtl' && align == null) {
	        this.quill.format('align', 'right', Quill.sources.USER);
	      } else if (!value && align === 'right') {
	        this.quill.format('align', false, Quill.sources.USER);
	      }
	      this.quill.format('direction', value, Quill.sources.USER);
	    },
	    indent(value) {
	      const range = this.quill.getSelection();
	      // @ts-expect-error
	      const formats = this.quill.getFormat(range);
	      // @ts-expect-error
	      const indent = parseInt(formats.indent || 0, 10);
	      if (value === '+1' || value === '-1') {
	        let modifier = value === '+1' ? 1 : -1;
	        if (formats.direction === 'rtl') modifier *= -1;
	        this.quill.format('indent', indent + modifier, Quill.sources.USER);
	      }
	    },
	    link(value) {
	      if (value === true) {
	        value = prompt('Enter link URL:'); // eslint-disable-line no-alert
	      }
	      this.quill.format('link', value, Quill.sources.USER);
	    },
	    list(value) {
	      const range = this.quill.getSelection();
	      // @ts-expect-error
	      const formats = this.quill.getFormat(range);
	      if (value === 'check') {
	        if (formats.list === 'checked' || formats.list === 'unchecked') {
	          this.quill.format('list', false, Quill.sources.USER);
	        } else {
	          this.quill.format('list', 'unchecked', Quill.sources.USER);
	        }
	      } else {
	        this.quill.format('list', value, Quill.sources.USER);
	      }
	    }
	  }
	};

	const alignLeftIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"13\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
	const alignCenterIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"14\" x2=\"4\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"12\" x2=\"6\" y1=\"4\" y2=\"4\"/></svg>";
	const alignRightIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"5\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"9\" y1=\"4\" y2=\"4\"/></svg>";
	const alignJustifyIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"3\" y1=\"4\" y2=\"4\"/></svg>";
	const backgroundIcon = "<svg viewbox=\"0 0 18 18\"><g class=\"ql-fill ql-color-label\"><polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"4\"/><polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"4\" y=\"7\"/><polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"12\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"9\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"15\"/><polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"8\"/><path d=\"M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z\"/><path d=\"M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z\"/><path d=\"M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"3\"/><path d=\"M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z\"/><rect height=\"1\" width=\"1\" x=\"2\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"6\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"3\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"3\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"14\"/><polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"7\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"6\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"8\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"9\"/><path d=\"M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"3\"/><polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"2\"/><rect height=\"1\" width=\"1\" x=\"12\" y=\"5\"/><rect height=\"1\" width=\"1\" x=\"13\" y=\"4\"/><polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"/><rect height=\"1\" width=\"1\" x=\"9\" y=\"14\"/><rect height=\"1\" width=\"1\" x=\"8\" y=\"15\"/><path d=\"M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z\"/><rect height=\"1\" width=\"1\" x=\"5\" y=\"15\"/><path d=\"M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z\"/><rect height=\"1\" width=\"1\" x=\"11\" y=\"15\"/><path d=\"M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z\"/><rect height=\"1\" width=\"1\" x=\"14\" y=\"15\"/><rect height=\"1\" width=\"1\" x=\"15\" y=\"11\"/></g><polyline class=\"ql-stroke\" points=\"5.5 13 9 5 12.5 13\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"11\" y2=\"11\"/></svg>";
	const blockquoteIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"4\" y=\"5\"/><rect class=\"ql-fill ql-stroke\" height=\"3\" width=\"3\" x=\"11\" y=\"5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M7,8c0,4.031-3,5-3,5\"/><path class=\"ql-even ql-fill ql-stroke\" d=\"M14,8c0,4.031-3,5-3,5\"/></svg>";
	const boldIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z\"/><path class=\"ql-stroke\" d=\"M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z\"/></svg>";
	const cleanIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"5\" x2=\"13\" y1=\"3\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"9.35\" y1=\"12\" y2=\"3\"/><line class=\"ql-stroke\" x1=\"11\" x2=\"15\" y1=\"11\" y2=\"15\"/><line class=\"ql-stroke\" x1=\"15\" x2=\"11\" y1=\"11\" y2=\"15\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"7\" x=\"2\" y=\"14\"/></svg>";
	const codeIcon = "<svg viewbox=\"0 0 18 18\"><polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"/><polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"/><line class=\"ql-stroke\" x1=\"10\" x2=\"8\" y1=\"5\" y2=\"13\"/></svg>";
	const colorIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-color-label ql-stroke ql-transparent\" x1=\"3\" x2=\"15\" y1=\"15\" y2=\"15\"/><polyline class=\"ql-stroke\" points=\"5.5 11 9 3 12.5 11\"/><line class=\"ql-stroke\" x1=\"11.63\" x2=\"6.38\" y1=\"9\" y2=\"9\"/></svg>";
	const directionLeftToRightIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"/><line class=\"ql-stroke ql-fill\" x1=\"15\" x2=\"11\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M11,3a3,3,0,0,0,0,6h1V3H11Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"11\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"13\" y=\"4\"/></svg>";
	const directionRightToLeftIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"/><line class=\"ql-stroke ql-fill\" x1=\"9\" x2=\"5\" y1=\"4\" y2=\"4\"/><path class=\"ql-fill\" d=\"M5,3A3,3,0,0,0,5,9H6V3H5Z\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"5\" y=\"4\"/><rect class=\"ql-fill\" height=\"11\" width=\"1\" x=\"7\" y=\"4\"/></svg>";
	const formulaIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z\"/><rect class=\"ql-fill\" height=\"1.6\" rx=\"0.8\" ry=\"0.8\" width=\"5\" x=\"5.15\" y=\"6.2\"/><path class=\"ql-fill\" d=\"M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z\"/></svg>";
	const headerIcon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z\"/></svg>";
	const header2Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header3Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header4Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z\"/></svg>";
	const header5Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z\"/></svg>";
	const header6Icon = "<svg viewBox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z\"/></svg>";
	const italicIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"13\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"5\" x2=\"11\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"8\" x2=\"10\" y1=\"14\" y2=\"4\"/></svg>";
	const imageIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"10\" width=\"12\" x=\"3\" y=\"4\"/><circle class=\"ql-fill\" cx=\"6\" cy=\"7\" r=\"1\"/><polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"/></svg>";
	const indentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"/></svg>";
	const outdentIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"5 7 5 11 3 9 5 7\"/></svg>";
	const linkIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"11\" y1=\"7\" y2=\"11\"/><path class=\"ql-even ql-stroke\" d=\"M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z\"/><path class=\"ql-even ql-stroke\" d=\"M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z\"/></svg>";
	const listBulletIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"6\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"3\" x2=\"3\" y1=\"14\" y2=\"14\"/></svg>";
	const listCheckIcon = "<svg class=\"\" viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"4\" y2=\"4\"/><polyline class=\"ql-stroke\" points=\"3 4 4 5 6 3\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"14\" y2=\"14\"/><polyline class=\"ql-stroke\" points=\"3 14 4 15 6 13\"/><line class=\"ql-stroke\" x1=\"9\" x2=\"15\" y1=\"9\" y2=\"9\"/><polyline class=\"ql-stroke\" points=\"3 9 4 10 6 8\"/></svg>";
	const listOrderedIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"4\" y2=\"4\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"9\" y2=\"9\"/><line class=\"ql-stroke\" x1=\"7\" x2=\"15\" y1=\"14\" y2=\"14\"/><line class=\"ql-stroke ql-thin\" x1=\"2.5\" x2=\"4.5\" y1=\"5.5\" y2=\"5.5\"/><path class=\"ql-fill\" d=\"M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z\"/><path class=\"ql-stroke ql-thin\" d=\"M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156\"/><path class=\"ql-stroke ql-thin\" d=\"M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109\"/></svg>";
	const subscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z\"/><path class=\"ql-fill\" d=\"M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z\"/></svg>";
	const superscriptIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-fill\" d=\"M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z\"/><path class=\"ql-fill\" d=\"M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z\"/></svg>";
	const strikeIcon = "<svg viewbox=\"0 0 18 18\"><line class=\"ql-stroke ql-thin\" x1=\"15.5\" x2=\"2.5\" y1=\"8.5\" y2=\"9.5\"/><path class=\"ql-fill\" d=\"M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z\"/><path class=\"ql-fill\" d=\"M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z\"/></svg>";
	const tableIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"3\" x=\"5\" y=\"5\"/><rect class=\"ql-fill\" height=\"2\" width=\"4\" x=\"9\" y=\"5\"/><g class=\"ql-fill ql-transparent\"><rect height=\"2\" width=\"3\" x=\"5\" y=\"8\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"8\"/><rect height=\"2\" width=\"3\" x=\"5\" y=\"11\"/><rect height=\"2\" width=\"4\" x=\"9\" y=\"11\"/></g></svg>";
	const underlineIcon = "<svg viewbox=\"0 0 18 18\"><path class=\"ql-stroke\" d=\"M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3\"/><rect class=\"ql-fill\" height=\"1\" rx=\"0.5\" ry=\"0.5\" width=\"12\" x=\"3\" y=\"15\"/></svg>";
	const videoIcon = "<svg viewbox=\"0 0 18 18\"><rect class=\"ql-stroke\" height=\"12\" width=\"12\" x=\"3\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"5\" y=\"3\"/><rect class=\"ql-fill\" height=\"12\" width=\"1\" x=\"12\" y=\"3\"/><rect class=\"ql-fill\" height=\"2\" width=\"8\" x=\"5\" y=\"8\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"3\" y=\"12\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"5\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"7\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"10\"/><rect class=\"ql-fill\" height=\"1\" width=\"3\" x=\"12\" y=\"12\"/></svg>";
	var Icons = {
	  align: {
	    '': alignLeftIcon,
	    center: alignCenterIcon,
	    right: alignRightIcon,
	    justify: alignJustifyIcon
	  },
	  background: backgroundIcon,
	  blockquote: blockquoteIcon,
	  bold: boldIcon,
	  clean: cleanIcon,
	  code: codeIcon,
	  'code-block': codeIcon,
	  color: colorIcon,
	  direction: {
	    '': directionLeftToRightIcon,
	    rtl: directionRightToLeftIcon
	  },
	  formula: formulaIcon,
	  header: {
	    '1': headerIcon,
	    '2': header2Icon,
	    '3': header3Icon,
	    '4': header4Icon,
	    '5': header5Icon,
	    '6': header6Icon
	  },
	  italic: italicIcon,
	  image: imageIcon,
	  indent: {
	    '+1': indentIcon,
	    '-1': outdentIcon
	  },
	  link: linkIcon,
	  list: {
	    bullet: listBulletIcon,
	    check: listCheckIcon,
	    ordered: listOrderedIcon
	  },
	  script: {
	    sub: subscriptIcon,
	    super: superscriptIcon
	  },
	  strike: strikeIcon,
	  table: tableIcon,
	  underline: underlineIcon,
	  video: videoIcon
	};

	const DropdownIcon = "<svg viewbox=\"0 0 18 18\"><polygon class=\"ql-stroke\" points=\"7 11 9 13 11 11 7 11\"/><polygon class=\"ql-stroke\" points=\"7 7 9 5 11 7 7 7\"/></svg>";
	let optionsCounter = 0;
	function toggleAriaAttribute(element, attribute) {
	  element.setAttribute(attribute, `${!(element.getAttribute(attribute) === 'true')}`);
	}
	class Picker {
	  constructor(select) {
	    this.select = select;
	    this.container = document.createElement('span');
	    this.buildPicker();
	    this.select.style.display = 'none';
	    // @ts-expect-error Fix me later
	    this.select.parentNode.insertBefore(this.container, this.select);
	    this.label.addEventListener('mousedown', () => {
	      this.togglePicker();
	    });
	    this.label.addEventListener('keydown', event => {
	      switch (event.key) {
	        case 'Enter':
	          this.togglePicker();
	          break;
	        case 'Escape':
	          this.escape();
	          event.preventDefault();
	          break;
	      }
	    });
	    this.select.addEventListener('change', this.update.bind(this));
	  }
	  togglePicker() {
	    this.container.classList.toggle('ql-expanded');
	    // Toggle aria-expanded and aria-hidden to make the picker accessible
	    toggleAriaAttribute(this.label, 'aria-expanded');
	    // @ts-expect-error
	    toggleAriaAttribute(this.options, 'aria-hidden');
	  }
	  buildItem(option) {
	    const item = document.createElement('span');
	    // @ts-expect-error
	    item.tabIndex = '0';
	    item.setAttribute('role', 'button');
	    item.classList.add('ql-picker-item');
	    const value = option.getAttribute('value');
	    if (value) {
	      item.setAttribute('data-value', value);
	    }
	    if (option.textContent) {
	      item.setAttribute('data-label', option.textContent);
	    }
	    item.addEventListener('click', () => {
	      this.selectItem(item, true);
	    });
	    item.addEventListener('keydown', event => {
	      switch (event.key) {
	        case 'Enter':
	          this.selectItem(item, true);
	          event.preventDefault();
	          break;
	        case 'Escape':
	          this.escape();
	          event.preventDefault();
	          break;
	      }
	    });
	    return item;
	  }
	  buildLabel() {
	    const label = document.createElement('span');
	    label.classList.add('ql-picker-label');
	    label.innerHTML = DropdownIcon;
	    // @ts-expect-error
	    label.tabIndex = '0';
	    label.setAttribute('role', 'button');
	    label.setAttribute('aria-expanded', 'false');
	    this.container.appendChild(label);
	    return label;
	  }
	  buildOptions() {
	    const options = document.createElement('span');
	    options.classList.add('ql-picker-options');

	    // Don't want screen readers to read this until options are visible
	    options.setAttribute('aria-hidden', 'true');
	    // @ts-expect-error
	    options.tabIndex = '-1';

	    // Need a unique id for aria-controls
	    options.id = `ql-picker-options-${optionsCounter}`;
	    optionsCounter += 1;
	    this.label.setAttribute('aria-controls', options.id);

	    // @ts-expect-error
	    this.options = options;
	    Array.from(this.select.options).forEach(option => {
	      const item = this.buildItem(option);
	      options.appendChild(item);
	      if (option.selected === true) {
	        this.selectItem(item);
	      }
	    });
	    this.container.appendChild(options);
	  }
	  buildPicker() {
	    Array.from(this.select.attributes).forEach(item => {
	      this.container.setAttribute(item.name, item.value);
	    });
	    this.container.classList.add('ql-picker');
	    this.label = this.buildLabel();
	    this.buildOptions();
	  }
	  escape() {
	    // Close menu and return focus to trigger label
	    this.close();
	    // Need setTimeout for accessibility to ensure that the browser executes
	    // focus on the next process thread and after any DOM content changes
	    setTimeout(() => this.label.focus(), 1);
	  }
	  close() {
	    this.container.classList.remove('ql-expanded');
	    this.label.setAttribute('aria-expanded', 'false');
	    // @ts-expect-error
	    this.options.setAttribute('aria-hidden', 'true');
	  }
	  selectItem(item) {
	    let trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    const selected = this.container.querySelector('.ql-selected');
	    if (item === selected) return;
	    if (selected != null) {
	      selected.classList.remove('ql-selected');
	    }
	    if (item == null) return;
	    item.classList.add('ql-selected');
	    // @ts-expect-error Fix me later
	    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);
	    if (item.hasAttribute('data-value')) {
	      // @ts-expect-error Fix me later
	      this.label.setAttribute('data-value', item.getAttribute('data-value'));
	    } else {
	      this.label.removeAttribute('data-value');
	    }
	    if (item.hasAttribute('data-label')) {
	      // @ts-expect-error Fix me later
	      this.label.setAttribute('data-label', item.getAttribute('data-label'));
	    } else {
	      this.label.removeAttribute('data-label');
	    }
	    if (trigger) {
	      this.select.dispatchEvent(new Event('change'));
	      this.close();
	    }
	  }
	  update() {
	    let option;
	    if (this.select.selectedIndex > -1) {
	      const item =
	      // @ts-expect-error Fix me later
	      this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
	      option = this.select.options[this.select.selectedIndex];
	      // @ts-expect-error
	      this.selectItem(item);
	    } else {
	      this.selectItem(null);
	    }
	    const isActive = option != null && option !== this.select.querySelector('option[selected]');
	    this.label.classList.toggle('ql-active', isActive);
	  }
	}

	class ColorPicker extends Picker {
	  constructor(select, label) {
	    super(select);
	    this.label.innerHTML = label;
	    this.container.classList.add('ql-color-picker');
	    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {
	      item.classList.add('ql-primary');
	    });
	  }
	  buildItem(option) {
	    const item = super.buildItem(option);
	    item.style.backgroundColor = option.getAttribute('value') || '';
	    return item;
	  }
	  selectItem(item, trigger) {
	    super.selectItem(item, trigger);
	    const colorLabel = this.label.querySelector('.ql-color-label');
	    const value = item ? item.getAttribute('data-value') || '' : '';
	    if (colorLabel) {
	      if (colorLabel.tagName === 'line') {
	        colorLabel.style.stroke = value;
	      } else {
	        colorLabel.style.fill = value;
	      }
	    }
	  }
	}

	class IconPicker extends Picker {
	  constructor(select, icons) {
	    super(select);
	    this.container.classList.add('ql-icon-picker');
	    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {
	      item.innerHTML = icons[item.getAttribute('data-value') || ''];
	    });
	    this.defaultItem = this.container.querySelector('.ql-selected');
	    this.selectItem(this.defaultItem);
	  }
	  selectItem(target, trigger) {
	    super.selectItem(target, trigger);
	    const item = target || this.defaultItem;
	    if (item != null) {
	      if (this.label.innerHTML === item.innerHTML) return;
	      this.label.innerHTML = item.innerHTML;
	    }
	  }
	}

	const isScrollable = el => {
	  const {
	    overflowY
	  } = getComputedStyle(el, null);
	  return overflowY !== 'visible' && overflowY !== 'clip';
	};
	class Tooltip {
	  constructor(quill, boundsContainer) {
	    this.quill = quill;
	    this.boundsContainer = boundsContainer || document.body;
	    this.root = quill.addContainer('ql-tooltip');
	    // @ts-expect-error
	    this.root.innerHTML = this.constructor.TEMPLATE;
	    if (isScrollable(this.quill.root)) {
	      this.quill.root.addEventListener('scroll', () => {
	        this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
	      });
	    }
	    this.hide();
	  }
	  hide() {
	    this.root.classList.add('ql-hidden');
	  }
	  position(reference) {
	    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
	    // root.scrollTop should be 0 if scrollContainer !== root
	    const top = reference.bottom + this.quill.root.scrollTop;
	    this.root.style.left = `${left}px`;
	    this.root.style.top = `${top}px`;
	    this.root.classList.remove('ql-flip');
	    const containerBounds = this.boundsContainer.getBoundingClientRect();
	    const rootBounds = this.root.getBoundingClientRect();
	    let shift = 0;
	    if (rootBounds.right > containerBounds.right) {
	      shift = containerBounds.right - rootBounds.right;
	      this.root.style.left = `${left + shift}px`;
	    }
	    if (rootBounds.left < containerBounds.left) {
	      shift = containerBounds.left - rootBounds.left;
	      this.root.style.left = `${left + shift}px`;
	    }
	    if (rootBounds.bottom > containerBounds.bottom) {
	      const height = rootBounds.bottom - rootBounds.top;
	      const verticalShift = reference.bottom - reference.top + height;
	      this.root.style.top = `${top - verticalShift}px`;
	      this.root.classList.add('ql-flip');
	    }
	    return shift;
	  }
	  show() {
	    this.root.classList.remove('ql-editing');
	    this.root.classList.remove('ql-hidden');
	  }
	}

	const ALIGNS = [false, 'center', 'right', 'justify'];
	const COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];
	const FONTS = [false, 'serif', 'monospace'];
	const HEADERS = ['1', '2', '3', false];
	const SIZES = ['small', false, 'large', 'huge'];
	class BaseTheme extends Theme {
	  constructor(quill, options) {
	    super(quill, options);
	    const listener = e => {
	      if (!document.body.contains(quill.root)) {
	        document.body.removeEventListener('click', listener);
	        return;
	      }
	      if (this.tooltip != null &&
	      // @ts-expect-error
	      !this.tooltip.root.contains(e.target) &&
	      // @ts-expect-error
	      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {
	        this.tooltip.hide();
	      }
	      if (this.pickers != null) {
	        this.pickers.forEach(picker => {
	          // @ts-expect-error
	          if (!picker.container.contains(e.target)) {
	            picker.close();
	          }
	        });
	      }
	    };
	    quill.emitter.listenDOM('click', document.body, listener);
	  }
	  addModule(name) {
	    const module = super.addModule(name);
	    if (name === 'toolbar') {
	      // @ts-expect-error
	      this.extendToolbar(module);
	    }
	    return module;
	  }
	  buildButtons(buttons, icons) {
	    Array.from(buttons).forEach(button => {
	      const className = button.getAttribute('class') || '';
	      className.split(/\s+/).forEach(name => {
	        if (!name.startsWith('ql-')) return;
	        name = name.slice('ql-'.length);
	        if (icons[name] == null) return;
	        if (name === 'direction') {
	          // @ts-expect-error
	          button.innerHTML = icons[name][''] + icons[name].rtl;
	        } else if (typeof icons[name] === 'string') {
	          // @ts-expect-error
	          button.innerHTML = icons[name];
	        } else {
	          // @ts-expect-error
	          const value = button.value || '';
	          // @ts-expect-error
	          if (value != null && icons[name][value]) {
	            // @ts-expect-error
	            button.innerHTML = icons[name][value];
	          }
	        }
	      });
	    });
	  }
	  buildPickers(selects, icons) {
	    this.pickers = Array.from(selects).map(select => {
	      if (select.classList.contains('ql-align')) {
	        if (select.querySelector('option') == null) {
	          fillSelect(select, ALIGNS);
	        }
	        if (typeof icons.align === 'object') {
	          return new IconPicker(select, icons.align);
	        }
	      }
	      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
	        const format = select.classList.contains('ql-background') ? 'background' : 'color';
	        if (select.querySelector('option') == null) {
	          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
	        }
	        return new ColorPicker(select, icons[format]);
	      }
	      if (select.querySelector('option') == null) {
	        if (select.classList.contains('ql-font')) {
	          fillSelect(select, FONTS);
	        } else if (select.classList.contains('ql-header')) {
	          fillSelect(select, HEADERS);
	        } else if (select.classList.contains('ql-size')) {
	          fillSelect(select, SIZES);
	        }
	      }
	      return new Picker(select);
	    });
	    const update = () => {
	      this.pickers.forEach(picker => {
	        picker.update();
	      });
	    };
	    this.quill.on(Emitter.events.EDITOR_CHANGE, update);
	  }
	}
	BaseTheme.DEFAULTS = merge({}, Theme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        formula() {
	          this.quill.theme.tooltip.edit('formula');
	        },
	        image() {
	          let fileInput = this.container.querySelector('input.ql-image[type=file]');
	          if (fileInput == null) {
	            fileInput = document.createElement('input');
	            fileInput.setAttribute('type', 'file');
	            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));
	            fileInput.classList.add('ql-image');
	            fileInput.addEventListener('change', () => {
	              const range = this.quill.getSelection(true);
	              this.quill.uploader.upload(range, fileInput.files);
	              fileInput.value = '';
	            });
	            this.container.appendChild(fileInput);
	          }
	          fileInput.click();
	        },
	        video() {
	          this.quill.theme.tooltip.edit('video');
	        }
	      }
	    }
	  }
	});
	class BaseTooltip extends Tooltip {
	  constructor(quill, boundsContainer) {
	    super(quill, boundsContainer);
	    this.textbox = this.root.querySelector('input[type="text"]');
	    this.listen();
	  }
	  listen() {
	    // @ts-expect-error Fix me later
	    this.textbox.addEventListener('keydown', event => {
	      if (event.key === 'Enter') {
	        this.save();
	        event.preventDefault();
	      } else if (event.key === 'Escape') {
	        this.cancel();
	        event.preventDefault();
	      }
	    });
	  }
	  cancel() {
	    this.hide();
	    this.restoreFocus();
	  }
	  edit() {
	    let mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
	    let preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    this.root.classList.remove('ql-hidden');
	    this.root.classList.add('ql-editing');
	    if (this.textbox == null) return;
	    if (preview != null) {
	      this.textbox.value = preview;
	    } else if (mode !== this.root.getAttribute('data-mode')) {
	      this.textbox.value = '';
	    }
	    const bounds = this.quill.getBounds(this.quill.selection.savedRange);
	    if (bounds != null) {
	      this.position(bounds);
	    }
	    this.textbox.select();
	    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');
	    this.root.setAttribute('data-mode', mode);
	  }
	  restoreFocus() {
	    this.quill.focus({
	      preventScroll: true
	    });
	  }
	  save() {
	    // @ts-expect-error Fix me later
	    let {
	      value
	    } = this.textbox;
	    switch (this.root.getAttribute('data-mode')) {
	      case 'link':
	        {
	          const {
	            scrollTop
	          } = this.quill.root;
	          if (this.linkRange) {
	            this.quill.formatText(this.linkRange, 'link', value, Emitter.sources.USER);
	            delete this.linkRange;
	          } else {
	            this.restoreFocus();
	            this.quill.format('link', value, Emitter.sources.USER);
	          }
	          this.quill.root.scrollTop = scrollTop;
	          break;
	        }
	      case 'video':
	        {
	          value = extractVideoUrl(value);
	        }
	      // eslint-disable-next-line no-fallthrough
	      case 'formula':
	        {
	          if (!value) break;
	          const range = this.quill.getSelection(true);
	          if (range != null) {
	            const index = range.index + range.length;
	            this.quill.insertEmbed(index,
	            // @ts-expect-error Fix me later
	            this.root.getAttribute('data-mode'), value, Emitter.sources.USER);
	            if (this.root.getAttribute('data-mode') === 'formula') {
	              this.quill.insertText(index + 1, ' ', Emitter.sources.USER);
	            }
	            this.quill.setSelection(index + 2, Emitter.sources.USER);
	          }
	          break;
	        }
	    }
	    // @ts-expect-error Fix me later
	    this.textbox.value = '';
	    this.hide();
	  }
	}
	function extractVideoUrl(url) {
	  let match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	  if (match) {
	    return `${match[1] || 'https'}://www.youtube.com/embed/${match[2]}?showinfo=0`;
	  }
	  // eslint-disable-next-line no-cond-assign
	  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
	    return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;
	  }
	  return url;
	}
	function fillSelect(select, values) {
	  let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  values.forEach(value => {
	    const option = document.createElement('option');
	    if (value === defaultValue) {
	      option.setAttribute('selected', 'selected');
	    } else {
	      option.setAttribute('value', String(value));
	    }
	    select.appendChild(option);
	  });
	}

	const TOOLBAR_CONFIG$1 = [['bold', 'italic', 'link'], [{
	  header: 1
	}, {
	  header: 2
	}, 'blockquote']];
	class BubbleTooltip extends BaseTooltip {
	  static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');
	  constructor(quill, bounds) {
	    super(quill, bounds);
	    this.quill.on(Emitter.events.EDITOR_CHANGE, (type, range, oldRange, source) => {
	      if (type !== Emitter.events.SELECTION_CHANGE) return;
	      if (range != null && range.length > 0 && source === Emitter.sources.USER) {
	        this.show();
	        // Lock our width so we will expand beyond our offsetParent boundaries
	        this.root.style.left = '0px';
	        this.root.style.width = '';
	        this.root.style.width = `${this.root.offsetWidth}px`;
	        const lines = this.quill.getLines(range.index, range.length);
	        if (lines.length === 1) {
	          const bounds = this.quill.getBounds(range);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	        } else {
	          const lastLine = lines[lines.length - 1];
	          const index = this.quill.getIndex(lastLine);
	          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);
	          const indexBounds = this.quill.getBounds(new Range(index, length));
	          if (indexBounds != null) {
	            this.position(indexBounds);
	          }
	        }
	      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {
	        this.hide();
	      }
	    });
	  }
	  listen() {
	    super.listen();
	    // @ts-expect-error Fix me later
	    this.root.querySelector('.ql-close').addEventListener('click', () => {
	      this.root.classList.remove('ql-editing');
	    });
	    this.quill.on(Emitter.events.SCROLL_OPTIMIZE, () => {
	      // Let selection be restored by toolbar handlers before repositioning
	      setTimeout(() => {
	        if (this.root.classList.contains('ql-hidden')) return;
	        const range = this.quill.getSelection();
	        if (range != null) {
	          const bounds = this.quill.getBounds(range);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	        }
	      }, 1);
	    });
	  }
	  cancel() {
	    this.show();
	  }
	  position(reference) {
	    const shift = super.position(reference);
	    const arrow = this.root.querySelector('.ql-tooltip-arrow');
	    // @ts-expect-error
	    arrow.style.marginLeft = '';
	    if (shift !== 0) {
	      // @ts-expect-error
	      arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;
	    }
	    return shift;
	  }
	}
	class BubbleTheme extends BaseTheme {
	  constructor(quill, options) {
	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG$1;
	    }
	    super(quill, options);
	    this.quill.container.classList.add('ql-bubble');
	  }
	  extendToolbar(toolbar) {
	    // @ts-expect-error
	    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
	    if (toolbar.container != null) {
	      this.tooltip.root.appendChild(toolbar.container);
	      this.buildButtons(toolbar.container.querySelectorAll('button'), Icons);
	      this.buildPickers(toolbar.container.querySelectorAll('select'), Icons);
	    }
	  }
	}
	BubbleTheme.DEFAULTS = merge({}, BaseTheme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        link(value) {
	          if (!value) {
	            this.quill.format('link', false, Quill.sources.USER);
	          } else {
	            // @ts-expect-error
	            this.quill.theme.tooltip.edit();
	          }
	        }
	      }
	    }
	  }
	});

	const TOOLBAR_CONFIG = [[{
	  header: ['1', '2', '3', false]
	}], ['bold', 'italic', 'underline', 'link'], [{
	  list: 'ordered'
	}, {
	  list: 'bullet'
	}], ['clean']];
	class SnowTooltip extends BaseTooltip {
	  static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');
	  preview = this.root.querySelector('a.ql-preview');
	  listen() {
	    super.listen();
	    // @ts-expect-error Fix me later
	    this.root.querySelector('a.ql-action').addEventListener('click', event => {
	      if (this.root.classList.contains('ql-editing')) {
	        this.save();
	      } else {
	        // @ts-expect-error Fix me later
	        this.edit('link', this.preview.textContent);
	      }
	      event.preventDefault();
	    });
	    // @ts-expect-error Fix me later
	    this.root.querySelector('a.ql-remove').addEventListener('click', event => {
	      if (this.linkRange != null) {
	        const range = this.linkRange;
	        this.restoreFocus();
	        this.quill.formatText(range, 'link', false, Emitter.sources.USER);
	        delete this.linkRange;
	      }
	      event.preventDefault();
	      this.hide();
	    });
	    this.quill.on(Emitter.events.SELECTION_CHANGE, (range, oldRange, source) => {
	      if (range == null) return;
	      if (range.length === 0 && source === Emitter.sources.USER) {
	        const [link, offset] = this.quill.scroll.descendant(Link, range.index);
	        if (link != null) {
	          this.linkRange = new Range(range.index - offset, link.length());
	          const preview = Link.formats(link.domNode);
	          // @ts-expect-error Fix me later
	          this.preview.textContent = preview;
	          // @ts-expect-error Fix me later
	          this.preview.setAttribute('href', preview);
	          this.show();
	          const bounds = this.quill.getBounds(this.linkRange);
	          if (bounds != null) {
	            this.position(bounds);
	          }
	          return;
	        }
	      } else {
	        delete this.linkRange;
	      }
	      this.hide();
	    });
	  }
	  show() {
	    super.show();
	    this.root.removeAttribute('data-mode');
	  }
	}
	class SnowTheme extends BaseTheme {
	  constructor(quill, options) {
	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG;
	    }
	    super(quill, options);
	    this.quill.container.classList.add('ql-snow');
	  }
	  extendToolbar(toolbar) {
	    if (toolbar.container != null) {
	      toolbar.container.classList.add('ql-snow');
	      this.buildButtons(toolbar.container.querySelectorAll('button'), Icons);
	      this.buildPickers(toolbar.container.querySelectorAll('select'), Icons);
	      // @ts-expect-error
	      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
	      if (toolbar.container.querySelector('.ql-link')) {
	        this.quill.keyboard.addBinding({
	          key: 'k',
	          shortKey: true
	        }, (_range, context) => {
	          toolbar.handlers.link.call(toolbar, !context.format.link);
	        });
	      }
	    }
	  }
	}
	SnowTheme.DEFAULTS = merge({}, BaseTheme.DEFAULTS, {
	  modules: {
	    toolbar: {
	      handlers: {
	        link(value) {
	          if (value) {
	            const range = this.quill.getSelection();
	            if (range == null || range.length === 0) return;
	            let preview = this.quill.getText(range);
	            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
	              preview = `mailto:${preview}`;
	            }
	            // @ts-expect-error
	            const {
	              tooltip
	            } = this.quill.theme;
	            tooltip.edit('link', preview);
	          } else {
	            this.quill.format('link', false, Quill.sources.USER);
	          }
	        }
	      }
	    }
	  }
	});

	Quill.register({
	  'attributors/attribute/direction': DirectionAttribute,
	  'attributors/class/align': AlignClass,
	  'attributors/class/background': BackgroundClass,
	  'attributors/class/color': ColorClass,
	  'attributors/class/direction': DirectionClass,
	  'attributors/class/font': FontClass,
	  'attributors/class/size': SizeClass,
	  'attributors/style/align': AlignStyle,
	  'attributors/style/background': BackgroundStyle,
	  'attributors/style/color': ColorStyle,
	  'attributors/style/direction': DirectionStyle,
	  'attributors/style/font': FontStyle,
	  'attributors/style/size': SizeStyle
	}, true);
	Quill.register({
	  'formats/align': AlignClass,
	  'formats/direction': DirectionClass,
	  'formats/indent': IndentClass,
	  'formats/background': BackgroundStyle,
	  'formats/color': ColorStyle,
	  'formats/font': FontClass,
	  'formats/size': SizeClass,
	  'formats/blockquote': Blockquote,
	  'formats/code-block': CodeBlock,
	  'formats/header': Header,
	  'formats/list': ListItem,
	  'formats/bold': Bold,
	  'formats/code': Code,
	  'formats/italic': Italic,
	  'formats/link': Link,
	  'formats/script': Script,
	  'formats/strike': Strike,
	  'formats/underline': Underline,
	  'formats/formula': Formula,
	  'formats/image': Image,
	  'formats/video': Video,
	  'modules/syntax': Syntax,
	  'modules/table': Table,
	  'modules/toolbar': Toolbar,
	  'themes/bubble': BubbleTheme,
	  'themes/snow': SnowTheme,
	  'ui/icons': Icons,
	  'ui/picker': Picker,
	  'ui/icon-picker': IconPicker,
	  'ui/color-picker': ColorPicker,
	  'ui/tooltip': Tooltip
	}, true);

	const editTemplate$1 = html$1`
  <div class="component field">
    <!-- ko if: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span
      >:</label
    >
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
    <div
      class="richtext-field"
      data-bind="childrenComplete: childrenHaveLoaded"
    >
      <!-- Create the editor container -->
      <div
        class="form-control"
        data-bind="attr: {'id': getUniqueId()}, class: ValidationClass"
        style="height: 150px"
      >
        <div data-bind="html: Value"></div>
      </div>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: isRichText -->
    <label class="fw-semibold"
      ><span data-bind="text: displayName"></span
      ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
      <!-- ko if: instructions -->
      <div
        class="fw-lighter fst-italic text-secondary"
        data-bind="html: instructions"
      ></div>
      <!-- /ko -->
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-control"
        data-bind="textInput: Value, class: ValidationClass, attr: attr"
      ></textarea>
    </label>
    <!-- /ko -->
    <!-- ko if: ShowErrors -->
    <!-- ko foreach: Errors -->
    <div class="fw-semibold text-danger" data-bind="text: description"></div>
    <!-- /ko -->
    <!-- /ko -->
  </div>
`;

	const viewTemplate = html$1`
  <div class="fw-semibold" data-bind="text: displayName"></div>
  <!-- ko if: Value -->
  <!-- ko if: isRichText -->
  <div data-bind="html: Value"></div>
  <!-- /ko -->
  <!-- ko ifnot: isRichText -->
  <div data-bind="text: Value"></div>
  <!-- /ko -->
  <!-- /ko -->
  <!-- ko ifnot: Value -->
  <div class="fst-italic">Not provided.</div>
  <!-- /ko -->
`;

	class TextAreaModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  childrenHaveLoaded = (nodes) => {
	    this.initializeEditor();
	  };

	  getToolbarId = () => "toolbar-" + this.getUniqueId();

	  initializeEditor() {
	    const toolbarOptions = [
	      ["bold", "italic", "underline", "strike"], // toggled buttons
	      ["link"],
	      ["blockquote", "code-block"],

	      [{ header: 1 }, { header: 2 }], // custom button values
	      [{ list: "ordered" }, { list: "bullet" }],
	      [{ script: "sub" }, { script: "super" }], // superscript/subscript
	      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
	      [{ direction: "rtl" }], // text direction

	      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
	      [{ header: [1, 2, 3, 4, 5, 6, false] }],

	      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
	      [{ font: [] }],
	      [{ align: [] }],

	      ["clean"], // remove formatting button
	    ];

	    // debugger;
	    var editor = new Quill("#" + this.getUniqueId(), {
	      modules: { toolbar: toolbarOptions },
	      theme: "snow",
	    });

	    const Value = this.Value;

	    Value.subscribe((val) => {
	      if (val == "") {
	        editor.setText("");
	      }
	    });

	    editor.on("text-change", function (delta, oldDelta, source) {
	      Value(editor.root.textContent ? editor.root.innerHTML : "");
	    });
	  }

	  static viewTemplate = viewTemplate;
	  static editTemplate = editTemplate$1;

	  static view = "text-area-view";
	  static edit = "text-area-edit";
	  static new = "text-area-edit";
	}

	registerFieldComponents(TextAreaModule);

	const editTemplate = html$1`
  <label class="fw-semibold"
    ><span data-bind="text: displayName"></span
    ><span data-bind="if: isRequired" class="fw-bold text-danger">*</span>:
    <input
      class="form-control"
      data-bind="textInput: Value, class: ValidationClass, attr: attr"
    />
    <!-- ko if: instructions -->
    <div
      class="fw-lighter fst-italic text-secondary"
      data-bind="html: instructions"
    ></div>
    <!-- /ko -->
  </label>
  <!-- ko if: ShowErrors -->
  <!-- ko foreach: Errors -->
  <div class="fw-semibold text-danger" data-bind="text: description"></div>
  <!-- /ko -->
  <!-- /ko -->
`;

	class TextModule extends BaseFieldModule {
	  constructor(params) {
	    super(params);
	  }

	  static editTemplate = editTemplate;

	  static view = "text-view";
	  static edit = "text-edit";
	  static new = "text-edit";
	}

	registerFieldComponents(TextModule);

	class BlobField extends BaseField {
	  constructor(params) {
	    super(params);
	    this.entityType = params.entityType;
	    this.multiple = params.multiple;

	    if (this.multiple) {
	      this.Value = knockoutLatestExports.observableArray();
	    }

	    if (knockoutLatestExports.isObservable(this.entityType)) {
	      this.entityType.subscribe(this.updateEntityTypeHandler);
	      // this.Value.subscribe(this.updateEntityTypeHandler);
	    }
	    this.updateEntityTypeHandler(knockoutLatestExports.unwrap(this.entityType));
	  }

	  toString = knockoutLatestExports.pureComputed(() => `${this.Value()?.length ?? "0"} items`);

	  toJSON = knockoutLatestExports.pureComputed(() => {
	    if (!this.multiple) return this.Value()?.toJSON();
	    return this.Value().map((value) => value.toJSON());
	  });

	  fromJSON = (input) => {
	    if (!input) return;
	    if (!this.multiple) {
	      this.Value()?.fromJSON(input);
	      return;
	    }
	    this.Value.removeAll();
	    input.map((obj) => {
	      const newEntity = new this.entityConstructor();
	      newEntity.fromJSON(obj);
	      this.Value.push(newEntity);
	    });
	  };

	  // TypedValues = ko.observableArray();
	  // TypedValue = ko.observable();

	  // Value = ko.pureComputed(() =>
	  //   this.multiple ? this.TypedValues() : this.TypedValue()
	  // );

	  get = () => {
	    return JSON.stringify(this.toJSON());
	  };

	  blob;
	  set = (val) => {
	    if (window.DEBUG) console.log(val);
	    this.blob = val;
	    if (val?.constructor == BlobField) {
	      // this.fromJSON(val.toJSON());
	      return;
	    }
	    this.fromJSON(JSON.parse(val));
	  };

	  get entityConstructor() {
	    return knockoutLatestExports.utils.unwrapObservable(this.entityType);
	  }

	  // use purecomputed for memoization, fields shouldn't change
	  Cols = knockoutLatestExports.pureComputed(() => {
	    const entityType = knockoutLatestExports.unwrap(this.entityType);
	    if (!entityType) return [];

	    const newEntity = new this.entityConstructor();

	    return newEntity.FormFields();
	  });

	  // ColKeys = ko.pureComputed(() =>
	  //   new this.entityConstructor()?.FormFieldKeys()
	  // );

	  // Support multiple items
	  NewItem = knockoutLatestExports.observable();

	  submit = () => {
	    const errors = this.NewItem()?.validate();
	    if (errors.length) return;

	    this.Value.push(this.NewItem());

	    this.NewItem(new this.entityConstructor());
	  };

	  add = (item) => this.Value.push(item);
	  remove = (item) => this.Value.remove(item);

	  updateEntityTypeHandler = (newType) => {
	    if (!newType) return;

	    if (!this.multiple) {
	      this.Value(new this.entityConstructor());
	    } else {
	      this.NewItem(new this.entityConstructor());
	    }
	    if (this.blob) this.fromJSON(JSON.parse(this.blob));

	    // this.applyValueToTypedValues();
	  };

	  applyValueToTypedValues = () => {
	    // if (!this.Value() || !this.TypedValue()) return;
	    // if (!this.multiple) {
	    //   mapObjectToEntity(this.Value(), this.TypedValue());
	    //   return;
	    // }
	    // const typedItems = this.Value()?.map((item) => {
	    //   const newEntity = new this.entityConstructor();
	    //   mapObjectToEntity(item, newEntity);
	    //   return newEntity;
	    // });
	    // this.TypedValues(typedItems);
	  };

	  // Errors = ko.pureComputed(() => {
	  //   if (!this.Visible()) return [];
	  //   // const isRequired = ko.unwrap(this.isRequired);
	  //   const isRequired =
	  //     typeof this.isRequired == "function"
	  //       ? this.isRequired()
	  //       : this.isRequired;
	  //   if (!isRequired) return [];
	  //   const currentValue = this.multiple ? this.TypedValues() : this.TypedValue();
	  //   return currentValue
	  //     ? []
	  //     : [
	  //         new ValidationError(
	  //           "text-field",
	  //           "required-field",
	  //           (typeof this.displayName == "function"
	  //             ? this.displayName()
	  //             : this.displayName) + ` is required!`
	  //         ),
	  //       ];
	  // });

	  components = BlobModule;
	}

	class CheckboxField extends BaseField {
	  constructor(params) {
	    super(params);
	  }

	  components = CheckboxModule;
	}

	/**
	 * This field needs to convert between locale and UTC Dates stored on the server;
	 */

	class DateField extends BaseField {
	  constructor(params) {
	    super(params);
	    this.type = params.type ?? dateFieldTypes.date;
	  }

	  toString = knockoutLatestExports.pureComputed(() => {
	    // if this is datetime vs date we expect different things
	    switch (this.type) {
	      case dateFieldTypes.date:
	        return this.toLocaleDateString();
	      case dateFieldTypes.datetime:
	        return this.toLocaleString();
	      default:
	        return "";
	    }
	  });

	  toSortableDateString = () => this.Value()?.format("yyyy-MM-dd");
	  toLocaleDateString = () => this.Value()?.toLocaleDateString();
	  toLocaleString = () => this.Value()?.toLocaleString();

	  get = knockoutLatestExports.pureComputed(() => {
	    if (!this.Value() || isNaN(this.Value().valueOf())) {
	      return null;
	    }

	    return this.Value().toISOString();
	  });

	  set = (newDate) => {
	    if (!newDate) return null;
	    if (newDate.constructor.getName() != "Date") {
	      // console.warn("Attempting to set date", newDate);
	      newDate = new Date(newDate);
	    }
	    if (newDate.getTimezoneOffset()) ;
	    this.Value(newDate);
	  };

	  components = DateModule;
	}

	class LookupField extends BaseField {
	  constructor({
	    displayName,
	    type: entityType,
	    isRequired = false,
	    Visible,
	    entitySet,
	    options = knockoutLatestExports.observableArray(),
	    optionsFilter = null,
	    optionsText = null,
	    multiple = false,
	    lookupCol = null,
	    instructions,
	  }) {
	    super({ Visible, displayName, isRequired, instructions });
	    // Support passing in options
	    // if options are not passed, assume this is a search input
	    if (!options) {
	      this.isSearch = true;
	    } else {
	      this.isSearch = false;
	      this.allOpts = options;
	    }
	    this.isSearch = !options;
	    this.multiple = multiple;
	    this.Value = multiple ? knockoutLatestExports.observableArray() : knockoutLatestExports.observable();

	    this.entityType = entityType;
	    this.entitySet = entitySet;
	    this.lookupCol = lookupCol ?? "Title";
	    this.optionsText = optionsText ?? ((item) => item[this.lookupCol]);
	    if (optionsFilter) this.optionsFilter = optionsFilter;

	    this.components = multiple ? SearchSelectModule : LookupModule;
	  }

	  isSearch = false;

	  allOpts;
	  optionsFilter = (val) => val;

	  Options = knockoutLatestExports.pureComputed(() => {
	    const optsFilter = knockoutLatestExports.unwrap(this.optionsFilter);
	    const allOpts = knockoutLatestExports.unwrap(this.allOpts);
	    return allOpts.filter(optsFilter);
	  });

	  IsLoading = knockoutLatestExports.observable(false);
	  HasLoaded = knockoutLatestExports.observable(false);

	  // TODO: Started this, should really go in the entity base class if we're doing active record
	  // create = async () => {
	  //   const newItems = this.multiple ? this.Value() : [this.Value()]
	  //   newItems.map(item => this.entitySet.AddEntity(newItems))
	  // }

	  refresh = async () => {
	    if (!!!this.Value()) {
	      return;
	    }
	    this.IsLoading(true);
	    if (!this.multiple) {
	      await this.entitySet.LoadEntity(this.Value());
	      this.IsLoading(false);
	      this.HasLoaded(true);
	      return;
	    }

	    await Promise.all(
	      this.Value().map(
	        async (entity) => await this.entitySet.LoadEntity(entity)
	      )
	    );
	    this.IsLoading(false);
	    this.HasLoaded(true);
	  };

	  ensure = async () => {
	    if (this.HasLoaded()) return;
	    if (this.IsLoading()) {
	      return new Promise((resolve, reject) => {
	        const isLoadingSubscription = this.IsLoading.subscribe((isLoading) => {
	          if (!isLoading) {
	            isLoadingSubscription.dispose();
	            resolve();
	          }
	        });
	      });
	    }
	    await this.refresh();
	  };

	  toString = knockoutLatestExports.pureComputed(() => {
	    if (!!!this.Value()) {
	      return "";
	    }
	    if (this.multiple) {
	      return this.Value()
	        .map((val) => getEntityPropertyAsString(val, this.lookupCol))
	        .join(", ");
	    }
	    return getEntityPropertyAsString(this.Value(), this.lookupCol);
	  });

	  get = () => {
	    if (!this.Value()) return;
	    if (this.multiple) {
	      return this.Value().map((entity) => {
	        return {
	          ID: entity.ID,
	          LookupValue: entity.LookupValue,
	          Title: entity.Title,
	        };
	      });
	    }
	    const entity = this.Value();
	    return {
	      ID: entity.ID,
	      LookupValue: entity.LookupValue,
	      Title: entity.Title,
	    };
	  };

	  set = (val) => {
	    if (!val) {
	      this.Value(val);
	      return;
	    }
	    if (this.multiple) {
	      const valArr = Array.isArray(val) ? val : val.results ?? val.split("#;");

	      this.Value(valArr.map((value) => this.findOrCreateNewEntity(value)));
	      return;
	    }

	    this.Value(this.findOrCreateNewEntity(val));
	    if (val && !this.toString()) ;
	  };

	  findOrCreateNewEntity = (val) => {
	    if (this.entityType.FindInStore) {
	      const foundEntity = this.entityType.FindInStore(val);
	      if (foundEntity) return foundEntity;
	      console.warn(
	        `Could not find entity in store: ${this.entityType.name}`,
	        val
	      );
	    }

	    const optionEntity = this.allOpts().find((entity) => entity.ID == val.ID);
	    if (optionEntity) return optionEntity;

	    if (this.entityType.Create) {
	      return this.entityType.Create(val);
	    }

	    const newEntity = new this.entityType();
	    newEntity.ID = val.ID;
	    // Kick off the load process in the background
	    this.entitySet.LoadEntity(newEntity);

	    return newEntity;
	  };
	}

	// Should fully constrain all entities, this is ridiculous
	function getEntityPropertyAsString(entity, column) {
	  if (entity.FieldMap && entity.FieldMap[column]) {
	    const field = entity.FieldMap[column];
	    if (typeof field == "function") {
	      return field();
	    }

	    if (field.toString && typeof field.toString == "function") {
	      return field.toString();
	    }

	    if (field.get && typeof field.get == "function") {
	      return field.get();
	    }

	    if (field.obs) {
	      return field.obs();
	    }

	    return field;
	  }
	  return entity[column] ?? "";
	}

	const sortByTitle = (a, b) => {
	  if (a.Title > b.Title) {
	    return 1;
	  }
	  if (a.Title < b.Title) {
	    return -1;
	  }
	  return 0;
	};

	const assetsPath = () =>
	  `${window.context.pageContext.serverRelativeUrl}/Style Library/apps/audit/src`;

	knockoutLatestExports.subscribable.fn.subscribeChanged = function (callback) {
	  var oldValue;
	  this.subscribe(
	    function (_oldValue) {
	      oldValue = _oldValue;
	    },
	    this,
	    "beforeChange"
	  );

	  this.subscribe(function (newValue) {
	    callback(newValue, oldValue);
	  });
	};

	knockoutLatestExports.observableArray.fn.subscribeAdded = function (callback) {
	  this.subscribe(
	    function (arrayChanges) {
	      const addedValues = arrayChanges
	        .filter((value) => value.status == "added")
	        .map((value) => value.value);
	      callback(addedValues);
	    },
	    this,
	    "arrayChange"
	  );
	};

	knockoutLatestExports.bindingHandlers.searchSelect = {
	  init: function (element, valueAccessor, allBindingsAccessor) {
	    const { options, selectedOptions, optionsText, onSearchInput } =
	      valueAccessor();

	    function populateOpts() {
	      const optionItems = knockoutLatestExports.unwrap(options);

	      const selectedOpts = knockoutLatestExports.unwrap(selectedOptions) ?? [];

	      const optionElements = optionItems.map((option) => {
	        const optionElement = document.createElement("option");
	        knockoutLatestExports.selectExtensions.writeValue(optionElement, knockoutLatestExports.unwrap(option));
	        // optionElement.value = option;
	        optionElement.innerText = optionsText(option);

	        if (
	          selectedOpts?.find((selectedOption) => {
	            if (option.ID && selectedOption.ID == option.ID) return true;
	            if (option == selectedOption) return true;
	            return false;
	          })
	        ) {
	          optionElement.setAttribute("selected", "");
	        }
	        return optionElement;
	      });

	      element.append(...optionElements);
	    }

	    populateOpts();

	    if (knockoutLatestExports.isObservable(options)) {
	      options.subscribe(() => populateOpts(), this);
	    }

	    knockoutLatestExports.utils.registerEventHandler(element, "change", (e) => {
	      selectedOptions(
	        element.selectedOptions.map((opt) => knockoutLatestExports.selectExtensions.readValue(opt))
	      );
	    });

	    if (onSearchInput) {
	      knockoutLatestExports.utils.registerEventHandler(element, "input", (e) => {
	        onSearchInput(e.originalEvent.target.searchInputElement.value);
	      });
	    }
	  },
	  update: function (
	    element,
	    valueAccessor,
	    allBindings,
	    viewModel,
	    bindingContext
	  ) {
	    const { selectedOptions } = valueAccessor();
	    const selectedUnwrapped = knockoutLatestExports.unwrap(selectedOptions);

	    for (var i = 0; i < element.options.length; i++) {
	      const o = element.options[i];
	      o.toggleAttribute(
	        "selected",
	        selectedUnwrapped.includes(knockoutLatestExports.selectExtensions.readValue(o))
	      );
	    }

	    // element.selectedOptions = ko.unwrap(selectedOptions);
	  },
	};

	knockoutLatestExports.bindingHandlers.people = {
	  init: function (element, valueAccessor, allBindingsAccessor) {
	    var schema = {};
	    schema["PrincipalAccountType"] = "User";
	    schema["SearchPrincipalSource"] = 15;
	    schema["ShowUserPresence"] = true;
	    schema["ResolvePrincipalSource"] = 15;
	    schema["AllowEmailAddresses"] = true;
	    schema["AllowMultipleValues"] = false;
	    schema["MaximumEntitySuggestions"] = 50;
	    //schema["Width"] = "280px";
	    schema["OnUserResolvedClientScript"] = async function (elemId, userKeys) {
	      //  get reference of People Picker Control
	      var pickerControl = SPClientPeoplePicker.SPClientPeoplePickerDict[elemId];
	      var observable = valueAccessor();
	      var userJSObject = pickerControl.GetControlValueAsJSObject()[0];
	      if (!userJSObject) {
	        observable(null);
	        return;
	      }

	      if (userJSObject.IsResolved) {
	        if (userJSObject.Key == observable()?.LoginName) return;
	        var user = await ensureUserByKeyAsync(userJSObject.Key);
	        var person = new People$1(user);
	        observable(person);
	      }
	    };

	    // TODO: Minor - accept schema settings as options
	    //var mergedOptions = Object.assign(schema, obs.schemaOpts);

	    //  Initialize the Control, MS enforces to pass the Element ID hence we need to provide
	    //  ID to our element, no other options
	    SPClientPeoplePicker_InitStandaloneControlWrapper(element.id, null, schema);
	    // const helpDiv = document.createElement("div");
	    // helpDiv.innerHTML = "Search surname first e.g. Smith, John";
	    // helpDiv.classList.add("fst-italic", "fw-lighter");
	    // element.appendChild(helpDiv);
	  },
	  update: function (
	    element,
	    valueAccessor,
	    allBindings,
	    viewModel,
	    bindingContext
	  ) {
	    var pickerControl =
	      SPClientPeoplePicker.SPClientPeoplePickerDict[element.id + "_TopSpan"];
	    var userValue = knockoutLatestExports.utils.unwrapObservable(valueAccessor());

	    if (!userValue) {
	      // Clear the form
	      pickerControl?.DeleteProcessedUser();
	      return;
	    }

	    if (
	      userValue &&
	      !pickerControl
	        .GetAllUserInfo()
	        .find((pickerUser) => pickerUser.DisplayText == userValue.LookupValue)
	    ) {
	      pickerControl.AddUserKeys(
	        userValue.LoginName ?? userValue.LookupValue ?? userValue.Title
	      );
	    }
	  },
	};

	knockoutLatestExports.bindingHandlers.dateField = {
	  init: function (element, valueAccessor, allBindingsAccessor) {},
	  update: function (
	    element,
	    valueAccessor,
	    allBindings,
	    viewModel,
	    bindingContext
	  ) {},
	};

	knockoutLatestExports.bindingHandlers.downloadLink = {
	  update: function (
	    element,
	    valueAccessor,
	    allBindings,
	    viewModel,
	    bindingContext
	  ) {
	    var path = valueAccessor();
	    var replaced = path.replace(/:([A-Za-z_]+)/g, function (_, token) {
	      return knockoutLatestExports.unwrap(viewModel[token]);
	    });
	    element.href = replaced;
	  },
	};

	knockoutLatestExports.bindingHandlers.files = {
	  init: function (element, valueAccessor) {
	    function addFiles(fileList) {
	      var value = valueAccessor();
	      if (!fileList.length) {
	        value.removeAll();
	        return;
	      }

	      const existingFiles = knockoutLatestExports.unwrap(value);
	      const newFileList = [];
	      for (let file of fileList) {
	        if (!existingFiles.find((exFile) => exFile.name == file.name))
	          newFileList.push(file);
	      }
	      knockoutLatestExports.utils.arrayPushAll(value, newFileList);
	      return;
	    }

	    knockoutLatestExports.utils.registerEventHandler(element, "change", function () {
	      addFiles(element.files);
	    });

	    const label = element.closest("label");
	    if (!label) return;

	    knockoutLatestExports.utils.registerEventHandler(label, "dragover", function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    knockoutLatestExports.utils.registerEventHandler(label, "dragenter", function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	      label.classList.add("dragging");
	    });

	    knockoutLatestExports.utils.registerEventHandler(label, "dragleave", function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	      label.classList.remove("dragging");
	    });

	    knockoutLatestExports.utils.registerEventHandler(label, "drop", function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	      let dt = event.originalEvent.dataTransfer;
	      let files = dt.files;
	      addFiles(files);
	    });
	  },
	  update: function (
	    element,
	    valueAccessor,
	    allBindings,
	    viewModel,
	    bindingContext
	  ) {
	    const value = valueAccessor();
	    if (!value().length && element.files.length) {
	      // clear all files
	      element.value = null;
	      return;
	    }

	    return;
	  },
	};

	knockoutLatestExports.bindingHandlers.toggleClick = {
	  init: function (element, valueAccessor, allBindings) {
	    valueAccessor();

	    knockoutLatestExports.utils.registerEventHandler(element, "click", function () {
	      var classToToggle = allBindings.get("toggleClass");
	      var classContainer = allBindings.get("classContainer");
	      var containerType = allBindings.get("containerType");

	      if (containerType && containerType == "sibling") {
	        let sibling = element.nextElementSibling;
	        while (sibling && !sibling.matches(classContainer)) {
	          sibling.classList.toggle(classToToggle);
	          sibling = sibling.nextElementSibling;
	        }
	      } else if (containerType && containerType == "doc") {
	        var curIcon = element.getAttribute("src");
	        if (curIcon == "/_layouts/images/minus.gif") {
	          element.setAttribute("src", "/_layouts/images/plus.gif");
	        } else {
	          element.setAttribute("src", "/_layouts/images/minus.gif");
	        }

	        if (element.parentElement && element.parentElement.parentElement) {
	          let sibling = element.parentElement.parentElement.nextElementSibling;
	          while (sibling && !sibling.matches(classContainer)) {
	            sibling.classList.toggle(classToToggle);
	            sibling = sibling.nextElementSibling;
	          }
	        }
	      } else if (containerType && containerType == "any") {
	        const elements = document.querySelectorAll("." + classToToggle);

	        elements.forEach(function (element) {
	          if (element.style.display === "none") {
	            element.style.display = ""; // Resets to default display value, such as 'block' or 'inline'
	          } else {
	            element.style.display = "none";
	          }
	        });
	      } else {
	        const containers = element.querySelectorAll(classContainer);
	        containers.forEach(function (container) {
	          container.classList.toggle(classToToggle);
	        });
	      }
	    });
	  },
	};

	knockoutLatestExports.bindingHandlers.toggles = {
	  init: function (element, valueAccessor) {
	    var value = valueAccessor();

	    knockoutLatestExports.utils.registerEventHandler(element, "click", function () {
	      value(!value());
	    });
	  },
	};

	const fromPathTemplateLoader = {
	  loadTemplate: function (name, templateConfig, callback) {
	    if (templateConfig.fromPath) {
	      // TODO: Minor - fix error catching and fallback flow
	      fetch(assetsPath() + templateConfig.fromPath)
	        .then((response) => {
	          if (!response.ok) {
	            throw new Error(
	              `Error Fetching HTML Template - ${response.statusText}`
	            );
	          }
	          return response.text();
	        })
	        .catch((error) => {
	          if (!templateConfig.fallback) return;
	          console.warn(
	            "Primary template not found, attempting fallback",
	            templateConfig
	          );
	          fetch(assetsPath() + templateConfig.fallback)
	            .then((response) => {
	              if (!response.ok) {
	                throw new Error(
	                  `Error Fetching fallback HTML Template - ${response.statusText}`
	                );
	              }
	              return response.text();
	            })
	            .then((text) =>
	              knockoutLatestExports.components.defaultLoader.loadTemplate(name, text, callback)
	            );
	        })
	        .then((text) =>
	          text
	            ? knockoutLatestExports.components.defaultLoader.loadTemplate(name, text, callback)
	            : null
	        );
	    } else {
	      callback(null);
	    }
	  },
	};

	knockoutLatestExports.components.loaders.unshift(fromPathTemplateLoader);

	const fromPathViewModelLoader = {
	  loadViewModel: function (name, viewModelConfig, callback) {
	    if (viewModelConfig.viaLoader) {
	      // console.log("loading module", name);
	      import(assetsPath() + viewModelConfig.viaLoader).then(
	        (module) => {
	          // console.log("imported module", name);
	          const viewModelConstructor = module.default;
	          // We need a createViewModel function, not a plain constructor.
	          // We can use the default loader to convert to the
	          // required format.
	          knockoutLatestExports.components.defaultLoader.loadViewModel(
	            name,
	            viewModelConstructor,
	            callback
	          );
	        }
	      );
	    } else {
	      // Unrecognized config format. Let another loader handle it.
	      callback(null);
	    }
	  },
	};

	knockoutLatestExports.components.loaders.unshift(fromPathViewModelLoader);

	const html = String.raw;

	function directRegisterComponent(name, { template, viewModel = null }) {
	  knockoutLatestExports.components.register(name, {
	    template,
	    viewModel,
	  });
	}

	async function getUsersByGroupName(groupName) {
	  const users = await getGroupUsers(groupName);

	  if (!users) return [];

	  return users.map((userProps) => new People(userProps));
	}

	class PeopleField extends BaseField {
	  constructor(params) {
	    super(params);
	    // this.pickerOptions = params.pickerOptions ?? {};
	    this.spGroupName = params.spGroupName ?? null;
	    this.multiple = params.multiple ?? false;
	    // this.pickerOptions = params.pickerOptions ?? {};

	    this.Value = this.multiple ? knockoutLatestExports.observableArray() : knockoutLatestExports.observable();

	    if (knockoutLatestExports.isObservable(this.spGroupName)) {
	      this.spGroupName.subscribe(this.spGroupNameChangedHandler);
	    }
	    if (knockoutLatestExports.unwrap(this.spGroupName)) {
	      this.spGroupNameChangedHandler(knockoutLatestExports.unwrap(this.spGroupName));
	    }
	  }

	  spGroupId = knockoutLatestExports.observable();
	  userOpts = knockoutLatestExports.observableArray();
	  expandUsers = knockoutLatestExports.observable(false);

	  spGroupNameChangedHandler = async (groupName) => {
	    if (!groupName) {
	      this.userOpts.removeAll();
	      this.spGroupId(null);
	    }

	    const group = await ensureUserByKeyAsync(groupName);
	    this.spGroupId(group.ID);
	    const users = await getUsersByGroupName(groupName);
	    this.userOpts(users.sort(sortByTitle));
	  };

	  pickerOptions = knockoutLatestExports.pureComputed(() => {
	    const groupId = knockoutLatestExports.unwrap(this.spGroupId);

	    const opts = {
	      AllowMultipleValues: this.multiple,
	    };

	    if (groupId) opts.SharePointGroupID = groupId;

	    return opts;
	  });

	  toString = knockoutLatestExports.pureComputed(() => {
	    if (!this.multiple) return this.Value()?.Title;

	    return this.Value()?.map((user) => user.Title);
	  });

	  set = (val) => {
	    if (!this.multiple) {
	      this.Value(People$1.Create(val));
	      return;
	    }

	    if (!val) {
	      this.Value.removeAll();
	      return;
	    }

	    const vals = val.results ?? val;

	    if (!vals.length) {
	      this.Value.removeAll();
	      return;
	    }
	    this.Value(vals.map((u) => People$1.Create(u)));
	  };

	  components = PeopleModule;
	}

	class SelectField extends BaseField {
	  constructor({
	    displayName,
	    isRequired = false,
	    Visible,
	    options,
	    multiple = false,
	    optionsText,
	    instructions,
	  }) {
	    super({ Visible, displayName, isRequired, instructions });
	    this.Options(options);
	    this.multiple = multiple;
	    this.Value = multiple ? knockoutLatestExports.observableArray() : knockoutLatestExports.observable();
	    this.optionsText = optionsText;

	    this.components = this.multiple ? SearchSelectModule : SelectModule;
	  }

	  toString = knockoutLatestExports.pureComputed(() =>
	    this.multiple ? this.Value().join(", ") : this.Value()
	  );

	  get = () => this.Value();

	  set = (val) => {
	    if (val && this.multiple) {
	      if (Array.isArray(val)) {
	        this.Value(val);
	      } else {
	        this.Value(val.results ?? val.split(";#"));
	      }
	      return;
	    }
	    this.Value(val);
	  };

	  Options = knockoutLatestExports.observableArray();
	}

	class TextAreaField extends BaseField {
	  constructor(params) {
	    super(params);
	    this.isRichText = params.isRichText;
	    this.attr = params.attr ?? {};
	  }

	  components = TextAreaModule;
	}

	// import ValidationError from "../primitives/ValidationError.js";

	class TextField extends BaseField {
	  constructor(params) {
	    super(params);
	    this.attr = params.attr ?? {};
	    this.options = params.options ?? null;
	  }

	  components = TextModule;
	}

	/**
	 * Constrained Entity's are validated based on their declared fields.
	 * We are expecting user input, so need to validate each input field.
	 */

	class ConstrainedEntity extends Entity {
	  constructor(params) {
	    super(params);
	  }

	  toJSON = () => {
	    const out = {};
	    Object.keys(this.FieldMap).map(
	      (key) => (out[key] = this.FieldMap[key]?.get())
	    );
	    return out;
	  };

	  fromJSON(inputObj) {
	    if (window.DEBUG)
	      console.log("Setting constrained entity from JSON", inputObj);
	    Object.keys(inputObj).map((key) => this.FieldMap[key]?.set(inputObj[key]));
	  }

	  get FieldMap() {
	    const fieldMap = {};
	    Object.entries(this)
	      .filter(([key, val]) => val instanceof BaseField)
	      .map(([key, val]) => {
	        key = val.systemName ?? key;
	        fieldMap[key] = val;
	      });
	    return fieldMap;
	  }

	  FormFields = () => Object.values(this.FieldMap);

	  // Validate the entire entity
	  validate = (showErrors = true) => {
	    Object.values(this.FieldMap).map(
	      (field) => field?.validate && field.validate(showErrors)
	    );
	    return this.Errors();
	  };

	  Errors = knockoutLatestExports.pureComputed(() => {
	    return Object.values(this.FieldMap)
	      .filter((field) => field?.Errors && field.Errors())
	      .flatMap((field) => field.Errors());
	  });

	  IsValid = knockoutLatestExports.pureComputed(() => !this.Errors().length);

	  /**
	   * Expose methods to generate default new, edit, and view forms
	   * for a constrained entity. Uses the constrained
	   * entity components.
	   *
	   * This could be broken into a separate service, but since it's
	   * tightly coupled leave it here?
	   */
	  // static components = {
	  //   new: (entity, view = null) =>
	  //     new ConstrainedEntityComponent({
	  //       entityView: new ConstrainedEntityView({ entity, view }),
	  //       displayMode: "edit",
	  //     }),
	  //   edit: (entity, view = null) =>
	  //     new ConstrainedEntityComponent({
	  //       entityView: new ConstrainedEntityView({ entity, view }),
	  //       displayMode: "edit",
	  //     }),
	  //   view: (entity, view = null) =>
	  //     new ConstrainedEntityComponent({
	  //       entityView: new ConstrainedEntityView({ entity, view }),
	  //       displayMode: "view",
	  //     }),
	  // };
	}

	const ORGROLES = {
	  ACTIONOFFICE: "Action Office",
	  REQUESTINGOFFICE: "Requesting Office",
	  QUALITYASSURANCE: "Quality Assurance",
	  SPECIALPERMISSIONS: "Special Permissions",
	  RESTRICTEDREADERS: "Restricted Readers",
	};

	class AuditOrganization extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "Country",
	      "Description",
	      "EmailGroup",
	      "OrgType",
	      "PostCode",
	      "UserGroup",
	      "Role",
	    ],
	  };

	  static ListDef = {
	    name: "AuditOrganizations",
	    title: "AuditOrganizations",
	  };
	}

	const configurationsStore = {};

	const auditOrganizationStore = knockoutLatestExports.observableArray();

	const allActionOfficesFilter = (org) =>
	  ORGROLES.ACTIONOFFICE == org.Role;

	const allRequestingOfficesFilter = (org) =>
	  ORGROLES.REQUESTINGOFFICE == org.Role;

	const AUDITREQUESTSTATES = {
	  OPEN: "Open",
	  CANCELLED: "Canceled",
	  CLOSED: "Closed",
	  REOPENED: "ReOpened",
	};

	const AUDITREQUESTTYPES = {
	  TASKER: "Tasker",
	  REQUEST: "Request",
	};

	// export const requestDefaultReminders = [
	//   "3 Days Before Due",
	//   "1 Day Before Due",
	//   "1 Day Past Due",
	//   "3 Days Past Due",
	//   "7 Days Past Due",
	//   "7 Days Recurring",
	// ];

	const getRequestDefaultReminders = () => {
	  let reminders = [
	    "3 Days Before Due",
	    "1 Day Before Due",
	    "1 Day Past Due",
	    "3 Days Past Due",
	    "7 Days Past Due",
	    "7 Days Recurring",
	  ];
	  const remindersText = configurationsStore["default-reminders"];
	  if (remindersText) {
	    try {
	      reminders = JSON.parse(remindersText);
	    } catch (e) {
	      console.warn("Error parsing reminders default", remindersText);
	    }
	  }
	  return reminders;
	};

	class AuditRequest extends ConstrainedEntity {
	  constructor(params) {
	    super(params);

	    this.InternalDueDate.addFieldRequirement({
	      requirement: knockoutLatestExports.pureComputed(() => {
	        return this.InternalDueDate.Value() > this.ReqDueDate.Value();
	      }),
	      error: new ValidationError$1(
	        "text-field",
	        "required-field",
	        "The Internal Due Date must be before the Request Due Date!"
	      ),
	    });
	  }

	  ReqType = new SelectField({
	    displayName: "Request Type",
	    options: Object.values(AUDITREQUESTTYPES),
	    isRequired: true,
	    instructions: knockoutLatestExports.pureComputed(() => {
	      switch (this.ReqType.Value()) {
	        case AUDITREQUESTTYPES.TASKER:
	          return "A request that doesn't require QA Approval.";
	        case AUDITREQUESTTYPES.REQUEST:
	          return "A request requiring QA Approval";
	        case AUDITREQUESTTYPES.NOTIFICATION:
	          return "A request that is closed after the email is sent";
	      }
	    }),
	  });

	  isTasker = knockoutLatestExports.pureComputed(() => {
	    return this.ReqType.Value() == AUDITREQUESTTYPES.TASKER;
	  });

	  isRequest = knockoutLatestExports.pureComputed(() => {
	    return this.ReqType.Value() == AUDITREQUESTTYPES.REQUEST;
	  });

	  ReqNum = new TextField({
	    displayName: "Request Number",
	    systemName: "Title",
	    isRequired: true,
	  });

	  ReqSubject = new TextField({
	    displayName: "Request Subject",
	    isRequired: true,
	  });

	  RequestingOffice = new LookupField({
	    displayName: "Requesting Office",
	    type: AuditOrganization,
	    options: auditOrganizationStore,
	    optionsFilter: allRequestingOfficesFilter,
	    lookupCol: "Title",
	    entitySet: appContext.AuditOrganizations,
	    isRequired: true,
	  });

	  FiscalYear = new TextField({
	    displayName: "Fiscal Year",
	    isRequired: true,
	  });

	  InternalDueDate = new DateField({
	    displayName: "Internal Due Date",
	    type: dateFieldTypes.date,
	    isRequired: true,
	  });

	  ReqDueDate = new DateField({
	    displayName: "Request Due Date",
	    type: dateFieldTypes.date,
	    isRequired: true,
	  });

	  ReqStatus = new SelectField({
	    displayName: "Request Status",
	    options: Object.values(AUDITREQUESTSTATES),
	    isRequired: true,
	  });

	  IsSample = new CheckboxField({
	    displayName: "Is Sample?",
	  });

	  ReceiptDate = new DateField({
	    displayName: "Receipt Date",
	    type: dateFieldTypes.date,
	    isRequired: false,
	  });

	  RelatedAudit = new TextField({
	    displayName: "Related Audit",
	    isRequired: false,
	    instructions:
	      "The Audit Request number of the similar audit performed in the previous FY",
	  });

	  ActionItems = new TextAreaField({
	    displayName: "Action Items",
	    instructions: "Items that have been requested by the Auditor",
	    isRichText: true,
	    isMinimalEditor: true,
	    classList: ["min-w-full"],
	  });

	  Comments = new TextAreaField({
	    displayName: "Comments",
	    isRichText: true,
	    isMinimalEditor: true,
	    classList: ["min-w-full"],
	  });

	  Reminders = new SelectField({
	    displayName: "Reminders",
	    options: [
	      "3 Days Before Due",
	      "1 Day Before Due",
	      "1 Day Past Due",
	      "3 Days Past Due",
	      "7 Days Past Due",
	      "7 Days Recurring",
	    ],
	    multiple: true,
	  });

	  EmailSent = new CheckboxField({
	    displayName: "Email has been sent",
	  });

	  Sensitivity = new SelectField({
	    displayName: "Sensitivity",
	    options: ["None", "Official", "SBU", "PII_SBU"],
	  });

	  ActionOffice = new LookupField({
	    displayName: "Action Offices",
	    type: AuditOrganization,
	    options: auditOrganizationStore,
	    optionsFilter: allActionOfficesFilter,
	    lookupCol: "Title",
	    multiple: true,
	    entitySet: appContext.AuditOrganizations,
	  });

	  EmailActionOffice = new LookupField({
	    displayName: "Email Action Offices",
	    type: AuditOrganization,
	    options: auditOrganizationStore,
	    optionsFilter: allActionOfficesFilter,
	    lookupCol: "Title",
	    multiple: true,
	    entitySet: appContext.AuditOrganizations,
	  });

	  ClosedDate = new DateField({
	    displayName: "Closed Date",
	    isRequired: false,
	  });

	  ClosedBy = new PeopleField({
	    displayName: "Closed By",
	    isRequired: false,
	  });

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "ReqType",
	      "ReqSubject",
	      "FiscalYear",
	      "InternalDueDate",
	      "ReqDueDate",
	      "ReqStatus",
	      "IsSample",
	      "ReceiptDate",
	      "RelatedAudit",
	      "ActionItems",
	      "Comments",
	      "Reminders",
	      "EmailSent",
	      "Sensitivity",
	      "ActionOffice",
	      "EmailActionOffice",
	      "RequestingOffice",
	      "ClosedDate",
	      "ClosedBy",
	    ],
	    New: [
	      "Title",
	      "ReqType",
	      "ReqSubject",
	      "RequestingOffice",
	      "FiscalYear",
	      "InternalDueDate",
	      "ReqDueDate",
	      "ReqStatus",
	      "IsSample",
	      "ReceiptDate",
	      "RelatedAudit",
	      "ActionItems",
	      "Comments",
	      "Reminders",
	      "Sensitivity",
	      "ActionOffice",
	    ],
	    IACanUpdate: [
	      "ReqType",
	      "ReqSubject",
	      "FiscalYear",
	      "RequestingOffice",
	      "InternalDueDate",
	      "ReqDueDate",
	      "ReqStatus",
	      "IsSample",
	      "ReceiptDate",
	      "RelatedAudit",
	      "ActionItems",
	      "Comments",
	      "Reminders",
	      "Sensitivity",
	      "ActionOffice",
	      "EmailActionOffice",
	      "ClosedBy",
	      "ClosedDate",
	    ],
	  };

	  static ListDef = {
	    name: "AuditRequests",
	    title: "AuditRequests",
	  };
	}

	class AuditCoversheet extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  Title = new TextField({
	    displayName: "Title",
	    required: true,
	  });

	  FileName = new TextField({
	    displayName: "Name",
	    systemName: "FileLeafRef",
	    required: true,
	  });

	  FileRef = new TextField({
	    displayName: "File Link",
	    systemName: "FileRef",
	  });

	  ReqNum = new LookupField({
	    displayName: "Request Number",
	    type: AuditRequest,
	    lookupCol: "Title",
	    required: true,
	    entitySet: appContext.AuditRequests,
	  });

	  ActionOffice = new LookupField({
	    displayName: "Action Offices",
	    type: AuditOrganization,
	    options: auditOrganizationStore,
	    optionsFilter: knockoutLatestExports.pureComputed(() => {
	      // Only allow action offices from this coversheets associated request
	      const request = knockoutLatestExports.unwrap(this.ReqNum.Value);
	      if (!request) return (val) => val;

	      const requestActionOffices = knockoutLatestExports.unwrap(request.ActionOffice.Value);

	      return (opt) => requestActionOffices.includes(opt);
	    }),
	    lookupCol: "Title",
	    multiple: true,
	    entitySet: appContext.AuditOrganizations,
	  });

	  static Views = {
	    All: ["ID", "Title", "FileLeafRef", "FileRef", "ReqNum", "ActionOffice"],
	    AOCanUpdate: ["Title", "FileLeafRef", "ActionOffice"],
	  };

	  static ListDef = {
	    title: "AuditCoversheets",
	    name: "AuditCoversheets",
	    isLib: true,
	  };
	}

	class AuditEmail extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  static Views = {
	    All: ["ID", "Title", "To", "Body", "NotificationType", "ReqNum", "ResID"],
	  };
	  static ListDef = {
	    name: "AuditEmails",
	    title: "AuditEmails",
	  };
	}

	// import { appContext } from "../infrastructure/application_db_context.js";

	class AuditBulkRequest extends AuditRequest {
	  constructor(params) {
	    super(params);
	  }

	  toNewRequest() {
	    const newReq = new AuditRequest(this);

	    newReq.fromJSON(this.toJSON());
	    newReq.ReqStatus.Value(AUDITREQUESTSTATES.OPEN);
	    const requestDefaultReminders = getRequestDefaultReminders();
	    newReq.Reminders.Value(requestDefaultReminders);

	    const requestDefaultType = configurationsStore["default-req-type"];

	    if (requestDefaultType) newReq.ReqType.Value(requestDefaultType);

	    const defaultFy = configurationsStore["current-fy"];

	    if (defaultFy) newReq.FiscalYear.Value(defaultFy);

	    return newReq;
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "ReqSubject",
	      "FiscalYear",
	      "InternalDueDate",
	      "ReqDueDate",
	      "IsSample",
	      "ReceiptDate",
	      "RelatedAudit",
	      "ActionItems",
	      "Comments",
	      "Sensitivity",
	      "ActionOffice",
	      "RequestingOffice",
	    ],
	  };
	  static ListDef = {
	    name: "AuditBulkRequests",
	    title: "AuditBulkRequests",
	  };
	}

	class Comment extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  id = new TextField({
	    displayName: "ID",
	  });
	  text = new TextField({
	    displayName: "Comment",
	  });
	  author = new TextField({
	    displayName: "author",
	  });
	  timestamp = new TextField({
	    displayName: "timestamp",
	  });

	  FieldMap = {
	    id: this.id,
	    text: this.text,
	    author: this.author,
	    timestamp: this.timestamp,
	  };

	  static Create({ id, text, author, timestamp }) {
	    const newComment = new Comment();
	    newComment.id.Value(id);
	    newComment.text.Value(text);
	    newComment.author.Value(author);
	    newComment.timestamp.Value(timestamp);

	    return newComment;
	  }
	  static Views = {
	    All: ["id", "text", "author", "timestamp"],
	  };
	}

	class ActiveViewer extends ConstrainedEntity {
	  id = new TextField({
	    displayName: "ID",
	  });
	  viewer = new TextField({
	    displayName: "Viewer",
	  });
	  timestamp = new DateField({
	    displayName: "Timestamp",
	    type: dateFieldTypes.datetime,
	  });

	  FieldMap = {
	    id: this.id,
	    viewer: this.viewer,
	    timestamp: this.timestamp,
	  };

	  static Views = {
	    All: ["id", "viewer", "timestamp"],
	  };
	}

	class ActiveViewersComponent {
	  constructor({ entity, fieldName }) {
	    this.entity = entity;
	    this.blobField = entity[fieldName];
	    this.fieldName = fieldName;
	    this.viewers = this.blobField.TypedValues;
	  }
	  entity;
	  blobField;
	  fieldName;

	  pushCurrentUser() {
	    this.pushUser(window.context.pageContext.legacyPageContext.userLoginName);
	  }

	  pushUser(loginName) {
	    // Check if our viewer is listed
	    var filteredViewers = this.viewers().filter(function (viewer) {
	      return viewer.viewer != loginName;
	    });

	    this.viewers(filteredViewers);

	    var viewer = new ActiveViewer();
	    viewer.fromJSON({
	      id: Math.ceil(Math.random() * 1000000).toString(16),
	      viewer: loginName,
	      timestamp: new Date().toLocaleString(),
	    });
	    this.viewers.push(viewer);
	    this.commitChanges();
	  }

	  removeUser(viewerToRemove) {
	    this.viewers.remove(viewerToRemove);
	    this.commitChanges();
	  }

	  removeCurrentuser() {
	    this.removeUserByLogin(
	      window.context.pageContext.legacyPageContext.userLoginName
	    );
	  }

	  removeUserByLogin(loginName) {
	    // Check if our viewer is listed
	    var viewerToRemove = this.viewers().find(function (viewer) {
	      return viewer.viewer == loginName;
	    });

	    if (viewerToRemove) {
	      this.removeUser(viewerToRemove);
	    }
	  }

	  onRemove = (viewerToRemove) => {
	    if (confirm("Are you sure you want to delete this item?")) {
	      this.removeUser(viewerToRemove);
	    }
	  };

	  async commitChanges() {
	    const set = appContext.Set(this.entity.constructor);
	    if (!set) {
	      alert("Cannot find entity set", this.entity);
	      return;
	    }
	    await set.UpdateEntity(this.entity, [this.fieldName]);
	  }
	}

	const commentChainTemplate = html`
  <div>
    <!-- ko if: showHistoryBool -->
    <!-- ko foreach: comments -->
    <div class="comment">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko ifnot: showHistoryBool -->
    <div class="comment" data-bind="with: comments()[comments().length - 1]">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <a
      title="Show hidden comments"
      href="javascript:void(0)"
      data-bind="click: toggleShowHistory"
    >
      <span class="ui-icon ui-icon-comment"></span>
      Toggle Comment History (<span data-bind="text: comments().length"></span>
      Total)
    </a>
    <div class="newComment">
      <textarea cols="50" data-bind="value: newCommentText"></textarea>
      <button type="button" data-bind="click: onSubmit">Submit</button>
    </div>
  </div>
`;

	const commentChainComponentName = "commentChain";

	class CommentChainComponent {
	  constructor({ entity, fieldName }) {
	    this.entity = entity;
	    this.blobField = entity[fieldName];
	    this.fieldName = fieldName;
	  }
	  entity;
	  blobField;
	  fieldName;

	  componentName = commentChainComponentName;
	}

	class CommentChainModule {
	  constructor({ entity, fieldName, blobField }) {
	    this.entity = entity;
	    this.fieldName = fieldName;
	    this.blobField = blobField;
	    this.comments = blobField.TypedValues;
	  }

	  // comments = ko.observableArray();
	  newCommentText = knockoutLatestExports.observable();

	  showHistoryBool = knockoutLatestExports.observable(false);

	  toggleShowHistory = function () {
	    this.showHistoryBool(!this.showHistoryBool());
	  };

	  async onSubmit() {
	    var comment = Comment.Create({
	      id: Math.ceil(Math.random() * 1000000).toString(16),
	      text: this.newCommentText(),
	      author: window.context.pageContext.legacyPageContext.userLoginName,
	      timestamp: new Date().toLocaleString(),
	    });
	    this.blobField.add(comment);
	    await this.commitChanges();
	    this.newCommentText("");
	  }

	  onRemove = (commentToRemove) => {
	    if (confirm("Are you sure you want to delete this item?")) {
	      this.blobField.remove(commentToRemove);
	      this.commitChanges();
	    }
	  };

	  async commitChanges() {
	    const set = appContext.Set(this.entity.constructor);
	    if (!set) {
	      alert("Cannot find entity set", this.entity);
	      return;
	    }
	    await set.UpdateEntity(this.entity, [this.fieldName]);
	  }
	}

	directRegisterComponent(commentChainComponentName, {
	  template: commentChainTemplate,
	  viewModel: CommentChainModule,
	});

	class AuditRequestsInternal extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  ActiveViewers = new BlobField({
	    displayName: "Active Viewers",
	    entityType: ActiveViewer,
	    multiple: true,
	  });

	  InternalStatus = new BlobField({
	    displayName: "Internal Status",
	    entityType: Comment,
	    multiple: true,
	  });

	  ReqNum = new LookupField({
	    displayName: "Request",
	    type: AuditRequest,
	    lookupCol: "Title",
	    entitySet: appContext.AuditRequests,
	  });

	  commentChainComponent = new CommentChainComponent({
	    entity: this,
	    fieldName: "InternalStatus",
	  });

	  activeViewersComponent = new ActiveViewersComponent({
	    entity: this,
	    fieldName: "ActiveViewers",
	  });

	  static Views = {
	    All: ["ID", "ActiveViewers", "InternalStatus", "ReqNum"],
	  };

	  static ListDef = {
	    title: "AuditRequestsInternal",
	    name: "AuditRequestsInternal",
	  };
	}

	class User extends People$1 {
	  constructor({
	    ID,
	    Title,
	    LoginName = null,
	    LookupValue = null,
	    WorkPhone = null,
	    EMail = null,
	    IsGroup = null,
	    IsEnsured = false,
	    Groups = null,
	  }) {
	    super({ ID, Title, LookupValue, LoginName, IsGroup, IsEnsured });

	    this.WorkPhone = WorkPhone;
	    this.EMail = EMail;

	    this.Groups = Groups;
	  }

	  Groups = [];

	  isInGroup(group) {
	    if (!group?.ID) return false;
	    return this.getGroupIds().includes(group.ID);
	  }

	  getGroupIds() {
	    return this.Groups.map((group) => group.ID);
	  }

	  IsSiteOwner = knockoutLatestExports.pureComputed(() =>
	    this.isInGroup(getDefaultGroups().owners)
	  );

	  hasSystemRole = (systemRole) => {
	    const userIsOwner = this.IsSiteOwner();
	    switch (systemRole) {
	      case systemRoles.Admin:
	        return userIsOwner;
	      case systemRoles.ActionOffice:
	        return userIsOwner || this.ActionOffices().length;
	    }
	  };

	  static _user = null;
	  static Create = async function () {
	    if (User._user) return User._user;
	    // TODO: Major - Switch to getUserPropertiesAsync since that includes phone # etc
	    const userProps = await getUserPropsAsync();
	    // const userProps2 = await UserManager.getUserPropertiesAsync();
	    User._user = new User(userProps);
	    return User._user;
	  };
	}

	const currentUser = User.Create;

	// import { appContext } from "../infrastructure/ServiceContainer.js";

	const AuditResponseStates = {
	  Open: "1-Open",
	  Submitted: "2-Submitted",
	  ReturnedToAO: "3-Returned to Action Office",
	  ApprovedForQA: "4-Approved for QA",
	  ReturnedToGFS: "5-Returned to GFS",
	  RepostedAfterRejection: "6-Reposted After Rejection",
	  Closed: "7-Closed",
	};

	class AuditResponse extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  Title = new TextField({
	    displayName: "Name",
	  });

	  ReqNum = new LookupField({
	    displayName: "Request Number",
	    type: AuditRequest,
	    entitySet: appContext.AuditRequests,
	  });

	  SampleNumber = new TextField({
	    displayName: "Sample Number",
	    isRequired: true,
	  });

	  ResStatus = new SelectField({
	    displayName: "Response Status",
	    options: Object.values(AuditResponseStates),
	  });

	  ReturnReason = new TextField({
	    displayName: "Return Reason",
	    options: ["Incomplete Document", "Incorrect POC"],
	  });

	  Comments = new TextAreaField({
	    displayName: "Comments",
	    isRichText: true,
	    isMinimalEditor: true,
	    classList: ["min-w-full"],
	  });

	  ClosedDate = new DateField({
	    displayName: "Closed Date",
	    type: dateFieldTypes.date,
	  });

	  ClosedBy = new PeopleField({
	    displayName: "Closed By",
	  });

	  POC = new PeopleField({
	    displayName: "POC",
	  });

	  POCCC = new PeopleField({
	    displayName: "POCCC",
	  });

	  ActionOffice = new LookupField({
	    displayName: "Action Office",
	    type: AuditOrganization,
	    options: auditOrganizationStore,
	    optionsFilter: knockoutLatestExports.pureComputed(() => {
	      // Only allow action offices from this coversheets associated request
	      const request = knockoutLatestExports.unwrap(this.ReqNum.Value);
	      if (!request) return (val) => val;

	      const requestActionOffices = knockoutLatestExports.unwrap(request.ActionOffice.Value);

	      return (opt) => requestActionOffices.includes(opt);
	    }),
	    entitySet: appContext.AuditOrganizations,
	    lookupCol: "Title",
	    isRequired: true,
	  });

	  ActiveViewers = new BlobField({
	    displayName: "Active Viewers",
	    entityType: ActiveViewer,
	    multiple: true,
	  });

	  activeViewersComponent = new ActiveViewersComponent({
	    entity: this,
	    fieldName: "ActiveViewers",
	  });

	  async uploadResponseDocFile(file) {
	    const fileMetadata = {
	      Title: file.name,
	      ReqNumId: this.ReqNum.Value().ID,
	      ResIDId: this.ID,
	    };

	    const { appContext } = await Promise.resolve().then(function () { return application_db_context; });

	    return await appContext.AuditResponseDocs.UploadFileToFolderAndUpdateMetadata(
	      file,
	      file.name,
	      this.Title.Value(),
	      fileMetadata
	    );
	  }

	  markClosed() {
	    this.ResStatus.Value(AuditResponseStates.Closed);
	    this.ClosedDate.set(new Date());
	    this.ClosedBy.set(currentUser());
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "SampleNumber",
	      "ResStatus",
	      "ReturnReason",
	      "Comments",
	      "ClosedDate",
	      "ClosedBy",
	      "POC",
	      "POCCC",
	      "ReqNum",
	      "ActionOffice",
	      "ActiveViewers",
	    ],
	    NewForm: ["ReqNum", "ActionOffice", "SampleNumber", "Comments"],
	    EditForm: [
	      "ReqNum",
	      "SampleNumber",
	      "Title",
	      "ActionOffice",
	      "ResStatus",
	      "ReturnReason",
	      "Comments",
	      "ClosedDate",
	      "ClosedBy",
	      "POC",
	      "POCCC",
	    ],
	    IACanUpdate: [
	      "Title",
	      "ActionOffice",
	      "ResStatus",
	      "ReturnReason",
	      "Comments",
	      "ClosedDate",
	      "ClosedBy",
	      "POC",
	      "POCCC",
	    ],
	    IAUpdateClosed: ["ResStatus", "ClosedDate", "ClosedBy"],
	  };

	  static ListDef = {
	    name: "AuditResponses",
	    title: "AuditResponses",
	  };
	}

	class AuditBulkResponse extends AuditResponse {
	  constructor(params) {
	    super(params);
	  }

	  // Title = new TextField({
	  //   displayName: "Sample Number",
	  // });

	  // Comments = new TextAreaField({
	  //   displayName: "Comments",
	  // });

	  // POC = new PeopleField({
	  //   displayName: "POC",
	  // });

	  // POCCC = new PeopleField({
	  //   displayName: "POCCC",
	  // });

	  // ActionOffice = new LookupField({
	  //   displayName: "Action Office",
	  //   type: AuditOrganization,
	  //   options: auditOrganizationStore,
	  //   entitySet: appContext.AuditOrganizations,
	  // });

	  toResponse(request) {
	    const response = new AuditResponse();
	    // response.ReqNum.Value(request);
	    // response.SampleNumber.set(this.Title.get());
	    // response.Comments.set(this.Comments.get());
	    // response.POC.set(this.POC.get());
	    // response.POCCC.set(this.POCCC.get());
	    // response.ActionOffice.Value(this.ActionOffice.Value());

	    response.fromJSON(this.toJSON());
	    // response.ReqNum.Value(request);
	    return response;
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "SampleNumber",
	      "Comments",
	      "POC",
	      "POCCC",
	      "ActionOffice",
	    ],
	  };

	  static ListDef = {
	    name: "AuditBulkResponses",
	    title: "AuditBulkResponses",
	  };
	}

	const AuditResponseDocStates = {
	  Open: "Open",
	  Submitted: "Submitted",
	  SentToQA: "Sent to QA",
	  Approved: "Approved",
	  Rejected: "Rejected",
	  Archived: "Archived",
	  MarkedForDeletion: "Marked for Deletion",
	};

	class AuditResponseDoc extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  Title = new TextField({
	    displayName: "Name",
	  });

	  ReceiptDate = new DateField({
	    displayName: "Receipt Date",
	    type: dateFieldTypes.date,
	  });

	  DocumentStatus = new SelectField({
	    displayName: "Document Status",
	    options: Object.values(AuditResponseDocStates),
	  });

	  RejectReason = new TextAreaField({
	    displayName: "Reject Reason",
	  });

	  ReqNum = new LookupField({
	    displayName: "Request Number",
	    type: AuditRequest,
	    entitySet: appContext.AuditRequests,
	  });

	  ResID = new LookupField({
	    displayName: "Response ID",
	    type: AuditResponse,
	    entitySet: appContext.AuditResponses,
	  });

	  FileName = new TextField({
	    displayName: "Name",
	    systemName: "FileLeafRef",
	  });

	  FileRef = new TextField({
	    displayName: "File Link",
	    systemName: "FileRef",
	  });

	  Modified = new DateField({
	    displayName: "Modified",
	    type: dateFieldTypes.datetime,
	  });

	  Editor = new PeopleField({
	    displayName: "Modified By",
	  });

	  Created = new DateField({
	    displayName: "Created",
	    type: dateFieldTypes.datetime,
	  });

	  FileSizeDisplay = new TextField({
	    displayName: "File",
	  });

	  File_x0020_Type = new TextField({
	    displayName: "File Type",
	    systemName: "File_x0020_Type",
	  });

	  CheckoutUser = new PeopleField({
	    displayName: "Checked Out To",
	  });

	  markApprovedForRO(newFileName) {
	    this.DocumentStatus.Value(AuditResponseDocStates.Approved);
	    this.RejectReason.Value("");
	    if (this.FileName.Value() != newFileName) this.FileName.Value(newFileName);
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "ReceiptDate",
	      "DocumentStatus",
	      "RejectReason",
	      "ReqNum",
	      "ResID",
	      "FileLeafRef",
	      "FileRef",
	      "FileSizeDisplay",
	      "File_x0020_Type",
	      "CheckoutUser",
	      "Modified",
	      "Editor",
	      "Created",
	    ],
	    EditForm: [
	      "FileLeafRef",
	      "Title",
	      "ReceiptDate",
	      "DocumentStatus",
	      "RejectReason",
	      "ReqNum",
	      "ResID",
	    ],
	    AOCanUpdate: [
	      "Title",
	      "ReceiptDate",
	      "DocumentStatus",
	      "RejectReason",
	      "FileLeafRef",
	    ],
	    UpdateDocStatus: ["Title", "FileLeafRef", "DocumentStatus"],
	  };

	  static ListDef = {
	    name: "AuditResponseDocs",
	    title: "AuditResponseDocs",
	    isLib: true,
	  };
	}

	class AuditResponseDocRO extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  markApprovedForRO(request, response) {
	    this.ReqNum = request.Title;
	    this.ResID = response.Title.toString();
	    this.FiscalYear = request.FiscalYear.toString();
	    this.ReqSubject = request.ReqSubject.toString();
	    this.RequestingOffice = request.RequestingOffice.Value()?.UserGroup?.Title;
	  }

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "ReqNum",
	      "ResID",
	      "FiscalYear",
	      "RequestingOffice",
	      "ReqSubject",
	      "FileLeafRef",
	      "FileRef",
	    ],
	    ApprovedForROUpdate: [
	      "ReqNum",
	      "ResID",
	      "FiscalYear",
	      "ReqSubject",
	      "RequestingOffice",
	    ],
	  };

	  static ListDef = {
	    name: "AuditResponseDocsRO",
	    title: "AuditResponseDocsRO",
	  };
	}

	class AuditROEmailLog extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  Responses = "";
	  ResponseCount = 0;

	  static Views = {
	    All: [
	      "ID",
	      "Title",
	      "RequestingOffice",
	      "Responses",
	      "ResponseCount",
	      "SentEmail",
	    ],
	  };

	  static ListDef = {
	    name: "AuditROEmailLog",
	    title: "AuditROEmailLog",
	    fields: AuditROEmailLog.Views.All,
	  };
	}

	class AuditConfiguration extends ConstrainedEntity {
	  constructor(params) {
	    super(params);
	  }

	  key;
	  value;

	  FieldMap = {
	    Title: {
	      get: () => this.key,
	      set: (val) => (this.key = val),
	    },
	    Value: {
	      get: () => this.value,
	      set: (val) => (this.value = val),
	    },
	  };
	  static Views = {
	    All: ["ID", "Title", "Value"],
	  };

	  static ListDef = {
	    name: "Config",
	    title: "Config",
	  };
	}

	class DbContext {
	  constructor() {}

	  SitePages = new EntitySet(SitePage);

	  utilities = {
	    copyFileAsync,
	  };
	  virtualSets = new Map();

	  Set = (entityType) => {
	    const key = entityType.ListDef.name;

	    // If we have a defined entityset, return that
	    const set = Object.values(this)
	      .filter((val) => val.constructor.name == EntitySet.name)
	      .find((set) => set.ListDef?.name == key);
	    if (set) return set;

	    if (!this.virtualSets.has(key)) {
	      const newSet = new EntitySet(entityType);
	      this.virtualSets.set(key, newSet);
	      return newSet;
	    }
	    return this.virtualSets.get(key);
	  };
	}

	class EntitySet {
	  constructor(entityType) {
	    if (!entityType.ListDef) {
	      console.error("Missing entityType listdef for", entityType);
	      return;
	    }

	    // Check if the object we passed in defines a ListDef
	    this.entityType = entityType;

	    try {
	      const allFieldsSet = new Set();
	      entityType.Views?.All?.map((field) => allFieldsSet.add(field));

	      // TODO: this is bombing due to circular dependencies,
	      // all fields need to be in View
	      // const newEntity = new this.entityType({ ID: null, Title: null });
	      // if (newEntity.FieldMap) {
	      //   Object.keys(newEntity.FieldMap).map((field) => allFieldsSet.add(field));
	      // }
	      // const fieldMapKeysSet = new Set(...);
	      // entityType.Views.All.map((field) => fieldMapKeysSet.add(field));
	      this.AllDeclaredFields = [...allFieldsSet];
	    } catch (e) {
	      console.warn("Could not instantiate", entityType), console.warn(e);
	      this.AllDeclaredFields = entityType.Views?.All ?? [];
	    }

	    this.ListDef = entityType.ListDef;
	    this.Views = entityType.Views;
	    this.Title = entityType.ListDef.title;
	    this.Name = entityType.ListDef.name;

	    this.ListRef = new SPList(entityType.ListDef);

	    this.entityConstructor =
	      this.entityType.FindInStore || this.entityType.Create || this.entityType;
	  }

	  // Queries
	  FindById = async (id, fields = this.AllDeclaredFields) => {
	    // Hit our cache first

	    const result = await this.ListRef.getById(id, fields);
	    if (!result) return null;
	    const newEntity = new this.entityType(result);
	    mapObjectToEntity(result, newEntity);
	    return newEntity;
	  };

	  // TODO: Feature - Queries should return options to read e.g. toList, first, toCursor
	  /**
	   * Takes an array of columns and filter values with an optional comparison operator
	   * @param {[{column, op?, value}]} columnFilters
	   * @param {*} param1
	   * @param {*} param2
	   * @param {*} fields
	   * @param {*} includeFolders
	   * @returns
	   */
	  FindByColumnValue = async (
	    columnFilters,
	    { orderByColumn, sortAsc },
	    { count = null, includePermissions = false, includeFolders = false },
	    fields = this.AllDeclaredFields
	  ) => {
	    // if we pass in a count, we are expecting a cursor result
	    const returnCursor = count != null;
	    count = count ?? 5000;
	    // else, we should apply a count of 5000 and keep fetching

	    const results = await this.ListRef.findByColumnValueAsync(
	      columnFilters,
	      { orderByColumn, sortAsc },
	      { count, includePermissions, includeFolders },
	      fields
	    );

	    let cursor = {
	      _next: results._next,
	      results: results.results.map((item) => {
	        const newEntity = new this.entityConstructor(item);
	        mapObjectToEntity(item, newEntity);
	        return newEntity;
	      }),
	    };

	    if (returnCursor) {
	      return cursor;
	    }

	    const resultObj = {
	      results: cursor.results,
	    };

	    while (cursor._next) {
	      cursor = await this.LoadNextPage(cursor);
	      resultObj.results = resultObj.results.concat(cursor.results);
	    }

	    return resultObj;
	  };

	  LoadNextPage = async (cursor) => {
	    const results = await this.ListRef.loadNextPage(cursor);
	    return {
	      _next: results._next,
	      results: results.results.map((item) => {
	        const newEntity = new this.entityType(item);
	        mapObjectToEntity(item, newEntity);
	        return newEntity;
	      }),
	    };
	  };

	  /**
	   * Return all items in list
	   */
	  ToList = async (refresh = false) => {
	    const fields = this.Views.All;
	    const results = await this.ListRef.getListItemsAsync({ fields });
	    const allItems = results.map((item) => {
	      let entityToLoad = new this.entityType(item);
	      mapObjectToEntity(item, entityToLoad);
	      return entityToLoad;
	    });
	    return allItems;
	  };

	  LoadEntity = async function (entity, refresh = false) {
	    if (!entity.ID) {
	      console.error("entity missing Id", entity);
	      return false;
	    }

	    const result = await this.ListRef.getById(
	      entity.ID,
	      this.AllDeclaredFields
	    );
	    if (!result) return null;

	    mapObjectToEntity(result, entity);
	    return entity;
	  };

	  // Mutators
	  AddEntity = async function (entity, folderPath) {
	    const creationfunc = mapEntityToObject.bind(this);
	    const writeableEntity = creationfunc(entity, this.AllDeclaredFields);
	    const newId = await this.ListRef.createListItemAsync(
	      writeableEntity,
	      folderPath
	    );
	    mapObjectToEntity({ ID: newId }, entity);
	    return;
	  };

	  UpdateEntity = async function (entity, fields = null) {
	    const writeableEntity = mapEntityToObject.bind(this)(entity, fields);
	    writeableEntity.ID =
	      typeof entity.ID == "function" ? entity.ID() : entity.ID;
	    return this.ListRef.updateListItemAsync(writeableEntity);
	  };

	  RemoveEntity = async function (entity) {
	    if (!entity.ID) return false;
	    await this.ListRef.deleteListItemAsync(entity.ID);
	    return true;
	  };

	  RemoveEntityById = function (entityId) {
	    return this.ListRef.deleteListItemAsync(entityId);
	  };

	  // Permissions
	  GetItemPermissions = function (entity) {
	    return this.ListRef.getItemPermissionsAsync(entity.ID);
	  };

	  SetItemPermissions = async function (entity, valuePairs, reset = false) {
	    // const salValuePairs = valuePairs
	    //   .filter((vp) => vp[0] && vp[1])
	    //   .map((vp) => [vp[0].getKey(), vp[1]]);
	    return this.ListRef.setItemPermissionsAsync(entity.ID, valuePairs, reset);
	  };

	  GetRootPermissions = function () {
	    return this.ListRef.getListPermissions();
	  };

	  SetRootPermissions = async function (itemPermissions, reset) {
	    // const valuePairs = itemPermissions.getValuePairs();
	    await this.ListRef.setListPermissionsAsync(itemPermissions, reset);
	  };

	  // Folder Methods
	  GetFolderUrl = function (relFolderPath = "") {
	    return this.ListRef.getServerRelativeFolderPath(relFolderPath);
	  };

	  GetItemsByFolderPath = async function (
	    folderPath,
	    fields = this.AllDeclaredFields
	  ) {
	    //return this.ListRef.getFolderContentsAsync(folderPath, fields);
	    const results = await this.ListRef.getFolderContentsAsync(
	      folderPath,
	      fields
	    );
	    return results.map((result) => {
	      const newEntity = new this.entityType(result);
	      mapObjectToEntity(result, newEntity);
	      return newEntity;
	    });
	  };

	  UpsertFolderPath = async function (folderPath) {
	    return this.ListRef.upsertFolderPathAsync(folderPath);
	  };

	  RemoveFolderByPath = async function (folderPath) {
	    const itemResults = await this.FindByColumnValue(
	      [{ column: "FileLeafRef", value: folderPath }],
	      {},
	      {},
	      ["ID", "Title", "FileLeafRef"],
	      true
	    );
	    const entities = itemResults.results ?? [];
	    for (const entity of entities) {
	      await this.RemoveEntityById(entity.ID);
	    }
	  };

	  // Permissions
	  SetFolderReadOnly = async function (relFolderPath) {
	    return this.ListRef.setFolderReadonlyAsync(relFolderPath);
	  };

	  SetFolderPermissions = async function (folderPath, valuePairs, reset = true) {
	    const salValuePairs = valuePairs
	      .filter((vp) => vp[0] && vp[1])
	      .map((vp) => [vp[0].getKey(), vp[1]]);
	    return this.ListRef.setFolderPermissionsAsync(
	      folderPath,
	      salValuePairs,
	      reset
	    );
	  };

	  EnsureFolderPermissions = async function (relFolderPath, valuePairs) {
	    // Slightly more expensive operation to verify a user has the required permissions
	    // before adding them. This will cut down on the number of unique permissions in the
	    // system since a user may already have the permission via group membership.
	    const salValuePairs = valuePairs
	      .filter((vp) => vp[0] && vp[1])
	      .map((vp) => [vp[0].LoginName ?? vp[0].Title, vp[1]]);
	    return this.ListRef.ensureFolderPermissionsAsync(
	      relFolderPath,
	      salValuePairs
	    );
	  };

	  // Other Functions
	  // Upload file directly from browser "File" object e.g. from input field
	  UploadFileToFolderAndUpdateMetadata = async function (
	    file,
	    filename,
	    folderPath,
	    updates,
	    progress
	  ) {
	    const itemId = await this.ListRef.uploadFileToFolderAndUpdateMetadata(
	      file,
	      filename,
	      folderPath,
	      updates,
	      progress
	    );
	    const item = await this.ListRef.getById(itemId, this.AllDeclaredFields);
	    const newEntity = new this.entityConstructor(item);
	    mapObjectToEntity(item, newEntity);
	    return newEntity;
	  };

	  // Open file upload Modal
	  UploadNewDocument = async function (folderPath, args) {
	    return this.ListRef.uploadNewDocumentAsync(
	      folderPath,
	      "Attach a New Document",
	      args
	    );
	  };

	  CopyFolderContents = async function (sourceFolder, targetFolder) {
	    return this.ListRef.copyFilesAsync(sourceFolder, targetFolder);
	  };

	  // Form Methods
	  ShowForm = async function (name, title, args) {
	    return new Promise((resolve, reject) =>
	      this.ListRef.showModal(name, title, args, resolve)
	    );
	  };

	  CheckInDocument = async function (fileRef) {
	    return new Promise((resolve) =>
	      this.ListRef.showCheckinModal(fileRef, resolve)
	    );
	  };

	  EnsureList = async function () {};
	}

	function mapObjectToEntity(inputObject, targetEntity) {
	  if (!inputObject || !targetEntity) return;
	  // Takes an object and attempts to map it to the target entity
	  Object.keys(inputObject).forEach((key) => {
	    mapValueToEntityProperty(key, inputObject[key], targetEntity);
	  });
	}

	function mapValueToEntityProperty(propertyName, inputValue, targetEntity) {
	  //1. Check if the targetEntity has a fieldmapping for this property
	  if (targetEntity.FieldMap && targetEntity.FieldMap[propertyName]) {
	    mapObjectToViewField(inputValue, targetEntity.FieldMap[propertyName]);
	    return;
	  }
	  // 2. This is just a regular property, set it
	  if (
	    targetEntity[propertyName] &&
	    typeof targetEntity[propertyName] == "function"
	  ) {
	    targetEntity[propertyName](inputValue);
	    return;
	  }
	  targetEntity[propertyName] = inputValue;
	  return;
	}

	function mapObjectToViewField(inVal, fieldMapping) {
	  // Fieldmap has Three options for setting,
	  // 1. observable - the fieldmap represents an observable
	  // 2. setter - the fieldmap exposes a setter
	  // 3. factory/obs - the fieldmap exposes a factory and an observable to put the result.

	  if (typeof fieldMapping == "function") {
	    fieldMapping(inVal);
	    return;
	  }

	  if (typeof fieldMapping != "object") {
	    fieldMapping = inVal;
	    return;
	  }

	  if (fieldMapping.set && typeof fieldMapping.set == "function") {
	    fieldMapping.set(inVal);
	    return;
	  }

	  if (fieldMapping.obs) {
	    if (!inVal) {
	      fieldMapping.obs(null);
	      return;
	    }
	    // If the input value is an array, then we are putting an array into the observable.
	    const outVal = Array.isArray(inVal)
	      ? inVal.map((item) => generateObject(item, fieldMapping))
	      : generateObject(inVal, fieldMapping);

	    fieldMapping.obs(outVal);
	    return;
	  }

	  fieldMapping = inVal;
	  //throw "Error setting fieldmap?";
	}

	function generateObject(inVal, fieldMap) {
	  // If the fieldMap provides a factory, use that, otherwise return the value
	  return fieldMap.factory ? fieldMap.factory(inVal) : inVal;
	}

	function mapEntityToObject(input, selectedFields = null) {
	  const entity = {};
	  // We either predefine the fields in the ListDef, or provide a complete fieldmap
	  const allWriteableFieldsSet = new Set([]);
	  if (this?.ListDef?.fields) {
	    this.ListDef.fields.forEach((field) => allWriteableFieldsSet.add(field));
	  }
	  if (this?.AllDeclaredFields) {
	    this.AllDeclaredFields.map((field) => allWriteableFieldsSet.add(field));
	  }
	  if (input.FieldMap) {
	    Object.keys(input.FieldMap).forEach((field) =>
	      allWriteableFieldsSet.add(field)
	    );
	  }
	  const allWriteableFields = [...allWriteableFieldsSet];

	  const fields =
	    selectedFields ??
	    (input.FieldMap ? Object.keys(input.FieldMap) : null) ??
	    Object.keys(input);

	  fields
	    .filter((field) => allWriteableFields.includes(field))
	    .map((field) => {
	      if (input.FieldMap && input.FieldMap[field]) {
	        const storedFieldKey = input.FieldMap[field].systemName ?? field;
	        entity[storedFieldKey] = mapViewFieldToValue(input.FieldMap[field]);
	        return;
	      }
	      entity[field] = input[field];
	    });

	  return entity;
	}

	function mapViewFieldToValue(fieldMap) {
	  // Fieldmap has Three options for getting,
	  // 1. observable - the fieldmap represents an observable or other function that returns a value
	  // 2. get - the fieldmap is an object that exposes a getter function
	  // 3. factory/obs - the fieldmap is an object exposes a factory and an observable.
	  if (typeof fieldMap == "function") {
	    return fieldMap();
	  }
	  if (fieldMap.get && typeof fieldMap.get == "function") {
	    return fieldMap.get();
	  }

	  if (fieldMap.obs) {
	    return fieldMap.obs();
	  }

	  return fieldMap;

	  // console.error("Error setting fieldMap", fieldMap);
	  // throw "Error getting fieldmap";
	}

	class ApplicationDbContext extends DbContext {
	  constructor() {
	    super();
	  }

	  AuditBulkRequests = new EntitySet(AuditBulkRequest);

	  AuditBulkResponses = new EntitySet(AuditBulkResponse);

	  AuditConfigurations = new EntitySet(AuditConfiguration);

	  AuditCoversheets = new EntitySet(AuditCoversheet);

	  AuditEmails = new EntitySet(AuditEmail);

	  AuditOrganizations = new EntitySet(AuditOrganization);

	  AuditResponses = new EntitySet(AuditResponse);

	  AuditResponseDocs = new EntitySet(AuditResponseDoc);

	  AuditResponseDocsRO = new EntitySet(AuditResponseDocRO);

	  AuditRequests = new EntitySet(AuditRequest);

	  AuditRequestsInternals = new EntitySet(AuditRequestsInternal);

	  AuditROEmailsLog = new EntitySet(AuditROEmailLog);
	}
	let appContext;

	function initAppcontext() {
	  appContext = new ApplicationDbContext();
	}

	var application_db_context = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ApplicationDbContext: ApplicationDbContext,
		get appContext () { return appContext; },
		initAppcontext: initAppcontext
	});

	const taskStates = {
	  pending: "Pending",
	  aging: "Aging",
	  completed: "Completed",
	};

	class Task {
	  constructor({ msg, blocking }) {
	    this.msg = msg;
	    this.blocking = blocking;
	    this.Status(taskStates.pending);
	  }

	  msg;
	  blocking;
	  Status = knockoutLatestExports.observable();

	  timeout = window.setTimeout(() => {
	    console.warn("this task is aging:", this);
	    this.Status(taskStates.aging);
	  }, 5000);

	  markComplete = () => {
	    window.clearTimeout(this.timeout);
	    this.Status(taskStates.completed);
	  };

	  // Should this task block user input?
	  IsBlocking = knockoutLatestExports.pureComputed(
	    () => this.blocking && this.Status() != taskStates.completed
	  );

	  addStatus = (status) => {
	    this.Status(status);
	    window.clearTimeout(this.timeout);
	  };
	}

	class ProgressTask {
	  constructor({ msg, blocking }) {
	    this.msg = msg;
	    this.blocking = blocking;
	    this.Status(taskStates.pending);
	  }

	  msg;
	  blocking;
	  Status = knockoutLatestExports.observable();

	  updateProgress = ({ percentDone }) => {
	    this.Status(`${parseInt(percentDone * 100)}%`);
	  };

	  setTimeout = () =>
	    window.setTimeout(() => {
	      console.warn("this task is aging:", this);
	      this.Status(`${this.Status()} (${taskStates.aging})`);
	    }, 50000);

	  resetTimeout = () => {
	    window.clearTimeout(this.timeout);
	    this.timeout = this.setTimeout();
	  };

	  timeout = this.setTimeout();

	  markComplete = () => {
	    window.clearTimeout(this.timeout);
	    this.Status(taskStates.completed);
	  };

	  // Should this task block user input?
	  IsBlocking = knockoutLatestExports.pureComputed(
	    () => this.blocking && this.Status() != taskStates.completed
	  );

	  static Create(params) {
	    return new ProgressTask(params);
	  }
	}

	const runningTasks = knockoutLatestExports.observableArray();

	const blockingTasks = knockoutLatestExports.pureComputed(() => {
	  return runningTasks().filter((task) => task.IsBlocking()) ?? [];
	});

	class TaskDef {
	  constructor(msg, blocking = false, type = null) {
	    this.msg = msg;
	    this.blocking = blocking;
	    this.type = type;
	  }
	  msg;
	  blocking;
	  type;
	}

	const taskDefs = {
	  init: { msg: "Initializing the Application", blocking: true },
	  save: { msg: "Saving Request", blocking: true },
	  newRequest: { msg: "Processing New Request", blocking: true },
	  cancelAction: { msg: "Cancelling Action", blocking: true },
	  view: { msg: "Viewing Request", blocking: false },
	  refresh: { msg: "Refreshing Request", blocking: false },
	  permissionsRequest: {
	    msg: "Updating Request Item Permissions",
	    blocking: true,
	  },
	  permissionsRequestAOSpecialPerms: (actionOfficeName) => {
	    return {
	      msg: `Ensuring ${actionOfficeName} Permissions on Request`,
	      blocking: true,
	    };
	  },
	  permissionsResponse: (responseTitle) => {
	    return {
	      msg: "Updating Response Item Permissions: " + responseTitle,
	      blocking: true,
	    };
	  },
	  permissionsResponseFolder: (responseTitle) => {
	    return {
	      msg: "Ensuring Response Folder Item Permissions: " + responseTitle,
	      blocking: true,
	    };
	  },
	  ensureResponseDocFolder: (folderName) => {
	    return {
	      msg: "Ensuring Response Folder: " + folderName,
	      blocking: true,
	    };
	  },
	  permissionsResponseAndFolder: (responseTitle) => {
	    return {
	      msg: "Updating Response and Folder Item Permissions: " + responseTitle,
	      blocking: true,
	    };
	  },
	  permissionsEmailFolder: {
	    msg: "Updating Email Folder Permissions",
	    blocking: true,
	  },
	  permissionsCoversheet: (coversheetName) => {
	    return {
	      msg: "Updating Coversheet Permissions: " + coversheetName,
	      blocking: true,
	    };
	  },
	  ensurePagePermissions: (page) =>
	    new TaskDef("Ensuring Page Permissions: " + page),
	  resetPagePermissions: (page) =>
	    new TaskDef("Resetting Page Permissions: " + page, true),
	  ensureListPermissions: (entitySet) =>
	    new TaskDef("Ensuring List Permissions: " + entitySet.ListDef.title),
	  resetListPermissions: (entitySet) =>
	    new TaskDef("Resetting List Permissions: " + entitySet.ListDef.title, true),
	  deleteEmailFolder: { msg: "Deleting Email Folder", blocking: true },
	  newResponse: (responseTitle) => {
	    return {
	      msg: "Submitting new Response: " + responseTitle,
	      blocking: true,
	    };
	  },
	  updateResponse: (responseTitle) => {
	    return {
	      msg: "Updating Response: " + responseTitle,
	      blocking: true,
	    };
	  },
	  deleteResponse: (responseTitle) => {
	    return {
	      msg: "Deleting Response: " + responseTitle,
	      blocking: true,
	    };
	  },
	  closeResponse: (responseTitle) => {
	    return {
	      msg: "Closing Response: " + responseTitle,
	      blocking: true,
	    };
	  },
	  uploadResponseDoc: (responseDocTitle) => {
	    return {
	      msg: "Uploading Response Document: " + responseDocTitle,
	      blocking: true,
	      type: ProgressTask,
	    };
	  },
	  updateResponseDoc: (responseDocTitle) => {
	    return {
	      msg: "Updating Response Document: " + responseDocTitle,
	      blocking: true,
	    };
	  },
	  approveResponseDoc: (responseDocTitle) => {
	    return {
	      msg: "Approving Response Document: " + responseDocTitle,
	      blocking: true,
	    };
	  },
	  deleteResponseDocFolder: (responseTitle) => {
	    return {
	      msg: "Deleting Response Document Folder: " + responseTitle,
	      blocking: true,
	    };
	  },
	  uploadCoversheet: (coversheetName) => {
	    return {
	      msg: "Uploading Coversheet: " + coversheetName,
	      blocking: true,
	      type: ProgressTask,
	    };
	  },
	  updateCoversheet: (coversheetName) => {
	    return {
	      msg: "Updating Coversheet: " + coversheetName,
	      blocking: true,
	    };
	  },
	  deleteCoversheet: (coversheetName) => {
	    return {
	      msg: "Deleting Coversheet: " + coversheetName,
	      blocking: true,
	    };
	  },
	  deleteRequestInternalItem: {
	    msg: "Deleting Request Internal Item",
	    blocking: true,
	  },
	  newComment: { msg: "Submitting Comment", blocking: false },
	  refreshComments: { msg: "Refreshing Comments", blocking: false },
	  notifyComment: { msg: "Sending Comment Email", blocking: false },
	  removeComment: { msg: "Removing Comment", blocking: false },
	  newAction: { msg: "Submitting Action", blocking: false },
	  refreshActions: { msg: "Refreshing Actions", blocking: false },
	  newAttachment: { msg: "Submitting Attachment", blocking: false },
	  refreshAttachments: { msg: "Refreshing Attachments", blocking: false },
	  approve: { msg: "Approving Request", blocking: true },
	  lock: { msg: "Locking Request", blocking: true },
	  closing: { msg: "Closing Request", blocking: true },
	};

	const addTask = (taskDef) => {
	  let newTask;

	  if (taskDef.type) {
	    newTask = taskDef.type.Create(taskDef);
	  } else {
	    newTask = new Task(taskDef);
	  }

	  runningTasks.push(newTask);
	  return newTask;
	};

	const finishTask = function (activeTask) {
	  if (activeTask) {
	    activeTask.markComplete();
	    window.setTimeout(() => removeTask(activeTask), 3000);
	    // runningTasks.remove(activeTask);
	  }
	};

	const removeTask = function (taskToRemove) {
	  runningTasks.remove(taskToRemove);
	};

	var modalDialogTemplate = "<dialog id=\"\" class=\"card bg-dark draggable modal-dialog\" data-bind=\"attr: {id: getUniqueId() }\">\r\n  <!-- Can't use 'with: currentDialog' since we need to register our \r\n      javascript event listeners for grabbing and resizing -->\r\n  <div class=\"card-header bg-dark grabber\">\r\n    <h2 class=\"card-title\" data-bind=\"text: title\"></h2>\r\n    <h2 class=\"card-title\">\r\n      <i class=\"fa-solid fa-xmark pointer\" data-bind=\"click: clickClose\"></i>\r\n    </h2>\r\n  </div>\r\n  <!-- ko if: form -->\r\n  <div class=\"dimmer\" data-bind=\"css: {'active': form.saving }\">\r\n    <span class=\"loader\"></span>\r\n    <ul class=\"\" data-bind=\"foreach: $root.blockingTasks\">\r\n      <li data-bind=\"text: msg + '...'\"></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body\" data-bind=\"component: { name: form.componentName, params: form.params }\"></div>\r\n  <!-- /ko -->\r\n  <!-- ko if: url -->\r\n  <div class=\"card-body\">\r\n    <iframe frameborder=\"0\" data-bind=\"attr: {src: url}\"></iframe>\r\n  </div>\r\n  <!-- /ko -->\r\n  <!-- ko if: html -->\r\n  <div class=\"card-body\" data-bind=\"html: html\"></div>\r\n  <!-- /ko -->\r\n  <div class=\"card-actions\">\r\n    <button style type=\"button\" class=\"btn btn-danger\" data-bind=\"click: clickClose\">\r\n      Cancel\r\n    </button>\r\n    <!-- ko if: url -->\r\n    <button type=\"button\" class=\"btn btn-success\" data-bind=\"click: clickSubmit\">\r\n      Ok\r\n    </button>\r\n    <!-- /ko -->\r\n  </div>\r\n</dialog>\r\n";

	const componentName = "modal-dialog-component";

	const currentDialogs = knockoutLatestExports.observableArray();

	class ModalDialogModule {
	  constructor(dialogOpts) {
	    this.dialogOpts = dialogOpts;
	    this.title = dialogOpts.title;
	    this.dialogReturnValueCallback = dialogOpts.dialogReturnValueCallback;

	    // this.url = dialogOpts.url;
	    this.form = dialogOpts.form;

	    if (this.form) {
	      if (this.form?.onComplete) {
	        alert("Pass the form onComplete to the modal dialog!");
	        return;
	      }
	      this.form.onComplete = this.close.bind(this);
	    }

	    if (dialogOpts.url) {
	      const parsedUrl = new URL(
	        dialogOpts.url.startsWith("http")
	          ? dialogOpts.url
	          : window.location.origin + dialogOpts.url
	      );
	      parsedUrl.searchParams.set("env", "WebView");
	      this.url = parsedUrl.href;
	    }

	    if (dialogOpts.html) {
	      this.html = dialogOpts.html;
	    }

	    this.toggle;
	  }

	  url = null;
	  html = null;

	  toggle = (show = null) => {
	    if (show == null) show = !this.dlgElement.hasAttribute("open");

	    show ? this.showModal() : this.hide();
	  };

	  showModal = () => {
	    this.dlgElement.showModal();
	    this.dlgElement.classList.add("active");
	  };

	  clickClose = () => {
	    this.close(false);
	  };

	  clickSubmit = () => {
	    this.close(true);
	  };

	  hide = () => {
	    this.dlgElement.close();
	    this.dlgElement.classList.remove("active");
	  };

	  close(result) {
	    this.dlgElement.close();
	    this.dlgElement.classList.remove("active");
	    if (this.dialogReturnValueCallback) this.dialogReturnValueCallback(result);
	    currentDialogs.remove(this.dialogOpts);
	  }

	  _id;
	  getUniqueId = () => {
	    if (!this._id) {
	      this._id = "field-" + Math.floor(Math.random() * 10000);
	    }
	    return this._id;
	  };

	  koDescendantsComplete = function (node) {
	    this.dlgElement = node.querySelector("dialog");
	    dragElement(this.dlgElement);
	    resizeDialog(this.dlgElement, this.dialogOpts);
	    this.showModal();
	  };
	}

	directRegisterComponent(componentName, {
	  template: modalDialogTemplate,
	  viewModel: ModalDialogModule,
	});

	function resizeDialog(elmnt, options) {
	  if (options.autoSize) ;
	  const autoWidth = options.autoSize
	    ? Math.max(window.visualViewport.width - 200, 550)
	    : 550;

	  const autoHeight = options.autoSize
	    ? Math.max(window.visualViewport.height - 200, 750)
	    : null;
	  const width = options.width ?? autoWidth;
	  const height = options.height ?? autoHeight;

	  elmnt.style.width = width + "px";
	  if (height) elmnt.style.height = height + "px";
	  elmnt.style.top = "125px";
	  elmnt.style.left = (window.GetViewportWidth() - width) / 2 + "px";
	}

	// TODO: this should be in a utility class or something
	function dragElement(elmnt) {
	  var pos1 = 0,
	    pos2 = 0,
	    pos3 = 0,
	    pos4 = 0;

	  // elmnt.style.top = elmnt.style.top

	  const dragger = elmnt.querySelector(".grabber");
	  if (dragger) {
	    // if present, the header is where you move the DIV from:
	    dragger.onmousedown = dragMouseDown;
	  } else {
	    // otherwise, move the DIV from anywhere inside the DIV:
	    elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    document.onmouseup = closeDragElement;
	    // call a function whenever the cursor moves:
	    document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    // set the element's new position:
	    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
	    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	  }

	  function closeDragElement() {
	    // stop moving when mouse button is released:
	    document.onmouseup = null;
	    document.onmousemove = null;
	  }
	}

	async function uploadResponseDocFile(response, file) {
	  const uploadResponseDocTask = addTask(taskDefs.uploadResponseDoc(file.name));
	  const fileMetadata = {
	    Title: file.name,
	    ReqNumId: response.ReqNum.Value().ID,
	    ResIDId: response.ID,
	    DocumentStatus: AuditResponseDocStates.Open,
	  };

	  await appContext.AuditResponseDocs.UploadFileToFolderAndUpdateMetadata(
	    file,
	    file.name,
	    response.Title.Value(),
	    fileMetadata,
	    ({ currentBlock, totalBlocks }) =>
	      uploadResponseDocTask.updateProgress({
	        percentDone: currentBlock / totalBlocks,
	      })
	  );
	  finishTask(uploadResponseDocTask);
	}

	async function getAllItems(listTitle, fields = null) {
	  let listItemsResults = [];
	  let listItems;

	  const currCtx = new SP.ClientContext.get_current();
	  const web = currCtx.get_web();

	  const list = web.get_lists().getByTitle(listTitle);

	  const viewFields = viewFieldsStringBuilder(fields);

	  const camlQuery = new SP.CamlQuery();
	  camlQuery.set_viewXml(
	    `<View Scope="RecursiveAll"><Query></Query><RowLimit>5000</RowLimit>${viewFields}</View>`
	  );

	  let position = new SP.ListItemCollectionPosition();
	  position.set_pagingInfo("Paged=TRUE");

	  while (position != null) {
	    console.log("Legacy Helper - getAllItems", listTitle, position);
	    camlQuery.set_listItemCollectionPosition(position);

	    listItems = list.getItems(camlQuery);

	    currCtx.load(listItems);

	    await executeQuery(currCtx).catch((sender, args) => {
	      console.warn(sender);
	    });

	    const listEnumerator = listItems.getEnumerator();
	    while (listEnumerator.moveNext()) {
	      listItemsResults.push(listEnumerator.get_current());
	    }

	    position = listItems.get_listItemCollectionPosition();
	  }

	  return listItemsResults;
	}

	function viewFieldsStringBuilder(fields) {
	  if (!fields) return "";
	  return `
  <ViewFields>${fields.map(
    (field) => `<FieldRef Name="${field}"></FieldRef>`
  )}</ViewFields>
  `;
	}

	var appStyles = "/* Properties */\r\n.audit {\r\n  --bg-very-light-color: #edf1f2;\r\n  --bg-light-color: #eefbfb;\r\n  --bg-dark-color: #1d2b36;\r\n  --bg-dark-secondary-color: #2a3c48;\r\n\r\n  --text-primary: #1e2a36;\r\n\r\n  --success-color: #4fbf77;\r\n  --success-hover-color: #1f8f46;\r\n\r\n  --warn-color: #f0bb51;\r\n  --warn-hover-color: #d6930c;\r\n\r\n  --danger-color: rgb(182, 49, 49);\r\n  --danger-hover-color: rgb(179, 26, 26);\r\n  --danger-disabled-color: rgb(203, 113, 113);\r\n\r\n  --primary-color: #3bbfc3;\r\n  --primary-muted-color: #b9dfe2;\r\n\r\n  --secondary-color: #3c474d;\r\n}\r\n\r\n/* Main Layout */\r\n.audit {\r\n  /* overflow-x: auto; */\r\n  height: calc(100vh - 140px);\r\n}\r\n\r\n.audit-body {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: stretch;\r\n  height: 100%;\r\n}\r\n\r\n#divLoading {\r\n  color: lightgray;\r\n  padding: 0.2rem 0;\r\n}\r\n\r\n.audit-body .quick-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  /* height: calc(100vh - 96px); */\r\n  position: sticky;\r\n  top: 0;\r\n  width: 4rem;\r\n  transition: width 0.6s ease-in-out;\r\n  color: white;\r\n}\r\n\r\n.audit-body .quick-info-container.active {\r\n  min-width: 356px;\r\n  width: 356px;\r\n  max-width: 356px;\r\n}\r\n\r\n.audit-body .quick-info-container .quick-info-toolbar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--bg-dark-secondary-color);\r\n  align-items: stretch;\r\n}\r\n\r\n.audit-body .quick-info-container.active .quick-info-toolbar button {\r\n  text-align: start;\r\n  direction: rtl;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.audit-body .quick-info {\r\n  background-color: var(--bg-dark-color);\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  scrollbar-gutter: stable;\r\n  scrollbar-width: thin;\r\n  gap: 0.75rem;\r\n  padding: 0 0.5rem 0 0.5rem;\r\n}\r\n\r\n.audit-body .quick-info-container.active .quick-info {\r\n  display: flex;\r\n}\r\n\r\n.audit-body .quick-info .status-set-container {\r\n  color: white;\r\n  background-color: #2a3c48;\r\n  border-radius: 6px;\r\n  /* border-color: var(--primary-color);  */\r\n  padding: 0.5rem;\r\n}\r\n\r\n.audit-body .quick-info details summary {\r\n  /* text-decoration: none; */\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.audit-body .quick-info details summary:hover {\r\n  /* text-decoration: none; */\r\n  text-decoration: underline;\r\n}\r\n\r\n.audit-body .quick-info a {\r\n  /* text-decoration: none; */\r\n  color: var(--primary-muted-color);\r\n}\r\n\r\n.audit-body .reports-container {\r\n  /* min-width: 1200px; */\r\n  padding: 1rem;\r\n  overflow-y: auto;\r\n  flex: 1;\r\n}\r\n\r\n.audit-body .quick-links {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  max-width: fit-content;\r\n  align-items: start;\r\n  padding: 0.75rem;\r\n  border: 1px solid var(--secondary-color);\r\n}\r\n\r\n.audit-body .quick-links a {\r\n  /* text-decoration: none; */\r\n  font-weight: bold;\r\n  color: var(--text-primary);\r\n}\r\n.audit-body .quick-links a:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.audit-body .quick-links.secondary {\r\n  font-weight: 500;\r\n  border: none;\r\n  padding: 0.25rem 0 0.15rem 0;\r\n  flex-direction: row;\r\n  font-size: 1rem;\r\n}\r\n\r\n.ui-tabs-nav {\r\n  display: flex;\r\n  gap: 0.25rem;\r\n  color: white;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.ui-tabs-nav li {\r\n  text-decoration: none;\r\n  background-color: var(--secondary-color);\r\n  padding: 0.75rem;\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.ui-tabs-secondary .ui-tabs-nav li {\r\n  border: 1px solid var(--secondary-color);\r\n  background-color: transparent;\r\n  color: var(--secondary-color);\r\n  padding: 0.5rem;\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.ui-tabs-nav li.active {\r\n  text-decoration: none;\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.ui-tabs-secondary .ui-tabs-nav li.active {\r\n  border: 1px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background-color: transparent;\r\n}\r\n\r\n.ui-tab-panel {\r\n  display: none;\r\n  padding-top: 0.25rem;\r\n}\r\n\r\n.ui-tab-panel.active {\r\n  display: revert;\r\n}\r\n\r\n.audit-form {\r\n  padding: 1.5rem;\r\n  background-color: var(--bg-light-color);\r\n  /* max-width: 830px; */\r\n}\r\n.audit-form.bg-dark {\r\n  color: white;\r\n  background-color: var(--bg-dark-color);\r\n}\r\n\r\n.audit-form .form-header {\r\n  width: 100%;\r\n  margin: 0.35rem 0 0.25rem 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.audit-form .form-title {\r\n  font-size: 1.1rem;\r\n  margin: 0;\r\n  color: inherit;\r\n}\r\n\r\n.audit-form .form-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.audit-form .form-fields {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  /* padding: 1.5rem 0; */\r\n  justify-content: space-between;\r\n}\r\n\r\n.audit-form .form-fields.two-wide {\r\n  max-width: 550px;\r\n}\r\n\r\n.audit-form .form-fields.two-wide .form-field-component {\r\n  width: 45%;\r\n}\r\n\r\n.audit-form .form-actions {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 1rem;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.audit-form .form-field-component {\r\n  max-width: 300px;\r\n  min-width: 200px;\r\n  flex: 1 0;\r\n}\r\n\r\n.audit-form.bg-dark .btn-link {\r\n  color: var(--primary-muted-color);\r\n}\r\n\r\n.audit-form dl {\r\n  flex: 1 0;\r\n  padding: 0 1.5rem 0 0;\r\n}\r\n\r\n.audit-form dt {\r\n  font-weight: 300;\r\n  font-size: 0.75rem;\r\n  /* padding-bottom: 0.2rem; */\r\n  text-transform: uppercase;\r\n}\r\n\r\n.audit-form dd {\r\n  font-weight: 500;\r\n  margin-inline-start: 0;\r\n  padding-block-end: 0.75rem;\r\n}\r\n\r\n.audit .emphasized-section {\r\n  /* background-color: var(--bg-dark-secondary-color); */\r\n  background-color: var(--bg-very-light-color);\r\n  color: var(--primary-color);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border-color: var(--primary-color);\r\n  padding: 0.5rem;\r\n}\r\n\r\n.audit .bg-dark .emphasized-section {\r\n  background-color: var(--bg-dark-secondary-color);\r\n}\r\n\r\n.audit .emphasized-section .btn-link {\r\n  /* color: var(--secondary-color); */\r\n}\r\n\r\n.audit .form-field-component .form-control {\r\n  width: 100%;\r\n}\r\n\r\n.audit .form-field-component .form-select {\r\n  width: 100%;\r\n}\r\n\r\n.audit .form-field-component .sp-peoplepicker-topLevel {\r\n  width: 100%;\r\n  display: block;\r\n  background-color: white;\r\n  color: var(--text-primary);\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.audit .richtext-field .ql-toolbar {\r\n  background-color: var(--bg-very-light-color);\r\n}\r\n.audit .richtext-field .ql-toolbar button {\r\n  min-width: 0;\r\n}\r\n\r\n.audit .tasks.blocking {\r\n  position: fixed;\r\n  top: 85px;\r\n  height: 100vh;\r\n}\r\n\r\n.audit .tasks.running {\r\n  position: fixed;\r\n  bottom: 0.2rem;\r\n  right: 1.75rem;\r\n  z-index: 10;\r\n  background-color: color-mix(\r\n    in srgb,\r\n    var(--bg-very-light-color) 70%,\r\n    transparent\r\n  );\r\n  border-radius: 0.6rem;\r\n}\r\n\r\n.audit .tasks ul {\r\n  list-style: none;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding: 1.5rem;\r\n}\r\n\r\n.audit .dimmer {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: var(--primary-muted-color);\r\n  background-color: #1d2b36e3;\r\n}\r\n\r\n.audit .dimmer.active {\r\n  display: flex;\r\n}\r\n\r\n.audit .loader {\r\n  width: 48px;\r\n  height: 48px;\r\n  border: 5px solid var(--primary-muted-color);\r\n  border-bottom-color: transparent;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  animation: rotation 1s linear infinite;\r\n}\r\n.audit .small.loader {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border-width: 3px;\r\n}\r\n\r\n@keyframes rotation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.audit .card {\r\n  border: 2px solid var(--primary-color);\r\n  border-radius: 6px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.audit .card .card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  /* background-color: inherit; */\r\n  /* position: sticky;\r\n  top: 0; */\r\n  padding: 1.5rem 1.5rem 0.5rem 1.5rem;\r\n}\r\n\r\n.audit .card .card-title {\r\n  color: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.audit .card .card-body {\r\n  padding: 0.5rem 1.5rem;\r\n  overflow: auto;\r\n}\r\n\r\n.audit .card .card-body > div {\r\n  padding: 0;\r\n}\r\n\r\n.audit .card .card-actions {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 1rem;\r\n  margin-top: auto;\r\n  padding: 0.5rem 1.5rem 1.5rem 1.5rem;\r\n}\r\n\r\n.audit .card .card-actions button {\r\n  /* padding: 0; */\r\n}\r\n\r\n.audit .alert {\r\n  border-radius: 6px;\r\n}\r\n\r\n.audit .alert-warning {\r\n  background-color: var(--warn-color);\r\n  color: var(--warn-hover-color);\r\n}\r\n\r\n.audit .modal-dialog {\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 15;\r\n  width: 615px;\r\n  min-width: 400px;\r\n  max-height: 85vh;\r\n  padding: 0;\r\n  margin: 0;\r\n  top: 125px;\r\n  resize: both;\r\n}\r\n\r\n.audit .modal-dialog.active {\r\n  display: flex;\r\n}\r\n\r\n.audit .modal-dialog .card-body {\r\n  flex-grow: 1;\r\n}\r\n\r\n.audit .modal-dialog iframe {\r\n  width: 100%;\r\n  height: calc(100% - 1rem);\r\n}\r\n\r\n.audit fieldset {\r\n  margin-bottom: 10px;\r\n  /*border-color:lightsteelblue;*/\r\n  border-width: 2px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-bottom: 10px;\r\n}\r\n.audit legend {\r\n  color: var(--primary-color);\r\n  font-weight: 700;\r\n  padding-bottom: 5px;\r\n  background-color: inherit;\r\n  border-radius: 0.5rem;\r\n  padding: 0 4px;\r\n}\r\n\r\n.audit .colorRedLegend {\r\n  /* color: red; */\r\n  border: 1px solid red !important;\r\n}\r\n\r\n.audit table.tablesorter.report {\r\n  margin-top: 0;\r\n}\r\n\r\n.audit .tablesorter.report thead {\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.audit .tablesorter tbody {\r\n  /*text-align:center !important;*/\r\n}\r\n\r\n.audit .tablesorter tbody td {\r\n  text-align: left;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  background-color: transparent;\r\n}\r\n\r\n.audit .tablesorter tfoot th,\r\n.audit .tablesorter thead th {\r\n  text-align: left;\r\n}\r\n\r\n.audit .tablesorter thead th {\r\n  color: white;\r\n  background-color: #374955;\r\n  padding: 0.5rem;\r\n  vertical-align: middle;\r\n}\r\n\r\n.audit .tablesorter thead th:nth-of-type(even) {\r\n  background-color: #2a3c48;\r\n}\r\n\r\n.audit .tablesorter thead .rowFilters th {\r\n  color: white;\r\n  background-color: var(--primary-muted-color);\r\n  align-content: end;\r\n}\r\n.audit .tablesorter thead .rowFilters th.filter {\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.audit table.tablesorter thead th.sorter-true {\r\n  position: relative;\r\n  cursor: pointer;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.audit .tablesorter th.sorter-true i[class*=\"fa-sort\"] {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translate(-100%, -50%);\r\n}\r\n\r\n.audit .sorter-true.asc,\r\n.audit .sorter-true.desc {\r\n  border-bottom: var(--primary-color) 2px solid;\r\n}\r\n\r\n.audit table.tablesorter tbody td:hover {\r\n  /* works background-color: blue !important; */\r\n}\r\n\r\n.audit table .rowFilters .filter-date-range .filter-inputs.active {\r\n  display: flex;\r\n}\r\n\r\n.audit table .rowFilters .filter-date-range .filter-inputs {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n}\r\n\r\n.audit table .rowFilters .filter-date-range {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  font-weight: normal;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.audit table .rowFilters .filter-date-range label {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 0.25rem;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.audit table .rowFilters .filter-date-range button {\r\n  align-self: end;\r\n}\r\n\r\n.audit #tblRequests tbody tr:hover {\r\n  background-color: lemonchiffon !important;\r\n}\r\n\r\n.audit .request-detail-view {\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-wrap: wrap-reverse;\r\n  align-items: start;\r\n}\r\n\r\n.audit #divRequestInfoContainer {\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.audit .request-info-form {\r\n  max-width: 600px;\r\n  border: 2px solid var(--primary-color);\r\n  border-radius: 6px;\r\n}\r\n\r\n.audit .request-detail-view .request-detail-documents {\r\n  min-width: 860px;\r\n  background-color: white;\r\n}\r\n\r\n.audit .response-detail-view {\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-wrap: wrap-reverse;\r\n}\r\n\r\n.audit .response-detail-view .response-info-form {\r\n  max-width: 600px;\r\n  border: 2px solid var(--primary-color);\r\n  border-radius: 6px;\r\n}\r\n\r\n.audit .response-detail-view .response-info-form {\r\n  max-width: 600px;\r\n  border: 2px solid var(--primary-color);\r\n  border-radius: 6px;\r\n}\r\n\r\n.audit .response-detail-view .response-detail-documents {\r\n  min-width: 860px;\r\n  background-color: white;\r\n}\r\n\r\n.audit #tblCoverSheets tbody td {\r\n  width: 300px;\r\n}\r\n\r\n.audit table.tablesorter thead tr .header {\r\n  background-position: left center;\r\n  padding-left: 20px;\r\n}\r\n\r\n.audit ​.request {\r\n  background-color: lightblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.audit .response-header {\r\n  /*background-color: lightgreen;*/\r\n  font-weight: bold;\r\n}\r\n.audit .request-subject {\r\n  text-align: left !important;\r\n}\r\n.audit .coversheet-header {\r\n  background-color: lightyellow;\r\n  font-weight: bold;\r\n}\r\n\r\n.response-header-title,\r\n.response-title,\r\n.response-returnReason,\r\n.response-header-action,\r\n.response-documents {\r\n  white-space: nowrap;\r\n}\r\n\r\n.response-action,\r\n.response-doc-action,\r\n.coversheet-action,\r\n.request-action {\r\n  white-space: nowrap;\r\n  text-align: left !important;\r\n}\r\n.response-title,\r\n.response-action,\r\n.response-sample,\r\n.response-returnReason,\r\n.response-documents,\r\n.response-documents span {\r\n  /*background-color: #CCFFCC;*/\r\n}\r\n\r\n.audit .response-resStatus {\r\n  /*background-color: #CCFFCC;*/\r\n  white-space: nowrap;\r\n}\r\n\r\n.audit .response-permissions {\r\n  white-space: nowrap;\r\n  /*this is toggled on IA dashboard*/\r\n  /* display: none; */\r\n}\r\n\r\n.audit .requestInfo-response-doc {\r\n  background-color: lightsteelblue;\r\n}\r\n.requestInfo-response-doc,\r\n.requestInfo-response-doc-title,\r\n.requestInfo-response-doc-modified,\r\n.requestInfo-response-doc-modifiedBy {\r\n  white-space: nowrap;\r\n}\r\n.requestInfo-response-doc-title {\r\n  padding-left: 30px;\r\n}\r\n.requestInfo-response-doc img {\r\n  padding-right: 3px;\r\n}\r\n.requestInfo-response-doc img:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.sr2-response-modified,\r\n.sr-response-modified {\r\n  white-space: nowrap;\r\n}\r\n\r\n.response-item {\r\n}\r\n.request-number,\r\n.request-subject {\r\n  white-space: nowrap;\r\n}\r\n.coversheet-header-title,\r\n.coversheet-title {\r\n  text-align: left !important;\r\n}\r\n\r\n.audit .collapsed {\r\n  display: none;\r\n}\r\n\r\n.audit .auditAlert {\r\n  font-size: 11pt;\r\n  font-weight: bold;\r\n  color: green;\r\n  border: 1px solid lightgray;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.audit .auditAlert div {\r\n  font-size: 9pt;\r\n  font-weight: normal;\r\n  padding-top: 5px;\r\n}\r\n\r\n.audit .sr1-request-item .almost-due {\r\n  background-color: coral;\r\n  font-weight: bold;\r\n}\r\n\r\n.audit .sr1-request-item .past-due {\r\n  background-color: salmon;\r\n  font-weight: bold;\r\n}\r\n\r\nlabel.file-upload-field .dropzone {\r\n  color: gray;\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 1.5rem;\r\n  border: 2px dashed lightgray;\r\n}\r\n\r\nlabel.file-upload-field.dragging .dropzone {\r\n  border: 2px dashed gray;\r\n}\r\n\r\n/* BASE APP STYLES */\r\n\r\n.ms-formbody {\r\n  background-color: #eeeef1;\r\n}\r\n.ms-formlabel {\r\n  background-color: #eeeef1;\r\n  color: black;\r\n}\r\n\r\n.hiddenRow {\r\n  display: none;\r\n  font-weight: bold;\r\n  padding-bottom: 5px;\r\n  width: 800px;\r\n  text-align: center;\r\n}\r\n\r\n.tablesorter {\r\n  border-collapse: collapse !important;\r\n}\r\n.tablesorter th {\r\n  border: 1px DarkGray solid;\r\n  border-left: none;\r\n  border-right: none;\r\n  background-color: Gainsboro;\r\n}\r\n\r\ntable.tablesorter td {\r\n  border: 1px DarkGray solid;\r\n  border-left: none;\r\n  border-right: none;\r\n  vertical-align: top;\r\n  /* color: #595959 !important; */\r\n  vertical-align: top;\r\n}\r\n\r\ntable.tablesorter tr {\r\n  border: 1px DarkGray solid;\r\n}\r\n\r\ntable.tablesorter input {\r\n  /* color: black; */\r\n}\r\n\r\n#tblCommitStatus td span {\r\n  display: flex;\r\n}\r\n\r\n#tblCommitStatus td span > * {\r\n  padding-right: 3px;\r\n}\r\n\r\n.report tfoot th {\r\n  text-align: left;\r\n}\r\ntable.tablesorter tbody td:hover {\r\n  /* works background-color: blue !important; */\r\n}\r\n\r\ntable.tablesorter tbody tr:hover {\r\n  /*background-color:lemonchiffon !important ;*/\r\n}\r\nTABLE.tablesorter THEAD TR .header {\r\n  padding-right: 10px !important;\r\n}\r\n\r\n.request-item {\r\n  display: none; /* hide by default... the filtering will reshow*/\r\n  white-space: nowrap;\r\n}\r\n\r\n.request-item:hover {\r\n  background-color: var(--primary-muted-color) !important;\r\n}\r\n\r\n#tblResponses tr:hover {\r\n  background-color: var(--primary-muted-color) !important;\r\n}\r\n\r\n.clear {\r\n  /* generic container (i.e. div) for floating buttons */\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n.ui-icon {\r\n  overflow: hidden;\r\n  text-indent: -9999px;\r\n  margin-bottom: 2px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n\r\n  display: inline-block !important;\r\n  white-space: normal !important;\r\n  /*zoom: 1.25;*/\r\n  vertical-align: middle !important;\r\n}\r\n\r\n.filteredMsg {\r\n  color: green;\r\n  font-weight: bold;\r\n}\r\n\r\n.unhighlighted {\r\n  background-color: white !important;\r\n}\r\n\r\n.highlighted {\r\n  background-color: lightyellow !important;\r\n}\r\n\r\n.Upcoming {\r\n  background-color: LightGreen;\r\n}\r\n\r\n.Canceled {\r\n  /*font-style:italic;*/\r\n  background-color: PeachPuff;\r\n}\r\n\r\n.Completed {\r\n  /*font-style:italic;*/\r\n  background-color: Gainsboro;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.button {\r\n  color: white !important;\r\n  display: inline-block;\r\n  zoom: 1; /* zoom and *display = ie7 hack for display:inline-block */\r\n  /* display: inline; */\r\n  vertical-align: baseline;\r\n  margin: 0 2px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font: 14px/100% Arial, Helvetica, sans-serif;\r\n  padding: 0.5em 2em 0.55em;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\r\n  -webkit-border-radius: 0.5em;\r\n  -moz-border-radius: 0.5em;\r\n  border-radius: 0.5em;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n.button:hover {\r\n  text-decoration: none;\r\n}\r\n.button:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n/* input styles */\r\n\r\n.btn {\r\n  color: white;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  padding: 0.25rem 1rem;\r\n  border-radius: 4px;\r\n  /* text-transform: uppercase; */\r\n  font-weight: 500;\r\n  border: none;\r\n  margin-left: 0;\r\n}\r\n\r\n.btn[disabled] {\r\n  cursor: not-allowed;\r\n  color: white;\r\n}\r\n\r\n.btn.btn-toolbar {\r\n  min-width: 4rem;\r\n  height: 4rem;\r\n  border-radius: 0;\r\n  background-color: var(--bg-dark-color);\r\n  padding: 0;\r\n}\r\n\r\n.btn.btn-toolbar:hover {\r\n  background-color: var(--bg-dark-secondary-color);\r\n}\r\n\r\n.btn.btn-link {\r\n  color: var(--text-primary);\r\n  border: none;\r\n  font-weight: inherit;\r\n  background-color: inherit;\r\n  padding: 0;\r\n  min-width: 0;\r\n  vertical-align: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  color: var(--primary-color);\r\n  text-decoration: underline;\r\n}\r\n\r\n.btn.btn-success {\r\n  background-color: var(--success-color);\r\n}\r\n.btn.btn-success:hover {\r\n  background-color: var(--success-hover-color);\r\n}\r\n.btn.btn-success[disabled] {\r\n  background-color: var(--success-hover-color);\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: var(--primary-color);\r\n}\r\n.btn.btn-primary:hover {\r\n  background-color: var(--primary-muted-color);\r\n}\r\n.btn.btn-primary[disabled] {\r\n  background-color: var(--primary-muted-color);\r\n}\r\n\r\n.btn.btn-warn {\r\n  background-color: var(--warn-color);\r\n}\r\n.btn.btn-warn:hover {\r\n  background-color: var(--warn-hover-color);\r\n}\r\n.btn.btn-warn[disabled] {\r\n  background-color: var(--warn-hover-color);\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: var(--danger-color);\r\n}\r\n.btn.btn-danger:hover {\r\n  background-color: var(--danger-hover-color);\r\n}\r\n.btn.btn-danger[disabled] {\r\n  background-color: var(--danger-disabled-color);\r\n}\r\n\r\n.form-control,\r\n.form-check-input,\r\n.form-control,\r\n.form-select {\r\n  display: block;\r\n  background-color: white;\r\n  color: var(--text-primary);\r\n  border: none;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  font-size: 1rem;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* \r\n* UTILITIES \r\n*/\r\n\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Colors */\r\n.white {\r\n  color: white !important;\r\n}\r\n\r\n.primary {\r\n  color: var(--primary-color) !important;\r\n}\r\n\r\n.primary-muted {\r\n  color: var(--primary-muted-color) !important;\r\n}\r\n\r\n.secondary {\r\n  color: var(--secondary-color) !important;\r\n}\r\n\r\n.success {\r\n  color: var(--success-color) !important;\r\n}\r\n\r\n.warn {\r\n  color: var(--warn-color) !important;\r\n}\r\n\r\n.danger {\r\n  color: var(--danger-color) !important;\r\n}\r\n\r\n.text-danger {\r\n  color: var(--primary-color) !important;\r\n}\r\n\r\n.bg-dark {\r\n  background-color: var(--bg-dark-color);\r\n  color: white;\r\n}\r\n\r\n.bg-dark-secondary {\r\n  background-color: var(--bg-dark-secondary-color);\r\n  color: white;\r\n}\r\n\r\n.bg-danger {\r\n  background-color: color-mix(in srgb, var(--danger-color) 25%, transparent);\r\n}\r\n\r\n/* EFFECTS */\r\n.bg-flash {\r\n  animation: flash 1s ease-in-out;\r\n}\r\n\r\n@keyframes flash {\r\n  0% {\r\n    opacity: 1;\r\n    filter: brightness(1.5); /* Makes it perceivably brighter */\r\n  }\r\n  30% {\r\n    opacity: 1;\r\n    filter: brightness(1); /* Normal brightness */\r\n  }\r\n  100% {\r\n    opacity: 0; /* Fade to transparent */\r\n  }\r\n}\r\n\r\n/* Display */\r\n.audit .flex {\r\n  display: flex;\r\n}\r\n\r\n.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.justify-center {\r\n  justify-content: center;\r\n}\r\n\r\n/* Position */\r\n.position-fixed {\r\n  position: fixed;\r\n}\r\n\r\n.bigrounded {\r\n  -webkit-border-radius: 2em;\r\n  -moz-border-radius: 2em;\r\n  border-radius: 2em;\r\n}\r\n.medium {\r\n  font-size: 12px;\r\n  padding: 0.4em 1.5em 0.42em;\r\n}\r\n.small {\r\n  font-size: 0.75rem;\r\n  padding: 0.1rem 0.3rem;\r\n}\r\n\r\n/* Font */\r\n.fst-italic {\r\n  font-style: italic;\r\n}\r\n\r\n.fw-lighter {\r\n  font-weight: 300;\r\n}\r\n.fw-light {\r\n  font-weight: 400;\r\n}\r\n.fw-semibold {\r\n  font-weight: 600 !important;\r\n}\r\n\r\n.fw-bold {\r\n  font-weight: bold !important;\r\n}\r\n\r\n.uppercase {\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* Width */\r\n\r\n.w-fit {\r\n  width: fit-content;\r\n}\r\n\r\n.w-full,\r\n.w-100 {\r\n  width: 100%;\r\n}\r\n\r\n.min-w-full {\r\n  min-width: 100% !important;\r\n}\r\n\r\n/* Height */\r\n\r\n.h-1 {\r\n  height: 1rem;\r\n}\r\n\r\n.vh-100 {\r\n  height: 100vh;\r\n}\r\n\r\n.commentChain {\r\n  margin-top: 0.5rem;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.commentChain .comment {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.commentChain .comment .text {\r\n  font-size: 1rem;\r\n  color: var(--secondary-color);\r\n  padding-bottom: 0.4em;\r\n}\r\n\r\n.commentChain .comment .info {\r\n  font-size: 0.75rem;\r\n  font-style: italic;\r\n}\r\n\r\n.commentChain .comment .remove {\r\n  cursor: pointer;\r\n}\r\n\r\n.commentChain .new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  align-items: flex-end;\r\n}\r\n\r\n.active-viewer {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.draggable {\r\n  position: absolute;\r\n}\r\n\r\n.draggable .grabber {\r\n  cursor: move;\r\n}\r\n\r\n/*remove the background on notifications*/\r\n.s4-noti-in2 {\r\n  background: none;\r\n  background-color: yellow;\r\n}\r\n\r\n@media print {\r\n  a {\r\n    text-decoration: none;\r\n  }\r\n  body {\r\n    font-family: Arial;\r\n  }\r\n\r\n  tfoot {\r\n    display: table-footer-group;\r\n  }\r\n  thead {\r\n    display: table-header-group;\r\n  }\r\n\r\n  #s4-ribbonrow {\r\n    display: none;\r\n  }\r\n  #s4-titlerow {\r\n    display: none !important;\r\n  }\r\n  .s4-title {\r\n    display: none;\r\n  }\r\n  .hideOnPrint {\r\n    display: none;\r\n  }\r\n}\r\n";

	var quillStyles = "/*!\n * Quill Editor v2.0.3\n * https://quilljs.com\n * Copyright (c) 2017-2024, Slab\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container:not(.ql-disabled) li[data-list=checked] > .ql-ui,.ql-container:not(.ql-disabled) li[data-list=unchecked] > .ql-ui{cursor:pointer}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor > *{cursor:text}.ql-editor p,.ql-editor ol,.ql-editor pre,.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6{margin:0;padding:0}@supports (counter-set:none){.ql-editor p,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6{counter-set:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor p,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6{counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor table{border-collapse:collapse}.ql-editor td{border:1px solid #000;padding:2px 5px}.ql-editor ol{padding-left:1.5em}.ql-editor li{list-style-type:none;padding-left:1.5em;position:relative}.ql-editor li > .ql-ui:before{display:inline-block;margin-left:-1.5em;margin-right:.3em;text-align:right;white-space:nowrap;width:1.2em}.ql-editor li[data-list=checked] > .ql-ui,.ql-editor li[data-list=unchecked] > .ql-ui{color:#777}.ql-editor li[data-list=bullet] > .ql-ui:before{content:'\\2022'}.ql-editor li[data-list=checked] > .ql-ui:before{content:'\\2611'}.ql-editor li[data-list=unchecked] > .ql-ui:before{content:'\\2610'}@supports (counter-set:none){.ql-editor li[data-list]{counter-set:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list]{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered]{counter-increment:list-0}.ql-editor li[data-list=ordered] > .ql-ui:before{content:counter(list-0, decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-increment:list-1}.ql-editor li[data-list=ordered].ql-indent-1 > .ql-ui:before{content:counter(list-1, lower-alpha) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-1{counter-set:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-2{counter-increment:list-2}.ql-editor li[data-list=ordered].ql-indent-2 > .ql-ui:before{content:counter(list-2, lower-roman) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-2{counter-set:list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-3{counter-increment:list-3}.ql-editor li[data-list=ordered].ql-indent-3 > .ql-ui:before{content:counter(list-3, decimal) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-3{counter-set:list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-4{counter-increment:list-4}.ql-editor li[data-list=ordered].ql-indent-4 > .ql-ui:before{content:counter(list-4, lower-alpha) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-4{counter-set:list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-5{counter-increment:list-5}.ql-editor li[data-list=ordered].ql-indent-5 > .ql-ui:before{content:counter(list-5, lower-roman) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-5{counter-set:list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-6{counter-increment:list-6}.ql-editor li[data-list=ordered].ql-indent-6 > .ql-ui:before{content:counter(list-6, decimal) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-6{counter-set:list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-6{counter-reset:list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-7{counter-increment:list-7}.ql-editor li[data-list=ordered].ql-indent-7 > .ql-ui:before{content:counter(list-7, lower-alpha) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-7{counter-set:list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-7{counter-reset:list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-8{counter-increment:list-8}.ql-editor li[data-list=ordered].ql-indent-8 > .ql-ui:before{content:counter(list-8, lower-roman) '. '}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-8{counter-set:list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-8{counter-reset:list-9}}.ql-editor li[data-list=ordered].ql-indent-9{counter-increment:list-9}.ql-editor li[data-list=ordered].ql-indent-9 > .ql-ui:before{content:counter(list-9, decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor li.ql-direction-rtl{padding-right:1.5em}.ql-editor li.ql-direction-rtl > .ql-ui:before{margin-left:.3em;margin-right:-1.5em;text-align:left}.ql-editor table{table-layout:fixed;width:100%}.ql-editor table td{outline:none}.ql-editor .ql-code-block-container{font-family:monospace}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor .ql-ui{position:absolute}.ql-editor.ql-blank::before{color:rgba(0,0,0,0.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:'';display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c}.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-thin,.ql-snow .ql-stroke.ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor .ql-code-block-container{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor .ql-code-block-container{margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor .ql-code-block-container{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-label::before,.ql-snow .ql-picker.ql-header .ql-picker-item::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-label::before,.ql-snow .ql-picker.ql-font .ql-picker-item::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-label::before,.ql-snow .ql-picker.ql-size .ql-picker-item::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-code-block-container{position:relative}.ql-code-block-container .ql-ui{right:5px;top:5px}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue','Helvetica','Arial',sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,0.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow + .ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}\n\n/*# sourceMappingURL=quill.snow.css.map*/";

	function registerStyles(element) {
	  [appStyles, quillStyles].forEach((stylesheet) => {
	    const styles = document.createElement("style");
	    styles.innerHTML = stylesheet;
	    // element.append(styles);
	    document.head.append(styles);
	  });

	  // Set width and height of our window
	  // const contentWindow = document.querySelector(".audit");

	  // contentWindow.style.height =
	  //   document.defaultView.innerHeight -
	  //   contentWindow.getBoundingClientRect().top +
	  //   "px";

	  // Scrollable region for some reason
	  const s = document.querySelector('[data-is-scrollable="true"]');

	  if (s) s.style.overflowY = "auto";
	}

	class Notification {
	  constructor(message) {
	    this.message = message;
	  }
	}

	const notifications = knockoutLatestExports.observableArray();

	function addNotification(message, blockTimeout) {
	  const newNotification = new Notification(message);

	  notifications.push(newNotification);

	  {
	    window.setTimeout(() => notifications.remove(newNotification), 3000);
	  }

	  return newNotification;
	}

	const loadInfo = new TaskDef("Loading Initial Data");

	const loadData = new TaskDef("Building Dashboard");

	// AO_DB

	const submitPackageTaskDef = new TaskDef(
	  "Submitting Response Package",
	  true
	);

	var Audit = window.Audit || {
	  Common: {},
	  AOReport: {},
	};

	// Audit.AOReport = Audit.AOReport || {};

	const responseParam = "ResNum";

	async function load(element, context) {
	  window.context = context;
	  element.innerHTML = aoDbTemplate;
	  registerStyles();
	  initAppcontext();
	  await InitSal();
	  Audit.Common.Utilities = new NewUtilities();
	  Audit.AOReport.Report = new Audit.AOReport.NewReportPage();
	  Audit.AOReport.Init();
	}

	Audit.AOReport.Init = function () {
	  var paramShowSiteActionsToAnyone = getUrlParam("ShowSiteActions");
	  if (paramShowSiteActionsToAnyone != true) {
	    //hide it even for owners unless this param is passed into the URL; pass in param if you want to change the page web parts/settings
	    $("#RibbonContainer-TabRowLeft").hide();
	    $(".ms-siteactionsmenu").hide();
	  }

	  function SetTimer() {
	    var intervalRefreshID = setInterval(function () {
	      var divVal = document.getElementById("divCounter").innerText;
	      var count = divVal * 1 - 1;
	      document.getElementById("divCounter").innerText = count;
	      if (count <= 0) {
	        if (!Audit.AOReport.Report.IsTransactionExecuting())
	          Audit.AOReport.Report.Refresh();
	        else {
	          clearInterval(intervalRefreshID);
	          document.getElementById("divCounter").innerText = "1200";
	          SetTimer();
	        }
	      }
	    }, 1000);
	  }

	  SetTimer();
	};

	Audit.AOReport.NewReportPage = function () {
	  var m_bigMap = new Object();
	  var m_arrRequests = new Array();
	  var m_arrResponses = new Array();
	  new Array();
	  var m_IA_SPGroupName = null;
	  var m_IA_ActionOffice = null;

	  var ownerGroup,
	    memberGroup,
	    visitorGroup = null;
	  var m_groupColl = null;

	  var m_requestItems = null;
	  var m_responseItems = null;
	  var m_ResponseDocsItems = null;
	  var m_aoItems = null;

	  var m_responseDocsLibrary = null;

	  var m_statusToFilterOn = "";
	  var m_curResponseSelectedIsEditableByAO = false;

	  var m_bIsTransactionExecuting = false;

	  var m_responseStatus1 = "1-Open";
	  var m_responseStatus2 = "3-Returned to Action Office";

	  function ViewModel() {
	    var self = this;

	    self.debugMode = knockoutLatestExports.observable(false);
	    self.siteUrl = Audit.Common.Utilities.GetSiteUrl();
	    self.loadedAt = knockoutLatestExports.observable();

	    self.tabOpts = {
	      Responses: new Tab("response-report", "Status Report", {
	        id: "responseStatusReportTemplate",
	        data: self,
	      }),
	      ResponseDetail: new Tab("response-detail", "Responses", {
	        id: "responseDetailTemplate",
	        data: self,
	      }),
	    };
	    self.tabs = new TabsModule(Object.values(self.tabOpts));

	    self.runningTasks = runningTasks;
	    self.blockingTasks = blockingTasks;

	    //cant add rate limit because it'll affect the refresh
	    //self.arrResponses = ko.observableArray( null ).extend({ rateLimit: 500 });
	    self.arrResponses = knockoutLatestExports.observableArray(null);
	    self.arrFilteredResponsesCount = knockoutLatestExports.observable(0);
	    self.cntPendingReview = knockoutLatestExports.observable(0);

	    self.ddOptionsResponseTabRequestID = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseTabRequestStatus = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseTabRequestInternalDueDate = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseTabRequestSample = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseTabResponseTitle = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseTabResponseStatus = knockoutLatestExports.observableArray();
	    self.filterResponseTabRequestIntDueDate = knockoutLatestExports.observable();
	    self.filterResponseTabResponseName = knockoutLatestExports.observable();
	    self.filterResponseTabResponseStatus = knockoutLatestExports.observable();
	    self.doSort = knockoutLatestExports.observable(false);

	    self.ddOptionsResponseInfoTabResponseNameOpen2 = knockoutLatestExports.observableArray();
	    self.ddOptionsResponseInfoTabResponseNameProcessed2 = knockoutLatestExports.observableArray();
	    self.filterResponseInfoTabResponseNameOpen2 = knockoutLatestExports.observable("");
	    self.filterResponseInfoTabResponseNameProcessed2 = knockoutLatestExports.observable("");

	    self.currentResponse = knockoutLatestExports.observable();
	    self.arrCoverSheets = knockoutLatestExports.observableArray(null);
	    self.arrResponseDocs = knockoutLatestExports.observable(null);
	    self.cntResponseDocs = knockoutLatestExports.observable(0);

	    // File Input Control
	    self.responseDocFiles = knockoutLatestExports.observableArray();

	    self.showUpload = knockoutLatestExports.observable(false);
	    self.showSubmit = knockoutLatestExports.observable(false);
	    self.showReturned = knockoutLatestExports.pureComputed(() => {
	      const oResponse = knockoutLatestExports.unwrap(self.currentResponse);

	      if (!oResponse) return false;

	      return (
	        oResponse.resStatus == m_responseStatus2 &&
	        oResponse.returnReason != null &&
	        oResponse.returnReason != ""
	      );
	    });

	    self.refresh = () => window.location.reload();
	    self.onNewResponseDocCallback = self.refresh;

	    self.currentResponse.subscribe((newResponse) => {
	      if (!newResponse) return;
	      setUrlParam(responseParam, newResponse.title);
	    });
	    self.selectedFiltersResponseTab = knockoutLatestExports.computed(function () {
	      var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
	      var responseName = self.filterResponseTabResponseName();
	      var responseStatus = self.filterResponseTabResponseStatus();

	      return requestIntDueDate + " " + responseName + " " + responseStatus;
	    });

	    /** Behaviors **/

	    self.ClearFiltersResponseTab = function () {
	      self.filterResponseTabRequestIntDueDate("");
	      self.filterResponseTabResponseName("");
	      self.filterResponseTabResponseStatus("");
	    };

	    self.FilterChangedResponseTab = function () {
	      document.body.style.cursor = "wait";
	      setTimeout(function () {
	        var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
	        var responseName = self.filterResponseTabResponseName();
	        var responseStatus = self.filterResponseTabResponseStatus();

	        if (!requestIntDueDate && !responseName && !responseStatus) {
	          $(".sr-response-item").show();
	          self.arrFilteredResponsesCount(self.arrResponses().length);
	          document.body.style.cursor = "default";
	          return;
	        }

	        requestIntDueDate = !requestIntDueDate ? "" : requestIntDueDate;
	        responseName = !responseName ? "" : responseName;
	        responseStatus = !responseStatus ? "" : responseStatus;

	        var count = 0;
	        var eacher = $(".sr-response-item");
	        eacher.each(function () {
	          var hide = false;

	          if (
	            !hide &&
	            requestIntDueDate != "" &&
	            $.trim($(this).find(".sr-response-internalDueDate").text()) !=
	              requestIntDueDate
	          )
	            hide = true;
	          if (
	            !hide &&
	            responseName != "" &&
	            $.trim($(this).find(".sr-response-title").text()) != responseName
	          )
	            hide = true;
	          if (
	            !hide &&
	            responseStatus != "" &&
	            $.trim($(this).find(".sr-response-status").text()) != responseStatus
	          )
	            hide = true;

	          if (hide) $(this).hide();
	          else {
	            $(this).show();
	            count++;
	          }
	        });

	        self.arrFilteredResponsesCount(count);
	        document.body.style.cursor = "default";
	      }, 100);
	    };

	    self.ClickGoToResponse = function (response) {
	      GoToResponse(response);
	    };

	    self.ClickSubmitResponse = function () {
	      m_fnSubmitPackage();
	    };

	    self.ClickMarkForDeletionResponseDoc = function (oResponseDoc) {
	      if (oResponseDoc && oResponseDoc.ID)
	        m_fnMarkForDeletionResponseDoc(oResponseDoc.ID);
	    };

	    /** Subscriptions **/

	    self.selectedFiltersResponseTab.subscribe(function (value) {
	      self.FilterChangedResponseTab();
	    });

	    self.doSort.subscribe(function (newValue) {
	      Audit.Common.Utilities.OnLoadDisplayTimeStamp();

	      if (self.arrResponses().length > 0 && newValue) {
	        //should trigger only once
	        self.arrFilteredResponsesCount(self.arrResponses().length);

	        //draw these first
	        knockoutLatestExports.utils.arrayPushAll(
	          self.ddOptionsResponseTabResponseStatus(),
	          self.GetDDVals("status")
	        );
	        self.ddOptionsResponseTabResponseStatus.valueHasMutated();

	        knockoutLatestExports.utils.arrayPushAll(
	          self.ddOptionsResponseInfoTabResponseNameOpen2(),
	          self.GetDDVals2("1", true)
	        );
	        self.ddOptionsResponseInfoTabResponseNameOpen2.valueHasMutated();

	        knockoutLatestExports.utils.arrayPushAll(
	          self.ddOptionsResponseInfoTabResponseNameProcessed2(),
	          self.GetDDVals2("0", true)
	        );
	        self.ddOptionsResponseInfoTabResponseNameProcessed2.valueHasMutated();

	        //draw these next
	        knockoutLatestExports.utils.arrayPushAll(
	          self.ddOptionsResponseTabRequestInternalDueDate(),
	          self.GetDDVals("internalDueDate")
	        );
	        self.ddOptionsResponseTabRequestInternalDueDate.valueHasMutated();

	        knockoutLatestExports.utils.arrayPushAll(
	          self.ddOptionsResponseTabResponseTitle(),
	          self.GetDDVals("title", true)
	        );
	        self.ddOptionsResponseTabResponseTitle.valueHasMutated();

	        setTimeout(function () {
	          var paramTabIndex = getUrlParam("Tab");
	          if (paramTabIndex != null && paramTabIndex != "") {
	            // $("#tabs").tabs("option", "active", paramTabIndex);
	            self.tabs.selectById(paramTabIndex);
	          } else {
	            self.tabs.selectById(self.tabOpts.Responses.id);
	          }
	          if (
	            paramTabIndex == null ||
	            paramTabIndex == "" ||
	            paramTabIndex == 0
	          ) {
	            if (self.cntPendingReview() > 0) {
	              addNotification(
	                "<div style='text-align:left'>There are <b>" +
	                  self.cntPendingReview() +
	                  "</b> Responses pending your review/action. <br/> <br/> Please click on the links in the <b>Response Name</b> column of the <b>Status Report tab</b> <br/> to access each response and upload documents and submit the package.</div>");
	            }
	          }

	          var paramResponseNum = getUrlParam("ResNum");
	          if (paramResponseNum != null && paramResponseNum != "") {
	            if (paramTabIndex == 0) {
	              if (
	                $("#ddlResponseName option[value='" + paramResponseNum + "']")
	                  .length > 0
	              )
	                _myViewModel.filterResponseTabResponseName(paramResponseNum);
	            } else {
	              if (
	                $("#ddlResponsesOpen option[value='" + paramResponseNum + "']")
	                  .length > 0
	              )
	                _myViewModel.filterResponseInfoTabResponseNameOpen2(
	                  paramResponseNum
	                );
	              else if (
	                $(
	                  "#ddlResponsesProcessed option[value='" +
	                    paramResponseNum +
	                    "']"
	                ).length > 0
	              )
	                _myViewModel.filterResponseInfoTabResponseNameProcessed2(
	                  paramResponseNum
	                );
	            }
	          }

	          BindHandlersOnLoad();

	          self.filterResponseTabResponseStatus(m_statusToFilterOn);

	          //$( "#tblStatusReportResponses" ).trigger("update");
	          // $("#tblStatusReportResponses").tablesorter({
	          //   sortList: [[2, 0]],
	          //   selectorHeaders: ".sorter-true",
	          // });
	        }, 200);
	      }
	    });

	    /**TODO: factor these below **/
	    /* second tab */
	    self.filterResponseInfoTabResponseNameOpen2.subscribe(function (newValue) {
	      self.filterResponseInfoTabResponseName(newValue, true);
	    });

	    /* second tab */
	    self.filterResponseInfoTabResponseNameProcessed2.subscribe(function (
	      newValue
	    ) {
	      self.filterResponseInfoTabResponseName(newValue, false);
	    });

	    self.filterResponseInfoTabResponseName = function (
	      newValue,
	      bOpenResponses
	    ) {
	      self.currentResponse(null);
	      self.arrCoverSheets([]);
	      self.arrResponseDocs(null);
	      self.cntResponseDocs(0);
	      m_curResponseSelectedIsEditableByAO = false;

	      var oResponse = m_bigMap["response-" + newValue];
	      if (oResponse) {
	        if (bOpenResponses)
	          self.filterResponseInfoTabResponseNameProcessed2("");
	        else self.filterResponseInfoTabResponseNameOpen2("");

	        self.currentResponse(oResponse);

	        LoadTabResponseInfoCoverSheets(oResponse);
	        LoadTabResponseInfoResponseDocs(oResponse);

	        if (bOpenResponses) m_curResponseSelectedIsEditableByAO = true;
	      }
	    };

	    self.responseDocFiles.subscribe(async function (files) {
	      if (!files.length) return;
	      const resId = self.currentResponse()?.ID;
	      if (!resId) return;
	      // const request = await getRequestByTitle(this.number);
	      const response = await appContext.AuditResponses.FindById(resId);

	      const promises = [];

	      for (let file of files) {
	        promises.push(
	          new Promise(async (resolve) => {
	            await uploadResponseDocFile(response, file);
	            resolve();
	          })
	        );
	      }

	      await Promise.all(promises);
	      // TODO: need to requery responsedocs
	      self.responseDocFiles.removeAll();
	      self.onNewResponseDocCallback();
	    });

	    /**Other**/
	    self.GetDDVals = function (fieldName, sortAsResponse) {
	      var types = knockoutLatestExports.utils.arrayMap(self.arrResponses(), function (item) {
	        return item[fieldName];
	      });

	      var ddArr = knockoutLatestExports.utils.arrayGetDistinctValues(types).sort();
	      if (sortAsResponse) ddArr.sort(Audit.Common.Utilities.SortResponseTitles);

	      if (ddArr[0] == "") ddArr.shift();

	      return ddArr;
	    };

	    self.GetDDVals2 = function (responseStatusType, sortAsResponse) {
	      var types = knockoutLatestExports.utils.arrayMap(self.arrResponses(), function (item) {
	        var requestStatus = item.requestStatus;
	        var responseStatus = item.status;

	        if (responseStatusType == 0) {
	          //get the other responses
	          if (
	            responseStatus != m_responseStatus1 &&
	            responseStatus != m_responseStatus2
	          )
	            return item["title"];
	          else return "";
	        } else if (responseStatusType == 1) {
	          //get responses pending action
	          if (
	            (responseStatus == m_responseStatus1 ||
	              responseStatus == m_responseStatus2) &&
	            (requestStatus == "Open" || requestStatus == "ReOpened")
	          )
	            return item["title"];
	          else return "";
	        }
	      });

	      var ddArr = knockoutLatestExports.utils.arrayGetDistinctValues(types).sort();
	      if (sortAsResponse) ddArr.sort(Audit.Common.Utilities.SortResponseTitles);

	      if (ddArr[0] == "") ddArr.shift();
	      return ddArr;
	    };
	  }

	  var _myViewModel = new ViewModel();
	  knockoutLatestExports.applyBindings(_myViewModel);

	  LoadInfo();

	  async function LoadInfo() {
	    const loadInfoTask = addTask(loadInfo);

	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();

	    const m_currentUser = web.get_currentUser();
	    currCtx.load(m_currentUser);

	    var requestList = web
	      .get_lists()
	      .getByTitle(Audit.Common.Utilities.GetListTitleRequests());
	    var requestQuery = new SP.CamlQuery();
	    requestQuery.set_viewXml(
	      '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
	    );
	    m_requestItems = requestList.getItems(requestQuery);
	    currCtx.load(
	      m_requestItems,
	      "Include(ID, Title, ReqSubject, ReqStatus, InternalDueDate, ActionOffice, RelatedAudit, ActionItems, Comments, EmailSent, ClosedDate)"
	    );

	    await Promise.all([
	      getAllItems(Audit.Common.Utilities.GetListTitleResponses(), [
	        "ID",
	        "Title",
	        "ReqNum",
	        "ActionOffice",
	        "ReturnReason",
	        "SampleNumber",
	        "ResStatus",
	        "Comments",
	        "Modified",
	        "ClosedDate",
	        "ClosedBy",
	        "POC",
	      ]).then((result) => (m_responseItems = result)),
	      getAllItems(Audit.Common.Utilities.GetLibTitleResponseDocs(), [
	        "ID",
	        "Title",
	        "ReqNum",
	        "ResID",
	        "DocumentStatus",
	        "ReceiptDate",
	        "FileLeafRef",
	        "FileDirRef",
	        "File_x0020_Size",
	        "Modified",
	        "Editor",
	      ]).then((result) => (m_ResponseDocsItems = result)),
	    ]);

	    var aoList = web
	      .get_lists()
	      .getByTitle(Audit.Common.Utilities.GetListTitleActionOffices());
	    var aoQuery = new SP.CamlQuery();
	    aoQuery.set_viewXml(
	      '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
	    );
	    m_aoItems = aoList.getItems(aoQuery);
	    currCtx.load(m_aoItems, "Include(ID, Title, UserGroup, Role)");

	    //Library GUIDS
	    m_responseDocsLibrary = currCtx
	      .get_web()
	      .get_lists()
	      .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
	    currCtx.load(m_responseDocsLibrary, "Title", "Id");

	    ownerGroup = web.get_associatedOwnerGroup();
	    memberGroup = web.get_associatedMemberGroup();
	    visitorGroup = web.get_associatedVisitorGroup();

	    currCtx.load(ownerGroup);
	    currCtx.load(memberGroup);
	    currCtx.load(visitorGroup);

	    //Site Users
	    m_groupColl = web.get_siteGroups();
	    currCtx.load(m_groupColl);

	    currCtx.executeQueryAsync(OnSuccess, OnFailure);
	    function OnSuccess(sender, args) {
	      $("#divRefresh").show();
	      m_fnLoadData();
	      finishTask(loadInfoTask);
	    }
	    function OnFailure(sender, args) {
	      $("#divRefresh").hide();
	      $("#divLoading").hide();

	      loadInfoTask.addStatus(
	        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
	      );
	    }
	  }

	  function m_fnLoadData() {
	    const loadDataTask = addTask(loadData);
	    _myViewModel.loadedAt(new Date());
	    Audit.Common.Utilities.LoadSiteGroups(m_groupColl);
	    LoadLibGUIDS();
	    Audit.Common.Utilities.LoadActionOffices(m_aoItems);

	    if (memberGroup != null) m_IA_SPGroupName = memberGroup.get_title();
	    if (m_IA_SPGroupName == null || m_IA_SPGroupName == "") {
	      loadDataTask.addStatus(
	        "Unable to retrieve the IA SharePoint Group. Please contact the Administrator"
	      );
	      return;
	    }

	    m_IA_ActionOffice = Audit.Common.Utilities.GetActionOffices()?.find(
	      (ao) => ao.userGroup == m_IA_SPGroupName
	    );

	    LoadRequests();
	    LoadResponses();
	    LoadResponseDocs();

	    LoadTabStatusReport(m_arrResponses);

	    finishTask(loadDataTask);
	  }

	  function LoadLibGUIDS() {
	    Audit.Common.Utilities.SetResponseDocLibGUID(
	      m_responseDocsLibrary.get_id()
	    );
	  }

	  function LoadRequests() {
	    m_bigMap = new Object();
	    m_arrRequests = new Array();

	    var cnt = 0;
	    var listItemEnumerator = m_requestItems.getEnumerator();
	    while (listItemEnumerator.moveNext()) {
	      var oListItem = listItemEnumerator.get_current();

	      var emailSent = oListItem.get_item("EmailSent");
	      if (!emailSent) continue;

	      var id = oListItem.get_item("ID");
	      var number = oListItem.get_item("Title");
	      var status = oListItem.get_item("ReqStatus");

	      var subject = oListItem.get_item("ReqSubject");
	      if (subject == null) subject = "";

	      var arrActionOffice = oListItem.get_item("ActionOffice");
	      var actionOffice = "";
	      for (var x = 0; x < arrActionOffice.length; x++) {
	        actionOffice +=
	          "<div>" + arrActionOffice[x].get_lookupValue() + "</div>";
	      }

	      var comments = oListItem.get_item("Comments");
	      var relatedAudit = oListItem.get_item("RelatedAudit");
	      var actionItems = oListItem.get_item("ActionItems");

	      if (comments == null) comments = "";
	      if (relatedAudit == null) relatedAudit = "";
	      if (actionItems == null) actionItems = "";

	      var internalDueDate = oListItem.get_item("InternalDueDate");
	      var closedDate = oListItem.get_item("ClosedDate");

	      internalDueDate != null
	        ? (internalDueDate = internalDueDate.format("MM/dd/yyyy"))
	        : (internalDueDate = "");
	      closedDate != null
	        ? (closedDate = closedDate.format("MM/dd/yyyy"))
	        : (closedDate = "");

	      var requestObject = new Object();
	      requestObject["ID"] = id;
	      requestObject["number"] = number;
	      requestObject["subject"] = subject;
	      requestObject["status"] = status;
	      requestObject["internalDueDate"] = internalDueDate;
	      requestObject["actionOffice"] = actionOffice;
	      requestObject["comments"] = comments;
	      requestObject["relatedAudit"] = relatedAudit;
	      requestObject["actionItems"] = actionItems;
	      requestObject["emailSent"] = emailSent;
	      requestObject["closedDate"] = closedDate;
	      requestObject["responses"] = new Array();

	      requestObject["arrIndex"] = cnt;

	      m_arrRequests.push(requestObject);

	      m_bigMap["request-" + number] = requestObject;
	      cnt++;
	    }
	  }

	  function LoadResponses() {
	    m_arrResponses = new Array();
	    var cnt = 0;

	    // var listItemEnumerator = m_responseItems.getEnumerator();
	    // while (listItemEnumerator.moveNext()) {
	    for (const oListItem of m_responseItems) {
	      // var oListItem = listItemEnumerator.get_current();

	      var number = oListItem.get_item("ReqNum");
	      if (number != null) {
	        number = number.get_lookupValue();

	        var responseObject = new Object();
	        responseObject["request"] = m_bigMap["request-" + number]; //GetRequest( number );
	        if (!responseObject.request || !responseObject.request.emailSent)
	          //if request is null, then there's probably a permission issue
	          continue;

	        responseObject["actionOffice"] = oListItem.get_item("ActionOffice");
	        if (responseObject["actionOffice"] == null)
	          responseObject["actionOffice"] = "";
	        else
	          responseObject["actionOffice"] =
	            responseObject["actionOffice"].get_lookupValue();
	        if (responseObject["actionOffice"] == "") continue;

	        responseObject["poc"] = oListItem.get_item("POC");
	        if (responseObject["poc"] == null) responseObject["poc"] = "";
	        else responseObject["poc"] = responseObject["poc"].get_lookupValue();

	        responseObject["ID"] = oListItem.get_item("ID");
	        responseObject["number"] = number;

	        var title = oListItem.get_item("Title");
	        responseObject["title"] = title;

	        responseObject["resStatus"] = oListItem.get_item("ResStatus");
	        if (
	          responseObject.request.status == "Closed" ||
	          responseObject.request.status == "Canceled"
	        )
	          //make it appear that it's closed so that it doesnt confuse AO
	          responseObject["resStatus"] = "7-Closed";

	        var modifiedDate = oListItem.get_item("Modified");
	        var closedDate = oListItem.get_item("ClosedDate");

	        modifiedDate != null
	          ? (modifiedDate = modifiedDate.format("MM/dd/yyyy hh:mm tt"))
	          : (modifiedDate = "");
	        closedDate != null
	          ? (closedDate = closedDate.format("MM/dd/yyyy"))
	          : (closedDate = "");

	        responseObject["modified"] = modifiedDate;
	        responseObject["closedDate"] = closedDate;
	        responseObject["closedBy"] =
	          Audit.Common.Utilities.GetFriendlyDisplayName(oListItem, "ClosedBy");

	        responseObject["sample"] = oListItem.get_item("SampleNumber");
	        if (responseObject["sample"] == null) responseObject["sample"] = "";

	        var comments = oListItem.get_item("Comments");
	        if (comments == null) comments = "";
	        responseObject["comments"] = comments;

	        var returnReason = oListItem.get_item("ReturnReason");
	        if (returnReason == null) returnReason = "";
	        responseObject["returnReason"] = returnReason;

	        responseObject["responseDocs"] = new Array();
	        responseObject["coversheets"] = new Array();

	        responseObject["arrIndex"] = cnt;
	        m_arrResponses.push(responseObject);

	        m_bigMap["response-" + title] = responseObject;
	        cnt++;
	      }
	    }
	  }

	  function LoadResponseDocs() {
	    // var listItemEnumerator = m_ResponseDocsItems.getEnumerator();
	    // while (listItemEnumerator.moveNext()) {
	    for (var oListItem of m_ResponseDocsItems) {
	      // var oListItem = listItemEnumerator.get_current();

	      oListItem.get_item("ID");

	      var requestNumber = oListItem.get_item("ReqNum");
	      if (requestNumber != null)
	        requestNumber = requestNumber.get_lookupValue();

	      var responseID = oListItem.get_item("ResID");
	      if (responseID != null) responseID = responseID.get_lookupValue();

	      if (requestNumber == null || responseID == null) continue;

	      if (oListItem.get_item("DocumentStatus") == "Marked for Deletion") ; else {
	        try {
	          var bigMapItem = m_bigMap["response-" + responseID];

	          var indexOfArrResponses = bigMapItem.arrIndex;
	          var oResponse = m_arrResponses[indexOfArrResponses];
	          if (oResponse) {
	            var responseDocObject = new Object();
	            responseDocObject["ID"] = oListItem.get_item("ID");
	            responseDocObject["title"] = oListItem.get_item("Title");
	            if (responseDocObject["title"] == null)
	              responseDocObject["title"] = "";
	            responseDocObject["fileName"] = oListItem.get_item("FileLeafRef");
	            responseDocObject["folder"] = oListItem.get_item("FileDirRef");
	            responseDocObject["documentStatus"] =
	              oListItem.get_item("DocumentStatus");

	            var fileSize = oListItem.get_item("File_x0020_Size");
	            fileSize = Audit.Common.Utilities.GetFriendlyFileSize(fileSize);
	            responseDocObject["fileSize"] = fileSize;

	            var receiptDate = "";
	            if (
	              oListItem.get_item("ReceiptDate") != null &&
	              oListItem.get_item("ReceiptDate") != ""
	            )
	              receiptDate = oListItem
	                .get_item("ReceiptDate")
	                .format("MM/dd/yyyy");
	            responseDocObject["receiptDate"] = receiptDate;

	            var modifiedDate = "";
	            if (
	              oListItem.get_item("Modified") != null &&
	              oListItem.get_item("Modified") != ""
	            )
	              modifiedDate = oListItem
	                .get_item("Modified")
	                .format("MM/dd/yyyy hh:mm tt");
	            responseDocObject["modifiedDate"] = modifiedDate;

	            responseDocObject["modifiedBy"] =
	              Audit.Common.Utilities.GetFriendlyDisplayName(
	                oListItem,
	                "Editor"
	              );

	            oResponse["responseDocs"].push(responseDocObject);
	          }
	        } catch (err) {}
	      }
	    }
	  }

	  function LoadTabStatusReport(arr, fbody) {
	    if (arr == null) return;

	    //var bLoadTest = getUrlParam("LoadTest");

	    var responseArr = new Array();

	    new Array();
	    new Array();
	    new Array();

	    var count = 0;
	    var resStatus1 = 0;
	    var resStatus2 = 0;

	    var arrlength = arr.length;
	    while (arrlength--) {
	      var oResponse = arr[arrlength];

	      var responseTitle = oResponse.title;

	      var highlight = false;
	      var responseStatus = oResponse.resStatus;
	      if (
	        responseStatus == m_responseStatus1 ||
	        responseStatus == m_responseStatus2
	      ) {
	        count++;
	        if (responseStatus == m_responseStatus1) resStatus1++;
	        else resStatus2++;

	        highlight = true;
	      }

	      var aResponse = {
	        title: responseTitle,
	        requestSubject: oResponse.request.subject,
	        requestStatus: oResponse.request.status,
	        internalDueDate: oResponse.request.internalDueDate,
	        status: responseStatus,
	        docCount: oResponse.responseDocs.length,
	        modified: oResponse.modified,
	        highlight: highlight,
	        visibleRow: knockoutLatestExports.observable(true),
	      };

	      responseArr.push(aResponse);

	      /*if( bLoadTest )
				{
					for( var z = 0; z < 99; z++ )
					{
						responseArr.push( aResponse );
					}	
				}*/
	    }

	    //if( bLoadTest )
	    //	_myViewModel.debugMode( true );

	    if (responseArr.length > 0) {
	      m_statusToFilterOn = "";
	      if (resStatus1 > 0 && resStatus2 == 0)
	        m_statusToFilterOn = m_responseStatus1;
	      else if (resStatus2 > 0 && resStatus1 == 0)
	        m_statusToFilterOn = m_responseStatus2;

	      _myViewModel.cntPendingReview(count);
	      // $("#tabs").tabs(); //.show();

	      knockoutLatestExports.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);

	      //do this after push all because this takes some time
	      // var output = $("#responseTemplate").render(responseArr);
	      // $("#" + fbody).html(output);
	    }

	    //aleways calls this even if 0 responses
	    _myViewModel.doSort(true);
	  }

	  function LoadTabResponseInfoCoverSheets(oResponse) {
	    _myViewModel.arrCoverSheets([]);

	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();

	    var coverSheetLib = web
	      .get_lists()
	      .getByTitle(Audit.Common.Utilities.GetLibTitleCoverSheets());
	    var coverSheetQuery = new SP.CamlQuery();
	    coverSheetQuery.set_viewXml(
	      '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="ReqNum"/><Value Type="Text">' +
	        oResponse.request.number +
	        "</Value></Eq></Where></Query></View>"
	    );
	    const m_subsetCoverSheetItems = coverSheetLib.getItems(coverSheetQuery);
	    currCtx.load(
	      m_subsetCoverSheetItems,
	      "Include(ID, Title, ReqNum, ActionOffice, FileLeafRef, FileDirRef)"
	    );

	    var data = { oResponse: oResponse };
	    function OnSuccess(sender, args) {
	      var arrCS = new Array();

	      var listItemEnumerator = m_subsetCoverSheetItems.getEnumerator();
	      while (listItemEnumerator.moveNext()) {
	        var oListItem = listItemEnumerator.get_current();

	        if (oListItem.get_item("ActionOffice") != null) {
	          var arrActionOffice = oListItem.get_item("ActionOffice");
	          if (arrActionOffice.length > 0) {
	            for (var y = 0; y < arrActionOffice.length; y++) {
	              var curActionOffice = arrActionOffice[y].get_lookupValue();

	              if (curActionOffice == this.oResponse.actionOffice) {
	                var csFolder = oListItem.get_item("FileDirRef");
	                var csTitle = oListItem.get_item("FileLeafRef");

	                var encodedTitle = csTitle.replace(/'/g, "&#39");
	                arrCS.push({
	                  folder: csFolder,
	                  title: csTitle,
	                  link:
	                    "STSNavigate('../_layouts/download.aspx?SourceUrl=" +
	                    csFolder +
	                    "/" +
	                    encodedTitle +
	                    "')",
	                });

	                break;
	              }
	            }
	          }
	        }
	      }

	      knockoutLatestExports.utils.arrayPushAll(_myViewModel.arrCoverSheets(), arrCS);
	      _myViewModel.arrCoverSheets.valueHasMutated();
	    }
	    function OnFailure(sender, args) {}

	    currCtx.executeQueryAsync(
	      Function.createDelegate(data, OnSuccess),
	      Function.createDelegate(data, OnFailure)
	    );
	  }

	  function LoadTabResponseInfoResponseDocs(oResponse) {
	    _myViewModel.arrResponseDocs(null);
	    _myViewModel.cntResponseDocs(0);
	    _myViewModel.showUpload(false);
	    _myViewModel.showSubmit(false);

	    var currCtx = new SP.ClientContext.get_current();
	    var web = currCtx.get_web();

	    for (var z = 0; z < oResponse.responseDocs.length; z++) {
	      var oResponseDoc = oResponse.responseDocs[z];

	      //this loads on execute
	      oResponseDoc["docIcon"] = web.mapToIcon(
	        oResponseDoc.fileName,
	        "",
	        SP.Utilities.IconSize.Size16
	      ); // m_siteUrl + "/" + window.context.pageContext.legacyPageContext.layoutsUrl + "/images/" + docIcon;
	    }

	    function OnSuccess(sender, args) {
	      RenderResponses(oResponse);
	    }
	    function OnFailure(sender, args) {
	      alert(
	        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
	      );
	    }
	    currCtx.executeQueryAsync(OnSuccess, OnFailure);

	    function RenderResponses(oResponse) {
	      var cntAddedByAO = 0;

	      var arrResponseDocs = new Array();
	      for (var z = 0; z < oResponse.responseDocs.length; z++) {
	        var oResponseDoc = oResponse.responseDocs[z];
	        oResponseDoc.docIcon = oResponseDoc.docIcon.get_value();
	        oResponseDoc.styleTag = Audit.Common.Utilities.GetResponseDocStyleTag2(
	          oResponseDoc.documentStatus
	        );
	        oResponseDoc.responseTitle = oResponse.title;

	        if (
	          oResponseDoc.documentStatus == "Open" &&
	          (oResponse.resStatus == m_responseStatus1 ||
	            oResponse.resStatus == m_responseStatus2)
	        )
	          cntAddedByAO++;

	        arrResponseDocs.push(oResponseDoc);
	      }

	      if (m_curResponseSelectedIsEditableByAO) {
	        _myViewModel.showUpload(true);
	        if (cntAddedByAO > 0) _myViewModel.showSubmit(true);
	      }

	      var arrResponseSummary = {
	        responseTitle: oResponse.title,
	        responseDocs: arrResponseDocs,
	        responseStatus: oResponse.resStatus,
	      };
	      _myViewModel.arrResponseDocs(arrResponseSummary);
	      _myViewModel.arrResponseDocs.valueHasMutated();
	      _myViewModel.cntResponseDocs(oResponse.responseDocs.length);

	      if (
	        oResponse.resStatus == "1-Open" ||
	        oResponse.resStatus == "3-Returned to Action Office"
	      ) {
	        if (m_curResponseSelectedIsEditableByAO && cntAddedByAO > 0) {
	          addNotification(
	            "<div style='text-align:left'>Response documents have been added. <br/><br/>Your package <span style='font-weight:bold; color:red'>has not yet been submitted</span>. <br></br>Please review your documents and click on the link <b>SUBMIT this Response Package</b> below</div>");

	          $(".btnSubmitPackage")
	            .parent()
	            .css({ "background-color": "yellow", "font-weight": "inherit" });
	          $(".btnSubmitPackage").get(0).scrollIntoView();

	          function resetColor() {
	            $(".btnSubmitPackage")
	              .parent()
	              .css({ "background-color": "inherit", "font-weight": "inherit" });
	          }
	          setTimeout(function () {
	            resetColor();
	          }, 2000);
	        } else if (m_curResponseSelectedIsEditableByAO && cntAddedByAO == 0) {
	          addNotification(
	            "<div style='text-align:left'>Please review the Response Information and any CoverSheets/Supplemental Documents. <br/><br/>Then, click the link to <span style='font-weight:bold; color:gree'>Upload Response Documents</span> pertaining to this Response</div>");
	        }
	      }
	    }
	  }

	  function m_fnFormatEmailBodyToIAFromAO(oRequest, responseTitle) {
	    var emailText =
	      "<div>Audit Request Reference: <b>{REQUEST_NUMBER}</b></div>" +
	      "<div>Audit Request Subject: <b>{REQUEST_SUBJECT}</b></div>" +
	      "<div>Audit Request Due Date: <b>{REQUEST_DUEDATE}</b></div><br/>" +
	      "<div>Below is the Response that was submitted: </div>" +
	      "<div>{RESPONSE_TITLE}</div>";

	    emailText = emailText.replace("{REQUEST_NUMBER}", oRequest.number);
	    emailText = emailText.replace("{REQUEST_SUBJECT}", oRequest.subject);
	    emailText = emailText.replace(
	      "{REQUEST_DUEDATE}",
	      oRequest.internalDueDate
	    );

	    var responseTitleBody = "<ul><li>" + responseTitle + "</li></ul>";
	    emailText = emailText.replace("{RESPONSE_TITLE}", responseTitleBody);

	    return emailText;
	  }

	  function m_fnSubmitPackage() {
	    var responseToSubmit = $("#ddlResponsesOpen").val();
	    if (
	      confirm(
	        "Are you sure you would like to submit these response documents? Note: You will NOT be able to make changes or upload any more documents after you submit this package."
	      )
	    ) {
	      const submitPackageTask = addTask(submitPackageTaskDef);

	      m_bIsTransactionExecuting = true;

	      var currCtx = new SP.ClientContext.get_current();
	      var web = currCtx.get_web();

	      var folderPath =
	        Audit.Common.Utilities.GetSiteUrl() +
	        "/" +
	        Audit.Common.Utilities.GetLibNameResponseDocs() +
	        "/" +
	        responseToSubmit;
	      var responseDocLib = web
	        .get_lists()
	        .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
	      var responseDocQuery = new SP.CamlQuery();
	      responseDocQuery.set_viewXml(
	        "<View Scope=\"RecursiveAll\"><Query><Where><And><Eq><FieldRef Name='FileDirRef'/><Value Type='Text'>" +
	          folderPath +
	          "</Value></Eq><Eq><FieldRef Name='DocumentStatus'/><Value Type='Text'>Open</Value></Eq></And></Where></Query></View>"
	      );
	      const responseDocOpenItems = responseDocLib.getItems(responseDocQuery);
	      currCtx.load(
	        responseDocOpenItems,
	        "Include(ID, DocumentStatus, FileDirRef)"
	      );

	      var emailList = web
	        .get_lists()
	        .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
	      var emailListQuery = new SP.CamlQuery();
	      emailListQuery.set_viewXml(
	        '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
	      );
	      const emailListFolderItems = emailList.getItems(emailListQuery);
	      currCtx.load(emailListFolderItems, "Include(ID, Title, DisplayName)");

	      function OnSuccessLoadedResponseDocs(sender, args) {
	        var ctOpenResponseDocs = 0;
	        if (responseDocOpenItems != null) {
	          var listItemEnumerator = responseDocOpenItems.getEnumerator();
	          while (listItemEnumerator.moveNext()) {
	            var oListItem = listItemEnumerator.get_current();
	            oListItem.set_item("DocumentStatus", "Submitted");
	            oListItem.update();
	            ctOpenResponseDocs++;
	          }
	        }

	        if (ctOpenResponseDocs == 0) {
	          alert("Please upload a Response document.");
	          submitPackageTask.addStatus(
	            "Please upload a Response document.",
	            false
	          );

	          finishTask(submitPackageTask);
	          return;
	        }

	        var oRequest = null;
	        try {
	          var bigMapItem = m_bigMap["response-" + responseToSubmit];
	          var indexOfArrResponses = bigMapItem.arrIndex;
	          const oResponse = m_arrResponses[indexOfArrResponses];
	          if (oResponse) {
	            oRequest = oResponse.request;

	            var responseList = currCtx
	              .get_web()
	              .get_lists()
	              .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
	            const responseItem = responseList.getItemById(oResponse.ID);
	            responseItem.set_item("ResStatus", "2-Submitted");
	            responseItem.update();
	          }
	        } catch (err) {
	          alert(err);
	          Audit.Common.Utilities.Refresh();
	        }

	        if (oRequest == null) {
	          finishTask(submitPackageTask);
	          return;
	        }

	        var emailSubject =
	          "A Response has been Submitted by an Action Office: " +
	          oRequest.number;
	        var emailText = m_fnFormatEmailBodyToIAFromAO(
	          oRequest,
	          responseToSubmit
	        );

	        var itemCreateInfo = new SP.ListItemCreationInformation();
	        itemCreateInfo.set_folderUrl(
	          location.protocol +
	            "//" +
	            location.host +
	            Audit.Common.Utilities.GetSiteUrl() +
	            "/Lists/" +
	            Audit.Common.Utilities.GetListNameEmailHistory() +
	            "/" +
	            oRequest.number
	        );
	        oListItem = emailList.addItem(itemCreateInfo);
	        oListItem.set_item("Title", emailSubject);
	        oListItem.set_item("Body", emailText);
	        oListItem.set_item("To", m_IA_ActionOffice.title);
	        oListItem.set_item("ReqNum", oRequest.number);
	        oListItem.set_item("ResID", responseToSubmit);
	        oListItem.set_item("NotificationType", "IA Notification");
	        oListItem.update();

	        function OnSuccessUpdateResponse(sender, args) {
	          document.body.style.cursor = "default";

	          finishTask(submitPackageTask);
	          Audit.Common.Utilities.Refresh();
	        }
	        function OnFailureUpdateResponse(sender, args) {
	          submitPackageTask.addStatus(
	            "Request failed: " +
	              args.get_message() +
	              "\n" +
	              args.get_stackTrace()
	          );

	          finishTask(submitPackageTask);
	        }

	        currCtx.executeQueryAsync(
	          OnSuccessUpdateResponse,
	          OnFailureUpdateResponse
	        );
	      }

	      function OnFailureLoadedResponseDocs(sender, args) {
	        submitPackageTask.addStatus(
	          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
	        );

	        // finishTask(submitPackageTask)
	      }

	      currCtx.executeQueryAsync(
	        OnSuccessLoadedResponseDocs,
	        OnFailureLoadedResponseDocs
	      );
	    }
	  }

	  function m_fnMarkForDeletionResponseDoc(itemID) {
	    if (
	      confirm("Are you sure you would like to Delete this Response Document?")
	    ) {
	      var currCtx = new SP.ClientContext();
	      var responseDocsLib = currCtx
	        .get_web()
	        .get_lists()
	        .getByTitle(Audit.Common.Utilities.GetLibNameResponseDocs());

	      const oListItem = responseDocsLib.getItemById(itemID);
	      oListItem.set_item("DocumentStatus", "Marked for Deletion");
	      oListItem.update();

	      function OnSuccess(sender, args) {
	        Audit.Common.Utilities.Refresh();
	      }
	      function OnFailure(sender, args) {
	        alert(
	          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
	        );
	      }
	      currCtx.executeQueryAsync(OnSuccess, OnFailure);
	    }
	  }

	  function BindHandlersOnLoad() {
	    BindPrintButton(
	      "#btnPrint1",
	      "#divStatusReportRespones",
	      "Action Office Response Status Report"
	    );
	    //////////Note: for the export to work, make sure this is added to the html: <iframe id="CsvExpFrame" style="display: none"></iframe>
	    BindExportButton(
	      ".export1",
	      "AOResponseStatusReport_",
	      "tblStatusReportResponses"
	    );
	  }

	  function BindPrintButton(btnPrint, divTbl, pageTitle) {
	    $(btnPrint).on("click", function () {
	      Audit.Common.Utilities.PrintStatusReport(pageTitle, divTbl);
	    });
	  }

	  function BindExportButton(btnExport, fileNamePrefix, tbl) {
	    $(btnExport).on("click", function (event) {
	      var curDate = new Date().format("yyyyMMdd_hhmmtt");
	      Audit.Common.Utilities.ExportToCsv(fileNamePrefix + curDate, tbl);
	    });
	  }

	  function GoToResponse(response) {
	    //$("#tabs").tabs({ active: 1 });
	    _myViewModel.tabs.selectById(_myViewModel.tabOpts.ResponseDetail.id);

	    if (response) {
	      response = m_bigMap["response-" + response];

	      var requestStatus = response.request.status;
	      var responseStatus = response.resStatus;
	      if (
	        (responseStatus == m_responseStatus1 ||
	          responseStatus == m_responseStatus2) &&
	        (requestStatus == "Open" || requestStatus == "ReOpened")
	      )
	        _myViewModel.filterResponseInfoTabResponseNameOpen2(response.title);
	      else
	        _myViewModel.filterResponseInfoTabResponseNameProcessed2(
	          response.title
	        );
	    }
	  }

	  var publicMembers = {
	    GoToResponse: GoToResponse,
	    IsTransactionExecuting: function () {
	      return m_bIsTransactionExecuting;
	    },
	  };

	  return publicMembers;
	};

	exports.load = load;

}));
//# sourceMappingURL=ao_db.umd.js.map
