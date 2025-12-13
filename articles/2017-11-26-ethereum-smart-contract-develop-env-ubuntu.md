---
layout: post
category: blockchain
title: 【入门系列】以太坊智能合约开发环境搭建(Ubuntu 14.04)
---
### 开发环境概述
以太坊开发环境主要用到以下组件：
* Node.js
* geth（go-etherenum, 以太坊go语言实现的节点）
* solc（Solidity语言编译器）
* testrpc（本地测试环境）
* truffle（合约开发框架）

对于编辑器，有基于浏览器的在线编辑器Remix、IDE插件（Intellij IDEA/Visual Studio）、文本编辑器插件(Vim/Atom/SublimeText)。
可根据个人爱好和需要选择。

下面看看在Ubuntu 14.04环境下软件的安装流程。

### 安装Node.js
先安装git

```bash
sudo apt-get install git
```

安装NodeJs
```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

安装完Node后，鉴于天朝的网络环境，请使用如下命令将npm的仓库修改为国内的地址（如阿里）

```bash
npm config set registry https://registry.npm.taobao.org
```

### 安装geth
以太坊的客户端目前有四个可运行的，分别由C+ +，Go，Python和Java实现的几乎全兼容以太坊协议的客户端。C++和Go实现的客户端目前完全兼容。

现在最流行的客户端是geth。

可通过 https://geth.ethereum.org/downloads/ 获取最新的geth版本。

也可通过 https://ethereum.org/ 下载官方图形版钱包软件，里面自带geth。

```bash
mkdir wallet
wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.7.2-1db4ecdc.tar.gz
gzip -unzip geth-linux-amd64-1.7.2-1db4ecdc.tar.gz
tar xvf geth-linux-amd64-1.7.2-1db4ecdc.tar
```
### 安装solc

```bash
sudo npm install -g solc solc-cli --save-dev
```

使用以下命令测试安装是否正确：
```bash
solcjs --help
```

### 安装testrpc
testrpc是在本地使用内存模拟的一个以太坊环境，对于开发调试来说，更为方便快捷，当你的合约在testrpc中测试通过后，再可以部署到geth中去。

testrpc中也包含了Javascript版本的Ethereum虚拟机（Ethereum Virtual Machine）

```bash
sudo npm install -g ethereumjs-testrpc
```
### 安装truffle

truffle是以太坊（Ethereum）最受欢迎的一个开发框架，可以利用truffle和testrpc快速进行智能合约的开发调试。

```bash
sudo npm install -g truffle
```

可通过以下命令查看truffle的版本:
```bash
truffle version
```
