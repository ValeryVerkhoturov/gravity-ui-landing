(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3598],{3528:function(n,t,r){"use strict";var o,e;r.d(t,{Pe:function(){return f},Uo:function(){return o},iE:function(){return a},jQ:function(){return i}}),(e=o||(o={})).Ru="ru",e.En="en";let u=[],c={lang:o.En},i=n=>{Object.assign(c,n),u.forEach(n=>{n(c)})},f=n=>(u.push(n),()=>{u=u.filter(t=>t!==n)}),a=()=>c},86556:function(n,t,r){var o=r(89465),e=r(77813);n.exports=function(n,t,r){(void 0===r||e(n[t],r))&&(void 0!==r||t in n)||o(n,t,r)}},34865:function(n,t,r){var o=r(89465),e=r(77813),u=Object.prototype.hasOwnProperty;n.exports=function(n,t,r){var c=n[t];u.call(n,t)&&e(c,r)&&(void 0!==r||t in n)||o(n,t,r)}},89465:function(n,t,r){var o=r(38777);n.exports=function(n,t,r){"__proto__"==t&&o?o(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}},3118:function(n,t,r){var o=r(13218),e=Object.create,u=function(){function n(){}return function(t){if(!o(t))return{};if(e)return e(t);n.prototype=t;var r=new n;return n.prototype=void 0,r}}();n.exports=u},10313:function(n,t,r){var o=r(13218),e=r(25726),u=r(33498),c=Object.prototype.hasOwnProperty;n.exports=function(n){if(!o(n))return u(n);var t=e(n),r=[];for(var i in n)"constructor"==i&&(t||!c.call(n,i))||r.push(i);return r}},42980:function(n,t,r){var o=r(46384),e=r(86556),u=r(28483),c=r(59783),i=r(13218),f=r(81704),a=r(36390);n.exports=function n(t,r,p,s,v){t!==r&&u(r,function(u,f){if(v||(v=new o),i(u))c(t,r,f,p,n,s,v);else{var l=s?s(a(t,f),u,f+"",t,r,v):void 0;void 0===l&&(l=u),e(t,f,l)}},f)}},59783:function(n,t,r){var o=r(86556),e=r(64626),u=r(77133),c=r(6450),i=r(38517),f=r(35694),a=r(1469),p=r(29246),s=r(44144),v=r(23560),l=r(13218),d=r(68630),y=r(36719),b=r(36390),O=r(59881);n.exports=function(n,t,r,x,_,h,g){var w=b(n,r),j=b(t,r),E=g.get(j);if(E){o(n,r,E);return}var P=h?h(w,j,r+"",n,t,g):void 0,S=void 0===P;if(S){var N=a(j),m=!N&&s(j),T=!N&&!m&&y(j);P=j,N||m||T?a(w)?P=w:p(w)?P=c(w):m?(S=!1,P=e(j,!0)):T?(S=!1,P=u(j,!0)):P=[]:d(j)||f(j)?(P=w,f(w)?P=O(w):(!l(w)||v(w))&&(P=i(j))):S=!1}S&&(g.set(j,P),_(P,j,x,h,g),g.delete(j)),o(n,r,P)}},74318:function(n,t,r){var o=r(11149);n.exports=function(n){var t=new n.constructor(n.byteLength);return new o(t).set(new o(n)),t}},64626:function(n,t,r){n=r.nmd(n);var o=r(55639),e=t&&!t.nodeType&&t,u=e&&n&&!n.nodeType&&n,c=u&&u.exports===e?o.Buffer:void 0,i=c?c.allocUnsafe:void 0;n.exports=function(n,t){if(t)return n.slice();var r=n.length,o=i?i(r):new n.constructor(r);return n.copy(o),o}},77133:function(n,t,r){var o=r(74318);n.exports=function(n,t){var r=t?o(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}},6450:function(n){n.exports=function(n,t){var r=-1,o=n.length;for(t||(t=Array(o));++r<o;)t[r]=n[r];return t}},98363:function(n,t,r){var o=r(34865),e=r(89465);n.exports=function(n,t,r,u){var c=!r;r||(r={});for(var i=-1,f=t.length;++i<f;){var a=t[i],p=u?u(r[a],n[a],a,r,n):void 0;void 0===p&&(p=n[a]),c?e(r,a,p):o(r,a,p)}return r}},21463:function(n,t,r){var o=r(5976),e=r(16612);n.exports=function(n){return o(function(t,r){var o=-1,u=r.length,c=u>1?r[u-1]:void 0,i=u>2?r[2]:void 0;for(c=n.length>3&&"function"==typeof c?(u--,c):void 0,i&&e(r[0],r[1],i)&&(c=u<3?void 0:c,u=1),t=Object(t);++o<u;){var f=r[o];f&&n(t,f,o,c)}return t})}},85924:function(n,t,r){var o=r(5569)(Object.getPrototypeOf,Object);n.exports=o},38517:function(n,t,r){var o=r(3118),e=r(85924),u=r(25726);n.exports=function(n){return"function"!=typeof n.constructor||u(n)?{}:o(e(n))}},33498:function(n){n.exports=function(n){var t=[];if(null!=n)for(var r in Object(n))t.push(r);return t}},36390:function(n){n.exports=function(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}},29246:function(n,t,r){var o=r(98612),e=r(37005);n.exports=function(n){return e(n)&&o(n)}},68630:function(n,t,r){var o=r(44239),e=r(85924),u=r(37005),c=Object.prototype,i=Function.prototype.toString,f=c.hasOwnProperty,a=i.call(Object);n.exports=function(n){if(!u(n)||"[object Object]"!=o(n))return!1;var t=e(n);if(null===t)return!0;var r=f.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&i.call(r)==a}},81704:function(n,t,r){var o=r(14636),e=r(10313),u=r(98612);n.exports=function(n){return u(n)?o(n,!0):e(n)}},82492:function(n,t,r){var o=r(42980),e=r(21463)(function(n,t,r){o(n,t,r)});n.exports=e},59881:function(n,t,r){var o=r(98363),e=r(81704);n.exports=function(n){return o(n,e(n))}},70994:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/[sectionId]",function(){return r(87040)}])},87040:function(n,t,r){"use strict";r.r(t),r.d(t,{DesignSectionPage:function(){return p},__N_SSG:function(){return s},default:function(){return v}});var o=r(85893),e=r(5233),u=r(11163),c=r(67294),i=r(7825),f=r(7532),a=r(31489);let p=n=>{let{sectionId:t}=n,{i18n:r}=(0,e.$G)(),p=(0,u.useRouter)(),s=f.N.find(n=>n.id===t);return s?(c.useEffect(()=>{let n=s.articles[0];n?p.replace((0,a.n6)("/design/".concat(s.id,"/").concat(n.id),r)):p.replace((0,a.n6)("/",r))},[]),(0,o.jsx)(i.A,{title:s.title})):null};var s=!0,v=p},97582:function(n,t,r){"use strict";r.d(t,{_T:function(){return e},pi:function(){return o}});var o=function(){return(o=Object.assign||function(n){for(var t,r=1,o=arguments.length;r<o;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}).apply(this,arguments)};function e(n,t){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&0>t.indexOf(o)&&(r[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,o=Object.getOwnPropertySymbols(n);e<o.length;e++)0>t.indexOf(o[e])&&Object.prototype.propertyIsEnumerable.call(n,o[e])&&(r[o[e]]=n[o[e]]);return r}"function"==typeof SuppressedError&&SuppressedError}},function(n){n.O(0,[3662,1287,6383,1893,7825,7532,2888,9774,179],function(){return n(n.s=70994)}),_N_E=n.O()}]);