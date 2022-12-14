import {axios, axios2} from '.';

export const login = async (email, ww) => {
	const {
		data
	} = await axios2.post(`/login`, {
		email: email,
		password: ww
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
        naam: achternaam,
		email: email,
		password: ww
	}
	const {
		data
	} = await axios2.post(`/register`, body);
	return data;
};

export const searchUser = async (email) => {
	const body = {email}
	const {
		data
	} = await axios2.post(`/user/search`, body);
	return data;
}

export const updateRole = async (id, role) => {
	const {
		data
	} = await axios2.patch(`/user/${id}/role/${role}`);
	return data;
}