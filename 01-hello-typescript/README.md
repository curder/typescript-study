# 你好 Typescript

可以把 `TypeScript` 理解成更加强大的 `JavaScript`，不仅让 `JavaScript` 更加安全，而且给它带来了诸多好用的好用特性。

## Typescirpt 特点

- 始于 `JavaScript`，归于 `JavaScript`

  - `TypeScript` 从今天数以百万计的 `JavaScript` 开发者所熟悉的语法和语义开始
  - 使用现有的 `JavaScript` 代码，包括流行的 `JavaScript` 库，并从 `JavaScript` 代码中调用 `TypeScript` 代码
  - `TypeScript` 可以编译出纯净、 简洁的 `JavaScript` 代码，并且可以运行在任何浏览器上、`Node.js` 环境中和任何支持 `ECMAScript 3`（或
    更高版本）的 JavaScript 引擎中

- `TypeScript` 是一个强大的工具，用于构建大型项目

  - 类型允许 `JavaScript` 开发者在开发 `JavaScript` 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构
  - 类型是可选的，类型推断让一些类型的注释使代码的静态验证有很大的不同。类型允许在定义软件组件之间的接口和洞察现有 `JavaScript` 库的行为

- 拥有先进的 `JavaScript`

  - `TypeScript` 提供最新的和不断发展的 `JavaScript` 特性，包括那些来自 2015 年的 `ECMAScript` 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件
  - 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的 `ECMAScript3`（或更新版本）的 `JavaScript`

## 采用 `Typescript` 的项目

- `VS Code` 目前最流行的编辑器使用 `TypeScript` 作为开发语言
- `Angular` 源码在很早就使用 TypeScript 来进行了重写，并且开发 Angular 也需要掌握 TypeScript；
- `React` 的 UI 库 `ant-design` 源码使用 `TypeScript` 进行重写
- `Vue 3` 使用 `TypeScript` 进行重写
- 小程序开发支持 `TypeScript`

`TypeScript` 真是解决了 `JavaScript` 存在的很多设计缺陷，尤其是关于类型检测的。

## `TypeScript` 编译环境

`TypeScript` 最终会被编译成 `JavaScript` 来运行，所以需要搭建对应的环境

```shell
# 安装命令
npm install typescript -g
# 或者
yarn global add typescript

# 查看版本
tsc -v
```
