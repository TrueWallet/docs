---
sidebar_position: 1
---
# Overview
Bundlers oversee an alternate mempool containing user operations awaiting bundling into a unified transaction. Subsequently, bundlers assemble user operations from the alternate mempool, forwarding the bundle to the entry point contract for verification and execution through the invocation of the handleOps() function on the entry point contract.

## EntryPoint
TrueWallet Bundler supports specific EntryPoint addresses which can be viewed below.

The EntryPoint address is the same on all EVM networks.

| Address                                                                                                                | Commit                                                                                                           | Version |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------|
| [0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789](https://blockscan.com/address/0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789) | [abff2ac](https://github.com/eth-infinitism/account-abstraction/commit/abff2aca61a8f0934e533d0d352978055fddbd96) | v0.6    |
