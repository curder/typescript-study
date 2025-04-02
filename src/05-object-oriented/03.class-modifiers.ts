// 类的修饰符

class Person {
  // 声明成员属性
  name: string;
  private age: number;
  protected height: number;

  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  private eating() {
    console.log(this.name + " is eating");
  }
}

const p = new Person("lolo", 18, 180);
console.log(p.name); // lolo
// console.log(p.age); // 报错，因为 age 是 private 的
// console.log(p.height); // 报错，因为 height 是 protected 的
// console.log(p.eating()); // 报错，因为 eating 是 private 的

export {};
