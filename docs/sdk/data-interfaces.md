---
sidebar_position: 6
title: TrueWallet SDK Data Interfaces - Exploring Data Interfaces
description: Dive into the TrueWallet SDK Data Interfaces, encompassing various interfaces for managing and accessing essential data within your applications. Explore the functionalities and capabilities offered by different data interfaces within the TrueWallet SDK.
keywords: [TrueWallet SDK, Data interfaces, SDK interfaces, data management, application development, interface functionalities]
sidebar_label: Data interfaces
---

# Data interfaces

### UserOperationData
* **sender**: string - sender address
* **nonce**: bigint | string - wallet nonce
* **initCode**: string - init code (used to deploy wallet contract, use '0x' if deployed)
* **callData**: string - transaction call data
* **callGasLimit**: number | string - gas limit for the transaction
* **verificationGasLimit**: number | string - gas limit for the verification
* **preVerificationGas**: number | string - gas limit for the pre-verification
* **maxFeePerGas**: number | string - max fee per gas
* **maxPriorityFeePerGas**: number | string - max priority fee per gas
* **paymasterAndData**: string - paymaster address
* **signature**: string - signature

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

### GasEstimation
* **callGasLimit**: number - Gas limit for the transaction
* **preVerificationGas**: number - Gas limit for the pre-verification
* **verificationGas**: number - Gas limit for the verification
* **verificationGasLimit?**: number - Gas limit for the verification

### TrueWalletModules
type TrueWalletModules = 'SecurityControlModule' | 'SocialRecoveryModule';

### SendErc20Params
* **amount**: number | string | bigint - Amount of tokens to send
* **to**: string - Receiver address
* **from?**: string - Sender address
* **contractAddress**: string - Address of the ERC-20 token contract

### ApproveErc20Params
* **spender**: string - Address of the account that is allowed to spend the tokens
* **amount**: number | string | bigint - Amount of tokens to approve in wei
* **contractAddress**: string - Address of the ERC-20 token contract

### ApproveErc721Params
* **to**: string - Address of the account that is allowed to spend the tokens
* **tokenId**: number | string - ID of the NFT
* **contractAddress**: string - Address of the ERC-721 NFT token contract

### ApproveAllErc721Params
* **operator**: string - Address to be approved for the given NFT
* **approved**: boolean - True if the operator is approved, false to revoke approval
* **contractAddress**: string - Address of the ERC-721 NFT token contract

### TransferErc721Params
* **from**: string - The current owner of the NFT
* **to**: string - The new owner
* **tokenId**: number | string - ID of the NFT
* **contractAddress**: string - Address of the ERC-721 NFT token contract

### SafeTransferErc721Params
* **from**: string - The current owner of the NFT
* **to**: string - The new owner
* **tokenId**: number | string - ID of the NFT
* **contractAddress**: string - Address of the ERC-721 NFT token contract
* **data?**: string - Additional data with no specified format
