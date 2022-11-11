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
