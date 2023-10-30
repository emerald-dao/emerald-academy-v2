import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Create a DApp with Niftory',
	contentType: ContentTypeEnum.Course,
	certificateIncluded: false,
	excerpt:
		'Learn to deploy a new contract on the flow blockchain. You will learn the major aspects of DApp development.',
	author: {
		name: 'Team Niftory',
		socialMediaUrl: 'https://twitter.com/niftory',
		avatarUrl: 'https://i.imgur.com/bymjTdC.png',
		isVerified: true
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '1 chapter',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.DApp, SubjectsEnum.Web, SubjectsEnum.Cadence, SubjectsEnum.Javascript],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'You will explore how to make a DApp on the Flow blockchain, using Niftory.'
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
					'When you finish a quest, please store all your quests together. Then, when you want them to be reviewed, submit them in the #quest-submissions channel inside the <a href="https://discord.gg/Ty2E5pmpmG" target="_blank">Niftory Discord</a> and we will review them.'
			}
		]
	}
};
