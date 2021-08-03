<template>
	<header>
		<template v-if="isLogin">
			{{ `${this.$store.state.loginUser.nickname}님 환영합니다.` }}
			<a href="javascript:;" @click="logout">로그아웃</a>
		</template>
		<template v-else>
			<router-link to="/login">로그인</router-link>
			<router-link to="/signup">회원가입</router-link>
		</template>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['isLogin']),
	},
	methods: {
		logout() {
			this.$store.commit('logout');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
