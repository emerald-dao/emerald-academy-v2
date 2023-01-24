<script type="ts">
	import type { Template } from '$lib/types/content/templates.interface';
	import { Breadcrumbs, Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';

	export let data: Data;

	interface Data {
		overview: Template;
		githubUser: {};
	}

	console.log(data);
	const thisTemplateOverview = data.overview;
	const thisTemplateUser = data.githubUser;

	$: routes = [
		{
			path: '/templates',
			label: 'Templates'
		},
		{
			path: `/${thisTemplateOverview.slug}`,
			label: `${thisTemplateOverview.title}`
		}
	];
</script>

<section class="container-medium">
	<div>
		<Breadcrumbs {routes} />
		<div class="template">&lt/&gt Template</div>
		<article>
			<h1 class="heading w-medium">{thisTemplateOverview.title}</h1>
			<p class="w-medium">{thisTemplateOverview.description}</p>
			<span>Aca va el readme.md</span>
		</article>
	</div>
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
				<Icon icon="tabler:brand-github" color="var(--clr-text-main)" />
			{/if}
			{#if thisTemplateOverview.user.twitter}
				<Icon icon="tabler:brand-twitter" color="var(--clr-text-main)" />
			{/if}
			{#if thisTemplateOverview.user.discord}
				<Icon icon="tabler:brand-discord" color="var(--clr-text-main)" />
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
			<Button width="full-width">Open in GitHub</Button>
		</div>
	</div>
</section>

<style type="scss">
	section {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: var(--space-10);

		.template {
			width: fit-content;
			color: var(--clr-primary-main);
			background-color: var(--clr-primary-badge);
			border: var(--border-width-primary) var(--clr-primary-main) solid;
			border-radius: var(--radius-2);
			padding: var(--space-3) var(--space-4);
			margin-top: var(--space-6);
			font-size: var(--font-size-1);
		}
		article {
			margin-top: var(--space-6);
		}
		.sidebar {
			border-left: var(--border-width-primary) var(--clr-border-primary) solid;
			height: fit-content;
			padding-block: var(--space-9);
			position: sticky;
			top: 50px;
			padding-left: var(--space-8);

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
				padding-bottom: var(--space-5);
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
	}
</style>
