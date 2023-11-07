---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Methods

## eth_sendUserOperation
`eth_sendUserOperation` submits a User Operation object to the User Operation pool of the client. The client MUST validate the UserOperation, and return a result accordingly.

<Tabs groupId="eth_sendUserOperation">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_sendUserOperation",
      "params": [
        {
          "sender": "0x..",
          "nonce": "0x0",
          "initCode": "0x",
          "callData": "0x..",
          "callGasLimit": "0x012da1",
          "verificationGasLimit": "0x013880",
          "preVerificationGas": "0x0AAE60",
          "maxFeePerGas": "0x05f5e80",
          "maxPriorityFeePerGas": "0",
          "paymasterAndData": "0x",
          "signature": "0x.."
        },
        "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"
      ]
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x.."
    }
    ```
  </TabItem>
</Tabs>

## eth_estimateUserOperationGas
`eth_estimateUserOperationGas` estimates the gas values for a UserOperation. Given UserOperation optionally without gas limits and gas prices, return the needed gas limits. The signature field is ignored by the wallet, so that the operation will not require user’s approval. Still, it might require putting a "semi-valid" signature (e.g. a signature in the right length).

<Tabs groupId="eth_estimateUserOperationGas">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_estimateUserOperationGas",
      "params": [
        {
          "sender": "0x..",
          "nonce": "0x0",
          "initCode": "0x",
          "callData": "0x..",
          "callGasLimit": "0x012da1",
          "verificationGasLimit": "0x013880",
          "preVerificationGas": "0x0AAE60",
          "maxFeePerGas": "0x05f5e80",
          "maxPriorityFeePerGas": "0",
          "paymasterAndData": "0x",
          "signature": "0x.."
        },
        "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"
      ]
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "PreVerificationGas": "0x..",
        "VerificationGas": "0x..",
        "CallGasLimit": "0x..",
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_getUserOperationByHash
`eth_getUserOperationByHash` returns a UserOperation based on a hash (userOpHash) returned by `eth_sendUserOperation`.

<Tabs groupId="eth_getUserOperationByHash">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getUserOperationByHash",
      "params": ["0x.."]
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "sender": "0x..",
        "nonce": "0x0",
        "initCode": "0x",
        "callData": "0x..",
        "callGasLimit": "0x012da1",
        "verificationGasLimit": "0x013880",
        "preVerificationGas": "0x0AAE60",
        "maxFeePerGas": "0x05f5e80",
        "maxPriorityFeePerGas": "0",
        "paymasterAndData": "0x",
        "signature": "0x.."
        "entryPoint": "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        "transactionHash": "0x..",
        "blockNumber": 18522432,
        "blockHash": "0x.."
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_getUserOperationReceipt
`eth_getUserOperationReceipt` returns a UserOperation receipt based on a hash (userOpHash) returned by `eth_sendUserOperation`.

<Tabs groupId="eth_getUserOperationReceipt">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_getUserOperationReceipt",
      "params": ["0x.."]
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "userOpHash": "0x..",
        "entryPoint": "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        "sender": "0x..",
        "nonce": 0,
        "success": "true",
        "paymaster": "0x",
        "actualGasCost": 100000000000000,
        "actualGasUsed": 1000000,
        "logs": [
          {
            "transactionIndex": 1,
            "blockNumber": 18522432,
            "transactionHash": "0x..",
            "address": "0x..",
            "topics": [
                "0x..",
                "0x..",
                "0x..",
                "0x.."
            ],
            "data": "0x..",
            "logIndex": 3,
            "blockHash": "0x.."
          }
        ],
        "receipt": {
          "to": "0x..",
          "from": "0x..",
          "contractAddress": null,
          "transactionIndex": 1,
          "gasUsed": {
            "_hex": "0x10c234",
            "_isBigNumber": true
          },
          "logsBloom": "0x..",
          "blockHash": "0x..",
          "transactionHash": "0x..",
          "logs": [
            {
                "transactionIndex": 1,
                "blockNumber": 18522432,
                "transactionHash": "0x..",
                "address": "0x..",
                "topics": [
                    "0x.."
                ],
                "data": "0x",
                "logIndex": 0,
                "blockHash": "0x.."
            },
            {
                "transactionIndex": 1,
                "blockNumber": 18522432,
                "transactionHash": "0x..",
                "address": "0x..",
                "topics": [
                    "0x..",
                    "0x..",
                    "0x..",
                    "0x.."
                ],
                "data": "0x",
                "logIndex": 1,
                "blockHash": "0x.."
            },
            {
                "transactionIndex": 1,
                "blockNumber": 18522432,
                "transactionHash": "0x..",
                "address": "0x..",
                "topics": [
                    "0x..",
                    "0x..",
                    "0x.."
                ],
                "data": "0x",
                "logIndex": 2,
                "blockHash": "0x.."
            },
            {
              "transactionIndex": 1,
              "blockNumber": 18522432,
              "transactionHash": "0x..",
              "address": "0x..",
              "topics": [
                  "0x..",
                  "0x..",
                  "0x..",
                  "0x.."
              ],
              "data": "0x..",
              "logIndex": 3,
              "blockHash": "0x.."
            }
          ],
          "blockNumber": 18522432,
          "confirmations": 1,
          "cumulativeGasUsed": {
            "_hex": "0x10c234",
            "_isBigNumber": true
          },
          "effectiveGasPrice": {
            "_hex": "0x05f5e100",
            "_isBigNumber": true
          },
          "status": 1,
          "type": 2,
          "byzantium": true
        }
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_supportedEntryPoints
`eth_supportedEntryPoints` returns an array of the entryPoint addresses supported by the client. The first element of the array SHOULD be the entryPoint addressed preferred by the client.

<Tabs groupId="eth_supportedEntryPoints">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_supportedEntryPoints",
      "params": []
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": [
        "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"
      ]
    }
    ```
  </TabItem>
</Tabs>
