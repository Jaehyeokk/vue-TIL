<template>
	<div class="page main-page">
		<div class="container">
			<ul class="post-list">
				<li v-for="item in posts" :key="item.id" class="post-item">
					<h3 class="post-title">{{ item.title }}</h3>
					<p class="post-contents">{{ item.contents }}</p>
					<div class="post-btns">
						<p class="created">{{ item.createdAt }}</p>
						<button class="edit-btn">Edit</button>
						<button class="remove-btn">Remove</button>
					</div>
				</li>
			</ul>
			<button class="add-btn">Add</button>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/apis/posts.js';
export default {
	data() {
		return {
			posts: null,
		};
	},
	mounted() {
		this.loadPost();
	},
	methods: {
		async loadPost() {
			const { data } = await fetchPosts();
			this.posts = data.posts;
		},
	},
};
</script>

<style scoped>
.main-page {
	position: relative;
	min-height: calc(100vh - 240px);
}

.container {
	padding: 0 20px;
}

.post-list {
	display: flex;
	flex-wrap: wrap;
}

.post-item {
	overflow-y: auto;
	position: relative;
	width: 320px;
	height: 320px;
	padding: 20px 20px 40px;
	margin: 0 30px 30px 0;
	border-radius: 10px;
	background-color: #fff;
	box-sizing: border-box;
}

.post-title {
	font-weight: 700;
	font-size: 24px;
}

.post-contents {
	margin-top: 20px;
	font-size: 18px;
	line-height: 1.5;
}

.post-item .post-btns {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 40px;
	padding: 0 20px;
	box-sizing: border-box;
}

.post-item .post-btns button {
	border: none;
	outline: none;
	padding: 5px 15px;
	border-radius: 4px;
	background-color: #093687;
	color: #fff;
	cursor: pointer;
}

.post-item .post-btns .edit-btn {
	margin-right: 5px;
}

.add-btn {
	position: absolute;
	right: 10px;
	bottom: -50px;
	width: 60px;
	height: 60px;
	border: none;
	outline: none;
	padding: 5px 15px;
	border-radius: 4px;
	background-color: #093687;
	color: #fff;
	cursor: pointer;
}
</style>
