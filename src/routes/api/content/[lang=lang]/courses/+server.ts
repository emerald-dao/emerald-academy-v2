import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { fetchAllCourses } from '$lib/utilities/api/content/courses/fetchAllCourses';

export const GET: RequestHandler = async ({ params }) => {
	const allCourses = await fetchAllCourses(params.lang);

	return json(allCourses);
};
