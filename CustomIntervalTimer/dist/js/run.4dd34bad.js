(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["run"],{"05ed":function(e,t,r){},"09b5":function(e,t,r){"use strict";var n=r("b850"),i=r.n(n);i.a},"0a0d":function(e,t,r){e.exports=r("e829")},"12c2":function(e,t,r){e.exports=r.p+"media/beep.9a1c4d24.mp3"},2824:function(e,t,r){},"2f37":function(e,t,r){var n=r("63b6");n(n.S,"Date",{now:function(){return(new Date).getTime()}})},4104:function(e,t,r){e.exports=r.p+"media/whistle.754038c1.mp3"},6494:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",style:{backgroundColor:e.currentBlockColor}},[r("div",[e._v("SETS: "+e._s(e.currentSetNumber)+"/"+e._s(e.totalSetCount))]),r("div",{staticClass:"container__timer"},[e._l(e.stringifyTimer(e.currentTimer),function(t,n){return[r("span",{key:n,staticClass:"container__timer__char"},[e._v("\n        "+e._s(t)+"\n      ")])]})],2),r("div",[e._v(e._s(e.currentBlockRepetitionsLeft)+"x")]),r("AppBlockProgressBar",{attrs:{currentTimerIndex:e.currentTimerIndex+1,totalTimerCount:e.totalSequence[e.currentBlockIndex].timers.length}}),r("AppButtonReset",{directives:[{name:"show",rawName:"v-show",value:!e.timerIsRunning,expression:"!timerIsRunning"}],staticClass:"container__reset",on:{onClick:e.goToSetupScreen}}),r("AppButtonPause",{directives:[{name:"show",rawName:"v-show",value:e.timerIsRunning,expression:"timerIsRunning"}],staticClass:"container__playPause",on:{onClick:e.stopLoop}}),r("AppButtonPlay",{directives:[{name:"show",rawName:"v-show",value:!e.timerIsRunning,expression:"!timerIsRunning"}],staticClass:"container__playPause",on:{onClick:e.runLoop}})],1)},i=[],o=r("0a0d"),s=r.n(o),u=r("7c5c");const c=e=>{return void 0!==e.method&&"call"===e.method},a=e=>{return null===e.error&&"number"===typeof e.id},l=e=>{const t=new Map,r=new Map,n=new Map,i=new Worker(e);i.addEventListener("message",({data:e})=>{if(c(e)){const{params:{timerId:i,timerType:o}}=e;if("interval"===o){const e=t.get(i);if("number"===typeof e){const t=n.get(e);if(void 0===t||t.timerId!==i||t.timerType!==o)throw new Error("The timer is in an undefined state.")}else{if("undefined"===typeof e)throw new Error("The timer is in an undefined state.");e()}}else if("timeout"===o){const e=r.get(i);if("number"===typeof e){const t=n.get(e);if(void 0===t||t.timerId!==i||t.timerType!==o)throw new Error("The timer is in an undefined state.")}else{if("undefined"===typeof e)throw new Error("The timer is in an undefined state.");e(),r.delete(i)}}}else{if(!a(e)){const{error:{message:t}}=e;throw new Error(t)}{const{id:i}=e,o=n.get(i);if(void 0===o)throw new Error("The timer is in an undefined state.");{const{timerId:e,timerType:s}=o;n.delete(i),"interval"===s?t.delete(e):r.delete(e)}}}});const o=e=>{const r=Object(u["generateUniqueNumber"])(n);n.set(r,{timerId:e,timerType:"interval"}),t.set(e,r),i.postMessage({id:r,method:"clear",params:{timerId:e,timerType:"interval"}})},s=e=>{const t=Object(u["generateUniqueNumber"])(n);n.set(t,{timerId:e,timerType:"timeout"}),r.set(e,t),i.postMessage({id:t,method:"clear",params:{timerId:e,timerType:"timeout"}})},l=(e,r)=>{const n=Object(u["generateUniqueNumber"])(t);return t.set(n,()=>{e(),"function"===typeof t.get(n)&&i.postMessage({id:null,method:"set",params:{delay:r,now:performance.now(),timerId:n,timerType:"interval"}})}),i.postMessage({id:null,method:"set",params:{delay:r,now:performance.now(),timerId:n,timerType:"interval"}}),n},m=(e,t)=>{const n=Object(u["generateUniqueNumber"])(r);return r.set(n,e),i.postMessage({id:null,method:"set",params:{delay:t,now:performance.now(),timerId:n,timerType:"timeout"}}),n};return{clearInterval:o,clearTimeout:s,setInterval:l,setTimeout:m}},m='!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=new Map,o=new Map,i=(e,t)=>{let r,n;if("performance"in self){const o=performance.now();r=o,n=e-Math.max(0,o-t)}else r=Date.now(),n=e;return{expected:r+n,remainingDelay:n}},s=(e,t,r,n)=>{const o="performance"in self?performance.now():Date.now();o>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:n}}):e.set(t,setTimeout(s,r-o,e,t,r,n))};addEventListener("message",e=>{let t=e.data;try{if("clear"===t.method){const e=t.id,r=t.params,i=r.timerId,s=r.timerType;if("interval"===s)(e=>{const t=n.get(e);if(void 0===t)throw new Error(\'There is no interval scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),n.delete(e)})(i),postMessage({error:null,id:e});else{if("timeout"!==s)throw new Error(\'The given type "\'.concat(s,\'" is not supported\'));(e=>{const t=o.get(e);if(void 0===t)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),o.delete(e)})(i),postMessage({error:null,id:e})}}else{if("set"!==t.method)throw new Error(\'The given method "\'.concat(t.method,\'" is not supported\'));{const e=t.params,r=e.delay,a=e.now,l=e.timerId,c=e.timerType;if("interval"===c)((e,t,r)=>{const o=i(e,r),a=o.expected,l=o.remainingDelay;n.set(t,setTimeout(s,l,n,t,a,"interval"))})(r,l,a);else{if("timeout"!==c)throw new Error(\'The given type "\'.concat(c,\'" is not supported\'));((e,t,r)=>{const n=i(e,r),a=n.expected,l=n.remainingDelay;o.set(t,setTimeout(s,l,o,t,a,"timeout"))})(r,l,a)}}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}]);',d=new Blob([m],{type:"application/javascript; charset=utf-8"}),p=URL.createObjectURL(d),h=l(p),f=(h.clearInterval,h.clearTimeout),v=(h.setInterval,h.setTimeout);URL.revokeObjectURL(p);var T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ProgressBar"},[e._l(e.totalTimerCount,function(t){return[r("span",{key:t,staticClass:"ProgressBar__circle",style:e.renderBackground(t)})]})],2)},g=[],b=(r("c5f6"),{name:"AppBlockProgressBar",props:{currentTimerIndex:{type:Number,required:!0},totalTimerCount:{type:Number,required:!0}},methods:{renderBackground:function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{"background-color":e,opacity:t}};return e<this.currentTimerIndex?t("black"):e===this.currentTimerIndex?t("black",.4):{}}}}),w=b,y=(r("b15d"),r("2877")),x=Object(y["a"])(w,T,g,!1,null,"d2899b50",null);x.options.__file="AppBlockProgressBar.vue";var B=x.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:e.pauseTimer}},[r("path",{attrs:{d:"M0,70.9c23.6,0,47.2,0,70.9,0c0-23.6,0-47.2,0-70.9C31.7,0,0,31.7,0,70.9z M40.6,58.3H30V24.5h10.5V58.3z\n    M58.1,58.3H47.6V24.5h10.5V58.3z"}})])},k=[],_={name:"AppButtonPause",methods:{pauseTimer:function(){this.$emit("onClick")}}},S=_,C=(r("c1fb"),Object(y["a"])(S,I,k,!1,null,"e1c7ba26",null));C.options.__file="AppButtonPause.vue";var M=C.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:e.playTimer}},[r("path",{attrs:{d:"M0,70.9c23.6,0,47.2,0,70.9,0c0-23.6,0-47.2,0-70.9C31.7,0,0,31.7,0,70.9z M30,62.5V23.7l32.6,18.5L30,62.5z"}})])},j=[],O={name:"AppButtonPlay",methods:{playTimer:function(){this.$emit("onClick")}}},E=O,N=(r("f41d"),Object(y["a"])(E,R,j,!1,null,"0e1c9ad9",null));N.options.__file="AppButtonPlay.vue";var q=N.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"button",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:e.resetTimer}},[r("path",{attrs:{d:"M0,0c0,23.6,0,47.2,0,70.9c23.6,0,47.2,0,70.9,0C70.9,31.7,39.1,0,0,0z M21.4,36.1c-4.5,4.3-4.3,11,0.4,15.1\n    c3.9,3.4,11.6,3.7,15.7-3.5c2.4,1.2,4.8,2.3,7.2,3.5c-4,8.8-14.7,13.1-24,8.8c-9.7-4.4-13.6-16-8.6-25.1c2.5-4.6,6.2-7.7,11.3-9\n    c6.7-1.7,12.7-0.1,18,4.8c1.4-1.5,2.8-2.9,4.2-4.3c0.7,5.6,1.5,11.2,2.2,17c-5.7-0.9-11.2-1.8-16.9-2.7c1.6-1.5,3-2.8,4.4-4.2\n    C32.3,32.9,25.7,31.9,21.4,36.1z"}})])},L=[],P={name:"AppButtonReset",methods:{resetTimer:function(){this.$emit("onClick")}}},$=P,z=(r("cb3c"),Object(y["a"])($,A,L,!1,null,"23ae3bf4",null));z.options.__file="AppButtonReset.vue";var U=z.exports,W=r("2fa3"),D={name:"Run",data:function(){return{audioWhistle:new Audio(r("4104")),audioEndWhistle:new Audio(r("b7bb")),audioBeep:new Audio(r("12c2")),totalSequence:null,currentBlockIndex:0,currentTimerIndex:0,currentBlockRepetitionsLeft:null,timerIsRunning:!1,currentTimer:null,currentSetNumber:1,timeout:null}},components:{AppBlockProgressBar:B,AppButtonPause:M,AppButtonPlay:q,AppButtonReset:U},computed:{currentBlockColor:function(){return Object(W["h"])(this.totalSequence[this.currentBlockIndex].colorIndex)},totalSetCount:function(){return this.$store.getters.sets}},created:function(){this.setupTimer()},mounted:function(){this.runLoop()},methods:{runLoop:function(){var e=this;Object(W["e"])(),this.timerIsRunning=!0;var t=1e3,r=s()()+t,n=function n(){var i=s()()-r;e.timerIsRunning&&(r+=t,e.timeout=v(n,Math.max(0,t-i)),e.decrementCurrentTimer())};this.timeout=v(n,t)},stopLoop:function(){Object(W["d"])(),f(this.timeout),this.timerIsRunning=!1},goToSetupScreen:function(){this.$router.go(-1)},setupTimer:function(){this.currentBlockIndex=0,this.currentTimerIndex=0,this.totalSequence=Object(W["g"])(this.$store.getters.timerBlocks),this.currentTimer=Object(W["b"])(this.totalSequence[this.currentBlockIndex].timers[this.currentTimerIndex]),this.currentBlockRepetitionsLeft=this.totalSequence[this.currentBlockIndex].repetitions,this.currentSetNumber=1},decrementCurrentTimer:function(){this.updateCurrentTimer(Object(W["c"])(this.currentTimer))},updateCurrentTimer:function(e){Object(W["l"])(e)?this.switchToNextTimer():(this.timerShouldBeep(e)&&this.audioBeep.play(),this.currentTimer=e)},switchToNextTimer:function(){this.currentTimerIndex++,this.currentTimer=this.getCurrentTimerFromSequnece(),void 0===this.currentTimer?this.areMoreRepetitionsLeft()?this.startNextCurrentBlockRepetition():this.isLastTimerBlock()?this.isLastSet()?this.finishAndResetSequence():this.startNextSet():this.moveToNextBlock():this.audioWhistle.play()},startNextSet:function(){this.audioWhistle.play(),this.currentSetNumber++,this.currentBlockIndex=0,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockRepetitionsLeft=this.totalSequence[this.currentBlockIndex].repetitions},timerShouldBeep:function(e){return 0===e.m&&e.s<4},areMoreRepetitionsLeft:function(){return this.currentBlockRepetitionsLeft>1},isLastSet:function(){return this.currentSetNumber===this.totalSetCount},startNextCurrentBlockRepetition:function(){this.audioWhistle.play(),this.currentBlockRepetitionsLeft--,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece()},moveToNextBlock:function(){this.audioWhistle.play(),this.currentBlockIndex++,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockRepetitionsLeft=this.totalSequence[this.currentBlockIndex].repetitions},getCurrentTimerFromSequnece:function(){return this.totalSequence[this.currentBlockIndex].timers[this.currentTimerIndex]},isLastTimerBlock:function(){return this.currentBlockIndex>=this.totalSequence.length-1},finishAndResetSequence:function(){this.audioEndWhistle.play(),Object(W["d"])(),this.setupTimer(),this.timerIsRunning=!1},updateTimer:function(e){this.timer=Object(W["b"])(e)},stringifyTimer:function(e){return Object(W["k"])(e)}}},F=D,V=(r("09b5"),Object(y["a"])(F,n,i,!1,null,"5af4445c",null));V.options.__file="Run.vue";t["default"]=V.exports},"7c5c":function(e,t,r){(function(e,r){r(t)})(0,function(e){"use strict";var t=new WeakMap,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=function(e,r){return t.set(e,r),r},i=function(e){var i=t.get(e),o=void 0===i?e.size:i>2147483648?0:i+1;if(!e.has(o))return n(e,o);if(e.size<1073741824){while(e.has(o))o=Math.floor(2147483648*Math.random());return n(e,o)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");while(e.has(o))o=Math.floor(Math.random()*r);return n(e,o)},o=function(e){var t=i(e);return e.add(t),t};e.addUniqueNumber=o,e.generateUniqueNumber=i,Object.defineProperty(e,"__esModule",{value:!0})})},b15d:function(e,t,r){"use strict";var n=r("05ed"),i=r.n(n);i.a},b29e:function(e,t,r){},b7bb:function(e,t,r){e.exports=r.p+"media/whistle3x.304b4261.mp3"},b850:function(e,t,r){},c1fb:function(e,t,r){"use strict";var n=r("b29e"),i=r.n(n);i.a},cb3c:function(e,t,r){"use strict";var n=r("d847"),i=r.n(n);i.a},d847:function(e,t,r){},e829:function(e,t,r){r("2f37"),e.exports=r("584a").Date.now},f41d:function(e,t,r){"use strict";var n=r("2824"),i=r.n(n);i.a}}]);
//# sourceMappingURL=run.4dd34bad.js.map