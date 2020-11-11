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

		<router-view></router-view>

		<!-- <home-page></home-page>
		<products-page></products-page>
		<categories-page></categories-page> -->
	</div>
</template>

<script>

export default {
	name: "App",
	components: {
		// 'products-page': ProductsPage,
		// 'home-page': HomePage,
		// 'categories-page': CategoriesPage
	},
	data() {
		return {
			/* Store links in an array to maintain order */
			links: ['home', 'products', 'categories'],

			/* Map links to the appropriate component */
			paths: {
				home: '/',
				products: '/products',
				categories: '/categories',
			},
		}
	},
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>

