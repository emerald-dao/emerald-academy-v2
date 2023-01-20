<script type="ts">
	import TemplatesCard from '$lib/components/cards/TemplatesCard.svelte';

	export let data;
</script>

<section class="container">
	<h1 class="w-medium heading">Templates</h1>
	<div class="templates-wrapper">
		{#each data.templates as templateData}
			<TemplatesCard {templateData} />
		{/each}
	</div>
</section>

<style type="scss">
	.templates-wrapper {
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--space-10);
		justify-content: space-between;
		margin-top: var(--space-15);
	}
</style>
