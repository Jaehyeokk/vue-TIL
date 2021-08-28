<template>
	<header class="header">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vue-Note</router-link>
			</h1>
			<div v-if="!is_login" class="sign-btns-wrap">
				<router-link class="sign-btn" to="/login">Login</router-link>
				<router-link class="sign-btn invert" to="/signup">Sign up</router-link>
			</div>
			<div v-else class="sign-btns-wrap">
				<button class="sign-btn" @click="logout">Logout</button>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['is_login']),
	},
	methods: {
		logout() {
			this.$store.commit('LOGOUT');
			this.$router.push({ name: 'login-page' });
		},
	},
};
</script>

<style scoped>
.header {
	height: 60px;
	margin-bottom: 60px;
	background-color: #093687;
}

.header .container {
	padding: 0 20px;
}

.header .logo a {
	font-family: 'Playball';
}

.header .sign-btn {
	color: #fff;
	border: 1px solid #fff;
	border-radius: 5px;
}

.header .sign-btn.invert {
	background-color: #fff;
	color: #333;
	margin-left: 10px;
}
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
}

.logo a {
	height: 100%;
	padding: 0 20px;
	font-weight: 700;
	font-size: 27px;
	color: #fff;
}

.sign-btns-wrap .sign-btn {
	padding: 6px 16px;
	font-weight: 700;
	font-size: 14px;
}
</style>
