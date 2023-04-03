<script lang="ts" context="module">
	import block from '$lib/components/codeblock/CodeBlock.svelte';

	export { block };
</script>

<script>
	import TableOfContent from './TableOfContent.svelte';

	export let headings;
</script>

<div class="main-wrapper">
	<div class="content">
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

		@include mq(medium) {
			display: grid;
			grid-template-columns: 65ch auto;
			gap: var(--space-12);
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
	}

	aside {
		display: none;
		@include mq(medium) {
			display: block;
			position: sticky;
			top: 140px;
			height: fit-content;
		}
	}
</style>
