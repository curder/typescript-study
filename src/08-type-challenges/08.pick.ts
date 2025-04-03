// Pick
type Todo = {
  title: string;
  description?: string;
  completed?: boolean;
};

type myTodoType = Pick<Todo, "title" | "completed">; // { title: string; completed?: boolean; }

// 实现一个通用的MyPick<T, K>，它接受两个类型参数T和K。
// K指定应从T中选取的属性集。
// 当没有传入K时，它就和普通的Pick<T, K>一样。
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type myTodoType2 = MyPick<Todo, "title" | "completed">; // { title: string; completed?: boolean; }

export {};
