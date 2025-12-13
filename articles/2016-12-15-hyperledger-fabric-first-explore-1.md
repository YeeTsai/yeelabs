---
layout: post
category: blockchain
title: HyperLedger Fabric 初探 （一） - 术语
---



***

* Transaction

Transaction是一个请求，用来在Ledger上执行一个功能(Function)，这个功能是用Chaincode来实现的。

* Transactor

Transactor是Transaction的发起者，可能是一个客户端。

* Ledger

Ledger是一串经过加密的区块链(BlockChain)，每一个Block包含多个Transaction和当前World State。

分布式账本可以理解成是一种只有明细，没有主账的账户体系，其账户的余额以最新一笔明细为准。

* World State

World State 是一组变量的集合，包含着多个交易的执行结果。

* Chaincode

Chaincode是一段应用层代码（智能合约 Smart Contract），它存储在Ledger上，作为Transaction的一部分。也就是说Chaincode运行Transaction，然后运行的结果可能会修改World State。

* Validating Peer

Validating Peer是参与者之一，是在网络里负责执行一致性协议、确认交易和维护账本的计算机节点。

* Nonvalidating Peer

Nonvalidating Peer 相当于一个代理节点，用来连接Transactor和邻近的VP(Validating Peer)节点。一个NVP节点不会去执行Transaction但是会验证它们。同时，它也会承担事件流Server和提供REST Service的角色。

* Permissioned Ledger

Permissioned Ledger 是一个要求每一个实体和节点都要成为网络成员的区块链网络，所有匿名节点都不被允许连接。

* Privacy

Privacy 用来保护和隐藏Chain Transactor的身份，当网络成员要检查交易时，如果没有特权的话，是无法追踪到交易的Transactor。

* Confidentiality

Confidentiality 使交易内容不是对所有人可见，只开放给利益相关者。
