import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Learn Mobile (iOS) DApps on Flow',
	contentType: ContentTypeEnum.Course,
	certificateIncluded: false,
	excerpt:
		'In this course, you will build a Mobile (iOS) DApp on the Flow blockchain. You will learn the major aspects of Mobile DApp development.',
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boise_it_guru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true,
		walletAddress: '0x76d988a29af9ea8d'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '4 chapters',
		prerequisites: ['swift', 'swiftui'],
		subjects: [SubjectsEnum.DApp, SubjectsEnum.Mobile, SubjectsEnum.Cadence, SubjectsEnum.Swift],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'You will explore how to make a Moible (iOS) DApp on the Flow blockchain. During the bootcamp, you will learn the major aspects of DApp development, including: <ul><li>Swift/SwiftUI (iOS/Mac development)</li><li>Cadence (smart contract development)</li><li>FCL (Flow Client Library)</li></ul>During the course, we will be creating a DApp together. However, after completing the course, you will have the knowledge to develop your own DApps too.'
			},
			{
				question: '🚀 What will I know by the end?',
				answer:
					'<ul><li>An intro to the Flow blockchain (Chapter 1)</li><li>Do some front-end development (Chapter 2)</li><li>How to make your own DApp (Chapters 2-4)</li><li>How to do some Cadence coding (Chapter 3)</li><li>Connect your DApp to the blockchain (Chapter 3-4)</li></ul>'
			},
			{
				question: '😇 Who is this course NOT meant for?',
				answer:
					'<ul><li>People who have already created very basic iOS DApps using FCL. This will be too boring for you.</li></ul>'
			},
			{
				question: '📚 How does it work?',
				answer:
					"The lessons will be split into 'chapters,' and chapters will be split into 'lessons.' I did it this way so you can manage your time and progress through the course as you like. Do not feel pressured to do this every lesson. Do it at your own pace and have fun with it! It will always be here :)<br/><br/>Here's an overview:<ul><li>Lessons split into lessons</li><li>Quests to complete</li></ul>"
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
