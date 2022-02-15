import { LoginResponseUser } from '@/apis/auth';
import { deleteCookie } from '@/utils/cookies';
import { RootState } from './state';

export const mutations = {
	SET_TOKEN(state: RootState, token: string): void {
		state.token = token;
	},
	SET_USER(state: RootState, user: LoginResponseUser): void {
		state.user = user;
	},
	LOGOUT(state: RootState): void {
		state.token = '';
		state.user = {};
		deleteCookie('til_auth');
		deleteCookie('til_user');
	},
};

export type Mutations = typeof mutations;
