<script type="ts">
	import TagToggle from '$lib/components/atoms/TagToggle.svelte';
	import type { Filter, FilterSlugs } from '$lib/types/content/filters/filter.interface';

	export let filters: Filter[];

	const addToFilterBucket = (bucket: number, slug: FilterSlugs) => {
		filters[bucket].filterBucket.push(slug);
		console.log(filters[bucket].filterBucket);
		return filters[bucket].filterBucket;
	};
	const deleteFromFilterBucket = (bucket: number, slug: FilterSlugs) => {
		const index = filters[bucket].filterBucket.indexOf(slug);
		if (index > -1) {
			filters[bucket].filterBucket.splice(index, 1);
		}
		console.log(filters[bucket].filterBucket);

		return filters[bucket].filterBucket;
	};
</script>

{#each filters as filter, i}
	<div>
		<h5>{filter.title}</h5>
		<div class="tags-wrapper">
			{#each filter.filterElement as element}
				<div class="each-tag">
					<TagToggle
						icon={element.icon}
						name={element.slug}
						on:selected={() => (filters[i].filterBucket = addToFilterBucket(i, element.slug))}
						on:unselected={() =>
							(filters[i].filterBucket = deleteFromFilterBucket(i, element.slug))}
					>
						{element.title}
					</TagToggle>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style type="scss">
	h5 {
		margin-bottom: var(--space-5);
		margin-top: 0;
	}

	.tags-wrapper {
		flex-wrap: wrap;
		margin-bottom: var(--space-3);

		.each-tag {
			margin-bottom: var(--space-3);
		}
	}
</style>
