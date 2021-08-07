import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		headers: {
			Authorization: '',
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

// 학습노트 생성
function createPost(data) {
	return instance.post('/posts', data);
}

export { registerUser, loginUser, fetchPosts, createPost };
