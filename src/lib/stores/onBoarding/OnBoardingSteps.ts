
import { createSteps } from "$stores/custom/steps/Steps"
import MoreAboutYou from "../../../routes/bootcamp-onboarding/generator-steps/MoreAboutYou.svelte"
import WelcomeAboard from "../../../routes/bootcamp-onboarding/generator-steps/WelcomeAboard.svelte"
import WatchThisVideo from "../../../routes/bootcamp-onboarding/generator-steps/WatchThisVideo.svelte";
import Join from "../../../routes/bootcamp-onboarding/generator-steps/Join.svelte"
import MediaData from "../../../routes/bootcamp-onboarding/generator-steps/MediaData.svelte"
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
	{title: 'WatchThisVideo',
	slug: 'WatchThisVideo',
	component: WatchThisVideo,
	action: null,
	form: false
    },
	{title: 'Join',
	slug: 'Join',
	component: Join,
	action: null,
	form: false
    },
	{title: 'MediaData',
	slug: 'MediaData',
	component: MediaData,
	action: null,
	form: false
    },

])

export const onBoardingActiveStep = createActiveStep(onBoardingSteps);