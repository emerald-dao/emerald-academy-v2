---
title: Time
language: en
layout: examples
---

# Time

```cadence
access(all) fun main() {
   // time is represented as a unix timestamp in seconds
   let currentTime: UFix64 = getCurrentBlock().timestamp

   // 1 minute from now
   log(currentTime + 60.0)

   // 1 hour from now
   log(currentTime + (60.0 * 60.0))

   // 1 day from now
   log(currentTime + (60.0 * 60.0 * 24.0))

   // 1 week from now
   log(currentTime + (60.0 * 60.0 * 24.0 * 7.0))

   // 1 year from now
   log(currentTime + (60.0 * 60.0 * 24.0 * 365.0))
}
```