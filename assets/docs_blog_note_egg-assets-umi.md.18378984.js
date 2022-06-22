import{_ as n,c as s,o as a,a as p}from"./app.a8012ae3.js";const m='{"title":"eggjs \u548C umi \u7684\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316","slug":"\u521D\u59CB\u5316"},{"level":2,"title":"\u7F16\u5199\u914D\u7F6E","slug":"\u7F16\u5199\u914D\u7F6E"},{"level":2,"title":"\u4FEE\u6539\u8DEF\u7531","slug":"\u4FEE\u6539\u8DEF\u7531"},{"level":2,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"docs/blog/note/egg-assets-umi.md","lastUpdated":1655912381537}',t={},o=p(`<h1 id="eggjs-\u548C-umi-\u7684\u914D\u7F6E" tabindex="-1">eggjs \u548C umi \u7684\u914D\u7F6E <a class="header-anchor" href="#eggjs-\u548C-umi-\u7684\u914D\u7F6E" aria-hidden="true">#</a></h1><p>eggjs \u914D\u7F6E umi \u4F5C\u4E3A\u524D\u7AEF\u9759\u6001\u670D\u52A1</p><h2 id="\u521D\u59CB\u5316" tabindex="-1">\u521D\u59CB\u5316 <a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><p>\u521D\u59CB\u5316 eggjs</p><div class="language-bash"><pre><code><span class="token function">mkdir</span> egg-example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> egg-example
<span class="token function">npm</span> init egg --type<span class="token operator">=</span>simple
</code></pre></div><p>\u521D\u59CB\u5316 umi</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">cd</span> app <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> web <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> web
$ <span class="token function">yarn</span> create @umijs/umi-app
<span class="token comment"># \u6216 npx @umijs/create-umi-app</span>
</code></pre></div><p>\u5982\u679C\u5728\u5185\u90E8\u5B89\u88C5 umi \u7684\u4F9D\u8D56,node_modules \u7684\u5927\u91CF\u6587\u4EF6,\u5728\u5916\u90E8\u542F\u52A8 eggjs \u7684\u65F6\u5019\u4F1A\u5F71\u54CD\u5230\u6587\u4EF6\u7684\u68C0\u6D4B,\u6240\u4EE5\u628A package.json \u4E2D\u7684\u4F9D\u8D56\u624B\u52A8\u590D\u5236\u5230\u5916\u5C42\u7684 package.json \u4E2D,(\u540C\u7406 eslint,.editorconfig,.prettierrc \u7B49\u914D\u7F6E\u6587\u4EF6\u4E5F\u53EF\u4EE5\u632A\u5230\u8DDF\u76EE\u5F55).</p><p>\u5B89\u88C5\u4F9D\u8D56</p><p>\u56DE\u5230\u6700\u5916\u5C42\u76EE\u5F55,\u5B89\u88C5 egg \u7684\u9759\u6001\u8D44\u6E90\u63D2\u4EF6\u548C\u6A21\u7248\u89E3\u6790\u63D2\u4EF6</p><div class="language-bash"><pre><code><span class="token function">npm</span> i egg-view-assets
<span class="token function">npm</span> i egg-view-nunjucks
<span class="token function">yarn</span> <span class="token comment"># \u6216 npm i</span>
</code></pre></div><h2 id="\u7F16\u5199\u914D\u7F6E" tabindex="-1">\u7F16\u5199\u914D\u7F6E <a class="header-anchor" href="#\u7F16\u5199\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728<code>app/config</code>\u6587\u4EF6\u5939\u4E0B,\u4FEE\u6539<code>config.default.js</code></p><div class="language-js"><pre><code><span class="token comment">/* eslint valid-jsdoc: &quot;off&quot; */</span>

<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {Egg.EggAppInfo} appInfo app info
 */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">appInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">(</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// use for cookie sign key, should change to your own and keep security</span>
  config<span class="token punctuation">.</span>keys <span class="token operator">=</span> appInfo<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;_1639642621216_1986&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// add your middleware config here</span>
  config<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5176\u4E2D\u8FD8\u6709\u4E2A\u9690\u5F0F\u7684egg-static \u4EE3\u8868\u670D\u52A1\u5668\u7684\u9759\u6001\u8D44\u6E90\u5730\u5740,\u9ED8\u8BA4\u4F4D\u7F6E\u4E3Aapp/public</span>

  <span class="token comment">// \u5B98\u65B9\u6A21\u7248\u5F15\u64CE\u5B9A\u5236\u7684\u4F4D\u7F6E,\u4EE3\u8868\u5728\u6B64\u4F5C\u4E3Aroot\u5E76\u91C7\u7528assets\u7684\u6A21\u7248\u89E3\u6790,view\u9ED8\u8BA4\u4F4D\u7F6E\u4E3Aapp/view</span>
  config<span class="token punctuation">.</span>view <span class="token operator">=</span> <span class="token punctuation">{</span>
    mapping<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;.html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">//  \u6A21\u7248\u914D\u7F6E</span>
  config<span class="token punctuation">.</span>assets <span class="token operator">=</span> <span class="token punctuation">{</span>
    publicPath<span class="token operator">:</span> <span class="token string">&#39;/public/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u83B7\u53D6\u7684\u9759\u6001\u6587\u4EF6\u76EE\u5F55</span>
    templatePath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>appInfo<span class="token punctuation">.</span>baseDir<span class="token punctuation">,</span> <span class="token string">&#39;app/view/index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// html\u6A21\u7248\u4F4D\u7F6E,\u670D\u52A1\u5668\u89E3\u6790\u7684</span>
    templateViewEngine<span class="token operator">:</span> <span class="token string">&#39;nunjucks&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">//  \u5B98\u65B9\u9ED8\u8BA4\u914D\u7F6E</span>
  config<span class="token punctuation">.</span>assets <span class="token operator">=</span> <span class="token punctuation">{</span>
    publicPath<span class="token operator">:</span> <span class="token string">&#39;/public/&#39;</span><span class="token punctuation">,</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
      debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      command<span class="token operator">:</span> <span class="token string">&#39;umi dev&#39;</span><span class="token punctuation">,</span>
      port<span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
      env<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">APP_ROOT</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/app/web&#39;</span><span class="token punctuation">,</span>
        <span class="token constant">BROWSER</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        <span class="token constant">ESLINT</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
        <span class="token constant">SOCKET_SERVER</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8000&#39;</span><span class="token punctuation">,</span>
        <span class="token constant">PUBLIC_PATH</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8000&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// add your user config here</span>
  <span class="token keyword">const</span> userConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// myAppName: &#39;egg&#39;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token operator">...</span>userConfig<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5173\u4E8E asset \u7684\u914D\u7F6E\u53EF\u4EE5\u67E5\u770B<a href="https://github.com/eggjs/egg-view-assets/blob/master/config/config.default.js" target="_blank" rel="noopener noreferrer">egg-view-assets/config.default.js at master \xB7 eggjs/egg-view-assets (github.com)</a>\u4E86\u89E3\u8BE6\u60C5</p><p>\u914D\u7F6E <code>plugin.js</code></p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/** @type Egg.EggPlugin */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// had enabled by egg</span>
  <span class="token comment">// static: {</span>
  <span class="token comment">//   enable: true,</span>
  <span class="token comment">// }</span>
  assets<span class="token operator">:</span> <span class="token punctuation">{</span>
    enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-view-assets&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  nunjucks<span class="token operator">:</span> <span class="token punctuation">{</span>
    enable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-view-nunjucks&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4FEE\u6539\u8DEF\u7531" tabindex="-1">\u4FEE\u6539\u8DEF\u7531 <a class="header-anchor" href="#\u4FEE\u6539\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u7F16\u8F91<code>app</code>\u76EE\u5F55\u4E0B\u7684<code>router.js</code></p><p><code>\\</code>\u6539\u4E3A<code>*</code>\u786E\u4FDD\u9ED8\u8BA4\u8BBF\u95EE\u7684\u8DEF\u7531\u90FD\u5C06\u6307\u5411\u524D\u7AEF umi \u7684\u8DEF\u7531</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @param {Egg.Application} app - egg application
 */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> router<span class="token punctuation">,</span> controller <span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">;</span>
  router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>home<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4FEE\u6539 controller</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HomeController<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">yarn</span> dev
</code></pre></div><p>\u5373\u53EF\u770B\u5230\u8FD0\u884C\u6210\u529F\u7684\u524D\u7AEF\u9875\u9762\u4E86,\u4E8E\u6B64\u53EF\u4EE5\u5728 egg \u4E2D\u5199\u540E\u7AEF\u903B\u8F91,\u5728 umi \u4E2D\u5199\u524D\u7AEF\u9875\u9762</p><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u90E8\u7F72\u6BD4\u542F\u52A8\u6765\u8BF4\u8981\u590D\u6742\u4E00\u4E9B,\u9700\u8981\u770B\u61C2\u6587\u6863\u6240\u60F3\u8868\u8FBE\u7684\u610F\u601D\u624D\u884C.</p><p>\u914D\u7F6E umi \u7684\u914D\u7F6E\u9009\u9879</p><div class="language-js"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;umi&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  nodeModulesTransform<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> <span class="token string">&#39;@/pages/index&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  fastRefresh<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  runtimePublicPath<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  outputPath<span class="token operator">:</span> <span class="token string">&#39;./app/public&#39;</span><span class="token punctuation">,</span>
  publicPath<span class="token operator">:</span> <span class="token string">&#39;/public/&#39;</span><span class="token punctuation">,</span>
  manifest<span class="token operator">:</span> <span class="token punctuation">{</span>
    fileName<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;/config/manifest.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u81EA\u52A8\u53D1\u9001\u81F3config\u4E0B,asset\u6A21\u7248\u8981\u9760\u8FD9\u4E2A\u89E3\u6790\u8D44\u6E90\u8DEF\u5F84</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>config \u914D\u7F6E\u53C2\u8003\u4E4B\u524D\u7684\u6CE8\u91CA,\u5728 packag.json \u4E2D\u52A0\u5165<code>&quot;build&quot;: &quot; umi build&quot;,</code></p><div class="language-bash"><pre><code><span class="token function">yarn</span> build
<span class="token function">yarn</span> start
</code></pre></div><p>\u65E0\u8BBA\u4EC0\u4E48\u524D\u7AEF\u6253\u5305\u5DE5\u5177\u90FD\u9700\u8981\u6CE8\u610F\u5165\u53E3\u548C\u51FA\u53E3\uFF0C\u4F8B\u5982 webpack\uFF0Crollup\u3002 \u4E0D\u662F\u8DD1\u901A dev \u5C31\u662F ok \u4E86\u7684\uFF0C\u66F4\u9700\u8981\u4E25\u91CD\u7EBF\u4E0A\u7684\u90E8\u7F72\u95EE\u9898</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://github.com/eggjs/examples/tree/master/assets-with-umi" target="_blank" rel="noopener noreferrer">examples/assets-with-umi at master \xB7 eggjs/examples (github.com)</a></p><p><a href="https://juejin.cn/post/6889243469136297998" target="_blank" rel="noopener noreferrer">egg \u4E2D\u5982\u4F55\u4F7F\u7528 umi \u7684\u9879\u76EE - \u6398\u91D1 (juejin.cn)</a></p><p><a href="https://github.com/nianiaJR/assets-with-webpack" target="_blank" rel="noopener noreferrer">nianiaJR/assets-with-webpack (github.com)</a></p><p><a href="https://eggjs.org/zh-cn/tutorials/assets.html?#%E4%BD%BF%E7%94%A8-assets-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E" target="_blank" rel="noopener noreferrer">\u9759\u6001\u8D44\u6E90 - \u4E3A\u4F01\u4E1A\u7EA7\u6846\u67B6\u548C\u5E94\u7528\u800C\u751F (eggjs.org)</a></p>`,38),e=[o];function c(l,u,i,r,k,g){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{m as __pageData,h as default};
