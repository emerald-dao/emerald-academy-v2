<script type="ts">
	import { page } from '$app/stores';

	export let data;

	const findExampleIndex = data.content.findIndex(
		(obj) => obj.path === `/content/cadenceByExample/${$page.params.id}`
	);
</script>

<slot />
{#if data.content[findExampleIndex - 1]}
	<div>
		{data.content[findExampleIndex - 1].meta.title}
	</div>
{/if}
{#if data.content[findExampleIndex + 1]}
	<div>
		{data.content[findExampleIndex + 1].meta.title}
	</div>
{/if}
