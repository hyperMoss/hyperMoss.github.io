---
title: 树
date: '2019-01-08 20:15:55'
---

# 树

## 树的基本概念

<!-- more -->

### 树的定义

树是N（N≥0）个结点的有限集合，N=0时，称为空树，是一种特殊情况。在任意一棵非空树中应满足：

- 有且仅有一个特定的称为根的结点。

- 当N>1时，其余结点可分为m（m>0）
  
个互不相交的有限集合T1，T2，…，Tm，
其中每一个集合本身又是一棵树，并且
称为根结点的子树。

### 树的性质

- 树中的结点数等于所有结点的度数加1。
  
- 度为m的树中第i层上至多有mi−1个结点（i≥1）。
  
- 高度为h的m叉树至多有(mh
  
-1)/(m-1)个结点

## 树的存储结构

### 顺序存储结构

#### 双亲表示法

双亲表示法：用一组连续的存储空间存储树的结点，同时在每个结点中，用一个变量存储该结点的双亲结点在数组中的位置。

```c
typedef char ElemType;
typedef struct TNode{
ElemType data; //结点数据
int parent; //该结点双亲在数组中的下标
}TNode; //结点数据类型
data parent
结点类型
#define Maxsize 100
typedef struct {
TNode nodes[MaxSize]; //结点数组
int n; //结点数量
}Tree; //树的双亲表示结构
```

#### 孩子表示法

把每个结点的孩子结点排列起来存储成一个单链表。所以n个结点就有n个链表；
如果是叶子结点，那这个结点的孩子单链表就是空的；
然后n个单链表的的头指针又存储在一个顺序表（数组）中。

```c
typedef char ElemType;
typedef struct CNode{
int child; //该孩子在表头数组的下标
struct CNode *next; //指向该结点的下一个孩子结点
}CNode，*Child; //孩子结点数据类型
typedef struct {
Elemtype data; //结点数据域
Child firstchild; //指向该结点的第一个孩子结点
}TNode; //孩子结点数据类型

```

#### 孩子兄弟表示法

孩子兄弟表示法：顾名思义就是要存储孩子和孩子结点的兄弟，具体来说，就是设置两个指针，分别指向该结
点的第一个孩子结点和这个孩子结点的右兄弟结点。

```c
typedef char ElemType;
typedef struct CSNode{
ElemType data; //该结点的数据域
struct CSNode *firstchild,*rightsib; //指向该结点的第一个孩子结点和该结点的右兄弟结点
}CSNode;
```

## 二叉树

二叉树是n（n≥0）个结点的有限集合：

- 或者为空二叉树，即n=0。
- 或者由一个根结点和两个互不相交的被称为根的左子树和右子树组成。左子树和右子树又分别是一棵二叉树。

二叉树的五种基本形态：

- 空树
- 只有一个根结点
- 根结点只有左子树
- 根结点只有右子树
- 根结点既有左子树又有右子树

### 特殊二叉树

- 斜树
- 满二叉树
- 完全二叉树

### 二叉树的性质

- 非空二叉树上叶子结点数等于度为2的结点数加1
- 非空二叉树上第K层上至多有2k−1个结点（K≥1）
- 高度为H的二叉树至多有2H-1个结点（H≥1）
- 具有N个（N>0）结点的完全二叉树的高度为 log2(N+1)或log2N+1。
  
## 二叉树的存储结构

### 顺序存储

按层序遍历 存储在数组中

### 链式存储

二叉树每个结点最多两个孩子，所以设计二叉树的结点结构时考虑两个指针指向该结点的两个孩子。

```c
typedef struct BiTNode{
ElemType data; //数据域
struct BiTNode *lchild,*rchild; //指向该结点的左、右孩子指针
}BiTNode,*BiTree; //二叉树结点结构
```

## 二叉树的遍历（递归）

### 递归先序遍历

ROOT LEFT RIGHT

```c
void PreOrder(BiTree T){
if(T!=NULL){
printf(“%c”,T->data) //访问根结点
PreOrder(T->lchild); //递归遍历左子树
PreOrder(T->rchild); //递归遍历右子树
    }
}
```

### 递归中序遍历

LEFT ROOT RIGHT

```c
void InOrder(BiTree T){
if(T!=NULL){
InOrder(T->lchild); //递归遍历左子树
printf(“%c”,T->data)； //访问根结点
InOrder(T->rchild); //递归遍历右子树
    }
}
```

### 递归后序遍历

LEFT RIGHT ROOT

```c
void PostOrder(BiTree T){
if(T!=NULL){
PostOrder(T->lchild); //递归遍历左子树
PostOrder(T->rchild); //递归遍历右子树
printf(“%c”,T->data)； //访问根结点
    }
}
```

## 二叉树的遍历（非递归）

### 非递归先序遍历

ROOT LEFT RIGHT

```c
Void PreOrderTraverse(BiTree b){
    InitStack(S);
    BiTree p=b; //工作指针p
    while(p || !IsEmpty(S)){
     while(p){
     printf(“%c”,p->data); //先序先遍历结点
        Push(S,p); //进栈保存
        p=p->lchild; 
         }
    if(!IsEmpty(S)){
        p=Pop(S);
         p=p->rchild;
    }
}
```

### 非递归中序遍历

LEFT ROOT RIGHT

```c
Void PreOrderTraverse(BiTree b){
    InitStack(S);
    BiTree p=b; //工作指针p
    while(p || !IsEmpty(S)){
        while(p){ //中序先将结点进栈保存
        Push(S,p);
        p=p->lchild;
    } 
    //遍历到左下角尽头再出栈访问
    p=Pop(S);
    printf(“%c”,p->data);
    p=p->rchild; //遍历右孩子
    }
}
```

### 非递归后序遍历

LEFT RIGHT ROOT

```c
Void PostOrderTraverse(BiTree b){
    InitStack(S);
    BiTree p=b，r=NULL; //工作指针p 辅助指针r
     while(p || !IsEmpty(S)){
    //1.从根结点到最左下角的左子树都入栈
    if(p){ 
        Push(S,p);
        p=p->lchild;
        } 
    //2.返回栈顶的两种情况
    else{
        GetTop(S,p); //取栈顶 注意不是出栈！
    //①右子树还未访问，而且右子树不空，第一次栈顶
        if(p->rchild &&p->rchild !=r) p=p->rchild;
    //②右子树已经访问或为空，接下来出栈访问结点
    else{
        Pop(S,p);
        printf(“%c”,p->data);
        r=p; //指向访问过的右子树根结点
        p=NULL; //使p为空从而继续访问栈顶
    }
}

```

### 层序遍历

```c
void LevelOrder(BiTree b){
    InitQueue(Q);
    BiTree p;
    EnQueue(Q,b); //根结点进队
        while(!IsEmpty(Q)){ //队列不空循环
        DeQueue(Q，p) //队头元素出队
        printf(“%c”,p->data);
        if(p->lchild!=NULL)
            EnQueue(Q,p->lchild);
        if(p->rchild!=NULL)
            EnQueue(Q,p->rchild);
    }
}

```

## 线索二叉树

定义

```c
typedef struct ThreadNode{
ElemType data;
struct ThreadNode *lchild,*rchild;
int ltag,rtag;
}ThreadNode,*ThreadTree; //线索链表
```

构造

```c
void InThread(ThreadTree &p,ThreadTree &pre){
//中序遍历对二叉树线索化的递归算法
 void InThread(ThreadTree &p,ThreadTree &pre){
//中序遍历对二叉树线索化的递归算法
    if(p){
        InThread(p->lchild,pre);
        if(p->lchild==NULL){
            p->lchild=pre;
            p->ltag=1;
        }
    if(pre!=NULL&&pre->rchild==NULL){
        pre->rchild=p;
        pre->rtag=1;
    }
    pre=p;
    InThread(p->rchild,pre);
    }
}
```

遍历

```c
void InOrderTraverse(ThreadTree T){
    ThreadTree p=T；
    while(p){
        while(p->ltag==0)p=p->lchild;
            printf(“%c”,p->data);
        while(p->rtag==1&&p->rchild){
            p=p->rchild;
            printf(“%c”,p->data);
        }
    p=p->rchild;
    }
}

```

## 哈夫曼树和哈夫曼编码

算法的描述如下：

1. 将这N个结点分别作为N棵仅含一个结点的二叉树，构成森林F。
2. 构造一个新结点，并从F中选取两棵根结点权值最小的树作为新结点的左、右子树，并且将新结点的权值置为左、右子树上根结点的权值之和。
3. 从F中删除刚才选出的两棵树，同时将新得到的树加入F中。
4. 重复步骤2）和3），直至F中只剩下一棵树为止。
