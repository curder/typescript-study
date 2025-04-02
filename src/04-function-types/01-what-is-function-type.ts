// 什么是函数类型？
// 函数类型是一种特殊的类型，它表示一个函数的类型，包括函数的参数类型和返回值类型

// 格式：(参数列表) => 返回值类型
// 例如：(a: number, b: number) => number
type addType = (a: number, b: number) => number;
const add: addType = (a: number, b: number): number => {
  return a + b;
};

// 函数类型的应用
// 1. 计算
type calcType = (a: number, b: number) => number;
function calc(callback) {
  const result = callback(10, 20);
  console.log(result);
}
function sum(a: number, b: number): number {
  return a + b;
}
function mul(a: number, b: number): number {
  return a * b;
}
calc(sum); // 30
calc(mul); // 200
calc(function (a: number, b: number): number {
  return a - b;
}); // -10

export {};
