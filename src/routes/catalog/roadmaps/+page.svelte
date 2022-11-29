<script type="ts">
	import type { RoadmapOverview } from '$lib/types/content/roadmap.interface';
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';

	export let data;

	interface Data {
		roadmap: RoadmapOverview;
		postPath: string;
	}

	console.log(data);
</script>

<Section>
	<Container>
		<!-- {#each data as road} -->
		<div class="wrapper">
			aaa
			<!-- <a href={`${road.url.replace('content', 'catalog')}`}>
					<Card width="100%">
						<h4>Roadmap {road.title}</h4>
						<p>{road.excerpt}</p>
					</Card>
				</a> -->
		</div>
		<!-- {/each} -->
	</Container>
</Section>

<style>
	.wrapper {
		margin-bottom: 3em;
	}
</style>
