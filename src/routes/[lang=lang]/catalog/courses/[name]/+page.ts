import type { CourseContents, CourseOverview } from '$lib/types/content/course.interface';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/courses/${params.name}`);
		const course = (await response.json()) as CourseProps;

		return {
			course
		};
	} catch (e) {
		throw error(404, 'The course you are looking for does not exist');
	}
};

interface CourseProps {
	slug: string;
	overview: CourseOverview;
	contents: CourseContents;
}
