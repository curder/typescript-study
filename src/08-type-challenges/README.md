# Typescript 类型体操

## 条件类型 Conditional Types

日常开发中需要基于输入的值来决定输出的值，有时也需要基于输入的值的类型来决定输出的值的类型。

条件类型 `Conditional types` 就是用来描述输入类型和输出类型之间的关系。

写法有点类似于 JavaScript 中的条件表达式。

```text
SomeType extends OtherType ? TrueType : FalseType;
```

比如使用使用条件类型来判断一个类型是否继承自另一个类型从而返回 `boolean` 类型。

```ts
type IdType = string | number;
// 1. conditional types
// 判断 number 类型 是否继承自 IdType
type IsNumber = number extends IdType ? true : false; // type IsNumber = true
```

再比如利用条件类型可以重构函数重载。

```ts
// 将函数重载重构为条件类型
// function sum(a: number, b: number): number;
// function sum(a: string, b: string): string;

function sum<T extends string | number>(
  a: T,
  b: T
): T extends number ? number : string;
function sum(a: any, b: any): any {
  return a + b;
}

sum(1, 2); // number
sum("1", "2"); // string
```

### 在条件类型中使用 infer 关键字

`infer` 关键字是 TypeScript 中非常强大的一个关键字，它可以在条件类型中使用。

`infer` 关键字可以用来推断类型。

```ts
type calcFnType = (a: number, b: number) => number;

function foo() {
  return "Hello";
}

// 推断函数的返回值类型
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;
// 推断函数的参数类型
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type calcFnReturnType = MyReturnType<calcFnType>; // number
type fooReturnType = MyReturnType<calcFnType>; // string
```

### 分发类型

当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成 分发的（distributive）。

```ts
type ToArray<Type> = Type extends any ? Type[] : never;

type stringArray = toArray<string>; // string[]
type numberArray = toArray<string | number>; // number[]
type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]
```

当传入 `string | number` 联合类型时，会遍历联合类型中的每一个成员；

相当于 `ToArray<string> | ToArray<number>`；

所以最后的结果是：`string[] | number[]`；

## 内置工具

### Partial

`Partial<Type>` 工具可以将一个类型的所有属性都变成可选的。

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyTodo = Partial<Todo>;

// 实现一个通用MyPartial<T>，它将T的每个属性设置为可选的。
type MyPartial<T> = {
  [K in keyof T]?: T[K]; // 映射类型
};

type MyTodo2 = MyPartial<Todo>; // { title?: string; description?: string; completed?: boolean; }
```

### Required

`Required<Type>` 工具可以将一个类型的所有属性都变成必选的。

```ts
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoType = Required<Todo>;

// 实现一个通用MyRequired<T>，它将T的每个属性设置为必选的。
type MyRequired<T> = {
  [K in keyof T]-?: T[K]; // 映射类型
};

type todoType2 = MyRequired<Todo>; // { title: string; description: string; completed: boolean; }
```

### Readonly

`Readonly<Type>` 工具可以将一个类型的所有属性都变成只读的。

```ts
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoType = Readonly<Todo>;

// 实现一个通用MyReadonly<T>，它将T的每个属性设置为只读的。
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type todoType2 = MyReadonly<Todo>; // { readonly title: string; readonly description?: string; readonly completed?: boolean; }

export {};
```

### Record

`Record<Keys, Type>` 工具用于构造一个对象类型，它所有的 key(键)都是 `Keys` 类型，它所有的 value(值)都是 `Type` 类型。

```ts
type keys = "processing" | "pending" | "done";
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoTypes = Record<keys, Todo>; // { processing: Todo; pending: Todo; done: Todo; }

// 实现一个通用MyRecord<K extends keyof any, T>，它接受key的集合K和一个类型T，并返回一个对应于对象类型的类型，其中K中的键是T类型。
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};
type todoTypes2 = MyRecord<keys, Todo>; // { processing: Todo; pending: Todo; done: Todo; }
```

### Pick

`Pick<Type, Keys>` 工具用于构造一个类型，它从 `Type` 类型中选取部分属性 `Keys`，并构造出一个新的类型。

```ts
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type myTodoType = Pick<Todo, "title" | "completed">; // { title: string; completed?: boolean; }

// 实现一个通用的MyPick<T, K>，它接受两个类型参数T和K。
// K指定应从T中选取的属性集。
// 当没有传入K时，它就和普通的Pick<T, K>一样。
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type myTodoType2 = MyPick<Todo, "title" | "completed">; // { title: string; completed?: boolean; }
```

### Omit

`Omit<Type, Keys>` 工具用于构造一个类型，它从 `Type` 类型中过滤部分属性 `Keys`，并构造出一个新的类型。

```ts
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type myTodoType = Omit<Todo, "title" | "completed">; // { description?: string | undefined; }

// 实现一个通用的MyOmit<T, K>，它接受两个类型参数T和K。
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type myTodoType2 = MyOmit<Todo, "title" | "completed">; // { description?: string | undefined; }
```

### Exclude

`Exclude<UnionType, ExcludedMembers>` 工具用于构造一个类型，它从 `UnionType` 类型中排除部分属性 `ExcludedMembers`，并构造出一个新的类型。

```ts
type Todo = "title" | "description" | "completed";
type myTodoType = Exclude<Todo, "title" | "description">; // "completed"

// 实现一个通用的MyExclude<T, U>，它从T中排除可以赋值给U的类型。
type MyExclude<T, U> = T extends U ? never : T;

type myTodoType2 = MyExclude<Todo, "title" | "description">; // "completed"
```

### Extract

`Extract<Type, Union>` 工具用于构造一个类型，它从 `Type` 类型中提取部分属性 `Union`，并构造出一个新的类型。

```ts
type Todo = "title" | "description" | "completed";
type myTodoType = Extract<Todo, "title" | "description">; // "title" | "description"

// 实现一个通用的MyExtract<T, U>，它从T中提取可以赋值给U的类型。
type MyExtract<T, U> = T extends U ? T : never;
type myTodoType2 = MyExtract<Todo, "title" | "description">; // "title" | "description"
```

### NonNullable

`NonNullable<Type>` 工具用于构造一个类型，它从 `Type` 类型中排除 `null` 和 `undefined`，并构造出一个新的类型。

```ts
type Todo = string | number | null | undefined;
type myTodoType = NonNullable<Todo>; // string | number

// 实现一个通用的MyNonNullable<T>，它接受一个类型T并返回一个非空类型。
type MyNonNullable<T> = T extends null | undefined ? never : T;
type myTodoType2 = MyNonNullable<Todo>; // string | number
```

### ReturnType

`ReturnType<Type>` 工具用于构造一个类型，它从 `Type` 类型中获取返回值类型，并构造出一个新的类型。

```ts
type Todo = () => string;
type myTodoType = ReturnType<Todo>; // string

// 实现一个通用的MyReturnType<T>，它接受一个函数类型，并返回该函数的返回类型。
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
type myTodoType2 = MyReturnType<Todo>; // string
```

### InstanceType

`InstanceType<Type>` 工具用于构造一个类型，它从 `Type` 类型中获取实例类型，并构造出一个新的类型。

```ts
class Todo {
  constructor(
    public title: string,
    public description?: string,
    public completed?: boolean
  ) {}
}

type myTodoType = InstanceType<typeof Todo>; // Todo

// 实现一个通用的MyInstanceType<T>，它返回构造函数T的实例类型。
type MyInstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;
type myTodoType3 = MyInstanceType<typeof Todo>; // Todo
```
