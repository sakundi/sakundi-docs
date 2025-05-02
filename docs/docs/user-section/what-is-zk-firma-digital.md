---
id: what-is-zikuani
title: What is Zikuani?
sidebar_label: What is Zikuani?
description: Sakundi - Your partner on user privacy protection
keywords: [sakundi, blockchain]
hide_table_of_contents: true
custom_edit_url: null
---

Zikuani is a solution that allows holders of a government-signed digital
identity to prove their identity in a privacy preserving way. It provides
tools to generate and verify proofs, authenticate users, and verify proofs
using Web2 or Web3 technologies.

The project aims to create a privacy respecting infrastructure for enhancing
the digital identity system. We strive to strengthen people privacy by minimizing
data collection, enabling individuals to access a wide range of valuable services
without disclosing sensitive information.

# What problems solve this project?

A lot of sensitive user data are leaked daily to private companies,
criminals, and other organizations. This fact occurs because the technology 
we use daily is hungry for collecting people's information, which 
does not even serve any purpose for the user. This collected data is sold to
other organizations or governments or is usually lost in cyberattacks. 

Sometimes, service providers need to identify their users as real persons,
especially when regulations require it. We need a way for the user to prove
their identity and other characteristics abouth themselves (Such as their age) 
in a manner that does not leak sensitive information but can be totally trusted
and verifiable by the service provider. This trust could come, for example, from the 
government-supplied digital identity.

# How we solve this problems

We have used one of the most significant innovations in cryptography in recent years, called zero-knowledge proofs (ZKP). This type of cryptography allows the user to prove to have
some information to someone else without actually revealing the data.
For instance, a user can show that she knows a secret password without sending
it to the other party. As another example, she can also prove that she has
a secret key that belongs to a public key pair without actually sharing the secret key.

ZK allows the user to create a mathematical proof of having some information
that can be validated by a third party called the verifier. In our use case, we
extract the digital certificate from the identity card locally on the user's device
and create an anonymous proof of such certificate. Hence, the user can prove that
she has an identity validated (signed) by the government without actually sending the
certificate and the sensitive informatin contained there. On the other hand,
depending on the use case the service provider can ask the user to reveal specific
information from the certificate that the person has to accept and confirm.



