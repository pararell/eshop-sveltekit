import{S as s,i as e,s as a,e as l,t,c as r,a as o,b as c,d as h,o as n,f as u,g as d,h as i,j as v,N as m,l as f,n as p,O as y}from"../chunks/vendor-c402d591.js";import{u as H}from"../chunks/auth.store-6f2ddb6a.js";function E(s){let e,a,v,m,f=s[0].email+"";return{c(){e=l("h1"),a=t("Hello "),v=t(f),m=t("!"),this.h()},l(s){e=r(s,"H1",{class:!0});var l=o(e);a=c(l,"Hello "),v=c(l,f),m=c(l,"!"),l.forEach(h),this.h()},h(){n(e,"class","svelte-yeuymr")},m(s,l){u(s,e,l),d(e,a),d(e,v),d(e,m)},p(s,e){1&e&&f!==(f=s[0].email+"")&&i(v,f)},d(s){s&&h(e)}}}function b(s){let e,a,i,y,H,b,w,j,x,S,k,A=s[0]&&E(s);return{c(){e=v(),a=l("main"),i=l("h1"),y=t("Hello world!"),H=v(),A&&A.c(),b=v(),w=l("p"),j=t("Visit "),x=l("a"),S=t("svelte.dev"),k=t(" to learn how to build Svelte apps."),this.h()},l(s){m('[data-svelte="svelte-1anpopb"]',document.head).forEach(h),e=f(s),a=r(s,"MAIN",{class:!0});var l=o(a);i=r(l,"H1",{class:!0});var t=o(i);y=c(t,"Hello world!"),t.forEach(h),H=f(l),A&&A.l(l),b=f(l),w=r(l,"P",{class:!0});var n=o(w);j=c(n,"Visit "),x=r(n,"A",{href:!0,class:!0});var u=o(x);S=c(u,"svelte.dev"),u.forEach(h),k=c(n," to learn how to build Svelte apps."),n.forEach(h),l.forEach(h),this.h()},h(){document.title="Home",n(i,"class","svelte-yeuymr"),n(x,"href","https://svelte.dev"),n(x,"class","svelte-yeuymr"),n(w,"class","svelte-yeuymr"),n(a,"class","svelte-yeuymr")},m(s,l){u(s,e,l),u(s,a,l),d(a,i),d(i,y),d(a,H),A&&A.m(a,null),d(a,b),d(a,w),d(w,j),d(w,x),d(x,S),d(w,k)},p(s,[e]){s[0]?A?A.p(s,e):(A=E(s),A.c(),A.m(a,b)):A&&(A.d(1),A=null)},i:p,o:p,d(s){s&&h(e),s&&h(a),A&&A.d()}}}const w=!0;function j(s,e,a){let l;return y(s,H,(s=>a(0,l=s))),[l]}export default class extends s{constructor(s){super(),e(this,s,j,b,a,{})}}export{w as prerender};