---
layout: post
category: program
title: 使用Jekyll、GitHub搭建Blog
description: "如果你玩腻了WordPress，亦或你是个喜欢折腾的Coder，那么你应该使用Jekyll和GitHub搭建一个属于自己的Blog，......"
keywords: "Jekyll, GitHub Pages, Markdown"
---

如果你玩腻了WordPress，亦或你是个喜欢折腾的Coder，那么你应该使用Jekyll和GitHub搭建一个属于自己的Blog，你可以像提交代码一样将写的Blog提交到GitHub，然后通过自己的域名或者GitHub的二级域名进行访问。

## Jekyll

[Jekyll](https://jekyllrb.com/)是一个静态网页生成工具。

```
Transform your plain text into static websites and blogs.
```

## GitHub Pages

[GitHub Pages](https://github.io) 是一个页面托管主机。

```
Websites for you and your projects.
Hosted directly from your GitHub repository. Just edit, push, and your changes are live.
```


幸运的是，GitHub Pages 支持Jekyll。

## Markdown

Markdown 是一种轻量级的「标记语言」。

```
Markdown is a text-to-HTML conversion tool for web writers.
```

用Atom或者Vi可以方便的编写版式很漂亮的文档。

## Trap

如果你按照网上的大部分教程一样，在本机上安装Jekyll，编写Markdown文件，本机测试显示效果，然后上传到GitHub。那么恭喜你，你会发现本机显示很好的页面，到GitHub Pages上显示就没有那么好了。

这是因为GitHub Pages使用的Jekyll和官方的Jekyll的Markdown语法上有很大的差别，强烈建议使用GitHub Pages的本地环境测试而不是使用Jekyll官方引擎。

[搭建本地GitHub Pages传送门](https://help.github.com/articles/using-jekyll-with-pages)
