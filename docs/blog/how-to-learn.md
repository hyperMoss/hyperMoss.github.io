---
title: 我如何学习
date: '2021-07-03 22:01:23'
---

说来惭愧,学习方面事情一直没有怎么的去刻意练习,和自律,更多的是从具体的场景,需求,兴趣出发去找到答案.

## 按图索骥

首先是早上想着清空一下收藏夹里的内容,这个《腾讯代码安全指南》[secguide/JavaScript安全指南.md at main · Tencent/secguide (github.com)](https://github.com/Tencent/secguide/blob/main/JavaScript%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97.md#1)

> 1.5.1【必须】使用安全的前端跨域通信方式
> 具有隔离登录态（如：p_skey）、涉及用户高敏感信息的业务（如：微信网页版、QQ空间、QQ邮箱、公众平台），禁止通过document.domain降域，实现前端跨域通讯，应使用postMessage替代。

从中通过如何跨域通讯了解到,document.domain原来还可以降域.再到推荐使用postMessage方法来实现前端跨域通讯.

遂在MDN搜索了下postMessage方法.[postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)用作两个不同窗口直接的通信,其中这样一段话引起了我的注意.

> message
将要发送到其他 window的数据。它将会被[结构化克隆算法](https://developer.mozilla.org/en-US/docs/DOM/The_structured_clone_algorithm)序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。

**结构化克隆算法**引起了注意,刚好最近有朋友在群里在发他准备面试的信息,其中提了一下用dfs,bfs去进行深拷贝以及JSON方法的缺点等等.我就想到这个会不会就是我们所忽略的拷贝好方法.

于是继续google,在stackoverflow中找到了答案,
[How is structured clone algorithm different from deep copy](https://stackoverflow.com/questions/40488190/how-is-structured-clone-algorithm-different-from-deep-copy).

> Structued Clone Algorithm is one of the way to deep copy your JavaScript object. Since this api is not exposed directly so we have alternate ways by which we can use it.

其中再根据答案中的引用找到了,一篇博客,其中就有三种方法能使用这个浏览器中的深拷贝方案.

[Surma blogpost](https://dassur.ma/things/deep-copy/)
又学会新的深拷贝方式.
那么这么好用的api为什么不直接暴露出来给开发呢?
[Synchronous clone = global.structuredClone(value, transfer = []) API](https://github.com/whatwg/html/issues/793)
现在还在讨论中.说不定以后能直接在浏览器上更方便的使用起来.

## 实践出真知

更多的时候是在做业务需求中学习.在这其中,可以充分发挥自己的创造力和搜索能力.
比如做一个大表单的填写校验,其中包含了几个小的表单,需要使用小表单中的ref中封装的方法去连续校验并跳转到相应的错误提示位置.

其中的表单组件并不是组件库的表单组件,而且在其之上又封装了一层,这时就需要将其内部所用的from组件的ref方法通过穿透出来到那个被封装的组件中去.
这时候就需要在google上搜一搜,找到了`useImperativeHandle`这个api,就看看文档使用了这个API.就像突然发现了新大陆一样.ref的传递方法就这样找到了,之后又往同事群里分享一下,这种方法.

校验完的跳转提示,根据之前的项目经验直接使用Element.scrollIntoView() API就行.

这也是项目中场景带来的知识,感觉比刻意去背hooks API文档,去背元素的方法,学习起来更有效率.同时也能在场景中不断的去强化记忆.正如一位同事说的,优秀的工程师都是项目喂出来的.
