---
title: Scripts
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
         import Counter from 0x01
         pub fun main(): Int {
            return Counter.count
         }`
}"
/>

# Scripts

In order to read data from a contract, you need to execute a script.

Like transactions, scripts are separate from the contract layer, and are written in different files.
