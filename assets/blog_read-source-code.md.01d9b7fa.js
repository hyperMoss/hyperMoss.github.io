import{_ as n,c as a,o as s,a as t}from"./app.a2900acc.js";const m='{"title":"\u6E90\u7801\u9605\u8BFB","description":"","frontmatter":{"title":"\u6E90\u7801\u9605\u8BFB","date":"2019-01-06 14:02:11"},"headers":[{"level":2,"title":"validate-npm-package-name","slug":"validate-npm-package-name"},{"level":3,"title":"\u529F\u80FD","slug":"\u529F\u80FD"},{"level":3,"title":"\u4EE3\u7801\u98CE\u683C","slug":"\u4EE3\u7801\u98CE\u683C"},{"level":3,"title":"\u6536\u83B7","slug":"\u6536\u83B7"},{"level":2,"title":"axios \u5DE5\u5177\u51FD\u6570","slug":"axios-\u5DE5\u5177\u51FD\u6570"},{"level":3,"title":"\u6536\u83B7","slug":"\u6536\u83B7-1"}],"relativePath":"blog/read-source-code.md","lastUpdated":1648823979725}',p={},o=t(`<p>\u9605\u8BFB\u6E90\u7801\u7684\u8BB0\u5F55\u5730</p><h2 id="validate-npm-package-name" tabindex="-1">validate-npm-package-name <a class="header-anchor" href="#validate-npm-package-name" aria-hidden="true">#</a></h2><h3 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h3><p>Give me a string and I&#39;ll tell you if it&#39;s a valid <code>npm</code> package name.</p><p>\u672C\u8D28\u662F\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u80FD\u5426\u4F5C\u4E3A\u5305\u540D</p><h3 id="\u4EE3\u7801\u98CE\u683C" tabindex="-1">\u4EE3\u7801\u98CE\u683C <a class="header-anchor" href="#\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a></h3><p>\u9996\u5148\u628A\u6B63\u5219\u5E38\u91CF\u4E0Eblacklist\u653E\u5728\u5934\u90E8,\u8FD9\u4E0E\u65E5\u5E38\u7F16\u7801\u6765\u8BF4\u6CA1\u6709\u533A\u522B</p><p>\u7136\u540E\u662F\u4E3B\u51FD\u6570validate,\u63A5\u53D7\u4E00\u4E2A\u540D\u5B57,\u5E76\u6839\u636E\u60C5\u51B5,\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u5305\u542B\u53E6\u4E00\u4E2A\u7EAF\u51FD\u6570 \u5904\u7406\u8FC7<code>warnings</code>,\u548C<code>errors</code> ,\u8FD9\u4E24\u4E2A\u5217\u8868\u7528\u6765\u533A\u5206\u662FvalidForOldPackages\u548CvalidForNewPackages,</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">done</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">warnings<span class="token punctuation">,</span> errors</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
    validForNewPackages<span class="token operator">:</span> errors<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> warnings<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">,</span>
    validForOldPackages<span class="token operator">:</span> errors<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">,</span>
    warnings<span class="token operator">:</span> warnings<span class="token punctuation">,</span>
    errors<span class="token operator">:</span> errors
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">.</span>warnings<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">delete</span> result<span class="token punctuation">.</span>warnings
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">delete</span> result<span class="token punctuation">.</span>errors
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><p>\u611F\u89C9\u5176\u4ED6eslint\u7684\u89C4\u5219\u89E3\u6790\u5E94\u8BE5\u4E5F\u5DEE\u4E0D\u591A\u662F\u8FD9\u79CD\u8BBE\u8BA1,\u4E24\u4E2A\u6570\u7EC4<code>warnings</code>,\u548C<code>errors</code></p><p>\u7136\u540E\u662F\u4E3B\u51FD\u6570,\u5934\u90E8\u5B9A\u4E49\u4E24\u4E2A\u6570\u7EC4</p><div class="language-js"><pre><code>  <span class="token keyword">var</span> warnings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div><p>\u7136\u540E\u536B\u8BED\u53E5,\u5C3D\u5FEB\u8FD4\u56DE,\u5982\u679C\u9047\u5230<code>error</code>\u4FBF\u63D0\u524D\u5904\u7406,\u629B\u51FAdone\u5904\u7406\u8FC7\u7684\u4E1C\u897F.</p><div class="language-js"><pre><code>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;name cannot be null&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>warnings<span class="token punctuation">,</span> errors<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5148\u662Ferrors\u540E\u662Fwarring,\u9047\u5230\u95EE\u9898\u4FBFpush\u8FDB\u6570\u7EC4</p><p>\u6700\u540E\u629B\u51FAscopedPackagePattern,\u662F\u4E0D\u662F\u610F\u5473\u7740\u80FD\u5728\u5916\u90E8\u53D8\u66F4\u8FD9\u4E2A\u6B63\u5219\u5462?\u53BB\u5339\u914D\u90A3\u79CD\u7528\u6237\u540D\u548C\u5305\u540D\u7528<code>/</code>\u7684\u60C5\u51B5</p><h3 id="\u6536\u83B7" tabindex="-1">\u6536\u83B7 <a class="header-anchor" href="#\u6536\u83B7" aria-hidden="true">#</a></h3><ul><li>\u5E38\u91CF\u53D8\u91CF\u540D\u9876\u7F6E</li><li>\u6821\u9A8C\u65F6,\u53EF\u4EE5\u5206\u4E3A<code>errors</code>\u548C<code>warings</code>,</li><li><code>warings</code>\u4FE1\u606F\u53EF\u4EE5\u585E\u5165\u6570\u7EC4\u4E2D,\u4E0D\u5F71\u54CD\u4E3B\u6D41\u7A0B\u8FDB\u884C,<code>errors</code>\u5219\u63D0\u524D\u629B\u51FA</li><li>\u5904\u7406\u7ED3\u679C\u6574\u5408\u6570\u636E\u7684\u51FD\u6570\u53EF\u72EC\u7ACB\u51FA\u4E3B\u51FD\u6570\u4E4B\u4E2D,\u4E24\u4E2A\u7EAF\u51FD\u6570\u89E3\u8026\u5408,\u66F4\u5408\u7406</li></ul><h2 id="axios-\u5DE5\u5177\u51FD\u6570" tabindex="-1">axios \u5DE5\u5177\u51FD\u6570 <a class="header-anchor" href="#axios-\u5DE5\u5177\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> bind <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./helpers/bind&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// utils is a library of generic helper functions non-specific to axios</span>

<span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>

<span class="token comment">/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */</span>
<span class="token comment">// \u901A\u8FC7toString\u83B7\u53D6\u5BF9\u8C61\u7C7B\u578B\uFF0C\u7136\u540E\u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4</span>
<span class="token keyword">function</span> <span class="token function">isArray</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Array]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */</span>
<span class="token comment">// \u76F4\u63A5\u7528typeof\u5224\u65AD,\u8BF4\u8D77\u6765\u7B97\u662F\u5229\u7528\u4E86null\u7684\u7F3A\u9677</span>
<span class="token keyword">function</span> <span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */</span>
<span class="token comment">// \u5148\u5224\u65AD\u662F\u5426\u4E3Anull\u548Cunderfined\uFF0C\u7136\u540E\u5224\u65AD\u662F\u5426\u5B58\u5728val\u6784\u9020\u51FD\u6570\uFF0CBuffer\u672C\u8EAB\u662F\u4E2A\u7C7B</span>
<span class="token comment">// \u7136\u540E\u7528\u81EA\u5DF1\u7684isBuffer\u65B9\u6CD5\u5224\u65AD</span>
<span class="token keyword">function</span> <span class="token function">isBuffer</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>constructor <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>isBuffer <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span><span class="token function">isBuffer</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */</span>
<span class="token comment">// toString\u65B9\u6CD5\u76F4\u63A5\u5224\u65AD</span>
<span class="token keyword">function</span> <span class="token function">isArrayBuffer</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object ArrayBuffer]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */</span>
<span class="token comment">// instanceof \u8FD0\u7B97\u7B26\u5224\u65AD \u662F\u5426\u662F\u7531FormData\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7684\u5BF9\u8C61\uFF1A\u5F53\u524D\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u662F\u7684prototype\u5C5E\u6027\u6307\u5411\u7684\u662FFormData\u5417</span>
<span class="token keyword">function</span> <span class="token function">isFormData</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> FormData <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>val <span class="token keyword">instanceof</span> <span class="token class-name">FormData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isArrayBufferView</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> ArrayBuffer <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>ArrayBuffer<span class="token punctuation">.</span>isView<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> ArrayBuffer<span class="token punctuation">.</span><span class="token function">isView</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>buffer<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>buffer <span class="token keyword">instanceof</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B80\u5355\u7C7B\u578B\u53EF\u4EE5\u76F4\u63A5\u7528typeof\u5224\u65AD\u9664\u4E86null\u548Cundefined</span>
<span class="token comment">/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */</span>
<span class="token comment">// \u6392\u9664null</span>
<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */</span>
<span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u7EAF\u5BF9\u8C61\uFF0C\u662F\u7528\u7CFB\u7EDF\u65B9\u6CD5\u6784\u9020\u7684\u5BF9\u8C61 {} \u6216\u8005 new Object()</span>
<span class="token keyword">function</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> prototype <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> prototype <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isDate</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Date]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isFile</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object File]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isBlob</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Blob]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Blob \u5BF9\u8C61\u8868\u793A\u4E00\u4E2A\u4E0D\u53EF\u53D8\u3001\u539F\u59CB\u6570\u636E\u7684\u7C7B\u6587\u4EF6\u5BF9\u8C61\u3002\u5B83\u7684\u6570\u636E\u53EF\u4EE5\u6309\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u7684\u683C\u5F0F\u8FDB\u884C\u8BFB\u53D6\u3002</span>
<span class="token comment">// \u591A\u7528\u4E8E\u8F6C\u7801</span>

<span class="token comment">/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Function]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */</span>
<span class="token keyword">function</span> <span class="token function">isStream</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>pipe<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */</span>
<span class="token comment">// \u4E00\u4E2A\u5904\u7406URL\u67E5\u8BE2\u5B57\u7B26\u4E32\u7684\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">isURLSearchParams</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> URLSearchParams <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token keyword">instanceof</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */</span>
<span class="token comment">// \u964D\u7EA7\u4F7F\u7528trim\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span>trim <span class="token operator">?</span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s+|\\s+$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Determine if we&#39;re running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -&gt; undefined
 *  typeof document -&gt; undefined
 *
 * react-native:
 *  navigator.product -&gt; &#39;ReactNative&#39;
 * nativescript
 *  navigator.product -&gt; &#39;NativeScript&#39; or &#39;NS&#39;
 */</span>
<span class="token comment">// \u5224\u65AD\u662F\u5426\u662F\u6D4F\u89C8\u5668\u73AF\u5883</span>
<span class="token keyword">function</span> <span class="token function">isStandardBrowserEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> navigator <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>product <span class="token operator">===</span> <span class="token string">&#39;ReactNative&#39;</span> <span class="token operator">||</span>
                                           navigator<span class="token punctuation">.</span>product <span class="token operator">===</span> <span class="token string">&#39;NativeScript&#39;</span> <span class="token operator">||</span>
                                           navigator<span class="token punctuation">.</span>product <span class="token operator">===</span> <span class="token string">&#39;NS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> document <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If \`obj\` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If &#39;obj&#39; is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */</span>
<span class="token comment">// Array.foreach\u7684\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Don&#39;t bother if no value provided</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Force an array if not already something iterable</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*eslint no-param-reassign:0*/</span>
    obj <span class="token operator">=</span> <span class="token punctuation">[</span>obj<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Iterate over array values</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Iterate over object keys</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * \`\`\`js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * \`\`\`
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */</span>
<span class="token comment">// \u5408\u5E76\u591A\u4E2A\u5BF9\u8C61\uFF0Cobjec.assign\u7684\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token comment">/* obj1, obj2, obj3, ... */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">assignValue</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">forEach</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> assignValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */</span>
<span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">forEach</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">assignValue</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>thisArg <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */</span>
<span class="token comment">// \u5220\u9664UTF-8\u7684BOM\uFF0C\u4F4D\u4E8E\u6587\u672C\u7684\u5F00\u5934</span>
<span class="token keyword">function</span> <span class="token function">stripBOM</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0xFEFF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    content <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  isArray<span class="token operator">:</span> isArray<span class="token punctuation">,</span>
  isArrayBuffer<span class="token operator">:</span> isArrayBuffer<span class="token punctuation">,</span>
  isBuffer<span class="token operator">:</span> isBuffer<span class="token punctuation">,</span>
  isFormData<span class="token operator">:</span> isFormData<span class="token punctuation">,</span>
  isArrayBufferView<span class="token operator">:</span> isArrayBufferView<span class="token punctuation">,</span>
  isString<span class="token operator">:</span> isString<span class="token punctuation">,</span>
  isNumber<span class="token operator">:</span> isNumber<span class="token punctuation">,</span>
  isObject<span class="token operator">:</span> isObject<span class="token punctuation">,</span>
  isPlainObject<span class="token operator">:</span> isPlainObject<span class="token punctuation">,</span>
  isUndefined<span class="token operator">:</span> isUndefined<span class="token punctuation">,</span>
  isDate<span class="token operator">:</span> isDate<span class="token punctuation">,</span>
  isFile<span class="token operator">:</span> isFile<span class="token punctuation">,</span>
  isBlob<span class="token operator">:</span> isBlob<span class="token punctuation">,</span>
  isFunction<span class="token operator">:</span> isFunction<span class="token punctuation">,</span>
  isStream<span class="token operator">:</span> isStream<span class="token punctuation">,</span>
  isURLSearchParams<span class="token operator">:</span> isURLSearchParams<span class="token punctuation">,</span>
  isStandardBrowserEnv<span class="token operator">:</span> isStandardBrowserEnv<span class="token punctuation">,</span>
  forEach<span class="token operator">:</span> forEach<span class="token punctuation">,</span>
  merge<span class="token operator">:</span> merge<span class="token punctuation">,</span>
  extend<span class="token operator">:</span> extend<span class="token punctuation">,</span>
  trim<span class="token operator">:</span> trim<span class="token punctuation">,</span>
  stripBOM<span class="token operator">:</span> stripBOM
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="\u6536\u83B7-1" tabindex="-1">\u6536\u83B7 <a class="header-anchor" href="#\u6536\u83B7-1" aria-hidden="true">#</a></h3><ul><li>buffer \u7F13\u51B2\u533A <ul><li>Buffer \u5BF9\u8C61\u7528\u4E8E\u8868\u793A\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u8282\u5E8F\u5217\u3002 \u8BB8\u591A Node.js API \u90FD\u652F\u6301 Buffer\u3002</li><li>\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6570\u636E\u7F13\u5B58\u533A\uFF0C\u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u4E8C\u8FDB\u5236\u6570\u636E\u3002</li></ul></li><li>Blob \u5BF9\u8C61\u8868\u793A\u4E00\u4E2A\u4E0D\u53EF\u53D8\u3001\u539F\u59CB\u6570\u636E\u7684\u7C7B\u6587\u4EF6\u5BF9\u8C61\u3002\u5B83\u7684\u6570\u636E\u53EF\u4EE5\u6309\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u7684\u683C\u5F0F\u8FDB\u884C\u8BFB\u53D6\u3002</li><li>\u90E8\u5206\u57FA\u7840\u51FD\u6570\u7684\u5C01\u88C5</li><li>BOM\u8FD9\u4E2A\u5947\u602A\u7684\u4E1C\u897F</li><li>JS\u4E2D\u90E8\u5206\u53EF\u4EE5\u76F4\u63A5\u7C7B\u578B\u5224\u65AD\u7684\u7C7B\u578B</li></ul>`,22),e=[o];function c(l,u,r,i,k,f){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
