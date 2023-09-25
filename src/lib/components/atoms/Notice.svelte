<script type="ts">
  export let type: "tip" | "note" | "pro" | "con" = "tip";
</script>

<div
  class="notice"
  class:tip={type === "tip"}
  class:note={type === "note"}
  class:pro={type === "pro"}
  class:con={type === "con"}
>
  <p><slot /></p>
</div>

<style type="scss">
  .notice {
    border: 1px solid var(--clr-border-primary);
    border-left-width: 15px;
    border-radius: var(--radius-1);
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 90vw;
    overflow-wrap: break-word;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    display: block;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  .notice::before {
    color: var(--clr-alert-main);
    display: block;
    font-size: 0.9em;
    margin-bottom: 0.5rem;
    text-align: left;
    text-transform: uppercase;
  }

  .tip {
    border-left-color: var(--clr-tertiary-main);
  }

  .tip::before {
    color: var(--clr-tertiary-main);
    content: "Tip";
  }

  .note {
    border-left-color: var(--clr-primary-main);
  }

  .note::before {
    color: var(--clr-primary-main);
    content: "Note";
  }

  .con {
    border-left-color: var(--clr-alert-main);
  }

  .con::before {
    color: var(--clr-alert-main);
    content: "Con";
  }

  .pro {
    border-left-color: var(--clr-success-main);
  }

  .pro::before {
    color: var(--clr-success-main);
    content: "Pro";
  }

  p {
    margin: 0px;
  }
</style>