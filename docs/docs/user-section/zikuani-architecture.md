---
id: zikuani-architecture
title: Zikuani Architecture
sidebar_label: Zikuani Architecture
description: Zikuani Architecture
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

# 🧩 Zikuani Architecture:

## 1. Overview

This document outlines the architecture of **Zikuani**, a privacy-preserving identity verification system that extracts and validates information from the **mobile driver's identity (mDL)** using **zero-knowledge (ZK) proofs**, and verifies these proofs through **Soroban smart contracts** on the **Stellar blockchain**.

The objective is to enable secure and compliant identity verification where users can prove authenticity without disclosing personal information.

---

## 2. Components

| Layer | Component | Description |
|--------|------------|-------------|
| **Credential Source** |  mDL App (ISO/IEC 18013-5) | Provides verified identity data and certificates signed by government authorities. |
| **Extraction Module (Zikuani Bridge)** | Extracts mDL data via NFC or QR; validates government-issued signatures and certificates. |
| **ZK Prover Device / App** | Generates zero-knowledge proofs from hashed mDL data using Circom |
| **Zikuani Wallet** | Stores hashed credentials and ZK proofs; interacts with Soroban for verification. |
| **Soroban Smart Contract** | Verifies ZK proofs on Stellar’s WASM-based contract platform; marks verified users on-chain. |
| **Verifier Applications** | dApps that query verification status on Stellar. |

---

## 3. Data and Process Flow

### Step 1 – mDL Data Extraction
1. The user opens Zikuani Wallet.  
2. The app connects to the mDL via **Deep link, QR or NFC** (ISO/IEC 18013-5 interface).  
3. The mDL provides:  
   - Signed identity data (e.g., name, date of birth, identity number).  
   - X.509 certificate chain confirming government authority.

### Step 2 – Proof Generation (on Device)
1. Commitment and verification conditions (e.g., “over 18”, “identity valid”)

### Step 4 – On-Chain Verification (Soroban)
1. The wallet calls the Soroban contract:
   ```rust
   verify_identity(proof, public_inputs, verifier_pubkey)
   ```
2. The contract runs an embedded ZK verifier (Groth16).
3. If the proof is valid, the contract stores verification:
   ```rust
   VerifiedIdentities.put(address, true)
   ```

### Step 5 – Verification by Third Parties
Other Stellar-based applications or DAOs can query:
```rust
is_verified(user_address)
```
to confirm identity validity without accessing private details.
---

## 4. Trust and Security Model

| Layer | Trust Anchor | Description |
|--------|---------------|-------------|
| **mDL Issuer** | Digital certificate authority | Ensures authenticity of issued credentials. |
| **Zikuani Bridge** | Validates signatures locally | Prevents tampering or fake credentials. |
| **ZK Prover** | Local device | Witness data never leaves the user’s control. |
| **Soroban Contract** | On-chain, open-source verifier | Deterministic, auditable verification. |

---

## 6. Architecture Diagram

```text
 ┌───────────────────────────────┐
 │          mDL System           │
 │  ───────────────────────────  │
 │  Govt CA + Issuer certs + mDL │
 └───────────────┬───────────────┘
                 │ (NFC/QR 18013-5)
                 ▼
 ┌────────────────────────────────────────┐
 │        Zikuani Mobile Wallet           │
 │ Validate mDL → Hash Attributes → Store │
 └───────────────┬────────────────────────┘
                 │ Secure Transfer (BLE/API)
                 ▼
 ┌────────────────────────────────────────┐
 │     ZK Prover Device / Service         │
 │ Circom→ Generate Proof                 │
 └───────────────┬────────────────────────┘
                 │ proof, public_inputs
                 ▼
 ┌────────────────────────────────────────┐
 │   Soroban Smart Contract (Stellar)     │
 │ VerifyProof() → mark user as verified  │
 └───────────────┬────────────────────────┘
                 │
                 ▼
 ┌────────────────────────────────────────┐
 │  dApps / DAOs / Exchanges (Verifiers)  │
 │  Query is_verified(address) → boolean  │
 └────────────────────────────────────────┘
```

---

## 7. Implementation Stack

| Layer | Tool / Framework |
|--------|------------------|
| **Circuit Language** | Circom 2 |
| **Proof Backend** | snarkjs |
| **Hash Function** | Poseidon |
| **Mobile App** | Flutter / React Native + Rust bindings |
| **ZK Prover** | Rust or WASM binary for mobile / enclave execution |
| **Smart Contract** | Soroban (Rust, WASM) with embedded ZK verifier |
| **Data Storage** | Stellar ledger with Merkle root of verified identities |

---

## 8. Key Benefits

- **Privacy-preserving:** Only zero-knowledge proofs reach the blockchain.  
- **Compliant:** Tied to government-issued mDL certificates.  
- **Efficient:** Soroban’s WASM environment supports ZK verification with low gas cost.  
- **Interoperable:** dApps and DAOs on Stellar can natively check verification status.  
