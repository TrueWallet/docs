---
sidebar_position: 1
title: TrueWallet SDK - Social Recovery module
description: Learn how to integrate the Social Recovery module into your TrueWallet SDK applications. Follow the step-by-step guide to install, remove, and use the Social Recovery module for wallet recovery.
keywords: [Social Recovery module, TrueWallet SDK, crypto wallet restoration, crypto wallet security, crypto trusted guardians, Smart Account social recovery]
sidebar_label: Social Recovery
---
# Social Recovery Module
Social Recovery module is a decentralized social recovery mechanism for wallet recovery. The Social Recovery module allows users to recover their wallets using a social recovery mechanism, enabling them to restore access to their wallets in case of loss or theft. The module leverages a network of trusted friends or family members to recover the wallet, ensuring secure and reliable access to the user's funds.

## Installation
To install the Social Recovery module, follow the steps below:

```typescript
import {initTrueWallet} from '@truewallet/sdk';

/** Initialisation with salt */
const trueWallet = await initTrueWallet({
  signer: {
    type: 'salt',
    data: ['{{YOUR_UNIQUE_STRING_FOR_PRIVATE_KEY_GENERATION}}']
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
  // Optional, bundlerUrl is used when rpcProviderUrl is not provided
  // rpcProviderUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});

/** Install module */
const operationResponse = await trueWallet.installModule('SocialRecoveryModule', {
  // Guardians addresses - addresses of trusted friends or family members who can restore the wallet
  guardians: [
    '0x...',
    '0x...',
    '0x...'
  ],
  // Threshold - the minimum number of guardians required to recover the wallet
  threshold: 2,
});

await operationResponse.wait(); // wait for the transaction to be mined
```

## Remove module
To remove the Social Recovery module, follow the steps below:

```typescript
import {initTrueWallet} from '@truewallet/sdk';

/** Initialisation with salt */
const trueWallet = await initTrueWallet({
  signer: {
    type: 'salt',
    data: ['{{YOUR_UNIQUE_STRING_FOR_PRIVATE_KEY_GENERATION}}']
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
  // Optional, bundlerUrl is used when rpcProviderUrl is not provided
  // rpcProviderUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});

/** Remove module */
const operationResponse = await trueWallet.removeModule('SocialRecoveryModule');
await operationResponse.wait(); // wait for the transaction to be mined
```

## Check if the module is installed
```typescript
import {initTrueWallet} from '@truewallet/sdk';
const trueWallet = await initTrueWallet({...});

const isInstalled = trueWallet.isModuleInstalled('SocialRecoveryModule');
console.log(isInstalled); // true
```

## Usage
The Social Recovery module provides the following methods:

### getGuardians
The `getGuardians` method retrieves the list of guardians associated with the wallet.

returns: Promise\<string[]\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});

const guardians = await trueWallet.socialRecoveryModule.getGuardians();
console.log(guardians); // ['0x...', '0x...', '0x...']
```

### getGuardiansCount
The `getGuardiansCount` method retrieves the number of guardians associated with the wallet.

returns: Promise\<bigint\>

```typescript
const guardiansCount = await trueWallet.socialRecoveryModule.getGuardiansCount();
console.log(guardiansCount); // 3n
```

### isGuardian 
The `isGuardian` method checks if the specified address is a guardian of the wallet.

params:
| Parameter | Type       | Required | Value                             |
|-----------|------------|----------|-----------------------------------|
| address   | string     | True     | Guardian address                  |

returns: Promise\<boolean\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const isGuardian = await trueWallet.socialRecoveryModule.isGuardian('0x...');
console.log(isGuardian); // false
```

### nonce
The `nonce` method retrieves the nonce of the Recovery module Smart Contract.
returns: Promise\<bigint\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const nonce = await trueWallet.socialRecoveryModule.nonce();
console.log(nonce); // 1n
```

### getThreshold 
The `getThreshold` method retrieves the threshold value of the Recovery module Smart Contract.

returns: Promise\<bigint\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const threshold = await trueWallet.socialRecoveryModule.getThreshold();
console.log(threshold); // 2n
```

### getRecoveryApprovals 
The `getRecoveryApprovals` method retrieves the guardian approval count for this particular recovery request.

params:
| Parameter | Type       | Required | Value                             |
|-----------|------------|----------|-----------------------------------|
| walletAddress  | string     | True     | The target wallet |
| newOwners  | string[]     | True     | The new owners' addresses |

returns: Promise\<bigint\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const approvals = await trueWallet.socialRecoveryModule.getRecoveryApprovals(trueWallet.address, ['0x...', '0x...']);
console.log(approvals); // 2n
```

### getRecoveryEntry
The `getRecoveryEntry` retrieves the wallet's current ongoing recovery request.

| Parameter | Type       | Required | Value                             |
|-----------|------------|----------|-----------------------------------|
| walletAddress  | string     | True     | The target wallet |

returns: Promise\<[string[], bigint, bigint]>\> - The list of new owners, the time until which the recovery will be pending, and the nonce - unique nonce to ensure each recovery process is unique

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const recoveryEntry = await trueWallet.socialRecoveryModule.getRecoveryEntry(trueWallet.address);
console.log(recoveryEntry); // [['0x...', '0x...'], 1640995200n, 2n]
```

### approveRecovery 
The `approveRecovery` method should be called by guardian to start recovery process

params:
| Parameter | Type       | Required | Value                             |
|-----------|------------|----------|-----------------------------------|
| restoringWallet  | string     | True     | Address of the wallet that is being restored |
| newOwners  | string[]     | True     | The list of addresses that will be the new owners of the wallet after recovery |
| pendingUntil | number     | True     | The time in seconds until which the recovery will be pending *Recommended time is 172800 (2 days) * |

returns: Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const operationResponse = await trueWallet.socialRecoveryModule.approveRecovery('0x...', ['0x...', '0x...'], 1640995200);
await operationResponse.wait(); // wait for the transaction to be mined
```

### executeRecovery 
The `executeRecovery` method should be called by guardian to approve and set new owner of the wallet.

Before executing this function, guardians should call `approveRecovery` function `threshold` times.

params:
| Parameter | Type       | Required | Value                             |
|-----------|------------|----------|-----------------------------------|
| wallet  | string     | True     | Address of the wallet that is being restored |

returns: Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const operationResponse = await trueWallet.socialRecoveryModule.executeRecovery('0x...');
await operationResponse.wait(); // wait for the transaction to be mined
```

### cancelRecovery
The `cancelRecovery` method should be called by wallet owner to cancel the recovery process.

returns: Promise\<[UserOperationResponse](/sdk/data-interfaces#useroperationresponse)\>

```typescript
import {initTrueWallet} from '@truewallet/sdk';

const trueWallet = await initTrueWallet({...});
const operationResponse = await trueWallet.socialRecoveryModule.cancelRecovery();
await operationResponse.wait(); // wait for the transaction to be mined
```
