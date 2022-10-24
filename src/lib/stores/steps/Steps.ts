import type { Step } from '$lib/types/generator/generator-step-interface.type';
import type { StepState } from '$lib/types/generator/generator-step-state.type';
import { writable } from 'svelte/store';

export function createSteps(steps: Step[]) {
    //aca tenemos el estado inicial
	steps.forEach((step, index) => {
		index > 0 ? (step.state = 'inactive') : (step.state = 'active');
	});

    //destructuring
	const { subscribe, update } = writable(steps);

    //cambiamos el stepstate
	function changeStepState(index: number, state: StepState) {
		update((steps) => {
			steps[index].state = state;
			return steps;
		});
	}

    //reseteamos el stepstate
	function resetStates() {
		update((steps) => {
			for (let index = 0; index < steps.length; index++) {
				if (index === 0) {
					steps[index].state = 'active';
				} else {
					steps[index].state = 'inactive';
				}
			}
			return steps;
		});
	}

    //retornamos

	return {
		subscribe,
		changeStepState,
		resetStates
	};
}
