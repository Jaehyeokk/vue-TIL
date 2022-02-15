<template>
	<div class="page signup-page">
		<h2 class="sign-page-title">Create an account</h2>
		<div class="container">
			<SignForm></SignForm>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SignForm from '@/components/form/SignForm.vue';

export default Vue.extend({
	components: {
		SignForm,
	},
});
</script>

<style scoped>
.sign-page-title {
	font-size: 2.1rem;
	font-weight: 400;
	color: #333;
	text-align: center;
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
