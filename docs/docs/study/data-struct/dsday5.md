

# 查找

在数据集合中寻找满足某种条件的数据元素的过程称为查找

- 静态查找表：顺序查找， 折半查找
- 动态查找表：二叉排序树，二叉平衡树

数据元素往往包含除了关键字以外的很多数据 这个数据元素也叫做是**记录**

<!-- more -->

``` c
typedef struct{
            Elemtype key;  // 关键字
            其他信息…
}数据元素(记录)
```

ASL n是查找表中数据元素的个数𝑝_𝑖是查找第i个元素的概率。一般是等概率查找， 𝑝_𝑖值为1/n。 𝑐_𝑖 是找到第i个元素需要比较的关键字次数，即查找长度。
ASL相当于是查找算法的基本操作执行次数

## 顺序查找

顺序查找(线性查找)，主要用于在线性表中进行查找。从查找表的一端开始，顺序扫描查找表，依次将扫描到的关键字和待查找的值key进行比较。如果相等，则查找成功。如果扫描结束仍然没有发现相等的数据元素，则查找失败。

``` c
int Search1(int a[ ],int n,int key){
    for(int i=1;i<=n;i++){  //注意从1开始
          if(a[i]==key)return i; //查找成功
    }
    return 0; //查找失败
}
```

```c
int Search2(int a[ ],int n,int key){
     int i=n;
     a[0]=key; //设置“哨兵”
     while(a[i]!=key){ //如果不是要找的元素
            i--;  //从后往前找
      }
      return i; //如果查找失败也会返回0
}
```

由于查找有查找成功和失败两种情况

所以ASL也分为查找成功的ASL和查找失败的ASL
无论成功还是失败，顺序查找的ASL都是关于n的一次多项式，时间复杂度为O(n)

## 折半查找

折半查找仅适用于有序的顺序表
首先将给定值key与表中中间位置元素的关键字比较，若相等，则查找成功，返回该元素的存储位置；若不等，则所需查找的元素只能在中间元素以外的前半部分或后半部分中。然后在缩小的范围内继续进行同样的查找，如此重复直到找到为止，或者确定表中没有所需要查找的元素，则查找不成功，返回查找失败的信息。

``` c
int Binary_Search(SeqList L,ElemType key,int n){  //L是一个顺序表,key是待查找的关键字，n是L的长度
 int low=0,high=n-1,mid;                      //low high mid 分别代表当前查找段的首位下标，末位下标                                           //和中间下标     
        while(low<=high){                               //只要low不和hig汇合，就表示查找表没有扫完
                 mid=(low+high)/2;               //中间下标为low和high之和除2  
  if(L.elem[mid]==key)            //查找成功
   return  mid;  
  else if(L.elem[mid]>key)       //中间值比key大
   high=mid-1; //由于有序，则key只可能在更小的地方出现 
  else                                      //中间值比key小
   low=mid+1; //key只可能在更小的地方出现
 }
 return  -1;
}
```

### 折半查找判定树

对于折半查找，查找的比较次数就是从根结点到该结点经历的结点数
所以折半查找的时间复杂度为O(logn)

## 分块查找

分块查找又称为索引顺序查找
需要额外建立一个索引表来存储索引，每个索引对应表中每一块。

```c
typedef struct{
        int key;  //这个索引块中最大关键字的值
        int low,num; //存储索引块中第一个元素下标和块的长度
}indexElem  //索引块结构
```

分块查找思想：

1. 确定待查找值在哪个块（折半查找）
2. 在确定的块中查找待查找值（顺序查找）

由于分块查找实际是进行两次查找，所以整个算法的平均查找长度是两次查找的平均查找长度之和。
即ASL分块=ASL折半+ASL顺序

## 二叉排序树

二叉排序树(Binary Search Tree 也叫二叉搜索树)或者是一棵空树，或者是具有以下性质的二叉树

1. 若左子树不空，则左子树上所有结点的值均**小于**它的根结点的值。
2. 若右子树不空，则右子树上所有结点的值均**大于**它的根结点的值。
3. 它的左右子树也是一棵二叉排序树。

对二叉排序树进行中序遍历可以得到一个递增的有序序列

由于二叉排序树的特点(左子树<根结点<右子树),所以每次查找一个关键字，需要先和根结点进行比较：
如果这个关键字小于根结点的值，则再到这个根结点的左子树进行同样的比较操作一直进行下去直到找到该关键字，表示查找成功，或者是空指针，表示查找失败。
如果这个关键字大于根结点的值，则再到这个根结点的右子树进行同样的比较操作一直进行下去直到找到该关键字，表示查找成功，或者是空指针，表示查找失败。

```c
typedef struct BiTNode{            //二叉排序树结点结构
        int data;                            //结点数据
        struct BiTNode *lchild,*rchild;   //指向该结点左右孩子的指针
}BiTNode, *BiTree; 
```

二叉排序树的目的，不是为了排序，而是为了提高查找和插入删除关键字的速度。

### 二叉排序树的操作

#### 查找关键字

```c
//递归代码
BiTNode *BST_Search(BiTNode *t,ElemType key){
               if(t==NULL)return NULL; //如果树为空则 返回空值
 else{
                        if(t->key==key)return t;
                        else if(key<t->key)return BST_Search(t->lchild,key);
                        else return BST_Search(t->rchild,key);
}
```

```c
//非递归代码
BiTNode * BST_Search(BiTNode *t,ElemType key){
 BiTNode *p=t;   //工作指针 初值指向二叉排序树根结点
 while(p!=NULL && key!=p->data){   //p不为空且没有找到key
  if(key<p->data)  p=p->lchild;  //如果key值比p指向结点值小，则查找左子树
  else  p=p->rchild;  //如果key值比p指向结点值大，则查找右子树
 }
 return p; //查找成功返回指向值为key值的结点的指针 查找失败返回NULL 
}
```

#### 插入关键字

```c
int BST_Insert(BiTNode* &t,ElemType k){ //插入操作是要对树进行修改，所以是引用类型的指针
 if(t==NULL){ //原树为空，新插入的记录为根结点
  t=(BiTNode*)malloc(sizeof(BiTNode));  //malloc库函数分配新结点的存储空间
  t->key=k;                                         //该结点的关键字值赋值为k
  t->lchild=t->rhild=NULL;                //根结点初始化左右孩子为空
  return  1;               //返回1，表示成功
 }
 else if(k==t->key)   //树中存在相同关键字的结点 插入失败
  return  0;
 else if(k<t->key)   //插入到t的左子树中
  return  BST_Insert(t->lchild,k);
 else    //插入到t的右子树中
  return  BST_Insert(t->rchild,k);
}
```

#### 构造

构造二叉排序树的过程可以理解成从一棵空树开始，依次插入二叉排序树中的结点。

```c
void Creat_BST(BiTNode *&t,ElemType key[ ],int n){ 
//t是二叉排序树的根结点指针 key是关键字数组 n是关键字数量
 t=NULL;    //初始时t为空树
 int i=0;
 while(i<n){    
                             BST_Insert(t,key[i]);
  i++;
 }
}
```

#### 删除结点

1. 删除的是叶子结点
2. 删除的是仅有左子树或者右子树的结点
3. 删除的是左右子树都有的结点

### 二叉排序树分析

最好的情况就是这棵树能够足够平衡，也就是像完全二叉树。这种情况下查找时间复杂度为o(logn)
最坏的情况是这棵树是一个只有左或者右孩子的单分支斜树，此时它相当于是一个单链表，查找时间复杂度是O(n)

## 平衡二叉树(AVL树)

平衡二叉树(AVL树)是特殊的二叉排序树，特殊的地方在于左右子树的高度之差**绝对值**不超过1，而且左右子树又是一棵平衡二叉树。
定义结点左子树与右子树的高度差为该结点的平衡因子，则平衡二叉树结点的平衡因子的值只可能是−1、0或1。

平衡二叉树的建立过程和二叉排序树的建立过程是相似的，都是从一棵空树开始陆续插入结点。不同的地方在于对于平衡二叉树的建立过程中，由于插入结点可能会破坏结点的平衡性，所以需要进行**平衡调整**。

以距离插入结点最近的，平衡因子绝对值大于1的结点为**根**的子树称为**最小不平衡子树**

每插入一个结点，都要检查二叉排序树的平衡性，如果出现不平衡，那么平衡调整首先要找出最小不平衡子树，然后对这个最小不平衡子树进行调整。

- LL调整(左孩子的左子树上插入结点导致)
- RR调整(右孩子的右子树上插入结点导致)
- LR调整(左孩子的右子树上插入结点导致)
- RL调整(右孩子的左子树上插入结点导致)

“正则右旋”
最小不平衡子树根结点的平衡因子为2>0
它的左孩子结点平衡因子为1>0
两个都大于0，所以直接右旋就可以调整

“负则左旋”
最小不平衡子树根结点的平衡因子为-2<0
它的右孩子结点平衡因子为-1<0
两个都小于0，所以直接左旋就可以调整

最小不平衡子树根结点的平衡因子为-2<0它的孩子结点平衡因子为1>0
解决办法：先将孩子结点的平衡因子转换成和根结点正负一致，再进行调整

## B树和B+树

2-3树是一种多路查找树：2和3的意思就是2-3树包含两种结点

1. 2结点包含一个元素和两个孩子(或者没有孩子)。
    ①左子树包含的元素小于该结点的元素值，右子树包含的元素大于该结点的元素值
    ②2结点要不有两个孩子，要不就没有孩子，不允许有一个孩子
2. 3结点包含一大一小两个元素和三个孩子(或者没有孩子)。(两个元素按大小顺序排列好)
    ①左子树包含的元素小于该结点较小的元素值，右子树包含的元素大于该结点较大的元素值，中间子树包含的元素介于这两个元素值之间。
    ②3结点要不有三个孩子，要不就没有孩子，不允许有一个或两个孩子
3. 2-3树所有叶子结点都在同一层次

B树也是一种**平衡的**多路查找树，2-3树和2-3-4树都是B树的特例，我们把树中结点最大的孩子数目称为B树的阶。通常记为m。
一棵m阶B树或为空树，或为满足如下特性的m叉树：

1. 树中每个结点至多有m棵子树。（即至多含有m-1个关键字) ("两棵子树指针夹着一个关键字")
2. 若根结点不是终端结点，则至少有两棵子树。(至少一个关键字)
3. 除根结点外的所有非叶结点至少有 ⌈m/2⌉棵子树。（即至少含有⌈m/2⌉-1个关键字）
4. 所有非叶结点的结构如下：
5. 所有的叶子结点出现在同一层次上，不带信息。(就像是折半查找判断树中查找失败的结点)

B树是多路查找树，二叉排序树是二路查找，B树是多路查找，所以它是二叉排序树的拓展。因此，B树的查找操作和二叉排序树的查找操作非常类似。

### B树的操作

#### B树的插入操作

在二叉排序树中，仅需查找到需插入的终端结点的位置。但是，在B树中找到插入的位置后，并不能简单地将其添加到终端结点位置，因为此时可能会导致整棵树不再满足B树中定义中的要求。
分裂的方法：取这个关键字数组中的中间关键字(⌈n/2⌉)作为新的结点，然后其他关键字形成两个结点作为新结点的左右孩子。

#### B树的删除操作

B树中的删除操作与插入操作类似，但要稍微复杂些，要使得删除后的结点中的关键字个数≥⌈m/2⌉-1 ，因此将涉及结点的“合并”问题。由于删除的关键字位置不同，可以分为关键字**在终端结点**和**不在终端结点**上两种情况。

## B+树

m阶的B+树与m阶的B树的主要差异在于：

1. 在B+树中，具有n个关键字的结点只含有n棵子树，即每个关键字对应一棵子树；而在B树中，具有n个关键字的结点含有(n+1)棵子树。
2. 在B+树中，每个结点（非根内部结点）关键字个数n的范围是 ⌈m/2⌉≤n≤m（根结点1≤n≤m），在B树中，每个结点（非根内部结点）关键字个数n的范围是⌈m/2⌉ -1≤n≤m-1（根结点：1≤n≤m-1）。
3. 在B+树中，叶结点包含信息，所有非叶结点仅起到索引作用，非叶结点中的每个索引项只含有对应子树的最大关键字和指向该子树的指针，不含有该关键字对应记录的存储地址。
4. 在B+树中，叶结点包含了全部关键字，即在非叶结点中**出现的关键字也会出现在叶结点中**；**而且叶子结点的指针指向记录**，而在B树中，叶结点包含的关键字和其他结点包含的关键字是不重复的。

## 散列表

散列表：根据给定的关键字来计算出关键字在表中的地址的数据结构。也就是说，散列表建立了关键字和存储地址之间的一种直接映射关系。

散列函数：一个把查找表中的关键字映射成该关键字对应的地址的函数，记为Hash(key)=Addr。

散列函数可能会把两个或两个以上的不同关键字映射到同一地址，称这种情况为“冲突”，这些发生碰撞的不同关键字称为同义词。

1. 散列函数的定义域必须包含全部需要存储的关键字，而值域的范围则依赖于散列表的大小或地址范围。
2. 散列函数计算出来的地址应该能等概率、均匀地分布在整个地址空间，从而减少冲突的发生。
3. 散列函数应尽量简单，能够在较短的时间内就计算出任一关键字对应的散列地址。

### 常用Hash函数的构造方法

1. 开放定址法：直接取关键字的某个线性函数值为散列地址，散列函数为H(key)=a×key+b。式中，a和b是常数。这种方法计算最简单，并且不会产生冲突
2. 除留余数法：假定散列表表长为m，取一个不大于m但最接近或等于m的质数p，利用以下公式把关键字转换成散列地址。散列函数为H(key)=key % p
除留余数法的关键是选好p，使得每一个关键字通过该函数转换后等概率地映射到散列空间上的任一地址，从而尽可能减少冲突的可能性
3. 数字分析法
设关键字是r进制数（如十进制数），而r个数码在各位上出现的频率不一定相同，可能在某些位上分布均匀些，每种数码出现的机会均等；而在某些位上分布不均匀，只有某几种数码经常出现，则应选取数码分布较为均匀的若干位作为散列地址。这种方法适合于已知的关键字集合
4. 平方取中法
顾名思义，取关键字的平方值的中间几位作为散列地址。具体取多少位要看实际情况而定。这种方法得到的散列地址与关键字的每一位都有关系，使得散列地址分布比较均匀。
5. 折叠法
将关键字分割成位数相同的几部分（最后一部分的位数可以短一些），然后取这几部分的叠加和作为散列地址，这种方法称为折叠法。关键字位数很多，而且关键字中每一位上数字分布大致均匀时，可以采用折叠法得到散列地址。

### 常用Hash函数的冲突处理办法

1. 开放定址法：将产生冲突的Hash地址作为自变量，通过某种冲突解决函数得到一个新的空闲的Hash地址。
2. 拉链法：对于不同的关键字可能会通过散列函数映射到同一地址，为了避免非同义词发生冲突，可以把所有的同义词存储在一个线性链表中，这个线性链表由其散列地址唯一标识。拉链法适用于经常进行插入和删除的情况。

### 散列表的性能

装填因子：散列表的装填因子一般记为α，定义为一个表的装满程度。

散列表的平均查找长度依赖于散列表的填装因子α，而不直接依赖于n或m。
α越大，表示装填的记录越“满”，发生冲突的可能性就越大，反之发生冲突的可能性越小。
