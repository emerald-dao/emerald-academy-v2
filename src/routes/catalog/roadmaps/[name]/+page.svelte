<script>
	import { Section, Container } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';

	export let data;
	console.log(data);
</script>

<Section>
	<Container>
		{#each data.roadmap.content as cont}
			{#if cont.externalContent}
				<div>
					<a href={cont.url} target="_blank">
						<Card width="100%">
							<h4>{cont.name}</h4>
						</Card>
					</a>
				</div>
			{:else}
				<div>
					<a href={`${cont.slug.replace('content', 'catalog')}`} data-sveltekit-prefetch>
						<Card width="100%">
							<h4>{cont.name}</h4>
						</Card>
					</a>
				</div>
			{/if}
		{/each}
	</Container>
</Section>

<style>
	div {
		padding-bottom: 3em;
	}
</style>
