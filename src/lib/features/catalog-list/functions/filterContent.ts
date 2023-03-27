import type { Overview } from '$lib/types/content/content-overview.interface';
import type { Filter } from '$lib/types/content/filters/filter.interface';
import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const filterContent = async (
	_filters: Filter[],
	contents: Overview[],
	activeFilters: {
		typeOfContent: boolean;
		subject: boolean;
		expertise: boolean;
	}
) => {
	let filteredContent = contents;

	if (activeFilters.typeOfContent) {
		filteredContent = await filterTypeOfContent(_filters, filteredContent);
	}

	if (activeFilters.subject) {
		filteredContent = await filterSubject(_filters, filteredContent);
	}

	if (activeFilters.expertise) {
		filteredContent = await filterExpertise(_filters, filteredContent);
	}

	return filteredContent;
};

const filterTypeOfContent = async (_filters: Filter[], contents: Overview[]) => {
	const filter = _filters.filter((flt) => {
		return flt.slug === 'type-of-content';
	});

	return contents.filter((content) => {
		return (
			filter[0].filterBucket.includes(content.contentType) || filter[0].filterBucket.length < 1
		);
	});
};

const filterSubject = async (_filters: Filter[], contents: Overview[]) => {
	const filter = _filters.filter((flt) => {
		return flt.slug === 'subject';
	});

	return contents.filter((content) => {
		return (
			filter[0].filterBucket.some((item) =>
				content.metadata.subjects.includes(item as SubjectsEnum)
			) || filter[0].filterBucket.length < 1
		);
	});
};

const filterExpertise = async (_filters: Filter[], contents: Overview[]) => {
	const filter = _filters.filter((flt) => {
		return flt.slug === 'expertise';
	});

	return contents.filter((content) => {
		return (
			filter[0].filterBucket.includes(content.metadata.expertise) ||
			filter[0].filterBucket.length < 1
		);
	});
};
