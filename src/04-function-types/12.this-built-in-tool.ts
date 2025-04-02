// this 内置工具
function foo(this: { name: string }) {
  console.log(this);
}

// 获取函数类型
type fooType = typeof foo;

// 1. ThisParameterType, 获取 fooType 类型中的 this 的类型
type fooThisType = ThisParameterType<fooType>; // {name: string;}

// 2. OmitThisParameter, 删除 this 参数类型，剩余的函数类型
type prueFooType = OmitThisParameter<fooType>; // () => void

// 3. ThisType，用于绑定 this 上下文
interface IState {
  name: string;
  age: number;
}
interface IStore {
  state: IState;
  eating: () => void;
  running: () => void;
}
// 通过 ThisType 绑定 this 的上下文
const store: IStore & ThisType<IState> = {
  state: {
    name: "张三",
    age: 18,
  },
  eating() {
    console.log(this.name);
  },
  running() {
    console.log(this.age);
  },
};

store.eating.call(store.state);

export {};
