import axios from 'axios';

export const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function signupUser(form) {
	return instance.post('signup', form);
}

function loginUser(form) {
	return instance.post('login', form);
}

export { signupUser, loginUser };
