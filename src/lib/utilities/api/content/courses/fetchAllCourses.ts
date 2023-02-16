import type { Locales } from '$i18n/i18n-types';

export const fetchAllCourses = async (locale: Locales) => {
	console.log('fetchAllCourses');
	console.log('locale', locale);

	const overviews = import.meta.glob('/src/lib/content/courses/**/**/*.ts');
	const contents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableOverviews = Object.entries(overviews);
	const iterableContents = Object.entries(contents);

	console.log('o', iterableOverviews);
	console.log('a', iterableContents);

	const allCourses = await Promise.all(
		iterableOverviews.map(async ([path, resolver]) => {
			const thisCourseLang = path.split('/')[6];

			console.log('thisCourseLang', thisCourseLang);

			if (thisCourseLang != locale) {
				console.log('jueeeera');

				return;
			}

			const { overview } = await resolver();

			const contents = {};

			await Promise.all(
				iterableContents.map(async ([path, resolver]) => {
					const { metadata } = await resolver();

					// console.log('path', path);
					// console.log('overview.slug', overview.slug);

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

			console.log('contentsssssss', contents);
			console.log('overviewwwwww', overview);

			return {
				overview,
				contents
			};
		})
	);

	return allCourses;
};
