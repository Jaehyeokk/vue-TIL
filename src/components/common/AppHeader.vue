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
		handleMobileMenu() {
			const nav = this.$refs.mobileMenu;
			if (nav.style.maxHeight === '') {
				nav.style.maxHeight = '300' + 'px';
			} else {
				nav.style.maxHeight = '';
			}
		},
		handleMobileLink(link) {
			const nav = this.$refs.mobileMenu;
			this.$router.push(`/${link}`);
			if (nav.style.maxHeight !== '') {
				nav.style.maxHeight = '';
			}
		},
	},
};
</script>

<style scoped>
.header {
	position: relative;
	height: 60px;
	margin-bottom: 60px;
	background-color: mediumpurple;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

.header .container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 0 20px;
}

.header .logo a {
	height: 100%;
	padding: 0 20px;
	font-family: 'Playball';
	font-weight: 700;
	font-size: 27px;
	color: #fff;
}

.header .sign-btn {
	padding: 6px 16px;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 700;
	color: #fff;
	background-color: rgba(147, 112, 216, 1);
	transition: all 0.1s ease;
}

.header .sign-btn:hover {
	opacity: 0.75;
}

.header .sign-btn.border {
	border: 1px solid #fff;
	margin-left: 10px;
}

.sign-btns-mobile {
	display: none;
}

.mobile-sign-btn {
	padding: 5px;
}

.mobile-sign-btn:hover {
	opacity: 0.75;
}

.mobile-sign-btn i {
	font-size: 27px;
	color: #fff;
}

.mobile-menu {
	display: none;
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 60px;
	width: 100%;
	max-height: 0;
	background-color: #fff;
	transition: 0.3s ease;
	box-shadow: 1px 1px 1px rgba(34, 34, 34, 0.1);
}

.mobile-menu-list {
	padding: 10px 0;
	background-color: rgba(147, 112, 216, 0.9);
}

.mobile-menu-item {
	padding: 0 20px;
	text-align: right;
}

.mobile-menu-link {
	display: inline-block;
	padding: 20px 0;
	font-weight: 700;
	font-size: 14px;
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
