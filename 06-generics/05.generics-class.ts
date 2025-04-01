// 泛型类
class Point<T = number> {
  constructor(public x: T, public y: T) {}
}

const p1 = new Point(1, 2);
const p2 = new Point("1", "2");
console.log(p1);
console.log(p2);

export {};
