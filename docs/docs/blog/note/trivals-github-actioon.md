# CI/CD 工具:Travis 到 Github Action

Travis 免费政策用完点数就需要付费构建了，所以转投 Github Action 的怀抱

## 配置文件

项目原有的`.travis.yml`内容如下

```yml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vitepress/dist
  # A token generated on GitHub allowing Travis to push code on you repository.
  # Set in the Travis settings page of your repository, as a secure variable.
  github_token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: main
```

检测到 main 分支提交代码后会自动安装依赖及打包代码，最后将静态文件交给 Github Action 部署

换到 Github Action 则需要在根目录创建`.github\workflows`，并在其中配置 workflow 配置 yml 文件
现有的配置如下`gh-pages.yml`
在此感谢 [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)通过这个工具真的省了很多部署上的功夫

```yml
name: Vitepress Deployment

on:
  push:
    branches:
      - main

jobs:
  pages:
    runs-on: ubuntu-20.04
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '14'

      - name: Get yarn cache
        id: yarn-cache
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ${{ steps.yarn-cache.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - run: yarn install --frozen-lockfile
      - run: yarn build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          deploy_key: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 配置密钥

为了给 Github Action 访问账号提供凭证。如果 Github 账号开启双重认证或安全认证则需要配置 `deploy_key`,
没有相关认证，则可以去掉那一行，并跳过这一步

通过命令行创建 SSH 密钥

```shell
# 进入到当前用户的 .ssh 目录下
cd ~/.ssh
# 创建 SSH 密钥
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f github-action-token
```

github-action-token.pub 为公钥，应配置在 github 设置中[GITHUB 账号 SSH 设置](https://github.com/settings/keys)

github-action-token 为私钥，应配置在 相应项目的 Secret 中
例如[https://github.com/hyperMoss/hyperMoss.github.io/settings/secrets/actions](https://github.com/hyperMoss/hyperMoss.github.io/settings/secrets/actions)
后面的路径复制在自己的项目中即可，根据前面代码命名为`ACCESS_TOKEN`

## 上传代码

这时候删除`.travis.yml`，上传代码即可看见 GitHub Action 的成功完成了
