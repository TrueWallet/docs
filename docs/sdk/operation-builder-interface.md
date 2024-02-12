---
sidebar_position: 5
title: TrueWallet SDK Operation Builder Interface - Available Methods
description: Discover the available methods within the TrueWallet SDK Operation Builder Interface, designed to facilitate the creation and execution of various operations within your applications. Learn how to leverage the Operation Builder interface for seamless operation management.
keywords: [TrueWallet SDK, Operation Builder interface, available methods, operation creation, operation execution, SDK functionalities]
sidebar_label: Operation builder interface
---
# Operation builder interface
Operation builder is used to create user operation object;

## Methods
### buildOperation
method to build user operation object

params:

| Parameter | Type               | Required | Value |
|-----------|--------------------|----------|-------|
| operation | OperationParams | True | Operation object |
| paymaster | string             | False    | Paymaster address |

*OperationParams:*
* **sender**: string - sender address
* **callData**: string - transaction call data
* **initCode**: string - init code (used to deploy wallet contract, use '0x' if deployed)
* **nonce**: string - wallet nonce

returns \{Promise\<[UserOperationData](/sdk/data-interfaces#useroperationdata)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const operation = wallet.operationBuilder.buildOperation({
  sender: '0x1234567890123456789012345678901234567890',
  callData: '0x....',
  initCode: '0x',
  nonce: '12345'
});
```
