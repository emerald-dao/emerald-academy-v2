<script type="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { Quickstart } from '$lib/types/content/quickstart.interface';
	import AppTypeLabel from '../atoms/labels/AppTypeLabel.svelte';

	export let quickstartData: Quickstart;
</script>

<a class="card" href={`/${$locale}/${quickstartData.slug}`}>
	<!-- {#if quickstartData.previewImage}
		<img src={quickstartData.previewImage} />
	{/if} -->
	<div class="card-contents">
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
				<AppTypeLabel type={quickstartData.type} />
			</div>
		</div>
	</div>
</a>

<style type="scss">
	.card {
		width: -webkit-fill-available;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: var(--border-width-primary) solid var(--clr-border-primary);
		border-radius: var(--radius-2);
		padding: 0px;
		color: var(--clr-text-main);

		.card-contents {
			width: -webkit-fill-available;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: var(--space-5);
			padding: var(--space-11) var(--space-10);
			color: var(--clr-text-main);

			.row-wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--space-2);
				justify-content: space-between;

				@include mq(small) {
					flex-direction: row;
					align-items: center;
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
			}

			h5 {
				margin: 0;
			}
			p {
				margin-top: var(--space-3);
			}

			@include mq(medium) {
				gap: var(--space-10);
			}
		}

		@include mq(medium) {
			width: 48%;
		}

		img {
			width: 30%;
			object-fit: cover;
			border-radius: var(--radius-2) 0 0 var(--radius-2);
		}
	}
</style>
