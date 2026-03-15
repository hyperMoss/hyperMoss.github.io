# jenkins前端构建打包

常见的jenkins部署前端代码至指定目录下,然后打包上传至服务器

## 删除文件夹及下面文件

```js
var fs = require('fs');
var path = require('path');

function rmdir(dir, callback) {
  let arr = [dir]
  let current = null
  let index = 0

  while (current = arr[index++]) {
      // 读取当前文件，并做一个判断，文件目录分别处理
      let stat = fs.statSync(current)
      //如果文件是目录
      if (stat.isDirectory()) {
          //读取当前目录，拿到所有文件
          let files = fs.readdirSync(current)
          // 将文件添加到文件池
          arr = [...arr, ...files.map(file => path.join(current, file))]
      }
  }
  //遍历删除文件
  for (var i = arr.length - 1; i >= 0; i--) {
      // 读取当前文件，并做一个判断，文件目录分别处理
      let stat = fs.statSync(arr[i])
      // 目录和文件的删除方法不同
      if (stat.isDirectory()) {
          fs.rmdirSync(arr[i])
      } else {
          fs.unlinkSync(arr[i])
      }
  }
  callback && callback()
}
```

## 打包文件夹

```js
const targetZip = "D:/release/config.zip"
const targetFloder = "D:/release/config"
const source = "D:/Program Files (x86)/Jenkins/workspace/test/dist"
var compressing = require('compressing');
function zip(){
compressing.zip.compressDir(source, targetZip)
  .then(() => {
      console.log('zip-success');
  }).then(() => {
      // 解压
      compressing.zip.uncompress(targetZip, targetFloder)
          .then(() => {
              console.log('upzip-success');
          })
          .catch(err => {
              console.log(err);
              return
          });
  })
  .catch(err => {
      console.log(err);
      return
  });
}
```

## 编译代码并打包解压放到指定目录

```js
var fs = require('fs');
var path = require('path');
const ResultTarget = "D:/release/config"

function main() {
  // 目标文件目录处理
  if (!fs.existsSync(ResultTarget)) {
      fs.mkdir(ResultTarget, 0777, function (err) {
          if (err) throw err;
          console.log('create-dist')
      })

  }
  else {
      rmdir(ResultTarget, (err) => {
          if (err) throw err;
          console.log('dist-delete');
      });
  }
  // 打包文件
  zip()
}

```
