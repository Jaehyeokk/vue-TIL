import { posts } from '@/apis/index';
import { AxiosResponse } from 'axios';

export interface PostsResponse {
	posts: PostInfo[];
}

export interface PostInfo {
	contents: string;
	createdAt: string;
	createdBy: string;
	title: string;
	updatedAt: string;
	__v: number;
	_id: string;
}

export interface PostForm {
	title: string;
	contents: string;
}

export type MyPostsResponse = Promise<AxiosResponse<PostsResponse>>;
export type MyPostResponse = Promise<AxiosResponse<PostInfo>>;

function fetchPost(id: string): MyPostResponse {
	return posts.get(`/${id}`);
}

function fetchPosts(): MyPostsResponse {
	return posts.get('/');
}

function createPost(data: PostForm): MyPostResponse {
	return posts.post('/', data);
}

function editPost(id: string, data: PostForm): MyPostResponse {
	return posts.put(`/${id}`, data);
}

function deletePost(id: string): MyPostResponse {
	return posts.delete(`/${id}`);
}

export { fetchPosts, fetchPost, createPost, editPost, deletePost };
