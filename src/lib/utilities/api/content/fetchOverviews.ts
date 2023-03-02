import type { Locales } from '$i18n/i18n-types';
import type { Overview } from '$lib/types/content/content-overview.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

export const fetchOverviews = async (
	contentType?:
		| ContentTypeEnum.Bootcamp
		| ContentTypeEnum.Course
		| ContentTypeEnum.Template
		| ContentTypeEnum.Roadmap,
	locale?: Locales
) => {
	let overviews;

	switch (contentType) {
		case ContentTypeEnum.Course:
			overviews = import.meta.glob('/src/lib/content/courses/*/*/overview.ts');
			break;

		case ContentTypeEnum.Bootcamp:
			overviews = import.meta.glob('/src/lib/content/bootcamps/**/*.ts');
			break;

		case ContentTypeEnum.Template:
			overviews = import.meta.glob('/src/lib/content/templates/**/**/*.ts');
			break;

		case ContentTypeEnum.Roadmap:
			overviews = import.meta.glob('/src/lib/content/roadmaps/**/*.ts');
			break;

		case undefined:
			overviews = import.meta.glob('/src/lib/content/**/**/*.ts');
	}

	const iterableFiles = Object.entries(overviews);

	const thisLangFiles = locale
		? iterableFiles.filter(([path]) => {
				return path.split('/')[6] == locale;
		  })
		: iterableFiles;

	const allOverviews = await Promise.all(
		thisLangFiles.map(async ([path, resolver]) => {
			const thisContentLang = path.split('/')[6];

			if (locale && locale != thisContentLang) {
				return;
			}

			const { overview } = await (resolver() as Promise<{ overview: Overview }>);

			// Workaround to get the slug and inject it in our overview
			const slug = `${path.split('/')[4]}/${path.split('/')[5]}`;
			overview.slug = slug;

			return overview;
		})
	);

	return allOverviews;
};
