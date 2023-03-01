import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const roadmapFile = await import(
			`../../../../../lib/content/roadmaps/${params.name}/${params.lang}/overview.ts`
		);

		return {
			roadmap: roadmapFile.overview
		};
	} catch (e) {
		throw error(404, 'The roadmap you are looking for does not exist');
	}
};
