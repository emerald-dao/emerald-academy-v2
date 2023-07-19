---
layout: examples
---

```cs
using UnityEngine;
using DapperLabs.Flow.Sdk;
using DapperLabs.Flow.Sdk.Unity;
using DapperLabs.Flow.Sdk.Crypto;
using DapperLabs.Flow.Sdk.WalletConnect;
using System.Threading.Tasks;
using DapperLabs.Flow.Sdk.DataObjects;
using System.Collections.Generic;

public class Scripts()
{
  private void Start()
  {
    StartCoroutine(ExecuteScripts());
  }

  private IEnumerator ExecuteScripts()
  {
    var scpRespone = scriptsExecutionAccount.ExecuteScript  //We assigned the scriptsExecutionAccount while setting up Flow in Unity.
    (                                                       //To learn how checkout the Setup and Authentication Snippet.
      Cadence.Instance.yourScriptAssetName.text,  //Cadence.Instance is a Singleton Script, to learn more check out Cadence Setup using UnitySDK Snippet.
      //Parameters to the script exmaple
      Convert.ToCadence((string)USER_WALLET_ADDRESS, "Address"), //Address Example
      Convert.ToCadence((System.UInt64)YOUR_NUMBER, "UInt64"), //UInt64 Example 
      Convert.ToCadence((decimal)YOUR_NUMBER, "UFix64"), //UFix64 Example 
    );

    yield return new WaitUntil(() => scpRespone.IsCompleted);
    var scpResult = scpRespone.Result;

    if (scpResult.Error != null)
    {
      //Handle Failure Here
      yield break;
    }
    else
    {
      //Handle Success Here
      yield break;
    }
  }
}
```