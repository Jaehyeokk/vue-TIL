<template>
	<div class="page signup-page">
		<h2 class="sign-page-title">Create an account</h2>
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
	font-size: 21px;
	font-weight: 400;
	color: #333;
	text-align: center;
}

.container {
	width: 320px;
	padding: 20px;
	margin: 20px auto 0 auto;
	border: 1px solid #ddd;
	border-radius: 5px;
	background-color: #fafafa;
	box-sizing: border-box;
}
</style>
