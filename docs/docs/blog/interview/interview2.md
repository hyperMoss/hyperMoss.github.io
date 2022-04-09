# 正则表达式+小前端的笔试题2

这次记录了下老姐二面富途笔试题，以及我看正则表达式的一些总结

<!-- more -->

## 创建正则表达式

使用一个正则表达式字面量，其由包含在斜杠之间的模式组成

```js
/*
   /pattern/flags
*/

const regex = /ab+c/;

const regex = /^[a-zA-Z]+[0-9]*\W?_$/gi;
```

此法可获得更好的性能

调用RegExp对象的构造函数,如下所示

```js
/* 
    new RegExp(pattern [, flags])
*/

let regex = new RegExp("ab+c");

let regex = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/, "gi");

let regex = new RegExp("^[a-zA-Z]+[0-9]*\\W?_$", "gi");
```

使用构造函数时,当你知道正则有可能改变,或者由另一个输入时推荐,以上的flags大概代表着正则的标志位,应用于不同的模式

## 编写正则表达式

正则表达式初衷是为了方便人们处理字符串,于是由各种各样的匹配逻辑.

### 使用简单模式

只是需要直接匹配一个字母,或空格,符号或者一个字符串的时候,可以使用`/abc/`这样的简单逻辑去匹配.

### 使用特殊字符

如果需要匹配的比直接匹配包含更多条件的字符串的时候,这时模式要包含特殊字符.

比如`/ab*c`匹配包含a和c中间存在0个或多个b的字符串

mdn的特殊字符表

|

### 使用插入语

任何正则表达式的插入语都会使这部分匹配的副字符串被记忆。一旦被记忆，这个副字符串就可以被调用于其它用途，如同 [使用括号的子字符串匹配](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%8B%AC%E5%8F%B7%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D)之中所述。

比如， `/Chapter (\d+)\.\d*/` 解释了额外转义的和特殊的字符，并说明了这部分pattern应该被记忆。它精确地匹配后面跟着一个以上数字字符的字符 'Chapter '  (`\d` 意为任何数字字符，`+ 意为1次以上`)，跟着一个小数点（在这个字符中本身也是一个特殊字符；小数点前的 \ 意味着这个pattern必须寻找字面字符 '.')，跟着任何数字字符0次以上。 (`\d` 意为数字字符， `*` 意为0次以上)。另外，插入语也用来记忆第一个匹配的数字字符。

此模式可以匹配字符串"Open Chapter 4.3, paragraph 6"，并且'4'将会被记住。此模式并不能匹配"Chapter 3 and 4"，因为在这个字符串中'3'的后面没有点号'.'。

括号中的"?:"，这种模式匹配的子字符串将不会被记住。比如，(?:\d+)匹配一次或多次数字字符，但是不能记住匹配的字符。

## 使用正则表达式

正则表达式可以被用于`RegExp`的[`exec`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/exec)和[`test`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/RegExp/test)方法以及 [`String`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/String)的[`match`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/String/match)、[`replace`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/String/replace)、[`search`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/String/search)和[`split`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/String/split)方法。这些方法在[JavaScript 手册](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference)中有详细的解释。

| 方法      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| `exec`    | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。 |
| `test`    | 一个在字符串中测试是否匹配的RegExp方法，它返回true或false。  |
| `match`   | 一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。 |
| `search`  | 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。 |
| `replace` | 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。 |
| `split`   | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。 |

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用test或search方法；想得到更多的信息（但是比较慢）则可以使用exec或match方法。如果你使用exec或match方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么exec方法返回null（也就是false）。

```html
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

不需要正则表达式的属性

```html
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
```

通过字符串构建正则

```html
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

## 笔试题

这里都是老姐的上次的笔试题更新一下把

### 求字符串中最大的回文子串

```js

function han(str) {
        let maxlength=0;
        let start =0;
        var arr = str.split('');
        let len = arr.length;
        //以i为中心向两边扩展
        for(let i =0;i<len;i++){
          let j=i-1;
          let k=i+1;
          while(j>=0&&k<len&&arr[j]===arr[k]){
            if(k-j+1>maxlength){
              maxlength=k-j+1;
              start=j;
            }
            j--;
            k++;
          }
        }
        //以i,i+1向两边扩展
        for(let i =0;i<len;i++){
          let j=i;
          let k=i+1;
          while(j>=0&&k<len&&arr[j]===arr[k]){
            if(k-j+1>maxlength){
              maxlength=k-j+1;
              start=j;
            }
            j--;
            k++;
          }
        }
        if(maxlength>0){
          return str.substr(start,maxlength)
        }else {
          return null
        }
     }

     console.log(han('hannab'))
```

### 数字转英文

```js
function numEn(n) {
  num = Number(n);
  let dict1 = ['', 'one', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let dict2 = ['', 'tne', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']
  let dict3 = ['', 'eleven', 'twelve', 'thirteen', '14', '15', '16', '17', '18', '19']
  if (num < 10) return dict1[num]
  if (num < 20) return dict3[num % 10]
  if (num < 100) return dict2[num / 10] + ' ' + dict1[num % 10]
  if (num < 1000) return dict1[Math.floor(num / 10)] + 'hundred' + (parse(num % 100) ? 'and' + parse(num % 100) : ' ')
  if (num < 1000000) return parse(parseInt(num / 1000)) + 'thousand' + parse(num % 1000)

}
```
