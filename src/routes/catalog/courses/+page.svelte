<script type="ts">
	import dappInfo from '$lib/config/config';
	import { Section, Container, Column } from '@mateoroldos/svelte.bones';
	import { transactionInProgress } from '$stores/FlowStore';
	import { personas } from '$lib/stores/PersonasPrueba';
</script>

{#each personas as persona}
	<div>
		<a href="/catalog/cadence/{persona.nombre}">{persona.nombre}</a>
	</div>
{/each}
