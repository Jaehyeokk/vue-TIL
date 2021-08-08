import { instance } from './index.js';

// 회원가입
function registerUser(data) {
	return instance.post('/signup', data);
}

// 로그인
function loginUser(data) {
	return instance.post('/login', data);
}

export { registerUser, loginUser };
