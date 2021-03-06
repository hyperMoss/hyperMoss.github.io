# JS 引用导致的常见问题

::: tip
开发中常见的 JS 引用问题
:::

对于 vue 来说我们可能经常使用其引用类型来直接修改其中的某个值,然而这种使用方式在 react 中则是灾难性的.
很多不明就里的 bug 都是因为这个原因而导致的

## 对象数组的少量选择

比如有些时候在请求接口时需要裁剪只需要取对象数组中的某些值,一般当所需要取得数据量比较少的时候可以使用 map 来 pick 其中某些值,但是如果需要 pick 的数据量比较大的时候

1. 就需要重复声明那些变量
2. 声明需要排除的对象,并使用 rest 来进行 pick
3. 使用库中的方法，比例 lodash 的 omit 或 pick

```js
// 1
[].map(({ name, sex, age, weight }) => ({ name, sex, age }));
// 2
[].map(({ weight, ...rest }) => rest);
// 3
[].map((item) => _.omit(object, ['weight']));
```

**BAD**
并不理想的方法则是直接 delete 那个值，这样会导致 react 的渲染错误因为取的是渲染中还在使用的值

当然数组的解构`...`也并不会拷贝深层的对象，只是拷贝了一层 index 的引用，有点类似函数传递对象时的状态，内里的对象依然是保持原有的引用

## 树状数据的处理

有些时候需要做树状数据的处理，这个时候就要很小心的去处理这个数据。

有些时候为了省事在树的子节点直接赋值，这样其实是违反了 react 的数据 immutable 的原则。

所以需要使用 immer 等库，来方便的更改深层次的对象，并进行 setState 的操作。

但其实使用了 immer 库后，它会对你做过操作的树子节点对象进行 freeze，这时候比如其他组件也使用了这个数据，例如在初始化的挂载值的时候并没有使用 immer，那么这个时候就会出现问题。会显示无法对子节点进行操作的报错。

为了方便理解，这其实也可以算上是 immer 的 **传染性**

树状数据中使用 immer 并不容易，需要用 bfs 确切的找到对应节点，并进行进一步的 immer 操作
