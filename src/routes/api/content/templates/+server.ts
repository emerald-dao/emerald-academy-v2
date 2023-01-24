import { fetchAllTemplatesOverviews } from '$lib/utilities/api/fetchAllTemplatesOverviews';
import { json } from '@sveltejs/kit';


export const GET = async () => {
	const allTemplatesOverviews = await fetchAllTemplatesOverviews();

	return json(allTemplatesOverviews);
};