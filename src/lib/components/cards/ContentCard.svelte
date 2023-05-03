<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import { locale, LL } from '$i18n/i18n-svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let overview: Overview;

	let link: string;

	$: if (
		overview.contentType != ContentTypeEnum.Blog &&
		overview.contentType != ContentTypeEnum.Tweet
	) {
		link = `/${$locale}/catalog/${overview.slug}`;
	} else {
		link = overview.link;
	}
</script>

<a href={`${link}`} in:fly={{ y: 30, duration: 400 }}>
	<div class="card-primary">
		<div>
			<ContentLabel type={overview.contentType} color="primary">
				{$LL[overview.contentType]()}
			</ContentLabel>
			<h4>
				{overview.title}
			</h4>
			<div class="labels-wrapper">
				{#if overview.metadata.price}
					<Label size="x-small" iconLeft="tabler:currency-dollar" color="neutral" hasBorder={false}>
						{overview.metadata.price}
					</Label>
				{/if}
				{#if overview.metadata.expertise}
					<Label size="x-small" iconLeft="tabler:flame" color="neutral" hasBorder={false}>
						{$LL[overview.metadata.expertise]()}
					</Label>
				{/if}
				<Label size="x-small" color="neutral" iconLeft="tabler:hourglass-high" hasBorder={false}>
					{overview.metadata.duration}
				</Label>
			</div>
			{#if overview.contentType !== ContentTypeEnum.Bootcamp && overview.contentType !== ContentTypeEnum.Roadmap}
				<div class="course-author-wrapper">
					<Icon icon="tabler:pencil" />
					<span>{overview.author?.name}</span>
					{#if overview.author?.isVerified}
						<div class="tooltip-wrapper" data-tooltip="This author is from Emerald City">
							<Icon
								icon="material-symbols:verified-outline-rounded"
								color="var(--clr-primary-main)"
								width="14.5"
								height="14.5"
							/>
						</div>
					{/if}
				</div>
			{/if}
			<p>
				{overview.excerpt}
			</p>
		</div>
		<div>
			<h5 class="skills">{$LL.SKILLS_YOU_WILL_LEARN()}</h5>
			<div class="skill-labels-wrapper">
				{#each overview.metadata.subjects as subs}
					<Label size="x-small" color="neutral" hasBorder={false}>{subs}</Label>
				{/each}
			</div>
		</div>
	</div>
</a>

<style type="scss">
	a {
		text-decoration: none;

		.card-primary {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: var(--clr-background-primary);

			&:hover {
				border-color: var(--clr-text-off);
				background-color: var(--clr-surface-primary);
			}

			h4 {
				margin: var(--space-4) 0 var(--space-4) 0;
			}

			.labels-wrapper {
				margin-bottom: var(--space-6);
			}

			p {
				color: var(--clr-text-main);
				font-size: var(--font-size-1);
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			h5 {
				margin-bottom: var(--space-3);
				font-size: var(--font-size-3);

				&.skills {
					font-size: var(--font-size-1);
					color: var(--clr-text-off);
				}
			}

			.skill-labels-wrapper,
			.labels-wrapper {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: var(--space-3);
			}

			.course-author-wrapper {
				display: flex;
				align-items: center;
				gap: var(--space-1);
				color: var(--clr-text-main);
				margin-bottom: var(--space-3);
				font-size: 0.82rem;
				.tooltip-wrapper {
					position: relative;
					display: flex;
				}
			}
		}
	}
</style>
