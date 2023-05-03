import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Dance and Grow Rich',
	contentType: ContentTypeEnum.Course,
	excerpt:
		'Learn the Foundations of Web3 for Dancers. During this course, you will learn MOST of the components of Web3. In addition to upskilling your knowledge during the course, you will have the opportunity to execute ideas as part of Decentralised Dance aka DeDan and Metaverse Dance aka MeDan.',
	author: {
		name: 'Arun Nadarasa',
		socialMediaUrl: 'https://twitter.com/krumpverse',
		avatarUrl: 'https://www.linkpicture.com/q/Arun_Avatar4_4.png',
		isVerified: false
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '9 chapters',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'Learn the fundamentals of Web3 for Dancers. you will learn MOST of the components of Web3.<br/><br/>In addition to upskilling your knowledge during the course, you will have the opportunity to execute ideas.'
			},
			{
				question: '🚀 What will I know by the end?',
				answer:
					'<ul><li>All of the major components of Web3 for Dancers</li><li>To know the differences between Web1, Web3 and Web3</li><li>To understand the basics of Blockchain</li><li> To explain what is a NFT and Cryptocurrency</li><li>To describe what is a DAO</li><li>To define the Metaverse</li><li>To understand what is a SBT and the synergy with SSI</li><li>To leverage the huge potential of GenAI</li></ul>'
			},
			{
				question: '🔖 What will I benefit?',
				answer:
					'You will be able to educate your local dance community in the untapped Web3 income streams for dancers<br/><br/>This is part of the Web3 Dance Lab initiative'
			},
			{
				question: '😇 Who is this course meant for?',
				answer:
					"<ul><li>If you've never heard of Web3 before</li><li>If you are a dancer or a dance enthusiast</li><li>If you're interested to become an OG for Web3 Dance</li></ul>"
			},
			{
				question: '📚 How does it work?',
				answer:
					"The lessons will be split into 9 chapters so that you can manage your time and progress through the course as you like. Do not feel pressured to finish it in one sitting. Do it at your own pace and have fun with it! It will always be here :)<br/><br/>Here's an overview:<ul><li>9 Chapters</li><li>Written & video content associated with each lesson. The videos will be from my <a href='https://www.youtube.com/channel/UC_TYYcUWPRtCgiYQmmyjWiw' target='_blank'>YouTube Channel</a>.</li><li>Short quiz</li><li>A completion certificate (<a href='https://floats.city/krumpverse.find/event/994151843' target='_blank'>this FLOAT</a>)This will be proof that you have significant Web3 knowledge for Dancers, and you will be able to show it to whoever you like as proof of expertise. Or just for fun! :D</li></ul>"
			},
			{
				question: '❓ What do I need ahead of time?',
				answer:
					'Nothing.<br/><br/>In order to complete this course, you need to know absolutely nothing about Web3.<br/><br/><i>You could listen to podcasts or read books but the course will provide you a foundation to build upon<br/><br/>You must have a growth mindset in order to fully leverage Web3 for Dancers.</I>'
			},
			{
				question: '📝 What is the quiz?',
				answer:
					'There will be a quiz at the end of the course to test your knowledge. It is a simple Typeform quiz.<br/><br/><i>'
			}
		]
	}
};
