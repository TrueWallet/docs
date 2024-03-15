---
sidebar_position: 8
title: TrueWallet SDK ERC-20 helper - Exploring ERC-20 helper functions
sidebar_label: ERC-20
---

# TrueWallet SDK ERC-20 helper
Helper class to call default ERC-20 tokens functions

## Methods
### getBalance
Returns the balance of the current wallet in tokens

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |

returns \{Promise\<string\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const balance = await wallet.erc20.getBalance(usdtAddress); // 123.45
```

### send
Send the `params.amount` of tokens from the current wallet to the `params.to` address

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| params       | Omit\<[SendErc20Params](/sdk/data-interfaces#senderc20params), 'from'\> | True     | SendErc20Params object              |
| paymaster    | string | False    | Paymaster address                  |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const operationResponse = await wallet.erc20.send({to: '0x...', amount: 123.45, contractAddress: usdtAddress});
await operationResponse.wait(); // wait for the transaction to be mined
```

### name 
Returns the name of the token

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |

returns \{Promise\<string\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const name = await wallet.erc20.name(usdtAddress); // 'Tether USD'
```

### symbol
Returns the symbol of the token

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |

returns \{Promise\<string\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const symbol = await wallet.erc20.symbol(usdtAddress); // 'USDT'
```

### decimals
Returns the decimals of the token

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |

returns \{Promise\<bigint\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const decimals = await wallet.erc20.decimals(usdtAddress); // 6n
```

### totalSupply
Returns the total supply of the token

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |

returns \{Promise\<bigint\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const totalSupply = await wallet.erc20.totalSupply(usdtAddress); // 1000000000000000n
```

### balanceOf
Returns the account balance of another account with the address `owner`.

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |
| owner        | string | True     | Address of the account            |

returns \{Promise\<bigint\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const walletToCheck = '0x...';
const balance = await wallet.erc20.balanceOf(usdtAddress, walletToCheck); // 123456n
```

### allowance
Returns the amount which `spender` is still allowed to withdraw from `owner`.

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| contractAddress | string | True     | Address of the ERC-20 token contract              |
| owner        | string | True     | Address of the account that owns the tokens |
| spender      | string | True     | Address of the account that is allowed to spend the tokens |

returns \{Promise\<bigint\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const ownerAccount = '0x...';
const spenderAccount = '0x...';
const allowance = await wallet.erc20.allowance(usdtAddress, ownerAccount, spenderAccount); // 123456n
```

### transfer
Transfers `params.amount` of tokens in wei from the current wallet to the `params.to` address

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| params       | Omit\<[SendErc20Params](/sdk/data-interfaces#senderc20params), 'from'\> | True     | SendErc20Params object              |
| paymaster    | string | False    | Paymaster address                  |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const operationResponse = await wallet.erc20.transfer({to: '0x...', amount: 123.45, contractAddress: usdtAddress});
await operationResponse.wait(); // wait for the transaction to be mined
```

### transferFrom 
Transfers `params.amount` of tokens in wei from the `params.from` address to the `params.to` address.
The transferFrom method is used for a withdrawal workflow, allowing contracts to transfer tokens on your behalf.

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| params       | [SendErc20Params](/sdk/data-interfaces#senderc20params) | True     | SendErc20Params object              |
| paymaster    | string | False    | Paymaster address                  |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const ownerAccount = '0x...';
const toAccount = '0x...';

// Before calling transferFrom, the owner must call approve to give the spender permission to spend the tokens
const operationResponse = await wallet.erc20.transferFrom({from: ownerAccount, to: toAccount, amount: 123.45, contractAddress: usdtAddress});
await operationResponse.wait(); // wait for the transaction to be mined
```

### approve
Allows `params.spender` to withdraw from your account multiple times, up to the `params.amount`.
If this function is called again it overwrites the current allowance with the new `params.amount`.

params:
| Parameter    | Type   | Required | Value                             |
| ------------ | ------ | -------- | --------------------------------- |
| params       | [ApproveErc20Params](/sdk/data-interfaces#approveerc20params)   | True     | SendErc20Params object          |
| paymaster    | string | False    | Paymaster address                  |

returns \{Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>\}

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const wallet = await initTrueWallet({...});
const usdtAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const spenderAccount = '0x...';
const operationResponse = await wallet.erc20.approve({spender: spenderAccount, amount: 123.45, contractAddress: usdtAddress});
await operationResponse.wait(); // wait for the transaction to be mined
```
