# A re-introduction to JavaScript读后感(2)

这次算是认真的看完了一个关于JavaScript的文档，在之前的时候都是老师随意的教一些方法和框架的用法，没有认真的读完一篇全英文的文档，今天也算是达到了一个小目标，从头到尾读了一篇。在这里我想把这件事做个总结，也检验一下我学到了什么。

<!-- more -->

## Variables

说白了就三种变量关键字`let`,`const`,and`var`。在这三种变量中`let`和`const`是规定了代码块中的作用区域的，而var是函数外也可见的。如果声明了一个变量却没有给他赋值，他的类型一般是`undefined`。

```javascript
let a;
let name = 'Simon';
```

```javascript
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

```javascript
const Pi = 3.14; // variable Pi is set 
Pi = 1; // will throw an error because you cannot change a constant variable.
```

```javascript
var a; 
var name = 'Simon';
```

```javascript
// myVarVariable *is* visible out here 

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) { 
  // myVarVariable is visible to the whole function 
} 

// myVarVariable *is* visible out here
```

从ECMAScript2015来`let`和`const`允许你声明一个代码块范围的变量。

## Operators

JavaScript的操作我觉得和Java里的差不多就字符串上有些区别，+，-，*，/，%，这些都是基本的，还有+=，-=连加赋值和连减赋值。

```javascript
x += 5;
x = x + 5;
```

还有一个常用的++,--和其他语言大同小异。

总的来说还是很好上手的。

我没有体验过的则是`+`运算符，可以直接连接字符串，

```javascript
'hello' + ' world'; // "hello world"
```

同时如果将数字和字符串使用+号的话，他会先按，算子的类型进行变换，以第一个算子的类型准

```javascript
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
```

比较运算也是和常见的差不多`，> ,<,<=`都有，其中有一些挺有趣的结论。

```javascript
123 == '123'; // true
1 == true; // true
```

`==`这里默认是没有考虑类型的影响，需要进行类型的强比较的话可以使用`===`

```javascript
123 === '123'; // false
1 === true;    // false
```

同理`<=,<==`也差不了8

## Control structures

JavaScript的结构化控制和C家族的结构化语言很像，同样采用`if`,`else`

```javascript
var name = 'kittens';
if (name == 'puppies') {
  name += ' woof';
} else if (name == 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name == 'kittens meow';
```

在循环方面也有`while`和`do-whilel`两种关键字，第一种是很好的基础循环，第二种除非你希望在最后循环还会再运行一次。出口的位置不同的问题罢了。

JavaScript的`for`和C和java的挺像的，一行代码即可写出一个循环结构体的控制块。

```javascript
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

for-in

```javascript
for (let property in object) {
  // do something with object property
}
```

同样利用逻辑选择符`||`,`&&`可以方便的进行简单的逻辑处理，可以有效地在进行处理之前确认空对象，

```javascript
var name = o && o.getName();
```

```js
var name = cachedName || (cachedName = getName());
```

```js
var allowed = (age > 18) ? 'yes' : 'no';
```

这是一个语法糖和C，Java差不多的。

同样`switch`可以通过选择数字和字符串来进行不同的分支。

```js
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```

如果没有加`break`在其后的话，在选择那一句后，下面的代码会继续进行执行。

一般会使用`default`语句来保证其选择的部分可预见性的进行处理。

在其内部比较的地方默认使用的是===

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## Objects

JavaScript是一门面向对象的语言，对象可以通过命名的值进行匹配，就像...

- Dictionaries in Python.
- Hashes in Perl and Ruby.
- Hash tables in C and C++.
- HashMaps in Java.
- Associative arrays in PHP.

在事实上，这种数据结构广泛的应用证明这种方式是多功能的，任何东西在JavaScript中都算做对象。

允许你创造任意复杂性的数据结构。

```js
var obj = new Object();
```

```js
var obj = {};
```

这两种声明方式在语义上是等价的。第二种更简洁和便捷。这种规则语法在JSON中也是核心的部位。

将一个对象进行实例化。

```js
var obj = {
  name: 'Carrot',
  for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12
  }
};
```

属性的入口可以被联系起来。

```js
obj.details.color; // orange
obj['details']['size']; // 12
```

接下创建的是一个对象原型，和一个实例化的you

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person('You', 24); 
// We are creating a new person named "You" aged 24.
```

在建立过一次后，对象的属性可以被读取采用两种方式。

```js
// dot notation
obj.name = 'Simon';
var name = obj.name;
```

```js
// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```

点记号法和括弧记号法。

这两种同样也是等价的。但是在对象的属性命名中如果恰好和预留字碰撞了的话。

```js
obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine
```

## Arrays

数组在JavaScript中也算的上市一种特殊的对象了。

一般会使用`[]`来读取数组，同样还有一个方便的属性`length`。

```js
var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3
```

快速创建数组的另一种方式

```js
var a = ['dog', 'cat', 'hen'];
a.length; // 3
```

`array.length`计算的是数组的总长度。

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

如果你指向一个不存在的数组下标，你会得到`undefined`的返回值

一般使用数组和循环

```js
for (var i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

ES2015引入更简洁的

`for..of`

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

同样可以使用重复的`for...in`

循环，这个不根据数组的元素来执行循环，依靠的是数组的下标，此外，如果增加个新属性对于`Array.prototype`，它也有可能新加个循环在这之上。所以一般不推荐使用`for..in`

另一种方式进行迭代，在ES5中是[forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```

关于数组的方法，想要在其中添加一个元素

```js
a.push(item);
```

| Method name                                          | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `a.toString()`                                       | Returns a string with the `toString()` of each element separated by commas. |
| `a.toLocaleString()`                                 | Returns a string with the `toLocaleString()`of each element separated by commas. |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | Returns a new array with the items added on to it.           |
| `a.join(sep)`                                        | Converts the array to a string — with values delimited by the `sep` param |
| `a.pop()`                                            | Removes and returns the last item.                           |
| `a.push(item1, ..., itemN)`                          | Appends items to the end of the array.                       |
| `a.reverse()`                                        | Reverses the array.                                          |
| `a.shift()`                                          | Removes and returns the first item.                          |
| `a.slice(start[, end])`                              | Returns a sub-array.                                         |
| `a.sort([cmpfn])`                                    | Takes an optional comparison function.                       |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | Lets you modify an array by deleting a section and replacing it with more items. |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | Prepends items to the start of the array.                    |
