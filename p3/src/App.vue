<template>
	<div id="app">	
		<nav>	
			<ul id="test">
				<li v-for="link in links" v-bind:key="link" >
					<router-link
						v-bind:to="paths[link]"
						exact
						class="button"
						:data-test="link"
						>{{ link }}
						<span v-if="link == 'posts' && postCount">({{postCount}})</span>
							
					</router-link
					>
				</li>
			</ul>
		</nav>

		<!-- :posts="posts" -->
		<router-view 	
			v-on:update-posts='updatePosts()'
		></router-view>
	</div>
</template>

<script>
// import { axios } from '@/app.js';

export default {
	name: "App",
	components: {
		// 'products-page': ProductsPage,
		// 'home-page': HomePage,
		// 'categories-page': CategoriesPage
	},
	data() {
		return {

			// posts: [],

			/* Store links in an array to maintain order */
			links: ['home', 'posts', 'create post', 'account'],

			/* Map links to the appropriate component */
			paths: {
				home: '/',
				posts: '/posts',
				'create post': '/posts/new',
				account: '/account'
			},
		}
	},
	mounted() {
		// this.updatePosts();
		this.$store.dispatch('fetchPosts');

		this.$store.dispatch('authUser');

	},
	methods: {
		updatePosts() {
			// axios.get('post').then((response) => {
			// 	this.posts = response.data.post;
			// 	console.log(response.data);
			// 	this.$store.commit('setPostCount', this.posts.length);
			// })
		}
	},
	computed: {
		postCount() {
			return this.$store.state.postCount;
		},
		posts() {
			return this.$store.state.posts;
		}
	}
};
</script>

<style scoped>
	ul {
		padding-inline-start: 0px;
	}

	#test {
		display: flex;
		flex-direction: row;
		list-style: none;
		list-style-type: none;
		justify-content: space-evenly;
		max-width: 40vw;
		margin: 0 auto;
	}

	.button {
		background-color:#87948a;
		border-radius:12px;
		border:2px solid #151615;
		display:inline-block;
		cursor:pointer;
		color:#ffffff;
		font-family:Arial;
		font-size:17px;
		padding:12px 31px;
		text-decoration:none;
		text-shadow:0px 0px 0px #2f6627;
		text-transform: uppercase;
	}
	.button:hover {
		background-color:#5cbf2a;
	}
	.button:active {
		position:relative;
		top:1px;
	}

	.router-link-active {
		background-color:#44c767
	}


	#app {
		margin: 10px 25%;
	}
</style>
