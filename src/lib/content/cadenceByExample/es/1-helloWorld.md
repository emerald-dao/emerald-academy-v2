---
title: Hola Mundo
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
         pub contract HelloWorld {
            pub let greet: String
            init() {
               self.greet = 'Hello World!'
            }
         }`
      }"
/>

# Hola Mundo

Declare a contract called `HelloWorld`.

Initialize a `greet` variable to "Hello, World!"
