<template>
	<div>
		<form class="post-add-form" @submit.prevent="editPostItem()">
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
			<button type="submit">Edit</button>
		</form>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/apis/posts';
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
	created() {
		this.fetchPostItem();
	},
	methods: {
		async fetchPostItem() {
			const id = this.$route.params.id;
			const { data } = await fetchPost(id);
			this.post_title = data.title;
			this.post_contents = data.contents;
		},

		async editPostItem() {
			const id = this.$route.params.id;
			await editPost(id, {
				title: this.post_title,
				contents: this.post_contents,
			});
			this.$router.push('/main');
		},
		resetInput() {
			this.post_title = '';
			this.post_contents = '';
		},
	},
};
</script>

<style></style>
