(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3671],{46486:function(e,t,n){"use strict";var i,a=n(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}t.Z=e=>a.createElement("svg",r({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m11.493 6.25.438 1.091 1.175.08 3.997.271-3.075 2.569-.903.755.287 1.141.977 3.885-3.392-2.13-.997-.626-.997.626-3.393 2.13.977-3.885.287-1.142-.903-.754-3.074-2.569 3.997-.27 1.174-.08.439-1.093L10 2.532l1.493 3.717zm-9.655-.365 4.929-.335L8.607.966c.505-1.254 2.28-1.254 2.785 0l1.84 4.584 4.93.335c1.348.091 1.897 1.78.86 2.647L15.23 11.7l1.205 4.79c.33 1.312-1.107 2.356-2.252 1.637L10 15.5l-4.184 2.627c-1.145.719-2.582-.325-2.252-1.637l1.205-4.79L.978 8.532c-1.038-.867-.489-2.556.86-2.647z",fill:"currentColor",fillOpacity:.5})))},99976:function(e,t,n){"use strict";var i,a,r=n(67294);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}t.Z=e=>r.createElement("svg",l({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=r.createElement("path",{d:"M6.808 7.768a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z",fill:"currentColor",fillOpacity:.5})),a||(a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.526 11.075c-.36-.36-.558-.85-.548-1.36l.11-6.077a1.875 1.875 0 0 1 1.84-1.84l6.077-.11c.51-.01 1 .188 1.36.548l7.108 7.108c.732.732.732 1.92 0 2.651l-6.187 6.188a1.875 1.875 0 0 1-2.652 0l-7.108-7.108zm7.514-7.513 7.107 7.107-6.187 6.188-7.108-7.108.11-6.077 6.077-.11z",fill:"currentColor",fillOpacity:.5})))},16689:function(e,t,n){"use strict";n.d(t,{q:function(){return m}});var i=n(67294),a=n(76657),r=n(1960);let l={xs:14,s:16,m:16,l:20,xl:24},c=({icon:e,color:t,size:n,className:a})=>{let c=i.useMemo(()=>({color:t}),[t]);return i.createElement("div",{style:c,className:a},i.createElement(r.J,{data:e,size:l[n]}))},o={xs:24,s:28,m:32,l:42,xl:50},s=({imgUrl:e,fallbackImgUrl:t,sizes:n,srcSet:a,alt:r,loading:l,size:c,className:s})=>{let[u,d]=i.useState(!1),f=i.useCallback(()=>{d(!0)},[]);return i.useEffect(()=>{d(!1)},[e]),i.createElement("img",{className:s,loading:l,width:o[c],height:o[c],src:t&&u?t:e,sizes:n,srcSet:a,alt:r,onError:f})},u=e=>{let t=e.split(" ");return(t.length>1?[t[0][0],t[1][0]].filter(Boolean).join(""):e.slice(0,2)).toUpperCase()},d=({text:e,color:t,className:n})=>{let a=i.useMemo(()=>({color:t}),[t]),r=i.useMemo(()=>u(e),[e]);return i.createElement("div",{style:a,className:n},r)};n(95774);let f=(0,a.Ge)("avatar"),m=i.forwardRef((e,t)=>{let{size:n="m",theme:a="normal",view:r="filled",backgroundColor:l,borderColor:o,title:u,"aria-label":m,"aria-labelledby":h,className:b,style:v,qa:g}=e,x=i.useMemo(()=>Object.assign({backgroundColor:l,color:o},v),[l,o,v]);return i.createElement("div",{className:f({size:n,theme:a,view:r,"with-border":!!o},b),title:u,role:"img","aria-label":m,"aria-labelledby":h,style:x,"data-qa":g,ref:t},"imgUrl"in e&&e.imgUrl?i.createElement(s,{className:f("image"),imgUrl:e.imgUrl,fallbackImgUrl:e.fallbackImgUrl,sizes:e.sizes,srcSet:e.srcSet,alt:e.alt||u,loading:e.loading,size:n}):"icon"in e&&e.icon?i.createElement(c,{className:f("icon"),icon:e.icon,color:e.color,size:n}):"text"in e&&e.text?i.createElement(d,{className:f("text"),text:e.text,color:e.color,size:n}):null)});m.displayName="Avatar"},28553:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var i=n(97582),a=n(67294),r=n(1063),l=n(69178),c=n(37105),o=n(1960);function s(e){var{status:t}=e,n=(0,i._T)(e,["status"]);return"error"===t?a.createElement(o.J,Object.assign({data:r.Z},n)):"success"===t?a.createElement(o.J,Object.assign({data:l.Z},n)):a.createElement(o.J,Object.assign({data:c.Z},n))}},1827:function(e,t,n){"use strict";n.d(t,{_:function(){return d}});var i=n(67294),a=n(58405),r=n(28553),l=n(20487),c=n(1960),o=n(76657);n(13362);let s=(0,o.Ge)("label"),u={xs:{copyIconSize:12,closeIconSize:12},s:{copyIconSize:14,closeIconSize:14},m:{copyIconSize:16,closeIconSize:16}},d=i.forwardRef(function(e,t){let{type:n="default",theme:o="normal",size:d="xs",icon:f,children:m,onCloseClick:h,className:b,disabled:v,copyText:g,closeButtonLabel:x,copyButtonLabel:p,interactive:j=!1,value:k,onCopy:y,onClick:N,qa:w}=e,C=!!(""!==m&&i.Children.count(m)>0),E="close"===n&&C,z="copy"===n&&C,O="function"==typeof N,I=!!(z&&g),_=(O||I||j)&&!v,{copyIconSize:S,closeIconSize:B}=u[d],L=f&&i.createElement("div",{className:s("addon",{side:C?"start":void 0,type:"icon"})},f),A=C&&i.createElement("div",{className:s("text")},i.createElement("div",{className:s("content")},m),!!k&&i.createElement("div",{className:s("value")},i.createElement("div",{className:s("separator")},":"),i.createElement("div",{className:s("key")},k))),U=e=>{let n;return z?n=i.createElement("button",{type:"button","aria-label":p||void 0,onClick:O?N:void 0,disabled:v,className:s("addon",{side:"end",type:"button"})},i.createElement(r.K,{status:e||"pending",size:S})):E&&(n=i.createElement("button",{type:"button",onClick:h,"aria-label":x||void 0,disabled:v,className:s("addon",{side:"end",type:"button"})},i.createElement(c.J,{size:B,data:a.Z}))),i.createElement("div",{ref:t,className:s({theme:o,size:d,interactive:_,disabled:v},b),"data-qa":w},L,O?i.createElement("button",{disabled:v,type:"button",onClick:N,className:s("main-button")},A):A,n)};return I&&g&&!O?i.createElement(l.h,{text:g,onCopy:y,timeout:1e3},e=>U(e)):U()})},69046:function(e,t,n){"use strict";n.d(t,{m:function(){return b}});var i,a,r=n(67294),l=n(76657);let c=r.createContext({activeTabId:void 0});c.displayName="TabsContext";var o=n(1827);let s=(0,l.Ge)("tabs");function u({id:e,className:t,title:n,meta:i,hint:a,icon:l,counter:u,label:d,active:f,disabled:m,hasOverflow:h,extraProps:b,onClick:v}){let{activeTabId:g}=r.useContext(c),x="boolean"==typeof f?f:g===e,p=r.useMemo(()=>void 0!==a?a:"string"==typeof n?n:void 0,[a,n]);return r.createElement("div",Object.assign({},b,{role:"tab","aria-selected":x,"aria-disabled":!0===m,tabIndex:m?-1:0,className:s("item",{active:x,disabled:m,overflow:!!h},t),title:p,onClick:()=>{v(e)},onKeyDown:t=>{" "===t.key&&v(e)}}),r.createElement("div",{className:s("item-content")},l&&r.createElement("div",{className:s("item-icon")},l),r.createElement("div",{className:s("item-title")},n||e),"number"==typeof u&&r.createElement("div",{className:s("item-counter")},u),d&&r.createElement(o._,{className:s("item-label"),theme:d.theme},d.content)),i&&r.createElement("div",{className:s("item-meta")},i))}u.displayName="Tabs.Item",n(69341);let d=(0,l.Ge)("tabs");(i=a||(a={})).Horizontal="horizontal",i.Vertical="vertical";let f=(e,t,n)=>{var i;return e||(t||(null==n?void 0:n.length)===0?void 0:null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.id)},m=[],h=r.forwardRef(({direction:e=a.Horizontal,size:t="m",activeTab:n,allowNotSelected:i=!1,items:l=m,children:o,className:s,onSelectTab:h,wrapTo:b,qa:v},g)=>{let x=f(n,i,l),p=r.useMemo(()=>({activeTabId:x}),[x]),j=r.useMemo(()=>{let e=e=>{h&&h(e)};return l.map((t,n)=>{let i=r.createElement(u,Object.assign({key:t.id},t,{onClick:e}));return b?b(t,i,n):i})},[l,h,b]);return r.createElement("div",{role:"tablist",className:d({direction:e,size:t},s),"data-qa":v,ref:g},r.createElement(c.Provider,{value:p},o||j))});h.displayName="Tabs";let b=Object.assign(h,{Item:u})},62663:function(e){e.exports=function(e,t,n,i){var a=-1,r=null==e?0:e.length;for(i&&r&&(n=e[++a]);++a<r;)n=t(n,e[a],a,e);return n}},49029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},35393:function(e,t,n){var i=n(62663),a=n(53816),r=n(58748),l=RegExp("['’]","g");e.exports=function(e){return function(t){return i(r(a(t).replace(l,"")),e,"")}}},69389:function(e,t,n){var i=n(18674)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=i},93157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2757:function(e){var t="\ud800-\udfff",n="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="['’]",c="["+r+"]",o="["+i+"]",s="[^"+t+r+"\\d+"+n+i+a+"]",u="(?:\ud83c[\udde6-\uddff]){2}",d="[\ud800-\udbff][\udc00-\udfff]",f="["+a+"]",m="(?:"+o+"|"+s+")",h="(?:"+l+"(?:d|ll|m|re|s|t|ve))?",b="(?:"+l+"(?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",g="[\\ufe0e\\ufe0f]?",x="(?:\\u200d(?:"+["[^"+t+"]",u,d].join("|")+")"+g+v+")*",p="(?:"+["["+n+"]",u,d].join("|")+")"+(g+v+x),j=RegExp([f+"?"+o+"+"+h+"(?="+[c,f,"$"].join("|")+")","(?:"+f+"|"+s+")+"+b+"(?="+[c,f+m,"$"].join("|")+")",f+"?"+m+"+"+h,f+"+"+b,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",p].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},68929:function(e,t,n){var i=n(48403),a=n(35393)(function(e,t,n){return t=t.toLowerCase(),e+(n?i(t):t)});e.exports=a},53816:function(e,t,n){var i=n(69389),a=n(79833),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(r,i).replace(l,"")}},58748:function(e,t,n){var i=n(49029),a=n(93157),r=n(79833),l=n(2757);e.exports=function(e,t,n){return(e=r(e),void 0===(t=n?void 0:t))?a(e)?l(e):i(e):e.match(t)||[]}},50595:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/libraries/[libId]",function(){return n(20536)}])},90121:function(e,t,n){"use strict";var i=n(67294),a=n(15882);t.Z=e=>{let{children:t,block:n=!1,className:r,itemProp:l,id:c,qa:o}=e;return t?i.createElement(n||(0,a.Ph)(t)?"div":"span",{dangerouslySetInnerHTML:{__html:t},className:r,itemProp:l,id:c,"data-qa":o}):null}},93154:function(e,t,n){"use strict";var i,a,r,l,c,o,s,u,d,f,m,h;n.d(t,{Gm:function(){return v},P7:function(){return b},VR:function(){return o},_W:function(){return c},kH:function(){return i},p5:function(){return l},tA:function(){return r}}),(s=i||(i={})).PromoFeaturesBlock="promo-features-block",s.ExtendedFeaturesBlock="extended-features-block",s.SliderBlock="slider-block",s.QuestionsBlock="questions-block",s.BannerBlock="banner-block",s.CompaniesBlock="companies-block",s.MediaBlock="media-block",s.InfoBlock="info-block",s.TableBlock="table-block",s.TabsBlock="tabs-block",s.HeaderSliderBlock="header-slider-block",s.HeaderBlock="header-block",s.IconsBlock="icons-block",s.CardLayoutBlock="card-layout-block",s.ContentLayoutBlock="content-layout-block",s.ShareBlock="share-block",s.MapBlock="map-block",s.FilterBlock="filter-block",s.FormBlock="form-block";let b=Object.values(i),v=[i.HeaderBlock,i.HeaderSliderBlock];(u=a||(a={})).Sm="sm",u.Md="md",u.Lg="lg",u.Xl="xl",(d=r||(r={})).MediaCard="media-card",d.HeaderCard="header-card",(f=l||(l={})).Vk="vk",f.Telegram="telegram",f.Twitter="twitter",f.Facebook="facebook",f.LinkedIn="linkedin",(m=c||(c={})).YANDEX="yandex",m.HUBSPOT="hubspot",(h=o||(o={})).FormContent="form-content",h.ContentForm="content-form",h.Center="center"},15882:function(e,t,n){"use strict";n.d(t,{$U:function(){return h},J9:function(){return x},L7:function(){return v},Ph:function(){return d},Sp:function(){return u},Wk:function(){return g},fp:function(){return m},v8:function(){return p},zQ:function(){return f}});var i=n(68929),a=n.n(i),r=n(85564),l=n.n(r),c=n(93154);let o="<(".concat("div|p|h[1-6]|address|article|aside|blockquote|canvas|dd|dl|dt|fieldset|figcaption|footer|header|hr|main|nav|section|video|pre|figure|form|pre|ol|ul|li|table|thead|tbody|tfoot|tr|th|td",")[^>]*>"),s=["container","content","wrapper","image","button","animate"];function u(e){switch(e){case"l":return"h1";case"s":return"h3";case"xs":return"h4";default:return"h2"}}function d(e){return RegExp(o,"g").test(e)}function f(e,t){return"".concat(e.type,"-").concat(t)}let m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.reduce((e,n)=>Object.assign(e,t[n]||{}),{})},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.reduce((e,n)=>e.concat(Object.keys(t[n]||{})),[])},b=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URL(e);return Object.entries(t).forEach(e=>{let[t,i]=e;i&&n.searchParams.set(t,i)}),n.toString()},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter(e=>{let{type:n}=e;return!t.includes(n)})},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.find(e=>{let{type:n}=e;return t.includes(n)})},x=(e,t,n,i)=>{switch(t){case c.p5.Telegram:return b("https://t.me/share/url",{url:e,text:n});case c.p5.Facebook:return b("https://facebook.com/sharer.php",{u:e});case c.p5.Twitter:return b("https://twitter.com/intent/tweet",{url:e,text:n});case c.p5.Vk:return b("https://vk.com/share.php",{url:e,title:n,comment:i});case c.p5.LinkedIn:return b("https://www.linkedin.com/sharing/share-offsite/",{url:e});default:console.error("Unknown share type: ".concat(t));return}},p=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];let r={};return e&&(s.concat(l()(n)).forEach(t=>{r[a()(t)]="".concat(e,"-").concat(t)}),r.default=e),r}},24327:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var i=n(85893),a=n(72590),r=n(16689);n(67294);var l=n(31489);n(48839);let c=(0,l.Ge)("base-contributor-list"),o=e=>{let{className:t,style:n,footer:l,contributors:o}=e;return(0,i.jsxs)("div",{className:"".concat(t||""," ").concat(c()),style:n,children:[o.map(e=>{let{login:t,avatarUrl:n,url:l}=e;return(0,i.jsx)(a.r,{className:c("link"),href:l,target:"_blank",title:"@".concat(t),children:(0,i.jsx)(r.q,{className:c("avatar"),text:t,imgUrl:n})},t)}),l]})}},20536:function(e,t,n){"use strict";n.r(t),n.d(t,{LibraryPage:function(){return P},__N_SSG:function(){return G},default:function(){return V}});var i,a,r,l,c,o,s=n(85893),u=n(5233),d=n(7825),f=n(91911),m=n(60938),h=n(81507),b=n(90121),v=n(51525),g=n(1960),x=n(69046),p=n(67294),j=n(66736),k=n(17504);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var N=e=>p.createElement("svg",y({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.563 6.87a.937.937 0 0 1-.938-.937V5C4.589 5 3.75 5.84 3.75 6.875v1.25h12.5v-1.25C16.25 5.839 15.41 5 14.375 5v.938a.937.937 0 1 1-1.875 0V5h-5v.933c0 .518-.42.938-.938.938zM12.5 3.126h-5v-.94a.937.937 0 1 0-1.875 0v.94a3.75 3.75 0 0 0-3.75 3.75v7.5a3.75 3.75 0 0 0 3.75 3.75h8.75a3.75 3.75 0 0 0 3.75-3.75v-7.5a3.75 3.75 0 0 0-3.75-3.75v-.937a.937.937 0 1 0-1.875 0v.937zM3.75 10v4.375c0 1.036.84 1.875 1.875 1.875h8.75c1.036 0 1.875-.84 1.875-1.875V10H3.75z",fill:"currentColor",fillOpacity:.5})));function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var C=e=>p.createElement("svg",w({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.75 16.875h-7.5A1.875 1.875 0 0 1 4.375 15V5c0-1.036.84-1.875 1.875-1.875h2.5V6.25A3.75 3.75 0 0 0 12.5 10h3.125v5c0 1.035-.84 1.875-1.875 1.875zm1.63-8.75a1.873 1.873 0 0 0-.304-.398l-4.053-4.053a1.874 1.874 0 0 0-.398-.303V6.25c0 1.036.84 1.875 1.875 1.875h2.88zm1.022-1.723A3.75 3.75 0 0 1 17.5 9.053V15a3.75 3.75 0 0 1-3.75 3.75h-7.5A3.75 3.75 0 0 1 2.5 15V5a3.75 3.75 0 0 1 3.75-3.75h3.447a3.75 3.75 0 0 1 2.651 1.098l4.054 4.054z",fill:"currentColor",fillOpacity:.5})));function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var z=e=>p.createElement("svg",E({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.337 8.163a.937.937 0 1 1 1.326 1.326l-.909.909a3.429 3.429 0 0 0 4.848 4.848l.91-.909a.938.938 0 0 1 1.325 1.326l-.909.909a5.303 5.303 0 1 1-7.5-7.5l.91-.91zm10 2.348a.937.937 0 0 0 1.326 1.326l.909-.909a5.303 5.303 0 1 0-7.5-7.5l-.91.91A.938.938 0 0 0 9.49 5.662l.909-.909a3.429 3.429 0 0 1 4.848 4.848l-.909.91zm-1.174-2.348a.938.938 0 0 0-1.326-1.326l-5 5a.937.937 0 1 0 1.326 1.326l5-5z",fill:"currentColor",fillOpacity:.5}))),O=n(46486);function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var _=e=>p.createElement("svg",I({width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.000598425 1.53603L0.579906 14.744V14.7432C0.58881 14.945 0.685981 15.1365 0.852138 15.2798C1.0183 15.4231 1.2413 15.5077 1.4769 15.5168L14.018 15.9992C14.1448 16.0041 14.2714 15.9869 14.3902 15.9487C14.509 15.9106 14.6176 15.8522 14.7093 15.7771C14.8011 15.7021 14.8741 15.6119 14.9241 15.512C14.9741 15.4122 14.9999 15.3046 15 15.196V0.80483C15.0001 0.694865 14.9739 0.586045 14.923 0.4851C14.872 0.384155 14.7974 0.29323 14.7038 0.217948C14.6102 0.142666 14.4995 0.0846267 14.3787 0.0474198C14.2578 0.010213 14.1293 -0.00537084 14.0012 0.00163199L12.9669 0.0570109L13.0416 1.90304C13.0426 1.92594 13.0358 1.9486 13.0222 1.96834C13.0086 1.98807 12.9887 2.00406 12.9648 2.01441C12.9409 2.02476 12.9141 2.02904 12.8875 2.02674C12.8608 2.02444 12.8355 2.01566 12.8145 2.00144L12.1194 1.53264L11.2971 2.06704C11.2759 2.08068 11.2506 2.08889 11.2242 2.09072C11.1978 2.09255 11.1713 2.08791 11.1478 2.07736C11.1243 2.0668 11.1048 2.05076 11.0915 2.03109C11.0783 2.01141 11.0718 1.98893 11.0729 1.96624L11.1607 0.153719L0.882641 0.70403C0.63793 0.716834 0.408745 0.810991 0.243966 0.966421C0.079187 1.12185 -0.00814405 1.32625 0.000598425 1.53603ZM8.7678 6.18543C8.7678 6.49822 11.2308 6.34863 11.5606 6.12863C11.5606 3.99743 10.2254 2.87743 7.77924 2.87743C5.33307 2.87743 3.96328 4.01503 3.96328 5.72063C3.96328 7.43022 5.51247 8.17502 6.82899 8.80782C7.80167 9.27502 8.64633 9.68142 8.64633 10.3702C8.64633 10.8246 8.38658 11.095 7.81381 11.095C7.06819 11.095 6.77293 10.7686 6.80843 9.65982C6.80843 9.41982 3.96328 9.34462 3.87639 9.65982C3.65588 12.347 5.61151 13.1222 7.84932 13.1222C10.0171 13.1222 11.7176 12.1334 11.7176 10.3414C11.7176 8.47278 10.0799 7.72955 8.72797 7.11598L8.72762 7.11582C7.7755 6.68382 6.96447 6.31582 6.96447 5.66383C6.96447 5.02383 7.51949 4.93903 7.84838 4.93903C8.19597 4.93903 8.82013 4.99103 8.7678 6.18543Z",fill:"currentColor"}))),S=n(99976),B=n(31489),L=n(24327);n(43577);let A=(0,B.Ge)("contributor-list"),U=e=>{let{lib:t,contributors:n}=e,{t:i}=(0,u.$G)(),a="https://github.com/".concat(t.config.githubId,"/contributors"),r=n.slice(0,16),l=Math.max(n.length-16,0);return(0,s.jsxs)("div",{className:A(),children:[(0,s.jsx)(L.T,{contributors:r}),!!l&&(0,s.jsx)(v.z,{className:A("more-btn"),size:"l",view:"flat",pin:"circle-circle",width:"max",href:a,target:"_blank",children:i("+".concat(l," contributors"))})]})};var Z=n(65324),R=n(54663);n(48811);let T=(0,B.Ge)("library");(i=o||(o={})).Readme="readme",i.Changelog="changelog";let M=e=>{let{lib:t}=e,{t:n,i18n:i}=(0,u.$G)(),a=[{id:"readme",title:n("library:readme")}];t.data.changelog&&a.push({id:"changelog",title:n("library:changelog")});let r=[{id:"stars",title:n("library:stars"),value:t.data.stars,icon:O.Z},{id:"version",title:n("library:version"),value:t.data.version||"–",icon:S.Z},{id:"lastUpdate",title:n("library:lastUpdate"),value:t.data.lastUpdate||"–",icon:N},{id:"repository",title:n("library:repository"),link:"https://github.com/".concat(t.config.githubId),value:"github.com/".concat(t.config.githubId),icon:z},{id:"license",title:n("library:license"),value:t.data.license||"–",icon:C}],[l,c]=p.useState(a[0].id),[o,d]=p.useState(!1),[y,w]=p.useState(!1),[E,I]=p.useState(!1),L=t.config.primary,A=p.useMemo(()=>(0,B.fe)(t),[]);return(0,s.jsxs)("div",{className:T(),children:[(0,s.jsx)(f.r,{className:T("header-grid"),children:(0,s.jsx)(m.X,{children:(0,s.jsx)(h.J,{sizes:12,children:(0,s.jsxs)("div",{className:T("header",{primary:L}),children:[(0,s.jsxs)("div",{className:T("breadcrumbs"),children:[(0,s.jsx)(Z.r,{href:"/libraries",className:T("breadcrumbs-link"),children:n("library:libraries")})," ","/ ",(0,s.jsx)(b.Z,{className:T("breadcrumbs-item"),children:t.config.title})]}),(0,s.jsx)("h1",{className:T("title"),children:(0,s.jsx)(b.Z,{children:t.config.title})}),(0,s.jsx)("div",{className:T("description"),children:n("libraries-info:description_".concat(t.config.id))}),t.config.githubId||t.config.storybookUrl?(0,s.jsxs)("div",{className:T("buttons"),children:["icons"===t.config.id&&(0,s.jsx)(v.z,{className:T("button"),view:"action",size:"xl",href:(0,B.n6)("/icons",i),target:"_blank",children:n("library:actions_goToIcons")},"icons"),t.config.githubId?(0,s.jsxs)(v.z,{className:T("button"),view:"icons"===t.config.id?"outlined":"action",size:"xl",href:"".concat("https://github.com/").concat(t.config.githubId),target:"_blank",children:[(0,s.jsx)(g.J,{className:T("button-icon"),data:k.Z,size:16}),(0,s.jsx)("span",{children:n("actions_github")})]},"github"):null,"icons"!==t.config.id&&t.config.storybookUrl?(0,s.jsxs)(v.z,{className:T("button"),view:"outlined",size:"xl",href:t.config.storybookUrl,target:"_blank",children:[(0,s.jsx)(g.J,{className:T("button-icon"),data:_,size:16}),(0,s.jsx)("span",{children:n("actions_storybook")})]},"storybook"):null]}):null]})})})}),(0,s.jsx)(f.r,{children:(0,s.jsxs)(m.X,{children:[(0,s.jsx)(h.J,{sizes:{all:12,lg:8},orders:{all:2,lg:1},children:(0,s.jsxs)("div",{className:T("block"),children:[(0,s.jsx)(x.m,{size:"xl",items:a,activeTab:l,onSelectTab:e=>{c(e)}}),(0,s.jsx)("div",{className:T("content"),children:(0,s.jsx)(R.W,{text:"readme"===l?t.data.readme:t.data.changelog,absoluteImgPath:"https://raw.githubusercontent.com/".concat(t.config.githubId,"/").concat(t.config.mainBranch,"/")},"".concat(t.config.id,"-").concat(l))})]})}),(0,s.jsxs)(h.J,{sizes:{all:12,lg:4},orders:{all:1,lg:2},children:[(0,s.jsx)("div",{className:T("block",{about:!0}),children:(0,s.jsxs)("div",{className:T("info"),children:[(0,s.jsxs)("div",{className:T("info-title"),tabIndex:0,role:"button",onClick:()=>{d(!o)},children:[(0,s.jsx)("div",{className:T("info-title-text"),children:n("library:about")}),(0,s.jsx)("div",{className:T("info-title-icon",{"mobile-visible":o}),children:(0,s.jsx)(g.J,{data:j.Z,width:10,height:6})})]}),(0,s.jsx)("div",{className:T("info-list",{"mobile-visible":o}),children:r.map(e=>{let t=(0,s.jsxs)(p.Fragment,{children:[(0,s.jsx)("div",{className:T("info-item-icon"),children:(0,s.jsx)(g.J,{data:e.icon,size:20})}),(0,s.jsxs)("div",{className:T("info-item-content"),children:[(0,s.jsx)("div",{className:T("info-item-title"),children:e.title}),(0,s.jsx)("div",{className:T("info-item-value"),children:e.value})]})]});return e.link?(0,s.jsxs)("a",{className:T("info-item",{link:!0}),target:"_blank",href:e.link,children:[t,(0,s.jsx)("div",{className:T("info-item-arrow-wrapper"),children:(0,s.jsx)("div",{className:T("info-item-arrow"),children:(0,s.jsx)(g.J,{data:j.Z,width:10,height:6})})})]},e.id):(0,s.jsx)("div",{className:T("info-item"),children:t},e.id)})})]})}),!!A.length&&(0,s.jsx)("div",{className:T("block",{about:!0}),children:(0,s.jsxs)("div",{className:T("info"),children:[(0,s.jsxs)("div",{className:T("info-title"),tabIndex:0,role:"button",onClick:()=>{w(!y)},children:[(0,s.jsx)("div",{className:T("info-title-text"),children:n("library:maintainers")}),(0,s.jsx)("div",{className:T("info-title-icon",{"mobile-visible":y}),children:(0,s.jsx)(g.J,{data:j.Z,width:10,height:6})})]}),(0,s.jsx)("div",{className:T("contributors-content",{"mobile-visible":y}),children:(0,s.jsx)(U,{lib:t,contributors:A})})]})}),(0,s.jsx)("div",{className:T("block",{about:!0}),children:(0,s.jsxs)("div",{className:T("info"),children:[(0,s.jsxs)("div",{className:T("info-title"),tabIndex:0,role:"button",onClick:()=>{I(!E)},children:[(0,s.jsx)("div",{className:T("info-title-text"),children:n("library:contributors")}),(0,s.jsx)("div",{className:T("info-title-icon",{"mobile-visible":E}),children:(0,s.jsx)(g.J,{data:j.Z,width:10,height:6})})]}),(0,s.jsx)("div",{className:T("contributors-content",{"mobile-visible":E}),children:(0,s.jsx)(U,{lib:t,contributors:t.data.contributors})})]})})]})]})})]})};var J=n(70664);(0,B.Aw)();let P=e=>{var t;let{libId:n}=e,{t:i}=(0,u.$G)();(0,J.A)();let a=(0,B.MM)(n);return(0,s.jsx)(d.A,{title:null!==(t=null==a?void 0:a.config.title)&&void 0!==t?t:"",meta:{name:null==a?void 0:a.config.title,description:i("libraries-info:description_".concat(a.config.id))},children:(0,s.jsx)(M,{lib:a})})};var G=!0,V=P},95774:function(){},13362:function(){},69341:function(){},48839:function(){},43577:function(){},48811:function(){}},function(e){e.O(0,[3662,630,9772,5880,2083,6629,5303,5237,3740,2315,1287,6383,3849,8931,4294,1355,5706,2725,9031,5527,3066,5607,2538,7533,4013,1137,8689,1893,1102,2888,9774,179],function(){return e(e.s=50595)}),_N_E=e.O()}]);