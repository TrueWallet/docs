---
sidebar_position: 6
title: TrueWallet Encrypted Private Key Storage
description: Discover how our advanced private key storage solution ensures the highest security for your crypto wallets using AWS Key Management Service (KMS) and Nitro Enclaves. Learn about our secure vault, isolated environments, and the benefits of custodial and centralized solutions.
keywords: [private key storage, crypto wallet security, AWS KMS, Nitro Enclaves, secure vault, isolated environment, custodial solution, centralized crypto storage, blockchain security, secure crypto transactions]
sidebar_label: Private Key Storage
---
# Private Key Storage

## Under the hood

### The core technologies

1. AWS Key Management Service (KMS)
   * Secure Vault: AWS KMS acts like a secure vault where your private keys are stored in an encrypted format. This vault is highly protected and **only** accessible to authorized processes
   * Controlled Access: Only specific, trusted systems can request to use your keys, ensuring they are never exposed to unauthorized access
2. AWS Nitro Enclaves
   * Isolated Environment: Nitro Enclaves are like fortified rooms within our servers. These rooms are isolated from the rest of the server, providing a highly secure environment for sensitive operations.
   * Enhanced Security: Even if other parts of the server are compromised, the enclave remains secure, keeping your private keys safe during critical operations.

### Keys Storing

When you create a crypto wallet, your private key is generated and immediately encrypted using AWS KMS. This encrypted key is then stored securely in the KMS vault. Example: Imagine your private key is a precious gem. We put this gem into a high-security safe (AWS KMS) that only a trusted person can open.


### Keys Using

When your wallet needs to perform a sensitive operation (like signing a transaction), the operation takes place within a Nitro Enclave. The enclave securely requests the private key from the KMS vault, performs the operation, and then returns the result without the private key ever leaving the secure environment. Example: It’s like taking the precious gem out of the safe, using it in a secured room (Nitro Enclave), and then locking it back in the safe without it ever leaving the room.

## Is it custodial?

What is custodial? When the private keys to cryptocurrency addresses are not held by the owner but by a third party, it is usually a service that provides storage solutions. This could be a cryptocurrency exchange, a bank, or a specialized token storage service.

What is non-custodial? A non-custodial wallet allows the user to have full control over their private keys and, consequently, their funds on the blockchain. In this case, the private keys are stored locally on the user's device and are not shared with third parties.

So, from these definitions, we can say yes - it is the custodial solution. Even when no one has access to the generated private keys or Master Key.

## Is it centralized?

And again - yes. Solutions based on AWS KMS or MPC are centralized. Of course, you can find different implementations, where some nodes (not blockchain nodes) could be in this picture. But all these solutions cannot be decentralized, because communication with them occurs via a centralized API.

## Why should I use it?

When from the definition it is called custodial, but no one has access to it. TrueWallet provides Account Abstraction, which means that you always have [Social Recovery](/sdk/modules/social-recovery) and you can restore access to the wallet or change the wallet owner anytime. No it's time to [start use it](/sdk/initialization#jwt)
