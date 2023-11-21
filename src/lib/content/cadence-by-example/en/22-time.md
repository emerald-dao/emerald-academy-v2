---
title: Time
language: en
layout: examples
---

# Time

Time in Cadence is represented as a Unix timestamp in seconds. You can calculate points in the future by adding seconds to the current time, allowing you to schedule actions based on specific time units such as minutes, hours, days, weeks, and years.

```cadence
pub fun main() {
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
