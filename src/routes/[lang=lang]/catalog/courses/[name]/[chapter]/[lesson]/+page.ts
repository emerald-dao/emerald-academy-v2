import type { CourseContents, CourseOverview } from '$lib/types/content/course.interface';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const courses = await import(
			`../../../../../../../lib/content/courses/${params.name}/${params.lang}/${params.chapter}/${params.lesson}.md`
		);

		const {
			title,
			lesson
		}: {
			title: string;
			lesson: number;
		} = courses.metadata;
		const content = courses.default as ConstructorOfATypedSvelteComponent;

		return {
			content,
			title,
			lesson
		};
	} catch (e) {
		throw error(404, 'The chapter or lesson you are looking for does not exist');
	}
};
