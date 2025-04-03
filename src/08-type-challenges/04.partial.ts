// Partial

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyTodo = Partial<Todo>;

// 实现一个通用MyPartial<T>，它将T的每个属性设置为可选的。
type MyPartial<T> = {
  [K in keyof T]?: T[K]; // 映射类型
};

type MyTodo2 = MyPartial<Todo>; // { title?: string; description?: string; completed?: boolean; }
