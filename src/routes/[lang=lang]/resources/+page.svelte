<script type="ts">
	import ResourcesCard from '$lib/components/cards/ResourcesCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import LL from '$i18n/i18n-svelte';

	import { resources } from '$lib/config/resources';
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL[ContentTypeEnum.Resources]()}</h1>
	<div class="resources-wrapper">
		{#each resources as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>
</section>

<style type="scss">
	.resources-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin-top: var(--space-15);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-4);
		}
	}
</style>
