---
sidebar_position: 5
---
# Operation builder interface
Operation builder is used to create user operation object;

## Methods
### buildOperation
method to build user operation object

params:

| Parameter | Type               | Required | Value |
|-----------|--------------------|----------|-------|
| operation | OperationParams | True | Operation object |
| paymaster | string             | False    | Paymaster address |

*OperationParams:*
* **sender**: string - sender address
* **callData**: string - transaction call data
* **initCode**: string - init code (used to deploy wallet contract, use '0x' if deployed)
* **nonce**: string - wallet nonce

returns \{Promise\<[UserOperationData](#useroperationdata)\>\}

```javascript
  import {init} from 'true-wallet-sdk';
  
  const wallet = await init({...});
  const operation = wallet.operationBuilder.buildOperation({
    sender: '0x1234567890123456789012345678901234567890',
    callData: '0x....',
    initCode: '0x',
    nonce: '12345'
  });
```

## Data interfaces

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
