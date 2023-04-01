import type { BaseTranslation } from '../i18n-types';
import { ContentTypeEnum } from '../../lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '../../lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const zh: BaseTranslation = {
	// Home / HeroSection
	MAIN_HEADING_1: '了解',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: '欢迎',

	// Home / ExploreSection
	EXPLORE_TAGLINE: '探索我们的内容',
	EXPLORE_H1: 'Flow Blockchain的免费教育资源',

	// Home / LearningPathsSection
	PATHS_H1: '选择一个学习路径',

	// Home / SocialMediaSection
	SOCIAL_H1: '超过1000名学生推荐我们',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: '内容类型',
	SUBJECT: '主题',
	EXPERTISE: '专业',

	// Cadence by example
	SEARCH: '搜索',
	NO_EXAMPLES_FOUND: '没有找到该语言的示例',

	// Your achievements
	ACHIEVEMENTS_H1: '你的成就',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: '你将学到的技能',

	// Type of content
	[ContentTypeEnum.Course]: '课程',
	[ContentTypeEnum.Bootcamp]: '训练营',
	[ContentTypeEnum.Roadmap]: '学习路线',
	[ContentTypeEnum.Quickstart]: '模板',
	[ContentTypeEnum.Resources]: '资源',

	// Subjects
	[SubjectsEnum.Backend]: '后端',
	[SubjectsEnum.Web]: 'Web开发',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DApp]: 'DApp',
	[SubjectsEnum.Javascript]: 'Javascript',

	// Expertise
	[ExpertiseEnum.Advanced]: '高级',
	[ExpertiseEnum.Intermediate]: '中级',
	[ExpertiseEnum.Beginner]: '初级',

	// Quickstarts
	NO_QUICKSTARTS_FOUND: '没有找到该语言的模板'
};

export default zh;
