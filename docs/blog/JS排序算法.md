---
title: JS排序算法
date: 2019-03-17 22:39:27
tags: [Date Structure,JavaScript]
---



## 目的

最近不是在摸前端的JavaScript么,同时也在准备笔试,这样干脆把这个过程记录下来算了.

面试中特别是大公司的面试算法往往是爱考察的点,因为算法最能简单直观的区分人才.

所以,将最常使用的十大排序算法试着用JavaScript来描写下

<!-- more -->

## 基础知识

- **时间复杂度**: 可以简单理解为算法执行所耗费的时间,一般用大O符号来表示
- **空间复杂度**: 运行完一个程序所需要内存的大小
- **排序的稳定性**:排序后,两个相同的元素前后位置不做变动,则算法是稳定的

交换操作的函数表达

```js
function swap(ary,x,y){   //ary为数组 x,y为数字
    if (x === y) return  //若相等不做操作
    var temp = ary[x]  // 设置中间变量
    ary[x] = ary[y]   //交换
    ary[y] = temp
}
```

## 冒泡排序

相信所有人刚开·始学排序都是从冒泡排序开始的,两个循环就可搞定.

小循环比较相邻两位的大小,如果前大后小就进行交换

大循环保证了排序的正确实现,通过大循环保证每次都会有一个在大循环内最大的数被移到大循环的最后部分

```js
        function bubbleSort1(ary){
            var l = ary.length
            for (var i=0;i<l-1;i++){
                for (var j=0;j<=l-i-1;j++){
                    if(ary[j]>ary[j+1]){
                        swap(ary,j,j+1)
                    }
                }
            }
            return ary
        }
```

同样的如果在一次子循环中没有执行交换的话,可以适当的跳出大循环即可,这样可以设置标志位

```js
function bubbleSort1(ary) {
            var flag
            var l = ary.length
            for (var i = 0; i < l - 1; i++) {
                flag = false;
                for (var j = 0; j <= l - i - 1; j++) {
                    if (ary[j] > ary[j + 1]) {
                        swap(ary, j, j + 1)
                        flag = true
                    }
                }
                if (!flag) {
                    break
                }
            }
            return ary
        }
```

## 选择排序

选择排序追求的是一次到位,元素在每次移动时就已经到达他在已排好序列中的最终位置.

通过选择出最小的移出到有序区，再从无序区选择出最小的，如此类推。

```js
function selectSort(ary) {
            var l = ary.length
            var min
            for (var i = 0; i < l - 1; i++) {
                min = i
                for (var j = i + 1; j < l; j++) {
                    if (ary[j] - ary[min] > 0) {
                        min = j
                    }
                }
                swap(ary, i, min)
            }
            return ary
        }
```

## 插入排序

同样分为有序区和无序区，不同的是对元素的操作方式，这个只从无序区中选择出一个，放入有序区的合适位置。

有点像小时候排队的时候，用身高来进行比较，选出一个插入到合适的地方去。

于是分为了有序区，和有序区。

从有序区选择一个放入有序区，这里可以使用二分法进行优化。

```js
function insertionSort(arr) {
    var 1 = arr.length;
    var preIndex, current;
    for (var i = 1 ; i < 1; i++){
        
    }
}
```

二分版本

这个`reduce`有点坑的，网上看的他人的，大概意思是遍历ary元素，将ary的每个元素插入后面的[]空数组中。

其实写个循环也可以

```js
  function insertSort(ary) {
            var sortAry[];
            for (let i = 0; i < ary.length; i++) {
                insert(sortAry, ary[i]);
            }
            return sortAry;

        }
```

```js
        function insertSort(ary) {
                return ary.reduce(insert, []);
        }


        function insert(sortAry, val) {
            var l = sortAry.length;
            if (l == 1) {
                sortAry.push(val);
                return sortAry;
            }
            var low = 0,
                high = l,
                mid;
            if (val < sortAry[low]) {
                return sortAry.unshift(val), sortAry;
            }
            if (val >= sortAry[l - 1]) {
                return sortAry.push(val), sortAry;
            }
            while (low < high) {
                mid = ((low + high) / 2) | 0
                if (i == mid) {
                    break;
                }
                if (val < sortAry[mid]) {
                    high = mid;
                }
                if (val == sortAry[mid]) {
                    i = mid;
                    break;
                }
                if (val > sortAry[mid]) {
                    low = mid;
                }
            }
            var midArry = [val];
            var lastArry = sortAry.slice(low + 1)
            sortAry = sortAry.slice(0, low + 1).concat(midArry).concat(lastArry)
            return sortAry
        }
```

## 归并排序

这个排序有点东西的，使用了分治的思想，将上面的二分法活学活用，具体来说就是递归的使用归并排序，其实就是再两两比较时能很快的得出谁在前谁在后，把这个两两给扩大了，序列逐步有序化

``` js
function mergeSort(ary){
                if(ary.length<2){
                    return ary.slice();
                }

                var min = Math.floor(ary.length /2)
                var left =mergeSort(ary.slice(0,mid))
                var right = mergeSort(ary.slice(mid))
                var result = []

                while (left.length&&right.length){
                    if (left[0]<=right[0]){
                        result.push(left.shift())
                    }
                    else {
                        result.push(right.shift())
                    }
                }
                result.push(...left,...right);
                return result;
            }
```

## 快速排序

快排是很经典的排序了，思想也利用了分治的思想

- 选择一个元素，称为哨兵（pivot）

- 将数组中分成两个串，所有比哨兵小的放前面，比哨兵大的放后面，再这个操作完成后这个哨兵就位于数列的中间位置，这个被称为分区（partition）操作。

- 递归的把小于哨兵的子数列和大于哨兵的子数列进行排序。

非递归版本

``` js
function quickSort(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  var pivot = ary[Math.floor(Math.random() * ary.length)]
  var left = []
  var middle = []
  var right = []
  for (var i = 0; i < ary.length; i++) {
    var val = ary[i]
    if (val < pivot) {
      left.push(val)
    }
    if (val === pivot) {
      middle.push(val)
    }
    if (val > pivot) {
      right.push(val)
    }
  }

  return quickSort1(left).concat(middle, quickSort(right))
}
```

递归版本

```js
function quickSort1(ary, comparator = (a, b) => a - b) {
  return partition(ary, comparator)
}
function partition(ary, comparator, start = 0, end = ary.length - 1, ) {
  if (start >= end) {
    return
  }

  var pivotIndex = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = ary[pivotIndex]

  swap(ary, pivotIndex, end)

  for (var i = start - 1, j = start; j < end; j++) {
    if (comparator(ary[j], pivot) < 0) {
      i++
      swap(ary, i, j)
    }
  }

  swap(ary, i + 1, end)
  partition(ary, comparator, start, i)
  partition(ary, comparator, i + 2, end)
  return ary
}

```

## 参考

<https://juejin.im/post/5c8532ec6fb9a049a42fdd81?utm_source=gold_browser_extension#heading-4>
