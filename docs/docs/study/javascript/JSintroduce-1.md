# A re-introduction to JavaScript读后感(1)

这次算是认真的看完了一个关于JavaScript的文档，在之前的时候都是老师随意的教一些方法和框架的用法，没有认真的读完一篇全英文的文档，今天也算是达到了一个小目标，从头到尾读了一篇。在这里我想把这件事做个总结，也检验一下我学到了什么。

<!-- more -->
## Overview

Javascript无非是一种面向对象的脚本语言，没有输入和输出的概念

常用的类型有

- Number
- String
- Boolean
- Function
- Object
  - Function
  - Array
  - Date
  - RegExp
- Symbol（new in ES2015
- null
- undefined

## Numbers

数字在Javascript中使用的IEEE 754标准下的双精度64位,所以有个很有意思的现象在Javascript中没有整型。

同时JS也支持标准数学工具，使用Math；即可方便的使用其中的数学工具。 例如：

``` javascript
Math.sin(3.5)
```

还可以用parseInt() 函数将字符型转换为integer，例如

``` javascript
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```

如果parseInt()函数不加后面的进制选择的话，对待的字符串就直接以其开头的字符来判断了，例如

``` javascript
parseInt('010');  //  8
parseInt('0x10'); // 16
```

或许想让二进制转到整型可以这样做，

``` javascript
parseInt('11', 2); // 3
```

也可以使用+来让字符串变为数字

``` javascript
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```

这里有种特殊的值为NaN，起源于IEEE 754中无法表示的值，同时精度也达不到，例如

``` javascript
parseInt('hello', 10); // NaN
```

使用NaN做其他运算结果也为NaN

``` javascript
NaN + 5; // NaN
```

还有一个判断函数

``` javascript
isNaN(NaN); // true
```

JS内还含有两个特殊的值Infinity and -Infinity，例如

``` javascript
1 / 0; //  Infinity
-1 / 0; // -Infinity
```

同样拥有判断函数

``` javascript
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

## Strings

String 在Javascript中是Unicode字符集，更精确来说是一系列的UTF-16 code units
这里方便的使用legth属性来得出字符串的长度

``` javascript
'hello'.length; // 5
```

其他属性也有例如

``` javascript
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'mars'); // "hello, mars"
'hello'.toUpperCase(); // "HELLO"
```

## 其他类型

其他还有null和undefined，这两种可要注意区分，null代表没有值，而undefined则是代表一个未被初始化的值，理论上来说undefined是个常量。

还有true和false他们遵守着以下规则

- false, 0, empty strings (""), NaN, null, and undefined all become false.
- All other values become true.

可以利用 Boolean() 来进行判断

``` javascript
Boolean('');  // false
Boolean(234); // true
```

布尔操作和C和Java差不多，都有&&（与，||（或，！（非
