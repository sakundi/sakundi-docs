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
[Windows Installer](https://app.sakundi.io:9090/zikuani-0.7.0.exe)

2. Verify the sha256 hash:
    ```bash
    certutil -hashfile "C:\file\path\zikuani-0.7.0.exe" SHA256
    ```
    The result should match:
    ```bash
    5763d7443fc28c63610cbec6c02b408004b19fd7bf0943537d74cb169728d8cf  zikuani-0.7.0.exe
    ```
3. Run the installer if the hash matches.

    Note: The Windows installer includes a couple of Javascript dependencies, Nodejs and Snarkjs. The installer also includes the zkey necessary for generating valid ZK proofs, which makes it a bit heavy.

4. Launch the program: 
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
        ```
    * Alternatively, search for zk-firma-digital in the Start menu.

### Linux (Debian)

1. Download the installer:
    ```bash
    wget https://app.sakundi.io:9090/zikuani_0.7.0_amd64.deb
    ```
2. Verify the sha256 hash:
    ```bash
    sha256sum zikuani_0.7.0_amd64.deb
    ```
    The result should match:
    ```bash
    dea667d8e89c283c9dc5ee2cd79ec4d81c02b2aacae8f0dd7235c781d32b95cc  zikuani_0.7.0_amd64.deb
    ```
3. Install the Debian package:
    ```bash
    sudo dpkg -i zikuani_0.7.0_amd64.deb
    ```
4. Launch the program:
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        /usr/share/zk-firma-digital/zk-firma-digital.bin
        ```
    * Alternatively, search for the app in your application launcher.
  
### MacOS

1. Download the installer:
[MacOs Installer](https://app.sakundi.io:9090/zikuani-0.7.0.pkg)

2. Verify the sha256 hash:
    ```bash
    sha256sum zikuani-0.7.0.pkg
    ```
    The result should match:
    ```bash
    c15b4b157648c300e49e0434c3a74a14622df0a1a69c08141a9a00ff6e7a1765  zikuani-0.7.0.pkg
    ```
3. Run the installer if the hash matches.

    Note: The MacOS installer includes a couple of Javascript dependencies, Nodejs and Snarkjs. The installer also includes the zkey necessary for generating valid ZK proofs, which makes it a bit heavy.

4. Launch the program: 
    * Insert your smart card into a USB port.
    * Run: 
        ```bash
        "open /Applications/zk-firma-digital/Contents/MacOS/zk-firma-digital"
        ```
    * Alternatively, search for zk-firma-digital in the Finder menu.
