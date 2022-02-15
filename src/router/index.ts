import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'main-page',
			component: () => import('@/views/MainPage.vue'),
			beforeEnter: (to, from, next) => {
				if (store.getters.is_login === true) {
					next();
				} else {
					next('/signin');
				}
			},
		},
		{
			path: '/signin',
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
	],
});

export default router;
