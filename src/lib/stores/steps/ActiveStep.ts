import { get, writable } from 'svelte/store';

export function createActiveStep(steps) {
    //Para hacer una custom store, creo función.
    //los custom stores sirven para tener aca todas las funciones que va a poder hacer el step by step en este caso
    //lo hacemos writable e inicializamos en 0
    //creamos una variable donde vamos a tener el active step
	const activeStep = writable(0);
    //destructuring
	const { subscribe, set, update } = activeStep;

    //funciones que voy a utilizar
	async function increment() {
		const activeStepNumber = get(activeStep);
		const action = get(steps)[activeStepNumber].action;
		const numberOfSteps = get(steps).length;

		if (numberOfSteps > activeStepNumber) {
			if (action != null) {
				steps.changeStepState(activeStepNumber, 'loading');
				try {
					await action();
					steps.changeStepState(activeStepNumber, 'success');
					steps.changeStepState(activeStepNumber + 1, 'active');
					update((n) => n + 1);
				} catch (e) {
					console.error('Error has occured: ' + e);
					steps.changeStepState(activeStepNumber, 'error');
				}
			} else {
				steps.changeStepState(activeStepNumber, 'success');
				steps.changeStepState(activeStepNumber + 1, 'active');
				update((n) => n + 1);
			}
		}
	}

	function decrement() {
		const activeStepNumber = get(activeStep);

		if (activeStepNumber > 0) {
			steps.changeStepState(activeStepNumber - 1, 'active');
			steps.changeStepState(activeStepNumber, 'inactive');
			update((n) => n - 1);
		}
	}

	function goToStep(i: number) {
		const activeStepNumber = get(activeStep);

		steps.changeStepState(activeStepNumber, 'inactive');
		steps.changeStepState(i, 'active');
		set(i);
	}

	function reset() {
		set(0);
		steps.resetStates();
	}

	return {
		subscribe,
		increment,
		decrement,
		goToStep,
		reset
	};
}