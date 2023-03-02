import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { fetchOneCourse } from '$lib/utilities/api/content/courses/fetchOneCourse';
import type { Locales } from '$i18n/i18n-types';

export const GET: RequestHandler = async ({ params }) => {
	const course = await fetchOneCourse(params.courseName, params.lang as Locales);

	return json(course);
};
