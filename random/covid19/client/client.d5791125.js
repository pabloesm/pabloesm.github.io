function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return v(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function P(){if(!w)throw new Error("Function called outside component initialization");return w}function R(t){P().$$.on_mount.push(t)}function A(){const t=P();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const C=[],j=[],L=[],N=[],q=Promise.resolve();let O=!1;function U(t){L.push(t)}let k=!1;const D=new Set;function I(){if(!k){k=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];x(e),B(e.$$)}for(C.length=0;j.length;)j.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];D.has(e)||(D.add(e),e())}L.length=0}while(C.length);for(;N.length;)N.pop()();O=!1,k=!1,D.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const H=new Set;let T;function J(){T={r:0,c:[],p:T}}function V(){T.r||o(T.c),T=T.p}function K(t,e){t&&t.i&&(H.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),T.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),U(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function Y(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(C.push(t),O||(O=!0,q.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,a,i,l=[-1]){const u=w;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Q(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=b(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor),I()}x(u)}class tt{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={},ot=()=>({});function st(t){let e,n,r,o;const s=t[2].default,c=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){e=d("div"),n=m(),r=d("main"),c&&c.c(),this.h()},l(t){b(e=y(t,"DIV",{class:!0})).forEach(f),n=_(t);var o=b(r=y(t,"MAIN",{}));c&&c.l(o),o.forEach(f),this.h()},h(){$(e,"class","navbar")},m(t,s){u(t,e,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[e]){c&&c.p&&2&e&&c.p(i(s,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(s,t[1],e,null))},i(t){o||(K(c,t),o=!0)},o(t){M(c,t),o=!1},d(t){t&&f(e),t&&f(n),t&&f(r),c&&c.d(t)}}}function ct(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)}),[r,s,o]}class at extends tt{constructor(t){super(),Z(this,t,ct,st,c,{segment:0})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){var o=b(e=y(t,"PRE",{}));n=v(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function lt(e){let n,r,o,s,c,a,i,p,w,x=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&it(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),a=d("p"),i=h(x),p=m(),P&&P.c(),w=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t);var n=b(o=y(t,"H1",{class:!0}));s=v(n,e[0]),n.forEach(f),c=_(t);var l=b(a=y(t,"P",{class:!0}));i=v(l,x),l.forEach(f),p=_(t),P&&P.l(t),w=g(),this.h()},h(){$(o,"class","svelte-1xjwv3d"),$(a,"class","svelte-1xjwv3d")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,p,e),P&&P.m(t,e),u(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?P?P.p(t,e):((P=it(t)).c(),P.m(w.parentNode,w)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(p),P&&P.d(t),t&&f(w)}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,c,{status:0,error:1})}}function pt(t){let n,r;const o=[t[4].props];var s=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&G(a.$$.fragment),n=g()},l(t){a&&W(a.$$.fragment,t),n=g()},m(t,e){a&&X(a,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?z(o,[F(t[4].props)]):{};if(s!==(s=t[4].component)){if(a){J();const t=a;M(t.$$.fragment,1,0,()=>{Y(t,1)}),V()}s?(G((a=new s(c())).$$.fragment),K(a.$$.fragment,1),X(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&K(a.$$.fragment,t),r=!0)},o(t){a&&M(a.$$.fragment,t),r=!1},d(t){t&&f(n),a&&Y(a,t)}}}function dt(t){let e;const n=new ft({props:{error:t[0],status:t[1]}});return{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){Y(n,t)}}}function ht(t){let e,n,r,o;const s=[dt,pt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;(e=a(t))===i?c[e].p(t,o):(J(),M(c[i],1,1,()=>{c[i]=null}),V(),(n=c[e])||(n=c[e]=s[e](t)).c(),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function mt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new at({props:o});return{c(){G(s.$$.fragment)},l(t){W(s.$$.fragment,t)},m(t,e){X(s,t,e),n=!0},p(t,[e]){const n=12&e?z(r,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(K(s.$$.fragment,t),n=!0)},o(t){M(s.$$.fragment,t),n=!1},d(t){Y(s,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;var l,u;return l=rt,u=r,P().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,c,a,i,r]}class $t extends tt{constructor(t){super(),Z(this,t,gt,mt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const bt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],yt=[{js:()=>import("./index.6090025b.js"),css:["index.6090025b.css","client.d5791125.css"]},{js:()=>import("./about.4be5d836.js"),css:["client.d5791125.css"]},{js:()=>import("./index.2cb80e2b.js"),css:["index.2cb80e2b.css","client.d5791125.css"]},{js:()=>import("./[slug].f7744743.js"),css:["[slug].f7744743.css","client.d5791125.css"]}],vt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let Et,St,wt,xt=!1,Pt=[],Rt="{}";const At={page:nt({}),preloading:nt(null),session:nt(_t&&_t.session)};let Ct,jt;At.session.subscribe(async t=>{if(Ct=t,!xt)return;jt=!0;const e=It(new URL(location.href)),n=St={},{redirect:r,props:o,branch:s}=await Jt(e);n===St&&await Tt(r,s,o,e.page)});let Lt,Nt=null;let qt,Ot=1;const Ut="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},kt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function It(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!bt.some(t=>t.test(e)))for(let n=0;n<vt.length;n+=1){const r=vt[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Bt(){return{x:pageXOffset,y:pageYOffset}}async function Ht(t,e,n,r){if(e)qt=e;else{const t=Bt();kt[qt]=t,e=qt=++Ot,kt[qt]=n?t:{x:0,y:0}}qt=e,Et&&At.preloading.set(!0);const o=Nt&&Nt.href===t.href?Nt.promise:Jt(t);Nt=null;const s=St={},{redirect:c,props:a,branch:i}=await o;if(s===St&&(await Tt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=kt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}kt[qt]=t,t&&scrollTo(t.x,t.y)}}async function Tt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=It(new URL(t,document.baseURI));return n?(Ut[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Ht(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(At.page.set(r),At.preloading.set(!1),Et)Et.$set(n);else{n.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},n.level0={props:await wt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Kt(t.nextSibling);Kt(t),Kt(e)}Et=new $t({target:Lt,props:n,hydrate:!0})}Pt=e,Rt=JSON.stringify(r.query),xt=!0,jt=!1}async function Jt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;wt||(wt=_t.preloaded[0]||ot.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Ct));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Rt)return!0;const o=Pt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!jt&&!u&&Pt[a]&&Pt[a].part===e.i)return Pt[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Vt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(yt[e.i]);let m;return m=xt||!_t.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ct):{}:_t.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Vt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Kt(t){t.parentNode.removeChild(t)}function Mt(t){const e=It(new URL(t,document.baseURI));if(e)return Nt&&t===Nt.href||function(t,e){Nt={href:t,promise:e}}(t,Jt(e)),Nt.promise}let zt;function Ft(t){clearTimeout(zt),zt=setTimeout(()=>{Gt(t)},20)}function Gt(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&Mt(e.href)}function Wt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=It(o);if(s){Ht(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ut.pushState({id:qt},"",o.href)}}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Yt(t){if(kt[qt]=Bt(),t.state){const e=It(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else(function(t){qt=t})(Ot=Ot+1),Ut.replaceState({id:qt},"",location.href)}!function(t){var e;"scrollRestoration"in Ut&&(Ut.scrollRestoration="manual"),e=t.target,Lt=e,addEventListener("click",Wt),addEventListener("popstate",Yt),addEventListener("touchstart",Gt),addEventListener("mousemove",Ft),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ut.replaceState({id:Ot},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=_t;wt||(wt=s&&s[0]),Tt(null,[],{error:a,status:c,session:o,level0:{props:wt},level1:{props:{status:c,error:a},component:ft},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=It(n);return r?Ht(r,Ot,!0,t):void 0})}({target:document.querySelector("#sapper")});export{z as A,F as B,g as C,p as D,e as E,A as F,S as G,tt as S,m as a,b,y as c,v as d,d as e,f,_ as g,$ as h,Z as i,u as j,l as k,a as l,E as m,t as n,R as o,G as p,W as q,X as r,c as s,h as t,J as u,M as v,nt as w,V as x,K as y,Y as z};
