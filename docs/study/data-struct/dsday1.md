# 顺序表

## 建表

### 静态列表

```c
#define MaxSize 50
typedef int Elemtype;
typedef struct{
    ElemType data[Maxsize];
    int length;
}SqList; 
```

<!-- more -->

### 动态建表

```c
typedef int Elemtype;
typedef struct{
    ElemType *data;
    int MaxSize,length;
}SeqList;

#define initSize 100
SeqList L;
L.data=(ElemType*)malloc(sizeof(ElemType)*initSize);
```

## 顺序存储

### 插入

```c
bool ListInsert(SqList &L,int i,ElemType e){
    if(i<1||i>L.length-1) //必要的检查
        return false;
    if(L.length>=Maxsize)
        return false;
    for(int j=L.length;j>=i;j--)
        L.data[j]=L.data[j-1];
    L.data[i-1]=e;
    L.length++;
    return true;
}
```

### 删除

```c
bool ListDelete(SqList &L,int i,ElemType e){
    if(i<1||i>L.length-1) //必要的检查
        return false;
    e=L.data[i-1];
    for(int j=i;j<length;j++)
        L.data[j-1]=L.data[j];
        L.length--;
        return true;
}
```

# 链表

## 定义

```c
typedef struct LNode{
    ElemType data;
    struct LNode *next;
}LNode,*LinkList;
```

结点点和头指针的区别，头指针始终是指向第一个结点，结点点只是种为了方便的手段。

加上结点操作第一结点插入和删除操作统一了。空表和非空表的操作统一了。

## 建立链表

### 头插法

```c
LinkList CreateList(LinkLIst &L){
    int x;
    L=(LinkList)malloc(sizeof(LNode));
    LNode *S,L->next=NULL;
    scanf("%d",&x);
    while(x!=9999){
        s=(LinkList)malloc(sizeof(LNode));
        s->data=x;
        s->next=L->next;
        L->next=s;
        scanf("%d",&x);
    }
    return L;
}
```

// 一直从头开始插入结点，链表顺序与输入顺序相反

### 尾插法

```c
LinkList CreateList(LinkLIst &L){
    int x;
    L=(LinkList)malloc(sizeof(LNode));
    LNode *S,*r=L;
    scanf("%d",&x);
    while(x!=9999){
        s=(LinkList)malloc(sizeof(LNode));
        s->data=x;
        r->next=s;
        r=s;
        scanf("%d",&x);
    }
    r->next=NULL;
    return L;
}
```

### 查找

#### 按序号

```c
LNode* GetElem(LinkList L,int i){
    LNode *p=L->next;
    if(i==0) return L;
    if(i<1) return NULL;
    while(p！=NULL&&j<i){
        p=p->next;
        j++; 
    }
    return p;   
}

```

#### 按值

```c
LNode* LocatElem(LinkList L,int e){
    LNode *p=L-next;
    while(p!=NULL&&p->data!=e){
        p=p->next;
    }
    return p;   
}
```

### 插入

new s

```c
p=GetElem(L,i-1);
s->next=p->next;
p->next=s; //后插

//如要实现前插，可在后插基础上交换数据域
```

### 删除

```c
检查合法性，找到第i-1个结点
p=GetElem(L,i-1);
q=p->next;
p->next=q-next;
free(q);
```

### 求表长

```c
判断是否为空，分是否带头节点
    LNode *p=L-next;
    int count=0;
    while(p!=0)
    {
        p=p->next;
    }
```

## 双链表

### 定义

```c
typedef struct DNode{
    ElemType data;
    struct DNode *prior,*next;
}DNode,*DLinkList;
```

### 插入

``` c
在p后插入*s结点
p->next->prior=s;
s->next=p->next;
p->next=s;
s->prior=p;
```

### 删除

```c
删除*p后一个结点*q;
p->next=q-next;;
q->next->prior=p;
free(q)

```

## 循环链表

末尾指针指向头节点

## 双向循环链表

在单向基础上加上头节点指向末尾的
*p为尾节点
p->next==L,头结点prior域和next域均为L（这个链表自己）

## 静态链表

## 顺序表和链表的比较

基于储存，运算，环境三方面考虑
