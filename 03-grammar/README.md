# Typescript 语法

TypeScript 的类型系统允许使用多种运算符，从现有类型中构建新类型。

## [type 类型别名](02.type.ts)

使用 `type` 关键字来定义类型别名，类型别名可以是基本类型、对象类型、函数类型等。

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

## [Interface 接口](03.interface.ts)

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

## [type 和 interface 的区别](04.diff-type-and-interface.ts)

> [!NOTE]
>
> **请注意**
> 如果非对象类型的定义，使用 `type` 更合适；
> 如果对象类型的定义，使用 `interface` 更合适。

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
