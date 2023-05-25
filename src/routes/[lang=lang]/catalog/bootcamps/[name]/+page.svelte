<script type="ts">
	import ContentsAccordionSection from '$lib/components/contents-accordion/ContentsAccordionSection.svelte';
	import { Button } from '@emerald-dao/component-library';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Modal, getModal } from '@emerald-dao/component-library';
	import Seo from '$lib/components/seo/Seo.svelte';
	import FaqsSection from '$lib/components/faqs/FaqsSection.svelte';
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';
	import { user } from '$stores/flow/FlowStore';
	import { logIn } from '$flow/actions.js';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let data;

	$createBootcampOnboardingStore.bootcamp_name = data.overview.title + ' Bootcamp';
	$createBootcampOnboardingStore.bootcamp_id = $page.params.name;

	async function openModal() {
		if (!$user.loggedIn) {
			await logIn();
		}
		$createBootcampOnboardingStore.walletAddress = $user.addr;
		getModal().open();
	}
</script>

<section class="container-small">
	<ContentIntro overview={data.overview} showBreadcrumbs={true}>
		<div class="row-6">
			{#if $user.loggedIn && data.signUps.includes($user.addr)}
				<Button size="large" width="extended" state="disabled">Enrolled</Button>
			{:else}
				<Button size="large" width="extended" on:click={openModal}>Enroll</Button>
			{/if}
			<Button
				size="large"
				type="transparent"
				color="neutral"
				href={data.overview.googleCalendarLink}
				target="_blank"
				><Icon icon="ph:calendar-plus" color="var(--clr-heading-main)" />Add to calendar</Button
			>
		</div>
		<Modal>
			<div class="modal-content">
				<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
			</div>
		</Modal>
	</ContentIntro>
</section>

<ContentsAccordionSection overview={data.overview} contents={data.overview.videos} />
{#if data.overview.metadata.faqs}
	<FaqsSection faqs={data.overview.metadata.faqs} />
{/if}

<Seo
	title={`${data.overview.title} | Bootcamp | Emerald Academy`}
	description={data.overview.excerpt}
	type="WebPage"
/>
