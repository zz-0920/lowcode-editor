# 低代码编辑器

一个基于 React + TypeScript + Vite 构建的可视化低代码编辑器平台。

## 功能特性

- **物料区**: 提供可拖拽的组件库
- **画布区**: 可视化编辑区域，支持组件拖拽和布局
- **属性编辑区**: 右侧组件属性配置面板

## 核心实现

1. **组件拖拽**: 将物料区的组件拖到画布区，维护一个 JSON 对象来描述页面结构
2. **属性编辑**: 在右侧编辑组件属性，实时更新组件对象
3. **可视化渲染**: 将 JSON 数据渲染成真实的 HTML 结构

## 技术栈

- **框架**: React 18 + TypeScript + Vite
- **样式**: TailwindCSS (原子化 CSS)
- **状态管理**: Zustand
- **拖拽**: react-dnd + react-dnd-html5-backend
- **布局**: allotment (可调整大小的面板)

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm run dev
```

## 项目架构

### 状态管理

1. **componentsStore**: 存储整个页面的 JSON 结构，提供组件的增删改查功能
2. **componentConfigStore**: 存储组件名与真实组件代码的映射关系

### 核心功能

1. **组件渲染**: 使用 `React.createElement` 递归渲染 JSON 结构
2. **拖拽系统**: 基于 react-dnd 实现跨组件拖拽
3. **选中效果**: 
   - **HoverMask**: 鼠标悬停时的高亮效果
   - **SelectedMask**: 点击选中时的边框效果
4. **属性编辑**: 右侧面板实时编辑组件属性

## 开发说明

- 使用 TailwindCSS 进行样式开发，无需编写传统 CSS
- 组件采用递归渲染方式，支持无限嵌套
- 通过 JSON 数据驱动整个页面结构