---
id: what-is-zk-firma-digital
title: ¿Qué es ZK Firma Digital?
sidebar_label: ¿Qué es ZK Firma Digital?
description: Sakundi - Your partner on user privacy protection
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

ZK Firma Digital es un protocolo de conocimiento cero que permite a los titulares de una tarjeta de identidad digital firmada por el gobierno probar su identidad de una manera que preserva la privacidad. Proporciona herramientas para generar y verificar pruebas, autenticar usuarios y realizar verificaciones utilizando tecnologías Web2 o Web3. El servicio se ofrece inicialmente para Costa Rica.

El proyecto tiene como objetivo desarrollar una solución de infraestructura basada en pruebas de conocimiento cero para mejorar el sistema de identidad digital. Nos esforzamos por fortalecer la privacidad de los ciudadanos minimizando la recolección de datos, permitiendo que las personas accedan a una amplia gama de servicios valiosos sin divulgar información sensible.

## ¿Qué problemas resuelve este proyecto?

Cada día, datos sensibles de los usuarios se filtran a empresas privadas, delincuentes y otras organizaciones. Este hecho ocurre porque la tecnología que usamos a diario tiene una fuerte tendencia a recolectar información de las personas, información que muchas veces no tiene ningún propósito para el usuario. Estos datos recopilados suelen venderse a otras organizaciones o gobiernos, o generalmente se pierden en ciberataques.

A veces, los proveedores de servicios necesitan identificar a sus usuarios como personas reales, especialmente cuando las regulaciones lo exigen. Es necesario encontrar una forma en que el usuario pueda demostrar su identidad de una manera que no exponga información sensible, pero que sea completamente confiable y verificable por el proveedor de servicios. Esta confianza podría provenir, por ejemplo, de la identidad digital proporcionada por el gobierno.

## ¿Cómo resolvemos estos problemas?

Hemos utilizado una de las innovaciones más significativas en criptografía de los últimos años, llamada pruebas de conocimiento cero (ZKP, por sus siglas en inglés). Este tipo de criptografía permite que el usuario demuestre que posee cierta información sin revelar realmente los datos.

Por ejemplo, un usuario puede demostrar que conoce una clave privada sin enviarla a través de Internet. Otro ejemplo es que puede demostrar que posee una clave secreta que pertenece a un par de claves públicas y privadas sin compartir la clave secreta.

Las ZKP permiten al usuario crear una prueba matemática de que posee cierta información que puede ser validada por un tercero, llamado el verificador. En nuestro caso de uso, extraemos el certificado digital de la tarjeta de identidad localmente en el dispositivo del usuario y creamos una prueba anónima de dicho certificado. De esta manera, el usuario puede demostrar que tiene una identidad validada (firmada) por el gobierno sin enviar realmente el certificado ni la información sensible contenida en él. Por otro lado, dependiendo del caso de uso, el proveedor de servicios puede solicitar al usuario revelar información específica del certificado, algo que el usuario tiene que aceptar y confirmar.

