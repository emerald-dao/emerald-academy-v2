<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import type { BootcampVideo } from '$lib/types/content/bootcamp.interface';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { daysOfDifference } from '$lib/utilities/dataTransformation/daysOfDifference';

	export let data: BootcampVideo | any;
	export let i;
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
					<span>{i + 1}</span>
				</div>
				<div class="title-wrapper">
					{#if typeOfcontent === ContentTypeEnum.Course}
						<h5>{`Chapter ${i + 1}`}</h5>
					{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
						<h5>{data.name}</h5>
					{/if}
				</div>
			</div>
			<div class="button-wrapper row-3">
				{#if typeOfcontent === ContentTypeEnum.Course}
					<Button href={`/${data[0].slug}`} size="small"
						>Read <Icon icon="ic:outline-diamond" color="var(--clr-heading-inverse)" /></Button
					>
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
				{#each data as chapter}
					<a href={`/${chapter.slug}`} target="_blank" rel="noreferrer">
						<p class="small">{chapter.metadata.title}</p>
					</a>
				{/each}
			{:else if typeOfcontent === ContentTypeEnum.Bootcamp}
				{#each data.chapters as chapter}
					<a href={chapter.link} target="_blank" rel="noreferrer">
						<p class="small">{chapter.name}</p>
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
						h5 {
							margin: 0;
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

			a {
				text-decoration: none;

				&:hover {
					text-decoration-line: underline;
				}
			}
		}
	}
</style>
