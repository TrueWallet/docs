---
sidebar_position: 4
title: TrueWallet SDK Bundler Client Interface - Available Methods
description: Explore the TrueWallet SDK Bundler Client Interface, revealing the available methods for efficient bundling and managing transactions. Learn how to leverage the Bundler client interface to streamline transaction processing in your applications.
keywords: [TrueWallet SDK, Bundler client interface, available methods, transaction bundling, transaction management, SDK functionalities]
sidebar_label: Bundler client interface
---
# Bundler client interface
You can check more information about the Bundler [here](/category/bundler).

## Methods
### sendUserOperation
method to send user operation to the bundler

params:

| Parameter | Type   | Required | Value               |
|-----------|--------|----------|---------------------|
| operation | [UserOperationData](/sdk/data-interfaces#useroperationdata) | True | User operation data |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const operation = await wallet.operationBuilder.buildOperation({...});
  const response = await wallet.bundler.sendUserOperation(operation);
```

### estimateUserOperationGas
method to estimate user operation gas

params:

| Parameter | Type   | Required | Value               |
|-----------|--------|----------|---------------------|
| operation | [UserOperationData](/sdk/data-interfaces#useroperationdata) | True | User operation data |

returns \{Promise\<[GasEstimation](/sdk/data-interfaces#gasestimation)\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const operation = await wallet.operationBuilder.buildOperation({...});
  const gas = await wallet.bundler.estimateUserOperationGas(operation);
```

### getUserOperationByHash
method to get user operation data by operation hash

params:

| Parameter | Type   | Required | Value               |
|-----------|--------|----------|---------------------|
| hash      | string | True     | User operation hash |

returns \{Promise\<[UserOperationData](/sdk/data-interfaces#useroperationdata) | null\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const operation = await wallet.bundler.getUserOperationByHash('0x...');
```


### getUserOperationReceipt
method to get user operation receipt by operation hash

params:

| Parameter | Type   | Required | Value                                    |
|-----------|--------|----------|------------------------------------------|
| hash      | string | True     | Operation hash                           |
| maxRetry   | number | False    | Default value is 0. When maxRetry is 0, the promise will be fulfilled/rejected when the transaction is mined in a blockchain  |

returns \{Promise\<[UserOperationReceipt](/sdk/data-interfaces#useroperationreceipt)\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const receipt = await wallet.bundler.getUserOperationReceipt('0x...');
```

### getSupportedEntryPoints
method to get supported entry points of the bundler

returns \{Promise\<string[]\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const entryPoints = await wallet.bundler.getSupportedEntryPoints();
```
