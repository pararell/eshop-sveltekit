import { accessTokenKey, currencyLang, languages } from '$lib/constants';
import { get, post } from '$lib/api';
import { dictionary } from 'svelte-i18n';


import { BehaviorSubject } from 'rxjs';
import { browser } from '$app/env';


export const loading = new BehaviorSubject(false);
export const user = new BehaviorSubject(null);
export const lang = new BehaviorSubject(languages[0]);
export const currency = new BehaviorSubject(currencyLang);


export const fetchUser = async () => {
	try {
		const userAuth = await get('api/auth');
		user.next(userAuth);
	} catch (e) {}
};

export const fetchTranslations = async (lang) => {
	try {
		const translations = await get('api/translations?lang=' + lang);
		dictionary.set({
			[lang]: translations.keys
		});
	} catch (e) {}
};

export const signIn = async (request) => {
	try {
		const userSign = await post('api/auth/signin', request);
		user.next(userSign);

		console.log(user, browser, 'browser');

		if (userSign && userSign.accessToken && browser) {
			localStorage.setItem(accessTokenKey, userSign.accessToken);
		}
	} catch (e) {}
};
