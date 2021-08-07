<template>
	<div>
		<form class="post-add-form" @submit.prevent="addPostItem()">
			<div>
				<label for="post-title">Title</label>
				<input id="post-title" v-model="post_title" type="text" />
			</div>
			<div>
				<label for="post-contents">Contents</label>
				<textarea id="post-contents" v-model="post_contents" type="text" />
				<p v-if="!isContentsVal" style="color: red">
					contents length must be less than 200
				</p>
			</div>
			<button type="submit">Create</button>
		</form>
	</div>
</template>

<script>
import { createPost } from '@/apis/index.js';
export default {
	data() {
		return {
			post_title: '',
			post_contents: '',
		};
	},
	computed: {
		isContentsVal() {
			return this.post_contents.length < 200;
		},
	},
	methods: {
		async addPostItem() {
			try {
				await createPost({
					title: this.post_title,
					contents: this.post_contents,
				});
				this.resetInput();
				this.$router.go(-1);
			} catch (error) {
				console.log(error.message);
			}
		},
		resetInput() {
			this.post_title = '';
			this.post_contents = '';
		},
	},
};
</script>

<style></style>
