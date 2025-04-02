# Typescript 模块化

Typescript 中最主要使用的模块化方案就是 ES Module，也就是所熟知的 `import`/`export` 语法。

## 非模块化 Non-Modules

JavaScript 规范声明任何没有 `export` 的 JavaScript 文件都应该被认为是一个脚本，而非一个模块。

在一个脚本文件中，变量和类型会被声明在共享的全局作用域，将多个输入文件合并成一个输出文件，或者在 HTML 使用多
个 `<script>` 标签加载这些文件。

当一个文件不存在任何 `import` / `export` 时，但是希望它是一个模块，那么可以在文件添加 `export {}` 来显式地声明它是一个模块。

这会把文件改成一个没有导出任何内容的模块，这个语法可以生效，无论你的模块目标是什么。

## 内置类型导入 Inline type imports

TypeScript 4.5 也允许单独的导入类型，需要使用 `type` 前缀 ，表明被导入的是一个类型：

```typescript
import { type IType, type IPerson } from "./utils/type";

const id: IType = 1;
const p: IPerson = {
  name: "Jack",
  age: 18,
};
console.log(id); // 1
console.log(p); // { name: 'Jack', age: 18 }
```

如果一个导入语句中都是类型导入，可以将 `type` 关键字放在导入语句的开头：

```typescript
import type { IType, IPerson } from "./utils/type";
```

这样可以让一个非 TypeScript 编译器比如 `Babel`、`swc` 或 `esbuild` 知道什么样的导入可以被安全移除。

## 命名空间 namespace

ES 模块标准之前出现，TypeScript 有它自己的模块格式，名为 `namespaces`。

命名空间在 Typescript 早期时，称之为内部模块，目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题。

虽然命名空间没有被废弃，但是由于 ES 模块已经拥有了命名空间的大部分特性，因此更推荐使用 ES 模块，这样才能与
JavaScript 的发展方向保持一致。

```typescript
export namespace price {
  export function format(price: number) {
    return `$${price.toFixed(2)}`;
  }
}

export namespace date {
  export function format(date: Date) {
    return date.toLocaleDateString();
  }
}
```

## 类型查找

在使用 Typescript 编写项目时，除了可以自己定义类型外，还会用到一些其它类型：

```typescript
const imageElement = document.getElementById("image") as HTMLImageElement;
```

在 Typescript 中，可以使用 `.d.ts` 文件来声明类型，称之为类型声明(Type Declaration) 或类型定义(Type Definition)。

Typescript 会自动查找类型声明文件，它们包括：

- 内置类型声明
- 外部定义类型声明
- 自定义类型声明

### 内置类型声明

内置类型声明是 Typescript 内置了 JavaScript 运行时的一些标准化 API 的声明文件。

比如 `Function`、`String`、`Math`、`Date` 等内置类型；

也包括运行环境中的 DOM API，比如 `Window`、`Document` 等；

Typescript 会自动查找内置类型声明文件，不需要手动引入。

它的 GitHub 仓库地址：[microsoft/TypeScript](https://github.com/microsoft/TypeScript/tree/main/src/lib)
