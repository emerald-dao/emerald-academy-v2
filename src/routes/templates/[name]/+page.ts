import { fetchGithubUser } from "$lib/utilities/api/githubApi/fetchGithubUser";

export const load = async ({ params }) => {
	try {
		const overviewFile = await import(`../../../lib/content/templates/${params.name}/overview.ts`);
		const githubUser = await fetchGithubUser(overviewFile.overview.user.github)
		
		return {
			overview: overviewFile.overview,
			githubUser
		};
	} catch (e) {
		throw new Error(e);
	}
};