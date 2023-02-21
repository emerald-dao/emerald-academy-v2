import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const courses = await import(
			`../../../../../../../lib/content/courses/${params.name}/${params.lang}/${params.chapter}/${params.lesson}.md`
		);

		const { title, lesson } = courses.metadata;
		const content = courses.default;

		return {
			content,
			title,
			lesson
		};
	} catch (e) {
		throw new Error(`You missed it`);
	}
};
