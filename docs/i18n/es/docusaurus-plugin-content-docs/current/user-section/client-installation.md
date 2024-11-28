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

**En Windows:**

Por favor, siga estos pasos:

* Descargue el instalador haciendo clic en el siguiente enlace:

[Instalador de Windows](https://app.sakundi.io:9090/zk-firma-digital.exe)

* Verifique el hash sha256:
```bash
certutil -hashfile "C:\file\path\zk-firma-digital.exe" SHA256
```
Este debería ser igual a:
```bash
108afe1c5dc6648dc7c133cc424897ea69cb241e96b11d8726f6452c88d32940  zk-firma-digital.exe
```
* Si el hash es correcto, simplemente ejecute el instalador de zk-firma-digital.

El instalador para Windows incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el archivo zkey necesario para generar pruebas válidas de conocimiento cero, lo cual lo hace un poco pesado.

* Finalmente, para ejecutar el programa, introduzca su tarjeta inteligente en un puerto USB y ejecute el siguiente comando:

```bash
    "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
```
O simplemente busque ```Zk Firma Digital``` en la barra de búsqueda de aplicaciones.

**En Linux (Actualmente solo para Debian):**

Para instalar el software y generar pruebas utilizando su tarjeta de Firma Digital, por favor siga estos pasos:
* Descargue el instalador y el archivo zkey:
```bash
    wget https://app.sakundi.io:9090/zk-firma-digital_0.4_amd64.deb
    wget https://app.sakundi.io:9090/firma-verifier.zkey
```
* Verifique el hash sha256 de ambos archivos:
```bash
sha256sum zk-firma-digital_0.4_amd64.deb
sha256sum firma-verifier.zkey
```
Estos deberían ser iguales a:
```bash
13da8ca1539d71dc9dc57ee4b1ce7041a20c325a034d0c1ca2c4945545e7fba5  zk-firma-digital_0.4_amd64.deb
91ad03aa0e33430d29361ae450f01d7a4992e068a7d6dddf954886fc4205aa21  firma-verifier.zkey
```
* Si los hashes son correctos, instale el paquete Debian de zk-firma-digital:
```bash
    sudo dpkg -i zk-firma-digital_0.4_amd64.deb
```
* Luego, mueva el archivo firma-verifier.zkey al directorio requerido:
```bash
    sudo mv firma-verifier.zkey /usr/share/zk-firma-digital/zk-artifacts/
```
* Finalmente, para ejecutar el programa, introduzca su tarjeta inteligente en un puerto USB y ejecute el siguiente comando:

```bash
    /usr/share/zk-firma-digital/zk-firma-digital.bin
```