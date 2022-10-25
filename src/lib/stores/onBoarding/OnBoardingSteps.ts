
import { createSteps } from "$stores/custom/steps/Steps"
import MoreAboutYou from "../../../routes/bootcamp-onboarding/generator-steps/MoreAboutYou.svelte"
import WelcomeAboard from "../../../routes/bootcamp-onboarding/generator-steps/WelcomeAboard.svelte"
import { createActiveStep } from '$stores/custom/steps/ActiveStep';

export const onBoardingSteps = createSteps([
    {title: 'Welcome',
	slug: 'welcome',
	component: WelcomeAboard,
	action: null,
	form: true
    },
    {title: 'MoreAboutYou',
	slug: 'moreAboutYou',
	component: MoreAboutYou,
	action: null,
	form: false
    },

])

export const onBoardingActiveStep = createActiveStep(onBoardingSteps);