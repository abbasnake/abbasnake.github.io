(function(e){function t(t){for(var r,c,i=t[0],a=t[1],s=t[2],f=0,l=[];f<i.length;f++)c=i[f],o[c]&&l.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o={app:0},u=[];function i(e){return a.p+"js/"+({run:"run"}[e]||e)+"."+{"chunk-78d68800":"6caa97ef","chunk-7afdbffb":"901eadda","chunk-c8a01340":"42be0f14","chunk-d5763d34":"e1c82d0f",run:"1f73e99c","chunk-10414908":"d3132744","chunk-4ccfa570":"845f139f","chunk-62c21d2e":"688c5cd6","chunk-7c6ae92e":"4ebc4c07","chunk-d116a20c":"e9255e62","chunk-1ef0b763":"8242df1d","chunk-91b73f78":"10534b38"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-78d68800":1,"chunk-7afdbffb":1,"chunk-c8a01340":1,"chunk-d5763d34":1,run:1,"chunk-10414908":1,"chunk-4ccfa570":1,"chunk-62c21d2e":1,"chunk-7c6ae92e":1,"chunk-d116a20c":1,"chunk-1ef0b763":1,"chunk-91b73f78":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise(function(t,n){for(var r="css/"+({run:"run"}[e]||e)+"."+{"chunk-78d68800":"a6794723","chunk-7afdbffb":"9ba32d3b","chunk-c8a01340":"85442c1d","chunk-d5763d34":"b3f879a0",run:"46e17dd6","chunk-10414908":"4a9fc6c5","chunk-4ccfa570":"4f0c00b3","chunk-62c21d2e":"73605314","chunk-7c6ae92e":"fa170df3","chunk-d116a20c":"938d126a","chunk-1ef0b763":"ff092b35","chunk-91b73f78":"ff092b35"}[e]+".css",o=a.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete c[e],d.parentNode.removeChild(d),n(u)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){c[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=i(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");u.type=r,u.request=c,n[1](u)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://abbasnake.github.io/CustomIntervalTimer/dist/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23ab":function(e,t,n){"use strict";var r=n("66e1"),c=n.n(r);c.a},"2fa3":function(e,t,n){"use strict";var r=n("f499"),c=n.n(r),o=(n("ac6a"),n("5118")),u=n("15b8"),i=n.n(u),a="#78c043",s="#dd1c4f",f="#36baec",l="#f4e800",d=i()([a,s,f,l]);n.d(t,"f",function(){return m}),n.d(t,"i",function(){return b}),n.d(t,"b",function(){return v}),n.d(t,"h",function(){return g}),n.d(t,"c",function(){return B}),n.d(t,"d",function(){return T}),n.d(t,"j",function(){return y}),n.d(t,"e",function(){return j}),n.d(t,"a",function(){return O}),n.d(t,"g",function(){return h});var m=function(e){var t=e.timerBlocks,n=e.sets,r={m:0,s:0};return t.forEach(function(e){e.timers.forEach(function(t){r.s+=t.s*e.repetitions,r.m+=t.m*e.repetitions})}),r.m*=n,r.s*=n,p(r)},p=function(e){var t=v(e);if(t.s>59){var n=t.s%60,r=t.m+(t.s-n)/60;t.s=n,t.m=r}return t},h=function(e){var t=e.timerBlocks,n=e.sets,r=0;return t.forEach(function(e){r+=e.timers.length*e.repetitions}),r*n},b=function(e){var t=k(e.m),n=k(e.s);return"".concat(t,":").concat(n)},k=function(e){return e<10?"0".concat(e):"".concat(e)},v=function(e){return JSON.parse(c()(e))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return Object(o["setInterval"])(e,t)},B=function(e){var t=v(e);return t.s<=0?t.m>0&&(t.m-=1,t.s=59):t.s-=1,t},T=function(e){var t=v(e);return t.s>58?(t.m+=1,t.s=0):t.s+=1,t},y=function(e){return 0===e.m&&0===e.s},j=function(e){return d[e]},O=d.length},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("5c0b"),n("2877")),i={},a=Object(u["a"])(i,c,o,!1,null,null,null);a.options.__file="App.vue";var s=a.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("AppTitlePage",{attrs:{title:"SETUP"}}),e._l(e.timerBlocks,function(e,t){return[n("AppTimerBlock",{key:t,attrs:{block:e,blockIndex:t}})]}),n("AppSets"),n("div",{staticClass:"container__total"},[e._v("TOTAL: "+e._s(e.stringifyTimer(e.totalTime)))]),n("AppButtonMain",{attrs:{title:"START"},on:{onClick:e.runTimer}})],2)},d=[],m=n("2fa3"),p={name:"Setup",components:{AppTitlePage:function(){return n.e("chunk-78d68800").then(n.bind(null,"4242"))},AppTimerBlock:function(){return n.e("chunk-7afdbffb").then(n.bind(null,"cbed"))},AppButtonMain:function(){return n.e("chunk-d5763d34").then(n.bind(null,"70b2"))},AppSets:function(){return n.e("chunk-c8a01340").then(n.bind(null,"58c6"))}},computed:{totalTime:function(){return this.$store.getters.totalTime},timerBlocks:function(){return this.$store.getters.timerBlocks},sets:function(){return this.$store.getters.sets}},methods:{runTimer:function(){this.$router.push({path:"/run"})},stringifyTimer:function(e){return Object(m["i"])(e)}}},h=p,b=(n("23ab"),Object(u["a"])(h,l,d,!1,null,"27778d8b",null));b.options.__file="Setup.vue";var k=b.exports;r["a"].use(f["a"]);var v=new f["a"]({routes:[{path:"/",name:"setup",component:k},{path:"/run",name:"run",component:function(){return n.e("run").then(n.bind(null,"6494"))}}]}),g=n("2f62");r["a"].use(g["a"]);var B={sets:1,timerBlocks:[{repetitions:1,colorIndex:0,timers:[{m:0,s:5}]},{repetitions:2,colorIndex:1,timers:[{m:0,s:2},{m:0,s:3}]}]},T={totalTime:function(e){return Object(m["f"])(e)},timerBlocks:function(e){return Object(m["b"])(e.timerBlocks)},totalTimerCount:function(e){return Object(m["g"])(e)},sets:function(e){return e.sets}},y={addNewBlock:function(e,t){var n=Object(m["b"])(e.timerBlocks),c=n[t].colorIndex+1;c>=m["a"]&&(c=0),n.splice(t+1,0,{repetitions:1,colorIndex:c,timers:[{m:0,s:5}]}),r["a"].set(e,"timerBlocks",n)},removeBlockByIndex:function(e,t){var n=Object(m["b"])(e.timerBlocks);n.length>1&&(n.splice(t,1),r["a"].set(e,"timerBlocks",n))},addTimerToBlock:function(e,t){var n=Object(m["b"])(e.timerBlocks);n[t].timers.push({m:0,s:5}),r["a"].set(e,"timerBlocks",n)},removeTimerFromBlock:function(e,t){var n=t.blockIndex,c=t.timerIndex,o=Object(m["b"])(e.timerBlocks);o[n].timers.length>1?o[n].timers.splice(c,1):o.length>1&&o.splice(n,1),r["a"].set(e,"timerBlocks",o)},removeLastTimerFromBlock:function(e,t){var n=Object(m["b"])(e.timerBlocks);n[t].timers.length>1?n[t].timers.pop():n.length>1&&n.splice(t,1),r["a"].set(e,"timerBlocks",n)},updateBlockRepetitions:function(e,t){var n=t.blockIndex,c=t.repetitions,o=Object(m["b"])(e.timerBlocks);o[n].repetitions=c,r["a"].set(e,"timerBlocks",o)},updateBlockTimer:function(e,t){var n=t.blockIndex,c=t.timerIndex,o=t.timerObject,u=Object(m["b"])(e.timerBlocks);u[n].timers[c]=o,r["a"].set(e,"timerBlocks",u)},incrementBlockColor:function(e,t){var n=Object(m["b"])(e.timerBlocks),c=n[t].colorIndex+1;c>=m["a"]&&(c=0),n[t].colorIndex=c,r["a"].set(e,"timerBlocks",n)},updateSets:function(e,t){e.sets=t}},j={},O=new g["a"].Store({state:B,getters:T,mutations:y,actions:j}),x=O;r["a"].config.productionTip=!1,new r["a"]({router:v,store:x,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),c=n.n(r);c.a},"5e27":function(e,t,n){},"66e1":function(e,t,n){}});
//# sourceMappingURL=app.c8b78313.js.map