<script type="ts">
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { ExpertiseEnum } from '$lib/types/content/metadata/expertise.enum';
	import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { Label } from '@emerald-dao/component-library';
	export let type: ContentTypeEnum | SubjectsEnum | ExpertiseEnum;
	export let color: 'transparent' | 'primary' | 'tertiary' | 'neutral' = 'transparent';
	export let state: 'on' | 'off' = 'on';
	console.log(type);
</script>

{#if type === ContentTypeEnum.Course}
	<Label iconLeft="tabler:tag" {color} {state}><slot /></Label>
{:else if type === ContentTypeEnum.Bootcamp}
	<Label iconLeft="tabler:video" {color} {state}><slot /></Label>
{:else if type === ContentTypeEnum.Roadmap}
	<Label iconLeft="tabler:road" {color} {state}><slot /></Label>
{:else if type === SubjectsEnum.Backend}
	<Label {color} {state}><slot /></Label>
{:else if type === SubjectsEnum.Frontend}
	<Label {color} {state}><slot /></Label>
{:else if type === SubjectsEnum.Cadence}
	<Label {color} {state}><slot /></Label>
{:else if type === SubjectsEnum.Webdev}
	<Label {color} {state}><slot /></Label>
{:else if type === ExpertiseEnum.begginer}
	<Label {color} {state}><slot /></Label>
{:else if type === ExpertiseEnum.intermediate}
	<Label {color} {state}><slot /></Label>
{:else if type === ExpertiseEnum.advanced}
	<Label {color} {state}><slot /></Label>
{/if}
