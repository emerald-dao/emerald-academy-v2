import { createSteps } from '$stores/custom/steps/Steps';
import MoreAboutYou from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/MoreAboutYou.svelte';
import WelcomeAboard from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/WelcomeAboard.svelte';
import WatchThisVideo from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/WatchThisVideo.svelte';
import Join from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/Join.svelte';
import MediaData from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/MediaData.svelte';
import ThanksMessage from '../../../routes/[lang=lang]/catalog/bootcamps/[name]/__components/generator-steps/ThanksMessage.svelte';
import { createActiveStep } from '$stores/custom/steps/ActiveStep';
import emailjs from '@emailjs/browser';
import { createBootcampOnboardingStore } from '$stores/BootcampOnboardingStore';
import { get } from 'svelte/store';

const sendEmail = async () => {
	emailjs
		.send(
			'service_v2qa1om',
			'template_j0mkz6j',
			get(createBootcampOnboardingStore),
			'IGzpHwMNeQiWCm1_R'
		)
		.then(
			(result) => {
				console.log('SUCCESS!', result.text);
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
};

export const onBoardingSteps = createSteps([
	{ title: 'Welcome', slug: 'welcome', component: WelcomeAboard, action: null, form: true },
	{
		title: 'MoreAboutYou',
		slug: 'moreAboutYou',
		component: MoreAboutYou,
		action: null,
		form: false
	},
	{
		title: 'WatchThisVideo',
		slug: 'WatchThisVideo',
		component: WatchThisVideo,
		action: null,
		form: false
	},
	{ title: 'Join', slug: 'Join', component: Join, action: null, form: false },
	{ title: 'MediaData', slug: 'MediaData', component: MediaData, action: sendEmail, form: false },
	{
		title: 'ThanksMessage',
		slug: 'ThanksMessage',
		component: ThanksMessage,
		action: null,
		form: false
	}
]);

export const onBoardingActiveStep = createActiveStep(onBoardingSteps);
