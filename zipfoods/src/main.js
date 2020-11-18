import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from "@/components/pages/HomePage.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";
import ProductCreatePage from "@/components/pages/ProductCreatePage.vue";


Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: HomePage},
		{path: '/products', component: ProductsPage},
		{path: '/products/new', component: ProductCreatePage},
		{path: '/categories', component: CategoriesPage},
		// put this one after
		{path: '/products/:id', component: ProductPage, props: true}
	],
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
