import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/cadenceChallenges`);
		const challenges = await response.json();

		return {
			challenges
		};
	} catch (e) {
		throw error(404, 'The challenge you are looking for does not exist');
	}
};
