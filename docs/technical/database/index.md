---
title: 数据库文档
---

# 数据库文档

## 📖 说明

数据库设计文档，包含ER图、表结构、索引设计、数据迁移记录等。

## 📁 内容结构

- **数据库概览** - 数据库选型、版本、配置
- **ER图** - 实体关系图（使用Mermaid）
- **表结构** - 详细的表结构文档
- **数据迁移** - 数据库变更和迁移记录
- **性能优化** - 索引优化、查询优化

## 🗄️ 数据库规范

### 命名规范
- **表名**：小写字母，下划线分隔，复数形式，如 `users`、`order_items`
- **字段名**：小写字母，下划线分隔，如 `user_name`、`created_at`
- **索引名**：`idx_` 前缀，如 `idx_user_email`
- **唯一索引**：`uk_` 前缀，如 `uk_username`

### 字段规范
- 必须有主键，推荐使用 BIGINT 自增ID
- 必须有 `created_at` 和 `updated_at` 时间戳字段
- 逻辑删除使用 `deleted_at` 或 `is_deleted` 字段
- 状态字段使用 TINYINT，并添加注释说明每个状态值的含义

### 索引规范
- 查询条件字段必须添加索引
- 避免过多索引（单表索引不超过5个）
- 复合索引遵循最左前缀原则

## 📊 数据库变更流程

```mermaid
graph LR
    A[提出变更] --> B[编写DDL脚本]
    B --> C[本地测试]
    C --> D[Code Review]
    D --> E[测试环境执行]
    E --> F[验证]
    F --> G[生产环境执行]
    G --> H[记录变更]
```

## 🔍 表结构模板

```markdown
### 表名：users

**表说明**：用户信息表

| 字段名 | 类型 | 长度 | 必填 | 默认值 | 索引 | 说明 |
|-------|------|------|-----|--------|------|------|
| id | BIGINT | - | 是 | - | PK | 主键ID |
| username | VARCHAR | 50 | 是 | - | UK | 用户名 |
| email | VARCHAR | 100 | 是 | - | IDX | 邮箱 |
| created_at | DATETIME | - | 是 | CURRENT_TIMESTAMP | - | 创建时间 |
| updated_at | DATETIME | - | 是 | CURRENT_TIMESTAMP | - | 更新时间 |

**索引设计**：
- PRIMARY KEY: `id`
- UNIQUE KEY: `uk_username` (`username`)
- INDEX: `idx_email` (`email`)
```

## 🔗 相关文档

- [数据迁移记录](./migrations.md)
- [性能优化指南](./performance.md)
