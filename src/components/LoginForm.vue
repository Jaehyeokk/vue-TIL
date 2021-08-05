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
			<button type="submit" :disabled="!isUsernameValid || !password">
				로그인
			</button>
		</form>
		<p>{{ this.logMessage }}</p>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation.js';
export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
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
				};
				await this.$store.dispatch('LOGIN', userdata);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
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
