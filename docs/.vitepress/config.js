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
        activeMatch: "^/blog/",
      },
      {
        text: "学习笔记",
        link: "/study/index",
        activeMatch: "^/study/",
      },
      {
        text: "Github",
        link: "https://github.com/hyperMoss/hyperMoss.github.io",
      },
    ],
    sidebar: {
      "/blog/": getBlogSidebar(),
      "/study/": getStudySidebar(),
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
        { text: 'Pixivic架构', link: '/blog/pixivic' },
        { text: '浏览器插件开发', link: '/blog/chrome-extension' },
        { text: '年终总结', link: '/blog/2020-2021' },
        { text: '从0到1制作一个vite插件', link: '/blog/vite-plugin' },

      ],
    },
    {
      text: "源码阅读",
      children: [
        { text: "NPM包", link: "/blog/read-source-code" },
      ],
    },

    {
      text: "面试题",
      children: [
        { text: "校招面试题1", link: "/blog/interview1" },
        { text: "校招面试题2", link: "/blog/interview2" },
        { text: "SHEIN一面", link: "/blog/shein1" },
        { text: "常见的设计模式", link: "/blog/useful-class" },
        { text: "虾皮MP一面", link: "/blog/shopee1" },
        { text: "虾皮IM一面", link: "/blog/shopee2" }
      ],
    },
  ];
}
function getStudySidebar() {
  return [
    {
      text: "JS基础",
      children: [
        { text: "JSintroduce1", link: "/study/JSintroduce-1" },
        { text: "JSintroduce2", link: "/study/JSintroduce-2" },
        { text: "JSintroduce3", link: "/study/JSintroduce-3" },
      ],
    },
    {
      text: "学习如何学习",
      children: [
        { text: "学习如何学习1", link: "/study/Learning-how-to-learn-part1" },
        { text: "学习如何学习2", link: "/study/Learning-how-to-learn-part2" },
        { text: "学习如何学习3", link: "/study/Learning-how-to-learn-part3" },
        { text: "学习如何学习4", link: "/study/Learning-how-to-learn-part4" },
      ],
    },
    {
      text: "学习如何学习",
      children: [
        { text: "数据结构学习1", link: "/study/dsday1" },
        { text: "数据结构学习2", link: "/study/dsday2" },
        { text: "数据结构学习3", link: "/study/dsday3" },
        { text: "数据结构学习4", link: "/study/dsday4" },
        { text: "数据结构学习5", link: "/study/dsday5" },
        { text: "数据结构学习6", link: "/study/dsday6" },
      ],
    },
  ]
}