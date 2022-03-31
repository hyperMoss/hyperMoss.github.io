---
title: 常见的设计模式
date: '2022-03-30 00:01:23'
---

## 发布订阅模式

父子组件如何通信，如何做事件管理

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
      this.event[name].forEach((item) => item.apply(this, ...args));
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

## LazyMan

带异步的链式调用

```js
class lazyManClass {
  constructor(name) {
    this.name = name;
    this.queue = [];
    console.log(`Hi, I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }
  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒`);
        this.next();
      }, time * 1000);
    };
    this.queue.unshift(fn);
    return this;
  }
  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒`);
        this.next();
      }, time * 1000);
    };
    this.queue.push(fn);
    return this;
  }
  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food}`);
      this.next();
    };
    this.queue.push(fn);
    return this;
  }
  next() {
    const fn = this.queue.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new lazyManClass(name);
}
LazyMan('tony').eat('lunch').eat('dinner').sleepFirst(2).sleep(4).eat('supper');
```

## Scheduler 调度器

管理异步任务的并发操作

JS 实现一个带并发限制的异度调度器 Scheduler，保证同时运行的任务最多有两个。完善下面代码中的 Scheduler 类，使得以下程序能正确输出

```js
class Scheduler {
  add(promiseMaker) {}
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// output：2 3 1 4
// 一开始，1，2两个任务进入队列。
// 500ms 时，2完成，输出2，任务3入队。
// 800ms 时，3完成，输出3，任务4入队。
// 1000ms 时，1完成，输出1。
```

```js
class Scheduler {
  constructor() {
    this.waitList = [];
    this.executorList = [];
    this.maxExecutorNum = 2;
  }

  add(promiseMaker) {
    if (this.executorList.length < this.maxExecutorNum) {
      this.run(promiseMaker);
    } else {
      this.waitList.push(promiseMaker);
    }
  }

  run(promiseMaker) {
    const len = this.executorList.push(promiseMaker);
    const index = len - 1;
    promiseMaker().then(() => {
      this.executorList.splice(index, 1);
      if (this.waitList.length > 0) {
        this.run(this.waitList.shift());
      }
    });
  }
}
```
