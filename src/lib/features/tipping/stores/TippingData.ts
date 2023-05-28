import { writable } from 'svelte/store';
import { ECurrencies } from '$lib/types/common/enums';
import type { TippingData } from '../types/tipping-data.interface';

export const tippingData = writable<TippingData>({
	authorName: '',
	authorAddress: '',
	authorAvatar: '',
	currency: ECurrencies.FLOW,
	amount: 0,
	specialMessage: ''
});
