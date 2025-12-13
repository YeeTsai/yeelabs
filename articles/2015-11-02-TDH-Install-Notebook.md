---
layout: post
category: bigdata
title: TDH 安装日志
---
最近在做TDH（Transwarp Data Hub）的技术验证，本文记录安装时遇到的问题及解决办法。

### 一、环境说明


* TDH版本

4.2

OS版本

Red Hat Enterprise 6.4 64bit

* 节点数

4个节点，内存2G，CPU内核1个

* 节点用途

tdh-demo-mgr: 安装TDH Manager

tdh-demo-1,tdh-demo-2,tdh-demo-3作为安装Hadoop等服务

### 二、安装中遇到的问题及办法


* 安装时无法启动Yarn NodeManager，报错:

```
  FATAL org.apache.hadoop.yarn.server.nodemanager.NodeManager: Error starting NodeManager
  org.apache.hadoop.yarn.exceptions.YarnRuntimeException:
  org.apache.hadoop.yarn.exceptions.YarnRuntimeException:
  Recieved SHUTDOWN signal from Resourcemanager ,Registration of NodeManager failed,
  Message from ResourceManager: NodeManager from  tdh-demo-3 doesn't satisfy minimum allocations,
  Sending SHUTDOWN signal to the NodeManager.        
```

* 解决办法：

通过在网上查找相应问题，在 http://blog.csdn.net/u010967382/article/details/20380387 中说到，yarn-site.xml中的    

```
    <name>yarn.nodemanager.resource.memory-mb</name>
```

不能小于1024，查看TDH中的配置为931，修改为1024，启动OK
