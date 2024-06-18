---
sidebar_position: 12
title: TrueWallet SDK Errors
sidebar_label: Errors
---

# SDK Errors
Errors in SDK contain string code.

## Error Handling
```typescript
import { TWConfigError, TWErrorCodes } from '@truewallet/sdk';

try {
  // some code
} catch (error) {
  // Option 1
  if (error instanceof TWConfigError) {
    handleConfigError(error);
  }
  
  // Option 2
  if (error.code === TWErrorCodes.CONFIG_ERROR) {
    handleConfigError(error);
  }
}
```

## Errors
### TWConfigError
Thrown if sdk init config is not correct

code: TWErrorCodes.CONFIG_ERROR

### TWUnsupportedModuleError
Thrown if installed or deleted module is not supported

code: TWErrorCodes.MODULE_NOT_SUPPORTED

### TWModuleNotInstalledError 
Thrown if you try to access not installed module

code: TWErrorCodes.MODULE_NOT_INSTALLED

### TWModuleAlreadyInstalledError
Thrown if you try to install already installed module

code: TWErrorCodes.MODULE_ALREADY_INSTALLED

### TWOwnerCallError
Thrown if you try to call owner method without owning wallet

code: TWErrorCodes.WALLET_NOT_OWNED

### TWWalletNotReadyError
Thrown if you try to call method which requires wallet smart contracts to be deployed on chain 

code: TWErrorCodes.WALLET_NOT_READY

### TWInvalidSignerTypeError
Thrown if you try to use invalid signer type

code: TWErrorCodes.INVALID_SIGNER_TYPE

### TWJwtSignerInvalidJwtError
Thrown for JWT signer if jwt token is invalid

code: TWErrorCodes.JWT_SIGNER_INVALID_JWT

### TWJwtSignerInvalidKeyError
Thrown for JWT signer bundler URL is invalid

code: TWErrorCodes.JWT_SIGNER_INVALID_KEY

### TWJwtSignerInitializedError
Thrown for JWT signer if it is already initialized and init method is called again

code: TWErrorCodes.JWT_SIGNER_INITIALIZED

### TWJwtSignerLimitError
Thrown for JWT signer if subscription limit is reached

code: TWErrorCodes.JWT_SIGNER_LIMIT

### TWJwtInitSignerError
Thrown for JWT signer if init method is called with invalid data

code: TWErrorCodes.JWT_INIT_SIGNER_ERROR

### TWCallException 
Thrown if some error occurred during smart contract call

code: TWErrorCodes.CALL_EXCEPTION

## Error Codes
```typescript
export enum TWErrorCodes {
  CALL_EXCEPTION = 'CALL_EXCEPTION',
  CONFIG_ERROR = 'CONFIG_ERROR',
  WALLET_NOT_OWNED = 'WALLET_NOT_OWNED',
  WALLET_NOT_READY = 'WALLET_NOT_READY',
  MODULE_ALREADY_INSTALLED = 'MODULE_ALREADY_INSTALLED',
  MODULE_NOT_INSTALLED = 'MODULE_NOT_INSTALLED',
  MODULE_NOT_SUPPORTED = 'MODULE_NOT_SUPPORTED',
  INVALID_SIGNER_TYPE = 'INVALID_SIGNER_TYPE',
  JWT_INIT_SIGNER_ERROR = 'JWT_INIT_SIGNER_ERROR',
  JWT_SIGNER_INVALID_JWT = 'JWT_SIGNER_INVALID_JWT',
  JWT_SIGNER_INVALID_KEY = 'JWT_SIGNER_INVALID_KEY',
  JWT_SIGNER_LIMIT = 'JWT_SIGNER_LIMIT',
  JWT_SIGNER_INITIALIZED = 'JWT_SIGNER_INITIALIZED',
}
```
