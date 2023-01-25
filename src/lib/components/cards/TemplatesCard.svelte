<script type="ts">
	import type { Template } from '$lib/types/content/templates.interface';
	import { fetchGithubUser } from '$lib/utilities/api/githubApi/fetchGithubUser';
	import { Button } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let templateData: Template;

	let githubUser;
	onMount(async () => {
		githubUser = await fetchGithubUser(templateData.user.github);
	});
</script>

<div class="overview-wrapper">
	<div>
		<h5 class="heading w-medium">{templateData.title}</h5>
		<p>{templateData.description}</p>
	</div>
	<div class="row-wrapper">
		<div class="row-7">
			<div class="row-2">
				{#if githubUser && githubUser.json.avatar_url}
					<img src={githubUser.json.avatar_url} alt="User avatar" />
				{:else}
					<img src="/avatar-header.png" alt="Generic avatar" />
				{/if}
				<p class="xsmall w-medium">{templateData.user.github}</p>
			</div>
			{#if templateData.audited}
				<div class="row-2">
					<Icon icon="tabler:shield-check" color="var(--clr-text-main)" />
					<p class="xsmall w-medium">audited</p>
				</div>
			{/if}
		</div>
		<div class="button-wrapper">
			<Button href={`/${templateData.slug}`}>Clone</Button>
		</div>
	</div>
</div>

<style type="scss">
	.overview-wrapper {
		width: -webkit-fill-available;
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		border: var(--border-width-primary) solid var(--clr-border-primary);
		border-radius: var(--radius-2);
		padding: var(--space-11) var(--space-12);

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

			.button-wrapper {
				width: fit-content;
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
