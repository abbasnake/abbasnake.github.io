(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["container"],{"11e9":function(t,e,n){var i=n("52a7"),r=n("4630"),a=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=o(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return r(!i.f.call(t,e),t[e])}},"148c":function(t,e,n){},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"456d":function(t,e,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(t){return r(i(t))}})},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4cf2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ContainerView"},[n("div",{staticClass:"ContainerView__data"},[t._l(t.container,function(e){return[n("DataField",{key:e.index,attrs:{data:e},on:{updateField:function(n){return t.updateField(e.index,n)}}})]})],2),n("div",{staticClass:"ContainerView__actions"},[n("Button",{attrs:{red:""},on:{onClick:t.cancel}},[t._v("ATCELT")]),n("Button",{attrs:{disabled:!t.isChanges},on:{onClick:t.updateContainer}},[t._v("SAGLABĀT")])],1)])},r=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("85f2")),o=n.n(a);function c(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("2a7d"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataField"},[n("div",{staticClass:"DataField__field"},[t._v(t._s(t.data.name))]),t.isEditMode?n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}):n("div",{staticClass:"DataField__field"},[t._v(t._s(t.value))]),n("button",{on:{click:t.toggleEditMode}},[t._v(t._s(t.buttonName))])])},f=[],l={name:"DataField",props:{data:{type:Object,required:!0}},data:function(){return{isEditMode:!1,value:this.data.value}},computed:{buttonName:function(){return this.isEditMode?"save":"edit"}},methods:{toggleEditMode:function(){this.isEditMode&&this.value!==this.data.value&&this.$emit("updateField",this.value),this.isEditMode=!this.isEditMode}}},d=l,p=(n("d629"),n("2877")),v=Object(p["a"])(d,u,f,!1,null,"6f3eefe6",null),b=v.exports;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var m={name:"ContainerView",components:{Button:s["a"],DataField:b},data:function(){return{container:this.$store.getters.container}},computed:{isChanges:function(){return JSON.stringify(this.$store.getters.container)!==JSON.stringify(this.container)}},methods:{cancel:function(){this.$router.go(-1)},updateField:function(t,e){this.container=this.container.map(function(n){return n.index===t?g({},n,{value:e}):g({},n)})},updateContainer:function(){this.$store.dispatch("updateContainer",this.container),this.$router.push("project")}}},y=m,O=(n("c7bf"),Object(p["a"])(y,i,r,!1,null,"9bb016de",null));e["default"]=O.exports},"7adc":function(t,e,n){},"85f2":function(t,e,n){t.exports=n("454f")},"8e6e":function(t,e,n){var i=n("5ca1"),r=n("990b"),a=n("6821"),o=n("11e9"),c=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),s=o.f,u=r(i),f={},l=0;while(u.length>l)n=s(i,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},9093:function(t,e,n){var i=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},"990b":function(t,e,n){var i=n("9093"),r=n("2621"),a=n("cb7c"),o=n("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=i.f(a(t)),n=r.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),a=n("2aba"),o=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=r(p),b=0;b<v.length;b++){var h,g=v[b],m=p[g],y=o[g],O=y&&y.prototype;if(O&&(O[f]||c(O,f,d),O[l]||c(O,l,g),s[g]=d,m))for(h in i)O[h]||a(O,h,i[h],!0)}},c7bf:function(t,e,n){"use strict";var i=n("7adc"),r=n.n(i);r.a},d629:function(t,e,n){"use strict";var i=n("148c"),r=n.n(i);r.a},f1ae:function(t,e,n){"use strict";var i=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}}}]);
//# sourceMappingURL=container.bb148ab5.js.map