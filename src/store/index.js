import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/apis/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		setToken(state, token) {
			state.token = token;
		},
		logout(state) {
			state.username = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userdata) {
			try {
				const { data } = await loginUser(userdata);
				commit('setToken', data.token);
				commit('setUsername', data.user.username);
				saveAuthToCookie(data.token);
				saveUserToCookie(data.user.username);
				return data;
			} catch (error) {
				console.log(error);
			}
		},
	},
});
