import { posts } from './index.js';

// 학습노트 목록 조회
function fetchPosts() {
	return posts.get('/');
}

// 학습노트 조회
function fetchPost(id) {
	return posts.get(id);
}

// 학습노트 생성
function createPost(data) {
	return posts.post('/', data);
}

// 학습노트 수정
function editPost(id, data) {
	return posts.put(id, data);
}

// 학습노트 삭제
function deletePost(id) {
	return posts.delete(id);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
