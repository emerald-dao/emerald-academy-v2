---
title: Integrating WalletConnect and Lilco Wallet
lesson: 2
language: en
excerpt: Setup Wallet Connect so you can integrate Lilico Mobile Wallet
---

# Chapter 4 Lesson 2 - Integrating WalletConnect and Lilco Wallet

> This lesson is optional but highly recommended... both for the sake of user experience and so that you can be sure a self custody wallet is available for your end users.

> Unfortunately, it is currently not possible to download apps from the App Store onto the simulator. Because of this you will need a physical iOS device connected to your Mac.

Lilco Mobile uses a communication protocol called WalletConnect to enable easy communication between web/mobile DApps and mobile wallets. FCL also includes a "Discovery Plugin" allowing you to communicate with the protocol.

## Setup Lilico Mobile Wallet

You need to have Lilico Mobile Wallet installed on your iOS device and configured for Development use. If you haven't done this before, jump over to my tutorial: [Setting Up Lilico Wallet For Development](https://academy.ecdao.org/en/catalog/tutorials/setting-up-lilico-wallet-for-development)

## Create WalletConnect Account

First, we need to create a WalletConnect account. Head to [https://walletconnect.com](https://walletconnect.com) in your browser and click the `Dashboard` button.

<img src="https://i.imgur.com/i6pDsCal.png" />

For the sake of this course, I am going to use the same disposable email address I used for Blocto Wallet, but you can also a WalletConnect compatible wallet from another chain such as Ethereum (most major wallets will support it). Unfortunately Lilico Mobile doesn't seem to work with the WalletConnect portal itself 😢.

Once you have created an account and logged in, select `New Project` in the upper right-hand corner. Give your project a name then click `Create`

<img src="https://i.imgur.com/z2kyMb9l.png" />
<img src="https://i.imgur.com/HSks19ml.png" />

Head over to the `Explorer` tab and fill out the form as shown in the images below, then the `Save` button.

> Note that WalletConnect requires a large logo file (atleast 500x500) so I stole this awesome avatar from the Academy files... [https://academy.ecdao.org/new-avatar.png](https://academy.ecdao.org/new-avatar.png)

<img src="https://i.imgur.com/vqY6zsv.png" />
<img src="https://i.imgur.com/bJKf27F.png" />
<img src="https://i.imgur.com/fJjIwi2.png" />
<img src="https://i.imgur.com/yCNLBYC.png" />
<img src="https://i.imgur.com/SdQd9ym.png" />

Head back to the `Settings` tab and copy your `Project ID`, save this somewhere as you will need it in a later step.

<img src="https://i.imgur.com/QRtLeGk.png" />

## Setup the WalletConnect Plugin

Add the following `WalletConnectConfig` about the `metadata` property in the `setup()` function.

```swift
let walletConnect = FCL.Metadata.WalletConnectConfig(urlScheme: "emeraldDApp://", projectID: "485264ff93ea1a0e78e96a740c1e775d")
```

Then update the `metadata` property like so:

```swift
let metadata = FCL.Metadata(appName: "Emerald DApp!",
                                    appDescription: "EmeraldDApp for Emerald Academy",
                                    appIcon: URL(string: "https://academy.ecdao.org/ea-logo.png")!,
                                    location: URL(string: "https://academy.ecdao.org/")!,
                                    accountProof: accountProof,
                                    walletConnectConfig: walletConnect)
```

## Running The DApp On Your iOS Device

First, you need to ensure Developer Mode is enabled on your iOS Device. If you connect an iOS, visionOS, or watchOS device with Developer Mode disabled to your Mac, the Xcode scheme selector’s destination list shows it as an “Unavailable Device”.

<img src="https://docs-assets.developer.apple.com/published/98d92a626934d5dd4a0941e7dae333c2/enabling-developer-mode-on-a-device-01~dark@2x.png" />

Running your app on the device requires that you enable Developer Mode. On your iOS device, open Settings > Privacy & Security, scroll down to the Developer Mode list item and navigate into it. On a watchOS device that you use for development, go to Settings > Privacy > Developer Mode. To toggle Developer mode, use the Developer Mode switch.

<img src="https://docs-assets.developer.apple.com/published/72b149b975624bfaf5f6fb577655b200/enabling-developer-mode-on-a-device-03~dark@2x.png" />

Tap the switch to enable Developer Mode. After you do so, Settings presents an alert to warn you that Developer Mode reduces the security of your device. To continue enabling Developer Mode, tap the alert’s Restart button.

After the device restarts and you unlock it, the device shows an alert confirming that you want to enable Developer Mode. To acknowledge the reduction in security protection in exchange for allowing Xcode and other tools to execute code, tap Turn On, and enter your device passcode when prompted.

At this point, your device is ready to install and run apps from Xcode. After you have enabled Developer Mode the first time, Xcode doesn’t ask again unless you disable Developer Mode or you restore the device. You can Build and Run from Xcode without further prompts to enable Developer Mode.

Select your iOS device from the scheme selector then hit the play button to run our DApp on the device

<img src="https://i.imgur.com/UZKe84P.png" />

This time when you sign in, select Lilico, if everything is working properly Lilico Moible should open automatically. Once the Auth screen loads, select Approve. In theory, you should automatically be directed back to your DApp, however, in practice sometimes the routing just doesn't work... you can manually switch back to your DApp at any time after selecting approve.

<img src="https://i.imgur.com/UZKe84P.png" />

## Quests

We've got a lot to cover in lesson 3, your Quest for today is to go back over any pieces you may have struggled with up until this point. Ask any questions you might have in Discord.
