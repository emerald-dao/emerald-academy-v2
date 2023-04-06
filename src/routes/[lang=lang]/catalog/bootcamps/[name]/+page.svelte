<script type="ts">
	import ContentsAccordionSection from '$lib/components/contents-accordion/ContentsAccordionSection.svelte';
	import { Button } from '@emerald-dao/component-library';
	import ContentIntro from '$lib/components/cards/ContentIntro.svelte';
	import { onBoardingSteps, onBoardingActiveStep } from '$stores/onBoarding/OnBoardingSteps';
	import { Modal, getModal } from '@emerald-dao/component-library';
	import Seo from '$lib/components/seo/Seo.svelte';
	import FaqsSection from '$lib/components/faqs/FaqsSection.svelte';
	import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore.ts';

	export let data;

	$createBootcampOnboardingStore.bootcamp_name = data.overview.title + ' Bootcamp';
</script>

<ContentIntro overview={data.overview} showBreadcrumbs={true}>
	<Button size="large" width="extended" on:click={() => getModal().open()}>Enroll</Button>
	<Modal>
		<div class="modal-content">
			<svelte:component this={$onBoardingSteps[$onBoardingActiveStep].component} />
		</div>
	</Modal>
</ContentIntro>
<ContentsAccordionSection overview={data.overview} contents={data.overview.videos} />
{#if data.overview.metadata.faqs}
	<FaqsSection faqs={data.overview.metadata.faqs} />
{/if}

<Seo
	title={`${data.overview.title} | Bootcamp | Emerald Academy`}
	description={data.overview.excerpt}
	type="WebPage"
/>
