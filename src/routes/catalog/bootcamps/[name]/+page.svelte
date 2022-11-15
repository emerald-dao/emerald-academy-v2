<script>
	import Card from '$lib/components/atoms/Card.svelte';
	import { Section, Container } from '@mateoroldos/svelte.bones';

	export let data;
	let weekNumber = 0;
	console.log(data);
</script>

<div class="grid-wrapper">
	<Section>
		<Container>
			<div>
				<h2>
					{data.overview.title}
				</h2>
				<p>
					{data.overview.excerpt}
				</p>
			</div>
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

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
