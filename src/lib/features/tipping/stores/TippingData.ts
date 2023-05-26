import { writable } from 'svelte/store';
import { ECurrencies } from '$lib/types/common/enums';
import type { DonationData } from '../types/tipping-data.interface';

export const tippingData = writable<DonationData>({
	type: undefined,
	authorName: '',
	walletAddress: '',
	payerAddress: '',
	currency: ECurrencies.FLOW,
	amount: 0,
	specialMessage: ''
});
