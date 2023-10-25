---
layout: examples
---

```javascript
async function getTransactionData() {
  try {
    const transactionId =
      "752db233c432285125c966ac39536d14d016211a82f01eef76be4f732ed0bfb5";
    const response = await fetch(
      `https://api.findlabs.io/historical/api/rest/transaction?id=${transactionId}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getTransactionData();
```