(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["run"],{4498:function(t,e,i){t.exports=i.p+"media/whistle.c279d845.wav"},6494:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:{backgroundColor:t.currentBlockColor}},[i("AppTitlePage",{attrs:{title:"RUN"}}),i("div",[t._v("TIMER IS RUNNING: "+t._s(t.timerIsRunning))]),i("div",[t._v("TOTAL TIME LEFT: "+t._s(t.stringifyTimer(t.totalTimeLeft)))]),i("div",[t._v("TOTAL TIMER COUNT: "+t._s(t.totalTimerCount))]),i("div",[t._v("Current block repetitions left: "+t._s(t.currentBlockRepetitionsLeft))]),i("div",[t._v("Block Num - "+t._s(t.currentBlockIndex+1)+"/"+t._s(t.totalSequence.length))]),i("div",[t._v("Current Timer Num - "+t._s(t.currentTimerIndex+1)+"/"+t._s(t.totalSequence[t.currentBlockIndex].timers.length))]),i("div",[t._v("Current Timer: "+t._s(t.stringifyTimer(t.currentTimer)))])],1)},n=[],s=(i("cadf"),i("551c"),i("097d"),i("5118")),o=i("2fa3"),c={name:"Setup",data:function(){return{audioWhistle:new Audio(i("4498")),audioBeep:new Audio(i("9ae0")),totalSequence:null,currentBlockIndex:0,currentTimerIndex:0,currentBlockRepetitionsLeft:null,timerIsRunning:!1,currentTimer:null,totalTimeLeft:null,looper:null,sets:null}},components:{AppTitlePage:function(){return i.e("chunk-78d68800").then(i.bind(null,"4242"))}},computed:{totalTimerCount:function(){return this.$store.getters.totalTimerCount},currentBlockColor:function(){return Object(o["e"])(this.totalSequence[this.currentBlockIndex].colorIndex)}},created:function(){this.totalTimeLeft=this.$store.getters.totalTime,this.totalSequence=this.$store.getters.timerBlocks,this.currentTimer=Object(o["b"])(this.totalSequence[0].timers[0]),this.currentBlockRepetitionsLeft=this.totalSequence[0].repetitions,this.sets=this.$store.getters.sets},mounted:function(){var t=this;this.looper=Object(o["h"])(function(){t.timerIsRunning=!0,t.decrementTotalTime(),t.decrementCurrentTimer()})},beforeDestroy:function(){Object(s["clearInterval"])(this.looper)},methods:{decrementTotalTime:function(){this.totalTimeLeft=Object(o["c"])(this.totalTimeLeft)},decrementCurrentTimer:function(){var t=Object(o["c"])(this.currentTimer);this.setCurrentTimer(t)},setCurrentTimer:function(t){Object(o["j"])(t)?(this.audioWhistle.play(),this.switchToNextTimer()):(0===t.m&&t.s<4&&this.audioBeep.play(),this.currentTimer=t)},switchToNextTimer:function(){this.currentTimerIndex++,this.currentTimer=this.getCurrentTimerFromSequnece(),void 0===this.currentTimer&&(this.areMoreRepetitionsLeft()?this.startNextCurrentBlockRepetition():this.isLastTimerBlock()?this.sets>1?this.startNextSet():this.finishSequence():this.moveToNextBlock())},startNextSet:function(){this.sets--,this.currentBlockIndex=0,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockRepetitionsLeft=this.totalSequence[this.currentBlockIndex].repetitions},areMoreRepetitionsLeft:function(){return this.currentBlockRepetitionsLeft>1},startNextCurrentBlockRepetition:function(){this.currentBlockRepetitionsLeft--,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece()},moveToNextBlock:function(){this.currentBlockIndex++,this.currentTimerIndex=0,this.currentTimer=this.getCurrentTimerFromSequnece(),this.currentBlockRepetitionsLeft=this.totalSequence[this.currentBlockIndex].repetitions},getCurrentTimerFromSequnece:function(){return this.totalSequence[this.currentBlockIndex].timers[this.currentTimerIndex]},isLastTimerBlock:function(){return this.currentBlockIndex>=this.totalSequence.length-1},finishSequence:function(){this.totalTimeLeft={m:0,s:0},this.currentTimer={m:0,s:0},this.currentTimerIndex=0,this.currentBlockIndex=0,this.stopInterval()},startInterval:function(){var t=this;this.timerIsRunning=!0,this.looper=Object(o["h"])(function(){var e=Object(o["c"])(t.timer);t.updateTimer(e),Object(o["j"])(e)&&t.stopInterval()})},stopInterval:function(){Object(s["clearInterval"])(this.looper),this.looper=null,this.timerIsRunning=!1},updateTimer:function(t){this.timer=Object(o["b"])(t)},stringifyTimer:function(t){return Object(o["i"])(t)},renderButtonTitle:function(){return this.timerIsRunning?"PAUSE":"START"},renderTimerTitle:function(t){return 0===t?"PREPERATION":t===this.totalSequence.length-1?"COOLDOWN":"CUSTOM TIMER ".concat(t)},startOrPauseTimer:function(){this.timerIsRunning?this.stopInterval():this.startInterval()},restartTimer:function(){this.timerIsRunning&&this.stopInterval(),this.updateTimer(this.initialTotalTime),this.startInterval()}}},u=c,l=(i("fe95"),i("2877")),h=Object(l["a"])(u,r,n,!1,null,"95127112",null);h.options.__file="Run.vue";e["default"]=h.exports},"9ae0":function(t,e,i){t.exports=i.p+"media/beep.219f187e.wav"},a8c6:function(t,e,i){},fe95:function(t,e,i){"use strict";var r=i("a8c6"),n=i.n(r);n.a}}]);
//# sourceMappingURL=run.12241d0c.js.map