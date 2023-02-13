<script type="ts">
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { StatsSection, PoweredByECDAO } from '@emerald-dao/component-library';
	import {
		HeroSection,
		ExploreSection,
		LearningPathsSection,
		SocialMediaSection
	} from './__components';

	export let data: Data;

	interface Data {
		courses: CourseOverview[];
		bootcamps: BootcampOverview[];
		roadmaps: RoadmapOverview[];
	}
</script>

<HeroSection />
<ExploreSection courses={data.courses} bootcamps={data.bootcamps} roadmaps={data.roadmaps} />
<StatsSection
	background="var(--clr-background-secondary)"
	bordersColor="var(--clr-border-primary)"
/>
<LearningPathsSection roadmaps={data.roadmaps} />
<SocialMediaSection />
<PoweredByECDAO />
