---
sidebar_position: 7
title: TrueWallet SDK utilities - Exploring utility functions
description: Dive into the TrueWallet SDK utilities, encompassing various functions for managing and accessing essential data within your applications. Explore the functionalities and capabilities offered by different data interfaces within the TrueWallet SDK.
keywords: [TrueWallet SDK, Utils, SDK utilities, utility functions, application development, interface functionalities]
sidebar_label: Utils
---

# Utilities

## isEthAddress
Utility function to check if given address is an Ethereum address

params:

| Parameter | Type               | Required | Value                               |
|-----------|--------------------|----------|-------------------------------------|
| address   | string             | True     | string to check if ethereum address |

returns \{boolean\}

```typescript
import {isEthAddress} from '@truewallet/sdk';

const isAddress = isEthAddress('test');
console.log(isAddress); // false

const isAddress2 = isEthAddress('0x1234567890123456789012345678901234567890');
console.log(isAddress2); // true
```

## getChecksumAddress

Utility function to get the checksum address of given address

params:
| Parameter | Type               | Required | Value                               |
|-----------|--------------------|----------|-------------------------------------|
| address   | string             | True     | string to get checksum address       |

returns \{string\}

```typescript
import {getChecksumAddress} from '@truewallet/sdk';

const checksumAddress = getChecksumAddress('0x8ba1f109551bd432803012645ac136ddd64dba72');
console.log(checksumAddress); // 0x8ba1f109551bD432803012645Ac136ddd64DBA72
```

## fromWei

Utility function to convert wei value to the given unit value

params:
| Parameter | Type               | Required | Value                               |
|-----------|--------------------|----------|-------------------------------------|
| wei       | string | number | bigint | True     | wei value to convert to the eth value      |
| decimals  | number             | False    | (default=18) number of decimals to use on conversion |

returns \{string\}

```typescript
import {fromWei} from '@truewallet/sdk';

const ethValue = fromWei('1000000000000000000');
console.log(ethValue); // '1.0'

const ethValue2 = fromWei('1000000', 6);
console.log(ethValue2); // '1.0'
```

## toWei

Utility function to convert given unit value to the wei value

params:
| Parameter | Type               | Required | Value                               |
|-----------|--------------------|----------|-------------------------------------|
| eth       | string  | True     | eth value to convert to the wei value      |
| decimals  | number             | False    | (default=18) number of decimals to use on conversion |

returns \{bigint\}

```typescript
import {toWei} from '@truewallet/sdk';

const weiValue = toWei('1.0');
console.log(weiValue); // 1000000000000000000n

const weiValue2 = toWei('1.0', 6);
console.log(weiValue2); // 1000000n
```
