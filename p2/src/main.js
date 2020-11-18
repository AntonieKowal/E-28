import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import PostsPage from "@/components/pages/PostsPage.vue";
import CreatePostPage from "@/components/pages/CreatePostPage.vue";
import PostPage from "@/components/pages/PostPage.vue";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: HomePage },
		{ path: "/posts", component: PostsPage },
		{ path: "/posts/new", component: CreatePostPage },
		// put this one after
		{ path: "/posts/:id", component: PostPage, props: true },
	],
});

new Vue({
	render: (h) => h(App),
	router: router,
}).$mount("#app");
