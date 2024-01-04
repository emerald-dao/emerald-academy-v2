import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: '(Cadence 1.0) Learn Cadence: Beginner',
	contentType: ContentTypeEnum.Course,
	certificateIncluded: true,
	excerpt: 'Learn Cadence - the most composable, easiest to write, and safest smart contract language. In this course, you will create your own Pokemon contract that allows you to mint, battle, and store Pokemon inside the smart contract and your account.',
	author: {
		name: 'Jacob Tucker',
		socialMediaUrl: 'https://twitter.com/jacobmtucker',
		avatarUrl: '/avatars/jacob.jpeg',
		isVerified: true,
		walletAddress: '0x99bd48c8036e2876'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '3 chapters',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		price: 'Free',
		faqs: [
			{
				question: '🚀 What will I know by the end?',
				answer:
					'<ul><li>Deploy a smart contract</li><li>Write your own transactions & scripts that interact with your contract</li><li>All of the basic Cadence types</li><li>Structs</li><li>Resources</li><li>References</li><li>Account Storage</li><li>Brief overview of Access Modifiers</li></ul>'
			},
			{
				question: '🔖 What will I create?',
				answer:
					'You will create your own Pokemon smart contract. This contract alows anyone to mint their own Pokemon, store them in the smart contract, battle them against each other, and "catch" their own that gets stored in their account.'
			},
			{
				question: '😇 Who is this course meant for?',
				answer:
					"<ul><li>If you've never coded Cadence before</li><li>If you have coded in Cadence but want to refresh up on some of the concepts</li><li>If you're interested in the language and want to know more</li></ul>"
			},
			{
				question: '📚 How does it work?',
				answer:
					"There are 3 'chapters', each with 3 'lessons'. Each chapter gets a little bit harder."
			},
			{
				question: '❓ What do I need ahead of time?',
				answer:
					'Nothing. A background in coding will make learning Cadence very easy.'
			}
		]
	}
};
