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
	NO_EXAMPLES_FOUND: 'Примеры не найдены для этого языка',

	// Your achievements
	ACHIEVEMENTS_H1: 'Ваши достижения',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: 'Навыки, которые вы изучите',

	START: "Начинать",
	CATALOG: "Каталог",
	LEARN: "Учиться",

	// Type of content
	[ContentTypeEnum.Course]: 'Курс',
	[ContentTypeEnum.Bootcamp]: 'Буткемп',
	[ContentTypeEnum.Roadmap]: 'Путь обучения',
	[ContentTypeEnum.Quickstart]: 'Шаблоны',
	[ContentTypeEnum.Resources]: 'Ресурсы',

	// Subjects
	[SubjectsEnum.Backend]: 'Бэкенд',
	[SubjectsEnum.Web]: 'Веб-разработка',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DApp]: 'DApp',
	[SubjectsEnum.Javascript]: 'Javascript',

	// Expertise
	[ExpertiseEnum.Advanced]: 'Продвинутый',
	[ExpertiseEnum.Intermediate]: 'Средний',
	[ExpertiseEnum.Beginner]: 'Начинающий',

	// Quickstarts
	NO_QUICKSTARTS_FOUND: 'Шаблоны не найдены для этого языка'
};

export default ru;
