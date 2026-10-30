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
  markdown: {
    config(md) {
      const defaultFence = md.renderer.rules.fence!;
      md.renderer.rules.fence = (tokens, index, options, env, self) => {
        const token = tokens[index];
        if (token.info.trim() === 'mermaid') {
          return `<MermaidDiagram code="${md.utils.escapeHtml(token.content)}" />\n`;
        }
        return defaultFence(tokens, index, options, env, self);
      };
    },
  },
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
        text: "博客",
        link: "/blog/index",
        activeMatch: "^/blog/",
      },
      {
        text: "Github",
        link: "https://github.com/hyperMoss",
      },
    ],
    sidebar: loadSidebarData(),
  },
});
