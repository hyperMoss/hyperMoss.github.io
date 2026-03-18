import fs from 'fs';
import path from 'path';
import { glob } from 'fast-glob';
import matter from 'gray-matter';

/**
 * 文章元数据接口
 */
interface ArticleMetadata {
  title: string;
  date: string;
  url: string;
}

/**
 * 侧边栏项目接口
 */
interface SidebarItem {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
}

/**
 * 侧边栏配置接口
 */
interface SidebarConfig {
  [route: string]: SidebarItem[];
}

/**
 * 扫描指定目录下的所有 Markdown 文件
 * @param sourceDirectory 源目录路径
 * @returns Markdown 文件路径数组
 */
async function scanMarkdownFiles(sourceDirectory: string): Promise<string[]> {
  return await glob('**/*.md', {
    cwd: sourceDirectory,
    ignore: ['node_modules/**', '.vitepress/**'],
    absolute: false,
    onlyFiles: true,
  });
}

/**
 * 解析单个 Markdown 文件的元数据
 * @param filePath 文件路径
 * @param sourceDirectory 源目录路径
 * @returns 文章元数据
 */
function parseArticleMetadata(filePath: string, sourceDirectory: string): ArticleMetadata | null {
  const fullPath = path.join(sourceDirectory, filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontmatter } = matter(content);

  // 跳过标记为非文章的页面
  if (frontmatter.noneArticle) {
    return null;
  }

  // 提取标题：优先 frontmatter，其次 # 标题，最后文件名
  const titleFromContent = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = frontmatter.title || titleFromContent || path.basename(filePath, '.md');

  // 生成 URL
  const url = `/${filePath.replace(/index\.md$/, '').replace(/\.md$/, '')}`;

  return {
    title,
    date: frontmatter.date || new Date().toISOString(),
    url,
  };
}

/**
 * 按目录对文章进行分组
 * @param articles 文章元数据数组
 * @returns 分组后的对象
 */
function groupArticlesByDirectory(articles: ArticleMetadata[]): Record<string, Record<string, ArticleMetadata[]>> {
  const grouped: Record<string, Record<string, ArticleMetadata[]>> = {};

  for (const article of articles) {
    const pathParts = article.url.split('/').filter(Boolean);
    if (pathParts.length >= 2) {
      const topLevelDir = `/${pathParts[0]}`;
      const subDir = pathParts.slice(1, -1).join('/');

      if (!grouped[topLevelDir]) {
        grouped[topLevelDir] = {};
      }
      if (!grouped[topLevelDir][subDir]) {
        grouped[topLevelDir][subDir] = [];
      }
      grouped[topLevelDir][subDir].push(article);
    }
  }

  return grouped;
}

/**
 * 构建侧边栏配置
 * @param groupedArticles 分组后的文章
 * @returns 侧边栏配置
 */
function buildSidebarConfig(groupedArticles: Record<string, Record<string, ArticleMetadata[]>>): SidebarConfig {
  const sidebarConfig: SidebarConfig = {};

  for (const [topLevelDir, subDirs] of Object.entries(groupedArticles)) {
    const sidebarItems: SidebarItem[] = [];

    for (const [subDir, articles] of Object.entries(subDirs)) {
      const sortedArticles = articles.sort((a, b) => a.title.localeCompare(b.title));
      const articleItems = sortedArticles.map(article => ({
        text: article.title,
        link: article.url,
      }));

      sidebarItems.push({
        text: subDir,
        items: articleItems,
        collapsed: false,
      });
    }

    // 按目录名称从大到小排序（支持数字排序）
    sidebarItems.sort((a, b) =>
      b.text.localeCompare(a.text, undefined, { numeric: true, sensitivity: 'base' })
    );

    sidebarConfig[topLevelDir] = sidebarItems;
  }

  return sidebarConfig;
}

/**
 * 将侧边栏配置写入文件
 * @param config 侧边栏配置
 * @param outputDirectory 输出目录
 */
function writeSidebarData(config: SidebarConfig, outputDirectory: string): void {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  const outputPath = path.join(outputDirectory, 'sidebar-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(config, null, 2));
}

/**
 * 主函数：生成侧边栏数据
 */
async function generateSidebar(): Promise<void> {
  const sourceDirectory = path.resolve(__dirname, '..');
  const dataDirectory = path.resolve(__dirname, '../data');

  try {
    // 扫描 Markdown 文件
    const markdownFiles = await scanMarkdownFiles(sourceDirectory);

    // 解析文章元数据
    const articles: ArticleMetadata[] = [];
    for (const file of markdownFiles) {
      const metadata = parseArticleMetadata(file, sourceDirectory);
      if (metadata) {
        articles.push(metadata);
      }
    }

    // 分组文章
    const groupedArticles = groupArticlesByDirectory(articles);

    // 构建侧边栏配置
    const sidebarConfig = buildSidebarConfig(groupedArticles);

    // 写入数据文件
    writeSidebarData(sidebarConfig, dataDirectory);

    console.log('侧边栏数据生成成功');
  } catch (error) {
    console.error('生成侧边栏数据时出错:', error);
    throw error;
  }
}

// 执行生成
generateSidebar().catch(console.error);
