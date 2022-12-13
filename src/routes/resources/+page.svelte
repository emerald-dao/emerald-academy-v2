<script type="ts">
	import ResourcesCard from '$lib/components/cards/ResourcesCard.svelte';

	import { resources } from '$lib/config/resources';
	console.log(resources);
</script>

<section>
	<div class="container">
		{#each resources as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>
</section>

<style class="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4);
	}
</style>
