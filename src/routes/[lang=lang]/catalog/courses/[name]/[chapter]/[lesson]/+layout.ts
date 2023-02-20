import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/courses/${params.name}`);
		const course = await response.json();

		return course;
	} catch (e) {
		throw new Error();
	}
};
