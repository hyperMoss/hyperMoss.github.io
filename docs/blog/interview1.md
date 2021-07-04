---
title: 小前端的笔试题1
date: 2019-03-20 13:10:50
tags: [Date Structure,JavaScript]
---


本文来说作者有两位，除了我还有一位叫（天天十点睡）的老姐，里面的内容由我两共同完成。

主要记录了一些基本的笔试题。

<!-- more -->

## 富途



富途都是老姐去笔试过的，我就用老姐的东西了.

### 数据处理 10000.2 => $10,000.20

中间用了正则取到最后两位小数，最后整数部分使用`toLocaleString`方法将整数部分规范化

```js
function processData (num) {
  let a = (Math.floor(num * 100) / 100).toFixed(2) // 保留两位
  let decimalPart = a.replace(/(\d+)\.(\d+)/, '.$2')
  let integerPart = parseInt(a).toLocaleString() // 整数部分加逗号
  let str = '$' + integerPart + decimalPart
  return str
}
```



###  大整数相加

超过表示范围的数相加，没什么好说的，直接转字符串，再逐位计算。

```js
function sumStrings (a, b) {
  var res = ''

  var c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = (c % 10) + res
    c = c > 9 // 骚操作，类似语法糖，将c赋值为布尔吧变量了
  }
  return res.replace(/^0+/, '') // 删除res前面的0
}
```





## 作业帮



### 数组位移0

把一个数组中的所有的0移动到数组尾

这里我采用了类似冒泡的方法，遇到非0将其前移即可，老姐采用了数组的`indexO`f属性和`splice`，`push`和`concat`方法

```js
//老姐方法
function processAry(arr)  {
    var index = arr.indexOf(0)
    let zeros = []
    while(index!==-1) {
    arr.splice(index,1)
    index = arr.indexOf(0)
    zeros.push(0)
    }
    return arr.concat(zeros)
    }
//我方法
function processAry2(ary) {
    for (var i=0,j=0;i<ary.length;i++)
    if(ary[i]){
        swap(ary,i,j++);
    }
    return ary
}

function swap(ary, i, j) {
    t= ary[i];
    ary[i] = ary[j]
    ary[j] =t;
    return ary;
}
```



## 密码合格检验

输入一串字符串需要满足以下条件

1. 长度不得小于8位
2. 大写字母，小写字母，数字，符号，不得少于3种搭配
3. 不得出现重复字符子串



```js
//老姐的
function test2(str) {
    let len = str.length
    if(len < 8) {
    return false
    }
    const type = [0,0,0,0]
    const arr = str.split('')
    const newarr = [...new Set(arr)]
    if(arr.length !== newarr.length) return false // 判断是否有重复
    for(item of arr) {
    if(item >= 'A' && item <= 'Z') type[0] = 1
    else if(item >= 'a' && item <= 'z') type[1] = 1
    else if(item >= '0' && item <= '9') type[2] = 1
    else type[3] = 1
    if(type[0] + type[1] + type[2] + type[3] >= 3) return true
    }
    return false
    // return !!(type.filter(item => item > 0).length)
    }


//我加了点骚操作 用了下正则，还有特殊的数组求和操作
function passwordtest(str){
    let l=str.length;
    if (l<8){
        return false;
    }

    const type = [0,0,0,0]
    const arr = str.split('')
    const newarr=[...new Set(arr)]
    if(arr.length !==newarr.length) {
        return false;
    }
 
        if (str.match(/[a-z]/g)) type[0]=1
        else if (str.match(/[0-9]/g)) type[1]=1
        else if (str.match(/[A-Z]/g)) type[2]=1
        else type[3]=1
        if (eval(type.join('+'))>=3) return true;
    
    return true;
}
```



## 阿里



都是些很基础的东西，但是我还是萌新所以.......

### 数组求最值

数组求最值有四种写法，你可知道吗？（大雾）



```js
var arr =[2,1,4,5,6];

//用库函数
var max = Math.max.apply(null,arr);
var min = Math.min.apply(null,arr);

//排序
arr.stor();
var max = arr[arr.length-1];
var min = arr[0];

//字符串,不使用apply
var max = eval("Math.max(" + arr.join(',') + ")");


//使用遍历
arr.reduce(function(a,b) {
return a>b?a:b
})
```



### 数组降维打击

将一个高维数组还原成一维数组并输出

所有元素都是对象

老姐之前看过，我没见过，中间想到递归了，可惜不太熟悉JavaScript。老姐提供的答案如下。

```js
 //老姐给的格式化方法
function flat2(arr) {
        return arr.toString().split(',').map(item=> +item )
    }


//递归方法
function flat(arr) {
    var res = [];
    for (item of arr) {
        if (Array.isArray(item)) {
            res.push(...flat(item))
        } else {
            res.push(item);
        }
    }
    return res;
}

//尾递归方法
function flat(arr) {
        var res = [];
        var flag =0;
        for (item of arr) {
            if (Array.isArray(item)) {
                flag=1
                res.push(...item)
                console.log(res)
            } else {
                res.push(item);
            }
        }
        return flag? flat(res):res;
    }
       
console.log(flat([1,2,[3,[4,5]]]))

```

## 修订

1. 上面的数组降维有点像深拷贝的递归


```js
function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === "object") {
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        // 判断 obj 子元素是否为对象，如果是，递归复制
        if(obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

let a = [1, 2, 3, 4];
let b = deepClone(a);
a[0] = 2;
console.log(a, b);

// Console
// a = [2, 2, 3, 4];
// b = [1, 2, 3, 4];
```

[jsliang 的 2019 面试准备](https://juejin.im/post/5c8e4cd3f265da67c87454a0?utm_source=gold_browser_extension#chapter-two)



## 后记

如果以后还有笔试，会继续总结的，也不知道有没有什么好点的方法，整理起来这些东西。

感觉用一个思维导图的树状结构有可能会比较好，用了什么方法，都和实际题目联系起来。

JavaScript组件很多，库很多，有些蛇皮方法还得自己摸。