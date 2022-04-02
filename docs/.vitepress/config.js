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
        link: "/blog/index",
        activeMatch: "^/config/",
      },
      {
        text: "Github",
        link: "https://github.com/hyperMoss/hyperMoss.github.io",
      },
    ],
    sidebar: {
      "/blog/": getBlogSidebar(),
    },
  },
};

function getBlogSidebar() {
  return [
    {
      text: "笔记",
      children: [
        { text: "我如何学习", link: "/blog/how-to-learn" },
        { text: "EGGJS配置Umi静态前端", link: "/blog/egg-assets-umi" },
        { text: "如果使用Webpack有OKR", link: "/blog/webpack-okr" },
        { text: 'Pixivic架构', link: '/blog/pixivic' }
      ],
    },
    {
      text: "源码阅读",
      children: [
        { text: "NPM包", link: "/blog/read-source-code" },
      ],
    },
    {
      text: "基础",
      children: [
        { text: "JSintroduce1", link: "/blog/JSintroduce-1" },
        { text: "JSintroduce2", link: "/blog/JSintroduce-2" },
        { text: "JSintroduce3", link: "/blog/JSintroduce-3" },
      ],
    },
    {
      text: "面试题",
      children: [
        { text: "校招面试题1", link: "/blog/interview1" },
        { text: "校招面试题2", link: "/blog/interview2" },
        { text: "常见的设计模式", link: "/blog/useful-class" },
        { text: "虾皮market一面", link: "/blog/shopee1" },
        { text: "虾皮IM一面", link: "/blog/shopee2" }
      ],
    },
    {
      text: "读书笔记",
      children: [
        { text: "学习如何学习1", link: "/blog/Learning-how-to-learn-part1" },
        { text: "学习如何学习2", link: "/blog/Learning-how-to-learn-part2" },
        { text: "学习如何学习3", link: "/blog/Learning-how-to-learn-part3" },
        { text: "学习如何学习4", link: "/blog/Learning-how-to-learn-part4" },
        { text: "数据结构学习1", link: "/blog/dsday1" },
        { text: "数据结构学习2", link: "/blog/dsday2" },
        { text: "数据结构学习3", link: "/blog/dsday3" },
        { text: "数据结构学习4", link: "/blog/dsday4" },
        { text: "数据结构学习5", link: "/blog/dsday5" },
        { text: "数据结构学习6", link: "/blog/dsday6" },
      ],
    },
  ];
}
