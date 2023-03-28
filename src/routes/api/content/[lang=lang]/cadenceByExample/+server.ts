import { fetchAllCadenceByExampleOverviews } from '$lib/utilities/api/content/cadenceByExample/fetchAllCadenceByExampleOverviews';
import { json, error } from '@sveltejs/kit';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	try {
		const allMetadata = await fetchAllCadenceByExampleOverviews(params.lang as Locales);

		return json(allMetadata);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
