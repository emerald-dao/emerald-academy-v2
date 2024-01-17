---
layout: examples
---

<script>
  import Notice from '$lib/components/atoms/Notice.svelte';   
</script>

This tutorial will help you use FLIX - a way to send transactions & scripts from a frontend without having to know Cadence.

## What is FLIX?

FLIX allows Cadence developers to turn their transactions & scripts, which are written in Cadence, into JSON "templates". These templates can then be "consumed" by frontend app developers who do not know Cadence, but instead can simply generate Javascript or Typescript files with those pre-made templates to automatically set up calling transactions & scripts in their app.

# Creating FLIX Templates from Cadence Files

If you are a Cadence developer who would like to actually create FLIX templates for others to use, this section is for you. If you are **not** a Cadence developer and would simply like to use FLIX on your frontend - skip this section.

<Notice type="tip">
	If you would like to view a completed version of this section, go <a href="https://github.com/onflow/hello-world-flix">here</a>.
</Notice>

## Install the Flow CLI

Open up a terminal on your computer. Paste and run the command based on your system:

- Mac: 
```bash
sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
```
- Linux: 
```bash
sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
```
- Windows: 
```bash
iex "& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') }"
```

To make sure it worked, type `flow version`. If you see a version, it worked.

## Setup flow.json File

In your terminal, go to the main directory of your project. Type `flow init`. This will create a flow.json file in your project.

Next, inside your flow.json file, add a "contracts" object that looks something like this:

```json
"contracts": {
	"HelloWorld": {
		"source": "./HelloWorld.cdc",
		"aliases": {
			"testnet": "0x01",
			"mainnet": "0x02"
		}
	}
}
```

Make sure to replace the addresses of where your contract is with actual testnet/mainnet addresses under "aliases".

## Creating Templates

Now we can actually create a template from our Cadence code.

To do that, run the following command in your terminal from the main directory:

```bash
flow flix generate ./cadence/scripts/ReadHelloWorld.cdc --save ./cadence/templates/ReadHelloWorld.template.json      
```

Make sure to replace the first file path with the actual location of your script/tx Cadence code, and the second file path with where you want your template to be saved.

## Testing Your Template

You can actually run your script/tx template using the Flow CLI. 

To do that, run the following command in your terminal from the main directory:

```bash
flow flix execute ./cadence/templates/ReadHelloWorld.template.json --network testnet
```

You should see a valid result in your terminal.

# Consuming FLIX Templates on a Frontend

This section will teach you how to actually consume pre-made FLIX templates to automatically create tx/script functions you can call from your app.

<Notice type="tip">
	If you would like to view a completed version of this section, go <a href="https://github.com/onflow/hello-world-web">here</a>.
</Notice>

## Creating a Package File

A package file is simply an auto-generated file in Javascript or Typescript that includes a function to call a script or transaction.

To create one, run the following command in your terminal from the main directory:

```bash
flow flix package https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/ReadHelloWorld.template.json --lang ts --save ./app/cadence/readHelloWorld.ts
```

The first link in that command is a link to the template file. The last file path is where we want to save our package file.

If you go to your `readHelloWorld.ts` file, you should see it looks something like this:

```typescript
/**
    This binding file was auto generated based on FLIX template v1.1.0. 
    Changes to this file might get overwritten.
    Note fcl version 1.9.0 or higher is required to use templates. 
**/

import * as fcl from "@onflow/fcl"
const flixTemplate = "https://raw.githubusercontent.com/onflow/hello-world-flix/main/cadence/templates/ReadHelloWorld.template.json"


/**
* getGreeting: Call HelloWorld contract to get greeting
* @returns {Promise<string>} - 
*/
export async function getGreeting(): Promise<string> {
  const info = await fcl.query({
    cadence: "",
    // @ts-ignore, fcl needs to be updated to support templates urls along with template as an object
    template: flixTemplate,
    
  });

  return info
}
```

Perfect! We now have a function we can call to read our greeting from the `HelloWorld` contract on Flow testnet.

# Conlusion

Thanks so much to Tom Haile for not only creating FLIX, but helping me learn about it! This is all thanks to him.

Till next time ~ Jacob Tucker