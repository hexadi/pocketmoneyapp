(function(t){function e(e){for(var o,i,l=e[0],c=e[1],u=e[2],d=0,f=[];d<l.length;d++)i=l[d],a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);s&&s(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("balance")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("p",{staticStyle:{"font-size":"50px","text-align":"center"}},[t._v("Balance : "+t._s(t.balance))])]),n("div",{staticStyle:{"padding-bottom":"81px"}},t._l(t.transaction,function(e){return n("div",{key:e.timestamp,staticClass:"transaction"},[n("div",{staticStyle:{width:"40%",display:"inline-block"}},[n("p",{staticStyle:{"font-size":"80px",display:"inline-block","padding-left":"5px"}},[t._v(t._s(e.amount))])]),n("div",{staticStyle:{width:"60%",display:"inline-block"}},[n("p",{staticStyle:{"text-align":"right","font-size":"20px","padding-right":"10px"}},[t._v(t._s(new Date(e.timestamp).toLocaleString()))]),null!=e.note?n("p",{staticStyle:{"text-align":"right","font-size":"20px","padding-right":"10px"}},[t._v("Note : "+t._s(e.note))]):t._e()])])}),0),n("div",{staticStyle:{bottom:"0",width:"100%",position:"fixed","background-color":"rgb(231, 231, 231)"}},[n("table",{staticStyle:{width:"100%",height:"80px"}},[n("tr",[t._m(0),n("td",{staticStyle:{width:"20%"}},[n("button",{staticStyle:{width:"-webkit-fill-available",height:"36px","background-color":"rgb(231, 231, 231)","font-size":"30px"},on:{click:t.add}},[t._v("+")])])]),n("tr",[t._m(1),n("td",[n("button",{staticStyle:{width:"-webkit-fill-available",height:"36px","background-color":"rgb(231, 231, 231)","font-size":"30px"},on:{click:t.minus}},[t._v("-")])])])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticStyle:{width:"80%"}},[n("input",{staticStyle:{width:"100%","font-size":"30px",background:"none"},attrs:{type:"number",name:"",id:"amount",placeholder:"Amount"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("input",{staticStyle:{width:"100%","font-size":"30px",background:"none"},attrs:{type:"text",name:"",id:"note",placeholder:"Note"}})])}],c=n("f499"),u=n.n(c),s=n("e814"),d=n.n(s),f=(n("ac6a"),{data:function(){return{trans:[],balance:0}},computed:{balancex:function(){var t=0;return this.trans.forEach(function(e){t+=e.amount}),t},transaction:function(){return this.trans.slice(0).reverse()}},methods:{add:function(){var t=d()(document.querySelector("input#amount").value),e=document.querySelector("input#note").value,n=function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<16;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},o=n();t>0?(""===e&&(e=null),this.trans.push({id:o,amount:t,note:e,timestamp:(new Date).getTime()}),this.balance+=t,localStorage.setItem("trans",u()(this.trans)),localStorage.setItem("balance",d()(this.balance)),document.querySelector("input#amount").value=null,document.querySelector("input#note").value=null):alert("You didn't fill in any amount")},minus:function(){var t=-d()(document.querySelector("input#amount").value),e=document.querySelector("input#note").value,n=function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<16;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},o=n();t<0?(""===e&&(e=null),this.trans.push({id:o,amount:t,note:e,timestamp:(new Date).getTime()}),this.balance+=t,localStorage.setItem("trans",u()(this.trans)),localStorage.setItem("balance",d()(this.balance)),document.querySelector("input#amount").value=null,document.querySelector("input#note").value=null):alert("You didn't fill in any amount")},getData:function(){var t=localStorage.getItem("trans");null!=t?(this.trans=JSON.parse(t),this.balance=d()(localStorage.getItem("balance"))):(localStorage.setItem("trans","[]"),localStorage.setItem("balance",0))}},created:function(){this.getData()}}),p=f,h=(n("f3f9"),n("2877")),g=Object(h["a"])(p,i,l,!1,null,null,null),m=g.exports,b={components:{balance:m}},v=b,y=(n("034f"),Object(h["a"])(v,a,r,!1,null,null,null)),S=y.exports,w=n("9483");Object(w["a"])("".concat("/pocketmoneyapp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){},afbd:function(t,e,n){},f3f9:function(t,e,n){"use strict";var o=n("afbd"),a=n.n(o);a.a}});
