<script type="ts">
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	import CatalogContent from './components/sections/CatalogContent.svelte';
	import CatalogSidebar from './components/sections/CatalogSidebar.svelte';

	export let data;
	console.log(data);
</script>

<Section>
	<div class="main-wrapper">
		<CatalogSidebar />
		<CatalogContent contents={data.content} />
	</div>
</Section>

<style type="scss">
</style>
