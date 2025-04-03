// infer

type calcFnType = (a: number, b: number) => number;

function foo() {
  return "Hello";
}

// 推断函数的返回值类型
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;
// 推断函数的参数类型
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type calcFnReturnType = MyReturnType<calcFnType>; // number
type fooReturnType = MyReturnType<calcFnType>; // string

// type calcFnParameters = MyParameters<calcFnType>; // [a: number, b: number]
// type fooParameters = MyParameters<typeof foo>; // []

// 使用 ReturnType 获取函数的返回值类型
// type calcFnReturnType = ReturnType<calcFnType>; // number
// type fooReturnType = ReturnType<typeof foo>; // string
// 使用 Parameters 获取函数的参数类型
// type calcFnParameters = Parameters<calcFnType>; // [a: number, b: number]
// type fooParameters = Parameters<typeof foo>; // []

export {};
