import { json } from '@sveltejs/kit';
import { fetchOneCourse } from '$lib/utilities/api/content/courses/fetchOneCourse';

export const GET = async ({ params }) => {
	const course = await fetchOneCourse(params.courseName);

	return json(course);
};
