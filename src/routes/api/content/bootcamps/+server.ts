import { fetchOverviews } from '$lib/utilities/fetchOverviews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allCourses = await fetchOverviews('bootcamps');

	return json(allCourses);
};
