---
layout: post
category: program
title: Macosx rust交叉编译到Linux步骤及常见问题
---

### 安装musl-cross

```bash
brew install FiloSottile/musl-cross/musl-cross
sudo ln -s /usr/local/bin/x86_64-linux-musl-gcc /usr/local/bin/musl-gcc
```

遇到问题

```bash
==> make install
Error: gettext: unknown or unsupported macOS version: :dunno
```

解决办法

```bash
brew update-reset
```

### .cargo/config 增加内容

```toml
[target.x86_64-unknown-linux-musl]
linker = "x86_64-linux-musl-gcc"
```

如果没有这个文件新增即可。

### 增加target：x86_64-unknown-linux-musl

```bash
rustup target add x86_64-unknown-linux-musl
```

### 可以开心的开始编译了

```bash
cargo build --release --target x86_64-unknown-linux-musl
```

遇到问题

```bash
error: failed to run custom build command for `openssl-sys v0.9.95`
```

解决问题

```bash
brew install openssl
export OPENSSL_DIR=/opt/homebrew/opt/openssl@3
```

又遇到问题

```bash
reqwest.38a55170626eab39-cgu.02:(.text._ZN4core3ptr44drop_in_place$LT$reqwest..connect..Inner$GT$17h0198ea10d7817d8cE+0x38): undefined reference to `SSL_CTX_free'
```

解决问题，需要在Cargo.toml增加openssl的依赖

```toml
openssl = { version = "0.10", features = ["vendored"] }
```

### Done