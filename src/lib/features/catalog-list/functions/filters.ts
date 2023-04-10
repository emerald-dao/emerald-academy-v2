import type { Filter } from '$lib/types/content/filters/filter.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';

export const typeOfContentFilter: Filter = {
	title: 'Type of content',
	slug: 'type-of-content',
	filterElement: [
		{
			icon: 'icon',
			slug: ContentTypeEnum.Bootcamp
		},
		{
			icon: 'icon',
			slug: ContentTypeEnum.Course
		},
		{
			icon: 'icon',
			slug: ContentTypeEnum.Roadmap
		},
		{
			icon: 'icon',
			slug: ContentTypeEnum.Blog
		}
	],
	filterBucket: []
};

export const subjectFilter: Filter = {
	title: 'Subject',
	slug: 'subject',
	filterElement: Object.values(SubjectsEnum).map((sub) => {
		return {
			icon: 'icon',
			slug: sub
		};
	}),
	filterBucket: [] as SubjectsEnum[]
};

export const expertiseFilter: Filter = {
	title: 'Expertise',
	slug: 'expertise',
	filterElement: Object.values(ExpertiseEnum).map((sub) => {
		return {
			icon: 'icon',
			slug: sub
		};
	}),
	filterBucket: []
};

export const createFilters = (activeFilters: {
	typeOfContent: boolean;
	subject: boolean;
	expertise: boolean;
}) => {
	const filters = [];

	typeOfContentFilter.filterBucket = [];
	subjectFilter.filterBucket = [];
	expertiseFilter.filterBucket = [];

	if (activeFilters.typeOfContent) {
		filters.push(typeOfContentFilter);
	}
	if (activeFilters.subject) {
		filters.push(subjectFilter);
	}
	if (activeFilters.expertise) {
		filters.push(expertiseFilter);
	}

	return filters;
};
