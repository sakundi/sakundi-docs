---
id: how-to-create-node
title: Cómo Crear un Nodo
sidebar_label: Cómo Crear un Nodo
description: Create Node Process
keywords: [sakundi, validator nodes, blockchain, monitoring, create node]
hide_table_of_contents: true
custom_edit_url: null
---

---

## Creando un nodo

Para comenzar a monitorear tus nodos validadores en Sakundi, necesitas crear un nodo. Sigue los pasos a continuación para crear un nuevo nodo en Sakundi:

## Paso 1: Acceso al Cuadro de Diálogo para Crear un Nodo

1) Inicia sesión en tu cuenta de Sakundi.

2) Navega al panel de control y localiza la sección "Monitor".

3) Haz clic en la opción "Create Node" para iniciar el proceso de creación del nodo.

## Paso 2: Completar los Detalles del Nodo

Se te presentará un cuadro de diálogo que contiene seis campos que deben completarse para crear un nuevo nodo. Aquí tienes una descripción de cada campo:

<div className="sakundiCreateNodeDialog CreateNodeDialog"></div>

1) Node Type:
Selecciona el tipo de nodo desde la lista desplegable. Puedes elegir entre "Prysm" o "Lighthouse" según el tipo de nodo validador que estás configurando. Actualmente solo admitimos estos clientes.

2) Node Name:
Ingresa un nombre descriptivo para tu nodo. Este nombre te ayudará a identificar fácilmente el nodo dentro de Sakundi.

3) IP or DNS:
Proporciona la dirección IP o el nombre de dominio del punto final de monitoreo para tu nodo de beacon o validador. 
Este es el servicio que utilizamos para extraer datos para el análisis. Aquí tienes un ejemplo de cómo configurar tu nodo para exponer ese punto final:
[Remote Monitoring](https://lighthouse-book.sigmaprime.io/advanced_metrics.html).

4) Port:
Ingresa el número de puerto asociado con el punto final de monitoreo de tu nodo. Esta información es necesaria para establecer una conexión con tu nodo.

5) Validator ID:
Ingresa el ID del validador asociado con tu nodo. Este identificador ayuda a Sakundi a identificar y rastrear el rendimiento de tu validador. Este número lo recibes cuando registras tu validador en la blockchain de Ethereum.

6) Node Description:
Opcionalmente, puedes proporcionar una breve descripción de tu nodo. Esto puede incluir cualquier información adicional o notas que desees asociar con el nodo.

## Paso 3: Guardar y Confirmar

Una vez que hayas completado todos los campos requeridos, revisa la información para asegurar la precisión. Una vez satisfecho, haz clic en el botón "Create" para crear tu nodo en Sakundi.

Siguiendo estos 3 pasos, puedes crear fácilmente un nuevo nodo en Sakundi y comenzar a monitorear el rendimiento y la seguridad de tus nodos validadores.

<div className="sakundiDashboardSuccessfullyCreated SakundiDashboard"></div>
