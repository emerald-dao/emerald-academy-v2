import type { CadenceByExampleOverview } from '$lib/types/content/cadence-by-example.interface';

export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/content/${params.lang}/cadenceByExample`);
	const content = (await response.json()) as CadenceByExampleOverview[];

	return {
		content
	};
};
