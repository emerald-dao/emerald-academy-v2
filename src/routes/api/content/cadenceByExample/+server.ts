import { fetchAllCadenceByExampleMetadata } from '$lib/utilities/api/content/cadenceByExample/fetchAllCadenceByExampleMetadata';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allMetadata = await fetchAllCadenceByExampleMetadata();

	return json(allMetadata);
};
