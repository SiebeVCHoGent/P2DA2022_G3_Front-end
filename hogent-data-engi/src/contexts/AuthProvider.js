import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import * as usersApi from '../api/users'
import * as api from '../api/index'
import config from '../config.json'
import { Buffer } from 'buffer'


const JWT_TOKEN_KEY = config.token_key;
export const AuthContext = createContext()

export const AuthProvider = ({
    children,
}) => {

    const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
	const [user, setUser] = useState(null);

	const setSession = useCallback((token) => {
		const { exp } = parseJwt(token);
		const expiry = parseExp(exp);
		const stillValid = expiry >= new Date();

		const user = parseJwt(token);
		delete user.exp;
		setUser(user);

		if (stillValid) {
			localStorage.setItem(JWT_TOKEN_KEY, token);
		} else {
			localStorage.removeItem(JWT_TOKEN_KEY);
			token = null;
		}

		api.setAuthToken(token);
		setToken(token);
		setReady(stillValid);
	}, [])

    const login = useCallback(async ({email, ww}) => {
		try {
			setLoading(true);
			setError('');
			const { token } = await usersApi.login(email, ww);
			setSession(token);
			const user = parseJwt(token);
			delete user.exp;
			setUser(user);
			return true;
		} catch (error) {
			console.error(error);
			setError(error?.response?.data?.message);
			return false;
		} finally {
			setLoading(false);
		}
	}, [setSession]);

    const logout = useCallback(() => {
		setSession(null);
		setUser(null);
	}, [setSession]);

	const register = useCallback(async (voornaam, achternaam, email, ww) => {
		try {
			setLoading(true);
			setError('');
			const { token } = await usersApi.register(voornaam, achternaam, email, ww);
			setSession(token);
			const user = parseJwt(token);
			delete user.exp;
			setUser(user);
			return true;
		} catch (error) {
			console.error(error);
			setError('Probleem bij het registreren probeer het later opnieuw.');
			return false;
		} finally {
			setLoading(false);
		}
	}, [setSession]);

	const [ready, setReady] = useState(false);

    useEffect(() => {
		setSession(token)
		setReady(Boolean(token));
		api.setAuthToken(token);

		if (token) {
			localStorage.setItem(JWT_TOKEN_KEY, token);
		} else {
			localStorage.removeItem(JWT_TOKEN_KEY);
		}
	}, [token, setSession]);


	function parseJwt(token) {
		if (!token) return {};
		const base64Url = token.split('.')[1];
		const payload = Buffer.from(base64Url, 'base64');
		const jsonPayload = payload.toString('ascii');
		return JSON.parse(jsonPayload);
	}

	function parseExp(exp) {
		if (!exp) return null;
		if (typeof exp !== 'number') exp = Number(exp);
		if (isNaN(exp)) return null;
		return new Date(exp * 1000);
	}

	const isRole = useMemo(() => (role) => {
		if (token)
			return parseJwt(token).roles.includes(role);
		return false;
	}, [token])


	const [foundUser, setFoundUser] = useState(null);

	const searchUser = useCallback(async (email) => {
		try {
			setLoading(true);
			setError('');

			const user = await usersApi.searchUser(email);
			setFoundUser(user);

			if (user == null){
				console.log("NOT FOUND")
				setError('Geen gebruiker gevonden met dit email adres.');
				return false;
			}

			return true
		} catch (error) {
			console.error(error);
			setError('Probleem bij het zoeken naar de gebruiker.');
			return false;
		} finally {
			setLoading(false);
		}
	}, []);

	const updateRole = useCallback(async (id, role) => {
		try {
			setLoading(true);
			setError('');
			
			const user = await usersApi.updateRole(id, role);
			setFoundUser(user);

			return true
		} catch (error) {
			console.error(error);
			setError('Probleem bij het updaten van de gebruiker.');	
			return false;
		} finally {
			setLoading(false);
		}
	}, []);



    const value = useMemo(() => ({
        login,
        logout,
		register,
		token,
		user,
		error,
		loading,
		ready,
		isAuthenticated: Boolean(token),
		isAdmin: isRole('admin'),
		isRole,
		searchUser,
		updateRole,
		foundUser
	}), [token, user, error, loading, ready, foundUser, login, logout, register, isRole, searchUser, updateRole]);

    return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}