import { error } from '@sveltejs/kit';
import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';

export const load = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../../lib/content/bootcamps/${params.name}/${params.lang}/overview.ts`
		);

		return {
			overview: overviewFile.overview as BootcampOverview
		};
	} catch (e) {
		throw error(404, 'The bootcamp you are looking for does not exist');
	}
};
