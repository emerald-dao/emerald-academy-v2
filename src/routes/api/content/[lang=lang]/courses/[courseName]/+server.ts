import type { RequestHandler } from './$types';
import { fetchOneCourse } from '$lib/utilities/api/content/courses/fetchOneCourse';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const course = await fetchOneCourse(params.courseName, params.lang);

		return json(course);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
