<template>
	<div>
		<p>{{ post.title }}</p>
		<p>{{ post.contents }}</p>
		<p>{{ post.createdAt }}</p>
		<button @click="deletePostItem()">삭제</button>
	</div>
</template>

<script>
import { deletePost } from '@/apis/posts';

export default {
	props: {
		post: {
			type: Object,
			require: true,
		},
	},
	methods: {
		async deletePostItem() {
			await deletePost(this.post._id);
			this.$emit('deletedPost');
		},
	},
};
</script>

<style></style>
