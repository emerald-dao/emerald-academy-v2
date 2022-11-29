<script type="ts">
	import TagToggle from '$lib/components/atoms/TagToggle.svelte';
	export let filters: Filter[];

	interface Filter {
		title: string;
		filterElement: FilterElement[];
		filterBucket: string[];
	}
	interface FilterElement {
		title: string;
		icon: string;
		slug: string;
	}
	const addToFilterBucket = (bucket: number, slug: string) => {
		filters[bucket].filterBucket.push(slug);
		console.log(filters[bucket].filterBucket);
		return filters[bucket].filterBucket;
	};
	const deleteFromFilterBucket = (bucket: number, slug: string) => {
		const index = filters[bucket].filterBucket.indexOf(slug);
		if (index > -1) {
			filters[bucket].filterBucket.splice(index, 1);
		}
		console.log(filters[bucket].filterBucket);

		return filters[bucket].filterBucket;
	};
</script>

{#each filters as filter, i}
	<h5>{filter.title}</h5>

	{#each filter.filterElement as element}
		<TagToggle
			name={element.title}
			on:selected={() => (filters[i].filterBucket = addToFilterBucket(i, element.slug))}
			on:unselected={() => (filters[i].filterBucket = deleteFromFilterBucket(i, element.slug))}
		>
			{element.title}
		</TagToggle>
	{/each}
	<button on:click={() => console.log(filter.filterBucket)}>a</button>
{/each}
