import { fetchOverviews } from '$lib/utilities/api/fetchOverviews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allCourses = await fetchOverviews('courses');

	return json(allCourses);
};
