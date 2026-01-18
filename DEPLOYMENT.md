# 部署指南

## 网站部署（Cloudflare Workers）

### 构建与发布

在项目根目录执行：

```bash
pnpm -C packages/website deploy
```

### 数据库迁移（D1）

本项目采用手动迁移，迁移文件位于 `packages/website/migrations`。

示例：应用 waitlist 迁移

```bash
pnpm --filter website exec wrangler d1 migrations apply idoldo
```

或在包目录内执行：

```bash
cd packages/website
pnpm exec wrangler d1 migrations apply idoldo
```

如需新增表或字段，请创建新的迁移文件并执行同样的 apply 操作。
