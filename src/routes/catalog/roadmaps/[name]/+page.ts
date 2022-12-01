import { overview } from '../../../../lib/content/roadmaps/basic-dapp/basic-dapp';
export const load = async ({ fetch, params }) => {
	try {
		const roadmapFile = await import(
			`../../../../lib/content/roadmaps/${params.name}/${params.name}.ts`
		);
		return {
			roadmap: roadmapFile.overview
		};
	} catch (e) {
		throw new Error();
	}
};
