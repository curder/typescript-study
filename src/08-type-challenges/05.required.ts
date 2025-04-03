type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type todoType = Required<Todo>;

// 实现一个通用MyRequired<T>，它将T的每个属性设置为必选的。
type MyRequired<T> = {
  [K in keyof T]-?: T[K]; // 映射类型
};

type todoType2 = MyRequired<Todo>; // { title: string; description: string; completed: boolean; }

export {};
