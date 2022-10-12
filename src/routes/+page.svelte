<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	import { HeroSection, ExploreSection } from '$lib/components/pages/home';
	import Stats from '$lib/components/pages/home/Stats.svelte';
	import Academy from '$lib/components/pages/home/Academy.svelte';
	import SocialMedia from '$lib/components/pages/home/SocialMedia.svelte';
	import Join from '$lib/components/pages/home/Join.svelte';
</script>

<HeroSection />
<ExploreSection />
<Stats/>
<Academy/>
<SocialMedia/>
<Join/>