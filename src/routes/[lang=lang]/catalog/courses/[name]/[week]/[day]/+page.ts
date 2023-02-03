import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const courses = await import(
			`../../../../../../../lib/content/courses/${params.name}/${params.lang}/${params.week}/${params.day}.md`
		);

		const { title, day } = courses.metadata;
		const content = courses.default;

		return {
			content,
			title,
			day
		};
	} catch (e) {
		throw new Error(`You missed it`);
	}
};
