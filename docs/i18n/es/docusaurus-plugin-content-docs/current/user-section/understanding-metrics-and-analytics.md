---
id: understanding-metrics-and-analytics
title: Comprensión de Métricas y Análisis
sidebar_label: Comprensión de Métricas y Análisis
description: Educate users on the metrics and analytics provided by Sakundi for monitoring validator node performance and security.
keywords: [sakundi, validator nodes, blockchain, monitoring, metrics, analytics]
hide_table_of_contents: true
custom_edit_url: null
---

---

## Comprensión de Métricas y Análisis

Una vez que has creado un nodo en Sakundi, obtienes acceso a una gran cantidad de métricas y análisis para monitorear el rendimiento y la seguridad de tu nodo validador. Así es como interpretar y aprovechar estas métricas de manera efectiva:

## Resumen del Nodo:

Después de crear un nodo, este se mostrará en la sección "Home" de tu dashboard, mostrando la información que ingresaste durante la creación del nodo, como el Nombre del Nodo, la IP o DNS, el Puerto, la Descripción del Nodo y la Hora de Creación. La Hora de Creación representa la duración desde que se creó el nodo, medida en minutos.

## Visualización de Paneles:

* Al hacer clic en el botón "View Dashboards" del nodo creado, te lleva a la página de Sakundi_Node. Aquí, el dashboard "Staking Status" se muestra de forma predeterminada, proporcionando información sobre el estado de staking de tu validador.

## Dashbboard de Estadi de Staking:

<div className="sakundiStakingStatusDashboard StakingStatusDashboard"></div>

El dashboard "Staking Status" incluye lo siguiente:

1) Validator Status: Proporciona un resumen del estado de tu validador, incluyendo su tiempo activo, validaciones y bloques propuestos.

2) Validator Balance (ETH) with Balance Staking (ETH): Muestra el saldo de tu validador en Ethereum (ETH) junto con la cantidad apostada.

3) Validator Balance (USD) with Balance Staking (ETH): Muestra el saldo de tu validador en dólares estadounidenses (USD) junto con la cantidad apostada.


* La página Sakundi_Node ofrece una lista desplegable "Select Your Dashboard". Esta lista desplegable te permite elegir entre varios paneles para ver diferentes conjuntos de métricas y análisis. Por defecto, se selecciona el dashboard "Staking Status", pero puedes cambiar a uno de los siguientes paneles para un análisis más detallado:

## Dashboard de Ataques Eclipse:

<div className="sakundiEclipseAttacksDashboard EclipseAttacksDashboard"></div>

El dashboard "Eclipse Attacks" en Sakundi proporciona capacidades avanzadas de monitoreo y detección para proteger tu nodo validador contra posibles ataques de eclipse. Comprender y utilizar eficazmente esta función es crucial para mantener la seguridad e integridad de tu nodo validador dentro de la red blockchain. Aquí tienes una descripción detallada:

## ¿Qué son los Ataques de Eclipse?

Un ataque de eclipse es un intento malicioso de aislar un nodo dentro de una red blockchain rodeándolo con nodos adversarios controlados por un atacante. Este aislamiento puede interrumpir la comunicación del nodo con el resto de la red, permitiendo al atacante manipular transacciones, denegar servicios u ejecutar otras actividades maliciosas.

## ¿Cómo Protege Sakundi contra los Ataques de Eclipse?

Sakundi monitorea continuamente tu nodo validador en busca de signos de posibles ataques de eclipse, utilizando algoritmos sofisticados y mecanismos de detección para identificar comportamientos de red sospechosos. Al analizar los patrones de tráfico de red y la conectividad de los nodos, Sakundi puede detectar y alertarte sobre la presencia de ataques de eclipse en tiempo real, permitiéndote tomar medidas inmediatas para mitigar la amenaza.

## Características Clave del Monitoreo de Ataques de Eclipse:

* Análisis de Conectividad de Red: Sakundi analiza la conectividad de tu nodo validador con otros nodos en la red, identificando cualquier irregularidad o anomalía que pueda indicar un posible ataque de eclipse.

* Monitoreo de la Reputación de los Pares: Sakundi monitorea la reputación de los pares conectados a tu nodo validador, señalando cualquier par que muestre un comportamiento sospechoso o intente aislar tu nodo del resto de la red.

* Alertas en Tiempo Real: En caso de un ataque de eclipse detectado o actividad de red sospechosa, Sakundi envía alertas en tiempo real para notificarte de la amenaza.

Al aprovechar las capacidades avanzadas de monitoreo y detección de la función "Ataques de Eclipse" en Sakundi, puedes mejorar la postura de seguridad de tu nodo validador y protegerlo contra posibles amenazas planteadas por actores maliciosos.


## Dashboard de Estado General de la Red::

<div className="sakundiGeneralNetworkStatusDashboard GeneralNetworkStatusDashboard"></div>

El dashboard "General Network Status" en Sakundi proporciona una visión general de las métricas e indicadores clave relacionados con la salud y el rendimiento de la red blockchain. Comprender estas métricas es esencial para monitorear la estabilidad y funcionalidad de la red. Aquí tienes un desglose de las cinco métricas incluidas en este panel:

1) Slots:

* Current Slot: El slot actual se refiere al slot de bloque actual en la blockchain.
* Head Slot: El head slot representa el último slot de bloque finalizado en la blockchain.

2) Network Liveness:

* Network liveness es una métrica que mide la distancia entre la época finalizada actual y la época finalizada esperada basada en el tiempo de génesis.

* Una vitalidad del 100% indica que las épocas finalizadas esperadas y actuales son las mismas, reflejando un rendimiento óptimo de la red.

* La métrica de vitalidad disminuye a medida que la época finalizada se retrasa respecto a la época esperada, alcanzando el 0% cuando la época finalizada está 25 épocas por detrás de la época esperada.

3) Epochs:

* Current Epoch: La época actual representa el período de tiempo actual en la blockchain, típicamente definido por un cierto número de bloques.

* Justified Epoch: La época justificada es la época que ha sido considerada válida por el mecanismo de consenso de la red, lo que indica un acuerdo entre los validadores.

* Finalized Epoch: La época finalizada es la época que ha sido confirmada de manera irreversible por la red, lo que significa consenso e inmutabilidad.

4) Validator Counts:

* Active Validators: El recuento de validadores que participan activamente en el mecanismo de consenso de la red.

* Slashed Validators: El número de validadores que han sido penalizados por comportamiento malicioso o violaciones del protocolo.

* Exited Validators: El número de validadores que han salido voluntariamente de la red.

5) Avg. Balance:

* El saldo promedio del validador en toda la red representa el saldo medio de todos los validadores que participan en el mecanismo de consenso de la red.

Comprender estas métricas del dashboard "General Network Status" te permite monitorear la salud general y el rendimiento de la red blockchain. Al seguir estas métricas a lo largo del tiempo, los usuarios pueden identificar tendencias, anomalías y posibles problemas, lo que les permite tomar medidas proactivas para mantener la estabilidad e integridad de la red.


## Dashboard de Estado de Seguridad del Nodo:

<div className="sakundiNodeSecurityStatusDashboard NodeSecurityStatusDashboard"></div>

El dashboard "Node Security Status" en Sakundi ofrece información valiosa sobre la postura de seguridad de tu nodo validador mediante la monitorización de métricas clave relacionadas con las conexiones de pares libp2p y la seguridad general de la red. Comprender y utilizar efectivamente este panel es esencial para garantizar la seguridad e integridad de tu nodo validador dentro de la red blockchain. Aquí tienes una descripción detallada de las métricas que se muestran:

1) Libp2p Peers Average Scores:

* Esta métrica realiza un seguimiento de las puntuaciones generales de libp2p de los pares conectados, categorizados por cadena de cliente. A cada par libp2p conectado se le asigna una puntuación que representa su confiabilidad y fiabilidad.

* El panel muestra los puntajes promedio de los pares libp2p agrupados por cadena de cliente, incluyendo cadenas de cliente comúnmente utilizadas como caplin, lighthouse, lodestar, nimbus, prysm, teku y unknown. Aquí están las cadenas de cliente y sus valores correspondientes:

1) caplin: Representa pares conectados utilizando el cliente Caplin.
2) lighthouse: Representa pares conectados utilizando el cliente Lighthouse.
3) lodestar: Representa pares conectados utilizando el cliente Lodestar.
4) nimbus: Representa pares conectados utilizando el cliente Nimbus.
5) prysm: Representa pares conectados utilizando el cliente Prysm.
6) teku: Representa pares conectados utilizando el cliente Teku.
7) unknown: Representa pares conectados utilizando un cliente desconocido o no reconocido.

* Puntajes promedio más altos indican un nivel más alto de confiabilidad y fiabilidad entre los pares conectados, mientras que puntajes más bajos pueden indicar riesgos de seguridad potenciales o comportamiento sospechoso.

2) Libp2p Count:

* La métrica de Conteo de Libp2p realiza un seguimiento del número total de pares libp2p conectados, categorizados por cadena de cliente. Esta métrica proporciona información sobre la distribución de pares libp2p por tipo de cliente.

* El panel muestra el conteo de pares libp2p conectados para cada cadena de cliente, incluyendo cadenas comunes como LIGHTHOUSE, PRYSM, TEKU, NIMBUS, LODESTAR, UNKNOWN y CAPLIN.

* Monitorear la distribución de pares libp2p por cadena de cliente ayuda a identificar cualquier anomalía o discrepancia en la conectividad de los pares, lo cual podría indicar posibles amenazas de seguridad o ataques.

3) Peers:

* La métrica de Peers representa el número total de pares a los que está conectada la cadena beacon. Esta métrica proporciona una indicación de la conectividad de la red y la participación del nodo en la red blockchain más amplia.

* Un mayor número de peers conectados indica una conectividad robusta de la red y mejora la seguridad y la resistencia del nodo validador.

* Monitorear los cambios en el número de peers conectados a lo largo del tiempo puede ayudar a identificar posibles interrupciones de red o incidentes de seguridad que puedan requerir una investigación más profunda.


## Características Clave del Estado de Seguridad del Nodo:

1) Análisis de Reputación de Pares: Sakundi analiza las puntuaciones P2P de los pares libp2p conectados para evaluar su reputación y confiabilidad. Los pares con puntajes más altos se consideran más confiables, mientras que los pares con puntajes más bajos pueden representar un mayor riesgo de comportamiento malicioso o ataques a la red.

2) Identificación de Cadena de Cliente: Al categorizar los pares según su cadena de cliente, Sakundi proporciona visibilidad sobre la distribución de implementaciones de clientes dentro de la red. Esto le permite identificar posibles vulnerabilidades asociadas con implementaciones de clientes específicos y tomar medidas proactivas para mitigar riesgos.

3) Monitoreo en Tiempo Real: El panel de Estado de Seguridad del Nodo proporciona monitoreo en tiempo real de las conexiones peer-to-peer, lo que le permite detectar y responder rápidamente a amenazas de seguridad. Cualquier anomalía o comportamiento sospechoso detectado dentro de la red se resalta, permitiéndole tomar acciones inmediatas para proteger su nodo validador.

Al aprovechar los conocimientos proporcionados por el panel "Estado de Seguridad del Nodo" en Sakundi, puede monitorear y proteger proactivamente su nodo validador contra posibles amenazas y ataques de seguridad.