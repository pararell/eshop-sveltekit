function t(){}function r(t,r){for(const n in r)t[n]=r[n];return t}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,r){return t!=t?r==r:t!==r||t&&"object"==typeof t||"function"==typeof t}function c(r,...n){if(null==r)return t;const e=r.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function u(t,r,n){t.$$.on_destroy.push(c(r,n))}function a(t,r,n,e){if(t){const o=h(t,r,n,e);return t[0](o)}}function h(t,n,e,o){return t[1]&&o?r(e.ctx.slice(),t[1](o(n))):e.ctx}function f(t,r,n,e,o,s,i){const c=function(t,r,n,e){if(t[2]&&e){const o=t[2](e(n));if(void 0===r.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(r.dirty.length,o.length);for(let e=0;e<n;e+=1)t[e]=r.dirty[e]|o[e];return t}return r.dirty|o}return r.dirty}(r,e,o,s);if(c){const o=h(r,n,e,i);t.p(o,c)}}function l(t,r){t.appendChild(r)}function p(t,r,n){t.insertBefore(r,n||null)}function b(t){t.parentNode.removeChild(t)}function d(t,r){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(r)}function y(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function v(){return _(" ")}function w(){return _("")}function m(t,r,n,e){return t.addEventListener(r,n,e),()=>t.removeEventListener(r,n,e)}function g(t,r,n){null==n?t.removeAttribute(r):t.getAttribute(r)!==n&&t.setAttribute(r,n)}function E(t){return Array.from(t.childNodes)}function S(t,r,n,e){for(let o=0;o<t.length;o+=1){const e=t[o];if(e.nodeName===r){let r=0;const s=[];for(;r<e.attributes.length;){const t=e.attributes[r++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)e.removeAttribute(s[t]);return t.splice(o,1)[0]}}return e?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(r):y(r)}function x(t,r){for(let n=0;n<t.length;n+=1){const e=t[n];if(3===e.nodeType)return e.data=""+r,t.splice(n,1)[0]}return _(r)}function $(t){return x(t," ")}function O(t,r){r=""+r,t.wholeText!==r&&(t.data=r)}function T(t,r){t.value=null==r?"":r}function P(t,r,n){t.classList[n?"add":"remove"](r)}function j(t,r=document.body){return Array.from(r.querySelectorAll(t))}let k;function D(t){k=t}function H(){if(!k)throw new Error("Function called outside component initialization");return k}function A(t){H().$$.on_mount.push(t)}function M(t){H().$$.after_update.push(t)}function U(t,r){H().$$.context.set(t,r)}const V=[],N=[],Y=[],K=[],L=Promise.resolve();let q=!1;function z(t){Y.push(t)}let C=!1;const B=new Set;function F(){if(!C){C=!0;do{for(let t=0;t<V.length;t+=1){const r=V[t];D(r),G(r.$$)}for(D(null),V.length=0;N.length;)N.pop()();for(let t=0;t<Y.length;t+=1){const r=Y[t];B.has(r)||(B.add(r),r())}Y.length=0}while(V.length);for(;K.length;)K.pop()();q=!1,C=!1,B.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(z)}}const I=new Set;let J;function Q(){J={r:0,c:[],p:J}}function R(){J.r||o(J.c),J=J.p}function W(t,r){t&&t.i&&(I.delete(t),t.i(r))}function X(t,r,n,e){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push((()=>{I.delete(t),e&&(n&&t.d(1),e())})),t.o(r)}}function Z(t,r){const n={},e={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=r[s];if(c){for(const t in i)t in c||(e[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const i in e)i in n||(n[i]=void 0);return n}function tt(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function nt(t,r){t&&t.l(r)}function et(t,r,e,i){const{fragment:c,on_mount:u,on_destroy:a,after_update:h}=t.$$;c&&c.m(r,e),i||z((()=>{const r=u.map(n).filter(s);a?a.push(...r):o(r),t.$$.on_mount=[]})),h.forEach(z)}function ot(t,r){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(r),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,r){-1===t.$$.dirty[0]&&(V.push(t),q||(q=!0,L.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function it(r,n,s,i,c,u,a=[-1]){const h=k;D(r);const f=r.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:e(),dirty:a,skip_bound:!1};let l=!1;if(f.ctx=s?s(r,n.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),l&&st(r,t)),n})):[],f.update(),l=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=E(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&W(r.$$.fragment),et(r,n.target,n.anchor,n.customElement),F()}D(h)}class ct{$destroy(){ot(this,1),this.$destroy=t}$on(t,r){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const t=n.indexOf(r);-1!==t&&n.splice(t,1)}}$set(t){var r;this.$$set&&(r=t,0!==Object.keys(r).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
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
***************************************************************************** */var ut=function(t,r){return(ut=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};function at(t,r){function n(){this.constructor=t}ut(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function ht(t){return"function"==typeof t}var ft=!1,lt={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;ft=t},get useDeprecatedSynchronousErrorHandling(){return ft}};function pt(t){setTimeout((function(){throw t}),0)}var bt={closed:!0,next:function(t){},error:function(t){if(lt.useDeprecatedSynchronousErrorHandling)throw t;pt(t)},complete:function(){}},dt=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();var yt=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),_t=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n,e=this,o=e._parentOrParents,s=e._ctorUnsubscribe,i=e._unsubscribe,c=e._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var u=0;u<o.length;++u){o[u].remove(this)}if(ht(i)){s&&(this._unsubscribe=void 0);try{i.call(this)}catch(f){r=f instanceof yt?vt(f.errors):[f]}}if(dt(c)){u=-1;for(var a=c.length;++u<a;){var h=c[u];if(null!==(n=h)&&"object"==typeof n)try{h.unsubscribe()}catch(f){r=r||[],f instanceof yt?r=r.concat(vt(f.errors)):r.push(f)}}}if(r)throw new yt(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function vt(t){return t.reduce((function(t,r){return t.concat(r instanceof yt?r.errors:r)}),[])}var wt=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),mt=function(t){function r(n,e,o){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=bt;break;case 1:if(!n){s.destination=bt;break}if("object"==typeof n){n instanceof r?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new gt(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new gt(s,n,e,o)}return s}return at(r,t),r.prototype[wt]=function(){return this},r.create=function(t,n,e){var o=new r(t,n,e);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(_t),gt=function(t){function r(r,n,e,o){var s,i=t.call(this)||this;i._parentSubscriber=r;var c=i;return ht(n)?s=n:n&&(s=n.next,e=n.error,o=n.complete,n!==bt&&(ht((c=Object.create(n)).unsubscribe)&&i.add(c.unsubscribe.bind(c)),c.unsubscribe=i.unsubscribe.bind(i))),i._context=c,i._next=s,i._error=e,i._complete=o,i}return at(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;lt.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=lt.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):pt(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;pt(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};lt.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(n){if(this.unsubscribe(),lt.useDeprecatedSynchronousErrorHandling)throw n;pt(n)}},r.prototype.__tryOrSetError=function(t,r,n){if(!lt.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(e){return lt.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(pt(e),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(mt);var Et=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function St(t){return t}function xt(t){return 0===t.length?St:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var $t=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e=this.operator,o=function(t,r,n){if(t){if(t instanceof mt)return t;if(t[wt])return t[wt]()}return t||r||n?new mt(t,r,n):new mt(bt)}(t,r,n);if(e?o.add(e.call(o,this.source)):o.add(this.source||lt.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),lt.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){lt.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,n=r.closed,e=r.destination,o=r.isStopped;if(n||o)return!1;t=e&&e instanceof mt?e:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=Ot(r))((function(r,e){var o;o=n.subscribe((function(r){try{t(r)}catch(n){e(n),o&&o.unsubscribe()}}),e,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[Et]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:xt(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=Ot(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function Ot(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}function Tt(t,r){return function(n){return n.lift(new Pt(t,r))}}var Pt=function(){function t(t,r){this.compare=t,this.keySelector=r}return t.prototype.call=function(t,r){return r.subscribe(new jt(t,this.compare,this.keySelector))},t}(),jt=function(t){function r(r,n,e){var o=t.call(this,r)||this;return o.keySelector=e,o.hasKey=!1,"function"==typeof n&&(o.compare=n),o}return at(r,t),r.prototype.compare=function(t,r){return t===r},r.prototype._next=function(t){var r;try{var n=this.keySelector;r=n?n(t):t}catch(o){return this.destination.error(o)}var e=!1;if(this.hasKey)try{e=(0,this.compare)(this.key,r)}catch(o){return this.destination.error(o)}else this.hasKey=!0;e||(this.key=r,this.destination.next(t))},r}(mt),kt=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),Dt=function(t){function r(r,n){var e=t.call(this)||this;return e.subject=r,e.subscriber=n,e.closed=!1,e}return at(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var n=r.indexOf(this.subscriber);-1!==n&&r.splice(n,1)}}},r}(_t),Ht=function(t){function r(r){var n=t.call(this,r)||this;return n.destination=r,n}return at(r,t),r}(mt),At=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return at(r,t),r.prototype[wt]=function(){return new Ht(this)},r.prototype.lift=function(t){var r=new Mt(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new kt;if(!this.isStopped)for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new kt;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,n=r.length,e=r.slice(),o=0;o<n;o++)e[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new kt;this.isStopped=!0;for(var t=this.observers,r=t.length,n=t.slice(),e=0;e<r;e++)n[e].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new kt;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new kt;return this.hasError?(t.error(this.thrownError),_t.EMPTY):this.isStopped?(t.complete(),_t.EMPTY):(this.observers.push(t),new Dt(this,t))},r.prototype.asObservable=function(){var t=new $t;return t.source=this,t},r.create=function(t,r){return new Mt(t,r)},r}($t),Mt=function(t){function r(r,n){var e=t.call(this)||this;return e.destination=r,e.source=n,e}return at(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):_t.EMPTY},r}(At),Ut=function(t){function r(r){var n=t.call(this)||this;return n._value=r,n}return at(r,t),Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),r.prototype._subscribe=function(r){var n=t.prototype._subscribe.call(this,r);return n&&!n.closed&&r.next(this._value),n},r.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new kt;return this._value},r.prototype.next=function(r){t.prototype.next.call(this,this._value=r)},r}(At);export{M as A,A as B,Q as C,R as D,P as E,a as F,f as G,Tt as H,c as I,o as J,s as K,Ut as L,j as M,u as N,d as O,T as P,m as Q,ct as S,E as a,x as b,S as c,b as d,y as e,p as f,l as g,O as h,it as i,v as j,w as k,$ as l,r as m,t as n,g as o,rt as p,nt as q,et as r,i as s,_ as t,Z as u,tt as v,W as w,X as x,ot as y,U as z};
