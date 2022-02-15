<template>
	<div id="app">
		<AppHeader />
		<router-view />
		<AppFooter />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';

export default Vue.extend({
	components: {
		AppHeader,
		AppFooter,
	},
});
</script>
