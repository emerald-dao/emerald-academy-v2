<script type="ts">
	import Icon from '@iconify/svelte';
	import type { BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import { page } from '$app/stores';

	export let data: BootcampVideo | any;
	export let i: number;
	let chapterNumber: string;
	$: $page.params.chapter && (chapterNumber = $page.params.chapter);
</script>

<div class="header">
	<div class="text">
		<div class="index-and-title-wrapper">
			<div class="index-wrapper">
				<span class="small">{i + 1} -</span>
			</div>
			<div class="title-wrapper">
				<div class="column-1">
					<span
						class:heading={(i + 1).toString() === chapterNumber.charAt(chapterNumber.length - 1)}
					>
						{`${data.overview.title}`}
					</span>
				</div>
			</div>
		</div>
		<div class="button-wrapper row-3">
			<div class="down-icon-wrapper">
				<Icon icon="tabler:chevron-down" />
			</div>
		</div>
	</div>
</div>

<style type="scss">
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
				gap: var(--space-2);

				.title-wrapper {
					span {
						margin: 0;
						font-size: var(--font-size-3);
					}
				}

				.index-wrapper {
					height: 34px;
					border-radius: 50%;
					display: grid;
					place-content: center;
				}
			}

			.button-wrapper {
				align-items: center;
				justify-content: end;
			}
		}
	}
</style>
