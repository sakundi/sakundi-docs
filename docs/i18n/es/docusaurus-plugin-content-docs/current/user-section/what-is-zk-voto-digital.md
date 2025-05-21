---
id: what-is-zk-voto-digital
title: ¿Qué es ZK Voto Digital?
sidebar_label: ¿Qué es ZK Voto Digital?
description: Sakundi - Your partner on user privacy protection
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---
# ZK Voto Digital: Votación Anónima y Segura Usando el Blockchain

**ZK Voto Digital** es un proyecto que busca abordar el **problema de la privacidad de los datos personales** en la era digital. A menudo, la información personal compartida en línea puede ser robada por ciberdelincuentes o distribuida en la web. Para contrarrestar esto, se creó **Zikuani**, una tecnología que permite **probar la identidad de una persona sin necesidad de enviar o revelar sus datos sensibles**. Esto significa que una persona puede ser anónima, pero aún así demostrar quién es.

Este proyecto ha sido presentado en eventos como la Tiko Blockchain, considerada una de las conferencias de blockchain más grandes de Costa Rica, ante una audiencia de más de 300 personas. La demostración en vivo de **ZK Voto Digital**, uno de los casos de uso más interesantes y comunes de Zikuani, permite a los usuarios **votar de forma anónima**.

## ¿Qué se necesita para usar el sistema?

Para interactuar con esta tecnología, un residente o ciudadano de Costa Rica que desee participar en el sistema de votación o identidad de forma anónima necesita:

*   Una **computadora portátil (laptop)**. (Actualmente solo funciona en laptop, pero la idea es que en el futuro funcione en teléfonos móviles).
*   La **Firma Digital costarricense**. Este es un documento que permite firmar otros documentos con criptografía y se considera una identidad electrónica. (En el futuro, también se planea utilizar la nueva identificación electrónica que estará disponible en Costa Rica).

## ¿Cómo funciona ZK Voto Digital?

El funcionamiento básico se centra en el certificado digital contenido en la tarjeta de Firma Digital. El sistema utiliza los siguientes pasos:

1.  Una **aplicación de escritorio extrae el certificado digital** de la tarjeta.
2.  Se usan **circuitos Circom** para **transformar el certificado digital en pruebas de conocimiento cero (Zero Knowledge Proofs o ZK)**.
3.  Con estas pruebas ZK, **se valida la identidad del usuario sin enviar la información real de su identidad**. Solo se prueba la identidad usando ZK.
4.  Este proceso genera una **credencial verificable** que se utiliza para identificar al usuario de forma anónima.
5.  Con esta identidad anónima validada, el usuario puede interactuar con la blockchain.
6.  El sistema utiliza la **blockchain de Polygon** para enviar y recolectar los votos. Polygon sirve como un lugar seguro para que las personas interactúen con el sistema de votación.
7.  Dado que la identidad es anónima y no se envían datos sensibles, el usuario puede **votar de forma anónima**.
8.  Al mismo tiempo, **las personas pueden ver cómo se vota** (la transacción en la blockchain es visible) y los **resultados son completamente transparentes y fiables**.

## Pasos para usar la aplicación ZK Voto Digital

Para usar la aplicación ZK Voto Digital, el usuario debe seguir estos pasos:

1.  Ir a la URL: **voto.sakundi.io**.
2.  **Instalar la aplicación de escritorio** desde el enlace de descargas en la página de GitHub. Hay instrucciones disponibles para Linux, Mac OS y Windows.
3.  **Configurar la billetera MetaMask** para usar la **red de prueba (testnet) de Polygon llamada Amoy**. Esto implica configurar el explorador, la URL y otros ajustes necesarios para Amoy.
4.  Volver al sitio web de votación digital.
5.  Se le solicitará **vincular la billetera MetaMask** (la dirección de Amoy) con la página web que se usará para votar.
6.  En el sitio web de votación digital, se debe **identificar como ciudadano o residente costarricense**.
7.  La aplicación web indicará que se abra la aplicación de escritorio.
8.  En la aplicación de escritorio, **insertar la tarjeta de Firma Digital e ingresar el PIN**.
9.  La aplicación de escritorio extraerá el certificado, realizará el proceso ZK y generará una credencial verificable.
10. Después de completar el proceso en la aplicación de escritorio, el usuario regresará al sitio web de votación digital.
11. El usuario podrá usar su dirección de blockchain y verá una **pregunta de votación de demostración**.
12. **Seleccionar la opción preferida** y hacer clic en votar.
13. La billetera MetaMask se abrirá para **enviar la transacción**.
14. Después de un momento, aparecerá en el sitio web una confirmación de que el voto fue correcto.
15. Finalmente, se puede acceder al enlace "view results" para **ver los resultados finales de la votación**.
