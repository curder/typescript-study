# Typescript 语法

TypeScript 的类型系统允许使用多种运算符，从现有类型中构建新类型。

## type 和 Interface

### [type 类型别名](02.type.ts)

使用 `type` 关键字和 `|` 符号来定义类型别名，类型别名可以是基本类型、对象类型、函数类型等。

```ts
type pointType = { x: number; y: number; z?: number };
function printCoord(pt: pointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z) {
    console.log("The coordinate's z value is " + pt.z);
  }
}
```

### [Interface 接口](03.interface.ts)

使用 `interface` 关键字来定义接口，接口可以是基本类型、对象类型、函数类型等。

```ts
interface pointType {
  x: number;
  y: number;
  z?: number;
}
function printCoord(pt: pointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z) {
    console.log("The coordinate's z value is " + pt.z);
  }
}
```

### [type 和 interface 的区别](04.diff-type-and-interface.ts)

> [!NOTE]
>
> 1. 如果非对象类型的定义，使用 `type` 更合适；
>
> 2. 如果对象类型的定义，使用 `interface` 更合适。

- `type` 可以定义基本类型、对象类型、函数类型等，而 `interface` 只能定义对象类型。

  ```ts
  type name = string;
  type unionType = string | number;
  type tupleType = [number, number];
  type functionType = (num1: number, num2: number) => number;
  type objectType = {
    name: string;
    age: number;
  };
  ```

- `type` 可以使用 `&` 运算符来定义交叉类型
- `type` 可以使用 `|` 运算符来定义联合类型

- `interface` 可以多次声明，而 `type` 只能声明一次。

  ```ts
  interface IPoint {
    x: number;
    y: number;
  }

  interface IPoint {
    z: number;
  }
  const point: IPoint = { x: 1, y: 2, z: 3 };
  ```

- `interface` 支持继承 `extends`

  ```ts
  interface IPerson {
    name: string;
    age: number;
  }
  interface IStudent extends IPerson {
    grade: number;
  }
  const student: IStudent = {
    name: "Jack",
    age: 18,
    grade: 1,
  };
  ```

- `interface` 可以被类实现 `implements`

  ```ts
  interface IAnimal {
    eat(): void;
  }
  class Dog implements IAnimal {
    eat() {
      console.log("dog is eating");
    }
  }
  ```

## [Union Type 联合类型](01.union-type.ts)

联合类型是由两个或者多个其他类型组成的类型，表示可以是这些类型中的任何一个值；

联合类型中的每一个类型被称之为联合成员（union's members ）。

```ts
let foo: number | string = 123;

// 使用联合类型时，Typescript 会根据每个分支的类型推断出一个更精确的类型。
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

## [Intersection Type 交叉类型](05.intersection-type.ts)

交叉类型使用 `type` 关键字和 **`&`** 符号定义，是由两个或者多个其他类型组成的类型，表示必须是这些类型中的所有值。

交叉类型中的每一个类型被称之为交叉成员（intersection's members ）。

```ts
interface IPerson {
  name: string;
  age: number;
}
interface IStudent {
  study: () => void;
}
const student: IPerson & IStudent = {
  name: "John",
  age: 18,
  study: () => {
    console.log("study");
  },
};
```

交叉类型一般用于合并多个类型的属性。

## 类型断言

### [as 类型断言](06.as-type-assertion.ts)

有时候 TypeScript 无法获取具体的类型信息，这个需要使用类型断言（Type Assertions）。

比如通过 `document.getElementById` 获取 DOM 元素，TypeScript 只知道该函数会返回 HTMLElement ，但并不知道它具体的类型：

```ts
const className = document.querySelector(".img") as HTMLImageElement;
const img = document.getElementById("img") as HTMLImageElement;
const div = document.getElementById("div") as HTMLDivElement;
const input = document.getElementById("input") as HTMLInputElement;
```

TypeScript 只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换。

比如转换成具体类型：

```ts
const age = 18;
const age2 = age as string; // 报错，因为 string 类型不是 number 类型的子类型
```

或转换成不太具体的类型后再转换成更具体的类型（一般不推荐这样做，会导致意想不到的问题）：

```ts
const age = 18;
const age3 = age as unknown as string; //【合法】 类型断言：将 number 类型断言为 unknown 类型，再将 unknown 类型断言为 string 类型
const age4 = age as any as string; //【合法】 类型断言：将 number 类型断言为 any 类型，再将 any 类型断言为 string 类型
```

### [非空类型断言](07.non-null-assertion.ts)

非空类型断言（Non-null Assertion）是一种类型断言，用于告诉 TypeScript 某个值不可能为 `null` 或 `undefined` 。

```ts
interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const person: IPerson = {
  name: "John",
  age: 18,
};

// 使用可选链操作符 ?. 访问对象的属性
console.log(person.friend?.name); // undefined

// 使用非空类型断言 !. 对属性赋值（非空类型断言需要确保对象有值的情况才能使用）
person.friend!.name = "Jane";
console.log(person);
```

非空断言使用的是 `!.` ，表示可以确定某个标识符是有值的，跳过 Typescript 在编译阶段对它的检测。

## [字面量类型](08.literal-type.ts)

字面量类型是一种类型，它的值只能是一个特定的值。

```ts
const name: "zhangsan" = "zhangsan";
const age: 18 = 18;
const flag: true = true;
console.log(name, age, flag);
```

也可以将多个字面量类型联合起来，形成一个新的字面量类型。

```ts
type Direction = "left" | "right" | "top" | "bottom";
const direction: Direction = "top";
console.log(direction);
```

字面量类型的应用场景：函数的参数类型注解

```ts
type methodType = "get" | "post" | "put" | "delete" | "patch";

function request(url: string, method: methodType) {
  console.log(url, method);
}

request("/user", "post");
```

直接使用对象的方式传递参数，会报错：

```ts
const requestInfo = {
  url: "/user",
  method: "post",
};
// 报错：类型“"string"”的参数不能赋给类型“methodType”的参数。
request(requestInfo.url, requestInfo.method);
```

此时可以使用下面的解决方案：

```ts
// 方案一：requestInfo.method 进行类型断言
request(requestInfo.url, requestInfo.method as "post");

// 方案二：将 requestInfo 对象的类型定义为字面量类型
const requestInfo2: { url: string; method: "post" } = {
  url: "/user",
  method: "post",
};
request(requestInfo2.url, requestInfo2.method);

// 方案三：使用 as const 定义 requestInfo 对象
const requestInfo3 = {
  url: "/user",
  method: "post",
} as const;
request(requestInfo3.url, requestInfo3.method);
```

## 类型缩小

类型缩小是指在某些情况下，TypeScript 会根据代码的执行情况，将变量的类型缩小到更具体的类型。

常见的类型缩小方式有：

- `typeof` 常用的类型缩小方式
- `===`、`!==` 平等缩小
- `instanceof`
- `in`
- `is`

### typeof

在 TypeScript 中，检查返回的值 typeof 是一种类型保护，因为 TypeScript 对如何 typeof 操作不同的值进行编码。

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // 在这个分支中，id 的类型被收窄为 string
    console.log(id.toUpperCase());
  } else {
    // 否则在这个分支中，id 的类型被收窄为 number
    console.log(id);
  }
}
```

### `===`、`!==` 平等缩小

使用 `switch` 或者相等的一些运算符来表达相等性。

```ts
type Direction = "left" | "right" | "up" | "down";
function getDistance(direction: Direction) {
  switch (direction) {
    case "left":
      // 在这个分支中，direction 的类型被收窄为 "left"
      return 1;
    case "right":
      // 在这个分支中，direction 的类型被收窄为 "right"
      return 2;
    case "up":
      // 在这个分支中，direction 的类型被收窄为 "up"
      return 3;
    case "down":
      // 在这个分支中，direction 的类型被收窄为 "down"
      return 4;
    default:
      // 在这个分支中，direction 的类型被收窄为 never
      const _exhaustiveCheck: never = direction;
      return _exhaustiveCheck;
  }
}
```

### instanceof

使用 `instanceof` 运算符来检查对象是否属于某个类。

```ts
function printDate(date: string | Date) {
  if (date instanceof Date) {
    // 在这个分支中，date 的类型被收窄为 Date
    console.log(date.toUTCString());
  } else {
    // 否则在这个分支中，date 的类型被收窄为 string
    console.log(new Date(date).toUTCString());
  }
}
```

### in

使用 `in` 运算符来检查对象是否具有某个属性。

如果指定的属性在指定的对象或其原型链中，则 `in` 运算符返回 `true` 。

```ts
type Fish = { swim: () => void }; // 鱼
type Bird = { fly: () => void }; // 鸟
/**
 * 移动动物
 * @param animal 动物
 * @returns
 */
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // 在这个分支中，animal 的类型被收窄为 Fish
    return animal.swim();
  } else {
    // 否则在这个分支中，animal 的类型被收窄为 Bird
    return animal.fly();
  }
}

move({ fly: () => {} });
move({ swim: () => {} });
```
