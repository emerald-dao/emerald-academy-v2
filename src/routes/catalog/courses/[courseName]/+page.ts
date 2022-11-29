export const load = async ({ fetch, params }) => {
	try {
		const overviewFile = await import(
			`../../../../lib/content/courses/${params.courseName}/overview.ts`
		);
		return {
			overview: overviewFile.overview
		};
	} catch (e) {
		throw new Error();
	}
};
