import type { Locales } from '$i18n/i18n-types';
import type { CourseContents } from '$lib/types/content/course.interface';

export const fetchOneCourse = async (slug: string, locale: Locales) => {
	const overview = await import(`../../../../content/courses/${slug}/${locale}/overview.ts`);
	const allContents = import.meta.glob('/src/lib/content/courses/**/**/**/*.md');

	const iterableContents = Object.entries(allContents);

	console.log(iterableContents);

	const thisCourseContents = iterableContents.filter(([path]) => path.split('/')[5] === slug);
	const thisLangContents = thisCourseContents.filter(([path]) => path.split('/')[6] === locale);

	const contents: CourseContents = {};
	const chapters: string[] = [];

	await Promise.all(
		thisLangContents.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			const parts = path.split('/');
			const chapter = parts[parts.length - 2];

			if (!contents[chapter]) {
				chapters.push(chapter);

				contents[chapter] = {
					overview: {
						title: '',
						description: ''
					},
					contents: []
				};
			}

			const slugPart1 = parts.slice(3, 6).join('/').replace('content', 'catalog');
			const slugPart2 = parts.slice(7, 9).join('/').replace('.md', '');
			const slug = `${locale}/${slugPart1}/${slugPart2}`;

			contents[chapter].contents.push({
				slug,
				metadata
			});
		})
	);

	for (const chapter of chapters) {
		const chapterOverview = await import(
			`../../../../content/courses/${slug}/${locale}/${chapter}/overview.ts`
		);

		contents[chapter].overview = chapterOverview.overview;
	}

	console.log(slug);

	return { overview: overview.overview, contents, slug };
};
