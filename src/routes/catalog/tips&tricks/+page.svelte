<script>
	export let data;
	console.log(data);
	import { Container, Section } from '@mateoroldos/svelte.bones';
	import Card from '$lib/components/atoms/Card.svelte';
</script>

<Section>
	<Container>
		<h4>Tips and tricks section</h4>

		{#each data.tAt as tip}
			<div>
				<a href={`${tip.path.replace('content', 'catalog')}`} data-sveltekit-prefetch>
					<Card width="100%"
						><h4>{tip.meta.title}</h4>
						<p>{tip.meta.excerpt}</p>
						<div class="flex">
							{#each tip.meta.tags as tag}
								<p>{tag}</p>
							{/each}
						</div>
					</Card>
				</a>
			</div>
		{/each}
	</Container>
</Section>

<style>
	div,
	h4 {
		padding-bottom: 1em;
	}
	.flex {
		display: flex;
		justify-content: right;
	}
	p {
		gap: 3em;
		display: block;
	}
</style>
