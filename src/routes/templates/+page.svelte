<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let data;

	console.log(data.templates);
</script>

<section class="container">
	<h1 class="w-medium heading">Templates</h1>
	<div class="templates-wrapper">
		{#each data.templates as template}
			<div class="overview-wrapper">
				<div>
					<h5 class="heading w-medium">{template.title}</h5>
					<p>{template.description}</p>
				</div>
				<div class="row-wrapper">
					<div class="row-7">
						<div class="row-2">
							<img src={template.user.userAvatarUrl} alt="User avatar" />
							<p class="xsmall w-medium">{template.user.github}</p>
						</div>
						{#if template.audited}
							<div class="row-2">
								<Icon icon="tabler:shield-check" color="var(--clr-text-main)" />
								<p class="xsmall w-medium">audited</p>
							</div>
						{/if}
					</div>
					<Button href={`/${template.slug}`}>Clone</Button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style type="scss">
	.templates-wrapper {
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--space-10);
		justify-content: space-between;
		margin-top: var(--space-15);

		.overview-wrapper {
			width: 48%;
			display: flex;
			flex-direction: column;
			gap: var(--space-10);
			border: var(--border-width-primary) solid var(--clr-border-primary);
			border-radius: var(--radius-2);
			padding: var(--space-11) var(--space-12);

			h5 {
				margin: 0;
			}
			p {
				margin-top: var(--space-3);
			}

			.row-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
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
	}
</style>
