export const fetchOneCourseOverview = async (name: string) => {
	const courseOverview = import(`$lib/content/courses/${name}/courseOverview.js`);

	return courseOverview;
};
