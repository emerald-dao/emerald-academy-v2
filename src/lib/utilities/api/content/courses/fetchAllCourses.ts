import type { Locales } from '$i18n/i18n-types';

export const fetchAllCourses = async (locale: Locales) => {
	const overviews = import.meta.glob('/src/lib/content/courses/**/**/*.ts');
	const contents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableOverviews = Object.entries(overviews);
	const iterableContents = Object.entries(contents);

	const thisLangOverviews = iterableOverviews.filter(([path]) => {
		return path.split('/')[6] == locale;
	});

	const thisLangContents = iterableContents.filter(([path]) => {
		return path.split('/')[6] == locale;
	});

	const allCourses = await Promise.all(
		thisLangOverviews.map(async ([path, resolver]) => {
			const { overview } = await resolver();

			const thisCourseContent = thisLangContents.filter(([path]) => {
				return path.includes(overview.slug);
			});

			const contents = {};

			await Promise.all(
				thisCourseContent.map(async ([path, resolver]) => {
					const { metadata } = await resolver();

					const parts = path.split('/');
					const chapter = parts[parts.length - 2];

					if (!contents[chapter]) {
						contents[chapter] = [];
					}

					const slug = parts.slice(3, 9).join('/').replace('content', 'catalog').replace('.md', '');

					contents[chapter].push({
						slug,
						metadata
					});
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
