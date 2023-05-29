import type { TippingData } from '../types/tipping-data.interface';
import { tipExecution } from '$flow/actions';

export const submitPayment = async (tippingData: TippingData) => {
  return await tipExecution(tippingData.amount.toString(), tippingData.authorAddress, tippingData.currency, tippingData.specialMessage)
};
