<script type="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import SpecificContentCard from '$lib/components/cards/SpecificContentCard.svelte';
	import Faqs from '$lib/components/faqs/Faqs.svelte';
	import type { Overview } from '$lib/types/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import { Section, Container } from '@mateoroldos/svelte.bones';

	export let data: Data;

	interface Data {
		overview: Overview;
	}
	console.log(data);
</script>

<div class="grid-wrapper">
	<Section>
		<Container>
			<SpecificContentCard overview={data.overview} />
		</Container>
	</Section>

	<Section>
		<Container>
			<div>
				<Card>
					<p>CURRICULUM OVERVIEW</p>
					{#each data.overview.weeks as week}
						<span>Week: {data.overview.weeks.indexOf(week) + 1}</span>
						<p>{week.excerpt}</p>
					{/each}
					<p>PREREQUISITES</p>
					{#each data.overview.prerequisites as pr}
						<p>{pr}</p>
					{/each}
				</Card>
			</div>
		</Container>
	</Section>
</div>
<div>
	<Container>
		<Faqs questionAnswer={data.overview.faqs} />
	</Container>
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
