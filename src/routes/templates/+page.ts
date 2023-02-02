import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`/api/content/templates`);
	const templates = await response.json();

	return {
		templates
	};
};
