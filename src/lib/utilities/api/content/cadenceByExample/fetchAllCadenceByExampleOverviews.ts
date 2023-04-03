import type { Locales } from '$i18n/i18n-types';
import type {
	CadenceByExampleOverview,
	CadenceByExampleMetadata
} from '$lib/types/content/cadence-by-example.interface';

export const fetchAllCadenceByExampleOverviews = async (requestLocale: Locales) => {
	const allCandenceByExampleFiles = import.meta.glob('/src/lib/content/cadenceByExample/**/*.md');
	const iterableFiles = Object.entries(allCandenceByExampleFiles);

	const allCadenceByExampleMetadata = async () => {
		const exampleArray: CadenceByExampleOverview[] = [];

		await Promise.all(
			iterableFiles.map(async ([path, resolver]) => {
				const { metadata } = await (resolver() as Promise<{ metadata: CadenceByExampleMetadata }>);

				const slug = path.slice(9, -3);
				const thisExampleLang = path.split('/')[5];

				if (requestLocale === thisExampleLang) {
					exampleArray.push({
						meta: metadata,
						path: slug
					});
				}
			})
		);

		return exampleArray;
	};

	const examples = await allCadenceByExampleMetadata();

	return examples;
};
