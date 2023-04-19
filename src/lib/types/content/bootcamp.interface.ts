import type { Overview } from './content-overview.interface';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface BootcampOverview extends Overview {
	googleCalendarLink: string;
	videos: BootcampVideo[];
}

export interface BootcampVideo {
	name: string;
	excerpt: string;
	link: string;
	subjects: SubjectsEnum[];
	date: Date;
	chapters: Chapter[];
}

interface Chapter {
	name: string;
	link: string;
}
