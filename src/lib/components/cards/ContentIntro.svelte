<script type="ts">
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import { Label, Breadcrumbs } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { page } from '$app/stores';

	export let overview: Overview;
	export let showBreadcrumbs: boolean = false;
	let param;

	if ($page.params.subject) {
		param = $page.params.subject;
	} else {
		param = $page.params.name;
	}

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/${$page.params.lang}/catalog`,
			label: firstCapital(overview.contentType)
		},
		{
			path: `/${$page.params.lang}/catalog/${overview.contentType}s/${param}`,
			label: transformUrlToHeading(param)
		}
	];
</script>

<div class="main-wrapper">
	{#if showBreadcrumbs}
		<Breadcrumbs {routes} />
	{/if}
	<h2>
		{overview.title}
	</h2>
	<div class="metadata-labels">
		<ContentLabel type={overview.contentType} color="neutral">
			{firstCapital(overview.contentType)}
		</ContentLabel>
		<Label size="small" iconLeft="tabler:flame" color="transparent"
			>Level: {overview.metadata.expertise}</Label
		>
		<Label size="small" color="transparent" iconLeft="tabler:hourglass-high"
			>{overview.metadata.duration}</Label
		>
	</div>
	<p>
		{overview.excerpt}
	</p>
	<slot />
</div>

<style type="scss">
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);

		.metadata-labels {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: var(--space-2);
		}

		p {
			max-width: 50ch;
		}
	}
</style>
