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
[Instalador para Windows](https://app.sakundi.io:9090/zikuani-0.6.3.exe)

2. Verifique el hash sha256:
    ```bash
    certutil -hashfile "C:\file\path\zikuani-0.6.3.exe" SHA256
    ```
    El resultado debe coincidir con:
    ```bash
    c116a271668e9e430116cd335f7bb4128d1af4d387ad7593330850932281cf07  zikuani-0.6.3.exe
    ```
3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de Windows incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo cual lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        "C:\Program Files\zikuani\zikuani.exe"
        ```
    * Alternativamente, busque Zikuani en el menú de inicio.

### Linux (Debian)

1. Descargue el instalador:
    ```bash
    wget https://app.sakundi.io:9090/zikuani_0.6.3_amd64.deb
    ```
2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani_0.6.3_amd64.deb
    ```
    El resultado debe coincidir con:
    ```bash
    8c8f38ceae2d6b99c07396156c7ea3ccb915e705360ba3cd8bbbe408574622c4  zikuani_0.6.3_amd64.deb
    ```
3. Instale el paquete Debian:
    ```bash
    sudo dpkg -i zikuani_0.6.3_amd64.deb
    ```
4. Inicie el programa:
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        /usr/share/zikuani/zikuani.bin
        ```
    * Alternativamente, busque la aplicación en el lanzador de aplicaciones.

### macOS

1. Descargue el instalador:  
[Instalador para macOS](https://app.sakundi.io:9090/zikuani.pkg)

2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani.pkg
    ```
    El resultado debe coincidir con:
    ```bash
    c671b84bcea6e6d4261947d2e612ead6db9f0b8ead99321333551172662d6a39  zikuani.pkg
    ```
3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de macOS incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo cual lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        open /Applications/zikuani.app/Contents/MacOS/zikuani
        ```
    * Alternativamente, busque Zikuani en el menú Finder.
