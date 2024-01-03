---
title: Arrays
language: en
layout: examples
---

# Arrays

```cadence
access(all) contract Arrays {
   access(all) let names: [String]

   access(all) fun add(name: String) {
      self.names.append(name)
   }

   access(all) fun remove(index: Int) {
      self.names.remove(at: index)
   }

   access(all) fun get(index: Int): String {
      return self.names[index]
   }

   init() {
      self.names = ["Jacob", "Sarah"]
   }
}
```