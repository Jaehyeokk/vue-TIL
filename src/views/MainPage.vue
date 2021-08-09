<template>
	<div class="main-page">
		<div class="container">
			<LoadingSpinner v-if="loading"></LoadingSpinner>
			<template v-else>
				<PostListItem
					v-for="post in posts"
					:key="post._id"
					:post="post"
					@deletedPost="loadPosts"
				></PostListItem>
				<router-link to="/add">Add</router-link>
			</template>
		</div>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/apis/posts.js';
import { mapState } from 'vuex';
export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data() {
		return {
			posts: [],
			loading: false,
		};
	},
	created() {
		this.loading = true;
		this.loadPosts().then(() => (this.loading = false));
	},
	computed: {
		...mapState(['username']),
	},
	methods: {
		async loadPosts() {
			try {
				const { data } = await fetchPosts();
				this.posts = data.posts;
			} catch (error) {
				console.log(error.message);
			}
		},
	},
};
</script>

<style></style>
