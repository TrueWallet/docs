---
sidebar_position: 4
---
# Errors
In case of a failure request, all endpoints return an error result object, with code and message.

Bundler errors start from `-32` and Entrypoint errors from `AA`.

## Bundler errors
| Code | Message                                                                                                                                                                                                                                                                                                             |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -32602 | invalid UserOperation struct/fields                                                                                                                                                                                                                                                                                 |
| -32500 | transaction rejected by entryPoint’s simulateValidation, during wallet creation or validation. The `message` field MUST be set to the FailedOp's `AAxx` error message from the EntryPoint                                                                                                                           |
| -32501 | transaction rejected by paymaster’s validatePaymasterUserOp. The `message` field SHOULD be set to the revert message from the paymaster. The `data` field MUST contain a `paymaster` value                                                                                                                          |
| -32502 | transaction rejected because of opcode validation                                                                                                                                                                                                                                                                   |
| -32503 | UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon). The `data` field SHOULD contain the `validUntil` and `validAfter` values. Or. The `data` field SHOULD contain a `paymaster` value, if this error was triggered by the paymaster |
| -32504 | transaction rejected because paymaster (or signature aggregator) is throttled/banned. The `data` field SHOULD contain a `paymaster` or `aggregator` value, depending on the failed entity |
| -32505 | transaction rejected because paymaster (or signature aggregator) stake or unstake-delay is too low. The `data` field SHOULD contain a `paymaster` or `aggregator` value, depending on the failed entity. Or. The `data` field SHOULD contain a `minimumStake` and `minimumUnstakeDelay` |
| -32506 | transaction rejected because wallet specified unsupported signature aggregator. The `data` field SHOULD contain an `aggregator` value |
| -32507 | transaction rejected because of wallet signature check failed (or paymaster signature, if the paymaster uses its data as signature) |

## Entrypoint errors
| Code | Message |
|------|---------|
| AA10 | sender already constructed |
| AA13 | initCode failed or OOG |
| AA14 | initCode must return sender |
| AA15 | initCode must create sender |
| AA20 | account not deployed |
| AA21 | didn't pay prefund |
| AA22 | expired or not due |
| AA23 | reverted: SOME REASON |
| AA23 | reverted (or OOG) |
| AA24 | signature error |
| AA25 | invalid account nonce |
| AA30 | paymaster not deployed |
| AA31 | paymaster deposit too low |
| AA32 | paymaster expired or not due |
| AA33 | reverted: SOME REASON |
| AA33 | reverted (or OOG) |
| AA34 | signature error |
| AA40 | over verificationGasLimit |
| AA41 | too little verificationGas |
| AA50 | postOp reverted: SOME REASON |
| AA50 | postOp revert |
| AA51 | prefund below actualGasCost |
| AA90 | invalid beneficiary |
| AA91 | failed send to beneficiary |
| AA92 | internal call only |
| AA93 | invalid paymasterAndData |
| AA94 | gas values overflow |
| AA95 | out of gas |
| AA96 | invalid aggregator |

*OOG means out of gas*
