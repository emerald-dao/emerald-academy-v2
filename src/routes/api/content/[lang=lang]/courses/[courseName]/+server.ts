import { fetchOneCourse } from '$lib/utilities/api/content/courses/fetchOneCourse';
import { json, error } from '@sveltejs/kit';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	try {
		const course = await fetchOneCourse(params.courseName, params.lang as Locales);

		// Sort the lessons using the comparator function
		for (const chapterKey in course.contents) {
			const eachChapter = course.contents[chapterKey];
			eachChapter.contents.sort((a, b) => {
				const lessonA = Number(a.slug.match(/lesson(\d+)/)?.[1]);
				const lessonB = Number(b.slug.match(/lesson(\d+)/)?.[1]);
				return lessonA - lessonB;
			});
			course.contents[chapterKey].contents = eachChapter.contents;
		}

		const chapters = Object.keys(course.contents);

		// Sort the chapters using the comparator function
		const sortedChapters = chapters.sort((a: string, b: string) => {
			const aNum = Number(a.match(/chapter(\d+)/)?.[1]);
			const bNum = Number(b.match(/chapter(\d+)/)?.[1]);
			return aNum - bNum;
		});

		// Create a new contents object with the sorted chapters
		const sortedContents = Object.fromEntries(
			sortedChapters.map((chapter) => [chapter, course.contents[chapter]])
		);

		// Update the original data object with the sorted contents
		course.contents = sortedContents;

		return json(course);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
