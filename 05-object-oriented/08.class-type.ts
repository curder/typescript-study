// 类的类型
class Person {
  constructor(public name: string, public age: number, public height: number) {}
  eating() {
    console.log(`${this.name} is eating`);
  }
}

const p: Person = new Person("Jack", 18, 180);
console.log(p.name); // Jack
console.log(p.age); // 18
p.eating(); // Jack is eating

export {};
