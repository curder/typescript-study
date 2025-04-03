// Record
type keys = "processing" | "pending" | "done";
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoTypes = Record<keys, Todo>; // { processing: Todo; pending: Todo; done: Todo; }

// 实现一个通用MyRecord<K extends keyof any, T>，它接受key的集合K和一个类型T，并返回一个对应于对象类型的类型，其中K中的键是T类型。
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};
type todoTypes2 = MyRecord<keys, Todo>; // { processing: Todo; pending: Todo; done: Todo; }

export {};
