# 函数类型

在 JavaScript 开发中，函数是重要的组成部分，并且函数可以**作为一等公民**（可以作为参数，也可以作为返回值进行传递）。

## 函数类型表达式

在 Typescript 中，可以编写函数类型的表达式（Function Type Expressions），来表示函数类型。

```ts
// 格式：(参数列表) => 返回值类型
// 例如：(a: number, b: number) => number
type addType = (a: number, b: number) => number;

const add: addType = (a: number, b: number): number => {
  return a + b;
};
```

> [!WARNING]
>
> 某些语言中，可能形参名称 `a` 和 `b` 是可以省略，但是 `TypeScript` 是不可以的。

函数类型表达式是一种函数类型的表示方法，它可以用来表示函数的类型。

```ts
type calcType = (a: number, b: number) => number;
function calc(callback) {
  const result = callback(10, 20);
  console.log(result);
}

function sum(a: number, b: number): number {
  return a + b;
}
calc(sum); // 30

function mul(a: number, b: number): number {
  return a * b;
}
calc(mul); // 200

// 匿名函数
calc(function (a: number, b: number): number {
  return a - b;
}); // -10
```

## 调用签名

在 JavaScript 中，函数除了可以被调用，自己也是可以有属性值。

如果需要描述一个带有属性的函数，可以在一个对象类型中写一个调用签名（call signatures）。

```ts
interface IBar {
  name: string;
  age: number;
  // 函数调用签名
  (x: number): number;
}
const bar: IBar = (x: number): number => {
  return x;
};

bar.name = "zhangsan";
bar.age = 20;
bar(1);
```

> [!NOTE]
>
> **如何选择函数类型表达式或调用签名？**
>
> - 如果只是描述函数类型本身（函数允许被调用），使用函数类型表达式(Function Type Expressions)
> - 如果需要描述函数作为对象可以被调用，同时也有其他属性，使用调用签名(Call Signatures)

## 构造签名

JavaScript 函数也可以使用 `new` 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)，因为会产生一个新对象。

构造签名（Constructor Signatures）用于描述类的构造函数类型。

```ts
class Person {}

interface PersonConstructor {
  // 构造签名
  new (): Person;
}

function factory(fn: PersonConstructor) {
  const f = new fn();

  console.log(typeof f);

  return f;
}

factory(Person);
```

构造签名（ Construct Signatures ），方法是在调用签名前面加一个 `new` 关键词。

## 参数

函数的参数包括：必选参数、可选参数、默认参数和剩余参数。

### 可选参数

函数的可选参数（Optional Parameters），是指在函数定义时，可以指定某些参数为可选参数。

可选参数的语法是在参数名后面加上一个问号（`?`）。

```ts
function foo(x: number, y?: number) {
  return x + (y || 0);
}
console.log(foo(1)); // 1
```

> [!NOTE]
>
> 可选参数的默认值为 `undefined`。
> 可选参数必须放在所有参数的最后面。

### 默认参数

默认参数（Default Parameters），是指在函数定义时，可以指定某些参数的默认值。

默认参数的语法是在参数名后面加上一个等号（`=`），然后加上默认值。

默认参数有如下特征：

1. 参数的类型注解可以身略，Typescript 会进行类型推导。

2. 有默认值的参数，在调用时，可以接收 `undefined`。

```ts
function sum(nums: number[], start = 0, end = nums.length): number {
  let res = 0;
  for (let i = start; i < end; i++) {
    res += nums[i];
  }
  return res;
}
console.log(sum([1, 2, 3]));

console.log(sum([1, 2, 3], undefined));
```

### 剩余参数

剩余参数（Rest Parameters），是指在函数定义时，可以指定一个参数，该参数可以接收任意数量的参数。

```ts
function sum(...nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

console.log(sum(1, 2, 3)); // 6
```

## 函数的重载 `overload signatures`

在 TypeScript 中，可以编写不同的重载签名（overload signatures）来表示函数可以以不同的方式进行调用；

一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现。

```ts
// 重载签名
function add(x: number, y: number): number;
function add(x: string, y: string): string;

// 通用函数
function add(x: any, y: any): any {
  return x + y;
}

// 调用
console.log(add(1, 2));
console.log(add("1", "2"));
// add(1, "2"); // 报错，因为实现签名中没有定义 number + string 的情况，只能是 number + number 或者 string + string
// add("1", 2); // 报错，因为实现签名中没有定义 string + number 的情况，只能是 number + number 或者 string + string
```

联合类型和重载签名的选择问题：

```ts
// 定义一个函数，可以传入字符串或者数组，获取它们的长度。
function getLength(x: string | any[]): number {
  return x.length;
}
console.log(getLength("123"));
console.log(getLength([1, 2, 3]));
```

> [!NOTE]
>
> 在可能的情况下，尽量选择使用联合类型来实现

## this 类型

### this 默认类型

在 TypeScript 中，默认情况下，`this` 的类型是 `any`。

```ts
const obj = {
  name: "obj",
  getName() {
    // 默认情况下, this是any类型
    return this.name;
  },
};

// 2. 普通函数
function getName() {
  // 默认情况下, this是any类型
  return this;
}
```

### this 明确类型

创建一个 `tsconfig.json` 文件，并且在其中告知 `this` 必须明确指定（不能是隐式的）。

在设置了 `noImplicitThis: true` 时， Typescript 会根据上下文推导 this，但是在不能正确推导时会报错，需要明确
的指定 `this`。

```ts
// 1. 对象函数
const obj = {
  name: "obj",
  getName(this: {}) {
    console.log(this);
  },
};

// 2. 普通函数
function getName(this: { name: string }) {
  console.log(this);
}
getName.call({ name: "Curder" });
```

## this 内置工具

Typescript 提供了一些工具类型来辅助进行常见的类型转换，这些类型全局可用。

### ThisParameterType

用于提取一个函数类型的 this (opens new window)参数类型，如果这个函数类型没有 `this` 参数返回 `unknown`。

```ts
function foo(this: { name: string }) {
  console.log(this);
}

// 获取函数类型
type fooType = typeof foo;

// 获取 fooType 类型中的 this 的类型
type fooThisType = ThisParameterType<fooType>; // {name: string;}
```

### OmitThisParameter

用于移除一个函数类型的 this (opens new window)参数。

```ts
function foo(this: { name: string }) {
  console.log(this);
}
// 获取函数类型
type fooType = typeof foo;
// 移除 fooType 类型中的 this 参数
type fooThisType = OmitThisParameter<fooType>; // () => void
```

### ThisType

这个类型不返回一个转换过的类型，它被用作标记一个上下文的 `this` 类型。

```ts
interface IState {
  name: string;
  age: number;
}
interface IStore {
  state: IState;
  eating: () => void;
  running: () => void;
}
// 通过 ThisType 绑定 this 的上下文
const store: IStore & ThisType<IState> = {
  state: {
    name: "张三",
    age: 18,
  },
  eating() {
    console.log(this.name);
  },
  running() {
    console.log(this.age);
  },
};

store.eating.call(store.state);
```
