---
layout: post
category: blockchain
title: "[Beginner Series] Ethereum Smart Contract Development Environment Setup (Ubuntu 14.04)"
language: en
---
### Development Environment Overview
The Ethereum development environment mainly uses the following components:
* Node.js
* geth (go-ethereum, an Ethereum node implemented in Go language)
* solc (Solidity language compiler)
* testrpc (Local test environment)
* truffle (Contract development framework)

For editors, there are browser-based online editors like Remix, IDE plugins (IntelliJ IDEA/Visual Studio), and text editor plugins (Vim/Atom/SublimeText).
You can choose according to personal preference and needs.

Let's look at the software installation process in the Ubuntu 14.04 environment.

### Install Node.js
First install git

```bash
sudo apt-get install git
```

Install NodeJs
```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

After installing Node, given the network environment in China, please use the following command to modify the npm repository to a domestic address (such as Alibaba)

```bash
npm config set registry https://registry.npm.taobao.org
```

### Install geth
There are currently four runnable Ethereum clients, implemented in C++, Go, Python, and Java, all almost fully compatible with the Ethereum protocol. Clients implemented in C++ and Go are currently fully compatible.

The most popular client now is geth.

You can get the latest geth version via https://geth.ethereum.org/downloads/.

You can also download the official graphical wallet software via https://ethereum.org/, which comes with geth.

```bash
mkdir wallet
wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.7.2-1db4ecdc.tar.gz
gzip -unzip geth-linux-amd64-1.7.2-1db4ecdc.tar.gz
tar xvf geth-linux-amd64-1.7.2-1db4ecdc.tar
```
### Install solc

```bash
sudo npm install -g solc solc-cli --save-dev
```

Use the following command to test if the installation is correct:
```bash
solcjs --help
```

### Install testrpc
testrpc is an Ethereum environment simulated in memory locally. It is more convenient and faster for development and debugging. After your contract passes the test in testrpc, it can be deployed to geth.

testrpc also includes a Javascript version of the Ethereum Virtual Machine (EVM).

```bash
sudo npm install -g ethereumjs-testrpc
```
### Install truffle

truffle is one of the most popular development frameworks for Ethereum. You can use truffle and testrpc to quickly develop and debug smart contracts.

```bash
sudo npm install -g truffle
```

You can view the version of truffle with the following command:
```bash
truffle version
```
