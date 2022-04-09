var fs = require('fs');
var path = require('path');
const sourceDir = path.resolve(__dirname, '../docs');
module.exports = {
  title: "HyperMoss",
  author: "HyperMoss",
  description: "Just playing.",
  base: "/",
  docsDir: "docs",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "最近更新",
    nav: [
      { text: "首页", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "博文",
        link: "/docs/blog/index",
        activeMatch: "^/blog/",
      },
      {
        text: "学习笔记",
        link: "/docs/study/index",
        activeMatch: "^/study/",
      },
      {
        text: "Github",
        link: "https://github.com/hyperMoss/hyperMoss.github.io",
      },
    ],
    sidebar: {
      "/docs/blog/": sidebarFactory('blog'),
      "/docs/study/": sidebarFactory('study'),
    },
  },
};

// 获取目标目录
function addFileDir(dir) { return path.resolve(__dirname, `../docs/${dir}`) }

// 收集目录下的文件
function collectFileDir(dir, callback) {
  let fileTree = {}
  const rootDir = dir
  let arr = [dir]
  let current = null
  let index = 0
  while (current = arr[index++]) {
    // 读取当前文件，并做一个判断，文件目录分别处理
    let stat = fs.statSync(current)
    //如果文件是目录
    if (stat.isDirectory()) {
      //读取当前目录，拿到所有文件和目录
      let files = fs.readdirSync(current)
      // 将非根目录的文件添加到文件树
      if (current !== dir) {
        fileTree[path.basename(current)] = files.map(file => {
          try {
            let data = fs.readFileSync(path.resolve(current, file), 'utf8')
            let headling = /^(\#{1})([^\#\n]+.)$/m
            let title = headling.exec(data)[0]
            return { title, fileName: path.basename(file, path.extname(file)) }
          } catch (err) {
            console.error(err)
          }
        })
      }
      arr = arr.concat(files.map(file => path.resolve(current, file)))
    }
  }
  callback && callback(fileTree)
}


function sidebarFactory(dirName) {
  let res = []
  collectFileDir(addFileDir(dirName), (tree) => {
    res = Object.keys(tree).map(key => ({
      text: key,
      children: tree[key].map(({ title, fileName }) => {
        return { text: title, link: `/docs/${dirName}/${key}/${fileName}` }
      })
    }))
  })
  return res
}