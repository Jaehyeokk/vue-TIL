import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/apis/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: '',
		username: '',
	},
	mutations: {
		SET_LOGIN_INFO(state, data) {
			state.token = data.token;
			state.username = data.user.username;
		},
	},
	actions: {
		async LOGIN({ commit }, form) {
			const res = await loginUser(form);
			commit('SET_LOGIN_INFO', res.data);
		},
	},
});
