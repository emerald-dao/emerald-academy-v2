import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/courses/${params.name}`);

		const course = await response.json();

		return course;
	} catch (e) {
		throw error(404, 'The course you are looking for does not exist');
	}
};
