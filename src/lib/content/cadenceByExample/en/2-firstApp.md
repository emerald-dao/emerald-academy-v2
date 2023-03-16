---
title: First App
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
         pub contract Counter {
               pub var count: Int
            pub fun increment() {
               self.count = self.count + 1
            }
            pub fun decrement() {
               self.count = self.count - 1
            }
            pub fun get(): Int {
               return self.count
            }
         }`
}"
/>

# First Application

Here is a simple contract that you can get, increment and decrement the count store in this contract.
