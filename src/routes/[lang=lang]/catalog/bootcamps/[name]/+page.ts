import { error } from '@sveltejs/kit';
import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';

export const load = async ({ params, fetch }) => {
	try {
		const overviewFile = await import(
			`../../../../../lib/content/bootcamps/${params.name}/${params.lang}/overview.ts`
		);
		const response = await fetch('/api/getSignup/' + overviewFile.overview.id);
		const signUps = await response.json();
		return {
			overview: overviewFile.overview as BootcampOverview,
			signUps
		};
	} catch (e) {
		console.log(e)
		throw error(404, 'The bootcamp you are looking for does not exist');
	}
};
