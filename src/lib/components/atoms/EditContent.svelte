<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top';
</script>

<Button size="small" type="ghost" color="neutral" {href} {target}>
	<Icon icon="tabler:brand-github" />
	Edit content
</Button>
