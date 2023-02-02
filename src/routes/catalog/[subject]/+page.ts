import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`/api/content`);
	const content = await response.json();

	return {
		content
	};
};
