---
id: what-is-zk-voto-digital
title: ¿Qué es ZK Voto Digital?
sidebar_label: ¿Qué es ZK Voto Digital?
description: Sakundi - Your partner on user privacy protection
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---
# ZK Voto Digital: Votación Anónima y Segura en Costa Rica

**ZK Voto Digital** es un proyecto que busca abordar el **problema de la privacidad de los datos personales** en la era digital [1]. A menudo, la información personal compartida en línea puede ser robada por ciberdelincuentes o distribuida en la web [1]. Para contrarrestar esto, se creó **ZK Filma Digital**, una tecnología que permite **probar la identidad de una persona sin necesidad de enviar o revelar sus datos sensibles** [1]. Esto significa que una persona puede ser anónima, pero aún así demostrar quién es [1].

Este proyecto ha sido presentado en eventos como la Tiko Blockchain, considerada una de las conferencias de blockchain más grandes de Costa Rica, ante una audiencia de más de 300 personas [1]. La demostración en vivo de **ZK Voto Digital**, uno de los casos de uso más interesantes y comunes de ZK Filma Digital, permite a los usuarios **votar de forma anónima** [1].

## ¿Qué se necesita para usar el sistema?

Para interactuar con esta tecnología, un residente o ciudadano de Costa Rica que desee participar en el sistema de votación o identidad de forma anónima necesita [1]:

*   Una **computadora portátil (laptop)** [1]. (Actualmente solo funciona en laptop, pero la idea es que en el futuro funcione en teléfonos móviles) [1].
*   La **Firma Digital costarricense** [1]. Este es un documento que permite firmar otros documentos con criptografía y se considera una identidad electrónica [1]. (En el futuro, también se planea utilizar la nueva identificación electrónica que estará disponible en Costa Rica) [1].

## ¿Cómo funciona ZK Voto Digital?

El funcionamiento básico se centra en el certificado digital contenido en la tarjeta de Firma Digital [1]. El sistema utiliza los siguientes pasos [1]:

1.  Una **aplicación de escritorio extrae el certificado digital** de la tarjeta [1].
2.  Se usan **circuitos Circom** para **transformar el certificado digital en pruebas de conocimiento cero (Zero Knowledge Proofs o ZK)** [1].
3.  Con estas pruebas ZK, **se valida la identidad del usuario sin enviar la información real de su identidad** [1]. Solo se prueba la identidad usando ZK [1].
4.  Este proceso genera una **credencial verificable** que se utiliza para identificar al usuario de forma anónima [1].
5.  Con esta identidad anónima validada, el usuario puede interactuar con la blockchain [1].
6.  El sistema utiliza la **blockchain de Polygon** para enviar y recolectar los votos [1]. Polygon sirve como un lugar seguro para que las personas interactúen con el sistema de votación [1].
7.  Dado que la identidad es anónima y no se envían datos sensibles, el usuario puede **votar de forma anónima** [1].
8.  Al mismo tiempo, **las personas pueden ver cómo se vota** (la transacción en la blockchain es visible) y los **resultados son completamente transparentes y fiables** [1].

## Pasos para usar la aplicación ZK Voto Digital

Para usar la aplicación ZK Voto Digital, el usuario debe seguir estos pasos [1]:

1.  Ir a la URL: **voto.sakundi.io** [1].
2.  **Instalar la aplicación de escritorio** desde el enlace de descargas en la página de GitHub [1]. Hay instrucciones disponibles para Linux, Mac OS y Windows [1].
3.  **Configurar la billetera MetaMask** para usar la **red de prueba (testnet) de Polygon llamada Amoy** [1]. Esto implica configurar el explorador, la URL y otros ajustes necesarios para Amoy [1].
4.  Volver al sitio web de votación digital [1].
5.  Se le solicitará **vincular la billetera MetaMask** (la dirección de Amoy) con la página web que se usará para votar [1].
6.  En el sitio web de votación digital, se debe **identificar como ciudadano o residente costarricense** [1].
7.  La aplicación web indicará que se abra la aplicación de escritorio [1].
8.  En la aplicación de escritorio, **insertar la tarjeta de Firma Digital e ingresar el PIN** [1].
9.  La aplicación de escritorio extraerá el certificado, realizará el proceso ZK y generará una credencial verificable [1].
10. Después de completar el proceso en la aplicación de escritorio, el usuario regresará al sitio web de votación digital [1].
11. El usuario podrá usar su dirección de blockchain y verá una **pregunta de votación de demostración** [1].
12. **Seleccionar la opción preferida** y hacer clic en votar [1].
13. La billetera MetaMask se abrirá para **enviar la transacción** [1].
14. Después de un momento, aparecerá en el sitio web una confirmación de que el voto fue correcto [1].
15. Finalmente, se puede acceder al enlace "view results" para **ver los resultados finales de la votación** [1].