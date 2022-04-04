---
title: 虾皮IM一面
date: '2022-04-2 14:02:11'
---


## 变量提升

```js
foo()
var foo = function(){}
```

这个是会报错的

## 作用域

```js
var n = 1;

(function foo(){
     n =2
    console.log(n)
}())

console.log(n)
```

## instanceof 实现

`object.__proto__ === Object.prototype`

```js
function _instanceof(L,R){
  let Ro = R.prototype
  L = Object.getPrototypeOf(L)
  while(L){
    if(L === Ro) return true
    L = Object.getPrototypeOf(L)
  }
    return false
}
```

## http2.0 http3.0

http2.0基于http1.1，保持了长连接和

http3.0 即QUIC
基于UDP协议

## 异步

以下代码能否正常运行，点击事件能正常处理吗？

```js
function foo(){
  return Promise.resolve().then(foo)
}
foo()
```

## 事件循环

```js
setTimeout(()=>{
  console.log('8')
},0)
Promise.resolve().then(()=>{
  console.log('7')
})

function fn1(){
  return new Promise(resolve=>{
    console.log('5')
    resolve()
    console.log('6')
  })
}

async function fn2(){
  console.log('1')
  await fn1()
  console.log('2')
}
fn2()

console.log('3')
```

## 为什么React函数组件需要引入React

JSX将代码编译为`React.createElement()`形式，所有需要引入React

## vue 为什么data 用函数声明而不是对象

## v8的JS执行过程

## electron底层原理

## tree sharking 实现原理

## ESM和CJS区别，为什么ESM可以tree sharking

应该回答的是ESM不能动态加载，而是需要编译时加载，所以可以做tree sharking

## js垃圾回收机制

## 背包问题

## 计算最少硬币书凑够相应的钱数
