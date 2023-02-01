import type { Overview } from './content-overview.interface';

export interface CourseOverview extends Overview {}

export interface CourseDay {
    meta: any; // TODO: Tipear a este
	path: string;
	week: number;
}