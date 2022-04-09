# A re-introduction to JavaScript读后感(3)

这次算是认真的看完了一个关于JavaScript的文档，在之前的时候都是老师随意的教一些方法和框架的用法，没有认真的读完一篇全英文的文档，今天也算是达到了一个小目标，从头到尾读了一篇。在这里我想把这件事做个总结，也检验一下我学到了什么。

<!-- more -->

## Functions

沿着对象，函数是核心部分关于理解JavaScript，最基本的函数有可能不会很简单。

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

这是一个关于求和函数的声明，`return`可以返会值在任何时候，如果么有返回的个空值或者没有返回值，那么JavaScript返回的是`undefined`

如果传入的参数不正确的话，或者为空，默认传递的是`undefined`

```js
add(); // NaN
// You can't perform addition on undefined
```

传入过多的元素超过期望

```js
add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

像是一个类似数组的对象。可以改写之前的add函数

```js
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

同样还可以建立一个求平均值函数

```js
function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

但是这个看起来有点唠叨，而且不利于理解。同样可以使用一个args来改写用for-of来进行循环

```js
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

同样的也可以传数组来实现求平均值的操作。

```js
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

这个`apply()`用于数组，将数组视为一个arguments。

JavaScript允许创建一个匿名函数

```js
var avg = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

这个语义上等价与`function avg()`，而且赋予我们去定义函数在任何地方，像是开了个小玩笑。

```js
var a = 1;
var b = 2;

(function() {
  var b = 3;
  a += b;
})();

a; // 4
b; // 2
```

同样也有其作用域

JavaScript允许函数递归，这一点在处理一些特殊数据结构时特别有用，例如浏览器的DOM；

```js
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
```

那么问题来了，匿名函数如何递归呢？

这时可以使用[IIFEs (Immediately Invoked Function Expressions)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)来为其命名

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

## Custom objects

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last
  };
}
function personFullName(person) {
  return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
  return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

这时一个将对象和函数糅合的例子，但是有些冗余，不如直接将函数也当作一个对象

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

此处使用了关键字`this`表示当前的代码块的对象，如果不用的话，指代的就是全局的对象

例子

```js
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
```

这时没有全局变量叫做`first`or`last`所以，想怎么只会得到`undefined`

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
```

这时又有个新关键字`new`，他和`this`有着很大的联系，它创造一个空白对象，使用new去使用函数，被叫做构造函数。

关于人的对象变得更完善，但是每次创建一个人对象时会创建两个品牌和新函数对象

这时可以把函数也揉进对象的属性中。这样我们创建方法函数一次，同样分配他们在构造函数之中。

```js
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

还可以更进一步使用原型链，任何通过原型链去登记的都可以通过这个构造器的实例化这个`this`对象。

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};
```

通过这个可以在程序运行中添加额外的方法

```js
var s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

同样可以在其中构造一些有趣的方法，反转字符串

```js
var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

```js
'This can now be reversed'.reversed(); // desrever eb won nac sihT
```

同样原型链可以让对象有些特殊的方法，使用字符串

```js
var s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

之前的`avg.apply()`有一个空的第一个argument，现在可以重游它了

```js
function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}
```

使用的方法就是`new`这不是一个真正的副本，他没有原型链

```js
var bill = trivialNew(Person, 'William', 'Orange');
```

equal

```js
var bill = new Person('William', 'Orange');
```

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
```

同样`apply()`的姐妹函数名字叫call函数放回需要使用`this`

> Inner functions

这个范围的限制，给了很好的功效去写更多可维护函数。

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b; 
  }
  return nestedFunc(); // 5
}
```

## Closures

闭包，JavaScript的特性，一个**闭包**就是一个函数和被创建的函数中的作用域对象的组合。高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。

```js
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var x = makeAdder(5);
var y = makeAdder(20);
x(6); // ?
y(7); // ?
```

调用 `makeAdder` 时，解释器创建了一个作用域对象，它带有一个属性：`a`，这个属性被当作参数传入 `makeAdder` 函数。然后 `makeAdder` 返回一个新创建的函数。通常 JavaScript 的垃圾回收器会在这时回收 `makeAdder` 创建的作用域对象，但是返回的函数却保留一个指向那个作用域对象的引用。结果是这个作用域对象不会被垃圾回收器回收，直到指向 `makeAdder` 返回的那个函数对象的引用计数为零。

这作用域对象组成了作用域链。

> 其中返回函数并没有立即执行，直到调用了它才开始执行，所以返回函数不要引用任何循环变量

```js
x(6); // returns 11
y(7); // returns 27
```

> 内存泄漏

使用闭包的一个坏处是，在 IE 浏览器中它会很容易导致内存泄露。JavaScript 是一种具有垃圾回收机制的语言——对象在被创建的时候分配内存，然后当指向这个对象的引用计数为零时，浏览器会回收内存。宿主环境提供的对象都是按照这种方法被处理的。

IE 浏览器有自己的一套垃圾回收机制，这套机制与 JavaScript 提供的垃圾回收机制进行交互时，可能会发生内存泄露。

> 总算是过了一遍，大部分看的都是英文，有些吃力，有些名词都挺想象的，查了字典也不太好理解。中文和英文文档还有区别。有些难受

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript>
