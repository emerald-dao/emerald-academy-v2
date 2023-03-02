import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

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
		throw error(404, 'The chapter or lesson you are looking for does not exist');
	}
};
