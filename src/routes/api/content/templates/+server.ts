import { fetchAllTemplates } from '$lib/utilities/api/content/templates/fetchAllTemplatesOverviews';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allTemplatesOverviews = await fetchAllTemplates();

	return json(allTemplatesOverviews);
};
