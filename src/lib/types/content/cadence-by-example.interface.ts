export interface CadenceByExampleOverview {
	meta: CadenceByExampleMetadata;
	path: string;
}

export interface CadenceByExampleMetadata {
	title: string;
	language: string;
	layout: boolean;
	headings: string[];
}
