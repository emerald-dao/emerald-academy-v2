import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';

export const roadmapPerSubject = {
	[SubjectsEnum.Cadence]: 'roadmaps/beginner-cadence',
	[transformHeadingToUrl(SubjectsEnum.DappDevelopment)]: 'roadmaps/basic-dapp'
};
