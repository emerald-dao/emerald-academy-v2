<script type="ts">
	import { locale } from '$i18n/i18n-svelte';

	export let data;
</script>

<section class="container">
	<div class="sidebar">
		<h5>Search:</h5>
		<input type="text" />
	</div>
	<div class="main">
		<h1>Cadence by Example</h1>
		{#each data.content as content}
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
