import{o as n,c as s,a,b as t,e as p,d as e}from"./app.26bcd9b6.js";const l='{"title":"图","description":"","frontmatter":{"title":"图","date":"2019-01-11 20:57:16"},"headers":[{"level":2,"title":"图的基本概念","slug":"图的基本概念"},{"level":2,"title":"图的存储结构","slug":"图的存储结构"},{"level":3,"title":"邻接矩阵（顺序存储）","slug":"邻接矩阵（顺序存储）"},{"level":3,"title":"邻接表（链式存储）","slug":"邻接表（链式存储）"},{"level":2,"title":"图的遍历","slug":"图的遍历"},{"level":2,"title":"图的应用 最小生成树","slug":"图的应用-最小生成树"},{"level":2,"title":"图的应用 最短路径","slug":"图的应用-最短路径"},{"level":2,"title":"图的应用 拓扑排序","slug":"图的应用-拓扑排序"},{"level":2,"title":"图的应用 关键路径","slug":"图的应用-关键路径"}],"relativePath":"blog/dsday4.md","lastUpdated":1625451924563}',o={},c=t("h1",{id:"图"},[t("a",{class:"header-anchor",href:"#图","aria-hidden":"true"},"#"),p(" 图")],-1),i=t("p",null,"图G由顶点集V和边集E组成，记为G=(V，E)",-1),r=t("ul",null,[t("li",null,[t("p",null,"V(G)表示图G中顶点的有限非空集。 用|V|表示图G中顶点的个数，也称为图G的阶。")]),t("li",null,[t("p",null,"E(G)表示图G中顶点之间的关系（边）集合。 用|E|表示图G中边的条数。")])],-1),u=e('<h2 id="图的基本概念"><a class="header-anchor" href="#图的基本概念" aria-hidden="true">#</a> 图的基本概念</h2><ul><li><p>有向图</p></li><li><p>无向图</p></li><li><p>简单图</p></li><li><p>多重图</p></li><li><p>完全图 n个顶点</p><ul><li>无向完全图 n*(n-1)/2条边</li><li>有向完全图 n*(n-1)条边</li></ul></li><li><p>子图：V和E都是一个图的子集，并非任何子集都算子图</p></li><li><p>连通：两个顶点之间有路径</p></li><li><p>连通图：图中任意两顶点都是连通的</p></li><li><p>连通分量：无向图中的极大联通子图</p></li></ul><blockquote><p>结论1:如果一个图有n个顶点，并且有小于n-1条边，则此图必是非连通图。</p></blockquote><ul><li>强连通：两个方向的联通都有路径</li><li>强连通图：图中任一对顶点都是强联通的</li><li>强连通分量：有向图中极大强连通子图</li></ul><blockquote><p>结论2:生成树去掉一条边则变成非连通图，加上一条边就会形成回路。</p></blockquote><ul><li><p>度：以一个顶点为一个端点的边数目</p><ul><li>有向图：出度和入度</li><li>无向图：依附于该顶点的边的条数</li><li>有向树：有一个顶点入度为0，其余顶点入度为1的有向图</li></ul></li><li><p>权和网：图中每条边可以赋予一定的数值，这个数值叫做这条边的权，有权值的图称为带权图，也叫做网</p></li><li><p>路径和路径长度：顶点之间的路径是指两顶点之间的顶点序列，路径上的边的数目就是路径长度</p></li><li><p>回路：第一个和最后一个顶点相同的路径</p></li><li><p>简单回路：除首尾，顶点不重复出现的回路</p></li><li><p>距离：两顶点间最短的路径长度，不存在则为无穷，或超过数表示类型的数（int 65535）</p></li></ul><h2 id="图的存储结构"><a class="header-anchor" href="#图的存储结构" aria-hidden="true">#</a> 图的存储结构</h2><h3 id="邻接矩阵（顺序存储）"><a class="header-anchor" href="#邻接矩阵（顺序存储）" aria-hidden="true">#</a> 邻接矩阵（顺序存储）</h3><ul><li><p>顶点：用一维数组来存储</p></li><li><p>边或弧：用二维数组来存储</p><p><em>二维数组就是一维数组的拓展，相当于一维数组中每个元素也是一个一维数组。二维数组也叫做邻接矩阵</em></p></li><li><p>无向图的邻接矩阵是一个对称矩阵</p></li></ul><p>能力</p><ol><li>判定两个顶点是否有边</li><li>求某个顶点的度</li><li>找到某个顶点的所有邻接点</li></ol><p>性质</p><ol><li>顶点的入度是顶点所在这一列的各数之和；出度是顶点所在这一行的各数之和。</li><li>判定两个顶点是否有边</li><li>找到某个顶点的所有邻接点</li></ol><p>对于带权图(网)可以在矩阵中存储边的权值</p><ol><li>带权边存储权值</li><li>行和列相同结点权值为0</li><li>不存在的边权值为无限大</li></ol><p>定义</p><div class="language-c"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxVertexNum</span> <span class="token expression">l00   </span><span class="token comment">//顶点数目的最大值</span></span>\n<span class="token keyword">typedef</span> <span class="token keyword">char</span> VertexType<span class="token punctuation">;</span>  <span class="token comment">//顶点的数据类型 不同情况不一样</span>\n<span class="token keyword">typedef</span> <span class="token keyword">int</span> EdgeType<span class="token punctuation">;</span>      <span class="token comment">//整数表示权值或者连通性</span>\n<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>\n VertexType Vex<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">//顶点表</span>\n EdgeType Edge<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//邻接矩阵(二维数组)，边表</span>\n <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>     <span class="token comment">//图的当前顶点数和弧数</span>\n<span class="token punctuation">}</span>MGraph<span class="token punctuation">;</span>\n</code></pre></div><h3 id="邻接表（链式存储）"><a class="header-anchor" href="#邻接表（链式存储）" aria-hidden="true">#</a> 邻接表（链式存储）</h3><p>顺序存储结构存在预先分配内存可能浪费的问题，按照经验会想到链式存储结构,类似树的孩子表示法</p><ul><li>图中的顶点用一个<strong>一维数组</strong>存储。同时每个元素还要存储指向第一个邻接点的指针(链表的头指针)。存储顶点和头指针的表叫<strong>顶点表</strong></li><li>图中每个顶点的所有邻接点构成一个<strong>单链表</strong>。对于无向图，这个表称为该结点的<strong>边表</strong>，对于有向图称为该结点的<strong>出边表</strong></li></ul><p>数据结构 需要设计两种结点结构类型：一是<strong>顶点表</strong>的顶点，二是<strong>单链表</strong>的结点</p><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">VNode</span><span class="token punctuation">{</span> <span class="token comment">//顶点表结点</span>\n VertexType data<span class="token punctuation">;</span>  <span class="token comment">//顶点信息</span>\n ArcNode <span class="token operator">*</span>firstedge<span class="token punctuation">;</span>  <span class="token comment">//单链表头指针</span>\n<span class="token punctuation">}</span>VNode<span class="token punctuation">,</span>AdjList<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">//AdjList是结构体数组类型</span>\n</code></pre></div><div class="language-c"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxVertexNum</span> <span class="token expression"><span class="token number">100</span>      </span><span class="token comment">//图中顶点数目的最大值</span></span>\n<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span><span class="token punctuation">{</span>       <span class="token comment">//边表结点</span>\n <span class="token keyword">int</span> adjvex<span class="token punctuation">;</span>       <span class="token comment">//该弧所指向的顶点的位置</span>\n <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>  <span class="token comment">//指向下一条弧的指针</span>\n<span class="token punctuation">}</span>ArcNode<span class="token punctuation">;</span> \n</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>\n AdjList vertices<span class="token punctuation">;</span>      <span class="token comment">//邻接表</span>\n <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>  <span class="token comment">//图的顶点数和弧数</span>\n<span class="token punctuation">}</span> ALGraph<span class="token punctuation">;</span>    <span class="token comment">//ALGraph是以邻接表存储的图类型</span>\n</code></pre></div><p>有向图的邻接表关心了有向图的出边问题，我们通过有向图很容易找到顶点的出边 比如从每个顶点表的firstedge指针找到第一条边的顶点，再通过next指针依次找到下一条边的顶点直到空指针。</p><h4 id="十字链表"><a class="header-anchor" href="#十字链表" aria-hidden="true">#</a> 十字链表</h4><p>十字链表是针对有向图的存储方式，对应于有向图中的每条弧有一个结点，对应于每个顶点也有一个结点</p><blockquote><p>其实十字链表是在邻接表的基础上进行了优化。在十字链表中不仅包含了邻接表本身就包含的结点出度结点，而且还包含了入度结点的信息。</p></blockquote><p>顶点结点</p><ul><li>图中顶点的数据</li><li>该顶点的<strong>入边表</strong>的头指针</li><li>该顶点的<strong>出边表</strong>的头指针</li></ul><p>边表结点</p><ul><li>这条弧的**弧尾(起点)**所在顶点表下标</li><li>这条弧的**弧头(终点)**所在顶点表下标</li><li>指向<strong>弧头(终点)<strong>相同的</strong>下一条边</strong></li><li>指向<strong>弧尾(起点)<strong>相同的</strong>下一条边</strong></li></ul><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">VNode</span><span class="token punctuation">{</span>   \n VertexType data<span class="token punctuation">;</span>    \n ArcNode <span class="token operator">*</span>firstin<span class="token punctuation">,</span> <span class="token operator">*</span>firstout<span class="token punctuation">;</span>   \n<span class="token punctuation">}</span>VNode<span class="token punctuation">;</span>\n</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span><span class="token punctuation">{</span>  \n <span class="token keyword">int</span> tailvex<span class="token punctuation">,</span> headvex<span class="token punctuation">;</span> \n <span class="token keyword">struct</span> <span class="token class-name">ArcNode</span> <span class="token operator">*</span>hlink<span class="token punctuation">,</span> <span class="token operator">*</span>tlink<span class="token punctuation">;</span> \n<span class="token punctuation">}</span>ArcNode<span class="token punctuation">;</span> \n</code></pre></div><div class="language-c"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>\n VNode xlist<span class="token punctuation">[</span>MaxVertexNum<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//顶点依旧用顺序存储(数组)</span>\n <span class="token keyword">int</span> vexnum<span class="token punctuation">,</span>arcnum<span class="token punctuation">;</span>   <span class="token comment">//图的顶点数和弧数</span>\n<span class="token punctuation">}</span> GLGraph<span class="token punctuation">;</span>     <span class="token comment">//十字链表存储的图类型</span>\n</code></pre></div><h4 id="邻接多重表"><a class="header-anchor" href="#邻接多重表" aria-hidden="true">#</a> 邻接多重表</h4><p>仿照十字链表，对邻接表的边表进行改造，得到专门针对存储无向图的邻接多重表</p><p>邻接多重表边表结点</p><ul><li>这条边依附的两个顶点在顶点表的下标</li><li>指向依附顶点ivex的<strong>下一条边</strong></li><li>指向依附顶点jvex的<strong>下一条边</strong></li></ul><h2 id="图的遍历"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> 图的遍历</h2><ul><li>广度优先搜索(BFS:Breadth-First-Search):广度优先搜索类似于树的层序遍历算法</li><li>深度优先搜索(DFS:Depth-First-Search):深度优先搜索类似于树的先序遍历算法</li></ul><p>BFS解决单源非带权图最短路径问题：按照距离由近到远来遍历图中每个顶点</p><h2 id="图的应用-最小生成树"><a class="header-anchor" href="#图的应用-最小生成树" aria-hidden="true">#</a> 图的应用 最小生成树</h2><ul><li><p>普利姆算法</p><ul><li><p>①从图中找第一个起始顶点v0，作为生成树的第一个顶点，然后从这个顶点到其他顶点的所有边中选一条权值最小的边。然后把这条边的另一个顶点v和这条边加入到生成树中。 ②对剩下的其他所有顶点，分别检查这些顶点与顶点v的权值是否比这些顶点在lowcost数组中对应的权值小，如果更小，则用较小的权值更新lowcost数组。 ③从更新后的lowcost数组中继续挑选权值最小而且不在生成树中的边，然后加入到生成树。 ④反复执行②③直到所有所有顶点都加入到生成树中。</p></li><li><p>双重循环，外层循环次数为<strong>n-1</strong>，内层并列的两个循环次数都是<strong>n</strong>。故普利姆算法时间复杂度为<strong>O(n2)<strong>而且时间复杂度只和n有关，所以适合</strong>稠密图</strong></p></li></ul></li><li><p>克鲁斯卡尔算法</p><ul><li>将图中边按照权值从小到大排列，然后从最小的边开始扫描，设置一个边的集合来记录，如果该边并入不构成回路的话，则将该边并入当前生成树。直到所有的边都检测完为止</li><li>克鲁斯卡尔算法操作分为对边的权值<strong>排序部分</strong>和一个<strong>单重for循环</strong>，它们是并列关系，由于排序耗费时间大于单重循环，所以克鲁斯卡尔算法的<strong>主要时间耗费在排序上</strong>。排序和图中边的数量有关系，所以适合<strong>稀疏图</strong>。</li></ul></li></ul><h2 id="图的应用-最短路径"><a class="header-anchor" href="#图的应用-最短路径" aria-hidden="true">#</a> 图的应用 最短路径</h2><ul><li>迪杰斯特拉 <ul><li>该算法设置一个集合S记录已求得的最短路径的顶点，可用一个数组s[]来实现，初始化为0，当s[vi]=1时表示将顶点vi放入S中，初始时把源点v0放入S中。此外，在构造过程中还设置了两个辅助数组： dist[]：记录了从源点v0到其他各顶点当前的最短路径长度，dist[i]初值为arcs[v0][i]。 path[]：path[i]表示从源点到顶点i之间的最短路径的前驱结点，在算法结束时，可根据其值追溯得到源点v0到顶点vi的最短路径。</li></ul></li></ul><blockquote><p>不断的试探加入新顶点是否使原来的路径变短</p></blockquote><ul><li>佛洛伊德 <ul><li>递推产生一个n阶方阵序列A(−1)，A(0)，…，A(k)，…，A(n−1) 其中<code>A[k](i)[j]</code>表示从顶点vi到顶点vj的路径长度，<strong>k表示绕行第k个顶点的运算步骤</strong>。初始时，对于任意两个顶点vi和vj，若它们之间存在边，则以此边上的权值作为它们之间的最短路径长度；若它们之间不存在有向边，则以∞作为它们之间的最短路径长度。以后逐步尝试在原路径中加入顶点k(k=0，1，…，n-1)作为中间顶点。如果增加中间顶点后，得到的路径比原来的路径长度减少了，则以此新路径代替原路径。</li></ul></li></ul><blockquote><p>寻找所有结点之间的距离信息，并不断的更新。类似动态规划。</p></blockquote><h2 id="图的应用-拓扑排序"><a class="header-anchor" href="#图的应用-拓扑排序" aria-hidden="true">#</a> 图的应用 拓扑排序</h2><p>如果我们把每个环节看成图中一个顶点，在这样一个有向图中，用顶点表示活动，用弧表示活动之间的优先关系，那么这样的有向图称为AOV网(Activity On Vertex)</p><p>拓扑排序算法： 从AOV网中选择一个入度为0的顶点输出，然后删去此顶点，并删除以此顶点为弧尾的弧。重复这个步骤直到输出图中全部顶点，或者找不到入度为0的顶点为止</p><h2 id="图的应用-关键路径"><a class="header-anchor" href="#图的应用-关键路径" aria-hidden="true">#</a> 图的应用 关键路径</h2><p>AOE(Activity On Edge):在一个表示工程的带权有向图中，用顶点表示事件，用有向边表示活动，用边上的权值表示活动的持续时间，这种有向图的边表示活动的网称为AOE网。</p><p>AOE网，活动是在边上，边上的权值表示的是这个活动所需要耗费的时间。AOE网是在AOE的基础上来分析工程的最少需要时间。或者是为了缩短工期，需要找出哪些活动是要加快的。</p>',55);o.render=function(t,p,e,l,o,k){return n(),s("div",null,[c,i,r,a(" more "),u])};export default o;export{l as __pageData};
