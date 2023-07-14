<script type="ts">
	import { firstCapital } from '$lib/utilities/dataTransformation/firstCapital';
	import { Label, Breadcrumbs, Button } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { page } from '$app/stores';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { daysOfDifference } from '$lib/utilities/dataTransformation/daysOfDifference';
	import type { BootcampOverview } from '$lib/types/content/bootcamp.interface';
	import Icon from '@iconify/svelte';
	import { user } from '$stores/flow/FlowStore';
	import { logIn } from '$flow/actions';
	import { getInitialStars } from '$lib/config/initialStars';
	import Author from '../atoms/Author.svelte';

	export let overview: Overview;
	console.log(overview);
	export let showBreadcrumbs: boolean = false;

	// Only for courses
	export let stars: string[] = [];
	$: starred = $user.loggedIn && stars.includes($user.addr);
	$: starCount = stars.length + getInitialStars($page.params.name);

	let param;
	let startDate: Date;
	let endDate: Date;

	if ($page.params.subject) {
		param = $page.params.subject;
	} else {
		param = $page.params.name;
	}

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/${$page.params.lang}/catalog`,
			label: firstCapital(overview.contentType)
		},
		{
			path: `/${$page.params.lang}/catalog/${overview.contentType}s/${param}`,
			label: transformUrlToHeading(param)
		}
	];

	if (overview.contentType === ContentTypeEnum.Bootcamp) {
		let dates: Date[] = [];
		(overview as BootcampOverview).videos.forEach((element) => {
			dates.push(element.date);
		});

		startDate = new Date(Math.min(...dates.map((date: Date) => date.getTime())));
		endDate = new Date(Math.max(...dates.map((date: Date) => date.getTime())));
	}

	async function starCourse() {
		if (!$user.loggedIn) {
			await logIn();
		}
		if (stars.includes($user.addr)) {
			return;
		}
		stars = [...stars, $user.addr];
		const res = await fetch('/api/star', {
			method: 'POST',
			body: JSON.stringify({
				user: $user,
				course_id: $page.params.name
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
	}
</script>

<div class="main-wrapper">
	{#if showBreadcrumbs}
		<Breadcrumbs {routes} />
	{/if}
	<div class="title">
		<h1>
			{overview.title}
		</h1>
		{#if overview.contentType === ContentTypeEnum.Course}
			{#if starred}
				<Button state="active" size="small" type="ghost">
					<Icon icon="tabler:star-filled" />
					starred
					<Label size="xx-small" color="neutral" hasBorder={false}>{starCount}</Label>
				</Button>
			{:else}
				<Button state="active" size="small" type="ghost" on:click={() => starCourse()}>
					<Icon icon="tabler:star" />
					star
					<Label size="xx-small" color="neutral" hasBorder={false}>{starCount}</Label>
				</Button>
			{/if}
		{/if}
	</div>
	{#if overview.contentType === ContentTypeEnum.Course || overview.contentType === ContentTypeEnum.Bootcamp}
		{#if overview.author}
			<Author
				name={overview.author.name}
				avatarUrl={overview.author.avatarUrl}
				socialMediaUrl={overview.author.socialMediaUrl}
				isVerified={overview.author.isVerified}
				walletAddress={overview.author.walletAddress}
			/>
		{/if}
	{/if}
	<div class="column-6">
		{#if overview.contentType !== ContentTypeEnum.Quickstart}
			<div class="metadata-labels">
				<ContentLabel type={overview.contentType} color="primary">
					{firstCapital(overview.contentType)}
				</ContentLabel>
				{#if overview.metadata.expertise}
					<Label size="small" iconLeft="tabler:flame" color="transparent" hasBorder={false}>
						Level: {overview.metadata.expertise}
					</Label>
				{/if}
				<Label size="small" color="transparent" iconLeft="tabler:hourglass-high" hasBorder={false}>
					{overview.metadata.duration}
				</Label>
				{#if overview.metadata.price}
					<Label size="x-small" iconLeft="tabler:currency-dollar" color="neutral" hasBorder={false}>
						{overview.metadata.price}
					</Label>
				{/if}
				{#if overview.contentType === ContentTypeEnum.Bootcamp}
					{#if daysOfDifference(new Date(), startDate) > 0}
						<Label
							size="small"
							color="transparent"
							iconLeft="ic:outline-access-time"
							hasBorder={false}
						>
							Starting soon
						</Label>
					{:else if daysOfDifference(startDate, new Date()) >= 0 && daysOfDifference(new Date(), endDate) > 0}
						<Label
							size="small"
							color="transparent"
							iconLeft="ic:outline-access-time"
							hasBorder={false}
						>
							In progress
						</Label>
					{:else}
						<Label
							size="small"
							color="transparent"
							iconLeft="ic:outline-access-time"
							hasBorder={false}
						>
							Bootcamp has ended
						</Label>
					{/if}
				{/if}
			</div>
		{/if}
		<p>
			{#if overview.contentType === ContentTypeEnum.Quickstart}
				{overview.description}
			{:else if overview.contentType !== ContentTypeEnum.Tutorial}
				{overview.excerpt}
			{/if}
		</p>
	</div>
	<slot />
</div>

<style type="scss">
	.title {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		align-items: flex-start;
		width: 50%;

		@include mq(small) {
			flex-direction: row;
			align-items: center;
			width: auto;
		}
	}

	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);

		.metadata-labels {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			align-items: center;
			gap: var(--space-2);
		}

		p {
			max-width: 50ch;
		}
	}
</style>
