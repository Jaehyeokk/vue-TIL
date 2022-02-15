import { auth } from '@/apis/index';
import { AxiosResponse } from 'axios';

export interface SignupForm {
	username: string;
	password: string;
	nickname: string;
}

export interface SignupResponse {
	created_at: string;
	insertedDate: string;
	nickname: string;
	password: string;
	updatedAt: string;
	username: string;
	__v: number;
	_id: string;
}

export interface LoginForm {
	username: string;
	password: string;
}

export interface LoginResponseUser {
	username: string;
	nickname: string;
}

export interface LoginResponse {
	message: string;
	success: boolean;
	token: string;
	user: LoginResponseUser;
}

function signupUser(form: SignupForm): Promise<AxiosResponse<SignupResponse>> {
	return auth.post('/signup', form);
}

function loginUser(form: LoginForm): Promise<AxiosResponse<LoginResponse>> {
	return auth.post('/login', form);
}

export { signupUser, loginUser };
