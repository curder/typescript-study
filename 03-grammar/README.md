# Typescript 语法

TypeScript 的类型系统允许使用多种运算符，从现有类型中构建新类型。

## type 和 Interface

### [type 类型别名](02.type.ts)

使用 `type` 关键字和 `|` 符号来定义类型别名，类型别名可以是基本类型、对象类型、函数类型等。

```typescript
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

```typescript
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

  ```typescript
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

  ```typescript
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

  ```typescript
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

  ```typescript
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

```typescript
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

## [Intersection Type 交叉类型](01.intersection-type.ts)

交叉类型使用 `type` 关键字和 **`&`** 符号定义，是由两个或者多个其他类型组成的类型，表示必须是这些类型中的所有值。

交叉类型中的每一个类型被称之为交叉成员（intersection's members ）。

```typescript
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

## as 类型断言

有时候 TypeScript 无法获取具体的类型信息，这个需要使用类型断言（Type Assertions）。

比如通过 `document.getElementById` 获取 DOM 元素，TypeScript 只知道该函数会返回 HTMLElement ，但并不知道它具体的类型：

```typescript
const className = document.querySelector(".img") as HTMLImageElement;
const img = document.getElementById("img") as HTMLImageElement;
const div = document.getElementById("div") as HTMLDivElement;
const input = document.getElementById("input") as HTMLInputElement;
```

TypeScript 只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换。

比如转换成具体类型：

```typescript
const age = 18;
const age2 = age as string; // 报错，因为 string 类型不是 number 类型的子类型
```

或转换成不太具体的类型后再转换成更具体的类型（一般不推荐这样做，会导致意想不到的问题）：

```typescript
const age = 18;
const age3 = age as unknown as string; //【合法】 类型断言：将 number 类型断言为 unknown 类型，再将 unknown 类型断言为 string 类型
const age4 = age as any as string; //【合法】 类型断言：将 number 类型断言为 any 类型，再将 any 类型断言为 string 类型
```
