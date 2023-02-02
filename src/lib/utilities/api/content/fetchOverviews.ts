import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const fetchOverviews = async (contentType?: ContentTypeEnum) => {
	let overviews;

	switch (contentType) {
		case ContentTypeEnum.Course:
			overviews = import.meta.glob('/src/lib/content/courses/**/*.ts');
			break;

		case ContentTypeEnum.Bootcamp:
			overviews = import.meta.glob('/src/lib/content/bootcamps/**/*.ts');
			break;

		case ContentTypeEnum.Tips:
			break;

		case ContentTypeEnum.Template:
			break;

		case ContentTypeEnum.Roadmap:
			overviews = import.meta.glob('/src/lib/content/roadmaps/**/*.ts');
			break;

		case undefined:
			overviews = import.meta.glob('/src/lib/content/**/**/*.ts');
	}

	const iterableFiles = Object.entries(overviews);

	const allOverviews = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { overview } = await resolver();

			return overview;
		})
	);

	return allOverviews;
};
