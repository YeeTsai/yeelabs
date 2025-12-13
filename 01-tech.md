YEE Labs 官方网站技术规范文档 (GitHub Pages Edition)
1. 部署架构与核心约束 (Deployment & Constraints)
托管平台: GitHub Pages (Static Site Hosting).

构建模式: Static Site Generation (SSG). 严禁使用 SSR (Server-Side Rendering) 或 Edge Functions，因为 GitHub Pages 不支持 Node.js 运行时。

部署流程: 代码推送到 GitHub Repo -> GitHub Actions 自动构建 -> 推送静态文件到 gh-pages 分支。

域名:

User Page: yeelabs.xyz (CNAME 指向 GitHub Pages)

Subdomain logic: 博客内容通过目录区分 (e.g., yeelabs.xyz/blog) 或后续配置子域。本项目优先采用单体仓库管理所有内容。

2. 技术栈选型 (Tech Stack)
核心框架: Next.js 14+ (App Router).

关键配置: 必须在 next.config.js 中设置 output: 'export' 以生成纯静态 HTML/CSS/JS。

图片处理: 需配置 images: { unoptimized: true } (因为 Next.js 默认图片优化依赖服务器)。

编程语言: TypeScript (体现资深工程师素养，类型安全).

样式方案: Tailwind CSS.

配合 Framer Motion 实现复杂的赛博朋克动画（Glitch, Reveal, Typing effects）。

配合 clsx 和 tailwind-merge 处理动态样式。

内容管理 (Blog): MDX (Markdown + JSX).

允许在博客文章中直接嵌入 React 组件（例如交互式的 K线图或算法演示）。

使用 gray-matter 解析元数据。

代码高亮：rehype-pretty-code 或 Prism.js (必须支持 Solidity/Rust 高亮)。

图标库: Lucide React 或 React Icons (Fa/Si系列)。

3. 设计规范 (Design System Implementation)
基于 Logo 和个人描述 ，实现 "Cyberpunk / Tech-Noir" 风格：

全局主题:

强制暗色模式 (Dark Mode Only). 背景色 #050505。

主字体: Orbitron (用于 Logo/Slogan/Heading), JetBrains Mono (用于代码/数据), Inter (用于正文).

核心组件:

Navbar: 磨砂玻璃效果 (Backdrop blur)，包含 Logo 和导航链接。

Hero Animation: 实现打字机效果循环输出 Slogan 逻辑： while(true) { explore(Yotta); evolve(Epoch); refine(Epsilon); }

Cyberpunk Card: 带有霓虹边框发光 (Neon Glow) 和悬停故障效果 (Hover Glitch) 的容器组件，用于展示项目。

Terminal Window: 模拟命令行界面，用于展示“关于我”的详细信息。

4. 页面内容映射 (Content Mapping)
4.1 首页 (Home) - src/app/page.tsx
Hero Section:

展示 Logo 。

展示 Slogan 及其代码形态。

About Section (数据源自 ):

Role: Senior Blockchain Architect & Full-stack Engineer.

Experience: 20+ Years (Banking Core -> DeFi Protocol).

Key Identity: Co-author of ERC-3525 .

Philosophy: "Scale to Yotta. Learn in Epochs. Precise to Epsilon."

Tech Stack Matrix:

Languages: C/C++, Java, Solidity, Python, Rust, Go .

Core Skills: Ethereum, Bitcoin, Solana, DeFi, GameFi .

视觉表现: 使用标签云或矩阵格点动画展示。

4.2 博客 (Blog) - src/app/blog/
列表页: 按时间倒序展示。分类标签：Tech, Crypto, Quant, Life.

详情页: 渲染 MDX 内容。

需求: 迁移 yeetsai.com 内容。

功能: 支持 LaTeX 公式渲染 (用于量化交易算法公式)。



4.3 项目 (Projects) - src/app/projects/
展示以下卡片 (数据源自 ):

YES Lab: AI-Driven Crypto Quant Platform (Link to yeslab.app).

Solv Protocol: Financial Services for BTC Holders (Link provided).

ERC-3525 Standard: Semi-Fungible Token Standard (Link provided).

Open Source Tools: 你的其他 GitHub 仓库。

5. 目录结构规范 (Directory Structure)
/
├── public/
│   ├── images/
│   │   ├── logo.jpg          # 
│   │   └── favicon.ico
│   └── resume.pdf            # 可选：提供下载
├── content/
│   └── blog/                 # 存放 MDX 博客文章
│       ├── post-1.mdx
│       └── ...
├── src/
│   ├── app/                  # Next.js App Router
│   ├── components/
│   │   ├── ui/               # 基础 UI (Button, Card)
│   │   ├── layout/           # Navbar, Footer
│   │   └── effects/          # GlitchText, MatrixRain, TypingEffect
│   ├── lib/
│   │   ├── utils.ts          # 工具函数
│   │   └── blog.ts           # 读取 MDX 文件的逻辑
│   └── styles/
│       └── globals.css       # Tailwind directives
├── next.config.js            # output: 'export'
└── tailwind.config.ts        # 定义 Neon 颜色变量
6. 交付物要求 (Deliverables)
完整的 Next.js 项目代码。

README.md: 包含本地运行指南 (npm run dev) 和部署指南。

.github/workflows/deploy.yml: 用于自动部署到 GitHub Pages 的 Action 配置文件。