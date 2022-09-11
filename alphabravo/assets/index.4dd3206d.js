(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function F(){}function ie(e){return e()}function Y(){return Object.create(null)}function K(e){e.forEach(ie)}function fe(e){return typeof e=="function"}function ae(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function de(e){return Object.keys(e).length===0}function Z(e){return e==null?"":e}function h(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function I(){return L(" ")}function z(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return Array.from(e.childNodes)}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ee(e,t){e.value=t==null?"":t}function te(e,t,n){e.classList[n?"add":"remove"](t)}let V;function D(e){V=e}const B=[],ne=[],q=[],oe=[],pe=Promise.resolve();let H=!1;function _e(){H||(H=!0,pe.then(ce))}function J(e){q.push(e)}const G=new Set;let T=0;function ce(){const e=V;do{for(;T<B.length;){const t=B[T];T++,D(t),me(t.$$)}for(D(null),B.length=0,T=0;ne.length;)ne.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];G.has(n)||(G.add(n),n())}q.length=0}while(B.length);for(;oe.length;)oe.pop()();H=!1,G.clear(),D(e)}function me(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const ge=new Set;function ue(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function ye(e,t){e.d(1),t.delete(e.key)}function be(e,t,n,o,r,i,c,k,f,l,g,_){let a=e.length,u=i.length,m=a;const y={};for(;m--;)y[e[m].key]=m;const O=[],j=new Map,M=new Map;for(m=u;m--;){const d=_(r,i,m),b=n(d);let v=c.get(b);v?o&&v.p(d,t):(v=l(b,d),v.c()),j.set(b,O[m]=v),b in y&&M.set(b,Math.abs(m-y[b]))}const x=new Set,N=new Set;function A(d){ue(d,1),d.m(k,g),c.set(d.key,d),g=d.first,u--}for(;a&&u;){const d=O[u-1],b=e[a-1],v=d.key,E=b.key;d===b?(g=d.first,a--,u--):j.has(E)?!c.has(v)||x.has(v)?A(d):N.has(E)?a--:M.get(v)>M.get(E)?(N.add(v),A(d)):(x.add(E),a--):(f(b,c),a--)}for(;a--;){const d=e[a];j.has(d.key)||f(d,c)}for(;u;)A(O[u-1]);return O}function we(e,t,n,o){const{fragment:r,on_mount:i,on_destroy:c,after_update:k}=e.$$;r&&r.m(t,n),o||J(()=>{const f=i.map(ie).filter(fe);c?c.push(...f):K(f),e.$$.on_mount=[]}),k.forEach(J)}function ke(e,t){const n=e.$$;n.fragment!==null&&(K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(B.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ae(e,t,n,o,r,i,c,k=[-1]){const f=V;D(e);const l=e.$$={fragment:null,ctx:null,props:i,update:F,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Y(),dirty:k,skip_bound:!1,root:t.target||f.$$.root};c&&c(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(_,a,...u)=>{const m=u.length?u[0]:a;return l.ctx&&r(l.ctx[_],l.ctx[_]=m)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](m),g&&ve(e,_)),a}):[],l.update(),g=!0,K(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const _=he(t.target);l.fragment&&l.fragment.l(_),_.forEach(R)}else l.fragment&&l.fragment.c();t.intro&&ue(e.$$.fragment),we(e,t.target,t.anchor,t.customElement),ce()}D(f)}class Ce{$destroy(){ke(this,1),this.$destroy=F}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function re(e,t,n){const o=e.slice();return o[12]=t[n].isCorrect,o[13]=t[n].id,o}function le(e,t){let n;return{key:e,first:null,c(){n=C("div"),$(n,"class","history-box svelte-17t9nbv"),te(n,"correct",t[12]),this.first=n},m(o,r){U(o,n,r)},p(o,r){t=o,r&32&&te(n,"correct",t[12])},d(o){o&&R(n)}}}function se(e){let t,n;return{c(){t=C("p"),n=L(e[1]),$(t,"class","correct-answer svelte-17t9nbv")},m(o,r){U(o,t,r),h(t,n)},p(o,r){r&2&&P(n,o[1])},d(o){o&&R(t)}}}function Ee(e){let t,n,o,r,i,c,k,f,l,g,_,a,u=[],m=new Map,y,O,j,M,x,N,A,d,b,v,E,W,Q=e[5];const X=s=>s[13];for(let s=0;s<Q.length;s+=1){let p=re(e,Q,s),S=X(p);m.set(S,u[s]=le(S,p))}let w=e[1]&&se(e);return{c(){t=C("main"),n=C("div"),o=C("span"),r=L(e[2]),i=L(`
    /
    `),c=C("span"),k=L(e[3]),f=L(`
    /
    `),l=C("span"),g=L(e[4]),_=I(),a=C("div");for(let s=0;s<u.length;s+=1)u[s].c();O=I(),j=C("h4"),M=L(e[6]),x=I(),N=C("div"),A=C("input"),d=I(),b=C("button"),b.textContent="Check",v=I(),w&&w.c(),$(o,"class","correct-count svelte-17t9nbv"),$(c,"class","wrong-count svelte-17t9nbv"),$(a,"class",y=Z(e[5].length?"history-box-wrapper":"history-box-wrapper no-history")+" svelte-17t9nbv"),$(A,"type","text")},m(s,p){U(s,t,p),h(t,n),h(n,o),h(o,r),h(n,i),h(n,c),h(c,k),h(n,f),h(n,l),h(l,g),h(t,_),h(t,a);for(let S=0;S<u.length;S+=1)u[S].m(a,null);h(t,O),h(t,j),h(j,M),h(t,x),h(t,N),h(N,A),ee(A,e[0]),h(t,d),h(t,b),h(t,v),w&&w.m(t,null),E||(W=[z(A,"input",e[9]),z(A,"keydown",e[7]),z(b,"click",e[8])],E=!0)},p(s,[p]){p&4&&P(r,s[2]),p&8&&P(k,s[3]),p&16&&P(g,s[4]),p&32&&(Q=s[5],u=be(u,p,X,1,s,Q,m,a,ye,le,null,re)),p&32&&y!==(y=Z(s[5].length?"history-box-wrapper":"history-box-wrapper no-history")+" svelte-17t9nbv")&&$(a,"class",y),p&64&&P(M,s[6]),p&1&&A.value!==s[0]&&ee(A,s[0]),s[1]?w?w.p(s,p):(w=se(s),w.c(),w.m(t,null)):w&&(w.d(1),w=null)},i:F,o:F,d(s){s&&R(t);for(let p=0;p<u.length;p+=1)u[p].d();w&&w.d(),E=!1,K(W)}}}function Le(e,t,n){let o="",r="",i=0,c=0,k=0,f=[];const l={A:"alpha",B:"bravo",C:"charlie",D:"delta",E:"echo",F:"foxtrot",G:"golf",H:"hotel",I:"india",J:"juliet",K:"kilo",L:"lima",M:"mike",N:"november",O:"oscar",P:"papa",Q:"quebec",R:"romeo",S:"sierra",T:"tango",U:"uniform",V:"victor",W:"whiskey",X:"xray",Y:"yankee",Z:"zulu",\u0100:"\u0101da\u017Ei",\u010C:"\u010Diekuri",\u0112:"\u0113dole",\u0122:"\u0123erm\u0101\u0146i",\u012A:"\u012Bleni",\u0136:"\u0137emeri",\u013B:"\u013Caudona",\u0145:"\u0146ujorka",\u0160:"\u0161anhaja",\u016A:"\u016Bdele",\u017D:"\u017Eiguri"};let g="";const _=()=>{const y=Math.floor(Math.random()*Object.keys(l).length);n(6,g=Object.keys(l)[y])};_();const a=({key:y})=>{y==="Enter"&&u()},u=()=>{n(1,r="");const y=o.toLowerCase();y!==""&&(n(4,k=k+1),y===l[g]?(n(2,i=i+1),n(5,f=[{isCorrect:1,id:new Date},...f])):(n(3,c=c+1),n(5,f=[{isCorrect:0,id:new Date},...f]),n(1,r=l[g])),f.length>10&&n(5,f=f.slice(0,-1)),n(0,o=""),_())};function m(){o=this.value,n(0,o)}return[o,r,i,c,k,f,g,a,u,m]}class Oe extends Ce{constructor(t){super(),Ae(this,t,Le,Ee,ae,{})}}new Oe({target:document.getElementById("app")});
