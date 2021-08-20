import { posts } from '@/apis/index.js';

function fetchPosts() {
	return posts.get('/');
}

function createPost(data) {
	return posts.post('/', data);
}

export { fetchPosts, createPost };
