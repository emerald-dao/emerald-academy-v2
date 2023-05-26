<script type="ts">
	import { fly } from 'svelte/transition';
	import { tippingData } from '../../stores/TippingData';
	import Icon from '@iconify/svelte';

	let viewSpecialMessage = false;
	let specialMessageInput: HTMLInputElement;

	const onToggleSpecialMessage = () => {
		viewSpecialMessage = !viewSpecialMessage;

		if (viewSpecialMessage) {
			setTimeout(() => {
				specialMessageInput.focus();
			}, 200);
		}
	};

	const inputFocusOut = () => {
		if ($tippingData.specialMessage === '') {
			viewSpecialMessage = false;
		}
	};
</script>

<div class="main-wrapper row-1 align-center">
	{#if !viewSpecialMessage}
		<button on:click|preventDefault={onToggleSpecialMessage} class="row-2">
			<div in:fly|local={{ duration: 200, x: -10 }} class="icon-wrapper">
				<Icon icon="tabler:plus" width={'0.9rem'} />
			</div>
			Add a special message
		</button>
	{/if}
	{#if viewSpecialMessage}
		<div class="message-wrapper" in:fly|local={{ x: 20, duration: 200 }}>
			<input
				name="message"
				placeholder="Write a special message"
				id="special-message"
				maxLength="70"
				bind:value={$tippingData.specialMessage}
				bind:this={specialMessageInput}
				on:focusout={inputFocusOut}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	.main-wrapper {
		min-height: 30px;

		button {
			background: none;
			border: none;
			color: var(--clr-font-text);
			font-size: var(--font-size-0);
			gap: var(--space-2);
			display: flex;
			flex-direction: row;
			align-items: center;
			cursor: pointer;

			&:hover {
				color: var(--clr-heading-main);
			}

			.icon-wrapper {
				border-radius: 50%;
				width: 1.7em;
				height: 1.7em;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: var(--clr-neutral-badge);
				color: var(--clr-neutral-main);
			}
		}

		.message-wrapper {
			width: 100%;

			input[name='message'] {
				border: var(--border-width-primary) solid var(--clr-border-primary);
				width: 100%;
				font-size: var(--font-size-0);
				color: var(--clr-heading-main);
				padding: var(--space-5);
				border-radius: var(--radius-2);
			}
		}
	}
</style>
