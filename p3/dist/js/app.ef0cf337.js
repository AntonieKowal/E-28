(function(t){function e(e){for(var r,o,c=e[0],s=e[1],i=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},u={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-044242ea":"8f0a7ed4","chunk-2d0aa9e3":"79db689e","chunk-2d0bac30":"7bc05a81","chunk-6ddeb97a":"bd2f695b","chunk-b4091858":"c3d2e964","chunk-cf47e34a":"89773366"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-044242ea":1,"chunk-b4091858":1,"chunk-cf47e34a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-044242ea":"0eec31bf","chunk-2d0aa9e3":"31d6cfe0","chunk-2d0bac30":"31d6cfe0","chunk-6ddeb97a":"31d6cfe0","chunk-b4091858":"2c835256","chunk-cf47e34a":"2c835256"}[t]+".css",u=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===r||p===u))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],p=i.getAttribute("data-href");if(p===r||p===u)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||u,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[t]=0})));var r=u[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=u[t]=[e,n]}));e.push(r[2]=a);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(t);var f=new Error;i=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=u[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}u[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var d=p;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1112:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o}));var o=n("bc3a").create({baseURL:null!==(r="http://e28-api.antonievue.xyz")&&void 0!==r?r:"http://e28-api.antonievue.loc/",responseType:"json",withCredentials:!0})},"1a4c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("ul",{attrs:{id:"test"}},t._l(t.links,(function(e){return n("li",{key:e},[n("router-link",{staticClass:"button",attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e)+" "),"posts"==e&&t.postCount?n("span",[t._v("("+t._s(t.postCount)+")")]):t._e()])],1)})),0)]),n("router-view",{on:{"update-posts":function(e){return t.updatePosts()}}})],1)},u=[],a={name:"App",components:{},data:function(){return{links:["home","posts","create post","account"],paths:{home:"/",posts:"/posts","create post":"/posts/new",account:"/account"}}},mounted:function(){this.$store.dispatch("fetchPosts"),this.$store.dispatch("authUser")},methods:{updatePosts:function(){}},computed:{postCount:function(){return this.$store.state.postCount},posts:function(){return this.$store.state.posts}}},c=a,s=(n("c0a8"),n("2877")),i=Object(s["a"])(c,o,u,!1,null,"982f6d86",null),p=i.exports,f=n("8c4f"),d=(n("4de4"),n("2f62")),h=n("1112");r["a"].use(d["a"]);var l=new d["a"].Store({state:{postCount:0,posts:[],user:null,favorites:[]},mutations:{setPostCount:function(t,e){t.postCount=e},setPosts:function(t,e){t.posts=e},setUser:function(t,e){t.user=e}},actions:{fetchPosts:function(t){h["a"].get("post").then((function(e){t.commit("setPosts",e.data.post),t.commit("setPostCount",e.data.post.length)}))},authUser:function(t){h["a"].post("auth").then((function(e){e.data.authenticated&&t.commit("setUser",e.data.user)}))}},getters:{getPostById:function(t){return function(e){return t.posts.filter((function(t){return t.id==e}),this.id)}}}}),m=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),b=[{path:"/",component:function(){return n.e("chunk-2d0bac30").then(n.bind(null,"391e"))}},{path:"/posts",component:function(){return n.e("chunk-b4091858").then(n.bind(null,"1931"))}},{path:"/posts/new",component:function(){return n.e("chunk-044242ea").then(n.bind(null,"bae7"))},meta:{requiresAuth:!0}},{path:"/posts/:id",component:function(){return n.e("chunk-cf47e34a").then(n.bind(null,"c78c"))},props:!0},{path:"/account",component:function(){return n.e("chunk-6ddeb97a").then(n.bind(null,"8fdc"))}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],v=new f["a"]({routes:b,mode:"history"});v.beforeEach(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.matched.some((function(t){return t.meta.requiresAuth})),o&&!l.state.user?r("/denied"):r();case 2:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());var g=v;r["a"].config.productionTip=!1,r["a"].use(f["a"]),new r["a"]({render:function(t){return t(p)},router:g,store:l}).$mount("#app")},c0a8:function(t,e,n){"use strict";n("1a4c")}});
//# sourceMappingURL=app.ef0cf337.js.map