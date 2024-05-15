---
id: why-sakundi
title: Why do I need Sakundi's solutions?
sidebar_label: Why Sakundi 
description: Introducing users to the need of Sakundi for Validator Nodes.
keywords: [sakundi, validator nodes, blockchain, monitoring]
hide_table_of_contents: true
custom_edit_url: null
---

# Why do I need Sakundi's solutions?

Blockchain security is becoming increasingly relevant in today’s cyberspace as it extends
its influence in many industries. Sakundi focuses on protecting the different layers of the 
blockchain.

Initally we focus on the lowest level layer, the P2P network that allows the nodes to
communicate and share information. The P2P network layer may be vulnerable to several
families of attacks, such as Distributed Denial of Service (DDoS), eclipse attacks, 
or Sybil attacks. This layer is prone to threats inherited from traditional P2P networks,
and it must be analyzed and understood by collecting data and extracting insights from
the network behavior to reduce those risks. Validator, beacons and execution nodes in
Ethereum are the pieces of softwre most exposed to those risks. They constantly interact
with other peers using Internet forming the peer-to-peer network.

Even though blockchain technology can be highly secure and decentralized, it still offers
attack opportunities. For example, in blockchain networks, there are cases, such as the
ones mentioned in [8, 20, 26, 27], in which the dApps, average users, or the network itself
are exposed to risks due to particular vulnerabilities [4, 8, 20, 21, 24, 26, 40, 42, 43].
Therefore, understanding the risks associated with blockchain networks and effectively
developing security-focused solutions is essential to any blockchain. 

Peer-to-peer (P2P) networks are decentralized networks that include many nodes storing and distributing data
collectively, and each node operates as an individual peer. The communication is carried
out without a central authority; hence, all nodes obtain the same amount of power and are
responsible for the same activities. The P2P network is one of the fundamental components
of the blockchains that enable the creation and operation of cryptocurrencies [28].

In the blockchain, the P2P network enables nodes to exchange data, for instance,
transactions and blocks. In general, there is an economic incentive for participants
to behave honestly. Given their public and distributed nature, blockchain components
are especially exposed to attackers who can easily reach and interact with the
different layers. Such adversaries may use a malicious node, tool, or software to take
advantage of specific weaknesses in the P2P network layer and launch several attacks
on the blockchain, like the ones described in [20, 26, 43]. The security of the entire
blockchain relies on the reliability of its P2P network.

The Ethereum P2P protocol [36] was influenced by the kademlia Distributed Hash
Table (DHT) design. Although kademlia possesses valuable properties, it has several
limitations in terms of its security [4, 22]. There are several known attacks for such a
protocol, including the eclipse attacks [20, 43], where it is possible to perform manipulations
against the Ethereum P2P network participants, and deanonymization attacks,
as presented in [14]. Nevertheless, employing multiple detection and mitigation approaches [10, 11] can
significantly reduce or eliminate the severity of these risks.

We provide a monitoring solution for Ethereum nodes, focusing on cybersecurity issues.
Users who utilize Sakundi for Nodes will receive insights and alerts related to the status of their
clients. Anomalous incidents are detected so users can take action to avoid any service interruption.
In the following sections, we explain how users can employ our tool.

# References

1. Bengio, Y., Ducharme, R., Vincent, P., Jauvin, C.: A neural probabilistic language model. J.
Mach. Learn. Res. 3, 1137–1155. ACM (2003)
2. Bit2Me: https://academy.bit2me.com/en/que-es-un-ataque-sybil/
3. Buterin, V.: Ethereum: a next-generation smart contract and decentralized application platform
(2014). https://ethereum.org/en/whitepaper/
4. Chen, H., Pendleton, M., Njilla, L., Xu, S.: A survey on Ethereum systems security: vulner-
abilities, attacks, and defenses. ACM Comput. Surv., 53(3), 1–43, ACM (2021). https://doi.
org/10.1145/3391195
5. Chen, Z., et al.: Experience report: deep learning-based system log analysis for anomaly
detection. arXiv (2022). https://doi.org/10.48550/arXiv.2107.05908
6. C. Liu, et al.: Augmented LSTM framework to construct medical self-diagnosis android.
In: 2016 IEEE 16th International Conference on Data Mining (ICDM), pp. 251–260. IEEE
(2016). https://doi.org/10.1109/ICDM.2016.0036
7. CoinMarketCap: Today’s cryptocurrency prices by market cap (2023). https://coinmarketcap.
com/
8. Cortes-Goicoechea, M., Bautista-Gomez, L.: Discovering the Ethereum2 p2p network. In:
BCCA, pp. 81–88 (2021). https://doi.org/10.1109/BCCA53669.2021.9657041
9. Discv5-testground. https://github.com/ackintosh/discv5-testground. Accessed 15 Mar 2023
10. Du, M. Li, F. Zheng, G., Srikumar, V.: Deeplog: anomaly detection and diagnosis from system
logs through deep learning. In: ACM SIGSAC, ACM (2017)
11. Ede, T.V., et al.: DeepCASE: semi-supervised contextual analysis of security events. In: 2022
IEEE Symposium on Security and Privacy (SP), pp. 522–539. IEEE (2022)
12. Eisenbarth, J.P., et al.: Ethereum’s peer-to-peer network monitoring and sybil attack
prevention. J. Netw. Syst. Manage. 30, 65. Springer (2022)
13. Ethereum peer-to-peer (P2P) discovery protocol. https://github.com/ethereum/devp2
14. Gao, Y., Shi, J., Wang, X., Shi, R., Yin, Z., Yang, Y.: Practical deanonymization attack
in Ethereum based on P2P network analysis. In: ISPA/BDCloud/SocialCom/SustainCom,
pp. 1402–1409. IEEE (2021)
15. Go-ethereum. https://github.com/sakundi/go-ethereum. Accessed 15 Mar 2023
16. Paszke, A., et al.: PyTorch: an imperative style, high-performance deep learning library. In:
Advances in Neural Information Processing Systems. arXiv (2019)
17. Go-libp2p-pubsub. https://github.com/libp2p/go-libp2p-pubsub/blob/master/pb/trace.pb.go.
Accessed 15 Mar 2023
18. Gossipsub-hardening.
https://github.com/libp2p/gossipsub-hardening/tree/master/test.
Accessed 15 Mar 2023
19. Gossipsub-hardening. https://github.com/sakundi/gossipsub-hardening. Accessed 15 Mar
2023
20. Heilman, E., Kendler, A., Zohar, A., Goldberg, S.: Eclipse attacks on bitcoin’s peer-to-peer
network. In: USENIX Security 2015, pp. 129–144. USENIX Association (2015)
21. Kabla, A.H.H., et al.: Applicability of intrusion detection system on ethereum attacks: a
comprehensive review. In: IEEE Access, 10, 71632–71655. IEEE (2022)
22. König, L., Unger, S., Kieseberg, P., Tjoa, S.: The risks of the blockchain: a review on current
vulnerabilities and attacks. JISIS 10, 110–127 (2020)
23. Least Authority: node discovery protocol, node discovery protocol, Ethereum founda-
tion (2019). https://leastauthority.com/blog/audits/audit-of-ethereum-foundations-node-dis
covery-protocol/
24. Marcus, Y., Heilman, E., Goldberg, S.: Low-resource eclipse attacks on Ethereum’s peer-to-
peer network. In: IACR Cryptology ePrint Archive, vol. 2018, p. 236 (2020). https://eprint.
iacr.org/2018/236Tikuna: An Ethereum Blockchain Network Security Monitoring System
15
25. Maymounkov, P., Mazières, D.: Kademlia: a peer-to-peer information system based on the
XOR metric. In: Druschel, P., Kaashoek, F., Rowstron, A. (eds.) IPTPS 2002. LNCS, vol.
2429, pp. 53–65. Springer, Heidelberg (2002). https://doi.org/10.1007/3-540-45748-8_5
26. Mikolov, T., Karafiát, M., Burget, L., Cernocký, J., Khudanpur, S.: Recurrent neural network
based language model. In: Interspeech, vol. 2(3) (2010)
27. Saad, M., et al.: Exploring the attack surface of blockchain: a comprehensive survey. IEEE
Commun. Surv. Tutorials, 22, 1977–2008. IEEE (2020)
28. Neudecker, T., Hartenstein, H.: Network layer aspects of permissionless blockchains. IEEE
Commun. Surv. Tutorials 21, 838–857. IEEE (2019)
29. Olah, C.: Understanding LSTM Networks (2015). http://colah.github.io/posts/2015-08-Und
erstanding-LSTMs
30. Pedregosa, F., et al.: Scikit-learn: machine learning in Python. In: JMLR 12, 2825–2830.
arXiv (2011). https://doi.org/10.48550/arXiv.1201.0490
31. Prysm. https://github.com/prysmaticlabs/prysm. Accessed 15 Mar 2023
32. Prysm. https://github.com/sakundi/prysm. Accessed 15 Mar 2023
33. Sakundi. https://github.com/sakundi/discv5-testground/tree/sakundi. Accessed 08 July 2023
34. Sundermeyer, M., Schlüter, R., Ney, H.: LSTM neural networks for language modeling. In:
Interspeech, pp. 194–197 (2012)
35. Testground. https://docs.testground.ai/master/#/. Accessed 15 March 2023
36. The Ethereum Foundation: Devp2p—Ethereum peer-to-peer networking specifications.
https://github.com/ethereum/devp2p
37. The Solidity Authors. https://docs.soliditylang.org/en/v0.8.19/
38. Tikuna. https://github.com/edenia/tikuna. Accessed 08 July 2023
39. Vaswani, A., et al.: Attention is all you need. In: Advances in Neural Information Processing
Systems, vol. 30, arXiv (2017). https://doi.org/10.48550/arXiv.1706.03762
40. Vyzovitis, D., et al.: GossipSub: attack-resilient message propagation in the filecoin and
ETH2.0 networks. arXiv (2020). https://doi.org/10.48550/arXiv.2007.02754
41. Wood, D.D.: Ethereum: a secure decentralised generalised transaction ledger (2014). http://
paper.gavwood.com/
42. Wüst, K., Gervais, A.: Ethereum eclipse attacks. Technical Report, ETH Zurich (2016)
43. Xu, G., et al.: Am I eclipsed? A smart detector of eclipse attacks for Ethereum. Comput.
Secur. 88, 101604. Elsevier (2019). https://doi.org/10.1016/j.cose.2019.101604
