// 只读属性
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const p = new Person("lolo");
// p.name = "lolo2"; // 报错，因为 name 是只读的
