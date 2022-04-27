# nginx 变更 html 静态资源内容

使用 nginx 实现特殊服务器上前端页面的同一套代码不同的逻辑控制

## 起因

有多套站点需要使用同一套前端代码,但是不同站所需要跳转的另一套配套域名不同，需要在前端代码测做到不同站点跳转相应的域名

```
eu.test.com -> eu-other.com
us.test.com -> us-other.com
cn.test.com -> cn-other.com
```

其实当前站点是不知道现在是哪套环境下的前端代码的
这就引出了一个问题，如何让前端知道自己是在哪个环境下的呢？

## 解决方案

1. 打包时配置环境变量，多套代码分别部署不同环境

2. 同一套代码，通过在 nginx 上配置不同的入口控制，比如 eu 进 eu-index.html，us 进 us-index.html，cn 进 cn-index.html

方案 1：

- 优点 设置简单
- 缺点 发布操作繁琐，需要等三个包都打包出来，并分别部署

方案 2：

- 优点 只要部署一套代码即可，运维参与维护也较简单
- 缺点 在 ejs 中需要配置相应的规则，并在 webpack 中配置，比较繁琐

## 利用 nginx 模块

nginx 其实有一些模块能更改静态资源的部署，例如`ngx_http_sub_module`，它可以更改静态资源的路径，比如更改 `/static/` 为 `/static-eu/`，或 html 中代码`baidu.com`更改为`google.com`

既然如此也能改 script 标签中的内容

```html
<script>
  window.env = 'cn-env';
</script>
```

例如如上内容可以通过配置

```conf

        location / {
            sub_filter 'cn-env' 'eu-env';
            # 配置匹配的内容
            sub_filter_types css/html;
            # 配置更改多少次
            sub_filter_once off;
            root   html;
            index  index.html index.htm;
        }
```

这样前端打印`window.env`就能得到 `eu-env`

## 注意事项

- 默认只替换 html，如果要替换别的内容要配置 `sub_filter_types`
- 如果改的是反向代理中的内容，要注意是否被压缩，静态资源 nginx 是能自己知道的
- 页面上所有字段都会被替换，要设置特别一点的字段，或匹配规则
