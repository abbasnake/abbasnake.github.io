(function(e){function n(n){for(var r,o,u=n[0],a=n[1],s=n[2],l=0,f=[];l<u.length;l++)o=u[l],c[o]&&f.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({run:"run"}[e]||e)+"."+{"chunk-1b5a4934":"fa2b47e8","chunk-731d6280":"00928c39","chunk-78d68800":"6caa97ef","chunk-90064dc0":"2a412701",run:"2541b192","chunk-2abe0986":"7f3de337","chunk-06ab31d8":"ec3c2b82","chunk-0bae7e5e":"8a6be256","chunk-1a57a30f":"fb220e37","chunk-39cb0560":"86e6a21e","chunk-62c21d2e":"688c5cd6","chunk-9955f7c6":"787f3e39","chunk-26319321":"e4211ef8","chunk-5e82234e":"550bca7d","chunk-d875a750":"2bfc3b38","chunk-7116ba1e":"e9d2ab53"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t={"chunk-1b5a4934":1,"chunk-731d6280":1,"chunk-78d68800":1,"chunk-90064dc0":1,run:1,"chunk-2abe0986":1,"chunk-06ab31d8":1,"chunk-0bae7e5e":1,"chunk-1a57a30f":1,"chunk-39cb0560":1,"chunk-62c21d2e":1,"chunk-9955f7c6":1,"chunk-26319321":1,"chunk-5e82234e":1,"chunk-d875a750":1,"chunk-7116ba1e":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({run:"run"}[e]||e)+"."+{"chunk-1b5a4934":"de2be8a8","chunk-731d6280":"24a19c49","chunk-78d68800":"a6794723","chunk-90064dc0":"5b91e49d",run:"5fa6beac","chunk-2abe0986":"03a4815e","chunk-06ab31d8":"d5b6a320","chunk-0bae7e5e":"2488edea","chunk-1a57a30f":"ace6f5e0","chunk-39cb0560":"03835e33","chunk-62c21d2e":"73605314","chunk-9955f7c6":"39846520","chunk-26319321":"7d7d4108","chunk-5e82234e":"82e0a86d","chunk-d875a750":"9fc35c9f","chunk-7116ba1e":"03a4815e"}[e]+".css",c=a.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),t(i)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=c[e]=[n,t]});n.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=u(e),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}c[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="https://abbasnake.github.io/CustomIntervalTimer/dist/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"091d":function(e,n,t){"use strict";var r=t("4ee4"),o=t.n(r);o.a},"2fa3":function(e,n,t){"use strict";var r=t("f499"),o=t.n(r),c=(t("ac6a"),t("5118")),i=t("15b8"),u=t.n(i),a=(t("cadf"),t("551c"),t("097d"),"#78c043"),s="#c53842",l="#36baec",f="#f4e800",d=u()([a,s,l,f]);t.d(n,"f",function(){return h}),t.d(n,"i",function(){return b}),t.d(n,"b",function(){return v}),t.d(n,"h",function(){return g}),t.d(n,"c",function(){return B}),t.d(n,"d",function(){return y}),t.d(n,"j",function(){return T}),t.d(n,"e",function(){return j}),t.d(n,"a",function(){return O}),t.d(n,"g",function(){return p});var h=function(e){var n=e.timerBlocks,t=e.sets,r={m:0,s:0};return n.forEach(function(e){e.timers.forEach(function(n){r.s+=n.s*e.repetitions,r.m+=n.m*e.repetitions})}),r.m*=t,r.s*=t,m(r)},m=function(e){var n=v(e);if(n.s>59){var t=n.s%60,r=n.m+(n.s-t)/60;n.s=t,n.m=r}return n},p=function(e){var n=e.timerBlocks,t=e.sets,r=0;return n.forEach(function(e){r+=e.timers.length*e.repetitions}),r*t},b=function(e){var n=k(e.m),t=k(e.s);return"".concat(n,":").concat(t)},k=function(e){return e<10?"0".concat(e):"".concat(e)},v=function(e){return JSON.parse(o()(e))},g=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return Object(c["setInterval"])(e,n)},B=function(e){var n=v(e);return n.s<=0?n.m>0&&(n.m-=1,n.s=59):n.s-=1,n},y=function(e){var n=v(e);return n.s>58?(n.m+=1,n.s=0):n.s+=1,n},T=function(e){return 0===e.m&&0===e.s},j=function(e){return d[e]},O=d.length},"4ee4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],i=(t("5c0b"),t("2877")),u={},a=Object(i["a"])(u,o,c,!1,null,null,null);a.options.__file="App.vue";var s=a.exports,l=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("AppSets"),e._l(e.timerBlocks,function(e,n){return[t("AppTimerBlock",{key:n,attrs:{block:e,blockIndex:n}})]}),t("div",{staticClass:"container__total"},[e._v("TOTAL: "+e._s(e.stringifyTimer(e.totalTime)))]),t("AppButtonMain",{attrs:{title:"START"},on:{onClick:e.runTimer}})],2)},d=[],h=t("2fa3"),m={name:"Setup",components:{AppTitlePage:function(){return t.e("chunk-78d68800").then(t.bind(null,"4242"))},AppTimerBlock:function(){return t.e("chunk-731d6280").then(t.bind(null,"cbed"))},AppButtonMain:function(){return t.e("chunk-90064dc0").then(t.bind(null,"70b2"))},AppSets:function(){return t.e("chunk-1b5a4934").then(t.bind(null,"58c6"))}},computed:{totalTime:function(){return this.$store.getters.totalTime},timerBlocks:function(){return this.$store.getters.timerBlocks},sets:function(){return this.$store.getters.sets}},methods:{runTimer:function(){this.$router.push({path:"/run"})},stringifyTimer:function(e){return Object(h["i"])(e)}}},p=m,b=(t("091d"),Object(i["a"])(p,f,d,!1,null,"8e854258",null));b.options.__file="Setup.vue";var k=b.exports;r["a"].use(l["a"]);var v=new l["a"]({routes:[{path:"/",name:"setup",component:k},{path:"/run",name:"run",component:function(){return t.e("run").then(t.bind(null,"6494"))}}]}),g=t("2f62");r["a"].use(g["a"]);var B={sets:1,timerBlocks:[{repetitions:1,colorIndex:0,timers:[{m:0,s:5}]},{repetitions:2,colorIndex:1,timers:[{m:0,s:2},{m:0,s:3}]}]},y={totalTime:function(e){return Object(h["f"])(e)},timerBlocks:function(e){return Object(h["b"])(e.timerBlocks)},totalTimerCount:function(e){return Object(h["g"])(e)},sets:function(e){return e.sets}},T={addNewBlock:function(e,n){var t=Object(h["b"])(e.timerBlocks),o=t[n].colorIndex+1;o>=h["a"]&&(o=0),t.splice(n+1,0,{repetitions:1,colorIndex:o,timers:[{m:0,s:5}]}),r["a"].set(e,"timerBlocks",t)},removeBlockByIndex:function(e,n){var t=Object(h["b"])(e.timerBlocks);t.length>1&&(t.splice(n,1),r["a"].set(e,"timerBlocks",t))},addTimerToBlock:function(e,n){var t=Object(h["b"])(e.timerBlocks);t[n].timers.push({m:0,s:5}),r["a"].set(e,"timerBlocks",t)},removeTimerFromBlock:function(e,n){var t=n.blockIndex,o=n.timerIndex,c=Object(h["b"])(e.timerBlocks);c[t].timers.length>1?c[t].timers.splice(o,1):c.length>1&&c.splice(t,1),r["a"].set(e,"timerBlocks",c)},removeLastTimerFromBlock:function(e,n){var t=Object(h["b"])(e.timerBlocks);t[n].timers.length>1?t[n].timers.pop():t.length>1&&t.splice(n,1),r["a"].set(e,"timerBlocks",t)},updateBlockRepetitions:function(e,n){var t=n.blockIndex,o=n.repetitions,c=Object(h["b"])(e.timerBlocks);c[t].repetitions=o,r["a"].set(e,"timerBlocks",c)},updateBlockTimer:function(e,n){var t=n.blockIndex,o=n.timerIndex,c=n.timerObject,i=Object(h["b"])(e.timerBlocks);i[t].timers[o]=c,r["a"].set(e,"timerBlocks",i)},incrementBlockColor:function(e,n){var t=Object(h["b"])(e.timerBlocks),o=t[n].colorIndex+1;o>=h["a"]&&(o=0),t[n].colorIndex=o,r["a"].set(e,"timerBlocks",t)},updateSets:function(e,n){e.sets=n}},j={},O=new g["a"].Store({state:B,getters:y,mutations:T,actions:j}),w=O,x=t("9483");Object(x["a"])("".concat("https://abbasnake.github.io/CustomIntervalTimer/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:v,store:w,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.7836f14f.js.map