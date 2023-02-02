import { json } from '@sveltejs/kit';
import { fetchAllCourses } from '$lib/utilities/api/content/courses/fetchAllCourses';

export const GET = async () => {
	const allCourses = await fetchAllCourses();

	return json(allCourses);
};
