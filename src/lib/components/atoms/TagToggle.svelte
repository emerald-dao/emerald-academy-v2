<script type="ts">
	import { createEventDispatcher } from 'svelte';

	export let name: string;

	const dispatch = createEventDispatcher();
	let value: boolean;

	$: if (value === true) {
		dispatch('selected');
	} else {
		dispatch('unselected');
	}
</script>

<div>
	<label for={name}>
		<input type="checkbox" id={name} {name} bind:checked={value} />
		<span>
			<slot />
		</span>
	</label>
</div>

<style>
	div {
		background-color: var(--clr-primary-off);
		padding: var(--space-1) var(--space-2);
		cursor: pointer;
	}
	input {
		display: none;
	}

	span {
		color: var(--clr-text-inverse);
	}

	input:checked + span {
		background-color: var(--clr-primary-main);
	}
</style>
