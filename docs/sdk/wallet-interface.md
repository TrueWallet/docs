---
sidebar_position: 3
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
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  
  console.log(wallet.address); // '0x...'
  console.log(wallet.ready); // true
  wallet.rpcProvider.getBlockNumber().then(console.log); // 12345
```

## Methods
### getBalance
method to get balance of the wallet in ether unit format

returns \{string\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const balance = await wallet.getBalance(); // 123.45
```

### getERC20Balance
method to get balance in ethers format of the wallet for specified ERC20 token

params:

| Parameter    | Type   | Required | Value                             |
|--------------|--------|-|-----------------------------------|
| tokenAddress | string | True  | Address of the ERC20 token        |

returns \{string\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
  const balance = await wallet.getERC20Balance(usdtAddress); // 123.45
```

### getNonce
method to get nonce of the wallet

returns \{bigInt\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
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

returns \{[UserOperationResponse](#useroperationresponse)\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
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

returns \{[UserOperationResponse](#useroperationresponse)\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
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

returns \{unknown\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
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

returns \{[UserOperationResponse](#useroperationresponse)\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
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

## Data interfaces
### UserOperationResponse
* **userOperationHash**: string - User operation hash (unique identifier from the Bundler)
* **wait(maxRetry: number = 0)**: Promise\<[UserOperationReceipt](#useroperationreceipt)\> - Helper for waiting while the transaction will be mined. When maxRetry is 0, the promise will be fulfilled/rejected when the transaction is mined in a blockchain.

### UserOperationReceipt
* **actualGasCost**: string - Hex string of the actual gas cost
* **actualGasUsed**: string - Hex string of the actual gas used
* **from**: string - Sender address
* **logs**: [UserOperationLog](#useroperationlog)[] - Array of logs
* **nonce**: string - Hex string of the nonce
* **paymaster**: string - Paymaster address
* **receipt**: [UserOperationTransactionReceipt](#useroperationtransactionreceipt) - Transaction receipt
* **sender**: string - Sender address
* **success**: boolean - Operation success status
* **userOpHash**: string - User operation hash

### UserOperationTransactionReceipt
* **blockHash**: string - Hex string of the block hash
* **blockNumber**: string - Hex string of the block number
* **cumulativeGasUsed**: string - Hex string of the cumulative gas used
* **effectiveGasPrice**: string - Hex string of the effective gas price
* **from**: string - Sender address
* **gasUsed**: string - Hex string of the gas used
* **logs**: [UserOperationLog](#useroperationlog)[] - Array of logs
* **logsBloom**: string - Hex string of the logs bloom
* **transactionHash**: string - The transaction hash
* **transactionIndex**: string - Hex string of the transaction index

### UserOperationLog
* **address**: string;
* **blockHash**: string - The block hash
* **blockNumber**: string - Hex string of the block number
* **data**: string - Call data
* **logIndex**: string - Hex string of the log index
* **removed**: boolean - Log removed status
* **topics**: string[] - Array of topics
* **transactionHash**: string - The transaction hash
* **transactionIndex**: string - Hex string of the transaction index
