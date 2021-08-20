import { posts } from '@/apis/index.js';

function fetchPosts() {
	return posts.get('/');
}

function createPost(data) {
	return posts.post('/', data);
}

function deletePost(id) {
	return posts.delete(`/${id}`);
}

export { fetchPosts, createPost, deletePost };
