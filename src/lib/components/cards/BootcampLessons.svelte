<script type="ts">
	import type { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
	import { Button } from '@emerald-dao/component-library';
	import { onMount } from 'svelte';
	export let video: BootcampVideo[];

	interface BootcampVideo {
		name: string;
		excerpt: string;
		link: string;
		subjects: SubjectsEnum[];
		date: Date;
	}

	let clickedArray: boolean[] = [];
	function fillClickArray() {
		for (let i = 0; i < video.length; i++) {
			clickedArray.push(false);
		}
	}
	onMount(() => fillClickArray());
</script>

<div class="card">
	<div class="videos">
		{#each video as data, i}
			<div>
				{i + 1}
			</div>
			<div class="clickable-div" class:selected={clickedArray[i]}>
				<div class="restOfInfo">
					<div>
						<p class="title">{data.name}</p>
						<p>{data.excerpt}</p>
					</div>

					<div class="right-align">
						<a href={data.link} target="_blank" rel="noreferrer"> <Button>View Video</Button></a>
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

			<hr size="1" />
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
			color: var(--clr-heading-main);
		}
		padding-bottom: var(--space-3);
		padding-top: var(--space-3);
	}
	.right-align {
		margin-left: auto;
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
	a {
		text-decoration: none;
	}
</style>
