import { LoginForm, LoginResponse, loginUser } from '@/apis/auth';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';
import { AxiosResponse } from 'axios';
import { ActionContext } from 'vuex';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload?: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {
	async LOGIN(
		{ commit }: MyActionContext,
		form: LoginForm,
	): Promise<AxiosResponse<LoginResponse>> {
		const res = await loginUser(form);
		commit('SET_TOKEN', res.data.token);
		commit('SET_USER', res.data.user);
		saveAuthToCookie(res.data.token);
		saveUserToCookie(JSON.stringify(res.data.user));
		return res;
	},
};

export type Actions = typeof actions;
