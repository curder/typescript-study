// 类是 TypeScript 的核心，使用 TypeScript 开发时，大部分代码都是写在类中

// 类的定义
class Person {
    name;

    eat() {
        console.log(`I'm eating`)
    }
}

let p1 = new Person()
p1.name = `curder`
p1.eat()


// 构造函数 constructor
class PersonConstructor {
    constructor(name: string) {
        console.log("constructor for:", name)
    }

}

new PersonConstructor("Demo")


// 类的继承 extends、super
class Employee extends Person {
    work() {
        super.eat() // 调取父类方法
        console.log("i am working from Employee class")
    }
}
let p2 = new Employee()
p2.name = "curder"
p2.eat()
p2.work()
