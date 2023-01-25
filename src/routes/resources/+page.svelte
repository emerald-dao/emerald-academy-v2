<script type="ts">
	import ResourcesCard from '$lib/components/cards/ResourcesCard.svelte';

	import { resources } from '$lib/config/resources';
</script>

<section class="container">
	{#each resources as resource}
		<ResourcesCard {resource} />
	{/each}
</section>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-4);
		}
	}
</style>
