<template>
	<div class="signup-page">
		<div class="container">
			<div class="sign-title">Sign up</div>
			<form class="sign-form" @submit.prevent="submitSignup">
				<div class="input-wrap">
					<label for="sign-id">ID: </label>
					<input id="sign-id" type="text" v-model="sign_id" />
				</div>
				<div class="input-wrap">
					<label for="sign-pw">PW: </label>
					<input id="sign-pw" type="password" v-model="sign_pw" />
				</div>
				<div class="input-wrap">
					<label for="sign-name">NAME: </label>
					<input id="sign-naem" type="password" v-model="sign_name" />
				</div>
				<div class="btn-wrap">
					<button type="submit">Signup</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sign_id: '',
			sign_pw: '',
			sign_name: '',
		};
	},
	methods: {
		submitSignup() {
			console.log('hi');
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
