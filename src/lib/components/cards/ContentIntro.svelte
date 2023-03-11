<script type="ts">
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import { Label, Breadcrumbs } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { page } from '$app/stores';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { daysOfDifference } from '$lib/utilities/dataTransformation/daysOfDifference';
	import { onMount } from 'svelte/internal';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';

	export let overview: Overview;
	export let showBreadcrumbs: boolean = false;
	let param;
	let startDate: Date;
	let endDate: Date;

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

	if (overview.contentType === ContentTypeEnum.Bootcamp) {
		let dates: Date[] = [];
		(overview as BootcampOverview).videos.forEach((element) => {
			dates.push(element.date);
		});

		startDate = new Date(Math.min(...dates.map((date: Date) => date.getTime())));
		endDate = new Date(Math.max(...dates.map((date: Date) => date.getTime())));
	}
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
		<Label size="small" iconLeft="tabler:flame" color="transparent">
			Level: {overview.metadata.expertise}
		</Label>
		<Label size="small" color="transparent" iconLeft="tabler:hourglass-high">
			{overview.metadata.duration}
		</Label>
		{#if overview.contentType === ContentTypeEnum.Bootcamp}
			{#if daysOfDifference(new Date(), startDate) > 0}
				<Label size="small" color="transparent" iconLeft="ic:outline-access-time">
					Starting soon
				</Label>
			{:else if daysOfDifference(startDate, new Date()) > 0 && daysOfDifference(new Date(), endDate) > 0}
				<Label size="small" color="transparent" iconLeft="ic:outline-access-time">
					In progress
				</Label>
			{:else}
				<Label size="small" color="transparent" iconLeft="ic:outline-access-time">
					Bootcamp has ended
				</Label>
			{/if}
		{/if}
	</div>
	{#if overview.contentType === ContentTypeEnum.Bootcamp}
		<div class="row-10">
			<span
				>Start Date: {startDate.toLocaleDateString('en-US', {
					month: 'numeric',
					day: 'numeric',
					year: 'numeric'
				})}
			</span>
			<span
				>End Date: {endDate.toLocaleDateString('en-US', {
					month: 'numeric',
					day: 'numeric',
					year: 'numeric'
				})}
			</span>
		</div>
	{/if}
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
