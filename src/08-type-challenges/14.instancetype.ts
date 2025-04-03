// InstanceType
class Todo {
  constructor(
    public title: string,
    public description?: string,
    public completed?: boolean
  ) {}
}

type myTodoType = InstanceType<typeof Todo>; // Todo

function createTodo<T extends new (...args: any) => any>(
  todo: T
): InstanceType<T> {
  return new todo();
}

const myTodoType2 = createTodo(Todo);

// 实现一个通用的MyInstanceType<T>，它返回构造函数T的实例类型。
type MyInstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;
type myTodoType3 = MyInstanceType<typeof Todo>; // Todo

export {};
