import t from"rxjs-compat/operators/distinctUntilChanged";function n(){}function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function u(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function f(t,n,e){t.$$.on_destroy.push(c(n,e))}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o,r,s,u){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(i){const r=l(n,e,o,u);t.p(r,i)}}function p(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return b(n)}function j(t){return k(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function N(t,n){t.value=null==n?"":n}function O(t,n,e){t.classList[e?"add":"remove"](n)}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}let T;function C(t){T=t}function L(){if(!T)throw new Error("Function called outside component initialization");return T}function M(t){L().$$.on_mount.push(t)}function P(t){L().$$.after_update.push(t)}function q(t,n){L().$$.context.set(t,n)}const z=[],B=[],F=[],D=[],G=Promise.resolve();let H=!1;function I(t){F.push(t)}let J=!1;const K=new Set;function Q(){if(!J){J=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];C(n),R(n.$$)}for(C(null),z.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];K.has(n)||(K.add(n),n())}F.length=0}while(z.length);for(;D.length;)D.pop()();H=!1,J=!1,K.clear()}}function R(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||s(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],i=n[s];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,e,r){const{fragment:i,on_mount:c,on_destroy:f,after_update:a}=t.$$;i&&i.m(n,e),r||I((()=>{const n=c.map(o).filter(u);f?f.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(I)}function st(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(z.push(t),H||(H=!0,G.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function it(t,e,o,u,i,c,f=[-1]){const a=T;C(t);const l=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:r(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=o?o(t,e.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[n],l.ctx[n]=r)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](r),d&&ut(t,n)),e})):[],l.update(),d=!0,s(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=w(e.target);l.fragment&&l.fragment.l(t),t.forEach(m)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),Q()}C(a)}class ct{$destroy(){st(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ft="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function at(t){var n={exports:{}};return t(n,n.exports),n.exports}var lt=at((function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(t)}));export{P as A,M as B,W as C,X as D,O as E,a as F,d as G,lt as H,c as I,s as J,u as K,at as L,ft as M,S as N,f as O,$ as P,N as Q,_ as R,ct as S,w as a,k as b,E as c,m as d,g as e,h as f,p as g,A as h,it as i,y as j,x as k,j as l,e as m,n,v as o,et as p,ot as q,rt as r,i as s,b as t,tt as u,nt as v,Y as w,Z as x,st as y,q as z};
