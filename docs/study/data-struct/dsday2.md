# 栈与队列

## 栈
<!-- more -->
### 栈的顺序存储结构

#### 定义

```c
#define MaxSize 50 //定义栈中元素的最大个数
typedef struct{
Elemtype data[MaxSize]; //存放栈中元素
int top; //栈顶指针
} SqStack; //顺序栈的简写
```

#### 基本操作

##### 初始化

```c
void InitStack(&s){
    s.top=-1;
}
```

##### 判栈空

```c
bool StackEmpty(SqStack S){
if(s.top==-1) return true;
else return false;
}
```

##### 进栈

```c
bool Push(SqStack &S ，ElemType x){
if(S.top==MaxSize-1) return false;
S.data[++S.top]=x; return true;
}
```

##### 出栈

```c
bool Pop(SqStack &S，ElemType &x){
if(S.top==-1) return false;
x=S.data[S.top--]; 
return true;
}
```

##### 读栈顶

```c
bool GetTop(SqStack S，ElemType &x){
if(S.top==-1) return false;
x=S.data[S.top]; 
return true;
}
```

#### 共享栈

##### 定义栈

```c
#define MaxSize 100 //定义栈中元素的最大个数
typedef struct{
Elemtype data[MaxSize]; //存放栈中元素
int top1; //栈1栈顶指针
int top2; //栈2栈顶指针
} SqDoubleStack; //顺序共享栈的简写
```

##### 进栈

```c
bool Push(SqDoubleStack &S ，ElemType x，int stackNum){
if(S.top1+1==s.top2) return false; //栈满
if(stackNum==1) S.data[++S.top1]=x; //栈1有元素进栈
else if(stackNum==2) S.data[--S.top2]=x; //栈2有元素进栈
return true;
}
```

#### 链式栈

##### 定义栈

```c
typedef struct SNode{
Elemtype data; //存放栈中元素
struct SNode *next ; //栈顶指针
} SNode，
*SLink //链栈的结点
typedef struct LinkStack{
SLink top; //栈顶指针
int count; //链栈结点数
}LinkStack //链栈

```

##### 进栈

```c
bool Push(LinkStack *S, ElemType x){
SLink p=(SLink)malloc(sizeof(SNode)); //给新元素分配空间
p->data=x; //新元素的值
p->next=S->top; //p的后继指向栈顶元素
S->top=p; //栈顶指针指向新的元素
S->count++; //栈中元素个数加1
return true; 
}
```

##### 出栈

```c
bool Pop(LinkStack *S, ElemType&x){
if(S->top==NULL) return false;
x=S->top->data; //栈顶元素值
Slink p=S->top; //辅助指针
S->top=S->top->next; //栈顶指针后移
free(p); //释放被删除数据的存储空间
S->count--; //栈中元素个数减一
return true; 
}
```

## 队列

### 顺序队列

#### 定义

```c
#define MaxSize 50 //定义队列中元素的最大个数
typedef struct{
ElemType data[MaxSize]; //存放队列元素
int front，rear; //队头指针和队尾指针
} SqQueue;
```

### 循环队列

#### 循环队列操作

##### 入队

```c
bool EnQueue(SqQueue &Q,ElemType x){
if((Q.rear+1)%MaxSize==Q.front) return false; //队满
Q.data[Q.rear]=x;
Q.rear=(Q.rear+1)%MaxSize; 
return true;
}
```

##### 出队

```c
bool DeQueue(SqQueue &Q,ElemType &x){
if(Q.rear==Q.front) return false; //队空，报错
x=Q.data[Q.front];
Q.front=(Q.front+1)%MaxSize;
return true;
}
```

### 链式队列

#### 定义

```c
typedef struct{ //链式队列结点
ElemType data;
struct LinkNode *next;
}LinkNode;
typedef struct{ //链式队列
LinkNode *front,*rear; //队头和队尾指针
}LinkQueue;
```

#### 链式队列操作

##### 入队

```c
void EnQueue(LinkQueue &Q，ElemType x){
s=(LinkNode *)malloc(sizeof(LinkNode));
s->data=x; 
s->next=NULL; 
Q.rear->next=s;
Q.rear=s;
}
```

##### 出队

```c
bool DeQueue(LinkQueue &Q,ElemType &x){
if(Q.front==Q.rear) return false; //空队
p=Q.front->next;
x=p->data;
Q.front->next=p->next;
if(Q.rear==p) Q.rear=Q.front; //若原队列中只有一个结点，删除后变空
free(p);
return true;
}
```

## 栈的运用

### 括号匹配

```c
bool Check(char *str ){
stack s;
InitStack(s);
int len=strlen(str); //字符串长度为len
for(int i=0;i<len;++i)
{
char a=str[i];
switch(a){
case '(':
case '[':
Push(s,a);
break;
case ')':
if( Pop(s)!=‘(‘ ) return false; //出栈顶。如果不匹配直接返回不合法
break;
case ']':
if( Pop(s)!=‘]’ ) return false; 
break;
}
}
if(Empty(s)) return true; //匹配完所有括号最后要求栈中为空
else return false
}
```

### 表达式求值
  
### 递归

斐波拉契数列
  
```c
int Fib (int n) { 
if(n==0) return 0; 
else if(n==1) return 1;
else return Fib(n-1)+Fib(n-2);
} 
```
  