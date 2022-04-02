---
title: Pixivic架构
date: '2022-04-1 22:02:11'
---

# Pixivic架构

## 主网站

[https://pixivic.com/](https://pixivic.com/)

[hyperMoss/pixivic-pc: ✨pixivic.com power by vue (github.com)](https://github.com/hyperMoss/pixivic-pc)

### 流畅的虚拟列表

- 项目中多个地方都有使用，首页、搜索结果、相关画作推荐、收藏
- 需要一个轻量级，同样性能足够高效的虚拟列表。在github上找了个基于js的虚拟列表，魔改使用

### 用户系统

- 通过JWT进行权限的验证，同时通过AXIOS的拦截器进行接口权限拦截，更新
- 基于Vuex进行全局的一个用户状态的管理，在需要登录的时候方便的唤醒用户登录弹窗

### 图片显示系统

- 接口层面清洗掉不和谐的图片链接
- 图片根据显示的场景利用在全局注册的Vue.filter使用不同的清晰度的图片
- 通过判断当前浏览器是否支持webp，决定是否使用webp图片

### 常见的用户功能

- 逐步添加了收藏，评论，画集，QQ登录，用户推荐 等功能

### i18n

- 通过埋点发现有部分用户是境外IP，多语言方便其他语言用户使用

## SEO

[cheer-fun/pixivic-next: 给爬虫看的ssr网站 (github.com)](https://github.com/cheer-fun/pixivic-next)

- 使用SSR构建另一个跑在服务器上的前端页面
- 通过nginx识别UA是否为爬虫，如果为爬虫则将其访问代理到SSR页面上
- 标签语义化，每个页面都有独立的head信息，页面路径语义化

## 服务可用性检测

[服务可用性检测 · Discussion #1 · hyperMoss/pixivic-pc (github.com)](https://github.com/hyperMoss/pixivic-pc/discussions/1)

- 静态资源架设在国内外多个域名及CDN服务器上，需要找到当前解析的最快的一个域名下的静态资源
- 通过先访问一个简单的html网页，在其Script标签内使用一个原生实现的promise.any去找到当前最先返回的404图片资源，如果都失败则弹出联系方式

## 小窗

[cheer-fun/pixivic-outside: 🌈A pixivic window for other website (github.com)](https://github.com/cheer-fun/pixivic-outside)

- 作为其他网站的挂件实现的一个ifarme，提供额外的流量入口
