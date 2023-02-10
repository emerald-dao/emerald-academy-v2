<script type="ts">
	import { locale, LL } from '$i18n/i18n-svelte';
	import { createSearchStore, searchHandler } from '$stores/searchBar';
	import { onDestroy } from 'svelte';

	export let data;

	type CadenceByExample = {
		meta: Record<PropertyKey, any> = {};
		path: string;
		searchTerms: string;
	};

	const searchCadence: CadenceByExample[] = data.content.map((product: CadenceByExample) => ({
		...product,
		searchTerms: `${product.meta.title}`
	}));

	const searchStore = createSearchStore(searchCadence);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<section class="container">
	<div class="sidebar">
		<h5>{$LL.SEARCH()}</h5>
		<input type="text" placeholder="Search..." bind:value={$searchStore.search} />
	</div>
	<div class="main">
		<h1>Cadence by Example</h1>
		{#each $searchStore.filtered as content}
			<a
				class="title-wrapper w-medium heading"
				href={`/${$locale}/cadence-by-example/${content.path.split('/')[3]}`}
				>{content.meta.title}</a
			>
		{/each}
	</div>
</section>

<style type="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);

		@include mq(small) {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: var(--space-10);
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
			padding-bottom: var(--space-5);

			@include mq(small) {
				border-right: var(--border-width-primary) var(--clr-border-primary) solid;
				border-bottom: 0;
				height: fit-content;
				padding-block: var(--space-9);
				padding-right: var(--space-10);
				position: sticky;
				top: 50px;
				gap: 0;
			}

			h5 {
				margin: var(--space-5) 0;
			}
		}

		.main {
			display: flex;
			flex-direction: column;
			gap: var(--space-5);

			.title-wrapper {
				text-decoration: none;
				border: var(--border-width-primary) solid var(--clr-border-primary);
				border-radius: var(--radius-5);
				padding: var(--space-4) var(--space-6);
			}
		}
	}
</style>
