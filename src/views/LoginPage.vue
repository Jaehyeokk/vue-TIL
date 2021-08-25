<template>
	<div class="page login-page">
		<div class="container">
			<div class="sign-title">Login</div>
			<form class="sign-form" @submit.prevent="submitLogin">
				<div class="valid-text-wrap">
					<p v-if="!isValidateEmail && this.login_id">
						Please enter in e-mail format
					</p>
				</div>
				<div class="input-wrap">
					<label for="sign-id">ID: </label>
					<input id="sign-id" type="text" v-model="login_id" />
				</div>

				<div class="input-wrap">
					<label for="sign-pw">PW: </label>
					<input id="sign-pw" type="password" v-model="login_pw" />
				</div>
				<div class="btn-wrap">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation.js';
export default {
	data() {
		return {
			login_id: '',
			login_pw: '',
		};
	},
	computed: {
		isValidateEmail() {
			return validateEmail(this.login_id);
		},
	},
	methods: {
		async submitLogin() {
			try {
				await this.$store.dispatch('LOGIN', {
					username: this.login_id,
					password: this.login_pw,
				});
				this.$router.push({ name: 'main-page' });
			} catch (err) {
				console.log(err);
			} finally {
				this.resetForm();
			}
		},
		resetForm() {
			this.login_id = '';
			this.login_pw = '';
		},
	},
};
</script>

<style scoped>
.container {
	width: 360px;
	padding: 20px;
	margin: 60px auto 0 auto;
	border-radius: 20px;
	background-color: #fff;
	box-sizing: border-box;
}
</style>
