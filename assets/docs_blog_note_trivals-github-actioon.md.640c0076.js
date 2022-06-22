import{_ as n,c as s,o as a,a as t}from"./app.a8012ae3.js";const y='{"title":"CI/CD \u5DE5\u5177:Travis \u5230 Github Action","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u914D\u7F6E\u5BC6\u94A5","slug":"\u914D\u7F6E\u5BC6\u94A5"},{"level":2,"title":"\u4E0A\u4F20\u4EE3\u7801","slug":"\u4E0A\u4F20\u4EE3\u7801"}],"relativePath":"docs/blog/note/trivals-github-actioon.md","lastUpdated":1655912381537}',e={},p=t(`<h1 id="ci-cd-\u5DE5\u5177-travis-\u5230-github-action" tabindex="-1">CI/CD \u5DE5\u5177:Travis \u5230 Github Action <a class="header-anchor" href="#ci-cd-\u5DE5\u5177-travis-\u5230-github-action" aria-hidden="true">#</a></h1><p>Travis \u514D\u8D39\u653F\u7B56\u7528\u5B8C\u70B9\u6570\u5C31\u9700\u8981\u4ED8\u8D39\u6784\u5EFA\u4E86\uFF0C\u6240\u4EE5\u8F6C\u6295 Github Action \u7684\u6000\u62B1</p><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u539F\u6709\u7684<code>.travis.yml</code>\u5185\u5BB9\u5982\u4E0B</p><div class="language-yml"><pre><code><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js
<span class="token key atrule">node_js</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> lts/*
<span class="token key atrule">install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn install <span class="token comment"># npm ci</span>
<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn build <span class="token comment"># npm run docs:build</span>
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> pages
  <span class="token key atrule">skip_cleanup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">local_dir</span><span class="token punctuation">:</span> docs/.vitepress/dist
  <span class="token comment"># A token generated on GitHub allowing Travis to push code on you repository.</span>
  <span class="token comment"># Set in the Travis settings page of your repository, as a secure variable.</span>
  <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $GITHUB_TOKEN
  <span class="token key atrule">keep_history</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">branch</span><span class="token punctuation">:</span> main
</code></pre></div><p>\u68C0\u6D4B\u5230 main \u5206\u652F\u63D0\u4EA4\u4EE3\u7801\u540E\u4F1A\u81EA\u52A8\u5B89\u88C5\u4F9D\u8D56\u53CA\u6253\u5305\u4EE3\u7801\uFF0C\u6700\u540E\u5C06\u9759\u6001\u6587\u4EF6\u4EA4\u7ED9 Github Action \u90E8\u7F72</p><p>\u6362\u5230 Github Action \u5219\u9700\u8981\u5728\u6839\u76EE\u5F55\u521B\u5EFA<code>.github\\workflows</code>\uFF0C\u5E76\u5728\u5176\u4E2D\u914D\u7F6E workflow \u914D\u7F6E yml \u6587\u4EF6 \u73B0\u6709\u7684\u914D\u7F6E\u5982\u4E0B<code>gh-pages.yml</code> \u5728\u6B64\u611F\u8C22 <a href="https://github.com/peaceiris/actions-gh-pages" target="_blank" rel="noopener noreferrer">peaceiris/actions-gh-pages</a>\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5177\u771F\u7684\u7701\u4E86\u5F88\u591A\u90E8\u7F72\u4E0A\u7684\u529F\u592B</p><div class="language-yml"><pre><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Vitepress Deployment

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">20.04</span>
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> write
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get yarn cache
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=dir<span class="token punctuation">:</span><span class="token punctuation">:</span>$(yarn cache dir)&quot;

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.dir <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn build
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">deploy_key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> docs/.vitepress/dist
</code></pre></div><h2 id="\u914D\u7F6E\u5BC6\u94A5" tabindex="-1">\u914D\u7F6E\u5BC6\u94A5 <a class="header-anchor" href="#\u914D\u7F6E\u5BC6\u94A5" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u7ED9 Github Action \u8BBF\u95EE\u8D26\u53F7\u63D0\u4F9B\u51ED\u8BC1\u3002\u5982\u679C Github \u8D26\u53F7\u5F00\u542F\u53CC\u91CD\u8BA4\u8BC1\u6216\u5B89\u5168\u8BA4\u8BC1\u5219\u9700\u8981\u914D\u7F6E <code>deploy_key</code>, \u6CA1\u6709\u76F8\u5173\u8BA4\u8BC1\uFF0C\u5219\u53EF\u4EE5\u53BB\u6389\u90A3\u4E00\u884C\uFF0C\u5E76\u8DF3\u8FC7\u8FD9\u4E00\u6B65</p><p>\u901A\u8FC7\u547D\u4EE4\u884C\u521B\u5EFA SSH \u5BC6\u94A5</p><div class="language-shell"><pre><code><span class="token comment"># \u8FDB\u5165\u5230\u5F53\u524D\u7528\u6237\u7684 .ssh \u76EE\u5F55\u4E0B</span>
<span class="token builtin class-name">cd</span> ~/.ssh
<span class="token comment"># \u521B\u5EFA SSH \u5BC6\u94A5</span>
ssh-keygen -t rsa -b <span class="token number">4096</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> config user.email<span class="token variable">)</span></span>&quot;</span> -f github-action-token
</code></pre></div><p>github-action-token.pub \u4E3A\u516C\u94A5\uFF0C\u5E94\u914D\u7F6E\u5728 github \u8BBE\u7F6E\u4E2D<a href="https://github.com/settings/keys" target="_blank" rel="noopener noreferrer">GITHUB \u8D26\u53F7 SSH \u8BBE\u7F6E</a></p><p>github-action-token \u4E3A\u79C1\u94A5\uFF0C\u5E94\u914D\u7F6E\u5728 \u76F8\u5E94\u9879\u76EE\u7684 Secret \u4E2D \u4F8B\u5982<a href="https://github.com/hyperMoss/hyperMoss.github.io/settings/secrets/actions" target="_blank" rel="noopener noreferrer">https://github.com/hyperMoss/hyperMoss.github.io/settings/secrets/actions</a> \u540E\u9762\u7684\u8DEF\u5F84\u590D\u5236\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u4E2D\u5373\u53EF\uFF0C\u6839\u636E\u524D\u9762\u4EE3\u7801\u547D\u540D\u4E3A<code>ACCESS_TOKEN</code></p><h2 id="\u4E0A\u4F20\u4EE3\u7801" tabindex="-1">\u4E0A\u4F20\u4EE3\u7801 <a class="header-anchor" href="#\u4E0A\u4F20\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u8FD9\u65F6\u5019\u5220\u9664<code>.travis.yml</code>\uFF0C\u4E0A\u4F20\u4EE3\u7801\u5373\u53EF\u770B\u89C1 GitHub Action \u7684\u6210\u529F\u5B8C\u6210\u4E86</p>`,16),o=[p];function c(u,l,i,k,r,h){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{y as __pageData,g as default};
