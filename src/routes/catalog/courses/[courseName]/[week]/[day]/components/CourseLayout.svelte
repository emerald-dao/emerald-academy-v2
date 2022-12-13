<script>
	import TableOfContent from './TableOfContent.svelte';

	export let headings;
</script>

<div class="main-wrapper">
	<div>
		<slot />
	</div>
	<aside>
		<TableOfContent {headings} />
	</aside>
</div>

<style type="scss">
	.main-wrapper {
		display: grid;
		grid-template-columns: 5fr 2fr;
		gap: var(--space-10);

		aside {
			position: sticky;
			top: 140px;
			height: fit-content;
		}
	}
</style>
