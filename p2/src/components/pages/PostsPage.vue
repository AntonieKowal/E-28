<template>
	<div id="">
		<h1>Posts page</h1>
		<h4>Click on a Post for more detail</h4>

		<router-link
			v-for="post in posts"
			:key="post.id"
			v-bind:to="'/posts/' + post.id"
			exact
		>
			<show-post :post="post"></show-post>
			<hr>

		</router-link>
		
		<!-- <show-post v-for="post in posts" :key="post.id" :post="post"></show-post> -->
	</div>
</template>

<script>
// import { axios } from '@/app.js';
import ShowPost from "@/components/ShowPost.vue";

export default {
	name: "",
	components: {
		'show-post': ShowPost
	},
	props: ['posts'],
	data: function () {
		return {
		};
	},
	
};
</script>

<style scoped>
</style>