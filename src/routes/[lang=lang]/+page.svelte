<script type="ts">
	import { Seo } from '@emerald-dao/component-library';
	import dappInfo from '$lib/config/config';
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
<ExploreSection
	courses={data.courses}
	bootcamps={data.bootcamps}
	roadmaps={data.roadmaps}
	tutorials={data.tutorials}
/>
<StatsSection
	background="var(--clr-background-secondary)"
	bordersColor="var(--clr-border-primary)"
/>
<!-- <LearningPathsSection roadmaps={data.roadmaps} /> -->
<SocialMediaSection />
<PoweredByECDAO />

<Seo
	title={dappInfo.title}
	description="Learn everything about the Flow Blockchain. Free educational resources. Powered by Emerald City DAO"
	type="WebSite"
	image="https://academy.ecdao.org/favicon.png"
/>
