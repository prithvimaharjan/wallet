import API from '../constants/api';
import axios from 'axios';

const Auth = {
	login(payload) {
		return new Promise((resolve, reject) => {
			console.log(payload);
			axios
				.post(`${API.SERVER_URL}/login_process`, payload)
				.then(res => resolve(res.data))
				.catch(e => reject(e.response));
		});
	}
};

export default Auth;
