<script type="ts">
	import Icon from '@iconify/svelte';

	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top';
</script>

<a {href} {target} rel="noopener noreferrer" class={`header-link row-2 align-center`}>
	<Icon icon="tabler:brand-github" />
	Edit content
</a>
