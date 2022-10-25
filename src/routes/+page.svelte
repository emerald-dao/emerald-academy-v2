<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	import {
		HeroSection,
		ExploreSection,
		StatsSection,
		AcademySection,
		SocialMediaSection,
		JoinSection
	} from './components';
	import Achievements from './achievements/+page.svelte';
	import CounterTest from './components/sections/CounterTest.svelte';
	
	
</script>


<CounterTest/>
<HeroSection />
<ExploreSection />
<StatsSection />
<AcademySection />
<SocialMediaSection />
<JoinSection />


