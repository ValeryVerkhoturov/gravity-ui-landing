(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4830],{555:function(e,t,r){"use strict";r.d(t,{G:function(){return w}});var n=r(67294),a=r(5031),o=r(77322),l=r(95237),s=r(8682);let i=["bottom-start","bottom","bottom-end","top-start","top","top-end","right-start","right","right-end","left-start","left","left-end"],c={name:"rtlOffsetFix",enabled:!0,phase:"main",requires:["offset"],fn({state:e}){var t;if(!e.placement.startsWith("top")&&!e.placement.startsWith("bottom"))return;let r=null===(t=e.modifiersData.offset)||void 0===t?void 0:t[e.placement];r&&(e.modifiersData.popperOffsets.x-=2*r.x)}};var d=r(86758),u=r(87174),p=r(98484),m=r(32782),f=r(44562),v=r(35860);r(31130);let b=(0,m.Ge)("popup");function E({styles:e,attributes:t,setArrowRef:r}){return n.createElement("div",Object.assign({"data-popper-arrow":!0,ref:r,className:b("arrow"),style:e},t),n.createElement("div",{className:b("arrow-content")},n.createElement("div",{className:b("arrow-circle-wrapper")},n.createElement("div",{className:b("arrow-circle",{left:!0})})),n.createElement("div",{className:b("arrow-circle-wrapper")},n.createElement("div",{className:b("arrow-circle",{right:!0})}))))}let h=(0,m.Ge)("popup");function w({keepMounted:e=!1,hasArrow:t=!1,offset:r=[0,4],open:m,placement:b,anchorRef:w,disableEscapeKeyDown:g,disableOutsideClick:y,disableLayer:x,style:N,className:R,contentClassName:O,modifiers:j=[],children:k,onEscapeKeyDown:A,onOutsideClick:C,onClose:F,onClick:G,onMouseEnter:P,onMouseLeave:_,onFocus:B,onBlur:D,onTransitionEnter:L,onTransitionEntered:M,onTransitionExit:q,onTransitionExited:S,disablePortal:W,container:H,strategy:I,qa:T,restoreFocus:Y,restoreFocusRef:Z,"aria-label":z,"aria-labelledby":J,role:K,id:Q,focusTrap:U=!1,autoFocus:V=!1,"aria-modal":X=U}){let $=n.useRef(null);(0,f.s)({open:m,disableEscapeKeyDown:g,disableOutsideClick:y,onEscapeKeyDown:A,onOutsideClick:C,onClose:F,contentRefs:[w,$],enabled:!x,type:"popup"});let{attributes:ee,styles:et,setPopperRef:er,setArrowRef:en}=function({anchorRef:e,placement:t=i,offset:r,modifiers:a=[],strategy:o,altBoundary:d}){let[u,p]=n.useState(null),[m,f]=n.useState(null),v=(0,s.g)(),b=n.useMemo(()=>{let e=Array.isArray(t)?t:[t];return"rtl"===v&&(e=e.map(e=>e.replace(/(top|bottom)-(start|end)/g,(e,t,r)=>"start"===r?t+"-end":"end"===r?t+"-start":e))),e},[t,v]),{attributes:E,styles:h}=(0,l.D)(null==e?void 0:e.current,u,{strategy:o,modifiers:[{name:"arrow",options:{element:m}},{name:"offset",options:{offset:r,altBoundary:d}},{name:"flip",options:{fallbackPlacements:b.slice(1),altBoundary:d}},..."rtl"===v?[c]:[],...a],placement:b[0]});return{attributes:E,styles:h,setPopperRef:p,setArrowRef:f}}({anchorRef:w,placement:b,offset:t?[r[0],r[1]+8]:r,strategy:I,altBoundary:W,modifiers:[{name:"arrow",options:{enabled:t,padding:4}},{name:"preventOverflow",options:{padding:1,altBoundary:W}},...j]}),ea=(0,o.c)(er,$,(0,p.e)()),eo=(0,d.H)({enabled:!!(Y&&m),restoreFocusRef:Z}),el=K;return!0!==X&&"true"!==X||el||(el="dialog"),n.createElement(a.Z,{nodeRef:$,in:m,addEndListener:e=>{var t;return null===(t=$.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,v.Y)(h),mountOnEnter:!e,unmountOnExit:!e,appear:!0,onEnter:()=>{null==L||L()},onEntered:()=>{null==M||M()},onExit:()=>{null==q||q()},onExited:()=>{null==S||S()}},n.createElement(u.h,{container:H,disablePortal:W},n.createElement("div",Object.assign({ref:ea,style:et.popper},ee.popper,eo,{className:h({open:m},R),"data-qa":T,id:Q,role:el,"aria-label":z,"aria-labelledby":J,"aria-modal":X&&m?X:void 0}),n.createElement(p.i,{enabled:U&&m,autoFocus:V},n.createElement("div",{onClick:G,onMouseEnter:P,onMouseLeave:_,onFocus:B,onBlur:D,className:h("content",O),style:N,tabIndex:-1},t&&n.createElement(E,{styles:et.arrow,attributes:ee.arrow,setArrowRef:en}),k)))))}},8682:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var n=r(73233);function a(){return(0,n.T)().direction}},42493:function(e,t,r){"use strict";r.r(t),r.d(t,{PopupComponent:function(){return l}});var n=r(85893),a=r(555),o=r(67294);let l=e=>{let{open:t,placement:r,hasArrow:l}=e,s=o.useRef(null);return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)("div",{ref:s,style:{width:100,height:100,border:"2px dashed",color:"var(--g-color-text-secondary)"}}),(0,n.jsx)(a.G,{anchorRef:s,open:t,placement:r,hasArrow:l,children:(0,n.jsx)("div",{style:{padding:5},children:"Content"})})]})}},31130:function(){}}]);