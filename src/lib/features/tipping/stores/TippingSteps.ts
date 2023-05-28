import { createActiveStep } from '$stores/custom/steps/ActiveStep';
import { createSteps } from '$stores/custom/steps/Steps';
import { get } from 'svelte/store';
import Tip from '../components/steps/1-tip/Tip.svelte';
import Thanks from '../components/steps/2-thanks/Thanks.svelte';
import { submitPayment } from '../functions/submitPayment';
import { tippingData } from './TippingData';

export const tippingSteps = createSteps([
	{
		name: `Tip`,
		component: Tip,
		action: () => submitPayment(get(tippingData)),
		form: false,
		state: 'inactive',
		button: {
			text: 'Tip',
			icon: 'tabler:cash'
		}
	},
	{
		name: 'Thank You!',
		component: Thanks,
		action: null,
		form: false,
		state: 'inactive'
	}
]);
export const tippingActiveStep = createActiveStep(tippingSteps);
