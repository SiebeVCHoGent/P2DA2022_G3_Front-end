import axiosRoot from 'axios';
import config from '../config.json';

export const axios = axiosRoot.create({
	baseURL: process.env.REACT_APP_BACKEND_BASE_URL || config.base_url,
});
export const axios2 = axiosRoot.create({
	baseURL: process.env.REACT_APP_BACKEND_BASE_URL || config.python_url,
});

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers['Authorization'] = `Bearer ${token}`;
		axios2.defaults.headers['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers['Authorization'];
		delete axios2.defaults.headers['Authorization'];
	}
}