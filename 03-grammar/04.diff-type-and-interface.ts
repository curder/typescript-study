// type 和 interface 的区别
// 1. type 可以声明基本类型别名，联合类型，元组等类型
//    interface 只能声明对象类型
type name = string;
type unionType = string | number;
type tupleType = [number, number];
type functionType = (num1: number, num2: number) => number;
type objectType = {
  name: string;
  age: number;
};

// 2. 在声明对象时，interface 可以多次声明合并
interface IPoint {
  x: number;
  y: number;
}

interface IPoint {
  z: number;
}
const point: IPoint = { x: 1, y: 2, z: 3 };

// 3. interface 支持继承 extends
interface IPerson {
  name: string;
  age: number;
}
interface IStudent extends IPerson {
  grade: number;
}
const student: IStudent = {
  name: "Jack",
  age: 18,
  grade: 1,
};

// 4. interface 可以被类实现 implements
interface IAnimal {
  eat(): void;
}
class Dog implements IAnimal {
  eat() {
    console.log("dog is eating");
  }
}

export {};
