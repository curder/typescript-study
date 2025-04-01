# Typescript 面向对象

## 类的定义

类的定义通常会使用 `class` 关键字，类中包含特定的属性和方法。

- 内部声明类的属性

  - 如果没有指定类型，则默认为 `any` 类型。

  - 在声明属性时，可以给属性设置初始值。

- 类的构造函数 `constructor`

  在类使用 `new` 关键字实例化时被调用，构造函数不需要返回值，默认返回当前创建的实例。

- 类的方法

  类的方法可以使用 `function` 关键字声明，也可以使用 `=>` 箭头函数声明。

```typescript
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
```

## 类的继承

类的继承使用 `extends` 关键字，子类可以继承父类的属性和方法。

- 子类可以重写父类的方法。
- 子类可以添加新的属性和方法。
- 子类可以使用 `super` 关键字调用父类的构造函数。

```typescript
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
```

## 类的修饰符

类的修饰符可以控制类的属性和方法的访问权限。

- `public`：公共的，可以在类的内部和外部访问。
- `private`：私有的，只能在类的内部访问。
- `protected`：受保护的，只能在类的内部和子类中访问。

`public` 是默认的修饰符，`private` 和 `protected` 可以在类的属性和方法前面添加。

```typescript
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
```

## 只读属性 `readonly`

只读属性 `readonly` 只能在声明时或者构造函数中赋值，不能在类的内部修改。

```typescript
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const p = new Person("lolo");
p.name = "lolo2"; // 报错，因为 name 是只读的
```

## getter 和 setter

`getter` 和 `setter` 可以控制属性的访问和修改。

- `getter`：获取属性的值。
- `setter`：设置属性的值。

```typescript
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
```

## 参数属性 Parameter Properties

参数属性是一种简化的类的属性声明的方式，它可以在类的构造函数中直接声明属性。

```typescript
class Person {
  // 类的参数属性，通过 public 关键字来声明，这样就可以在类的内部和外部都可以访问到该属性
  constructor(public name: string, public age: number, public height: number) {}
}

const p = new Person("Jack", 18, 180);
console.log(p.name); // Jack
console.log(p.age); // 18
console.log(p.height); // 180
```

在构造函数参数前添加一个可见性修饰符 `public`、`private`、`protected` 或者 `readonly` 来创建参数属性，最后这些类属性字段也会得到这些修饰符；
