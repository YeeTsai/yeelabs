---
layout: post
category: blockchain
title: HyperLedger Fabric First Exploration (I) - Terminology
language: en
---



***

* Transaction

A Transaction is a request used to execute a function on the Ledger. This function is implemented using Chaincode.

* Transactor

A Transactor is the initiator of a Transaction, which can be a client.

* Ledger

A Ledger is a series of encrypted Blockchains. Each Block contains multiple Transactions and the current World State.

A distributed ledger can be understood as an account system with only details and no main account, where the account balance is based on the latest detail.

* World State

The World State is a collection of variables containing the execution results of multiple transactions.

* Chaincode

Chaincode is a piece of application-layer code (Smart Contract) stored on the Ledger as part of a Transaction. That is to say, Chaincode runs the Transaction, and the result of the run may modify the World State.

* Validating Peer

A Validating Peer is one of the participants, a computer node in the network responsible for executing the consensus protocol, confirming transactions, and maintaining the ledger.

* Nonvalidating Peer

A Nonvalidating Peer acts as a proxy node used to connect the Transactor and neighboring VP (Validating Peer) nodes. An NVP node will not execute Transactions but will verify them. At the same time, it also assumes the roles of an event stream Server and providing REST Service.

* Permissioned Ledger

A Permissioned Ledger is a blockchain network that requires every entity and node to be a network member; anonymous nodes are not allowed to connect.

* Privacy

Privacy is used to protect and hide the identity of the Chain Transactor. When network members want to check transactions, they cannot trace the Transactor of the transaction without privileges.

* Confidentiality

Confidentiality makes transaction content not visible to everyone, but only open to stakeholders.
