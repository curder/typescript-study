// 接口继承
interface IPerson {
  name: string;
  age: number;
}

interface Animal {
  weight: number;
}

// 接口继承，通过 extends 关键字来实现
interface IStudent extends IPerson, Animal {
  // 接口继承后，还可以添加自己的属性
  score: number;
  // 接口继承后，还可以添加自己的方法
  sayHello(): void;
}

const s: IStudent = {
  name: "Jack",
  age: 18,
  weight: 180,
  score: 100,
  sayHello() {
    console.log("Hello");
  },
};

console.log(s.name); // Jack
console.log(s.age); // 18
console.log(s.weight); // 180
console.log(s.score); // 100
s.sayHello(); // Hello

export {};
