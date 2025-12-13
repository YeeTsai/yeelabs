---
layout: post
category: blockchain
title: Best Practices for Using External and Public in Solidity
language: en
---

`Written by TsaiYee. Please cite the source when reprinting.`

`Original link`: [https://tsaiyee.com/blog/2018/01/07/solidity-external-public-best-practices/](https://tsaiyee.com/blog/2018/01/07/solidity-external-public-best-practices/)

Solidity has two types of function calls: internal calls, which do not create an EVM call (also known as a message call), and external calls, which create an EVM call (initiating a message call).

Solidity provides four types of visibility for functions and state variables: external, public, internal, and private. Functions default to public. State variables default to internal visibility.

* internal - Functions can only be accessed internally (current contract or inherited contracts). Similar to Java's protected.
* public - Functions marked as public are part of the contract interface and can be called either internally or via messages. Consistent with Java's public.
* external - Functions marked as external are part of the contract interface and can only be called externally. External functions are more efficient when receiving large arrays. Java has no corresponding keyword.
* private - Can only be accessed within the current contract, not accessible in inherited contracts. Consistent with Java's private.

During training and communication with students, there is often confusion about the use of external and public. Since public can also be called externally, why use external? When should public be used and when should external be used?

Let's look at an example:

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

Calling the two functions in the example, we can see that calling the test function (public) costs 496 gas, while calling the test2 (external) function costs only 261 gas. Why is this?

For public functions, Solidity copies arguments to memory for each call; whereas for external function calls, it can read directly from calldata. Memory allocation is very expensive in the EVM, while reading calldata is relatively cheap.

Why does public need to do memory copying? Because public needs to support internal calls, and the processing mechanism for internal calls is completely different from external calls. Internal calls are executed via jump instructions, and parameter data points to memory internally. Therefore, when the compiler compiles a function that can be called internally, the function expects its arguments to be loaded into memory.

For external, the compiler does not need to allow internal calls, so the compiler can read data directly from calldata, omitting memory copying.

In summary, as a best practice, if your function only needs to be accessed externally, you should use external. If your function needs to be called both internally and externally, use public. It is worth noting that when calling public within a contract, do not use `this.f()`, because this requires the EVM to execute the CALL instruction, which is also very expensive.
