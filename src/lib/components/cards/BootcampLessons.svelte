<script type="ts">
	import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { Label } from '@emerald-dao/component-library';
	import { onMount } from 'svelte';
	export let video: BootcampVideo[];

	interface BootcampVideo {
		name: string;
		excerpt: string;
		link: string;
		subjects: SubjectsEnum[];
		date: Date;
	}
	let number = 0;
	const clickedVideo = (i: number) => {
		number = i;
		clickedArray[i] = clickedArray[i] = !clickedArray[i];
	};
	let visible = true;
	let clickedArray: boolean[] = [];
	function fillClickArray() {
		for (let i = 0; i < video.length; i++) {
			clickedArray.push(false);
		}
		console.log(clickedArray);
	}
	onMount(() => fillClickArray());
</script>

<div class="card">
	<div class="videos">
		{#each video as data, i}
			<div on:click={() => clickedVideo(i)} class="clickable-div" class:selected={clickedArray[i]}>
				<div class="restOfInfo">
					<div>
						<p class="title">{data.name}</p>
						<p>{data.excerpt}</p>
					</div>

					<div class="right-align">
						<a href={data.link}> <Label>View Video</Label></a>
					</div>
				</div>

				{#if clickedArray[i]}
					<div class="subs">
						{#each video[i].subjects as sub}
							<p>{sub}</p>
						{/each}
					</div>
				{/if}

				<div />
			</div>

			<hr size="1" color="white" />
		{/each}
	</div>
</div>

<style type="scss">
	.card {
		background-color: var(--clr-surface-primary);
	}

	.clickable-div {
		cursor: pointer;
		&:hover {
			color: var(--clr-primary-main);
		}
		padding-bottom: var(--space-3);
		padding-top: var(--space-3);
	}
	.right-align {
		margin-left: auto;
	}
	.selected {
		color: var(--clr-primary-main);
	}
	.restOfInfo {
		display: flex;
		flex-direction: row;

		margin: var(--space-3);
	}
	.subs {
		padding: var(--space-3);
	}

	.title {
		font-size: var(--font-size-4);
		font-style: var(--font-weight-extrabold);
	}
</style>
