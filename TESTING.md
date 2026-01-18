# 测试指南

## 适用范围
- 当前仅覆盖 `packages/app`（React Native + Expo）

## 安装依赖
- 在项目根目录执行：`pnpm install`

## 运行测试
- 运行全部测试：`pnpm -C packages/app test`
- 监听模式：`pnpm -C packages/app test:watch`
- 指定文件：`pnpm -C packages/app test -- __tests__/idoldo-button.test.tsx`

## 约定
- 测试配置：`packages/app/jest.config.js`
- 初始化脚本：`packages/app/jest.setup.ts`
- 测试用例目录：`packages/app/__tests__/`

## 备注
- 组件级测试优先，页面测试在路由与数据模型稳定后补充
