---
id: client-installation
title: Instalación del Wallet
sidebar_label: Instalación del Wallet
description: Instalación del Wallet
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---
## Instalación

### Windows

1. Descargue el instalador:  
[Instalador para Windows](https://app.sakundi.io:9090/zikuani-0.7.0.exe)

2. Verifique el hash sha256:
    ```bash
    certutil -hashfile "C:\file\path\zikuani-0.7.0.exe" SHA256
    ```
    El resultado debe coincidir con:
    ```bash
    5763d7443fc28c63610cbec6c02b408004b19fd7bf0943537d74cb169728d8cf  zikuani-0.7.0.exe
    ```

3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de Windows incluye algunas dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo que lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute:  
        ```bash
        "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
        ```
    * Alternativamente, busque `zk-firma-digital` en el menú de inicio.

---

### Linux (Debian)

1. Descargue el instalador:
    ```bash
    wget https://app.sakundi.io:9090/zikuani_0.7.0_amd64.deb
    ```

2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani_0.7.0_amd64.deb
    ```
    El resultado debe coincidir con:
    ```bash
    dea667d8e89c283c9dc5ee2cd79ec4d81c02b2aacae8f0dd7235c781d32b95cc  zikuani_0.7.0_amd64.deb
    ```

3. Instale el paquete Debian:
    ```bash
    sudo dpkg -i zikuani_0.7.0_amd64.deb
    ```

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute:  
        ```bash
        /usr/share/zk-firma-digital/zk-firma-digital.bin
        ```
    * Alternativamente, busque la aplicación en el lanzador de aplicaciones.

---

### macOS

1. Descargue el instalador:  
[Instalador para macOS](https://app.sakundi.io:9090/zikuani-0.7.0.pkg)

2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani-0.7.0.pkg
    ```
    El resultado debe coincidir con:
    ```bash
    c15b4b157648c300e49e0434c3a74a14622df0a1a69c08141a9a00ff6e7a1765  zikuani-0.7.0.pkg
    ```

3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de macOS incluye algunas dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo que lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute:  
        ```bash
        open /Applications/zk-firma-digital/Contents/MacOS/zk-firma-digital
        ```
    * Alternativamente, busque `zk-firma-digital` en el menú de Finder.
