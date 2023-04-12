import type { CadenceByExampleOverview } from '$lib/types/content/cadence-by-example.interface';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/cadenceByExample`);
		const content = (await response.json()) as CadenceByExampleOverview[];

		content.sort((a, b) => {
			const prevNumber = Number(a.path.split('/').pop().split('-')[0]);
			const nextNumber = Number(b.path.split('/').pop().split('-')[0]);
			return prevNumber - nextNumber;
		});

		return {
			content
		};
	} catch (e) {
		throw error(404, 'The cadence you are looking for does not exist');
	}
};
