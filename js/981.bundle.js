/*! For license information please see 981.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgql_editor=self.webpackChunkgql_editor||[]).push([[981],{976:(e,t,n)=>{var r,o;n.d(t,{pg:()=>h});var i=n(540),a=n(961),s=n(767);new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(m){}const l=i.createContext({isTransitioning:!1});const u=i.createContext(new Map);const c=(r||(r=n.t(i,2))).startTransition,d=(o||(o=n.t(a,2))).flushSync;(r||(r=n.t(i,2))).useId;function f(e){d?d(e):e()}class p{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function h(e){let{fallbackElement:t,router:n,future:r}=e,[o,a]=i.useState(n.state),[d,h]=i.useState(),[v,g]=i.useState({isTransitioning:!1}),[m,b]=i.useState(),[S,w]=i.useState(),[E,_]=i.useState(),C=i.useRef(new Map),{v7_startTransition:x}=r||{},k=i.useCallback((e=>{x?function(e){c?c(e):e()}(e):e()}),[x]),O=i.useCallback(((e,t)=>{let{deletedFetchers:r,unstable_flushSync:o,unstable_viewTransitionOpts:i}=t;r.forEach((e=>C.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&C.current.set(t,e.data)}));let s=null==n.window||null==n.window.document||"function"!=typeof n.window.document.startViewTransition;if(i&&!s){if(o){f((()=>{S&&(m&&m.resolve(),S.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})}));let t=n.window.document.startViewTransition((()=>{f((()=>a(e)))}));return t.finished.finally((()=>{f((()=>{b(void 0),w(void 0),h(void 0),g({isTransitioning:!1})}))})),void f((()=>w(t)))}S?(m&&m.resolve(),S.skipTransition(),_({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(h(e),g({isTransitioning:!0,flushSync:!1,currentLocation:i.currentLocation,nextLocation:i.nextLocation}))}else o?f((()=>a(e))):k((()=>a(e)))}),[n.window,S,m,C,k]);i.useLayoutEffect((()=>n.subscribe(O)),[n,O]),i.useEffect((()=>{v.isTransitioning&&!v.flushSync&&b(new p)}),[v]),i.useEffect((()=>{if(m&&d&&n.window){let e=d,t=m.promise,r=n.window.document.startViewTransition((async()=>{k((()=>a(e))),await t}));r.finished.finally((()=>{b(void 0),w(void 0),h(void 0),g({isTransitioning:!1})})),w(r)}}),[k,d,m,n.window]),i.useEffect((()=>{m&&d&&o.location.key===d.location.key&&m.resolve()}),[m,S,o.location,d]),i.useEffect((()=>{!v.isTransitioning&&E&&(h(E.state),g({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),_(void 0))}),[v.isTransitioning,E]),i.useEffect((()=>{}),[]);let j=i.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),P=n.basename||"/",R=i.useMemo((()=>({router:n,navigator:j,static:!1,basename:P})),[n,j,P]);return i.createElement(i.Fragment,null,i.createElement(s.sp.Provider,{value:R},i.createElement(s.Rq.Provider,{value:o},i.createElement(u.Provider,{value:C.current},i.createElement(l.Provider,{value:v},i.createElement(s.Ix,{basename:P,location:o.location,navigationType:o.historyAction,navigator:j,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?i.createElement(y,{routes:n.routes,future:n.future,state:o}):t))))),null)}function y(e){let{routes:t,future:n,state:r}=e;return(0,s.ph)(t,void 0,r,n)}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var v,g;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(v||(v={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(g||(g={}))},767:(e,t,n)=>{var r;n.d(t,{Ix:()=>P,Rq:()=>l,Zp:()=>v,bg:()=>T,ph:()=>g,sp:()=>s,zy:()=>h});var o=n(540),i=n(588);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=o.createContext(null);const l=o.createContext(null);const u=o.createContext(null);const c=o.createContext(null);const d=o.createContext({outlet:null,matches:[],isDataRoute:!1});const f=o.createContext(null);function p(){return null!=o.useContext(c)}function h(){return p()||(0,i.Oi)(!1),o.useContext(c).location}function y(e){o.useContext(u).static||o.useLayoutEffect(e)}function v(){let{isDataRoute:e}=o.useContext(d);return e?function(){let{router:e}=x(_.UseNavigateStable),t=O(C.UseNavigateStable),n=o.useRef(!1);return y((()=>{n.current=!0})),o.useCallback((function(r,o){void 0===o&&(o={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,a({fromRouteId:t},o)))}),[e,t])}():function(){p()||(0,i.Oi)(!1);let e=o.useContext(s),{basename:t,future:n,navigator:r}=o.useContext(u),{matches:a}=o.useContext(d),{pathname:l}=h(),c=JSON.stringify((0,i.yD)(a,n.v7_relativeSplatPath)),f=o.useRef(!1);return y((()=>{f.current=!0})),o.useCallback((function(n,o){if(void 0===o&&(o={}),!f.current)return;if("number"==typeof n)return void r.go(n);let a=(0,i.Gh)(n,JSON.parse(c),l,"path"===o.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:(0,i.HS)([t,a.pathname])),(o.replace?r.replace:r.push)(a,o.state,o)}),[t,r,c,l,e])}()}function g(e,t,n,r){p()||(0,i.Oi)(!1);let{navigator:s}=o.useContext(u),{matches:l}=o.useContext(d),f=l[l.length-1],y=f?f.params:{},v=(f&&f.pathname,f?f.pathnameBase:"/");f&&f.route;let g,m=h();if(t){var b;let e="string"==typeof t?(0,i.Rr)(t):t;"/"===v||(null==(b=e.pathname)?void 0:b.startsWith(v))||(0,i.Oi)(!1),g=e}else g=m;let S=g.pathname||"/",w=S;if("/"!==v){let e=v.replace(/^\//,"").split("/");w="/"+S.replace(/^\//,"").split("/").slice(e.length).join("/")}let _=(0,i.ue)(e,{pathname:w});let C=E(_&&_.map((e=>Object.assign({},e,{params:Object.assign({},y,e.params),pathname:(0,i.HS)([v,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?v:(0,i.HS)([v,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,n,r);return t&&C?o.createElement(c.Provider,{value:{location:a({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:i.rc.Pop}},C):C}function m(){let e=function(){var e;let t=o.useContext(f),n=k(C.UseRouteError),r=O(C.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=(0,i.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,null)}const b=o.createElement(m,null);class S extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(d.Provider,{value:this.props.routeContext},o.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w(e){let{routeContext:t,match:n,children:r}=e,i=o.useContext(s);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(d.Provider,{value:t},r)}function E(e,t,n,r){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var s;if(null==(s=n)||!s.errors)return null;e=n.matches}let l=e,u=null==(a=n)?void 0:a.errors;if(null!=u){let e=l.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||(0,i.Oi)(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let o=0;o<l.length;o++){let e=l[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=o),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,r,i)=>{let a,s=!1,f=null,p=null;var h;n&&(a=u&&r.route.id?u[r.route.id]:void 0,f=r.route.errorElement||b,c&&(d<0&&0===i?(h="route-fallback",!1||j[h]||(j[h]=!0),s=!0,p=null):d===i&&(s=!0,p=r.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,i+1)),v=()=>{let t;return t=a?f:s?p:r.route.Component?o.createElement(r.route.Component,null):r.route.element?r.route.element:e,o.createElement(w,{match:r,routeContext:{outlet:e,matches:y,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?o.createElement(S,{location:n.location,revalidation:n.revalidation,component:f,error:a,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):v()}),null)}var _=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_||{}),C=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(C||{});function x(e){let t=o.useContext(s);return t||(0,i.Oi)(!1),t}function k(e){let t=o.useContext(l);return t||(0,i.Oi)(!1),t}function O(e){let t=function(e){let t=o.useContext(d);return t||(0,i.Oi)(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||(0,i.Oi)(!1),n.route.id}const j={};(r||(r=n.t(o,2))).startTransition;function P(e){let{basename:t="/",children:n=null,location:r,navigationType:s=i.rc.Pop,navigator:l,static:d=!1,future:f}=e;p()&&(0,i.Oi)(!1);let h=t.replace(/^\/*/,"/"),y=o.useMemo((()=>({basename:h,navigator:l,static:d,future:a({v7_relativeSplatPath:!1},f)})),[h,f,l,d]);"string"==typeof r&&(r=(0,i.Rr)(r));let{pathname:v="/",search:g="",hash:m="",state:b=null,key:S="default"}=r,w=o.useMemo((()=>{let e=(0,i.pb)(v,h);return null==e?null:{location:{pathname:e,search:g,hash:m,state:b,key:S},navigationType:s}}),[h,v,g,m,b,S,s]);return null==w?null:o.createElement(u.Provider,{value:y},o.createElement(c.Provider,{children:n,value:w}))}new Promise((()=>{}));o.Component;function R(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:o.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:o.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:o.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function T(e,t){return(0,i.aE)({basename:null==t?void 0:t.basename,future:a({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,i.sC)({initialEntries:null==t?void 0:t.initialEntries,initialIndex:null==t?void 0:t.initialIndex}),hydrationData:null==t?void 0:t.hydrationData,routes:e,mapRouteProperties:R,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnMiss:null==t?void 0:t.unstable_patchRoutesOnMiss}).initialize()}},69:function(e,t,n){var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(540)),c="undefined"!=typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),d="undefined"!=typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),f="npm__react-simple-code-editor__textarea",p="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(f,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(f," {\n    color: transparent !important;\n  }\n\n  .").concat(f,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,r=e.selectionStart,o=e.selectionEnd;t._recordChange({value:n,selectionStart:r,selectionEnd:o})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var r,i,a;void 0===n&&(n=!1);var s=t._history,l=s.stack,u=s.offset;if(l.length&&u>-1){t._history.stack=l.slice(0,u+1);var c=t._history.stack.length;if(c>100){var d=c-100;t._history.stack=l.slice(d,c),t._history.offset=Math.max(t._history.offset-d,0)}}var f=Date.now();if(n){var p=t._history.stack[t._history.offset];if(p&&f-p.timestamp<3e3){var h=/[^a-z0-9]([a-z0-9]+)$/i,y=null===(r=t._getLines(p.value,p.selectionStart).pop())||void 0===r?void 0:r.match(h),v=null===(i=t._getLines(e.value,e.selectionStart).pop())||void 0===i?void 0:i.match(h);if((null==y?void 0:y[1])&&(null===(a=null==v?void 0:v[1])||void 0===a?void 0:a.startsWith(y[1])))return void(t._history.stack[t._history.offset]=o(o({},e),{timestamp:f}))}}t._history.stack.push(o(o({},e),{timestamp:f})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,r=t._history.stack[t._history.offset];r&&n&&(t._history.stack[t._history.offset]=o(o({},r),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r-1];o&&(t._updateInput(o),t._history.offset=Math.max(r-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r+1];o&&(t._updateInput(o),t._history.offset=Math.min(r+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,r=n.tabSize,o=n.insertSpaces,i=n.ignoreTabKey,a=n.onKeyDown;if(!a||(a(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var s=e.currentTarget,l=s.value,u=s.selectionStart,f=s.selectionEnd,p=(o?" ":"\t").repeat(r);if(9===e.keyCode&&!i&&t.state.capture)if(e.preventDefault(),e.shiftKey){var h=(m=t._getLines(l,u)).length-1,y=t._getLines(l,f).length-1,v=l.split("\n").map((function(e,t){return t>=h&&t<=y&&e.startsWith(p)?e.substring(p.length):e})).join("\n");if(l!==v){var g=m[h];t._applyEdits({value:v,selectionStart:(null==g?void 0:g.startsWith(p))?u-p.length:u,selectionEnd:f-(l.length-v.length)})}}else if(u!==f){var m,b=(m=t._getLines(l,u)).length-1,S=t._getLines(l,f).length-1;g=m[b];t._applyEdits({value:l.split("\n").map((function(e,t){return t>=b&&t<=S?p+e:e})).join("\n"),selectionStart:g&&/\S/.test(g)?u+p.length:u,selectionEnd:f+p.length*(S-b+1)})}else{var w=u+p.length;t._applyEdits({value:l.substring(0,u)+p+l.substring(f),selectionStart:w,selectionEnd:w})}else if(8===e.keyCode){var E=u!==f;if(l.substring(0,u).endsWith(p)&&!E){e.preventDefault();w=u-p.length;t._applyEdits({value:l.substring(0,u-p.length)+l.substring(f),selectionStart:w,selectionEnd:w})}}else if(13===e.keyCode){if(u===f){var _=t._getLines(l,u).pop(),C=null==_?void 0:_.match(/^\s+/);if(null==C?void 0:C[0]){e.preventDefault();var x="\n"+C[0];w=u+x.length;t._applyEdits({value:l.substring(0,u)+x+l.substring(f),selectionStart:w,selectionEnd:w})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var k=void 0;57===e.keyCode&&e.shiftKey?k=["(",")"]:219===e.keyCode?k=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?k=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(k=["`","`"]),u!==f&&k&&(e.preventDefault(),t._applyEdits({value:l.substring(0,u)+k[0]+l.substring(u,f)+k[1]+l.substring(f),selectionStart:u,selectionEnd:f+2}))}else!(d?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(d?e.metaKey&&90===e.keyCode&&e.shiftKey:c?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||d&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,r=n.value,o=n.selectionStart,i=n.selectionEnd;t._recordChange({value:r,selectionStart:o,selectionEnd:i},!0),t.props.onValueChange(r)},t._history={stack:[],offset:-1},t._input=null,t}return r(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.style,i=t.padding,a=t.highlight,s=t.textareaId,c=t.textareaClassName,d=t.autoFocus,h=t.disabled,v=t.form,g=t.maxLength,m=t.minLength,b=t.name,S=t.placeholder,w=t.readOnly,E=t.required,_=t.onClick,C=t.onFocus,x=t.onBlur,k=t.onKeyUp,O=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),j=l(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),P={paddingTop:"object"==typeof i?i.top:i,paddingRight:"object"==typeof i?i.right:i,paddingBottom:"object"==typeof i?i.bottom:i,paddingLeft:"object"==typeof i?i.left:i},R=a(n);return u.createElement("div",o({},j,{style:o(o({},y.container),r)}),u.createElement("pre",o({className:O,"aria-hidden":"true",style:o(o(o({},y.editor),y.highlight),P)},"string"==typeof R?{dangerouslySetInnerHTML:{__html:R+"<br />"}}:{children:R})),u.createElement("textarea",{ref:function(t){return e._input=t},style:o(o(o({},y.editor),y.textarea),P),className:f+(c?" ".concat(c):""),id:s,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:_,onKeyUp:k,onFocus:C,onBlur:x,disabled:h,form:v,maxLength:g,minLength:m,name:b,placeholder:S,readOnly:w,required:E,autoFocus:d,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),u.createElement("style",{dangerouslySetInnerHTML:{__html:p}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(u.Component);t.default=h;var y={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},468:(e,t,n)=>{n.d(t,{Kq:()=>_,d4:()=>v,wA:()=>j});var r=n(540),o=n(418),i=r,a=Symbol.for("react-redux-context"),s="undefined"!=typeof globalThis?globalThis:{};function l(){if(!i.createContext)return{};const e=s[a]??(s[a]=new Map);let t=e.get(i.createContext);return t||(t=i.createContext(null),e.set(i.createContext,t)),t}var u=l(),c=()=>{throw new Error("uSES not initialized!")};function d(e=u){return function(){return i.useContext(e)}}var f=d(),p=c,h=(e,t)=>e===t;function y(e=u){const t=e===u?f:d(e),n=(e,n={})=>{const{equalityFn:r=h,devModeChecks:o={}}="function"==typeof n?{equalityFn:n}:n;const{store:a,subscription:s,getServerState:l,stabilityCheck:u,identityFunctionCheck:c}=t(),d=(i.useRef(!0),i.useCallback({[e.name]:t=>e(t)}[e.name],[e,u,o.stabilityCheck])),f=p(s.addNestedSub,a.getState,l||a.getState,d,r);return i.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var v=y();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function g(e){e()}var m={notify(){},get:()=>[]};function b(e,t){let n,r=m,o=0,i=!1;function a(){u.onStateChange&&u.onStateChange()}function s(){o++,n||(n=t?t.addNestedSub(a):e.subscribe(a),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){g((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){r&&null!==e&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}function l(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=m)}const u={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),l())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:a,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,s())},tryUnsubscribe:function(){i&&(i=!1,l())},getListeners:()=>r};return u}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),w="undefined"!=typeof navigator&&"ReactNative"===navigator.product,E=S||w?i.useLayoutEffect:i.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var _=function({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",identityFunctionCheck:a="once"}){const s=i.useMemo((()=>{const t=b(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:o,identityFunctionCheck:a}}),[e,r,o,a]),l=i.useMemo((()=>e.getState()),[e]);E((()=>{const{subscription:t}=s;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),l!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[s,l]);const c=t||u;return i.createElement(c.Provider,{value:s},n)};function C(e=u){const t=e===u?f:d(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var x=C();function k(e=u){const t=e===u?x:C(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var O,j=k();O=o.useSyncExternalStoreWithSelector,p=O,(e=>{e})(r.useSyncExternalStore)},346:(e,t,n)=>{function r(e){return({dispatch:t,getState:n})=>r=>o=>"function"==typeof o?o(t,n,e):r(o)}n.d(t,{P:()=>o,Y:()=>i});var o=r(),i=r},644:(e,t,n)=>{function r(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}n.d(t,{HY:()=>u,Qd:()=>s,Tw:()=>d,Zz:()=>c,ve:()=>f,y$:()=>l});var o=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),i=()=>Math.random().toString(36).substring(7).split("").join("."),a={INIT:`@@redux/INIT${i()}`,REPLACE:`@@redux/REPLACE${i()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${i()}`};function s(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function l(e,t,n){if("function"!=typeof e)throw new Error(r(2));if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(r(1));return n(l)(e,t)}let i=e,u=t,c=new Map,d=c,f=0,p=!1;function h(){d===c&&(d=new Map,c.forEach(((e,t)=>{d.set(t,e)})))}function y(){if(p)throw new Error(r(3));return u}function v(e){if("function"!=typeof e)throw new Error(r(4));if(p)throw new Error(r(5));let t=!0;h();const n=f++;return d.set(n,e),function(){if(t){if(p)throw new Error(r(6));t=!1,h(),d.delete(n),c=null}}}function g(e){if(!s(e))throw new Error(r(7));if(void 0===e.type)throw new Error(r(8));if("string"!=typeof e.type)throw new Error(r(17));if(p)throw new Error(r(9));try{p=!0,u=i(u,e)}finally{p=!1}return(c=d).forEach((e=>{e()})),e}g({type:a.INIT});return{dispatch:g,subscribe:v,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw new Error(r(10));i=e,g({type:a.REPLACE})},[o]:function(){const e=v;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(r(11));function n(){const e=t;e.next&&e.next(y())}n();return{unsubscribe:e(n)}},[o](){return this}}}}}function u(e){const t=Object.keys(e),n={};for(let r=0;r<t.length;r++){const o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}const o=Object.keys(n);let i;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if(void 0===n(void 0,{type:a.INIT}))throw new Error(r(12));if(void 0===n(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(r(13))}))}(n)}catch(s){i=s}return function(e={},t){if(i)throw i;let a=!1;const s={};for(let i=0;i<o.length;i++){const l=o[i],u=n[l],c=e[l],d=u(c,t);if(void 0===d){t&&t.type;throw new Error(r(14))}s[l]=d,a=a||d!==c}return a=a||o.length!==Object.keys(e).length,a?s:e}}function c(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...n)=>e(t(...n))))}function d(...e){return t=>(n,o)=>{const i=t(n,o);let a=()=>{throw new Error(r(15))};const s={getState:i.getState,dispatch:(e,...t)=>a(e,...t)},l=e.map((e=>e(s)));return a=c(...l)(i.dispatch),{...i,dispatch:a}}}function f(e){return s(e)&&"type"in e&&"string"==typeof e.type}}}]);