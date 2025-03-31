# Typescript 数据类型

`TypeScript` 是 `JavaScript` 的一个超集。

## number 类型

数字类型是开发中经常使用的类型，`TypeScript` 和 `JavaScript` 一样，不区分整型（int）和浮点型（double），统一为
`number` 类型。

```typescript
let num = 100;
num = 2.22;
```

ES6 中新增了二进制和八进制的表示方法，在 `TypeScript` 中也是支持二进制、八进制、十六进制的表示：

```typescript
const binary = 0b1010; // 二进制
const octal = 0o744; // 八进制
const hex = 0x1f; // 十六进制
```

## boolean 类型

布尔类型表示真或假，在 `TypeScript` 中使用 `boolean` 表示：

```typescript
const flag = true;
```

## string 类型

字符串类型使用 `string` 表示，可以使用单引号或者双引号表示：

```typescript
let message = "hello typescript";
message = "hello typescript";
```

也支持 ES6 的模板字符串来拼接变量和字符串：

```typescript
const name = "typescript";

const message = `hello ${name}`;
```

## array 类型

数组类型的定义也非常简单，有两种方式：

1. `string[]` 表示数组中元素类型为 `string`

2. `Array<string>` 表示数组中元素类型为 `string`，`Array<string>` 事实上是一种泛型的写法。

```typescript
const arr1: Array<string> = ["1", "2", "3"];
const arr2: string[] = ["1", "2", "3"];
```

> 如果添加其他类型到数组中会报错。

## object 类型

`object` 对象类型可以用于描述一个对象：

```typescript
const info: object = {
  name: "typescript",
  age: 100,
};
```

但是从 `info` 中不能获取数据，也不能设置数据。

```typescript
const info: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30,
};
```

## symbol 类型

`symbol` 类型表示唯一值，在 `TypeScript` 中使用 `symbol` 表示：

```typescript
const s1 = Symbol();
const s2 = Symbol();

const person = {
  [s1]: "John",
  [s2]: "Jane",
};
console.log(person[s1]); // John
console.log(person[s2]); // Jane
```

## `null` 和 `undefined`

`null` 和 `undefined` 是 `TypeScript` 中的两个基本类型，`null` 表示空值，`undefined` 表示未定义。

```typescript
let n: null = null;
let u: undefined = undefined;
```

## 函数的参数类型

函数是 `JavaScript` 非常重要的组成部分，在 `TypeScript` 中允许指定函数的参数类型。

```typescript
function add(x: number, y: number) {
  return x + y;
}
```

声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型。

## 函数的返回值类型

函数的返回类型也可以使用类型注解来指定。

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

和变量的类型注解一样，通常情况下不需要返回类型注解，因为 `TypeScript` 会根据 `return` 返回值推断函数的返回类型。

## 匿名函数的参数类型

匿名函数与函数声明会有一些不同：

- 当一个函数出现在 `TypeScript` 可以确定该函数会被如何调用的地方时
- 该函数的参数会自动指定类型

```typescript
const names = ["Alice", "Bob", "Eve"];

// 大多数匿名函数最好不要添加类型注解，因为 TS 可以自动推断出类型
names.forEach((name) => {
  console.log(name.toUpperCase());
});
```

并没有指定 `name` 的类型，但是 `name` 是一个 `string` 类型，这是因为 `TypeScript` 会根据 `forEach` 函数的类型以及数组的类型推断出 `name` 的类型。

这个过程称之为上下文类型（`contextual typing`），因为函数执行的上下文可以帮助确定参数和返回值的类型。

## 对象类型

使用对象类型来限定函数接受的参数是一个对象。

```typescript
// 对象类型和函数类型结合使用
function printCoordinate(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordinate({ x: 3, y: 7 });
```

> [!tip] 请注意
>
> 1. 属性之间可以使用 `,` 或者 `;` 来分割，最后一个分隔符是可选的；
> 2. 每个属性的类型部分也是可选的，如果不指定，那么就是 `any` 类型；

## 可选类型

对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个 **`?`** 来表示可选属性。

```typescript
function printCoordinate(pt: { x: number; y: number; z?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  console.log("The coordinate's z value is " + pt.z); // z 是可选属性，可能为 nul
}

printCoordinate({ x: 3, y: 7 });
printCoordinate({ x: 3, y: 7, z: 10 });
```
