<script type="ts">
	import ResourcesCard from '$lib/components/cards/ResourcesCard.svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import LL from '$i18n/i18n-svelte';

	import { blogs, developerResources, networkDiscovery, youtube } from '$lib/config/resources';
	import Seo from '$lib/components/seo/Seo.svelte';
</script>

<section class="container">
	<h1 class="w-medium heading">A list of essential things that everyone uses.</h1>
	<h3>YouTube Channels</h3>
	<div class="resources-wrapper">
		{#each youtube as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h3>Developer Resources</h3>
	<div class="resources-wrapper">
		{#each developerResources as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h3>Network Discovery</h3>
	<div class="resources-wrapper">
		{#each networkDiscovery as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>

	<h3>Blogs</h3>
	<div class="resources-wrapper">
		{#each blogs as resource}
			<ResourcesCard {resource} />
		{/each}
	</div>
</section>

<Seo
	title={`Resources | Emerald Academy`}
	description="Essential things that all developers use on Flow."
	type="WebPage"
/>

<style type="scss">
	.title {
		margin-bottom: 20px;
	}
	h1 {
		margin-bottom: var(--space-15);
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
