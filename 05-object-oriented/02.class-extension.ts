// 类的继承

class Person {
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

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }
  eating() {
    super.eating();
    console.log(this.name + " is eating");
  }
}

const s = new Student("lolo", 18);
s.eating(); // lolo is eating
