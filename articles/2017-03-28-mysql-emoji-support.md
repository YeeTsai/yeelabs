---
layout: post
category: program
title: MySQL Emoji Support Solution (MySQL 5.7)
language: en
---

Recently working on a content-based product, we needed to store emoji codes in comments. For MySQL, supporting emoji characters requires some additional work.

***

### Database Server Level

1. Server Configuration File `mysqld.cnf`

Add the following under `[mysqld]`:

```
character-set-server=utf8mb4
```

If your MySQL is running in Docker and `[mysqld]` is the last section, you can use the following command:

```
echo "character-set-server=utf8mb4" >> /etc/mysql/mysql.conf.d/mysqld.cnf
```

Use:

```
more /etc/mysql/mysql.conf.d/mysqld.cnf
```

to check if the result is correct.

2. Client Configuration File `mysql.cnf`

Add the following under `[mysql]`:

```
default-character-set=utf8mb4
```

Similar to step 1, you can also use the following command to add it:

```
echo "default-character-set=utf8mb4" >> /etc/mysql/conf.d/mysql.cnf
```

3. Restart the Database

*** Note: *** If you are using Docker, remember to commit:

```
docker commit CONTAINER_ID [REPOSITORY[:TAG]]
```

### Database Schema Script Level

1. Database Support

```
ALTER DATABASE database_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
```

2. Table Support

```
ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE = utf8mb4_unicode_ci;
```
