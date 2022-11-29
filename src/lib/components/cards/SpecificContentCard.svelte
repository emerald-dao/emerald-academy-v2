<script type="ts">
	import type { Overview } from '$lib/types/content-overview.interface';
	import Label from '@emerald-dao/component-library/components/Label/Label.svelte';
	import Icon from '@iconify/svelte';
	export let overview: Overview;
</script>

<div>
	<Label iconLeft="tabler:arrow-down-right">Live {overview.contentType}</Label>
	<Icon icon="tabler:arrow-down-right" />
	<h2>
		{overview.title}
	</h2>
	<p>
		{overview.excerpt}
	</p>
</div>
<div class="flex">
	<Label>Level: {overview.level}</Label>
	<Label>Weeks: {overview.weeks.length}</Label>
</div>
<div class="flex">
	{#each overview.tags as tag}
		<div>
			<Label>{tag}</Label>
		</div>
	{/each}
</div>

<style>
	.flex {
		display: flex;
		flex-direction: row;
		padding-top: 2em;
	}
</style>
