<template>
	<div id="app">
		<AppHeader />
		<router-view />
		<AppFooter />
	</div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';

export default {
	components: {
		AppHeader,
		AppFooter,
	},
	mounted() {
		const html = document.querySelector('html');
		html.classList.add('vue-note');
	},
};
</script>
