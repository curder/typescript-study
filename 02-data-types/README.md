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

## 函数类型


### 函数的参数类型

函数是 `JavaScript` 非常重要的组成部分，在 `TypeScript` 中允许指定函数的参数类型。

```typescript
function add(x: number, y: number) {
  return x + y;
}
```

声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型。

### 函数的返回值类型

函数的返回类型也可以使用类型注解来指定。

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

和变量的类型注解一样，通常情况下不需要返回类型注解，因为 `TypeScript` 会根据 `return` 返回值推断函数的返回类型。

### 匿名函数的参数类型

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

> [!TIP]
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

## any 类型

在某些情况下确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候可以使用 `any` 类型。

`any` 类型表示任意类型，`any` 类型的变量可以赋值给任意类型的变量。

```typescript
let anyValue: any = 10;
anyValue = "hello";
anyValue = true;
```

## `unknown` 类型

`unknown` 类型表示未知类型，`unknown` 类型的变量可以赋值给任意类型的变量。

```typescript
let unknownValue: unknown = 10;
unknownValue = "hello";
unknownValue = true;
```

但是 `unknown` 类型的变量不能赋值给其他类型的变量。

```typescript
let unknownValue: unknown = "Hello World";
unknownValue = 123;

console.log(unknownValue); // 123

// unknown 类型的变量不能赋值给其他类型的变量
// let str: string = unknownValue; // Error: Type 'unknown' is not assignable to type 'string'.

// unknown 类型默认情况下在上面进行任意的操作都是不允许的
// 必须进行类型的校验(缩小)后才能进行对应的操作
if (typeof unknownValue === "string") {
  console.log(unknownValue.length);
}
```

> [!WARNING]
> 和 `any` 类型有点类似，但是 `unknown` 类型的值上做任何事情都是不合法的；

## void 类型

`void` 类型表示没有任何类型，通常用于函数的返回值，表示函数没有返回值。

```typescript
function sum(nums: number[]) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  console.log(res);
}

sum([1, 2, 3]);
```

`sum` 函数没有写任何类型，那么它默认返回值的类型就是 `void` 的，也可以显示的来指定返回值是 `void`。

> [!TIP]
> 当基于上下文的类型推导（`Contextual Typing`）推导出返回类型为 `void` 的时候，并不会强制函数一定不能返回内容。

## never 类型

`never` 表示永远不会发生值的类型。

`never` 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了 `never` 本身之外）。

```typescript
// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为 never
function fail() {
  return error("Something failed");
}

// 返回 never 的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

## tuple 类型

`tuple` 类型表示一个已知元素数量和类型的数组，各元素的类型不必相同。

元组和数组的区别：

- 数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组中）

- 元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

```typescript
const info = ["jack", 18]; // 数组
const info2 = { name: "jack", age: 18 }; // 对象

const info3: [string, number] = ["jack", 18]; // 元组
```

## 枚举类型

枚举类型是为数不多的 Typescript 特性有的特性之一：

- 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
- 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

const d1: Direction = Direction.Up;
const d2: Direction = Direction.Down;
const d3: Direction = Direction.Left;
const d4: Direction = Direction.Right;
console.log(d1, d2, d3, d4); // 1 2 3 4

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Turn Up");
      break;
    case Direction.Down:
      console.log("Turn Down");
      break;
    case Direction.Left:
      console.log("Turn Left");
      break;
    case Direction.Right:
      console.log("Turn Right");
      break;
    default:
      console.log("Turn Around");
      break;
  }
}

turnDirection(Direction.Up); // Turn Up
turnDirection(Direction.Down); // Turn Down
turnDirection(Direction.Left); // Turn Left
turnDirection(Direction.Right); // Turn Right
```

### 枚举类型的值

枚举类型默认是有值的，比如上面的枚举，默认值是这样的：

```typescript
enum Direction {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right, // 4
}
```

当然也可以给枚举其它值，这个时候会从 100 进行递增

```typescript
enum Direction {
  Up = 100, // 100
  Down, // 101
  Left, // 102
  Right, // 103
}
```

也可以给他们赋值其他的类型：

```typescript
enum Direction {
  Up = 1, // 1
  Down, // 2
  Left = "left", // left
  Right = "right", // right
}
```
