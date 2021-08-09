import { posts } from './index.js';

// 학습노트 조회
function fetchPosts() {
	return posts.get('/');
}

// 학습노트 생성
function createPost(data) {
	return posts.post('/', data);
}

// 학습노트 삭제
function deletePost(id) {
	return posts.delete(id);
}

export { fetchPosts, createPost, deletePost };
