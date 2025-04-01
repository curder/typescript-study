// 函数类型参数个数
// TS 对传入的函数类型的参数不进行检测
type calcType = (a: number, b: number) => number;
function calc(callback: calcType) {
  const result = callback(10, 20);
  console.log(result);
}

// 匿名函数不传递任何参数也不会报错
calc(function () {
  return 123;
});

// forEach函数接收的回调函数允许接受三个参数，可以根据需要来接收，而不必全部接收
const arr = [1, 2, 3];
arr.forEach((item) => {
  console.log(item);
});

// TS 对很多类型的检测是否报错，取决于它的内部规则

export {};
