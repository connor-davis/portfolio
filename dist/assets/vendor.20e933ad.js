const Pe=(e,t)=>e===t,U={equals:Pe};let Ae=ue;const x={},P=1,$=2,re={owned:null,cleanups:null,context:null,owner:null},[xe,ut]=O(!1);var d=null;let L=null,p=null,R=null,y=null,S=null,K=0;function Ce(e,t){const n=p,r=d,s=e.length===0?re:{owned:null,cleanups:null,context:null,owner:t||r};d=s,p=null;try{return B(()=>e(()=>X(s)),!0)}finally{p=n,d=r}}function O(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,pending:x,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==x?n.pending:n.value)),H(n,s));return[oe.bind(n),r]}function Te(e,t,n){const r=V(e,t,!0,P);j(r)}function k(e,t,n){const r=V(e,t,!1,P);j(r)}function E(e,t,n){n=n?Object.assign({},U,n):U;const r=V(e,t,!0,0);return r.pending=x,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,j(r),oe.bind(r)}function se(e){if(R)return e();let t;const n=R=[];try{t=e()}finally{R=null}return B(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==x){const l=s.pending;s.pending=x,H(s,l)}}},!1),t}function C(e){let t,n=p;return p=null,t=e(),p=n,t}function Le(e,t,n){const r=Array.isArray(e);let s,l=n&&n.defer;return o=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(l){l=!1;return}const h=C(()=>t(i,s,o));return s=i,h}}function Re(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Oe(){return d}function je(e,t){const n=d;d=e;try{return B(t,!0)}finally{d=n}}function Ne(e){const t=p,n=d;return Promise.resolve().then(()=>{p=t,d=n;let r;return se(e),p=d=null,r?r.done:void 0})}function We(){return[xe,Ne]}function ie(e){const t=Symbol("context");return{id:t,Provider:ke(t),defaultValue:e}}function Ie(e){let t;return(t=fe(d,e.id))!==void 0?t:e.defaultValue}function Ue(e){const t=E(e);return E(()=>Q(t()))}function oe(){const e=L;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===P||e?j(this):M(this),y=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function H(e,t,n){if(R)return e.pending===x&&R.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&B(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s];r&&L.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?y.push(l):S.push(l),l.observers&&ae(l)),r||(l.state=P)}if(y.length>1e6)throw y=[],new Error},!1),t}function j(e){if(!e.fn)return;X(e);const t=d,n=p,r=K;p=d=e,_e(e,e.value,r),p=n,d=t}function _e(e,t,n){let r;try{r=e.fn(t)}catch(s){ce(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?H(e,r):e.value=r,e.updatedAt=n)}function V(e,t,n,r=P,s){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==re&&(d.owned?d.owned.push(l):d.owned=[l]),l}function le(e){const t=L;if(e.state===0||t)return;if(e.state===$||t)return M(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===P||t)j(e);else if(e.state===$||t){const s=y;y=null,M(e,n[0]),y=s}}function B(e,t){if(y)return e();let n=!1;t||(y=[]),S?n=!0:S=[],K++;try{const r=e();return $e(n),r}catch(r){ce(r)}finally{y=null,n||(S=null)}}function $e(e){y&&(ue(y),y=null),!e&&(S.length?se(()=>{Ae(S),S=null}):S=null)}function ue(e){for(let t=0;t<e.length;t++)le(e[t])}function M(e,t){const n=L;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===P||n?s!==t&&le(s):(s.state===$||n)&&M(s,t))}}function ae(e){const t=L;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=$,r.pure?y.push(r):S.push(r),r.observers&&ae(r))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();r<s.length&&(l.sourceSlots[o]=r,s[r]=l,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){throw e}function fe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:fe(e.owner,t):void 0}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Q(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ke(e){return function(n){let r;return Te(()=>r=C(()=>(d.context={[e]:n.value},Ue(()=>n.children)))),r}}function Be(e,t){return C(()=>e(t||{}))}function Me(e,t,n){let r=n.length,s=t.length,l=r,o=0,i=0,h=t[s-1].nextSibling,u=null;for(;o<s||i<l;){if(t[o]===n[i]){o++,i++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const a=l<r?i?n[i-1].nextSibling:n[l-i]:h;for(;i<l;)e.insertBefore(n[i++],a)}else if(l===i)for(;o<s;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[i]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--l],a),t[s]=n[l]}else{if(!u){u=new Map;let c=i;for(;c<l;)u.set(n[c],c++)}const a=u.get(t[o]);if(a!=null)if(i<a&&a<l){let c=o,f=1,g;for(;++c<s&&c<l&&!((g=u.get(t[c]))==null||g!==a+f);)f++;if(f>a-i){const m=t[o];for(;i<a;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}const he="_$DX_DELEGATE";function at(e,t,n){let r;return Ce(s=>{r=s,t===document?e():qe(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function ct(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function De(e,t=window.document){const n=t[he]||(t[he]=new Set);for(let r=0,s=e.length;r<s;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,Fe))}}function ft(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function qe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return D(e,t,r,n);k(s=>D(e,t(),s,n),r)}function Fe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r(s,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function D(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=T(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=T(e,n,r);else{if(l==="function")return k(()=>{let i=t();for(;typeof i=="function";)i=i();n=D(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[];if(J(i,t,s))return k(()=>n=D(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=T(e,n,r),o)return n}else Array.isArray(n)?n.length===0?de(e,i,r):Me(e,n,i):(n&&T(e),de(e,i));n=i}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=T(e,n,r,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function J(e,t,n){let r=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],i;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=J(e,o)||r;else if((i=typeof o)==="string")e.push(document.createTextNode(o));else if(i==="function")if(n){for(;typeof o=="function";)o=o();r=J(e,Array.isArray(o)?o:[o])||r}else e.push(o),r=!0;else e.push(document.createTextNode(o.toString()))}return r}function de(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function T(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(s!==i){const h=i.parentNode===e;!l&&!o?h?e.replaceChild(s,i):e.insertBefore(s,n):h&&i.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}function Ge(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ke([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function He(e,t,n,r){let s=!1;const l=i=>typeof i=="string"?{value:i}:i,o=Ke(O(l(e()),{equals:(i,h)=>i.value===h.value}),void 0,i=>(!s&&t(i),i));return n&&Re(n((i=e())=>{s=!0,o[1](l(i)),s=!1})),{signal:o,utils:r}}function Ve(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:O({value:""})};return e}function Xe(){return He(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),n&&window.scrollTo(0,0)},e=>Ge(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Qe=/^(?:[a-z0-9]+:)?\/\//i,Je=/^\/+|\/+$|\s+/g;function Y(e){const t=e.replace(Je,"");return t?t.startsWith("?")?t:"/"+t:""}function Z(e,t,n){if(Qe.test(t))return;const r=Y(e),s=n&&Y(n);let l="";return!s||t.charAt(0)==="/"?l=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?l=r+s:l=s,l+Y(t)||"/"}function Ye(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Ze(e){const t=new Map,n=Oe();return new Proxy({},{get(r,s){return t.has(s)||je(n,()=>t.set(s,E(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const ze=100,et=ie(),tt=ie();function nt(e,t){const n=new URL("http://sar"),r=E(h=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),h}},n,{equals:(h,u)=>h.href===u.href}),s=E(()=>r().pathname),l=E(()=>r().search.slice(1)),o=E(()=>r().hash.slice(1)),i=E(()=>"");return{get pathname(){return s()},get search(){return l()},get hash(){return o()},get state(){return t()},get key(){return i()},query:Ze(Le(l,()=>Ye(r())))}}function rt(e,t="",n,r){const{signal:[s,l],utils:o={}}=Ve(e),i=Z("",t),h=void 0;if(i===void 0)throw new Error(`${i} is not a valid base path`);i&&!s().value&&l({value:i,replace:!0,scroll:!1});const[u,a]=We(),[c,f]=O(s().value),[g,m]=O(s().state),A=nt(c,g),b=[],W={pattern:i,params:{},path:()=>i,outlet:()=>null,resolvePath(v){return Z(i,v)}};n&&(W.data=n({params:{},location:A,navigate:te(W)}));function we(v,w,F){C(()=>{if(typeof w=="number"){w&&(o.go?o.go(w):console.warn("Router integration does not support relative routing"));return}const{replace:me,resolve:be,scroll:Se,state:G}={replace:!1,resolve:!0,scroll:!0,...F},I=be?v.resolvePath(w):Z("",w);if(I===void 0)throw new Error(`Path '${w}' is not a routable path`);if(b.length>=ze)throw new Error("Too many redirects");const ne=c();if(I!==ne||G!==g()){const Ee=b.push({value:ne,replace:me,scroll:Se,state:g});a(()=>{f(I),m(G)}).then(()=>{b.length===Ee&&ye({value:I,state:G})})}})}function te(v){return v=v||Ie(tt)||W,(w,F)=>we(v,w,F)}function ye(v){const w=b[0];w&&((v.value!==w.value||v.state!==w.state)&&l({...v,replace:w.replace,scroll:w.scroll}),b.length=0)}return k(()=>{const{value:v,state:w}=s();v!==C(c)&&a(()=>{f(v),m(w)})}),{base:W,out:h,location:A,isRouting:u,renderPath:o.renderPath||(v=>v),navigatorFactory:te}}const ht=e=>{const{source:t,url:n,base:r,data:s,out:l}=e,o=t||Xe(),i=rt(o,r,s);return Be(et.Provider,{value:i,get children(){return e.children}})};De(["click"]);try{self["workbox:window:6.5.2"]&&_()}catch{}function ge(e,t){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},e.postMessage(t,[r.port2])})}function st(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function it(e,t){var n;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=function(s,l){if(s){if(typeof s=="string")return pe(s,l);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?pe(s,l):void 0}}(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var z=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})};function ee(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var N=function(e,t){this.type=e,Object.assign(this,t)};function q(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function ot(){}var lt={type:"SKIP_WAITING"};function ve(e,t){if(!t)return e&&e.then?e.then(ot):Promise.resolve()}var dt=function(e){var t,n;function r(i,h){var u,a;return h===void 0&&(h={}),(u=e.call(this)||this).nn={},u.tn=0,u.rn=new z,u.en=new z,u.on=new z,u.un=0,u.an=new Set,u.cn=function(){var c=u.fn,f=c.installing;u.tn>0||!ee(f.scriptURL,u.sn.toString())||performance.now()>u.un+6e4?(u.vn=f,c.removeEventListener("updatefound",u.cn)):(u.hn=f,u.an.add(f),u.rn.resolve(f)),++u.tn,f.addEventListener("statechange",u.ln)},u.ln=function(c){var f=u.fn,g=c.target,m=g.state,A=g===u.vn,b={sw:g,isExternal:A,originalEvent:c};!A&&u.mn&&(b.isUpdate=!0),u.dispatchEvent(new N(m,b)),m==="installed"?u.wn=self.setTimeout(function(){m==="installed"&&f.waiting===g&&u.dispatchEvent(new N("waiting",b))},200):m==="activating"&&(clearTimeout(u.wn),A||u.en.resolve(g))},u.dn=function(c){var f=u.hn,g=f!==navigator.serviceWorker.controller;u.dispatchEvent(new N("controlling",{isExternal:g,originalEvent:c,sw:f,isUpdate:u.mn})),g||u.on.resolve(f)},u.gn=(a=function(c){var f=c.data,g=c.ports,m=c.source;return q(u.getSW(),function(){u.an.has(m)&&u.dispatchEvent(new N("message",{data:f,originalEvent:c,ports:g,sw:m}))})},function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];try{return Promise.resolve(a.apply(this,c))}catch(g){return Promise.reject(g)}}),u.sn=i,u.nn=h,navigator.serviceWorker.addEventListener("message",u.gn),u}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s,l,o=r.prototype;return o.register=function(i){var h=(i===void 0?{}:i).immediate,u=h!==void 0&&h;try{var a=this;return function(c,f){var g=c();return g&&g.then?g.then(f):f(g)}(function(){if(!u&&document.readyState!=="complete")return ve(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return a.mn=Boolean(navigator.serviceWorker.controller),a.yn=a.pn(),q(a.bn(),function(c){a.fn=c,a.yn&&(a.hn=a.yn,a.en.resolve(a.yn),a.on.resolve(a.yn),a.yn.addEventListener("statechange",a.ln,{once:!0}));var f=a.fn.waiting;return f&&ee(f.scriptURL,a.sn.toString())&&(a.hn=f,Promise.resolve().then(function(){a.dispatchEvent(new N("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),a.hn&&(a.rn.resolve(a.hn),a.an.add(a.hn)),a.fn.addEventListener("updatefound",a.cn),navigator.serviceWorker.addEventListener("controllerchange",a.dn),a.fn})})}catch(c){return Promise.reject(c)}},o.update=function(){try{return this.fn?ve(this.fn.update()):void 0}catch(i){return Promise.reject(i)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(i){try{return q(this.getSW(),function(h){return ge(h,i)})}catch(h){return Promise.reject(h)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&ge(this.fn.waiting,lt)},o.pn=function(){var i=navigator.serviceWorker.controller;return i&&ee(i.scriptURL,this.sn.toString())?i:void 0},o.bn=function(){try{var i=this;return function(h,u){try{var a=h()}catch(c){return u(c)}return a&&a.then?a.then(void 0,u):a}(function(){return q(navigator.serviceWorker.register(i.sn,i.nn),function(h){return i.un=performance.now(),h})},function(h){throw h})}catch(h){return Promise.reject(h)}},s=r,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&st(s.prototype,l),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(n,r){this.Sn(n).add(r)},t.removeEventListener=function(n,r){this.Sn(n).delete(r)},t.dispatchEvent=function(n){n.target=this;for(var r,s=it(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},e}());export{ht as R,Be as a,k as c,at as r,ft as s,ct as t,dt as v};