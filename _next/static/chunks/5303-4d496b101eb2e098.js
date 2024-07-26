"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5303],{15303:function(e,t,n){n.d(t,{v:function(){return b}});var o=n(88388);/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var o,r;o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},u=function(e){return(null==e?void 0:e.key)==="Tab"||(null==e?void 0:e.keyCode)===9},c=function(e){return u(e)&&!e.shiftKey},l=function(e){return u(e)&&e.shiftKey},s=function(e){return setTimeout(e,0)},d=function(e,t){var n=-1;return e.every(function(e,o){return!t(e)||(n=o,!1)}),n},f=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},v=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},p=[],b=function(e,t){var n,r=(null==t?void 0:t.document)||document,b=(null==t?void 0:t.trapStack)||p,h=a({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:c,isKeyBackward:l},t),m={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},y=function(e,t,n){return e&&void 0!==e[t]?e[t]:h[n||t]},g=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return m.containerGroups.findIndex(function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||r.find(function(t){return t===e})})},w=function(e){var t=h[e];if("function"==typeof t){for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var i=t;if("string"==typeof t&&!(i=r.querySelector(t)))throw Error("`".concat(e,"` as selector refers to no known node"));return i},N=function(){var e=w("initialFocus");if(!1===e)return!1;if(void 0===e||!(0,o.EB)(e,h.tabbableOptions)){if(g(r.activeElement)>=0)e=r.activeElement;else{var t=m.tabbableGroups[0];e=t&&t.firstTabbableNode||w("fallbackFocus")}}if(!e)throw Error("Your focus-trap needs to have at least one focusable element");return e},E=function(){if(m.containerGroups=m.containers.map(function(e){var t=(0,o.ht)(e,h.tabbableOptions),n=(0,o.KW)(e,h.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,i=n.find(function(e){return(0,o.Wq)(e)}),u=n.slice().reverse().find(function(e){return(0,o.Wq)(e)}),c=!!t.find(function(e){return(0,o.pN)(e)>0});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:i,lastDomTabbableNode:u,nextTabbableNode:function(e){var r=!(arguments.length>1)||void 0===arguments[1]||arguments[1],a=t.indexOf(e);return a<0?r?n.slice(n.indexOf(e)+1).find(function(e){return(0,o.Wq)(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return(0,o.Wq)(e)}):t[a+(r?1:-1)]}}}),m.tabbableGroups=m.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),m.tabbableGroups.length<=0&&!w("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(m.containerGroups.find(function(e){return e.posTabIndexesFound})&&m.containerGroups.length>1)throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},O=function e(t){var n=t.activeElement;return n?n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n:void 0},S=function e(t){if(!1!==t&&t!==O(document)){if(!t||!t.focus){e(N());return}t.focus({preventScroll:!!h.preventScroll}),m.mostRecentlyFocusedNode=t,t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select&&t.select()}},T=function(e){var t=w("setReturnFocus",e);return t||!1!==t&&e},F=function(e){var t=e.target,n=e.event,r=e.isBackward,a=void 0!==r&&r;t=t||v(n),E();var i=null;if(m.tabbableGroups.length>0){var c=g(t,n),l=c>=0?m.containerGroups[c]:void 0;if(c<0)i=a?m.tabbableGroups[m.tabbableGroups.length-1].lastTabbableNode:m.tabbableGroups[0].firstTabbableNode;else if(a){var s=d(m.tabbableGroups,function(e){var n=e.firstTabbableNode;return t===n});if(s<0&&(l.container===t||(0,o.EB)(t,h.tabbableOptions)&&!(0,o.Wq)(t,h.tabbableOptions)&&!l.nextTabbableNode(t,!1))&&(s=c),s>=0){var f=0===s?m.tabbableGroups.length-1:s-1,p=m.tabbableGroups[f];i=(0,o.pN)(t)>=0?p.lastTabbableNode:p.lastDomTabbableNode}else u(n)||(i=l.nextTabbableNode(t,!1))}else{var b=d(m.tabbableGroups,function(e){var n=e.lastTabbableNode;return t===n});if(b<0&&(l.container===t||(0,o.EB)(t,h.tabbableOptions)&&!(0,o.Wq)(t,h.tabbableOptions)&&!l.nextTabbableNode(t))&&(b=c),b>=0){var y=b===m.tabbableGroups.length-1?0:b+1,N=m.tabbableGroups[y];i=(0,o.pN)(t)>=0?N.firstTabbableNode:N.firstDomTabbableNode}else u(n)||(i=l.nextTabbableNode(t))}}else i=w("fallbackFocus");return i},k=function(e){if(!(g(v(e),e)>=0)){if(f(h.clickOutsideDeactivates,e)){n.deactivate({returnFocus:h.returnFocusOnDeactivate});return}f(h.allowOutsideClick,e)||e.preventDefault()}},R=function(e){var t=v(e),n=g(t,e)>=0;if(n||t instanceof Document)n&&(m.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,a=!0;if(m.mostRecentlyFocusedNode){if((0,o.pN)(m.mostRecentlyFocusedNode)>0){var i=g(m.mostRecentlyFocusedNode),u=m.containerGroups[i].tabbableNodes;if(u.length>0){var c=u.findIndex(function(e){return e===m.mostRecentlyFocusedNode});c>=0&&(h.isKeyForward(m.recentNavEvent)?c+1<u.length&&(r=u[c+1],a=!1):c-1>=0&&(r=u[c-1],a=!1))}}else m.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return(0,o.pN)(e)>0})})||(a=!1)}else a=!1;a&&(r=F({target:m.mostRecentlyFocusedNode,isBackward:h.isKeyBackward(m.recentNavEvent)})),r?S(r):S(m.mostRecentlyFocusedNode||N())}m.recentNavEvent=void 0},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.recentNavEvent=e;var n=F({event:e,isBackward:t});n&&(u(e)&&e.preventDefault(),S(n))},P=function(e){if(((null==e?void 0:e.key)==="Escape"||(null==e?void 0:e.key)==="Esc"||(null==e?void 0:e.keyCode)===27)&&!1!==f(h.escapeDeactivates,e)){e.preventDefault(),n.deactivate();return}(h.isKeyForward(e)||h.isKeyBackward(e))&&D(e,h.isKeyBackward(e))},I=function(e){g(v(e),e)>=0||f(h.clickOutsideDeactivates,e)||f(h.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(m.active)return i.activateTrap(b,n),m.delayInitialFocusTimer=h.delayInitialFocus?s(function(){S(N())}):S(N()),r.addEventListener("focusin",R,!0),r.addEventListener("mousedown",k,{capture:!0,passive:!1}),r.addEventListener("touchstart",k,{capture:!0,passive:!1}),r.addEventListener("click",I,{capture:!0,passive:!1}),r.addEventListener("keydown",P,{capture:!0,passive:!1}),n},C=function(){if(m.active)return r.removeEventListener("focusin",R,!0),r.removeEventListener("mousedown",k,!0),r.removeEventListener("touchstart",k,!0),r.removeEventListener("click",I,!0),r.removeEventListener("keydown",P,!0),n},A="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===m.mostRecentlyFocusedNode})})&&S(N())}):void 0,G=function(){A&&(A.disconnect(),m.active&&!m.paused&&m.containers.map(function(e){A.observe(e,{subtree:!0,childList:!0})}))};return(n={get active(){return m.active},get paused(){return m.paused},activate:function(e){if(m.active)return this;var t=y(e,"onActivate"),n=y(e,"onPostActivate"),o=y(e,"checkCanFocusTrap");o||E(),m.active=!0,m.paused=!1,m.nodeFocusedBeforeActivation=r.activeElement,null==t||t();var a=function(){o&&E(),x(),G(),null==n||n()};return o?o(m.containers.concat()).then(a,a):a(),this},deactivate:function(e){if(!m.active)return this;var t=a({onDeactivate:h.onDeactivate,onPostDeactivate:h.onPostDeactivate,checkCanReturnFocus:h.checkCanReturnFocus},e);clearTimeout(m.delayInitialFocusTimer),m.delayInitialFocusTimer=void 0,C(),m.active=!1,m.paused=!1,G(),i.deactivateTrap(b,n);var o=y(t,"onDeactivate"),r=y(t,"onPostDeactivate"),u=y(t,"checkCanReturnFocus"),c=y(t,"returnFocus","returnFocusOnDeactivate");null==o||o();var l=function(){s(function(){c&&S(T(m.nodeFocusedBeforeActivation)),null==r||r()})};return c&&u?u(T(m.nodeFocusedBeforeActivation)).then(l,l):l(),this},pause:function(e){if(m.paused||!m.active)return this;var t=y(e,"onPause"),n=y(e,"onPostPause");return m.paused=!0,null==t||t(),C(),G(),null==n||n(),this},unpause:function(e){if(!m.paused||!m.active)return this;var t=y(e,"onUnpause"),n=y(e,"onPostUnpause");return m.paused=!1,null==t||t(),E(),x(),G(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return m.containers=t.map(function(e){return"string"==typeof e?r.querySelector(e):e}),m.active&&E(),G(),this}}).updateContainerElements(e),n}},88388:function(e,t,n){n.d(t,{EB:function(){return I},KW:function(){return R},Wq:function(){return D},ht:function(){return k},pN:function(){return v}});/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],r=o.join(","),a="undefined"==typeof Element,i=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){var t;return null==e?void 0:null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},c=function e(t,n){void 0===n&&(n=!0);var o,r=null==t?void 0:null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},l=function(e){var t,n=null==e?void 0:null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n},s=function(e,t,n){if(c(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(r));return t&&i.call(e,r)&&o.unshift(e),o=o.filter(n)},d=function e(t,n,o){for(var a=[],u=Array.from(t);u.length;){var l=u.shift();if(!c(l,!1)){if("SLOT"===l.tagName){var s=l.assignedElements(),d=e(s.length?s:l.children,!0,o);o.flatten?a.push.apply(a,d):a.push({scopeParent:l,candidates:d})}else{i.call(l,r)&&o.filter(l)&&(n||!t.includes(l))&&a.push(l);var f=l.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(l),v=!c(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(f&&v){var p=e(!0===f?l.children:f.children,!0,o);o.flatten?a.push.apply(a,p):a.push({scopeParent:l,candidates:p})}else u.unshift.apply(u,l.children)}}}return a},f=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},v=function(e){if(!e)throw Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||l(e))&&!f(e)?0:e.tabIndex},p=function(e,t){var n=v(e);return n<0&&t&&!f(e)?0:n},b=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},m=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},y=function(e){if(!e.name)return!0;var t,n=e.form||u(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=m(t,e.form);return!r||r===e},g=function(e){var t,n,o,r,a,i,c,l=e&&u(e),s=null===(t=l)||void 0===t?void 0:t.host,d=!1;if(l&&l!==e)for(d=!!(null!==(n=s)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(s)||null!=e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(e));!d&&s;)d=!!(null!==(i=s=null===(a=l=u(s))||void 0===a?void 0:a.host)&&void 0!==i&&null!==(c=i.ownerDocument)&&void 0!==c&&c.contains(s));return d},w=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},N=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return w(e)}else{if("function"==typeof o){for(var a=e;e;){var c=e.parentElement,l=u(e);if(c&&!c.shadowRoot&&!0===o(c))return w(e);e=e.assignedSlot?e.assignedSlot:c||l===e.ownerDocument?c:l.host}e=a}if(g(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},E=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!i.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1},O=function(e,t){return!(t.disabled||c(t)||h(t)&&"hidden"===t.type||N(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||E(t))},S=function(e,t){var n;return!(h(n=t)&&"radio"===n.type&&!y(n)||0>v(t))&&!!O(e,t)},T=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!isNaN(t)||t>=0},F=function e(t){var n=[],o=[];return t.forEach(function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,u=p(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:u,item:t,isScope:a,content:c})}),o.sort(b).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},k=function(e,t){return F((t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:S.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:T}):s(e,t.includeContainer,S.bind(null,t)))},R=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:O.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):s(e,t.includeContainer,O.bind(null,t))},D=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,r)&&S(t,e)},P=o.concat("iframe").join(","),I=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,P)&&O(t,e)}}}]);