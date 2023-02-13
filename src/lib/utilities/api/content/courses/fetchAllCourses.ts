import type { Locales } from '$i18n/i18n-types';

export const fetchAllCourses = async (locale: Locales) => {
	const overviews = import.meta.glob('/src/lib/content/courses/**/**/*.ts');
	const contents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableOverviews = Object.entries(overviews);
	const iterableContents = Object.entries(contents);

	const allCourses = await Promise.all(
		iterableOverviews.map(async ([path, resolver]) => {
			const thisCourseLang = path.split('/')[6];

			if (thisCourseLang != locale) {
				return;
			}

			const { overview } = await resolver();

			const contents = {};

			await Promise.all(
				iterableContents.map(async ([path, resolver]) => {
					const { metadata } = await resolver();

					if (path.includes(overview.slug)) {
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

			return {
				overview,
				contents
			};
		})
	);

	return allCourses;
};
