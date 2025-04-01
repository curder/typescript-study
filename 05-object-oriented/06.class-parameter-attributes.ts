// 类的参数属性

class Person {
  // 类的参数属性，通过 public 关键字来声明，这样就可以在类的内部和外部都可以访问到该属性
  constructor(public name: string, public age: number, public height: number) {}
}

const p = new Person("Jack", 18, 180);
console.log(p.name); // Jack
console.log(p.age); // 18

export {};
