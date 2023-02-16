import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/courses/${params.name}`);

		const course = await response.json();
		console.log(course);

		return course;
	} catch (e) {
		throw new Error();
	}
};
