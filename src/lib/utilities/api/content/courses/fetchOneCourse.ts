import type { Locales } from '$i18n/i18n-types';

export const fetchOneCourse = async (slug: string, locale: Locales) => {
	const overview = await import(`../../../../content/courses/${slug}/${locale}/overview.ts`);
	const allContents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableContents = Object.entries(allContents);

	const contents = {};

	await Promise.all(
		iterableContents.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			const parts = path.split('/');
			const thisContentLocale = parts[parts.length - 3];

			if (path.includes(slug) && locale === thisContentLocale) {
				const week = parts[parts.length - 2];

				if (!contents[week]) {
					contents[week] = [];
				}

				const slugPart1 = parts.slice(3, 6).join('/').replace('content', 'catalog');
				const slugPart2 = parts.slice(7, 9).join('/').replace('.md', '');
				const slug = `${thisContentLocale}/${slugPart1}/${slugPart2}`;

				contents[week].push({
					slug,
					metadata
				});
			}
		})
	);

	return { overview: overview.overview, contents };
};
