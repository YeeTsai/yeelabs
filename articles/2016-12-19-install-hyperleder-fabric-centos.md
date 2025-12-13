---
layout: post
category: blockchain
title: 在CentOS上搭建HyperLedger Fabric开发测试环境
---

虽然HyperLedger Fabric提供Vagrant Box开箱即用的环境，但为了加深对其的理解，决定从头搭建一套开发测试环境。

使用VMWare安装CentOS，若用Virtual Box，操作类似。

***

### 安装CentOS

下载CentOS 7并安装 ，我使用的是x86-64 Minimal版本。

### 安装Docker

####  安装前准备

检查内核版本是否支持（Docker需要3.10以上），CentOS 7完全支持。

```
# uname -a
3.10.0-327.el7.x86_64
```

#### 使用yum安装Docker

##### 1. 更新yum

```
sudo yum update
```

##### 2. 增加 yum Repo

~~~ shell
sudo tee /etc/yum.repos.d/docker.repo <<-'EOF'
[dockerrepo]
name=Docker Repository
baseurl=https://yum.dockerproject.org/repo/main/centos/7/
enabled=1
gpgcheck=1
gpgkey=https://yum.dockerproject.org/gpg
EOF
~~~

##### 3. 安装Docker

~~~ shell
sudo yum install docker-engine
~~~

##### 4. 允许Docker作为Service启动

~~~ shell
sudo systemctl enable docker.service
~~~

##### 5. 启动Docker服务

~~~ shell
sudo systemctl start docker
~~~

##### 6. 安装docker-compose

docker-compose是docker集群管理工具，可自定义一键启动多个docker container。

~~~shell
curl -L https://github.com/docker/compose/releases/download/1.9.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
~~~

*Note*: HyperLedger github上```docker-compose.yaml```文件需要使用最新的docker-compose版本解析。

### 搭建Fabric开发环境

#### 下载相关组件

##### 1. docker-compose.yml

可使用HyperLedger github上的样例

~~~shell
curl -o docker-compose.yml https://raw.githubusercontent.com/hyperledger/fabric/master/examples/sdk/node/docker-compose.yml
~~~

##### 2. 下载Docker image

membersrvc和peer可以采用标准的 hyperledger fabric组件，因此直接pull

~~~shell
docker pull hyperledger/fabric-membersrvc:latest
docker pull hyperledger/fabric-peer:latest
~~~

#### build客户端镜像

##### 1. 下载Fabric样例Dockerfile

~~~shell
curl -o Dockerfile https://raw.githubusercontent.com/hyperledger/fabric/master/examples/sdk/node/Dockerfile
~~~

##### 2. build image

~~~shell
docker build -t hyperledger/fabric-starter-kit:latest .
~~~

##### 3. 检查images是否正确

~~~shell
docker ps -a
~~~

#### 运行Fabric开发环境

##### 1. 启动Clustedr

~~~shell
docker-compose -f docker-compose.yml up -d
~~~

##### 2. 进入Docker

部署为开发模式，直接进入peer

~~~shell
docker exec -it peer bash
~~~

##### 3. 登陆

官方Image默认打开权限，需要先登陆用户，使用内置用户登陆。


- CLI

~~~shell
peer network login jim
~~~

密码
```
6avZQLwcUe9b
```

- REST API

也可以使用REST API：

```
POST http://127.0.0.1:7050/registrar
```

~~~json
{
    "enrollId": "jim",
    "enrollSecret": "6avZQLwcUe9b"
}
~~~

*Note*: 为了使用REST，你需要在docker-compose.yml文件的peer中加入端口映射：

```
ports:
   - "0.0.0.0:7050:7050"
```

##### 4. 部署Chaincode

- CLI

~~~shell
CORE_PEER_ADDRESS=127.0.0.1:7051
peer chaincode deploy -n hyperledger-demo-1 -c '{"Function": "init", "Args": ["a", "1000", "b", "2000"]}' -u jim
~~~

*Note*: 由于peer启动时设置为开发模式，chaincode运行时是在starter上执行的，没有针对chaincode专门构建和在单独的docker vm中执行。
*Note*: 部署返回成功仅仅意味着提交的指令已被接收，不代表指令执行完成。
*Note*: 由于运行在开发模式(dev)，在docker启动时已经注册chaincode，因此命令行或REST参数中不能再带-p 路径，不然部署报错：

```
sending init failed(handler not found for chaincode
```

如果不在docker-compose.yml中指定命令，可进入starter用以下命令注册：

~~~shell
CORE_CHAINCODE_ID_NAME=hyperledger-demo-1 CORE_PEER_ADDRESS=0.0.0.0:7051 ./chaincode_example02
~~~

- REST API

```
POST http://127.0.0.1:7050/chaincode
```

~~~json
{
    "jsonrpc": "2.0",
    "method": "deploy",
    "params": {
        "type": 1,
        "chaincodeID": {
            "name": "hyperledger-demo-1"
        },
        "ctorMsg": {
            "function": "init",
            "args": ["a", "1000", "b", "2000"]
        },
        "secureContext": "jim"  
    },
    "id": 1
}
~~~

##### 5. 查询

- CLI

~~~shell
peer chaincode query -u jim -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -n hyperledger-demo-1 -c '{"Function": "query", "Args": ["a"]}'
~~~

- REST API

```
POST http://127.0.0.1:7050/chaincode
```

~~~json
{
    "jsonrpc": "2.0",
    "method": "query",
    "params": {
        "type": 1,
        "chaincodeID": {
            "name": "hyperledger-demo-1"
        },
        "ctorMsg": {
            "function": "query",
            "args": ["a"]
        },
        "secureContext": "jim"  
    },
    "id": 5
}
~~~

##### 6. 转账

- CLI

~~~shell
peer chaincode invoke -n hyperledger-demo-1 -c '{"Function": "query", "Args": ["a", "b", "10"]}'
~~~

- REST API

```
POST http://127.0.0.1:7050/chaincode
```

~~~json
{
    "jsonrpc": "2.0",
    "method": "invoke",
    "params": {
        "type": 1,
        "chaincodeID": {
            "name": "hyperledger-demo-1"
        },
        "ctorMsg": {
            "function": "invoke",
            "args": ["a", "b", "100"]
        },
        "secureContext": "jim"  
    },
     "id": 3
}
~~~

##### 7. 获取某个区块的信息

- REST API

```
GET http://127.0.0.1:7050/chain/blocks/4
```

***

**到此**，CentOS上的开发环境搭建完毕。如果你使用的是Mac OSX，大可不必如此麻烦，使用[Docker for Mac](https://download.docker.com/mac/stable/Docker.dmg)，你直接可以在Mac上完成以上操作。

**最后**，祝一切顺利。
