---
title: If-Else
language: en
layout: false
---

<script>
		import CodeBlock from '$lib/components/codeblock/CodeBlock.svelte'
</script>

<CodeBlock
codeBlockTitle="{`Cadence`}"
codeStyle="{`js`}"
code="{`
         pub fun main(x: Int): Int {
            if (x < 10) {
               return 0;
            } else if (x < 20) {
               return 1;
            } else {
               return 2;
            }
         }`
}"
/>

# If / Else

Cadence supports conditional statements `if`, `else if` and `else`.
