---
sidebar_position: 3
title: TrueWallet SDK Interfaces - Properties and Methods Explained
description: Discover the comprehensive guide to TrueWallet SDK interfaces, detailing properties and methods for seamless integration into your applications. Explore the functionalities and capabilities offered by TrueWallet's SDK for enhanced wallet management.
keywords: [TrueWallet SDK, wallet SDK interfaces, properties, methods, wallet management, integration guide]
sidebar_label: Wallet Interface
---
# Wallet Interface

## Properties
### address
returns wallet address

### ready
indicates whether the wallet is deployed to blockchain

### rpcProvider
Instance of `JsonRpcProvider` from [ethers.js](https://docs.ethers.org/v6/api/providers/jsonrpc/#JsonRpcProvider)

### operationBuilder
Instance of [OperationBuilder](/sdk/operation-builder-interface). Used to prepare user operations.

### bundler
Instance of [Bundler](/sdk/bundler-interface) client.

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});

console.log(wallet.address); // '0x...'
console.log(wallet.ready); // true
wallet.rpcProvider.getBlockNumber().then(console.log); // 12345
```

### erc20
Instance of [ERC-20](/sdk/erc-20) helper.


### erc721
Instance of [ERC-721](/sdk/erc-721) helper.

### erc1155
Instance of [ERC-1155](/sdk/erc-1155) helper.


## Methods
### getBalance
method to get balance of the wallet in ether unit format

returns \{Promise\<string\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const balance = await wallet.getBalance(); // 123.45
```

### getERC20Balance
method to get balance in ethers format of the wallet for specified ERC20 token

params:

| Parameter    | Type   | Required | Value                             |
|--------------|--------|-|-----------------------------------|
| tokenAddress | string | True  | Address of the ERC20 token        |

returns \{Promise\<string\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const balance = await wallet.getERC20Balance(usdtAddress); // 123.45
```

### getNonce
method to get nonce of the wallet

returns \{Promise\<bigInt\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const nonce = await wallet.getNonce(); // 12345n
```

### send
method to send native tokens to the specified address

params:

| Parameter    | Type       | Required | Value                             |
|--------------|------------|-|-----------------------------------|
| params       | SendParams | True  | SendParams object                |
| paymaster    | string     | False | Address of the paymaster contract |

*SendParams:*
* **to** - (string) Recipient address
* **amount** - (string | number) Amount to send in ether unit format

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const operationResponse = await wallet.send({to: '0x...', amount: 123.45});
await operationResponse.wait(); // wait for the transaction to be mined
```

### sendErc20
method to send ERC20 tokens to the specified address

params:

| Parameter    | Type       | Required | Value                             |
|--------------|------------|-|-----------------------------------|
| params       | SendErc20Params | True  | SendErc20Params object           |
| paymaster    | string     | False | Address of the paymaster contract |

*SendErc20Params:*
* **to** - (string) Recipient address
* **amount** - (string | number) Amount to send in ether unit format
* **tokenAddress** - (string) Address of the ERC20 token

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const operationResponse = await wallet.sendErc20({to: '0x...', amount: 123.45, tokenAddress: usdtAddress});
await operationResponse.wait(); // wait for the transaction to be mined
```

### contractRead
method to read data from the contract

params:

| Parameter | Type       | Required | Value                             |
|-----------|------------|-|-----------------------------------|
| params    | ContractCallParams | True  | ContractCallParams object        |

*ContractCallParams:*
* **address**: string - Address of the contract to be called
* **abi**: [InterfaceAbi](https://docs.ethers.org/v6/api/abi/#InterfaceAbi) | [Interface](https://docs.ethers.org/v6/api/abi/#Interface) - Abi of the contract
* **method**: string - Method name
* **args**: unknown[] - Arguments for the method

returns \{Promise\<unknown\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const usdtAbi = ['function allowance(address owner, address spender) view returns (uint256)'];
const allowance = await wallet.readContract({
  address: usdtAddress,
  abi: usdtAbi,
  method: 'allowance',
  args: ['0x...', '0x...']
});
console.log(allowance); // 1000000000000000000
```

### contractCall
method to call the contract methods

params:

| Parameter | Type       | Required | Value                             |
|-----------|------------|-|-----------------------------------|
| params    | ContractWriteParams | True  | ContractWriteParams object       |
| paymaster | string     | False | Address of the paymaster contract |

*ContractWriteParams:*
* **address**: string - Address of the contract to be called
* **abi**: [InterfaceAbi](https://docs.ethers.org/v6/api/abi/#InterfaceAbi) | [Interface](https://docs.ethers.org/v6/api/abi/#Interface) - Abi of the contract
* **method**: string - Method name
* **args**: unknown[] - Arguments for the method
* **payableAmount?**: number | string - (optional) Amount of native tokens to send with the transaction

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const usdtAbi = ['function approve(address spender, uint256 amount)'];
const operationResponse = await wallet.contractCall({
  address: usdtAddress,
  abi: usdtAbi,
  method: 'approve',
  args: ['0x...', 1000000]
});
await operationResponse.wait(); // wait for the transaction to be mined
```

### getInstalledModules
method to get installed modules of the wallet

returns \{Promise\<string[]\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const modules = await wallet.getInstalledModules();
console.log(modules); // ['0x...', '0x...']
```

### getModuleAddress
method to get module smart contract address of the wallet

params:

| Parameter | Type                  | Required | Value                            |
|-----------|-----------------------|----------|----------------------------------|
| module    | [TrueWalletModules](/sdk/data-interfaces#truewalletmodules) | True     | Module name                      |

returns \{Promise\<string\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const address = await wallet.getModuleAddress('SocialRecoveryModule');
console.log(address); // '0x...'
```

### installModule
method to install the module to the wallet

params:

| Parameter | Type                  | Required | Value                            |
|-----------|-----------------------|----------|----------------------------------|
| module    | [TrueWalletModules](/sdk/data-interfaces#truewalletmodules) | True     | Module name                      |
| moduleData | unknown               | True     | Mandatory data to install module |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const moduleData = {
  guardians: [
    '0x...',
    '0x...',
    '0x...'
  ],
  threshold: 2,
};
const operationResponse = await wallet.installModule('SocialRecoveryModule', moduleData);
await operationResponse.wait(); // wait for the transaction to be mined
```

### removeModule
method to remove the module from the wallet

params:

| Parameter | Type                  | Required | Value        |
|-----------|-----------------------|----------|--------------|
| module    | [TrueWalletModules](/sdk/data-interfaces#truewalletmodules) | True     | Module name  |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const operationResponse = await wallet.removeModule('SocialRecoveryModule');
await operationResponse.wait(); // wait for the transaction to be mined
```

### isWalletOwner
method to check if the given address is the owner of the wallet

params:

| Parameter | Type   | Required | Value        |
|-----------|--------|----------|--------------|
| address   | string | True     | Address to check |

returns \{Promise\<boolean\>\}

```javascript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const isOwner = await wallet.isWalletOwner('0x...');
console.log(isOwner); // true
```

### execute
low level method to execute the transaction on behalf of the wallet

params:

| Parameter | Type   | Required | Value                                                                   |
|-----------|--------|----------|-------------------------------------------------------------------------|
| payload   | string | True     | Transaction calldata                                                    |
| target    | string | False    | Target address. Default value - wallet address                          |
| value     | string | False    | Amount of native tokens to send with the transaction. Default value - 0 |
| paymaster | string | False    | Address of the paymaster contract                                       |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```javascript
import {initTrueWallet, encodeFunctionData} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const contractAddress = '0x....';
const abi = ['function approve(address spender, uint256 amount)'];
const payload = encodeFunctionData(abi, 'approve', ['0x...', 1000000]);
const operationResponse = await wallet.execute(payload, contractAddress);
await operationResponse.wait(); // wait for the transaction to be mined
```
