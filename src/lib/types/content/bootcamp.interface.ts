import type { Overview } from './content-overview.interface';
import type { SubjectsEnum } from './metadata/subject.enum';

export interface BootcampOverview extends Overview {
	videos: BootcampVideo[];
}

interface BootcampVideo {
	name: string;
	excerpt: string;
	link: string;
	subjects: SubjectsEnum[];
	date: Date;
}
