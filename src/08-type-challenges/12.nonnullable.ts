// NonNullable
type Todo = string | number | null | undefined;

type myTodoType = NonNullable<Todo>; // string | number

// 实现一个通用的MyNonNullable<T>，它接受一个类型T并返回一个非空类型。
type MyNonNullable<T> = T extends null | undefined? never : T;
type myTodoType2 = MyNonNullable<Todo>; // string | number


export {};
