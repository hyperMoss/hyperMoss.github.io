import{_ as n,c as a,o as s,a as t}from"./app.3f11f9c8.js";const f='{"title":"\u867E\u76AEIM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF\u63D0\u5347","slug":"\u53D8\u91CF\u63D0\u5347"},{"level":2,"title":"\u4F5C\u7528\u57DF","slug":"\u4F5C\u7528\u57DF"},{"level":2,"title":"instanceof \u5B9E\u73B0","slug":"instanceof-\u5B9E\u73B0"},{"level":2,"title":"http2.0 http3.0","slug":"http2-0-http3-0"},{"level":2,"title":"\u5F02\u6B65","slug":"\u5F02\u6B65"},{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E8B\u4EF6\u5FAA\u73AF"},{"level":2,"title":"\u4E3A\u4EC0\u4E48React\u51FD\u6570\u7EC4\u4EF6\u9700\u8981\u5F15\u5165React","slug":"\u4E3A\u4EC0\u4E48react\u51FD\u6570\u7EC4\u4EF6\u9700\u8981\u5F15\u5165react"},{"level":2,"title":"vue \u4E3A\u4EC0\u4E48data \u7528\u51FD\u6570\u58F0\u660E\u800C\u4E0D\u662F\u5BF9\u8C61","slug":"vue-\u4E3A\u4EC0\u4E48data-\u7528\u51FD\u6570\u58F0\u660E\u800C\u4E0D\u662F\u5BF9\u8C61"},{"level":2,"title":"v8\u7684JS\u6267\u884C\u8FC7\u7A0B","slug":"v8\u7684js\u6267\u884C\u8FC7\u7A0B"},{"level":2,"title":"electron\u5E95\u5C42\u539F\u7406","slug":"electron\u5E95\u5C42\u539F\u7406"},{"level":2,"title":"tree sharking \u5B9E\u73B0\u539F\u7406","slug":"tree-sharking-\u5B9E\u73B0\u539F\u7406"},{"level":2,"title":"ESM\u548CCJS\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48ESM\u53EF\u4EE5tree sharking","slug":"esm\u548Ccjs\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48esm\u53EF\u4EE5tree-sharking"},{"level":2,"title":"js\u5783\u573E\u56DE\u6536\u673A\u5236","slug":"js\u5783\u573E\u56DE\u6536\u673A\u5236"},{"level":2,"title":"\u80CC\u5305\u95EE\u9898","slug":"\u80CC\u5305\u95EE\u9898"},{"level":2,"title":"\u8BA1\u7B97\u6700\u5C11\u786C\u5E01\u4E66\u51D1\u591F\u76F8\u5E94\u7684\u94B1\u6570","slug":"\u8BA1\u7B97\u6700\u5C11\u786C\u5E01\u4E66\u51D1\u591F\u76F8\u5E94\u7684\u94B1\u6570"}],"relativePath":"docs/blog/interview/shopee2.md","lastUpdated":1649596484829}',p={},e=t(`<h1 id="\u867E\u76AEim" tabindex="-1">\u867E\u76AEIM <a class="header-anchor" href="#\u867E\u76AEim" aria-hidden="true">#</a></h1><h2 id="\u53D8\u91CF\u63D0\u5347" tabindex="-1">\u53D8\u91CF\u63D0\u5347 <a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u4E2A\u662F\u4F1A\u62A5\u9519\u7684</p><h2 id="\u4F5C\u7528\u57DF" tabindex="-1">\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     n <span class="token operator">=</span><span class="token number">2</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre></div><h2 id="instanceof-\u5B9E\u73B0" tabindex="-1">instanceof \u5B9E\u73B0 <a class="header-anchor" href="#instanceof-\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><code>object.__proto__ === Object.prototype</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_instanceof</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">L</span><span class="token punctuation">,</span><span class="token constant">R</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> Ro <span class="token operator">=</span> <span class="token class-name">R</span><span class="token punctuation">.</span>prototype
  <span class="token constant">L</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">L</span> <span class="token operator">===</span> Ro<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token constant">L</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="http2-0-http3-0" tabindex="-1">http2.0 http3.0 <a class="header-anchor" href="#http2-0-http3-0" aria-hidden="true">#</a></h2><p>http2.0\u57FA\u4E8Ehttp1.1\uFF0C\u4FDD\u6301\u4E86\u957F\u8FDE\u63A5\u548C</p><p>http3.0 \u5373QUIC \u57FA\u4E8EUDP\u534F\u8BAE</p><h2 id="\u5F02\u6B65" tabindex="-1">\u5F02\u6B65 <a class="header-anchor" href="#\u5F02\u6B65" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u4EE3\u7801\u80FD\u5426\u6B63\u5E38\u8FD0\u884C\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u80FD\u6B63\u5E38\u5904\u7406\u5417\uFF1F</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E3A\u4EC0\u4E48react\u51FD\u6570\u7EC4\u4EF6\u9700\u8981\u5F15\u5165react" tabindex="-1">\u4E3A\u4EC0\u4E48React\u51FD\u6570\u7EC4\u4EF6\u9700\u8981\u5F15\u5165React <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48react\u51FD\u6570\u7EC4\u4EF6\u9700\u8981\u5F15\u5165react" aria-hidden="true">#</a></h2><p>JSX\u5C06\u4EE3\u7801\u7F16\u8BD1\u4E3A<code>React.createElement()</code>\u5F62\u5F0F\uFF0C\u6240\u6709\u9700\u8981\u5F15\u5165React</p><h2 id="vue-\u4E3A\u4EC0\u4E48data-\u7528\u51FD\u6570\u58F0\u660E\u800C\u4E0D\u662F\u5BF9\u8C61" tabindex="-1">vue \u4E3A\u4EC0\u4E48data \u7528\u51FD\u6570\u58F0\u660E\u800C\u4E0D\u662F\u5BF9\u8C61 <a class="header-anchor" href="#vue-\u4E3A\u4EC0\u4E48data-\u7528\u51FD\u6570\u58F0\u660E\u800C\u4E0D\u662F\u5BF9\u8C61" aria-hidden="true">#</a></h2><h2 id="v8\u7684js\u6267\u884C\u8FC7\u7A0B" tabindex="-1">v8\u7684JS\u6267\u884C\u8FC7\u7A0B <a class="header-anchor" href="#v8\u7684js\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a></h2><h2 id="electron\u5E95\u5C42\u539F\u7406" tabindex="-1">electron\u5E95\u5C42\u539F\u7406 <a class="header-anchor" href="#electron\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a></h2><h2 id="tree-sharking-\u5B9E\u73B0\u539F\u7406" tabindex="-1">tree sharking \u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#tree-sharking-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><h2 id="esm\u548Ccjs\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48esm\u53EF\u4EE5tree-sharking" tabindex="-1">ESM\u548CCJS\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48ESM\u53EF\u4EE5tree sharking <a class="header-anchor" href="#esm\u548Ccjs\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48esm\u53EF\u4EE5tree-sharking" aria-hidden="true">#</a></h2><p>\u5E94\u8BE5\u56DE\u7B54\u7684\u662FESM\u4E0D\u80FD\u52A8\u6001\u52A0\u8F7D\uFF0C\u800C\u662F\u9700\u8981\u7F16\u8BD1\u65F6\u52A0\u8F7D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u505Atree sharking</p><h2 id="js\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1">js\u5783\u573E\u56DE\u6536\u673A\u5236 <a class="header-anchor" href="#js\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a></h2><h2 id="\u80CC\u5305\u95EE\u9898" tabindex="-1">\u80CC\u5305\u95EE\u9898 <a class="header-anchor" href="#\u80CC\u5305\u95EE\u9898" aria-hidden="true">#</a></h2><h2 id="\u8BA1\u7B97\u6700\u5C11\u786C\u5E01\u4E66\u51D1\u591F\u76F8\u5E94\u7684\u94B1\u6570" tabindex="-1">\u8BA1\u7B97\u6700\u5C11\u786C\u5E01\u4E66\u51D1\u591F\u76F8\u5E94\u7684\u94B1\u6570 <a class="header-anchor" href="#\u8BA1\u7B97\u6700\u5C11\u786C\u5E01\u4E66\u51D1\u591F\u76F8\u5E94\u7684\u94B1\u6570" aria-hidden="true">#</a></h2>`,28),o=[e];function c(l,u,i,r,k,d){return s(),a("div",null,o)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};