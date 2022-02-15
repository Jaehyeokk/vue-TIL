import axios from 'axios';
import interceptors from '@/apis/common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}`,
	});
	return instance;
}

function createAuthInstance(url: string) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}/${url}`,
	});
	interceptors(instance);
	return instance;
}

export const auth = createInstance();
export const posts = createAuthInstance('posts');
