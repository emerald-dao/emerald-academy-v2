<script type="ts">
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let data;

	const thisTemplateOverview = data.overview;
	const thisTemplateUser = data.githubUser;
</script>

<div class="sidebar column-3">
	<div class="row-2">
		{#if thisTemplateUser.avatar_url}
			<img src={thisTemplateUser.avatar_url} alt="User avatar" />
		{:else}
			<img src="/avatar-header.png" alt="Generic avatar" />
		{/if}
		<p class="username">{thisTemplateUser.login}</p>
	</div>
	<div class="row-2 social-media-wrapper">
		{#if thisTemplateOverview.user.github}
			<a
				href="https://github.com/{thisTemplateOverview.user.github}"
				target="_blank"
				rel="noreferrer"><Icon icon="tabler:brand-github" color="var(--clr-text-main)" /></a
			>
		{/if}
		{#if thisTemplateOverview.user.twitter}
			<a
				href="https://twitter.com/{thisTemplateOverview.user.twitter}"
				target="_blank"
				rel="noreferrer"><Icon icon="tabler:brand-twitter" color="var(--clr-text-main)" /></a
			>
		{/if}
		{#if thisTemplateOverview.user.discord}
			<a
				href="https://discord.com/users/{thisTemplateOverview.user.discord}"
				target="_blank"
				rel="noreferrer"><Icon icon="tabler:brand-discord" color="var(--clr-text-main)" /></a
			>
		{/if}
	</div>
	{#if thisTemplateOverview.audited}
		<div class="row-2 audited-wrapper">
			<Icon icon="tabler:shield-check" color="var(--clr-text-main)" />
			<p class="large">audited</p>
		</div>
	{/if}
	{#if thisTemplateOverview.audited}
		<div class="row-2">
			<Icon icon="tabler:git-commit" color="var(--clr-text-main)" />
			<p class="large">other label</p>
		</div>
	{/if}
	{#if thisTemplateOverview.audited}
		<div class="row-2 lorem-wrapper">
			<Icon icon="tabler:git-commit" color="var(--clr-text-main)" />
			<p class="large">lorem</p>
		</div>
	{/if}
	<div class="button-wrapper">
		<Button
			href={`https://${thisTemplateOverview.templateRepositoryUrl}`}
			target="_blank"
			width="full-width">Open in GitHub</Button
		>
	</div>
</div>

<style type="scss">
	.sidebar {
		border-top: var(--border-width-primary) var(--clr-border-primary) solid;
		padding-top: var(--space-5);

		@include mq(small) {
			border-top: none;
			border-left: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);
			position: sticky;
			top: 100px;
			padding-left: var(--space-8);
			padding-top: 0;
		}

		.row-2 {
			align-items: center;

			img {
				width: 35px;
				height: 35px;
				border-radius: 50%;
			}
			p {
				margin-top: 0;
			}
		}

		.social-media-wrapper {
			padding-bottom: var(--space-3);
			border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		}

		.audited-wrapper {
			padding-top: var(--space-3);
		}

		.lorem-wrapper {
			padding-bottom: var(--space-5);
			border-bottom: var(--border-width-primary) var(--clr-border-primary) solid;
		}

		.button-wrapper {
			padding-top: var(--space-3);
		}

		.username {
			color: var(--clr-heading-main);
			font-size: var(--paragraph-large-medium-font-size);
		}
	}
</style>
