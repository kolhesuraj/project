(self.webpackChunkProject=self.webpackChunkProject||[]).push([[935],{3935:($e,R,D)=>{"use strict";D.d(R,{XJ:()=>Ee,k$:()=>Ae});var ae=D(6895),H=D(2735),f=D(4650),Te=D(1481);const ie=new f.OlP("Config for DOMPurify",{factory:()=>({}),providedIn:"root"}),B=new f.OlP("Hooks for DOMPurify",{factory:()=>[],providedIn:"root"}),oe=new f.OlP("A function that sanitizes value for a CSS rule",{factory:()=>v=>v,providedIn:"root"}),ye=H;class M{constructor(c,p,{defaultView:g},W){this.config=c,this.sanitizeStyle=p,this.domPurify=ye(g),W.forEach(({name:Y,hook:Z})=>{this.domPurify.addHook(Y,Z)})}sanitize(c,p,g=this.config){if(c===f.q3G.SCRIPT)throw new Error("DOMPurify does not support SCRIPT context");return c===f.q3G.STYLE?this.sanitizeStyle(String(p)):this.domPurify.sanitize(String(p||""),g)}}M.\u0275fac=function(c){return new(c||M)(f.LFG(ie),f.LFG(oe),f.LFG(ae.K0),f.LFG(B))},M.\u0275prov=f.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M.ngInjectableDef=(0,f.Ez6)({factory:function(){return new M((0,f.f3M)(ie),(0,f.f3M)(oe),(0,f.f3M)(ae.K0),(0,f.f3M)(B))},token:M,providedIn:"root"});let Ee=(()=>{class v{constructor(p,g){this.sanitizer=p,this.domSanitizer=g}transform(p,g=f.q3G.HTML,W){return this.bypassSecurityTrust(g,this.sanitizer.sanitize(g,p,W))}bypassSecurityTrust(p,g){switch(p){case f.q3G.HTML:return this.domSanitizer.bypassSecurityTrustHtml(g);case f.q3G.STYLE:return this.domSanitizer.bypassSecurityTrustStyle(g);case f.q3G.URL:return this.domSanitizer.bypassSecurityTrustUrl(g);case f.q3G.RESOURCE_URL:return this.domSanitizer.bypassSecurityTrustResourceUrl(g);default:return null}}}return v.\u0275fac=function(p){return new(p||v)(f.Y36(M,16),f.Y36(Te.H7,16))},v.\u0275pipe=f.Yjl({name:"dompurify",type:v,pure:!0}),v})(),Ae=(()=>{class v{}return v.\u0275fac=function(p){return new(p||v)},v.\u0275mod=f.oAB({type:v}),v.\u0275inj=f.cJS({}),v})()},2735:function($e){$e.exports=function(){"use strict";function R(r){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(r)}function D(r,a){return(D=Object.setPrototypeOf||function(s,m){return s.__proto__=m,s})(r,a)}function ae(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function H(r,a,o){return(H=ae()?Reflect.construct:function(m,w,P){var I=[null];I.push.apply(I,w);var ee=new(Function.bind.apply(m,I));return P&&D(ee,P.prototype),ee}).apply(null,arguments)}function O(r){return function f(r){if(Array.isArray(r))return B(r)}(r)||function Te(r){if(typeof Symbol<"u"&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function ie(r,a){if(r){if("string"==typeof r)return B(r,a);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return B(r,a)}}(r)||function oe(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(r,a){(null==a||a>r.length)&&(a=r.length);for(var o=0,s=new Array(a);o<a;o++)s[o]=r[o];return s}var ye=Object.hasOwnProperty,M=Object.setPrototypeOf,Ee=Object.isFrozen,Ae=Object.getPrototypeOf,v=Object.getOwnPropertyDescriptor,c=Object.freeze,p=Object.seal,g=Object.create,W=typeof Reflect<"u"&&Reflect,Y=W.apply,Z=W.construct;Y||(Y=function(a,o,s){return a.apply(o,s)}),c||(c=function(a){return a}),p||(p=function(a){return a}),Z||(Z=function(a,o){return H(a,O(o))});var gt=N(Array.prototype.forEach),Ke=N(Array.prototype.pop),J=N(Array.prototype.push),le=N(String.prototype.toLowerCase),St=N(String.prototype.match),F=N(String.prototype.replace),bt=N(String.prototype.indexOf),Dt=N(String.prototype.trim),S=N(RegExp.prototype.test),ge=function Ot(r){return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return Z(r,o)}}(TypeError);function N(r){return function(a){for(var o=arguments.length,s=new Array(o>1?o-1:0),m=1;m<o;m++)s[m-1]=arguments[m];return Y(r,a,s)}}function l(r,a,o){o=o||le,M&&M(r,null);for(var s=a.length;s--;){var m=a[s];if("string"==typeof m){var w=o(m);w!==m&&(Ee(a)||(a[s]=w),m=w)}r[m]=!0}return r}function z(r){var o,a=g(null);for(o in r)Y(ye,r,[o])&&(a[o]=r[o]);return a}function se(r,a){for(;null!==r;){var o=v(r,a);if(o){if(o.get)return N(o.get);if("function"==typeof o.value)return N(o.value)}r=Ae(r)}return function s(m){return console.warn("fallback value for",m),null}}var qe=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Se=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),be=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Mt=c(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),De=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Rt=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xe=c(["#text"]),Ve=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Oe=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ze=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ue=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Nt=p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Lt=p(/<%[\w\W]*|[\w\W]*%>/gm),wt=p(/^data-[\-\w.\u00B7-\uFFFF]/),It=p(/^aria-[\-\w]+$/),Ct=p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Pt=p(/^(?:\w+script|data):/i),kt=p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),xt=p(/^html$/i),Ft=function(){return typeof window>"u"?null:window},Ut=function(a,o){if("object"!==R(a)||"function"!=typeof a.createPolicy)return null;var s=null,m="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(m)&&(s=o.currentScript.getAttribute(m));var w="dompurify"+(s?"#"+s:"");try{return a.createPolicy(w,{createHTML:function(I){return I},createScriptURL:function(I){return I}})}catch{return console.warn("TrustedTypes policy "+w+" could not be created."),null}};return function Je(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft(),a=function(e){return Je(e)};if(a.version="2.4.0",a.removed=[],!r||!r.document||9!==r.document.nodeType)return a.isSupported=!1,a;var o=r.document,s=r.document,m=r.DocumentFragment,w=r.HTMLTemplateElement,P=r.Node,I=r.Element,Q=r.NodeFilter,ee=r.NamedNodeMap,zt=void 0===ee?r.NamedNodeMap||r.MozNamedAttrMap:ee,Gt=r.HTMLFormElement,Bt=r.DOMParser,fe=r.trustedTypes,ce=I.prototype,Wt=se(ce,"cloneNode"),Yt=se(ce,"nextSibling"),jt=se(ce,"childNodes"),Me=se(ce,"parentNode");if("function"==typeof w){var Re=s.createElement("template");Re.content&&Re.content.ownerDocument&&(s=Re.content.ownerDocument)}var L=Ut(fe,o),Qe=L?L.createHTML(""):"",Ne=s.implementation,$t=s.createNodeIterator,Kt=s.createDocumentFragment,qt=s.getElementsByTagName,Xt=o.importNode,et={};try{et=z(s).documentMode?s.documentMode:{}}catch{}var C={};a.isSupported="function"==typeof Me&&Ne&&typeof Ne.createHTMLDocument<"u"&&9!==et;var X,_,Le=Nt,we=Lt,Vt=wt,Zt=It,Jt=Pt,tt=kt,Ie=Ct,h=null,rt=l({},[].concat(O(qe),O(Se),O(be),O(De),O(Xe))),T=null,nt=l({},[].concat(O(Ve),O(Oe),O(Ze),O(ue))),d=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),te=null,Ce=null,at=!0,Pe=!0,it=!1,j=!1,G=!1,ke=!1,xe=!1,$=!1,me=!1,de=!1,ot=!0,lt=!1,Qt="user-content-",Fe=!0,re=!1,K={},q=null,st=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ut=null,ft=l({},["audio","video","img","source","image","track"]),Ue=null,ct=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),He="http://www.w3.org/1998/Math/MathML",ze="http://www.w3.org/2000/svg",U="http://www.w3.org/1999/xhtml",ve=U,Ge=!1,er=["application/xhtml+xml","text/html"],tr="text/html",V=null,rr=s.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},Be=function(e){V&&V===e||((!e||"object"!==R(e))&&(e={}),e=z(e),X=X=-1===er.indexOf(e.PARSER_MEDIA_TYPE)?tr:e.PARSER_MEDIA_TYPE,_="application/xhtml+xml"===X?function(t){return t}:le,h="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,_):rt,T="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,_):nt,Ue="ADD_URI_SAFE_ATTR"in e?l(z(ct),e.ADD_URI_SAFE_ATTR,_):ct,ut="ADD_DATA_URI_TAGS"in e?l(z(ft),e.ADD_DATA_URI_TAGS,_):ft,q="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,_):st,te="FORBID_TAGS"in e?l({},e.FORBID_TAGS,_):{},Ce="FORBID_ATTR"in e?l({},e.FORBID_ATTR,_):{},K="USE_PROFILES"in e&&e.USE_PROFILES,at=!1!==e.ALLOW_ARIA_ATTR,Pe=!1!==e.ALLOW_DATA_ATTR,it=e.ALLOW_UNKNOWN_PROTOCOLS||!1,j=e.SAFE_FOR_TEMPLATES||!1,G=e.WHOLE_DOCUMENT||!1,$=e.RETURN_DOM||!1,me=e.RETURN_DOM_FRAGMENT||!1,de=e.RETURN_TRUSTED_TYPE||!1,xe=e.FORCE_BODY||!1,ot=!1!==e.SANITIZE_DOM,lt=e.SANITIZE_NAMED_PROPS||!1,Fe=!1!==e.KEEP_CONTENT,re=e.IN_PLACE||!1,Ie=e.ALLOWED_URI_REGEXP||Ie,ve=e.NAMESPACE||U,e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(d.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),j&&(Pe=!1),me&&($=!0),K&&(h=l({},O(Xe)),T=[],!0===K.html&&(l(h,qe),l(T,Ve)),!0===K.svg&&(l(h,Se),l(T,Oe),l(T,ue)),!0===K.svgFilters&&(l(h,be),l(T,Oe),l(T,ue)),!0===K.mathMl&&(l(h,De),l(T,Ze),l(T,ue))),e.ADD_TAGS&&(h===rt&&(h=z(h)),l(h,e.ADD_TAGS,_)),e.ADD_ATTR&&(T===nt&&(T=z(T)),l(T,e.ADD_ATTR,_)),e.ADD_URI_SAFE_ATTR&&l(Ue,e.ADD_URI_SAFE_ATTR,_),e.FORBID_CONTENTS&&(q===st&&(q=z(q)),l(q,e.FORBID_CONTENTS,_)),Fe&&(h["#text"]=!0),G&&l(h,["html","head","body"]),h.table&&(l(h,["tbody"]),delete te.tbody),c&&c(e),V=e)},mt=l({},["mi","mo","mn","ms","mtext"]),dt=l({},["foreignobject","desc","title","annotation-xml"]),nr=l({},["title","style","font","a","script"]),he=l({},Se);l(he,be),l(he,Mt);var We=l({},De);l(We,Rt);var ar=function(e){var t=Me(e);(!t||!t.tagName)&&(t={namespaceURI:U,tagName:"template"});var n=le(e.tagName),u=le(t.tagName);return e.namespaceURI===ze?t.namespaceURI===U?"svg"===n:t.namespaceURI===He?"svg"===n&&("annotation-xml"===u||mt[u]):Boolean(he[n]):e.namespaceURI===He?t.namespaceURI===U?"math"===n:t.namespaceURI===ze?"math"===n&&dt[u]:Boolean(We[n]):e.namespaceURI===U&&!(t.namespaceURI===ze&&!dt[u]||t.namespaceURI===He&&!mt[u])&&!We[n]&&(nr[n]||!he[n])},k=function(e){J(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Qe}catch{e.remove()}}},Ye=function(e,t){try{J(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch{J(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!T[e])if($||me)try{k(t)}catch{}else try{t.setAttribute(e,"")}catch{}},vt=function(e){var t,n;if(xe)e="<remove></remove>"+e;else{var u=St(e,/^[\r\n\t ]+/);n=u&&u[0]}"application/xhtml+xml"===X&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var b=L?L.createHTML(e):e;if(ve===U)try{t=(new Bt).parseFromString(b,X)}catch{}if(!t||!t.documentElement){t=Ne.createDocument(ve,"template",null);try{t.documentElement.innerHTML=Ge?"":b}catch{}}var E=t.body||t.documentElement;return e&&n&&E.insertBefore(s.createTextNode(n),E.childNodes[0]||null),ve===U?qt.call(t,G?"html":"body")[0]:G?t.documentElement:E},ht=function(e){return $t.call(e.ownerDocument||e,e,Q.SHOW_ELEMENT|Q.SHOW_COMMENT|Q.SHOW_TEXT,null,!1)},ir=function(e){return e instanceof Gt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof zt)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},ne=function(e){return"object"===R(P)?e instanceof P:e&&"object"===R(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},x=function(e,t,n){!C[e]||gt(C[e],function(u){u.call(a,t,n,V)})},_t=function(e){var t;if(x("beforeSanitizeElements",e,null),ir(e)||S(/[\u0080-\uFFFF]/,e.nodeName))return k(e),!0;var n=_(e.nodeName);if(x("uponSanitizeElement",e,{tagName:n,allowedTags:h}),e.hasChildNodes()&&!ne(e.firstElementChild)&&(!ne(e.content)||!ne(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent)||"select"===n&&S(/<template/i,e.innerHTML))return k(e),!0;if(!h[n]||te[n]){if(!te[n]&&yt(n)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n)))return!1;if(Fe&&!q[n]){var u=Me(e)||e.parentNode,b=jt(e)||e.childNodes;if(b&&u)for(var y=b.length-1;y>=0;--y)u.insertBefore(Wt(b[y],!0),Yt(e))}return k(e),!0}return e instanceof I&&!ar(e)||("noscript"===n||"noembed"===n)&&S(/<\/no(script|embed)/i,e.innerHTML)?(k(e),!0):(j&&3===e.nodeType&&(t=F(t=e.textContent,Le," "),t=F(t,we," "),e.textContent!==t&&(J(a.removed,{element:e.cloneNode()}),e.textContent=t)),x("afterSanitizeElements",e,null),!1)},Tt=function(e,t,n){if(ot&&("id"===t||"name"===t)&&(n in s||n in rr))return!1;if((!Pe||Ce[t]||!S(Vt,t))&&(!at||!S(Zt,t)))if(!T[t]||Ce[t]){if(!(yt(e)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,e)||d.tagNameCheck instanceof Function&&d.tagNameCheck(e))&&(d.attributeNameCheck instanceof RegExp&&S(d.attributeNameCheck,t)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(t))||"is"===t&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n))))return!1}else if(!Ue[t]&&!S(Ie,F(n,tt,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==bt(n,"data:")||!ut[e])&&(!it||S(Jt,F(n,tt,"")))&&n)return!1;return!0},yt=function(e){return e.indexOf("-")>0},Et=function(e){var t,n,u,b;x("beforeSanitizeAttributes",e,null);var E=e.attributes;if(E){var y={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};for(b=E.length;b--;){var A=(t=E[b]).name,je=t.namespaceURI;if(n="value"===A?t.value:Dt(t.value),u=_(A),y.attrName=u,y.attrValue=n,y.keepAttr=!0,y.forceKeepAttr=void 0,x("uponSanitizeAttribute",e,y),n=y.attrValue,!y.forceKeepAttr&&(Ye(A,e),y.keepAttr)){if(S(/\/>/i,n)){Ye(A,e);continue}j&&(n=F(n,Le," "),n=F(n,we," "));var At=_(e.nodeName);if(Tt(At,u,n)){if(lt&&("id"===u||"name"===u)&&(Ye(A,e),n=Qt+n),L&&"object"===R(fe)&&"function"==typeof fe.getAttributeType&&!je)switch(fe.getAttributeType(At,u)){case"TrustedHTML":n=L.createHTML(n);break;case"TrustedScriptURL":n=L.createScriptURL(n)}try{je?e.setAttributeNS(je,A,n):e.setAttribute(A,n),Ke(a.removed)}catch{}}}}x("afterSanitizeAttributes",e,null)}},or=function i(e){var t,n=ht(e);for(x("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)x("uponSanitizeShadowNode",t,null),!_t(t)&&(t.content instanceof m&&i(t.content),Et(t));x("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(i){var t,n,u,b,E,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Ge=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!ne(i)){if("function"!=typeof i.toString)throw ge("toString is not a function");if("string"!=typeof(i=i.toString()))throw ge("dirty is not a string, aborting")}if(!a.isSupported){if("object"===R(r.toStaticHTML)||"function"==typeof r.toStaticHTML){if("string"==typeof i)return r.toStaticHTML(i);if(ne(i))return r.toStaticHTML(i.outerHTML)}return i}if(ke||Be(e),a.removed=[],"string"==typeof i&&(re=!1),re){if(i.nodeName){var y=_(i.nodeName);if(!h[y]||te[y])throw ge("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof P)1===(n=(t=vt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!$&&!j&&!G&&-1===i.indexOf("<"))return L&&de?L.createHTML(i):i;if(!(t=vt(i)))return $?null:de?Qe:""}t&&xe&&k(t.firstChild);for(var _e=ht(re?i:t);u=_e.nextNode();)3===u.nodeType&&u===b||_t(u)||(u.content instanceof m&&or(u.content),Et(u),b=u);if(b=null,re)return i;if($){if(me)for(E=Kt.call(t.ownerDocument);t.firstChild;)E.appendChild(t.firstChild);else E=t;return T.shadowroot&&(E=Xt.call(o,E,!0)),E}var A=G?t.outerHTML:t.innerHTML;return G&&h["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(xt,t.ownerDocument.doctype.name)&&(A="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+A),j&&(A=F(A,Le," "),A=F(A,we," ")),L&&de?L.createHTML(A):A},a.setConfig=function(i){Be(i),ke=!0},a.clearConfig=function(){V=null,ke=!1},a.isValidAttribute=function(i,e,t){V||Be({});var n=_(i),u=_(e);return Tt(n,u,t)},a.addHook=function(i,e){"function"==typeof e&&(C[i]=C[i]||[],J(C[i],e))},a.removeHook=function(i){if(C[i])return Ke(C[i])},a.removeHooks=function(i){C[i]&&(C[i]=[])},a.removeAllHooks=function(){C={}},a}()}()}}]);