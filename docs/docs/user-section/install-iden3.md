---
id: library-installation
title: Library Installation
sidebar_label: Library Installation
description: Library Installation
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

# Deploying Identity Contracts on BlockDAG testnet

Zikuani requires the iden3 and some of the ZK Passport libraries to manage the identity related operations. iden3 is a next-generation private access control based on self-sovereign identity, designed for decentralised and trust-minimised environments.
ZK Passport is a novel solution that turns a regular biometric passport into a flexible digital identity credential for Web3. Importantly, this is done without compromising the security of your sensitive data by using zero-knowledge proofs.

This guide explains how to install and deploy the [iden3-contracts](https://github.com/iden3/contracts) and the [zk-passport](https://github.com/rarimo/zk-passport) on a BlockDAG EVM-compatible network.

## List of Iden3 Smart Contracts deployed in BlockDag testnet

If you don't want to deploy the contracts yourself, just use the already available in BlockDag testnet,
at the following addresses:

|     Smart contract      |     Address                                |
|:-----------------------:|:------------------------------------------:|
|       **State**         | **0x769671b481BA59414733BA95fe8aD2731d6652E6** |
|    **Validator MTP**    | 0x3998e052431e7008687ACEd665795dB4d33B1a10 |
|    **Validator SIG**    | 0x1Cd67dE5790B7612BB5787fFaB319191fb90EDE7 |
|    **Validator V3**     | 0xD3622eC51837a46C7979A4742Db81A647cd4EC14 |
| **Universal Verifier**  | 0x1df35a82599809BEEa7f3c1Ce24e10d1F0a26914 |
| **Universal Verifier V2**  | 0x1df35a82599809BEEa7f3c1Ce24e10d1F0a26914 |
| **Identity Tree Store** | 0x5c9Ab5CFB628034987f8f083E3BC39dB09bb8DD1 |


## List of Rarimo's ZK Passport Smart Contracts deployed in BlockDag testnet

|     Smart contract      |     Address                                |
|:-----------------------:|:------------------------------------------:|
|       **PoseidonT3**        | 0xb8b9878dD82b60A5e682525484366188838B8181 |
|    **PoseidonUnit2L**    | 0x22bcd73CB4caAB3fd019061A08d66b1cCF0317A8 |
|    **PoseidonT4**    | 0x4DdA2CdaaCBaea59F23976bA08041094F2115B10 |
|    **PoseidonUnit3L**     | 0xea0c42239213C2f31FF09373133650F615E33cbF |
| **RegistrationSMT**  | 0x9C01fc3f623DD7290868a27aC97e0C2B20C7C475 |

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


## Install Rarimo's ZK Passport

First configure Hardhat in a similar way as done with iden3:

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

And then run:

```bash
npx hardhat migrate --network blockdag-testnet --verify
```
  
## 6. Troubleshooting

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

