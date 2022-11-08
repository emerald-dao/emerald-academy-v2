<script type="ts">
	import { Section, Container, Card } from '@mateoroldos/svelte.bones';
	import { TagToggle } from '$atoms';
	import { tags } from '$lib/config/tags';

	const content = [
		{
			name: 'content 1',
			tags: ['Live Bootcamp']
		},
		{
			name: 'content 2',
			tags: ['Live Bootcamp', 'Tips & Tricks']
		},
		{
			name: 'content 3',
			tags: ['Courses']
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

<Section>
	<Container>
		<h3>Catalog</h3>
	</Container>
</Section>
<Section>
	<Container>
		<h4>Type of content</h4>
		<div class="columns">
			<div>
				<div>
					<a href="/catalog/courses">Courses</a>
				</div>
			</div>
		</div></Container
	>
	<Container>
		<h4>Subject</h4>
		<div class="columns">
			<div>
				{#each tags as tag}
					<div>
						<TagToggle
							name={tag}
							on:selected={() => addToFilter(tag)}
							on:unselected={() => deleteFromFilter(tag)}>{tag}</TagToggle
						>
					</div>
				{/each}
			</div>
			<div>
				{#each content as cont}
					{#if cont.tags.some((r) => selectedFilter.indexOf(r) >= 0) || selectedFilter.length < 1}
						{cont.name}
					{/if}
				{/each}
			</div>
		</div>
	</Container>
</Section>

<style type="scss">
	@use '../../../../lib/styles/utils' as *;

	.columns {
		display: grid;
		grid-template-columns: 2fr 5fr;
		gap: 3rem;
	}
</style>
