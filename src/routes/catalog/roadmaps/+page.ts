import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch(`/api/content/roadmaps`);
		const roadmap = await response.json();

		return {
			roadmap
		};
	} catch (e) {
		throw new Error();
	}
};
