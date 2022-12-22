import { fetchCadenceOverviews } from './../../../../lib/utilities/api/fetchOverviewsCadence';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allContent = await fetchCadenceOverviews();

	return json(allContent);
};
