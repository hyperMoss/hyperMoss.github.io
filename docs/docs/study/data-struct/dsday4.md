
# 图

图G由顶点集V和边集E组成，记为G=(V，E)

- V(G)表示图G中顶点的有限非空集。
用|V|表示图G中顶点的个数，也称为图G的阶。

- E(G)表示图G中顶点之间的关系（边）集合。
用|E|表示图G中边的条数。

<!-- more -->

## 图的基本概念

- 有向图
- 无向图

- 简单图
- 多重图

- 完全图 n个顶点
  - 无向完全图 n*(n-1)/2条边
  - 有向完全图 n*(n-1)条边
  
- 子图：V和E都是一个图的子集，并非任何子集都算子图

- 连通：两个顶点之间有路径
- 连通图：图中任意两顶点都是连通的
- 连通分量：无向图中的极大联通子图
  
> 结论1:如果一个图有n个顶点，并且有小于n-1条边，则此图必是非连通图。

- 强连通：两个方向的联通都有路径
- 强连通图：图中任一对顶点都是强联通的
- 强连通分量：有向图中极大强连通子图

> 结论2:生成树去掉一条边则变成非连通图，加上一条边就会形成回路。

- 度：以一个顶点为一个端点的边数目
  - 有向图：出度和入度
  - 无向图：依附于该顶点的边的条数
  - 有向树：有一个顶点入度为0，其余顶点入度为1的有向图

- 权和网：图中每条边可以赋予一定的数值，这个数值叫做这条边的权，有权值的图称为带权图，也叫做网
- 路径和路径长度：顶点之间的路径是指两顶点之间的顶点序列，路径上的边的数目就是路径长度
- 回路：第一个和最后一个顶点相同的路径
- 简单回路：除首尾，顶点不重复出现的回路
- 距离：两顶点间最短的路径长度，不存在则为无穷，或超过数表示类型的数（int 65535）

## 图的存储结构

### 邻接矩阵（顺序存储）

- 顶点：用一维数组来存储
- 边或弧：用二维数组来存储
  
  *二维数组就是一维数组的拓展，相当于一维数组中每个元素也是一个一维数组。二维数组也叫做邻接矩阵*
- 无向图的邻接矩阵是一个对称矩阵

能力

1. 判定两个顶点是否有边
2. 求某个顶点的度
3. 找到某个顶点的所有邻接点

性质

1. 顶点的入度是顶点所在这一列的各数之和；出度是顶点所在这一行的各数之和。
2. 判定两个顶点是否有边
3. 找到某个顶点的所有邻接点

对于带权图(网)可以在矩阵中存储边的权值

1. 带权边存储权值
2. 行和列相同结点权值为0
3. 不存在的边权值为无限大

定义

``` c
#define MaxVertexNum l00   //顶点数目的最大值
typedef char VertexType;  //顶点的数据类型 不同情况不一样
typedef int EdgeType;      //整数表示权值或者连通性
typedef struct{
 VertexType Vex[MaxVertexNum];   //顶点表
 EdgeType Edge[MaxVertexNum][MaxVertexNum]; //邻接矩阵(二维数组)，边表
 int vexnum,arcnum;     //图的当前顶点数和弧数
}MGraph;
```

### 邻接表（链式存储）

顺序存储结构存在预先分配内存可能浪费的问题，按照经验会想到链式存储结构,类似树的孩子表示法

- 图中的顶点用一个**一维数组**存储。同时每个元素还要存储指向第一个邻接点的指针(链表的头指针)。存储顶点和头指针的表叫**顶点表**
- 图中每个顶点的所有邻接点构成一个**单链表**。对于无向图，这个表称为该结点的**边表**，对于有向图称为该结点的**出边表**

数据结构
需要设计两种结点结构类型：一是**顶点表**的顶点，二是**单链表**的结点

```c
typedef struct VNode{ //顶点表结点
 VertexType data;  //顶点信息
 ArcNode *firstedge;  //单链表头指针
}VNode,AdjList[MaxVertexNum];
//AdjList是结构体数组类型
```

``` c
#define MaxVertexNum 100      //图中顶点数目的最大值
typedef struct ArcNode{       //边表结点
 int adjvex;       //该弧所指向的顶点的位置
 struct ArcNode *next;  //指向下一条弧的指针
}ArcNode; 
```

```c
typedef struct{
 AdjList vertices;      //邻接表
 int vexnum,arcnum;  //图的顶点数和弧数
} ALGraph;    //ALGraph是以邻接表存储的图类型
```

有向图的邻接表关心了有向图的出边问题，我们通过有向图很容易找到顶点的出边
比如从每个顶点表的firstedge指针找到第一条边的顶点，再通过next指针依次找到下一条边的顶点直到空指针。

#### 十字链表

十字链表是针对有向图的存储方式，对应于有向图中的每条弧有一个结点，对应于每个顶点也有一个结点

> 其实十字链表是在邻接表的基础上进行了优化。在十字链表中不仅包含了邻接表本身就包含的结点出度结点，而且还包含了入度结点的信息。

顶点结点

- 图中顶点的数据
- 该顶点的**入边表**的头指针
- 该顶点的**出边表**的头指针

边表结点

- 这条弧的**弧尾(起点)**所在顶点表下标
- 这条弧的**弧头(终点)**所在顶点表下标
- 指向**弧头(终点)**相同的**下一条边**
- 指向**弧尾(起点)**相同的**下一条边**

```c
typedef struct VNode{   
 VertexType data;    
 ArcNode *firstin, *firstout;   
}VNode;
```

```c
typedef struct ArcNode{  
 int tailvex, headvex; 
 struct ArcNode *hlink, *tlink; 
}ArcNode; 
```

```c
typedef struct{
 VNode xlist[MaxVertexNum];    //顶点依旧用顺序存储(数组)
 int vexnum,arcnum;   //图的顶点数和弧数
} GLGraph;     //十字链表存储的图类型
```

#### 邻接多重表

仿照十字链表，对邻接表的边表进行改造，得到专门针对存储无向图的邻接多重表

邻接多重表边表结点

- 这条边依附的两个顶点在顶点表的下标
- 指向依附顶点ivex的**下一条边**
- 指向依附顶点jvex的**下一条边**

## 图的遍历

- 广度优先搜索(BFS:Breadth-First-Search):广度优先搜索类似于树的层序遍历算法
- 深度优先搜索(DFS:Depth-First-Search):深度优先搜索类似于树的先序遍历算法

BFS解决单源非带权图最短路径问题：按照距离由近到远来遍历图中每个顶点

## 图的应用 最小生成树

- 普利姆算法
  - ①从图中找第一个起始顶点v0，作为生成树的第一个顶点，然后从这个顶点到其他顶点的所有边中选一条权值最小的边。然后把这条边的另一个顶点v和这条边加入到生成树中。
②对剩下的其他所有顶点，分别检查这些顶点与顶点v的权值是否比这些顶点在lowcost数组中对应的权值小，如果更小，则用较小的权值更新lowcost数组。
③从更新后的lowcost数组中继续挑选权值最小而且不在生成树中的边，然后加入到生成树。
④反复执行②③直到所有所有顶点都加入到生成树中。

  - 双重循环，外层循环次数为**n-1**，内层并列的两个循环次数都是**n**。故普利姆算法时间复杂度为**O(n2)**而且时间复杂度只和n有关，所以适合**稠密图**

- 克鲁斯卡尔算法
  - 将图中边按照权值从小到大排列，然后从最小的边开始扫描，设置一个边的集合来记录，如果该边并入不构成回路的话，则将该边并入当前生成树。直到所有的边都检测完为止
  - 克鲁斯卡尔算法操作分为对边的权值**排序部分**和一个**单重for循环**，它们是并列关系，由于排序耗费时间大于单重循环，所以克鲁斯卡尔算法的**主要时间耗费在排序上**。排序和图中边的数量有关系，所以适合**稀疏图**。

## 图的应用 最短路径

- 迪杰斯特拉
  - 该算法设置一个集合S记录已求得的最短路径的顶点，可用一个数组s[]来实现，初始化为0，当s[vi]=1时表示将顶点vi放入S中，初始时把源点v0放入S中。此外，在构造过程中还设置了两个辅助数组：
dist[]：记录了从源点v0到其他各顶点当前的最短路径长度，dist[i]初值为arcs[v0][i]。
path[]：path[i]表示从源点到顶点i之间的最短路径的前驱结点，在算法结束时，可根据其值追溯得到源点v0到顶点vi的最短路径。

> 不断的试探加入新顶点是否使原来的路径变短

- 佛洛伊德
  - 递推产生一个n阶方阵序列A(−1)，A(0)，…，A(k)，…，A(n−1)
其中`A[k](i)[j]`表示从顶点vi到顶点vj的路径长度，**k表示绕行第k个顶点的运算步骤**。初始时，对于任意两个顶点vi和vj，若它们之间存在边，则以此边上的权值作为它们之间的最短路径长度；若它们之间不存在有向边，则以∞作为它们之间的最短路径长度。以后逐步尝试在原路径中加入顶点k(k=0，1，…，n-1)作为中间顶点。如果增加中间顶点后，得到的路径比原来的路径长度减少了，则以此新路径代替原路径。

>寻找所有结点之间的距离信息，并不断的更新。类似动态规划。

## 图的应用 拓扑排序

如果我们把每个环节看成图中一个顶点，在这样一个有向图中，用顶点表示活动，用弧表示活动之间的优先关系，那么这样的有向图称为AOV网(Activity On Vertex)

拓扑排序算法：
     从AOV网中选择一个入度为0的顶点输出，然后删去此顶点，并删除以此顶点为弧尾的弧。重复这个步骤直到输出图中全部顶点，或者找不到入度为0的顶点为止

## 图的应用 关键路径

AOE(Activity On Edge):在一个表示工程的带权有向图中，用顶点表示事件，用有向边表示活动，用边上的权值表示活动的持续时间，这种有向图的边表示活动的网称为AOE网。

AOE网，活动是在边上，边上的权值表示的是这个活动所需要耗费的时间。AOE网是在AOE的基础上来分析工程的最少需要时间。或者是为了缩短工期，需要找出哪些活动是要加快的。
