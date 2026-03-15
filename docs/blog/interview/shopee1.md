# 虾皮market

## JS的几种基本类型

基本类型：`undefined`, `null`, `boolean`, `number`, `string`, `symbol`,`bigInt`

引用类型：`object`(main), `function`, `array`, `date`, `regexp`, `error`

`array`的`push`和`unshift`性能区别？
`push`性能更好，因为不需要对之后的所有元素都进行位移，或变更索引。
这里以为数组是连续存储的其实是个错误，JS的数组是由引用对象生产的。index相当于对象的key，数组存在堆中，不一定是连续存储。

[深究 JavaScript 数组 —— 演进&性能](https://juejin.cn/post/6844903494189580302)
> 数组不是以一段连续的区域存储在内存中，而是一种哈希映射的形式，它可以通过多种数据结构实现，其中一种是链表。

## 说说原型链

原型链的本质是拓展原型搜索机制。每个实例对象都有一个私有属性 `__proto__`。该属性指向它的构造函数的原型对象 `prototype`。该原型对象的 `__proto__` 也可以指向其构造函数的 `prototype`。依次层层向上，直到一个对象的 `__proto__` 指向 `null`。根据定义，`null` 没有原型，并作为这个原型链中的最后一个环节。

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或直到这个链表结束`（Object.prototype.__proto__ === null）`。

## API

**Object.is()用过吗？说说其原理?**

```js
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```

**instanceof 实现**

object.**proto** === Object.prototype

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

**Array.isArray 实现**

说了下使用 `Object.prototype.toString.call(arg) === '[object Array]'`

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 跨域

跨域问题的来源是浏览器为了请求安全而引入的基于同源策略的安全特性。当页面和请求的协议、主机名或端口不同时，浏览器判定两者不同源，即为跨域请求。需要注意的是跨域是浏览器的限制，服务端并不受此影响。当产生跨域时，我们可以通过 JSONP、CORS、postMessage 等方式解决。

[](https://hzfe.github.io/awesome-interview/book1/browser-cross-origin)

## 事件冒泡

捕获从外到内，先后冒泡
`addEventListener` 第三个参数，就是决定监听的实捕获还是冒泡，默认是 `false`，即监听冒泡。
![](https://pic3.zhimg.com/80/v2-782f135f7deef02980c8fcbceca3a2d2_720w.jpg)

## 写一个深拷贝

```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }

  let result = {};
  // 初始化返回结果
  if (
    obj instanceof Array ||
    // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    Object.prototype.toString(obj) === "[object Array]"
  ) {
    result = [];
  }
  // 防止循环引用
  map.set(obj, result);
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  }

  // 返回结果
  return result;
}
```

## 箭头函数的this指向

作用域问题

**箭头函数**
> 箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。

同时不受`call,apply,bind`影响。

**普通函数**
> this 永远指向 调用 包含 自己（this本身） 的 函数 对应的对象。

## 事件循环

具体题目记不清了，自己编了个

```js
Promise.resolve().then(() => {
  // 微任务1
  console.log("4");
  setTimeout(() => {
    // 任务2
    console.log("5");
  }, 0);
});
setTimeout(() => {
  // 任务1
  console.log("7");
  Promise.resolve().then(() => {
    // 微任务2
    console.log("8");
  });
}, 0);

async function fn1(){
  return new Promise((resolve=>{
    console.log('1')
    resolve()
    console.log('2')
  }))
}

async function fn2() {
  // 任务3
  console.log("9");
  await fn1();
  // 微任务3
  console.log("10");
};
fn2()
console.log('hello')
// 9 1 2 hello  4 10 7 8 5
```

注意promise的resolve函数调用只要不是.then内都是随函数resolve执行立即调用的。
然后进行宏任务处理（执行基本代码算宏任务）
再所有微任务进队列，遇到宏任务进队列
执行所有微任务
然后线程交给渲染管线，渲染管线结束，进入下一次渲染。

## 不定宽高垂直居中

- flex justifyContent alginItem
- grid margin auto
- 相对定位  left 50% top 50%  transform: translate(-50%, -50%)
- table text-align center vertical-align middle

## http 缓存

HTTP 缓存主要分为强缓存和协商缓存。

强缓存可以通过 Expires / Cache-Control 控制，命中强缓存时不会发起网络请求，资源直接从本地获取，浏览器显示状态码 200 from cache。

协商缓存可以通过 Last-Modified / If-Modified-Since 和 Etag / If-None-Match 控制，开启协商缓存时向服务器发送的请求会带上缓存标识，若命中协商缓存服务器返回 304 Not Modified 表示浏览器可以使用本地缓存文件，否则返回 200 OK 正常返回数据。

[http-缓存](https://hzfe.github.io/awesome-interview/book2/network-http-cache)

## cookie

> HTTP Cookie 机制是 HTTP 协议无状态的一种补充和改良

服务端返回`Set-Cookie`，客户端请求头带上`Cookie`

会话 `Cookie` 有个特征，客户端关闭时 `Cookie` 会删除，因为它没有指定`Expires`或 `Max-Age` 指令。
设置后，即使页面关闭，下次打开只要没有过期，依然能维持登录状态

安全相关属性有`httpOnly`为true表示只有http请求才能访问，`secure`为true表示只有https请求才能访问，`SameSite`限制第三方cookie的使用

## localStorage和sessionStorage

浏览器长期缓存，和浏览器窗口关闭时自动清除。

## 实现一个 EventEmitter

```js
class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(name, fn) {
    if (!this.event[name]) {
      this.event[name] = [];
    }
    this.event[name].push(fn);
  }
  off(name, fn) {
    if (this.event[name]) {
      this.event[name] = this.event[name].filter((item) => item !== fn);
    }
  }
  emit(name, ...args) {
    if (this.event[name]) {
      this.event[name].forEach((item) => item.apply(this, args));
    }
  }
  once(name, fn) {
    const only = () => {
      fn.apply(this, arguments);
      this.off(name, only);
    };
    this.on(name, only);
  }
}
```
