<template>
	<header>
		<h1 class="logo">
			<router-link :to="logo_link">로고</router-link>
		</h1>
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
		logo_link() {
			if (this.isLogin) {
				return '/main';
			} else {
				return '/login';
			}
		},
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
