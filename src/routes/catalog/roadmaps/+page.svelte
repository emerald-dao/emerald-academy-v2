<script>
	import { Section, Container, Card } from '@mateoroldos/svelte.bones';

	export let data;
	console.log(data);
</script>

<Section>
	<Container>
		{#each data.roadmap as road}
			<a href={`roadmaps/${road.name.replace(' ', '-').toLowerCase()}-roadmap`}>
				<!-- acceder a través del path en la llamada  -->
				<Card>
					<h4>Roadmap {road.name}</h4>
					<p>{road.excerpt}</p>
				</Card>
			</a>
		{/each}
	</Container>
</Section>
