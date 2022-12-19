<script type="ts">
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Label } from '@emerald-dao/component-library';
	export let type: ContentTypeEnum;
	export let color: 'transparent' | 'primary' | 'neutral' = 'transparent';
	export let state: 'on' | 'off' = 'on';
	console.log(type);
</script>

{#if type === ContentTypeEnum.Course}
	<Label iconLeft="tabler:tag" {color} {state}><slot /></Label>
{:else if type === ContentTypeEnum.Bootcamp}
	<Label iconLeft="tabler:video" {color} {state}><slot /></Label>
{:else}
	<Label iconLeft="tabler:road" {color} {state}><slot /></Label>
{/if}
