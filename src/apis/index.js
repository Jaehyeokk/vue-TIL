import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

function createAuthInstance(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	setInterceptors(instance);
	return instance;
}

export const instance = createInstance();
export const posts = createAuthInstance();
