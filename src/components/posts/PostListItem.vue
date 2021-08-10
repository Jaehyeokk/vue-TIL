<template>
	<div>
		<p>{{ post.title }}</p>
		<p>{{ post.contents }}</p>
		<p>{{ post.createdAt | formatDate }}</p>
		<button @click="editPostIdtem()">수정</button>
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
	// 지역 filter
	// filters: {
	// 	formatData(value) {
	// 		return new Date(value);
	// 	},
	// },
	methods: {
		async deletePostItem() {
			await deletePost(this.post._id);
			this.$emit('deletedPost');
		},
		editPostIdtem() {
			const id = this.post._id;
			this.$router.push({ path: `/post/${id}` });
		},
	},
};
</script>

<style></style>
