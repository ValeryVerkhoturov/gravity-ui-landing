(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2538],{16460:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var a=n(85893),r=n(67294),i=n(34490),o=n(19416);n(55712);let s=r.forwardRef(function(e,t){let n=(0,o.F)(e);return(0,a.jsx)(i.w,Object.assign({ref:t},e,{state:n}))})},34490:function(e,t,n){"use strict";n.d(t,{w:function(){return y}});var a=n(85893),r=n(67294),i=n(26595),o=n(44607),s=n(50254),l=n(49179),u=n(21646),d=n(98982),c=n(25789),f=n(24778),m=n(70617);n(55712);let h=(0,u.G)("calendar"),y=r.forwardRef(function(e,t){let{state:n}=e,{calendarProps:u,modeButtonProps:d,nextButtonProps:c,previousButtonProps:m}=(0,f.W)(e,n);return r.useImperativeHandle(t,()=>({focus(){n.setFocused(!0)}})),(0,a.jsxs)("div",Object.assign({},u,{className:h({size:e.size}),children:[(0,a.jsxs)("div",{className:h("header"),children:[(0,a.jsx)(s.z,Object.assign({},d,{view:"flat",size:e.size,children:n.availableModes.indexOf(n.mode)+1===n.availableModes.length?(0,a.jsx)("span",{className:h("mode-label",h("years-label")),children:d.children},"label"):[(0,a.jsx)("span",{className:h("mode-label"),children:d.children},"label"),(0,a.jsx)(s.z.Icon,{children:(0,a.jsx)(l.F,{direction:"bottom"})},"icon")]})),(0,a.jsxs)("div",{className:h("controls"),children:[(0,a.jsx)(s.z,Object.assign({},m,{view:"flat",size:e.size,children:(0,a.jsx)(s.z.Icon,{children:(0,a.jsx)(i.Z,{className:h("control-icon")})})})),(0,a.jsx)(s.z,Object.assign({},c,{view:"flat",size:e.size,children:(0,a.jsx)(s.z.Icon,{children:(0,a.jsx)(o.Z,{className:h("control-icon")})})}))]})]}),(0,a.jsx)(p,{state:n})]}))});function p({state:e}){let t;let[n,i]=r.useState(()=>Object.assign(Object.assign({},e),{isFocused:!1})),o=e.mode!==n.mode,s=!e.startDate.isSame(n.startDate,"days");o?t=m.jy.indexOf(n.mode)>m.jy.indexOf(e.mode)?"zoom-out":"zoom-in":s&&(t=e.startDate.isBefore(n.startDate)?"forward":"backward");let{gridProps:l}=(0,c.D)(e);return(0,a.jsxs)("div",Object.assign({className:h("grid")},l,{children:[t&&(0,a.jsx)(v,{className:h("previous-state"),state:n,animation:t}),(0,a.jsx)(v,{className:h("current-state"),state:e,animation:t,onAnimationEnd:()=>{i(Object.assign(Object.assign({},e),{isFocused:!1}))}},"current")]}))}function v({className:e,state:t,animation:n,onAnimationEnd:r}){return(0,a.jsxs)("div",{className:h("content",{animation:n},e),onAnimationEnd:r,role:"presentation",children:["days"===t.mode&&(0,a.jsx)(b,{state:t}),(0,a.jsx)(g,{state:t})]})}function b({state:e}){let t=(0,m.tu)();return(0,a.jsx)("div",{className:h("grid-row"),role:"row",children:t.map(t=>(0,a.jsx)("div",{className:h("weekday",{weekend:e.isWeekend(t)}),role:"columnheader","aria-label":t.format("dddd"),children:t.format("dd")},t.day()))})}function g({state:e}){let t="days"===e.mode?6:4,n="days"===e.mode?7:3+("quarters"===e.mode?1:0),r=(0,m.yg)(e.startDate,e.endDate,e.mode);return(0,a.jsx)("div",{className:h("grid-rowgroup",{mode:e.mode}),role:"rowgroup",children:[...Array(t).keys()].map(t=>(0,a.jsxs)("div",{className:h("grid-row"),role:"row",children:["quarters"===e.mode?(0,a.jsx)("span",{role:"rowheader",className:h("grid-rowgroup-header"),children:r[t*n].format("YYYY")}):null,r.slice(t*n,(t+1)*n).map(t=>(0,a.jsx)(S,{date:t,state:e},t.unix()))]},t))})}function S({date:e,state:t}){let{cellProps:n,buttonProps:r,formattedDate:i,isDisabled:o,isSelected:s,isRangeSelection:l,isSelectionStart:u,isSelectionEnd:c,isOutsideCurrentRange:f,isUnavailable:m,isCurrent:y,isWeekend:p}=(0,d.k)(e,t);return(0,a.jsx)("div",Object.assign({},n,{children:(0,a.jsx)("div",Object.assign({},r,{className:h("button",{disabled:o,selected:s,"range-selection":l,"selection-start":u,"selection-end":c,"out-of-boundary":f,unavailable:m,current:y,weekend:p}),children:i}))}))}},98982:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});var a=n(67294);function r(e,t){var n;let r;let i=a.useRef(null),o=t.isCellFocused(e);a.useEffect(()=>{var e;o&&(null===(e=i.current)||void 0===e||e.focus({preventScroll:!0}))},[o]);let s=t.focusedDate.isSame(e,t.mode)?0:-1,l=t.isCellDisabled(e),u=t.isSelected(e),d="highlightedRange"in t&&t.highlightedRange,c=u&&d&&e.isSame(d.start,t.mode),f=u&&d&&e.isSame(d.end,t.mode),m="days"===t.mode&&!t.focusedDate.isSame(e,"month"),h=t.isCellUnavailable(e),y=!l&&!h,p=t.isCurrent(e),v=t.isWeekend(e),b=(n=t.mode,r="","days"===n?r=`${e.format("dddd")}, ${e.format("LL")}`:"months"===n?r=`${e.format("MMMM YYYY")}`:"quarters"===n?r=`${e.format("[Q]Q YYYY")}`:"years"===n&&(r=`${e.format("YYYY")}`),r),g=e.format("D");return"months"===t.mode?g=e.format("MMM"):"quarters"===t.mode?g=e.format("[Q]Q"):"years"===t.mode&&(g=e.format("YYYY")),{cellProps:{role:"gridcell","aria-selected":u?"true":void 0,"aria-disabled":l?"true":void 0},buttonProps:{ref:i,role:"button",tabIndex:l?void 0:s,"aria-disabled":y?void 0:"true","aria-label":b,onClick:y?()=>{t.setFocusedDate(e),t.selectDate(e)}:void 0,onPointerEnter(){if("highlightDate"in t&&y){if(m){let n=e.isBefore(t.focusedDate)?t.focusedDate.startOf("month"):t.focusedDate.endOf("month").startOf("date");t.highlightDate(n)}else t.highlightDate(e)}}},formattedDate:g,isDisabled:l,isSelected:u,isRangeSelection:!!(d&&u),isSelectionStart:c,isSelectionEnd:f,isOutsideCurrentRange:m,isUnavailable:h,isCurrent:p,isWeekend:v}}},25789:function(e,t,n){"use strict";n.d(t,{D:function(){return r}});var a=n(59003);function r(e){let{focusWithinProps:t}=(0,a.L)({onFocusWithinChange:t=>{e.setFocused(t)}});return{gridProps:Object.assign(Object.assign({role:"grid","aria-label":"years"===e.mode||"quarters"===e.mode?`${e.startDate.year()} — ${e.endDate.year()}`:e.focusedDate.format("days"===e.mode?"MMMM YYYY":"YYYY"),"aria-disabled":e.disabled?"true":void 0,"aria-readonly":e.readOnly?"true":void 0},t),{onKeyDown:t=>{"ArrowRight"===t.key?(t.preventDefault(),e.focusNextCell()):"ArrowLeft"===t.key?(t.preventDefault(),e.focusPreviousCell()):"ArrowDown"===t.key?(t.preventDefault(),e.focusNextRow()):"ArrowUp"===t.key?(t.preventDefault(),e.focusPreviousRow()):"PageDown"===t.key?(t.preventDefault(),e.focusNextPage(t.shiftKey)):"PageUp"===t.key?(t.preventDefault(),e.focusPreviousPage(t.shiftKey)):"End"===t.key?(t.preventDefault(),e.focusSectionEnd()):"Home"===t.key?(t.preventDefault(),e.focusSectionStart()):"Minus"===t.code?(t.preventDefault(),e.zoomOut()):"Equal"===t.code?(t.preventDefault(),e.zoomIn()):("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.selectDate(e.focusedDate))}})}}},24778:function(e,t,n){"use strict";n.d(t,{W:function(){return c}});var a=n(67294),r=n(59003),i=n(97580),o=n(21646),s=JSON.parse('{"Previous":"Previous","Next":"Next","Switch to months view":"Switch to months view","Switch to quarters view":"Switch to quarters view","Switch to years view":"Switch to years view"}'),l=JSON.parse('{"Previous":"Назад","Next":"Вперёд","Switch to months view":"Переключиться на просмотр по месяцам","Switch to quarters view":"Переключиться на просмотр по кварталам","Switch to years view":"Переключиться на просмотр по годам"}');let u=(0,i.e)({en:s,ru:l},`${o.A}calendar`),d="yc-button_disabled g-button_disabled";function c(e,t){let n="years"===t.mode||"quarters"===t.mode?`${t.startDate.year()} — ${t.endDate.year()}`:t.focusedDate.format("days"===t.mode?"MMMM YYYY":"YYYY"),{focusWithinProps:i}=(0,r.L)({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur}),o=Object.assign({role:"group",id:e.id,"aria-label":[e["aria-label"],n].filter(Boolean).join(", "),"aria-labelledby":e["aria-labelledby"]||void 0,"aria-describedby":e["aria-describedby"]||void 0,"aria-details":e["aria-details"]||void 0,"aria-disabled":t.disabled||void 0},i),s=t.availableModes.indexOf(t.mode),l=s+1===t.availableModes.length,c=s+2===t.availableModes.length,f=t.disabled||l,m={disabled:t.disabled,className:f?d:void 0,onClick:f?void 0:()=>{t.zoomOut(),c&&t.setFocused(!0)},extraProps:{"aria-disabled":f?"true":void 0,"aria-description":function(e,t){let n=t.indexOf(e)+1;if(n!==t.length)return({days:"",months:u("Switch to months view"),quarters:u("Switch to quarters view"),years:u("Switch to years view")})[t[n]]}(t.mode,t.availableModes),"aria-live":"polite"},children:n},h=a.useRef(!1),y=t.disabled||t.isPreviousPageInvalid();a.useLayoutEffect(()=>{y&&h.current&&(h.current=!1,t.setFocused(!0))});let p={disabled:t.disabled,className:y?d:void 0,onClick:y?void 0:()=>{t.focusPreviousPage()},onFocus:y?void 0:()=>{h.current=!0},onBlur:y?void 0:()=>{h.current=!1},extraProps:{"aria-label":u("Previous"),"aria-disabled":y?"true":void 0}},v=a.useRef(!1),b=t.disabled||t.isNextPageInvalid();return a.useLayoutEffect(()=>{b&&v.current&&(v.current=!1,t.setFocused(!0))}),{calendarProps:o,modeButtonProps:m,nextButtonProps:{disabled:t.disabled,className:b?d:void 0,onClick:b?void 0:()=>{t.focusNextPage()},onFocus:b?void 0:()=>{v.current=!0},onBlur:b?void 0:()=>{v.current=!1},extraProps:{"aria-label":u("Next"),"aria-disabled":y?"true":void 0}},previousButtonProps:p}}},19416:function(e,t,n){"use strict";n.d(t,{F:function(){return d}});var a=n(67294),r=n(13283),i=n(59505),o=n(13485),s=n(31739),l=n(70617);let u={days:!0,months:!0,quarters:!1,years:!0};function d(e){var t,n,d;let{disabled:h,readOnly:y,modes:p=u}=e,[v,b]=(0,i.z)(e.value,null!==(t=e.defaultValue)&&void 0!==t?t:null,e.onUpdate),g=l.jy.filter(e=>p[e]),S=g[0]||"days",[x,w]=(0,i.z)(e.mode,null!==(n=e.defaultMode)&&void 0!==n?n:S,e.onUpdateMode),O=x&&g.includes(x)?x:S,D=(0,s.G)(e.value||e.defaultValue||e.focusedValue||e.defaultFocusedValue),V=e.timeZone||D,j=a.useMemo(()=>e.minValue?e.minValue.timeZone(V):void 0,[V,e.minValue]),k=a.useMemo(()=>e.maxValue?e.maxValue.timeZone(V):void 0,[V,e.maxValue]),P=a.useMemo(()=>e.focusedValue?(0,l.Me)(e.focusedValue.timeZone(V),j,k):e.focusedValue,[e.focusedValue,j,k,V]),M=a.useMemo(()=>{var t;let n=(null===(t=e.defaultFocusedValue?e.defaultFocusedValue:v)||void 0===t?void 0:t.timeZone(V))||(0,o.ix)({timeZone:V}).startOf(S);return(0,l.Me)(n,j,k)},[k,j,e.defaultFocusedValue,V,v,S]),[C,N]=(0,i.z)(P,M,t=>{var n;null===(n=e.onFocusUpdate)||void 0===n||n.call(e,t.timeZone(D))}),T=null!==(d=null==C?void 0:C.timeZone(V))&&void 0!==d?d:(0,l.Me)((0,o.ix)({timeZone:V}),j,k);function I(e){N((0,l.Me)(e.startOf(O),j,k))}m(T,j,k)&&N((0,l.Me)(T,j,k));let[Y,z]=a.useState(e.autoFocus||!1),F=c(T,O),E=f(T,O);return{disabled:h,readOnly:y,value:v,setValue(e){if(!h&&!y){let t=(0,l.Me)(e,j,k);this.isCellUnavailable(t)||(v&&(t=(0,o.s_)(t,v.timeZone(V))),b(t.timeZone(D)))}},timeZone:V,selectDate(e,t=!1){!h&&(!y&&(t||this.mode===S)?(this.setValue(e.startOf(S)),t&&O!==S&&w(S)):this.zoomIn())},minValue:j,maxValue:k,focusedDate:T,startDate:F,endDate:E,setFocusedDate(e){I(e),z(!0)},focusNextCell(){I(T.add(1,this.mode))},focusPreviousCell(){I(T.subtract(1,this.mode))},focusNextRow(){"days"===this.mode?I(T.add(1,"week")):"quarters"===this.mode?I(T.add(1,"years")):I(T.add(3,this.mode))},focusPreviousRow(){"days"===this.mode?I(T.subtract(1,"week")):"quarters"===this.mode?I(T.subtract(1,"years")):I(T.subtract(3,this.mode))},focusNextPage(e){"days"===this.mode?I(T.add({months:e?12:1})):"quarters"===this.mode?I(T.add(4,"years")):I(T.add(12,this.mode))},focusPreviousPage(e){"days"===this.mode?I(T.subtract({months:e?12:1})):"quarters"===this.mode?I(T.subtract(4,"years")):I(T.subtract(12,this.mode))},focusSectionStart(){I(c(T,this.mode))},focusSectionEnd(){I(f(T,this.mode))},zoomIn(){let e=g[g.indexOf(this.mode)-1];e&&this.setMode(e)},zoomOut(){let e=g[g.indexOf(this.mode)+1];e&&this.setMode(e)},selectFocusedDate(){this.selectDate(T,!0)},isFocused:Y,setFocused:z,isInvalid(e){return m(e,this.minValue,this.maxValue,this.mode)},isPreviousPageInvalid(){let e=this.startDate.subtract(1,"day");return this.isInvalid(e)},isNextPageInvalid(){let e=this.endDate.endOf(this.mode).add(1,"day");return this.isInvalid(e)},isSelected(e){return!!(v&&e.isSame(v.timeZone(V),O)&&!this.isCellDisabled(e))},isCellUnavailable(t){return this.mode===S&&!!(e.isDateUnavailable&&e.isDateUnavailable(t))},isCellFocused(e){return this.isFocused&&T&&e.isSame(T,O)},isCellDisabled(e){return this.disabled||this.isInvalid(e)},isWeekend(e){return"days"===this.mode&&[0,6].includes(e.day())},isCurrent(e){return(0,r.CQ)({timeZone:V}).isSame(e,this.mode)},mode:O,setMode:w,availableModes:g}}function c(e,t){if("days"===t)return e.startOf("month");if("months"===t)return e.startOf("year");if("quarters"===t){let t=4*Math.floor(e.year()/4);return e.startOf("year").set("year",t)}let n=12*Math.floor(e.year()/12);return e.startOf("year").set("year",n)}function f(e,t){if("days"===t)return e.endOf("month").startOf("day");if("months"===t)return e.endOf("year").startOf("month");let n=c(e,t);return"quarters"===t?n.add(15,"quarters"):n.add({[t]:11})}function m(e,t,n,a="days"){return!(0,l.Me)(e,t,n).isSame(e,a)}},70617:function(e,t,n){"use strict";n.d(t,{Me:function(){return r},jy:function(){return s},tu:function(){return o},yg:function(){return i}});var a=n(13283);function r(e,t,n){return t&&e.isBefore(t)?t:n&&n.isBefore(e)?n:e}function i(e,t,n){let a=[];if("days"===n){let t=e.startOf("week");for(let e=0;e<42;e++)a.push(t.add({days:e}))}else if("quarters"===n)for(let t=0;t<16;t++)a.push(e.add(t,"quarters"));else for(let t=0;t<12;t++)a.push(e.add({[n]:t}));return a}function o(){let e=[],t=(0,a.CQ)().startOf("week");for(let n=0;n<7;n++){let a=t.add({days:n});e.push(a)}return e}let s=["days","months","quarters","years"]},56432:function(e,t,n){"use strict";n.d(t,{N:function(){return m}});var a=n(97582),r=n(85893),i=n(67294),o=n(59003),s=n(23825),l=n(21646),u=n(37499),d=n(22054),c=n(97512);n(43341);let f=(0,l.G)("date-field");function m(e){var{className:t}=e,n=(0,a._T)(e,["className"]);let l=(0,c.R)(n),{inputProps:m}=(0,d.v)(l,n),[h,y]=i.useState(!1),{focusWithinProps:p}=(0,o.L)({onFocusWithinChange(e){y(e)}});return(0,r.jsxs)("div",Object.assign({className:f(null,t),style:n.style},p,{children:[(0,r.jsx)(s.o,Object.assign({},m,{value:l.isEmpty&&!h&&n.placeholder?"":m.value})),(0,r.jsx)(u.x,{name:n.name,value:l.value,toStringValue:e=>{var t;return null!==(t=null==e?void 0:e.toISOString())&&void 0!==t?t:""},onReset:e=>{l.setDate(e)},disabled:l.disabled,form:n.form})]}))}},76783:function(e,t,n){"use strict";n.d(t,{s:function(){return s}});var a=n(67294),r=n(13485),i=n(24551);let o={year:5,month:2,weekday:3,day:7,hour:2,minute:15,second:15};function s(e){let{value:t,validationState:n,displayValue:s,editableSections:l,selectedSectionIndexes:u,selectedSections:d,isEmpty:c,flushAllValidSections:f,flushValidSection:m,setSelectedSections:h,setValue:y,setDate:p,adjustSection:v,setSection:b,getSectionValue:g,setSectionValue:S,createPlaceholder:x,setValueFromString:w}=e,O=a.useRef(""),{hasDate:D,hasTime:V}=a.useMemo(()=>{let e=!1,t=!1;for(let n of l)t||(t=["hour","minute","second"].includes(n.type)),e||(e=["day","month","year"].includes(n.type));return{hasTime:t,hasDate:e}},[l]);return{value:t,isEmpty:c,displayValue:s,setValue:y,setDate:p,text:(0,i.jg)(l),readOnly:e.readOnly,disabled:e.disabled,sections:l,hasDate:D,hasTime:V,selectedSectionIndexes:u,validationState:n,setSelectedSections(e){O.current="",h(e)},focusSectionInPosition(e){let t=this.sections.findIndex(t=>t.end>=e),n=-1===t?0:t,a=this.sections[n];a&&this.setSelectedSections(i.Iy[a.type]?n:a.nextEditableSection)},focusNextSection(){var e,t;let n="all"===d?0:d,a=null!==(t=null===(e=this.sections[n])||void 0===e?void 0:e.nextEditableSection)&&void 0!==t?t:-1;-1!==a&&this.setSelectedSections(a)},focusPreviousSection(){var e,t;let n="all"===d?0:d,a=null!==(t=null===(e=this.sections[n])||void 0===e?void 0:e.previousEditableSection)&&void 0!==t?t:-1;-1!==a&&this.setSelectedSections(a)},focusFirstSection(){var e,t;let n=null!==(t=null===(e=this.sections[0])||void 0===e?void 0:e.previousEditableSection)&&void 0!==t?t:-1;-1!==n&&h(n)},focusLastSection(){var e,t;let n=null!==(t=null===(e=this.sections[this.sections.length-1])||void 0===e?void 0:e.nextEditableSection)&&void 0!==t?t:-1;-1!==n&&this.setSelectedSections(n)},increment(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);-1!==e&&v(e,1)},decrement(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);-1!==e&&v(e,-1)},incrementPage(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);-1!==e&&v(e,o[this.sections[e].type]||1)},decrementPage(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);-1!==e&&v(e,-(o[this.sections[e].type]||1))},incrementToMax(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);if(-1!==e){let t=this.sections[e];"number"==typeof t.maxValue&&b(e,t.maxValue)}},decrementToMin(){if(this.readOnly||this.disabled)return;O.current="";let e=(0,i.ST)(this.sections,d);if(-1!==e){let t=this.sections[e];"number"==typeof t.minValue&&b(e,t.minValue)}},clearSection(){if(this.readOnly||this.disabled)return;if(O.current="","all"===d){this.clearAll();return}let t=(0,i.ST)(this.sections,d);if(-1===t)return;m(t);let n=this.sections[t],a=(0,r.ix)({placeholderValue:e.placeholderValue,timeZone:e.timeZone}).timeZone(e.timeZone),o=g(t),s=o;if("dayPeriod"===n.type){let e=o.hour()>=12,t=a.hour()>=12;e&&!t?s=o.set("hour",o.hour()-12):!e&&t&&(s=o.set("hour",o.hour()+12))}else{let e=(0,i.e2)(n.type);s=o.set(e,a[e]())}S(t,s)},clearAll(){this.readOnly||this.disabled||(O.current="",f(),null!==t&&p(null),y(x()))},onInput(e){if(this.readOnly||this.disabled)return;let t=(0,i.ST)(this.sections,d);if(-1===t)return;let n=this.sections[t],a=O.current+e,r=r=>{var i,o,s;let l="month"===n.type?r-1:r,u=0===n.minValue;if("hour"===n.type&&(12===n.minValue||11===n.maxValue))r>12&&(l=Number(e)),12===n.minValue&&l>1&&(l+=12);else if(l>(null!==(i=n.maxValue)&&void 0!==i?i:0)&&(l=Number(e)-("month"===n.type?1:0),a=e,l>(null!==(o=n.maxValue)&&void 0!==o?o:0))){O.current="";return}let d=l>0||0===l&&u;d&&b(t,l),Number(r+"0")>(null!==(s=n.maxValue)&&void 0!==s?s:0)||a.length>=String(n.maxValue).length?(O.current="",d&&this.focusNextSection()):O.current=a},o=r=>{var i;let o=null!==(i=n.options)&&void 0!==i?i:[],s=r.toLocaleUpperCase(),l=o.filter(e=>e.startsWith(s));if(0===l.length&&(r!==e&&(s=e.toLocaleUpperCase(),l=o.filter(e=>e.startsWith(s))),0===l.length)){O.current="";return}let u=l[0],d=o.indexOf(u);"dayPeriod"===n.type?b(t,1===d?12:0):b(t,d),l.length>1?O.current=a:(O.current="",this.focusNextSection())};switch(n.type){case"day":case"hour":case"minute":case"second":case"year":if(!Number.isInteger(Number(a)))return;r(Number(a));break;case"dayPeriod":o(a);break;case"weekday":case"month":Number.isInteger(Number(a))?r(Number(a)):o(a)}},setValueFromString:e=>(O.current="",w(e))}}},22054:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var a=n(67294),r=n(24551);function i(e,t){let n=a.useRef(null),[,i]=a.useState({});function o(t){e.setSelectedSections(t),i({})}function s(){var t,a;if(e.readOnly){o(-1);return}e.focusSectionInPosition(null!==(a=null===(t=n.current)||void 0===t?void 0:t.selectionStart)&&void 0!==a?a:0),i({})}a.useLayoutEffect(()=>{let t=n.current;if(!t)return;if(null===e.selectedSectionIndexes){t.scrollLeft&&(t.scrollLeft=0);return}let a=e.sections[e.selectedSectionIndexes.startIndex],r=e.sections[e.selectedSectionIndexes.endIndex];if(a&&r){let e=a.start,n=r.end;(e!==t.selectionStart||n!==t.selectionEnd)&&t.setSelectionRange(e,n)}});let l=a.useMemo(()=>{if(!e.selectedSectionIndexes)return"text";let t=e.sections[e.selectedSectionIndexes.startIndex];return t&&"letter"!==t.contentType?"tel":"text"},[e.selectedSectionIndexes,e.sections]);return{inputProps:{value:e.text,view:t.view,size:t.size,disabled:e.disabled,hasClear:!e.readOnly&&!e.isEmpty&&t.hasClear,placeholder:t.placeholder,id:t.id,label:t.label,startContent:t.startContent,endContent:t.endContent,pin:t.pin,autoFocus:t.autoFocus,controlRef:n,autoComplete:"off",type:"text",validationState:e.validationState,errorMessage:t.errorMessage,errorPlacement:t.errorPlacement,onUpdate(t){t||e.clearAll()},onFocus(a){var r;if(null===(r=t.onFocus)||void 0===r||r.call(t,a),null!==e.selectedSectionIndexes)return;let i=a.target,l=!n.current;setTimeout(()=>{i&&i===n.current&&(l?e.focusSectionInPosition(0):i.value.length&&Number(i.selectionEnd)-Number(i.selectionStart)===i.value.length?o("all"):s())})},onBlur(e){var n;null===(n=t.onBlur)||void 0===n||n.call(t,e),o(-1)},onKeyDown(n){var a;null===(a=t.onKeyDown)||void 0===a||a.call(t,n),"ArrowLeft"===n.key?(n.preventDefault(),e.focusPreviousSection()):"ArrowRight"===n.key?(n.preventDefault(),e.focusNextSection()):"Home"===n.key?(n.preventDefault(),e.decrementToMin()):"End"===n.key?(n.preventDefault(),e.incrementToMax()):"ArrowUp"!==n.key||n.altKey?"ArrowDown"!==n.key||n.altKey?"PageUp"===n.key?(n.preventDefault(),e.incrementPage()):"PageDown"===n.key?(n.preventDefault(),e.decrementPage()):"Backspace"===n.key||"Delete"===n.key?(n.preventDefault(),e.clearSection()):"a"===n.key&&(n.ctrlKey||n.metaKey)&&(n.preventDefault(),o("all")):(n.preventDefault(),e.decrement()):(n.preventDefault(),e.increment())},onKeyUp:t.onKeyUp,controlProps:{"aria-label":t["aria-label"]||void 0,"aria-labelledby":t["aria-labelledby"]||void 0,"aria-describedby":t["aria-describedby"]||void 0,"aria-details":t["aria-details"]||void 0,"aria-disabled":e.disabled||void 0,inputMode:l,onClick(){s()},onMouseUp(e){e.preventDefault()},onBeforeInput(t){t.preventDefault();let n=t.data;null!=n&&e.onInput(n)},onPaste(t){if(t.preventDefault(),e.readOnly)return;let n=(0,r.EY)(t.clipboardData.getData("text"));if(e.selectedSectionIndexes&&e.selectedSectionIndexes.startIndex===e.selectedSectionIndexes.endIndex){let t=e.sections[e.selectedSectionIndexes.startIndex],a=/^\d+$/.test(n),r=/^[a-zA-Z]+$/.test(n);if(t&&("digit"===t.contentType&&a||"letter"===t.contentType&&r)){e.onInput(n);return}if(a||r)return}e.setValueFromString(n)}}}}}},97512:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var a=n(67294),r=n(13283),i=n(59505),o=n(13485),s=n(31739),l=n(24551),u=n(76783);function d(e){var t,n;let[d,c]=(0,i.z)(e.value,null!==(t=e.defaultValue)&&void 0!==t?t:null,e.onUpdate),f=(0,s.G)(e.value||e.defaultValue||e.placeholderValue),m=e.timeZone||f,h=e=>{c(e?e.timeZone(f):e)},[y,p]=a.useState(()=>(0,o.ix)({placeholderValue:e.placeholderValue,timeZone:m})),v=e.format||"L",b=(0,l.p_)(v),g=a.useMemo(()=>b.filter(e=>l.Iy[e.type]).reduce((e,t)=>Object.assign(Object.assign({},e),{[t.type]:!0}),{}),[b]),S=a.useState(()=>d?Object.assign({},g):{}),x=S[0],w=S[1];d&&!(0,l.sn)(g,x)&&w(Object.assign({},g)),!d&&(0,l.sn)(g,x)&&Object.keys(x).length===Object.keys(g).length&&(w(x={}),p((0,o.ix)({placeholderValue:e.placeholderValue,timeZone:m})));let O=d&&(0,r.JY)(d)&&(0,l.sn)(g,x)?d.timeZone(m):y.timeZone(m),D=function(e,t,n){let[r,i]=a.useState(()=>({value:t,sections:e,validSegments:n,editableSections:(0,l.qm)(e,t,n)}));return e===r.sections&&n===r.validSegments&&t.isSame(r.value)&&t.timeZone()===r.value.timeZone()||i({value:t,sections:e,validSegments:n,editableSections:(0,l.qm)(e,t,n)}),r}(b,O,x),[V,j]=a.useState(-1),k=a.useMemo(()=>{if(-1===V)return null;if("all"===V)return{startIndex:0,endIndex:D.editableSections.length-1};if("number"==typeof V)return{startIndex:V,endIndex:V};if("string"==typeof V){let e=D.editableSections.findIndex(e=>e.type===V);return{startIndex:e,endIndex:e}}return V},[V,D.editableSections]);function P(t){!e.disabled&&!e.readOnly&&((0,l.sn)(g,x)?d&&t.isSame(d)||h(t):(d&&h(null),p(t)))}function M(e){x[e]=!0,x.day&&x.month&&x.year&&g.weekday&&(x.weekday=!0),x.hour&&g.dayPeriod&&(x.dayPeriod=!0),w(Object.assign({},x))}let C=e.validationState||((0,o.wp)(d,e.minValue,e.maxValue)?"invalid":void 0)||(d&&(null===(n=e.isDateUnavailable)||void 0===n?void 0:n.call(e,d))?"invalid":void 0);return(0,u.s)({value:d,displayValue:O,placeholderValue:e.placeholderValue,timeZone:m,validationState:C,editableSections:D.editableSections,readOnly:e.readOnly,disabled:e.disabled,selectedSectionIndexes:k,selectedSections:V,isEmpty:0===Object.keys(x).length,flushAllValidSections:function(){x={},w({})},flushValidSection:function(e){let t=D.editableSections[e];t&&delete x[t.type],w(Object.assign({},x))},setSelectedSections:j,setValue:P,setDate:h,adjustSection:function(e,t){let n=D.editableSections[e];n&&(x[n.type]?P((0,l.ui)(n,O,t)):(M(n.type),Object.keys(x).length>=Object.keys(g).length&&P(O)))},setSection:function(e,t){let n=D.editableSections[e];n&&(M(n.type),P((0,l.Lg)(n,O,t)))},getSectionValue:function(e){return O},setSectionValue:function(e,t){P(t)},createPlaceholder:function(){return(0,o.ix)({placeholderValue:e.placeholderValue,timeZone:m}).timeZone(m)},setValueFromString:function(e){let t=(0,l.nR)(e,v,m);return!!(0,r.JY)(t)&&(h(t),!0)}})}},24551:function(e,t,n){"use strict";n.d(t,{Iy:function(){return c},ui:function(){return v},EY:function(){return w},jg:function(){return k},ST:function(){return j},e2:function(){return p},qm:function(){return O},sn:function(){return C},eP:function(){return D},nR:function(){return M},Lg:function(){return b},T0:function(){return V},p_:function(){return N}});var a=n(67294),r=n(13283),i=n(13485),o=n(97580),s=n(21646),l=JSON.parse('{"year_placeholder":"Y","month_placeholder":"M","weekday_placeholder":"E","day_placeholder":"D","hour_placeholder":"h","minute_placeholder":"m","second_placeholder":"s","dayPeriod_placeholder":"aa"}'),u=JSON.parse('{"year_placeholder":"Г","month_placeholder":"М","weekday_placeholder":"ДН","day_placeholder":"Д","hour_placeholder":"ч","minute_placeholder":"м","second_placeholder":"с","dayPeriod_placeholder":"(д|п)п"}');let d=(0,o.e)({en:l,ru:u},`${s.A}date-field`),c={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,weekday:!0},f={start:"[",end:"]"},m={YY:"year",YYYY:"year",M:"month",MM:"month",MMM:{sectionType:"month",contentType:"letter"},MMMM:{sectionType:"month",contentType:"letter"},D:"day",DD:"day",Do:"day",d:"weekday",dd:{sectionType:"weekday",contentType:"letter"},ddd:{sectionType:"weekday",contentType:"letter"},dddd:{sectionType:"weekday",contentType:"letter"},A:{sectionType:"dayPeriod",contentType:"letter"},a:{sectionType:"dayPeriod",contentType:"letter"},H:"hour",HH:"hour",h:"hour",hh:"hour",m:"minute",mm:"minute",s:"second",ss:"second",z:{sectionType:"timeZoneName",contentType:"letter"},zzz:{sectionType:"timeZoneName",contentType:"letter"},Z:{sectionType:"timeZoneName",contentType:"letter"},ZZ:{sectionType:"timeZoneName",contentType:"letter"}};function h(e){return 4===(0,r.CQ)().format(e).length}let y={weekday:"day",day:"date",dayPeriod:"hour"};function p(e){if("literal"===e||"timeZoneName"===e||"unknown"===e)throw Error(`${e} section does not have duration unit.`);return e in y?y[e]:e}function v(e,t,n){var a;let i=null!==(a=e.value)&&void 0!==a?a:0;if("dayPeriod"===e.type)i=t.hour()+(t.hour()>=12?-12:12);else{i+=n;let t=e.minValue,a=e.maxValue;if("number"==typeof t&&"number"==typeof a){let e=a-t+1;i=(i-t+e)%e+t}}"year"!==e.type||h(e.format)||(i=(0,r.CQ)({input:`${i}`.padStart(2,"0"),format:e.format}).year());let o=p(e.type);return t.set(o,i)}function b(e,t,n){let a=e.type;switch(a){case"year":return t.set("year",h(e.format)?n:(0,r.CQ)({input:`${n}`.padStart(2,"0"),format:e.format}).year());case"day":case"weekday":case"month":return t.set(p(a),n);case"dayPeriod":{let e=t.hour(),a=e>=12;if(n>=12===a)return t;return t.set("hour",a?e-12:e+12)}case"hour":{let a=n;if(12===e.minValue||11===e.maxValue){let e=t.hour()>=12;e||12!==a||(a=0),e&&a<12&&(a+=12)}return t.set("hour",a)}case"minute":case"second":return t.set(a,n)}return t}function g(e){let t=[],n=(0,r._u)(e),a="",i=!1,o=!1;for(let e=0;e<n.length;e++){let r=n[e]||"";if(o){if(r===f.end){o=!1;continue}a+=r}else r.match(/[a-zA-Z]/)?(i&&(x(t,a),a=""),i=!1,a+=r):(i||(S(t,a),a=""),i=!0,r===f.start?o=!0:a+=r)}return a&&(i?x(t,a):S(t,a)),t}function S(e,t){if(!t)return;let n=function(e){let t=m[e];return t?"string"==typeof t?{type:t,contentType:"digit"}:{type:t.sectionType,contentType:t.contentType}:(console.error(`The token "${e}" is not supported by the Date field.
Please try using another token.`),{type:"literal",contentType:"letter"})}(t),a=function(e,t,n){if("digit"!==e)return!1;switch(t){case"year":if(h(n))return"0001"===(0,r.CQ)().set("year",1).format(n);return"01"===(0,r.CQ)().set("year",2001).format(n);case"month":return(0,r.CQ)().startOf("year").format(n).length>1;case"day":return(0,r.CQ)().startOf("month").format(n).length>1;case"weekday":return(0,r.CQ)().startOf("week").format(n).length>1;case"hour":return(0,r.CQ)().set("hour",1).format(n).length>1;case"minute":return(0,r.CQ)().set("minute",1).format(n).length>1;case"second":return(0,r.CQ)().set("second",1).format(n).length>1;default:throw Error("Invalid section type")}}(n.contentType,n.type,t);e.push(Object.assign(Object.assign({},n),{format:t,placeholder:function(e,t){switch(e.type){case"year":return d("year_placeholder").repeat((0,r.CQ)().format(t).length);case"month":return d("month_placeholder").repeat("letter"===e.contentType?4:2);case"day":return d("day_placeholder").repeat(2);case"weekday":return d("weekday_placeholder").repeat("letter"===e.contentType?4:2);case"hour":return d("hour_placeholder").repeat(2);case"minute":return d("minute_placeholder").repeat(2);case"second":return d("second_placeholder").repeat(2);case"dayPeriod":return d("dayPeriod_placeholder");default:return t}}(n,t),options:function(e,t){switch(e.type){case"month":{let n="letter"===e.contentType?t:"MMMM",a=(0,r.CQ)().startOf("year"),i=[];for(let e=0;e<12;e++)i.push(a.format(n).toLocaleUpperCase()),a=a.add(1,"months");return i}case"dayPeriod":{let e=(0,r.CQ)().hour(0),n=e.hour(12);return[e.format(t).toLocaleUpperCase(),n.format(t).toLocaleUpperCase()]}case"weekday":{let n="letter"===e.contentType?t:"dddd",a=(0,r.CQ)().day(0),i=[];for(let e=0;e<7;e++)i.push(a.format(n).toLocaleUpperCase()),a=a.add(1,"day");return i}}}(n,t),hasLeadingZeros:a}))}function x(e,t){t&&e.push({type:"literal",contentType:"letter",format:t,placeholder:t,hasLeadingZeros:!1})}function w(e){return e.replace(/[\u2066\u2067\u2068\u2069]/g,"")}function O(e,t,n){let a=1,r=[],i=-1;for(let o=0;o<e.length;o++){let s=e[o];if(!s)continue;let l=V(s,t,n,a,i);if(r.push(l),D(s)){for(let e=Math.max(0,i);e<=o;e++){let t=r[e];t&&(t.nextEditableSection=o,-1===t.previousEditableSection&&(t.previousEditableSection=o))}i=o}a+=l.textValue.length}return r}function D(e){var t;return null!==(t=c[e.type])&&void 0!==t&&t}function V(e,t,n,a,i){let o=D(e),s=e.placeholder;(o&&n[e.type]||"timeZoneName"===e.type)&&(s=t.format(e.format),"digit"===e.contentType&&s.length<e.placeholder.length&&(s=s.padStart(e.placeholder.length,"0")));let l=(s="⁨"+s+"⁩").length;return Object.assign(Object.assign(Object.assign({},e),{value:function(e,t){let n=e.type;switch(n){case"year":return h(e.format)?t.year():Number(t.format(e.format));case"month":case"hour":case"minute":case"second":return t[n]();case"day":return t.date();case"weekday":return t.day();case"dayPeriod":return t.hour()>=12?12:0}}(e,t),textValue:s,start:a,end:a+l,modified:!1,previousEditableSection:i,nextEditableSection:i}),function(e,t){let{type:n,format:a}=e;switch(n){case"year":{let e=h(a);return{minValue:e?1:0,maxValue:e?9999:99}}case"month":return{minValue:0,maxValue:11};case"weekday":return{minValue:0,maxValue:6};case"day":return{minValue:1,maxValue:t?t.daysInMonth():31};case"hour":if("15"!==(0,r.CQ)().set("hour",15).format(a)){let e=t.hour()>=12;return{minValue:e?12:0,maxValue:e?23:11}}return{minValue:0,maxValue:23};case"minute":case"second":return{minValue:0,maxValue:59}}return{}}(e,t))}function j(e,t){let n="all"===t||-1===t?0:t,a=e[n];return a&&!c[a.type]?a.nextEditableSection:a?n:-1}function k(e){return"⁦"+e.map(e=>e.textValue).join("")+"⁩"}function P(e){let t=(0,r.CQ)(e);return(0,r.JY)(t)||(t=(0,r.CQ)(Object.assign(Object.assign({},e),{format:void 0}))),t}function M(e,t,n){let a=P({input:e,format:t,timeZone:n});if((0,r.JY)(a)&&n&&!(/z$/i.test(e)||/[+-]\d\d:\d\d$/.test(e))){let n=P({input:e,format:t});a=(0,i.s_)(a,n)}return a}function C(e,t){return Object.keys(e).every(e=>t[e])}function N(e){let[t,n]=a.useState(()=>g(e)),[r,i]=a.useState(e);return e!==r&&(i(e),n(g(e))),t}},37499:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var a=n(85893),r=n(67294);function i({name:e,value:t,onReset:n,form:i,disabled:o,toStringValue:s}){let l=function({initialValue:e,onReset:t}){let[n,a]=r.useState(null),i=r.useRef(e);return r.useEffect(()=>{if(!n||!t)return;let e=()=>{t(i.current)};return n.addEventListener("reset",e),()=>{n.removeEventListener("reset",e)}},[n,t]),r.useCallback(e=>{var t;a(null!==(t=null==e?void 0:e.form)&&void 0!==t?t:null)},[])}({initialValue:t,onReset:n});if(!e)return null;let u=s?s(t):`${null!=t?t:""}`;return(0,a.jsx)("input",{ref:l,type:"hidden",name:e,value:u,disabled:o,form:i})}},13171:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var a=n(67294);function r(e,t){let[n,r]=a.useState(e.lastCorrectDate),[i,o]=a.useState(e.lastCorrectDate);return n!==e.lastCorrectDate&&(r(e.lastCorrectDate),o(e.lastCorrectDate)),{inputProps:{size:t.size,autoFocus:t.autoFocus,value:e.text,onUpdate:e.setText,disabled:e.disabled,hasClear:t.hasClear,validationState:e.validationState,errorMessage:t.errorMessage,errorPlacement:t.errorPlacement,label:t.label,id:t.id,startContent:t.startContent,endContent:t.endContent,pin:t.pin,view:t.view,placeholder:t.placeholder,onKeyDown:t.onKeyDown,onKeyUp:t.onKeyUp,onBlur:t.onBlur,onFocus:t.onFocus,controlProps:{"aria-label":t["aria-label"]||void 0,"aria-labelledby":t["aria-labelledby"]||void 0,"aria-describedby":t["aria-describedby"]||void 0,"aria-details":t["aria-details"]||void 0,"aria-disabled":e.disabled||void 0}},calendarProps:{size:"s"===t.size?"m":t.size,readOnly:!0,value:e.parsedDate,focusedValue:i,onFocusUpdate:o},timeInputProps:{size:t.size,readOnly:!0,value:e.lastCorrectDate,format:"LTS"}}}},45397:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var a=n(67294),r=n(13283),i=n(59505);function o(e){var t;let[n,o]=(0,i.z)(e.value,null!==(t=e.defaultValue)&&void 0!==t?t:null,e.onUpdate),[s,l]=a.useState(null!=n?n:"");n&&n!==s&&l(n);let u=a.useMemo(()=>{var t;return n&&null!==(t=(0,r.J)(n,{timeZone:e.timeZone,roundUp:e.roundUp}))&&void 0!==t?t:null},[n,e.timeZone,e.roundUp]),[d,c]=a.useState(u);u&&u!==d&&c(u);let f=e.validationState||s&&!u?"invalid":void 0;return{value:n,setValue(t){e.disabled||e.readOnly||o(t)},text:s,setText:t=>{if(!e.disabled&&!e.readOnly){if(l(t),(0,r.KN)(t)){let e=(0,r.J)(t);e&&(0,r.JY)(e)?o(t):o(null)}else o(null)}},parsedDate:u,lastCorrectDate:d,validationState:f,disabled:e.disabled,readOnly:e.readOnly}}},13485:function(e,t,n){"use strict";n.d(t,{ix:function(){return r},s_:function(){return o},wp:function(){return i}});var a=n(13283);function r({placeholderValue:e,timeZone:t}){return null!=e?e:(0,a.CQ)({timeZone:t}).set("hour",0).set("minute",0).set("second",0)}function i(e,t,n){return!!e&&!!(t&&e.isBefore(t)||n&&n.isBefore(e))}function o(e,t){return e.set("hours",t.hour()).set("minutes",t.minute()).set("seconds",t.second())}},31739:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var a=n(67294);function r(e){let t=e?e.timeZone():"default",[n,r]=a.useState(t);return e&&t!==n&&r(t),e?t:n}},21646:function(e,t,n){"use strict";n.d(t,{A:function(){return r},G:function(){return i}});var a=n(81504);let r="g-date-",i=(0,a.withNaming)({n:r,e:"__",m:"_"})},49179:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var a=n(67294),r=n(51693),i=n(43671),o=n(32782);n(42554);let s=(0,o.Ge)("arrow-toggle");function l({size:e=16,direction:t="bottom",className:n,qa:o}){return a.createElement("span",{style:{width:e,height:e},className:s({direction:t},n),"data-qa":o},a.createElement(i.J,{data:r.Z,size:e}))}},55712:function(){},43341:function(){},42554:function(){}}]);