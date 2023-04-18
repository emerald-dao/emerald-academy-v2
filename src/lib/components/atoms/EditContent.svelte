<script type="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top';
	export let rowDistance: number;
</script>

<a {href} {target} rel="noopener noreferrer" class={`header-link row-${rowDistance} align-center`}>
	<Icon icon="tabler:brand-github" />
	Edit content
</a>

<style type="scss">
	a {
		margin-left: var(--space-1);
	}
</style>
