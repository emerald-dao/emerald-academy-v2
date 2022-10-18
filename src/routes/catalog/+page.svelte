<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	// import {ExploreCatalog} from '$lib/components/pages/catalog/ExploreCatalog.svelte'
	import ExploreCatalogSection from './components/sections/ExploreCatalogSection.svelte';
</script>

<Section>
	<div class="main-wrapper">
		<!-- <CatalogSidebar/> -->
		<ExploreCatalogSection />
	</div>
</Section>

<style type="scss">
</style>
