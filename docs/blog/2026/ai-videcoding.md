# 利用codex生成微信小程序

## 前期准备

### prd文档

怎么去写一个PRD文档呢？从PRD文档获取到一个最核心的信息，就是功能和页面的描述。或者说你可以把这两个拆成不同的文档也行。

- 功能描述
- 实现范围
- 页面描述（最好有，方便做设计）

PRD文档解决的是你要做什么的问题。

要生成一个PRD文档，非常简单，只要你的关键词里面带PRD就行。后描述你要重点包括的内容。

```
我现在需要做一个户外和摄影小帮手的微信小程序，一进去选择地点，然后有个朝霞晚霞页面和工具页面，首页包含当前位置的海拔和天气，日出日落，月出月落，蓝调时刻时间，工具包含指北针，七日预报，银河观察的预报，帮我生成prd文档，包括功能描述，前台页面描述
```

### 申请微信小程序及安装微信开发者工具

https://mp.weixin.qq.com/cgi-bin/wx

申请好小程序功能，并安装好小程序开发工具

### 安装好开发环境

nodejs，claude code或codex


## 生成原型

### OpenDesign 介绍

Open Design是一款类似claude Design的设计工具，里面集成了非常多用于设计的技能、插件以及样式规范等等。使用OpenDesign可以制作APP、Web等等前端的原型。

Open Design可以调用本地的CLI工具，比如Claude Code, Codex，gemini CLI 等等。意思就是它不需要单独配置模型，可以用你自己本身的编程模型来进行设计，这极大地提升了便利性,而且可以使用多种模型来对比一下设计的效果。

可以进入这个链接下载桌面端，支持Windows、Mac以及Linux。

https://github.com/nexu-io/open-design/releases

### 配置OpenDesign AI工具关联

可以自己配资openAI key，也可以用本机的claude code 和codex，这里选择了本机codex


### 生成原型并优化

接下来新建项目，把之前生成的prd.md文档放进去

然后和他对话

```
阅读 @prd.md 完成小程序开发
```

![image](https://lz.sinaimg.cn/mw690/a0871c02gy1ig037xoqppj21z019m4qp.jpg)

这样他就会自动执行他的skills，开始设计原型

原型生成后，可以在里面选择方块并调整自己的设计

### 导出原型

导出很方便，直接导出为zip格式，里面是生成的页面的html和一些描述文件

-DESIGN-HANDOFF.md

-DESIGN-MANIFEST.json
-outdoor-photography-helper.html
-prd.md

## 原型转小程序代码


### 准备工作

- 在小程序开发者工具上在本地新建自己的项目

- 把prd.md 和导出的设计文件放入项目中

- 生成agnet.md 指导ai生成项目

```
先了解一下这个项目，这是一个微信小程序，Web-Prototype是html页面原型，这个页面是不需要做改动的，阅读就可以了，了解完后，编写一个Agent.md的项目开发规范
```

### 代码转换

上面的原型设计目的是得到一个最终的原型HTML文件,但要做小程序，也就是我们需要把HTML代码转成我们的小程序代码，所以在这一步，最重要的流程就是代码转换。

小程序的代码和结构跟APP区别比较大，所以我们在转换的时候一定要写好约束。在这里，我准备好一个技能，专门将HTML代码转换为小程序的代码。

SKILL.md

```
---
name: html-to-wechat-miniprogram
description: 将 HTML、React、Vue 或其他 Web 原型转换成微信小程序代码，并强制遵守小程序特有的页面结构、原生顶部导航、app.json tabBar、跳转 API、安全区布局、本地资源和验收规范。用于把 Web/HTML 原型转成微信小程序文件，或检查、修复已生成的小程序转换结果是否符合微信平台规范。
---

# HTML 转微信小程序

使用此技能将 Web 原型转换为微信小程序，同时约束通用大模型容易忽略的平台规则。

不要把上下文浪费在解释基础 WXML、WXSS、TypeScript 语法上，除非当前代码库确实需要。这个技能的重点是避免错误架构和平台不匹配。

## 必读规则

在创建或编辑小程序文件之前，必须阅读：

- `references/conversion-rules.md`

该文件是页面拆分、`app.json`、原生导航栏、`tabBar`、跳转 API、安全区、资源和验收清单的转换契约。

## 工作流程

1. 识别原型来源：HTML、React、Vue、静态截图或已有 Web App 文件。
2. 将原型中的 screen/route 映射为真实小程序页面。不要用一个 `index` 页面加本地状态模拟多页面。
3. 先设计 `app.json`：`pages`、`window`、`tabBar`。
4. 在 `miniprogram/pages/**` 下为每个页面创建独立目录。
5. 页面标题默认放进页面 `.json`，除非用户明确要求自定义顶部导航栏。
6. 底部主导航必须放进 `app.json tabBar`，不要在 WXML 里手写底部导航。
7. 实现页面内容和本地 mock 数据；除非用户要求后端，否则不要假设后端存在。
8. 每个页面跳转都使用正确的微信小程序 API。
9. 为 tab 页面和固定底部操作栏页面添加安全区 padding。
10. 运行静态检查；条件允许时打开微信开发者工具验证导航和 UI 交互。

## 强制规则

- 不要为多页面应用构建单页状态机。
- 不要把 Web `Header` 复制到每个页面里做假顶部导航。
- 不要把 Web `BottomNav` 复制进 WXML。
- 不要用 `wx.navigateTo` 打开 `tabBar` 页面。
- 不要通过 `wx.switchTab` 传 query 参数；使用 storage 或小型本地 store。
- 不要让固定底部栏遮挡内容或原生 tabBar。
- 不要依赖远程 tab 图标；`tabBar` 图标必须是本地文件。
- 不要遗漏每个页面 `.json` 的 `navigationBarTitleText`。

## 交付内容

转换完成后提供：

- `miniprogram/` 或现有小程序项目结构下的文件。
- 原型 screen 到小程序 page 的映射说明。
- 因微信平台规范导致的有意差异。
- 验证结果，包括 TypeScript/build 检查，以及已执行的微信开发者工具交互检查。


```

references/conversion-rules.md

```
# HTML/Web 原型转微信小程序通用规则

本参考文档只描述通用转换规范，不绑定任何具体项目、行业或业务页面。默认执行者已经知道基础 WXML、WXSS、TypeScript/JavaScript 语法；这里重点约束大模型容易忽略的微信小程序平台规则。

## 1. 先定架构

将 Web 原型中的页面级 screen/route 转换成真实小程序页面，不要做单页状态机。

推荐结构：

```text
miniprogram/
  app.json
  app.ts
  app.wxss
  pages/
    home/
      home.wxml
      home.wxss
      home.ts
      home.json
    list/
      list.wxml
      list.wxss
      list.ts
      list.json
    detail/
      detail.wxml
      detail.wxss
      detail.ts
      detail.json
    profile/
      profile.wxml
      profile.wxss
      profile.ts
      profile.json
  components/
  utils/
  assets/
    tab/
    icons/
    images/
```

实际页面名称必须根据原型业务调整。上面的 `home/list/detail/profile` 只是通用占位示例。

禁止用一个 `pages/index/index` 加 `currentPage`、`activeScreen`、`routeName` 等本地状态模拟整个 App。

## 2. app.json 是导航契约

必须先设计 `app.json`，再写页面实现。

通用示例：

```json
{
  "pages": [
    "pages/home/home",
    "pages/list/list",
    "pages/detail/detail",
    "pages/profile/profile"
  ],
  "window": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "应用名称",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#ffffff"
  },
  "tabBar": {
    "color": "#666666",
    "selectedColor": "#111111",
    "backgroundColor": "#ffffff",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "首页",
        "iconPath": "assets/tab/home.png",
        "selectedIconPath": "assets/tab/home-active.png"
      },
      {
        "pagePath": "pages/list/list",
        "text": "列表",
        "iconPath": "assets/tab/list.png",
        "selectedIconPath": "assets/tab/list-active.png"
      },
      {
        "pagePath": "pages/profile/profile",
        "text": "我的",
        "iconPath": "assets/tab/profile.png",
        "selectedIconPath": "assets/tab/profile-active.png"
      }
    ]
  }
}
```

规则：

- `pages` 必须声明所有页面。
- `tabBar` 只放主入口页面。
- 不要把详情页、表单提交页、结果页、详情二级页等流程页面放进 `tabBar`。
- `tabBar.list` 保持 2 到 5 项。
- 生产级 UI 必须提供本地 `iconPath` 和 `selectedIconPath`。
- 如果暂时没有图标资源，必须在交付说明里明确标记为未完成的视觉资产。

## 3. 页面拆分规则

Web 原型中常见的结构：

```text
App
  Header
  CurrentScreen
  BottomNav
```

转换后应该变成：

```text
app.json
  window
  tabBar

pages/
  page-a/
  page-b/
  page-c/
```

拆分判断：

- Web router 中的一级 route 通常是小程序页面。
- 可被分享、回退、直接进入的 screen 应该是小程序页面。
- 仅在当前页面内部切换的小块内容，可以保留为组件或局部状态。
- 弹窗、筛选器、抽屉、步骤中的局部模块，不要盲目拆成页面。

## 4. 顶部导航转换规则

不要直接把 Web Header 复制进 WXML 做假顶部导航。

默认做法：

- 使用小程序原生导航栏。
- 页面标题写入每个页面的 `.json`：

```json
{
  "navigationBarTitleText": "页面标题"
}
```

页面内容区可以保留：

- 副标题
- 地理位置
- 搜索栏
- 筛选条件
- 业务状态
- banner/hero 文案
- 页面内操作按钮

这些通常不应该变成自定义顶部导航。

只有用户明确要求完全自定义顶部视觉时，才使用自定义导航。使用自定义导航时必须：

- 设置 `"navigationStyle": "custom"`。
- 处理状态栏高度。
- 处理微信胶囊按钮位置和安全距离。
- 添加顶部安全区。
- 在多机型上验证。

## 5. 底部导航转换规则

Web 原型中的底部主导航组件必须转换成 `app.json tabBar`。

不要创建：

```text
components/bottom-nav
pages/* 里的全局底部导航 WXML
每个页面里 position: fixed 的底部主导航
```

允许保留的底部区域：

- 当前页面独有的提交栏。
- 当前页面独有的购买/确认/保存操作栏。
- 非主导航性质的底部工具栏。

但这些底部操作栏不能和原生 tabBar 重叠。

## 6. 页面跳转 API 规则

根据目标页面类型选择 API。

```ts
// 普通页面
wx.navigateTo({ url: '/pages/detail/detail?id=123' })

// tabBar 页面
wx.switchTab({ url: '/pages/home/home' })

// 提交完成后替换当前页
wx.redirectTo({ url: '/pages/result/result?id=123' })

// 原生返回
wx.navigateBack()
```

重点：

- `wx.switchTab` 不能携带 query 参数。
- 如果需要切到 tab 页并带筛选、搜索、定位或临时状态，用小型本地 store 或 `wx.setStorageSync` 暂存，再在 tab 页 `onShow` 消费。
- 不要用 `wx.navigateTo` 打开 tabBar 页面。
- 不要在小程序转换后继续依赖 Web router。

## 7. 跨 tab 状态传递

当 Web 原型中存在“从 A 页面进入某个 tab 并带参数”的逻辑时，小程序要改写。

推荐模式：

```ts
// utils/navigation-state.ts
let pendingState: Record<string, unknown> | null = null

export function setPendingState(value: Record<string, unknown>) {
  pendingState = value
}

export function popPendingState() {
  const value = pendingState
  pendingState = null
  return value
}
```

使用：

```ts
setPendingState({ keyword: 'abc', filterId: 'x' })
wx.switchTab({ url: '/pages/list/list' })
```

在目标 tab 页：

```ts
onShow() {
  const pending = popPendingState()
  if (pending) {
    this.setData({ ...pending })
  }
}
```

也可以用 `wx.setStorageSync`，但要及时消费和清理，避免旧状态污染新页面。

## 8. 无后端时的数据状态

如果后端暂不在范围内：

- 将本地 mock 数据和状态放在 `utils/`。
- 使用 `wx.setStorageSync` 和 `wx.getStorageSync` 持久化需要保留的本地状态。
- 数据结构尽量接近未来后端 DTO。
- 除非用户要求 API 脚手架，否则不要制造假的网络请求。

通用 store 可以包含：

```text
getItems()
getItem(id)
filterItems(filter, query)
getLocalState()
updateLocalState(next)
createRecord(payload)
getRecords()
getRecord(id)
setPendingState()
popPendingState()
```

具体命名必须根据业务调整。

## 9. 固定底部栏和安全区

有原生 tabBar 的页面需要底部 padding：

```css
.tab-page {
  padding-bottom: calc(156rpx + env(safe-area-inset-bottom));
}
```

有固定底部操作栏的页面需要给内容区留足空间：

```css
.with-fixed-action {
  padding-bottom: calc(176rpx + env(safe-area-inset-bottom));
}
```

固定底部栏示例：

```css
.fixed-action-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22rpx 30rpx calc(22rpx + env(safe-area-inset-bottom));
}
```

如果 tabBar 页面同时有固定操作栏：

```css
.tab-fixed-action-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(112rpx + env(safe-area-inset-bottom));
}
```

必须目测确认：

- 固定操作栏不遮挡关键内容。
- 页面内底部操作栏不和原生 tabBar 撞在一起。
- 列表最后一项可以滚到固定栏上方完整显示。

## 10. 视觉映射规则

优先保留产品信息架构，再保留装饰。

建议映射：

- Web hero/banner -> WXML 页面区块。
- Web card/list/grid -> WXML 卡片、列表或网格。
- Web badge/tag -> 小型文字标签。
- Web modal -> `wx.showModal`；如果设计强相关，再做自定义弹窗。
- Web toast -> `wx.showToast`，但避免长时间 toast 跨页面残留。
- Web tab/filter -> 页面内 `scroll-view`、segmented control 或普通筛选区。

如果和平台规范冲突，不要保留：

- 自定义 Web 底部主导航。
- 手机壳外框。
- 假状态栏。
- 假顶部标题栏。
- 与 tabBar 功能重复的悬浮主入口。

## 11. 资源规范

生产级小程序不能依赖随意的远程图片作为核心 UI。

规则：

- `tabBar` 图标必须是本地文件。
- 搜索、菜单、操作图标应使用本地资源或明确的图标方案。
- 远程业务图片只适合原型/测试；生产前必须说明域名/CDN 配置工作。
- 如果远程图片在开发者工具里失败，必须替换或本地化。

## 12. 样式转换规则

从 Web CSS 转 WXSS 时：

- 使用 `rpx` 做移动端尺寸适配。
- 不要照搬 Web 手机壳、外层 stage、浏览器模拟框。
- 不要依赖 `position: absolute` 还原整屏布局，优先使用自然页面流。
- 保留颜色、字号、圆角、阴影、间距的视觉意图，但服从小程序原生导航和 tabBar。
- 复杂 CSS 特性要确认小程序支持情况；不确定时使用更稳妥的布局。

## 13. 验收清单

交付前检查：

```text
[ ] app.json 声明了所有页面
[ ] app.json tabBar 只包含主入口页面
[ ] 每个页面都有独立目录和 .json 标题
[ ] WXML 中不存在假的全局底部导航
[ ] 不存在重复的假顶部导航，除非明确使用自定义导航
[ ] tab 页面使用 wx.switchTab
[ ] 非 tab 页面使用 wx.navigateTo / wx.redirectTo / wx.navigateBack
[ ] switchTab 的临时状态通过 store/storage 传递，而不是 URL query
[ ] tabBar badge 或动态 tab 状态符合业务需要
[ ] tabBar 图标是本地资源，或明确列为缺失资产
[ ] 固定底部栏不遮挡内容
[ ] tab 页面和底部操作页有安全区 padding
[ ] 原型核心模块没有遗漏
[ ] TypeScript/build 检查通过
[ ] 微信开发者工具能编译并跑通主流程
```

主流程验证要根据具体业务定义，例如：

```text
入口页 -> 列表/功能页 -> 详情/编辑页 -> 提交/保存 -> 结果页 -> 返回主入口
```

不要把某个项目的业务流程固化为通用技能规则。

## 14. 交付说明格式

完成后说明：

- 原型 screen 到小程序 page 的映射。
- 改动文件。
- 因微信平台规范导致的有意差异。
- 验证命令和结果。
- 剩余资源或生产就绪问题。


```

将这个技能放到项目的.codex/skills目录下面

接下来就可以执行生成页面指令了

```
阅读原型下页面，转换成小程序界面，数据使用模拟数据，地址使用小程序自带的功能实现
```

剩下的小程序图标可以用emoji替代

### 优化页面设计查找bug

然后就是优化页面设计以及查找bug，因为Codex APP 没有内置的小程序预览界面，所以要借助Computer use这个插件，让它模拟人类去打开小程序，去浏览当前的界面是否是正常。

### 添加数据和优化需求

```
使用微信者开发工具测试小程序ui交互是否有问题
```

```
在搜索到气的公开接口并添加进小程序，和完成几个预测模型
指北针添加西南北表盘，并添加星空方位速查。
添加海拔测量功能，带地点和坐标。
天气添加请求，不要再使用假数据同时切换日期有反应。
布局更加弹性化，不要一个模块一行，两个模块一行。
优化首页的信息展示布局
```
![image](https://lz.sinaimg.cn/mw690/a0871c02gy1ig02sck04jj216y0tutn0.jpg)

![image](https://lz.sinaimg.cn/mw690/a0871c02gy1ig03976nz8j217u12ytle.jpg)

### 对接后端需求

如果需要后端，可以在codex中让ai设计sql.md,并设计后端接口，这里做个纯前端展示足以，所以没有相关的设计
