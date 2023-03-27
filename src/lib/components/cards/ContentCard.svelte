<script type="ts">
	import type { Overview } from '$lib/types/content/content-overview.interface';
	import { Label } from '@emerald-dao/component-library';
	import ContentLabel from '../label/ContentLabel.svelte';
	import { locale, LL } from '$i18n/i18n-svelte';
	import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
	import { fly } from 'svelte/transition';

	export let overview: Overview;

	let link: string;

	if (overview.contentType === ContentTypeEnum.Blog) {
		link = overview.link;
	} else {
		link = `/catalog/${overview.slug}`;
	}
</script>

<a href={`/${$locale}${link}`} in:fly={{ y: 30, duration: 400 }}>
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
				<Label size="x-small" iconLeft="tabler:flame" color="neutral" hasBorder={false}>
					{$LL[overview.metadata.expertise]()}
				</Label>
				<Label size="x-small" color="neutral" iconLeft="tabler:hourglass-high" hasBorder={false}>
					{overview.metadata.duration}
				</Label>
			</div>
			<p>
				{overview.excerpt}
			</p>
		</div>
		<div>
			{#if overview.contentType === ContentTypeEnum.Blog}
				<!-- <img src={overview.image} alt="blog image" /> -->
				<h5>Author: <a href={overview.authorLink}>{overview.author}</a></h5>
			{:else}
				<h5 class="skills">{$LL.SKILLS_YOU_WILL_LEARN()}</h5>
				<div class="skill-labels-wrapper">
					{#each overview.metadata.subjects as subs}
						<Label size="x-small" color="neutral" hasBorder={false}>{subs}</Label>
					{/each}
				</div>
			{/if}
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
			background-color: transparent;

			&:hover {
				border-color: var(--clr-text-off);
				background-color: var(--clr-background-secondary);
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
		}
	}
</style>
