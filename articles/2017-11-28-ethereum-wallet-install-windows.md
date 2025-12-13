---
layout: post
category: blockchain
title: 【入门系列】以太坊官方钱包软件(轻节点模式)在Windows下的安装
---

以太坊官方钱包(Ethereum Wallet)在Mac OSX和Linux（Unbuntu）下安装都很简单，安装后直接打开使用，但在Windows下总有各式各样的问题。

下面就在Windows系统上的安装做一个说明。

***

### 软件下载

为了防止钱包软件中植入木马，请到官方网站下载钱包软件并在安装前检查chksum。

以太坊官网提供两种钱包下载:

* Mist

Mist是一个去中心化应用浏览器，里面包含了以太币钱包应用。
这个发布的版本允许你用Mist浏览器打开任何Ethereum去中心化应用。

* 以太坊钱包(Ethereum Wallet)

以太坊钱包仅提供一种单独的Mist浏览器去中心化应用：钱包，因此他被称作“以太坊钱包”。
将来，等到Metropolis发布以后，以太坊钱包将提供完整的Mist浏览器功能以便开放给任何去中心化应用使用。

进入[以太坊的官网 https://ethereum.org/](https://ethereum.org/)，下拉页面，找到 Download 按钮。不要直接点 蓝色按钮，那样会默认下载
Mist的安装包。

##### 1. 点击链接 [`See all versions`](https://github.com/ethereum/mist/releases/latest) 将进入全部钱包软件下载页面。

![官网下载](/img/blog/ethereum-wallet-install-windows/website-download.png)

##### 2. 对于安全警告，你只能选择同意， `SURE I UNDERSTAND AND AGREE`。

![安全警告](/img/blog/ethereum-wallet-install-windows/security-warning.png)

##### 3. 选择最新版本，本文编写时，最新版本为 `Ethereum Wallet and Mist 0.9.3`。

为了简化安装，选择Windows系统安装包 `Ethereum-Wallet-installer-0-9-3.exe`。

![下载列表](/img/blog/ethereum-wallet-install-windows/download-list.png)

##### 4. 选择下载位置，下载文件。由于GitHub使用的Amazon AWS服务，下载速度较慢，所以你要有点耐心，等待下载完成。

### 开始安装

##### 1. 双击下载的文件`Ethereum-Wallet-installer-0-9-3.exe`，进入熟悉的Windows软件安装步骤。

![安装1](/img/blog/ethereum-wallet-install-windows/install-1.png)

##### 2. 一路默认回车，安装完成！

![安装完成](/img/blog/ethereum-wallet-install-windows/install-finish.png)

##### 3. 桌面上出现图标。

  ***先别点它！！！先别点它！！！先别点它！！！***

因为如果现在点击运行，以太坊节点将运行在全节点模式，那么你将进入漫长区块同步阶段，至少要准备100多G硬盘，为了快速的

### 修改节点运行模式

为了提高同步速度，更快的打开钱包，我们采用最近版本才推出的钱包轻节点模式。

##### 1. 选中桌面上以太坊钱包的图标，点击右键，选择`属性`。

![修改同步模式1](/img/blog/ethereum-wallet-install-windows/change-syncmode-1.png)

##### 2. 在 "目标" 框中增加` -node-light`，注意"Roaming\Ethereum"与` -node-light`要有空格。

![修改同步模式2](/img/blog/ethereum-wallet-install-windows/change-syncmode-2.png)

### 开始运行

##### 1. 双击修改好的图标

![启动1](/img/blog/ethereum-wallet-install-windows/start-1.png)

选择主网络`The Main Network`。

***Tips***
> * The Main Network: 为生产网络；
* Rinkeby 使用 PoS 共识算法的测试网络。
 * Ropsten: 使用 PoW 共识算法的测试网络。
 * Solo Network: Pairty钱包的测试网络。

![启动2](/img/blog/ethereum-wallet-install-windows/start-2.png)

##### 2. 查找节点并创建用户

Ethereum Wallet 将自动启动以太坊节点，并查找其它节点。在这个过程中，你可以创建账号、了解一下以太坊，以及喝杯咖啡。

![启动3](/img/blog/ethereum-wallet-install-windows/start-3.png)

![启动4](/img/blog/ethereum-wallet-install-windows/start-4.png)

![启动6](/img/blog/ethereum-wallet-install-windows/start-6.png)


##### 3. 等待节点同步

找到节点后，将进行节点同步，在轻钱包的模式下，将只同步区块头，速度与同步全节点数据相比，那就是火箭和自行车的区别。

![启动5](/img/blog/ethereum-wallet-install-windows/start-5.png)

继续了解以太坊，或者喝好几杯咖啡，😎。

![启动7](/img/blog/ethereum-wallet-install-windows/start-7.png)

网络同步完成后，就进入了主界面。

也可在同步时，先进入主界面。在主界面中，可看到同步状态。

![同步](/img/blog/ethereum-wallet-install-windows/syncnode.png)

![主界面](/img/blog/ethereum-wallet-install-windows/main-ui.png)

##### 4. 切换测试网络

为了进行测试，那么有时需要切换到测试网络，现在一般测试都是用 Ropsten 网络。切换后，需要进行等待节点同步。

注意，请在主网络同步完后再选择切换网络，以免发生错误。

![切换网络](/img/blog/ethereum-wallet-install-windows/change-network.png)

若要切换回生产网络，重新选择`主网络`即可，切回主网络时，也请等待测试网络同步完成后进行。


##### 5. 使用钱包软件

恭喜，你现在已经完成了 以太坊钱包软件的安装，可以在上面转账、部署合约了。

关于如何使用以太坊钱包软件转账、部署合约，我们且听下回分解。

有任何问题，可发邮件与我讨论。
