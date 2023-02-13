import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}/templates`);
	const templates = await response.json();

	return {
		templates
	};
};
