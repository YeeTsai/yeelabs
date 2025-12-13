---
layout: post
category: blockchain
title: Solidity中的external与public使用最佳实践
---

`Written by 蔡一 | TsaiYee 转载请注明出处。`

`原文链接`：[https://tsaiyee.com/blog/2018/01/07/solidity-external-public-best-practices/](https://tsaiyee.com/blog/2018/01/07/solidity-external-public-best-practices/)

Solidity有两种函数调用方式，一种是内部调用，不会创建一个EVM调用（也叫做消息调用），另一种则是外部调用，会创建EVM调用（会发起消息调用）。

Solidity对函数和状态变量提供了四种可见性。分别是external,public,internal,private。其中函数默认是public。状态变量默认的可见性是internal。

* interal - 函数只能通过内部访问（当前合约或者继承的合约），可在当前合约或继承合约中调用。类似于Java的protected
* public - public标识的函数是合约接口的一部分。可以通过内部，或者消息来进行调用。与Java的public含义一致。
* external - external标识的函数是合约接口的一部分。函数只能通过外部的方式调用。外部函数在接收大的数组时更有效。Java中无与此对应的关键字。
* private - 只能在当前合约内访问，在继承合约中都不可访问。与Java中的private含义一致。 

在培训和与学员交流的过程中，大家比较困惑的是external和public的使用。使用public也可以在外部调用，为啥还需要使用external呢？什么时候该使用public，什么时候该使用external呢？

我们来看一下的例子：

```javascript
pragma solidity^0.4.12;

contract Test {
    function test(uint[20] a) public returns (uint){
         return a[10]*2;
    }

    function test2(uint[20] a) external returns (uint){
         return a[10]*2;
    }
}
```

调用例子中的两个函数，我们能看到，调用test函数（public）使用496 gas，调用test2（external）函数仅花费261 gas。这是为什么呢？

对于public函数，每次调用时Solidity会将参数copy到内存中；而调用external函数，则可以直接读取calldata。内存分配在EVM中是非常昂贵的，而读取calldata则相对廉价很多。

那为什么public需要做内存复制呢？那是因为public需要支持内部调用，而内部调用与外部调用的处理机制是完全不同的。内部调用是通过jump指令执行的，参数数据在内部是指向内存的。因此，当编译器在编译可内部调用的函数时，函数希望它的参数是载入内存的。

而对于external，编译器是不需要允许内部调用的，因此编译器可以直接从calldata读取数据，而省略了内存复制。

综上，作为最佳实践，如果你的函数仅仅需要外部调用，那么你应该用external，如果你的函数需要内部和外部同时调用，那么使用public。值得注意的是，合约内调用public，一定不要使用this.f()，因为这需要EVM执行CALL指令，这也是很昂贵的。