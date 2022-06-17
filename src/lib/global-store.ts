import { browser } from '$app/env';
import { writable } from 'svelte/store';

function createDarkMode() {
	const { subscribe, set } = writable<boolean>(false);

	if (browser) {
		const localStorageDarkMode = localStorage.getItem('darkMode');
		if (localStorageDarkMode) {
			set(localStorageDarkMode == 'true');
		} else {
			set(window.matchMedia('(prefers-color-scheme: dark)').matches);
		}
	}

	return {
		subscribe,
		set: (value: boolean) => {
			set(value);
			if (browser) {
				localStorage.setItem('darkMode', value.toString());
			}
		}
	};
}

export const darkMode = createDarkMode();
