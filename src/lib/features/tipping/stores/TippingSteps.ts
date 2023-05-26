import { createActiveStep } from '$stores/custom/steps/ActiveStep';
import { createSteps } from '$stores/custom/steps/Steps';
import { get } from 'svelte/store';
import Tip from '../components/steps/1-tip/Tip.svelte';
import Thanks from '../components/steps/2-thanks/Thanks.svelte';

export const tippingSteps = createSteps([
	{
		title: 'Tip',
		component: Tip,
		/* action: () => submitPayment(get(paymentData)), */
		action: null,
		form: false,
		state: 'inactive',
		button: {
			text: 'Pay',
			icon: 'tabler:cash'
		}
	},
	{
		title: 'Thank You!',
		component: Thanks,
		action: null,
		form: false,
		state: 'inactive'
	}
]);
export const tippingActiveStep = createActiveStep(tippingSteps);
