import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/quickstarts`);
		const quickstarts = await response.json();

		return {
			quickstarts
		};
	} catch (e) {
		throw error(404, 'The quickstart you are looking for does not exist');
	}
};
