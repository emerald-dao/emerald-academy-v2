<script type="ts">
	import { Section } from '@mateoroldos/svelte.bones';
	import Filters from '$lib/components/filters/Filters.svelte';
	import { contentTypes } from '$lib/config/contentTypes';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';

	export let data;

	console.log(data);

	let filters = [
		{
			title: 'Type of Content',
			filterElement: [
				{
					title: 'Live Bootcamp',
					icon: 'icon',
					slug: 'Bootcamp'
				},
				{
					title: 'Courses',
					icon: 'icon',
					slug: 'Course'
				}
			],
			filterBucket: []
		},
		{
			title: 'Subject',
			filterElement: [
				{
					title: 'Tips&Tricks',
					icon: 'icon',
					slug: 'Tips&Tricks'
				},
				{
					title: 'Cadence',
					icon: 'icon',
					slug: 'Course'
				}
			],
			filterBucket: []
		}
	];
</script>

<Section>
	<div class="main-wrapper">
		<div><Filters bind:filters /></div>
		<div>
			{#each data.content as content}
				{#if filters[0].filterBucket.includes(content.contentType) || filters[0].filterBucket.length < 1}
					{#if filters[1].filterBucket.includes(content.contentType) || filters[1].filterBucket.length < 1}
						{content.title} <br />
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</Section>
<!-- || filters[0].filterBucket.length < 1 -->

<!-- #if filters[0].filterBucket.includes(content.contentType) ||  -->
<style type="scss">
	.main-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
