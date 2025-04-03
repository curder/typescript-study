# Typescript 类型体操

## 条件类型 Conditional Types

日常开发中需要基于输入的值来决定输出的值，有时也需要基于输入的值的类型来决定输出的值的类型。

条件类型 `Conditional types` 就是用来描述输入类型和输出类型之间的关系。

写法有点类似于 JavaScript 中的条件表达式。

```text
SomeType extends OtherType ? TrueType : FalseType;
```

比如使用使用条件类型来判断一个类型是否继承自另一个类型从而返回 `boolean` 类型。

```typescript
type IdType = string | number;
// 1. conditional types
// 判断 number 类型 是否继承自 IdType
type IsNumber = number extends IdType ? true : false; // type IsNumber = true
```

再比如利用条件类型可以重构函数重载。

```typescript
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

## 在条件类型中使用 infer 关键字

`infer` 关键字是 TypeScript 中非常强大的一个关键字，它可以在条件类型中使用。

`infer` 关键字可以用来推断类型。

```typescript
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

## 分发类型

当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成 分发的（distributive）。

```typescript
type ToArray<Type> = Type extends any ? Type[] : never;

type stringArray = toArray<string>; // string[]
type numberArray = toArray<string | number>; // number[]
type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]
```

当传入 `string | number` 联合类型时，会遍历联合类型中的每一个成员；

相当于 `ToArray<string> | ToArray<number>`；

所以最后的结果是：`string[] | number[]`；
