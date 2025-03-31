// 声明标识符时，如果在其进行赋值时没有指定类型，Typescript 会自动推断类型

// let 进行推导时推导出来的是通用类型
let message = "Hello Typescript";

// const 进行推导时推导出来的是字面量类型
// 字面量类型是指在代码中直接使用的值，例如字符串、数字、布尔值等
// 字面量类型可以用来限制变量的值只能是某个特定的值，例如只能是字符串 "hello"、数字 1、布尔值 true 等
// 字面量类型可以用来提高代码的可读性和可维护性
const height = 1.88;

console.log(message, height);

export {};
