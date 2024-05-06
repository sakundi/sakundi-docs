---
id: understanding-metrics-and-analytics
title: Understanding Metrics and Analytics
sidebar_label: Understanding Metrics and Analytics
description: Educate users on the metrics and analytics provided by Sakundi for monitoring validator node performance and security.
keywords: [sakundi, validator nodes, blockchain, monitoring, metrics, analytics]
hide_table_of_contents: true
custom_edit_url: null
---

---

## Understanding Metrics and Analytics

Once you've created a node in Sakundi, you gain access to a wealth of metrics and analytics to monitor the performance and security of your validator node. Here's how to interpret and leverage these metrics effectively:

## Node Overview:

After creating a node, it will be displayed in the "Home" section of your dashboard, featuring the information you entered during node creation, such as Node Name, IP or DNS, Port, Node Description, and Creation Time. The Creation Time represents the duration since the node was created, measured in minutes.

## Viewing Dashboards:

* Clicking the "View Dashboards" button for the created node takes you to the Sakundi_Node page. Here, the "Staking Status" dashboard is displayed by default, providing insights into your validator's staking status.

## Staking Status Dashboard

The "Staking Status" dashboard includes the following:

1) Validator Status: Provides an overview of your validator's status, including its uptime, attestations, and proposed blocks.

2) Validator Balance (ETH) with Balance Staking (ETH): Displays your validator's balance in Ethereum (ETH) along with the amount staked.

3) Validator Balance (USD) with Balance Staking (ETH): Shows your validator's balance in US dollars (USD) alongside the amount staked.


* The Sakundi_Node page offers a "Select Your Dashboard" dropdown list. This dropdown allows you to choose from multiple dashboards to view different sets of metrics and analytics. By default, the "Staking Status" dashboard is selected, but you can switch to one of the following dashboards for more detailed analysis:

## Eclipse Attacks Dashboard:

The "Eclipse Attacks" dashboard in Sakundi provides advanced monitoring and detection capabilities to safeguard your validator node against potential eclipse attacks. Understanding and effectively utilizing this feature is crucial for maintaining the security and integrity of your validator node within the blockchain network. Here's a detailed overview:

## What are Eclipse Attacks?

An eclipse attack is a malicious attempt to isolate a node within a blockchain network by surrounding it with adversarial nodes controlled by an attacker. This isolation can disrupt the node's communication with the rest of the network, allowing the attacker to manipulate transactions, deny service, or execute other malicious activities.

## How Does Sakundi Protect Against Eclipse Attacks?

Sakundi continuously monitors your validator node for signs of potential eclipse attacks, utilizing sophisticated algorithms and detection mechanisms to identify suspicious network behavior. By analyzing network traffic patterns and node connectivity, Sakundi can detect and alert you to the presence of eclipse attacks in real-time, enabling you to take immediate action to mitigate the threat.

## Key Features of Eclipse Attack Monitoring:

* Network Connectivity Analysis: Sakundi analyzes the connectivity of your validator node with other nodes in the network, identifying any irregularities or anomalies that may indicate a potential eclipse attack.

* Peer Reputation Monitoring: Sakundi monitors the reputation of peers connected to your validator node, flagging any peers exhibiting suspicious behavior or attempting to isolate your node from the rest of the network.

* Real-time Alerts: In the event of a detected eclipse attack or suspicious network activity, Sakundi sends real-time alerts to notify you of the threat 

By leveraging the advanced monitoring and detection capabilities of the "Eclipse Attacks" feature in Sakundi, you can enhance the security posture of your validator node and protect it against potential threats posed by malicious actors.


## General Network Status Dashboard:

The "General Network Status" dashboard in Sakundi provides a comprehensive overview of key metrics and indicators related to the health and performance of the blockchain network. Understanding these metrics is essential for monitoring the network's stability and functionality. Here's a breakdown of the five metrics included in this dashboard:

1) Slots:

* Current Slot: The current slot refers to the current block slot in the blockchain.
* Head Slot: The head slot represents the latest finalized block slot in the blockchain.

2) Network Liveness:

* Network liveness is a metric that measures the distance between the current finalized epoch and the expected finalized epoch based on the genesis time.

* A liveness of 100% indicates that the expected and current finalized epochs are the same, reflecting optimal network performance.

* The liveness metric decreases as the finalized epoch falls behind the expected epoch, reaching 0% when the finalized epoch is 25 epochs behind the expected epoch.

3) Epochs:

* Current Epoch: The current epoch represents the current period of time in the blockchain, typically defined by a certain number of blocks.

* Justified Epoch: The justified epoch is the epoch that has been deemed valid by the network's consensus mechanism, indicating agreement among validators.

* Finalized Epoch: The finalized epoch is the epoch that has been irreversibly confirmed by the network, signifying consensus and immutability.

4) Validator Counts:

* Active Validators: The count of validators actively participating in the network's consensus mechanism.

* Slashed Validators: The count of validators that have been penalized for malicious behavior or protocol violations.

* Exited Validators: The count of validators that have voluntarily exited the network.

5) Avg. Balance:

* The average validator balance across the network represents the mean balance of all validators participating in the network's consensus mechanism.

Understanding these metrics within the "General Network Status" dashboard allows you to monitor the overall health and performance of the blockchain network. By tracking these metrics over time, users can identify trends, anomalies, and potential issues, enabling proactive measures to maintain network stability and integrity.


## Node Security Status Dashboard:

The "Node Security Status" dashboard in Sakundi provides valuable insights into the security posture of your validator node by monitoring key metrics related to libp2p peer connections and overall network security. Understanding and effectively utilizing this dashboard is essential for ensuring the security and integrity of your validator node within the blockchain network. Here's a detailed overview of the metrics displayed:

1) Libp2p Peers Average Scores:

* This metric tracks the overall libp2p scores of connected peers, categorized by client string. Each connected libp2p peer is assigned a score representing its reliability and trustworthiness.

* The dashboard displays the average scores of libp2p peers grouped by client string, including commonly used client strings such as caplin, lighthouse, lodestar, nimbus, prysm, teku, and unknown. Here are the client strings and their corresponding values:

1) caplin: Represents peers connected using the Caplin client.
2) lighthouse: Represents peers connected using the Lighthouse client.
3) lodestar: Represents peers connected using the Lodestar client.
4) nimbus: Represents peers connected using the Nimbus client.
5) prysm: Represents peers connected using the Prysm client.
6) teku: Represents peers connected using the Teku client.
7) unknown: Represents peers connected using an unknown or unrecognized client.

* Higher average scores indicate a higher level of trustworthiness and reliability among connected peers, while lower scores may indicate potential security risks or suspicious behavior.

2) Libp2p Count:

* The Libp2p Count metric tracks the total number of connected libp2p peers, categorized by client string. This metric provides insights into the distribution of libp2p peers by client type.

* The dashboard displays the count of connected libp2p peers for each client string, including common client strings such as LIGHTHOUSE, PRYSM, TEKU, NIMBUS, LODESTAR, UNKNOWN, and CAPLIN.

* Monitoring the distribution of libp2p peers by client string helps identify any anomalies or discrepancies in peer connectivity, which may indicate potential security threats or attacks.

3) Peers:

* The Peers metric represents the total number of peers to which the beacon chain is connected. This metric provides an indication of the network's connectivity and the node's participation in the broader blockchain network.

* A higher number of connected peers indicates robust network connectivity and enhances the security and resilience of the validator node.

* Monitoring changes in the number of connected peers over time can help identify potential network disruptions or security incidents that may require further investigation.


## Key Features of Node Security Status:

1) Peer Reputation Analysis: Sakundi analyzes the P2P scores of connected libp2p peers to assess their reputation and reliability. Peers with higher scores are considered more trustworthy, while peers with lower scores may pose a higher risk of malicious behavior or network attacks.

2) Client String Identification: By categorizing peers based on their client string, Sakundi provides visibility into the distribution of client implementations within the network. This allows you to identify potential vulnerabilities associated with specific client implementations and take proactive measures to mitigate risks.

3) Real-time Monitoring: The Node Security Status dashboard provides real-time monitoring of peer-to-peer connections, enabling you to detect and respond to security threats promptly. Any anomalies or suspicious behavior detected within the network are highlighted, allowing you to take immediate action to protect your validator node.

By leveraging the insights provided by the "Node Security Status" dashboard in Sakundi, you can proactively monitor and protect your validator node against potential security threats and attacks.