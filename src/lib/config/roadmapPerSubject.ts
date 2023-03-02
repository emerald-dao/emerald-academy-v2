import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import { transformHeadingToUrl } from '$lib/utilities/dataTransformation/transformHeadingToUrl';

export const roadmapPerSubject = {
	[SubjectsEnum.Cadence]: 'beginner-cadence',
	[transformHeadingToUrl(SubjectsEnum.DApp)]: 'basic-dapp'
};
