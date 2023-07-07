import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Setting Up Lilico Wallet For Development',
	contentType: ContentTypeEnum.Course,
	excerpt: 'Learn how to setup Lilico Wallet for developing DApps',
	author: {
		name: 'BoiseITGuru',
		socialMediaUrl: 'https://twitter.com/boise_it_guru',
		avatarUrl:
			'https://avatars.githubusercontent.com/u/3641594?s=400&u=044fd05bc61270527c4da99212f143595d6fa4a1&v=4',
		isVerified: true
	},
	metadata: {
		expertise: ExpertiseEnum.Beginner,
		duration: '1 chapter',
		prerequisites: ['javascript'],
		subjects: [SubjectsEnum.Mobile, SubjectsEnum.DApp],
		price: 'Free',
		faqs: [
			{
				question: '📖 What is this course?',
				answer:
					'You learn how to setup Lilico Wallet for developing DApps and fund your testnet account.'
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
