import type { CourseOverview, CourseContents } from '$lib/types/content/course.interface';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/courses/${params.name}`);
		const course = (await response.json()) as CourseProps;

		return {
			course
		};
	} catch (e) {
		throw new Error();
	}
};

interface CourseProps {
	slug: string;
	overview: CourseOverview;
	contents: CourseContents;
}
