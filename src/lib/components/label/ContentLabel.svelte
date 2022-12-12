<script type="ts">
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Label } from '@emerald-dao/component-library';
	export let type: ContentTypeEnum;
	export let color: 'transparent' | 'primary' = 'transparent';
	console.log(type);
</script>

{#if type === ContentTypeEnum.Course}
	<Label iconLeft="tabler:tag" {color}><slot /></Label>
{:else if type === ContentTypeEnum.Bootcamp}
	<Label iconLeft="tabler:video" {color}><slot /></Label>
{:else}
	<Label iconLeft="tabler:road" {color}><slot /></Label>
{/if}
