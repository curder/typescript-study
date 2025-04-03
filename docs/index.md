---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "学习 Typescript"
  text: ""
  tagline: "TypeScript 通过类型系统增强 JavaScript 的可维护性和可扩展性，适用于大型项目开发，同时兼容 ECMAScript 标准。"
  actions:
    - theme: alt
      text: 现在开始
      link: /hello-typescript/

features:
  - title: 静态类型检查
    details: 允许显式声明变量、函数参数和返回值的类型，在编译阶段捕获类型错误，提升代码健壮性。

  - title: 类型推断
    details: 自动推断未显式标注类型的变量或表达式的类型，减少冗余代码，同时保持类型安全。

  - title: 接口（Interfaces）
    details: 定义对象、函数或类的结构约束，支持代码抽象和协作开发，确保数据符合预期格式。

  - title: 联合类型与交叉类型
    details: 联合类型（A | B）表示值可以是多种类型之一；交叉类型（A & B）合并多个类型的属性，增强灵活性。

  - title: 泛型（Generics）
    details: 创建可复用的组件，支持类型参数化（如 Array<T>），避免重复代码并保持类型逻辑一致。

  - title: 枚举（Enums）
    details: 定义具名常量集合（如 `enum Color { Red, Green }`），提升代码可读性和可维护性。

  - title: 类型别名（Type Aliases）
    details: 通过 type 关键字创建自定义类型名称（如 `type UserID = string | number`），简化复杂类型的复用和表达。

  - title: 模块与命名空间
    details: 模块（import/export）管理代码依赖；命名空间（namespace）组织内部代码，避免全局污染。
---
