<script>
    import { Button } from "@emerald-dao/component-library";
    import { Section } from "@mateoroldos/svelte.bones";
    import { count } from "$stores/ContadorPrueba";

    let countValue = 0;
    count.subscribe(value => {
		countValue = value;
	});
</script>

<Section>
    <div>
        <h2>
        Probando el counter {countValue}
        </h2>
        <Button on:click={count.increment}>
            Incrementar
        </Button>
        <Button on:click={count.decrement}>
            Decrementar
        </Button>
    </div>
</Section>