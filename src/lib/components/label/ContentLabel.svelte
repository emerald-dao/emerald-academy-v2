<script type="ts">
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Label } from '@emerald-dao/component-library';
	export let type: ContentTypeEnum;
	console.log(type);
</script>

{#if type === ContentTypeEnum.Course}
	<Label iconLeft="tabler:tag"><slot /></Label>
{:else if type === ContentTypeEnum.Bootcamp}
	<Label iconLeft="tabler:video"><slot /></Label>
{:else}
	<Label iconLeft="tabler:road"><slot /></Label>
{/if}
