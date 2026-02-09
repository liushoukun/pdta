---
title: 开发文档
---

# 开发文档

## 📖 说明

开发相关文档，包含环境搭建、代码规范、开发流程、测试规范等。

## 📁 内容结构

- **环境搭建** - 开发环境配置指南
- **代码规范** - 代码风格和最佳实践
- **Git工作流** - 分支管理和提交规范
- **测试规范** - 单元测试、集成测试规范
- **构建部署** - 构建配置和部署流程

## 💻 快速开始

### 环境要求

**前端**：
- Node.js >= 18
- pnpm >= 8

**后端**：
- Java >= 17 / Node.js >= 18
- MySQL >= 8.0
- Redis >= 6.0

### 安装步骤

```bash
# 克隆代码
git clone [repository-url]

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

详见 [环境搭建指南](./setup.md)

## 📝 代码规范

### 命名规范
- **变量**：驼峰命名，如 `userName`
- **常量**：大写下划线，如 `MAX_COUNT`
- **函数**：驼峰命名，动词开头，如 `getUserInfo`
- **类**：帕斯卡命名，如 `UserService`

### 注释规范
```javascript
/**
 * 获取用户信息
 * @param {number} userId - 用户ID
 * @returns {Promise<User>} 用户信息
 */
async function getUserInfo(userId) {
  // 实现代码
}
```

### 文件组织
```
src/
├── components/    # 组件
├── pages/         # 页面
├── services/      # API服务
├── utils/         # 工具函数
├── stores/        # 状态管理
└── types/         # 类型定义
```

详见 [代码规范文档](./code-style.md)

## 🔄 Git 工作流

### 分支策略

- `main` - 主分支，保护分支
- `develop` - 开发分支
- `feature/*` - 功能分支
- `bugfix/*` - bug修复分支
- `hotfix/*` - 紧急修复分支

### 提交规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type类型**：
- `feat`: 新功能
- `fix`: bug修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具变动

**示例**：
```
feat(user): 添加用户注册功能

- 实现注册接口
- 添加邮箱验证
- 完成前端注册页面

Closes #123
```

详见 [Git工作流文档](./git-workflow.md)

## 🧪 测试规范

### 测试覆盖率要求
- 核心业务逻辑：> 80%
- 工具函数：> 90%
- 组件：> 70%

### 测试类型
- **单元测试**：测试单个函数/组件
- **集成测试**：测试模块间协作
- **E2E测试**：测试完整业务流程

详见 [测试规范文档](./testing.md)

## 🚀 构建部署

### 构建命令

```bash
# 开发构建
pnpm build:dev

# 生产构建
pnpm build:prod
```

### 部署流程

1. 提交代码到 Git
2. CI/CD 自动构建
3. 自动部署到测试环境
4. 测试通过后部署到生产

详见 [构建部署文档](./build-deploy.md)

## 🔗 相关资源

- [技术栈文档](../architecture/tech-stack.md)
- [API文档](../api/)
- [数据库文档](../database/)
