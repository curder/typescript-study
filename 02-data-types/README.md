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
