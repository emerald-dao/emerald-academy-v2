---
layout: examples
---

Before you get to this step, make sure you've downloaded Flow UnitySDK from the Unity Asset Store and installed it from the package manager.
Then put your .cdc files in a folder, we will soon assign them.

```cs

public class Cadence()
{
  public static Cadence Instance { get; private set; }

  [Header("Contracts")]
  public CadenceContractAsset yourContractOneName; //Assign it from the inspector
  public CadenceContractAsset yourContractTwoName; //Assign it from the inspector

  [Header("Transactions")]
  public CadenceTransactionAsset yourTransactionOneName; //Assign it from the inspector
  public CadenceTransactionAsset yourTransactionTwoName; //Assign it from the inspector

  [Header("Scripts")]
  public CadenceScriptAsset yourScriptOneName; //Assign it from the inspector
  public CadenceScriptAsset yourScriptTwoName; //Assign it from the inspector

  void Awake()
  {
    if (Instance != null && Instance != this) Destroy(this);
    else Instance = this;
  }
}
```