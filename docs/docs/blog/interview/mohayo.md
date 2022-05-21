# 米哈游信息系统

## 手写 防抖节流

## react diff 算法

## prefetch preload

preload 和 prefetch 的本质都是预加载，即先加载、后执行，加载与执行解耦。 2、preload 和 prefetch 不会阻塞页面的 onload。 3、preload 用来声明当前页面的关键资源，强制浏览器尽快加载；而 prefetch 用来声明将来可能用到的资源，在浏览器空闲时进行加载。

## 重绘与重排

## 站点优化

## react useEffect 闭包

## 如何做弱网环境资源请求策略

ServerWork，资源预处理，PWA

## React 函数式组件闭包问题

## Cache-Control: no-cache 和 no-store

no-cache，浏览器和缓存服务器都不应该缓存页面信息；
public，浏览器和缓存服务器都可以缓存页面信息；
no-store，请求和响应的信息都不应该被存储在对方的磁盘系统中；
must-revalidate，对于客户机的每次请求，代理服务器必须想服务器验证缓存是否过时

## 多个包相互依赖管理

monorepo，pnpm，lerna

## pixivic

## vue 和 react

## 发布订阅模式和观察者模式

观察者模式里，只有两个角色 —— 观察者 + 被观察者
而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的 —— 经纪人 Broker
往更深层次讲：

观察者和被观察者，是松耦合的关系
发布者和订阅者，则完全不存在耦合
从使用层面上讲：

观察者模式，多用于单个应用内部
发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件
