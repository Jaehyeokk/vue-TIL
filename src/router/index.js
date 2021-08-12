import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: MainPage,
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
