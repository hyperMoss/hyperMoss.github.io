import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vitepress';

const sourceDir = path.resolve(__dirname, '../docs');

function loadSidebarData() {
  const sidebarPath = path.resolve(__dirname, '../data/sidebar-data.json');

  try {
    if (fs.existsSync(sidebarPath)) {
      const sidebarData = JSON.parse(fs.readFileSync(sidebarPath, 'utf-8'));
      return sidebarData;
    }
  } catch (error) {
    console.warn('Failed to load sidebar data:', error);
  }

  return {};
}

export default defineConfig({
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
        link: "https://github.com/hyperMoss",
      },
    ],
    sidebar: loadSidebarData(),
  },
});
