(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9854],{51693:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},49179:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var r=n(67294),a=n(51693),o=n(43671),i=n(32782);n(42554);let l=(0,i.Ge)("arrow-toggle");function c({size:e=16,direction:t="bottom",className:n,qa:i}){return r.createElement("span",{style:{width:e,height:e},className:l({direction:t},n),"data-qa":i},r.createElement(o.J,{data:a.Z,size:e}))}},50254:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var r=n(67294),a=n(32782),o=n(69110),i=n(42087),l=n(96639),c=n(64200);n(82801);let s=(0,a.Ge)("button"),u=r.forwardRef(function({view:e="normal",size:t="m",pin:n="round-round",selected:a,disabled:o=!1,loading:l=!1,width:c,title:u,tabIndex:f,type:d="button",component:p,href:m,target:h,rel:b,extraProps:g,onClick:x,onMouseEnter:y,onMouseLeave:E,onFocus:j,onBlur:w,children:O,id:N,style:R,className:P,qa:k},S){let C={title:u,tabIndex:f,onClick:x,onClickCapture:r.useCallback(t=>{i.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:y,onMouseLeave:E,onFocus:j,onBlur:w,id:N,style:R,className:s({view:e,size:t,pin:n,selected:a,disabled:o||l,loading:l,width:c},P),"data-qa":k};return"string"==typeof m||p?r.createElement(p||"a",Object.assign(Object.assign(Object.assign(Object.assign({},g),C),p?{}:{href:m,target:h,rel:"_blank"!==h||b?b:"noopener noreferrer"}),{ref:S,"aria-disabled":o||l}),v(O)):r.createElement("button",Object.assign({},g,C,{ref:S,type:d,disabled:o||l,"aria-pressed":a}),v(O))});u.displayName="Button";let f=Object.assign(u,{Icon:c.E}),d=(0,l.s)(c.E),p=(0,l.s)("span"),m=RegExp(`^${s("icon")}($|\\s+\\w)`);function v(e){let t=r.Children.toArray(e);if(1===t.length){let e=t[0];return d(e)||p(e)&&m.test(e.props.className||"")?e:(0,o.yb)(e)||(0,o.Dc)(e)?r.createElement(f.Icon,{key:"icon"},e):r.createElement("span",{key:"text",className:s("text")},e)}{let e,n,a;let i=[];for(let a of t){let t=(0,o.yb)(a)||(0,o.Dc)(a),l=d(a),u=p(a)&&m.test(a.props.className||"");if(t||l||u){if(e||0!==i.length)n||0===i.length||(n=t?r.createElement(f.Icon,{key:"icon-end",side:"end"},a):l?r.cloneElement(a,{side:"end"}):r.cloneElement(a,{className:s("icon",{side:(0,c.C)("end")},a.props.className)}));else{let n="start";e=t?r.createElement(f.Icon,{key:"icon-start",side:n},a):l?r.cloneElement(a,{side:n}):r.cloneElement(a,{className:s("icon",{side:(0,c.C)(n)},a.props.className)})}}else i.push(a)}return i.length>0&&(a=r.createElement("span",{key:"text",className:s("text")},i)),[e,n,a]}}},64200:function(e,t,n){"use strict";n.d(t,{C:function(){return s},E:function(){return c}});var r=n(67294),a=n(32782),o=n(9042);let i=(0,a.Ge)("button");function l(){(0,o.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let c=({side:e,className:t,children:n})=>r.createElement("span",{className:i("icon",{side:s(e)},t)},r.createElement("span",{className:i("icon-inner")},n));function s(e){let t=e;return"left"===t&&(l(),t="start"),"right"===t&&(l(),t="end"),t}c.displayName="Button.Icon"},555:function(e,t,n){"use strict";n.d(t,{G:function(){return x}});var r=n(67294),a=n(5031),o=n(77322),i=n(95237),l=n(8682);let c=["bottom-start","bottom","bottom-end","top-start","top","top-end","right-start","right","right-end","left-start","left","left-end"],s={name:"rtlOffsetFix",enabled:!0,phase:"main",requires:["offset"],fn({state:e}){var t;if(!e.placement.startsWith("top")&&!e.placement.startsWith("bottom"))return;let n=null===(t=e.modifiersData.offset)||void 0===t?void 0:t[e.placement];n&&(e.modifiersData.popperOffsets.x-=2*n.x)}};var u=n(86758),f=n(87174),d=n(98484),p=n(32782),m=n(44562),v=n(35860);n(31130);let h=(0,p.Ge)("popup");function b({styles:e,attributes:t,setArrowRef:n}){return r.createElement("div",Object.assign({"data-popper-arrow":!0,ref:n,className:h("arrow"),style:e},t),r.createElement("div",{className:h("arrow-content")},r.createElement("div",{className:h("arrow-circle-wrapper")},r.createElement("div",{className:h("arrow-circle",{left:!0})})),r.createElement("div",{className:h("arrow-circle-wrapper")},r.createElement("div",{className:h("arrow-circle",{right:!0})}))))}let g=(0,p.Ge)("popup");function x({keepMounted:e=!1,hasArrow:t=!1,offset:n=[0,4],open:p,placement:h,anchorRef:x,disableEscapeKeyDown:y,disableOutsideClick:E,disableLayer:j,style:w,className:O,contentClassName:N,modifiers:R=[],children:P,onEscapeKeyDown:k,onOutsideClick:S,onClose:C,onClick:A,onMouseEnter:T,onMouseLeave:B,onFocus:D,onBlur:I,onTransitionEnter:G,onTransitionEntered:L,onTransitionExit:M,onTransitionExited:Z,disablePortal:z,container:F,strategy:W,qa:$,restoreFocus:_,restoreFocusRef:q,"aria-label":U,"aria-labelledby":H,role:J,id:V,focusTrap:Y=!1,autoFocus:K=!1}){let Q=r.useRef(null);(0,m.s)({open:p,disableEscapeKeyDown:y,disableOutsideClick:E,onEscapeKeyDown:k,onOutsideClick:S,onClose:C,contentRefs:[x,Q],enabled:!j,type:"popup"});let{attributes:X,styles:ee,setPopperRef:et,setArrowRef:en}=function({anchorRef:e,placement:t=c,offset:n,modifiers:a=[],strategy:o,altBoundary:u}){let[f,d]=r.useState(null),[p,m]=r.useState(null),v=(0,l.g)(),h=r.useMemo(()=>{let e=Array.isArray(t)?t:[t];return"rtl"===v&&(e=e.map(e=>e.replace(/(top|bottom)-(start|end)/g,(e,t,n)=>"start"===n?t+"-end":"end"===n?t+"-start":e))),e},[t,v]),{attributes:b,styles:g}=(0,i.D)(null==e?void 0:e.current,f,{strategy:o,modifiers:[{name:"arrow",options:{element:p}},{name:"offset",options:{offset:n,altBoundary:u}},{name:"flip",options:{fallbackPlacements:h.slice(1),altBoundary:u}},..."rtl"===v?[s]:[],...a],placement:h[0]});return{attributes:b,styles:g,setPopperRef:d,setArrowRef:m}}({anchorRef:x,placement:h,offset:t?[n[0],n[1]+8]:n,strategy:W,altBoundary:z,modifiers:[{name:"arrow",options:{enabled:t,padding:4}},{name:"preventOverflow",options:{padding:1,altBoundary:z}},...R]}),er=(0,o.c)(et,Q,(0,d.e)()),ea=(0,u.H)({enabled:!!(_&&p),restoreFocusRef:q});return r.createElement(a.Z,{nodeRef:Q,in:p,addEndListener:e=>{var t;return null===(t=Q.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,v.Y)(g),mountOnEnter:!e,unmountOnExit:!e,appear:!0,onEnter:()=>{null==G||G()},onEntered:()=>{null==L||L()},onExit:()=>{null==M||M()},onExited:()=>{null==Z||Z()}},r.createElement(f.h,{container:F,disablePortal:z},r.createElement("div",Object.assign({ref:er,style:ee.popper},X.popper,ea,{className:g({open:p},O),"data-qa":$,id:V,role:J,"aria-label":U,"aria-labelledby":H}),r.createElement(d.i,{enabled:Y&&p,disableAutoFocus:!K},r.createElement("div",{onClick:A,onMouseEnter:T,onMouseLeave:B,onFocus:D,onBlur:I,className:g("content",N),style:w,tabIndex:-1},t&&r.createElement(b,{styles:ee.arrow,attributes:X.arrow,setArrowRef:en}),P)))))}},8682:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(73233);function a(){return(0,r.T)().direction}},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});let r=new Map;function a(e){e&&r.has(e)}},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),o=n(14841),i=Math.max,l=Math.min;e.exports=function(e,t,n){var c,s,u,f,d,p,m=0,v=!1,h=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=c,r=s;return c=s=void 0,m=t,f=e.apply(r,n)}function x(e){var n=e-p,r=e-m;return void 0===p||n>=t||n<0||h&&r>=u}function y(){var e,n,r,o=a();if(x(o))return E(o);d=setTimeout(y,(e=o-p,n=o-m,r=t-e,h?l(r,u-n):r))}function E(e){return(d=void 0,b&&c)?g(e):(c=s=void 0,f)}function j(){var e,n=a(),r=x(n);if(c=arguments,s=this,p=n,r){if(void 0===d)return m=e=p,d=setTimeout(y,t),v?g(e):f;if(h)return clearTimeout(d),d=setTimeout(y,t),g(p)}return void 0===d&&(d=setTimeout(y,t)),f}return t=o(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?i(o(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==d&&clearTimeout(d),m=0,c=p=s=d=void 0},j.flush=function(){return void 0===d?f:E(a())},j}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),o=n(33448),i=0/0,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):l.test(e)?i:+e}},77886:function(e,t,n){"use strict";n.r(t),n.d(t,{ArrowToggleExample:function(){return c},PopupAnchorExample:function(){return u},PopupPlacementExample:function(){return d},SliderExample:function(){return m}});var r=n(85893),a=n(50254),o=n(49179),i=n(67294);let l=["top","left","bottom","right"],c=e=>{let[t,n]=i.useState(0),c=l[t%l.length];return(0,r.jsxs)(a.z,{onClick:()=>n(t+1),view:"flat",children:[(0,r.jsx)(o.F,{...e,direction:c})," ",(0,r.jsx)("span",{children:c})]})};c.storyName="ArrowToggleExample";var s=n(555);let u=()=>{var e;let t=i.useRef(null),n=i.useRef(null),[o,l]=i.useState(!1);return(0,r.jsxs)("div",{ref:t,style:{position:"relative"},children:[(0,r.jsx)(a.z,{ref:n,onClick:()=>l(e=>!e),children:"Toggle Popup"}),(0,r.jsx)(s.G,{anchorRef:n,open:o,placement:["bottom"],container:null!==(e=t.current)&&void 0!==e?e:void 0,modifiers:[{name:"preventOverflow",enabled:!1}],children:(0,r.jsx)("div",{style:{padding:5},children:"Content"})})]})};function f(e){let{placement:t,anchorRef:n,container:a,children:o}=e;return(0,r.jsx)(s.G,{open:!0,anchorRef:n,placement:t,container:null!=a?a:void 0,disablePortal:!0,modifiers:[{name:"preventOverflow",enabled:!1}],children:(0,r.jsx)("div",{style:{padding:5},children:o})})}u.storyName="PopupAnchorExample";let d=()=>{let e=i.useRef(null),t=i.useRef(null);return(0,r.jsxs)("div",{ref:e,style:{position:"relative"},children:[(0,r.jsx)("div",{ref:t,style:{margin:"40px 100px",width:320,height:140,border:"2px dashed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em"},children:"Anchor"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"top-start",children:"Top Start"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"top",children:"Top"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"top-end",children:"Top End"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"right-start",children:"Right Start"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"right",children:"Right"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"right-end",children:"Right End"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"bottom-end",children:"Bottom End"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"bottom",children:"Bottom"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"bottom-start",children:"Bottom Start"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"left-end",children:"Left End"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"left",children:"Left"}),(0,r.jsx)(f,{anchorRef:t,container:e.current,placement:"left-start",children:"Left Start"})]})};d.storyName="PopupPlacementExample";var p=n(47533);let m=e=>{let{defaultValue:t,max:n,min:a,marksCount:o,step:l,debounceDelay:c,...s}=e,[u,f]=i.useState(t||a||0),d=Number(n)||void 0,m=Number(a)||void 0,v=Number(o)||void 0,h=Number(l)||void 0,b=Number(c)||void 0;return(0,r.jsxs)("div",{style:{width:"100%",maxWidth:300},children:[(0,r.jsx)(p.i,{...s,onUpdate:f,min:m,max:d,marksCount:v,step:h,debounceDelay:b,defaultValue:t}),(0,r.jsx)("div",{style:{textAlign:"center"},children:"Selected value: ".concat(void 0===u?"":u)})]})}},42554:function(){},82801:function(){},31130:function(){},93967:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}(n)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(86656);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}}}]);