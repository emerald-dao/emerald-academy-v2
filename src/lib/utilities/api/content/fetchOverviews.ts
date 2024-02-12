import type { Locales } from '$i18n/i18n-types';
import type { Overview } from '$lib/types/content/content-overview.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
import { getBootcampEndDate } from '$lib/utilities/dataTransformation/getBootcampDates';

export const fetchOverviews = async (
	contentType?:
		| ContentTypeEnum.Bootcamp
		| ContentTypeEnum.Course
		| ContentTypeEnum.Quickstart
		| ContentTypeEnum.Challenge
		| ContentTypeEnum.Tutorial
		| ContentTypeEnum.Snippet,
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

		case ContentTypeEnum.Quickstart:
			overviews = import.meta.glob('/src/lib/content/quickstarts/**/**/*.ts');
			break;

		case ContentTypeEnum.Tutorial:
			overviews = import.meta.glob('/src/lib/content/tutorials/**/**/*.ts');
			break;

		case ContentTypeEnum.Snippet:
			overviews = import.meta.glob('/src/lib/content/snippets/**/*.ts')
			break;

		case ContentTypeEnum.Challenge:
			overviews = import.meta.glob('/src/lib/content/cadence-challenges/**/*.ts');
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

	// In case we are looking for bootcamp overviews we have to filter so we don´t show bootcamps that are over
	const notFinishedBootcamps: BootcampOverview[] = [];
	if (contentType === ContentTypeEnum.Bootcamp) {
		if (allOverviews.length > 0) {
			allOverviews.forEach(async (overview) => {
				const endDate = getBootcampEndDate(overview as BootcampOverview);

				if (endDate > new Date()) {
					notFinishedBootcamps.push(overview as BootcampOverview);
				}
			});
		}
	}
	if (contentType === ContentTypeEnum.Bootcamp) {
		return notFinishedBootcamps;
	} else {
		return allOverviews;
	}
};
