<script type="ts">
	import { StatsSection, PoweredByECDAO } from '@emerald-dao/component-library';
	import { HeroSection, ExploreSection, SocialMediaSection } from './__components';

	export let data;
</script>

<HeroSection />
<ExploreSection
	courses={data.courses}
	bootcamps={data.bootcamps}
	tutorials={data.tutorials}
	tweets={data.tweets}
/>
<StatsSection
	background="var(--clr-background-secondary)"
	bordersColor="var(--clr-border-primary)"
	data={{
		data1: { title: 'students', stat: '1k+' },
		data2: { title: 'hours of content', stat: '100+' },
		data3: { title: 'graduates', stat: '100+' }
	}}
/>
<SocialMediaSection />
<PoweredByECDAO />
