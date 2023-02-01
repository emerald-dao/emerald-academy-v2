<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import type { BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import type { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';

	export let data: BootcampVideo;
	export let i;
	export let typeOfcontent: ContentTypeEnum.Bootcamp | ContentTypeEnum.Course;

	export let open = false;
	const handleClick = () => (open = !open);
</script>

<div class="accordion">
	<div class="header" on:click={handleClick} on:keydown>
		<div class="text">
			<div class="index-and-title-wrapper">
				<div class="index-wrapper">
					<span>{i + 1}</span>
				</div>
				<div class="title-wrapper">
					<span>{data.excerpt}</span>
				</div>
			</div>
			<div class="button-wrapper">
				<Button>Read <Icon icon="ic:outline-diamond" color="var(--clr-heading-inverse)" /></Button>
			</div>
		</div>
	</div>

	{#if open}
		<div class="details" transition:slide>
			<div>
				<p>{data.excerpt}</p>
			</div>
		</div>
	{/if}
</div>

<style type="scss">
	.accordion {
		display: flex;
		flex-direction: column;
		border: var(--border-width-primary) var(--clr-border-primary) solid;
		padding: var(--space-5);
		background: var(--clr-surface-primary);

		&:first-child {
			border-radius: var(--space-5) var(--space-5) 0 0;
		}

		&:last-child {
			border-radius: 0 0 var(--space-5) var(--space-5);
		}

		.header {
			cursor: pointer;

			.text {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				width: 100%;

				.index-and-title-wrapper {
					display: flex;
					flex-direction: row;
					align-items: center;

					.index-wrapper {
						text-align: center;
						height: 38px;
						width: 38px;
						background: var(--clr-heading-main);
						color: var(--clr-heading-inverse);
						padding: var(--space-2);
						border-radius: 50%;
					}

					.title-wrapper {
						padding-left: var(--space-2);
					}
				}

				.button-wrapper {
					justify-content: end;
				}
			}
		}

		.details {
			padding-top: var(--space-5);
			padding-left: 46px;
		}
	}
</style>
