import { loadLocaleAsync } from '$i18n/i18n-util.async';
import LL, { setLocale } from '$i18n/i18n-svelte';
import { get } from 'svelte/store';

export const load = async ({ data: { locale } }) => {
	// load dictionary into memory
	await loadLocaleAsync(locale);

	// get the translation functions value from the store
	const $LL = get(LL);
	console.info($LL.log({ fileName: '+layout.ts' }));

	// pass locale to the "rendering context"
	return { locale };
};
