<script type="ts">
	import { TagToggle } from '$atoms';
	import { tags } from '$lib/config/tags';

	const content = [
		{
			name: 'COURSES /',
			tags: ['courses']
		},
		{
			name: 'content 2',
			tags: ['web', 'dev']
		},
		{
			name: 'content 3',
			tags: ['frontend', 'dev']
		}
	];

	let selectedFilter: string[] = [];

	const addToFilter = (tag: string) => {
		selectedFilter = [...selectedFilter, tag];
	};

	const deleteFromFilter = (tag: string) => {
		const index = selectedFilter.indexOf(tag);
		if (index > -1) {
			selectedFilter.splice(index, 1);
		}
		selectedFilter = selectedFilter;
	};
</script>

{#each tags as tag}
	<TagToggle
		name={tag}
		on:selected={() => addToFilter(tag)}
		on:unselected={() => deleteFromFilter(tag)}>{tag}</TagToggle
	>
{/each}
{#each content as cont}
	{#if cont.tags.some((r) => selectedFilter.indexOf(r) >= 0) || selectedFilter.length < 1}
		{cont.name}
	{/if}
{/each}
