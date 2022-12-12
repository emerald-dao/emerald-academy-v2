export const fetchOneCourseOverview = async (courseName: string) => {
	const courseOverview = import(`$lib/content/courses/${courseName}/courseOverview.js`);

	return courseOverview;
};
