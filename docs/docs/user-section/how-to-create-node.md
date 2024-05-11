---
id: how-to-create-node
title: How to Create Node
sidebar_label: How to Create Node
description: Create Node Process
keywords: [sakundi, validator nodes, blockchain, monitoring, create node]
hide_table_of_contents: true
custom_edit_url: null
---

---

## Creating a Node

To begin monitoring your validator nodes in Sakundi, you need to create a node. Follow the steps below to create a new node in Sakundi:

## Step 1: Accessing the Create Node Dialog

1) Log in to your Sakundi account.
2) Navigate to the dashboard and locate the "Monitor" section.
3) Click on the "Create Node" option to initiate the node creation process.

## Step 2: Completing the Node Details

You will be presented with a dialog containing six fields that need to be filled out to create a new node. Here's a description of each field:


<div className="sakundiCreateNodeDialog CreateNodeDialog"></div>

1) Node Type:
Select the type of node from the dropdown list. You can choose between "Prysm" or "Lighthouse" depending on the type of validator node you are setting up.

2) Node Name:
Enter a descriptive name for your node. This name will help you identify the node easily within Sakundi.

3) IP or DNS:
Provide the IP address or domain name of the monitoring endpoint for your beacon or validator node.
This is the service we use to extract data for analysis. Here you can find an example of how
to configure your node to be able to expose that endpoint:
[Remote Monitoring](https://lighthouse-book.sigmaprime.io/advanced_metrics.html).

4) Port:
Enter the port number associated with your validator node. This information is necessary for establishing a connection with your node.

5) Validator ID:
Input the validator ID associated with your node. This identifier helps Sakundi identify and track the performance of your validator.

6) Node Description:
Optionally, you can provide a brief description of your node. This can include any additional information or notes you want to associate with the node.

## Step 3: Saving and Confirming

Once you have filled out all the required fields, review the information to ensure accuracy. Once satisfied, click on the  "Create" button to create your node in Sakundi.

Following these 3 steps, you can easily create a new node in Sakundi and begin monitoring the performance and security of your validator nodes.

<div className="sakundiDashboardSuccessfullyCreated"></div>
