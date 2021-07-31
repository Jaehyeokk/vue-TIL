import axios from 'axios';

function registerUser(data) {
	return axios.post('http://localhost:3000/signup', data);
}

export { registerUser };
