import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { fetchOneCourse } from '$lib/utilities/api/content/courses/fetchOneCourse';

export const GET: RequestHandler = async ({ params }) => {
	const course = await fetchOneCourse(params.courseName, params.lang);

	return json(course);
};
