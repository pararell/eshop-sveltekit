import{S as s,i as e,s as a,e as l,t,c as r,a as o,b as c,d as h,o as n,f as u,g as i,h as d,j as v,Q as m,l as p,n as f,R as y}from"../chunks/vendor-3c8d63e9.js";import{u as H}from"../chunks/auth.store-e7a8ada3.js";function E(s){let e,a,v,m,p=s[0].email+"";return{c(){e=l("h1"),a=t("Hello "),v=t(p),m=t("!"),this.h()},l(s){e=r(s,"H1",{class:!0});var l=o(e);a=c(l,"Hello "),v=c(l,p),m=c(l,"!"),l.forEach(h),this.h()},h(){n(e,"class","svelte-yeuymr")},m(s,l){u(s,e,l),i(e,a),i(e,v),i(e,m)},p(s,e){1&e&&p!==(p=s[0].email+"")&&d(v,p)},d(s){s&&h(e)}}}function b(s){let e,a,d,y,H,b,w,j,x,S,k,A=s[0]&&E(s);return{c(){e=v(),a=l("main"),d=l("h1"),y=t("Hello world!"),H=v(),A&&A.c(),b=v(),w=l("p"),j=t("Visit "),x=l("a"),S=t("svelte.dev"),k=t(" to learn how to build Svelte apps."),this.h()},l(s){m('[data-svelte="svelte-1anpopb"]',document.head).forEach(h),e=p(s),a=r(s,"MAIN",{class:!0});var l=o(a);d=r(l,"H1",{class:!0});var t=o(d);y=c(t,"Hello world!"),t.forEach(h),H=p(l),A&&A.l(l),b=p(l),w=r(l,"P",{class:!0});var n=o(w);j=c(n,"Visit "),x=r(n,"A",{href:!0,class:!0});var u=o(x);S=c(u,"svelte.dev"),u.forEach(h),k=c(n," to learn how to build Svelte apps."),n.forEach(h),l.forEach(h),this.h()},h(){document.title="Home",n(d,"class","svelte-yeuymr"),n(x,"href","https://svelte.dev"),n(x,"class","svelte-yeuymr"),n(w,"class","svelte-yeuymr"),n(a,"class","svelte-yeuymr")},m(s,l){u(s,e,l),u(s,a,l),i(a,d),i(d,y),i(a,H),A&&A.m(a,null),i(a,b),i(a,w),i(w,j),i(w,x),i(x,S),i(w,k)},p(s,[e]){s[0]?A?A.p(s,e):(A=E(s),A.c(),A.m(a,b)):A&&(A.d(1),A=null)},i:f,o:f,d(s){s&&h(e),s&&h(a),A&&A.d()}}}const w=!0;function j(s,e,a){let l;return y(s,H,(s=>a(0,l=s))),[l]}export default class extends s{constructor(s){super(),e(this,s,j,b,a,{})}}export{w as prerender};
