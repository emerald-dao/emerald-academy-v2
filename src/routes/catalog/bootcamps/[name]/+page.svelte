<script type="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import { Label } from '@emerald-dao/component-library';
	import { Section, Container } from '@mateoroldos/svelte.bones';

	export let data: Data;

	interface Data {
		overview: BootcampOverview;
	}

	console.log(data);
</script>

<div class="grid-wrapper">
	<Section>
		<Container>
			<SpecificContentCard overview={data.overview} />
		</Container>
	</Section>
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
