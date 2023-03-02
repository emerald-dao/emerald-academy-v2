import type { ChapterOverview } from './chapter-overview.interface';
import type { Overview } from './content-overview.interface';

export interface CourseData {
	overview: CourseOverview;
	contents: CourseContents;
}

export type CourseOverview = Overview;

export interface CourseContents {
	[chapter: string]: {
		overview: ChapterOverview;
		contents: {
			slug: string;
			metadata: ChapterMetadata;
		}[];
	};
}

export interface ChapterMetadata {
	title: string;
	lesson: number;
	language: string;
	excerpt: string;
	headings: Array<{
		level: number;
		title: string;
	}>;
}
