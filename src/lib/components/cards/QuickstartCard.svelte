<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import { TECHSTACK_DATA, type Quickstart } from '$lib/types/content/quickstart.interface';
	import Icon from '@iconify/svelte';

	export let quickstartData: Quickstart;
</script>

<a class="card" href={`/${$locale}/${quickstartData.slug}`}>
	<div class="column-4">
		<h5 class="heading w-medium">{quickstartData.title}</h5>
		<div class="row-4 row-space-between align-center">
			<div class="row-2">
				{#each quickstartData.techstack as tech}
					<div class="row-1 align-center">
						<Icon icon={TECHSTACK_DATA[tech].icon} color="var(--clr-text-main)" width="1.1rem" />
						<p class="small w-medium">{TECHSTACK_DATA[tech].name}</p>
					</div>
				{/each}
			</div>
			{#if quickstartData.isRecommended}
				<span class="recommended-label"> Recommended </span>
			{/if}
		</div>
		<p class="small">{quickstartData.excerpt}</p>
	</div>
	<div class="row-wrapper">
		<div class="author-wrapper row-1 align-center">
			{#if quickstartData.author && quickstartData.author.avatarUrl}
				<span class="xsmall"> by </span>
				<img src={quickstartData.author.avatarUrl} alt="User avatar" />
				<p class="xsmall w-medium">{quickstartData.author.name}</p>
			{/if}
		</div>
		{#if quickstartData.audited}
			<div class="audited-wrapper row-1 align-center">
				<Icon icon="tabler:shield-check" />
				<p class="xsmall w-medium">Audited</p>
			</div>
		{/if}
	</div>
</a>

<style type="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-5);
		border-radius: var(--radius-2);
		padding: var(--space-10);
		color: var(--clr-text-main);
		background-color: var(--clr-surface-primary);

		&:hover {
			background-color: var(--clr-surface-secondary);
		}

		@include mq(medium) {
			gap: var(--space-10);
		}

		h5 {
			margin: 0;
			font-size: var(--font-size-4);
		}

		.recommended-label {
			border: 1px solid var(--clr-border-primary);
			font-size: var(--font-size-0);
			padding-inline: var(--space-3);
			border-radius: var(--radius-5);
		}

		.row-wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--space-2);
			justify-content: space-between;

			@include mq(small) {
				flex-direction: row;
				align-items: center;
			}
		}
	}

	.author-wrapper {
		img {
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}
	}

	.audited-wrapper {
		color: var(--clr-primary-main);

		p {
			color: inherit;
		}
	}
</style>
