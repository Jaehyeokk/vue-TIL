<template>
	<header class="header">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vue-Note</router-link>
			</h1>
			<div v-if="!is_login" class="sign-btns-wrap">
				<div class="sign-btns-pc">
					<router-link class="sign-btn" to="/signin">Sign in</router-link>
					<router-link class="sign-btn border" to="/signup"
						>Sign up</router-link
					>
				</div>
				<div class="sign-btns-mobile">
					<button class="mobile-sign-btn" @click="handleMobileMenu">
						<i class="fas fa-bars"></i>
					</button>
					<nav ref="mobileMenu" class="mobile-menu">
						<ul class="mobile-menu-list">
							<li class="mobile-menu-item">
								<button
									class="mobile-menu-link"
									@click="handleMobileLink('signin')"
								>
									Sign in
								</button>
							</li>
							<li class="mobile-menu-item">
								<button
									class="mobile-menu-link"
									@click="handleMobileLink('signup')"
								>
									Sign up
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div v-else class="sign-btns-wrap">
				<button class="mobile-sign-btn" @click="logout">
					<i class="fas fa-sign-out-alt"></i>
				</button>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
	computed: {
		...mapGetters(['is_login']),
	},

	methods: {
		logout() {
			this.$store.commit('LOGOUT');
			this.$router.push('/signin');
		},
		handleMobileMenu() {
			const nav = this.$refs.mobileMenu as HTMLElement;
			if (nav.style.maxHeight === '') {
				nav.style.maxHeight = '30' + 'rem';
			} else {
				nav.style.maxHeight = '';
			}
		},
		handleMobileLink(link: string) {
			const nav = this.$refs.mobileMenu as HTMLElement;
			if (this.$route.path !== `/${link}`) {
				this.$router.push(`/${link}`);
			}
			if (nav.style.maxHeight !== '') {
				nav.style.maxHeight = '';
			}
		},
	},
});
</script>

<style scoped>
.header {
	position: relative;
	height: 6rem;
	margin-bottom: 6rem;
	background-color: mediumpurple;
	box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
}

.header .container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 0 2rem;
}

.header .logo a {
	height: 100%;
	padding: 0 2rem;
	font-family: 'Playball';
	font-weight: 700;
	font-size: 2.7rem;
	color: #fff;
}

.header .sign-btn {
	padding: 0.6rem 1.6rem;
	border-radius: 0.5rem;
	font-size: 1.4rem;
	font-weight: 700;
	color: #fff;
	background-color: rgba(147, 112, 216, 1);
	transition: all 0.1s ease;
}

.header .sign-btn:hover {
	opacity: 0.75;
}

.header .sign-btn.border {
	border: 0.1rem solid #fff;
	margin-left: 1rem;
}

.sign-btns-mobile {
	display: none;
}

.mobile-sign-btn {
	padding: 0.5rem;
}

.mobile-sign-btn:hover {
	opacity: 0.75;
}

.mobile-sign-btn i {
	font-size: 2.7rem;
	color: #fff;
}

.mobile-menu {
	display: none;
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 6rem;
	width: 100%;
	max-height: 0;
	background-color: #fff;
	transition: 0.3s ease;
	box-shadow: 0.1rem 0.1rem 0.1rem rgba(34, 34, 34, 0.1);
}

.mobile-menu-list {
	padding: 1rem 0;
	background-color: rgba(147, 112, 216, 0.9);
}

.mobile-menu-item {
	padding: 0 2rem;
	text-align: right;
}

.mobile-menu-link {
	display: inline-block;
	padding: 2rem 0;
	font-weight: 700;
	font-size: 1.4rem;
	color: #fff;
}

@media screen and (max-width: 480px) {
	.sign-btns-pc {
		display: none;
	}

	.sign-btns-mobile,
	.mobile-menu {
		display: block;
	}
}
</style>
