<template>
	<div class="page main-page">
		<div class="container">
			<ul v-loading="loading" class="post-list">
				<li v-for="item in posts" :key="item.id" class="post-item">
					<h3 class="post-title">{{ item.title }}</h3>
					<p class="post-contents">{{ item.contents }}</p>
					<div class="post-btns">
						<p class="created">{{ item.createdAt | formatDate }}</p>
						<button class="edit-btn" @click="openEditPostDialog(item._id)">
							Edit
						</button>
						<button class="remove-btn" @click="handleDeletePost(item._id)">
							Remove
						</button>
					</div>
				</li>
			</ul>
			<button class="add-btn" @click="addPostDialog = true">Add</button>
		</div>
		<el-dialog
			v-loading="loading"
			title="Add Post"
			:visible.sync="addPostDialog"
			width="50%"
			:before-close="closePostDialog"
			class="post-dialog"
		>
			<div class="add-form-wrap">
				<form @submit.prevent="handleAddPost">
					<div class="input-wrap">
						<label for="input-title">Title</label>
						<input
							id="input-title"
							class="input-area"
							type="text"
							v-model="form_title"
						/>
					</div>
					<div class="input-wrap">
						<label for="input-contents">Contents</label>
						<textarea
							id="input-contents"
							class="input-area"
							type="text"
							v-model="form_contents"
						/>
					</div>
					<div class="form-btns-wrap">
						<button type="submit">Add</button>
						<button type="button" @click="closePostDialog">Cancel</button>
					</div>
				</form>
			</div>
		</el-dialog>
		<el-dialog
			v-loading="loading"
			title="Edit Post"
			:visible.sync="editPostDialog"
			width="50%"
			:before-close="closePostDialog"
			class="post-dialog"
		>
			<div class="add-form-wrap">
				<form @submit.prevent="handleEditPost">
					<div class="input-wrap">
						<label for="input-title">Title</label>
						<input
							id="input-title"
							class="input-area"
							type="text"
							v-model="form_title"
						/>
					</div>
					<div class="input-wrap">
						<label for="input-contents">Contents</label>
						<textarea
							id="input-contents"
							class="input-area"
							type="text"
							v-model="form_contents"
						/>
					</div>
					<div class="form-btns-wrap">
						<button type="submit">Edit</button>
						<button type="button" @click="closePostDialog">Cancel</button>
					</div>
				</form>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import {
	fetchPosts,
	fetchPost,
	createPost,
	editPost,
	deletePost,
} from '@/apis/posts.js';
export default {
	data() {
		return {
			loading: false,
			posts: null,
			addPostDialog: false,
			editPostDialog: false,
			edit_id: '',
			form_title: '',
			form_contents: '',
		};
	},
	mounted() {
		this.loadPost();
	},
	methods: {
		async loadPost() {
			try {
				this.loading = true;
				const { data } = await fetchPosts();
				this.posts = data.posts;
				this.loading = false;
				return data;
			} catch (err) {
				console.log(err);
			} finally {
				this.loading = false;
			}
		},
		closePostDialog() {
			this.addPostDialog = false;
			this.editPostDialog = false;
		},
		async handleAddPost() {
			try {
				this.loading = true;
				await createPost({
					title: this.form_title,
					contents: this.form_contents,
				});
				await this.loadPost();
				this.addPostDialog = false;
			} catch (err) {
				console.log(err);
			} finally {
				this.resetForm();
				this.closePostDialog();
				this.loading = false;
			}
		},
		async openEditPostDialog(id) {
			const { data } = await fetchPost(id);
			this.edit_id = data._id;
			this.form_title = data.title;
			this.form_contents = data.contents;
			this.editPostDialog = true;
		},
		async handleEditPost() {
			try {
				const id = this.edit_id;
				this.loading = true;
				await editPost(id, {
					title: this.form_title,
					contents: this.form_contents,
				});
				await this.loadPost();
			} catch (err) {
				console.log(err);
			} finally {
				this.resetForm();
				this.closePostDialog();
				this.loading = false;
			}
		},
		async handleDeletePost(id) {
			try {
				this.loading = true;
				await deletePost(id);
				await this.loadPost();
			} catch (err) {
				console.log(err);
			} finally {
				this.loading = false;
			}
		},
		resetForm() {
			this.edit_id = '';
			this.form_title = '';
			this.form_contents = '';
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

.post-item .created {
	margin-right: 10px;
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
	background-color: mediumpurple;
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
	background-color: mediumpurple;
	color: #fff;
	cursor: pointer;
}

/* form */
.post-dialog .input-wrap {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

.post-dialog .form-btns-wrap {
	display: flex;
	justify-content: flex-end;
}

.post-dialog .input-wrap .input-area {
	min-width: 180px;
}

.post-dialog .form-btns-wrap button {
	padding: 5px 15px;
	margin: 10px 0 0 10px;
	background-color: mediumpurple;
	color: #fff;
	border: none;
	border-radius: 4px;
}
</style>
