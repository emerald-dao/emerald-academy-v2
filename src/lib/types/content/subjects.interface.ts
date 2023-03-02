import type { SubjectsEnum } from "./metadata/subject.enum";

export interface SubjectOverview {
	name: SubjectsEnum.Cadence | SubjectsEnum.DApp;
	description: string;
	shortcuts: ContentShortcuts[];
}

export interface ContentShortcuts {
	name: string;
	url: string;
}