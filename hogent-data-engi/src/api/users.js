import {axios} from '.';

export const login = async (email, ww) => {
	const {
		data
	} = await axios.post(`/account/login`, {
		email,
		ww
	});
	return data;
};

export const register = async ({
	voornaam,
    achternaam, 
	email,
	ww,
}) => {
	const body = {
		voornaam: voornaam,
        achternaam: achternaam,
		email: email,
		ww: ww
	}
	const {
		data
	} = await axios.post(`/account/register`, body);
	return data;
};