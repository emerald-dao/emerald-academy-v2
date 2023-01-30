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
		display: flex;
		flex-direction: column;
		@include mq(small) {
			display: grid;
			grid-template-columns: 5fr 2fr;
			gap: var(--space-10);
		}
	}

	aside {
		display: none;
		@include mq(small) {
			display: block;
			position: sticky;
			top: 140px;
			height: fit-content;
		}
	}
</style>
