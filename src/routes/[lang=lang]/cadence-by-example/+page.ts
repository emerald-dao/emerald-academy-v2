import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}/cadenceByExample`);
	const content = await response.json();

	return {
		content
	};
};
