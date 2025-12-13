---
layout: post
category: blockchain
title: "[Beginner Series] Installing Ethereum Official Wallet (Light Node Mode) on Windows"
language: en
---

Installing the Ethereum Official Wallet (Ethereum Wallet) on Mac OSX and Linux (Ubuntu) is very simple, just install and open it. However, there are always various problems on Windows.

Here is an explanation of the installation on Windows systems.

***

### Software Download

To prevent Trojans from being implanted in the wallet software, please download the wallet software from the official website and check the chksum before installation.

The Ethereum official website provides two types of wallet downloads:

* Mist

Mist is a decentralized application browser that contains an Ether wallet application.
This released version allows you to open any Ethereum decentralized application with the Mist browser.

* Ethereum Wallet

Ethereum Wallet only provides a single Mist browser decentralized application: Wallet, so it is called "Ethereum Wallet".
In the future, when Metropolis is released, Ethereum Wallet will provide full Mist browser functionality to be open to any decentralized application.

Enter [Ethereum Official Website https://ethereum.org/](https://ethereum.org/), scroll down the page, and find the Download button. Do not click the blue button directly, as that will download the Mist installation package by default.

##### 1. Click the link [`See all versions`](https://github.com/ethereum/mist/releases/latest) to enter the full wallet software download page.

![Official Website Download](/img/blog/ethereum-wallet-install-windows/website-download.png)

##### 2. For the security warning, you can only choose to agree, `SURE I UNDERSTAND AND AGREE`.

![Security Warning](/img/blog/ethereum-wallet-install-windows/security-warning.png)

##### 3. Select the latest version. At the time of this writing, the latest version is `Ethereum Wallet and Mist 0.9.3`.

To simplify installation, select the Windows system installation package `Ethereum-Wallet-installer-0-9-3.exe`.

![Download List](/img/blog/ethereum-wallet-install-windows/download-list.png)

##### 4. Choose the download location and download the file. Since GitHub uses Amazon AWS services, the download speed is slow, so be patient and wait for the download to complete.

### Start Installation

##### 1. Double-click the downloaded file `Ethereum-Wallet-installer-0-9-3.exe` to enter the familiar Windows software installation steps.

![Install 1](/img/blog/ethereum-wallet-install-windows/install-1.png)

##### 2. Press Enter all the way, installation complete!

![Install Finish](/img/blog/ethereum-wallet-install-windows/install-finish.png)

##### 3. An icon appears on the desktop.

  ***Don't click it yet!!! Don't click it yet!!! Don't click it yet!!!***

Because if you click to run now, the Ethereum node will run in full node mode, then you will enter a long block synchronization phase, prepare at least 100+ GB of hard disk space. For speed:

### Modify Node Run Mode

To improve synchronization speed and open the wallet faster, we use the wallet light node mode introduced in recent versions.

##### 1. Select the Ethereum Wallet icon on the desktop, right-click, and select `Properties`.

![Change Sync Mode 1](/img/blog/ethereum-wallet-install-windows/change-syncmode-1.png)

##### 2. Add ` -node-light` to the "Target" box. Note there must be a space between "Roaming\Ethereum" and ` -node-light`.

![Change Sync Mode 2](/img/blog/ethereum-wallet-install-windows/change-syncmode-2.png)

### Start Running

##### 1. Double-click the modified icon

![Start 1](/img/blog/ethereum-wallet-install-windows/start-1.png)

Select the main network `The Main Network`.

***Tips***
> * The Main Network: Production network;
> * Rinkeby: Test network using PoS consensus algorithm.
> * Ropsten: Test network using PoW consensus algorithm.
> * Solo Network: Parity wallet test network.

![Start 2](/img/blog/ethereum-wallet-install-windows/start-2.png)

##### 2. Find Peers and Create User

Ethereum Wallet will automatically start the Ethereum node and search for other nodes. In this process, you can create an account, learn about Ethereum, and have a cup of coffee.

![Start 3](/img/blog/ethereum-wallet-install-windows/start-3.png)

![Start 4](/img/blog/ethereum-wallet-install-windows/start-4.png)

![Start 6](/img/blog/ethereum-wallet-install-windows/start-6.png)


##### 3. Wait for Node Synchronization

After finding nodes, node synchronization will proceed. In light wallet mode, only block headers will be synchronized. Compared with full node data synchronization, the speed difference is like a rocket versus a bicycle.

![Start 5](/img/blog/ethereum-wallet-install-windows/start-5.png)

Continue learning about Ethereum, or have several cups of coffee, 😎.

![Start 7](/img/blog/ethereum-wallet-install-windows/start-7.png)

After network synchronization is complete, you enter the main interface.

You can also enter the main interface during synchronization. In the main interface, you can see the synchronization status.

![Sync](/img/blog/ethereum-wallet-install-windows/syncnode.png)

![Main UI](/img/blog/ethereum-wallet-install-windows/main-ui.png)

##### 4. Switch Test Network

To test, sometimes you need to switch to a test network. Generally, Ropsten network is used for testing now. After switching, you need to wait for node synchronization.

Note, please choose to switch networks after the main network synchronization is complete to avoid errors.

![Change Network](/img/blog/ethereum-wallet-install-windows/change-network.png)

To switch back to the production network, simply select `Main Network` again. When switching back to the main network, please also wait for the test network synchronization to complete before proceeding.


##### 5. Use Wallet Software

Congratulations, you have now completed the installation of the Ethereum wallet software, and you can transfer funds and deploy contracts on it.

About how to use Ethereum wallet software to transfer funds and deploy contracts, let's listen to the next breakdown.

If you have any questions, you can email me for discussion.
