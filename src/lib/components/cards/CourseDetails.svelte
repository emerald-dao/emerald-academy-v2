<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import type { BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { daysOfDifference } from '$lib/utilities/dataTransformation/daysOfDifference';

	export let data: BootcampVideo | any;
	export let i: number;
	export let typeOfcontent: ContentTypeEnum;
	export let open = false;

	const handleClick = () => (open = !open);

	let startTimeInISO: Number;
	let finishTime;
	let finishTimeInISO: String;

	if (typeOfcontent === ContentTypeEnum.Bootcamp) {
		startTimeInISO = data.date.toISOString().replace(/[:.-]/g, '');
		// Add 1 hour to start time
		finishTime = new Date(data.date);
		finishTime.setHours(finishTime.getHours() + 1);
		finishTimeInISO = finishTime.toISOString().replace(/[:.-]/g, '');
	}
</script>

<div class="accordion">
	<div class="header" on:click={handleClick} on:keydown>
		<div class="text">
			<div class="index-and-title-wrapper">
				<div class="index-wrapper">
					<span class="w-medium">{i + 1}</span>
				</div>
				<div class="title-wrapper">
					{#if typeOfcontent === ContentTypeEnum.Course}
						<div class="column-1kl">
							<h5 class="w-medium">{`${data.overview.title}`}</h5>
							<span class="small">{`${data.overview.description}`}</span>
						</div>
					{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
						<h5>{data.name}</h5>
					{/if}
				</div>
			</div>
			<div class="button-wrapper row-3">
				{#if typeOfcontent === ContentTypeEnum.Course}
					<div class:rotate-half={open} class="down-icon-wrapper">
						<Icon icon="tabler:chevron-down" />
					</div>
				{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
					{#if daysOfDifference(new Date(), data.date) < 0}
						{#if !data.link}
							<span class="small w-medium">Video available soon</span>
							<Button state="disabled" size="small"
								><Icon icon="bi:camera-video" color="var(--clr-heading-inverse)" />View Video</Button
							>
						{:else}
							<span class="small w-medium">Finished</span>
							<Button target="_blank" href={`${data.link}`} size="small"
								><Icon icon="bi:camera-video" color="var(--clr-heading-inverse)" />View Video</Button
							>
						{/if}
					{:else}
						<span class="small w-medium"
							>Starts in {daysOfDifference(new Date(), data.date)} days</span
						>
						<Button
							size="small"
							href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startTimeInISO}Z%2F${finishTimeInISO}Z&text=${data.name}`}
							target="_blank"
							><Icon icon="ph:calendar-plus" color="var(--clr-heading-inverse)" />Add to calendar</Button
						>
					{/if}
				{/if}
			</div>
		</div>
	</div>

	{#if open}
		<div class="details column-2" transition:slide>
			{#if typeOfcontent === ContentTypeEnum.Course}
				{#each data.contents as content, index}
					<a href={`/${content.slug}`} target="_blank" rel="noreferrer" class="header-link">
						{`${i + 1}.${index + 1} ${content.metadata.title}`}
					</a>
				{/each}
			{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
				{#each data.chapters as chapter}
					<a href={chapter.link} target="_blank" rel="noreferrer" class="header-link">
						{chapter.name}
					</a>
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style type="scss">
	.accordion {
		display: flex;
		flex-direction: column;
		border-inline: var(--border-width-primary) var(--clr-border-primary) solid;
		border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		padding: var(--space-5);
		background: var(--clr-surface-primary);

		&:first-child {
			border-radius: var(--space-5) var(--space-5) 0 0;
			border-top: var(--border-width-primary) var(--clr-border-primary) solid;
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
					gap: var(--space-1);

					.index-wrapper {
						height: 34px;
						width: 34px;
						background: var(--clr-surface-secondary);
						border-radius: 50%;
						display: grid;
						place-content: center;
						border: 1px var(--clr-border-primary) solid;
					}

					.title-wrapper {
						h5 {
							margin: 0;
							font-size: var(--font-size-3);
						}
						padding-left: var(--space-2);
					}
				}

				.button-wrapper {
					align-items: center;
					justify-content: end;
				}
			}
		}

		.details {
			padding-top: var(--space-5);
			padding-left: 46px;
		}

		.down-icon-wrapper {
			transition: 0.4s;

			&.rotate-half {
				transform: rotate(180deg);
			}
		}
	}
</style>
