import type { SubjectsEnum } from "./metadata/subject.enum";

export interface SubjectOverview {
	name: SubjectsEnum.Cadence | SubjectsEnum.DappDevelopment;
	description: string;
	shortcuts: ContentShortcuts[];
}

export interface ContentShortcuts {
    name: string;
    url: string;
}