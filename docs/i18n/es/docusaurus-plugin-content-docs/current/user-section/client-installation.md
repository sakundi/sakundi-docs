---
id: client-installation
title: Instalación del cliente local
sidebar_label: Instalación del cliente local
description: Instalación del cliente local
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---


## Instalación

### Windows

1. Descargue el instalador:  
[Instalador para Windows](https://app.sakundi.io:9090/zk-firma-digital-0.6.3.exe)

2. Verifique el hash sha256:
    ```bash
    certutil -hashfile "C:\file\path\zk-firma-digital-0.6.3.exe" SHA256
    ```
    El resultado debe coincidir con:
    ```bash
    c116a271668e9e430116cd335f7bb4128d1af4d387ad7593330850932281cf07  zk-firma-digital-0.6.3.exe
    ```
3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de Windows incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo cual lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
        ```
    * Alternativamente, busque ZK Firma Digital en el menú de inicio.

### Linux (Debian)

1. Descargue el instalador:
    ```bash
    wget https://app.sakundi.io:9090/zk-firma-digital_0.6.3_amd64.deb
    ```
2. Verifique el hash sha256:
    ```bash
    sha256sum zk-firma-digital_0.6.3_amd64.deb
    ```
    El resultado debe coincidir con:
    ```bash
    8c8f38ceae2d6b99c07396156c7ea3ccb915e705360ba3cd8bbbe408574622c4  zk-firma-digital_0.6.3_amd64.deb
    ```
3. Instale el paquete Debian:
    ```bash
    sudo dpkg -i zk-firma-digital_0.6.3_amd64.deb
    ```
4. Inicie el programa:
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        /usr/share/zk-firma-digital/zk-firma-digital.bin
        ```
    * Alternativamente, busque la aplicación en el lanzador de aplicaciones.

### macOS

1. Descargue el instalador:  
[Instalador para macOS](https://app.sakundi.io:9090/zk-firma-digital.pkg)

2. Verifique el hash sha256:
    ```bash
    sha256sum zk-firma-digital.pkg
    ```
    El resultado debe coincidir con:
    ```bash
    c671b84bcea6e6d4261947d2e612ead6db9f0b8ead99321333551172662d6a39  zk-firma-digital.pkg
    ```
3. Ejecute el instalador si el hash coincide.

    Nota: El instalador de macOS incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas ZK válidas, lo cual lo hace un poco pesado.

4. Inicie el programa:  
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        open /Applications/zk-firma-digital.app/Contents/MacOS/zk-firma-digital
        ```
    * Alternativamente, busque ZK Firma Digital en el menú Finder.
