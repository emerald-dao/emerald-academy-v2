export async function load({ params }) {
	try {
		const courses = await import(
			`../../../../../../lib/content/courses/${params.name}/${params.week}/${params.day}`
		);

		const { title, day } = courses.metadata;
		const content = courses.default;

		return {
			content,
			title,
			day
		};
	} catch (e) {
		throw new Error(`You missed it`);
	}
}
