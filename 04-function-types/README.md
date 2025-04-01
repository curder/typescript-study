# 函数类型

在 JavaScript 开发中，函数是重要的组成部分，并且函数可以**作为一等公民**（可以作为参数，也可以作为返回值进行传递）。

## 函数类型表达式

在 Typescript 中，可以编写函数类型的表达式（Function Type Expressions），来表示函数类型。

```typescript
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

```typescript
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

```typescript
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
> 如何选择函数类型表达式或调用签名？
>
> - 如果只是描述函数类型本身（函数允许被调用），使用函数类型表达式(Function Type Expressions)
> - 如果需要描述函数作为对象可以被调用，同时也有其他属性，使用调用签名(Call Signatures)
