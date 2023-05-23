import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/cadence-challenges/${params.name}/${params.lang}/overview.ts`
		);

		return {
			overview: overviewFile.overview
		};
	} catch (e) {
		throw error(404, 'The challenge you are looking for does not exist');
	}
};
