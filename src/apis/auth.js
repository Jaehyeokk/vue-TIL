import { auth } from '@/apis/index.js';

function signupUser(form) {
	return auth.post('/signup', form);
}

function loginUser(form) {
	return auth.post('/login', form);
}

export { signupUser, loginUser };
