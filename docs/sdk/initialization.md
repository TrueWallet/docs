---
sidebar_position: 2
title: TrueWallet SDK Authentication Method - Private Key, Metamask, and Salt
description: Explore the available authentication methods for integrating TrueWallet SDK into your applications. Learn about Private Key usage, Metamask integration, and generating private keys from unique strings (Salt) while considering security implications.
keywords: [TrueWallet SDK, authentication methods, Private Key, Metamask, Salt, EIP-1193, security implications, JWT wallet]
sidebar_label: Initialization
---
# Initialization
There are a couple available methods that could be used during wallet initialization.

## JWT

Please make sure that your JWT meets the minimum requirements. It must contain `alg` in the header, `iss`, `sub`, `aud`, `iat`, and `exp` in the payload. Otherwise, a token will be rejected. For the user ID you can add a custom payload, for example `user_id`. All details with explanations can be found in <a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="nofollow noopener noreferrer">RFC-7519</a>.

Please make sure that your JWKS contain `kty`, `kid`, `use`, `alg`, `n`, and `e` and JWKS Endpoint is public for everyone. All details with explanations can be found in <a href="https://datatracker.ietf.org/doc/html/rfc7517" target="_blank" rel="nofollow noopener noreferrer">RFC-7517</a>.

Visit the [dashboard](https://dashboard.true-wallet.io), and create a new project (or modify the existing one). In the section Project settings (JWT authentication) add JWKS Endpoint and User Claim, which represents a unique user ID in your system (in our example above it is `user_id`).

The private key will be generated for each user and stored in the [encrypted private key storage](/private-key-storage).

*Pay attention. After setting up JWT authentication in the TrueWallet dashboard, it is highly not recommended to change your JWT payload, because it takes part in private key generation.*

```javascript
import {initTrueWallet} from '@truewallet/sdk';
/**
 * This is an example function to get JWT token from your API
 * It should return a string with JWT token
 * @returns {Promise<string>}
 * */
const getJwt = async() => {
  const { token } = await fetch('API_URL').then(res => res.json());
  return token;
};

const trueWallet = await initTrueWallet({
  signer: {
    type: 'jwt',
    data: [getJwt]
  },
  bundlerUrl: '{{ENDPOINT_URL_FROM_DASHBOARD}}',
});
```

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
