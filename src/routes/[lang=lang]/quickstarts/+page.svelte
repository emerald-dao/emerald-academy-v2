<script type="ts">
	import LL from '$i18n/i18n-svelte';
	import QuickstartCard from '$lib/components/cards/QuickstartCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Seo } from '@emerald-dao/component-library';

	export let data;
</script>

<section class="container">
	<h1 class="w-medium heading">{$LL[ContentTypeEnum.Quickstart]()}s</h1>
	<p>Browse completed DApps for you to clone and test on your own computer.</p>
	<p>
		To add your own Quickstart, make a Pull Request <a
			href="https://github.com/emerald-dao/emerald-academy-v2/tree/main/src/lib/content/quickstarts"
			target="_blank"
			rel="noreferrer">here</a
		>.
	</p>
	<div class="templates-wrapper">
		{#if data.quickstarts.length > 0}
			{#each data.quickstarts as quickstartData}
				<QuickstartCard {quickstartData} />
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
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		.templates-wrapper {
			display: flex;
			flex-direction: column;
			margin-top: var(--space-5);
			gap: var(--space-5);

			@include mq(medium) {
				flex-direction: row;
				flex-wrap: wrap;
				row-gap: var(--space-10);
				justify-content: space-between;
				margin-top: var(--space-10);
			}
		}
	}
</style>
