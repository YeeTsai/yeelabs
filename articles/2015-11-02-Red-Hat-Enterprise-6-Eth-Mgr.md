---
layout: post
category: OS
title: Red Hat Enterprise 6.4 Network Card Configuration Memo
language: en
description: "Red Hat Enterprise Minimal Install Basic Server, found that what used to be configured now needs to be configured manually. ......"
keywords: "Network Card Configuration, RedHat"
---
Recently I was trying Hadoop. Due to limited disk space on my RMBP, I used the minimal installation Basic Server. I found that what used to be configured automatically now needs to be configured manually.

I. Network card not starting up after rebooting post-installation
   Problem: Can be seen with setup tools, but not visible with ifconfig.
   Solution:

   1. In `/etc/sysconfig/network-scripts/ifcfg-eth*`: Change `ONBOOT=no` to `ONBOOT=yes`

   2. `service network restart`

II. Setting Static IP

   Solution:

   1. In `/etc/sysconfig/network-scripts/ifcfg-eth*`:

     IPADDR=192.168.1.10 #IP Address

     NETMASK=255.255.255.0 #Mask Value

     GATEWAY=192.168.1.1 #Gateway Address

     BOOTPROTO=static #[none|static|bootp|dhcp] (Do not use protocol at boot|Static allocation|BOOTP protocol|DHCP protocol)

   2. `service network restart`

III. VMWare 7.1 copying virtual machine sometimes fails to automatically set network card
   Solution:

   1. Turn off the virtual machine and regenerate the network card address.

   2. In `/etc/sysconfig/network-scripts/ifcfg-eth*`:

     Modify HWADDR to the new MAC address

     UUID needs to be modified to be non-unique

   3. `reboot`

   Note: You need to check if `ifcfg-eth*` already exists under `/etc/sysconfig/networking/devices`. If so, you need to delete it and reboot.
