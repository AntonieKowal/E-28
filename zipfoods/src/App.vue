<template>
	<div id="app">
		<img
			alt="zipfoods logo"
			id="logo"
			src="@/assets/images/zipfoods-logo.png"
		/>

		<nav>
			<ul>
				<li>
					<router-link
						v-for="link in links"
						v-bind:key="link"
						v-bind:to="paths[link]"
						exact
						>{{ link }}</router-link
					>
				</li>
			</ul>
		</nav>

		<router-view :products='products' v-on:update-products='updateProducts()'></router-view>

		<!-- <home-page></home-page>
		<products-page></products-page>
		<categories-page></categories-page> -->
	</div>
</template>

<script>
import {axios} from '@/app.js';

export default {
	name: "App",
	components: {
		// 'products-page': ProductsPage,
		// 'home-page': HomePage,
		// 'categories-page': CategoriesPage
	},
	data() {
		return {
			products: [],

			/* Store links in an array to maintain order */
			links: ['home', 'products', 'categories', 'add a product'],

			/* Map links to the appropriate component */
			paths: {
				home: '/',
				products: '/products',
				categories: '/categories',
				'add a product': '/products/new'
			},
		}
	},
	mounted() {
		this.updateProducts();
	},
	methods: {
		updateProducts() {
			axios.get('product').then((response) => {
				this.products = response.data.product;
				console.log(response.data);
			})
		}
	},
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>

