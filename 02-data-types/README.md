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
