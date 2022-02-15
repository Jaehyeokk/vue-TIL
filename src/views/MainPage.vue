<template>
	<div class="page main-page">
		<div class="container">
			<ul v-loading="loading" class="post-list">
				<li v-for="item in posts" :key="item.id" class="post-item">
					<h3 class="post-title">{{ item.title }}</h3>
					<p class="post-contents">{{ item.contents }}</p>
					<div class="post-bottom-wrap">
						<p class="created">{{ item.createdAt | formatDate }}</p>
						<div class="post-btns">
							<button class="edit-btn" @click="openEditPostDialog(item._id)">
								<i class="fas fa-edit"></i>
							</button>
							<button class="remove-btn" @click="handleDeletePost(item._id)">
								<i class="fas fa-trash-alt"></i>
							</button>
						</div>
					</div>
				</li>
			</ul>
			<button class="add-btn" @click="addPostDialog = true">
				<i class="fas fa-plus"></i>
			</button>
		</div>
		<el-dialog
			v-loading="loading"
			title="Add Post"
			:visible.sync="addPostDialog"
			:before-close="closePostDialog"
			:lock-scroll="false"
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
						<button type="submit"><i class="fas fa-plus"></i></button>
					</div>
				</form>
			</div>
		</el-dialog>
		<el-dialog
			v-loading="loading"
			title="Edit Post"
			:visible.sync="editPostDialog"
			:before-close="closePostDialog"
			:lock-scroll="false"
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
						<button type="submit"><i class="fas fa-edit"></i></button>
					</div>
				</form>
			</div>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
	fetchPosts,
	fetchPost,
	createPost,
	editPost,
	deletePost,
	PostInfo,
} from '@/apis/posts';

export default Vue.extend({
	data() {
		return {
			loading: false,
			posts: [] as PostInfo[],
			addPostDialog: false,
			editPostDialog: false,
			edit_id: '',
			form_title: '',
			form_contents: '',
		};
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
			this.resetForm();
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
		async openEditPostDialog(id: string) {
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
		async handleDeletePost(id: string) {
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

	mounted() {
		this.loadPost();
	},
});
</script>

<style scoped>
.main-page {
	position: relative;
	min-height: calc(100vh - 24rem);
}

.container {
	padding: 0 2rem;
}

.post-list {
	display: flex;
	flex-wrap: wrap;
}

.post-item {
	overflow-y: auto;
	position: relative;
	width: 32rem;
	height: 32rem;
	padding: 2rem 2rem 4rem;
	margin: 0 3rem 3rem 0;
	border: 0.1rem solid #ccc;
	border-radius: 0.5rem;
	color: #222;
	background-color: #fff;
	box-sizing: border-box;
}

.post-title {
	padding-bottom: 1rem;
	font-weight: 700;
	font-size: 1.8rem;
	border-bottom: 0.1rem solid #eee;
	word-break: break-all;
}

.post-contents {
	margin-top: 1rem;
	font-size: 1.4rem;
	line-height: 1.5;
	word-break: break-all;
}

.post-bottom-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 4rem;
	padding: 0 2rem;
	box-sizing: border-box;
}

.post-item .created {
	margin-right: 1rem;
	font-size: 1.4rem;
	color: #999;
}

.post-item .post-btns button {
	width: 5rem;
	padding: 0.5rem 1.5rem;
	border-radius: 0.4rem;
	border: none;
	outline: none;
	background-color: mediumpurple;
	font-size: 1.6rem;
	color: #fff;
	cursor: pointer;
	transition: all 0.1s ease;
}

.post-item .post-btns button:hover {
	opacity: 0.8;
}

.post-item .post-btns .edit-btn {
	margin-right: 0.5rem;
}

.add-btn {
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	width: 6rem;
	height: 6rem;
	border: none;
	outline: none;
	padding: 0.5rem 1.5rem;
	border-radius: 50%;
	background-color: mediumpurple;
	font-size: 2.4rem;
	color: #fff;
	cursor: pointer;
}

.add-btn:hover {
	border: 0.1rem solid rgb(134, 94, 214);
	color: #f5f5f5;
}

/* form */
.post-dialog .input-wrap {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 1rem;
}

.post-dialog .input-wrap label {
	flex: 1;
}
.post-dialog .input-wrap input,
.post-dialog .input-wrap textarea {
	width: calc(100% - 10rem);
	padding: 1rem 1.6rem;
	border: 0.1rem solid #ccc;
	border-radius: 0.4rem;
	box-sizing: border-box;
}

.post-dialog .input-wrap textarea {
	max-width: 46rem;
	height: 15rem;
	max-height: 15rem;
}

.post-dialog .input-wrap input,
.post-dialog .input-wrap textarea:focus {
	outline: 0.1rem solid rgba(147, 112, 216, 0.5);
}

.post-dialog .form-btns-wrap {
	display: flex;
	justify-content: flex-end;
}

.post-dialog .input-wrap .input-area {
	min-width: 18rem;
}

.post-dialog .form-btns-wrap button {
	width: 5rem;
	padding: 0.5rem 1.5rem;
	margin: 1rem 0 0 1rem;
	font-size: 1.6rem;
	border: none;
	border-radius: 0.4rem;
	color: #fff;
	background-color: mediumpurple;
}

@media screen and (max-width: 1100px) {
	.post-list {
		justify-content: space-around;
	}

	.post-item {
		margin-right: 0;
	}
}
</style>
