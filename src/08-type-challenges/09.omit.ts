// Omit
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type myTodoType = Omit<Todo, "title" | "completed">; // { description?: string | undefined; }

// 实现一个通用的MyOmit<T, K>，它接受两个类型参数T和K。
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type myTodoType2 = MyOmit<Todo, "title" | "completed">; // { description?: string | undefined; }

export {};
