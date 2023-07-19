import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/snippets`);
		const snippets = await response.json();

		console.log(snippets);

		return {
			snippets
		};
	} catch (e) {
		throw error(404, 'The challenge you are looking for does not exist');
	}
};
