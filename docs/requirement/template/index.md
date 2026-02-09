---
title: 文档模板
---

# 需求文档模板

## 📖 说明

本目录提供标准化的需求文档模板，确保团队产出的文档格式统一、内容完整。

## 📋 模板列表

### [PRD 模板](./PRD-template.md)
**产品需求文档 (Product Requirement Document)**

- **使用者**：产品经理
- **用途**：描述产品需求、业务流程、功能设计
- **关联文档**：TDD、测试用例

### [TDD 模板](./TDD-template.md)
**技术设计文档 (Technical Design Document)**

- **使用者**：技术负责人、开发工程师
- **用途**：描述技术方案、系统设计、接口设计
- **前置文档**：PRD

### [TEST 模板](./TEST-template.md)
**测试用例文档 (Test Case Document)**

- **使用者**：测试工程师
- **用途**：编写测试用例、测试计划
- **前置文档**：PRD、TDD

## 📝 使用指南

### 创建新需求时

1. 在 `requirement/` 目录下创建需求文件夹：`YYYYMM-需求名称/`
2. 复制对应模板到需求文件夹中
3. 按照模板提示填写内容
4. 遵循文档编写规范

### 模板更新

- 模板文件由团队共同维护
- 重大修改需经过团队讨论
- 更新后及时通知团队成员

## 🔗 相关规范

- [PRD 编写标准](../../../.cursor/rules/doc-writing/prd-standard.md)
- [TDD 编写标准](../../../.cursor/rules/doc-writing/tdd-standard.md)
- [测试用例编写标准](../../../.cursor/rules/doc-writing/test-standard.md)
