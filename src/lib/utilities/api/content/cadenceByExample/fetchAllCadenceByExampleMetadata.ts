import type { Locales } from '$i18n/i18n-types';

export const fetchAllCadenceByExampleMetadata = async (requestLocale: Locales) => {
	const allCandenceByExampleFiles = import.meta.glob('/src/lib/content/cadenceByExample/**/*.md');
	const iterableFiles = Object.entries(allCandenceByExampleFiles);

	const localeData = [];
	const englishData = [];

	const allCadenceByExampleMetadata = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			const slug = path.slice(9, -3);
			const thisExampleLang = path.split('/')[5];

			if (requestLocale === thisExampleLang && requestLocale != 'en') {
				localeData.push({
					meta: metadata,
					path: slug
				});
			}

			if (thisExampleLang === 'en') {
				englishData.push({
					meta: metadata,
					path: slug
				});
			}
		})
	).then(() => {
		if (localeData.length > 0) {
			return localeData;
		} else {
			return englishData;
		}
	});

	return allCadenceByExampleMetadata;
};
