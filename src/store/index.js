import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/apis/auth.js';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	deleteCookie,
} from '@/utils/cookies.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: '',
		user: {},
	},
	getters: {
		is_login(state) {
			return !!state.token || !!getUserFromCookie();
		},
		user_token() {
			return getAuthFromCookie();
		},
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_USER(state, user) {
			state.user = user;
		},
		LOGOUT(state) {
			state.token = '';
			state.user = {};
			deleteCookie('til_auth');
			deleteCookie('til_user');
		},
	},
	actions: {
		async LOGIN({ commit }, form) {
			const res = await loginUser(form);
			commit('SET_TOKEN', res.data.token);
			commit('SET_USER', res.data.user);
			saveAuthToCookie(res.data.token);
			saveUserToCookie(JSON.stringify(res.data.user));
			return res;
		},
	},
});
