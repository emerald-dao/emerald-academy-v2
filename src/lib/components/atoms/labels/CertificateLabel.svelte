<script lang="ts">
	import { Label } from '@emerald-dao/component-library';

	export let size: 'x-small' | 'small' = 'x-small';
</script>

<Label {size} iconLeft="tabler:certificate" hasBorder={false}>Certificate</Label>
