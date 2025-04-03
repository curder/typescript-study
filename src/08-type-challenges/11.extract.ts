// Extract
type Todo = "title" | "description" | "completed";
type myTodoType = Extract<Todo, "title" | "description">; // "title" | "description"

// 实现一个通用的MyExtract<T, U>，它从T中提取可以赋值给U的类型。
type MyExtract<T, U> = T extends U ? T : never;
type myTodoType2 = MyExtract<Todo, "title" | "description">; // "title" | "description"

export {};
