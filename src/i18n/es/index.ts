import type { Translation } from '../i18n-types';
import { ContentTypeEnum } from '../../lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '../../lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const es: Translation = {
	// HomePage / HeroSection
	MAIN_HEADING_1: 'Aprende todo sobre la',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: 'Bienvenido',

	// HomePage / ExploreSection
	EXPLORE_TAGLINE: 'Explora nuestros contenidos',
	EXPLORE_H1: 'Recursos educativos gratuitos de Flow Blockchain',

	// HomePage / LearningPathsSection
	PATHS_H1: 'Sigue uno de nuestros caminos de aprendizaje',

	// HomePage / SocialMediaSection
	SOCIAL_H1: 'Más de 1000 estudiantes nos recomiendan',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: 'Tipo de contenido',
	SUBJECT: 'Tema',
	EXPERTISE: 'Experinecia',

	// Cadence by example
	SEARCH: 'Buscar',

	// Your achievements
	ACHIEVEMENTS_H1: 'Tus logros',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: 'Habilidades que aprenderás',

	// Type of content
	[ContentTypeEnum.Course]: 'Curso',
	[ContentTypeEnum.Bootcamp]: 'Bootcamp',
	[ContentTypeEnum.Roadmap]: 'Camino de aprendizaje',
	[ContentTypeEnum.Tips]: 'Cadence by Example',
	[ContentTypeEnum.Template]: 'Plantillas',
	[ContentTypeEnum.Resources]: 'Recursos',

	// Subjects
	[SubjectsEnum.Backend]: 'Backend',
	[SubjectsEnum.Webdev]: 'Desarrollo Web',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DappDevelopment]: 'Desarrollo de Dapps',

	// Expertise
	[ExpertiseEnum.advanced]: 'Avanzado',
	[ExpertiseEnum.intermediate]: 'Intermedio',
	[ExpertiseEnum.beginner]: 'Principiante'
};

export default es;
