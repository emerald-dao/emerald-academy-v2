export const fetchCadenceOverview = async (params: string) => {
	const courseOverview = import(`$lib/content/courses/${params}/cadence-overview.ts`);

	return courseOverview;
};
