<script type="ts">
	import TippingModal from '$lib/features/tipping/components/TippingModal.svelte';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let avatarUrl: string | undefined;
	export let socialMediaUrl: string;
	export let isVerified: boolean;
	export let walletAddress: string | undefined;
	export let tip: boolean = true;
	export let challengeAuthor: boolean = false;

	function handleError(e) {
		e.target.src = '/new-avatar.png';
	}
</script>

<div class="row-2">
	{#if avatarUrl}
		<img src={avatarUrl} alt="User avatar" on:error={(e) => handleError(e)} />
	{:else}
		<img src="/new-avatar.png" alt="Generic avatar" />
	{/if}
	<div class="column">
		{#if challengeAuthor}
			<p class="author-word">Completed by</p>
		{:else}
			<p class="author-word">Author</p>
		{/if}
		<div class="row-1">
			<a
				href={socialMediaUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="header-link row-2 align-center"
			>
				<p>{name}</p>
			</a>
			{#if tip && walletAddress}
				<TippingModal authorAddress={walletAddress} authorName={name} authorAvatar={avatarUrl} />
			{/if}
			{#if isVerified}
				<div data-tooltip="This author is from Emerald City">
					<Icon icon="material-symbols:verified-outline-rounded" color="var(--clr-primary-main)" />
				</div>
			{/if}
		</div>
	</div>
</div>

<style type="scss">
	.row-2 {
		align-items: center;

		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-block: 0;
		}

		.column {
			line-height: 100%;
			.author-word {
				color: var(--clr-text-off);
			}

			p {
				font-size: 0.82rem;
				margin-bottom: 0px;
			}
		}
	}
</style>
