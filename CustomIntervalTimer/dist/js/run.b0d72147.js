(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["run"],{"0640":function(t,e,r){},"0a0d":function(t,e,r){t.exports=r("e829")},"2f37":function(t,e,r){var n=r("63b6");n(n.S,"Date",{now:function(){return(new Date).getTime()}})},3324:function(t,e,r){},"4aa6":function(t,e,r){},"5ea4":function(t,e,r){"use strict";var n=r("3324"),i=r.n(n);i.a},"624a":function(t,e,r){},6494:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"RunScreen",style:{backgroundColor:t.currentBlockColor}},[r("div",{staticClass:"RunScreen__loopInfo"},[t._v("LOOP "+t._s(t.currentSetNumber)+" OF "+t._s(t.totalSetCount))]),r("div",{staticClass:"RunScreen__timer"},[t._l(t.stringifyTimer(t.currentTimer),function(e,n){return[r("span",{key:n,staticClass:"RunScreen__timer__char"},[t._v("\n        "+t._s(e)+"\n      ")])]})],2),r("AppBlockProgressBar",{attrs:{currentCircleIndex:t.currentBlockProgress,totalCircleCount:t.returnCurrentBlockProgressLength()}}),r("AppButtonReset",{directives:[{name:"show",rawName:"v-show",value:!t.timerIsRunning,expression:"!timerIsRunning"}],staticClass:"RunScreen__reset",on:{onClick:t.goToSetupScreen}}),r("AppButtonPause",{directives:[{name:"show",rawName:"v-show",value:t.timerIsRunning,expression:"timerIsRunning"}],staticClass:"RunScreen__playPause",on:{onClick:t.stopLoop}}),r("AppButtonPlay",{directives:[{name:"show",rawName:"v-show",value:!t.timerIsRunning,expression:"!timerIsRunning"}],staticClass:"RunScreen__playPause",on:{onClick:t.runLoop}})],1)},i=[],s=r("0a0d"),c=r.n(s),o=(r("cadf"),r("551c"),r("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ProgressBar"},[t.totalCircleCount<=10?[t._l(t.totalCircleCount,function(e){return[r("span",{key:e,staticClass:"ProgressBar__circle",style:t.renderCircleStyles(e)})]})]:r("div",{staticClass:"ProgressBar__text"},[t._v("\n    TIMER "+t._s(t.currentCircleIndex)+" OF "+t._s(t.totalCircleCount)+"\n  ")])],2)}),u=[],a=r("cebc"),l=(r("c5f6"),{name:"AppBlockProgressBar",props:{currentCircleIndex:{type:Number,required:!0},totalCircleCount:{type:Number,required:!0}},methods:{renderCircleStyles:function(t){var e={width:"".concat(52-3*this.totalCircleCount,"px"),height:"".concat(52-3*this.totalCircleCount,"px")},r=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(a["a"])({"background-color":t,opacity:r},e)};return t<this.currentCircleIndex?r("black"):t===this.currentCircleIndex?r("black",.4):e}}}),h=l,m=(r("a466"),r("2877")),p=Object(m["a"])(h,o,u,!1,null,"33d04fd2",null);p.options.__file="AppBlockProgressBar.vue";var d=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"Svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:t.pauseTimer}},[r("path",{attrs:{d:"M0,70.9c23.6,0,47.2,0,70.9,0c0-23.6,0-47.2,0-70.9C31.7,0,0,31.7,0,70.9z M40.6,58.3H30V24.5h10.5V58.3z\n    M58.1,58.3H47.6V24.5h10.5V58.3z"}})])},C=[],B={name:"AppButtonPause",methods:{pauseTimer:function(){this.$emit("onClick")}}},g=B,v=(r("937c"),Object(m["a"])(g,f,C,!1,null,"46e88226",null));v.options.__file="AppButtonPause.vue";var k=v.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"Svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:t.playTimer}},[r("path",{attrs:{d:"M0,70.9c23.6,0,47.2,0,70.9,0c0-23.6,0-47.2,0-70.9C31.7,0,0,31.7,0,70.9z M30,62.5V23.7l32.6,18.5L30,62.5z"}})])},T=[],_={name:"AppButtonPlay",methods:{playTimer:function(){this.$emit("onClick")}}},S=_,I=(r("6920"),Object(m["a"])(S,x,T,!1,null,"0d331ace",null));I.options.__file="AppButtonPlay.vue";var w=I.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"Svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 70.9 70.9"},on:{click:t.resetTimer}},[r("path",{attrs:{d:"M0,0c0,23.6,0,47.2,0,70.9c23.6,0,47.2,0,70.9,0C70.9,31.7,39.1,0,0,0z M21.4,36.1c-4.5,4.3-4.3,11,0.4,15.1\n    c3.9,3.4,11.6,3.7,15.7-3.5c2.4,1.2,4.8,2.3,7.2,3.5c-4,8.8-14.7,13.1-24,8.8c-9.7-4.4-13.6-16-8.6-25.1c2.5-4.6,6.2-7.7,11.3-9\n    c6.7-1.7,12.7-0.1,18,4.8c1.4-1.5,2.8-2.9,4.2-4.3c0.7,5.6,1.5,11.2,2.2,17c-5.7-0.9-11.2-1.8-16.9-2.7c1.6-1.5,3-2.8,4.4-4.2\n    C32.3,32.9,25.7,31.9,21.4,36.1z"}})])},b=[],y={name:"AppButtonReset",methods:{resetTimer:function(){this.$emit("onClick")}}},P=y,A=(r("c2e0"),Object(m["a"])(P,R,b,!1,null,"1d1d4c60",null));A.options.__file="AppButtonReset.vue";var q=A.exports,N=r("2fa3"),O=r("bd94"),L=r("c074"),j=r("02ec"),M={name:"Run",data:function(){return{totalSequence:null,currentBlockIndex:0,currentTimerIndex:0,currentBlockCurrentRepetition:1,currentBlockProgress:1,timerIsRunning:!1,currentTimer:null,currentSetNumber:1,timeout:null}},components:{AppBlockProgressBar:d,AppButtonPause:k,AppButtonPlay:w,AppButtonReset:q},computed:{currentBlockColor:function(){return Object(N["f"])(this.totalSequence[this.currentBlockIndex].colorIndex)},totalSetCount:function(){return this.$store.getters.sets}},created:function(){this.setupTimer()},destroyed:function(){this.timerIsRunning&&this.stopLoop()},methods:{runLoop:function(){var t=this;L["a"].unmuteAll(),O["a"].enable(),this.timerIsRunning=!0;var e=1e3,r=c()()+e,n=function n(){var i=c()()-r;t.timerIsRunning&&(r+=e,t.timeout=j["a"].setTimeout(n,Math.max(0,e-i)),t.decrementCurrentTimer())};this.timeout=j["a"].setTimeout(n,e)},stopLoop:function(){O["a"].disable(),j["a"].clearTimeout(this.timeout),this.timerIsRunning=!1},goToSetupScreen:function(){this.$router.go(-1)},setupTimer:function(){this.currentBlockIndex=0,this.currentTimerIndex=0,this.totalSequence=Object(N["e"])(this.$store.getters.timerBlocks),this.currentTimer=Object(N["b"])(this.totalSequence[this.currentBlockIndex].timers[this.currentTimerIndex]),this.currentBlockCurrentRepetition=1,this.currentBlockProgress=1,this.currentSetNumber=1},decrementCurrentTimer:function(){this.updateCurrentTimer(Object(N["c"])(this.currentTimer))},updateCurrentTimer:function(t){Object(N["j"])(t)?this.switchToNextTimer():(this.timerShouldBeep(t)&&L["a"].beep.play(),this.currentTimer=t)},switchToNextTimer:function(){this.currentTimerIndex++,this.currentBlockProgress++,this.currentTimer=this.getCurrentTimerFromSequnece(),void 0===this.currentTimer?this.areMoreRepetitionsLeft()?this.startNextCurrentBlockRepetition():this.isLastTimerBlock()?this.isLastSet()?this.finishAndResetSequence():this.startNextSet():this.moveToNextBlock():L["a"].whistle.play()},startNextSet:function(){L["a"].endBlockWhistle.play(),this.currentSetNumber++,this.currentBlockIndex=0,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockCurrentRepetition=1,this.currentBlockProgress=1},timerShouldBeep:function(t){return 0===t.m&&t.s<4},areMoreRepetitionsLeft:function(){return this.currentBlockCurrentRepetition<this.totalSequence[this.currentBlockIndex].repetitions},isLastSet:function(){return this.currentSetNumber===this.totalSetCount},startNextCurrentBlockRepetition:function(){L["a"].whistle.play(),this.currentBlockCurrentRepetition++,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece()},moveToNextBlock:function(){L["a"].endBlockWhistle.play(),this.currentBlockIndex++,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockCurrentRepetition=1,this.currentBlockProgress=1},getCurrentTimerFromSequnece:function(){return this.totalSequence[this.currentBlockIndex].timers[this.currentTimerIndex]},isLastTimerBlock:function(){return this.currentBlockIndex>=this.totalSequence.length-1},finishAndResetSequence:function(){L["a"].endWhistle.play(),O["a"].disable(),this.setupTimer(),this.timerIsRunning=!1},returnCurrentBlockProgressLength:function(){var t=this.totalSequence[this.currentBlockIndex].timers.length,e=this.totalSequence[this.currentBlockIndex].repetitions;return t*e},stringifyTimer:function(t){return Object(N["i"])(t)}}},$=M,z=(r("5ea4"),Object(m["a"])($,n,i,!1,null,"7e74cd24",null));z.options.__file="Run.vue";e["default"]=z.exports},6920:function(t,e,r){"use strict";var n=r("0640"),i=r.n(n);i.a},"937c":function(t,e,r){"use strict";var n=r("f53d"),i=r.n(n);i.a},a466:function(t,e,r){"use strict";var n=r("624a"),i=r.n(n);i.a},c2e0:function(t,e,r){"use strict";var n=r("4aa6"),i=r.n(n);i.a},e829:function(t,e,r){r("2f37"),t.exports=r("584a").Date.now},f53d:function(t,e,r){}}]);
//# sourceMappingURL=run.b0d72147.js.map