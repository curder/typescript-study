// getter 和 setter 方法
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // getter
  get name() {
    return this._name;
  }
  // setter
  set name(value: string) {
    this._name = value;
  }
}

const p = new Person("lolo");
console.log(p.name); // lolo
p.name = "lolo2";
console.log(p.name); // lolo2

export {};
