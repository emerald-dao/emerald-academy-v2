import type { BaseTranslation } from '../i18n-types';
import { ContentTypeEnum } from '../../lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '../../lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const ru: BaseTranslation = {
	// Home / HeroSection
	MAIN_HEADING_1: 'Узнайте все о',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: 'Добро пожаловать',

	// Home / ExploreSection
	EXPLORE_TAGLINE: 'Изучайте наш контент',
	EXPLORE_H1: 'Бесплатные образовательные ресурсы Flow',

	// Home / LearningPathsSection
	PATHS_H1: 'Следуйте одному из наших путей обучения',

	// Home / SocialMediaSection
	SOCIAL_H1: 'Более 1000 студентов рекомендуют нас',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: 'Тип контента',
	SUBJECT: 'Тема',
	EXPERTISE: 'Уровень',

	// Cadence by example
	SEARCH: 'Поиск',

	// Your achievements
	ACHIEVEMENTS_H1: 'Ваши достижения',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: 'Навыки, которые вы изучите',

	// Type of content
	[ContentTypeEnum.Course]: 'Курс',
	[ContentTypeEnum.Bootcamp]: 'Буткемп',
	[ContentTypeEnum.Roadmap]: 'Путь обучения',
	[ContentTypeEnum.Tips]: 'Cadence by Example',
	[ContentTypeEnum.Template]: 'Шаблоны',

	// Subjects
	[SubjectsEnum.Backend]: 'Бэкенд',
	[SubjectsEnum.Webdev]: 'Веб-разработка',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DappDevelopment]: 'Разработка Dapp',

	// Expertise
	[ExpertiseEnum.advanced]: 'Продвинутый',
	[ExpertiseEnum.intermediate]: 'Средний',
	[ExpertiseEnum.beginner]: 'Начинающий'
};

export default ru;
