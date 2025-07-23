---
id: library-installation
title: Library Installation
sidebar_label: Library Installation
description: Library Installation
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

# Deploying Iden3 Contracts on BlockDAG testnet

Zikuani requires the iden3 library to manage some of the identity related operations. iden3 is a next-generation private access control based on self-sovereign identity, designed for decentralised and trust-minimised environments.

This guide explains how to install and deploy the [iden3-contracts](https://github.com/iden3/contracts) on a BlockDAG EVM-compatible network.

## List of Iden3 Smart contracts deployed in BlockDag testnet

If you don't want to deploy the contracts yourself, just use the already available in BlockDag testnet,
at the following addresses:

|     Smart contract      |     Address                                |
|:-----------------------:|:------------------------------------------:|
|       **State***        | ***0x769671b481BA59414733BA95fe8aD2731d6652E6*** |
|    **Validator MTP**    | 0x3998e052431e7008687ACEd665795dB4d33B1a10 |
|    **Validator SIG**    | 0x1Cd67dE5790B7612BB5787fFaB319191fb90EDE7 |
|    **Validator V3**     | 0xD3622eC51837a46C7979A4742Db81A647cd4EC14 |
| **Universal Verifier**  | 0x1df35a82599809BEEa7f3c1Ce24e10d1F0a26914 |
| **Universal Verifier V2****  | 0x1df35a82599809BEEa7f3c1Ce24e10d1F0a26914 |
| **Identity Tree Store** | 0x5c9Ab5CFB628034987f8f083E3BC39dB09bb8DD1 |

## Prerequisites

- Node.js ≥ 18.x
- Yarn ≥ 1.22.x or npm
- A BlockDAG RPC endpoint (e.g. https://test-rpc.primordial.bdagscan.com/)
- A funded EVM address on BlockDAG testnet
- Git

## 1. Clone the Repository

```bash
git clone https://github.com/iden3/contracts.git iden3-contracts
cd iden3-contracts
```

## 2. Install Dependencies

```bash
yarn install
```

Or with npm:

```bash
npm install
```

## 3. Configure Hardhat for BlockDAG

Edit or create `hardhat.config.ts` or `hardhat.config.js`, for instance:

```ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [privateKey]
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [privateKey]
    },
    "blockdag-testnet": {
      chainId: 1043,
      url: "https://test-rpc.primordial.bdagscan.com/",
      accounts: [privateKey],
      gasPrice: 1_000_000_000, // 1 gwei in wei,
    },
  }
};

export default config;
```

## 4. Then run the deployment scripts:

1. Deploy create2AnchorAddress that we use for unified addresses
   ```shell
   npx hardhat run scripts/deploy/deployCreate2AddressAnchor.ts --network blockdag-testnet
   ```
2. Deploy libraries contracts
   ```shell
   npx hardhat run scripts/deploy/deployLibraries.ts --network blockdag-testnet
   ```
3. Deploy State contract
   ```shell
   npx hardhat run scripts/deploy/deployState.ts --network blockdag-testnet
   ```
4. Deploy Identity Tree Store contract
   ```
   npx hardhat run scripts/deploy/deployIdentityTreeStore.ts --network blockdag-testnet
   ```
5. Deploy Validators contracts
   ```
   npx hardhat run scripts/deploy/deployValidators.ts --network blockdag-testnet
   ```
6. Deploy Universal Verifier contract
   ```
   npx hardhat run scripts/deploy/deployUniversalVerifier.ts --network blockdag-testnet
   ```
7. Add validators to whitelisted validators in Universal Verifier
   ```
   npx hardhat run scripts/maintenance/addValidatorsToUniversalVerifier.ts --network blockdag-testnet

## 5. Troubleshooting

### Replacement Transaction Underpriced

You may need to set a higher `gasPrice`:

```ts
gasPrice: 1000000000 // or higher
```

## 7. Notes

- BlockDAG uses a custom EVM-compatible chain (Chain ID 1043).
- Most tooling works the same as Ethereum, but some verification features may be unsupported.

## 8. Resources

- [Iden3 Contracts GitHub](https://github.com/iden3/contracts)
- [Hardhat Docs](https://hardhat.org)

