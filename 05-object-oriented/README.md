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
