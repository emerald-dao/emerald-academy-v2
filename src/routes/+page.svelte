<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	import { HeroSection, ExploreSection } from '$lib/components/pages/home';
	import StatsSection from '$lib/components/pages/home/StatsSection.svelte';
	import AcademySection from '$lib/components/pages/home/AcademySection.svelte';
	import SocialMediaSection from '$lib/components/pages/home/SocialMediaSection.svelte';
	import JoinSection from '$lib/components/pages/home/JoinSection.svelte';
	import { append_empty_stylesheet } from 'svelte/internal';
	


	//INFO PARA PROBAR LA DATA
	

</script>

<HeroSection />
<ExploreSection />
<StatsSection/>
<AcademySection/>
<SocialMediaSection/>
<JoinSection/>