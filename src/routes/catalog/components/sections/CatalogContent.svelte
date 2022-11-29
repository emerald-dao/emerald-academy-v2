<script type="ts">
	import { contentTypes } from '$lib/config/contentTypes';
	import { Section, Container, Column, Row } from '@mateoroldos/svelte.bones';
	import { TagToggle } from '$atoms';
	import { tags } from '$lib/config/tags';
	import type { Overview } from '$lib/types/content-overview.interface';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';

	export let contents: Overview[];

	let selectedTags: string[] = [];
	let selectedContentTypes: string[] = [];

	const addToFilter = (selectionArray: string[], selectedItem: string) => {
		selectionArray.push(selectedItem);
		return selectionArray;
	};

	const deleteFromFilter = (selectionArray: string[], selectedItem: string) => {
		const index = selectionArray.indexOf(selectedItem);
		if (index > -1) {
			selectionArray.splice(index, 1);
		}

		return selectionArray;
	};
</script>

<Section>
	<Container>
		<div class="grid1">
			<Column align="flex-start">
				<Column align="flex-start">
					<h4>Type of content</h4>
					<Column gap="small" align="flex-start">
						{#each contentTypes as type}
							<TagToggle
								name={type}
								on:selected={() => (selectedContentTypes = addToFilter(selectedContentTypes, type))}
								on:unselected={() =>
									(selectedContentTypes = deleteFromFilter(selectedContentTypes, type))}
								>{type}</TagToggle
							>
						{/each}
					</Column>
				</Column>
				<Column align="flex-start">
					<h4>Subject</h4>
					<Column gap="small" align="flex-start">
						{#each tags as tag}
							<TagToggle
								name={tag}
								on:selected={() => (selectedTags = addToFilter(selectedTags, tag))}
								on:unselected={() => (selectedTags = deleteFromFilter(selectedTags, tag))}
								>{tag}</TagToggle
							>
						{/each}
					</Column>
				</Column>
			</Column>
			<Column gap="small">
				<div class="grid">
					{#each contents as content}
						{#if content.tags.some((r) => selectedTags.indexOf(r) >= 0) || selectedTags.length < 1}
							{#if selectedContentTypes.includes(content.contentType) || selectedContentTypes.length < 1}
								<ContentCard overview={content} />
							{/if}
						{/if}
					{/each}
				</div>
			</Column>
		</div>
	</Container>
</Section>
<!-- 
<script type="ts">
	import { contentTypes } from '$lib/config/contentTypes';
	import { Section, Container, Column, Row } from '@mateoroldos/svelte.bones';
	import { TagToggle } from '$atoms';
	import { tags } from '$lib/config/tags';
	import type { Overview } from '$lib/types/content-overview.interface';
	import ContentCard from '$lib/components/cards/ContentCard.svelte';

	export let contents: Overview[];

	let selectedTags: string[] = [];
	let selectedContentTypes: string[] = [];

	const addToFilter = (selectionArray: string[], selectedItem: string) => {
		selectionArray.push(selectedItem);
		return selectionArray;
	};

	const deleteFromFilter = (selectionArray: string[], selectedItem: string) => {
		const index = selectionArray.indexOf(selectedItem);
		if (index > -1) {
			selectionArray.splice(index, 1);
		}

		return selectionArray;
	};
</script>

<Section>
	<Container>
		<div class="grid1">
			<Column align="flex-start">
				<Column align="flex-start">
					<h4>Type of content</h4>
					<Column gap="small" align="flex-start">
						{#each contentTypes as type}
							<TagToggle
								name={type}
								on:selected={() => (selectedContentTypes = addToFilter(selectedContentTypes, type))}
								on:unselected={() =>
									(selectedContentTypes = deleteFromFilter(selectedContentTypes, type))}
								>{type}</TagToggle
							>
						{/each}
					</Column>
				</Column>
				<Column align="flex-start">
					<h4>Subject</h4>
					<Column gap="small" align="flex-start">
						{#each tags as tag}
							<TagToggle
								name={tag}
								on:selected={() => (selectedTags = addToFilter(selectedTags, tag))}
								on:unselected={() => (selectedTags = deleteFromFilter(selectedTags, tag))}
								>{tag}</TagToggle
							>
						{/each}
					</Column>
				</Column>
			</Column>
			<Column gap="small">
				<div class="grid">
					{#each contents as content}
						{#if content.tags.some((r) => selectedTags.indexOf(r) >= 0) || selectedTags.length < 1}
							{#if selectedContentTypes.includes(content.contentType) || selectedContentTypes.length < 1}
								<ContentCard overview={content} />
							{/if}
						{/if}
					{/each}
				</div>
			</Column>
		</div>
	</Container>
</Section>

<style type="scss">
	.grid {
		display: grid;
		grid-template-columns: 2fr 2fr;
		gap: 3rem;
	}
	.grid1 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 3rem;
	}

	.grid > * {
		flex: 1;
	}
</style> -->

<style type="scss">
	.grid {
		display: grid;
		grid-template-columns: 2fr 2fr;
		gap: 3rem;
	}
	.grid1 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 3rem;
	}

	.grid > * {
		flex: 1;
	}
</style>
