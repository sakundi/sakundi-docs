---
id: client-installation
title: Local Client Installation
sidebar_label: Local Client Installation
description: Local Client Installation
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

## Installation

**On Windows:**

Please follow these steps:

* Download the installer by clicking the following link:

[Windows Installer](https://app.sakundi.io:9090/zk-firma-digital.exe)

* Verify the sha256 hash sum:
```bash
certutil -hashfile "C:\file\path\zk-firma-digital.exe" SHA256
```
This should be equal to:
```bash
108afe1c5dc6648dc7c133cc424897ea69cb241e96b11d8726f6452c88d32940  zk-firma-digital.exe
```
* If the hash sums is correct, then just run the zk-firma-digital installer.

The Windows installer includes a couple of Javascript dependencies, Nodejs and Snarkjs. The installer also
includes the zkey necessary for generating valid ZK proofs, which makes it a bit heavy.

* Finally, to run the program, introduce your smart card in a USB slot and execute the following command:

```bash
    "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
```
Or just look for ```Zk Firma Digital``` in the app search.

**On Linux (At moment only Debian):**

To install the software and be able to generate proofs from your Firma Digital card, please follow these steps:
* Download the installer and the zkey file:
```bash
    wget https://app.sakundi.io:9090/zk-firma-digital_0.4_amd64.deb
    wget https://app.sakundi.io:9090/firma-verifier.zkey
```
* Verify the sha256 hash sum for both files:
```bash
sha256sum zk-firma-digital_0.4_amd64.deb
sha256sum firma-verifier.zkey
```
This should be equal to:
```bash
13da8ca1539d71dc9dc57ee4b1ce7041a20c325a034d0c1ca2c4945545e7fba5  zk-firma-digital_0.4_amd64.deb
91ad03aa0e33430d29361ae450f01d7a4992e068a7d6dddf954886fc4205aa21  firma-verifier.zkey
```
* If the hash sums are correct, then install the zk-firma-digital Debian package:
```bash
    sudo dpkg -i zk-firma-digital_0.4_amd64.deb
```
* Then, move the firma-verifier.zkey to the required directory:
```bash
    sudo mv firma-verifier.zkey /usr/share/zk-firma-digital/zk-artifacts/
```
* Finally, to run the program, introduce your smart card in a USB slot and execute the following command:

```bash
    /usr/share/zk-firma-digital/zk-firma-digital.bin
```