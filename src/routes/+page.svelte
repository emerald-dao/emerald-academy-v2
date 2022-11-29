<script type="ts">
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import { Label } from '@emerald-dao/component-library';
	import {
		HeroSection,
		ExploreSection,
		StatsSection,
		AcademySection,
		SocialMediaSection,
		JoinSection
	} from './components';

	// questionAnswer dinamicas, cada contenido tiene una distinta, agregar property al overview.
</script>

<HeroSection />
<ExploreSection />
<StatsSection />
<AcademySection />
<SocialMediaSection />
<JoinSection />

<style>
	.card-primary {
		padding: var(--space-20);
	}
</style>
