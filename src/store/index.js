import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loginUser: null,
	},
	getters: {
		isLogin(state) {
			return state.loginUser !== null;
		},
	},
	mutations: {
		setLoginUser(state, user) {
			state.loginUser = user;
		},
		logout(state) {
			state.loginUser = null;
		},
	},
});
