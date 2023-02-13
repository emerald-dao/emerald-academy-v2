import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}/cadenceByExample`);
	const content = await response.json();

	return {
		content
	};
};
