import{o as n,c as s,a,b as p,d as t}from"./app.9d0c7254.js";const e='{"title":"A re-introduction to JavaScript读后感(1)","description":"","frontmatter":{"title":"A re-introduction to JavaScript读后感(1)","date":"2019-03-14T20:08:20.000Z","tags":["JavaScript","Summary"]},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Numbers","slug":"numbers"},{"level":2,"title":"Strings","slug":"strings"},{"level":2,"title":"其他类型","slug":"其他类型"}],"relativePath":"blog/JSintroduce-1.md","lastUpdated":1640015528977}',o={},c=p("p",null,"这次算是认真的看完了一个关于JavaScript的文档，在之前的时候都是老师随意的教一些方法和框架的用法，没有认真的读完一篇全英文的文档，今天也算是达到了一个小目标，从头到尾读了一篇。在这里我想把这件事做个总结，也检验一下我学到了什么。",-1),l=t('<h2 id="overview"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Javascript无非是一种面向对象的脚本语言，没有输入和输出的概念</p><p>常用的类型有</p><ul><li>Number</li><li>String</li><li>Boolean</li><li>Function</li><li>Object <ul><li>Function</li><li>Array</li><li>Date</li><li>RegExp</li></ul></li><li>Symbol（new in ES2015</li><li>null</li><li>undefined</li></ul><h2 id="numbers"><a class="header-anchor" href="#numbers" aria-hidden="true">#</a> Numbers</h2><p>数字在Javascript中使用的IEEE 754标准下的双精度64位,所以有个很有意思的现象在Javascript中没有整型。</p><p>同时JS也支持标准数学工具，使用Math；即可方便的使用其中的数学工具。 例如：</p><div class="language-javascript"><pre><code>Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token number">3.5</span><span class="token punctuation">)</span>\n</code></pre></div><p>还可以用parseInt() 函数将字符型转换为integer，例如</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;010&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n</code></pre></div><p>如果parseInt()函数不加后面的进制选择的话，对待的字符串就直接以其开头的字符来判断了，例如</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;010&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  8</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;0x10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>\n</code></pre></div><p>或许想让二进制转到整型可以这样做，</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>\n</code></pre></div><p>也可以使用+来让字符串变为数字</p><div class="language-javascript"><pre><code><span class="token operator">+</span> <span class="token string">&#39;42&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// 42</span>\n<span class="token operator">+</span> <span class="token string">&#39;010&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>\n<span class="token operator">+</span> <span class="token string">&#39;0x10&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>\n</code></pre></div><p>这里有种特殊的值为NaN，起源于IEEE 754中无法表示的值，同时精度也达不到，例如</p><div class="language-javascript"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n</code></pre></div><p>使用NaN做其他运算结果也为NaN</p><div class="language-javascript"><pre><code><span class="token number">NaN</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n</code></pre></div><p>还有一个判断函数</p><div class="language-javascript"><pre><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>JS内还含有两个特殊的值Infinity and -Infinity，例如</p><div class="language-javascript"><pre><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//  Infinity</span>\n<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// -Infinity</span>\n</code></pre></div><p>同样拥有判断函数</p><div class="language-javascript"><pre><code><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><h2 id="strings"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h2><p>String 在Javascript中是Unicode字符集，更精确来说是一系列的UTF-16 code units 这里方便的使用legth属性来得出字符串的长度</p><div class="language-javascript"><pre><code><span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>\n</code></pre></div><p>其他属性也有例如</p><div class="language-javascript"><pre><code><span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;h&quot;</span>\n<span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mars&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello, mars&quot;</span>\n<span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;HELLO&quot;</span>\n</code></pre></div><h2 id="其他类型"><a class="header-anchor" href="#其他类型" aria-hidden="true">#</a> 其他类型</h2><p>其他还有null和undefined，这两种可要注意区分，null代表没有值，而undefined则是代表一个未被初始化的值，理论上来说undefined是个常量。</p><p>还有true和false他们遵守着以下规则</p><ul><li>false, 0, empty strings (&quot;&quot;), NaN, null, and undefined all become false.</li><li>All other values become true.</li></ul><p>可以利用 Boolean() 来进行判断</p><div class="language-javascript"><pre><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>\n<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">234</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>布尔操作和C和Java差不多，都有&amp;&amp;（与，||（或，！（非</p>',38);o.render=function(p,t,e,o,i,u){return n(),s("div",null,[c,a(" more "),l])};export default o;export{e as __pageData};