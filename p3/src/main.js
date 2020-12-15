import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import store from '@/common/store.js';
import router from '@/common/router.js';

// import HomePage from "@/components/pages/HomePage.vue";
// import PostsPage from "@/components/pages/PostsPage.vue";
// import CreatePostPage from "@/components/pages/CreatePostPage.vue";
// import PostPage from "@/components/pages/PostPage.vue";
// import AccountPage from '@/components/pages/AccountPage.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

// const router = new VueRouter({
// 	mode: 'history',
// 	routes: [
// 		{ path: '/', component: HomePage },
// 		{ path: '/posts', component: PostsPage },
// 		{ path: '/posts/new', component: CreatePostPage },
// 		// put this one after
// 		{ path: '/posts/:id', component: PostPage, props: true },
// 		{ path: '/account', component: AccountPage },
// 	],
// });

new Vue({
	render: (h) => h(App),
	router: router,
	store,
}).$mount("#app");
