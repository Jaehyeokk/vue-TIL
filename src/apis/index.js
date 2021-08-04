import axios from 'axios';
import store from '../store/index.js';
import { setInterceptors } from './common/interceptors.js';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		headers: {
			Authorization: store.state.token,
		},
	});
	setInterceptors(instance);
	return instance;
}

const instance = createInstance();

function registerUser(data) {
	return instance.post('/signup', data);
}

function loginUser(data) {
	return instance.post('/login', data);
}

export { registerUser, loginUser };
