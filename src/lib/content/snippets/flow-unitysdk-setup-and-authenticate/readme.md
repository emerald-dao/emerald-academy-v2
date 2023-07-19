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

public class WalletManager()
{
  public GameObject qrCodeCustomPrefab;
  public GameObject walletSelectCustomPrefab;
  public FlowControl.Account scriptsExecutionAccount;

  private async void Start()
  {
    FlowConfig flowConfig = new()
    {
      NetworkUrl = FlowConfig.TESTNETURL,
      Protocol = FlowConfig.NetworkProtocol.HTTP
    };

    FlowSDK.Init(flowConfig);
    IWallet walletProvider = new WalletConnectProvider();

    walletProvider.Init(new WalletConnectConfig
    {
      ProjectId = "YOUR_WALLETCONNECT_ID",
      ProjectName = "YOUR_PROJECT_NAME",
      ProjectDescription = "YOUR_PROJECT_DESCRIPTION",
      ProjectIconUrl = "YOUR_PROJECT_ICON_URL",
      ProjectUrl = "YOUR_PROJECT_URL",
      QrCodeDialogPrefab = qrCodeCustomPrefab,
      WalletSelectDialogPrefab = walletSelectCustomPrefab
    });

    FlowSDK.RegisterWalletProvider(walletProvider);

    scriptsExecutionAccount = new()
    {
      GatewayName = "Flow Testnet"
    };

    await AuthenticateWithWallet();
  }

  private async Task AuthenticateWithWallet()
  {
    await FlowSDK.GetWalletProvider().Authenticate("", (string flowAddress) =>
    {
      //Handle your success here
    }, () =>
    {
      //Handle your failure here
      Debug.LogError("Authentication failed.");
    });
  }
}
```