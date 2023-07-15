import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';
import type { Locales } from '$i18n/i18n-types';
import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { transformUrlToSubject } from '$lib/utilities/dataTransformation/transformUrlToSubject';

export const GET = async ({ params }) => {
	const locale = params.lang as Locales;
	const subject = transformUrlToSubject(params.subject) as SubjectsEnum;

	try {
		const allCourses = (await fetchOverviews(ContentTypeEnum.Course, locale)) ?? [];
		const allBootcamps = (await fetchOverviews(ContentTypeEnum.Bootcamp, locale)) ?? [];
		const allRoadmaps = (await fetchOverviews(ContentTypeEnum.Roadmap, locale)) ?? [];
		const allTutorials = (await fetchOverviews(ContentTypeEnum.Tutorial, locale)) ?? [];

		const allContent = allCourses.concat(allBootcamps, allRoadmaps, allTutorials).filter((overview) => {
			if (overview) {
				return overview.metadata.subjects.includes(subject);
			}
		});

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
