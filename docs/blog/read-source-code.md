---
title: 源码阅读
date: '2019-01-06 14:02:11'
---

阅读源码的记录地

## validate-npm-package-name

### 功能

Give me a string and I'll tell you if it's a valid `npm` package name.

本质是判断一个字符串能否作为包名

### 代码风格

首先把正则常量与blacklist放在头部,这与日常编码来说没有区别

然后是主函数validate,接受一个名字,并根据情况,返回一个对象包含另一个纯函数 处理过`warnings`,和`errors`  ,这两个列表用来区分是validForOldPackages和validForNewPackages,

```js
var done = function (warnings, errors) {
  var result = {
    validForNewPackages: errors.length === 0 && warnings.length === 0,
    validForOldPackages: errors.length === 0,
    warnings: warnings,
    errors: errors
  }
  if (!result.warnings.length) delete result.warnings
  if (!result.errors.length) delete result.errors
  return result
}
```

感觉其他eslint的规则解析应该也差不多是这种设计,两个数组`warnings`,和`errors`

然后是主函数,头部定义两个数组

```js
  var warnings = []
  var errors = []
```

然后卫语句,尽快返回,如果遇到`error`便提前处理,抛出done处理过的东西.

```js

  if (name === null) {
    errors.push('name cannot be null')
    return done(warnings, errors)
  }
```

先是errors后是warring,遇到问题便push进数组

最后抛出scopedPackagePattern,是不是意味着能在外部变更这个正则呢?去匹配那种用户名和包名用`/`的情况

### 思考

- 常量变量名顶置
- 校验时,可以分为`errors`和`warings`,
- `warings`信息可以塞入数组中,不影响主流程进行,`errors`则提前抛出
- 处理结果整合数据的函数可独立出主函数之中,两个纯函数解耦合,更合理
