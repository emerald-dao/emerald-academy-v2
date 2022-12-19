<script type="ts">
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';

	import {
		HeroSection,
		ExploreSection,
		StatsSection,
		AcademySection,
		SocialMediaSection,
		JoinSection
	} from './components';
	export let data: Data;
	console.log(data);

	interface Data {
		courses: CourseOverview[];
		bootcamps: BootcampOverview[];
		roadmaps: RoadmapOverview[];
	}
</script>

<HeroSection />
<ExploreSection courses={data.courses} bootcamps={data.bootcamps} roadmaps={data.roadmaps} />
<StatsSection />
<AcademySection roadmaps={data.roadmaps} />
<SocialMediaSection />
<JoinSection />
