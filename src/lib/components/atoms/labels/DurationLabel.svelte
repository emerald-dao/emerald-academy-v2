<script lang="ts">
	import { Label } from '@emerald-dao/component-library';

	export let duration: string;
	export let size: 'x-small' | 'small' = 'x-small';
</script>

<Label
	{size}
	color="neutral"
	iconLeft="tabler:hourglass-high"
	hasBorder={false}
	iconColor="#00bfd8"
>
	{duration}
</Label>
