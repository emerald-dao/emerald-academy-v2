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
	// import Slider from '$lib/components/atoms/Slider.svelte';
	// import Slider from '$lib/components/atoms/Slider.svelte';
	const palabras = ['Hola', 'Hola2', 'Hola3'];
	import Card from '$lib/components/atoms/Card.svelte';
	import { each } from 'svelte/internal';

	export const info = [{ name: 'uno' }, { name: 'dos' }];
	import Layout from './+layout.svelte';
	import Modal from '$lib/components/atoms/Modal.svelte';
</script>

<HeroSection />
<ExploreSection />
<StatsSection />
<AcademySection />
<SocialMediaSection />
<JoinSection />
