import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/quickstarts`);
		const quickstarts = await response.json();

		const mobileResponse = await fetch(`/api/content/${params.lang}/mobileQuickstarts`);
		const mobileQuickstarts = await mobileResponse.json();

		return {
			quickstarts,
			mobileQuickstarts
		};
	} catch (e) {
		throw error(404, 'The quickstart you are looking for does not exist');
	}
};
