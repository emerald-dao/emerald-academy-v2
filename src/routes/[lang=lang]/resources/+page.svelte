<script type="ts">
	import ResourcesCard from '$lib/components/cards/ResourcesCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import LL from '$i18n/i18n-svelte';

	import { blogs, developerResources, networkDiscovery, youtube } from '$lib/config/resources';
	import Seo from '$lib/components/seo/Seo.svelte';
</script>

<section class="container">
	<!-- <h1 class="w-medium heading">{$LL[ContentTypeEnum.Resources]()}</h1> -->
	<h2>YouTube Channels</h2>
	<div class="resources-wrapper">
		{#each youtube as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h2>Developer Resources</h2>
	<div class="resources-wrapper">
		{#each developerResources as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h2>Network Discovery</h2>
	<div class="resources-wrapper">
		{#each networkDiscovery as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h2>Blogs</h2>
	<div class="resources-wrapper">
		{#each blogs as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>
</section>

<Seo
	title={`Resources | Emerald Academy`}
	description="Resources in addition to all the material provided within the academy"
	type="WebPage"
/>

<style type="scss">
	h2 {
		margin-bottom: var(--space-5);
	}

	.resources-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin-top: var(--space-5);
		margin-bottom: var(--space-15);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--space-4);
		}
	}
</style>
