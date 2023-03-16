---
title: Hello World
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

# Hello World

Declare a contract called `HelloWorld`.

Initialize a `greet` variable to "Hello, World!"
