import type { ECurrencies } from '$lib/types/common/enums';

export interface TippingData {
	authorAddress: string;
	authorName: string;
	authorAvatar: string;
	currency: ECurrencies;
	amount: number;
	specialMessage: string;
}
