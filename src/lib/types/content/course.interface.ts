import type { Overview } from './content-overview.interface';

export interface CourseOverview extends Overview {
	weeks: Week[];
}

interface Week {
	excerpt: string;
}
