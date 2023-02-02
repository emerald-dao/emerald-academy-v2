import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch(`/api/content/cadenceByExample`);
	const content = await response.json();

	return {
		content
	};
};
