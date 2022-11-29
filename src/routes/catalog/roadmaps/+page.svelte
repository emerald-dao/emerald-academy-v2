<script>
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';

	export let data;
	console.log(data);
</script>

<Section>
	<Container>
		{#each data.roadmap as road}
			<div class="wrapper">
				<a href={`${road.postPath.replace('content', 'catalog')}`}>
					<Card width="100%">
						<h4>Roadmap {road.roadmap.name}</h4>
						<p>{road.roadmap.excerpt}</p>
					</Card>
				</a>
			</div>
		{/each}
	</Container>
</Section>

<style>
	.wrapper {
		margin-bottom: 3em;
	}
</style>
