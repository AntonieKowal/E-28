(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-044242ea"],{"4a2d":function(t,e,o){"use strict";o("c9eb")},bae7:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"form"}},[o("h2",[t._v("Add a New Post!")]),o("label",{attrs:{for:"author"}},[t._v("Author*")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],attrs:{type:"text",id:"author"},domProps:{value:t.post.author},on:{input:function(e){e.target.composing||t.$set(t.post,"author",e.target.value)}}}),o("label",{attrs:{for:"title"}},[t._v("Title*")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),o("label",{attrs:{for:"post"}},[t._v("Post*")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.post,expression:"post.post"}],attrs:{id:"post"},domProps:{value:t.post.post},on:{input:function(e){e.target.composing||t.$set(t.post,"post",e.target.value)}}}),o("strong",[t._v("Category")]),o("div",[o("label",{attrs:{for:"sports"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.categories,expression:"post.categories"}],attrs:{type:"radio",id:"sports",value:"sports"},domProps:{checked:t._q(t.post.categories,"sports")},on:{change:function(e){return t.$set(t.post,"categories","sports")}}}),t._v(" Sports ")]),o("label",{attrs:{for:"coding"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.categories,expression:"post.categories"}],attrs:{type:"radio",id:"coding",value:"coding"},domProps:{checked:t._q(t.post.categories,"coding")},on:{change:function(e){return t.$set(t.post,"categories","coding")}}}),t._v(" Coding ")]),o("label",{attrs:{for:"music"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.categories,expression:"post.categories"}],attrs:{type:"radio",id:"music",value:"music"},domProps:{checked:t._q(t.post.categories,"music")},on:{change:function(e){return t.$set(t.post,"categories","music")}}}),t._v(" Music ")])]),o("button",{on:{click:t.addPost}},[t._v("Submit Post")])])])},a=[],r=o("1112"),i={data:function(){return{post:{title:"",author:"",post:"",categories:[]},errors:null}},methods:{addPost:function(){var t=this;r["a"].post("/post",this.post).then((function(e){console.log(e.data),null!=e.data.errors?(t.errors=e.data.errors,alert("submission failed. Please fill out every field!")):(t.$store.dispatch("fetchPosts"),alert("post successfully sent"))}))}}},n=i,p=(o("4a2d"),o("2877")),c=Object(p["a"])(n,s,a,!1,null,"2b69a8ae",null);e["default"]=c.exports},c9eb:function(t,e,o){}}]);
//# sourceMappingURL=chunk-044242ea.8f0a7ed4.js.map