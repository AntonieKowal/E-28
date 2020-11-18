<template>
	<div id="products">
		<h2>Products</h2>

		<router-link
			v-for="product in products"
			:key="product.id"
			v-bind:to="'/products/' + product.id"
			exact
		>
			<show-product :product="product"></show-product>
		</router-link>
	</div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
// import { axios } from '@/app.js';

export default {
	name: "",
	components: {
		"show-product": ShowProduct,
	},
	props: ['products'],
	data: function () {
		return {
		};
	},
	
};
</script>

<style scoped>
</style>