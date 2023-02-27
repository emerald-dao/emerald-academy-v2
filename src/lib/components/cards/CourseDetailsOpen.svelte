<script type="ts">
	import { slide } from 'svelte/transition';
	import type { BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

	export let data: BootcampVideo | any;
	export let i: number;
	export let typeOfcontent: ContentTypeEnum;
</script>

<div class="details column-2" transition:slide>
	{#if typeOfcontent === ContentTypeEnum.Course}
		{#each data.contents as content, index}
			<a href={`/${content.slug}`} target="_blank" rel="noreferrer" class="header-link">
				{`${i + 1}.${index + 1} ${content.metadata.title}`}
			</a>
		{/each}
	{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
		{#each data.chapters as chapter}
			<a href={chapter.link} target="_blank" rel="noreferrer" class="header-link">
				{chapter.name}
			</a>
		{/each}
	{/if}
</div>

<style type="scss">
	.details {
		padding-left: var(--space-14);
		padding-bottom: var(--space-4);
	}
</style>
