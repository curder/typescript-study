// Exclude
type Todo = "title" | "description" | "completed";
type myTodoType = Exclude<Todo, "title" | "description">; // "completed"

// 实现一个通用的MyExclude<T, U>，它从T中排除可以赋值给U的类型。
type MyExclude<T, U> = T extends U ? never : T;

type myTodoType2 = MyExclude<Todo, "title" | "description">; // "completed"

export {};
