<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	// import {ExploreCatalog} from '$lib/components/pages/catalog/ExploreCatalog.svelte'
	import { personas } from '$stores/PersonasPrueba';
</script>

{#each personas as persona}
	<a href="/catalog/bootcamps/{persona.nombre}">{persona.nombre}</a>
{/each}
