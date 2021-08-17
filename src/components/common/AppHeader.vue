<template>
	<header class="header">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vue-Note</router-link>
			</h1>
			<div v-if="!is_login" class="sign-btns-wrap">
				<router-link to="/login">Login</router-link>
				<router-link to="/signup">Sign up</router-link>
			</div>
			<div v-else class="sign-btns-wrap">
				<a href="javascript:;" @click="logout">Logout</a>
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

.header a {
	color: #fff;
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

.sign-btns-wrap a {
	padding: 6px 16px;
	font-weight: 700;
	font-size: 14px;
}
</style>
