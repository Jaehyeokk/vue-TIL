import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: () => import('@/views/MainPage.vue'),
	},
	{
		path: '/login',
		name: 'login-page',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'signup-page',
		component: () => import('@/views/SignupPage.vue'),
	},
	{
		path: '*',
		name: 'notFound',
		component: () => import('@/views/NotFound.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
