---
layout: post
category: blockchain
title: 【智能合约】CryptoKitties核心代码(KittyCore)分析（二）
---

`Written by 蔡一 | TsaiYee 转载请注明出处。`

`原文链接`：[https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-2/](https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-2/)

[![Gitter](https://badges.gitter.im/tsaiyee/tsaiyee.com.svg)](https://gitter.im/tsaiyee/tsaiyee.com?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

在上文[【智能合约】CryptoKitties核心代码(KittyCore)分析（一）](https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-1/)中，我们主要分析了最基本的接口，以及权限设置部分的代码，这部分代码比较核心，也是理解整个撸猫游戏的根本，因此逐行进行了分析，后面的代码将主要介绍核心部分，不再逐行分析。

接下来的合约是 KittyBase， 该合约是小猫的基类合约，保存了所有公用数据结构、事件以及基础变量。

既然是小猫的基类合约，里面最核心的是两点，一是小猫的数据结构是怎样设计的，二是小猫是如何产生/创建的。

1. 小猫数据结构

~~~javascript
  struct Kitty {
        uint256 genes; //代表猫的基因的256位整数，你的猫是否值钱主要看它
        uint64 birthTime; //生日
        uint64 cooldownEndBlock; //可以再次繁殖最小时间戳
        uint32 matronId; //母亲ID
        uint32 sireId; //父亲ID
        uint32 siringWithId; //如果猫当前怀孕，则设置为父亲的ID，否则为零
        uint16 cooldownIndex; //目前这只猫的冷却时间（其实是对应一个冷却时间的数组的索引
        uint16 generation; //猫的代数，被合约创造的猫为0代，新一代的猫是他们的父母一代中较大的一个，再加上1.
    }
~~~

请注意，在Crypto Kitties中，猫是无性的，任何2只猫都可以一起繁殖 - 因此猫没有性别。
KittyBase 合约定义了一个kitty 数据结构的数据：

~~~javascript
Kitty[] kitties;
~~~

这就是保存所有的猫的数据库，每繁殖一只猫，都将保存进来，所有的猫都通过id来访问。
