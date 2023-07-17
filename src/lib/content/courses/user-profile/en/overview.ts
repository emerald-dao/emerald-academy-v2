import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Create a User Profile using Cadence',
	contentType: ContentTypeEnum.Tutorial,
	excerpt:
		'Learn to write and deploy a new contract that can store user information, change user information or read from an account on the flow blockchain.',
	author: {
		name: 'Memxor',
		socialMediaUrl: 'https://twitter.com/memxor_',
		avatarUrl: 'https://imgur.com/a/CtEvT81'
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '1 chapter',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'You will learn how to make a User Profile contract in Cadence.'
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