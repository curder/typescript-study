# Typescript 语法

TypeScript 的类型系统允许使用多种运算符，从现有类型中构建新类型。

## Union Type 联合类型

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
