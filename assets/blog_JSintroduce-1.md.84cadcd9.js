import{_ as n,c as s,o as a,a as p}from"./app.6d5be813.js";const v='{"title":"A re-introduction to JavaScript\u8BFB\u540E\u611F(1)","description":"","frontmatter":{"title":"A re-introduction to JavaScript\u8BFB\u540E\u611F(1)","date":"2019-03-14T20:08:20.000Z","tags":["JavaScript","Summary"]},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Numbers","slug":"numbers"},{"level":2,"title":"Strings","slug":"strings"},{"level":2,"title":"\u5176\u4ED6\u7C7B\u578B","slug":"\u5176\u4ED6\u7C7B\u578B"}],"relativePath":"blog/JSintroduce-1.md","lastUpdated":1640102202068}',t={},e=p(`<p>\u8FD9\u6B21\u7B97\u662F\u8BA4\u771F\u7684\u770B\u5B8C\u4E86\u4E00\u4E2A\u5173\u4E8EJavaScript\u7684\u6587\u6863\uFF0C\u5728\u4E4B\u524D\u7684\u65F6\u5019\u90FD\u662F\u8001\u5E08\u968F\u610F\u7684\u6559\u4E00\u4E9B\u65B9\u6CD5\u548C\u6846\u67B6\u7684\u7528\u6CD5\uFF0C\u6CA1\u6709\u8BA4\u771F\u7684\u8BFB\u5B8C\u4E00\u7BC7\u5168\u82F1\u6587\u7684\u6587\u6863\uFF0C\u4ECA\u5929\u4E5F\u7B97\u662F\u8FBE\u5230\u4E86\u4E00\u4E2A\u5C0F\u76EE\u6807\uFF0C\u4ECE\u5934\u5230\u5C3E\u8BFB\u4E86\u4E00\u7BC7\u3002\u5728\u8FD9\u91CC\u6211\u60F3\u628A\u8FD9\u4EF6\u4E8B\u505A\u4E2A\u603B\u7ED3\uFF0C\u4E5F\u68C0\u9A8C\u4E00\u4E0B\u6211\u5B66\u5230\u4E86\u4EC0\u4E48\u3002</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Javascript\u65E0\u975E\u662F\u4E00\u79CD\u9762\u5411\u5BF9\u8C61\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u6CA1\u6709\u8F93\u5165\u548C\u8F93\u51FA\u7684\u6982\u5FF5</p><p>\u5E38\u7528\u7684\u7C7B\u578B\u6709</p><ul><li>Number</li><li>String</li><li>Boolean</li><li>Function</li><li>Object <ul><li>Function</li><li>Array</li><li>Date</li><li>RegExp</li></ul></li><li>Symbol\uFF08new in ES2015</li><li>null</li><li>undefined</li></ul><h2 id="numbers" tabindex="-1">Numbers <a class="header-anchor" href="#numbers" aria-hidden="true">#</a></h2><p>\u6570\u5B57\u5728Javascript\u4E2D\u4F7F\u7528\u7684IEEE 754\u6807\u51C6\u4E0B\u7684\u53CC\u7CBE\u5EA664\u4F4D,\u6240\u4EE5\u6709\u4E2A\u5F88\u6709\u610F\u601D\u7684\u73B0\u8C61\u5728Javascript\u4E2D\u6CA1\u6709\u6574\u578B\u3002</p><p>\u540C\u65F6JS\u4E5F\u652F\u6301\u6807\u51C6\u6570\u5B66\u5DE5\u5177\uFF0C\u4F7F\u7528Math\uFF1B\u5373\u53EF\u65B9\u4FBF\u7684\u4F7F\u7528\u5176\u4E2D\u7684\u6570\u5B66\u5DE5\u5177\u3002 \u4F8B\u5982\uFF1A</p><div class="language-javascript"><pre><code>Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token number">3.5</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD8\u53EF\u4EE5\u7528parseInt() \u51FD\u6570\u5C06\u5B57\u7B26\u578B\u8F6C\u6362\u4E3Ainteger\uFF0C\u4F8B\u5982</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;010&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre></div><p>\u5982\u679CparseInt()\u51FD\u6570\u4E0D\u52A0\u540E\u9762\u7684\u8FDB\u5236\u9009\u62E9\u7684\u8BDD\uFF0C\u5BF9\u5F85\u7684\u5B57\u7B26\u4E32\u5C31\u76F4\u63A5\u4EE5\u5176\u5F00\u5934\u7684\u5B57\u7B26\u6765\u5224\u65AD\u4E86\uFF0C\u4F8B\u5982</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;010&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  8</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;0x10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
</code></pre></div><p>\u6216\u8BB8\u60F3\u8BA9\u4E8C\u8FDB\u5236\u8F6C\u5230\u6574\u578B\u53EF\u4EE5\u8FD9\u6837\u505A\uFF0C</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528+\u6765\u8BA9\u5B57\u7B26\u4E32\u53D8\u4E3A\u6570\u5B57</p><div class="language-javascript"><pre><code><span class="token operator">+</span> <span class="token string">&#39;42&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// 42</span>
<span class="token operator">+</span> <span class="token string">&#39;010&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>
<span class="token operator">+</span> <span class="token string">&#39;0x10&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
</code></pre></div><p>\u8FD9\u91CC\u6709\u79CD\u7279\u6B8A\u7684\u503C\u4E3ANaN\uFF0C\u8D77\u6E90\u4E8EIEEE 754\u4E2D\u65E0\u6CD5\u8868\u793A\u7684\u503C\uFF0C\u540C\u65F6\u7CBE\u5EA6\u4E5F\u8FBE\u4E0D\u5230\uFF0C\u4F8B\u5982</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre></div><p>\u4F7F\u7528NaN\u505A\u5176\u4ED6\u8FD0\u7B97\u7ED3\u679C\u4E5F\u4E3ANaN</p><div class="language-javascript"><pre><code><span class="token number">NaN</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre></div><p>\u8FD8\u6709\u4E00\u4E2A\u5224\u65AD\u51FD\u6570</p><div class="language-javascript"><pre><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>JS\u5185\u8FD8\u542B\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u503CInfinity and -Infinity\uFF0C\u4F8B\u5982</p><div class="language-javascript"><pre><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//  Infinity</span>
<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// -Infinity</span>
</code></pre></div><p>\u540C\u6837\u62E5\u6709\u5224\u65AD\u51FD\u6570</p><div class="language-javascript"><pre><code><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="strings" tabindex="-1">Strings <a class="header-anchor" href="#strings" aria-hidden="true">#</a></h2><p>String \u5728Javascript\u4E2D\u662FUnicode\u5B57\u7B26\u96C6\uFF0C\u66F4\u7CBE\u786E\u6765\u8BF4\u662F\u4E00\u7CFB\u5217\u7684UTF-16 code units \u8FD9\u91CC\u65B9\u4FBF\u7684\u4F7F\u7528legth\u5C5E\u6027\u6765\u5F97\u51FA\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</p><div class="language-javascript"><pre><code><span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><p>\u5176\u4ED6\u5C5E\u6027\u4E5F\u6709\u4F8B\u5982</p><div class="language-javascript"><pre><code><span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;h&quot;</span>
<span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mars&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello, mars&quot;</span>
<span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;HELLO&quot;</span>
</code></pre></div><h2 id="\u5176\u4ED6\u7C7B\u578B" tabindex="-1">\u5176\u4ED6\u7C7B\u578B <a class="header-anchor" href="#\u5176\u4ED6\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5176\u4ED6\u8FD8\u6709null\u548Cundefined\uFF0C\u8FD9\u4E24\u79CD\u53EF\u8981\u6CE8\u610F\u533A\u5206\uFF0Cnull\u4EE3\u8868\u6CA1\u6709\u503C\uFF0C\u800Cundefined\u5219\u662F\u4EE3\u8868\u4E00\u4E2A\u672A\u88AB\u521D\u59CB\u5316\u7684\u503C\uFF0C\u7406\u8BBA\u4E0A\u6765\u8BF4undefined\u662F\u4E2A\u5E38\u91CF\u3002</p><p>\u8FD8\u6709true\u548Cfalse\u4ED6\u4EEC\u9075\u5B88\u7740\u4EE5\u4E0B\u89C4\u5219</p><ul><li>false, 0, empty strings (&quot;&quot;), NaN, null, and undefined all become false.</li><li>All other values become true.</li></ul><p>\u53EF\u4EE5\u5229\u7528 Boolean() \u6765\u8FDB\u884C\u5224\u65AD</p><div class="language-javascript"><pre><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">234</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>\u5E03\u5C14\u64CD\u4F5C\u548CC\u548CJava\u5DEE\u4E0D\u591A\uFF0C\u90FD\u6709&amp;&amp;\uFF08\u4E0E\uFF0C||\uFF08\u6216\uFF0C\uFF01\uFF08\u975E</p>`,39),o=[e];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{v as __pageData,g as default};
