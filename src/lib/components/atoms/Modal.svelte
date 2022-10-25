<script context="module" lang="ts">
	let onTop; //keeping track of which open modal is on top
	const modals = {}; //all modals get registered here for easy future access

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = '') {
		return modals[id];
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { onDestroy } from 'svelte';
	import { Button } from '@emerald-dao/component-library';
	import Card from './Card.svelte';
	import { fly } from 'svelte/transition';

	let topDiv;
	let visible = false;
	let prevOnTop;
	let closeCallback;

	export let id = '';

	function keyPress(ev) {
		//only respond if the current modal is the top one
		if (ev.key == 'Escape' && onTop == topDiv) close(); //ESC
	}

	/**  API **/
	function open(callback) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;
		onTop = topDiv;
		if (browser) {
			window.addEventListener('keydown', keyPress);
		}

		//this prevents scrolling of the main window on larger screens
		document.body.style.overflow = 'hidden';

		visible = true;
		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
		document.body.appendChild(topDiv);
	}

	function close(retVal) {
		if (!visible) return;
		if (browser) {
			window.removeEventListener('keydown', keyPress);
		}
		onTop = prevOnTop;
		if (onTop == null) document.body.style.overflow = '';
		visible = false;
		if (closeCallback) closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	onDestroy(() => {
		delete modals[id];
		if (browser) {
			window.removeEventListener('keydown', keyPress);
		}
	});
</script>

{#if visible}
	<div class="topModal" bind:this={topDiv} on:click={() => close()}>
		<div
			class="modal"
			on:click|stopPropagation={() => {}}
			transition:fly={{ y: 30, duration: 500 }}
		>
			<Card>
				<div class="close-button">
					<Button type="transparent" on:click={() => close()}>
						<Icon icon="tabler:circle-x" color="var(--clr-primary-main" />
					</Button>
				</div>
				<div class="modal-content">
					<slot />
				</div>
			</Card>
		</div>
	</div>
{/if}

<style type="scss">
	.topModal {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--clr-background-primary-t2);
		display: flex;
		align-items: center;
		justify-content: center;

		.modal {
			position: relative;

			.close-button {
				position: absolute;
				top: 1.4rem;
				right: 1.4rem;
			}

			.modal-content {
				max-width: calc(100vw - 20px);
				max-height: calc(100vh - 20px);
				overflow: auto;
			}
		}
	}
</style>
