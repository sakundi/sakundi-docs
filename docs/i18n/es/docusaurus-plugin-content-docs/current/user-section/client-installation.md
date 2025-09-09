---
id: client-installation
title: Instalación del Wallet
sidebar_label: Instalación del Wallet
description: Instalación del Wallet
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---
## Requisitos de Hardware
Para ejecutar Zikuani, asegúrese de que su sistema cumpla al menos con los siguientes requisitos:

| **Componente** | **Especificación**           |
|----------------|-------------------------------|
| CPU            | 2 Núcleos + 2 Hilos por Núcleo |
| RAM            | 16 GB                          |

## Instalación

### Windows

1. Descargue el instalador:  
[Instalador de Windows](https://app.sakundi.io:9090/zikuani-0.8.1.exe)

2. Verifique el hash sha256:
    ```bash
    certutil -hashfile "C:\file\path\zikuani-0.8.1.exe" SHA256
    ```
    El resultado debe coincidir con:
    ```bash
    20feed43e22531a87e06cfbc35cbb69b346a251ed1c2c8127e260b29577f68f1  zikuani-0.8.1.exe
    ```
3. Ejecute el instalador si el hash coincide.

   Nota: El instalador de Windows incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el zkey necesario para generar pruebas ZK válidas, lo que lo hace un poco pesado.

4. Inicie el programa: 
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        "C:\Program Files\zk-firma-digital\zk-firma-digital.exe"
        ```
    * O bien, busque zk-firma-digital en el menú Inicio.

### Linux (Debian)

1. Descargue el instalador:
    ```bash
    wget https://app.sakundi.io:9090/zikuani_0.8.1_amd64.deb
    ```
2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani_0.8.1_amd64.deb
    ```
    El resultado debe coincidir con:
    ```bash
    b02232886d0d130ff19d82f2bc6e58471f412a30671cacd28663f1f25c3e9217  zikuani_0.8.1_amd64.deb
    ```
3. Instale el paquete Debian:
    ```bash
    sudo dpkg -i zikuani_0.8.1_amd64.deb
    ```
4. Inicie el programa:
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        /usr/share/zk-firma-digital/zk-firma-digital.bin
        ```
    * O bien, busque la aplicación en su lanzador de aplicaciones.
  
### MacOS

1. Descargue el instalador:  
[Instalador de MacOS](https://app.sakundi.io:9090/zikuani-0.8.1.pkg)

2. Verifique el hash sha256:
    ```bash
    sha256sum zikuani-0.8.1.pkg
    ```
    El resultado debe coincidir con:
    ```bash
    d35bf1dc5a176adcfb521a2ff6007a83a4908ae76a55c59b3ae279f41232962b  zikuani-0.8.1.pkg
    ```
3. Ejecute el instalador si el hash coincide.

   Nota: El instalador de MacOS incluye un par de dependencias de Javascript, Nodejs y Snarkjs. También incluye el zkey necesario para generar pruebas ZK válidas, lo que lo hace un poco pesado.

4. Inicie el programa: 
    * Inserte su tarjeta inteligente en un puerto USB.  
    * Ejecute: 
        ```bash
        "open /Applications/zk-firma-digital/Contents/MacOS/zk-firma-digital"
        ```
    * O bien, busque zk-firma-digital en el menú Finder.

## Compilación

### Linux

1. Clone el repositorio:
    ```bash
    git clone https://github.com/kuronosec/Zikuani
    cd Zikuani
    ```
2. Ejecute el script de compilación:
    ```bash
    ./builder/build_linux.sh
    ```

### Windows

1. Instale los prerrequisitos:
    * [Git for Windows](https://gitforwindows.org/)  
    * [Python 3.10+](https://www.python.org/downloads/)  
    * Instale PyInstaller:
        ```bash
        pip install pyinstaller
        ```
    * [Inno Setup](https://jrsoftware.org/)  
    * Configure su antivirus para excluir los directorios de compilación y release.

2. Clone el repositorio:
    ```bash
    git clone https://github.com/kuronosec/Zikuani.git
    cd Zikuani
    ```
3. Ejecute el script de compilación:
    ```bash
    ./builder/build_windows.sh
    ```
4. Ubique los archivos generados:
    * Ejecutable: directorio `build`.  
    * Instalador: directorio `release`.  

5. Solución de problemas:
    * **Antivirus o problemas de seguridad**: durante la compilación, su antivirus (incluido Windows Defender) puede marcar el `.exe` generado como amenaza. Esto es común con ejecutables autogenerados. Para resolverlo:
        1. Agregue exclusiones: configure su antivirus para excluir los directorios `build` y `release`.  
           * Para Windows Defender:  
             1. Abra **Seguridad de Windows**.  
             2. Vaya a **Protección contra virus y amenazas**.  
             3. Haga clic en **Administrar configuración** bajo **Configuración de protección contra virus y amenazas**.  
             4. Desactive temporalmente **Protección en tiempo real** (si es necesario).  
             5. Vaya a **Exclusiones** y haga clic en **Agregar o quitar exclusiones**.  
             6. Agregue las rutas de `build` y `release`.  
        2. Valide el ejecutable: después de agregar las exclusiones, vuelva a compilar y verifique que el `.exe` se ejecute correctamente.  
    * **Herramientas faltantes o errores de comandos**: si aparece `command not found`, puede deberse a herramientas faltantes o rutas mal configuradas.  
        1. Revise el script de compilación en busca de dependencias faltantes.  
        2. Consulte la documentación o la sección de issues del repositorio.  