import { posts } from '@/apis/index.js';

function fetchPosts() {
	return posts.get();
}

export { fetchPosts };
