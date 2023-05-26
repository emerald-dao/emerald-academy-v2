import type { ECurrencies } from '$lib/types/common/enums';

export interface DonationData extends TippingData {
	type: 'donation' | undefined;
}

export interface TippingData {
	type: 'donation' | undefined;
	walletAddress: string;
	authorName: string;
	payerAddress: string;
	currency: ECurrencies;
	amount: number;
	specialMessage: string;
}
