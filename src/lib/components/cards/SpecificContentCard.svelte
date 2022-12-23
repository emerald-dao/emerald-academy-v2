<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import Label from '@emerald-dao/component-library/components/Label/Label.svelte';
	import ContentLabel from '../label/ContentLabel.svelte';

	export let overview: Overview;
</script>

<div class="data">
	<ContentLabel type={overview.contentType} color="primary"
		>{firstCapital(overview.contentType)}</ContentLabel
	>
	<h3>
		{overview.title}
	</h3>
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
		<div class="label-display">
			<Label iconLeft="tabler:arrow-down-right" color="neutral">{subject}</Label>
		</div>
	{/each}
</div>

<style type="scss">
	h3,
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
	.label-display {
		margin-right: var(--space-3);
	}
</style>
