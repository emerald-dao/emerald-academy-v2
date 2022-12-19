import { fetchCadenceOverviews } from './../../../../lib/utilities/api/fetchOverviewsCadence';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const cadenceOverview = await fetchCadenceOverviews();

	return json(cadenceOverview);
};
