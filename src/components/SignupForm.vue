<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id: </label>
				<input id="username" type="text" v-model="username" />
			</div>
			<div>
				<label for="password">pw: </label>
				<input id="password" type="text" v-model="password" />
			</div>
			<div>
				<label for="nickname">nickname: </label>
				<input id="nickname" type="text" v-model="nickname" />
			</div>
			<button
				type="submit"
				:disabled="!isUsernameValid || !password || !nickname"
			>
				signup
			</button>
		</form>
		<p>{{ this.log_message }}</p>
	</div>
</template>

<script>
import { registerUser } from '@/apis/auth.js';
import { validateEmail } from '@/utils/validation.js';
export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			log_message: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userdata = {
					username: this.username,
					password: this.password,
					nickname: this.nickname,
				};
				const { data } = await registerUser(userdata);
				this.log_message = `${data.username}님이 가입되었습니다.`;
			} catch (error) {
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
