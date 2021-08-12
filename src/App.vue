<template>
	<div id="app">
		<AppHeader />
		<router-view />
	</div>
</template>
<script>
import AppHeader from '@/components//common/AppHeader.vue';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';

export default {
	components: {
		AppHeader,
	},
	mounted() {
		const html = document.querySelector('html');
		html.classList.add('vue-note');
	},
};
</script>
