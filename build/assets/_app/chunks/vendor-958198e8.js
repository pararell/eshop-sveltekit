function t(){}function r(t,r){for(const n in r)t[n]=r[n];return t}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,r){return t!=t?r==r:t!==r||t&&"object"==typeof t||"function"==typeof t}function c(r,...n){if(null==r)return t;const e=r.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function u(t){let r;return c(t,(t=>r=t))(),r}function a(t,r,n){t.$$.on_destroy.push(c(r,n))}function f(t,r,n,e){if(t){const o=h(t,r,n,e);return t[0](o)}}function h(t,n,e,o){return t[1]&&o?r(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t,r,n,e,o,s,i){const c=function(t,r,n,e){if(t[2]&&e){const o=t[2](e(n));if(void 0===r.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(r.dirty.length,o.length);for(let e=0;e<n;e+=1)t[e]=r.dirty[e]|o[e];return t}return r.dirty|o}return r.dirty}(r,e,o,s);if(c){const o=h(r,n,e,i);t.p(o,c)}}function p(t,r){t.appendChild(r)}function b(t,r,n){t.insertBefore(r,n||null)}function d(t){t.parentNode.removeChild(t)}function y(t,r){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(r)}function _(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function m(){return v("")}function g(t,r,n,e){return t.addEventListener(r,n,e),()=>t.removeEventListener(r,n,e)}function E(t,r,n){null==n?t.removeAttribute(r):t.getAttribute(r)!==n&&t.setAttribute(r,n)}function S(t){return Array.from(t.childNodes)}function x(t,r,n,e){for(let o=0;o<t.length;o+=1){const e=t[o];if(e.nodeName===r){let r=0;const s=[];for(;r<e.attributes.length;){const t=e.attributes[r++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)e.removeAttribute(s[t]);return t.splice(o,1)[0]}}return e?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(r):_(r)}function $(t,r){for(let n=0;n<t.length;n+=1){const e=t[n];if(3===e.nodeType)return e.data=""+r,t.splice(n,1)[0]}return v(r)}function O(t){return $(t," ")}function T(t,r){r=""+r,t.wholeText!==r&&(t.data=r)}function P(t,r){t.value=null==r?"":r}function j(t,r,n){t.classList[n?"add":"remove"](r)}function k(t,r=document.body){return Array.from(r.querySelectorAll(t))}let D;function H(t){D=t}function A(){if(!D)throw new Error("Function called outside component initialization");return D}function M(t){A().$$.on_mount.push(t)}function U(t){A().$$.after_update.push(t)}function V(t,r){A().$$.context.set(t,r)}const N=[],Y=[],K=[],L=[],q=Promise.resolve();let z=!1;function C(t){K.push(t)}let B=!1;const F=new Set;function R(){if(!B){B=!0;do{for(let t=0;t<N.length;t+=1){const r=N[t];H(r),G(r.$$)}for(H(null),N.length=0;Y.length;)Y.pop()();for(let t=0;t<K.length;t+=1){const r=K[t];F.has(r)||(F.add(r),r())}K.length=0}while(N.length);for(;L.length;)L.pop()();z=!1,B=!1,F.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(C)}}const I=new Set;let J;function Q(){J={r:0,c:[],p:J}}function W(){J.r||o(J.c),J=J.p}function X(t,r){t&&t.i&&(I.delete(t),t.i(r))}function Z(t,r,n,e){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push((()=>{I.delete(t),e&&(n&&t.d(1),e())})),t.o(r)}}function tt(t,r){const n={},e={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=r[s];if(c){for(const t in i)t in c||(e[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const i in e)i in n||(n[i]=void 0);return n}function rt(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function et(t,r){t&&t.l(r)}function ot(t,r,e,i){const{fragment:c,on_mount:u,on_destroy:a,after_update:f}=t.$$;c&&c.m(r,e),i||C((()=>{const r=u.map(n).filter(s);a?a.push(...r):o(r),t.$$.on_mount=[]})),f.forEach(C)}function st(t,r){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(r),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,r){-1===t.$$.dirty[0]&&(N.push(t),z||(z=!0,q.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function ct(r,n,s,i,c,u,a=[-1]){const f=D;H(r);const h=r.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:e(),dirty:a,skip_bound:!1};let l=!1;if(h.ctx=s?s(r,n.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),l&&it(r,t)),n})):[],h.update(),l=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){const t=S(n.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();n.intro&&X(r.$$.fragment),ot(r,n.target,n.anchor,n.customElement),R()}H(f)}class ut{$destroy(){st(this,1),this.$destroy=t}$on(t,r){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const t=n.indexOf(r);-1!==t&&n.splice(t,1)}}$set(t){var r;this.$$set&&(r=t,0!==Object.keys(r).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var at=function(t,r){return(at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};function ft(t,r){function n(){this.constructor=t}at(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function ht(t){return"function"==typeof t}var lt=!1,pt={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;lt=t},get useDeprecatedSynchronousErrorHandling(){return lt}};function bt(t){setTimeout((function(){throw t}),0)}var dt={closed:!0,next:function(t){},error:function(t){if(pt.useDeprecatedSynchronousErrorHandling)throw t;bt(t)},complete:function(){}},yt=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();var _t=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),vt=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n,e=this,o=e._parentOrParents,s=e._ctorUnsubscribe,i=e._unsubscribe,c=e._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var u=0;u<o.length;++u){o[u].remove(this)}if(ht(i)){s&&(this._unsubscribe=void 0);try{i.call(this)}catch(h){r=h instanceof _t?wt(h.errors):[h]}}if(yt(c)){u=-1;for(var a=c.length;++u<a;){var f=c[u];if(null!==(n=f)&&"object"==typeof n)try{f.unsubscribe()}catch(h){r=r||[],h instanceof _t?r=r.concat(wt(h.errors)):r.push(h)}}}if(r)throw new _t(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function wt(t){return t.reduce((function(t,r){return t.concat(r instanceof _t?r.errors:r)}),[])}var mt=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),gt=function(t){function r(n,e,o){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=dt;break;case 1:if(!n){s.destination=dt;break}if("object"==typeof n){n instanceof r?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new Et(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new Et(s,n,e,o)}return s}return ft(r,t),r.prototype[mt]=function(){return this},r.create=function(t,n,e){var o=new r(t,n,e);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(vt),Et=function(t){function r(r,n,e,o){var s,i=t.call(this)||this;i._parentSubscriber=r;var c=i;return ht(n)?s=n:n&&(s=n.next,e=n.error,o=n.complete,n!==dt&&(ht((c=Object.create(n)).unsubscribe)&&i.add(c.unsubscribe.bind(c)),c.unsubscribe=i.unsubscribe.bind(i))),i._context=c,i._next=s,i._error=e,i._complete=o,i}return ft(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;pt.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=pt.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):bt(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;bt(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};pt.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(n){if(this.unsubscribe(),pt.useDeprecatedSynchronousErrorHandling)throw n;bt(n)}},r.prototype.__tryOrSetError=function(t,r,n){if(!pt.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(e){return pt.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(bt(e),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(gt);var St=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function xt(t){return t}function $t(t){return 0===t.length?xt:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var Ot=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e=this.operator,o=function(t,r,n){if(t){if(t instanceof gt)return t;if(t[mt])return t[mt]()}return t||r||n?new gt(t,r,n):new gt(dt)}(t,r,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||pt.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),pt.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){pt.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,n=r.closed,e=r.destination,o=r.isStopped;if(n||o)return!1;t=e&&e instanceof gt?e:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=Tt(r))((function(r,e){var o;o=n.subscribe((function(r){try{t(r)}catch(n){e(n),o&&o.unsubscribe()}}),e,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[St]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:$t(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=Tt(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function Tt(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}var Pt=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),jt=function(t){function r(r,n){var e=t.call(this)||this;return e.subject=r,e.subscriber=n,e.closed=!1,e}return ft(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var n=r.indexOf(this.subscriber);-1!==n&&r.splice(n,1)}}},r}(vt),kt=function(t){function r(r){var n=t.call(this,r)||this;return n.destination=r,n}return ft(r,t),r}(gt),Dt=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return ft(r,t),r.prototype[mt]=function(){return new kt(this)},r.prototype.lift=function(t){var r=new Ht(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new Pt;if(!this.isStopped)for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new Pt;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new Pt;this.isStopped=!0;for(var t=this.observers,r=t.length,n=t.slice(),e=0;e<r;e++)n[e].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new Pt;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new Pt;return this.hasError?(t.error(this.thrownError),vt.EMPTY):this.isStopped?(t.complete(),vt.EMPTY):(this.observers.push(t),new jt(this,t))},r.prototype.asObservable=function(){var t=new Ot;return t.source=this,t},r.create=function(t,r){return new Ht(t,r)},r}(Ot),Ht=function(t){function r(r,n){var e=t.call(this)||this;return e.destination=r,e.source=n,e}return ft(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):vt.EMPTY},r}(Dt),At=function(t){function r(r){var n=t.call(this)||this;return n._value=r,n}return ft(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),r.prototype._subscribe=function(r){var n=t.prototype._subscribe.call(this,r);return n&&!n.closed&&r.next(this._value),n},r.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new Pt;return this._value},r.prototype.next=function(r){t.prototype.next.call(this,this._value=r)},r}(Dt);function Mt(t,r){return function(n){return n.lift(new Ut(t,r))}}var Ut=function(){function t(t,r){this.compare=t,this.keySelector=r}return t.prototype.call=function(t,r){return r.subscribe(new Vt(t,this.compare,this.keySelector))},t}(),Vt=function(t){function r(r,n,e){var o=t.call(this,r)||this;return o.keySelector=e,o.hasKey=!1,"function"==typeof n&&(o.compare=n),o}return ft(r,t),r.prototype.compare=function(t,r){return t===r},r.prototype._next=function(t){var r;try{var n=this.keySelector;r=n?n(t):t}catch(o){return this.destination.error(o)}var e=!1;if(this.hasKey)try{e=(0,this.compare)(this.key,r)}catch(o){return this.destination.error(o)}else this.hasKey=!0;e||(this.key=r,this.destination.next(t))},r}(gt);export{U as A,M as B,Q as C,W as D,j as E,f as F,l as G,Mt as H,c as I,o as J,s as K,u as L,At as M,k as N,a as O,y as P,P as Q,g as R,ut as S,S as a,$ as b,x as c,d,_ as e,b as f,p as g,T as h,ct as i,w as j,m as k,O as l,r as m,t as n,E as o,nt as p,et as q,ot as r,i as s,v as t,tt as u,rt as v,X as w,Z as x,st as y,V as z};