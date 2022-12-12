import { fetchAllTipsAndTricksMetadata } from '$lib/utilities/api/fetchAllTips&TricksMetadata';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allMetadata = await fetchAllTipsAndTricksMetadata();
	// console.log(json(allMetadata));

	return json(allMetadata);
};
