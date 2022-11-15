<script>
	export let data;
	console.log(data);
	import { Container, Section, Card } from '@mateoroldos/svelte.bones';
</script>

<Section>
	<Container>
		<h4>Tips and tricks section</h4>

		{#each data.tAt as tip}
			<a href={`${tip.path.replace('content', 'catalog')}`} data-sveltekit-prefetch>
				<Card
					><h4>{tip.meta.title}</h4>
					<p>{tip.meta.excerpt}</p></Card
				>
			</a>
		{/each}
	</Container>
</Section>
