<script>
	import { Section, Container, Card } from '@mateoroldos/svelte.bones';

	export let data;
	console.log(data);
</script>

<Section>
	<Container>
		{#each data.roadmap.content as cont}
			{#if cont.externalContent}
				<a href={cont.url} target="_blank">
					<Card>
						<h4>{cont.name}</h4>
					</Card>
				</a>
			{:else}
				<a href={`${cont.slug.replace('content', 'catalog')}`} data-sveltekit-prefetch>
					<Card>
						<h4>{cont.name}</h4>
					</Card>
				</a>
			{/if}
		{/each}
	</Container>
</Section>
