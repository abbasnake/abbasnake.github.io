(function(e){function t(t){for(var r,s,u=t[0],a=t[1],o=t[2],f=0,p=[];f<u.length;f++)s=u[f],c[s]&&p.push(c[s][0]),c[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://abbasnake.github.io/Mintos/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14bb":function(e,t,n){"use strict";var r=n("51db"),c=n.n(r);c.a},"4aab":function(e,t,n){"use strict";var r=n("7bf1"),c=n.n(r);c.a},"51db":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Display"),n("Currencies")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Currencies"},[e.currencies.length?n("div",{staticClass:"Currencies-container"},[e._l(e.currencies,function(e){return[n("CurrenciesItem",{key:e.name,attrs:{item:e}})]})],2):n("div",{staticClass:"Currencies-spinner"})])},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CurrenciesItem",class:e.isSelectedClass,on:{click:e.onClick}},[n("input",{staticClass:"CurrenciesItem-checkbox",attrs:{type:"checkbox"},domProps:{checked:e.item.isSelected}}),n("span",{staticClass:"CurrenciesItem-name"},[e._v("\n    "+e._s(e.item.name)+"\n  ")])])},o=[],l=(n("7f7f"),n("55dd"),function(e){return JSON.parse(JSON.stringify(e))}),f=function(e){return e.sort(function(e,t){return e.name<t.name?-1:1})},p=function(e){var t=l(e),n=t.filter(function(e){return e.isSelected}),r=f(n);return r},d=function(e){var t=e.name,n=e.isSelected,r="string"===typeof t&&3===t.length,c="boolean"===typeof n;return r&&c},m={name:"CurrenciesItem",props:{item:{type:Object,required:!0,validator:function(e){return d(e)}}},computed:{isSelectedClass:function(){return this.item.isSelected?"CurrenciesItem-isSelected":""}},methods:{onClick:function(){this.$store.dispatch("toggleCurrencyStatus",this.item.name)}}},h=m,b=(n("b899"),n("2877")),v=Object(b["a"])(h,a,o,!1,null,"f4f74ae8",null),C=v.exports,y={name:"Currencies",components:{CurrenciesItem:C},computed:{currencies:function(){return this.$store.getters["currencies"]}}},g=y,S=(n("4aab"),Object(b["a"])(g,s,u,!1,null,"4d4794d0",null)),O=S.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Display"},[n("div",{staticClass:"Display-container"},[e._l(e.selectedCurrencies,function(e){return[n("DisplayItem",{key:e.name,attrs:{item:e}})]})],2)])},x=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DisplayItem"},[n("span",[e._v(e._s(e.item.name))]),n("button",{staticClass:"DisplayItem-button",on:{click:e.onClick}},[e._v("\n    x\n  ")])])},k=[],w={name:"DisplayItem",props:{item:{type:Object,required:!0,validator:function(e){return d(e)}}},methods:{onClick:function(){this.$store.dispatch("toggleCurrencyStatus",this.item.name)}}},I=w,D=(n("14bb"),Object(b["a"])(I,j,k,!1,null,"aae0d144",null)),R=D.exports,$={name:"Display",components:{DisplayItem:R},computed:{selectedCurrencies:function(){return this.$store.getters["selectedCurrencies"]}}},E=$,P=(n("c4ed"),Object(b["a"])(E,_,x,!1,null,"1e3a497d",null)),M=P.exports,T={name:"app",components:{Currencies:O,Display:M},created:function(){this.$store.dispatch("fetchCurrencies")}},J=T,q=(n("5c0b"),Object(b["a"])(J,c,i,!1,null,null,null)),N=q.exports,U=(n("7514"),n("96cf"),n("3b8d")),B=n("2f62"),G=[{name:"EUR",isSelected:!1},{name:"GBP",isSelected:!1},{name:"USD",isSelected:!1},{name:"CZK",isSelected:!1}],K=G;r["a"].use(B["a"]);var Z={currencies:[]},z={currencies:function(e){return f(e.currencies)},selectedCurrencies:function(e){return p(e.currencies)}},A={updateCurrencies:function(e,t){e.currencies=t}},F={fetchCurrencies:function(){var e=Object(U["a"])(regeneratorRuntime.mark(function e(t){var n,r,c,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch("https://openexchangerates.org/api/currencies.json");case 4:return r=e.sent,e.next=7,r.json();case 7:for(s in c=e.sent,i=[],c)i.push({name:s,isSelected:!1});n("updateCurrencies",i),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log("ERROR: STORE -> fetchCurrencies -> error",e.t0),n("updateCurrencies",K);case 17:case"end":return e.stop()}},e,null,[[1,13]])}));function t(t){return e.apply(this,arguments)}return t}(),toggleCurrencyStatus:function(e,t){var n=e.commit,r=e.state,c=l(r.currencies),i=c.find(function(e){return e.name===t});i?(i.isSelected=!i.isSelected,n("updateCurrencies",c)):console.log("ERROR: STORE -> toggleCurrencyStatus -> error","couldn't find currency with name: ".concat(t))}},H=new B["a"].Store({state:Z,getters:z,mutations:A,actions:F}),L=H,Q=L;r["a"].config.productionTip=!1,new r["a"]({store:Q,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),c=n.n(r);c.a},"5e27":function(e,t,n){},"7bf1":function(e,t,n){},9172:function(e,t,n){},b899:function(e,t,n){"use strict";var r=n("9172"),c=n.n(r);c.a},c3a4:function(e,t,n){},c4ed:function(e,t,n){"use strict";var r=n("c3a4"),c=n.n(r);c.a}});
//# sourceMappingURL=app.da1a2b7d.js.map