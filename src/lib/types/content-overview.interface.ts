import type { ContentType } from './content-types.type';

export interface Overview {
	title: string;
	excerpt: string;
	level: number;
	weeks: Week[];
	tags: string[];
	prerequisites: string[];
	slug: string;
	contentType: ContentType;
}

interface Week {
	excerpt: string;
}

export interface BootcampOverview extends Overview {
	videos: BootcampVideo[];
}

interface BootcampVideo {
	name: string;
	excerpt: string;
	link?: string;
	contents: string[];
	date: Date;
}
