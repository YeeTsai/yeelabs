---
layout: post
category: program
title: MYSQL支持表情代码解决方案（MYSQL 5.7)
---

最近在一个内容方面的产品，在留言中需要存储表情代码，对于MYSQL，支持表情符号(emoji)需要一些额外的工作。

***

### 数据库Server层面

1. Server配置文件 mysqld.cnf

需要在 [mysqld] 下增加：

```
character-set-server=utf8mb4
```

如果你mysql是docker，且[mysqld]是最后一个section，可以用如下命令:

```
echo "character-set-server=utf8mb" >> /etc/mysql/mysql.conf.d/mysqld.cnf
```

使用

```
more /etc/mysql/mysql.conf.d/mysqld.cnf
```

检查结果是否正确。

2. Client配置文件 mysql.cnf

需要在 [mysql] 下增加

```
default-character-set=utf8mb4
```

同1，你也可以使用如下命令增加：

```
echo "default-character-set=utf8mb" >> /etc/mysql/conf.d/mysql.cnf
```

3. 重新启动数据库

*** Note: *** 如果你使用的Docker，一定记得commit

```
docker commit CONTAINER_ID [REPOSITORY[:TAG]]
```

### 数据库建表脚本层面

1. DataBase支持

```
ALTER DATABASE 数据库名 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
```

2. 数据库表支持

```
ALTER TABLE 表名 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

