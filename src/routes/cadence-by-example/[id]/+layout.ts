export const load = async ({ fetch }) => {
	const response = await fetch(`/api/content/cadenceByExample`);
	const content = await response.json();

	return {
		content
	};
};
