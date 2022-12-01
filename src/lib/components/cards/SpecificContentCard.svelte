<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import Label from '@emerald-dao/component-library/components/Label/Label.svelte';

	export let overview: Overview;
</script>

<div class="data">
	{#if overview.contentType == 'course'}
		<Label iconLeft="tabler:tag">{overview.contentType}</Label>
	{:else if overview.contentType == 'bootcamp'}
		<Label iconLeft="tabler:video">{overview.contentType}</Label>
	{:else}
		<Label iconLeft="tabler:road">{overview.contentType}</Label>
	{/if}

	<h2>
		{overview.title}
	</h2>
	<div class="flex labelDisplay">
		<div class="metadata">
			<Label iconLeft="tabler:flame" color="transparent">Level: {overview.metadata.expertise}</Label
			>
		</div>
		<div>
			<Label color="transparent" iconLeft="tabler:hourglass-high"
				>{overview.metadata.duration}</Label
			>
		</div>
	</div>
	<p>
		{overview.excerpt}
	</p>
</div>
<div class="flex">
	{#each overview.metadata.subjects as subject}
		<div class="labelDisplay">
			<Label iconLeft="tabler:arrow-down-right" color="neutral">{subject}</Label>
		</div>
	{/each}
</div>

<style type="scss">
	h2,
	p {
		padding: var(--space-4) 0 var(--space-4) 0;
	}
	.flex {
		display: flex;
		flex-direction: row;
		padding: var(--space-4) 0 var(--space-4) 0;
	}
	.metadata {
		margin-right: var(--space-3);
	}
</style>
