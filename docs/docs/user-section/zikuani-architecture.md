---
id: zikuani-architecture
title: Zikuani Architecture
sidebar_label: Zikuani Architecture
description: Zikuani Architecture
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

# 🧩 Zikuani Architecture

## 1. Overview

**Zikuani** is a privacy-preserving identity layer that lets a person prove
properties about a government-issued credential — *"I am over 18"*, *"I am
a resident of country X"*, *"my address is not on a sanctions list"* — to a
smart contract, without that contract (or anyone watching the chain) ever
seeing the underlying document, name, ID number or other sensitive information.

Today, the credential is sourced one of two ways: a **biometric (ICAO 9303
e-passport) NFC chip**, read via Rarimo's zk-passport/RariMe app, or **ZK
Firma Digital**, a hosted issuer that wraps a government digital-signature
program in a zero-knowledge circuit. The **mobile driver's license (mDL,
ISO/IEC 18013-5)** is not yet a supported credential source — it is the
next item on the roadmap, intended to sit alongside the passport and
Firma Digital paths. A **zero-knowledge (ZK)
proof** (Groth16, over the BN254 curve) attests to the relevant claims, and
a **Soroban smart contract** on the **Stellar** network verifies that proof
on-chain and records the result.

---

## 2. Motivation: why ZK identity, and why now

### 2.1 The regulatory push — eIDAS 2.0 and the EU Digital Identity Wallet

The EU's revised **eIDAS 2.0 Regulation** (Regulation (EU) 2024/1183) requires
every Member State to issue a **European Digital Identity Wallet (EUDI
Wallet)** to citizens by **2026**, capable of *selective disclosure*: a
relying party should be able to verify a single attribute (age, residency,
qualification) without learning the rest of the credential. The
**Architecture and Reference Framework (ARF)** that implements eIDAS 2.0
explicitly lists **zero-knowledge proofs** (ARF Topic 38, "ZKP") as one of
the mechanisms wallets may use to achieve unlinkable, minimal-disclosure
presentations, alongside BBS+ selective-disclosure signatures.

This matters for Zikuani's design in two concrete ways:

- **Data minimization is a legal requirement, not just a privacy nicety.**
  GDPR Art. 5(1)(c) ("data minimisation") and the ARF's unlinkability goals
  mean a verifier-side system that stores raw identity attributes (faces,
  document scans, ID numbers) is a *bigger* compliance liability than one
  that only ever sees a boolean proof outcome. 
- **Credential portability matters more than any single chain.** eIDAS 2.0
  is issuer/wallet-agnostic by design (mDL/mdoc and W3C Verifiable
  Credentials are both accepted formats). Zikuani already treats the
  credential source as a pluggable input to the proving step — today that's
  a biometric passport chip (via Rarimo's zk-passport circuits) or a hosted
  Firma Digital issuer — rather than baking a single national scheme into
  the contract layer. The Soroban contracts only ever see a Groth16 proof
  and public signals, never the credential format, which is what makes
  adding mDL additive rather than a rewrite.


### 2.2 Standards Zikuani has to interoperate with

| Standard | Relevance |
|---|---|
| **ICAO Doc 9303** | e-passport NFC chip data model and signature scheme — what Zikuani's biometric-passport flow (via Rarimo's zk-passport) reads and proves over today. |
| **ISO/IEC 18013-5 / 18013-7** | mDL data model and NFC/QR/online presentation protocols — a planned credential source, not yet implemented. |
| **eIDAS 2.0 / ARF (EU 2024/1183)** | EU regulatory target; defines selective disclosure and ZKP as an accepted unlinkability mechanism. |
| **W3C Verifiable Credentials (VC) Data Model** | Format used by the `verifiable_credential` returned to third-party integrators (see "Using Zikuani as a provider"). |

---

## 3. Competitive landscape: how other systems solve this

Zikuani is one of several projects applying ZK proofs to government-issued
identity. The table below is not exhaustive, but covers the architectures
most relevant to the design choices made here. Zikuani would be the first
solution avalable for the Stellar network.

| Project | Chain(s) | Proof system | Credential source | Notes |
|---|---|---|---|---|
| **Polygon ID / Privado ID** | Polygon, Ethereum-compatible | Groth16 (iden3 circuits, BabyJubJub/Poseidon) | Self-issued or third-party VC issuers | Closest architectural cousin to Zikuani — iden3 stack, on-chain Merkle-tree-based identity state, off-chain VC issuance. |
| **Worldcoin / World ID** | World Chain (OP Stack L2), bridged to Ethereum | Groth16/PLONK hybrid (Semaphore-derived) | Biometric (iris) enrollment, not a government document | Strong Sybil-resistance, but biometric trust root is a materially different (and more controversial) privacy model than a government-issued credential. |
| **Self Protocol** (formerly OpenPassport) | Celo | Groth16, passport NFC chip signatures | ICAO 9303 e-passport chips | Same credential source Zikuani's live passport flow uses (both build on the same ICAO 9303 NFC-chip-signature pattern; Zikuani's passport path is built on Rarimo's zk-passport circuits rather than Self's own). |
| **zkPass** | Multi-chain (EVM) | TLS-notarization + ZK ("Transport-layer validation") | Any HTTPS-accessible account/document | Different trust model: proves *what a TLS session said*, not a signed government credential — broader coverage, weaker assurance level. |
| **Holonym / Human Passport** | Optimism, multi-chain | Groth16 | Mixed: biometric, government ID, social/Sybil signals | Aggregates multiple low-assurance signals rather than one high-assurance issuer signature. |
| **Zikuani** | **Stellar (Soroban)** | **Groth16, BN254, Poseidon** | Biometric passport (ICAO 9303, via Rarimo zk-passport) and ZK Firma Digital today; mDL (ISO 18013-5) planned | Only entry in this table targeting Stellar; relies on Soroban's native BN254 host functions (Protocol 25) instead of an EVM precompile or a generic SNARK-verifier framework. |

**Why this matters for Stellar:** almost every comparable
project lives on Ethereum or an EVM L2, where Groth16-over-BN254
verification is cheap because of the `ecAdd`/`ecMul`/`ecPairing`
precompiles (EIP-196/197). Stellar has no EVM precompiles, so the viability
of this whole approach on Stellar hinges on Soroban Protocol 25 exposing
**BN254 as native host functions** (`env.crypto().bn254()` —
`g1_add`, `g1_mul`, `pairing_check`) rather than requiring the pairing math
to run in WASM, where it would be far too expensive. This is the single
biggest "why Stellar, why now" fact in the system: the design was not
portable to Soroban before Protocol 25.

### 3.1 Why Stellar/Soroban over an EVM L2

- **Cost and finality**: Stellar's ~5s ledger close time and sub-cent fees
  make per-verification cost comparable to, or cheaper than, an EVM L2,
  without needing a separate L2 trust assumption (Stellar settles directly,
  no rollup/sequencer layer).
- **Native pairing support removes the biggest WASM cost.** Without host
  functions, a full Groth16 verifier compiled to WASM would need a
  from-scratch BN254 field/curve/pairing implementation — both expensive to
  run and a meaningfully larger audit surface than delegating to
  protocol-level, already-audited host crypto.

---

## 4. Components

| Layer | Component | Description |
|--------|------------|-------------|
| **Credential Source** | Biometric e-passport (ICAO 9303 NFC chip, via Rarimo zk-passport) or ZK Firma Digital issuer; mDL (ISO/IEC 18013-5) planned | Provides verified identity data and certificates signed by a government or government-delegated authority. |
| **Extraction Module (Zikuani Bridge)** | Reads the passport chip via NFC, or authenticates against the Firma Digital issuer; validates signatures and certificate chains locally. mDL NFC/QR/deep-link support is planned. |
| **ZK Prover** | Generates Groth16 proofs from hashed credential data (Circom circuits for the identity claim; a Sparse-Merkle-Tree non-membership circuit for OFAC screening). |
| **Zikuani Wallet / Web Client** | Orchestrates the OAuth-style login, holds the wallet address, requests both proofs, and submits them to Soroban. |
| **`zk_verifier` (Soroban)** | Stateless Groth16 verifier for the identity (Firma Digital) circuit — BN254 host functions only, no persistent state. |
| **`ofac_verifier` (Soroban)** | Stateless Groth16 verifier for the OFAC non-membership circuit. |
| **`identity_gate` (Soroban)** | Stateful contract: cross-contract-calls both verifiers, binds a verified result to a wallet address, prevents nullifier reuse across wallets. |
| **`zk_vote` (Soroban)** | Example consumer contract — anonymous, Sybil-resistant voting gated by the same identity proof and a per-campaign nullifier. |
| **Verifier Applications** | Any Stellar dApp or off-chain service that calls `is_verified(address)`. |

---

## 5. Smart contract architecture on Stellar

### 5.1 Contract management

Zikuani splits verification into **four small, single-purpose contracts**
rather than one monolith:

```
zk_verifier      — stateless: verifies Firma Digital Groth16 proofs
ofac_verifier    — stateless: verifies OFAC non-membership Groth16 proofs
identity_gate    — stateful:  orchestrates both, binds result to a wallet
zk_vote          — stateful:  example consumer, gated by zk_verifier
```

- **Cross-contract calls** `identity_gate`
  and `zk_vote` both depend on `zk_verifier`'s WASM via
  `soroban_sdk::contractimport!`, and call it as a typed client
  (`firma_verifier::Client::new(&env, &firma_verifier_id).verify_proof(...)`).
  The verifier contracts are deployed once and reused by every consumer —
  if the circuit's verifying key ever needs to change, only the verifier
  contract is redeployed and the consumer's stored `*VerifierId` address is
  updated.
- **Deployment** The deploy script (`scripts/deploy.sh`) deploys in the order
  `zk_verifier → ofac_verifier → identity_gate → zk_vote` because the
  consumer contracts import the verifiers' compiled WASM at *build* time
  (`contractimport!` resolves a real `.wasm` file path), not just their
  address at runtime — the verifiers must exist on disk before the
  consumers can even compile.
- **Admin-gated initialization** Each stateful contract has a one-time `initialize(admin, ...)` that sets the
  admin and dependent contract addresses; `AlreadyInitialized` guards against
  re-running it. Soroban contracts are immutable WASM once deployed — there
  is currently **no upgrade mechanism** (no proxy pattern, no
  `update_current_contract_wasm`). The mitigation in place is indirection:
  `identity_gate` stores the verifier *addresses*, not their logic, as
  instance state, so swapping in a corrected `zk_verifier` deployment only
  requires an admin call to repoint the address — there is no equivalent
  admin call yet to repoint `identity_gate` itself if it needs a logic fix,
  which is a real open gap.
- **Admin-updatable parameters are scoped narrowly.** Only the OFAC root
  (`set_ofac_root`) is admin-mutable post-init, specifically because
  sanctions lists change on a schedule the verifying key cannot — the
  circuit's hash of the SMT root is recomputed off-chain and only the root
  itself needs to move on-chain.

### 5.2 Storage model

Soroban gives contracts three storage tiers (temporary, instance,
persistent), each with different TTL/rent and cost characteristics. Zikuani
uses two of them:

| Tier | Used for | Why |
|---|---|---|
| **Instance storage** | `Admin`, `FirmaVerifierId`, `OfacVerifierId`, `OfacRoot`, `VoteParams`, `ProposalCount` | Small, singleton, config-like data that lives and expires with the contract instance itself — one TTL to manage, not one per entry. |
| **Persistent storage** | `Verified(Address)`, `FirmaNullifierOwner(BytesN<32>)`, `HasVoted(BytesN<32>)`, `Proposal(u32)` | Per-user / per-nullifier records that must outlive instance-TTL bump gaps. `zk_vote`'s `HasVoted` is explicitly persistent "so the anti-replay guarantee survives any instance TTL extension gaps" — if it were instance-scoped and the instance's TTL lapsed, a double-vote could otherwise become exploitable around the gap. |

### 5.3 Indexing and querying verification state

There is no separate indexing service in Zikuani today — verification state
is read in one of two ways, with different trade-offs:

1. **Direct contract read (`is_verified` / `HasVoted`).** A relying dApp
   simulates a `Vec` call to `identity_gate.is_verified(wallet)` via
   Soroban RPC (`simulateTransaction`, no ledger write, no fee). This is
   the simplest path and what `invokeSorobanVerifier.ts` does, but it is a
   point lookup — there's no way to ask "list everyone verified since
   block N" without enumerating known addresses.
2. **Event-based indexing (`#[contractevent]`).** `zk_vote` emits a `Voted
   { #[topic] voter, proposal_index }` event on every successful vote,
   which an off-chain indexer can pick up via Soroban RPC's `getEvents`
   (or Horizon's ingestion of Soroban events) to build a "who voted, when"
   feed without re-querying contract storage per address. **`identity_gate`
   does not currently emit an equivalent `Verified { wallet }` event** —
   verification results are only discoverable by direct lookup or by
   parsing the submitting transaction's `verify_identity` invocation from
   ledger history. For any dashboard or analytics use case (e.g. "how many
   wallets verified this week"), adding a topic-indexed event to
   `identity_gate` is the natural next step rather than scraping
   transactions.

---

## 6. Cryptographic design choices

| Decision | Choice | Rationale / alternatives considered |
|---|---|---|
| **Proof system** | Groth16 (zk-SNARK) | Constant-size proofs (~200 bytes) and the cheapest pairing-based verification, which matters when verification cost is the bottleneck (here: WASM/host-function calls, not gas in the EVM sense). Trade-off: requires a circuit-specific trusted setup (one per circuit — Firma Digital, OFAC, vote), unlike PLONK (universal setup) or STARKs (no trusted setup, but much larger proofs/verifier cost). Polygon ID and Anon Aadhaar make the same Groth16 choice for the same reason. |
| **Curve** | BN254 (alt-bn128) | Matches the curve Soroban Protocol 25 exposes as native host functions (`env.crypto().bn254()`), and is the same curve EVM's `ecPairing` precompile uses — proof byte layout is interoperable with EVM verifiers if a circuit is ever dual-deployed. |
| **Hash function** | Poseidon | ZK-circuit-friendly (far fewer constraints than SHA-256/Keccak inside a circuit) |
| **Set membership** | Sparse Merkle Tree (SMT), off-chain | OFAC non-membership is proven against an SMT root rather than iterating a list on-chain; only the 32-byte root is admin-updatable on-chain (`set_ofac_root`), keeping sanctions-list updates cheap and not requiring redeployment of the verifying key. |
| **Replay/Sybil resistance** | Per-context nullifiers | A single nullifier per (identity, context) — `vote_scope` domain-separates `zk_vote`'s nullifier from `identity_gate`'s — so the same credential can be reused across unrelated contexts without becoming globally linkable, but can't be reused *within* one context (no double-voting, no re-registering a second wallet for one identity). |

---

## 7. Architecture Diagram

```text
 ┌───────────────────────────────┐
 │     Credential Source         │
 │  Govt CA + mDL / Firma Digital│
 └───────────────┬───────────────┘
                 │ (NFC/QR 18013-5, or OAuth-style issuer flow)
                 ▼
 ┌────────────────────────────────────────┐
 │        Zikuani Wallet / Client         │
 │ Validate credential → request proofs   │
 └───────────────┬────────────────────────┘
                 │ Firma proof + OFAC proof
                 ▼
 ┌────────────────────────────────────────┐
 │     ZK Prover (Circom / Groth16)       │
 │ Firma Digital circuit + OFAC SMT circuit│
 └───────────────┬────────────────────────┘
                 │ proof, public_inputs
                 ▼
 ┌─────────────────────────────────────────────────────┐
 │            Soroban Contracts (Stellar)               │
 │  zk_verifier ◄──┐                                     │
 │  ofac_verifier ◄─┼── cross-contract calls ── identity_gate │
 │                  │        VerifiedIdentities, FirmaNullifierOwner │
 └───────────────┬──┴─────────────────────────────────────┘
                 │ is_verified(address) -> bool
                 ▼
 ┌────────────────────────────────────────┐
 │  dApps / DAOs / Exchanges (Verifiers)  │
 └────────────────────────────────────────┘
```

### C1 — Issuer · Holder · Verifier
![Zikuani C1](/img/zikuani-c1-hd.png)

### C2 — Technical Architecture
![Zikuani C2](/img/zikuani-c2-hd.png)

### C3 — Soroban Verifier Contract
![Zikuani C4L3](/img/zikuani-c3-hd.png)

---

## 8. Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| ZK proof system | Groth16 (zk-SNARK) | Constant-size proofs, cheapest pairing-based on-chain verification; per-circuit trusted setup |
| Elliptic curve | BN254 (alt-bn128) | Native Soroban host functions, `env.crypto().bn254()`, since Protocol 25 |
| Hash function | Poseidon | ZK-friendly; used for Firma Digital `pubkeyHash` and the OFAC SMT |
| Set membership | Sparse Merkle Tree (off-chain), Groth16 non-membership proof | Sanctions-list root admin-updatable independently of verifier deployments |
| Circuit language | Circom 2.x | Compiles to R1CS for Groth16; `snarkjs`/`ffjavascript` tooling for witness/proof generation |
| Smart contracts | Rust / Soroban SDK 25.3.0 | `wasm32v1-none` target — `contracts/{zk_verifier,ofac_verifier,identity_gate,zk_vote}/` |
| Contract composition | Cross-contract calls (`contractimport!`) | Verifier contracts deployed once, reused by stateful consumers |
| On-chain storage | Soroban instance + persistent storage | Config in instance storage; per-identity/nullifier records in persistent storage |
| Indexing | Soroban RPC `getEvents` (where emitted) + direct `simulateTransaction` reads | No dedicated indexer service today; `zk_vote` emits `Voted`, `identity_gate` does not yet emit an equivalent event |
| Blockchain | Stellar / Soroban | Protocol 25 ("X-Ray") — first protocol version exposing BN254 + Poseidon-friendly primitives as host functions |
| Client application | Node.js/Express, Android SDK | Web client (`src/`) and mobile identity wallet |
| Proof serialization | TypeScript/JavaScript | Groth16 JSON proof (`pi_a`/`pi_b`/`pi_c`) → Soroban `BytesN` byte layout (same convention as EVM precompiles) |
| Identity standards | ICAO Doc 9303 (e-passport); W3C VC Data Model; OAuth 2.0 / OIDC4VP-style flow; ISO/IEC 18013-5 (mDL, planned) | ICAO 9303 + OAuth/VC for the current credential sources; mDL is on the roadmap, not yet implemented |
| Passport credential tooling | Rarimo zk-passport / RariMe app | Third-party library Zikuani's biometric-passport flow is built on |

---

## 9. Key Benefits

- **Privacy-preserving:** only zero-knowledge proofs and a nullifier reach
  the blockchain — no raw identity attributes, ever.
- **Regulation-aligned:** the "prove a claim, store nothing" shape matches
  eIDAS 2.0's selective-disclosure/ZKP guidance and GDPR's data-minimization
  requirement, rather than retrofitting privacy onto a stored-PII system.
- **Efficient:** Soroban's native BN254 host functions make Groth16
  verification cheap on Stellar without requiring an EVM-style precompile.
- **Interoperable:** proof byte layout matches EVM precompile conventions;
  credential model targets the same standards (ICAO 9303 today, ISO 18013-5
  planned, W3C VC) used by the EUDI Wallet and comparable systems on other
  chains.
