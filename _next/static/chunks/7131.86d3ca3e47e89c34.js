(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7131],{98085:function(e,t,n){"use strict";var a,r;n.d(t,{m:function(){return c}});let l=/{{(.*?)}}/g,s={EmptyKeyset:"EMPTY_KEYSET",EmptyLanguageData:"EMPTY_LANGUAGE_DATA",KeysetNotFound:"KEYSET_NOT_FOUND",MissingKey:"MISSING_KEY",MissingKeyFor0:"MISSING_KEY_FOR_0",MissingKeyParamsCount:"MISSING_KEY_PARAMS_COUNT",MissingKeyPlurals:"MISSING_KEY_PLURALS",NoLanguageData:"NO_LANGUAGE_DATA"};function i(e){let{code:t,fallbackLang:n,lang:a}=e,r=`Using language ${a}. `;switch(t){case s.EmptyKeyset:r+="Keyset is empty.";break;case s.EmptyLanguageData:r+="Language data is empty.";break;case s.KeysetNotFound:r+="Keyset not found.";break;case s.MissingKey:r+="Missing key.";break;case s.MissingKeyFor0:return r+"Missing key for 0";case s.MissingKeyParamsCount:r+="Missing params.count for key.";break;case s.MissingKeyPlurals:r+="Missing required plurals.";break;case s.NoLanguageData:r=`Language "${a}" is not defined, make sure you call setLang for the same language you called registerKeysets for!`}return n&&(r+=` Trying to use fallback language "${n}"...`),r}function o(e,t){return 0===e?t.None:1===e||-1===e?t.One:t.Many}function u(e,t){let n=Math.abs(e%10),a=Math.abs(e%100);return 0===e?t.None:1===n&&11!==a?t.One:n>1&&n<5&&(a<10||a>20)?t.Few:t.Many}Object.values(s),(r=a||(a={}))[r.One=0]="One",r[r.Few=1]="Few",r[r.Many=2]="Many",r[r.None=3]="None";class c{constructor(e={}){this.data={},this.pluralizers={en:o,ru:u},this.logger=null;let{data:t,fallbackLang:n,lang:a,logger:r=null}=e;this.fallbackLang=n,this.lang=a,this.logger=r,t&&Object.entries(t).forEach(([e,t])=>{this.registerKeysets(e,t)})}setLang(e){this.lang=e}setFallbackLang(e){this.fallbackLang=e}configurePluralization(e){this.pluralizers=Object.assign({},this.pluralizers,e)}registerKeyset(e,t,n={}){let a=this.data[e]&&Object.prototype.hasOwnProperty.call(this.data[e],t);if(a)throw Error(`Keyset '${t}' is already registered, aborting!`);a&&this.warn(`Keyset '${t}' is already registered.`),this.data[e]=Object.assign({},this.data[e],{[t]:n})}registerKeysets(e,t){Object.keys(t).forEach(n=>{this.registerKeyset(e,n,t[n])})}has(e,t,n){var a;let r=this.getLanguageData(n);return!!(r&&r[e]&&(null===(a=r[e])||void 0===a?void 0:a[t]))}i18n(e,t,n){let a,r;if(!this.lang&&!this.fallbackLang)throw Error('Language is not specified. You should set at least one of these: "lang", "fallbackLang"');if(this.lang){if({text:a,details:r}=this.getTranslationData({keysetName:e,key:t,params:n,lang:this.lang}),r){let e=i({code:r.code,lang:this.lang,fallbackLang:this.fallbackLang===this.lang?void 0:this.fallbackLang});this.warn(e,r.keysetName,r.key)}}else this.warn("Target language is not specified.");if(void 0===a&&this.fallbackLang&&this.fallbackLang!==this.lang&&({text:a,details:r}=this.getTranslationData({keysetName:e,key:t,params:n,lang:this.fallbackLang}),r)){let e=i({code:r.code,lang:this.fallbackLang});this.warn(e,r.keysetName,r.key)}return null!=a?a:t}keyset(e){return(t,n)=>this.i18n(e,t,n)}warn(e,t,n){var a;let r="";t?(r+=t,n&&(r+=`.${n}`)):r="languageData",null===(a=this.logger)||void 0===a||a.log(`I18n: ${e}`,{level:"info",logger:r,extra:{type:"i18n"}})}getLanguageData(e){let t=e||this.lang;return t?this.data[t]:void 0}getLanguagePluralizer(e){let t=e?this.pluralizers[e]:void 0;return t||this.warn(`Pluralization is not configured for language '${e}', falling back to the english ruleset`),t||o}getTranslationData(e){let{lang:t,key:n,keysetName:r,params:i}=e,o=this.getLanguageData(t);if(void 0===o)return{details:{code:s.NoLanguageData}};if(0===Object.keys(o).length)return{details:{code:s.EmptyLanguageData}};let u=o[r];if(!u)return{details:{code:s.KeysetNotFound,keysetName:r}};if(0===Object.keys(u).length)return{details:{code:s.EmptyKeyset,keysetName:r}};let c=u&&u[n],d={};if(void 0===c)return{details:{code:s.MissingKey,keysetName:r,key:n}};if(Array.isArray(c)){if(c.length<3)return{details:{code:s.MissingKeyPlurals,keysetName:r,key:n}};let e=Number(null==i?void 0:i.count);if(Number.isNaN(e))return{details:{code:s.MissingKeyParamsCount,keysetName:r,key:n}};let l=this.getLanguagePluralizer(t);if(d.text=c[l(e,a)]||c[a.Many],void 0===d.text)return{details:{code:s.MissingKeyPlurals,keysetName:r,key:n}};void 0===c[a.None]&&(d.details={code:s.MissingKeyFor0,keysetName:r,key:n})}else d.text=c;return i&&(d.text=function(e,t){let n,a="",r=l.lastIndex=0;for(;n=l.exec(e);){r!==n.index&&(a+=e.slice(r,n.index)),r=l.lastIndex;let[s,i]=n;i&&Object.prototype.hasOwnProperty.call(t,i)?a+=t[i]:a+=s}return r<e.length&&(a+=e.slice(r)),a}(d.text,i)),d}}},58405:function(e,t,n){"use strict";var a=n(67294);t.Z=e=>a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},50254:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var a=n(67294),r=n(32782),l=n(69110),s=n(42087),i=n(96639),o=n(64200);n(82801);let u=(0,r.Ge)("button"),c=a.forwardRef(function({view:e="normal",size:t="m",pin:n="round-round",selected:r,disabled:l=!1,loading:i=!1,width:o,title:c,tabIndex:d,type:g="button",component:f,href:h,target:m,rel:p,extraProps:b,onClick:v,onMouseEnter:E,onMouseLeave:N,onFocus:k,onBlur:O,children:M,id:K,style:L,className:x,qa:w},I){let j={title:c,tabIndex:d,onClick:v,onClickCapture:a.useCallback(t=>{s.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:E,onMouseLeave:N,onFocus:k,onBlur:O,id:K,style:L,className:u({view:e,size:t,pin:n,selected:r,disabled:l||i,loading:i,width:o},x),"data-qa":w};return"string"==typeof h||f?a.createElement(f||"a",Object.assign(Object.assign(Object.assign(Object.assign({},b),j),f?{}:{href:h,target:m,rel:"_blank"!==m||p?p:"noopener noreferrer"}),{ref:I,"aria-disabled":l||i}),y(M)):a.createElement("button",Object.assign({},b,j,{ref:I,type:g,disabled:l||i,"aria-pressed":r}),y(M))});c.displayName="Button";let d=Object.assign(c,{Icon:o.E}),g=(0,i.s)(o.E),f=(0,i.s)("span"),h=RegExp(`^${u("icon")}($|\\s+\\w)`);function y(e){let t=a.Children.toArray(e);if(1===t.length){let e=t[0];return g(e)||f(e)&&h.test(e.props.className||"")?e:(0,l.yb)(e)||(0,l.Dc)(e)?a.createElement(d.Icon,{key:"icon"},e):a.createElement("span",{key:"text",className:u("text")},e)}{let e,n,r;let s=[];for(let r of t){let t=(0,l.yb)(r)||(0,l.Dc)(r),i=g(r),c=f(r)&&h.test(r.props.className||"");if(t||i||c){if(e||0!==s.length)n||0===s.length||(n=t?a.createElement(d.Icon,{key:"icon-end",side:"end"},r):i?a.cloneElement(r,{side:"end"}):a.cloneElement(r,{className:u("icon",{side:(0,o.C)("end")},r.props.className)}));else{let n="start";e=t?a.createElement(d.Icon,{key:"icon-start",side:n},r):i?a.cloneElement(r,{side:n}):a.cloneElement(r,{className:u("icon",{side:(0,o.C)(n)},r.props.className)})}}else s.push(r)}return s.length>0&&(r=a.createElement("span",{key:"text",className:u("text")},s)),[e,n,r]}}},64200:function(e,t,n){"use strict";n.d(t,{C:function(){return u},E:function(){return o}});var a=n(67294),r=n(32782),l=n(9042);let s=(0,r.Ge)("button");function i(){(0,l.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let o=({side:e,className:t,children:n})=>a.createElement("span",{className:s("icon",{side:u(e)},t)},a.createElement("span",{className:s("icon-inner")},n));function u(e){let t=e;return"left"===t&&(i(),t="start"),"right"===t&&(i(),t="end"),t}o.displayName="Button.Icon"},1622:function(e,t,n){"use strict";n.d(t,{K:function(){return m}});var a=n(67294),r=n(59505),l=n(77322),s=n(62227),i=n(38813),o=n(32782),u=n(90553),c=n(13079),d=n(87948);let g=(0,o.Ge)("text-area"),f=e=>{let{height:t,lineHeight:n}=e;return(t-(Number.isNaN(e.paddingTop)?0:e.paddingTop)-(Number.isNaN(e.paddingBottom)?0:e.paddingBottom))/n};function h(e){var t;let{name:n,id:r,tabIndex:s,autoComplete:i,placeholder:o,value:u,defaultValue:c,controlRef:d,controlProps:h,size:y,rows:m,minRows:p=1,maxRows:b,autoFocus:v,disabled:E,readOnly:N,onChange:k,onFocus:O,onBlur:M,onKeyDown:K,onKeyUp:L,onKeyPress:x}=e,w=a.useRef(null),I=(0,l.c)(d,w),j=m||p,C=u||(null===(t=null==w?void 0:w.current)||void 0===t?void 0:t.value),P=a.useCallback(()=>{let e=null==w?void 0:w.current;if(e&&!m){let t=getComputedStyle(e),n=parseInt(t.getPropertyValue("line-height"),10),a=parseInt(t.getPropertyValue("padding-top"),10),r=parseInt(t.getPropertyValue("padding-bottom"),10),l=((null==C?void 0:C.match(/\n/g))||[]).length+1,s=f({height:e.scrollHeight,paddingTop:a,paddingBottom:r,lineHeight:n});e.style.height="auto",b&&b<Math.max(s,l)?e.style.height=`${b*n+2*a}px`:(l>1||s>1)&&(e.style.height=`${e.scrollHeight}px`)}},[m,b,C]);return a.useEffect(()=>{P()},[P,y,u]),a.createElement("textarea",Object.assign({},h,{ref:I,style:Object.assign(Object.assign({},h.style),{height:m?"auto":void 0}),className:g("control",h.className),name:n,id:r,tabIndex:s,placeholder:o,value:u,defaultValue:c,rows:j,autoFocus:v,autoComplete:i,onChange:k,onFocus:O,onBlur:M,onKeyDown:K,onKeyUp:L,onKeyPress:x,disabled:null!=E?E:h.disabled,readOnly:null!=N?N:h.readOnly}))}n(11464);let y=(0,o.Ge)("text-area"),m=a.forwardRef(function(e,t){let{view:n="normal",size:o="m",pin:g="round-round",name:f,value:m,defaultValue:p,disabled:b,readOnly:v,hasClear:E=!1,error:N,errorMessage:k,validationState:O,autoComplete:M,id:K,tabIndex:L,style:x,className:w,qa:I,controlProps:j,note:C,onUpdate:P,onChange:_}=e,S=null!=b?b:null==j?void 0:j.disabled,D=null!=v?v:null==j?void 0:j.readOnly,{errorMessage:A,validationState:z}=(0,d.II)({error:N,errorMessage:k,validationState:O}),[T,$]=(0,r.z)(m,null!=p?p:"",P),R=a.useRef(null),F=(0,i.q)({initialValue:T,onReset:$}),G=(0,l.c)(e.controlRef,R,F),[U,B]=a.useState(!1),Y=(0,d.O_)(z),q=(0,s.u)(),V="invalid"===z&&!!A,H=!!(E&&!S&&!D&&T),Z=(0,s.u)(),J=(0,s.u)(),X=[null==j?void 0:j["aria-describedby"],C?J:void 0,V?Z:void 0].filter(Boolean).join(" "),Q={id:K||q,tabIndex:L,name:f,onChange(e){$(e.target.value),_&&_(e)},autoComplete:(0,d.xp)(M),controlProps:Object.assign(Object.assign({},j),{"aria-describedby":X||void 0,"aria-invalid":"invalid"===z||void 0})};return a.useEffect(()=>{let e=R.current;if(e){let t=e.scrollHeight>e.clientHeight;U!==t&&B(t)}},[T,U]),a.createElement("span",{ref:t,style:x,className:y({view:n,size:o,disabled:S,state:Y,pin:"clear"===n?void 0:g,"has-clear":H,"has-scrollbar":U},w),"data-qa":I},a.createElement("span",{className:y("content")},a.createElement(h,Object.assign({},e,Q,{controlRef:G})),H&&a.createElement(u.C,{className:y("clear",{size:o}),size:(0,u.X)(o),onClick:e=>{let t=R.current;if(t){t.focus();let n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",_&&_(n)}$("")}})),a.createElement(c.Z,{errorMessage:V?A:null,errorMessageId:Z,note:C,noteId:J}))})},90553:function(e,t,n){"use strict";n.d(t,{C:function(){return h},X:function(){return f}});var a=n(67294),r=n(58405),l=n(50254),s=n(43671),i=n(32782),o=n(97580),u=JSON.parse('{"label_clear-button":"Clear"}'),c=JSON.parse('{"label_clear-button":"Очистить"}'),d=(0,o.e)({en:u,ru:c},`${i.A7}clear-button`);n(6795);let g=(0,i.Ge)("clear-button"),f=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw Error(`Unknown text input size "${e}"`)}},h=e=>{let{size:t,className:n,onClick:i}=e;return a.createElement(l.z,{size:t,className:g(null,n),onClick:i,extraProps:{onMouseDown:e=>{e.preventDefault()},"aria-label":d("label_clear-button")}},a.createElement(s.J,{data:r.Z,size:16}))}},13079:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(67294),r=n(32782),l=n(87948);n(22661);let s=(0,r.Ge)("outer-additional-content"),i=({errorMessage:e,note:t,noteId:n,errorMessageId:r})=>e||t?a.createElement("div",{className:s()},e&&a.createElement("div",{className:s("error"),id:r,"data-qa":l.fz},e),t&&a.createElement("div",{className:s("note"),id:n},t)):null},87948:function(e,t,n){"use strict";n.d(t,{II:function(){return i},O_:function(){return s},eP:function(){return r},fz:function(){return a},xp:function(){return l}});let a="control-error-message-qa",r="control-error-icon-qa",l=e=>"boolean"==typeof e?e?"on":"off":e,s=e=>"invalid"===e?"error":void 0,i=e=>{let t,n;let{error:a,errorMessage:r,errorPlacement:l,validationState:s}=e;return"string"==typeof a&&(t=a),r&&(t=r),("invalid"===s||a)&&(n="invalid"),{errorMessage:t,errorPlacement:l,validationState:n}}},97580:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var a=n(98085),r=n(3528);let l=(0,r.iE)().lang,s=new a.m({lang:l,fallbackLang:l});function i(e,t){return Object.entries(e).forEach(([e,n])=>s.registerKeyset(e,t,n)),s.keyset(t)}(0,r.Pe)(e=>{s.setLang(e.lang)})},3528:function(e,t,n){"use strict";var a,r;n.d(t,{Pe:function(){return o},Uo:function(){return a},iE:function(){return u},jQ:function(){return i}}),(r=a||(a={})).Ru="ru",r.En="en";let l=[],s={lang:a.En},i=e=>{Object.assign(s,e),l.forEach(e=>{e(s)})},o=e=>(l.push(e),()=>{l=l.filter(t=>t!==e)}),u=()=>s},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});let a=new Map;function r(e){e&&a.has(e)}},38813:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var a=n(67294);function r({initialValue:e,onReset:t}){let[n,r]=a.useState(null),l=a.useRef(e);return a.useEffect(()=>{if(!n)return;let e=()=>{t(l.current)};return n.addEventListener("reset",e),()=>{n.removeEventListener("reset",e)}},[n,t]),a.useCallback(e=>{var t;r(null!==(t=null==e?void 0:e.form)&&void 0!==t?t:null)},[])}},59505:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var a=n(67294);function r(e,t,n){let[r,l]=a.useState(null!=e?e:t),s=a.useRef(void 0!==e),i=void 0!==e;a.useEffect(()=>{let e=s.current;e!==i&&console.error(`[useControlledState] A component changed from ${e?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),s.current=i},[i]);let o=i?e:r,u=a.useCallback((e,...t)=>{Object.is(o,e)||null==n||n(e,...t),i||(o=e,l(e))},[i,n,o]);return[o,u]}},52036:function(e,t,n){"use strict";function a(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{k:function(){return a}})},77322:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var a=n(67294),r=n(52036);function l(...e){return a.useMemo(()=>e.every(e=>null==e)?null:t=>{for(let n of e)(0,r.k)(n,t)},e)}},62227:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var a=n(67294),r=n(32782),l=n(69110);let s="function"==typeof a.useId?function(){return`${r.A7}${a.useId()}`}:function(){let e=a.useRef();return void 0===e.current&&(e.current=(0,l.xA)()),e.current}},67131:function(e,t,n){"use strict";n.r(t),n.d(t,{TextAreaComponent:function(){return l}});var a=n(85893),r=n(1622);n(67294);let l=e=>(0,a.jsx)("div",{style:{width:"100%",maxWidth:300},children:(0,a.jsx)(r.K,{...e})})},82801:function(){},11464:function(){},6795:function(){},22661:function(){}}]);