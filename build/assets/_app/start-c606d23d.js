var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,n=(t,n)=>{for(var a in n||(n={}))e.call(n,a)&&o(t,a,n[a]);if(s)for(var a of s(n))r.call(n,a)&&o(t,a,n[a]);return t};import{S as a,i,s as l,e as c,t as u,c as h,a as p,b as d,d as f,f as g,g as m,h as y,j as v,k as $,l as b,n as _,m as w,o as E,p as x,q,r as R,u as k,v as S,w as L,x as O,y as P,z as A,A as j,B as T,C as N,D as U,E as C,F as I,G as V,H as D}from"./chunks/vendor-19e35bdf.js";import{c as M,l as B,f as K,a as z,T as G,_ as H,w as W}from"./chunks/auth.store-b9dfe326.js";function Y(t){let e,s,r=t[1].stack+"";return{c(){e=c("pre"),s=u(r)},l(t){e=h(t,"PRE",{});var o=p(e);s=d(o,r),o.forEach(f)},m(t,r){g(t,e,r),m(e,s)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&y(s,r)},d(t){t&&f(e)}}}function F(t){let e,s,r,o,n,a,i,l=t[1].message+"",w=t[1].stack&&Y(t);return{c(){e=c("h1"),s=u(t[0]),r=v(),o=c("p"),n=u(l),a=v(),w&&w.c(),i=$()},l(c){e=h(c,"H1",{});var u=p(e);s=d(u,t[0]),u.forEach(f),r=b(c),o=h(c,"P",{});var g=p(o);n=d(g,l),g.forEach(f),a=b(c),w&&w.l(c),i=$()},m(t,l){g(t,e,l),m(e,s),g(t,r,l),g(t,o,l),m(o,n),g(t,a,l),w&&w.m(t,l),g(t,i,l)},p(t,[e]){1&e&&y(s,t[0]),2&e&&l!==(l=t[1].message+"")&&y(n,l),t[1].stack?w?w.p(t,e):(w=Y(t),w.c(),w.m(i.parentNode,i)):w&&(w.d(1),w=null)},i:_,o:_,d(t){t&&f(e),t&&f(r),t&&f(o),t&&f(a),w&&w.d(t),t&&f(i)}}}function J(t,e,s){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,o=t.error)},[r,o]}class X extends a{constructor(t){super(),i(this,t,J,F,l,{status:0,error:1})}}function Q(t){let e,s,r;const o=[t[4]||{}];var n=t[2][1];function a(t){let e={};for(let s=0;s<o.length;s+=1)e=w(e,o[s]);return{props:e}}return n&&(e=new n(a())),{c(){e&&x(e.$$.fragment),s=$()},l(t){e&&q(e.$$.fragment,t),s=$()},m(t,o){e&&R(e,t,o),g(t,s,o),r=!0},p(t,r){const i=16&r?k(o,[S(t[4]||{})]):{};if(n!==(n=t[2][1])){if(e){N();const t=e;O(t.$$.fragment,1,0,(()=>{P(t,1)})),U()}n?(e=new n(a()),x(e.$$.fragment),L(e.$$.fragment,1),R(e,s.parentNode,s)):e=null}else n&&e.$set(i)},i(t){r||(e&&L(e.$$.fragment,t),r=!0)},o(t){e&&O(e.$$.fragment,t),r=!1},d(t){t&&f(s),e&&P(e,t)}}}function Z(t){let e,s;return e=new X({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,r){R(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.status=t[0]),2&s&&(r.error=t[1]),e.$set(r)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function tt(t){let e,s,r,o;const n=[Z,Q],a=[];function i(t,e){return t[1]?0:1}return e=i(t),s=a[e]=n[e](t),{c(){s.c(),r=$()},l(t){s.l(t),r=$()},m(t,s){a[e].m(t,s),g(t,r,s),o=!0},p(t,o){let l=e;e=i(t),e===l?a[e].p(t,o):(N(),O(a[l],1,1,(()=>{a[l]=null})),U(),s=a[e],s?s.p(t,o):(s=a[e]=n[e](t),s.c()),L(s,1),s.m(r.parentNode,r))},i(t){o||(L(s),o=!0)},o(t){O(s),o=!1},d(t){a[e].d(t),t&&f(r)}}}function et(t){let e,s=t[6]&&st(t);return{c(){e=c("div"),s&&s.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(f),this.h()},h(){E(e,"id","svelte-announcer"),E(e,"aria-live","assertive"),E(e,"aria-atomic","true"),E(e,"class","svelte-1j55zn5")},m(t,r){g(t,e,r),s&&s.m(e,null)},p(t,r){t[6]?s?s.p(t,r):(s=st(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&f(e),s&&s.d()}}}function st(t){let e,s;return{c(){e=u("Navigated to "),s=u(t[7])},l(r){e=d(r,"Navigated to "),s=d(r,t[7])},m(t,r){g(t,e,r),g(t,s,r)},p(t,e){128&e&&y(s,t[7])},d(t){t&&f(e),t&&f(s)}}}function rt(t){let e,s,r,o;const n=[t[3]||{}];let a={$$slots:{default:[tt]},$$scope:{ctx:t}};for(let l=0;l<n.length;l+=1)a=w(a,n[l]);e=new t[8]({props:a});let i=t[5]&&et(t);return{c(){x(e.$$.fragment),s=v(),i&&i.c(),r=$()},l(t){q(e.$$.fragment,t),s=b(t),i&&i.l(t),r=$()},m(t,n){R(e,t,n),g(t,s,n),i&&i.m(t,n),g(t,r,n),o=!0},p(t,[s]){const o=8&s?k(n,[S(t[3]||{})]):{};2071&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o),t[5]?i?i.p(t,s):(i=et(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(t){o||(L(e.$$.fragment,t),o=!0)},o(t){O(e.$$.fragment,t),o=!1},d(t){P(e,t),t&&f(s),i&&i.d(t),t&&f(r)}}}function ot(t,e,s){let{status:r}=e,{error:o}=e,{stores:n}=e,{page:a}=e,{components:i}=e,{props_0:l=null}=e,{props_1:c=null}=e;const u=i[0];A("__svelte__",n),j(n.page.notify);let h=!1,p=!1,d=null;return T((()=>{const t=n.page.subscribe((()=>{h&&(s(6,p=!0),s(7,d=document.title))}));return s(5,h=!0),t})),t.$$set=t=>{"status"in t&&s(0,r=t.status),"error"in t&&s(1,o=t.error),"stores"in t&&s(9,n=t.stores),"page"in t&&s(10,a=t.page),"components"in t&&s(2,i=t.components),"props_0"in t&&s(3,l=t.props_0),"props_1"in t&&s(4,c=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&n.page.set(a)},[r,o,i,l,c,h,p,d,u,n,a]}class nt extends a{constructor(t){super(),i(this,t,ot,rt,l,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}function at(t){let e,s,r,o,n,a,i,l,y;return{c(){e=c("nav"),s=c("a"),r=u("home"),o=v(),n=c("a"),a=u("Login"),i=v(),l=c("a"),y=u("Products"),this.h()},l(t){e=h(t,"NAV",{class:!0});var c=p(e);s=h(c,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var u=p(s);r=d(u,"home"),u.forEach(f),o=b(c),n=h(c,"A",{href:!0,class:!0});var g=p(n);a=d(g,"Login"),g.forEach(f),i=b(c),l=h(c,"A",{href:!0,class:!0});var m=p(l);y=d(m,"Products"),m.forEach(f),c.forEach(f),this.h()},h(){E(s,"href","/"),E(s,"sveltekit:prefetch",""),E(s,"class","svelte-13xtlu8"),C(s,"active","/"===t[0]),E(n,"href","/login"),E(n,"class","svelte-13xtlu8"),C(n,"active","/login"===t[0]),E(l,"href","/products"),E(l,"class","svelte-13xtlu8"),C(l,"active","/products"===t[0]),E(e,"class","svelte-13xtlu8")},m(t,c){g(t,e,c),m(e,s),m(s,r),m(e,o),m(e,n),m(n,a),m(e,i),m(e,l),m(l,y)},p(t,[e]){1&e&&C(s,"active","/"===t[0]),1&e&&C(n,"active","/login"===t[0]),1&e&&C(l,"active","/products"===t[0])},i:_,o:_,d(t){t&&f(e)}}}function it(t,e,s){let{path:r}=e;return t.$$set=t=>{"path"in t&&s(0,r=t.path)},[r]}class lt extends a{constructor(t){super(),i(this,t,it,at,l,{path:0})}}function ct(t){let e,s,r,o;e=new lt({props:{segment:t[0]}});const n=t[2].default,a=I(n,t,t[1],null);return{c(){x(e.$$.fragment),s=v(),r=c("main"),a&&a.c(),this.h()},l(t){q(e.$$.fragment,t),s=b(t),r=h(t,"MAIN",{class:!0});var o=p(r);a&&a.l(o),o.forEach(f),this.h()},h(){E(r,"class","svelte-1r7i6re")},m(t,n){R(e,t,n),g(t,s,n),g(t,r,n),a&&a.m(r,null),o=!0},p(t,[s]){const r={};1&s&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&s&&V(a,n,t,t[1],s,null,null)},i(t){o||(L(e.$$.fragment,t),L(a,t),o=!0)},o(t){O(e.$$.fragment,t),O(a,t),o=!1},d(t){P(e,t),t&&f(s),t&&f(r),a&&a.d(t)}}}function ut(t,e,s){let{$$slots:r={},$$scope:o}=e,{segment:n}=e;return T((()=>{const t=M().get("eshop_lang")||"en";B.next(t),K(),B.pipe(D()).subscribe((t=>{z(t),G.set(t)}))})),t.$$set=t=>{"segment"in t&&s(0,n=t.segment),"$$scope"in t&&s(1,o=t.$$scope)},[n,o,r]}var ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,ut,ct,l,{segment:0})}}});const pt=[()=>H((()=>import("./pages/index.svelte-4f837964.js")),["/_app/pages/index.svelte-4f837964.js","/_app/assets/pages/index.svelte-c9bd1912.css","/_app/chunks/vendor-19e35bdf.js","/_app/chunks/auth.store-b9dfe326.js"]),()=>H((()=>import("./pages/products/index.svelte-0051e9f0.js")),["/_app/pages/products/index.svelte-0051e9f0.js","/_app/assets/pages/products/index.svelte-d44bf605.css","/_app/chunks/vendor-19e35bdf.js","/_app/chunks/auth.store-b9dfe326.js"]),()=>H((()=>import("./pages/login.svelte-380b9d86.js")),["/_app/pages/login.svelte-380b9d86.js","/_app/assets/pages/login.svelte-d976ac5e.css","/_app/chunks/vendor-19e35bdf.js","/_app/chunks/auth.store-b9dfe326.js"])],dt=[[/^\/$/,[pt[0]]],[/^\/products\/?$/,[pt[1]]],[/^\/login\/?$/,[pt[2]]]];function ft(){return{x:pageXOffset,y:pageYOffset}}function gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}class mt{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=n(n({},history.state||{}),{"sveltekit:scroll":ft()});history.replaceState(t,document.title,window.location.href)}),50)}));const s=t=>{const e=gt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let r;addEventListener("touchstart",s),addEventListener("mousemove",(t=>{clearTimeout(r),r=setTimeout((()=>{s(t)}),20)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=gt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(s?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const n=this.parse(o);if(n){const s=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",o.href),this._navigate(n,s?ft():null,[],o.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),s=this.parse(e);s?this._navigate(s,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",s=this.routes.filter((([t])=>t.test(e)));if(s.length>0){const r=new URLSearchParams(t.search);return{id:`${e}?${r}`,routes:s,path:e,query:r}}}async goto(t,{noscroll:e=!1,replaceState:s=!1}={},r){if(this.enabled){const o=new URL(t,function(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}(document)),n=this.parse(o);if(n)return history[s?"replaceState":"pushState"]({},"",t),this._navigate(n,e?ft():null,r,o.hash)}return location.href=t,new Promise((()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(e)return this.renderer.load(e);throw new Error(`Could not prefetch ${t.href}`)}async _navigate(t,e,s,r){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,s),document.body.focus();const o=r&&document.getElementById(r.slice(1));e?scrollTo(e.x,e.y):o?scrollTo(0,o.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function yt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,s=t.status;return e instanceof Error?!s||s<400||s>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:s,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function vt(t){const e=W(t);let s=!0;return{notify:function(){s=!0,e.update((t=>t))},set:function(t){s=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||s&&e!==r)&&t(r=e)}))}}}function $t(t,o){const n="string"==typeof t?t:t.url,a=document.querySelector(`script[type="svelte-data"][url="${n}"]`);if(a){const t=JSON.parse(a.textContent),{body:o}=t,n=((t,o)=>{var n={};for(var a in t)e.call(t,a)&&o.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))o.indexOf(a)<0&&r.call(t,a)&&(n[a]=t[a]);return n})(t,["body"]);return Promise.resolve(new Response(o,n))}return fetch(t,o)}class bt{constructor({Root:t,layout:e,target:s,session:r,host:o}){this.Root=t,this.layout=e,this.host=o,this.router=null,this.target=s,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.loading={id:null,promise:null},this.stores={page:vt({}),navigating:W(null),session:W(r)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!n)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),n=!0}async start(t){const e=await this._load(t);e.redirect?location.href=new URL(e.redirect,location.href).href:this._init(e)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const s=this.token={},r=await this._get_navigation_result(t);if(s!==this.token)return;if(r.reload)location.reload();else if(r.redirect){if(!(e.length>10||e.includes(t.path)))return void(this.router?this.router.goto(r.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(r.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=r.state,this.root.$set(r.props),this.stores.navigating.set(null),await 0):this._init(r);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null;!1===r.state.nodes[r.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t),this.loading.id=t.id,this.loading.promise}async _get_navigation_result(t){if(this.loading.id===t.id)return this.loading.promise;for(let e=0;e<t.routes.length;e+=1){const s=t.routes[e],[r,o,n]=s;if(1===s.length)return{reload:!0};let a=e+1;for(;a<t.routes.length;){const e=t.routes[a];if(e[0].toString()!==r.toString())break;1!==e.length&&e[1].forEach((t=>t())),a+=1}const i=o.map((t=>t())),l={host:this.host,path:t.path,params:n?n(s[0].exec(t.path)):{},query:t.query},c=await this._load({status:200,error:null,nodes:i,page:l});if(c)return c}return await this._load({status:404,error:new Error(`Not found: ${t.path}`),nodes:[],page:{host:this.host,path:t.path,query:t.query,params:{}}})}_init(t){this.current=t.state,this.root=new this.Root({target:this.target,props:n({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _load({status:t,error:e,nodes:s,page:r}){const o=r.query.toString(),a={state:{page:r,query:o,session_changed:!1,nodes:[],contexts:[]},props:{status:t,error:e,components:[]}},i={params:Object.keys(r.params).filter((t=>!this.current.page||this.current.page.params[t]!==r.params[t])),query:o!==this.current.query,session:this.current.session_changed,context:!1};try{const t=[this.layout,...s],l=[];let c;for(let s=0;s<t.length;s+=1){const u=this.current.nodes[s],h=this.current.contexts[s],p=await t[s];if(a.props.components[s]=p.default,p.preload)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");if(!u||p!==u.module||i.params.some((t=>u.uses.params.has(t)))||i.query&&u.uses.query||i.session&&u.uses.session||i.context&&u.uses.context){const u=r.path+o,h=this.caches.get(p),d=h&&h.get(u);let f,g;if(!d||i.context&&d.node.uses.context){f={module:p,uses:{params:new Set,query:!1,session:!1,context:!1}};const o={};for(const t in r.params)Object.defineProperty(o,t,{get:()=>(f.uses.params.add(t),r.params[t]),enumerable:!0});const a=this.$session;if(p.load){g=await p.load.call(null,{page:{host:r.host,path:r.path,params:o,get query(){return f.uses.query=!0,r.query}},get session(){return f.uses.session=!0,a},get context(){return f.uses.context=!0,n({},c)},fetch:this.started?fetch:$t});const i=s===t.length-1&&!e;if(!g&&i)return}}else({node:f,loaded:g}=d);if(g){if(g=yt(g),g.error){if(e)throw e;return await this._load({status:g.status||500,error:g.error,nodes:[],page:{host:r.host,path:r.path,query:r.query,params:{}}})}if(g.redirect)return{redirect:g.redirect};if(g.context&&(i.context=!0,c=n(n({},c),g.context)),g.maxage){this.caches.has(p)||this.caches.set(p,new Map);const t=this.caches.get(p),e={node:f,loaded:g};t.set(u,e);let s=!1;const r=setTimeout((()=>{o()}),1e3*g.maxage),o=()=>{t.get(u)===e&&t.delete(u),n(),clearTimeout(r)},n=this.stores.session.subscribe((()=>{s&&o()}));s=!0}l[s]=g.props}a.state.nodes[s]=f,a.state.contexts[s]=c}else a.state.nodes[s]=u,a.state.contexts[s]=c=h}return(await Promise.all(l)).forEach(((t,e)=>{t&&(a.props[`props_${e}`]=t)})),this.current.page&&r.path===this.current.page.path&&!i.query||(a.props.page=r),a}catch(l){if(e)throw e;return await this._load({status:500,error:l,nodes:[],page:{host:r.host,path:r.path,query:r.query,params:{}}})}}}async function _t({paths:t,target:e,session:s,host:r,route:o,hydrate:n}){const a=o&&new mt({base:t.base,routes:dt}),i=new bt({Root:nt,layout:ht,target:e,session:s,host:r});n&&await i.start(n),o&&a.init(i),dispatchEvent(new CustomEvent("sveltekit:start"))}export{_t as start};