---
layout: examples
---

# ToDo App in Cadence

The goto example for learning any language is a todo app. Here's one for Cadence -- the smart contract programming language -- for the Flow blockchain. 

Let's create a simple todo app that will allow us to add new todo items to the chain and mark them as completed.

## What are resources?

Each todo item will be a resource. Resources are how unique digital assets are represented in Cadence. They can be created, destroyed, and passed around between accounts. They can also stored in contracts.

## Creating a resource

To declare a resource, we first need to specify what data is contained within it, along with an "init" function which sets its initial values. We'll also add a "markCompleted" function that will allow someone to denote the todo item as completed.

<img src="https://pbs.twimg.com/media/F2o-fKZbkAA6ghT?format=jpg&name=large" width="600" />

## Storing our todos

Next, we'll need a public variable that will hold all of our todo items. We'll use a dictionary for this. The key will be the id of the todo item and the value will be the todo item itself.

<img src="https://pbs.twimg.com/media/F2o-iCsaUAIJ_lT?format=jpg&name=medium" width="600" />

## Adding a new todo item

Now we need a way for someone to add a new todo item to the list. We'll create a public function on the contracted called "addItem" that will take a string as an argument and create a new todo item with that text.

<img src="https://pbs.twimg.com/media/F2o-j6ubgAIIQCW?format=jpg&name=large" width="600" />

## Completing a todo item

Finally, we'll create a public function called "completeItem" that will take the id of a todo item and mark it as completed.

<img src="https://pbs.twimg.com/media/F2o-l4maUAAoDXF?format=jpg&name=medium" width="600" />

## Cadence code

If you want to see the whole contract, check it out interactively on the Flow playground here: https://play.flow.com/9cdfa00a-9a11-4e71-b31e-9b9aa76fad5f
