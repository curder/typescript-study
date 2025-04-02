// 接口的实现
// 接口的实现，就是类实现接口中定义的所有属性和方法
interface ISwimmer {
  swim(): void;
}
interface IRunner {
  run(): void;
}

// 类实现接口，通过 implements 关键字来实现
class Person implements ISwimmer, IRunner {
  swim() {
    console.log("swim");
  }
  run() {
    console.log("run");
  }
}

const p = new Person();
p.swim();
p.run();

export {};
