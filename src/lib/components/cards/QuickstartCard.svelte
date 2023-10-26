<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { Quickstart } from '$lib/types/content/quickstart.interface';
	import Icon from '@iconify/svelte';

	export let quickstartData: Quickstart;
</script>

<a class="card" href={`/${$locale}/${quickstartData.slug}`}>
	<div>
		<h5 class="heading w-medium">{quickstartData.title}</h5>
		<p>{quickstartData.excerpt}</p>
	</div>
	<div class="row-wrapper">
		<div class="row-7">
			<div class="row-2">
				{#if quickstartData.author.avatarUrl}
					<img src={quickstartData.author.avatarUrl} alt="User avatar" />
				{:else}
					<img src="/avatar-header.png" alt="Generic avatar" />
				{/if}
				<p class="xsmall w-medium">{quickstartData.author.name}</p>
			</div>
			{#if quickstartData.audited}
				<div class="row-2">
					<Icon icon="tabler:shield-check" color="var(--clr-text-main)" />
					<p class="xsmall w-medium">audited</p>
					<p class="xsmall w-medium">{quickstartData.web}</p>
				</div>
			{/if}
		</div>
	</div>
</a>

<style type="scss">
	.card {
		width: -webkit-fill-available;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-5);
		border: var(--border-width-primary) solid var(--clr-border-primary);
		border-radius: var(--radius-2);
		padding: var(--space-11) var(--space-12);
		color: var(--clr-text-main);

		@include mq(medium) {
			width: 48%;
			gap: var(--space-10);
		}

		h5 {
			margin: 0;
		}
		p {
			margin-top: var(--space-3);
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

	.row-2 {
		align-items: center;

		img {
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}
		p {
			margin-top: 0;
		}
	}
</style>
