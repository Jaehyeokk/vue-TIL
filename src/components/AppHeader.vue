<template>
	<header>
		<template v-if="isLogin">
			{{ `${this.$store.state.username}님 환영합니다.` }}
			<a href="javascript:;" @click="logout">로그아웃</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link>
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies.js';
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['isLogin']),
	},
	methods: {
		logout() {
			this.$store.commit('logout');
			deleteCookie('til_auth');
			deleteCookie('til_user');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
