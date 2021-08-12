<template>
	<header class="header">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vue-Note</router-link>
			</h1>
			<div class="sign-btns-wrap">
				<router-link to="/login">Login</router-link>
				<router-link to="/signup">Sign up</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	height: 60px;
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
