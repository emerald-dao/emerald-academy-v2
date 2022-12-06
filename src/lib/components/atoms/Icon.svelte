<script type="ts">
	let icon: 'course' | 'bootcamp';
	export let tablerValue: string;
</script>

{#if icon === 'course'}
	{tablerValue === 'tabler:tag'}
{:else if icon == 'bootcamp'}
	{tablerValue === 'tabler:video'}
{:else}
	{icon === 'tabler:road'}
{/if}
