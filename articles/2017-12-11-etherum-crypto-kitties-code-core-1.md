---
layout: post
category: blockchain
title: 【智能合约】CryptoKitties核心代码(KittyCore)分析（一）
---

`Written by 蔡一 | TsaiYee 转载请注明出处。`

`原文链接`：[https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-1/](https://tsaiyee.com/blog/2017/12/11/etherum-crypto-kitties-code-core-1/)

基于以太坊平台运行的养猫游戏CryptoKitties风靡全球，造成了以太坊的交易堵塞。

现在让我们从代码的角度来看看，CryptoKitties到底做了些什么事情。

CryptoKitties一共有三部分代码，核心代码（KittyCore）、拍卖行（CryptoKittiesSalesAuction）、繁殖（CryptoKittiesSiringAuction）。

今天我们先来看看核心代码（KittyCore）。

第一个合约，Ownable，为以太坊标准合约，一个用户权限控制的标准实现，此处就不一一详说。
~~~ javascript
pragma solidity ^0.4.11;
/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;
  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() {
    owner = msg.sender;
  }
  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }
}
~~~

以下这段代码定义了 ERC721的接口标准（ERC: Non-fungible Token Standard #721）。

ERC721是以太坊社区提出的不可替代（Non-fungible）的Token的接口标准。

接口主要为了允许不可替代的Token（non-fungible tokens，简称为NFTs）能被标准以太坊钱包跟踪或能在交易所交易。

和ERC20类似，ERC721定义了余额查询、权限查询、转账、授权、授权转出等接口，增加了对TokenId的支持。

{% highlight javascript %}
/// @title Interface for contracts conforming to ERC-721: Non-Fungible Tokens
/// @author Dieter Shirley <dete@axiomzen.co> (https://github.com/dete)
contract ERC721 {
    // Required methods
    function totalSupply() public view returns (uint256 total);
    function balanceOf(address _owner) public view returns (uint256 balance);
    function ownerOf(uint256 _tokenId) external view returns (address owner);
    function approve(address _to, uint256 _tokenId) external;
    function transfer(address _to, uint256 _tokenId) external;
    function transferFrom(address _from, address _to, uint256 _tokenId) external;
    // Events
    event Transfer(address from, address to, uint256 tokenId);
    event Approval(address owner, address approved, uint256 tokenId);
    // Optional
    // function name() public view returns (string name);
    // function symbol() public view returns (string symbol);
    // function tokensOfOwner(address _owner) external view returns (uint256[] tokenIds);
    // function tokenMetadata(uint256 _tokenId, string _preferredTransport) public view returns (string infoUrl);

    // ERC-165 Compatibility (https://github.com/ethereum/EIPs/issues/165)
    function supportsInterface(bytes4 _interfaceID) external view returns (bool);
}
{% endhighlight %}

接下来是基因计算接口。

{% highlight javascript %}
/// @title SEKRETOOOO
contract GeneScienceInterface {
    /// @dev 一个简单的布尔值，表明是我们所期望的合约。
    function isGeneScience() public pure returns (bool);

    /// @dev 给定小猫1和2的基因，返回一个基因组合，可能有一个随机因子
    /// @param genes1 genes of mom
    /// @param genes2 genes of sire
    /// @return 返回应该传递给下一代孩子的基因
    function mixGenes(uint256 genes1, uint256 genes2, uint256 targetBlock) public returns (uint256);
}
{% endhighlight %}

下面的合约对KittyCore合约的特殊管理权限做了定义。

{% highlight javascript %}
/// @title 管理CryptoKitties的特殊访问权限的合约。
/// @author Axiom Zen (https://www.axiomzen.co)
/// @dev See the KittyCore contract documentation to understand how the various contract facets are arranged.
contract KittyAccessControl {
    // 这是CryptoKitties的特殊管理权限。 有三种管理角色:
    //     - The CEO: CEO可以重新分配其它角色，也可以改变我们依赖的智能合约的地址。只有这个角色能取消合约的暂停。
    //                CEO角色地址初始设置为创建KettyCore智能合约的地址。
    //     - The CFO: CFO可以从KittyCore和它的拍卖合约中提取资金。
    //     - The COO: COO可以释放初代小猫来拍卖，或者创造促销小猫。
    // 应该指出的是，这些角色是明显的没有重叠的访问能力的，每个角色的能力列表都是详尽的。
    // 实际上，CEO能分配任意地址到任意角色，但CEO本身是没有能力扮演这些角色的。
    // 这个限制时故意为之的，这样，我们就不会为了图方便而频繁的使用CEO地址了。
    // 我们使用一个地址越少，我们以某种方式损害账户的可能性就越小。
    /// @dev 当合约被升级时发送一个事件
    event ContractUpgrade(address newContract);

    // 能执行相应角色的操作的账户或合约地址
    address public ceoAddress;
    address public cfoAddress;
    address public cooAddress;

    // @dev 跟踪合约是否被暂停。如果被暂停，大部分操作将被阻止。
    bool public paused = false;

    /// @dev 函数修饰符：仅仅CEO能访问
    modifier onlyCEO() {
        require(msg.sender == ceoAddress);
        _;
    }

    /// @dev 函数修饰符：仅仅CFO能访问
    modifier onlyCFO() {
        require(msg.sender == cfoAddress);
        _;
    }

    /// @dev 函数修饰符：仅仅COO能访问
    modifier onlyCOO() {
        require(msg.sender == cooAddress);
        _;
    }

    ///@dev 函数修饰符：仅仅开发人员能访问
    modifier onlyCLevel() {
        require(
            msg.sender == cooAddress ||
            msg.sender == ceoAddress ||
            msg.sender == cfoAddress
        );
        _;
    }

    /// @dev 将CEO权限转到一个新的地址，只有当前CEO能操作
    /// @param _newCEO The address of the new CEO
    function setCEO(address _newCEO) external onlyCEO {
        require(_newCEO != address(0));

        ceoAddress = _newCEO;
    }

    /// @dev 将CFO权限转到一个新的地址，只有当前CEO能操作
    /// @param _newCFO The address of the new CFO
    function setCFO(address _newCFO) external onlyCEO {
        require(_newCFO != address(0));

        cfoAddress = _newCFO;
    }

    /// @dev 将COO的权限转到一个新的地址，只有当前CEO能操作
    /// @param _newCOO The address of the new COO
    function setCOO(address _newCOO) external onlyCEO {
        require(_newCOO != address(0));

        cooAddress = _newCOO;
    }
    /*** 适用于OpenZeppelin的可用功能 ***/
    /// @dev 函数修饰符：仅仅当合约未暂停时才能操作
    modifier whenNotPaused() {
        require(!paused);
        _;
    }
    /// @dev 函数修饰符: 仅仅当合约暂停时才能操作
    modifier whenPaused {
        require(paused);
        _;
    }

    /// @dev 能被任何开发者权限调用来暂停合约。仅仅在检测到缺陷或漏洞时使用，我们需要限制损害。
    function pause() external onlyCLevel whenNotPaused {
        paused = true;
    }

    /// @dev 取消合约暂停。只能被CEO操作，因为我们可能在当CFO或COO的账号被盗时暂停合约。
    /// @notice 这是一个公开函数而不只是外部函数，因此可被衍生合约调用。
    function unpause() public onlyCEO whenPaused {
        // can't unpause if contract was upgraded
        paused = false;
    }
}

{% endhighlight %}

未完待续…………
