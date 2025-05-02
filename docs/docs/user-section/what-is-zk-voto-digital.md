---
id: what-is-zk-voto-digital
title: What is ZK Voto Digital?
sidebar_label: What is ZK Voto Digital?
description: Sakundi - Your partner on user privacy protection
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

# ZK Digital Vote: Anonymous and Secure Voting Using The Blockchain

**ZK Digital Vote** is a project that seeks to address the **problem of personal data privacy** in the digital age. Often, personal information shared online can be stolen by cybercriminals or distributed on the web. To counter this, **ZK Digital Signature** was created, a technology that allows **proving a person's identity without needing to send or reveal their sensitive data**. This means a person can be anonymous, but still demonstrate who they are.

This project has been presented at events like TikoBlockchain, considered one of the biggest blockchain conferences in Costa Rica, to an audience of over 300 people. The live demonstration of **ZK Digital Vote**, one of the most interesting and common use cases of ZK Digital Signature, allows users to **vote anonymously**.

## What is Needed to Use the System?

To interact with this technology, a resident or citizen of Costa Rica who wishes to participate in the voting or identity system anonymously needs:

*   A **laptop computer**. (Currently, it only works on laptops, but the idea is for it to work on mobile phones in the future).
*   The **Costa Rican Digital Signature**. This is basically like a document that allows you to sign other documents with cryptography and is considered an electronic identity. (In the future, it is also planned to use the new electronic identification that will be available in Costa Rica).

## How Does ZK Digital Vote Work?

The basic operation centers on the digital certificate contained within the Digital Signature card. The system uses the following steps:

1.  A **desktop application extracts the digital certificate** from the card.
2.  **Circom circuits** are used to **transform the digital certificate into zero knowledge proofs (ZK)**.
3.  With these ZK proofs, **the user's identity is validated without actually sending their real identity information**. Identity is just proven using ZK.
4.  This process generates a **verifiable credential** which is used to identify the user anonymously.
5.  With this validated anonymous identity, the user can interact with the blockchain.
6.  The system uses the **Polygon blockchain** to actually send and collect the votes. Polygon serves as a safe place where people can interact with this voting system.
7.  Since the identity is anonymous and no sensitive data is sent, the user can **vote anonymously**.
8.  At the same time, **people can see how the votes are cast** (the transaction on the blockchain is visible) and the **results are completely transparent and trustworthy**.

## Steps to Use the ZK Digital Vote Application

To use the ZK Digital Vote application, the user must follow these steps:

1.  Go to the URL: **voto.sakundi.io**.
2.  **Install the desktop application** from the downloads link on the GitHub page. Instructions are available for Linux, Mac OS, and Windows.
3.  **Configure the MetaMask wallet** to use the **Polygon testnet called Amoy**. This involves configuring the explorer, URL, and other necessary settings for Amoy.
4.  Return to the digital voting website.
5.  You will be requested to **link your MetaMask wallet** (the Amoy address) with the web page that will be used for voting.
6.  On the digital voting website, you will have to **identify yourself as a Costa Rican citizen or resident**.
7.  The web application will prompt you to open the desktop application.
8.  In the desktop application, **insert your Digital Signature card and enter your PIN**.
9.  The desktop application will extract the certificate, perform the ZK process, and generate a verifiable credential.
10. After completing the process in the desktop application, the user will return to the digital voting website.
11. The user will be able to use their blockchain address and will see a **demo voting question**.
12. **Select the preferred option** and click vote.
13. The MetaMask wallet will open to **send the transaction**.
14. After a moment, a confirmation will appear on the website that the vote was successful.
15. Finally, you can access the "view results" link to **see the final voting results**.
