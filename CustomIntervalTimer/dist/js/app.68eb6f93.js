(function(t){function e(e){for(var o,r,s=e[0],l=e[1],a=e[2],u=0,p=[];u<s.length;u++)r=s[u],i[r]&&p.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(c.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},i={app:0},c=[];function s(t){return l.p+"js/"+({run:"run"}[t]||t)+"."+{run:"6f3ef752","chunk-005cebeb":"99de7990","chunk-26c02b39":"c73f5665","chunk-4a8d0f88":"8fd66a30","chunk-bad70ab4":"e944e24a"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={run:1,"chunk-005cebeb":1,"chunk-26c02b39":1,"chunk-4a8d0f88":1,"chunk-bad70ab4":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({run:"run"}[t]||t)+"."+{run:"a66004d6","chunk-005cebeb":"e5de1b11","chunk-26c02b39":"9fc35c9f","chunk-4a8d0f88":"3a5e4d0e","chunk-bad70ab4":"8f45ae8b"}[t]+".css",i=l.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var a=c[s],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===o||u===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){a=p[s],u=a.getAttribute("data-href");if(u===o||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.request=o,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[t]=0}));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=c);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),a=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}i[t]=void 0}};var p=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://abbasnake.github.io/CustomIntervalTimer/dist/",l.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11ae":function(t,e,n){},"1d82":function(t,e,n){"use strict";var o=n("c91c"),r=n.n(o);r.a},"24cc":function(t,e,n){"use strict";var o=n("29d2"),r=n.n(o);r.a},"27ee":function(t,e,n){},"29d2":function(t,e,n){},"2d38":function(t,e,n){},"2fa3":function(t,e,n){"use strict";var o=n("f499"),r=n.n(o),i=(n("ac6a"),n("cadf"),n("551c"),n("097d"),n("15b8")),c=n.n(i),s="#00b165",l="#f05c49",a="#92d5d5",u="#ffda67",p=c()([s,l,a,u]);n.d(e,"f",function(){return d}),n.d(e,"h",function(){return v}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return k}),n.d(e,"d",function(){return B}),n.d(e,"i",function(){return g}),n.d(e,"e",function(){return _}),n.d(e,"a",function(){return x}),n.d(e,"g",function(){return m});var d=function(t){var e=t.timerBlocks,n=t.sets,o={m:0,s:0};return e.forEach(function(t){t.timers.forEach(function(e){o.s+=e.s*t.repetitions,o.m+=e.m*t.repetitions})}),o.m*=n,o.s*=n,f(o)},f=function(t){var e=h(t);if(e.s>59){var n=e.s%60,o=e.m+(e.s-n)/60;e.s=n,e.m=o}return e},m=function(t){var e=t.timerBlocks,n=t.sets,o=0;return e.forEach(function(t){o+=t.timers.length*t.repetitions}),o*n},v=function(t){var e=b(t.m),n=b(t.s);return"".concat(e,":").concat(n)},b=function(t){return t<10?"0".concat(t):"".concat(t)},h=function(t){return JSON.parse(r()(t))},k=function(t){var e=h(t);return e.s<=0?e.m>0&&(e.m-=1,e.s=59):e.s-=1,e},B=function(t){var e=h(t);return e.s>58?(e.m+=1,e.s=0):e.s+=1,e},g=function(t){return 0===t.m&&0===t.s},_=function(t){return p[t]},x=p.length},"2fc1":function(t,e,n){},3038:function(t,e,n){},4513:function(t,e,n){},"4a04":function(t,e,n){"use strict";var o=n("7801"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),s={},l=Object(c["a"])(s,r,i,!1,null,null,null);l.options.__file="App.vue";var a=l.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("AppSets"),t._l(t.timerBlocks,function(t,e){return[n("AppTimerBlock",{key:e,attrs:{block:t,blockIndex:e}})]}),n("div",{staticClass:"container__total"},[t._v("TOTAL: "+t._s(t.stringifyTimer(t.totalTime)))]),n("AppButtonMain",{attrs:{title:"START"},on:{onClick:t.runTimer}})],2)},d=[],f=n("2fa3"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerSets"},[n("h3",{staticClass:"containerSets__title"},[t._v("SETS")]),n("div",{staticClass:"containerSets__configuration"},[n("AppButtonArrow",{attrs:{orientation:"left",fill:"grey"},on:{onClick:function(e){t.updateSets(t.sets-1)}}}),n("span",{staticClass:"containerSets__configuration__text"},[t._v("\n      "+t._s(t.sets)+"x\n    ")]),n("AppButtonArrow",{attrs:{orientation:"right",fill:"grey"},on:{onClick:function(e){t.updateSets(t.sets+1)}}})],1)])},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.removeIcon?n("svg",{staticClass:"svg",attrs:{width:t.size,height:t.size-1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 198.4 198.4"},on:{click:t.onClick}},[n("polygon",{staticClass:"svg__polygon",attrs:{fill:t.fill,points:"178.1,3.2 179.2,1.3 143.1,1.3 142,3.2 100.4,70.2 62.4,3.2 61.3,1.3 28.3,1.3 29.3,3.2 84.4,100.2\n      29,197.8 62.1,197.8 100.4,130.2 142.3,197.8 178.4,197.8 117.9,100.2"}})]):n("svg",{staticClass:"svg",style:t.returnOrientation(),attrs:{width:t.size,height:t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 198.46 184.25"},on:{click:t.onClick}},[n("polygon",{staticClass:"svg__polygon",attrs:{fill:t.fill,points:"198.46 0 164.8 0 102.97 118.9 36.74 0.02 0 0.02 102.63 184.25 198.46 0"}})])},h=[],k=(n("c5f6"),{name:"AppButtonArrow",props:{size:{type:Number,default:30},fill:{type:String,default:"lightgreen"},orientation:{type:String,required:!0,validator:function(t){return-1!==["left","right","up","down"].indexOf(t)}},removeIcon:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("onClick")},returnOrientation:function(){var t=0;return"left"===this.orientation&&(t=90),"right"===this.orientation&&(t=-90),"up"===this.orientation&&(t=180),"transform: rotate(".concat(t,"deg)")}}}),B=k,g=(n("24cc"),Object(c["a"])(B,b,h,!1,null,"c6cdf002",null));g.options.__file="AppButtonArrow.vue";var _=g.exports,x={name:"AppSets",components:{AppButtonArrow:_},computed:{sets:function(){return this.$store.getters.sets}},methods:{updateSets:function(t){t>0&&this.$store.commit("updateSets",t)}}},A=x,T=(n("b04b"),Object(c["a"])(A,m,v,!1,null,"271de7b7",null));T.options.__file="AppSets.vue";var w=T.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerBlock",style:t.renderBorderColor()},[n("AppButtonRemoveBlock",{staticClass:"containerBlock__topLeftButton",attrs:{colorIndex:t.block.colorIndex,blockIndex:t.blockIndex}}),n("AppButtonColorWheel",{staticClass:"containerBlock__colorWheel",attrs:{blockIndex:t.blockIndex,colorIndex:t.block.colorIndex}}),n("AppTimerBlockRepetitions",{attrs:{repetitions:t.block.repetitions,blockIndex:t.blockIndex}}),n("AppTimerBlockTimer",{attrs:{block:t.block,blockIndex:t.blockIndex}}),n("AppTimerBlockAddRemoveTimer",{attrs:{blockIndex:t.blockIndex}}),n("div",{staticClass:"containerBlock__sequenceNumber"},[t._v(t._s(t.blockIndex+1))]),n("AppButtonAddBlock",{staticClass:"containerBlock__bottomRightButton",attrs:{colorIndex:t.block.colorIndex,blockIndex:t.blockIndex}})],1)},I=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerRepetitions"},[n("AppButtonArrow",{attrs:{orientation:"left",fill:t.color},on:{onClick:function(e){t.updateRepetitions(t.repetitions-1)}}}),n("span",{staticClass:"containerRepetitions__text"},[t._v(t._s(t.repetitions)+"x")]),n("AppButtonArrow",{attrs:{orientation:"right",fill:t.color},on:{onClick:function(e){t.updateRepetitions(t.repetitions+1)}}})],1)},O=[],j={name:"AppTimerBlockRepetitions",data:function(){return{color:"grey"}},props:{repetitions:{type:Number,required:!0},blockIndex:{type:Number,required:!0}},components:{AppButtonArrow:_},methods:{updateRepetitions:function(t){t>0&&this.$store.commit("updateBlockRepetitions",{blockIndex:this.blockIndex,repetitions:t})}}},S=j,$=(n("824f"),Object(c["a"])(S,y,O,!1,null,"4b438da8",null));$.options.__file="AppTimerBlockRepetitions.vue";var R=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.block.timers,function(e,o){return[n("div",{key:o,staticClass:"containerTimer"},[n("AppButtonArrow",{attrs:{orientation:"left",fill:t.renderFill(),removeIcon:t.isTimerZero(e)},on:{onClick:function(n){t.decrementOrRemove(o,e)}}}),n("span",{staticClass:"containerTimer__time",style:t.renderColor()},[t._v("\n        "+t._s(t.stringifyTimer(e))+"\n      ")]),n("AppButtonArrow",{attrs:{orientation:"right",fill:t.renderFill()},on:{onClick:function(n){t.increment(o,e)}}})],1)]})],2)},N=[],q={name:"AppTimerBlockTimer",props:{blockIndex:{type:Number,required:!0},block:{type:Object,required:!0}},components:{AppButtonArrow:_},methods:{decrementOrRemove:function(t,e){if(0===e.m&&0===e.s)this.$store.commit("removeTimerFromBlock",{blockIndex:this.blockIndex,timerIndex:t});else{var n=Object(f["c"])(e);this.$store.commit("updateBlockTimer",{blockIndex:this.blockIndex,timerIndex:t,timerObject:n})}},increment:function(t,e){var n=Object(f["d"])(e);this.$store.commit("updateBlockTimer",{blockIndex:this.blockIndex,timerIndex:t,timerObject:n})},renderColor:function(){return"color: ".concat(Object(f["e"])(this.block.colorIndex))},renderFill:function(){return Object(f["e"])(this.block.colorIndex)},stringifyTimer:function(t){return Object(f["h"])(t)},isTimerZero:function(t){return 0===t.m&&0===t.s}}},P=q,M=(n("4a04"),Object(c["a"])(P,E,N,!1,null,"ef9fc7f0",null));M.options.__file="AppTimerBlockTimer.vue";var F=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:t.removeBlock}},[n("path",{staticClass:"svg__path",attrs:{fill:t.renderFill(),d:"M70.9,0C47.2,0,23.6,0,0,0c0,23.6,0,47.2,0,70.9C39.1,70.9,70.9,39.1,70.9,0z M50.5,27.8v6H11.5v-6H50.5z"}})])},L=[],W={name:"AppButtonRemoveBlock",props:{colorIndex:{type:Number,required:!0},blockIndex:{type:Number,required:!0}},methods:{removeBlock:function(){this.$store.commit("removeBlockByIndex",this.blockIndex)},renderFill:function(){return Object(f["e"])(this.colorIndex)}}},H=W,J=(n("e53b"),Object(c["a"])(H,z,L,!1,null,"1e8c3a7f",null));J.options.__file="AppButtonRemoveBlock.vue";var G=J.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:t.addBlock}},[n("path",{staticClass:"svg__path",attrs:{fill:t.renderFill(),d:"M0,70.9c23.6,0,47.2,0,70.9,0c0-23.6,0-47.2,0-70.9C31.7,0,0,31.7,0,70.9z M20.4,43.1v-6h16.5V20.3h6v16.8h16.5\n\t      v6H42.9v16.8h-6V43.1H20.4z"}})])},Y=[],Z={name:"AppButtonAddBlock",props:{colorIndex:{type:Number,required:!0},blockIndex:{type:Number,required:!0}},methods:{addBlock:function(){this.$store.commit("addNewBlock",this.blockIndex)},renderFill:function(){return Object(f["e"])(this.colorIndex)}}},D=Z,K=(n("865d"),Object(c["a"])(D,V,Y,!1,null,"cb1b3360",null));K.options.__file="AppButtonAddBlock.vue";var Q=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 198.4 198.4"},on:{click:t.onClick}},[n("g",[n("path",{staticClass:"svg__path svg__green",style:t.renderGreenPosition(),attrs:{d:"M23.4,99.2c0,41.9,34,75.9,75.9,75.9c0-25.3,0-50.6,0-75.9C73.9,99.2,48.6,99.2,23.4,99.2z"}}),n("path",{staticClass:"svg__path svg__red",style:t.renderRedPosition(),attrs:{d:"M99.2,23.4c-41.9,0-75.9,34-75.9,75.9c25.3,0,50.6,0,75.9,0C99.2,73.9,99.2,48.6,99.2,23.4z"}}),n("path",{staticClass:"svg__path svg__yellow",style:t.renderYellowPosition(),attrs:{d:"M99.2,175.1c41.9,0,75.9-34,75.9-75.9c-25.3,0-50.6,0-75.9,0C99.2,124.5,99.2,149.8,99.2,175.1z"}}),n("path",{staticClass:"svg__path svg__blue",style:t.renderBluePosition(),attrs:{d:"M99.2,23.4c0,25.3,0,50.6,0,75.9c25.3,0,50.6,0,75.9,0C175.1,57.3,141.1,23.4,99.2,23.4z"}})])])},X=[],tt={name:"AppButtonColorWheel",props:{colorIndex:{type:Number,default:0},blockIndex:{type:Number,required:!0}},methods:{onClick:function(){this.$store.commit("incrementBlockColor",this.blockIndex)},renderGreenPosition:function(){return 0===this.colorIndex?"transform: translate(-10px, 10px);":""},renderRedPosition:function(){return 1===this.colorIndex?"transform: translate(-10px, -10px);":""},renderBluePosition:function(){return 2===this.colorIndex?"transform: translate(10px, -10px);":""},renderYellowPosition:function(){return 3===this.colorIndex?"transform: translate(10px, 10px);":""}}},et=tt,nt=(n("ee21"),Object(c["a"])(et,U,X,!1,null,"20454382",null));nt.options.__file="AppButtonColorWheel.vue";var ot=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerAddRemoveTimer"},[n("AppButtonArrow",{staticClass:"containerAddRemoveTimer__button",attrs:{orientation:"up",fill:"grey"},on:{onClick:t.removeLastTimerFromBlock}}),n("AppButtonArrow",{staticClass:"containerAddRemoveTimer__button",attrs:{orientation:"down",fill:"grey"},on:{onClick:t.addTimerToBlock}})],1)},it=[],ct={name:"AppTimerBlockAddRemoveTimer",components:{AppButtonArrow:_},props:{blockIndex:{type:Number,required:!0}},methods:{removeLastTimerFromBlock:function(){this.$store.commit("removeLastTimerFromBlock",this.blockIndex)},addTimerToBlock:function(){this.$store.commit("addTimerToBlock",this.blockIndex)}}},st=ct,lt=(n("dfd0"),Object(c["a"])(st,rt,it,!1,null,"4413ce1f",null));lt.options.__file="AppTimerBlockAddRemoveTimer.vue";var at=lt.exports,ut={name:"AppTimerBlock",components:{AppTimerBlockRepetitions:R,AppTimerBlockTimer:F,AppButtonRemoveBlock:G,AppButtonAddBlock:Q,AppButtonColorWheel:ot,AppTimerBlockAddRemoveTimer:at},props:{blockIndex:{type:Number,required:!0},block:{type:Object,required:!0}},methods:{renderBorderColor:function(){return"border-color: ".concat(Object(f["e"])(this.block.colorIndex))},renderColor:function(){return"color: ".concat(Object(f["e"])(this.block.colorIndex))},addTimerToBlock:function(){this.$store.commit("addTimerToBlock",this.blockIndex)}}},pt=ut,dt=(n("b659"),Object(c["a"])(pt,C,I,!1,null,"a2b47910",null));dt.options.__file="AppTimerBlock.vue";var ft=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",style:t.renderWidth(),on:{click:t.onClick}},[t._v("\n  "+t._s(t.title)+"\n")])},vt=[],bt={name:"AppButtonMain",props:{title:{type:String,required:!0},width:{type:String,default:"100%"}},methods:{onClick:function(){this.$emit("onClick")},renderWidth:function(){return"width: ".concat(this.width)}}},ht=bt,kt=(n("a3ae"),Object(c["a"])(ht,mt,vt,!1,null,"11e01780",null));kt.options.__file="AppButtonMain.vue";var Bt=kt.exports,gt={name:"Setup",components:{AppSets:w,AppTimerBlock:ft,AppButtonMain:Bt},computed:{totalTime:function(){return this.$store.getters.totalTime},timerBlocks:function(){return this.$store.getters.timerBlocks},sets:function(){return this.$store.getters.sets}},methods:{runTimer:function(){this.$router.push({path:"/run"})},stringifyTimer:function(t){return Object(f["h"])(t)}}},_t=gt,xt=(n("1d82"),Object(c["a"])(_t,p,d,!1,null,"ce7084dc",null));xt.options.__file="Setup.vue";var At=xt.exports;o["a"].use(u["a"]);var Tt=new u["a"]({routes:[{path:"/",name:"setup",component:At},{path:"/run",name:"run",component:function(){return n.e("run").then(n.bind(null,"6494"))}}]}),wt=n("2f62");o["a"].use(wt["a"]);var Ct={sets:1,timerBlocks:[{repetitions:1,colorIndex:0,timers:[{m:0,s:5}]},{repetitions:2,colorIndex:1,timers:[{m:0,s:2},{m:0,s:3}]}]},It={totalTime:function(t){return Object(f["f"])(t)},timerBlocks:function(t){return Object(f["b"])(t.timerBlocks)},totalTimerCount:function(t){return Object(f["g"])(t)},sets:function(t){return t.sets}},yt={addNewBlock:function(t,e){var n=Object(f["b"])(t.timerBlocks),r=n[e].colorIndex+1;r>=f["a"]&&(r=0),n.splice(e+1,0,{repetitions:1,colorIndex:r,timers:[{m:0,s:5}]}),o["a"].set(t,"timerBlocks",n)},removeBlockByIndex:function(t,e){var n=Object(f["b"])(t.timerBlocks);n.length>1&&(n.splice(e,1),o["a"].set(t,"timerBlocks",n))},addTimerToBlock:function(t,e){var n=Object(f["b"])(t.timerBlocks);n[e].timers.push({m:0,s:5}),o["a"].set(t,"timerBlocks",n)},removeTimerFromBlock:function(t,e){var n=e.blockIndex,r=e.timerIndex,i=Object(f["b"])(t.timerBlocks);i[n].timers.length>1?i[n].timers.splice(r,1):i.length>1&&i.splice(n,1),o["a"].set(t,"timerBlocks",i)},removeLastTimerFromBlock:function(t,e){var n=Object(f["b"])(t.timerBlocks);n[e].timers.length>1?n[e].timers.pop():n.length>1&&n.splice(e,1),o["a"].set(t,"timerBlocks",n)},updateBlockRepetitions:function(t,e){var n=e.blockIndex,r=e.repetitions,i=Object(f["b"])(t.timerBlocks);i[n].repetitions=r,o["a"].set(t,"timerBlocks",i)},updateBlockTimer:function(t,e){var n=e.blockIndex,r=e.timerIndex,i=e.timerObject,c=Object(f["b"])(t.timerBlocks);c[n].timers[r]=i,o["a"].set(t,"timerBlocks",c)},incrementBlockColor:function(t,e){var n=Object(f["b"])(t.timerBlocks),r=n[e].colorIndex+1;r>=f["a"]&&(r=0),n[e].colorIndex=r,o["a"].set(t,"timerBlocks",n)},updateSets:function(t,e){t.sets=e}},Ot={},jt=new wt["a"].Store({state:Ct,getters:It,mutations:yt,actions:Ot}),St=jt,$t=n("9483");Object($t["a"])("".concat("https://abbasnake.github.io/CustomIntervalTimer/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({router:Tt,store:St,render:function(t){return t(a)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},7640:function(t,e,n){},7801:function(t,e,n){},"824f":function(t,e,n){"use strict";var o=n("4513"),r=n.n(o);r.a},"865d":function(t,e,n){"use strict";var o=n("27ee"),r=n.n(o);r.a},a3ae:function(t,e,n){"use strict";var o=n("3038"),r=n.n(o);r.a},b04b:function(t,e,n){"use strict";var o=n("e29a"),r=n.n(o);r.a},b659:function(t,e,n){"use strict";var o=n("2d38"),r=n.n(o);r.a},c91c:function(t,e,n){},dfd0:function(t,e,n){"use strict";var o=n("7640"),r=n.n(o);r.a},e29a:function(t,e,n){},e53b:function(t,e,n){"use strict";var o=n("2fc1"),r=n.n(o);r.a},ee21:function(t,e,n){"use strict";var o=n("11ae"),r=n.n(o);r.a}});
//# sourceMappingURL=app.68eb6f93.js.map