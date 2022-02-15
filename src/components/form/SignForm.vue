<template>
	<div class="sign-form-wrap">
		<form class="sign-form" @submit.prevent="submitHandle">
			<div class="input-wrap">
				<label for="sign-id">Email address </label>
				<input
					id="sign-id"
					type="text"
					autocomplete="username"
					v-model="sign_id"
				/>
			</div>
			<div class="valid-text-wrap">
				<p v-if="!isValidateEmail && this.sign_id">
					Please enter in e-mail format
				</p>
			</div>
			<div class="input-wrap">
				<label for="sign-pw">Password </label>
				<input
					id="sign-pw"
					type="password"
					autocomplete="current-password"
					v-model="sign_pw"
				/>
			</div>
			<div v-if="this.$route.name === 'signup-page'" class="input-wrap">
				<label for="sign-name">Username </label>
				<input id="sign-name" type="text" v-model="sign_name" />
			</div>
			<div class="btn-wrap">
				<button type="submit">{{ isTitle }}</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { signupUser } from '@/apis/auth';
import { validateEmail } from '@/utils/validation';

export default Vue.extend({
	data() {
		return {
			sign_id: '',
			sign_pw: '',
			sign_name: '',
		};
	},

	computed: {
		isTitle(): string {
			return this.$route.name === 'signup-page' ? 'Sign up' : 'Sign in';
		},
		isValidateEmail(): boolean {
			return validateEmail(this.sign_id);
		},
	},

	methods: {
		submitHandle() {
			if (this.$route.name === 'signup-page') {
				this.submitSignup();
			} else {
				this.submitLogin();
			}
		},
		async submitSignup() {
			try {
				await signupUser({
					username: this.sign_id,
					password: this.sign_pw,
					nickname: this.sign_name,
				});
				this.resetForm();
				this.$router.push({ name: 'login-page' });
			} catch (err) {
				console.log(err);
				this.resetForm();
			}
		},
		async submitLogin() {
			try {
				await this.$store.dispatch('LOGIN', {
					username: this.sign_id,
					password: this.sign_pw,
				});
				this.$router.push({ name: 'main-page' });
			} catch (err) {
				console.log(err);
			} finally {
				this.resetForm();
			}
		},
		resetForm() {
			this.sign_id = '';
			this.sign_pw = '';
			this.sign_name = '';
		},
	},
});
</script>
