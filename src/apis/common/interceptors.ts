import store from '@/store/index';
import { getAuthFromCookie } from '@/utils/cookies';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

function interceptors(instance: AxiosInstance): void {
	// Add a request interceptor
	instance.interceptors.request.use(
		function (config: AxiosRequestConfig) {
			// Do something before request is sent
			const token = store.getters.user_token || getAuthFromCookie();
			if (!config.headers) return;
			config.headers.Authorization = token;
			return config;
		},
		function (error: PromiseConstructor) {
			// Do something with request error
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function (response: AxiosResponse) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			return response;
		},
		function (error: PromiseConstructor) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		},
	);
}

export default interceptors;
