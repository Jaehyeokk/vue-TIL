import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';
import { RootState } from './state';

export const getters = {
	is_login(state: RootState): boolean {
		return !!state.token || !!getUserFromCookie();
	},
	user_token(): string {
		return getAuthFromCookie();
	},
};

export type Getters = typeof getters;
