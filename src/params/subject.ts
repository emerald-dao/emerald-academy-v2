import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	const pattern = /^(cadence|dapp)$/;
	return pattern.test(param);
};
