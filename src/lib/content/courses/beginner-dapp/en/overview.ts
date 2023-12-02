import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Learn DApps on Flow',
	contentType: ContentTypeEnum.Course,
	certificateIncluded: true,
	excerpt:
		'In this course, you will build a DApp on the Flow blockchain. You will learn the major aspects of DApp development.',
	author: {
		name: 'Jacob Tucker',
		socialMediaUrl: 'https://twitter.com/jacobmtucker',
		avatarUrl: '/avatars/jacob.jpeg',
		isVerified: true,
		walletAddress: '0x99bd48c8036e2876'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '5 chapters',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.DApp, SubjectsEnum.Web, SubjectsEnum.Cadence, SubjectsEnum.Javascript],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'You will explore how to make a DApp on the Flow blockchain. During the bootcamp, you will learn the major aspects of DApp development, including: <ul><li>Next.js (a front-end framework)</li><li>Cadence (smart contract development)</li><li>FCL (Flow Client Library)</li><li>CSS (for styling)</li></ul>During the course, we will be creating a DApp together. However, after completing the course, you will have the knowledge to develop your own DApps too.'
			},
			{
				question: '🚀 What will I know by the end?',
				answer:
					'<ul><li>An intro to the Flow blockchain (Chapter 1)</li><li>Do some front-end development (Chapter 2)</li><li>How to do basic styling (Chapter 2)</li><li>How to make your own DApp (Chapters 2-5)</li><li>How to do some Cadence coding (Chapter 3)</li><li>Connect your DApp to the blockchain (Chapter 3-5)</li></ul>'
			},
			{
				question: '🔖 What will I create?',
				answer:
					'Click <a href="https://beginner-emerald-dapp.vercel.app/" target="_blank">here</a> to see what you will be creating.'
			},
			{
				question: '😇 Who is this course NOT meant for?',
				answer:
					'<ul><li>People who have already created very basic DApps using FCL. This will be too boring for you.</li></ul>'
			},
			{
				question: '📚 How does it work?',
				answer:
					"The lessons will be split into 'chapters,' and chapters will be split into 'lessons.' I did it this way so you can manage your time and progress through the course as you like. Do not feel pressured to do this every lesson. Do it at your own pace and have fun with it! It will always be here :)<br/><br/>Here's an overview:<ul><li>Lessons split into lessons</li><li>Written & video content associated with each lesson. The videos will be from my <a href='https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw' target='_blank'>YouTube Channel</a>.</li><li>Quests to complete</li><li>Short quizzes</li><li>A completion certificate (<a href='https://floats.city/jacob.find/event/701829091' target='_blank'>this FLOAT</a>) if you have completed all the quests from Chapters 1-5 (Chapter 6 is extra credit). This will be proof that you have significant Cadence knowledge, and you will be able to show it to whoever you like as proof of expertise. Or just for fun! :D</li></ul>"
			},
			{
				question: '❓ What do I need ahead of time?',
				answer: 'Nothing!'
			},
			{
				question: '📁 What are quests?',
				answer:
					"Quests are like homework assignments. There are quests for every lesson of content. They will test your understanding of the concepts that are in that lesson's content."
			},
			{
				question: '🙋 How do I submit quests?',
				answer:
					'When you finish a quest, please store all your quests together. Then, when you want them to be reviewed, submit them in the #quest-submissions channel inside the <a href="https://discord.gg/emerald-city-906264258189332541" target="_blank">Emerald City Discord</a> and our instructors will review them.'
			}
		]
	}
};
