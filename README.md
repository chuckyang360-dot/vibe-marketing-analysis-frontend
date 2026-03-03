# Vibe Marckrting 营销分析系统 - 前端

## 项目概述

这是 Vibe Marckrting 营销分析系统的前端部分，采用 React 技术栈构建。该系统旨在提供智能营销分析、数据可视化和市场洞察功能。

## 页面结构

根据构想.md文件要求，系统包含以下页面：

1. **首页** (`/`) - 展示定位和核心价值主张
2. **产品页** (`/product`) - 展示系统功能和能力
3. **案例页** (`/case`) - 展示成功案例和虚拟数据测试
4. **联系方式** (`/contact`) - 预约咨询表单
5. **登录入口** (`/login`) - 用户登录系统

## 技术栈

- React 18
- React Router v6
- Styled Components
- CSS3

## 组件结构

### 页面组件 (`src/pages/`)
- `HomePage.js` - 首页
- `ProductPage.js` - 产品页面
- `CasePage.js` - 案例页面
- `ContactPage.js` - 联系页面
- `LoginPage.js` - 登录页面

### 公共组件 (`src/components/`)
- `Header.js` - 导航栏组件
- `Footer.js` - 页脚组件
- `HeroSection.js` - 首页英雄区域
- `FeatureSection.js` - 特色功能区域
- `CTASection.js` - 行动召唤区域

### 样式 (`src/styles/`)
- `index.css` - 全局样式和CSS变量

## 开发说明

### 组件设计思路

1. **模块化设计**：每个组件都有独立的职责，便于维护和复用
2. **响应式设计**：支持桌面和移动设备的自适应布局
3. **样式一致性**：使用CSS变量保证全局样式统一
4. **用户体验**：注重交互效果和视觉层次

### 路由设计

使用 React Router 实现单页应用(SPA)的路由切换，提供流畅的用户体验。

### 响应式断点

- 桌面端：> 768px
- 移动端：≤ 768px

## 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

## 目录结构说明

```
frontend/
├── public/
│   └── index.html          # 应用入口HTML文件
├── src/
│   ├── components/         # 可复用UI组件
│   ├── pages/              # 页面级组件
│   ├── styles/             # 样式相关文件
│   ├── routes/             # 路由配置（如果需要）
│   ├── utils/              # 工具函数
│   ├── assets/             # 静态资源
│   ├── App.js             # 主应用组件
│   ├── index.js           # 应用入口
│   └── index.css          # 全局样式
├── package.json           # 项目依赖配置
└── README.md             # 项目说明
```

## 设计理念

1. **清晰定位**：首页突出产品的核心价值和差异化优势
2. **功能展示**：产品页详细介绍系统的能力和特色
3. **案例验证**：案例页通过实例展示产品效果
4. **便捷联系**：联系页提供多种联系方式和预约咨询
5. **安全访问**：登录页提供安全的系统访问入口