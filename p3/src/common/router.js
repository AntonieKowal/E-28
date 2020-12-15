import VueRouter from 'vue-router';
import store from '@/common/store';

// Define all the routes of our application
const routes = [
	{
		path: '/',
		// Rather than having to have separate import statements at the top of this page for each component
		// Here's a simple way we can directly make our components available
		component: () => import('@/components/pages/HomePage.vue'),
	},
	{
		path: '/posts',
		component: () => import('@/components/pages/PostsPage.vue'),
	},

	{
		path: '/posts/new',
		component: () => import('@/components/pages/CreatePostPage.vue'),
		// Note the addition of this meta attribute:
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/posts/:id',
		component: () => import('@/components/pages/PostPage.vue'),
		props: true,
	},
	{
		path: '/account',
		component: () => import('@/components/pages/AccountPage.vue'),
	},
	{
		// This is a route we can direct the user to if they try to access a part of the site they don't have privileges for
		path: '/denied',
		component: () => import('@/components/pages/AccessDeniedPage.vue'),
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

router.beforeEach(async (to, from, next) => {

    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

	if (requiresAuth && !store.state.user) {
		next('/denied');
	} else {
		next();
	}
});

export default router;
