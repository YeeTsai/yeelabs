---
layout: post
category: bigdata
title: TDH Installation Log
language: en
---
Recently I've been doing technical validation for TDH (Transwarp Data Hub). This article records the problems encountered during installation and their solutions.

### I. Environment Description


* TDH Version

4.2

* OS Version

Red Hat Enterprise 6.4 64bit

* Number of Nodes

4 nodes, 2G RAM each, 1 CPU core each

* Node Usage

tdh-demo-mgr: Install TDH Manager

tdh-demo-1, tdh-demo-2, tdh-demo-3 serve as installation for Hadoop and other services

### II. Problems Encountered During Installation and Solutions


* Unable to start Yarn NodeManager during installation, error reported:

```
  FATAL org.apache.hadoop.yarn.server.nodemanager.NodeManager: Error starting NodeManager
  org.apache.hadoop.yarn.exceptions.YarnRuntimeException:
  org.apache.hadoop.yarn.exceptions.YarnRuntimeException:
  Recieved SHUTDOWN signal from Resourcemanager ,Registration of NodeManager failed,
  Message from ResourceManager: NodeManager from  tdh-demo-3 doesn't satisfy minimum allocations,
  Sending SHUTDOWN signal to the NodeManager.        
```

* Solution:

By searching for the corresponding problem online, http://blog.csdn.net/u010967382/article/details/20380387 mentions that in `yarn-site.xml`:

```
    <name>yarn.nodemanager.resource.memory-mb</name>
```

Calculated value cannot be less than 1024. Checking the configuration in TDH, it was 931. Modified to 1024, started OK.
