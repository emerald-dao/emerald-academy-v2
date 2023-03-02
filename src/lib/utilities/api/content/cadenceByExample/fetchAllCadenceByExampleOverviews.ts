import type { Locales } from '$i18n/i18n-types';
import type {
	CadenceByExampleOverview,
	CadenceByExampleMetadata
} from '$lib/types/content/cadence-by-example.interface';

export const fetchAllCadenceByExampleOverviews = async (requestLocale: Locales) => {
	const allCandenceByExampleFiles = import.meta.glob('/src/lib/content/cadenceByExample/**/*.md');
	const iterableFiles = Object.entries(allCandenceByExampleFiles);

	// We get both, the locale data and the english data
	/// If the locale data is empty, we return the english data
	const localeData: CadenceByExampleOverview[] = [];
	const englishData: CadenceByExampleOverview[] = [];

	const allCadenceByExampleMetadata = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { metadata } = await (resolver() as Promise<{ metadata: CadenceByExampleMetadata }>);

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
