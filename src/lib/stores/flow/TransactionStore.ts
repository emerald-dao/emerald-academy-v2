import { writable } from 'svelte/store';
import type { FlowTransaction } from '$lib/types/flow/flow-transaction.interface';

function createTransaction(transaction: FlowTransaction) {
	const { subscribe, set } = writable({
		progress: false,
		transaction: transaction
	});

	function initTransaction() {
		set({
			progress: true,
			transaction: transaction
		});
	}

	function subscribeTransaction(transaction: FlowTransaction) {
		set({
			progress: true,
			transaction: transaction
		});
	}

	function resetTransaction() {
		set({
			progress: false,
			transaction: transaction
		});
	}

	return {
		subscribe,
		initTransaction,
		subscribeTransaction,
		resetTransaction
	};
}

export const transactionStore = createTransaction({
	blockId: '',
	events: [],
	status: -1,
	statusString: '',
	errorMessage: '',
	statusCode: ''
});