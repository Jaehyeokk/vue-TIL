import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/apis/auth.js';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: '',
		user: {},
	},
	getters: {
		is_login() {
			return !!getAuthFromCookie() && !!getUserFromCookie();
		},
		user_token() {
			return getAuthFromCookie();
		},
		user_name() {
			return JSON.parse(getUserFromCookie());
		},
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_USER(state, user) {
			state.user = user;
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
