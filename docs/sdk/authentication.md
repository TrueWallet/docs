---
sidebar_position: 2
title: TrueWallet SDK Authentication Method - Private Key, Metamask, and Salt
description: Explore the available authentication methods for integrating TrueWallet SDK into your applications. Learn about Private Key usage, Metamask integration, and generating private keys from unique strings (Salt) while considering security implications.
keywords: [TrueWallet SDK, authentication methods, Private Key, Metamask, Salt, EIP-1193, Brainwallet, security implications]
sidebar_label: Authentication
---
# Authentication
There are a couple available authentication methods that could be used during wallet initialization.

## Private Key
```javascript
import {initTrueWallet} from '@truewallet/sdk';

/** Initialisation with existing private key */
const trueWallet = await initTrueWallet({
  signer: {
    type: 'privateKey',
    data: ['{{YOUR_PRIVATE_KEY}}']
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});
```

## Metamask
Works with [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible wallets like Metamask. Using this method, we don't handle selected wallet address and network. Metamask will be used only to sign messages for user operations. 
```javascript
import {initTrueWallet} from '@truewallet/sdk';

/** Initialisation with Metamask */
const trueWallet = await initTrueWallet({
  signer: {
    type: 'injected',
    data: [window.ethereum]
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});
```

## Salt
This method is used to generate a private key from a unique string. Pay attention to the fact that the same string will always generate the same private key.
Read information about **Weak Brainwallet** before using this method.

*Brainwallet is a method of creating a private key based on a user-generated phrase instead of a random number. It is easy to remember, hence literally “kept in the head.”
Often, users generate keys from single words, obvious combinations like 12341234, phone numbers, or quotes from movies. Hackers exploit human predictability: they create keys from popular or leaked passwords, and then withdraw cryptocurrencies from the corresponding wallets. Thus, since 2009, perpetrators have hacked more than 19,000 Bitcoin wallets and stolen at least 4000 BTC.*
```javascript
import {initTrueWallet} from '@truewallet/sdk';

/** Initialisation with salt */
const trueWallet = await initTrueWallet({
  signer: {
    type: 'salt',
    data: ['{{YOUR_UNIQUE_STRING_FOR_PRIVATE_KEY_GENERATION}}']
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});
```
