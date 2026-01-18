# WIP

## 目标
- 自动拆分 `demo/app.html` 中的界面
- 在 `packages/app` 中实现对应页面并串联导航

## 任务拆解 / TODO
- [x] 从 demo 中提取屏幕列表并建立路由结构
- [x] 建立基础主题与复用组件（色板/按钮/顶部栏/标签/步骤器）
- [x] 完成首批流程页面（模板选择 → 上传素材 → 预览 → 结果 → 分享）
- [x] 对齐底部导航（浮动 Create + 4 项）
- [x] 新增 Advanced Config 设置页并调整创建流程
- [x] 抽离预览机型组件，控制单文件长度
- [x] Rankings 页面与导航对齐
- [x] 新增 Set Game Details 页面并插入流程
- [x] 先补对应测试，再实现页面
- [x] 更新创建流程标题文案（Choose Game Template / Upload Idol Photos / Metadata）
- [x] 确认 Configs 与 Preview & Publish 页面包含 Stepper
- [ ] 逐页还原剩余 UI（搜索/游戏库/主题页/成就等）
- [ ] 自检与整理
## 新任务：测试搭建
- [x] 在 packages/app 搭建 Jest + React Native Testing Library
- [x] 添加基础测试用例（组件最小覆盖）
- [x] 补充 TESTING.md

## 备注
- demo 内包含 25 个 body 段落，先按此规模实现
## 已实现
- 路由：`/(tabs)` + `create/*` 流程页
- 组件：`IdolDoButton`/`IdolDoChip`/`IdolDoTopBar`/`IdolDoStepper`
- 页面：Home、Search、My Games、Profile（基础版）与 Create Flow 5 个页面
