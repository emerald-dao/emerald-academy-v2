
import { createSteps } from "$stores/steps/Steps"
import MoreAboutYou from "../../../../src/routes/bootcamp-onboarding/generator-steps/MoreAboutYou.svelte"
import WelcomeAboard from "../../../../src/routes/bootcamp-onboarding/generator-steps/WelcomeAboard.svelte"
import { createActiveStep } from '$stores/steps/ActiveStep';

export const generatorSteps = createSteps([
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

export const generatorActiveStep = createActiveStep(generatorSteps);