---
sidebar_position: 3
title: TrueWallet Smart Account Overview - Features, Modules, and Source Code
description: Explore the features and functionality of TrueWallet's Smart Account, an integral component of the TrueWallet system based on ERC-4337. Discover its modular design, support for Account Abstraction, social recovery with guardians, and secure upgradability. Access the source code on GitHub.
keywords: [TrueWallet, Smart Account, ERC-4337, Account Abstraction, modular design, social recovery, upgradability, smart contract wallet, source code, GitHub]
sidebar_label: Smart Account
---

# Smart Account
Smart Account is an independent component of the TrueWallet system. It represents our wallet implementation based on ERC-4337. Smart Account can work with any Paymaster and Bundler service.

The source code can be found here https://github.com/TrueWallet/contracts.

The smart contracts documentation can be found here https://github.com/TrueWallet/contracts/blob/main/docs/src/SUMMARY.md.

## Features
* Support [ERC-4337: Account Abstraction](https://eips.ethereum.org/EIPS/eip-4337)
* Modular design
* Social Recovery with Guardians
* Upgradability: The smart contract wallet can be upgraded in a secure way to add new features or fix vulnerabilities in the future

## Available modules

### Security Control
A module that provides enhanced security controls for adding and removing modules and executing specific functions on a initialized wallet.

[Git Source](https://github.com/TrueWallet/contracts/blob/db2e75cb332931da5fdaa38bec9e4d367be1d851/src/modules/SecurityControlModule/SecurityControlModule.sol)

A full list of all methods can be found [here](https://github.com/TrueWallet/contracts/blob/main/docs/src/src/modules/SecurityControlModule/SecurityControlModule.sol/contract.SecurityControlModule.md)

### Social Recovery
Contract module that allows a group of guardians to collectively recover a wallet. This is intended for scenarios where the wallet owner is unable to access their wallet. The module adheres to the ISocialRecoveryModule interface and extends BaseModule for shared functionality.

[Git Source](https://github.com/TrueWallet/contracts/blob/db2e75cb332931da5fdaa38bec9e4d367be1d851/src/modules/SocialRecoveryModule/SocialRecoveryModule.sol)

A full list of all methods can be found [here](https://github.com/TrueWallet/contracts/tree/main/docs/src/src/modules/SocialRecoveryModule)
