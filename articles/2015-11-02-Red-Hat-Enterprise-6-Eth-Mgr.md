---
layout: post
category: OS
title: Red Hat Enterprise 6.4 网卡配置备忘
description: "Red Hat Enterprise 最小安装Basic Server, 发现原来啥都配好的现在要自己配置了。......"
keywords: "网卡配置, RedHat"
---
最近在尝试Hadoop，RMBP硬盘空间有限，于是就使用最小安装Basic Server，发现原来啥都配好的现在要自己配置了。

一、安装完成重新启动后网卡没有startup，即用setup tools可以看到，但ifconfig无法看到
  处理方法：

  1. /etc/sysconfig/network-scripts/ifcfg-eth*中：ONBOOT=no改为ONBOOT=yes

  2. service network restart

二、设置静态IP

  处理方法：

  1. /etc/sysconfig/network-scripts/ifcfg-eth*中:

    IPADDR=192.168.1.10 #IP地址

    NETMASK=255.255.255.0 #掩码值

    GATEWAY=192.168.1.1 #网关地址

    BOOTPROTO=static #[none|static|bootp|dhcp]（引导时不使用协议|静态分配|BOOTP协议|DHCP协议）

  2. service network restart

三、VMWare 7.1 Copy虚拟机后有时不能自动设置网卡
  处理方法

  1. 关闭虚拟机后重新生成网卡地址

  2. /etc/sysconfig/network-scripts/ifcfg-eth*中:

    HWADDR修改为新MAC地址

    UUID需要修改成不唯一的

  3. reboot

  注意，需要检查 /etc/sysconfig/networking/devices下是否已经有ifcfg-eth*了，如果有，需要删除后reboot
