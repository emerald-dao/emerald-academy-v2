<script type="ts">
	import type { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { Label } from '@emerald-dao/component-library';
	import { createEventDispatcher } from 'svelte';
	import ContentLabel from '../label/ContentLabel.svelte';

	export let name: ContentTypeEnum;

	const dispatch = createEventDispatcher();
	let value: boolean;

	$: if (value === true) {
		dispatch('selected');
	} else {
		dispatch('unselected');
	}
	console.log(name);
</script>

<div>
	<label for={name}>
		<input type="checkbox" id={name} {name} bind:checked={value} />
		<ContentLabel state={value ? 'on' : 'off'} type={name} color={value ? 'tertiary' : 'neutral'}>
			<slot />
		</ContentLabel>
	</label>
</div>

<style>
	label {
		cursor: pointer;
	}

	input {
		display: none;
	}
</style>
