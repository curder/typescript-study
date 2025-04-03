// 只读类型
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoType = Readonly<Todo>;

// 实现一个通用MyReadonly<T>，它将T的每个属性设置为只读的。
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type todoType2 = MyReadonly<Todo>; // { readonly title: string; readonly description?: string; readonly completed?: boolean; }

export {};
