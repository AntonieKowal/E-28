import Vue from 'vue';
import Vuex from 'vuex';
import { axios } from '@/app.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		postCount: 0,
		posts: [],
		user: null,
		favorites: [],
	},
	mutations: {
		setPostCount(state, payload) {
			state.postCount = payload;
		},
		setPosts(state, payload) {
			state.posts = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},

	},
	actions: {
		fetchPosts(context) {
			axios.get('post').then((response) => {
				context.commit('setPosts', response.data.post);
				context.commit('setPostCount', response.data.post.length);
			});
		},
		authUser(context) {
			axios.post('auth').then((response) => {
				if (response.data.authenticated) {
					context.commit('setUser', response.data.user);
				}
			});
		},
	},
	getters: {
		getPostById(state) {
			return function(id) {
				return state.posts.filter((post) => {
					return post.id == id;
				}, this.id);
			};
		},
	},
});
