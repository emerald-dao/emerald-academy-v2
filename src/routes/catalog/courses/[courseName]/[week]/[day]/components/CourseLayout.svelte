<script>
	import TableOfContent from './TableOfContent.svelte';

	export let headings;
</script>

<TableOfContent {headings} />
<slot />
