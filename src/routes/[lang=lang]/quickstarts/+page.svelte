<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import TemplatesCard from '$lib/components/cards/TemplatesCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Seo } from '@emerald-dao/component-library';

	export let data;
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL[ContentTypeEnum.Quickstart]()}</h1>
	<div class="templates-wrapper">
		{#if data.quickstarts.length > 0}
			{#each data.quickstarts as quickstartData}
				<TemplatesCard templateData={quickstartData} />
			{/each}
		{:else}
			<p><em>{$LL.NO_QUICKSTARTS_FOUND()}</em></p>
		{/if}
	</div>
</section>

<section class="container">
	<h1 class="w-medium heading">{$LL[ContentTypeEnum.MobileQuickstart]()}</h1>
	<div class="templates-wrapper">
		{#if data.mobileQuickstarts.length > 0}
			{#each data.mobileQuickstarts as quickstartData}
				<TemplatesCard templateData={quickstartData} />
			{/each}
		{:else}
			<p><em>{$LL.NO_QUICKSTARTS_FOUND()}</em></p>
		{/if}
	</div>
</section>

<Seo
	title="Quickstarts | Emerald Academy"
	description="Some codes for quick implementation"
	type="WebPage"
	image="https://academy.ecdao.org/favicon.png"
/>

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
