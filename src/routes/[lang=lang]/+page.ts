import { featuredContent } from '$lib/config/featuredContent';
import { tweets as allTweets } from '$lib/content/tweets';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const courses = [];
		const bootcamps = [];
		const tutorials = [];
		const tweets = [];

		for (const featuredCourse of featuredContent.courses) {
			try {
				const course = await import(
					`../../lib/content/courses/${featuredCourse}/${params.lang}/overview.ts`
				);
				course.overview.slug = `courses/${featuredCourse}`;
				courses.push(course.overview);
			} catch (e) {
				console.error('Featured course missing for this language');
			}
		}

		// for (const featuredBootcamp of featuredContent.bootcamps) {
		// 	try {
		// 		const bootcamp = await import(
		// 			`../../lib/content/bootcamps/${featuredBootcamp}/${params.lang}/overview.ts`
		// 		);
		// 		bootcamp.overview.slug = `bootcamps/${featuredBootcamp}`;
		// 		bootcamps.push(bootcamp.overview);
		// 	} catch (e) {
		// 		console.error('Featured bootcamp missing for this language');
		// 	}
		// }

		// for (const featuredRoadmap of featuredContent.roadmaps) {
		// 	try {
		// 		const roadmap = await import(
		// 			`../../lib/content/roadmaps/${featuredRoadmap}/${params.lang}/overview.ts`
		// 		);
		// 		roadmap.overview.slug = `roadmaps/${featuredRoadmap}`;
		// 		roadmaps.push(roadmap.overview);
		// 	} catch (e) {
		// 		console.error('Featured roadmap missing for this language');
		// 	}
		// }

		for (const featuredTutorial of featuredContent.tutorials) {
			try {
				const tutorial = await import(
					`../../lib/content/tutorials/${featuredTutorial}/${params.lang}/overview.ts`
				);
				tutorial.overview.slug = `tutorials/${featuredTutorial}`;
				tutorials.push(tutorial.overview);
			} catch (e) {
				console.error('Featured tutorial missing for this language');
			}
		}

		for (const featuredTweet of featuredContent.tweets) {
			try {
				const tweet = allTweets.find(tweet => tweet.title === featuredTweet);
				tweets.push(tweet);
			} catch (e) {
				console.error('Featured tweet missing for this language');
			}
		}

		return {
			courses,
			bootcamps,
			tutorials,
			tweets
		};
	} catch (e) {
		throw error(404, "Couldn't find data for the language you are looking");
	}
};
