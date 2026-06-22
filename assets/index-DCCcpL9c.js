(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vp={exports:{}},Gl={},Bp={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),Mv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Fv=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),Hv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),gh=Symbol.iterator;function $v(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var $p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Kp={};function ys(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||$p}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qp(){}Qp.prototype=ys.prototype;function Nu(t,e,n){this.props=t,this.context=e,this.refs=Kp,this.updater=n||$p}var Iu=Nu.prototype=new Qp;Iu.constructor=Nu;Gp(Iu,ys.prototype);Iu.isPureReactComponent=!0;var yh=Array.isArray,qp=Object.prototype.hasOwnProperty,Tu={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)qp.call(e,r)&&!Yp.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Bi,type:t,key:i,ref:o,props:s,_owner:Tu.current}}function Gv(t,e){return{$$typeof:Bi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bi}function Kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function Ea(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kv(""+t.key):e.toString(36)}function Ao(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bi:case Ov:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ea(o,0):r,yh(s)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),Ao(s,e,n,"",function(u){return u})):s!=null&&(bu(s)&&(s=Gv(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(_h,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",yh(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Ea(i,l);o+=Ao(i,e,n,c,s)}else if(c=$v(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Ea(i,l++),o+=Ao(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ao(t,e,n){if(t==null)return t;var r=[],s=0;return Ao(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Po={transition:null},qv={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Po,ReactCurrentOwner:Tu};function Xp(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ys;te.Fragment=Mv;te.Profiler=Fv;te.PureComponent=Nu;te.StrictMode=Lv;te.Suspense=Hv;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv;te.act=Xp;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gp({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Tu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)qp.call(e,c)&&!Yp.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Bi,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uv,_context:t},t.Consumer=t};te.createElement=Jp;te.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:Wv,render:t}};te.isValidElement=bu;te.lazy=function(t){return{$$typeof:Bv,_payload:{_status:-1,_result:t},_init:Qv}};te.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Po.transition;Po.transition={};try{t()}finally{Po.transition=e}};te.unstable_act=Xp;te.useCallback=function(t,e){return Je.current.useCallback(t,e)};te.useContext=function(t){return Je.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};te.useEffect=function(t,e){return Je.current.useEffect(t,e)};te.useId=function(){return Je.current.useId()};te.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Je.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};te.useRef=function(t){return Je.current.useRef(t)};te.useState=function(t){return Je.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Je.current.useTransition()};te.version="18.3.1";Bp.exports=te;var E=Bp.exports;const Yv=jv(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=E,Xv=Symbol.for("react.element"),Zv=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ex.call(e,r)&&!nx.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Xv,type:t,key:i,ref:o,props:s,_owner:tx.current}}Gl.Fragment=Zv;Gl.jsx=Zp;Gl.jsxs=Zp;Vp.exports=Gl;var a=Vp.exports,uc={},em={exports:{}},gt={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,H){var F=R.length;R.push(H);e:for(;0<F;){var Y=F-1>>>1,ne=R[Y];if(0<s(ne,H))R[Y]=H,R[F]=ne,F=Y;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],F=R.pop();if(F!==H){R[0]=F;e:for(var Y=0,ne=R.length,Ue=ne>>>1;Y<Ue;){var j=2*(Y+1)-1,ue=R[j],k=j+1,U=R[k];if(0>s(ue,F))k<ne&&0>s(U,ue)?(R[Y]=U,R[k]=F,Y=k):(R[Y]=ue,R[j]=F,Y=j);else if(k<ne&&0>s(U,F))R[Y]=U,R[k]=F,Y=k;else break e}}return H}function s(R,H){var F=R.sortIndex-H.sortIndex;return F!==0?F:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,h=null,d=3,y=!1,_=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=R)r(u),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(u)}}function x(R){if(v=!1,g(R),!_)if(n(c)!==null)_=!0,B(N);else{var H=n(u);H!==null&&Z(x,H.startTime-R)}}function N(R,H){_=!1,v&&(v=!1,m(A),A=-1),y=!0;var F=d;try{for(g(H),h=n(c);h!==null&&(!(h.expirationTime>H)||R&&!K());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var ne=Y(h.expirationTime<=H);H=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(c)&&r(c),g(H)}else r(c);h=n(c)}if(h!==null)var Ue=!0;else{var j=n(u);j!==null&&Z(x,j.startTime-H),Ue=!1}return Ue}finally{h=null,d=F,y=!1}}var I=!1,T=null,A=-1,L=5,M=-1;function K(){return!(t.unstable_now()-M<L)}function C(){if(T!==null){var R=t.unstable_now();M=R;var H=!0;try{H=T(!0,R)}finally{H?w():(I=!1,T=null)}}else I=!1}var w;if(typeof p=="function")w=function(){p(C)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,z=S.port2;S.port1.onmessage=C,w=function(){z.postMessage(null)}}else w=function(){D(C,0)};function B(R){T=R,I||(I=!0,w())}function Z(R,H){A=D(function(){R(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,B(N))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var F=d;d=H;try{return R()}finally{d=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=d;d=R;try{return H()}finally{d=F}},t.unstable_scheduleCallback=function(R,H,F){var Y=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Y+F:Y):F=Y,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=F+ne,R={id:f++,callback:H,priorityLevel:R,startTime:F,expirationTime:ne,sortIndex:-1},F>Y?(R.sortIndex=F,e(u,R),n(c)===null&&R===n(u)&&(v?(m(A),A=-1):v=!0,Z(x,F-Y))):(R.sortIndex=ne,e(c,R),_||y||(_=!0,B(N))),R},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(R){var H=d;return function(){var F=d;d=H;try{return R.apply(this,arguments)}finally{d=F}}}})(nm);tm.exports=nm;var rx=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx=E,mt=rx;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rm=new Set,fi={};function kr(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(fi[t]=e,t=0;t<e.length;t++)rm.add(e[t])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dc=Object.prototype.hasOwnProperty,ix=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},xh={};function ox(t){return dc.call(xh,t)?!0:dc.call(vh,t)?!1:ix.test(t)?xh[t]=!0:(vh[t]=!0,!1)}function lx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ax(t,e,n,r){if(e===null||typeof e>"u"||lx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Au(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ru,Au);Fe[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ru,Au);Fe[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ru,Au);Fe[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pu(t,e,n,r){var s=Fe.hasOwnProperty(e)?Fe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ax(e,n,s,r)&&(n=null),r||s===null?ox(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var un=sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),im=Symbol.for("react.context"),ju=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),wh=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Sa;function Vs(t){if(Sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sa=e&&e[1]||""}return`
`+Sa+t}var Na=!1;function Ia(t,e){if(!t||Na)return"";Na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Na=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function cx(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Ia(t.type,!1),t;case 11:return t=Ia(t.type.render,!1),t;case 1:return t=Ia(t.type,!0),t;default:return""}}function mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ar:return"Fragment";case Rr:return"Portal";case hc:return"Profiler";case Du:return"StrictMode";case fc:return"Suspense";case pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case im:return(t.displayName||"Context")+".Consumer";case sm:return(t._context.displayName||"Context")+".Provider";case ju:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ou:return e=t.displayName||null,e!==null?e:mc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return mc(t(e))}catch{}}return null}function ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mc(e);case 8:return e===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dx(t){var e=lm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=dx(t))}function am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gc(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cm(t,e){e=e.checked,e!=null&&Pu(t,"checked",e,!1)}function yc(t,e){cm(t,e);var n=Wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_c(t,e.type,n):e.hasOwnProperty("defaultValue")&&_c(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ch(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _c(t,e,n){(e!=="number"||Yo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function Gr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Bs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wn(n)}}function um(t,e){var n=Wn(e.value),r=Wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ho,hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hx=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){hx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=fm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var fx=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(fx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,Kr=null,Qr=null;function Nh(t){if(t=Ki(t)){if(typeof Ec!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Jl(e),Ec(t.stateNode,t.type,e))}}function mm(t){Kr?Qr?Qr.push(t):Qr=[t]:Kr=t}function gm(){if(Kr){var t=Kr,e=Qr;if(Qr=Kr=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function ym(t,e){return t(e)}function _m(){}var Ta=!1;function vm(t,e,n){if(Ta)return t(e,n);Ta=!0;try{return ym(t,e,n)}finally{Ta=!1,(Kr!==null||Qr!==null)&&(_m(),gm())}}function mi(t,e){var n=t.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Sc=!1;if(nn)try{var As={};Object.defineProperty(As,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Sc=!1}function px(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ys=!1,Jo=null,Xo=!1,Nc=null,mx={onError:function(t){Ys=!0,Jo=t}};function gx(t,e,n,r,s,i,o,l,c){Ys=!1,Jo=null,px.apply(mx,arguments)}function yx(t,e,n,r,s,i,o,l,c){if(gx.apply(this,arguments),Ys){if(Ys){var u=Jo;Ys=!1,Jo=null}else throw Error(b(198));Xo||(Xo=!0,Nc=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(Cr(t)!==t)throw Error(b(188))}function _x(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ih(s),t;if(i===r)return Ih(s),e;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function wm(t){return t=_x(t),t!==null?km(t):null}function km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=km(t);if(e!==null)return e;t=t.sibling}return null}var Cm=mt.unstable_scheduleCallback,Th=mt.unstable_cancelCallback,vx=mt.unstable_shouldYield,xx=mt.unstable_requestPaint,Ce=mt.unstable_now,wx=mt.unstable_getCurrentPriorityLevel,Lu=mt.unstable_ImmediatePriority,Em=mt.unstable_UserBlockingPriority,Zo=mt.unstable_NormalPriority,kx=mt.unstable_LowPriority,Sm=mt.unstable_IdlePriority,Kl=null,Wt=null;function Cx(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Nx,Ex=Math.log,Sx=Math.LN2;function Nx(t){return t>>>=0,t===0?32:31-(Ex(t)/Sx|0)|0}var fo=64,po=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=$s(l):(i&=o,i!==0&&(r=$s(i)))}else o=n&~s,o!==0?r=$s(o):i!==0&&(r=$s(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),s=1<<n,r|=t[n],e&=~s;return r}function Ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Dt(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Ix(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=fo;return fo<<=1,!(fo&4194240)&&(fo=64),t}function ba(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $i(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function bx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Dt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Fu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function Im(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,Uu,bm,Rm,Am,Tc=!1,mo=[],Nn=null,In=null,Tn=null,gi=new Map,yi=new Map,_n=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(e.pointerId)}}function Ps(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ki(e),e!==null&&Uu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Ax(t,e,n,r,s){switch(e){case"focusin":return Nn=Ps(Nn,t,e,n,r,s),!0;case"dragenter":return In=Ps(In,t,e,n,r,s),!0;case"mouseover":return Tn=Ps(Tn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return gi.set(i,Ps(gi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,yi.set(i,Ps(yi.get(i)||null,t,e,n,r,s)),!0}return!1}function Pm(t){var e=rr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=xm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cc=r,n.target.dispatchEvent(r),Cc=null}else return e=Ki(n),e!==null&&Uu(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){Do(t)&&n.delete(e)}function Px(){Tc=!1,Nn!==null&&Do(Nn)&&(Nn=null),In!==null&&Do(In)&&(In=null),Tn!==null&&Do(Tn)&&(Tn=null),gi.forEach(Rh),yi.forEach(Rh)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Px)))}function _i(t){function e(s){return Ds(s,t)}if(0<mo.length){Ds(mo[0],t);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nn!==null&&Ds(Nn,t),In!==null&&Ds(In,t),Tn!==null&&Ds(Tn,t),gi.forEach(e),yi.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&_n.shift()}var qr=un.ReactCurrentBatchConfig,tl=!0;function Dx(t,e,n,r){var s=ae,i=qr.transition;qr.transition=null;try{ae=1,zu(t,e,n,r)}finally{ae=s,qr.transition=i}}function jx(t,e,n,r){var s=ae,i=qr.transition;qr.transition=null;try{ae=4,zu(t,e,n,r)}finally{ae=s,qr.transition=i}}function zu(t,e,n,r){if(tl){var s=bc(t,e,n,r);if(s===null)Ua(t,e,r,nl,n),bh(t,r);else if(Ax(s,t,e,n,r))r.stopPropagation();else if(bh(t,r),e&4&&-1<Rx.indexOf(t)){for(;s!==null;){var i=Ki(s);if(i!==null&&Tm(i),i=bc(t,e,n,r),i===null&&Ua(t,e,r,nl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ua(t,e,r,null,n)}}var nl=null;function bc(t,e,n,r){if(nl=null,t=Mu(r),t=rr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case Lu:return 1;case Em:return 4;case Zo:case kx:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var En=null,Wu=null,jo=null;function jm(){if(jo)return jo;var t,e=Wu,n=e.length,r,s="value"in En?En.value:En.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jo=s.slice(t,1<r?1-r:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Ah(){return!1}function yt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:Ah,this.isPropagationStopped=Ah,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=yt(_s),Gi=xe({},_s,{view:0,detail:0}),Ox=yt(Gi),Ra,Aa,js,Ql=xe({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(Ra=t.screenX-js.screenX,Aa=t.screenY-js.screenY):Aa=Ra=0,js=t),Ra)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),Ph=yt(Ql),Mx=xe({},Ql,{dataTransfer:0}),Lx=yt(Mx),Fx=xe({},Gi,{relatedTarget:0}),Pa=yt(Fx),Ux=xe({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=yt(Ux),Wx=xe({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=yt(Wx),Vx=xe({},_s,{data:0}),Dh=yt(Vx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gx[t])?!!e[t]:!1}function Vu(){return Kx}var Qx=xe({},Gi,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qx=yt(Qx),Yx=xe({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=yt(Yx),Jx=xe({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Xx=yt(Jx),Zx=xe({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=yt(Zx),t0=xe({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=yt(t0),r0=[9,13,27,32],Bu=nn&&"CompositionEvent"in window,Js=null;nn&&"documentMode"in document&&(Js=document.documentMode);var s0=nn&&"TextEvent"in window&&!Js,Om=nn&&(!Bu||Js&&8<Js&&11>=Js),Oh=" ",Mh=!1;function Mm(t,e){switch(t){case"keyup":return r0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function i0(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Mh=!0,Oh);case"textInput":return t=e.data,t===Oh&&Mh?null:t;default:return null}}function o0(t,e){if(Pr)return t==="compositionend"||!Bu&&Mm(t,e)?(t=jm(),jo=Wu=En=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l0[t.type]:e==="textarea"}function Fm(t,e,n,r){mm(r),e=rl(e,"onChange"),0<e.length&&(n=new Hu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xs=null,vi=null;function a0(t){qm(t,0)}function ql(t){var e=Or(t);if(am(e))return t}function c0(t,e){if(t==="change")return e}var Um=!1;if(nn){var Da;if(nn){var ja="oninput"in document;if(!ja){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),ja=typeof Fh.oninput=="function"}Da=ja}else Da=!1;Um=Da&&(!document.documentMode||9<document.documentMode)}function Uh(){Xs&&(Xs.detachEvent("onpropertychange",zm),vi=Xs=null)}function zm(t){if(t.propertyName==="value"&&ql(vi)){var e=[];Fm(e,vi,t,Mu(t)),vm(a0,e)}}function u0(t,e,n){t==="focusin"?(Uh(),Xs=e,vi=n,Xs.attachEvent("onpropertychange",zm)):t==="focusout"&&Uh()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(vi)}function h0(t,e){if(t==="click")return ql(e)}function f0(t,e){if(t==="input"||t==="change")return ql(e)}function p0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:p0;function xi(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!dc.call(e,s)||!Mt(t[s],e[s]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wh(t,e){var n=zh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function Wm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hm(){for(var t=window,e=Yo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yo(t.document)}return e}function $u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m0(t){var e=Hm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wm(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Wh(n,i);var o=Wh(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=nn&&"documentMode"in document&&11>=document.documentMode,Dr=null,Rc=null,Zs=null,Ac=!1;function Hh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Dr==null||Dr!==Yo(r)||(r=Dr,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&xi(Zs,r)||(Zs=r,r=rl(Rc,"onSelect"),0<r.length&&(e=new Hu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Dr)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Oa={},Vm={};nn&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function Yl(t){if(Oa[t])return Oa[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return Oa[t]=e[n];return t}var Bm=Yl("animationend"),$m=Yl("animationiteration"),Gm=Yl("animationstart"),Km=Yl("transitionend"),Qm=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){Qm.set(t,e),kr(e,[t])}for(var Ma=0;Ma<Vh.length;Ma++){var La=Vh[Ma],y0=La.toLowerCase(),_0=La[0].toUpperCase()+La.slice(1);Kn(y0,"on"+_0)}Kn(Bm,"onAnimationEnd");Kn($m,"onAnimationIteration");Kn(Gm,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Km,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Bh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yx(r,e,void 0,t),t.currentTarget=null}function qm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Bh(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Bh(s,l,u),i=c}}}if(Xo)throw t=Nc,Xo=!1,Nc=null,t}function pe(t,e){var n=e[Mc];n===void 0&&(n=e[Mc]=new Set);var r=t+"__bubble";n.has(r)||(Ym(e,t,2,!1),n.add(r))}function Fa(t,e,n){var r=0;e&&(r|=4),Ym(n,t,r,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function wi(t){if(!t[_o]){t[_o]=!0,rm.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||Fa(n,!1,t),Fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Fa("selectionchange",!1,e))}}function Ym(t,e,n,r){switch(Dm(e)){case 1:var s=Dx;break;case 4:s=jx;break;default:s=zu}n=s.bind(null,e,n,t),s=void 0,!Sc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ua(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=rr(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}vm(function(){var u=i,f=Mu(n),h=[];e:{var d=Qm.get(t);if(d!==void 0){var y=Hu,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":y=qx;break;case"focusin":_="focus",y=Pa;break;case"focusout":_="blur",y=Pa;break;case"beforeblur":case"afterblur":y=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Xx;break;case Bm:case $m:case Gm:y=zx;break;case Km:y=e0;break;case"scroll":y=Ox;break;case"wheel":y=n0;break;case"copy":case"cut":case"paste":y=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=jh}var v=(e&4)!==0,D=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=mi(p,m),x!=null&&v.push(ki(p,x,g)))),D)break;p=p.return}0<v.length&&(d=new y(d,_,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Cc&&(_=n.relatedTarget||n.fromElement)&&(rr(_)||_[rn]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?rr(_):null,_!==null&&(D=Cr(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(v=Ph,x="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=jh,x="onPointerLeave",m="onPointerEnter",p="pointer"),D=y==null?d:Or(y),g=_==null?d:Or(_),d=new v(x,p+"leave",y,n,f),d.target=D,d.relatedTarget=g,x=null,rr(f)===u&&(v=new v(m,p+"enter",_,n,f),v.target=g,v.relatedTarget=D,x=v),D=x,y&&_)t:{for(v=y,m=_,p=0,g=v;g;g=Tr(g))p++;for(g=0,x=m;x;x=Tr(x))g++;for(;0<p-g;)v=Tr(v),p--;for(;0<g-p;)m=Tr(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=Tr(v),m=Tr(m)}v=null}else v=null;y!==null&&$h(h,d,y,v,!1),_!==null&&D!==null&&$h(h,D,_,v,!0)}}e:{if(d=u?Or(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var N=c0;else if(Lh(d))if(Um)N=f0;else{N=d0;var I=u0}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=h0);if(N&&(N=N(t,u))){Fm(h,N,n,f);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&_c(d,"number",d.value)}switch(I=u?Or(u):window,t){case"focusin":(Lh(I)||I.contentEditable==="true")&&(Dr=I,Rc=u,Zs=null);break;case"focusout":Zs=Rc=Dr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Hh(h,n,f);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Hh(h,n,f)}var T;if(Bu)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Pr?Mm(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Om&&n.locale!=="ko"&&(Pr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Pr&&(T=jm()):(En=f,Wu="value"in En?En.value:En.textContent,Pr=!0)),I=rl(u,A),0<I.length&&(A=new Dh(A,t,null,n,f),h.push({event:A,listeners:I}),T?A.data=T:(T=Lm(n),T!==null&&(A.data=T)))),(T=s0?i0(t,n):o0(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(f=new Dh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}qm(h,e)})}function ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=mi(t,n),i!=null&&r.unshift(ki(t,i,s)),i=mi(t,e),i!=null&&r.push(ki(t,i,s))),t=t.return}return r}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=mi(n,i),c!=null&&o.unshift(ki(n,c,l))):s||(c=mi(n,i),c!=null&&o.push(ki(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var x0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Gh(t){return(typeof t=="string"?t:""+t).replace(x0,`
`).replace(w0,"")}function vo(t,e,n){if(e=Gh(e),Gh(t)!==e&&n)throw Error(b(425))}function sl(){}var Pc=null,Dc=null;function jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(E0)}:Oc;function E0(t){setTimeout(function(){throw t})}function za(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),_i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);_i(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),zt="__reactFiber$"+vs,Ci="__reactProps$"+vs,rn="__reactContainer$"+vs,Mc="__reactEvents$"+vs,S0="__reactListeners$"+vs,N0="__reactHandles$"+vs;function rr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[zt])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function Ki(t){return t=t[zt]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Jl(t){return t[Ci]||null}var Lc=[],Mr=-1;function Qn(t){return{current:t}}function ge(t){0>Mr||(t.current=Lc[Mr],Lc[Mr]=null,Mr--)}function fe(t,e){Mr++,Lc[Mr]=t.current,t.current=e}var Hn={},$e=Qn(Hn),st=Qn(!1),dr=Hn;function ss(t,e){var n=t.type.contextTypes;if(!n)return Hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function it(t){return t=t.childContextTypes,t!=null}function il(){ge(st),ge($e)}function qh(t,e,n){if($e.current!==Hn)throw Error(b(168));fe($e,e),fe(st,n)}function Jm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(b(108,ux(t)||"Unknown",s));return xe({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,dr=$e.current,fe($e,t),fe(st,st.current),!0}function Yh(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Jm(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,ge(st),ge($e),fe($e,t)):ge(st),fe(st,n)}var Kt=null,Xl=!1,Wa=!1;function Xm(t){Kt===null?Kt=[t]:Kt.push(t)}function I0(t){Xl=!0,Xm(t)}function qn(){if(!Wa&&Kt!==null){Wa=!0;var t=0,e=ae;try{var n=Kt;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kt=null,Xl=!1}catch(s){throw Kt!==null&&(Kt=Kt.slice(t+1)),Cm(Lu,qn),s}finally{ae=e,Wa=!1}}return null}var Lr=[],Fr=0,ll=null,al=0,_t=[],vt=0,hr=null,Qt=1,qt="";function Zn(t,e){Lr[Fr++]=al,Lr[Fr++]=ll,ll=t,al=e}function Zm(t,e,n){_t[vt++]=Qt,_t[vt++]=qt,_t[vt++]=hr,hr=t;var r=Qt;t=qt;var s=32-Dt(r)-1;r&=~(1<<s),n+=1;var i=32-Dt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qt=1<<32-Dt(e)+s|n<<s|r,qt=i+t}else Qt=1<<i|n<<s|r,qt=t}function Gu(t){t.return!==null&&(Zn(t,1),Zm(t,1,0))}function Ku(t){for(;t===ll;)ll=Lr[--Fr],Lr[Fr]=null,al=Lr[--Fr],Lr[Fr]=null;for(;t===hr;)hr=_t[--vt],_t[vt]=null,qt=_t[--vt],_t[vt]=null,Qt=_t[--vt],_t[vt]=null}var pt=null,ft=null,ye=!1,It=null;function eg(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Qt,overflow:qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function Fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(ye){var e=ft;if(e){var n=e;if(!Jh(t,e)){if(Fc(t))throw Error(b(418));e=bn(n.nextSibling);var r=pt;e&&Jh(t,e)?eg(r,n):(t.flags=t.flags&-4097|2,ye=!1,pt=t)}}else{if(Fc(t))throw Error(b(418));t.flags=t.flags&-4097|2,ye=!1,pt=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function xo(t){if(t!==pt)return!1;if(!ye)return Xh(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jc(t.type,t.memoizedProps)),e&&(e=ft)){if(Fc(t))throw tg(),Error(b(418));for(;e;)eg(t,e),e=bn(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?bn(t.stateNode.nextSibling):null;return!0}function tg(){for(var t=ft;t;)t=bn(t.nextSibling)}function is(){ft=pt=null,ye=!1}function Qu(t){It===null?It=[t]:It.push(t)}var T0=un.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zh(t){var e=t._init;return e(t._payload)}function ng(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=Dn(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,x){return p===null||p.tag!==6?(p=Qa(g,m.mode,x),p.return=m,p):(p=s(p,g),p.return=m,p)}function c(m,p,g,x){var N=g.type;return N===Ar?f(m,p,g.props.children,x,g.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===gn&&Zh(N)===p.type)?(x=s(p,g.props),x.ref=Os(m,p,g),x.return=m,x):(x=Ho(g.type,g.key,g.props,null,m.mode,x),x.ref=Os(m,p,g),x.return=m,x)}function u(m,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=qa(g,m.mode,x),p.return=m,p):(p=s(p,g.children||[]),p.return=m,p)}function f(m,p,g,x,N){return p===null||p.tag!==7?(p=cr(g,m.mode,x,N),p.return=m,p):(p=s(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qa(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case co:return g=Ho(p.type,p.key,p.props,null,m.mode,g),g.ref=Os(m,null,p),g.return=m,g;case Rr:return p=qa(p,m.mode,g),p.return=m,p;case gn:var x=p._init;return h(m,x(p._payload),g)}if(Bs(p)||Rs(p))return p=cr(p,m.mode,g,null),p.return=m,p;wo(m,p)}return null}function d(m,p,g,x){var N=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(m,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===N?c(m,p,g,x):null;case Rr:return g.key===N?u(m,p,g,x):null;case gn:return N=g._init,d(m,p,N(g._payload),x)}if(Bs(g)||Rs(g))return N!==null?null:f(m,p,g,x,null);wo(m,g)}return null}function y(m,p,g,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,l(p,m,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case co:return m=m.get(x.key===null?g:x.key)||null,c(p,m,x,N);case Rr:return m=m.get(x.key===null?g:x.key)||null,u(p,m,x,N);case gn:var I=x._init;return y(m,p,g,I(x._payload),N)}if(Bs(x)||Rs(x))return m=m.get(g)||null,f(p,m,x,N,null);wo(p,x)}return null}function _(m,p,g,x){for(var N=null,I=null,T=p,A=p=0,L=null;T!==null&&A<g.length;A++){T.index>A?(L=T,T=null):L=T.sibling;var M=d(m,T,g[A],x);if(M===null){T===null&&(T=L);break}t&&T&&M.alternate===null&&e(m,T),p=i(M,p,A),I===null?N=M:I.sibling=M,I=M,T=L}if(A===g.length)return n(m,T),ye&&Zn(m,A),N;if(T===null){for(;A<g.length;A++)T=h(m,g[A],x),T!==null&&(p=i(T,p,A),I===null?N=T:I.sibling=T,I=T);return ye&&Zn(m,A),N}for(T=r(m,T);A<g.length;A++)L=y(T,m,A,g[A],x),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?A:L.key),p=i(L,p,A),I===null?N=L:I.sibling=L,I=L);return t&&T.forEach(function(K){return e(m,K)}),ye&&Zn(m,A),N}function v(m,p,g,x){var N=Rs(g);if(typeof N!="function")throw Error(b(150));if(g=N.call(g),g==null)throw Error(b(151));for(var I=N=null,T=p,A=p=0,L=null,M=g.next();T!==null&&!M.done;A++,M=g.next()){T.index>A?(L=T,T=null):L=T.sibling;var K=d(m,T,M.value,x);if(K===null){T===null&&(T=L);break}t&&T&&K.alternate===null&&e(m,T),p=i(K,p,A),I===null?N=K:I.sibling=K,I=K,T=L}if(M.done)return n(m,T),ye&&Zn(m,A),N;if(T===null){for(;!M.done;A++,M=g.next())M=h(m,M.value,x),M!==null&&(p=i(M,p,A),I===null?N=M:I.sibling=M,I=M);return ye&&Zn(m,A),N}for(T=r(m,T);!M.done;A++,M=g.next())M=y(T,m,A,M.value,x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?A:M.key),p=i(M,p,A),I===null?N=M:I.sibling=M,I=M);return t&&T.forEach(function(C){return e(m,C)}),ye&&Zn(m,A),N}function D(m,p,g,x){if(typeof g=="object"&&g!==null&&g.type===Ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var N=g.key,I=p;I!==null;){if(I.key===N){if(N=g.type,N===Ar){if(I.tag===7){n(m,I.sibling),p=s(I,g.props.children),p.return=m,m=p;break e}}else if(I.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===gn&&Zh(N)===I.type){n(m,I.sibling),p=s(I,g.props),p.ref=Os(m,I,g),p.return=m,m=p;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===Ar?(p=cr(g.props.children,m.mode,x,g.key),p.return=m,m=p):(x=Ho(g.type,g.key,g.props,null,m.mode,x),x.ref=Os(m,p,g),x.return=m,m=x)}return o(m);case Rr:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=s(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=qa(g,m.mode,x),p.return=m,m=p}return o(m);case gn:return I=g._init,D(m,p,I(g._payload),x)}if(Bs(g))return _(m,p,g,x);if(Rs(g))return v(m,p,g,x);wo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=s(p,g),p.return=m,m=p):(n(m,p),p=Qa(g,m.mode,x),p.return=m,m=p),o(m)):n(m,p)}return D}var os=ng(!0),rg=ng(!1),cl=Qn(null),ul=null,Ur=null,qu=null;function Yu(){qu=Ur=ul=null}function Ju(t){var e=cl.current;ge(cl),t._currentValue=e}function zc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){ul=t,qu=Ur=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nt=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(qu!==t)if(t={context:t,memoizedValue:e,next:null},Ur===null){if(ul===null)throw Error(b(308));Ur=t,ul.dependencies={lanes:0,firstContext:t}}else Ur=Ur.next=t;return e}var sr=null;function Xu(t){sr===null?sr=[t]:sr.push(t)}function sg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Xu(e)):(n.next=s.next,s.next=n),e.interleaved=n,sn(t,r)}function sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sn(t,n)}return s=r.interleaved,s===null?(e.next=e,Xu(r)):(e.next=s.next,s.next=e),r.interleaved=e,sn(t,n)}function Mo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fu(t,n)}}function ef(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,r){var s=t.updateQueue;yn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;o=0,f=u=c=null,l=i;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(d=e,y=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(y,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(y,h,d):_,d==null)break e;h=xe({},h,d);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=s.effects,d===null?s.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,c=h):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;d=l,l=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);if(f===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=h}}function tf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(b(191,s));s.call(r)}}}var Qi={},Ht=Qn(Qi),Ei=Qn(Qi),Si=Qn(Qi);function ir(t){if(t===Qi)throw Error(b(174));return t}function ed(t,e){switch(fe(Si,e),fe(Ei,t),fe(Ht,Qi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}ge(Ht),fe(Ht,e)}function ls(){ge(Ht),ge(Ei),ge(Si)}function og(t){ir(Si.current);var e=ir(Ht.current),n=xc(e,t.type);e!==n&&(fe(Ei,t),fe(Ht,n))}function td(t){Ei.current===t&&(ge(Ht),ge(Ei))}var _e=Qn(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ha=[];function nd(){for(var t=0;t<Ha.length;t++)Ha[t]._workInProgressVersionPrimary=null;Ha.length=0}var Lo=un.ReactCurrentDispatcher,Va=un.ReactCurrentBatchConfig,fr=0,ve=null,Ne=null,Pe=null,fl=!1,ei=!1,Ni=0,b0=0;function We(){throw Error(b(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function sd(t,e,n,r,s,i){if(fr=i,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lo.current=t===null||t.memoizedState===null?D0:j0,t=n(r,s),ei){i=0;do{if(ei=!1,Ni=0,25<=i)throw Error(b(301));i+=1,Pe=Ne=null,e.updateQueue=null,Lo.current=O0,t=n(r,s)}while(ei)}if(Lo.current=pl,e=Ne!==null&&Ne.next!==null,fr=0,Pe=Ne=ve=null,fl=!1,e)throw Error(b(300));return t}function id(){var t=Ni!==0;return Ni=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Ct(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Pe===null?ve.memoizedState:Pe.next;if(e!==null)Pe=e,Ne=t;else{if(t===null)throw Error(b(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Pe===null?ve.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Ii(t,e){return typeof e=="function"?e(t):e}function Ba(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ne,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((fr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,o=r):c=c.next=h,ve.lanes|=f,pr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,Mt(r,e.memoizedState)||(nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ve.lanes|=i,pr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $a(t){var e=Ct(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Mt(i,e.memoizedState)||(nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function lg(){}function ag(t,e){var n=ve,r=Ct(),s=e(),i=!Mt(r.memoizedState,s);if(i&&(r.memoizedState=s,nt=!0),r=r.queue,od(dg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ti(9,ug.bind(null,n,r,s,e),void 0,null),Oe===null)throw Error(b(349));fr&30||cg(n,e,s)}return s}function cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ug(t,e,n,r){e.value=n,e.getSnapshot=r,hg(e)&&fg(t)}function dg(t,e,n){return n(function(){hg(e)&&fg(t)})}function hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function fg(t){var e=sn(t,1);e!==null&&jt(e,t,1,-1)}function nf(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},e.queue=t,t=t.dispatch=P0.bind(null,ve,t),[e.memoizedState,t]}function Ti(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pg(){return Ct().memoizedState}function Fo(t,e,n,r){var s=Ut();ve.flags|=t,s.memoizedState=Ti(1|e,n,void 0,r===void 0?null:r)}function Zl(t,e,n,r){var s=Ct();r=r===void 0?null:r;var i=void 0;if(Ne!==null){var o=Ne.memoizedState;if(i=o.destroy,r!==null&&rd(r,o.deps)){s.memoizedState=Ti(e,n,i,r);return}}ve.flags|=t,s.memoizedState=Ti(1|e,n,i,r)}function rf(t,e){return Fo(8390656,8,t,e)}function od(t,e){return Zl(2048,8,t,e)}function mg(t,e){return Zl(4,2,t,e)}function gg(t,e){return Zl(4,4,t,e)}function yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _g(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,yg.bind(null,e,t),n)}function ld(){}function vg(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xg(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wg(t,e,n){return fr&21?(Mt(n,e)||(n=Nm(),ve.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nt=!0),t.memoizedState=n)}function R0(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Va.transition;Va.transition={};try{t(!1),e()}finally{ae=n,Va.transition=r}}function kg(){return Ct().memoizedState}function A0(t,e,n){var r=Pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))Eg(e,n);else if(n=sg(t,e,n,r),n!==null){var s=qe();jt(n,t,r,s),Sg(n,e,r)}}function P0(t,e,n){var r=Pn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))Eg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Mt(l,o)){var c=e.interleaved;c===null?(s.next=s,Xu(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=sg(t,e,s,r),n!==null&&(s=qe(),jt(n,t,r,s),Sg(n,e,r))}}function Cg(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Eg(t,e){ei=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fu(t,n)}}var pl={readContext:kt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},D0={readContext:kt,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:rf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fo(4194308,4,yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fo(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=A0.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:nf,useDebugValue:ld,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=nf(!1),e=t[0];return t=R0.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,s=Ut();if(ye){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Oe===null)throw Error(b(349));fr&30||cg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,rf(dg.bind(null,r,i,t),[t]),r.flags|=2048,Ti(9,ug.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Oe.identifierPrefix;if(ye){var n=qt,r=Qt;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ni++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j0={readContext:kt,useCallback:vg,useContext:kt,useEffect:od,useImperativeHandle:_g,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:xg,useReducer:Ba,useRef:pg,useState:function(){return Ba(Ii)},useDebugValue:ld,useDeferredValue:function(t){var e=Ct();return wg(e,Ne.memoizedState,t)},useTransition:function(){var t=Ba(Ii)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:ag,useId:kg,unstable_isNewReconciler:!1},O0={readContext:kt,useCallback:vg,useContext:kt,useEffect:od,useImperativeHandle:_g,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:xg,useReducer:$a,useRef:pg,useState:function(){return $a(Ii)},useDebugValue:ld,useDeferredValue:function(t){var e=Ct();return Ne===null?e.memoizedState=t:wg(e,Ne.memoizedState,t)},useTransition:function(){var t=$a(Ii)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:lg,useSyncExternalStore:ag,useId:kg,unstable_isNewReconciler:!1};function St(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ea={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),s=Pn(t),i=Zt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Rn(t,i,s),e!==null&&(jt(e,t,s,r),Mo(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),s=Pn(t),i=Zt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Rn(t,i,s),e!==null&&(jt(e,t,s,r),Mo(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Pn(t),s=Zt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Rn(t,s,r),e!==null&&(jt(e,t,r,n),Mo(e,t,r))}};function sf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!xi(n,r)||!xi(s,i):!0}function Ng(t,e,n){var r=!1,s=Hn,i=e.contextType;return typeof i=="object"&&i!==null?i=kt(i):(s=it(e)?dr:$e.current,r=e.contextTypes,i=(r=r!=null)?ss(t,s):Hn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ea,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function of(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ea.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Zu(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=kt(i):(i=it(e)?dr:$e.current,s.context=ss(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ea.enqueueReplaceState(s,s.state,null),dl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=cx(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ga(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function Ig(t,e,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Zc=r),Vc(t,e)},n}function Tg(t,e,n){n=Zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Vc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vc(t,e),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new M0;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Y0.bind(null,t,e,n),e.then(t,t))}function af(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var L0=un.ReactCurrentOwner,nt=!1;function Ke(t,e,n,r){e.child=t===null?rg(e,null,n,r):os(e,t.child,n,r)}function uf(t,e,n,r,s){n=n.render;var i=e.ref;return Yr(e,s),r=sd(t,e,n,r,i,s),n=id(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,on(t,e,s)):(ye&&n&&Gu(e),e.flags|=1,Ke(t,e,r,s),e.child)}function df(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!md(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,bg(t,e,i,r,s)):(t=Ho(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(o,r)&&t.ref===e.ref)return on(t,e,s)}return e.flags|=1,t=Dn(i,r),t.ref=e.ref,t.return=e,e.child=t}function bg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(xi(i,r)&&t.ref===e.ref)if(nt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(nt=!0);else return e.lanes=t.lanes,on(t,e,s)}return Bc(t,e,n,r,s)}function Rg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Wr,dt),dt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Wr,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Wr,dt),dt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(Wr,dt),dt|=r;return Ke(t,e,s,n),e.child}function Ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,r,s){var i=it(n)?dr:$e.current;return i=ss(e,i),Yr(e,s),n=sd(t,e,n,r,i,s),r=id(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,on(t,e,s)):(ye&&r&&Gu(e),e.flags|=1,Ke(t,e,n,s),e.child)}function hf(t,e,n,r,s){if(it(n)){var i=!0;ol(e)}else i=!1;if(Yr(e,s),e.stateNode===null)Uo(t,e),Ng(e,n,r),Hc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=it(n)?dr:$e.current,u=ss(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&of(e,o,r,u),yn=!1;var d=e.memoizedState;o.state=d,dl(e,r,o,s),c=e.memoizedState,l!==r||d!==c||st.current||yn?(typeof f=="function"&&(Wc(e,n,f,r),c=e.memoizedState),(l=yn||sf(e,n,l,r,d,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ig(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:St(e.type,l),o.props=u,h=e.pendingProps,d=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=kt(c):(c=it(n)?dr:$e.current,c=ss(e,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==c)&&of(e,o,r,c),yn=!1,d=e.memoizedState,o.state=d,dl(e,r,o,s);var _=e.memoizedState;l!==h||d!==_||st.current||yn?(typeof y=="function"&&(Wc(e,n,y,r),_=e.memoizedState),(u=yn||sf(e,n,u,r,d,_,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,i,s)}function $c(t,e,n,r,s,i){Ag(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Yh(e,n,!1),on(t,e,i);r=e.stateNode,L0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,i),e.child=os(e,null,l,i)):Ke(t,e,l,i),e.memoizedState=r.state,s&&Yh(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qh(t,e.context,!1),ed(t,e.containerInfo)}function ff(t,e,n,r,s){return is(),Qu(s),e.flags|=256,Ke(t,e,n,r),e.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dg(t,e,n){var r=e.pendingProps,s=_e.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(_e,s&1),t===null)return Uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ra(o,r,0,null),t=cr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Kc(n),e.memoizedState=Gc,t):ad(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return F0(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Dn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=cr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Kc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Gc,r}return i=t.child,t=i.sibling,r=Dn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ad(t,e){return e=ra({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,r){return r!==null&&Qu(r),os(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F0(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ga(Error(b(422))),ko(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ra({mode:"visible",children:r.children},s,0,null),i=cr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=Kc(o),e.memoizedState=Gc,i);if(!(e.mode&1))return ko(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(b(419)),r=Ga(i,r,void 0),ko(t,e,o,r)}if(l=(o&t.childLanes)!==0,nt||l){if(r=Oe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sn(t,s),jt(r,t,s,-1))}return pd(),r=Ga(Error(b(421))),ko(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=J0.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ft=bn(s.nextSibling),pt=e,ye=!0,It=null,t!==null&&(_t[vt++]=Qt,_t[vt++]=qt,_t[vt++]=hr,Qt=t.id,qt=t.overflow,hr=e),e=ad(e,r.children),e.flags|=4096,e)}function pf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zc(t.return,e,n)}function Ka(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function jg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ke(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pf(t,n,e);else if(t.tag===19)pf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(_e,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ka(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ka(e,!0,n,null,i);break;case"together":Ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function U0(t,e,n){switch(e.tag){case 3:Pg(e),is();break;case 5:og(e);break;case 1:it(e.type)&&ol(e);break;case 4:ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(cl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Dg(t,e,n):(fe(_e,_e.current&1),t=on(t,e,n),t!==null?t.sibling:null);fe(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Rg(t,e,n)}return on(t,e,n)}var Og,Qc,Mg,Lg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};Mg=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ir(Ht.current);var i=null;switch(n){case"input":s=gc(t,s),r=gc(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=vc(t,s),r=vc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sl)}wc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fi.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&pe("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};Lg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z0(t,e,n){var r=e.pendingProps;switch(Ku(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return it(e.type)&&il(),He(e),null;case 3:return r=e.stateNode,ls(),ge(st),ge($e),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,It!==null&&(nu(It),It=null))),Qc(t,e),He(e),null;case 5:td(e);var s=ir(Si.current);if(n=e.type,t!==null&&e.stateNode!=null)Mg(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return He(e),null}if(t=ir(Ht.current),xo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[zt]=e,r[Ci]=i,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<Gs.length;s++)pe(Gs[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":kh(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Eh(r,i),pe("invalid",r)}wc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,l,t),s=["children",""+l]):fi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":uo(r),Ch(r,i,!0);break;case"textarea":uo(r),Sh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=sl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[Ci]=r,Og(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Gs.length;s++)pe(Gs[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":kh(t,r),s=gc(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Eh(t,r),s=vc(t,r),pe("invalid",t);break;default:s=r}wc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?pm(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hm(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&pi(t,c):typeof c=="number"&&pi(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fi.hasOwnProperty(i)?c!=null&&i==="onScroll"&&pe("scroll",t):c!=null&&Pu(t,i,c,o))}switch(n){case"input":uo(t),Ch(t,r,!1);break;case"textarea":uo(t),Sh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Gr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)Lg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=ir(Si.current),ir(Ht.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(i=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:vo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return He(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&ft!==null&&e.mode&1&&!(e.flags&128))tg(),is(),e.flags|=98560,i=!1;else if(i=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(b(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[zt]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),i=!1}else It!==null&&(nu(It),It=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?be===0&&(be=3):pd())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return ls(),Qc(t,e),t===null&&wi(e.stateNode.containerInfo),He(e),null;case 10:return Ju(e.type._context),He(e),null;case 17:return it(e.type)&&il(),He(e),null;case 19:if(ge(_e),i=e.memoizedState,i===null)return He(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ms(i,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,Ms(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(_e,_e.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>cs&&(e.flags|=128,r=!0,Ms(i,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return He(e),null}else 2*Ce()-i.renderingStartTime>cs&&n!==1073741824&&(e.flags|=128,r=!0,Ms(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=_e.current,fe(_e,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function W0(t,e){switch(Ku(e),e.tag){case 1:return it(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ls(),ge(st),ge($e),nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return td(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return ls(),null;case 10:return Ju(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Co=!1,Ve=!1,H0=typeof WeakSet=="function"?WeakSet:Set,O=null;function zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function qc(t,e,n){try{n()}catch(r){we(t,e,r)}}var mf=!1;function V0(t,e){if(Pc=tl,t=Hm(),$u(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var y;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===s&&(l=o),d===i&&++f===r&&(c=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},tl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,D=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:St(e.type,v),D);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){we(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return _=mf,mf=!1,_}function ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&qc(e,n,i)}s=s.next}while(s!==r)}}function ta(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fg(t){var e=t.alternate;e!==null&&(t.alternate=null,Fg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[Ci],delete e[Mc],delete e[S0],delete e[N0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}var Me=null,Nt=!1;function pn(t,e,n){for(n=n.child;n!==null;)zg(t,e,n),n=n.sibling}function zg(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:Ve||zr(n,e);case 6:var r=Me,s=Nt;Me=null,pn(t,e,n),Me=r,Nt=s,Me!==null&&(Nt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Nt?(t=Me,n=n.stateNode,t.nodeType===8?za(t.parentNode,n):t.nodeType===1&&za(t,n),_i(t)):za(Me,n.stateNode));break;case 4:r=Me,s=Nt,Me=n.stateNode.containerInfo,Nt=!0,pn(t,e,n),Me=r,Nt=s;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&qc(n,e,o),s=s.next}while(s!==r)}pn(t,e,n);break;case 1:if(!Ve&&(zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,pn(t,e,n),Ve=r):pn(t,e,n);break;default:pn(t,e,n)}}function yf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H0),e.forEach(function(r){var s=X0.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Nt=!1;break e;case 3:Me=l.stateNode.containerInfo,Nt=!0;break e;case 4:Me=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Me===null)throw Error(b(160));zg(i,o,s),Me=null,Nt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){we(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wg(e,t),e=e.sibling}function Wg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Ft(t),r&4){try{ti(3,t,t.return),ta(3,t)}catch(v){we(t,t.return,v)}try{ti(5,t,t.return)}catch(v){we(t,t.return,v)}}break;case 1:Et(e,t),Ft(t),r&512&&n!==null&&zr(n,n.return);break;case 5:if(Et(e,t),Ft(t),r&512&&n!==null&&zr(n,n.return),t.flags&32){var s=t.stateNode;try{pi(s,"")}catch(v){we(t,t.return,v)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&cm(s,i),kc(l,o);var u=kc(l,i);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?pm(s,h):f==="dangerouslySetInnerHTML"?hm(s,h):f==="children"?pi(s,h):Pu(s,f,h,u)}switch(l){case"input":yc(s,i);break;case"textarea":um(s,i);break;case"select":var d=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Gr(s,!!i.multiple,y,!1):d!==!!i.multiple&&(i.defaultValue!=null?Gr(s,!!i.multiple,i.defaultValue,!0):Gr(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ci]=i}catch(v){we(t,t.return,v)}}break;case 6:if(Et(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(b(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(v){we(t,t.return,v)}}break;case 3:if(Et(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(e.containerInfo)}catch(v){we(t,t.return,v)}break;case 4:Et(e,t),Ft(t);break;case 13:Et(e,t),Ft(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(dd=Ce())),r&4&&yf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(u=Ve)||f,Et(e,t),Ve=u):Et(e,t),Ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(O=t,f=t.child;f!==null;){for(h=O=f;O!==null;){switch(d=O,y=d.child,d.tag){case 0:case 11:case 14:case 15:ti(4,d,d.return);break;case 1:zr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:zr(d,d.return);break;case 22:if(d.memoizedState!==null){vf(h);continue}}y!==null?(y.return=d,O=y):vf(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=fm("display",o))}catch(v){we(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){we(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(e,t),Ft(t),r&4&&yf(t);break;case 21:break;default:Et(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(pi(s,""),r.flags&=-33);var i=gf(t);Xc(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gf(t);Jc(t,l,o);break;default:throw Error(b(161))}}catch(c){we(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B0(t,e,n){O=t,Hg(t)}function Hg(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var s=O,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Co;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Ve;l=Co;var u=Ve;if(Co=o,(Ve=c)&&!u)for(O=s;O!==null;)o=O,c=o.child,o.tag===22&&o.memoizedState!==null?xf(s):c!==null?(c.return=o,O=c):xf(s);for(;i!==null;)O=i,Hg(i),i=i.sibling;O=s,Co=l,Ve=u}_f(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,O=i):_f(t)}}function _f(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||ta(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&tf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&_i(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ve||e.flags&512&&Yc(e)}catch(d){we(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function vf(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function xf(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ta(4,e)}catch(c){we(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){we(e,s,c)}}var i=e.return;try{Yc(e)}catch(c){we(e,i,c)}break;case 5:var o=e.return;try{Yc(e)}catch(c){we(e,o,c)}}}catch(c){we(e,e.return,c)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var $0=Math.ceil,ml=un.ReactCurrentDispatcher,cd=un.ReactCurrentOwner,wt=un.ReactCurrentBatchConfig,ie=0,Oe=null,Ee=null,Le=0,dt=0,Wr=Qn(0),be=0,bi=null,pr=0,na=0,ud=0,ni=null,tt=null,dd=0,cs=1/0,Gt=null,gl=!1,Zc=null,An=null,Eo=!1,Sn=null,yl=0,ri=0,eu=null,zo=-1,Wo=0;function qe(){return ie&6?Ce():zo!==-1?zo:zo=Ce()}function Pn(t){return t.mode&1?ie&2&&Le!==0?Le&-Le:T0.transition!==null?(Wo===0&&(Wo=Nm()),Wo):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t):1}function jt(t,e,n,r){if(50<ri)throw ri=0,eu=null,Error(b(185));$i(t,n,r),(!(ie&2)||t!==Oe)&&(t===Oe&&(!(ie&2)&&(na|=n),be===4&&vn(t,Le)),ot(t,r),n===1&&ie===0&&!(e.mode&1)&&(cs=Ce()+500,Xl&&qn()))}function ot(t,e){var n=t.callbackNode;Tx(t,e);var r=el(t,t===Oe?Le:0);if(r===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?I0(wf.bind(null,t)):Xm(wf.bind(null,t)),C0(function(){!(ie&6)&&qn()}),n=null;else{switch(Im(r)){case 1:n=Lu;break;case 4:n=Em;break;case 16:n=Zo;break;case 536870912:n=Sm;break;default:n=Zo}n=Yg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(zo=-1,Wo=0,ie&6)throw Error(b(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=el(t,t===Oe?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_l(t,r);else{e=r;var s=ie;ie|=2;var i=$g();(Oe!==t||Le!==e)&&(Gt=null,cs=Ce()+500,ar(t,e));do try{Q0();break}catch(l){Bg(t,l)}while(!0);Yu(),ml.current=i,ie=s,Ee!==null?e=0:(Oe=null,Le=0,e=be)}if(e!==0){if(e===2&&(s=Ic(t),s!==0&&(r=s,e=tu(t,s))),e===1)throw n=bi,ar(t,0),vn(t,r),ot(t,Ce()),n;if(e===6)vn(t,r);else{if(s=t.current.alternate,!(r&30)&&!G0(s)&&(e=_l(t,r),e===2&&(i=Ic(t),i!==0&&(r=i,e=tu(t,i))),e===1))throw n=bi,ar(t,0),vn(t,r),ot(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:er(t,tt,Gt);break;case 3:if(vn(t,r),(r&130023424)===r&&(e=dd+500-Ce(),10<e)){if(el(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Oc(er.bind(null,t,tt,Gt),e);break}er(t,tt,Gt);break;case 4:if(vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Dt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){t.timeoutHandle=Oc(er.bind(null,t,tt,Gt),r);break}er(t,tt,Gt);break;case 5:er(t,tt,Gt);break;default:throw Error(b(329))}}}return ot(t,Ce()),t.callbackNode===n?Vg.bind(null,t):null}function tu(t,e){var n=ni;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=_l(t,e),t!==2&&(e=tt,tt=n,e!==null&&nu(e)),t}function nu(t){tt===null?tt=t:tt.push.apply(tt,t)}function G0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Mt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vn(t,e){for(e&=~ud,e&=~na,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function wf(t){if(ie&6)throw Error(b(327));Jr();var e=el(t,0);if(!(e&1))return ot(t,Ce()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var r=Ic(t);r!==0&&(e=r,n=tu(t,r))}if(n===1)throw n=bi,ar(t,0),vn(t,e),ot(t,Ce()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,tt,Gt),ot(t,Ce()),null}function hd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(cs=Ce()+500,Xl&&qn())}}function mr(t){Sn!==null&&Sn.tag===0&&!(ie&6)&&Jr();var e=ie;ie|=1;var n=wt.transition,r=ae;try{if(wt.transition=null,ae=1,t)return t()}finally{ae=r,wt.transition=n,ie=e,!(ie&6)&&qn()}}function fd(){dt=Wr.current,ge(Wr)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k0(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:ls(),ge(st),ge($e),nd();break;case 5:td(r);break;case 4:ls();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:Ju(r.type._context);break;case 22:case 23:fd()}n=n.return}if(Oe=t,Ee=t=Dn(t.current,null),Le=dt=e,be=0,bi=null,ud=na=pr=0,tt=ni=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}sr=null}return t}function Bg(t,e){do{var n=Ee;try{if(Yu(),Lo.current=pl,fl){for(var r=ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fl=!1}if(fr=0,Pe=Ne=ve=null,ei=!1,Ni=0,cd.current=null,n===null||n.return===null){be=1,bi=e,Ee=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=Le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=af(o);if(y!==null){y.flags&=-257,cf(y,o,l,i,e),y.mode&1&&lf(i,u,e),e=y,c=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(c),e.updateQueue=v}else _.add(c);break e}else{if(!(e&1)){lf(i,u,e),pd();break e}c=Error(b(426))}}else if(ye&&l.mode&1){var D=af(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),cf(D,o,l,i,e),Qu(as(c,l));break e}}i=c=as(c,l),be!==4&&(be=2),ni===null?ni=[i]:ni.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Ig(i,c,e);ef(i,m);break e;case 1:l=c;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(An===null||!An.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Tg(i,l,e);ef(i,x);break e}}i=i.return}while(i!==null)}Kg(n)}catch(N){e=N,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function $g(){var t=ml.current;return ml.current=pl,t===null?pl:t}function pd(){(be===0||be===3||be===2)&&(be=4),Oe===null||!(pr&268435455)&&!(na&268435455)||vn(Oe,Le)}function _l(t,e){var n=ie;ie|=2;var r=$g();(Oe!==t||Le!==e)&&(Gt=null,ar(t,e));do try{K0();break}catch(s){Bg(t,s)}while(!0);if(Yu(),ie=n,ml.current=r,Ee!==null)throw Error(b(261));return Oe=null,Le=0,be}function K0(){for(;Ee!==null;)Gg(Ee)}function Q0(){for(;Ee!==null&&!vx();)Gg(Ee)}function Gg(t){var e=qg(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?Kg(t):Ee=e,cd.current=null}function Kg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W0(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ee=null;return}}else if(n=z0(n,e,dt),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);be===0&&(be=5)}function er(t,e,n){var r=ae,s=wt.transition;try{wt.transition=null,ae=1,q0(t,e,n,r)}finally{wt.transition=s,ae=r}return null}function q0(t,e,n,r){do Jr();while(Sn!==null);if(ie&6)throw Error(b(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(bx(t,i),t===Oe&&(Ee=Oe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,Yg(Zo,function(){return Jr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wt.transition,wt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,cd.current=null,V0(t,n),Wg(n,t),m0(Dc),tl=!!Pc,Dc=Pc=null,t.current=n,B0(n),xx(),ie=l,ae=o,wt.transition=i}else t.current=n;if(Eo&&(Eo=!1,Sn=t,yl=s),i=t.pendingLanes,i===0&&(An=null),Cx(n.stateNode),ot(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(gl)throw gl=!1,t=Zc,Zc=null,t;return yl&1&&t.tag!==0&&Jr(),i=t.pendingLanes,i&1?t===eu?ri++:(ri=0,eu=t):ri=0,qn(),null}function Jr(){if(Sn!==null){var t=Im(yl),e=wt.transition,n=ae;try{if(wt.transition=null,ae=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,yl=0,ie&6)throw Error(b(331));var s=ie;for(ie|=4,O=t.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:ti(8,f,i)}var h=f.child;if(h!==null)h.return=f,O=h;else for(;O!==null;){f=O;var d=f.sibling,y=f.return;if(Fg(f),f===u){O=null;break}if(d!==null){d.return=y,O=d;break}O=y}}}var _=i.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ti(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var p=t.current;for(O=p;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ta(9,l)}}catch(N){we(l,l.return,N)}if(l===o){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(ie=s,qn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Kl,t)}catch{}r=!0}return r}finally{ae=n,wt.transition=e}}return!1}function kf(t,e,n){e=as(n,e),e=Ig(t,e,1),t=Rn(t,e,1),e=qe(),t!==null&&($i(t,1,e),ot(t,e))}function we(t,e,n){if(t.tag===3)kf(t,t,n);else for(;e!==null;){if(e.tag===3){kf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){t=as(n,t),t=Tg(e,t,1),e=Rn(e,t,1),t=qe(),e!==null&&($i(e,1,t),ot(e,t));break}}e=e.return}}function Y0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>Ce()-dd?ar(t,0):ud|=n),ot(t,e)}function Qg(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=qe();t=sn(t,e),t!==null&&($i(t,e,n),ot(t,n))}function J0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qg(t,n)}function X0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Qg(t,n)}var qg;qg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nt=!1,U0(t,e,n);nt=!!(t.flags&131072)}else nt=!1,ye&&e.flags&1048576&&Zm(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uo(t,e),t=e.pendingProps;var s=ss(e,$e.current);Yr(e,n),s=sd(null,e,r,t,s,n);var i=id();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,it(r)?(i=!0,ol(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Zu(e),s.updater=ea,e.stateNode=s,s._reactInternals=e,Hc(e,r,t,n),e=$c(null,e,r,!0,i,n)):(e.tag=0,ye&&i&&Gu(e),Ke(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ew(r),t=St(r,t),s){case 0:e=Bc(null,e,r,t,n);break e;case 1:e=hf(null,e,r,t,n);break e;case 11:e=uf(null,e,r,t,n);break e;case 14:e=df(null,e,r,St(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:St(r,s),Bc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:St(r,s),hf(t,e,r,s,n);case 3:e:{if(Pg(e),t===null)throw Error(b(387));r=e.pendingProps,i=e.memoizedState,s=i.element,ig(t,e),dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=as(Error(b(423)),e),e=ff(t,e,r,n,s);break e}else if(r!==s){s=as(Error(b(424)),e),e=ff(t,e,r,n,s);break e}else for(ft=bn(e.stateNode.containerInfo.firstChild),pt=e,ye=!0,It=null,n=rg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===s){e=on(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return og(e),t===null&&Uc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,jc(r,s)?o=null:i!==null&&jc(r,i)&&(e.flags|=32),Ag(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return Dg(t,e,n);case 4:return ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:St(r,s),uf(t,e,r,s,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(cl,r._currentValue),r._currentValue=o,i!==null)if(Mt(i.value,o)){if(i.children===s.children&&!st.current){e=on(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Zt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),zc(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ke(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Yr(e,n),s=kt(s),r=r(s),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,s=St(r,e.pendingProps),s=St(r.type,s),df(t,e,r,s,n);case 15:return bg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:St(r,s),Uo(t,e),e.tag=1,it(r)?(t=!0,ol(e)):t=!1,Yr(e,n),Ng(e,r,s),Hc(e,r,s,n),$c(null,e,r,!0,t,n);case 19:return jg(t,e,n);case 22:return Rg(t,e,n)}throw Error(b(156,e.tag))};function Yg(t,e){return Cm(t,e)}function Z0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new Z0(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ew(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ju)return 11;if(t===Ou)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ho(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ar:return cr(n.children,s,i,e);case Du:o=8,s|=8;break;case hc:return t=xt(12,n,e,s|2),t.elementType=hc,t.lanes=i,t;case fc:return t=xt(13,n,e,s),t.elementType=fc,t.lanes=i,t;case pc:return t=xt(19,n,e,s),t.elementType=pc,t.lanes=i,t;case om:return ra(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sm:o=10;break e;case im:o=9;break e;case ju:o=11;break e;case Ou:o=14;break e;case gn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function cr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function ra(t,e,n,r){return t=xt(22,t,r,e),t.elementType=om,t.lanes=n,t.stateNode={isHidden:!1},t}function Qa(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function qa(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function gd(t,e,n,r,s,i,o,l,c){return t=new tw(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(i),t}function nw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jg(t){if(!t)return Hn;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(it(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(it(n))return Jm(t,n,e)}return e}function Xg(t,e,n,r,s,i,o,l,c){return t=gd(n,r,!0,t,s,i,o,l,c),t.context=Jg(null),n=t.current,r=qe(),s=Pn(n),i=Zt(r,s),i.callback=e??null,Rn(n,i,s),t.current.lanes=s,$i(t,s,r),ot(t,r),t}function sa(t,e,n,r){var s=e.current,i=qe(),o=Pn(s);return n=Jg(n),e.context===null?e.context=n:e.pendingContext=n,e=Zt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(s,e,o),t!==null&&(jt(t,s,o,i),Mo(t,s,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yd(t,e){Cf(t,e),(t=t.alternate)&&Cf(t,e)}function rw(){return null}var Zg=typeof reportError=="function"?reportError:function(t){console.error(t)};function _d(t){this._internalRoot=t}ia.prototype.render=_d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));sa(t,e,null,null)};ia.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){sa(null,t,null,null)}),e[rn]=null}};function ia(t){this._internalRoot=t}ia.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Pm(t)}};function vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function sw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=vl(o);i.call(u)}}var o=Xg(e,r,t,0,null,!1,!1,"",Ef);return t._reactRootContainer=o,t[rn]=o.current,wi(t.nodeType===8?t.parentNode:t),mr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=vl(c);l.call(u)}}var c=gd(t,0,!1,null,null,!1,!1,"",Ef);return t._reactRootContainer=c,t[rn]=c.current,wi(t.nodeType===8?t.parentNode:t),mr(function(){sa(e,c,n,r)}),c}function la(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=vl(o);l.call(c)}}sa(e,o,t,s)}else o=sw(n,e,t,s,r);return vl(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(Fu(e,n|1),ot(e,Ce()),!(ie&6)&&(cs=Ce()+500,qn()))}break;case 13:mr(function(){var r=sn(t,1);if(r!==null){var s=qe();jt(r,t,1,s)}}),yd(t,1)}};Uu=function(t){if(t.tag===13){var e=sn(t,134217728);if(e!==null){var n=qe();jt(e,t,134217728,n)}yd(t,134217728)}};bm=function(t){if(t.tag===13){var e=Pn(t),n=sn(t,e);if(n!==null){var r=qe();jt(n,t,e,r)}yd(t,e)}};Rm=function(){return ae};Am=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Ec=function(t,e,n){switch(e){case"input":if(yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Jl(r);if(!s)throw Error(b(90));am(r),yc(r,s)}}}break;case"textarea":um(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};ym=hd;_m=mr;var iw={usingClientEntryPoint:!1,Events:[Ki,Or,Jl,mm,gm,hd]},Ls={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Kl=So.inject(ow),Wt=So}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(e))throw Error(b(200));return nw(t,e,null,n)};gt.createRoot=function(t,e){if(!vd(t))throw Error(b(299));var n=!1,r="",s=Zg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=gd(t,1,!1,null,null,n,!1,r,s),t[rn]=e.current,wi(t.nodeType===8?t.parentNode:t),new _d(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=wm(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return mr(t)};gt.hydrate=function(t,e,n){if(!oa(e))throw Error(b(200));return la(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!vd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Zg;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xg(e,null,t,1,n??null,s,!1,i,o),t[rn]=e.current,wi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ia(e)};gt.render=function(t,e,n){if(!oa(e))throw Error(b(200));return la(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!oa(t))throw Error(b(40));return t._reactRootContainer?(mr(function(){la(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1};gt.unstable_batchedUpdates=hd;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oa(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return la(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(t){console.error(t)}}ey(),em.exports=gt;var lw=em.exports,Sf=lw;uc.createRoot=Sf.createRoot,uc.hydrateRoot=Sf.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),re=(t,e)=>{const n=E.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...u},f)=>E.createElement("svg",{ref:f,...aw,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${cw(t)}`,l].join(" "),...u},[...e.map(([h,d])=>E.createElement(h,d)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=re("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=re("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=re("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=re("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=re("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=re("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=re("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=re("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=re("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=re("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=re("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=re("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=re("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=re("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=re("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=re("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=re("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=re("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=re("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=re("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=re("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=re("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=re("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=re("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=re("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=re("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=re("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Rf={en:{dashboard:"Dashboard",assets:"Assets",checkout:"Checkout",teams:"Teams",history:"History",totalAssets:"Total Assets",checkedOut:"Checked Out",available:"Available",overdue:"Overdue",overdueItems:"Overdue",dueSoon:"Due Soon",currentlyOut:"Currently Out",markReturned:"Return",noOverdue:"No overdue items 🎉",noDueSoon:"Nothing due soon",noCheckouts:"No assets checked out yet",addAsset:"Add Asset",editAsset:"Edit Asset",assetName:"Asset Name",category:"Category",description:"Description",quantity:"Total Quantity",save:"Save",cancel:"Cancel",delete:"Delete",confirm:"Confirm",search:"Search...",selectAsset:"Select Asset",selectTeam:"Select Team",selectMember:"Select Member",checkoutQty:"Quantity",duration:"Duration (days)",notes:"Notes (optional)",step:"Step",of:"of",next:"Next",back:"Back",submitCheckout:"Confirm Checkout",returnAsset:"Return Asset",selectCheckout:"Select active checkout to return",teamName:"Team Name",members:"Members",addMember:"Add Member",memberName:"Member Name",rename:"Rename",removeMember:"Remove",currentCheckouts:"Current Checkouts",allHistory:"All History",filterByTeam:"All Teams",filterByStatus:"All Statuses",active:"Active",returned:"Returned",checkoutDate:"Checkout",dueDate:"Due",returnedDate:"Returned",daysRemaining:"days left",daysOverdue:"days overdue",availableQty:"available",checkedOutQty:"out",confirmReturn:"Confirm return of this asset?",confirmDelete:"Are you sure you want to delete this?",success:"Success",assetAdded:"Asset added successfully",assetUpdated:"Asset updated successfully",assetDeleted:"Asset deleted",checkoutSuccess:"Asset checked out successfully",returnSuccess:"Asset returned successfully",memberAdded:"Member added",memberRemoved:"Member removed",teamRenamed:"Team renamed",categoryMgmt:"Manage Categories",addCategory:"Add Category",categoryName:"Category Name",color:"Color",noAssets:"No assets yet. Add your first!",noMembers:"No members yet",noHistory:"No checkout history yet",required:"This field is required",insufficientQty:"Not enough available",assetDetail:"Asset Detail",checkoutHistory:"Checkout History",newCheckout:"New Checkout",returnFlow:"Return Asset",days:"days",day:"day",late:"Late",onTime:"On Time",all:"All",editCategory:"Edit Category",deleteCategory:"Delete Category",categoryDeleted:"Category deleted",categoryAdded:"Category added",categoryUpdated:"Category updated",custom:"Custom",addTeam:"Add Team",deleteTeam:"Delete Team",teamAdded:"Team added",teamDeleted:"Team deleted",teamColor:"Team Color",teamHasActiveCheckouts:"This team has active checkouts. Return them first.",theme:"Theme",darkMode:"Dark",lightMode:"Light",language:"Language",welcomeTitle:"Welcome to Workshop Manager",welcomeSubtitle:"Manage your workshop equipment and team checkouts with ease.",getStarted:"Get Started",setupTeams:"Set Up Your Teams",setupPeople:"Add Team Members",setupItems:"Add Your Equipment",setupDone:"You're All Set!",skipSetup:"Skip Setup",letsGo:"Let's Go!",addAnother:"Add Another",setupSummary:"Here's what you've set up",startApp:"Start Using App",noTeamsYet:"No teams added yet",noItemsYet:"No items added yet",teamsCount:"teams",membersCount:"members",itemsCount:"items",exportData:"Export Data",importData:"Import Data",resetApp:"Reset App",exportSuccess:"Data exported successfully",importSuccess:"Data imported successfully",importError:"Invalid file format",resetConfirm:"This will delete ALL your data. Are you sure?",resetSuccess:"App has been reset",photo:"Photo",addPhoto:"Add Photo",removePhoto:"Remove Photo",noTeams:"No teams yet. Create your first!",workshops:"Workshops",workshop:"Workshop",addWorkshop:"Add Workshop",editWorkshop:"Edit Workshop",deleteWorkshop:"Delete Workshop",workshopName:"Workshop Name",workshopColor:"Workshop Color",workshopAdded:"Workshop added",workshopDeleted:"Workshop deleted",workshopRenamed:"Workshop renamed",workshopUpdated:"Workshop updated",workshopHasActiveCheckouts:"This workshop has active checkouts. Return them first.",deleteWorkshopConfirm:"Delete this workshop and ALL its assets, categories, and history?",noWorkshops:"No workshops yet. Create your first!",defaultWorkshop:"Default Workshop",switchWorkshop:"Switch Workshop",sync:"Sync",createRoom:"Create Room",joinRoom:"Join Room",roomCode:"Room Code",enterRoomCode:"Enter room code",connected:"Connected",connecting:"Connecting...",disconnect:"Disconnect",disconnected:"Disconnected",roomCreated:"Room created!",roomJoined:"Joined room!",roomNotFound:"Room not found",syncEnabled:"Sync active",copyCode:"Copy Code",codeCopied:"Code copied!",password:"Password",enterPassword:"Enter a password",passwordRequired:"Password is required",wrongPassword:"Wrong password",unlock:"Unlock",or:"or",admin:"Admin",online:"Online",offline:"Offline",offlineReadOnly:"Offline — view only"},tr:{dashboard:"Gösterge Paneli",assets:"Ekipmanlar",checkout:"Zimmet",teams:"Ekipler",history:"Geçmiş",totalAssets:"Toplam Ekipman",checkedOut:"Zimmette",available:"Müsait",overdue:"Gecikmiş",overdueItems:"Gecikmiş",dueSoon:"Yakında Teslim",currentlyOut:"Şu An Dışarıda",markReturned:"İade Et",noOverdue:"Gecikmiş eşya yok 🎉",noDueSoon:"Yakında teslim edilecek eşya yok",noCheckouts:"Henüz zimmetlenen eşya yok",addAsset:"Ekipman Ekle",editAsset:"Ekipman Düzenle",assetName:"Ekipman Adı",category:"Kategori",description:"Açıklama",quantity:"Toplam Adet",save:"Kaydet",cancel:"İptal",delete:"Sil",confirm:"Onayla",search:"Ara...",selectAsset:"Ekipman Seç",selectTeam:"Ekip Seç",selectMember:"Üye Seç",checkoutQty:"Adet",duration:"Süre (gün)",notes:"Notlar (isteğe bağlı)",step:"Adım",of:"/",next:"İleri",back:"Geri",submitCheckout:"Zimmeti Onayla",returnAsset:"Eşya İade Et",selectCheckout:"İade edilecek aktif zimmeti seçin",teamName:"Ekip Adı",members:"Üyeler",addMember:"Üye Ekle",memberName:"Üye Adı",rename:"Yeniden Adlandır",removeMember:"Çıkar",currentCheckouts:"Aktif Zimmetler",allHistory:"Tüm Geçmiş",filterByTeam:"Tüm Ekipler",filterByStatus:"Tüm Durumlar",active:"Aktif",returned:"İade Edildi",checkoutDate:"Zimmet",dueDate:"Teslim",returnedDate:"İade",daysRemaining:"gün kaldı",daysOverdue:"gün gecikmiş",availableQty:"müsait",checkedOutQty:"dışarıda",confirmReturn:"Bu eşyayı iade etmek istediğinize emin misiniz?",confirmDelete:"Bunu silmek istediğinize emin misiniz?",success:"Başarılı",assetAdded:"Ekipman başarıyla eklendi",assetUpdated:"Ekipman başarıyla güncellendi",assetDeleted:"Ekipman silindi",checkoutSuccess:"Zimmet başarıyla oluşturuldu",returnSuccess:"Eşya başarıyla iade edildi",memberAdded:"Üye eklendi",memberRemoved:"Üye çıkarıldı",teamRenamed:"Ekip yeniden adlandırıldı",categoryMgmt:"Kategorileri Yönet",addCategory:"Kategori Ekle",categoryName:"Kategori Adı",color:"Renk",noAssets:"Henüz ekipman yok. İlkini ekleyin!",noMembers:"Henüz üye yok",noHistory:"Henüz zimmet geçmişi yok",required:"Bu alan zorunludur",insufficientQty:"Yeterli stok yok",assetDetail:"Ekipman Detayı",checkoutHistory:"Zimmet Geçmişi",newCheckout:"Yeni Zimmet",returnFlow:"Eşya İade",days:"gün",day:"gün",late:"Geç",onTime:"Zamanında",all:"Tümü",editCategory:"Kategori Düzenle",deleteCategory:"Kategori Sil",categoryDeleted:"Kategori silindi",categoryAdded:"Kategori eklendi",categoryUpdated:"Kategori güncellendi",custom:"Özel",addTeam:"Ekip Ekle",deleteTeam:"Ekibi Sil",teamAdded:"Ekip eklendi",teamDeleted:"Ekip silindi",teamColor:"Ekip Rengi",teamHasActiveCheckouts:"Bu ekibin aktif zimmetleri var. Önce iade edin.",theme:"Tema",darkMode:"Koyu",lightMode:"Açık",language:"Dil",welcomeTitle:"Workshop Manager'a Hoş Geldiniz",welcomeSubtitle:"Atölye ekipmanlarınızı ve ekip zimmetlerini kolayca yönetin.",getStarted:"Başlayalım",setupTeams:"Ekiplerinizi Oluşturun",setupPeople:"Ekip Üyelerini Ekleyin",setupItems:"Ekipmanlarınızı Ekleyin",setupDone:"Hazırsınız!",skipSetup:"Kurulumu Atla",letsGo:"Hadi Başlayalım!",addAnother:"Bir Tane Daha Ekle",setupSummary:"İşte oluşturduklarınız",startApp:"Uygulamayı Başlat",noTeamsYet:"Henüz ekip eklenmedi",noItemsYet:"Henüz ekipman eklenmedi",teamsCount:"ekip",membersCount:"üye",itemsCount:"ekipman",exportData:"Veriyi Dışa Aktar",importData:"Veriyi İçe Aktar",resetApp:"Uygulamayı Sıfırla",exportSuccess:"Veri başarıyla dışa aktarıldı",importSuccess:"Veri başarıyla içe aktarıldı",importError:"Geçersiz dosya formatı",resetConfirm:"Bu işlem TÜM verilerinizi silecek. Emin misiniz?",resetSuccess:"Uygulama sıfırlandı",photo:"Fotoğraf",addPhoto:"Fotoğraf Ekle",removePhoto:"Fotoğrafı Kaldır",noTeams:"Henüz ekip yok. İlkini oluşturun!",workshops:"Atölyeler",workshop:"Atölye",addWorkshop:"Atölye Ekle",editWorkshop:"Atölye Düzenle",deleteWorkshop:"Atölye Sil",workshopName:"Atölye Adı",workshopColor:"Atölye Rengi",workshopAdded:"Atölye eklendi",workshopDeleted:"Atölye silindi",workshopRenamed:"Atölye yeniden adlandırıldı",workshopUpdated:"Atölye güncellendi",workshopHasActiveCheckouts:"Bu atölyenin aktif zimmetleri var. Önce iade edin.",deleteWorkshopConfirm:"Bu atölye ve TÜM ekipmanları, kategorileri ve geçmişi silinsin mi?",noWorkshops:"Henüz atölye yok. İlkini oluşturun!",defaultWorkshop:"Varsayılan Atölye",switchWorkshop:"Atölye Değiştir",sync:"Senkronizasyon",createRoom:"Oda Oluştur",joinRoom:"Odaya Katıl",roomCode:"Oda Kodu",enterRoomCode:"Oda kodunu girin",connected:"Bağlı",connecting:"Bağlanıyor...",disconnect:"Bağlantıyı Kes",disconnected:"Bağlı Değil",roomCreated:"Oda oluşturuldu!",roomJoined:"Odaya katıldınız!",roomNotFound:"Oda bulunamadı",syncEnabled:"Senkronizasyon aktif",copyCode:"Kodu Kopyala",codeCopied:"Kod kopyalandı!",password:"Şifre",enterPassword:"Bir şifre girin",passwordRequired:"Şifre gerekli",wrongPassword:"Yanlış şifre",unlock:"Kilidi Aç",or:"veya",admin:"Yönetim",online:"Çevrimiçi",offline:"Çevrimdışı",offlineReadOnly:"Çevrimdışı — sadece görüntüleme"}},ht=()=>Math.random().toString(36).substr(2,9)+Date.now().toString(36),qi=()=>{const t=new Date;return t.setHours(0,0,0,0),t},Nw=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},us=(t,e)=>Math.ceil((new Date(t)-new Date(e))/864e5),ii=(t,e="en")=>t?new Date(t).toLocaleDateString(e==="tr"?"tr-TR":"en-US",{month:"short",day:"numeric",year:"numeric"}):"—",q={get:(t,e)=>{try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}},set:(t,e)=>localStorage.setItem(t,JSON.stringify(e))},Io=2,Bo=["#3b82f6","#ef4444","#22c55e","#f59e0b","#a855f7","#ec4899","#14b8a6","#f97316"],Iw=(t="en")=>{if(q.get("workshop_data_version",0)>=2)return null;const e={id:ht(),name:t==="tr"?"Varsayılan Atölye":"Default Workshop",color:"#3b82f6",createdAt:new Date().toISOString()},n=q.get("workshop_assets",[]);n.length>0&&q.set("workshop_assets",n.map(o=>o.workshopId?o:{...o,workshopId:e.id}));const r=q.get("workshop_categories",[]);r.length>0&&q.set("workshop_categories",r.map(o=>o.workshopId?o:{...o,workshopId:e.id}));const s=q.get("workshop_checkouts",[]);return s.length>0&&q.set("workshop_checkouts",s.map(o=>o.workshopId?o:{...o,workshopId:e.id})),q.get("workshop_workshops",[]).length===0&&(q.set("workshop_workshops",[e]),q.set("workshop_active_workshop",e.id)),q.set("workshop_data_version",2),e},Fs=[{id:"cat1",name:"Hand Tools",color:"#f59e0b"},{id:"cat2",name:"Power Tools",color:"#ef4444"},{id:"cat3",name:"Electronics",color:"#3b82f6"},{id:"cat4",name:"Safety Equipment",color:"#22c55e"},{id:"cat5",name:"Measurement",color:"#a855f7"}],oi=["#ef4444","#f59e0b","#22c55e","#3b82f6","#a855f7","#ec4899","#14b8a6","#f97316"],Af=(t,e="#3b82f6")=>({id:ht(),name:t,color:e,createdAt:new Date().toISOString()}),Tw=({message:t,onClose:e})=>a.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 min-w-[280px]",style:{animation:"slideDown 0.3s ease"},children:[a.jsx(uw,{size:18})," ",a.jsx("span",{className:"flex-1 text-sm font-medium",children:t}),a.jsx("button",{onClick:e,children:a.jsx(Ai,{size:16})})]}),ur=({open:t,onClose:e,title:n,children:r})=>t?a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4",onClick:e,children:[a.jsx("div",{className:"fixed inset-0 bg-overlay backdrop-blur-sm"}),a.jsxs("div",{className:"relative bg-card-solid rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-2xl border border-modal-themed",style:{animation:"slideUp 0.3s ease"},onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-modal-themed",children:[a.jsx("h2",{className:"text-lg font-bold text-heading",children:n}),a.jsx("button",{onClick:e,className:"p-1 rounded-lg bg-hover text-muted",children:a.jsx(Ai,{size:20})})]}),a.jsx("div",{className:"p-4",children:r})]})]}):null,Vn=({open:t,onClose:e,onConfirm:n,message:r,t:s})=>t?a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[a.jsx("div",{className:"fixed inset-0 bg-overlay backdrop-blur-sm",onClick:e}),a.jsxs("div",{className:"relative bg-card-solid rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-modal-themed",children:[a.jsxs("div",{className:"flex items-start gap-3 mb-6",children:[a.jsx(ty,{className:"text-amber-400 shrink-0 mt-0.5",size:22}),a.jsx("p",{className:"text-body",children:r})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:e,className:"flex-1 py-2.5 rounded-xl bg-btn-sec font-medium transition-colors",children:s("cancel")}),a.jsx("button",{onClick:n,className:"flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 transition-colors",children:s("confirm")})]})]})]}):null,kl=({children:t,color:e="#64748b",className:n=""})=>a.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${n}`,style:{backgroundColor:e+"22",color:e},children:t}),et=({label:t,error:e,...n})=>a.jsxs("div",{className:"space-y-1",children:[t&&a.jsx("label",{className:"text-sm font-medium text-body",children:t}),a.jsx("input",{...n,className:`w-full px-3 py-2.5 rounded-xl bg-input text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${e?"border-red-500":""} border`}),e&&a.jsx("p",{className:"text-xs text-red-400",children:e})]}),se=({children:t,variant:e="primary",className:n="",...r})=>{const s="px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50",i={primary:"bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25",secondary:"bg-btn-sec",danger:"bg-red-600 text-white hover:bg-red-500",ghost:"text-muted hover:text-heading bg-hover"};return a.jsx("button",{className:`${s} ${i[e]} ${n}`,...r,children:t})},Yi=({icon:t,message:e})=>a.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-faint",children:[a.jsx(t,{size:48,className:"mb-3 opacity-50"}),a.jsx("p",{className:"text-sm",children:e})]}),bw=({assets:t,checkouts:e,categories:n,teams:r,onReturn:s,t:i,lang:o,workshopName:l,canWrite:c})=>{const u=qi(),f=e.filter(p=>!p.returnedDate),h=f.filter(p=>new Date(p.dueDate)<u),d=f.filter(p=>{const g=us(p.dueDate,u);return g>=0&&g<=2}),y=t.reduce((p,g)=>p+g.totalQuantity,0),_=f.reduce((p,g)=>p+g.quantity,0),v={};f.forEach(p=>{var g;v[p.teamId]||(v[p.teamId]={name:p.teamName,color:((g=r.find(x=>x.id===p.teamId))==null?void 0:g.color)||"#64748b",items:[]}),v[p.teamId].items.push(p)});const D=({label:p,value:g,color:x})=>a.jsxs("div",{className:"bg-card backdrop-blur rounded-2xl p-4 border",children:[a.jsx("p",{className:"text-xs font-medium text-muted uppercase tracking-wide",children:p}),a.jsx("p",{className:"text-2xl font-bold mt-1",style:{color:x},children:g})]}),m=({co:p,showTeam:g=!0,highlight:x})=>{const N=us(p.dueDate,u),I=r.find(T=>T.id===p.teamId);return a.jsxs("div",{className:`bg-card-alt rounded-xl p-3 border flex items-center gap-3 ${x==="red"?"border-red-500/50 !bg-red-950/20":x==="amber"?"border-amber-500/50 !bg-amber-950/20":""}`,children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"font-semibold text-sm text-heading truncate",children:p.assetName}),a.jsxs("p",{className:"text-xs text-muted mt-0.5",children:[p.memberName,g&&I&&a.jsxs("span",{children:[" · ",a.jsx("span",{style:{color:I.color},children:p.teamName})]})]}),a.jsxs("p",{className:`text-xs mt-1 font-medium ${N<0?"text-red-400":N<=2?"text-amber-400":"text-muted"}`,children:[N<0?`${Math.abs(N)} ${i("daysOverdue")}`:`${N} ${i("daysRemaining")}`," · qty: ",p.quantity]})]}),a.jsxs("button",{onClick:()=>s(p),disabled:!c,className:`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${c?"bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30":"bg-card-alt text-faint cursor-not-allowed"}`,children:[a.jsx(si,{size:14,className:"inline mr-1"}),i("markReturned")]})]})};return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex items-baseline gap-3",children:[a.jsx("h1",{className:"text-2xl font-bold text-heading",children:i("dashboard")}),l&&a.jsxs("span",{className:"text-sm text-muted font-medium",children:["— ",l]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx(D,{label:i("totalAssets"),value:y,color:"#60a5fa"}),a.jsx(D,{label:i("checkedOut"),value:_,color:"#f59e0b"}),a.jsx(D,{label:i("available"),value:y-_,color:"#34d399"}),a.jsx(D,{label:i("overdue"),value:h.length,color:"#f87171"})]}),h.length>0&&a.jsxs("section",{children:[a.jsxs("h2",{className:"text-sm font-bold text-red-400 uppercase tracking-wide mb-3 flex items-center gap-2",children:[a.jsx(ty,{size:16}),i("overdueItems")]}),a.jsx("div",{className:"space-y-2",children:h.map(p=>a.jsx(m,{co:p,highlight:"red"},p.id))})]}),d.length>0&&a.jsxs("section",{children:[a.jsxs("h2",{className:"text-sm font-bold text-amber-400 uppercase tracking-wide mb-3 flex items-center gap-2",children:[a.jsx(xd,{size:16}),i("dueSoon")]}),a.jsx("div",{className:"space-y-2",children:d.map(p=>a.jsx(m,{co:p,highlight:"amber"},p.id))})]}),a.jsxs("section",{children:[a.jsx("h2",{className:"text-sm font-bold text-body uppercase tracking-wide mb-3",children:i("currentlyOut")}),f.length===0?a.jsx(Yi,{icon:Ri,message:i("noCheckouts")}):Object.entries(v).map(([p,g])=>a.jsxs("div",{className:"mb-4",children:[a.jsx("p",{className:"text-xs font-bold uppercase tracking-wider mb-2",style:{color:g.color},children:g.name}),a.jsx("div",{className:"space-y-2",children:g.items.map(x=>a.jsx(m,{co:x,showTeam:!1},x.id))})]},p))]})]})},Rw=(t,e=400)=>new Promise(n=>{const r=new FileReader;r.onload=s=>{const i=new Image;i.onload=()=>{const o=document.createElement("canvas");let l=i.width,c=i.height;l>c?l>e&&(c=c*e/l,l=e):c>e&&(l=l*e/c,c=e),o.width=l,o.height=c,o.getContext("2d").drawImage(i,0,0,l,c),n(o.toDataURL("image/jpeg",.7))},i.src=s.target.result},r.readAsDataURL(t)}),Aw=({assets:t,categories:e,checkouts:n,setAssets:r,setCategories:s,setCheckouts:i,showToast:o,t:l,activeWorkshopId:c,canWrite:u})=>{const[f,h]=E.useState(""),[d,y]=E.useState(null),[_,v]=E.useState(!1),[D,m]=E.useState(null),[p,g]=E.useState(!1),[x,N]=E.useState(null),[I,T]=E.useState(null),[A,L]=E.useState({name:"",category:"",description:"",totalQuantity:1,photo:null}),[M,K]=E.useState({}),C=E.useRef(null),w=n.filter(k=>!k.returnedDate),S=k=>k.totalQuantity-w.filter(U=>U.assetId===k.id).reduce((U,le)=>U+le.quantity,0),z=t.filter(k=>{var U;return k.name.toLowerCase().includes(f.toLowerCase())||((U=e.find(le=>le.id===k.category))==null?void 0:U.name.toLowerCase().includes(f.toLowerCase()))}),B=()=>{var k;L({name:"",category:((k=e[0])==null?void 0:k.id)||"",description:"",totalQuantity:1,photo:null}),K({}),m(null),v(!0)},Z=k=>{L({name:k.name,category:k.category,description:k.description||"",totalQuantity:k.totalQuantity,photo:k.photo||null}),K({}),m(k),v(!0)},R=()=>{const k={};return A.name.trim()||(k.name=l("required")),A.category||(k.category=l("required")),A.totalQuantity<1&&(k.totalQuantity=l("required")),K(k),!Object.keys(k).length},H=()=>{if(R()){if(D){const k={...D,...A};r(U=>U.map(le=>le.id===D.id?k:le)),y(k),D.name!==A.name.trim()&&i(U=>U.map(le=>le.assetId===D.id?{...le,assetName:A.name.trim()}:le)),o(l("assetUpdated"))}else r(k=>[...k,{id:ht(),...A,workshopId:c,createdAt:new Date().toISOString()}]),o(l("assetAdded"));v(!1)}},F=k=>{r(U=>U.filter(le=>le.id!==k)),o(l("assetDeleted")),T(null),y(null)},Y=async k=>{var le;const U=(le=k.target.files)==null?void 0:le[0];if(U)try{const Ze=await Rw(U);L(Xn=>({...Xn,photo:Ze}))}catch{o("Photo error")}},[ne,Ue]=E.useState({name:"",color:"#3b82f6"}),j=()=>{ne.name.trim()&&(x!=null&&x.id?(s(k=>k.map(U=>U.id===x.id?{...U,...ne}:U)),o(l("categoryUpdated"))):(s(k=>[...k,{id:ht(),...ne,workshopId:c}]),o(l("categoryAdded"))),N(null))},ue=k=>{s(U=>U.filter(le=>le.id!==k)),o(l("categoryDeleted"))};if(d){const k=t.find(Q=>Q.id===d.id)||d,U=e.find(Q=>Q.id===k.category),le=n.filter(Q=>Q.assetId===k.id),Ze=le.filter(Q=>!Q.returnedDate),Xn=S(k);return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("button",{onClick:()=>y(null),className:"flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300",children:[a.jsx(xl,{size:18}),l("back")]}),a.jsxs("div",{className:"bg-card rounded-2xl p-5 border",children:[k.photo&&a.jsx("img",{src:k.photo,alt:k.name,className:"w-full h-48 object-cover rounded-xl mb-4"}),a.jsxs("div",{className:"flex items-start justify-between mb-3",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-heading",children:k.name}),U&&a.jsx(kl,{color:U.color,children:U.name})]}),a.jsx("div",{children:u&&a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:()=>Z(k),className:"p-2 rounded-lg bg-btn-sec",children:a.jsx(wl,{size:16})}),a.jsx("button",{onClick:()=>T(k.id),className:"p-2 rounded-lg bg-btn-sec text-red-400",children:a.jsx(en,{size:16})})]})})]}),k.description&&a.jsx("p",{className:"text-sm text-muted mb-3",children:k.description}),a.jsxs("div",{className:"flex gap-4 text-sm",children:[a.jsxs("span",{className:"text-muted",children:["Total: ",a.jsx("span",{className:"text-heading font-semibold",children:k.totalQuantity})]}),a.jsxs("span",{className:"text-emerald-400",children:[l("available"),": ",Xn]}),a.jsxs("span",{className:"text-amber-400",children:[l("checkedOut"),": ",k.totalQuantity-Xn]})]})]}),Ze.length>0&&a.jsxs("section",{children:[a.jsx("h3",{className:"text-sm font-bold text-body uppercase tracking-wide mb-2",children:l("currentCheckouts")}),a.jsx("div",{className:"space-y-2",children:Ze.map(Q=>{const ut=qi(),fn=us(Q.dueDate,ut);return a.jsxs("div",{className:"bg-card-alt rounded-xl p-3 border",children:[a.jsxs("p",{className:"text-sm font-medium text-heading",children:[Q.memberName," · ",a.jsx("span",{className:"text-muted",children:Q.teamName})]}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:["Qty: ",Q.quantity," · ",fn<0?a.jsxs("span",{className:"text-red-400",children:[Math.abs(fn)," ",l("daysOverdue")]}):a.jsxs("span",{children:[fn," ",l("daysRemaining")]})]})]},Q.id)})})]}),le.filter(Q=>Q.returnedDate).length>0&&a.jsxs("section",{children:[a.jsx("h3",{className:"text-sm font-bold text-body uppercase tracking-wide mb-2",children:l("history")}),a.jsx("div",{className:"space-y-2",children:le.filter(Q=>Q.returnedDate).map(Q=>a.jsxs("div",{className:"bg-card-alt rounded-xl p-3 border",children:[a.jsxs("p",{className:"text-sm text-heading",children:[Q.memberName," · ",Q.teamName]}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:["Qty: ",Q.quantity," · ",ii(Q.checkoutDate)," → ",ii(Q.returnedDate)]})]},Q.id))})]}),a.jsx(ur,{open:_,onClose:()=>v(!1),title:l(D?"editAsset":"addAsset"),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(et,{label:l("assetName"),value:A.name,onChange:Q=>L(ut=>({...ut,name:Q.target.value})),error:M.name}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:l("category")}),a.jsx("select",{value:A.category,onChange:Q=>L(ut=>({...ut,category:Q.target.value})),className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:e.map(Q=>a.jsx("option",{value:Q.id,children:Q.name},Q.id))}),M.category&&a.jsx("p",{className:"text-xs text-red-400",children:M.category})]}),a.jsx(et,{label:l("description"),value:A.description,onChange:Q=>L(ut=>({...ut,description:Q.target.value}))}),a.jsx(et,{label:l("quantity"),type:"number",min:"1",value:A.totalQuantity,onChange:Q=>L(ut=>({...ut,totalQuantity:parseInt(Q.target.value)||1})),error:M.totalQuantity}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:l("photo")}),A.photo?a.jsxs("div",{className:"relative inline-block",children:[a.jsx("img",{src:A.photo,alt:"",className:"w-24 h-24 rounded-xl object-cover"}),a.jsx("button",{onClick:()=>L(Q=>({...Q,photo:null})),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white",children:a.jsx(Ai,{size:12})})]}):a.jsxs("button",{onClick:()=>{var Q;return(Q=C.current)==null?void 0:Q.click()},className:"flex items-center gap-2 px-4 py-3 rounded-xl bg-card-alt border border-dashed text-sm text-muted hover:text-heading hover:border-blue-500/30 transition-colors w-full",children:[a.jsx(Nf,{size:18}),l("addPhoto")]}),a.jsx("input",{ref:C,type:"file",accept:"image/*",className:"hidden",onChange:Y})]}),a.jsxs("div",{className:"flex gap-3 pt-2",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>v(!1),children:l("cancel")}),a.jsx(se,{className:"flex-1",onClick:H,children:l("save")})]})]})}),a.jsx(Vn,{open:!!I,onClose:()=>T(null),onConfirm:()=>F(I),message:l("confirmDelete"),t:l})]})}return a.jsxs("div",{className:"space-y-4 pb-20",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h1",{className:"text-2xl font-bold text-heading",children:l("assets")}),u&&a.jsx("button",{onClick:()=>g(!0),className:"text-xs text-blue-400 hover:text-blue-300 font-medium",children:l("categoryMgmt")})]}),a.jsxs("div",{className:"relative",children:[a.jsx(iy,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-faint"}),a.jsx("input",{value:f,onChange:k=>h(k.target.value),placeholder:l("search"),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),z.length===0?a.jsx(Yi,{icon:Ri,message:l("noAssets")}):a.jsx("div",{className:"space-y-2",children:z.map(k=>{const U=e.find(Ze=>Ze.id===k.category),le=S(k);return a.jsxs("button",{onClick:()=>y(k),className:"w-full text-left bg-card-alt rounded-xl p-3.5 border hover:border-blue-500/30 transition-colors flex items-center gap-3",children:[k.photo?a.jsx("img",{src:k.photo,alt:"",className:"w-10 h-10 rounded-xl object-cover shrink-0"}):a.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0",style:{backgroundColor:((U==null?void 0:U.color)||"#64748b")+"22"},children:a.jsx(Ri,{size:20,style:{color:(U==null?void 0:U.color)||"#64748b"}})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-sm font-semibold text-heading truncate",children:k.name}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[U&&a.jsx(kl,{color:U.color,children:U.name}),a.jsxs("span",{className:"text-xs text-emerald-400",children:[le," ",l("availableQty")]}),k.totalQuantity-le>0&&a.jsxs("span",{className:"text-xs text-amber-400",children:[k.totalQuantity-le," ",l("checkedOutQty")]})]})]}),a.jsx(ny,{size:18,className:"text-faint shrink-0"})]},k.id)})}),u&&a.jsx("button",{onClick:B,className:"fixed bottom-20 right-4 w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:bg-blue-500 transition-colors z-30",children:a.jsx(jn,{size:24})}),a.jsx(ur,{open:_,onClose:()=>v(!1),title:l(D?"editAsset":"addAsset"),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(et,{label:l("assetName"),value:A.name,onChange:k=>L(U=>({...U,name:k.target.value})),error:M.name}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:l("category")}),a.jsx("select",{value:A.category,onChange:k=>L(U=>({...U,category:k.target.value})),className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:e.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))}),M.category&&a.jsx("p",{className:"text-xs text-red-400",children:M.category})]}),a.jsx(et,{label:l("description"),value:A.description,onChange:k=>L(U=>({...U,description:k.target.value}))}),a.jsx(et,{label:l("quantity"),type:"number",min:"1",value:A.totalQuantity,onChange:k=>L(U=>({...U,totalQuantity:parseInt(k.target.value)||1})),error:M.totalQuantity}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:l("photo")}),A.photo?a.jsxs("div",{className:"relative inline-block",children:[a.jsx("img",{src:A.photo,alt:"",className:"w-24 h-24 rounded-xl object-cover"}),a.jsx("button",{onClick:()=>L(k=>({...k,photo:null})),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white",children:a.jsx(Ai,{size:12})})]}):a.jsxs("button",{onClick:()=>{var k;return(k=C.current)==null?void 0:k.click()},className:"flex items-center gap-2 px-4 py-3 rounded-xl bg-card-alt border border-dashed text-sm text-muted hover:text-heading hover:border-blue-500/30 transition-colors w-full",children:[a.jsx(Nf,{size:18}),l("addPhoto")]}),a.jsx("input",{ref:C,type:"file",accept:"image/*",className:"hidden",onChange:Y})]}),a.jsxs("div",{className:"flex gap-3 pt-2",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>v(!1),children:l("cancel")}),a.jsx(se,{className:"flex-1",onClick:H,children:l("save")})]})]})}),a.jsx(ur,{open:p,onClose:()=>{g(!1),N(null)},title:l("categoryMgmt"),children:a.jsxs("div",{className:"space-y-3",children:[e.map(k=>a.jsxs("div",{className:"flex items-center gap-3 bg-card-alt rounded-xl p-3 border",children:[a.jsx("div",{className:"w-4 h-4 rounded-full shrink-0",style:{backgroundColor:k.color}}),a.jsx("span",{className:"flex-1 text-sm text-heading font-medium",children:k.name}),a.jsx("button",{onClick:()=>{N(k),Ue({name:k.name,color:k.color})},className:"p-1 text-muted hover:text-heading",children:a.jsx(wl,{size:14})}),a.jsx("button",{onClick:()=>ue(k.id),className:"p-1 text-muted hover:text-red-400",children:a.jsx(en,{size:14})})]},k.id)),x!==null?a.jsxs("div",{className:"space-y-3 pt-2 border-t border-themed",children:[a.jsx(et,{label:l("categoryName"),value:ne.name,onChange:k=>Ue(U=>({...U,name:k.target.value}))}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:l("color")}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:oi.map(k=>a.jsx("button",{onClick:()=>Ue(U=>({...U,color:k})),className:`w-8 h-8 rounded-full border-2 transition-transform ${ne.color===k?"border-blue-400 scale-110":"border-transparent"}`,style:{backgroundColor:k}},k))})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>N(null),children:l("cancel")}),a.jsx(se,{className:"flex-1",onClick:j,children:l("save")})]})]}):a.jsxs(se,{variant:"secondary",className:"w-full",onClick:()=>{N({}),Ue({name:"",color:"#3b82f6"})},children:[a.jsx(jn,{size:16}),l("addCategory")]})]})}),a.jsx(Vn,{open:!!I,onClose:()=>T(null),onConfirm:()=>F(I),message:l("confirmDelete"),t:l})]})},Pw=({assets:t,teams:e,checkouts:n,setCheckouts:r,categories:s,showToast:i,t:o,activeWorkshopId:l,canWrite:c})=>{const[u,f]=E.useState("menu"),[h,d]=E.useState(1),[y,_]=E.useState(null),[v,D]=E.useState(null),[m,p]=E.useState(null),[g,x]=E.useState(1),[N,I]=E.useState(3),[T,A]=E.useState(""),[L,M]=E.useState(!1),[K,C]=E.useState(""),[w,S]=E.useState(""),[z,B]=E.useState(null),Z=n.filter(j=>!j.returnedDate),R=j=>j.totalQuantity-Z.filter(ue=>ue.assetId===j.id).reduce((ue,k)=>ue+k.quantity,0),H=t.filter(j=>j.name.toLowerCase().includes(w.toLowerCase())&&R(j)>0),F=()=>{d(1),_(null),D(null),p(null),x(1),I(3),A(""),M(!1),C(""),S(""),f("menu")},Y=()=>{const j=L?parseInt(T)||1:N,ue=new Date,k={id:ht(),assetId:y.id,assetName:y.name,teamId:v.id,teamName:v.name,memberId:m.id,memberName:m.name,quantity:g,checkoutDate:ue.toISOString(),dueDateDays:j,dueDate:Nw(ue,j).toISOString(),returnedDate:null,status:"active",notes:K,workshopId:l};r(U=>[...U,k]),i(o("checkoutSuccess")),F()},ne=j=>{r(ue=>ue.map(k=>k.id===j.id?{...k,returnedDate:new Date().toISOString(),status:"returned"}:k)),i(o("returnSuccess")),B(null),f("menu")},Ue=[1,2,3,5,7,14];return u==="menu"?a.jsxs("div",{className:"space-y-4",children:[a.jsx("h1",{className:"text-2xl font-bold text-heading",children:o("checkout")}),a.jsx("button",{onClick:()=>{if(!c){i(o("offlineReadOnly"));return}f("new")},className:`w-full rounded-2xl p-5 text-left transition-all shadow-lg ${c?"bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-blue-600/20":"bg-card border text-faint cursor-not-allowed shadow-none"}`,children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${c?"bg-white/20":"bg-card-alt"}`,children:a.jsx(ry,{size:24})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-lg",children:o("newCheckout")}),a.jsx("p",{className:`text-sm mt-0.5 ${c?"text-blue-200":"text-faint"}`,children:o(c?"selectAsset":"offlineReadOnly")})]})]})}),a.jsx("button",{onClick:()=>{if(!c){i(o("offlineReadOnly"));return}f("return")},className:`w-full rounded-2xl p-5 text-left transition-all shadow-lg ${c?"bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-600/20":"bg-card border text-faint cursor-not-allowed shadow-none"}`,children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${c?"bg-white/20":"bg-card-alt"}`,children:a.jsx(si,{size:24})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-lg",children:o("returnAsset")}),a.jsx("p",{className:`text-sm mt-0.5 ${c?"text-emerald-200":"text-faint"}`,children:o(c?"selectCheckout":"offlineReadOnly")})]})]})})]}):u==="return"?a.jsxs("div",{className:"space-y-4",children:[a.jsxs("button",{onClick:F,className:"flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300",children:[a.jsx(xl,{size:18}),o("back")]}),a.jsx("h2",{className:"text-xl font-bold text-heading",children:o("returnAsset")}),Z.length===0?a.jsx(Yi,{icon:si,message:o("noCheckouts")}):a.jsx("div",{className:"space-y-2",children:Z.map(j=>{const ue=qi(),k=us(j.dueDate,ue),U=e.find(le=>le.id===j.teamId);return a.jsx("button",{onClick:()=>B(j),className:"w-full text-left bg-card-alt rounded-xl p-3.5 border hover:border-blue-500/30 transition-colors",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"flex-1",children:[a.jsxs("p",{className:"text-sm font-semibold text-heading",children:[j.assetName," ",a.jsxs("span",{className:"text-muted",children:["×",j.quantity]})]}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:[j.memberName," · ",a.jsx("span",{style:{color:U==null?void 0:U.color},children:j.teamName})]}),a.jsx("p",{className:`text-xs mt-1 ${k<0?"text-red-400":"text-muted"}`,children:k<0?`${Math.abs(k)} ${o("daysOverdue")}`:`${k} ${o("daysRemaining")}`})]}),a.jsx(si,{size:18,className:"text-emerald-400 shrink-0"})]})},j.id)})}),a.jsx(Vn,{open:!!z,onClose:()=>B(null),onConfirm:()=>ne(z),message:o("confirmReturn"),t:o})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsxs("button",{onClick:F,className:"flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300",children:[a.jsx(xl,{size:18}),o("back")]}),a.jsx("div",{className:"flex items-center gap-2 mb-2",children:[1,2,3,4].map(j=>a.jsx("div",{className:`h-1.5 flex-1 rounded-full transition-colors ${j<=h?"bg-blue-500":"bg-card"}`},j))}),a.jsxs("p",{className:"text-xs text-muted font-medium",children:[o("step")," ",h," ",o("of")," 4"]}),h===1&&a.jsxs("div",{className:"space-y-3",children:[a.jsx("h2",{className:"text-xl font-bold text-heading",children:o("selectAsset")}),a.jsxs("div",{className:"relative",children:[a.jsx(iy,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-faint"}),a.jsx("input",{value:w,onChange:j=>S(j.target.value),placeholder:o("search"),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),a.jsx("div",{className:"space-y-2",children:H.map(j=>{const ue=s.find(U=>U.id===j.category),k=R(j);return a.jsxs("button",{onClick:()=>{_(j),d(2)},className:`w-full text-left rounded-xl p-3.5 border transition-colors ${(y==null?void 0:y.id)===j.id?"bg-blue-600/20 border-blue-500":"bg-card-alt hover:border-blue-500/30"}`,children:[a.jsx("p",{className:"text-sm font-semibold text-heading",children:j.name}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[ue&&a.jsx(kl,{color:ue.color,children:ue.name}),a.jsxs("span",{className:"text-xs text-emerald-400",children:[k," ",o("availableQty")]})]})]},j.id)})})]}),h===2&&a.jsxs("div",{className:"space-y-3",children:[a.jsx("h2",{className:"text-xl font-bold text-heading",children:o("selectTeam")}),a.jsx("div",{className:"space-y-2",children:e.map(j=>a.jsxs("div",{children:[a.jsx("button",{onClick:()=>{D(j),p(null)},className:`w-full text-left rounded-xl p-3.5 border transition-colors ${(v==null?void 0:v.id)===j.id?"bg-blue-600/20 border-blue-500":"bg-card-alt hover:border-blue-500/30"}`,children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:j.color}}),a.jsx("span",{className:"font-semibold text-sm text-heading",children:j.name})]})}),(v==null?void 0:v.id)===j.id&&a.jsx("div",{className:"ml-4 mt-2 space-y-1",children:j.members.map(ue=>a.jsx("button",{onClick:()=>{p(ue),d(3)},className:`w-full text-left rounded-lg p-2.5 text-sm transition-colors ${(m==null?void 0:m.id)===ue.id?"bg-blue-600/20 text-blue-300":"bg-card-alt hover:bg-card"}`,children:ue.name},ue.id))})]},j.id))})]}),h===3&&a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-xl font-bold text-heading",children:[o("checkoutQty")," & ",o("duration")]}),a.jsx(et,{label:o("checkoutQty"),type:"number",min:"1",max:R(y),value:g,onChange:j=>x(Math.min(parseInt(j.target.value)||1,R(y)))}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:o("duration")}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:Ue.map(j=>a.jsxs("button",{onClick:()=>{I(j),M(!1)},className:`py-2.5 rounded-xl text-sm font-medium transition-colors ${!L&&N===j?"bg-blue-600 text-white":"bg-card-alt text-body hover:bg-card"}`,children:[j," ",o(j===1?"day":"days")]},j))}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>M(!0),className:`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${L?"bg-blue-600 text-white":"bg-card-alt text-body hover:bg-card"}`,children:o("custom")}),L&&a.jsx("input",{type:"number",min:"1",value:T,onChange:j=>A(j.target.value),placeholder:o("days"),className:"flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:o("notes")}),a.jsx("textarea",{value:K,onChange:j=>C(j.target.value),rows:2,className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"})]}),a.jsx(se,{className:"w-full",onClick:()=>d(4),children:o("next")})]}),h===4&&a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-xl font-bold text-heading",children:o("confirm")}),a.jsxs("div",{className:"bg-card rounded-2xl p-4 border space-y-3",children:[a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("assets")}),a.jsx("span",{className:"text-heading font-medium",children:y==null?void 0:y.name})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("teams")}),a.jsx("span",{className:"font-medium",style:{color:v==null?void 0:v.color},children:v==null?void 0:v.name})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("selectMember")}),a.jsx("span",{className:"text-heading font-medium",children:m==null?void 0:m.name})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("checkoutQty")}),a.jsx("span",{className:"text-heading font-medium",children:g})]}),a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("duration")}),a.jsxs("span",{className:"text-heading font-medium",children:[L?T:N," ",o("days")]})]}),K&&a.jsxs("div",{className:"flex justify-between text-sm",children:[a.jsx("span",{className:"text-muted",children:o("notes")}),a.jsx("span",{className:"text-heading font-medium text-right max-w-[60%]",children:K})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>d(3),children:o("back")}),a.jsx(se,{className:"flex-1",onClick:Y,children:o("submitCheckout")})]})]})]})},Dw=({teams:t,setTeams:e,checkouts:n,setCheckouts:r,showToast:s,t:i,canWrite:o})=>{const[l,c]=E.useState(null),[u,f]=E.useState(""),[h,d]=E.useState(!1),[y,_]=E.useState(""),[v,D]=E.useState(null),[m,p]=E.useState(!1),[g,x]=E.useState({name:"",color:"#3b82f6"}),[N,I]=E.useState(null),T=n.filter(S=>!S.returnedDate),A=S=>T.filter(z=>z.teamId===S),L=S=>{if(!u.trim())return;const z=u.trim();e(B=>B.map(Z=>Z.id===S.id?{...Z,name:z}:Z)),r(B=>B.map(Z=>Z.teamId===S.id?{...Z,teamName:z}:Z)),s(i("teamRenamed")),d(!1)},M=S=>{y.trim()&&(e(z=>z.map(B=>B.id===S.id?{...B,members:[...B.members,{id:ht(),name:y.trim()}]}:B)),s(i("memberAdded")),_(""))},K=(S,z)=>{e(B=>B.map(Z=>Z.id===S.id?{...Z,members:Z.members.filter(R=>R.id!==z)}:Z)),s(i("memberRemoved")),D(null)},C=()=>{g.name.trim()&&(e(S=>[...S,{id:ht(),name:g.name.trim(),color:g.color,members:[]}]),s(i("teamAdded")),p(!1),x({name:"",color:"#3b82f6"}))},w=S=>{if(A(S).length>0){s(i("teamHasActiveCheckouts")),I(null);return}e(z=>z.filter(B=>B.id!==S)),s(i("teamDeleted")),I(null),c(null)};if(l){const S=t.find(B=>B.id===l.id)||l,z=A(S.id);return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("button",{onClick:()=>{c(null),d(!1)},className:"flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300",children:[a.jsx(xl,{size:18}),i("back")]}),a.jsxs("div",{className:"bg-card rounded-2xl p-5 border",children:[h?a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:u,onChange:B=>f(B.target.value),className:"flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{onClick:()=>L(S),children:a.jsx(dw,{size:16})}),a.jsx(se,{variant:"ghost",onClick:()=>d(!1),children:a.jsx(Ai,{size:16})})]}):a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-4 h-4 rounded-full",style:{backgroundColor:S.color}}),a.jsx("h2",{className:"text-xl font-bold text-heading flex-1",children:S.name}),o&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{f(S.name),d(!0)},className:"p-2 rounded-lg bg-btn-sec",children:a.jsx(wl,{size:16})}),a.jsx("button",{onClick:()=>I(S.id),className:"p-2 rounded-lg bg-btn-sec text-red-400",children:a.jsx(en,{size:16})})]})]}),a.jsxs("div",{className:"flex gap-4 mt-3 text-sm",children:[a.jsxs("span",{className:"text-muted",children:[S.members.length," ",i("members")]}),a.jsxs("span",{className:"text-amber-400",children:[z.length," ",i("checkedOut")]})]})]}),a.jsxs("section",{children:[a.jsx("h3",{className:"text-sm font-bold text-body uppercase tracking-wide mb-2",children:i("members")}),S.members.length===0?a.jsx("p",{className:"text-sm text-faint",children:i("noMembers")}):a.jsx("div",{className:"space-y-2",children:S.members.map(B=>a.jsxs("div",{className:"flex items-center gap-3 bg-card-alt rounded-xl p-3 border",children:[a.jsx(Vo,{size:16,className:"text-faint"}),a.jsx("span",{className:"flex-1 text-sm text-heading",children:B.name}),o&&a.jsx("button",{onClick:()=>D(B.id),className:"p-1 text-muted hover:text-red-400",children:a.jsx(en,{size:14})})]},B.id))}),o&&a.jsxs("div",{className:"flex gap-2 mt-3",children:[a.jsx("input",{value:y,onChange:B=>_(B.target.value),placeholder:i("memberName"),onKeyDown:B=>B.key==="Enter"&&M(S),className:"flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{onClick:()=>M(S),children:a.jsx(jn,{size:16})})]})]}),z.length>0&&a.jsxs("section",{children:[a.jsx("h3",{className:"text-sm font-bold text-body uppercase tracking-wide mb-2",children:i("currentCheckouts")}),a.jsx("div",{className:"space-y-2",children:z.map(B=>{const Z=us(B.dueDate,qi());return a.jsxs("div",{className:"bg-card-alt rounded-xl p-3 border",children:[a.jsxs("p",{className:"text-sm font-medium text-heading",children:[B.assetName," ×",B.quantity]}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:[B.memberName," · ",Z<0?a.jsxs("span",{className:"text-red-400",children:[Math.abs(Z)," ",i("daysOverdue")]}):a.jsxs("span",{children:[Z," ",i("daysRemaining")]})]})]},B.id)})})]}),a.jsx(Vn,{open:!!v,onClose:()=>D(null),onConfirm:()=>K(S,v),message:i("confirmDelete"),t:i}),a.jsx(Vn,{open:!!N,onClose:()=>I(null),onConfirm:()=>w(N),message:i("confirmDelete"),t:i})]})}return a.jsxs("div",{className:"space-y-4 pb-20",children:[a.jsx("h1",{className:"text-2xl font-bold text-heading",children:i("teams")}),t.length===0?a.jsx(Yi,{icon:Vo,message:i("noTeams")}):a.jsx("div",{className:"space-y-3",children:t.map(S=>{const z=A(S.id).length;return a.jsx("button",{onClick:()=>c(S),className:"w-full text-left bg-card-alt rounded-2xl p-4 border hover:border-blue-500/30 transition-colors",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center",style:{backgroundColor:S.color+"22"},children:a.jsx(Vo,{size:22,style:{color:S.color}})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"font-bold text-heading",children:S.name}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:[S.members.length," ",i("members")," · ",z," ",i("checkedOutQty")]})]}),a.jsx(ny,{size:18,className:"text-faint"})]})},S.id)})}),o&&a.jsx("button",{onClick:()=>p(!0),className:"fixed bottom-20 right-4 w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:bg-blue-500 transition-colors z-30",children:a.jsx(jn,{size:24})}),a.jsx(ur,{open:m,onClose:()=>p(!1),title:i("addTeam"),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(et,{label:i("teamName"),value:g.name,onChange:S=>x(z=>({...z,name:S.target.value}))}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:i("teamColor")}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:oi.map(S=>a.jsx("button",{onClick:()=>x(z=>({...z,color:S})),className:`w-8 h-8 rounded-full border-2 transition-transform ${g.color===S?"border-blue-400 scale-110":"border-transparent"}`,style:{backgroundColor:S}},S))})]}),a.jsxs("div",{className:"flex gap-3 pt-2",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>p(!1),children:i("cancel")}),a.jsx(se,{className:"flex-1",onClick:C,children:i("save")})]})]})})]})},jw=({checkouts:t,teams:e,t:n,lang:r,workshopName:s})=>{const[i,o]=E.useState("all"),[l,c]=E.useState("all"),u=qi(),h=E.useMemo(()=>t.map(d=>{const y=!d.returnedDate&&new Date(d.dueDate)<u,_=d.returnedDate&&new Date(d.returnedDate)>new Date(d.dueDate);return{...d,computedStatus:d.returnedDate?"returned":y?"overdue":"active",wasLate:_}}).sort((d,y)=>new Date(y.checkoutDate)-new Date(d.checkoutDate)),[t]).filter(d=>!(i!=="all"&&d.teamId!==i||l!=="all"&&d.computedStatus!==l));return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-baseline gap-3",children:[a.jsx("h1",{className:"text-2xl font-bold text-heading",children:n("history")}),s&&a.jsxs("span",{className:"text-sm text-muted font-medium",children:["— ",s]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:i,onChange:d=>o(d.target.value),className:"flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"all",children:n("filterByTeam")}),e.map(d=>a.jsx("option",{value:d.id,children:d.name},d.id))]}),a.jsxs("select",{value:l,onChange:d=>c(d.target.value),className:"flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("option",{value:"all",children:n("filterByStatus")}),a.jsx("option",{value:"active",children:n("active")}),a.jsx("option",{value:"returned",children:n("returned")}),a.jsx("option",{value:"overdue",children:n("overdue")})]})]}),h.length===0?a.jsx(Yi,{icon:xd,message:n("noHistory")}):a.jsx("div",{className:"space-y-2",children:h.map(d=>{const y=e.find(v=>v.id===d.teamId),_=us(d.returnedDate||u,d.checkoutDate);return a.jsxs("div",{className:`bg-card-alt rounded-xl p-3.5 border ${d.computedStatus==="overdue"?"border-red-500/40 !bg-red-950/10":""}`,children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("div",{children:[a.jsxs("p",{className:"text-sm font-semibold text-heading",children:[d.assetName," ",a.jsxs("span",{className:"text-muted",children:["×",d.quantity]})]}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:[d.memberName," · ",a.jsx("span",{style:{color:y==null?void 0:y.color},children:d.teamName})]})]}),a.jsx(kl,{color:d.computedStatus==="returned"?d.wasLate?"#f59e0b":"#22c55e":d.computedStatus==="overdue"?"#ef4444":"#3b82f6",children:d.computedStatus==="returned"?d.wasLate?n("late"):n("onTime"):d.computedStatus==="overdue"?n("overdue"):n("active")})]}),a.jsxs("div",{className:"flex gap-3 mt-2 text-xs text-muted",children:[a.jsxs("span",{children:[n("checkoutDate"),": ",ii(d.checkoutDate,r)]}),a.jsxs("span",{children:[n("dueDate"),": ",ii(d.dueDate,r)]}),d.returnedDate&&a.jsxs("span",{children:[n("returnedDate"),": ",ii(d.returnedDate,r)]})]}),a.jsxs("p",{className:"text-xs text-faint mt-1",children:[_," ",n("days")]})]},d.id)})})]})},Ow=({onComplete:t,t:e})=>{var K;const[n,r]=E.useState(0),[s,i]=E.useState({name:"",color:"#3b82f6"}),[o,l]=E.useState([]),[c,u]=E.useState([]),[f,h]=E.useState({name:"",color:"#3b82f6"}),[d,y]=E.useState({}),[_,v]=E.useState({name:"",category:((K=Fs[0])==null?void 0:K.id)||"",totalQuantity:1}),D=()=>{if(!f.name.trim())return;const C={id:ht(),name:f.name.trim(),color:f.color,members:[]};l(w=>[...w,C]),h({name:"",color:oi[Math.floor(Math.random()*oi.length)]})},m=C=>l(w=>w.filter(S=>S.id!==C)),p=C=>{const w=(d[C]||"").trim();w&&(l(S=>S.map(z=>z.id===C?{...z,members:[...z.members,{id:ht(),name:w}]}:z)),y(S=>({...S,[C]:""})))},g=(C,w)=>{l(S=>S.map(z=>z.id===C?{...z,members:z.members.filter(B=>B.id!==w)}:z))},x=()=>{var C;_.name.trim()&&(u(w=>[...w,{id:ht(),name:_.name.trim(),category:_.category,description:"",totalQuantity:_.totalQuantity,createdAt:new Date().toISOString()}]),v({name:"",category:((C=Fs[0])==null?void 0:C.id)||"",totalQuantity:1}))},N=C=>u(w=>w.filter(S=>S.id!==C)),I=()=>{const C=s.name.trim()||e("defaultWorkshop"),w={id:ht(),name:C,color:s.color,createdAt:new Date().toISOString()};t({workshop:w,teams:o,assets:c,categories:Fs})},T=()=>{const C={id:ht(),name:e("defaultWorkshop"),color:"#3b82f6",createdAt:new Date().toISOString()};t({workshop:C,teams:[],assets:[],categories:Fs})},A=o.reduce((C,w)=>C+w.members.length,0),L=5;if(n===0)return a.jsx("div",{className:"min-h-screen bg-app flex items-center justify-center p-6",children:a.jsxs("div",{className:"max-w-md w-full text-center space-y-8",style:{animation:"fadeIn 0.5s ease"},children:[a.jsx("div",{className:"w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto",children:a.jsx(Tf,{size:40,className:"text-blue-400"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-heading mb-3",children:e("welcomeTitle")}),a.jsx("p",{className:"text-muted text-base",children:e("welcomeSubtitle")})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(se,{className:"w-full !py-3.5 !text-base",onClick:()=>r(1),children:e("getStarted")}),a.jsx("button",{onClick:T,className:"text-sm text-muted hover:text-heading transition-colors",children:e("skipSetup")})]})]})});if(n===1)return a.jsx("div",{className:"min-h-screen bg-app p-6 pb-24",children:a.jsxs("div",{className:"max-w-md mx-auto space-y-6",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx("div",{className:"flex items-center gap-2 mb-2",children:Array.from({length:L},(C,w)=>a.jsx("div",{className:`h-1.5 flex-1 rounded-full transition-colors ${w<1?"bg-blue-500":"bg-card"}`},w))}),a.jsx("div",{className:"w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center",children:a.jsx(mw,{size:32,className:"text-blue-400"})}),a.jsx("h2",{className:"text-2xl font-bold text-heading",children:e("workshopName")}),a.jsx("p",{className:"text-sm text-muted",children:e("welcomeSubtitle")}),a.jsxs("div",{className:"space-y-4",children:[a.jsx(et,{label:e("workshopName"),value:s.name,onChange:C=>i(w=>({...w,name:C.target.value})),placeholder:e("defaultWorkshop")}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:e("workshopColor")}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:Bo.map(C=>a.jsx("button",{onClick:()=>i(w=>({...w,color:C})),className:`w-8 h-8 rounded-full border-2 transition-transform ${s.color===C?"border-blue-400 scale-110":"border-transparent"}`,style:{backgroundColor:C}},C))})]})]}),a.jsxs("div",{className:"flex gap-3 pt-4",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>r(0),children:e("back")}),a.jsx(se,{className:"flex-1",onClick:()=>r(2),children:e("next")})]})]})});if(n===2)return a.jsx("div",{className:"min-h-screen bg-app p-6 pb-24",children:a.jsxs("div",{className:"max-w-md mx-auto space-y-6",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx("div",{className:"flex items-center gap-2 mb-2",children:Array.from({length:L},(C,w)=>a.jsx("div",{className:`h-1.5 flex-1 rounded-full transition-colors ${w<2?"bg-blue-500":"bg-card"}`},w))}),a.jsx("h2",{className:"text-2xl font-bold text-heading",children:e("setupTeams")}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(et,{label:e("teamName"),value:f.name,onChange:C=>h(w=>({...w,name:C.target.value})),onKeyDown:C=>C.key==="Enter"&&D()}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:e("teamColor")}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:oi.map(C=>a.jsx("button",{onClick:()=>h(w=>({...w,color:C})),className:`w-8 h-8 rounded-full border-2 transition-transform ${f.color===C?"border-blue-400 scale-110":"border-transparent"}`,style:{backgroundColor:C}},C))})]}),a.jsxs(se,{variant:"secondary",className:"w-full",onClick:D,children:[a.jsx(jn,{size:16}),e("addTeam")]})]}),o.length>0&&a.jsx("div",{className:"space-y-2",children:o.map(C=>a.jsxs("div",{className:"bg-card-alt rounded-xl p-3 border flex items-center gap-3",children:[a.jsx("div",{className:"w-4 h-4 rounded-full shrink-0",style:{backgroundColor:C.color}}),a.jsx("span",{className:"flex-1 text-sm text-heading font-medium",children:C.name}),a.jsx("button",{onClick:()=>m(C.id),className:"p-1 text-muted hover:text-red-400",children:a.jsx(en,{size:14})})]},C.id))}),a.jsxs("div",{className:"flex gap-3 pt-4",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>r(1),children:e("back")}),a.jsx(se,{className:"flex-1",onClick:()=>r(3),children:e("next")})]})]})});if(n===3)return a.jsx("div",{className:"min-h-screen bg-app p-6 pb-24",children:a.jsxs("div",{className:"max-w-md mx-auto space-y-6",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx("div",{className:"flex items-center gap-2 mb-2",children:Array.from({length:L},(C,w)=>a.jsx("div",{className:`h-1.5 flex-1 rounded-full transition-colors ${w<3?"bg-blue-500":"bg-card"}`},w))}),a.jsx("h2",{className:"text-2xl font-bold text-heading",children:e("setupPeople")}),o.length===0?a.jsx("p",{className:"text-muted text-sm",children:e("noTeamsYet")}):a.jsx("div",{className:"space-y-4",children:o.map(C=>a.jsxs("div",{className:"bg-card rounded-2xl p-4 border space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:C.color}}),a.jsx("span",{className:"font-semibold text-heading text-sm",children:C.name}),a.jsxs("span",{className:"text-xs text-muted",children:["(",C.members.length,")"]})]}),C.members.map(w=>a.jsxs("div",{className:"flex items-center gap-2 ml-5",children:[a.jsx("span",{className:"text-sm text-body flex-1",children:w.name}),a.jsx("button",{onClick:()=>g(C.id,w.id),className:"text-muted hover:text-red-400",children:a.jsx(en,{size:12})})]},w.id)),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:d[C.id]||"",onChange:w=>y(S=>({...S,[C.id]:w.target.value})),onKeyDown:w=>w.key==="Enter"&&p(C.id),placeholder:e("memberName"),className:"flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{onClick:()=>p(C.id),children:a.jsx(jn,{size:16})})]})]},C.id))}),a.jsxs("div",{className:"flex gap-3 pt-4",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>r(2),children:e("back")}),a.jsx(se,{className:"flex-1",onClick:()=>r(4),children:e("next")})]})]})});if(n===4)return a.jsx("div",{className:"min-h-screen bg-app p-6 pb-24",children:a.jsxs("div",{className:"max-w-md mx-auto space-y-6",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx("div",{className:"flex items-center gap-2 mb-2",children:Array.from({length:L},(C,w)=>a.jsx("div",{className:`h-1.5 flex-1 rounded-full transition-colors ${w<4?"bg-blue-500":"bg-card"}`},w))}),a.jsx("h2",{className:"text-2xl font-bold text-heading",children:e("setupItems")}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(et,{label:e("assetName"),value:_.name,onChange:C=>v(w=>({...w,name:C.target.value})),onKeyDown:C=>C.key==="Enter"&&x()}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:e("category")}),a.jsx("select",{value:_.category,onChange:C=>v(w=>({...w,category:C.target.value})),className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:Fs.map(C=>a.jsx("option",{value:C.id,children:C.name},C.id))})]}),a.jsx(et,{label:e("quantity"),type:"number",min:"1",value:_.totalQuantity,onChange:C=>v(w=>({...w,totalQuantity:parseInt(C.target.value)||1}))}),a.jsxs(se,{variant:"secondary",className:"w-full",onClick:x,children:[a.jsx(jn,{size:16}),e("addAsset")]})]}),c.length>0&&a.jsx("div",{className:"space-y-2",children:c.map(C=>a.jsxs("div",{className:"bg-card-alt rounded-xl p-3 border flex items-center gap-3",children:[a.jsx(Ri,{size:16,className:"text-muted shrink-0"}),a.jsxs("span",{className:"flex-1 text-sm text-heading font-medium",children:[C.name," ",a.jsxs("span",{className:"text-muted",children:["×",C.totalQuantity]})]}),a.jsx("button",{onClick:()=>N(C.id),className:"p-1 text-muted hover:text-red-400",children:a.jsx(en,{size:14})})]},C.id))}),a.jsxs("div",{className:"flex gap-3 pt-4",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>r(3),children:e("back")}),a.jsx(se,{className:"flex-1",onClick:()=>r(5),children:e("next")})]})]})});const M=s.name.trim()||e("defaultWorkshop");return a.jsx("div",{className:"min-h-screen bg-app flex items-center justify-center p-6",children:a.jsxs("div",{className:"max-w-md w-full text-center space-y-8",style:{animation:"fadeIn 0.5s ease"},children:[a.jsx("div",{className:"w-20 h-20 bg-emerald-600/20 rounded-3xl flex items-center justify-center mx-auto",children:a.jsx(Tf,{size:40,className:"text-emerald-400"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-3xl font-bold text-heading mb-3",children:e("setupDone")}),a.jsx("p",{className:"text-muted text-base mb-2",children:e("setupSummary")}),a.jsxs("p",{className:"text-sm font-medium",style:{color:s.color},children:[e("workshop"),": ",M]})]}),a.jsxs("div",{className:"flex justify-center gap-6 text-sm",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-2xl font-bold text-blue-400",children:o.length}),a.jsx("p",{className:"text-muted",children:e("teamsCount")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-2xl font-bold text-emerald-400",children:A}),a.jsx("p",{className:"text-muted",children:e("membersCount")})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-2xl font-bold text-amber-400",children:c.length}),a.jsx("p",{className:"text-muted",children:e("itemsCount")})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(se,{className:"w-full !py-3.5 !text-base",onClick:I,children:e("letsGo")}),a.jsx("button",{onClick:()=>r(4),className:"text-sm text-muted hover:text-heading transition-colors",children:e("back")})]})]})})},Mw=({workshops:t,activeWorkshopId:e,setActiveWorkshopId:n,setWorkshops:r,checkouts:s,setAssets:i,setCategories:o,setCheckouts:l,showToast:c,t:u,canWrite:f})=>{const[h,d]=E.useState(!1),[y,_]=E.useState(!1),[v,D]=E.useState(null),[m,p]=E.useState({name:"",color:"#3b82f6"}),[g,x]=E.useState(null),N=E.useRef(null),I=t.find(w=>w.id===e),T=w=>s.filter(S=>!S.returnedDate&&S.workshopId===w);E.useEffect(()=>{if(!h)return;const w=S=>{N.current&&!N.current.contains(S.target)&&d(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[h]);const A=()=>{p({name:"",color:Bo[t.length%Bo.length]}),D(null),_(!0),d(!1)},L=w=>{p({name:w.name,color:w.color}),D(w),_(!0),d(!1)},M=()=>{if(m.name.trim()){if(v)r(w=>w.map(S=>S.id===v.id?{...S,name:m.name.trim(),color:m.color}:S)),c(u("workshopUpdated"));else{const w={id:ht(),name:m.name.trim(),color:m.color,createdAt:new Date().toISOString()};r(S=>[...S,w]),n(w.id),c(u("workshopAdded"))}_(!1)}},K=w=>{if(T(w).length>0){c(u("workshopHasActiveCheckouts")),x(null);return}if(i(S=>S.filter(z=>z.workshopId!==w)),o(S=>S.filter(z=>z.workshopId!==w)),l(S=>S.filter(z=>z.workshopId!==w)),r(S=>S.filter(z=>z.id!==w)),e===w){const S=t.filter(z=>z.id!==w);n(S.length>0?S[0].id:null)}c(u("workshopDeleted")),x(null)},C=w=>{n(w),d(!1)};return a.jsxs("div",{className:"max-w-lg mx-auto px-4 pt-3",ref:N,children:[a.jsxs("button",{onClick:()=>d(w=>!w),className:"flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border text-sm font-medium text-heading hover:border-blue-500/30 transition-colors",children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:(I==null?void 0:I.color)||"#3b82f6"}}),a.jsx("span",{className:"truncate max-w-[200px]",children:(I==null?void 0:I.name)||u("workshop")}),a.jsx(hw,{size:14,className:`text-muted transition-transform ${h?"rotate-180":""}`})]}),h&&a.jsxs("div",{className:"mt-2 bg-card-solid rounded-2xl border shadow-xl p-2 space-y-1",style:{animation:"fadeIn 0.15s ease"},children:[t.map(w=>a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsxs("button",{onClick:()=>C(w.id),className:`flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${w.id===e?"bg-blue-600/15 text-blue-400":"text-body hover:bg-card-alt"}`,children:[a.jsx("div",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:w.color}}),a.jsx("span",{className:"truncate",children:w.name})]}),f&&a.jsx("button",{onClick:()=>L(w),className:"p-2 rounded-lg text-faint hover:text-heading hover:bg-card-alt transition-colors shrink-0",children:a.jsx(wl,{size:13})})]},w.id)),f&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{className:"border-themed !my-1.5"}),a.jsxs("button",{onClick:A,className:"w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-muted hover:text-heading hover:bg-card-alt transition-colors",children:[a.jsx(jn,{size:14}),u("addWorkshop")]})]})]}),a.jsx(ur,{open:y,onClose:()=>_(!1),title:u(v?"editWorkshop":"addWorkshop"),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(et,{label:u("workshopName"),value:m.name,onChange:w=>p(S=>({...S,name:w.target.value})),onKeyDown:w=>w.key==="Enter"&&M()}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("label",{className:"text-sm font-medium text-body",children:u("workshopColor")}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:Bo.map(w=>a.jsx("button",{onClick:()=>p(S=>({...S,color:w})),className:`w-8 h-8 rounded-full border-2 transition-transform ${m.color===w?"border-blue-400 scale-110":"border-transparent"}`,style:{backgroundColor:w}},w))})]}),v&&t.length>1&&a.jsxs("button",{onClick:()=>{_(!1),x(v.id)},className:"w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-950/20 transition-colors",children:[a.jsx(en,{size:14}),u("deleteWorkshop")]}),a.jsxs("div",{className:"flex gap-3 pt-2",children:[a.jsx(se,{variant:"secondary",className:"flex-1",onClick:()=>_(!1),children:u("cancel")}),a.jsx(se,{className:"flex-1",onClick:M,children:u("save")})]})]})}),a.jsx(Vn,{open:!!g,onClose:()=>x(null),onConfirm:()=>K(g),message:u("deleteWorkshopConfirm"),t:u})]})},Lw=()=>{};var Pf={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const oy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const P=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ly=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(d=64)),r.push(n[f],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ly(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||h==null)throw new Uw;const d=i<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(t){const e=ly(t);return wd.encodeByteArray(e,!0)},Cl=function(t){return ay(t).replace(/\./g,"")},El=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function zw(t){return cy(void 0,t)}function cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ww(n)||(t[n]=cy(t[n],e[n]));return t}function Ww(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Vw=()=>Hw().__FIREBASE_DEFAULTS__,Bw=()=>{if(typeof process>"u"||typeof Pf>"u")return;const t=Pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&El(t[1]);return e&&JSON.parse(e)},kd=()=>{try{return Lw()||Vw()||Bw()||$w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uy=t=>{var e,n;return(n=(e=kd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Gw=t=>{const e=uy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dy=()=>{var t;return(t=kd())==null?void 0:t.config},hy=t=>{var e;return(e=kd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Qw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jw(){return oy.NODE_ADMIN===!0}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Zw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ek="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ek,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,l,r)}}function tk(t,e){return t.replace(nk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Pi(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const py=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Pi(El(i[0])||""),n=Pi(El(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},rk=function(t){const e=py(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sk=function(t){const e=py(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Df(i)&&Df(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ik{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let h=0;h<80;h++){h<40?h<20?(u=l^i&(o^l),f=1518500249):(u=i^o^l,f=1859775393):h<60?(u=i&o|l&(i|o),f=2400959708):(u=i^o^l,f=3395469782);const d=(s<<5|s>>>27)+u+c+f+r[h]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function ok(t,e){const n=new lk(t,e);return n.subscribe.bind(n)}class lk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ak(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ya),s.error===void 0&&(s.error=Ya),s.complete===void 0&&(s.complete=Ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}function Ed(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ck=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ca=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ct(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Xi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function my(t){return(await fetch(t,{credentials:"include"})).ok}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class uk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hk(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dk(t){return t===tr?void 0:t}function hk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class fk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const pk={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},mk=ce.INFO,gk={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},yk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=mk,this._logHandler=yk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const _k=(t,e)=>e.some(n=>t instanceof n);let jf,Of;function vk(){return jf||(jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xk(){return Of||(Of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,su=new WeakMap,yy=new WeakMap,Ja=new WeakMap,Nd=new WeakMap;function wk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(On(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gy.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function kk(t){if(su.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});su.set(t,e)}let iu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ck(t){iu=t(iu)}function Ek(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xa(this),e,...n);return yy.set(r,e.sort?e.sort():[e]),On(r)}:xk().includes(t)?function(...e){return t.apply(Xa(this),e),On(gy.get(this))}:function(...e){return On(t.apply(Xa(this),e))}}function Sk(t){return typeof t=="function"?Ek(t):(t instanceof IDBTransaction&&kk(t),_k(t,vk())?new Proxy(t,iu):t)}function On(t){if(t instanceof IDBRequest)return wk(t);if(Ja.has(t))return Ja.get(t);const e=Sk(t);return e!==t&&(Ja.set(t,e),Nd.set(e,t)),e}const Xa=t=>Nd.get(t);function Nk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=On(o);return r&&o.addEventListener("upgradeneeded",c=>{r(On(o.result),c.oldVersion,c.newVersion,On(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ik=["get","getKey","getAll","getAllKeys","count"],Tk=["put","add","delete","clear"],Za=new Map;function Mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Za.get(e))return Za.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Tk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ik.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Za.set(e,i),i}Ck(t=>({...t,get:(e,n,r)=>Mf(e,n)||t.get(e,n,r),has:(e,n)=>!!Mf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class bk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",Lf="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ln=new Sd("@firebase/app"),Ak="@firebase/app-compat",Pk="@firebase/analytics-compat",Dk="@firebase/analytics",jk="@firebase/app-check-compat",Ok="@firebase/app-check",Mk="@firebase/auth",Lk="@firebase/auth-compat",Fk="@firebase/database",Uk="@firebase/data-connect",zk="@firebase/database-compat",Wk="@firebase/functions",Hk="@firebase/functions-compat",Vk="@firebase/installations",Bk="@firebase/installations-compat",$k="@firebase/messaging",Gk="@firebase/messaging-compat",Kk="@firebase/performance",Qk="@firebase/performance-compat",qk="@firebase/remote-config",Yk="@firebase/remote-config-compat",Jk="@firebase/storage",Xk="@firebase/storage-compat",Zk="@firebase/firestore",eC="@firebase/ai",tC="@firebase/firestore-compat",nC="firebase",rC="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const lu="[DEFAULT]",sC={[ou]:"fire-core",[Ak]:"fire-core-compat",[Dk]:"fire-analytics",[Pk]:"fire-analytics-compat",[Ok]:"fire-app-check",[jk]:"fire-app-check-compat",[Mk]:"fire-auth",[Lk]:"fire-auth-compat",[Fk]:"fire-rtdb",[Uk]:"fire-data-connect",[zk]:"fire-rtdb-compat",[Wk]:"fire-fn",[Hk]:"fire-fn-compat",[Vk]:"fire-iid",[Bk]:"fire-iid-compat",[$k]:"fire-fcm",[Gk]:"fire-fcm-compat",[Kk]:"fire-perf",[Qk]:"fire-perf-compat",[qk]:"fire-rc",[Yk]:"fire-rc-compat",[Jk]:"fire-gcs",[Xk]:"fire-gcs-compat",[Zk]:"fire-fst",[tC]:"fire-fst-compat",[eC]:"fire-vertex","fire-js":"fire-js",[nC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Nl=new Map,iC=new Map,au=new Map;function Ff(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(au.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of Nl.values())Ff(n,t);for(const n of iC.values())Ff(n,t);return!0}function Id(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const oC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new Ji("app","Firebase",oC);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class lC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ks=rC;function _y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:lu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=dy()),!n)throw Mn.create("no-options");const i=Nl.get(s);if(i){if(gr(n,i.options)&&gr(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new fk(s);for(const c of au.values())o.addComponent(c);const l=new lC(n,r,o);return Nl.set(s,l),l}function vy(t=lu){const e=Nl.get(t);if(!e&&t===lu&&dy())return _y();if(!e)throw Mn.create("no-app",{appName:t});return e}function Ln(t,e,n){let r=sC[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(o.join(" "));return}hs(new yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const aC="firebase-heartbeat-database",cC=1,Di="firebase-heartbeat-store";let ec=null;function xy(){return ec||(ec=Nk(aC,cC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),ec}async function uC(t){try{const n=(await xy()).transaction(Di),r=await n.objectStore(Di).get(wy(t));return await n.done,r}catch(e){if(e instanceof Yn)ln.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function Uf(t,e){try{const r=(await xy()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,wy(t)),await r.done}catch(n){if(n instanceof Yn)ln.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function wy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const dC=1024,hC=30;class fC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>hC){const o=gC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zf(),{heartbeatsToSend:r,unsentEntries:s}=pC(this._heartbeatsCache.heartbeats),i=Cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ln.warn(n),""}}}function zf(){return new Date().toISOString().substring(0,10)}function pC(t,e=dC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wf(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}function gC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function yC(t){hs(new yr("platform-logger",e=>new bk(e),"PRIVATE")),hs(new yr("heartbeat",e=>new fC(e),"PRIVATE")),Ln(ou,Lf,t),Ln(ou,Lf,"esm2020"),Ln("fire-js","")}yC("");var _C="firebase",vC="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Ln(_C,vC,"app");var Hf={};const Vf="@firebase/database",Bf="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
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
 */let ky="";function xC(t){ky=t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Cy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wC(e)}}catch{}return new kC},or=Cy("localStorage"),CC=Cy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xr=new Sd("@firebase/database"),EC=function(){let t=1;return function(){return t++}}(),Ey=function(t){const e=ck(t),n=new ik;n.update(e);const r=n.digest();return wd.encodeByteArray(r)},Zi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zi.apply(null,r):typeof r=="object"?e+=Ie(r):e+=r,e+=" "}return e};let li=null,$f=!0;const SC=function(t,e){P(!0,"Can't turn on custom loggers persistently."),Xr.logLevel=ce.VERBOSE,li=Xr.log.bind(Xr)},Be=function(...t){if($f===!0&&($f=!1,li===null&&CC.get("logging_enabled")===!0&&SC()),li){const e=Zi.apply(null,t);li(e)}},eo=function(t){return function(...e){Be(t,...e)}},cu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zi(...t);Xr.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${Zi(...t)}`;throw Xr.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+Zi(...t);Xr.warn(e)},NC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",_r="[MAX_NAME]",Cs=function(t,e){if(t===e)return 0;if(t===fs||e===_r)return-1;if(e===fs||t===_r)return 1;{const n=Gf(t),r=Gf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},TC=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Td=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ie(e[r]),n+=":",n+=Td(t[e[r]]);return n+="}",n},Ny=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function at(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Iy=function(t){P(!Sy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const f=u.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(f.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const PC=new RegExp("^-?(0*)\\d{1,10}$"),DC=-2147483648,jC=2147483647,Gf=function(t){if(PC.test(t)){const e=Number(t);if(e>=DC&&e<=jC)return e}return null},Es=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},OC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class MC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Tt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class $o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$o.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bd="5",Ty="v",by="s",Ry="r",Ay="f",Py=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dy="ls",jy="p",uu="ac",Oy="websocket",My="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ly{constructor(e,n,r,s,i=!1,o="",l=!1,c=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function FC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fy(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===Oy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===My)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);FC(t)&&(n.ns=t.namespace);const s=[];return at(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class UC{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tc={},nc={};function Rd(t){const e=t.toString();return tc[e]||(tc[e]=new UC),tc[e]}function zC(t,e){const n=t.toString();return nc[n]||(nc[n]=e()),nc[n]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Es(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Kf="start",HC="close",VC="pLPCommand",BC="pRTLPCB",Uy="id",zy="pw",Wy="ser",$C="cb",GC="seg",KC="ts",QC="d",qC="dframe",Hy=1870,Vy=30,YC=Hy-Vy,JC=25e3,XC=3e4;class Hr{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=Rd(n),this.urlFn=c=>(this.appCheckToken&&(c[uu]=this.appCheckToken),Fy(n,My,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XC)),IC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ad((...i)=>{const[o,l,c,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kf)this.id=l,this.password=c;else if(o===HC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kf]="t",r[Wy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$C]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ty]=bd,this.transportSessionId&&(r[by]=this.transportSessionId),this.lastSessionId&&(r[Dy]=this.lastSessionId),this.applicationId&&(r[jy]=this.applicationId),this.appCheckToken&&(r[uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Py.test(location.hostname)&&(r[Ry]=Ay);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hr.forceAllow_=!0}static forceDisallow(){Hr.forceDisallow_=!0}static isAvailable(){return Hr.forceAllow_?!0:!Hr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bC()&&!RC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ay(n),s=Ny(r,YC);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qC]="t",r[Uy]=e,r[zy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ad{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EC(),window[VC+this.uniqueCallbackIdentifier]=e,window[BC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ad.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Be("frame writing exception"),l.stack&&Be(l.stack),Be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uy]=this.myID,e[zy]=this.myPW,e[Wy]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vy+r.length<=Hy;){const o=this.pendingSegs.shift();r=r+"&"+GC+s+"="+o.seg+"&"+KC+s+"="+o.ts+"&"+QC+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(JC)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ZC=16384,eE=45e3;let Il=null;typeof MozWebSocket<"u"?Il=MozWebSocket:typeof WebSocket<"u"&&(Il=WebSocket);class bt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=Rd(n),this.connURL=bt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Ty]=bd,typeof location<"u"&&location.hostname&&Py.test(location.hostname)&&(o[Ry]=Ay),n&&(o[by]=n),r&&(o[Dy]=r),s&&(o[uu]=s),i&&(o[jy]=i),Fy(e,Oy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let r;Jw(),this.mySock=new Il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Il!==null&&!bt.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Pi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ny(n,ZC);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ji{static get ALL_TRANSPORTS(){return[Hr,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=bt&&bt.isAvailable();let r=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bt];else{const s=this.transports_=[];for(const i of ji.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ji.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ji.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tE=6e4,nE=5e3,rE=10*1024,sE=100*1024,rc="t",Qf="d",iE="s",qf="r",oE="e",Yf="o",Jf="a",Xf="n",Zf="p",lE="h";class aE{constructor(e,n,r,s,i,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new ji(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rc in e){const n=e[rc];n===Jf?this.upgradeIfSecondaryHealthy_():n===qf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(rc,e);if(Qf in e){const r=e[Qf];if(n===lE){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Xf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iE?this.onConnectionShutdown_(r):n===qf?this.onReset_(r):n===oE?cu("Server Error: "+r):n===Yf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bd!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class By{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $y{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tl extends $y{static getInstance(){return new Tl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ep=32,tp=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new de("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function Gy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ky(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new de(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return Qe(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pd(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uE{constructor(e,n){this.errorPrefix_=n,this.parts_=Ky(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ca(this.parts_[r]);qy(this)}}function dE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ca(e),qy(t)}function hE(t){const e=t.parts_.pop();t.byteLength_-=ca(e),t.parts_.length>0&&(t.byteLength_-=1)}function qy(t){if(t.byteLength_>tp)throw new Error(t.errorPrefix_+"has a key path longer than "+tp+" bytes ("+t.byteLength_+").");if(t.parts_.length>ep)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ep+") or object contains a cycle "+nr(t))}function nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dd extends $y{static getInstance(){return new Dd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const zs=1e3,fE=60*5*1e3,np=30*1e3,pE=1.3,mE=3e4,gE="server_kill",rp=3;class tn extends By{constructor(e,n,r,s,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=tn.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zs,this.maxReconnectDelay_=fE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ie(i)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new aa,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;tn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const r=ds(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=np)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cu("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mE&&(this.reconnectDelay_=zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+tn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(h){P(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new aE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{lt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(gE)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&lt(h),c())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ru(this.interruptReasons_)&&(this.reconnectDelay_=zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Td(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rp&&(this.reconnectDelay_=np,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ky.replace(/\./g,"-")]=1,Cd()?e["framework.cordova"]=1:fy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tl.getInstance().currentlyOnline();return ru(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0;tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ua{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new X(fs,e),s=new X(fs,n);return this.compare(r,s)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let To;class Yy extends ua{static get __EMPTY_NODE(){return To}static set __EMPTY_NODE(e){To=e}compare(e,n){return Cs(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(_r,To)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,To)}toString(){return".key"}}const Zr=new Yy;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??De.RED,this.left=s??rt.EMPTY_NODE,this.right=i??rt.EMPTY_NODE}copy(e,n,r,s,i){return new De(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class yE{copy(e,n,r,s,i){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new yE;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function _E(t,e){return Cs(t.name,e.name)}function jd(t,e){return Cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let du;function vE(t){du=t}const Jy=function(t){return typeof t=="number"?"number:"+Iy(t):"string:"+t},Xy=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else P(t===du||t.isEmpty(),"priority of unexpected type.");P(t===du||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let sp;class Ae{static set __childrenNodeConstructor(e){sp=e}static get __childrenNodeConstructor(){return sp}constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:J(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Iy(this.value_):e+=this.value_,this.lazyHash_=Ey(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ae.VALUE_TYPE_ORDER.indexOf(n),i=Ae.VALUE_TYPE_ORDER.indexOf(r);return P(s>=0,"Unknown leaf type: "+n),P(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Zy,e_;function xE(t){Zy=t}function wE(t){e_=t}class kE extends ua{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Cs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(_r,new Ae("[PRIORITY-POST]",e_))}makePost(e,n){const r=Zy(e);return new X(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const ke=new kE;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const CE=Math.log(2);class EE{constructor(e){const n=i=>parseInt(Math.log(i)/CE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bl=function(t,e,n,r){t.sort(e);const s=function(c,u){const f=u-c;let h,d;if(f===0)return null;if(f===1)return h=t[c],d=n?n(h):h,new De(d,h.node,De.BLACK,null,null);{const y=parseInt(f/2,10)+c,_=s(c,y),v=s(y+1,u);return h=t[y],d=n?n(h):h,new De(d,h.node,De.BLACK,_,v)}},i=function(c){let u=null,f=null,h=t.length;const d=function(_,v){const D=h-_,m=h;h-=_;const p=s(D+1,m),g=t[D],x=n?n(g):g;y(new De(x,g.node,v,null,p))},y=function(_){u?(u.left=_,u=_):(f=_,u=_)};for(let _=0;_<c.count;++_){const v=c.nextBitIsOne(),D=Math.pow(2,c.count-(_+1));v?d(D,De.BLACK):(d(D,De.BLACK),d(D,De.RED))}return f},o=new EE(t.length),l=i(o);return new rt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let sc;const br={};class Yt{static get Default(){return P(br&&ke,"ChildrenNode.ts has not been loaded"),sc=sc||new Yt({".priority":br},{".priority":ke}),sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(X.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=bl(r,e.getCompare()):l=br;const c=e.toString(),u={...this.indexSet_};u[c]=e;const f={...this.indexes_};return f[c]=l,new Yt(f,u)}addToIndexes(e,n){const r=Sl(this.indexes_,(s,i)=>{const o=ds(this.indexSet_,i);if(P(o,"Missing index implementation for "+i),s===br)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(X.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),bl(l,o.getCompare())}else return br;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new X(e.name,l))),c.insert(e,e.node)}});return new Yt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sl(this.indexes_,s=>{if(s===br)return s;{const i=n.get(e.name);return i?s.remove(new X(e.name,i)):s}});return new Yt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ws;class G{static get EMPTY_NODE(){return Ws||(Ws=new G(new rt(jd),null,Yt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Xy(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ws}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ws:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new X(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ws:this.priorityNode_;return new G(s,o,i)}}updateChild(e,n){const r=J(e);if(r===null)return n;{P(J(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ke,(o,l)=>{n[o]=l.val(e),r++,i&&G.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jy(this.getPriority().val())+":"),this.forEachChild(ke,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ey(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new X(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===to?-1:0}withIndex(e){if(e===Zr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ke),s=n.getIterator(ke);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zr?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SE extends G{constructor(){super(new rt(jd),G.EMPTY_NODE,Yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const to=new SE;Object.defineProperties(X,{MIN:{value:new X(fs,G.EMPTY_NODE)},MAX:{value:new X(_r,to)}});Yy.__EMPTY_NODE=G.EMPTY_NODE;Ae.__childrenNodeConstructor=G;vE(to);wE(to);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const NE=!0;function je(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,je(e))}if(!(t instanceof Array)&&NE){const n=[];let r=!1;if(at(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=je(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new X(o,c)))}}),n.length===0)return G.EMPTY_NODE;const i=bl(n,_E,o=>o.name,jd);if(r){const o=bl(n,ke.getCompare());return new G(i,je(e),new Yt({".priority":o},{".priority":ke}))}else return new G(i,je(e),Yt.Default)}else{let n=G.EMPTY_NODE;return at(t,(r,s)=>{if(dn(t,r)&&r.substring(0,1)!=="."){const i=je(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(je(e))}}xE(je);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class IE extends ua{constructor(e){super(),this.indexPath_=e,P(!ee(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Cs(e.name,n.name):i}makePost(e,n){const r=je(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(n,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,to);return new X(_r,e)}toString(){return Ky(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TE extends ua{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const r=je(e);return new X(n,r)}toString(){return".value"}}const bE=new TE;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function t_(t){return{type:"value",snapshotNode:t}}function ps(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Od{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Oi(n,l)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ps(n,r)):o.trackChildChange(Mi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ke,(s,i)=>{n.hasChild(s)||r.trackChildChange(Oi(s,i))}),n.isLeafNode()||n.forEachChild(ke,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Mi(s,i,o))}else r.trackChildChange(ps(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Li{constructor(e){this.indexedFilter_=new Od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Li.getStartPost_(e),this.endPost_=Li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new X(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(G.EMPTY_NODE);const i=this;return n.forEachChild(ke,(o,l)=>{i.matches(new X(o,l))||(s=s.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class AE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new X(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=G.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(G.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,y)=>h(y,d)}else o=this.index_.getCompare();const l=e;P(l.numChildren()===this.limit_,"");const c=new X(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,c);if(f&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(Mi(n,r,h)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Oi(n,h));const v=l.updateImmediateChild(n,G.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(ps(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:f&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Oi(u.name,u.node)),i.trackChildChange(ps(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Md{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Md;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PE(t){return t.loadsAllData()?new Od(t.getIndex()):t.hasLimit()?new AE(t):new Li(t)}function ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ke?n="$priority":t.index_===bE?n="$value":t.index_===Zr?n="$key":(P(t.index_ instanceof IE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ie(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ie(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ie(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function op(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rl extends By{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=eo("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Rl.getListenId_(e,r),l={};this.listens_[o]=l;const c=ip(e._queryParams);this.restRequest_(i+".json",c,(u,f)=>{let h=f;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(i,h,!1,r),ds(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",s(d,null)}})}unlisten(e,n){const r=Rl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ip(e._queryParams),r=e._path.toString(),s=new aa;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ws(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Pi(l.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class DE{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Al(){return{value:null,children:new Map}}function n_(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,Al());const s=t.children.get(r);e=he(e),n_(s,e,n)}}function hu(t,e,n){t.value!==null?n(e,t.value):jE(t,(r,s)=>{const i=new de(e.toString()+"/"+r);hu(s,i,n)})}function jE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class OE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&at(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const lp=10*1e3,ME=30*1e3,LE=5*60*1e3;class FE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OE(e);const r=lp+(ME-lp)*Math.random();ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;at(e,(s,i)=>{i>0&&dn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*LE))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Pl(oe(),n,this.revert)}}else return P(J(this.path)===e,"operationForChild called for unrelated child."),new Pl(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fi{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new Fi(this.source,oe()):new Fi(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return ee(this.path)?new vr(this.source,oe(),this.snap.getImmediateChild(e)):new vr(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ui{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new vr(this.source,oe(),n.value):new Ui(this.source,oe(),n)}else return P(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ui(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class UE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(RE(o.childName,o.snapshotNode))}),Hs(t,s,"child_removed",e,r,n),Hs(t,s,"child_added",e,r,n),Hs(t,s,"child_moved",i,r,n),Hs(t,s,"child_changed",e,r,n),Hs(t,s,"value",e,r,n),s}function Hs(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,c)=>HE(t,l,c)),o.forEach(l=>{const c=WE(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function WE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HE(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),s=new X(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function da(t,e){return{eventCache:t,serverCache:e}}function ci(t,e,n,r){return da(new $n(e,n,r),t.serverCache)}function s_(t,e,n,r){return da(t.eventCache,new $n(e,n,r))}function Dl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ic;const VE=()=>(ic||(ic=new rt(TC)),ic);class me{static fromObject(e){let n=new me(null);return at(e,(r,s)=>{n=n.set(new de(r),s)}),n}constructor(e,n=VE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(ee(e))return null;{const r=J(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(he(e),n);return i!=null?{path:Te(new de(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new me(null)}}set(e,n){if(ee(e))return new me(n,this.children);{const r=J(e),i=(this.children.get(r)||new me(null)).set(he(e),n),o=this.children.insert(r,i);return new me(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const s=r.remove(he(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new me(null):new me(this.value,i)}else return this}}get(e){if(ee(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(ee(e))return n;{const r=J(e),i=(this.children.get(r)||new me(null)).setTree(he(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new me(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Te(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ee(e))return null;{const i=J(e),o=this.children.get(i);return o?o.findOnPath_(he(e),Te(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const s=J(e),i=this.children.get(s);return i?i.foreachOnPath_(he(e),Te(n,s),r):new me(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new me(null))}}function ui(t,e,n){if(ee(e))return new Ot(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qe(s,e);return i=i.updateChild(o,n),new Ot(t.writeTree_.set(s,i))}else{const s=new me(n),i=t.writeTree_.setTree(e,s);return new Ot(i)}}}function ap(t,e,n){let r=t;return at(n,(s,i)=>{r=ui(r,Te(e,s),i)}),r}function cp(t,e){if(ee(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new me(null));return new Ot(n)}}function fu(t,e){return Er(t,e)!=null}function Er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function up(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(r,s)=>{e.push(new X(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new X(r,s.value))}),e}function Fn(t,e){if(ee(e))return t;{const n=Er(t,e);return n!=null?new Ot(new me(n)):new Ot(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function ms(t,e){return i_(oe(),t.writeTree_,e)}function i_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(P(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=i_(Te(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ha(t,e){return c_(e,t)}function BE(t,e,n,r,s){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ui(t.visibleWrites,e,n)),t.lastWriteId=r}function $E(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function GE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&KE(l,r.path)?s=!1:Rt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return QE(t),!0;if(r.snap)t.visibleWrites=cp(t.visibleWrites,r.path);else{const l=r.children;at(l,c=>{t.visibleWrites=cp(t.visibleWrites,Te(r.path,c))})}return!0}else return!1}function KE(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(Te(t.path,n),e))return!0;return!1}function QE(t){t.visibleWrites=o_(t.allWrites,qE,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qE(t){return t.visible}function o_(t,e,n){let r=Ot.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Rt(n,o)?(l=Qe(n,o),r=ui(r,l,i.snap)):Rt(o,n)&&(l=Qe(o,n),r=ui(r,oe(),i.snap.getChild(l)));else if(i.children){if(Rt(n,o))l=Qe(n,o),r=ap(r,l,i.children);else if(Rt(o,n))if(l=Qe(o,n),ee(l))r=ap(r,oe(),i.children);else{const c=ds(i.children,J(l));if(c){const u=c.getChild(he(l));r=ui(r,oe(),u)}}}else throw xs("WriteRecord should have .snap or .children")}}return r}function l_(t,e,n,r,s){if(!r&&!s){const i=Er(t.visibleWrites,e);if(i!=null)return i;{const o=Fn(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!fu(o,oe()))return null;{const l=n||G.EMPTY_NODE;return ms(o,l)}}}else{const i=Fn(t.visibleWrites,e);if(!s&&pu(i))return n;if(!s&&n==null&&!fu(i,oe()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Rt(u.path,e)||Rt(e,u.path))},l=o_(t.allWrites,o,e),c=n||G.EMPTY_NODE;return ms(l,c)}}}function YE(t,e,n){let r=G.EMPTY_NODE;const s=Er(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ke,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Fn(t.visibleWrites,e);return n.forEachChild(ke,(o,l)=>{const c=ms(Fn(i,new de(o)),l);r=r.updateImmediateChild(o,c)}),up(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Fn(t.visibleWrites,e);return up(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function JE(t,e,n,r,s){P(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Te(e,n);if(fu(t.visibleWrites,i))return null;{const o=Fn(t.visibleWrites,i);return pu(o)?s.getChild(n):ms(o,s.getChild(n))}}function XE(t,e,n,r){const s=Te(e,n),i=Er(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Fn(t.visibleWrites,s);return ms(o,r.getNode().getImmediateChild(n))}else return null}function ZE(t,e){return Er(t.visibleWrites,e)}function eS(t,e,n,r,s,i,o){let l;const c=Fn(t.visibleWrites,e),u=Er(c,oe());if(u!=null)l=u;else if(n!=null)l=ms(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],h=o.getCompare(),d=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<s;)h(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function tS(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function jl(t,e,n,r){return l_(t.writeTree,t.treePath,e,n,r)}function Ud(t,e){return YE(t.writeTree,t.treePath,e)}function dp(t,e,n,r){return JE(t.writeTree,t.treePath,e,n,r)}function Ol(t,e){return ZE(t.writeTree,Te(t.treePath,e))}function nS(t,e,n,r,s,i){return eS(t.writeTree,t.treePath,e,n,r,s,i)}function zd(t,e,n){return XE(t.writeTree,t.treePath,e,n)}function a_(t,e){return c_(Te(t.treePath,e),t.writeTree)}function c_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Mi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Oi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ps(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Mi(r,e.snapshotNode,s.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const u_=new sS;class Wd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=nS(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function iS(t){return{filter:t}}function oS(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lS(t,e,n,r,s){const i=new rS;let o,l;if(n.type===At.OVERWRITE){const u=n;u.source.fromUser?o=mu(t,e,u.path,u.snap,r,s,i):(P(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=Ml(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===At.MERGE){const u=n;u.source.fromUser?o=cS(t,e,u.path,u.children,r,s,i):(P(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=gu(t,e,u.path,u.children,r,s,l,i))}else if(n.type===At.ACK_USER_WRITE){const u=n;u.revert?o=hS(t,e,u.path,r,s,i):o=uS(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===At.LISTEN_COMPLETE)o=dS(t,e,n.path,r,i);else throw xs("Unknown operation type: "+n.type);const c=i.getChanges();return aS(e,o,c),{viewCache:o,changes:c}}function aS(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Dl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(t_(Dl(e)))}}function d_(t,e,n,r,s,i){const o=e.eventCache;if(Ol(r,n)!=null)return e;{let l,c;if(ee(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),f=u instanceof G?u:G.EMPTY_NODE,h=Ud(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const u=jl(r,xr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=J(n);if(u===".priority"){P(Bn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const h=dp(r,n,f,c);h!=null?l=t.filter.updatePriority(f,h):l=o.getNode()}else{const f=he(n);let h;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const d=dp(r,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(u).updateChild(f,d):h=o.getNode().getImmediateChild(u)}else h=zd(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,f,s,i):l=o.getNode()}}return ci(e,l,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ml(t,e,n,r,s,i,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(ee(n))u=f.updateFullNode(c.getNode(),r,null);else if(f.filtersNodes()&&!c.isFiltered()){const y=c.getNode().updateChild(n,r);u=f.updateFullNode(c.getNode(),y,null)}else{const y=J(n);if(!c.isCompleteForPath(n)&&Bn(n)>1)return e;const _=he(n),D=c.getNode().getImmediateChild(y).updateChild(_,r);y===".priority"?u=f.updatePriority(c.getNode(),D):u=f.updateChild(c.getNode(),y,D,_,u_,null)}const h=s_(e,u,c.isFullyInitialized()||ee(n),f.filtersNodes()),d=new Wd(s,h,i);return d_(t,h,n,s,d,l)}function mu(t,e,n,r,s,i,o){const l=e.eventCache;let c,u;const f=new Wd(s,e,i);if(ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=ci(e,u,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=ci(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=he(n),y=l.getNode().getImmediateChild(h);let _;if(ee(d))_=r;else{const v=f.getCompleteChild(h);v!=null?Gy(d)===".priority"&&v.getChild(Qy(d)).isEmpty()?_=v:_=v.updateChild(d,r):_=G.EMPTY_NODE}if(y.equals(_))c=e;else{const v=t.filter.updateChild(l.getNode(),h,_,d,f,o);c=ci(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function hp(t,e){return t.eventCache.isCompleteForChild(e)}function cS(t,e,n,r,s,i,o){let l=e;return r.foreach((c,u)=>{const f=Te(n,c);hp(e,J(f))&&(l=mu(t,l,f,u,s,i,o))}),r.foreach((c,u)=>{const f=Te(n,c);hp(e,J(f))||(l=mu(t,l,f,u,s,i,o))}),l}function fp(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function gu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ee(n)?u=r:u=new me(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(f.hasChild(h)){const y=e.serverCache.getNode().getImmediateChild(h),_=fp(t,y,d);c=Ml(t,c,new de(h),_,s,i,o,l)}}),u.children.inorderTraversal((h,d)=>{const y=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!f.hasChild(h)&&!y){const _=e.serverCache.getNode().getImmediateChild(h),v=fp(t,_,d);c=Ml(t,c,new de(h),v,s,i,o,l)}}),c}function uS(t,e,n,r,s,i,o){if(Ol(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ml(t,e,n,c.getNode().getChild(n),s,i,l,o);if(ee(n)){let u=new me(null);return c.getNode().forEachChild(Zr,(f,h)=>{u=u.set(new de(f),h)}),gu(t,e,n,u,s,i,l,o)}else return e}else{let u=new me(null);return r.foreach((f,h)=>{const d=Te(n,f);c.isCompleteForPath(d)&&(u=u.set(f,c.getNode().getChild(d)))}),gu(t,e,n,u,s,i,l,o)}}function dS(t,e,n,r,s){const i=e.serverCache,o=s_(e,i.getNode(),i.isFullyInitialized()||ee(n),i.isFiltered());return d_(t,o,n,r,u_,s)}function hS(t,e,n,r,s,i){let o;if(Ol(r,n)!=null)return e;{const l=new Wd(r,e,s),c=e.eventCache.getNode();let u;if(ee(n)||J(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=jl(r,xr(e));else{const h=e.serverCache.getNode();P(h instanceof G,"serverChildren would be complete if leaf node"),f=Ud(r,h)}f=f,u=t.filter.updateFullNode(c,f,i)}else{const f=J(n);let h=zd(r,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=c.getImmediateChild(f)),h!=null?u=t.filter.updateChild(c,f,h,he(n),l,i):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,G.EMPTY_NODE,he(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jl(r,xr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Ol(r,oe())!=null,ci(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Od(r.getIndex()),i=PE(r);this.processor_=iS(i);const o=n.serverCache,l=n.eventCache,c=s.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(G.EMPTY_NODE,l.getNode(),null),f=new $n(c,o.isFullyInitialized(),s.filtersNodes()),h=new $n(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=da(h,f),this.eventGenerator_=new UE(this.query_)}get query(){return this.query_}}function pS(t){return t.viewCache_.serverCache.getNode()}function mS(t){return Dl(t.viewCache_)}function gS(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function pp(t){return t.eventRegistrations_.length===0}function yS(t,e){t.eventRegistrations_.push(e)}function mp(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function gp(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(P(xr(t.viewCache_),"We should always have a full cache before handling merges"),P(Dl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=lS(t.processor_,s,e,n,r);return oS(t.processor_,i.viewCache),P(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,h_(t,i.changes,i.viewCache.eventCache.getNode(),null)}function _S(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(i,o)=>{r.push(ps(i,o))}),n.isFullyInitialized()&&r.push(t_(n.getNode())),h_(t,r,n.getNode(),e)}function h_(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return zE(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ll;class f_{constructor(){this.views=new Map}}function vS(t){P(!Ll,"__referenceConstructor has already been defined"),Ll=t}function xS(){return P(Ll,"Reference.ts has not been loaded"),Ll}function wS(t){return t.views.size===0}function Hd(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return P(i!=null,"SyncTree gave us an op for an invalid query."),gp(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(gp(o,e,n,r));return i}}function p_(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=jl(n,s?r:null),c=!1;l?c=!0:r instanceof G?(l=Ud(n,r),c=!1):(l=G.EMPTY_NODE,c=!1);const u=da(new $n(l,c,!1),new $n(r,s,!1));return new fS(e,u)}return o}function kS(t,e,n,r,s,i){const o=p_(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yS(o,n),_S(o,n)}function CS(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Gn(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(mp(u,n,r)),pp(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(mp(c,n,r)),pp(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return l&&!Gn(t)&&i.push(new(xS())(e._repo,e._path)),{removed:i,events:o}}function m_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Un(t,e){let n=null;for(const r of t.views.values())n=n||gS(r,e);return n}function g_(t,e){if(e._queryParams.loadsAllData())return fa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function y_(t,e){return g_(t,e)!=null}function Gn(t){return fa(t)!=null}function fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Fl;function ES(t){P(!Fl,"__referenceConstructor has already been defined"),Fl=t}function SS(){return P(Fl,"Reference.ts has not been loaded"),Fl}let NS=1;class yp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=tS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function __(t,e,n,r,s){return BE(t.pendingWriteTree_,e,n,r,s),s?ro(t,new vr(r_(),e,n)):[]}function lr(t,e,n=!1){const r=$E(t.pendingWriteTree_,e);if(GE(t.pendingWriteTree_,e)){let i=new me(null);return r.snap!=null?i=i.set(oe(),!0):at(r.children,o=>{i=i.set(new de(o),!0)}),ro(t,new Pl(r.path,i,n))}else return[]}function no(t,e,n){return ro(t,new vr(Ld(),e,n))}function IS(t,e,n){const r=me.fromObject(n);return ro(t,new Ui(Ld(),e,r))}function TS(t,e){return ro(t,new Fi(Ld(),e))}function bS(t,e,n){const r=Bd(t,n);if(r){const s=$d(r),i=s.path,o=s.queryId,l=Qe(i,e),c=new Fi(Fd(o),l);return Gd(t,i,c)}else return[]}function Ul(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||y_(o,e))){const c=CS(o,e,n,r);wS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(l=c.events,!s){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,y)=>Gn(y));if(f&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const y=PS(d);for(let _=0;_<y.length;++_){const v=y[_],D=v.query,m=k_(t,v);t.listenProvider_.startListening(di(D),zi(t,D),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(di(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(pa(d));t.listenProvider_.stopListening(di(d),y)}))}DS(t,u)}return l}function v_(t,e,n,r){const s=Bd(t,r);if(s!=null){const i=$d(s),o=i.path,l=i.queryId,c=Qe(o,e),u=new vr(Fd(l),c,n);return Gd(t,o,u)}else return[]}function RS(t,e,n,r){const s=Bd(t,r);if(s){const i=$d(s),o=i.path,l=i.queryId,c=Qe(o,e),u=me.fromObject(n),f=new Ui(Fd(l),c,u);return Gd(t,o,f)}else return[]}function yu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,y)=>{const _=Qe(d,s);i=i||Un(y,_),o=o||Gn(y)});let l=t.syncPointTree_.get(s);l?(o=o||Gn(l),i=i||Un(l,oe())):(l=new f_,t.syncPointTree_=t.syncPointTree_.set(s,l));let c;i!=null?c=!0:(c=!1,i=G.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,_)=>{const v=Un(_,oe());v&&(i=i.updateImmediateChild(y,v))}));const u=y_(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=pa(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=jS();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=ha(t.pendingWriteTree_,s);let h=kS(l,e,n,f,i,c);if(!u&&!o&&!r){const d=g_(l,e);h=h.concat(OS(t,e,d))}return h}function Vd(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Qe(o,e),u=Un(l,c);if(u)return u});return l_(s,e,i,n,!0)}function AS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,f)=>{const h=Qe(u,n);r=r||Un(f,h)});let s=t.syncPointTree_.get(n);s?r=r||Un(s,oe()):(s=new f_,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new $n(r,!0,!1):null,l=ha(t.pendingWriteTree_,e._path),c=p_(s,e,l,i?o.getNode():G.EMPTY_NODE,i);return mS(c)}function ro(t,e){return x_(e,t.syncPointTree_,null,ha(t.pendingWriteTree_,oe()))}function x_(t,e,n,r){if(ee(t.path))return w_(t,e,n,r);{const s=e.get(oe());n==null&&s!=null&&(n=Un(s,oe()));let i=[];const o=J(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=a_(r,o);i=i.concat(x_(l,c,u,f))}return s&&(i=i.concat(Hd(s,t,r,n))),i}}function w_(t,e,n,r){const s=e.get(oe());n==null&&s!=null&&(n=Un(s,oe()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=a_(r,o),f=t.operationForChild(o);f&&(i=i.concat(w_(f,l,c,u)))}),s&&(i=i.concat(Hd(s,t,r,n))),i}function k_(t,e){const n=e.query,r=zi(t,n);return{hashFn:()=>(pS(e)||G.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?bS(t,n._path,r):TS(t,n._path);{const i=AC(s,n);return Ul(t,n,null,i)}}}}function zi(t,e){const n=pa(e);return t.queryToTagMap.get(n)}function pa(t){return t._path.toString()+"$"+t._queryIdentifier}function Bd(t,e){return t.tagToQueryMap.get(e)}function $d(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function Gd(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const s=ha(t.pendingWriteTree_,e);return Hd(r,n,s,null)}function PS(t){return t.fold((e,n,r)=>{if(n&&Gn(n))return[fa(n)];{let s=[];return n&&(s=m_(n)),at(r,(i,o)=>{s=s.concat(o)}),s}})}function di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SS())(t._repo,t._path):t}function DS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=pa(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function jS(){return NS++}function OS(t,e,n){const r=e._path,s=zi(t,e),i=k_(t,n),o=t.listenProvider_.startListening(di(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)P(!Gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,f,h)=>{if(!ee(u)&&f&&Gn(f))return[fa(f).query];{let d=[];return f&&(d=d.concat(m_(f).map(y=>y.query))),at(h,(y,_)=>{d=d.concat(_)}),d}});for(let u=0;u<c.length;++u){const f=c[u];t.listenProvider_.stopListening(di(f),zi(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kd(n)}node(){return this.node_}}class Qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Te(this.path_,e);return new Qd(this.syncTree_,n)}node(){return Vd(this.syncTree_,this.path_)}}const MS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_p=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return LS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FS(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},LS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},FS=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const s=e.node();if(P(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},US=function(t,e,n,r){return qd(e,new Qd(n,t),r)},C_=function(t,e,n){return qd(t,new Kd(e),n)};function qd(t,e,n){const r=t.getPriority().val(),s=_p(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=_p(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ae(l,je(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ae(s))),o.forEachChild(ke,(l,c)=>{const u=qd(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jd(t,e){let n=e instanceof de?e:new de(e),r=t,s=J(n);for(;s!==null;){const i=ds(r.node.children,s)||{children:{},childCount:0};r=new Yd(s,r,i),n=he(n),s=J(n)}return r}function Ss(t){return t.node.value}function E_(t,e){t.node.value=e,_u(t)}function S_(t){return t.node.childCount>0}function zS(t){return Ss(t)===void 0&&!S_(t)}function ma(t,e){at(t.node.children,(n,r)=>{e(new Yd(n,t,r))})}function N_(t,e,n,r){n&&e(t),ma(t,s=>{N_(s,e,!0)})}function WS(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function so(t){return new de(t.parent===null?t.name:so(t.parent)+"/"+t.name)}function _u(t){t.parent!==null&&HS(t.parent,t.name,t)}function HS(t,e,n){const r=zS(n),s=dn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,_u(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,_u(t))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const VS=/[\[\].#$\/\u0000-\u001F\u007F]/,BS=/[\[\].#$\u0000-\u001F\u007F]/,oc=10*1024*1024,I_=function(t){return typeof t=="string"&&t.length!==0&&!VS.test(t)},T_=function(t){return typeof t=="string"&&t.length!==0&&!BS.test(t)},$S=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T_(t)},GS=function(t,e,n,r){Xd(Ed(t,"value"),e,n)},Xd=function(t,e,n){const r=n instanceof de?new uE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+nr(r)+" with contents = "+e.toString());if(Sy(e))throw new Error(t+"contains "+e.toString()+" "+nr(r));if(typeof e=="string"&&e.length>oc/3&&ca(e)>oc)throw new Error(t+"contains a string greater than "+oc+" utf8 bytes "+nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(at(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!I_(o)))throw new Error(t+" contains an invalid key ("+o+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dE(r,o),Xd(t,l,r),hE(r)}),s&&i)throw new Error(t+' contains ".value" child '+nr(r)+" in addition to actual children.")}},b_=function(t,e,n,r){if(!T_(n))throw new Error(Ed(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),b_(t,e,n)},R_=function(t,e){if(J(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},QS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!I_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$S(n))throw new Error(Ed(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zd(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Pd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function A_(t,e,n){Zd(t,n),P_(t,r=>Pd(r,e))}function $t(t,e,n){Zd(t,n),P_(t,r=>Rt(r,e)||Rt(e,r))}function P_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(YS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();li&&Be("event: "+n.toString()),Es(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const JS="repo_interrupt",XS=25;class ZS{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Al(),this.transactionQueueTree_=new Yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function e1(t,e,n){if(t.stats_=Rd(t.repoInfo_),t.forceRestClient_||OC())t.server_=new Rl(t.repoInfo_,(r,s,i,o)=>{vp(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tn(t.repoInfo_,e,(r,s,i,o)=>{vp(t,r,s,i,o)},r=>{xp(t,r)},r=>{n1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zC(t.repoInfo_,()=>new FE(t.stats_,t.server_)),t.infoData_=new DE,t.infoSyncTree_=new yp({startListening:(r,s,i,o)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=no(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),th(t,"connected",!1),t.serverSyncTree_=new yp({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,c)=>{const u=o(l,c);$t(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function t1(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function eh(t){return MS({timestamp:t1(t)})}function vp(t,e,n,r,s){t.dataUpdateCount++;const i=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=Sl(n,u=>je(u));o=RS(t.serverSyncTree_,i,c,s)}else{const c=je(n);o=v_(t.serverSyncTree_,i,c,s)}else if(r){const c=Sl(n,u=>je(u));o=IS(t.serverSyncTree_,i,c)}else{const c=je(n);o=no(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=ya(t,i)),$t(t.eventQueue_,l,o)}function xp(t,e){th(t,"connected",e),e===!1&&i1(t)}function n1(t,e){at(e,(n,r)=>{th(t,n,r)})}function th(t,e,n){const r=new de("/.info/"+e),s=je(n);t.infoData_.updateSnapshot(r,s);const i=no(t.infoSyncTree_,r,s);$t(t.eventQueue_,r,i)}function D_(t){return t.nextWriteId_++}function r1(t,e,n){const r=AS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=je(s).withIndex(e._queryParams.getIndex());yu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=no(t.serverSyncTree_,e._path,i);else{const l=zi(t.serverSyncTree_,e);o=v_(t.serverSyncTree_,e._path,i,l)}return $t(t.eventQueue_,e._path,o),Ul(t.serverSyncTree_,e,n,null,!0),i},s=>(ga(t,"get for query "+Ie(e)+" failed: "+s),Promise.reject(new Error(s))))}function s1(t,e,n,r,s){ga(t,"set",{path:e.toString(),value:n,priority:r});const i=eh(t),o=je(n,r),l=Vd(t.serverSyncTree_,e),c=C_(o,l,i),u=D_(t),f=__(t.serverSyncTree_,e,c,u,!0);Zd(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const _=d==="ok";_||lt("set at "+e+" failed: "+d);const v=lr(t.serverSyncTree_,u,!_);$t(t.eventQueue_,e,v),a1(t,s,d,y)});const h=F_(t,e);ya(t,h),$t(t.eventQueue_,h,[])}function i1(t){ga(t,"onDisconnectEvents");const e=eh(t),n=Al();hu(t.onDisconnect_,oe(),(s,i)=>{const o=US(s,i,t.serverSyncTree_,e);n_(n,s,o)});let r=[];hu(n,oe(),(s,i)=>{r=r.concat(no(t.serverSyncTree_,s,i));const o=F_(t,s);ya(t,o)}),t.onDisconnect_=Al(),$t(t.eventQueue_,oe(),r)}function o1(t,e,n){let r;J(e._path)===".info"?r=yu(t.infoSyncTree_,e,n):r=yu(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function vu(t,e,n){let r;J(e._path)===".info"?r=Ul(t.infoSyncTree_,e,n):r=Ul(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function l1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(JS)}function ga(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function a1(t,e,n,r){e&&Es(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function j_(t,e,n){return Vd(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function nh(t,e=t.transactionQueueTree_){if(e||_a(t,e),Ss(e)){const n=M_(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&c1(t,so(e),n)}else S_(e)&&ma(e,n=>{nh(t,n)})}function c1(t,e,n){const r=n.map(u=>u.currentWriteId),s=j_(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const f=n[u];P(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=Qe(e,f.path);i=i.updateChild(h,f.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{ga(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(lr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();_a(t,Jd(t.transactionQueueTree_,e)),nh(t,t.transactionQueueTree_),$t(t.eventQueue_,e,f);for(let d=0;d<h.length;d++)Es(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{lt("transaction at "+c.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}ya(t,e)}},o)}function ya(t,e){const n=O_(t,e),r=so(n),s=M_(t,n);return u1(t,s,r),r}function u1(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Qe(n,c.path);let f=!1,h;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,h=c.abortReason,s=s.concat(lr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=XS)f=!0,h="maxretry",s=s.concat(lr(t.serverSyncTree_,c.currentWriteId,!0));else{const d=j_(t,c.path,o);c.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){Xd("transaction failed: Data returned ",y,c.path);let _=je(y);typeof y=="object"&&y!=null&&dn(y,".priority")||(_=_.updatePriority(d.getPriority()));const D=c.currentWriteId,m=eh(t),p=C_(_,d,m);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=p,c.currentWriteId=D_(t),o.splice(o.indexOf(D),1),s=s.concat(__(t.serverSyncTree_,c.path,p,c.currentWriteId,c.applyLocally)),s=s.concat(lr(t.serverSyncTree_,D,!0))}else f=!0,h="nodata",s=s.concat(lr(t.serverSyncTree_,c.currentWriteId,!0))}$t(t.eventQueue_,n,s),s=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}_a(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Es(r[l]);nh(t,t.transactionQueueTree_)}function O_(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&Ss(r)===void 0;)r=Jd(r,n),e=he(e),n=J(e);return r}function M_(t,e){const n=[];return L_(t,e,n),n.sort((r,s)=>r.order-s.order),n}function L_(t,e,n){const r=Ss(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ma(e,s=>{L_(t,s,n)})}function _a(t,e){const n=Ss(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,E_(e,n.length>0?n:void 0)}ma(e,r=>{_a(t,r)})}function F_(t,e){const n=so(O_(t,e)),r=Jd(t.transactionQueueTree_,e);return WS(r,s=>{lc(t,s)}),lc(t,r),N_(r,s=>{lc(t,s)}),n}function lc(t,e){const n=Ss(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(lr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?E_(e,void 0):n.length=i+1,$t(t.eventQueue_,so(e),s);for(let o=0;o<r.length;o++)Es(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function d1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function h1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const wp=function(t,e){const n=f1(t),r=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||NC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ly(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new de(n.pathString)}},f1=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(f,h)),f<h&&(s=d1(t.substring(f,h)));const d=h1(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class p1{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class m1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class rh{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ee(this._path)?null:Gy(this._path)}get ref(){return new hn(this._repo,this._path)}get _queryIdentifier(){const e=op(this._queryParams),n=Td(e);return n==="{}"?"default":n}get _queryObject(){return op(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof rh))return!1;const n=this._repo===e._repo,r=Pd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+cE(this._path)}}class hn extends rh{constructor(e,n){super(e,n,new Md,!1)}get parent(){const e=Qy(this._path);return e===null?null:new hn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=xu(this.ref,e);return new Wi(this._node.getChild(n),r,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Wi(s,xu(this.ref,r),ke)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vr(t,e){return t=ct(t),t._checkNotDeleted("ref"),e!==void 0?xu(t._root,e):t._root}function xu(t,e){return t=ct(t),J(t._path)===null?KS("child","path",e):b_("child","path",e),new hn(t._repo,Te(t._path,e))}function g1(t){return R_("remove",t._path),wu(t,null)}function wu(t,e){t=ct(t),R_("set",t._path),GS("set",e,t._path);const n=new aa;return s1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function y1(t){t=ct(t);const e=new U_(()=>{}),n=new va(e);return r1(t._repo,t,n).then(r=>new Wi(r,new hn(t._repo,t._path),t._queryParams.getIndex()))}class va{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new p1("value",this,new Wi(e.snapshotNode,new hn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new m1(this,e,n):null}matches(e){return e instanceof va?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _1(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(f,h)=>{vu(t._repo,t,l),c(f,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new U_(n,i||void 0),l=new va(o);return o1(t._repo,t,l),()=>vu(t._repo,t,l)}function z_(t,e,n,r){return _1(t,"value",e,n,r)}function W_(t,e,n){vu(t._repo,t,null)}vS(hn);ES(hn);/**
 * @license
 * Copyright 2020 Google LLC
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
 */const v1="FIREBASE_DATABASE_EMULATOR_HOST",ku={};let x1=!1;function w1(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Xi(i);t.repoInfo_=new Ly(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function k1(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wp(i,s),l=o.repoInfo,c;typeof process<"u"&&Hf&&(c=Hf[v1]),c?(i=`http://${c}?ns=${l.namespace}`,o=wp(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new LC(t.name,t.options,e);QS("Invalid Firebase Database URL",o),ee(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const f=E1(l,t,u,new MC(t,n));return new S1(f,t)}function C1(t,e){const n=ku[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),l1(t),delete n[t.key]}function E1(t,e,n,r){let s=ku[e.name];s||(s={},ku[e.name]=s);let i=s[t.toURLString()];return i&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ZS(t,x1,n,r),s[t.toURLString()]=i,i}class S1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(e1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(C1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function N1(t=vy(),e){const n=Id(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Gw("database");r&&I1(n,...r)}return n}function I1(t,e,n,r={}){t=ct(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&gr(r,i.repoInfo_.emulatorOptions))return;an("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&an('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new $o($o.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Kw(r.mockUserToken,t.app.options.projectId);o=new $o(l)}Xi(e)&&my(e),w1(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function T1(t){xC(ks),hs(new yr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return k1(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Ln(Vf,Bf,t),Ln(Vf,Bf,"esm2020")}tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};T1();function H_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b1=H_,V_=new Ji("auth","Firebase",H_());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const zl=new Sd("@firebase/auth");function R1(t,...e){zl.logLevel<=ce.WARN&&zl.warn(`Auth (${ks}): ${t}`,...e)}function Go(t,...e){zl.logLevel<=ce.ERROR&&zl.error(`Auth (${ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Lt(t,...e){throw sh(t,...e)}function Vt(t,...e){return sh(t,...e)}function B_(t,e,n){const r={...b1(),[e]:n};return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return B_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V_.create(t,...e)}function $(t,e,...n){if(!t)throw sh(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function cn(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function A1(){return kp()==="http:"||kp()==="https:"}function kp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function P1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A1()||qw()||"connection"in navigator)?navigator.onLine:!0}function D1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cd()||fy()}get(){return P1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ih(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class $_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const O1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],M1=new io(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Jn(t,e,n,r,s={}){return G_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ws({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return Qw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Xi(t.emulatorConfig.host)&&(u.credentials="include"),$_.fetch()(await K_(t,t.config.apiHost,n,l),u)})}async function G_(t,e,n){t._canInitEmulator=!1;const r={...j1,...e};try{const s=new F1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ro(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw B_(t,f,u);Lt(t,f)}}catch(s){if(s instanceof Yn)throw s;Lt(t,"network-request-failed",{message:String(s)})}}async function xa(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function K_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ih(t.config,s):`${t.config.apiScheme}://${s}`;return O1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function L1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),M1.get())})}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vt(t,e,r);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class U1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return L1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function z1(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function W1(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function Wl(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H1(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=oh(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hi(ac(s.auth_time)),issuedAtTime:hi(ac(s.iat)),expirationTime:hi(ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=El(n);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ep(t){const e=oh(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&V1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class B1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Eu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Hl(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Hi(t,Wl(e,{idToken:n}));$(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(h=s.providerUserInfo)!=null&&h.length?Q_(s.providerUserInfo):[],o=G1(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Eu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function $1(t){const e=ct(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Q_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function K1(t,e){const n=await G_(t,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await K_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Xi(t.emulatorConfig.host)&&(c.credentials="include"),$_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Q1(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Ep(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await K1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new es;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function mn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new B1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Eu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H1(this,e)}reload(){return $1(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Hi(this,W1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:y,providerData:_,stsTokenManager:v}=n;$(h&&v,e,"internal-error");const D=es.fromJSON(this.name,v);$(typeof h=="string",e,"internal-error"),mn(r,e.name),mn(s,e.name),$(typeof d=="boolean",e,"internal-error"),$(typeof y=="boolean",e,"internal-error"),mn(i,e.name),mn(o,e.name),mn(l,e.name),mn(c,e.name),mn(u,e.name),mn(f,e.name);const m=new Pt({uid:h,auth:e,email:s,emailVerified:d,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:u,lastLoginAt:f});return _&&Array.isArray(_)&&(m.providerData=_.map(p=>({...p}))),c&&(m._redirectEventId=c),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new es;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Q_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new es;l.updateFromIdToken(r);const c=new Pt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Eu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Sp=new Map;function Xt(t){cn(t instanceof Function,"Expected a class definition");let e=Sp.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q_.type="NONE";const Np=q_;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wl(this.auth,{idToken:e}).catch(()=>{});return n?Pt._fromGetAccountInfoResponse(this.auth,n,e):null}return Pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Xt(Np),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Xt(Np);const o=Ko(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const d=await Wl(e,{idToken:f}).catch(()=>{});if(!d)break;h=await Pt._fromGetAccountInfoResponse(e,d,f)}else h=Pt._fromJSON(e,f);u!==i&&(l=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ts(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(J_(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Y_(t=Ye()){return/firefox\//i.test(t)}function J_(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(t=Ye()){return/crios\//i.test(t)}function Z_(t=Ye()){return/iemobile/i.test(t)}function ev(t=Ye()){return/android/i.test(t)}function tv(t=Ye()){return/blackberry/i.test(t)}function nv(t=Ye()){return/webos/i.test(t)}function lh(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function q1(t=Ye()){var e;return lh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Y1(){return Yw()&&document.documentMode===10}function rv(t=Ye()){return lh(t)||ev(t)||nv(t)||tv(t)||/windows phone/i.test(t)||Z_(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sv(t,e=[]){let n;switch(t){case"Browser":n=Ip(Ye());break;case"Worker":n=`${Ip(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class J1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function X1(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Z1=6;class eN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Z1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class tN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tp(this),this.idTokenSubscription=new Tp(this),this.beforeStateQueue=new J1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wl(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(zn(this));const n=e?ct(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X1(this),n=new eN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&R1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ns(t){return ct(t)}class Tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=ok(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nN(t){wa=t}function iv(t){return wa.loadJS(t)}function rN(){return wa.recaptchaEnterpriseScript}function sN(){return wa.gapiScript}function iN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oN{constructor(){this.enterprise=new lN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aN="recaptcha-enterprise",ov="NO_RECAPTCHA";class cN{constructor(e){this.type=aN,this.auth=Ns(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{z1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new U1(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Cp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ov)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oN().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rN();c.length!==0&&(c+=l),iv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function bp(t,e,n,r=!1,s=!1){const i=new cN(t);let o;if(s)o=ov;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rp(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await bp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function uN(t,e){const n=Id(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gr(i,e??{}))return s;Lt(s,"already-initialized")}return n.initialize({options:e})}function dN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hN(t,e,n){const r=Ns(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lv(e),{host:o,port:l}=fN(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(gr(u,r.config.emulator)&&gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Xi(o)?my(`${i}//${o}${c}`):pN()}function lv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fN(t){const e=lv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ap(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ap(o)}}}function Ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function mN(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function gN(t,e){return xa(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function yN(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function _N(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vi extends ah{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rp(e,n,"signInWithPassword",gN);case"emailLink":return yN(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rp(e,r,"signUpPassword",mN);case"emailLink":return _N(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ns(t,e){return xa(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vN="http://localhost";class wr extends ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function xN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wN(t){const e=Ks(Qs(t)).link,n=e?Ks(Qs(e)).deep_link_id:null,r=Ks(Qs(t)).deep_link_id;return(r?Ks(Qs(r)).link:null)||r||n||e||t}class ch{constructor(e){const n=Ks(Qs(e)),r=n.apiKey??null,s=n.oobCode??null,i=xN(n.mode??null);$(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wN(e);try{return new ch(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ch.parseLink(n);return $(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oo extends av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xn extends oo{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kn extends oo{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Cn extends oo{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Pp(r);return new gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pp(r);return new gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vl extends Yn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vl(e,n,r,s)}}function cv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(t,i,e,r):i})}async function kN(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function CN(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await Hi(t,cv(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=oh(i.idToken);$(o,r,"internal-error");const{sub:l}=o;return $(t.uid===l,r,"user-mismatch"),gs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function uv(t,e,n=!1){if(Tt(t.app))return Promise.reject(zn(t));const r="signIn",s=await cv(t,r,e),i=await gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function EN(t,e){return uv(Ns(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function SN(t){const e=Ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function NN(t,e,n){return Tt(t.app)?Promise.reject(zn(t)):EN(ct(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&SN(t),r})}function IN(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function TN(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function bN(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const RN=1e3,AN=10;class hv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Y1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hv.type="LOCAL";const PN=hv;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fv.type="SESSION";const pv=fv;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function DN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await DN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class jN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=uh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(d.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Bt(){return window}function ON(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function mv(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function MN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function FN(){return mv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const gv="firebaseLocalStorageDb",UN=1,$l="firebaseLocalStorage",yv="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function zN(){const t=indexedDB.deleteDatabase(gv);return new lo(t).toPromise()}function Su(){const t=indexedDB.open(gv,UN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:yv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await zN(),e(await Su()))})})}async function Dp(t,e,n){const r=Ca(t,!0).put({[yv]:e,value:n});return new lo(r).toPromise()}async function WN(t,e){const n=Ca(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function jp(t,e){const n=Ca(t,!0).delete(e);return new lo(n).toPromise()}const HN=800,VN=3;class _v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(FN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await MN(),!this.activeServiceWorker)return;this.sender=new jN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await Dp(e,Bl,"1"),await jp(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_v.type="LOCAL";const BN=_v;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function $N(t,e){return e?Xt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class dh extends ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GN(t){return uv(t.auth,new dh(t),t.bypassAuthState)}function KN(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),CN(n,new dh(t),t.bypassAuthState)}async function QN(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kN(n,new dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class vv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GN;case"linkViaPopup":case"linkViaRedirect":return QN;case"reauthViaPopup":case"reauthViaRedirect":return KN;default:Lt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const qN=new io(2e3,1e4);class Br extends vv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const YN="pendingRedirect",Qo=new Map;class JN extends vv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qo.get(this.auth._key());if(!e){try{const r=await XN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qo.set(this.auth._key(),e)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XN(t,e){const n=tI(e),r=eI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZN(t,e){Qo.set(t._key(),e)}function eI(t){return Xt(t._redirectPersistence)}function tI(t){return Ko(YN,t.config.apiKey,t.name)}async function nI(t,e,n=!1){if(Tt(t.app))return Promise.reject(zn(t));const r=Ns(t),s=$N(r,e),o=await new JN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const rI=10*60*1e3;class sI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xv(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Op(e))}saveEventToCache(e){this.cachedEventUids.add(Op(e)),this.lastProcessedEventTime=Date.now()}}function Op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function oI(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const lI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aI=/^https?/;async function cI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oI(t);for(const n of e)try{if(uI(n))return}catch{}Lt(t,"unauthorized-domain")}function uI(t){const e=Cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aI.test(n))return!1;if(lI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dI=new io(3e4,6e4);function Mp(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hI(t){return new Promise((e,n)=>{var s,i,o;function r(){Mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mp(),n(Vt(t,"network-request-failed"))},timeout:dI.get()})}if((i=(s=Bt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Bt().gapi)!=null&&o.load)r();else{const l=iN("iframefcb");return Bt()[l]=()=>{gapi.load?r():n(Vt(t,"network-request-failed"))},iv(`${sN()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function fI(t){return qo=qo||hI(t),qo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const pI=new io(5e3,15e3),mI="__/auth/iframe",gI="emulator/auth/iframe",yI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ih(e,gI):`https://${t.config.authDomain}/${mI}`,r={apiKey:e.apiKey,appName:t.name,v:ks},s=_I.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ws(r).slice(1)}`}async function xI(t){const e=await fI(t),n=Bt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:vI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),l=Bt().setTimeout(()=>{i(o)},pI.get());function c(){Bt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,CI=600,EI="_blank",SI="http://localhost";class Lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NI(t,e,n,r=kI,s=CI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...wI,width:r.toString(),height:s.toString(),top:i,left:o},u=Ye().toLowerCase();n&&(l=X_(u)?EI:n),Y_(u)&&(e=e||SI,c.scrollbars="yes");const f=Object.entries(c).reduce((d,[y,_])=>`${d}${y}=${_},`,"");if(q1(u)&&l!=="_self")return II(e||"",l),new Lp(null);const h=window.open(e||"",l,f);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Lp(h)}function II(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const TI="__/auth/handler",bI="emulator/auth/handler",RI=encodeURIComponent("fac");async function Fp(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:s};if(e instanceof av){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof oo){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${RI}=${encodeURIComponent(c)}`:"";return`${AI(t)}?${ws(l).slice(1)}${u}`}function AI({config:t}){return t.emulator?ih(t,bI):`https://${t.authDomain}/${TI}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const cc="webStorageSupport";class PI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pv,this._completeRedirectFn=nI,this._overrideRedirectResult=ZN}async _openPopup(e,n,r,s){var o;cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fp(e,n,r,Cu(),s);return NI(e,i,uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fp(e,n,r,Cu(),s);return ON(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xI(e),r=new sI(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[cc];i!==void 0&&n(!!i),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||J_()||lh()}}const DI=PI;var Up="@firebase/auth",zp="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function OI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MI(t){hs(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(t)},u=new tN(r,s,i,c);return dN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new yr("auth-internal",e=>{const n=Ns(e.getProvider("auth").getImmediate());return(r=>new jI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Up,zp,OI(t)),Ln(Up,zp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const LI=5*60,FI=hy("authIdTokenMaxAge")||LI;let Wp=null;const UI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FI)return;const s=n==null?void 0:n.token;Wp!==s&&(Wp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zI(t=vy()){const e=Id(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uN(t,{popupRedirectResolver:DI,persistence:[BN,PN,pv]}),r=hy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UI(i.toString());TN(n,o,()=>o(n.currentUser)),IN(n,l=>o(l))}}const s=uy("auth");return s&&hN(n,`http://${s}`),n}function WI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}nN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MI("Browser");const HI={apiKey:"AIzaSyBtfqbdyZkSC8XrAR4JabrXymMha7QZtuA",authDomain:"workshop-manager-b1e10.firebaseapp.com",databaseURL:"https://workshop-manager-b1e10-default-rtdb.europe-west1.firebasedatabase.app",projectId:"workshop-manager-b1e10",storageBucket:"workshop-manager-b1e10.firebasestorage.app",messagingSenderId:"202799264327",appId:"1:202799264327:web:ced440ded2b6270e75f762"},wv=_y(HI),$r=N1(wv),Hp=zI(wv),VI=({open:t,onClose:e,t:n,showToast:r,isAuthenticated:s,onSignIn:i})=>{const[o,l]=E.useState(""),[c,u]=E.useState([]),[f,h]=E.useState(!1),[d,y]=E.useState(null);E.useEffect(()=>{if(!t||!s)return;h(!0);const p=Vr($r,"rooms");return z_(p,g=>{const x=g.val();if(x){const N=Object.entries(x).map(([I,T])=>({code:I,createdAt:T.createdAt||null,workshopCount:T.workshops?Array.isArray(T.workshops)?T.workshops.length:Object.keys(T.workshops).length:0,teamCount:T.teams?Array.isArray(T.teams)?T.teams.length:Object.keys(T.teams).length:0,assetCount:T.assets?Array.isArray(T.assets)?T.assets.length:Object.keys(T.assets).length:0}));u(N)}else u([]);h(!1)},()=>h(!1)),()=>W_(p)},[t,s]);const _=async()=>{if(!o.trim())return;const p=await i(o);l(""),p||r(n("wrongPassword"))},v=async p=>{await g1(Vr($r,`rooms/${p}`)),y(null)},D=()=>{l(""),e()},m=p=>{if(!p)return"—";const g=new Date(p);return g.toLocaleDateString()+" "+g.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return a.jsxs(ur,{open:t,onClose:D,title:n("admin")||"Admin",children:[a.jsx("div",{className:"space-y-4",children:s?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("p",{className:"text-sm font-medium text-heading flex items-center gap-2",children:[a.jsx(sy,{size:14,className:"text-blue-400"}),c.length," ",c.length===1?"room":"rooms"]}),f&&a.jsx(xw,{size:14,className:"text-faint animate-spin"})]}),c.length===0&&!f&&a.jsx("div",{className:"bg-card-alt rounded-xl p-6 border text-center",children:a.jsx("p",{className:"text-sm text-faint",children:"No rooms found"})}),a.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto",children:c.map(p=>a.jsxs("div",{className:"bg-card-alt rounded-xl p-3.5 border flex items-center gap-3",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-sm font-bold text-heading font-mono tracking-wider",children:p.code}),a.jsxs("p",{className:"text-xs text-muted mt-1",children:[p.workshopCount,"w · ",p.teamCount,"t · ",p.assetCount,"a"]}),a.jsx("p",{className:"text-xs text-faint mt-0.5",children:m(p.createdAt)})]}),a.jsx("button",{onClick:()=>y(p.code),className:"p-2 rounded-lg text-faint hover:text-red-400 hover:bg-red-950/20 transition-colors shrink-0",children:a.jsx(en,{size:16})})]},p.code))})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bg-card-alt rounded-xl p-4 border text-center space-y-2",children:[a.jsx(kw,{size:28,className:"text-faint mx-auto"}),a.jsx("p",{className:"text-sm text-muted",children:n("enterPassword")})]}),a.jsx("input",{type:"password",value:o,onChange:p=>l(p.target.value),onKeyDown:p=>p.key==="Enter"&&_(),placeholder:n("password"),className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{className:"w-full",onClick:_,disabled:!o.trim(),children:n("unlock")||"Unlock"})]})}),a.jsx(Vn,{open:!!d,onClose:()=>y(null),onConfirm:()=>v(d),message:`Delete room ${d}? This cannot be undone.`,t:n})]})},BI=()=>{const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t[Math.floor(Math.random()*t.length)];return e},$I=(t,e)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>t(...r),e)}},GI=({workshops:t,setWorkshops:e,assets:n,setAssets:r,categories:s,setCategories:i,teams:o,setTeams:l,checkouts:c,setCheckouts:u})=>{const[f,h]=E.useState(()=>q.get("workshop_room_code",null)),[d,y]=E.useState(navigator.onLine),[_,v]=E.useState("disconnected"),[D,m]=E.useState(!1),p=E.useRef(!1),g=E.useRef(!1),x=E.useRef(!1),N=E.useRef({});E.useEffect(()=>{const C=()=>y(!0),w=()=>y(!1);return window.addEventListener("online",C),window.addEventListener("offline",w),()=>{window.removeEventListener("online",C),window.removeEventListener("offline",w)}},[]),E.useEffect(()=>{const C=bN(Hp,w=>{m(!!w)});return()=>C()},[]);const I=E.useCallback(C=>(N.current[C]||(N.current[C]=$I(w=>{f&&wu(Vr($r,`rooms/${f}/${C}`),w).catch(()=>{})},300)),N.current[C]),[f]);E.useEffect(()=>{if(!f){v("disconnected"),g.current=!1;return}v("connecting");const C=R=>Vr($r,`rooms/${f}/${R}`),w=[{path:"workshops",setter:e},{path:"assets",setter:r},{path:"categories",setter:i},{path:"teams",setter:l},{path:"checkouts",setter:u}],S=(R,H)=>{if(R===null)return null;let F=Array.isArray(R)?R:Object.values(R);return H==="teams"&&(F=F.map(Y=>({...Y,members:Y.members?Array.isArray(Y.members)?Y.members:Object.values(Y.members):[]}))),F};let z=0;const B=w.length;x.current=!1;const Z=w.map(({path:R,setter:H})=>{const F=C(R);let Y=!0;return z_(F,ne=>{const Ue=ne.val(),j=S(Ue,R);j!==null&&(p.current=!0,H(j),setTimeout(()=>{p.current=!1},200)),Y&&(Y=!1,z++,z>=B&&(x.current=!0)),v("connected")},ne=>{console.error(`Sync error on ${R}:`,ne),v("disconnected")}),()=>W_(F)});return g.current=!0,()=>{Z.forEach(R=>R()),g.current=!1,x.current=!1,N.current={}}},[f,e,r,i,l,u]),E.useEffect(()=>{!f||p.current||!x.current||I("workshops")(t)},[t,f,I]),E.useEffect(()=>{!f||p.current||!x.current||I("assets")(n)},[n,f,I]),E.useEffect(()=>{!f||p.current||!x.current||I("categories")(s)},[s,f,I]),E.useEffect(()=>{!f||p.current||!x.current||I("teams")(o)},[o,f,I]),E.useEffect(()=>{!f||p.current||!x.current||I("checkouts")(c)},[c,f,I]);const T="admin@workshop.local",A=E.useCallback(async C=>{try{return await NN(Hp,T,C),!0}catch{return!1}},[]),L=E.useCallback(async()=>{const C=BI(),w=Vr($r,`rooms/${C}`);try{return await wu(w,{workshops:t,assets:n,categories:s,teams:o,checkouts:c,createdAt:new Date().toISOString()}),h(C),q.set("workshop_room_code",C),{success:!0,code:C}}catch(S){return{success:!1,error:S.message}}},[t,n,s,o,c]),M=E.useCallback(async C=>{const w=C.toUpperCase().trim(),S=Vr($r,`rooms/${w}`);try{return(await y1(S)).exists()?(h(w),q.set("workshop_room_code",w),{success:!0,code:w}):{success:!1,error:"not_found"}}catch(z){return{success:!1,error:z.message}}},[]),K=E.useCallback(()=>{h(null),q.set("workshop_room_code",null),localStorage.removeItem("workshop_room_code"),v("disconnected")},[]);return{roomCode:f,isOnline:d,syncStatus:_,syncEnabled:!!f,createRoom:L,joinRoom:M,disconnect:K,verifyMasterPassword:A,canWrite:!f||d,isAuthenticated:D}},KI=["workshop_assets","workshop_categories","workshop_teams","workshop_checkouts","workshop_lang","workshop_theme","workshop_setup_complete","workshop_workshops","workshop_active_workshop","workshop_data_version","workshop_room_code"],QI=()=>{const[t,e]=E.useState(()=>q.get("workshop_lang","en")),[n,r]=E.useState(()=>q.get("workshop_theme","dark")),[s,i]=E.useState("dashboard"),[o,l]=E.useState(null),[c,u]=E.useState(()=>q.get("workshop_setup_complete",!1)),[f,h]=E.useState(!1),[d,y]=E.useState(!1),[_,v]=E.useState(!1),[D,m]=E.useState(!1),[p,g]=E.useState(""),[x,N]=E.useState(!1),[I,T]=E.useState(""),A=E.useRef(null),[L,M]=E.useState(()=>q.get("workshop_workshops",[])),[K,C]=E.useState(()=>q.get("workshop_active_workshop",null)),[w,S]=E.useState(()=>q.get("workshop_assets",[])),[z,B]=E.useState(()=>q.get("workshop_categories",[])),[Z,R]=E.useState(()=>q.get("workshop_teams",[])),[H,F]=E.useState(()=>q.get("workshop_checkouts",[])),{roomCode:Y,isOnline:ne,syncStatus:Ue,syncEnabled:j,createRoom:ue,joinRoom:k,disconnect:U,verifyMasterPassword:le,canWrite:Ze,isAuthenticated:Xn}=GI({workshops:L,setWorkshops:M,assets:w,setAssets:S,categories:z,setCategories:B,teams:Z,setTeams:R,checkouts:H,setCheckouts:F});E.useEffect(()=>{q.get("workshop_data_version",0)<Io&&q.get("workshop_setup_complete",!1)&&Iw(t)&&(M(q.get("workshop_workshops",[])),C(q.get("workshop_active_workshop",null)),S(q.get("workshop_assets",[])),B(q.get("workshop_categories",[])),F(q.get("workshop_checkouts",[])))},[]),E.useEffect(()=>{L.length>0&&!L.find(W=>W.id===K)&&C(L[0].id)},[L,K]);const Q=E.useMemo(()=>w.filter(W=>W.workshopId===K),[w,K]),ut=E.useMemo(()=>z.filter(W=>W.workshopId===K),[z,K]),fn=E.useMemo(()=>H.filter(W=>W.workshopId===K),[H,K]),Nr=E.useMemo(()=>L.find(W=>W.id===K),[L,K]);E.useEffect(()=>{q.set("workshop_assets",w)},[w]),E.useEffect(()=>{q.set("workshop_categories",z)},[z]),E.useEffect(()=>{q.set("workshop_teams",Z)},[Z]),E.useEffect(()=>{q.set("workshop_checkouts",H)},[H]),E.useEffect(()=>{q.set("workshop_lang",t)},[t]),E.useEffect(()=>{q.set("workshop_theme",n)},[n]),E.useEffect(()=>{q.set("workshop_workshops",L)},[L]),E.useEffect(()=>{q.set("workshop_active_workshop",K)},[K]),E.useEffect(()=>{document.documentElement.setAttribute("data-theme",n)},[n]);const V=W=>{var ze;return((ze=Rf[t])==null?void 0:ze[W])||Rf.en[W]||W},Se=E.useCallback(W=>{l(W),setTimeout(()=>l(null),3e3)},[]),kv=E.useCallback(W=>{if(!Ze){Se(V("offlineReadOnly"));return}F(ze=>ze.map(Ge=>Ge.id===W.id?{...Ge,returnedDate:new Date().toISOString(),status:"returned"}:Ge)),Se(V("returnSuccess"))},[Se,t,Ze]),Cv=()=>r(W=>W==="dark"?"light":"dark"),Ev=()=>e(W=>W==="en"?"tr":"en"),hh=async()=>{if(!I.trim())return;N(!0);const W=await le(I);N(!1),W?T(""):Se(V("wrongPassword"))},Sv=async()=>{N(!0);const W=await ue();N(!1),W.success?Se(V("roomCreated")):Se(W.error)},fh=async()=>{if(!p.trim())return;N(!0);const W=await k(p);N(!1),W.success?(Se(V("roomJoined")),g("")):W.error==="not_found"?Se(V("roomNotFound")):Se(W.error)},Nv=()=>{U(),Se(V("disconnected")),v(!1)},Iv=()=>{var W;Y&&((W=navigator.clipboard)==null||W.writeText(Y).then(()=>Se(V("codeCopied"))).catch(()=>{}))},Tv=W=>{const ze=W.workshop||Af(V("defaultWorkshop"));M([ze]),C(ze.id),S((W.assets||[]).map(Ge=>({...Ge,workshopId:ze.id}))),B((W.categories||[]).map(Ge=>({...Ge,workshopId:ze.id}))),R(W.teams||[]),F([]),u(!0),q.set("workshop_setup_complete",!0),q.set("workshop_data_version",Io)},bv=()=>{const W={version:Io,exportDate:new Date().toISOString(),workshops:L,assets:w,categories:z,teams:Z,checkouts:H,activeWorkshopId:K,settings:{lang:t,theme:n}},ze=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),Ge=URL.createObjectURL(ze),Ir=document.createElement("a");Ir.href=Ge,Ir.download=`workshop-backup-${new Date().toISOString().split("T")[0]}.json`,Ir.click(),URL.revokeObjectURL(Ge),Se(V("exportSuccess")),h(!1)},Rv=W=>{var Ir;const ze=(Ir=W.target.files)==null?void 0:Ir[0];if(!ze)return;const Ge=new FileReader;Ge.onload=Dv=>{var ph,mh;try{const Re=JSON.parse(Dv.target.result);if(!Re.assets||!Re.teams)throw new Error("Invalid");if(S(Re.assets),B(Re.categories||[]),R(Re.teams),F(Re.checkouts||[]),Re.workshops&&Re.workshops.length>0)M(Re.workshops),C(Re.activeWorkshopId||Re.workshops[0].id);else{const Ts=Af(V("defaultWorkshop"));M([Ts]),C(Ts.id),S(Re.assets.map(bs=>({...bs,workshopId:Ts.id}))),B((Re.categories||[]).map(bs=>({...bs,workshopId:Ts.id}))),F((Re.checkouts||[]).map(bs=>({...bs,workshopId:Ts.id})))}(ph=Re.settings)!=null&&ph.lang&&e(Re.settings.lang),(mh=Re.settings)!=null&&mh.theme&&r(Re.settings.theme),u(!0),q.set("workshop_setup_complete",!0),q.set("workshop_data_version",Io),Se(V("importSuccess"))}catch{Se(V("importError"))}},Ge.readAsText(ze),W.target.value="",h(!1)},Av=()=>{KI.forEach(W=>localStorage.removeItem(W)),y(!1),h(!1),window.location.reload()};if(!c&&!q.get("workshop_setup_complete",!1))return a.jsx(Ow,{onComplete:Tv,t:V});const Pv=[{id:"dashboard",label:V("dashboard"),icon:yw},{id:"assets",label:V("assets"),icon:Ri},{id:"checkout",label:V("checkout"),icon:ry},{id:"teams",label:V("teams"),icon:Vo},{id:"history",label:V("history"),icon:xd}];return a.jsxs("div",{className:"min-h-screen bg-app pb-20",children:[o&&a.jsx(Tw,{message:o,onClose:()=>l(null)}),a.jsxs("div",{className:"max-w-lg mx-auto px-4 pt-4 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[j&&!ne&&a.jsxs("span",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/20 text-red-400 text-xs font-medium",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx(bf,{size:12}),V("offline")]}),j&&ne&&Ue==="connected"&&a.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/15 text-emerald-400 text-xs font-medium hover:bg-emerald-600/25 transition-colors",children:[a.jsx(No,{size:12}),Y]}),j&&ne&&Ue==="connecting"&&a.jsxs("span",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600/15 text-amber-400 text-xs font-medium",style:{animation:"pulse-soft 1.5s infinite"},children:[a.jsx(No,{size:12}),V("connecting")]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:Ev,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors",title:V("language"),children:[a.jsx(gw,{size:14}),a.jsx("span",{children:t==="en"?"TR":"EN"})]}),a.jsxs("button",{onClick:Cv,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors",title:V("theme"),children:[n==="dark"?a.jsx(Cw,{size:14}):a.jsx(vw,{size:14}),a.jsx("span",{children:V(n==="dark"?"lightMode":"darkMode")})]}),a.jsx("button",{onClick:()=>h(!f),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors",title:"Settings",children:a.jsx(ww,{size:14})})]})]}),f&&a.jsx("div",{className:"max-w-lg mx-auto px-4 mt-2",children:a.jsxs("div",{className:"bg-card-solid rounded-2xl border p-4 space-y-2 shadow-xl",style:{animation:"fadeIn 0.2s ease"},children:[a.jsxs("button",{onClick:()=>{v(!0),h(!1)},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors",children:[j?a.jsx(No,{size:16,className:"text-emerald-400"}):a.jsx(If,{size:16,className:"text-faint"}),a.jsx("span",{className:"flex-1 text-left",children:V("sync")}),j&&a.jsx("span",{className:"text-xs text-emerald-400",children:V("connected")})]}),a.jsx("hr",{className:"border-themed"}),a.jsxs("button",{onClick:bv,className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors",children:[a.jsx(pw,{size:16,className:"text-blue-400"}),V("exportData")]}),a.jsxs("button",{onClick:()=>{var W;return(W=A.current)==null?void 0:W.click()},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors",children:[a.jsx(Sw,{size:16,className:"text-emerald-400"}),V("importData")]}),a.jsx("input",{ref:A,type:"file",accept:".json",className:"hidden",onChange:Rv}),a.jsx("hr",{className:"border-themed"}),a.jsxs("button",{onClick:()=>{y(!0)},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-red-400 hover:bg-red-950/20 transition-colors",children:[a.jsx(si,{size:16}),V("resetApp")]}),a.jsx("hr",{className:"border-themed"}),a.jsxs("button",{onClick:()=>{m(!0),h(!1)},className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-amber-400 hover:bg-amber-950/20 transition-colors",children:[a.jsx(sy,{size:16}),V("admin")||"Admin"]})]})}),a.jsx(ur,{open:_,onClose:()=>v(!1),title:V("sync"),children:a.jsx("div",{className:"space-y-4",children:j?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bg-emerald-600/10 rounded-xl p-4 border border-emerald-600/20 text-center space-y-2",children:[a.jsx(No,{size:28,className:"text-emerald-400 mx-auto"}),a.jsx("p",{className:"text-sm font-medium text-emerald-400",children:V("connected")}),a.jsx("p",{className:"text-2xl font-bold text-heading tracking-widest",children:Y}),a.jsx("p",{className:"text-xs text-muted",children:V("roomCode")})]}),a.jsxs("button",{onClick:Iv,className:"w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors",children:[a.jsx(fw,{size:14}),V("copyCode")]}),a.jsxs("button",{onClick:Nv,className:"w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-950/20 transition-colors",children:[a.jsx(Ew,{size:14}),V("disconnect")]})]}):a.jsx(a.Fragment,{children:Xn?a.jsxs(a.Fragment,{children:[a.jsxs(se,{className:"w-full",onClick:Sv,disabled:x,children:[a.jsx(_w,{size:14}),x?"...":V("createRoom")]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"flex-1 h-px bg-card"}),a.jsx("span",{className:"text-xs text-faint uppercase",children:V("or")||"or"}),a.jsx("div",{className:"flex-1 h-px bg-card"})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{value:p,onChange:W=>g(W.target.value.toUpperCase()),onKeyDown:W=>W.key==="Enter"&&fh(),placeholder:V("enterRoomCode"),maxLength:6,className:"flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm text-center font-mono tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{onClick:fh,disabled:x||p.length<4,children:x?"...":V("joinRoom")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bg-card-alt rounded-xl p-4 border text-center space-y-2",children:[a.jsx(If,{size:28,className:"text-faint mx-auto"}),a.jsx("p",{className:"text-sm text-muted",children:V("enterPassword")})]}),a.jsx("input",{type:"password",value:I,onChange:W=>T(W.target.value),onKeyDown:W=>W.key==="Enter"&&hh(),placeholder:V("password"),className:"w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}),a.jsx(se,{className:"w-full",onClick:hh,disabled:x||!I.trim(),children:x?"...":V("unlock")||"Unlock"})]})})})}),j&&!ne&&a.jsx("div",{className:"max-w-lg mx-auto px-4 pt-3",children:a.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-xl bg-red-600/10 border border-red-600/20 text-xs text-red-400 font-medium",style:{animation:"fadeIn 0.3s ease"},children:[a.jsx(bf,{size:14}),a.jsx("span",{children:V("offlineReadOnly")})]})}),a.jsx(Mw,{workshops:L,activeWorkshopId:K,setActiveWorkshopId:C,setWorkshops:M,checkouts:H,setAssets:S,setCategories:B,setCheckouts:F,showToast:Se,t:V,canWrite:Ze}),a.jsxs("div",{className:"max-w-lg mx-auto px-4 pt-4",children:[s==="dashboard"&&a.jsx(bw,{assets:Q,checkouts:fn,categories:ut,teams:Z,onReturn:kv,t:V,lang:t,workshopName:Nr==null?void 0:Nr.name,canWrite:Ze}),s==="assets"&&a.jsx(Aw,{assets:Q,categories:ut,checkouts:fn,setAssets:S,setCategories:B,setCheckouts:F,showToast:Se,t:V,activeWorkshopId:K,canWrite:Ze}),s==="checkout"&&a.jsx(Pw,{assets:Q,teams:Z,checkouts:fn,setCheckouts:F,categories:ut,showToast:Se,t:V,activeWorkshopId:K,canWrite:Ze}),s==="teams"&&a.jsx(Dw,{teams:Z,setTeams:R,checkouts:H,setCheckouts:F,showToast:Se,t:V,canWrite:Ze}),s==="history"&&a.jsx(jw,{checkouts:fn,teams:Z,t:V,lang:t,workshopName:Nr==null?void 0:Nr.name})]}),a.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-nav backdrop-blur-lg border-t z-40",children:a.jsx("div",{className:"max-w-lg mx-auto flex",children:Pv.map(({id:W,label:ze,icon:Ge})=>a.jsxs("button",{onClick:()=>i(W),className:`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${s===W?"text-blue-400":"text-faint hover:text-body"}`,children:[a.jsx(Ge,{size:20}),a.jsx("span",{className:"text-[10px] font-medium",children:ze})]},W))})}),a.jsx(Vn,{open:d,onClose:()=>y(!1),onConfirm:Av,message:V("resetConfirm"),t:V}),a.jsx(VI,{open:D,onClose:()=>m(!1),t:V,showToast:Se,isAuthenticated:Xn,onSignIn:le})]})},qI=(()=>{try{return JSON.parse(localStorage.getItem("workshop_theme"))||"dark"}catch{return"dark"}})();document.documentElement.setAttribute("data-theme",qI);uc.createRoot(document.getElementById("root")).render(a.jsx(Yv.StrictMode,{children:a.jsx(QI,{})}));
