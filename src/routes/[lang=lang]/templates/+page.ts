import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/templates`);
		const templates = await response.json();

		return {
			templates
		};
	} catch (e) {
		throw error(404, 'The template you are looking for does not exist');
	}
};
