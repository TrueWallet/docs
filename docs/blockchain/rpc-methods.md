---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RPC Methods
Before starting you need to create an account in the TrueWallet [dashboard](https://dashboard.true-wallet.io). Create a project inside and copy the API Endpoint.

## eth_chainId
Parameters: None

<Tabs groupId="eth_chainId">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_chainId",
      "params": []
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x1"
    }
    ```
  </TabItem>
</Tabs>

## eth_syncing
Parameters: None

<Tabs groupId="eth_syncing">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_syncing",
      "params": []
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "false"
    }
    ```
  </TabItem>
</Tabs>

## eth_getBlockByNumber
Parameters
| Parameter | Required | Value |
|-|-|-|
| block parameter | True | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |
| show transaction details flag | True | If set to `true`, returns the full transaction objects. If `false` returns only the hashes of the transactions. |

<Tabs groupId="eth_getBlockByNumber">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBlockByNumber",
      "params": ["0x5BAD55", false],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
      {
         "id" : 1,
         "jsonrpc" : "2.0",
         "result" : {
            "difficulty" : "0xbfabcdbd93dda",
            "extraData" : "0x..",
            "gasLimit" : "0x79f39e",
            "gasUsed" : "0x79ccd3",
            "hash" : "0x..",
            "logsBloom" : "0x..",
            "miner" : "0x..",
            "mixHash" : "0x..",
            "nonce" : "0x4db7a1c01d8a8072",
            "number" : "0x5bad55",
            "parentHash" : "0x..",
            "receiptsRoot" : "0x..",
            "sha3Uncles" : "0x..",
            "size" : "0x41c7",
            "stateRoot" : "0x..",
            "timestamp" : "0x5b541449",
            "totalDifficulty" : "0x12ac11391a2f3872fcd",
            "transactions" : [
               "0x..",
               "0x..",
               "0x..",
               "0x..",
               "0x..",
               ...
               "0x..",
               "0x.."
            ],
            "transactionsRoot" : "0x..",
            "uncles" : [
               "0x.."
            ]
         }
      }
    ```
  </TabItem>
</Tabs>

## eth_getBlockByHash
Parameters
| Parameter | Required | Value |
|-|-|-|
| hash | True | A string representing the hash (32 bytes) of a block. |
| transaction details flag | True | If set to `true`, returns the full transaction objects, if `false` returns only the hashes of the transactions. |

<Tabs groupId="eth_getBlockByHash">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBlockByHash",
      "params": ["0x..", false],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "difficulty": "0xbfabcdbd93dda",
        "extraData": "0x..",
        "gasLimit": "0x79f39e",
        "gasUsed": "0x79ccd3",
        "hash": "0x..",
        "logsBloom": "0x..",
        "miner": "0x..",
        "mixHash": "0x..",
        "nonce": "0x4db7a1c01d8a8072",
        "number": "0x5bad55",
        "parentHash": "0x..",
        "receiptsRoot": "0x..",
        "sha3Uncles": "0x..",
        "size": "0x41c7",
        "stateRoot": "0x..",
        "timestamp": "0x5b541449",
        "totalDifficulty": "0x12ac11391a2f3872fcd",
        "transactions": [
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x..",
          "0x.."
        ],
        "transactionsRoot": "0x..",
        "uncles": [
          "0x.."
        ]
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_blockNumber
Parameters: None

<Tabs groupId="eth_blockNumber">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x65a8db"
    }
    ```
  </TabItem>
</Tabs>

## eth_gasPrice
Parameters: None

<Tabs groupId="eth_gasPrice">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_gasPrice",
      "params": [],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x6bcc886e7"
    }
    ```
  </TabItem>
</Tabs>

## eth_getBalance
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | True | A string representing the address (20 bytes) to check for balance. |
| block parameter | True | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getBalance">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBalance",
      "params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x7c2562030800"
    }
    ```
  </TabItem>
</Tabs>

## eth_sendRawTransaction
Parameters
| Parameter | Required | Value |
|-|-|-|
| transaction data | True | The signed transaction data. |

<Tabs groupId="eth_sendRawTransaction">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_sendRawTransaction",
      "params": ["0x.."],
      "id": 1
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

## eth_getTransactionByHash
Parameters
| Parameter | Required | Value |
|-|-|-|
| transaction hash | True | A string representing the hash (32 bytes) of a transaction. |

<Tabs groupId="eth_getTransactionByHash">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByHash",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
       "id" : 1,
       "jsonrpc" : "2.0",
       "result" : {
          "blockHash" : "0x..",
          "blockNumber" : "0x5bad55",
          "chainId" : "0x1",
          "from" : "0x..",
          "gas" : "0x1d45e",
          "gasPrice" : "0xfa56ea00",
          "hash" : "0x..",
          "input" : "0x..",
          "nonce" : "0x18",
          "r" : "0x..",
          "s" : "0x..",
          "to" : "0x..",
          "transactionIndex" : "0x11",
          "type" : "0x0",
          "v" : "0x25",
          "value" : "0x1c6bf526340000"
       }
    }
    ```
  </TabItem>
</Tabs>

## eth_getTransactionReceipt
Parameters
| Parameter | Required | Value |
|-|-|-|
| transaction hash | True | A string representing the hash (32 bytes) of a transaction. |

<Tabs groupId="eth_getTransactionReceipt">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getTransactionReceipt",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "blockHash": "0x..",
        "blockNumber": "0x5bad55",
        "contractAddress": null,
        "cumulativeGasUsed": "0xb90b0",
        "effectiveGasPrice":"0x746a528800",
        "from": "0x..",
        "gasUsed": "0x1383f",
        "logs": [
          {
            "address": "0x..",
            "blockHash": "0x..",
            "blockNumber": "0x5bad55",
            "data": "0x..",
            "logIndex": "0x6",
            "removed": false,
            "topics": [
              "0x.."
            ],
            "transactionHash": "0x..",
            "transactionIndex": "0x11"
          }
        ],
        "logsBloom": "0x..",
        "status": "0x1",
        "to": "0x..",
        "transactionHash": "0x..",
        "transactionIndex": "0x11",
        "type": "0x0"
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_getTransactionCount
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | True | A string representing the address (20 bytes). |
| block parameter | True | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getTransactionCount">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getTransactionCount",
      "params": ["0x..", "0x5bad55"],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x1a"
    }
    ```
  </TabItem>
</Tabs>

## eth_getBlockTransactionCountByHash
Parameters
| Parameter | Required | Value |
|-|-|-|
| block hash | True | A string representing the hash (32 bytes) of a block. |

<Tabs groupId="eth_getBlockTransactionCountByHash">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByHash",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x50"
    }
    ```
  </TabItem>
</Tabs>

## eth_getTransactionReceipt
Parameters
| Parameter | Required | Value |
|-|-|-|
| transaction hash | True | A string representing the hash (32 bytes) of a block. |

<Tabs groupId="eth_getTransactionReceipt">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getTransactionReceipt",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "blockHash": "0x..",
        "blockNumber": "0x5bad55",
        "contractAddress": null,
        "cumulativeGasUsed": "0xb90b0",
        "effectiveGasPrice":"0x746a528800",
        "from": "0x..",
        "gasUsed": "0x1383f",
        "logs": [
          {
            "address": "0x..",
            "blockHash": "0x..",
            "blockNumber": "0x5bad55",
            "data": "0x..",
            "logIndex": "0x6",
            "removed": false,
            "topics": [
              "0x.."
            ],
            "transactionHash": "0x..",
            "transactionIndex": "0x11"
          }
        ],
        "logsBloom": "0x..",
        "status": "0x1",
        "to": "0x..",
        "transactionHash": "0x..",
        "transactionIndex": "0x11",
        "type": "0x0"
      }
    }
    ```
  </TabItem>
</Tabs>

## eth_getTransactionCount
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | True | A string representing the address (20 bytes). |
| block parameter | True | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getTransactionCount">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getTransactionCount",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x1a"
    }
    ```
  </TabItem>
</Tabs>

## eth_getBlockTransactionCountByHash
Parameters
| Parameter | Required | Value |
|-|-|-|
| block hash | True | A string representing the hash (32 bytes) of a block. |

<Tabs groupId="eth_getBlockTransactionCountByHash">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByHash",
      "params": ["0x.."],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x50"
    }
    ```
  </TabItem>
</Tabs>

## eth_getBlockTransactionCountByNumber
Parameters
| Parameter | Required | Value |
|-|-|-|
| block number | True | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getBlockTransactionCountByNumber">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByNumber",
      "params": ["latest"],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0xa0"
    }
    ```
  </TabItem>
</Tabs>

## eth_getLogs
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | No | Contract address (20 bytes) or a list of addresses from which logs should originate. |
| fromBlock | No | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |
| toBlock | No | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |
| topics | No | Array of 32 bytes DATA topics. Topics are order-dependent. |
| blockhash | No | Restricts the logs returned to the single block referenced in the 32-byte hash `blockHash`. Using `blockHash` is equivalent to setting `fromBlock` and `toBlock` to the block number referenced in the `blockHash`. If `blockHash` is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed. |

<Tabs groupId="eth_getLogs">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getLogs",
      "params": {"blockHash": "0x..", "topics":["0x.."]},
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": [
        {
          "address": "0x..",
          "blockHash": "0x..",
          "blockNumber": "0x5c29fb",
          "data": "0x..",
          "logIndex": "0x1d",
          "removed": false,
          "topics": [
            "0x.."
          ],
          "transactionHash": "0x..",
          "transactionIndex": "0x1d"
        },
        {
          "address": "0x..",
          "blockHash": "0x..",
          "blockNumber": "0x5c29fb",
          "data": "0x..",
          "logIndex": "0x57",
          "removed": false,
          "topics": [
            "0x.."
          ],
          "transactionHash": "0x..",
          "transactionIndex": "0x54"
        }
      ]
    }
    ```
  </TabItem>
</Tabs>

## eth_getCode
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | Yes | A string representing the address (20 bytes) of the smart contract, from which the compiled byte code will be obtained. |
| block number | Yes | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getCode">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getCode",
      "params": ["0x..", "0x65a8db"],
      "id": 1
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

## eth_getStorageAt
Parameters
| Parameter | Required | Value |
|-|-|-|
| address | Yes | A string representing the address (20 bytes) of the storage. |
| storage position | Yes | A hexadecimal code of the position in the storage. |
| block parameter | Yes | A hexadecimal block number, or the string `latest`, `earliest` or `pending`. |

<Tabs groupId="eth_getStorageAt">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getStorageAt",
      "params": ["0x..", "0x..", "0x65a8db"],
      "id": 1
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

## eth_estimateGas
Parameters

Should be `TRANSACTION CALL OBJECT`
| Parameter | Required | Value |
|-|-|-|
| from | No | The address the transaction is sent from. |
| to | No | The address the transaction is directed to. |
| gas | No | Hexadecimal value of the gas provided for the transaction execution. `eth_estimateGas` consumes zero gas, but this parameter may be needed by some executions. |
| gasPrice | No | Hexadecimal value of the gas price used for each paid gas. |
| maxPriorityFeePerGas | No | Maximum fee, in Wei, the sender is willing to pay per gas above the base fee. |
| maxFeePerGas | No | Maximum total fee (base fee + priority fee), in Wei, the sender is willing to pay per gas. |
| value | No | Hexadecimal value of the value sent with this transaction. |
| data | No | Hash of the method signature and encoded parameters. |
| block number | Yes | A string representing a block number, or one of the string tags `latest`, `earliest`, or `pending`. |

<Tabs groupId="eth_estimateGas">
  <TabItem value="Request" label="Request">
    ```shell
    {
      "jsonrpc": "2.0",
      "method": "eth_getStorageAt",
      "params": [{"from": "0x..","to": "0x..","value": "0x9184e72a"}],
      "id": 1
    }
    ```
  </TabItem>
  <TabItem value="Response" label="Response">
    ```shell
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": "0x5cec"
    }
    ```
  </TabItem>
</Tabs>
