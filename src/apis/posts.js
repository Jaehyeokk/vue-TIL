import { posts } from '@/apis/index.js';

function fetchPost(id) {
	return posts.get(`/${id}`);
}

function fetchPosts() {
	return posts.get('/');
}

function createPost(data) {
	return posts.post('/', data);
}

function editPost(id, data) {
	return posts.put(`/${id}`, data);
}

function deletePost(id) {
	return posts.delete(`/${id}`);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
