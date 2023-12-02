import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Learn Cadence: Intermediate',
	contentType: ContentTypeEnum.Course,
	certificateIncluded: true,
	excerpt: 'Take your Cadence knowledge to the next level by learning more advanced concepts & patterns.',
	author: {
		name: 'Jacob Tucker',
		socialMediaUrl: 'https://twitter.com/jacobmtucker',
		avatarUrl: '/avatars/jacob.jpeg',
		isVerified: true,
		walletAddress: '0x99bd48c8036e2876'
	},
	metadata: {
		expertise: ExpertiseEnum.Intermediate,
		duration: '5 chapters',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'Learn intermediate Cadence concepts & patterns. During the course, you will extend your basic Cadence knowledge to include more advanced patterns you will likely utilize when developing real applications.'
			},
			{
				question: '🚀 What will I know by the end?',
				answer:
					'<ul><li>Master Capability-based control</li><li>Understand current issues with poor capabilitly links and how to work through them</li><li>Learn how to implement Admin control</li><li>Improve the efficiency and readability of transaction/script code</li><li>Helpful patterns to control permissions and improve efficiencies in a smart contract</li><li>Miscellaneous information like handling time in Cadence</li></ul>'
			},
			{
				question: '😇 Who is this course meant for?',
				answer:
					'<ul><li>You want to get a stronger understanding of the Cadence smart contract language</li><li>You want to learn more advanced Cadence patterns & concepts</li><li>You have completed our <a href="/en/catalog/courses/beginner-cadence" target="_blank">Beginner Cadence Course</a> and are looking for more</li></ul>'
			},
			{
				question: '📚 How does it work?',
				answer:
					"The lessons will be split into 'chapters,' and chapters will be split into 'lessons.' I did it this way so you can manage your time and progress through the course as you like. Do not feel pressured to do this every lesson. Do it at your own pace and have fun with it! It will always be here :)<br/><br/>Here's an overview:<ul><li>Lessons split into lessons</li><li>Written & video content associated with each lesson. The videos will be from my <a href='https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw' target='_blank'>YouTube Channel</a>.</li><li>Quests to complete</li><li>Short quizzes</li><li>A completion certificate (<a href='https://floats.city/jacob.find/event/241503135' target='_blank'>this FLOAT</a>) if you have completed all the quests from Chapters 1-5 (Chapter 6 is extra credit). This will be proof that you have significant Cadence knowledge, and you will be able to show it to whoever you like as proof of expertise. Or just for fun! :D</li></ul>"
			},
			{
				question: '❓ What do I need ahead of time?',
				answer:
					"Quests are like homework assignments. There are quests for every lesson of content. They will test your understanding of the concepts that are in that lesson's content."
			},
			{
				question: 'How do I submit quests?',
				answer:
					'When you finish a quest, please store all your quests together. Then, when you want them to be reviewed, submit them in the #quest-submissions channel inside the <a href="https://discord.gg/emerald-city-906264258189332541" target="_blank">Emerald City Discord</a> and our instructors will review them.'
			},
			{
				question: 'What are quizzes?',
				answer:
					"Every lesson also has a quiz associated with it to test your knowledge. It is a simple Google Form you can fill out to test your understanding for that lesson's content.<br/><br/><i>All of these quizzes are entirely thanks to FrankenSense. Thank you for being an absolute legend!</i>"
			}
		]
	}
};
