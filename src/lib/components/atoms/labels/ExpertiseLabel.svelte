<script lang="ts">
	import { Label } from '@emerald-dao/component-library';
	import { LL } from '$i18n/i18n-svelte';

	export let expertise: string;
	export let size: 'x-small' | 'small' = 'x-small';
</script>

<Label {size} iconLeft="tabler:flame" color="neutral" iconColor="#ff9300" hasBorder={false}>
	{$LL[expertise]()}
</Label>
