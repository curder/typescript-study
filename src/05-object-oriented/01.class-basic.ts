// 类的定义
class Person {
  // 声明成员属性
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " is eating");
  }
}

const p = new Person("lolo", 18);
console.log(p.name, p.age); // lolo 18

export {};
