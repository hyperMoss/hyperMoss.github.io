import{_ as n,c as s,o as a,a as t}from"./app.6d5be813.js";const g='{"title":"\u56FE","description":"","frontmatter":{"title":"\u56FE","date":"2019-01-11 20:57:16"},"headers":[{"level":2,"title":"\u56FE\u7684\u57FA\u672C\u6982\u5FF5","slug":"\u56FE\u7684\u57FA\u672C\u6982\u5FF5"},{"level":2,"title":"\u56FE\u7684\u5B58\u50A8\u7ED3\u6784","slug":"\u56FE\u7684\u5B58\u50A8\u7ED3\u6784"},{"level":3,"title":"\u90BB\u63A5\u77E9\u9635\uFF08\u987A\u5E8F\u5B58\u50A8\uFF09","slug":"\u90BB\u63A5\u77E9\u9635\uFF08\u987A\u5E8F\u5B58\u50A8\uFF09"},{"level":3,"title":"\u90BB\u63A5\u8868\uFF08\u94FE\u5F0F\u5B58\u50A8\uFF09","slug":"\u90BB\u63A5\u8868\uFF08\u94FE\u5F0F\u5B58\u50A8\uFF09"},{"level":2,"title":"\u56FE\u7684\u904D\u5386","slug":"\u56FE\u7684\u904D\u5386"},{"level":2,"title":"\u56FE\u7684\u5E94\u7528 \u6700\u5C0F\u751F\u6210\u6811","slug":"\u56FE\u7684\u5E94\u7528-\u6700\u5C0F\u751F\u6210\u6811"},{"level":2,"title":"\u56FE\u7684\u5E94\u7528 \u6700\u77ED\u8DEF\u5F84","slug":"\u56FE\u7684\u5E94\u7528-\u6700\u77ED\u8DEF\u5F84"},{"level":2,"title":"\u56FE\u7684\u5E94\u7528 \u62D3\u6251\u6392\u5E8F","slug":"\u56FE\u7684\u5E94\u7528-\u62D3\u6251\u6392\u5E8F"},{"level":2,"title":"\u56FE\u7684\u5E94\u7528 \u5173\u952E\u8DEF\u5F84","slug":"\u56FE\u7684\u5E94\u7528-\u5173\u952E\u8DEF\u5F84"}],"relativePath":"blog/dsday4.md","lastUpdated":1640102202068}',e={},p=t(`<h1 id="\u56FE" tabindex="-1">\u56FE <a class="header-anchor" href="#\u56FE" aria-hidden="true">#</a></h1><p>\u56FEG\u7531\u9876\u70B9\u96C6V\u548C\u8FB9\u96C6E\u7EC4\u6210\uFF0C\u8BB0\u4E3AG=(V\uFF0CE)</p><ul><li><p>V(G)\u8868\u793A\u56FEG\u4E2D\u9876\u70B9\u7684\u6709\u9650\u975E\u7A7A\u96C6\u3002 \u7528|V|\u8868\u793A\u56FEG\u4E2D\u9876\u70B9\u7684\u4E2A\u6570\uFF0C\u4E5F\u79F0\u4E3A\u56FEG\u7684\u9636\u3002</p></li><li><p>E(G)\u8868\u793A\u56FEG\u4E2D\u9876\u70B9\u4E4B\u95F4\u7684\u5173\u7CFB\uFF08\u8FB9\uFF09\u96C6\u5408\u3002 \u7528|E|\u8868\u793A\u56FEG\u4E2D\u8FB9\u7684\u6761\u6570\u3002</p></li></ul><h2 id="\u56FE\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1">\u56FE\u7684\u57FA\u672C\u6982\u5FF5 <a class="header-anchor" href="#\u56FE\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a></h2><ul><li><p>\u6709\u5411\u56FE</p></li><li><p>\u65E0\u5411\u56FE</p></li><li><p>\u7B80\u5355\u56FE</p></li><li><p>\u591A\u91CD\u56FE</p></li><li><p>\u5B8C\u5168\u56FE n\u4E2A\u9876\u70B9</p><ul><li>\u65E0\u5411\u5B8C\u5168\u56FE n*(n-1)/2\u6761\u8FB9</li><li>\u6709\u5411\u5B8C\u5168\u56FE n*(n-1)\u6761\u8FB9</li></ul></li><li><p>\u5B50\u56FE\uFF1AV\u548CE\u90FD\u662F\u4E00\u4E2A\u56FE\u7684\u5B50\u96C6\uFF0C\u5E76\u975E\u4EFB\u4F55\u5B50\u96C6\u90FD\u7B97\u5B50\u56FE</p></li><li><p>\u8FDE\u901A\uFF1A\u4E24\u4E2A\u9876\u70B9\u4E4B\u95F4\u6709\u8DEF\u5F84</p></li><li><p>\u8FDE\u901A\u56FE\uFF1A\u56FE\u4E2D\u4EFB\u610F\u4E24\u9876\u70B9\u90FD\u662F\u8FDE\u901A\u7684</p></li><li><p>\u8FDE\u901A\u5206\u91CF\uFF1A\u65E0\u5411\u56FE\u4E2D\u7684\u6781\u5927\u8054\u901A\u5B50\u56FE</p></li></ul><blockquote><p>\u7ED3\u8BBA1:\u5982\u679C\u4E00\u4E2A\u56FE\u6709n\u4E2A\u9876\u70B9\uFF0C\u5E76\u4E14\u6709\u5C0F\u4E8En-1\u6761\u8FB9\uFF0C\u5219\u6B64\u56FE\u5FC5\u662F\u975E\u8FDE\u901A\u56FE\u3002</p></blockquote><ul><li>\u5F3A\u8FDE\u901A\uFF1A\u4E24\u4E2A\u65B9\u5411\u7684\u8054\u901A\u90FD\u6709\u8DEF\u5F84</li><li>\u5F3A\u8FDE\u901A\u56FE\uFF1A\u56FE\u4E2D\u4EFB\u4E00\u5BF9\u9876\u70B9\u90FD\u662F\u5F3A\u8054\u901A\u7684</li><li>\u5F3A\u8FDE\u901A\u5206\u91CF\uFF1A\u6709\u5411\u56FE\u4E2D\u6781\u5927\u5F3A\u8FDE\u901A\u5B50\u56FE</li></ul><blockquote><p>\u7ED3\u8BBA2:\u751F\u6210\u6811\u53BB\u6389\u4E00\u6761\u8FB9\u5219\u53D8\u6210\u975E\u8FDE\u901A\u56FE\uFF0C\u52A0\u4E0A\u4E00\u6761\u8FB9\u5C31\u4F1A\u5F62\u6210\u56DE\u8DEF\u3002</p></blockquote><ul><li><p>\u5EA6\uFF1A\u4EE5\u4E00\u4E2A\u9876\u70B9\u4E3A\u4E00\u4E2A\u7AEF\u70B9\u7684\u8FB9\u6570\u76EE</p><ul><li>\u6709\u5411\u56FE\uFF1A\u51FA\u5EA6\u548C\u5165\u5EA6</li><li>\u65E0\u5411\u56FE\uFF1A\u4F9D\u9644\u4E8E\u8BE5\u9876\u70B9\u7684\u8FB9\u7684\u6761\u6570</li><li>\u6709\u5411\u6811\uFF1A\u6709\u4E00\u4E2A\u9876\u70B9\u5165\u5EA6\u4E3A0\uFF0C\u5176\u4F59\u9876\u70B9\u5165\u5EA6\u4E3A1\u7684\u6709\u5411\u56FE</li></ul></li><li><p>\u6743\u548C\u7F51\uFF1A\u56FE\u4E2D\u6BCF\u6761\u8FB9\u53EF\u4EE5\u8D4B\u4E88\u4E00\u5B9A\u7684\u6570\u503C\uFF0C\u8FD9\u4E2A\u6570\u503C\u53EB\u505A\u8FD9\u6761\u8FB9\u7684\u6743\uFF0C\u6709\u6743\u503C\u7684\u56FE\u79F0\u4E3A\u5E26\u6743\u56FE\uFF0C\u4E5F\u53EB\u505A\u7F51</p></li><li><p>\u8DEF\u5F84\u548C\u8DEF\u5F84\u957F\u5EA6\uFF1A\u9876\u70B9\u4E4B\u95F4\u7684\u8DEF\u5F84\u662F\u6307\u4E24\u9876\u70B9\u4E4B\u95F4\u7684\u9876\u70B9\u5E8F\u5217\uFF0C\u8DEF\u5F84\u4E0A\u7684\u8FB9\u7684\u6570\u76EE\u5C31\u662F\u8DEF\u5F84\u957F\u5EA6</p></li><li><p>\u56DE\u8DEF\uFF1A\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u9876\u70B9\u76F8\u540C\u7684\u8DEF\u5F84</p></li><li><p>\u7B80\u5355\u56DE\u8DEF\uFF1A\u9664\u9996\u5C3E\uFF0C\u9876\u70B9\u4E0D\u91CD\u590D\u51FA\u73B0\u7684\u56DE\u8DEF</p></li><li><p>\u8DDD\u79BB\uFF1A\u4E24\u9876\u70B9\u95F4\u6700\u77ED\u7684\u8DEF\u5F84\u957F\u5EA6\uFF0C\u4E0D\u5B58\u5728\u5219\u4E3A\u65E0\u7A77\uFF0C\u6216\u8D85\u8FC7\u6570\u8868\u793A\u7C7B\u578B\u7684\u6570\uFF08int 65535\uFF09</p></li></ul><h2 id="\u56FE\u7684\u5B58\u50A8\u7ED3\u6784" tabindex="-1">\u56FE\u7684\u5B58\u50A8\u7ED3\u6784 <a class="header-anchor" href="#\u56FE\u7684\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a></h2><h3 id="\u90BB\u63A5\u77E9\u9635\uFF08\u987A\u5E8F\u5B58\u50A8\uFF09" tabindex="-1">\u90BB\u63A5\u77E9\u9635\uFF08\u987A\u5E8F\u5B58\u50A8\uFF09 <a class="header-anchor" href="#\u90BB\u63A5\u77E9\u9635\uFF08\u987A\u5E8F\u5B58\u50A8\uFF09" aria-hidden="true">#</a></h3><ul><li><p>\u9876\u70B9\uFF1A\u7528\u4E00\u7EF4\u6570\u7EC4\u6765\u5B58\u50A8</p></li><li><p>\u8FB9\u6216\u5F27\uFF1A\u7528\u4E8C\u7EF4\u6570\u7EC4\u6765\u5B58\u50A8</p><p><em>\u4E8C\u7EF4\u6570\u7EC4\u5C31\u662F\u4E00\u7EF4\u6570\u7EC4\u7684\u62D3\u5C55\uFF0C\u76F8\u5F53\u4E8E\u4E00\u7EF4\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u4E5F\u662F\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4\u3002\u4E8C\u7EF4\u6570\u7EC4\u4E5F\u53EB\u505A\u90BB\u63A5\u77E9\u9635</em></p></li><li><p>\u65E0\u5411\u56FE\u7684\u90BB\u63A5\u77E9\u9635\u662F\u4E00\u4E2A\u5BF9\u79F0\u77E9\u9635</p></li></ul><p>\u80FD\u529B</p><ol><li>\u5224\u5B9A\u4E24\u4E2A\u9876\u70B9\u662F\u5426\u6709\u8FB9</li><li>\u6C42\u67D0\u4E2A\u9876\u70B9\u7684\u5EA6</li><li>\u627E\u5230\u67D0\u4E2A\u9876\u70B9\u7684\u6240\u6709\u90BB\u63A5\u70B9</li></ol><p>\u6027\u8D28</p><ol><li>\u9876\u70B9\u7684\u5165\u5EA6\u662F\u9876\u70B9\u6240\u5728\u8FD9\u4E00\u5217\u7684\u5404\u6570\u4E4B\u548C\uFF1B\u51FA\u5EA6\u662F\u9876\u70B9\u6240\u5728\u8FD9\u4E00\u884C\u7684\u5404\u6570\u4E4B\u548C\u3002</li><li>\u5224\u5B9A\u4E24\u4E2A\u9876\u70B9\u662F\u5426\u6709\u8FB9</li><li>\u627E\u5230\u67D0\u4E2A\u9876\u70B9\u7684\u6240\u6709\u90BB\u63A5\u70B9</li></ol><p>\u5BF9\u4E8E\u5E26\u6743\u56FE(\u7F51)\u53EF\u4EE5\u5728\u77E9\u9635\u4E2D\u5B58\u50A8\u8FB9\u7684\u6743\u503C</p><ol><li>\u5E26\u6743\u8FB9\u5B58\u50A8\u6743\u503C</li><li>\u884C\u548C\u5217\u76F8\u540C\u7ED3\u70B9\u6743\u503C\u4E3A0</li><li>\u4E0D\u5B58\u5728\u7684\u8FB9\u6743\u503C\u4E3A\u65E0\u9650\u5927</li></ol><p>\u5B9A\u4E49</p><div class="language-c"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxVertexNum</span> <span class="token expression">l00   </span><span class="token comment">//\u9876\u70B9\u6570\u76EE\u7684\u6700\u5927\u503C</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">char</span> VertexType<span class="token punctuation">;</span>  <span class="token comment">//\u9876\u70B9\u7684\u6570\u636E\u7C7B\u578B \u4E0D\u540C\u60C5\u51B5\u4E0D\u4E00\u6837</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> EdgeType<span class="token punctuation">;</span>      <span class="token comment">//\u6574\u6570\u8868\u793A\u6743\u503C\u6216\u8005\u8FDE\u901A\u6027</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
 VertexType Vex<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">//\u9876\u70B9\u8868</span>
 EdgeType Edge<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u90BB\u63A5\u77E9\u9635(\u4E8C\u7EF4\u6570\u7EC4)\uFF0C\u8FB9\u8868</span>
 <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>     <span class="token comment">//\u56FE\u7684\u5F53\u524D\u9876\u70B9\u6570\u548C\u5F27\u6570</span>
<span class="token punctuation">}</span>MGraph<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u90BB\u63A5\u8868\uFF08\u94FE\u5F0F\u5B58\u50A8\uFF09" tabindex="-1">\u90BB\u63A5\u8868\uFF08\u94FE\u5F0F\u5B58\u50A8\uFF09 <a class="header-anchor" href="#\u90BB\u63A5\u8868\uFF08\u94FE\u5F0F\u5B58\u50A8\uFF09" aria-hidden="true">#</a></h3><p>\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784\u5B58\u5728\u9884\u5148\u5206\u914D\u5185\u5B58\u53EF\u80FD\u6D6A\u8D39\u7684\u95EE\u9898\uFF0C\u6309\u7167\u7ECF\u9A8C\u4F1A\u60F3\u5230\u94FE\u5F0F\u5B58\u50A8\u7ED3\u6784,\u7C7B\u4F3C\u6811\u7684\u5B69\u5B50\u8868\u793A\u6CD5</p><ul><li>\u56FE\u4E2D\u7684\u9876\u70B9\u7528\u4E00\u4E2A<strong>\u4E00\u7EF4\u6570\u7EC4</strong>\u5B58\u50A8\u3002\u540C\u65F6\u6BCF\u4E2A\u5143\u7D20\u8FD8\u8981\u5B58\u50A8\u6307\u5411\u7B2C\u4E00\u4E2A\u90BB\u63A5\u70B9\u7684\u6307\u9488(\u94FE\u8868\u7684\u5934\u6307\u9488)\u3002\u5B58\u50A8\u9876\u70B9\u548C\u5934\u6307\u9488\u7684\u8868\u53EB<strong>\u9876\u70B9\u8868</strong></li><li>\u56FE\u4E2D\u6BCF\u4E2A\u9876\u70B9\u7684\u6240\u6709\u90BB\u63A5\u70B9\u6784\u6210\u4E00\u4E2A<strong>\u5355\u94FE\u8868</strong>\u3002\u5BF9\u4E8E\u65E0\u5411\u56FE\uFF0C\u8FD9\u4E2A\u8868\u79F0\u4E3A\u8BE5\u7ED3\u70B9\u7684<strong>\u8FB9\u8868</strong>\uFF0C\u5BF9\u4E8E\u6709\u5411\u56FE\u79F0\u4E3A\u8BE5\u7ED3\u70B9\u7684<strong>\u51FA\u8FB9\u8868</strong></li></ul><p>\u6570\u636E\u7ED3\u6784 \u9700\u8981\u8BBE\u8BA1\u4E24\u79CD\u7ED3\u70B9\u7ED3\u6784\u7C7B\u578B\uFF1A\u4E00\u662F<strong>\u9876\u70B9\u8868</strong>\u7684\u9876\u70B9\uFF0C\u4E8C\u662F<strong>\u5355\u94FE\u8868</strong>\u7684\u7ED3\u70B9</p><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">VNode</span><span class="token punctuation">{</span> <span class="token comment">//\u9876\u70B9\u8868\u7ED3\u70B9</span>
 VertexType data<span class="token punctuation">;</span>  <span class="token comment">//\u9876\u70B9\u4FE1\u606F</span>
 ArcNode <span class="token operator">*</span>firstedge<span class="token punctuation">;</span>  <span class="token comment">//\u5355\u94FE\u8868\u5934\u6307\u9488</span>
<span class="token punctuation">}</span>VNode<span class="token punctuation">,</span>AdjList<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//AdjList\u662F\u7ED3\u6784\u4F53\u6570\u7EC4\u7C7B\u578B</span>
</code></pre></div><div class="language-c"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxVertexNum</span> <span class="token expression"><span class="token number">100</span>      </span><span class="token comment">//\u56FE\u4E2D\u9876\u70B9\u6570\u76EE\u7684\u6700\u5927\u503C</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span><span class="token punctuation">{</span>       <span class="token comment">//\u8FB9\u8868\u7ED3\u70B9</span>
 <span class="token keyword">int</span> adjvex<span class="token punctuation">;</span>       <span class="token comment">//\u8BE5\u5F27\u6240\u6307\u5411\u7684\u9876\u70B9\u7684\u4F4D\u7F6E</span>
 <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>  <span class="token comment">//\u6307\u5411\u4E0B\u4E00\u6761\u5F27\u7684\u6307\u9488</span>
<span class="token punctuation">}</span>ArcNode<span class="token punctuation">;</span> 
</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
 AdjList vertices<span class="token punctuation">;</span>      <span class="token comment">//\u90BB\u63A5\u8868</span>
 <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>  <span class="token comment">//\u56FE\u7684\u9876\u70B9\u6570\u548C\u5F27\u6570</span>
<span class="token punctuation">}</span> ALGraph<span class="token punctuation">;</span>    <span class="token comment">//ALGraph\u662F\u4EE5\u90BB\u63A5\u8868\u5B58\u50A8\u7684\u56FE\u7C7B\u578B</span>
</code></pre></div><p>\u6709\u5411\u56FE\u7684\u90BB\u63A5\u8868\u5173\u5FC3\u4E86\u6709\u5411\u56FE\u7684\u51FA\u8FB9\u95EE\u9898\uFF0C\u6211\u4EEC\u901A\u8FC7\u6709\u5411\u56FE\u5F88\u5BB9\u6613\u627E\u5230\u9876\u70B9\u7684\u51FA\u8FB9 \u6BD4\u5982\u4ECE\u6BCF\u4E2A\u9876\u70B9\u8868\u7684firstedge\u6307\u9488\u627E\u5230\u7B2C\u4E00\u6761\u8FB9\u7684\u9876\u70B9\uFF0C\u518D\u901A\u8FC7next\u6307\u9488\u4F9D\u6B21\u627E\u5230\u4E0B\u4E00\u6761\u8FB9\u7684\u9876\u70B9\u76F4\u5230\u7A7A\u6307\u9488\u3002</p><h4 id="\u5341\u5B57\u94FE\u8868" tabindex="-1">\u5341\u5B57\u94FE\u8868 <a class="header-anchor" href="#\u5341\u5B57\u94FE\u8868" aria-hidden="true">#</a></h4><p>\u5341\u5B57\u94FE\u8868\u662F\u9488\u5BF9\u6709\u5411\u56FE\u7684\u5B58\u50A8\u65B9\u5F0F\uFF0C\u5BF9\u5E94\u4E8E\u6709\u5411\u56FE\u4E2D\u7684\u6BCF\u6761\u5F27\u6709\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u5BF9\u5E94\u4E8E\u6BCF\u4E2A\u9876\u70B9\u4E5F\u6709\u4E00\u4E2A\u7ED3\u70B9</p><blockquote><p>\u5176\u5B9E\u5341\u5B57\u94FE\u8868\u662F\u5728\u90BB\u63A5\u8868\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u4F18\u5316\u3002\u5728\u5341\u5B57\u94FE\u8868\u4E2D\u4E0D\u4EC5\u5305\u542B\u4E86\u90BB\u63A5\u8868\u672C\u8EAB\u5C31\u5305\u542B\u7684\u7ED3\u70B9\u51FA\u5EA6\u7ED3\u70B9\uFF0C\u800C\u4E14\u8FD8\u5305\u542B\u4E86\u5165\u5EA6\u7ED3\u70B9\u7684\u4FE1\u606F\u3002</p></blockquote><p>\u9876\u70B9\u7ED3\u70B9</p><ul><li>\u56FE\u4E2D\u9876\u70B9\u7684\u6570\u636E</li><li>\u8BE5\u9876\u70B9\u7684<strong>\u5165\u8FB9\u8868</strong>\u7684\u5934\u6307\u9488</li><li>\u8BE5\u9876\u70B9\u7684<strong>\u51FA\u8FB9\u8868</strong>\u7684\u5934\u6307\u9488</li></ul><p>\u8FB9\u8868\u7ED3\u70B9</p><ul><li>\u8FD9\u6761\u5F27\u7684**\u5F27\u5C3E(\u8D77\u70B9)**\u6240\u5728\u9876\u70B9\u8868\u4E0B\u6807</li><li>\u8FD9\u6761\u5F27\u7684**\u5F27\u5934(\u7EC8\u70B9)**\u6240\u5728\u9876\u70B9\u8868\u4E0B\u6807</li><li>\u6307\u5411<strong>\u5F27\u5934(\u7EC8\u70B9)<strong>\u76F8\u540C\u7684</strong>\u4E0B\u4E00\u6761\u8FB9</strong></li><li>\u6307\u5411<strong>\u5F27\u5C3E(\u8D77\u70B9)<strong>\u76F8\u540C\u7684</strong>\u4E0B\u4E00\u6761\u8FB9</strong></li></ul><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">VNode</span><span class="token punctuation">{</span>   
 VertexType data<span class="token punctuation">;</span>    
 ArcNode <span class="token operator">*</span>firstin<span class="token punctuation">,</span> <span class="token operator">*</span>firstout<span class="token punctuation">;</span>   
<span class="token punctuation">}</span>VNode<span class="token punctuation">;</span>
</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span><span class="token punctuation">{</span>  
 <span class="token keyword">int</span> tailvex<span class="token punctuation">,</span> headvex<span class="token punctuation">;</span> 
 <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span> <span class="token operator">*</span>hlink<span class="token punctuation">,</span> <span class="token operator">*</span>tlink<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>ArcNode<span class="token punctuation">;</span> 
</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
 VNode xlist<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//\u9876\u70B9\u4F9D\u65E7\u7528\u987A\u5E8F\u5B58\u50A8(\u6570\u7EC4)</span>
 <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>   <span class="token comment">//\u56FE\u7684\u9876\u70B9\u6570\u548C\u5F27\u6570</span>
<span class="token punctuation">}</span> GLGraph<span class="token punctuation">;</span>     <span class="token comment">//\u5341\u5B57\u94FE\u8868\u5B58\u50A8\u7684\u56FE\u7C7B\u578B</span>
</code></pre></div><h4 id="\u90BB\u63A5\u591A\u91CD\u8868" tabindex="-1">\u90BB\u63A5\u591A\u91CD\u8868 <a class="header-anchor" href="#\u90BB\u63A5\u591A\u91CD\u8868" aria-hidden="true">#</a></h4><p>\u4EFF\u7167\u5341\u5B57\u94FE\u8868\uFF0C\u5BF9\u90BB\u63A5\u8868\u7684\u8FB9\u8868\u8FDB\u884C\u6539\u9020\uFF0C\u5F97\u5230\u4E13\u95E8\u9488\u5BF9\u5B58\u50A8\u65E0\u5411\u56FE\u7684\u90BB\u63A5\u591A\u91CD\u8868</p><p>\u90BB\u63A5\u591A\u91CD\u8868\u8FB9\u8868\u7ED3\u70B9</p><ul><li>\u8FD9\u6761\u8FB9\u4F9D\u9644\u7684\u4E24\u4E2A\u9876\u70B9\u5728\u9876\u70B9\u8868\u7684\u4E0B\u6807</li><li>\u6307\u5411\u4F9D\u9644\u9876\u70B9ivex\u7684<strong>\u4E0B\u4E00\u6761\u8FB9</strong></li><li>\u6307\u5411\u4F9D\u9644\u9876\u70B9jvex\u7684<strong>\u4E0B\u4E00\u6761\u8FB9</strong></li></ul><h2 id="\u56FE\u7684\u904D\u5386" tabindex="-1">\u56FE\u7684\u904D\u5386 <a class="header-anchor" href="#\u56FE\u7684\u904D\u5386" aria-hidden="true">#</a></h2><ul><li>\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22(BFS:Breadth-First-Search):\u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\u7C7B\u4F3C\u4E8E\u6811\u7684\u5C42\u5E8F\u904D\u5386\u7B97\u6CD5</li><li>\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22(DFS:Depth-First-Search):\u6DF1\u5EA6\u4F18\u5148\u641C\u7D22\u7C7B\u4F3C\u4E8E\u6811\u7684\u5148\u5E8F\u904D\u5386\u7B97\u6CD5</li></ul><p>BFS\u89E3\u51B3\u5355\u6E90\u975E\u5E26\u6743\u56FE\u6700\u77ED\u8DEF\u5F84\u95EE\u9898\uFF1A\u6309\u7167\u8DDD\u79BB\u7531\u8FD1\u5230\u8FDC\u6765\u904D\u5386\u56FE\u4E2D\u6BCF\u4E2A\u9876\u70B9</p><h2 id="\u56FE\u7684\u5E94\u7528-\u6700\u5C0F\u751F\u6210\u6811" tabindex="-1">\u56FE\u7684\u5E94\u7528 \u6700\u5C0F\u751F\u6210\u6811 <a class="header-anchor" href="#\u56FE\u7684\u5E94\u7528-\u6700\u5C0F\u751F\u6210\u6811" aria-hidden="true">#</a></h2><ul><li><p>\u666E\u5229\u59C6\u7B97\u6CD5</p><ul><li><p>\u2460\u4ECE\u56FE\u4E2D\u627E\u7B2C\u4E00\u4E2A\u8D77\u59CB\u9876\u70B9v0\uFF0C\u4F5C\u4E3A\u751F\u6210\u6811\u7684\u7B2C\u4E00\u4E2A\u9876\u70B9\uFF0C\u7136\u540E\u4ECE\u8FD9\u4E2A\u9876\u70B9\u5230\u5176\u4ED6\u9876\u70B9\u7684\u6240\u6709\u8FB9\u4E2D\u9009\u4E00\u6761\u6743\u503C\u6700\u5C0F\u7684\u8FB9\u3002\u7136\u540E\u628A\u8FD9\u6761\u8FB9\u7684\u53E6\u4E00\u4E2A\u9876\u70B9v\u548C\u8FD9\u6761\u8FB9\u52A0\u5165\u5230\u751F\u6210\u6811\u4E2D\u3002 \u2461\u5BF9\u5269\u4E0B\u7684\u5176\u4ED6\u6240\u6709\u9876\u70B9\uFF0C\u5206\u522B\u68C0\u67E5\u8FD9\u4E9B\u9876\u70B9\u4E0E\u9876\u70B9v\u7684\u6743\u503C\u662F\u5426\u6BD4\u8FD9\u4E9B\u9876\u70B9\u5728lowcost\u6570\u7EC4\u4E2D\u5BF9\u5E94\u7684\u6743\u503C\u5C0F\uFF0C\u5982\u679C\u66F4\u5C0F\uFF0C\u5219\u7528\u8F83\u5C0F\u7684\u6743\u503C\u66F4\u65B0lowcost\u6570\u7EC4\u3002 \u2462\u4ECE\u66F4\u65B0\u540E\u7684lowcost\u6570\u7EC4\u4E2D\u7EE7\u7EED\u6311\u9009\u6743\u503C\u6700\u5C0F\u800C\u4E14\u4E0D\u5728\u751F\u6210\u6811\u4E2D\u7684\u8FB9\uFF0C\u7136\u540E\u52A0\u5165\u5230\u751F\u6210\u6811\u3002 \u2463\u53CD\u590D\u6267\u884C\u2461\u2462\u76F4\u5230\u6240\u6709\u6240\u6709\u9876\u70B9\u90FD\u52A0\u5165\u5230\u751F\u6210\u6811\u4E2D\u3002</p></li><li><p>\u53CC\u91CD\u5FAA\u73AF\uFF0C\u5916\u5C42\u5FAA\u73AF\u6B21\u6570\u4E3A<strong>n-1</strong>\uFF0C\u5185\u5C42\u5E76\u5217\u7684\u4E24\u4E2A\u5FAA\u73AF\u6B21\u6570\u90FD\u662F<strong>n</strong>\u3002\u6545\u666E\u5229\u59C6\u7B97\u6CD5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A<strong>O(n2)<strong>\u800C\u4E14\u65F6\u95F4\u590D\u6742\u5EA6\u53EA\u548Cn\u6709\u5173\uFF0C\u6240\u4EE5\u9002\u5408</strong>\u7A20\u5BC6\u56FE</strong></p></li></ul></li><li><p>\u514B\u9C81\u65AF\u5361\u5C14\u7B97\u6CD5</p><ul><li>\u5C06\u56FE\u4E2D\u8FB9\u6309\u7167\u6743\u503C\u4ECE\u5C0F\u5230\u5927\u6392\u5217\uFF0C\u7136\u540E\u4ECE\u6700\u5C0F\u7684\u8FB9\u5F00\u59CB\u626B\u63CF\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u8FB9\u7684\u96C6\u5408\u6765\u8BB0\u5F55\uFF0C\u5982\u679C\u8BE5\u8FB9\u5E76\u5165\u4E0D\u6784\u6210\u56DE\u8DEF\u7684\u8BDD\uFF0C\u5219\u5C06\u8BE5\u8FB9\u5E76\u5165\u5F53\u524D\u751F\u6210\u6811\u3002\u76F4\u5230\u6240\u6709\u7684\u8FB9\u90FD\u68C0\u6D4B\u5B8C\u4E3A\u6B62</li><li>\u514B\u9C81\u65AF\u5361\u5C14\u7B97\u6CD5\u64CD\u4F5C\u5206\u4E3A\u5BF9\u8FB9\u7684\u6743\u503C<strong>\u6392\u5E8F\u90E8\u5206</strong>\u548C\u4E00\u4E2A<strong>\u5355\u91CDfor\u5FAA\u73AF</strong>\uFF0C\u5B83\u4EEC\u662F\u5E76\u5217\u5173\u7CFB\uFF0C\u7531\u4E8E\u6392\u5E8F\u8017\u8D39\u65F6\u95F4\u5927\u4E8E\u5355\u91CD\u5FAA\u73AF\uFF0C\u6240\u4EE5\u514B\u9C81\u65AF\u5361\u5C14\u7B97\u6CD5\u7684<strong>\u4E3B\u8981\u65F6\u95F4\u8017\u8D39\u5728\u6392\u5E8F\u4E0A</strong>\u3002\u6392\u5E8F\u548C\u56FE\u4E2D\u8FB9\u7684\u6570\u91CF\u6709\u5173\u7CFB\uFF0C\u6240\u4EE5\u9002\u5408<strong>\u7A00\u758F\u56FE</strong>\u3002</li></ul></li></ul><h2 id="\u56FE\u7684\u5E94\u7528-\u6700\u77ED\u8DEF\u5F84" tabindex="-1">\u56FE\u7684\u5E94\u7528 \u6700\u77ED\u8DEF\u5F84 <a class="header-anchor" href="#\u56FE\u7684\u5E94\u7528-\u6700\u77ED\u8DEF\u5F84" aria-hidden="true">#</a></h2><ul><li>\u8FEA\u6770\u65AF\u7279\u62C9 <ul><li>\u8BE5\u7B97\u6CD5\u8BBE\u7F6E\u4E00\u4E2A\u96C6\u5408S\u8BB0\u5F55\u5DF2\u6C42\u5F97\u7684\u6700\u77ED\u8DEF\u5F84\u7684\u9876\u70B9\uFF0C\u53EF\u7528\u4E00\u4E2A\u6570\u7EC4s[]\u6765\u5B9E\u73B0\uFF0C\u521D\u59CB\u5316\u4E3A0\uFF0C\u5F53s[vi]=1\u65F6\u8868\u793A\u5C06\u9876\u70B9vi\u653E\u5165S\u4E2D\uFF0C\u521D\u59CB\u65F6\u628A\u6E90\u70B9v0\u653E\u5165S\u4E2D\u3002\u6B64\u5916\uFF0C\u5728\u6784\u9020\u8FC7\u7A0B\u4E2D\u8FD8\u8BBE\u7F6E\u4E86\u4E24\u4E2A\u8F85\u52A9\u6570\u7EC4\uFF1A dist[]\uFF1A\u8BB0\u5F55\u4E86\u4ECE\u6E90\u70B9v0\u5230\u5176\u4ED6\u5404\u9876\u70B9\u5F53\u524D\u7684\u6700\u77ED\u8DEF\u5F84\u957F\u5EA6\uFF0Cdist[i]\u521D\u503C\u4E3Aarcs[v0][i]\u3002 path[]\uFF1Apath[i]\u8868\u793A\u4ECE\u6E90\u70B9\u5230\u9876\u70B9i\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u7684\u524D\u9A71\u7ED3\u70B9\uFF0C\u5728\u7B97\u6CD5\u7ED3\u675F\u65F6\uFF0C\u53EF\u6839\u636E\u5176\u503C\u8FFD\u6EAF\u5F97\u5230\u6E90\u70B9v0\u5230\u9876\u70B9vi\u7684\u6700\u77ED\u8DEF\u5F84\u3002</li></ul></li></ul><blockquote><p>\u4E0D\u65AD\u7684\u8BD5\u63A2\u52A0\u5165\u65B0\u9876\u70B9\u662F\u5426\u4F7F\u539F\u6765\u7684\u8DEF\u5F84\u53D8\u77ED</p></blockquote><ul><li>\u4F5B\u6D1B\u4F0A\u5FB7 <ul><li>\u9012\u63A8\u4EA7\u751F\u4E00\u4E2An\u9636\u65B9\u9635\u5E8F\u5217A(\u22121)\uFF0CA(0)\uFF0C\u2026\uFF0CA(k)\uFF0C\u2026\uFF0CA(n\u22121) \u5176\u4E2D<code>A[k](i)[j]</code>\u8868\u793A\u4ECE\u9876\u70B9vi\u5230\u9876\u70B9vj\u7684\u8DEF\u5F84\u957F\u5EA6\uFF0C<strong>k\u8868\u793A\u7ED5\u884C\u7B2Ck\u4E2A\u9876\u70B9\u7684\u8FD0\u7B97\u6B65\u9AA4</strong>\u3002\u521D\u59CB\u65F6\uFF0C\u5BF9\u4E8E\u4EFB\u610F\u4E24\u4E2A\u9876\u70B9vi\u548Cvj\uFF0C\u82E5\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u8FB9\uFF0C\u5219\u4EE5\u6B64\u8FB9\u4E0A\u7684\u6743\u503C\u4F5C\u4E3A\u5B83\u4EEC\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u957F\u5EA6\uFF1B\u82E5\u5B83\u4EEC\u4E4B\u95F4\u4E0D\u5B58\u5728\u6709\u5411\u8FB9\uFF0C\u5219\u4EE5\u221E\u4F5C\u4E3A\u5B83\u4EEC\u4E4B\u95F4\u7684\u6700\u77ED\u8DEF\u5F84\u957F\u5EA6\u3002\u4EE5\u540E\u9010\u6B65\u5C1D\u8BD5\u5728\u539F\u8DEF\u5F84\u4E2D\u52A0\u5165\u9876\u70B9k(k=0\uFF0C1\uFF0C\u2026\uFF0Cn-1)\u4F5C\u4E3A\u4E2D\u95F4\u9876\u70B9\u3002\u5982\u679C\u589E\u52A0\u4E2D\u95F4\u9876\u70B9\u540E\uFF0C\u5F97\u5230\u7684\u8DEF\u5F84\u6BD4\u539F\u6765\u7684\u8DEF\u5F84\u957F\u5EA6\u51CF\u5C11\u4E86\uFF0C\u5219\u4EE5\u6B64\u65B0\u8DEF\u5F84\u4EE3\u66FF\u539F\u8DEF\u5F84\u3002</li></ul></li></ul><blockquote><p>\u5BFB\u627E\u6240\u6709\u7ED3\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\u4FE1\u606F\uFF0C\u5E76\u4E0D\u65AD\u7684\u66F4\u65B0\u3002\u7C7B\u4F3C\u52A8\u6001\u89C4\u5212\u3002</p></blockquote><h2 id="\u56FE\u7684\u5E94\u7528-\u62D3\u6251\u6392\u5E8F" tabindex="-1">\u56FE\u7684\u5E94\u7528 \u62D3\u6251\u6392\u5E8F <a class="header-anchor" href="#\u56FE\u7684\u5E94\u7528-\u62D3\u6251\u6392\u5E8F" aria-hidden="true">#</a></h2><p>\u5982\u679C\u6211\u4EEC\u628A\u6BCF\u4E2A\u73AF\u8282\u770B\u6210\u56FE\u4E2D\u4E00\u4E2A\u9876\u70B9\uFF0C\u5728\u8FD9\u6837\u4E00\u4E2A\u6709\u5411\u56FE\u4E2D\uFF0C\u7528\u9876\u70B9\u8868\u793A\u6D3B\u52A8\uFF0C\u7528\u5F27\u8868\u793A\u6D3B\u52A8\u4E4B\u95F4\u7684\u4F18\u5148\u5173\u7CFB\uFF0C\u90A3\u4E48\u8FD9\u6837\u7684\u6709\u5411\u56FE\u79F0\u4E3AAOV\u7F51(Activity On Vertex)</p><p>\u62D3\u6251\u6392\u5E8F\u7B97\u6CD5\uFF1A \u4ECEAOV\u7F51\u4E2D\u9009\u62E9\u4E00\u4E2A\u5165\u5EA6\u4E3A0\u7684\u9876\u70B9\u8F93\u51FA\uFF0C\u7136\u540E\u5220\u53BB\u6B64\u9876\u70B9\uFF0C\u5E76\u5220\u9664\u4EE5\u6B64\u9876\u70B9\u4E3A\u5F27\u5C3E\u7684\u5F27\u3002\u91CD\u590D\u8FD9\u4E2A\u6B65\u9AA4\u76F4\u5230\u8F93\u51FA\u56FE\u4E2D\u5168\u90E8\u9876\u70B9\uFF0C\u6216\u8005\u627E\u4E0D\u5230\u5165\u5EA6\u4E3A0\u7684\u9876\u70B9\u4E3A\u6B62</p><h2 id="\u56FE\u7684\u5E94\u7528-\u5173\u952E\u8DEF\u5F84" tabindex="-1">\u56FE\u7684\u5E94\u7528 \u5173\u952E\u8DEF\u5F84 <a class="header-anchor" href="#\u56FE\u7684\u5E94\u7528-\u5173\u952E\u8DEF\u5F84" aria-hidden="true">#</a></h2><p>AOE(Activity On Edge):\u5728\u4E00\u4E2A\u8868\u793A\u5DE5\u7A0B\u7684\u5E26\u6743\u6709\u5411\u56FE\u4E2D\uFF0C\u7528\u9876\u70B9\u8868\u793A\u4E8B\u4EF6\uFF0C\u7528\u6709\u5411\u8FB9\u8868\u793A\u6D3B\u52A8\uFF0C\u7528\u8FB9\u4E0A\u7684\u6743\u503C\u8868\u793A\u6D3B\u52A8\u7684\u6301\u7EED\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6709\u5411\u56FE\u7684\u8FB9\u8868\u793A\u6D3B\u52A8\u7684\u7F51\u79F0\u4E3AAOE\u7F51\u3002</p><p>AOE\u7F51\uFF0C\u6D3B\u52A8\u662F\u5728\u8FB9\u4E0A\uFF0C\u8FB9\u4E0A\u7684\u6743\u503C\u8868\u793A\u7684\u662F\u8FD9\u4E2A\u6D3B\u52A8\u6240\u9700\u8981\u8017\u8D39\u7684\u65F6\u95F4\u3002AOE\u7F51\u662F\u5728AOE\u7684\u57FA\u7840\u4E0A\u6765\u5206\u6790\u5DE5\u7A0B\u7684\u6700\u5C11\u9700\u8981\u65F6\u95F4\u3002\u6216\u8005\u662F\u4E3A\u4E86\u7F29\u77ED\u5DE5\u671F\uFF0C\u9700\u8981\u627E\u51FA\u54EA\u4E9B\u6D3B\u52A8\u662F\u8981\u52A0\u5FEB\u7684\u3002</p>`,58),o=[p];function l(c,i,r,u,d,k){return a(),s("div",null,o)}var m=n(e,[["render",l]]);export{g as __pageData,m as default};
