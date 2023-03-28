<script type="ts">
	import { StatsSection, PoweredByECDAO } from '@emerald-dao/component-library';
	import {
		HeroSection,
		ExploreSection,
		LearningPathsSection,
		SocialMediaSection
	} from './__components';

	export let data;
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
