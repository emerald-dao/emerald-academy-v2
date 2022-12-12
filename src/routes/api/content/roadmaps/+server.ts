import { fetchRoadmaps } from '$lib/utilities/api/fetchRoadmaps';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const roadmaps = await fetchRoadmaps();
	console.log('n');

	return json(roadmaps);
};
