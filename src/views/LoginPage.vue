<template>
	<div class="page login-page">
		<h2 class="sign-page-title">Sign in to Note</h2>
		<div class="container">
			<SignForm></SignForm>
		</div>
	</div>
</template>

<script>
import SignForm from '@/components/form/SignForm.vue';
export default {
	components: {
		SignForm,
	},
};
</script>

<style scoped>
.sign-page-title {
	font-size: 2.1rem;
	font-weight: 400;
	text-align: center;
	color: #333;
}
.container {
	width: 32rem;
	padding: 2rem;
	margin: 2rem auto 0 auto;
	border: 0.1rem solid #ddd;
	border-radius: 0.5rem;
	background-color: #fafafa;
	box-sizing: border-box;
}
</style>
