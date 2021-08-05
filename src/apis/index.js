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

// 회원가입
function registerUser(data) {
	return instance.post('/signup', data);
}

// 로그인
function loginUser(data) {
	return instance.post('/login', data);
}

// 학습노트 조회
function fetchPosts() {
	return instance.get('/posts');
}

export { registerUser, loginUser, fetchPosts };
