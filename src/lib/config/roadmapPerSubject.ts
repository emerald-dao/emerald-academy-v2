import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const roadmapPerSubject: {
	[key in SubjectsEnum]?: string;
} = {
	[SubjectsEnum.Cadence]: 'cadence'
};
