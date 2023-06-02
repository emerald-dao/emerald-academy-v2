import type { CourseOverview } from '$lib/types/content/course.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: CourseOverview = {
	title: 'Create a DApp with Niftory',
	contentType: ContentTypeEnum.Course,
	excerpt:
		'Learn to deploy a new contract on the flow blockchain. You will learn the major aspects of DApp development.',
	author: {
		name: 'Team Niftory',
		socialMediaUrl: 'https://twitter.com/niftory',
		avatarUrl: 'https://i.imgur.com/bymjTdC.png'
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
					'When you finish a quest, please store all your quests together. Then, when you want them to be reviewed, submit them in the #quest-submissions channel inside the <a href="https://discord.gg/emeraldcity" target="_blank">Emerald City Discord</a> and our instructors will review them.'
			}
		]
	}
};
