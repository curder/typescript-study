// 抽象类

// 计算图形的面积
abstract class Shape {
  // 抽象方法，子类必须实现
  abstract getArea(): number;
}
// 圆形
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  // 实现抽象方法
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
// 矩形
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  // 实现抽象方法
  getArea() {
    return this.width * this.height;
  }
}
// 三角形
class Triangle extends Shape {
  constructor(public base: number, public height: number) {
    super();
  }
  // 实现抽象方法
  getArea() {
    return (this.base * this.height) / 2;
  }
}

function printArea(shape: Shape) {
  console.log(shape.getArea());
}

printArea(new Circle(10)); // 314.1592653589793
printArea(new Rectangle(10, 20)); // 200
printArea(new Triangle(10, 20)); // 100

export {};
