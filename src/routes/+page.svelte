<script type="ts">
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import type { CourseOverview } from '$lib/types/content/course.interface';
	import { Label } from '@emerald-dao/component-library';
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
	}
</script>

<HeroSection />
<ExploreSection courses={data.courses} />
<StatsSection />
<AcademySection />
<SocialMediaSection />
<JoinSection />
