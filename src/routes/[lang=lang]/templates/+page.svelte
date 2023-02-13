<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import TemplatesCard from '$lib/components/cards/TemplatesCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import type { Template } from '$lib/types/content/templates.interface';

	export let data: Data;

	interface Data {
		templates: Template[];
		locale: string;
	}
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL[ContentTypeEnum.Template]()}</h1>
	<div class="templates-wrapper">
		{#each data.templates as templateData}
			<TemplatesCard {templateData} />
		{/each}
	</div>
</section>

<style type="scss">
	.templates-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: var(--space-10);
		gap: var(--space-5);

		@include mq(medium) {
			flex-direction: row;
			flex-wrap: wrap;
			row-gap: var(--space-10);
			justify-content: space-between;
			margin-top: var(--space-15);
		}
	}
</style>
