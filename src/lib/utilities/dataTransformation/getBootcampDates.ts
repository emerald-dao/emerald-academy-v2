import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';

export const getBootcampEndDate = (overview: BootcampOverview) => {
	let allDates: Date[] = [];

	(overview as BootcampOverview).videos.forEach((video) => {
		allDates.push(video.date);
	});

	const endDate = new Date(Math.max(...allDates.map((date: Date) => date.getTime())));

	return endDate;
};
