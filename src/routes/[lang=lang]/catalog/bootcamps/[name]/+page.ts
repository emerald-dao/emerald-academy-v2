import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../../lib/content/bootcamps/${params.name}/${params.lang}/overview.ts`
		);

		return {
			overview: overviewFile.overview
		};
	} catch (e) {
		throw error(404, 'The bootcamp you are looking for does not exist');
	}
};
