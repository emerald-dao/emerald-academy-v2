import { writable } from "svelte/store";

//probando una custom store
export const createCounter = () => {
    //creo variable que pueda ser writable y la inicializo en 0
    const count = writable (1);
    //destructuring
    const {subscribe, set, update} = count;
    //creo las funciones que vamos a usar y luego exportar

    const increment = () => {
        update((n) => n + 1);
    }
    const decrement = () => {
        update((n) => n - 1);
    }
    const reset = () => {
        set(0);
    }
    const setCounter = (n: number) => {
        set(n);
    }

    setCounter(8)

    return {
        subscribe,
        increment,
        decrement,
        setCounter,
        reset
    }

    
}
export const count = createCounter();
