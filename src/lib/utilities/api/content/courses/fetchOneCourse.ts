import type { Locales } from '$i18n/i18n-types';

export const fetchOneCourse = async (slug: string, locale: Locales) => {
	const overview = await import(`../../../../content/courses/${slug}/${locale}/overview.ts`);
	const allContents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableContents = Object.entries(allContents);

	const contents = {};

	await Promise.all(
		iterableContents.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			if (path.includes(slug)) {
				const parts = path.split('/');
				const week = parts[parts.length - 2];

				if (!contents[week]) {
					contents[week] = [];
				}

				const slug = parts.slice(3, 8).join('/').replace('content', 'catalog');

				contents[week].push({
					slug,
					metadata
				});
			}
		})
	);

	return { overview: overview.overview, contents };
};
