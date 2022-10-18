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
</script>

<HeroSection />
<ExploreSection />
<StatsSection />
<AcademySection />
<SocialMediaSection />
<JoinSection />
