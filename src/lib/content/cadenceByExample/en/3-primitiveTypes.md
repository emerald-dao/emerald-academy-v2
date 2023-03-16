---
title: Primitive Types
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
         pub fun main() {
            pub let number: Int
            pub let name: String
            pub let address: Address
            pub let switch: Bool
            init() {
               self.number = 1
               self.name = 'Emerald Academy'
               self.address = 0x5643fd47a29770e7
               self.switch = true
            }
         }`
}"
/>

# Primitive Types

Some of the basic types in Cadence.
