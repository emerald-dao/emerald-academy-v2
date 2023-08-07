---
layout: examples
---

```cadence
pub fun main() {
  // in seconds
  let currentTime: UFix64 = getCurrentBlock().timestamp

  // 1 minute from now
  let oneMinuteFromNow: UFix64 = currentTime + 60.0

  // 1 hour from now
  let oneHourFromNow: UFix64 = oneMinuteFromNow * 60.0

  // 1 day from now
  let oneDayFromNow: UFix64 = oneHourFromNow * 24.0

  // and so on...
}
```