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

This guide explains how to install and deploy the [iden3-contracts](https://github.com/iden3/contracts) on a BlockDAG EVM-compatible network.

## Prerequisites

- Node.js ≥ 18.x
- Yarn ≥ 1.22.x or npm
- Docker (optional, for local node)
- A BlockDAG RPC endpoint
- A funded EVM address on BlockDAG
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

Edit or create `hardhat.config.ts` or `hardhat.config.js`:

```ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      // This is just a hardhat testing address, do not reuse in productionq
      url: "http://127.0.0.1:8545",
      accounts: [privateKey]
    },
    amoy: {
      // This is just a hardhat testing address, do not reuse in productionq
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [privateKey]
    },
    "blockdag-testnet": {
      chainId: 1043,
      url: "http://65.21.121.242:18545",
      accounts: [privateKey],
      // ledgerAccounts: [`${process.env.LEDGER_ACCOUNT}`],
      gasPrice: 1_000_000_000, // 1 gwei in wei,
    },
  }
};

export default config;
```

## 4. Deploy Contracts

To deploy any module (e.g. Poseidon or CredentialIssuer):

```bash
npx hardhat run scripts/deploy/deployPoseidons.ts --network blockdag
npx hardhat run scripts/deploy/deployCredentialIssuer.ts --network blockdag
```

You can also deploy supporting libraries:

```bash
npx hardhat run scripts/deploy/deployLibraries.ts --network blockdag
```

## 5. Troubleshooting

### Replacement Transaction Underpriced

You may need to set a higher `gasPrice`:

```ts
gasPrice: 1000000000 // or higher
```

### Transaction Fee Cap

To increase Hardhat's fee cap:

```bash
HARDHAT_NETWORK_MAX_TRANSACTION_FEE=3.0 \
npx hardhat run scripts/deploy/deployCredentialIssuer.ts --network blockdag
```

### Nonce Too Low

Check pending nonce with:

```js
await provider.getTransactionCount(wallet.address, "pending");
```

## 6. Verify RPC Sync Status

Check sync progress:

```bash
curl -u user:pass -X POST http://<BLOCKDAG_RPC_HOST>:<PORT>/ \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"bdag_syncStatus","params":[],"id":1}'
```

Look for fields like `currentBlock`, `highestBlock`.

## 7. Notes

- BlockDAG uses a custom EVM-compatible chain (Chain ID 1043).
- Most tooling works the same as Ethereum, but some verification features may be unsupported.

## 8. Resources

- [Iden3 Contracts GitHub](https://github.com/iden3/contracts)
- [Hardhat Docs](https://hardhat.org)
- [Ethers.js Docs](https://docs.ethers.org)

