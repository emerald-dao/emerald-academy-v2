export const load = async ({ fetch, params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/bootcamps/${params.name}/overview.ts`
		);
		return {
			overview: overviewFile.overview
		};
	} catch (e) {
		throw new Error();
	}
};
