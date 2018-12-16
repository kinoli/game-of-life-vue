(function(t){function e(e){for(var i,o,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0df0":function(t,e,n){"use strict";var i=n("a569"),r=n.n(i);r.a},4429:function(t,e,n){"use strict";var i=n("92f4"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"mt-4"},[t._v("The Game of Life - Built in Vue.js")]),t._m(0),n("div",{staticClass:"life-game"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Board Size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sizeInput,expression:"sizeInput"}],staticClass:"form-control d-inline-block mx-3",attrs:{type:"number"},domProps:{value:t.sizeInput},on:{input:function(e){e.target.composing||(t.sizeInput=e.target.value)}}}),n("small",{staticClass:"form-text d-inline-block text-muted"},[t._v("Current Size: "+t._s(this.boardSize))])]),n("div",{staticClass:"form-group"},[n("label",[t._v("Interval")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.intervalInput,expression:"intervalInput"}],staticClass:"form-control d-inline-block mx-3",attrs:{type:"number"},domProps:{value:t.intervalInput},on:{input:function(e){e.target.composing||(t.intervalInput=e.target.value)}}}),n("small",{staticClass:"form-text d-inline-block text-muted"},[t._v("In milliseconds")])]),n("button",{staticClass:"btn-secondary",on:{click:t.onResetBoard}},[t._v("Reset Board")]),n("div",{staticClass:"board-holder my-4"},[n("board",{ref:"board",style:t.getGameSizeStyle(),attrs:{size:t.boardSize,blockSize:t.blockSize,interval:t.interval}})],1)])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mb-4"},[t._v("The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank"}},[t._v("Rules of the game")]),t._v(".")])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},t._l(t.grid,function(e,i){return n("cell",{key:i,style:t.getCellStyle(e),attrs:{alive:e.alive}})}),1)},s=[],l=(n("6762"),n("2fdb"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cell"},[n("div",{class:{active:t.alive}})])}),u=[],c={name:"cell",props:{alive:{type:Boolean,default:!0}}},d=c,f=(n("0df0"),n("2877")),v=Object(f["a"])(d,l,u,!1,null,"3b40938e",null);v.options.__file="Cell.vue";var p=v.exports,h={components:{Cell:p},name:"board",props:{size:Number,blockSize:Number,interval:Number},mounted:function(){var t=this;this.restartBoard(),this.intervalId=setInterval(function(){return t.setNextCellStates()},this.interval)},data:function(){return{grid:[],intervalId:null}},methods:{restartBoard:function(){this.grid=[],this.buildGrid(),this.assignNeighbors()},buildGrid:function(){for(var t=[],e=0;e<this.size;e++)for(var n=0;n<this.size;n++){var i={alive:Math.random()>=.5,coords:{x:e,y:n}};t.push(i)}this.grid=t},assignNeighbors:function(){var t=this,e=this.grid.map(function(e){return e.neighbors=t.getNeighbors(e),e});this.grid=e},getNeighbors:function(t){var e=this.size-1;return this.grid.filter(function(n){if(n!==t){var i=Math.abs(n.coords.x-t.coords.x)<=1||Math.abs(t.coords.x-n.coords.x)===e,r=Math.abs(n.coords.y-t.coords.y)<=1||Math.abs(t.coords.y-n.coords.y)===e;return i&&r||null}return null})},setNextCellStates:function(){this.grid=this.grid.map(function(t){var e=t.neighbors.filter(function(t){return t.alive});return t.nextAliveState=3===e.length&&!t.alive||[2,3].includes(e.length)&&t.alive,t}),this.grid=this.grid.map(function(t){return t.alive=t.nextAliveState,t.nextAliveState=null,t})},getCellStyle:function(t){return{left:"".concat(t.coords.x*this.blockSize,"px"),top:"".concat(t.coords.y*this.blockSize,"px"),width:"".concat(this.blockSize,"px"),height:"".concat(this.blockSize,"px")}}},watch:{size:function(){this.restartBoard()},interval:function(){var t=this;clearInterval(this.intervalId),this.intervalId=setInterval(function(){return t.setNextCellStates()},this.interval)}}},b=h,m=(n("4429"),Object(f["a"])(b,o,s,!1,null,"36eb66c4",null));m.options.__file="Board.vue";var g=m.exports,y={name:"app",components:{Board:g},data:function(){return{boardSize:30,sizeInput:30,blockSize:20,intervalInput:50,interval:50}},methods:{onResetBoard:function(){this.boardSize=this.sizeInput?parseInt(this.sizeInput,10):this.boardSize,this.interval=this.intervalInput?parseInt(this.intervalInput,10):this.interval,this.$refs.board.restartBoard()},getGameSizeStyle:function(){var t=this.boardSize*this.blockSize;return{width:"".concat(t,"px"),height:"".concat(t,"px")}}}},_=y,x=(n("5c0b"),Object(f["a"])(_,r,a,!1,null,null,null));x.options.__file="App.vue";var S=x.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(t,e,n){},"92f4":function(t,e,n){},a569:function(t,e,n){}});
//# sourceMappingURL=app.0290e36b.js.map