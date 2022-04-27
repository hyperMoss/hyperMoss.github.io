# eggjs 和 umi 的配置

eggjs 配置 umi 作为前端静态服务

## 初始化

初始化 eggjs

```bash
mkdir egg-example && cd egg-example
npm init egg --type=simple
```

初始化 umi

```bash
$ cd app && mkdir web && cd web
$ yarn create @umijs/umi-app
# 或 npx @umijs/create-umi-app
```

如果在内部安装 umi 的依赖,node_modules 的大量文件,在外部启动 eggjs 的时候会影响到文件的检测,所以把 package.json 中的依赖手动复制到外层的 package.json 中,(同理 eslint,.editorconfig,.prettierrc 等配置文件也可以挪到跟目录).

安装依赖

回到最外层目录,安装 egg 的静态资源插件和模版解析插件

```bash
npm i egg-view-assets
npm i egg-view-nunjucks
yarn # 或 npm i
```

## 编写配置

在`app/config`文件夹下,修改`config.default.js`

```js
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639642621216_1986';

  // add your middleware config here
  config.middleware = [];

  // 其中还有个隐式的egg-static 代表服务器的静态资源地址,默认位置为app/public

  // 官方模版引擎定制的位置,代表在此作为root并采用assets的模版解析,view默认位置为app/view
  config.view = {
    mapping: {
      '.html': 'assets',
    },
  };

  //  模版配置
  config.assets = {
    publicPath: '/public/', // 获取的静态文件目录
    templatePath: path.join(appInfo.baseDir, 'app/view/index.html'), // html模版位置,服务器解析的
    templateViewEngine: 'nunjucks',
  };

  //  官方默认配置
  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: true,
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + '/app/web',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
```

关于 asset 的配置可以查看[egg-view-assets/config.default.js at master · eggjs/egg-view-assets (github.com)](https://github.com/eggjs/egg-view-assets/blob/master/config/config.default.js)了解详情

配置 `plugin.js`

```js
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
```

## 修改路由

编辑`app`目录下的`router.js`

`\`改为`*`确保默认访问的路由都将指向前端 umi 的路由

```js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('*', controller.home.index);
};
```

修改 controller

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }
}

module.exports = HomeController;
```

## 启动

```bash
yarn dev
```

即可看到运行成功的前端页面了,于此可以在 egg 中写后端逻辑,在 umi 中写前端页面

## 部署

部署比启动来说要复杂一些,需要看懂文档所想表达的意思才行.

配置 umi 的配置选项

```js
import path from 'path';

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  runtimePublicPath: true,
  outputPath: './app/public',
  publicPath: '/public/',
  manifest: {
    fileName: path.join(process.cwd(), '/config/manifest.json'), //自动发送至config下,asset模版要靠这个解析资源路径
  },
});
```

config 配置参考之前的注释,在 packag.json 中加入`"build": " umi build",`

```bash
yarn build
yarn start
```

无论什么前端打包工具都需要注意入口和出口，例如 webpack，rollup。
不是跑通 dev 就是 ok 了的，更需要严重线上的部署问题

## 参考

[examples/assets-with-umi at master · eggjs/examples (github.com)](https://github.com/eggjs/examples/tree/master/assets-with-umi)

[egg 中如何使用 umi 的项目 - 掘金 (juejin.cn)](https://juejin.cn/post/6889243469136297998)

[nianiaJR/assets-with-webpack (github.com)](https://github.com/nianiaJR/assets-with-webpack)

[静态资源 - 为企业级框架和应用而生 (eggjs.org)](https://eggjs.org/zh-cn/tutorials/assets.html?#使用-assets-模板引擎)
