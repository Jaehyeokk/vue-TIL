import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: () => import('@/views/MainPage.vue'),
		beforeEnter: (to, from, next) => {
			if (store.getters.is_login === true) {
				next();
			} else {
				next('/login');
			}
		},
	},
	{
		path: '/login',
		name: 'login-page',
		component: () => import('@/views/LoginPage.vue'),
		beforeEnter: (to, from, next) => {
			if (store.getters.is_login === true) {
				next('/');
			} else {
				next();
			}
		},
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
