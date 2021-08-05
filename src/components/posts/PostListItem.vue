<template>
	<div>
		<p>{{ post.title }}</p>
		<p>{{ post.contents }}</p>
		<p>{{ post.createdAt }}</p>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			require: true,
		},
	},
};
</script>

<style></style>
