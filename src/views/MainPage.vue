<template>
	<div>mainpage</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState(['loginUser']),
	},
};
</script>

<style></style>
