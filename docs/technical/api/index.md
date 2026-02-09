---
title: API文档
---

# API 接口文档

## 📖 说明

系统API接口文档，包含接口规范、接口列表、认证鉴权、错误码等。

## 📁 内容结构

- **接口概览** - API设计原则和通用规范
- **认证鉴权** - Token验证、权限控制
- **接口模块** - 按业务模块分类的接口文档
- **错误码** - 统一错误码说明
- **接口变更** - API变更记录

## 🌐 接口规范

### 通用规范

**协议**：HTTPS

**域名**：
- 开发环境：`https://api-dev.example.com`
- 测试环境：`https://api-test.example.com`
- 生产环境：`https://api.example.com`

**请求格式**：
```
https://api.example.com/api/v1/{module}/{resource}
```

**HTTP方法**：
- `GET`：查询数据
- `POST`：创建数据
- `PUT`：更新数据（全量）
- `PATCH`：更新数据（部分）
- `DELETE`：删除数据

### 请求格式

**Header**：
```
Content-Type: application/json
Authorization: Bearer {token}
X-Request-ID: {唯一请求ID}
```

**Body**（POST/PUT/PATCH）：
```json
{
  "data": {},
  "timestamp": 1234567890
}
```

### 响应格式

**成功响应**：
```json
{
  "code": 0,
  "message": "success",
  "data": {},
  "timestamp": 1234567890
}
```

**失败响应**：
```json
{
  "code": 40001,
  "message": "参数错误",
  "errors": [
    {
      "field": "username",
      "message": "用户名不能为空"
    }
  ],
  "timestamp": 1234567890
}
```

### 状态码

**HTTP状态码**：
- `200` - 成功
- `201` - 创建成功
- `400` - 参数错误
- `401` - 未授权
- `403` - 无权限
- `404` - 资源不存在
- `500` - 服务器错误

**业务状态码**：见 [错误码文档](./error-codes.md)

## 📝 接口文档模板

```markdown
### 接口名称

**接口地址**：`POST /api/v1/users`

**接口说明**：创建用户

**请求参数**：

| 参数名 | 类型 | 必填 | 说明 |
|-------|------|-----|------|
| username | string | 是 | 用户名，3-20字符 |
| email | string | 是 | 邮箱地址 |
| password | string | 是 | 密码，6-20字符 |

**请求示例**：
\`\`\`json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}
\`\`\`

**响应示例**：
\`\`\`json
{
  "code": 0,
  "message": "创建成功",
  "data": {
    "user_id": 123,
    "username": "testuser"
  }
}
\`\`\`

**错误码**：

| 错误码 | 说明 |
|-------|------|
| 40001 | 参数错误 |
| 40002 | 用户名已存在 |
```

## 🔗 相关文档

- [认证鉴权](./authentication.md)
- [错误码说明](./error-codes.md)
- [接口变更记录](./changelog.md)
