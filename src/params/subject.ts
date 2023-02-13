import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
    const pattern = /^(cadence|dapp-development)$/;
    return pattern.test(param);
  }