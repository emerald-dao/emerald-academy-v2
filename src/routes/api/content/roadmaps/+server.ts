import { fetchAllRoadmaps } from '$lib/utilities/api/content/roadmaps/fetchAllRoadmaps';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const roadmaps = await fetchAllRoadmaps();

	return json(roadmaps);
};
