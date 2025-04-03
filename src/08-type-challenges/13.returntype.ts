// ReturnType
type Todo = () => string;
type myTodoType = ReturnType<Todo>; // string

// 实现一个通用的MyReturnType<T>，它接受一个函数类型，并返回该函数的返回类型。
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
type myTodoType2 = MyReturnType<Todo>; // string

export {};
