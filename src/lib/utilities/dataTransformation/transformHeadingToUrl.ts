export function transformHeadingToUrl(str: string): string {
	const words = str.split(' ');

	return words
		.join('-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLowerCase();
}
