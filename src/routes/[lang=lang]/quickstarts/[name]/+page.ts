import type { PageLoad } from './$types';
import { fetchGithubUser } from '$lib/utilities/api/githubApi/fetchGithubUser';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/quickstarts/${params.name}/${params.lang}/overview.ts`
		);
		const readmeFile = await import(
			`../../../../lib/content/quickstarts/${params.name}/${params.lang}/readme.md`
		);
		const githubUser = await fetchGithubUser(overviewFile.overview.user.github);

		return {
			overview: overviewFile.overview,
			readme: readmeFile.default,
			githubUser: githubUser.json
		};
	} catch (e) {
		throw error(404, 'The quickstart you are looking for does not exist');
	}
};
