---
layout: post
category: blockchain
title: "[Smart Contract] CryptoKitties Core Code (KittyCore) Analysis (II)"
language: en
---

`Written by TsaiYee. Please cite the source when reprinting.`

`Original link`: [https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-2/](https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-2/)

[![Gitter](https://badges.gitter.im/tsaiyee/tsaiyee.com.svg)](https://gitter.im/tsaiyee/tsaiyee.com?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

In the previous article [[Smart Contract] CryptoKitties Core Code (KittyCore) Analysis (I)](https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-1/), we mainly analyzed the most basic interfaces and permission setting codes. This part of the code is relatively core and fundamental to understanding the whole Kitties game, so it was analyzed line by line. The following code will mainly introduce the core parts and will not be analyzed line by line.

The next contract is KittyBase, which is the base contract for kitties, saving all common data structures, events, and basic variables.

Since it is the base contract for kitties, the two most core points in it are how the kitty data structure is designed and how kitties are produced/created.

1. Kitty Data Structure

~~~javascript
  struct Kitty {
        uint256 genes; // A 256-bit integer representing the cat's genes. Use this to check if your cat is valuable.
        uint64 birthTime; // Birthday
        uint64 cooldownEndBlock; // Minimum timestamp to breed again
        uint32 matronId; // Mother's ID
        uint32 sireId; // Father's ID
        uint32 siringWithId; // If the cat is currently pregnant, set to the father's ID, otherwise zero
        uint16 cooldownIndex; // Everything has a cooldown (actually an index to a cooldown array)
        uint16 generation; // The generation number of the cat. Cats created by the contract are generation 0. New generation cats are the larger of their parents' generation plus 1.
    }
~~~

Please note that in CryptoKitties, cats are asexual, and any 2 cats can breed together - so cats have no gender.
The KittyBase contract defines a data array for the kitty data structure:

~~~javascript
Kitty[] kitties;
~~~

This is the database that saves all the cats. Every time a cat is bred, it will be saved here, and all cats are accessed via ID.
