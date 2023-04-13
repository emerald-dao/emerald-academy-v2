<script type="ts">
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { Label } from '@emerald-dao/component-library';

	export let type: ContentTypeEnum | SubjectsEnum | ExpertiseEnum;
	export let color: 'transparent' | 'primary' | 'tertiary' | 'neutral' = 'transparent';
	export let state: 'on' | 'off' = 'on';
</script>

{#if type === ContentTypeEnum.Course}
	<Label size="small" iconLeft="tabler:tag" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.Bootcamp}
	<Label size="small" iconLeft="tabler:video" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.Roadmap}
	<Label size="small" iconLeft="tabler:road" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.Blog}
	<Label size="small" iconLeft="tabler:book" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.Tweet}
	<Label size="small" iconLeft="tabler:bird" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.External}
	<Label size="small" iconLeft="tabler:link" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ContentTypeEnum.Tutorial}
	<Label size="small" iconLeft="tabler:news" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === SubjectsEnum.Backend}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === SubjectsEnum.IPFS}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === SubjectsEnum.Cadence}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === SubjectsEnum.Web}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ExpertiseEnum.Beginner}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ExpertiseEnum.Intermediate}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{:else if type === ExpertiseEnum.Advanced}
	<Label size="small" {color} {state} hasBorder={false}><slot /></Label>
{/if}
