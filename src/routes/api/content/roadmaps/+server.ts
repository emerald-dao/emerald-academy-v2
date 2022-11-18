import { fetchRoadmaps } from './../../../../lib/utilities/fetchRoadmaps';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const roadmaps = await fetchRoadmaps();

	return json(roadmaps);
};
