---
sidebar_position: 1
title: TrueWallet SDK Integration Guide - Installation & Authentication
description: Learn how to integrate the TrueWallet SDK seamlessly into your projects. Follow step-by-step instructions for installation, authentication, and accessing available methods for enhanced functionality.
keywords: [TrueWallet, SDK integration, TrueWallet dashboard, API Endpoint, installation guide, authentication methods, wallet initialization, endpoint URL]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integration
Before starting you need to create an account in the TrueWallet [dashboard](https://dashboard.true-wallet.io). Create a project inside and copy the API Endpoint.

## Installation
Install the required packages for initializing the TrueWallet SDK.

<Tabs groupId="installation">
  <TabItem value="npm" label="npm">
    ```shell
    npm install ...
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```shell
    yarn add ...
    ```
  </TabItem>
</Tabs>

## Integration Example
Before initialisation your first wallet, create endpoint url in the [dashboard](https://dashboard.true-wallet.io).

To check all available methods, please refer to the [authentication](/sdk/authentication).


### Initialisation with salt:
```javascript
  import {init} from 'true-wallet-sdk';

  /** Initialisation with salt */
  const trueWallet = await init({
    signer: {
      type: 'salt',
      data: ['{{YOUR_UNIQUE_STRING_FOR_PRIVATE_KEY_GENERATION}}']
    },
    rpcProviderUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
    bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
  });
```
