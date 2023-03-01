import type { RequestHandler } from './$types';
import { fetchAllCourses } from '$lib/utilities/api/content/courses/fetchAllCourses';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const allCourses = await fetchAllCourses(params.lang);

		return json(allCourses);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
