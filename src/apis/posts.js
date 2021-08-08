import { posts } from './index.js';

// 학습노트 조회
function fetchPosts() {
	return posts.get('/posts');
}

// 학습노트 생성
function createPost(data) {
	return posts.post('/posts', data);
}

export { fetchPosts, createPost };
