import{S as t,i as e,s as n,k as s,f as a,e as l,t as c,j as o,c as r,a as i,b as u,l as h,d,o as f,g as p,h as m,R as g,P as w,n as v,Q as x}from"../../chunks/vendor-f977313f.js";import{B as k,g as b,s as j,l as P}from"../../chunks/auth.store-2c92529b.js";import"rxjs-compat/operators/distinctUntilChanged";const E=new k(null);new k(null),new k(null),new k(null),new k(1/0);const $=new k(1/0),y=new k(0);new k([]),new k(null),new k(""),new k(!1),new k(!1),new k(!1),new k([]);const I=new k({page:1,pages:1,total:0});function N(t,e,n){const s=t.slice();return s[4]=e[n],s}function q(t){let e,n=t[0],l=[];for(let s=0;s<n.length;s+=1)l[s]=A(N(t,n,s));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=s()},l(t){for(let e=0;e<l.length;e+=1)l[e].l(t);e=s()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);a(t,e,n)},p(t,s){if(1&s){let a;for(n=t[0],a=0;a<n.length;a+=1){const c=N(t,n,a);l[a]?l[a].p(c,s):(l[a]=A(c),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},d(t){g(l,t),t&&d(e)}}}function A(t){let e,n,s,g=t[4].title+"";return{c(){e=l("div"),n=c(g),s=o(),this.h()},l(t){e=r(t,"DIV",{class:!0});var a=i(e);n=u(a,g),s=h(a),a.forEach(d),this.h()},h(){f(e,"class","svelte-1k5a7mb")},m(t,l){a(t,e,l),p(e,n),p(e,s)},p(t,e){1&e&&g!==(g=t[4].title+"")&&m(n,g)},d(t){t&&d(e)}}}function B(t){let e,n,s=t[0]&&q(t);return{c(){e=o(),n=l("main"),s&&s.c(),this.h()},l(t){w('[data-svelte="svelte-c50q08"]',document.head).forEach(d),e=h(t),n=r(t,"MAIN",{class:!0});var a=i(n);s&&s.l(a),a.forEach(d),this.h()},h(){document.title="Products",f(n,"class","svelte-1k5a7mb")},m(t,l){a(t,e,l),a(t,n,l),s&&s.m(n,null)},p(t,[e]){t[0]?s?s.p(t,e):(s=q(t),s.c(),s.m(n,null)):s&&(s.d(1),s=null)},i:v,o:v,d(t){t&&d(e),t&&d(n),s&&s.d()}}}const C=!0;function D(t,e,n){let s;x(t,E,(t=>n(0,s=t)));const a=j[0].id,l=I.value.page;return(async t=>{try{const e=await b("api/products"+t);E.next(e.all),$.next(e.maxPrice),y.next(e.minPrice),I.next(e.pagination)}catch(e){}})(`?lang=${P.value}&sort=${a}&page=${l}`),[s]}export default class extends t{constructor(t){super(),e(this,t,D,B,n,{})}}export{C as prerender};
