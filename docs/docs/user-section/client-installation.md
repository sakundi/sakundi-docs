---
id: client-installation
title: Wallet Installation
sidebar_label: Wallet Installation
description: Wallet Installation
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

## Installation

### Windows

1. Download the installer:
[Windows Installer](https://app.sakundi.io:9090/zikuani-0.6.3.exe)

2. Verify the sha256 hash:
    ```bash
    certutil -hashfile "C:\file\path\zikuani-0.6.3.exe" SHA256
    ```
    The result should match:
    ```bash
    c116a271668e9e430116cd335f7bb4128d1af4d387ad7593330850932281cf07  zikuani-0.6.3.exe
    ```
3. Run the installer if the hash matches.

    Note: The Windows installer includes a couple of Javascript dependencies, Nodejs and Snarkjs. The installer also includes the zkey necessary for generating valid ZK proofs, which makes it a bit heavy.

4. Launch the program: 
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        "C:\Program Files\zikuani\zikuani.exe"
        ```
    * Alternatively, search for Zikuani in the Start menu.

### Linux (Debian)

1. Download the installer:
    ```bash
    wget https://app.sakundi.io:9090/zikuani_0.6.3_amd64.deb
    ```
2. Verify the sha256 hash:
    ```bash
    sha256sum zikuani_0.6.3_amd64.deb
    ```
    The result should match:
    ```bash
    8c8f38ceae2d6b99c07396156c7ea3ccb915e705360ba3cd8bbbe408574622c4  zikuani_0.6.3_amd64.deb
    ```
3. Install the Debian package:
    ```bash
    sudo dpkg -i zikuani_0.6.3_amd64.deb
    ```
4. Launch the program:
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        /usr/share/zikuani/zikuani.bin
        ```
    * Alternatively, search for the app in your application launcher.
  
### MacOS

1. Download the installer:
[MacOs Installer](https://app.sakundi.io:9090/zikuani.pkg)

2. Verify the sha256 hash:
    ```bash
    sha256sum zikuani.pkg
    ```
    The result should match:
    ```bash
    c671b84bcea6e6d4261947d2e612ead6db9f0b8ead99321333551172662d6a39  zikuani.pkg
    ```
3. Run the installer if the hash matches.

    Note: The MacOS installer includes a couple of Javascript dependencies, Nodejs and Snarkjs. The installer also includes the zkey necessary for generating valid ZK proofs, which makes it a bit heavy.

4. Launch the program: 
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        "open /Applications/zikuani.app/Contents/MacOS/zikuani"
        ```
    * Alternatively, search for Zikuani in the Finder menu.
