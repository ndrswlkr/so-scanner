(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const Tt=(e,t)=>e===t,ee=Symbol("solid-proxy"),Ke=Symbol("solid-track"),Oe={equals:Tt};let ut=pt;const J=1,_e=2,ft={owned:null,cleanups:null,context:null,owner:null};var _=null;let Fe=null,Pt=null,O=null,j=null,K=null,Re=0;function Le(e,t){const r=O,n=_,o=e.length===0,s=t===void 0?n:t,l=o?ft:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>re(()=>De(l)));_=l,O=null;try{return ae(i,!0)}finally{O=r,_=n}}function Ie(e,t){t=t?Object.assign({},Oe,t):Oe;const r={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=o=>(typeof o=="function"&&(o=o(r.value)),ht(r,o));return[dt.bind(r),n]}function le(e,t,r){const n=Ze(e,t,!1,J);me(n)}function pe(e,t,r){ut=Mt;const n=Ze(e,t,!1,J);(!r||!r.render)&&(n.user=!0),K?K.push(n):me(n)}function jt(e,t,r){r=r?Object.assign({},Oe,r):Oe;const n=Ze(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,me(n),dt.bind(n)}function Nt(e){return ae(e,!1)}function re(e){if(O===null)return e();const t=O;O=null;try{return e()}finally{O=t}}function Ct(e){pe(()=>re(e))}function Rt(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function He(){return O}function dt(){if(this.sources&&this.state)if(this.state===J)me(this);else{const e=j;j=null,ae(()=>Te(this),!1),j=e}if(O){const e=this.observers?this.observers.length:0;O.sources?(O.sources.push(this),O.sourceSlots.push(e)):(O.sources=[this],O.sourceSlots=[e]),this.observers?(this.observers.push(O),this.observerSlots.push(O.sources.length-1)):(this.observers=[O],this.observerSlots=[O.sources.length-1])}return this.value}function ht(e,t,r){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&ae(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=Fe&&Fe.running;l&&Fe.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?j.push(s):K.push(s),s.observers&&gt(s)),l||(s.state=J)}if(j.length>1e6)throw j=[],new Error},!1)),t}function me(e){if(!e.fn)return;De(e);const t=Re;It(e,e.value,t)}function It(e,t,r){let n;const o=_,s=O;O=_=e;try{n=e.fn(t)}catch(l){return e.pure&&(e.state=J,e.owned&&e.owned.forEach(De),e.owned=null),e.updatedAt=r+1,wt(l)}finally{O=s,_=o}(!e.updatedAt||e.updatedAt<=r)&&(e.updatedAt!=null&&"observers"in e?ht(e,n):e.value=n,e.updatedAt=r)}function Ze(e,t,r,n=J,o){const s={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:r};return _===null||_!==ft&&(_.owned?_.owned.push(s):_.owned=[s]),s}function ke(e){if(e.state===0)return;if(e.state===_e)return Te(e);if(e.suspense&&re(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Re);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if(e=t[r],e.state===J)me(e);else if(e.state===_e){const n=j;j=null,ae(()=>Te(e,t[0]),!1),j=n}}function ae(e,t){if(j)return e();let r=!1;t||(j=[]),K?r=!0:K=[],Re++;try{const n=e();return Dt(r),n}catch(n){r||(K=null),j=null,wt(n)}}function Dt(e){if(j&&(pt(j),j=null),e)return;const t=K;K=null,t.length&&ae(()=>ut(t),!1)}function pt(e){for(let t=0;t<e.length;t++)ke(e[t])}function Mt(e){let t,r=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[r++]=n:ke(n)}for(t=0;t<r;t++)ke(e[t])}function Te(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const n=e.sources[r];if(n.sources){const o=n.state;o===J?n!==t&&(!n.updatedAt||n.updatedAt<Re)&&ke(n):o===_e&&Te(n,t)}}}function gt(e){for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];r.state||(r.state=_e,r.pure?j.push(r):K.push(r),r.observers&&gt(r))}}function De(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),o=r.observers;if(o&&o.length){const s=o.pop(),l=r.observerSlots.pop();n<o.length&&(s.sourceSlots[l]=n,o[n]=s,r.observerSlots[n]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)De(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ut(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function wt(e,t=_){throw Ut(e)}const Ft=Symbol("fallback");function tt(e){for(let t=0;t<e.length;t++)e[t]()}function Gt(e,t,r={}){let n=[],o=[],s=[],l=0,i=t.length>1?[]:null;return Rt(()=>tt(s)),()=>{let p=e()||[],w,d;return p[Ke],re(()=>{let v=p.length,L,P,N,C,R,b,k,T,E;if(v===0)l!==0&&(tt(s),s=[],n=[],o=[],l=0,i&&(i=[])),r.fallback&&(n=[Ft],o[0]=Le(V=>(s[0]=V,r.fallback())),l=1);else if(l===0){for(o=new Array(v),d=0;d<v;d++)n[d]=p[d],o[d]=Le(g);l=v}else{for(N=new Array(v),C=new Array(v),i&&(R=new Array(v)),b=0,k=Math.min(l,v);b<k&&n[b]===p[b];b++);for(k=l-1,T=v-1;k>=b&&T>=b&&n[k]===p[T];k--,T--)N[T]=o[k],C[T]=s[k],i&&(R[T]=i[k]);for(L=new Map,P=new Array(T+1),d=T;d>=b;d--)E=p[d],w=L.get(E),P[d]=w===void 0?-1:w,L.set(E,d);for(w=b;w<=k;w++)E=n[w],d=L.get(E),d!==void 0&&d!==-1?(N[d]=o[w],C[d]=s[w],i&&(R[d]=i[w]),d=P[d],L.set(E,d)):s[w]();for(d=b;d<v;d++)d in N?(o[d]=N[d],s[d]=C[d],i&&(i[d]=R[d],i[d](d))):o[d]=Le(g);o=o.slice(0,l=v),n=p.slice(0)}return o});function g(v){if(s[d]=v,i){const[L,P]=Ie(d);return i[d]=P,t(p[d],L)}return t(p[d])}}}function X(e,t){return re(()=>e(t||{}))}function Qe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return jt(Gt(()=>e.each,e.children,t||void 0))}function Bt(e,t,r){let n=r.length,o=t.length,s=n,l=0,i=0,p=t[o-1].nextSibling,w=null;for(;l<o||i<s;){if(t[l]===r[i]){l++,i++;continue}for(;t[o-1]===r[s-1];)o--,s--;if(o===l){const d=s<n?i?r[i-1].nextSibling:r[s-i]:p;for(;i<s;)e.insertBefore(r[i++],d)}else if(s===i)for(;l<o;)(!w||!w.has(t[l]))&&t[l].remove(),l++;else if(t[l]===r[s-1]&&r[i]===t[o-1]){const d=t[--o].nextSibling;e.insertBefore(r[i++],t[l++].nextSibling),e.insertBefore(r[--s],d),t[o]=r[s]}else{if(!w){w=new Map;let g=i;for(;g<s;)w.set(r[g],g++)}const d=w.get(t[l]);if(d!=null)if(i<d&&d<s){let g=l,v=1,L;for(;++g<o&&g<s&&!((L=w.get(t[g]))==null||L!==d+v);)v++;if(v>d-i){const P=t[l];for(;i<d;)e.insertBefore(r[i++],P)}else e.replaceChild(r[i++],t[l++])}else l++;else t[l++].remove()}}}const rt="_$DX_DELEGATE";function zt(e,t,r,n={}){let o;return Le(s=>{o=s,t===document?e():D(t,e(),t.firstChild?null:void 0,r)},n.owner),()=>{o(),t.textContent=""}}function H(e,t,r){let n;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,r?l.content.firstChild.firstChild:l.content.firstChild},s=t?()=>re(()=>document.importNode(n||(n=o()),!0)):()=>(n||(n=o())).cloneNode(!0);return s.cloneNode=s,s}function Wt(e,t=window.document){const r=t[rt]||(t[rt]=new Set);for(let n=0,o=e.length;n<o;n++){const s=e[n];r.has(s)||(r.add(s),t.addEventListener(s,xt))}}function Ae(e,t,r){return re(()=>e(t,r))}function D(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return Pe(e,t,n,r);le(o=>Pe(e,t(),o,r),n)}function xt(e){const t=`$$${e.type}`;let r=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==r&&Object.defineProperty(e,"target",{configurable:!0,value:r}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return r||document}});r;){const n=r[t];if(n&&!r.disabled){const o=r[`${t}Data`];if(o!==void 0?n.call(r,o,e):n.call(r,e),e.cancelBubble)return}r=r._$host||r.parentNode||r.host}}function Pe(e,t,r,n,o){for(;typeof r=="function";)r=r();if(t===r)return r;const s=typeof t,l=n!==void 0;if(e=l&&r[0]&&r[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let i=r[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),r=se(e,r,n,i)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t;else if(t==null||s==="boolean")r=se(e,r,n);else{if(s==="function")return le(()=>{let i=t();for(;typeof i=="function";)i=i();r=Pe(e,i,r,n)}),()=>r;if(Array.isArray(t)){const i=[],p=r&&Array.isArray(r);if(qe(i,t,r,o))return le(()=>r=Pe(e,i,r,n,!0)),()=>r;if(i.length===0){if(r=se(e,r,n),l)return r}else p?r.length===0?nt(e,i,n):Bt(e,r,i):(r&&se(e),nt(e,i));r=i}else if(t.nodeType){if(Array.isArray(r)){if(l)return r=se(e,r,n,t);se(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function qe(e,t,r,n){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],p=r&&r[e.length],w;if(!(i==null||i===!0||i===!1))if((w=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=qe(e,i,p)||o;else if(w==="function")if(n){for(;typeof i=="function";)i=i();o=qe(e,Array.isArray(i)?i:[i],Array.isArray(p)?p:[p])||o}else e.push(i),o=!0;else{const d=String(i);p&&p.nodeType===3&&p.data===d?e.push(p):e.push(document.createTextNode(d))}}return o}function nt(e,t,r=null){for(let n=0,o=t.length;n<o;n++)e.insertBefore(t[n],r)}function se(e,t,r,n){if(r===void 0)return e.textContent="";const o=n||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const p=i.parentNode===e;!s&&!l?p?e.replaceChild(o,i):e.insertBefore(o,r):p&&i.remove()}else s=!0}}else e.insertBefore(o,r);return[o]}const Ye=Symbol("store-raw"),ie=Symbol("store-node"),z=Symbol("store-has"),yt=Symbol("store-self");function vt(e){let t=e[ee];if(!t&&(Object.defineProperty(e,ee,{value:t=new Proxy(e,qt)}),!Array.isArray(e))){const r=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let o=0,s=r.length;o<s;o++){const l=r[o];n[l].get&&Object.defineProperty(e,l,{enumerable:n[l].enumerable,get:n[l].get.bind(t)})}}return t}function je(e){let t;return e!=null&&typeof e=="object"&&(e[ee]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function we(e,t=new Set){let r,n,o,s;if(r=e!=null&&e[Ye])return r;if(!je(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,i=e.length;l<i;l++)o=e[l],(n=we(o,t))!==o&&(e[l]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let p=0,w=l.length;p<w;p++)s=l[p],!i[s].get&&(o=e[s],(n=we(o,t))!==o&&(e[s]=n))}return e}function Ne(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function ye(e,t,r){if(e[t])return e[t];const[n,o]=Ie(r,{equals:!1,internal:!0});return n.$=o,e[t]=n}function Kt(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===ee||t===ie||(delete r.value,delete r.writable,r.get=()=>e[ee][t]),r}function mt(e){He()&&ye(Ne(e,ie),yt)()}function Ht(e){return mt(e),Reflect.ownKeys(e)}const qt={get(e,t,r){if(t===Ye)return e;if(t===ee)return r;if(t===Ke)return mt(e),r;const n=Ne(e,ie),o=n[t];let s=o?o():e[t];if(t===ie||t===z||t==="__proto__")return s;if(!o){const l=Object.getOwnPropertyDescriptor(e,t);He()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(s=ye(n,t,s)())}return je(s)?vt(s):s},has(e,t){return t===Ye||t===ee||t===Ke||t===ie||t===z||t==="__proto__"?!0:(He()&&ye(Ne(e,z),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Ht,getOwnPropertyDescriptor:Kt};function Ce(e,t,r,n=!1){if(!n&&e[t]===r)return;const o=e[t],s=e.length;r===void 0?(delete e[t],e[z]&&e[z][t]&&o!==void 0&&e[z][t].$()):(e[t]=r,e[z]&&e[z][t]&&o===void 0&&e[z][t].$());let l=Ne(e,ie),i;if((i=ye(l,t,o))&&i.$(()=>r),Array.isArray(e)&&e.length!==s){for(let p=e.length;p<s;p++)(i=l[p])&&i.$();(i=ye(l,"length",s))&&i.$(e.length)}(i=l[yt])&&i.$()}function bt(e,t){const r=Object.keys(t);for(let n=0;n<r.length;n+=1){const o=r[n];Ce(e,o,t[o])}}function Yt(e,t){if(typeof t=="function"&&(t=t(e)),t=we(t),Array.isArray(t)){if(e===t)return;let r=0,n=t.length;for(;r<n;r++){const o=t[r];e[r]!==o&&Ce(e,r,o)}Ce(e,"length",n)}else bt(e,t)}function ge(e,t,r=[]){let n,o=e;if(t.length>1){n=t.shift();const l=typeof n,i=Array.isArray(e);if(Array.isArray(n)){for(let p=0;p<n.length;p++)ge(e,[n[p]].concat(t),r);return}else if(i&&l==="function"){for(let p=0;p<e.length;p++)n(e[p],p)&&ge(e,[p].concat(t),r);return}else if(i&&l==="object"){const{from:p=0,to:w=e.length-1,by:d=1}=n;for(let g=p;g<=w;g+=d)ge(e,[g].concat(t),r);return}else if(t.length>1){ge(e[n],t,[n].concat(r));return}o=e[n],r=[n].concat(r)}let s=t[0];typeof s=="function"&&(s=s(o,r),s===o)||n===void 0&&s==null||(s=we(s),n===void 0||je(o)&&je(s)&&!Array.isArray(s)?bt(o,s):Ce(e,n,s))}function St(...[e,t]){const r=we(e||{}),n=Array.isArray(r),o=vt(r);function s(...l){Nt(()=>{n&&l.length===1?Yt(r,l[0]):ge(r,l)})}return[o,s]}const[F,te]=St({treshold:70,run:!1,selectedDevice:null});function Jt(e){localStorage.setItem("settings",JSON.stringify(e))}const Vt=()=>{const e=localStorage.getItem("settings");e&&(te(JSON.parse(e)),te(t=>({...t,run:!1})))},[Ee,Zt]=St([]);var Qt={exports:{}};(function(e){var t=function(r){var n=Object.prototype,o=n.hasOwnProperty,s=Object.defineProperty||function(u,a,f){u[a]=f.value},l,i=typeof Symbol=="function"?Symbol:{},p=i.iterator||"@@iterator",w=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function g(u,a,f){return Object.defineProperty(u,a,{value:f,enumerable:!0,configurable:!0,writable:!0}),u[a]}try{g({},"")}catch{g=function(a,f,y){return a[f]=y}}function v(u,a,f,y){var c=a&&a.prototype instanceof k?a:k,h=Object.create(c.prototype),m=new de(y||[]);return s(h,"_invoke",{value:Me(u,f,m)}),h}r.wrap=v;function L(u,a,f){try{return{type:"normal",arg:u.call(a,f)}}catch(y){return{type:"throw",arg:y}}}var P="suspendedStart",N="suspendedYield",C="executing",R="completed",b={};function k(){}function T(){}function E(){}var V={};g(V,p,function(){return this});var ue=Object.getPrototypeOf,ne=ue&&ue(ue(he([])));ne&&ne!==n&&o.call(ne,p)&&(V=ne);var q=E.prototype=k.prototype=Object.create(V);T.prototype=E,s(q,"constructor",{value:E,configurable:!0}),s(E,"constructor",{value:T,configurable:!0}),T.displayName=g(E,d,"GeneratorFunction");function be(u){["next","throw","return"].forEach(function(a){g(u,a,function(f){return this._invoke(a,f)})})}r.isGeneratorFunction=function(u){var a=typeof u=="function"&&u.constructor;return a?a===T||(a.displayName||a.name)==="GeneratorFunction":!1},r.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,E):(u.__proto__=E,g(u,d,"GeneratorFunction")),u.prototype=Object.create(q),u},r.awrap=function(u){return{__await:u}};function oe(u,a){function f(h,m,S,A){var $=L(u[h],u,m);if($.type==="throw")A($.arg);else{var Y=$.arg,G=Y.value;return G&&typeof G=="object"&&o.call(G,"__await")?a.resolve(G.__await).then(function(B){f("next",B,S,A)},function(B){f("throw",B,S,A)}):a.resolve(G).then(function(B){Y.value=B,S(Y)},function(B){return f("throw",B,S,A)})}}var y;function c(h,m){function S(){return new a(function(A,$){f(h,m,A,$)})}return y=y?y.then(S,S):S()}s(this,"_invoke",{value:c})}be(oe.prototype),g(oe.prototype,w,function(){return this}),r.AsyncIterator=oe,r.async=function(u,a,f,y,c){c===void 0&&(c=Promise);var h=new oe(v(u,a,f,y),c);return r.isGeneratorFunction(a)?h:h.next().then(function(m){return m.done?m.value:h.next()})};function Me(u,a,f){var y=P;return function(h,m){if(y===C)throw new Error("Generator is already running");if(y===R){if(h==="throw")throw m;return Se()}for(f.method=h,f.arg=m;;){var S=f.delegate;if(S){var A=fe(S,f);if(A){if(A===b)continue;return A}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(y===P)throw y=R,f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);y=C;var $=L(u,a,f);if($.type==="normal"){if(y=f.done?R:N,$.arg===b)continue;return{value:$.arg,done:f.done}}else $.type==="throw"&&(y=R,f.method="throw",f.arg=$.arg)}}}function fe(u,a){var f=a.method,y=u.iterator[f];if(y===l)return a.delegate=null,f==="throw"&&u.iterator.return&&(a.method="return",a.arg=l,fe(u,a),a.method==="throw")||f!=="return"&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+f+"' method")),b;var c=L(y,u.iterator,a.arg);if(c.type==="throw")return a.method="throw",a.arg=c.arg,a.delegate=null,b;var h=c.arg;if(!h)return a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,b;if(h.done)a[u.resultName]=h.value,a.next=u.nextLoc,a.method!=="return"&&(a.method="next",a.arg=l);else return h;return a.delegate=null,b}be(q),g(q,d,"Generator"),g(q,p,function(){return this}),g(q,"toString",function(){return"[object Generator]"});function Ue(u){var a={tryLoc:u[0]};1 in u&&(a.catchLoc=u[1]),2 in u&&(a.finallyLoc=u[2],a.afterLoc=u[3]),this.tryEntries.push(a)}function Z(u){var a=u.completion||{};a.type="normal",delete a.arg,u.completion=a}function de(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(Ue,this),this.reset(!0)}r.keys=function(u){var a=Object(u),f=[];for(var y in a)f.push(y);return f.reverse(),function c(){for(;f.length;){var h=f.pop();if(h in a)return c.value=h,c.done=!1,c}return c.done=!0,c}};function he(u){if(u){var a=u[p];if(a)return a.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var f=-1,y=function c(){for(;++f<u.length;)if(o.call(u,f))return c.value=u[f],c.done=!1,c;return c.value=l,c.done=!0,c};return y.next=y}}return{next:Se}}r.values=he;function Se(){return{value:l,done:!0}}return de.prototype={constructor:de,reset:function(u){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(Z),!u)for(var a in this)a.charAt(0)==="t"&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=l)},stop:function(){this.done=!0;var u=this.tryEntries[0],a=u.completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(u){if(this.done)throw u;var a=this;function f(A,$){return h.type="throw",h.arg=u,a.next=A,$&&(a.method="next",a.arg=l),!!$}for(var y=this.tryEntries.length-1;y>=0;--y){var c=this.tryEntries[y],h=c.completion;if(c.tryLoc==="root")return f("end");if(c.tryLoc<=this.prev){var m=o.call(c,"catchLoc"),S=o.call(c,"finallyLoc");if(m&&S){if(this.prev<c.catchLoc)return f(c.catchLoc,!0);if(this.prev<c.finallyLoc)return f(c.finallyLoc)}else if(m){if(this.prev<c.catchLoc)return f(c.catchLoc,!0)}else if(S){if(this.prev<c.finallyLoc)return f(c.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(u,a){for(var f=this.tryEntries.length-1;f>=0;--f){var y=this.tryEntries[f];if(y.tryLoc<=this.prev&&o.call(y,"finallyLoc")&&this.prev<y.finallyLoc){var c=y;break}}c&&(u==="break"||u==="continue")&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var h=c?c.completion:{};return h.type=u,h.arg=a,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(h)},complete:function(u,a){if(u.type==="throw")throw u.arg;return u.type==="break"||u.type==="continue"?this.next=u.arg:u.type==="return"?(this.rval=this.arg=u.arg,this.method="return",this.next="end"):u.type==="normal"&&a&&(this.next=a),b},finish:function(u){for(var a=this.tryEntries.length-1;a>=0;--a){var f=this.tryEntries[a];if(f.finallyLoc===u)return this.complete(f.completion,f.afterLoc),Z(f),b}},catch:function(u){for(var a=this.tryEntries.length-1;a>=0;--a){var f=this.tryEntries[a];if(f.tryLoc===u){var y=f.completion;if(y.type==="throw"){var c=y.arg;Z(f)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(u,a,f){return this.delegate={iterator:he(u),resultName:a,nextLoc:f},this.method==="next"&&(this.arg=l),b}},r}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Qt);var Xe=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Xt=Xe;let ot=0;var At=({id:e,action:t,payload:r={}})=>{let n=e;return typeof n>"u"&&(n=Xt("Job",ot),ot+=1),{id:n,action:t,payload:r}},ce={};let et=!1;ce.logging=et;ce.setLogging=e=>{et=e};ce.log=(...e)=>et?console.log.apply(globalThis,e):null;const er=At,{log:$e}=ce,tr=Xe;let st=0;var rr=()=>{const e=tr("Scheduler",st),t={},r={};let n=[];st+=1;const o=()=>n.length,s=()=>Object.keys(t).length,l=()=>{if(n.length!==0){const g=Object.keys(t);for(let v=0;v<g.length;v+=1)if(typeof r[g[v]]>"u"){n[0](t[g[v]]);break}}},i=(g,v)=>new Promise((L,P)=>{const N=er({action:g,payload:v});n.push(async C=>{n.shift(),r[C.id]=N;try{L(await C[g].apply(globalThis,[...v,N.id]))}catch(R){P(R)}finally{delete r[C.id],l()}}),$e(`[${e}]: Add ${N.id} to JobQueue`),$e(`[${e}]: JobQueue length=${n.length}`),l()});return{addWorker:g=>(t[g.id]=g,$e(`[${e}]: Add ${g.id}`),$e(`[${e}]: Number of workers=${s()}`),l(),g.id),addJob:async(g,...v)=>{if(s()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return i(g,v)},terminate:async()=>{Object.keys(t).forEach(async g=>{await t[g].terminate()}),n=[]},getQueueLen:o,getNumWorkers:s}};function nr(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function or(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var sr=or;const ir=sr;var lr=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":ir()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof nr=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const ar=lr("type")==="browser",cr=ar?e=>new URL(e,window.location.href).href:e=>e;var ur=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(r=>{e[r]&&(t[r]=cr(t[r]))}),t},fr=e=>{const t=[],r=[],n=[],o=[],s=[];return e.blocks&&e.blocks.forEach(l=>{l.paragraphs.forEach(i=>{i.lines.forEach(p=>{p.words.forEach(w=>{w.symbols.forEach(d=>{s.push({...d,page:e,block:l,paragraph:i,line:p,word:w})}),o.push({...w,page:e,block:l,paragraph:i,line:p})}),n.push({...p,page:e,block:l,paragraph:i})}),r.push({...i,page:e,block:l})}),t.push({...l,page:e})}),{...e,blocks:t,paragraphs:r,lines:n,words:o,symbols:s}},Et={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const dr="tesseract.js",hr="5.0.5",pr="Pure Javascript Multilingual OCR",gr="src/index.js",wr="src/index.d.ts",yr="dist/tesseract.min.js",vr="dist/tesseract.min.js",mr={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},br={"./src/worker/node/index.js":"./src/worker/browser/index.js"},Sr="",Ar=["jeromewu"],Er="Apache-2.0",$r={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},Lr={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.0.0","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},Or={"@rollup/pluginutils":"^5.0.2"},_r={type:"git",url:"https://github.com/naptha/tesseract.js.git"},kr={url:"https://github.com/naptha/tesseract.js/issues"},Tr="https://github.com/naptha/tesseract.js",Pr={type:"opencollective",url:"https://opencollective.com/tesseractjs"},jr={name:dr,version:hr,description:pr,main:gr,types:wr,unpkg:yr,jsdelivr:vr,scripts:mr,browser:br,author:Sr,contributors:Ar,license:Er,devDependencies:$r,dependencies:Lr,overrides:Or,repository:_r,bugs:kr,homepage:Tr,collective:Pr};var Nr={workerBlobURL:!0,logger:()=>{}};const Cr=jr.version,Rr=Nr;var Ir={...Rr,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${Cr}/dist/worker.min.js`},Dr=({workerPath:e,workerBlobURL:t})=>{let r;if(Blob&&URL&&t){const n=new Blob([`importScripts("${e}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(n))}else r=new Worker(e);return r},Mr=e=>{e.terminate()},Ur=(e,t)=>{e.onmessage=({data:r})=>{t(r)}},Fr=async(e,t)=>{e.postMessage(t)};const Ge=e=>new Promise((t,r)=>{const n=new FileReader;n.onload=()=>{t(n.result)},n.onerror=({target:{error:{code:o}}})=>{r(Error(`File could not be read! Code=${o}`))},n.readAsArrayBuffer(e)}),Je=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(r=>r.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await Je(e.src)),e.tagName==="VIDEO"&&(t=await Je(e.poster)),e.tagName==="CANVAS"&&await new Promise(r=>{e.toBlob(async n=>{t=await Ge(n),r()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const r=await e.convertToBlob();t=await Ge(r)}else(e instanceof File||e instanceof Blob)&&(t=await Ge(e));return new Uint8Array(t)};var Gr=Je;const Br=Ir,zr=Dr,Wr=Mr,xr=Ur,Kr=Fr,Hr=Gr;var qr={defaultOptions:Br,spawnWorker:zr,terminateWorker:Wr,onMessage:xr,send:Kr,loadImage:Hr};const Yr=ur,Jr=fr,M=At,{log:it}=ce,Vr=Xe,Q=Et,{defaultOptions:Zr,spawnWorker:Qr,terminateWorker:Xr,onMessage:en,loadImage:lt,send:tn}=qr;let at=0;var $t=async(e="eng",t=Q.LSTM_ONLY,r={},n={})=>{const o=Vr("Worker",at),{logger:s,errorHandler:l,...i}=Yr({...Zr,...r}),p={},w={},d=typeof e=="string"?e.split("+"):e;let g=t,v=n;const L=[Q.DEFAULT,Q.LSTM_ONLY].includes(t)&&!i.legacyCore;let P,N;const C=new Promise((c,h)=>{N=c,P=h}),R=c=>{P(c.message)};let b=Qr(i);b.onerror=R,at+=1;const k=(c,h)=>{p[c]=h},T=(c,h)=>{w[c]=h},E=({id:c,action:h,payload:m})=>new Promise((S,A)=>{it(`[${o}]: Start ${c}, action=${h}`);const $=`${h}-${c}`;k($,S),T($,A),tn(b,{workerId:o,jobId:c,action:h,payload:m})}),V=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),ue=c=>E(M({id:c,action:"load",payload:{options:{lstmOnly:L,corePath:i.corePath,logging:i.logging}}})),ne=(c,h,m)=>E(M({id:m,action:"FS",payload:{method:"writeFile",args:[c,h]}})),q=(c,h)=>E(M({id:h,action:"FS",payload:{method:"readFile",args:[c,{encoding:"utf8"}]}})),be=(c,h)=>E(M({id:h,action:"FS",payload:{method:"unlink",args:[c]}})),oe=(c,h,m)=>E(M({id:m,action:"FS",payload:{method:c,args:h}})),Me=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),fe=(c,h)=>E(M({id:h,action:"loadLanguage",payload:{langs:c,options:{langPath:i.langPath,dataPath:i.dataPath,cachePath:i.cachePath,cacheMethod:i.cacheMethod,gzip:i.gzip,lstmOnly:[Q.LSTM_ONLY,Q.TESSERACT_LSTM_COMBINED].includes(g)&&!i.legacyLang}}})),Ue=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),Z=(c,h,m,S)=>E(M({id:S,action:"initialize",payload:{langs:c,oem:h,config:m}})),de=(c="eng",h,m,S)=>{if(L&&[Q.TESSERACT_ONLY,Q.TESSERACT_LSTM_COMBINED].includes(h))throw Error("Legacy model requested but code missing.");const A=h||g;g=A;const $=m||v;v=$;const G=(typeof c=="string"?c.split("+"):c).filter(B=>!d.includes(B));return d.push(...G),G.length>0?fe(G,S).then(()=>Z(c,A,$,S)):Z(c,A,$,S)},he=(c={},h)=>E(M({id:h,action:"setParameters",payload:{params:c}})),Se=async(c,h={},m={blocks:!0,text:!0,hocr:!0,tsv:!0},S)=>E(M({id:S,action:"recognize",payload:{image:await lt(c),options:h,output:m}})),u=(c="Tesseract OCR Result",h=!1,m)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(M({id:m,action:"getPDF",payload:{title:c,textonly:h}}))),a=async(c,h)=>{if(L)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E(M({id:h,action:"detect",payload:{image:await lt(c)}}))},f=async()=>(b!==null&&(Xr(b),b=null),Promise.resolve());en(b,({workerId:c,jobId:h,status:m,action:S,data:A})=>{const $=`${S}-${h}`;if(m==="resolve"){it(`[${c}]: Complete ${h}`);let Y=A;S==="recognize"?Y=Jr(A):S==="getPDF"&&(Y=Array.from({...A,length:Object.keys(A).length})),p[$]({jobId:h,data:Y})}else if(m==="reject")if(w[$](A),S==="load"&&P(A),l)l(A);else throw Error(A);else m==="progress"&&s({...A,userJobId:h})});const y={id:o,worker:b,setResolve:k,setReject:T,load:V,writeText:ne,readText:q,removeFile:be,FS:oe,loadLanguage:Me,initialize:Ue,reinitialize:de,setParameters:he,recognize:Se,getPDF:u,detect:a,terminate:f};return ue().then(()=>fe(e)).then(()=>Z(e,t,n)).then(()=>N(y)).catch(()=>{}),C};const Lt=$t,rn=async(e,t,r)=>{const n=await Lt(t,1,r);return n.recognize(e).finally(async()=>{await n.terminate()})},nn=async(e,t)=>{const r=await Lt("osd",0,t);return r.detect(e).finally(async()=>{await r.terminate()})};var on={recognize:rn,detect:nn},sn={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},ln={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const an=rr,cn=$t,un=on,fn=sn,dn=Et,hn=ln,{setLogging:pn}=ce;var gn={languages:fn,OEM:dn,PSM:hn,createScheduler:an,createWorker:cn,setLogging:pn,...un};const[Ot,wn]=Ie([{label:"none",id:null}]);let W,x,Ve,I,U,ve,ct=0,_t;async function yn(e,t,r){I=e,U=t,ve=r,W=640,x=0,Ve=!1,_t=await gn.createWorker("eng",1)}async function vn(){try{let e=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0});(await navigator.mediaDevices.enumerateDevices()).forEach(r=>{r.kind=="videoinput"&&wn([...Ot(),{label:r.label,id:r.deviceId}])})}catch(e){console.log("error in getting device list",e)}}async function mn(){console.log("getting stream ",F.selectedDevice);try{let e=await navigator.mediaDevices.getUserMedia({video:{deviceId:F.selectedDevice},audio:!1});console.log(I),I.srcObject=e,I.play(),I.addEventListener("canplay",t=>{Ve||(x=I.videoHeight/I.videoWidth*W,I.setAttribute("width",W),I.setAttribute("height",x),U.setAttribute("width",W),U.setAttribute("height",x),ve.setAttribute("width",W),ve.setAttribute("height",x*.333),Ve=!0)},!1)}catch(e){console.log("error getting stream ",e)}}function bn(){let e=U.getContext("2d",{willReadFrequently:!0});e.drawImage(I,0,0,I.videoWidth,I.videoHeight,0,0,W,x),Sn(e),e.rect(W*.111,x*.333,W*.777,x*.333),e.lineWidth=6,e.strokeStyle="green",e.stroke()}function Sn(e){let t=e.getImageData(0,0,U.width,U.height),r=t.data;const n=Math.floor(F.treshold/100*255);for(let o=0;o<r.length;o+=4){const s=r[o],l=r[o+1],i=r[o+2],p=.2126*s+.7152*l+.0722*i;let w;p>=n?w=255:w=0,r[o]=r[o+1]=r[o+2]=w}e.putImageData(t,0,0)}function An(){window.requestAnimationFrame(kt)}async function kt(e){e-ct>600&&(ct=e,bn(),F.run&&await En()),F.run&&window.requestAnimationFrame(kt)}async function En(){ve.getContext("2d").drawImage(U,U.width*.111,U.height*.333,U.width*.777,U.height*.333,0,0,W,x*.333);let t=new Image;t.src=ve.toDataURL("image/png");const r=await _t.recognize(t,{rotateAuto:!0},{imageColor:!0,imageGrey:!0,imageBinary:!0});r?.data?.confidence>70&&$n(r)}function $n(e){e.data.lines.forEach(t=>{t.words.forEach(r=>{let n=r.text.match(/\d{8}/);n&&Zt(o=>[...o,n[0]])})})}var Ln=H("<div><select>"),On=H("<option> ");function _n(){return(()=>{var e=Ln(),t=e.firstChild;return t.addEventListener("change",r=>te(n=>({selectedDevice:r.target.value}))),D(t,X(Qe,{get each(){return Ot()},children:r=>(()=>{var n=On(),o=n.firstChild;return D(n,()=>r.label,o),le(()=>n.selected=r.id===F.selectedDevice),le(()=>n.value=r.id),n})()})),e})()}var kn=H("<select>"),Tn=H("<option>");function Pn(){let e=[30,40,50,60,70,80,90];return(()=>{var t=kn();return t.addEventListener("change",r=>te(n=>({treshold:Number(r.target.value)}))),D(t,X(Qe,{each:e,children:r=>(()=>{var n=Tn();return n.value=r,D(n,r),le(()=>n.selected=r===Number(F.treshold)),n})()})),t})()}var jn=H("<button>");function Nn(){return(()=>{var e=jn();return e.$$click=()=>te(t=>({run:!t.run})),D(e,()=>F.run?"stop":"start"),e})()}Wt(["click"]);var Cn=H("<div id=controls>"),Rn=H("<audio id=bell src=achievement-bell.wav>"),In=H("<div><video id=video width=640 height=640 hidden=true>Video stream not available.</video><div id=pile><canvas id=videoPreview width=360 height=360></canvas><canvas id=videoAnalyze hidden=true></canvas><h3 id=lastSO></h3></div><ul id=resultView>"),Dn=H("<li>");let Be,ze,We,xe;function Mn(){const[e,t]=Ie("nothing detected");return Ct(async()=>{Vt(),yn(Be,ze,We),await vn()}),pe(()=>{Jt(F)}),pe(()=>{F.selectedDevice&&mn()}),pe(()=>{F.run&&An()}),pe(()=>{Ee.length&&(t(Ee[Ee.length-1]),te(r=>({...r,run:!1})),xe.play(),setTimeout(()=>{te(r=>({...r,run:!0})),t("nothing detected")},3e3))}),[(()=>{var r=Cn();return D(r,X(_n,{}),null),D(r,X(Pn,{}),null),D(r,X(Nn,{}),null),r})(),(()=>{var r=Rn(),n=xe;return typeof n=="function"?Ae(n,r):xe=r,r})(),(()=>{var r=In(),n=r.firstChild,o=n.nextSibling,s=o.firstChild,l=s.nextSibling,i=l.nextSibling,p=o.nextSibling,w=Be;typeof w=="function"?Ae(w,n):Be=n;var d=ze;typeof d=="function"?Ae(d,s):ze=s;var g=We;return typeof g=="function"?Ae(g,l):We=l,D(i,e),D(p,X(Qe,{each:Ee,children:v=>(()=>{var L=Dn();return D(L,v),L})()})),r})()]}const Un=document.getElementById("root");zt(()=>X(Mn,{}),Un);
