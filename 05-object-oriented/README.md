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
