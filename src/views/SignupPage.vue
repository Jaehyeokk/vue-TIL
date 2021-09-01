<template>
	<div class="page signup-page">
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
.container {
	width: 360px;
	padding: 20px;
	margin: 60px auto 0 auto;
	border-radius: 20px;
	background-color: #fff;
	box-sizing: border-box;
}
</style>
