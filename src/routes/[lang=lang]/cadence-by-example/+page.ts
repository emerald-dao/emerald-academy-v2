import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/cadenceByExample`);
		const content = await response.json();

		return {
			content
		};
	} catch (e) {
		throw error(404, 'The cadence you are looking for does not exist');
	}
};
